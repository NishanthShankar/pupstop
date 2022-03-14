export default () => {
  return (
    <div class='wrap'>
      <input
        type='range'
        class='range'
        min='0'
        max='100'
        step='0.1'
        value='0'
      />
      <div class='track'>
        <div class='track-inner' />
      </div>
      <div class='thumb'>4</div>
    </div>
  )
}
