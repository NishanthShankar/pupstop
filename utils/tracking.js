const TrackEvent = ({ category, label, value }) => {
  try {
    const data = {}
    if (category) data.event_category = category
    if (label) data.event_label = label
    if (value) data.value = value
    gtag('event', 'CLICK', data)
    console.log('>>>GA<<<<', data)
  } catch (error) {}
}

export default TrackEvent
