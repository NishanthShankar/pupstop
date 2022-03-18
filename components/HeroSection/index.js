import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import heroImage from 'assets/hero_image_01.png'
import consultation from 'assets/consultation.png'
import party from 'assets/party.png'
import car from 'assets/garage.png'
import styles from './index.module.css'
import boneIcon from 'assets/boneCTA.png'

const data = [
  { icon: consultation, text: 'Day & overnight boarding' },
  { icon: car, text: 'Pick-up & drop service' },
  { icon: party, text: 'Activity & play hours' }
]

export default function HeroSection (props) {
  const router = useRouter()
  const [dataIndex, setDataIndex] = useState(0)

  const handleClick = e => {
    e.preventDefault()
    router.push('#book')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex(index => (index + 1) % 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className='flexBox row'
      style={{
        flexWrap: 'wrap',
        minHeight: '60vh',
        justifyContent: 'flex-end'
      }}
    >
      <article
        className='flex'
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          paddingBottom: 0
        }}
      >
        <article>
          <h1 style={{ fontSize: 32, fontWeight: 'bold' }}>
            TRUSTED PET CARE <br />
            OF YOUR NEIGHBORHOOD
          </h1>
          <article className='row' style={{ alignItems: 'center' }}>
            <img
              src={data[dataIndex]?.icon?.src}
              style={{ width: 72, height: 72, margin: 32 }}
            />
            <span style={{ fontSize: 24, fontWeight: 800 }}>
              {data[dataIndex]?.text}
            </span>
          </article>
          {/* <article style={{ height: 54, backgroundColor: '#5d53de' }}></article> */}
          <img
            onClick={handleClick}
            className={styles.ctaImage}
            src={boneIcon.src}
            // style={{ height: 125, width: 'fit-content' }}
          />
        </article>
      </article>
      <article>
        <img
          src={heroImage.src}
          style={{ minWidth: 350, width: '45vw', height: 'fit-content' }}
        />
      </article>
    </section>
  )
}
