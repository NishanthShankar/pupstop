import { useState, useEffect } from 'react'
import heroImage from 'assets/hero_image_01.png'
import acIcon from 'assets/air-conditioning.png'

const data = [
  { icon: acIcon, text: 'Day & overnight boarding' },
  { icon: acIcon, text: 'Pick-up & drop service' },
  { icon: acIcon, text: 'Activity & play hours' }
]

export default props => {
  const [dataIndex, setDataIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex(index => (index + 1) % 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <article
        className='flex'
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <article>
          <span style={{ fontSize: 32, fontWeight: 'bold' }}>
            TRUSTED PET CARE
          </span>
          <span style={{ fontSize: 32, fontWeight: 'bold' }}>
            OF YOUR NEIGHBORHOOD
          </span>
          <article className='row' style={{ alignItems: 'center' }}>
            <img
              src={data[dataIndex]?.icon?.src}
              style={{ width: 48, height: 48, margin: 32 }}
            />
            <span style={{ fontSize: 18 }}>{data[dataIndex]?.text}</span>
          </article>
          <article style={{ height: 54, backgroundColor: '#5d53de' }}></article>
        </article>
      </article>
      <img
        src={heroImage.src}
        style={{ width: '45vw', height: 'fit-content' }}
      />
    </>
  )
}
