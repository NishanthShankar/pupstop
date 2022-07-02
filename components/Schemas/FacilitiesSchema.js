import Head from 'next/head'

const facilities = [
  'Air Conditioning',
  '24x7 CCTV',
  'Daily Updates',
  'Pick up & Drop',
  'On Call Vet',
  'Private Cabins'
]

const ServicesSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: facilities,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    name: 'Facilities'
  }

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

export default ServicesSchema
