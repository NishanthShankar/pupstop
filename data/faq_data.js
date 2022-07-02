import TrackEvent from 'utils/tracking'
const FAQRows = [
  {
    title: 'How much should I pay to board my dog?',
    content: `If you are looking for home boarding, typically Rs 500-800 per day is the range. Professional Pet Boarding companies like <a href="http://www.pupstop.in">Pupstop</a>, offer services like fully air conditioned facilities, 24*7 supervision, thrice a day meals, walks,  daily updates, pick up and drop, vet on call options at rates starting at Rs. 850 per day`
  },
  {
    title: 'Where can I leave my dog when I go on vacation?',
    content:
      'Professional Pet Boarding companies are a good option since they manage your pets stay including meals, walks, hygiene, etc. <a href="http://www.pupstop.in">Pupstop</a> offers additional services such as AC centers, 24*7 caretakers, pickup drop services, etc '
  },
  {
    title: 'How long can I board my dog?',
    content: `There is no upper limit to the stay duration. We accepts boarding requirements ranging from 1 day upto months at a go.`
  },
  {
    title: 'Why pet owners prefer booking Pupstop in Mumbai ?',
    content: `Providing professional pet boarding services for over 6 years, <a href="http://www.pupstop.in">Pupstop</a> excels in taking the best care and providing the most comfortable stay for your pet at the most budget friendly rates.`
  },
  {
    title: 'At what age is it appropriate to board your puppy?',
    content: `Once the complete vaccination cycle is done, it is safe to board your puppy outside. Typically a 4 month puppy is ready to stay at a boarding facility. `
  },
  {
    title: 'Where can I leave my dog on vacation in Mumbai?',
    content: `For a few hours, it may range from 500 to 800. Overnight boarding ranges from 700 to 1400`
  },
  {
    title: 'Where can I leave my dog when I go on vacation?',
    content: `In Mumbai, there are multiple pet boarding centres offering different service levels. <a href="http://www.pupstop.in">Pupstop</a> also offers pickup and drop services and is recommended by over 2500+ satisfied customers all over Mumbai`
  },
  {
    title: 'How much do pet sitters charge in India?',
    content:
      'Depending on the region, typically home boarding ranges between Rs500-800/ day.  Professional Pet Care companies like <a href="http://www.pupstop.in">Pupstop</a>, offer services like fully air conditioned facilities, 24*7 supervision, thrice a day meals, walks,  daily updates, pick up and drop, vet on call options at rates starting at Rs. 850 per day'
  }
]

const Track = ({ title, content }) => {
  const onClick = () => {
    TrackEvent({
      category: 'FAQ',
      value: title,
      label: title
    })
  }
  return <div onClick={onClick}>{title}</div>
}

export const TrackFAQ = {
  title: 'Frequently Asked Questions',
  rows: FAQRows.map(row => ({
    title: <Track title={row.title} />,
    content: row.content
  }))
}

export default {
  title: 'Frequently Asked Questions',
  rows: FAQRows
}
