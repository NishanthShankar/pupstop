import { useRouter } from 'next/router'
import styles from './index.module.css'

const options = [
  { text: 'Services', href: '#services' },
  { text: 'About Us', href: '#about-us' },
  { text: 'Facilities', href: '#facilities' },
  { text: 'Locate Us', href: '#locate-us' },
  { text: 'FAQs', href: '#faq' }
]

export default props => {
  const router = useRouter()

  const handleClick = href => e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <header
      style={{
        padding: '0px 18px',
        display: 'flex',
        backgroundColor: '#f7f9fa',
        zIndex: 2,
        height: 56,
        position: 'fixed',
        left: 0,
        right: 0
      }}
    >
      <article className='row flex a-center'>
        <article className='flex'>
          <img style={{ height: 32, width: 96, backgroundColor: 'gray' }} />
        </article>
        <article className='row a-center'>
          {options.map(option => (
            <a
              onClick={handleClick(option.href)}
              key={option.text}
              className={styles.atag}
            >
              {option.text}
            </a>
          ))}

          <article
            onClick={handleClick('book')}
            className={`a-center j-center ${styles.cta}`}
          >
            Book Now
          </article>
        </article>
      </article>
    </header>
  )
}
