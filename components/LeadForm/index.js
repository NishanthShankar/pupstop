import { useState, useRef } from 'react'
import Select from 'react-select'
import { serviceOptions, selectStyles, petOptions } from 'data/data'
import TrackEvent from 'utils/tracking'
export default function LeadForm (props) {
  const pet = useRef(null)
  const service = useRef(null)
  const [days, setDays] = useState(1)

  const onClick = () => {
    let text = 'Hi, I would like to use your service'
    if (service.current) text += ` ${service.current}`
    if (pet.current) text += ` for my ${pet.current}`
    else text += ' for my pet'
    text += ` for ${days} day${days > 2 ? 's' : ''}`
    TrackEvent({ category: 'Lead_quote' })
    window.open(
      `https://wa.me/919987511279?text=${encodeURIComponent(text)}`,
      '_blank'
    )
  }

  return (
    <article
      style={{
        height: 240,
        width: 240,
        backgroundColor: 'transparent'
      }}
    >
      <span>Your pet</span>
      <Select
        options={petOptions}
        styles={selectStyles}
        onChange={e => {
          TrackEvent({ category: 'Lead_yourpet', label: e.value })
          pet.current = e.value
        }}
      />
      <span style={{ marginTop: 12 }}>Service</span>
      <Select
        options={serviceOptions}
        styles={selectStyles}
        onChange={e => {
          TrackEvent({ category: 'Lead_service', label: e.value })
          service.current = e.value
        }}
      />
      <span style={{ marginTop: 12 }}>No of days: {days} </span>
      <input
        id='slider'
        type='range'
        min='1'
        max='30'
        defaultValue={1}
        onChange={e => {
          setDays(e.target.value)
          TrackEvent({ category: 'Lead_days', label: e.target.value })
        }}
      />
      <article className='flex' style={{ minHeight: 32 }} />
      <article
        onClick={onClick}
        style={{
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 36,
          borderRadius: 12,
          backgroundColor: '#01C4C6'
        }}
      >
        <span style={{ fontSize: 14, color: 'white' }}>GET QUOTE</span>
      </article>
    </article>
  )
}

// old color #ec6336
