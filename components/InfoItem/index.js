export default function InfoItem (props) {
  const canCall = props.type === 'call'
  return (
    <article
      className='row'
      style={{ margin: '18px 0px', cursor: canCall ? 'pointer' : 'auto' }}
      onClick={() => {
        if (canCall) {
          window.open('tel:+91900370303', '_blank')
        }
      }}
    >
      <img
        src={props.icon?.src}
        style={{
          height: 32,
          width: 32,
          marginRight: 24
        }}
      />
      <article>
        <span style={{ fontSize: 18, fontWeight: 'bold' }}>
          {props.heading}
        </span>
        <span style={{ marginTop: 8, fotSize: 14 }}>{props.description}</span>
      </article>
    </article>
  )
}
