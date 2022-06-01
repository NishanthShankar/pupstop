import { useState } from 'react'
import Select from 'react-select'
import { serviceOptions, selectStyles, petOptions } from 'data/data'

export default function LeadForm (props) {
  const [days, setDays] = useState(1)
  return (
    <article
      style={{
        height: 240,
        width: 240,
        backgroundColor: 'transparent'
      }}
    >
      <span>Your pet</span>
      <Select options={petOptions} styles={selectStyles} />
      <span style={{ marginTop: 12 }}>Service</span>
      <Select options={serviceOptions} styles={selectStyles} />
      <span style={{ marginTop: 12 }}>No of days: {days} </span>
      <input
        id='slider'
        type='range'
        min='1'
        max='30'
        defaultValue={1}
        onChange={e => setDays(e.target.value)}
      />
      <article className='flex' style={{ minHeight: 32 }} />
      <article
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 36,
          borderRadius: 12,
          backgroundColor: '#ec6336'
        }}
      >
        <span style={{ fontSize: 14, color: 'white' }}>GET QUOTE</span>
      </article>
    </article>
  )
}
