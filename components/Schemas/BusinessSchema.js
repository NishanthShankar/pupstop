import Head from 'next/head'
const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'J 2 Wadala Truck Terminal, Wadala',
    addressRegion: 'Mumbai',
    streetAddress: 'Shop No.3 & 4 Ground Floor Shramseva premises CHS Ltd'
  },
  description:
    'Best dog & cat boarding center for short & long term in Mumbai. Services: Daycare, Overnight boarding, 24x7 Vet, Dog sitting & Pet parties. Board your pet at Pupstop when on a holiday!',
  name: 'Pupstop | Trusted pet daycare & boarding center',
  telephone: '+91-9987511279',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.761293,
    longitude: -73.982294
  },
  url: 'https://pupstop.in',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '127'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Sunday',
      opens: '08:00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Saturday',
      opens: '08:00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Thursday',
      opens: '08:00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Tuesday',
      opens: '08:00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Friday',
      opens: '08:00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Monday',
      opens: '08:00:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      closes: '22:00:00',
      dayOfWeek: 'https://schema.org/Wednesday',
      opens: '08:00:00'
    }
  ]
}

const BusinessSchema = () => {
  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      ></script>
    </Head>
  )
}

export default BusinessSchema
