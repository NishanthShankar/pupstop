import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import logo from '../../assets/logo.jpg'
const options = [
  { text: 'Services', href: '#services' },
  { text: 'About Us', href: '#about-us' },
  { text: 'Facilities', href: '#facilities' },
  { text: 'Locate Us', href: '#locate-us' },
  { text: 'FAQs', href: '#faq' }
]

export default function Header (props) {
  const router = useRouter()

  const handleClick = href => e => {
    e.preventDefault()
    router.push(href)
  }

  const height = 72
  return (
    <header
      style={{
        padding: '0px 18px',
        display: 'flex',
        backgroundColor: 'white',
        zIndex: 2,

        position: 'fixed',
        left: 0,
        right: 0
      }}
    >
      <article className='row flex a-center'>
        <Image src={logo} width={height * 1.26} height={height} />
        <article className='flex' />
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

          <article className={`a-center j-center ${styles.cta}`}>
            <a href='#book'>Book Now</a>
          </article>
        </article>
      </article>
    </header>
  )
}
