import Head from 'next/head'
import { benefits } from 'data/data'

const ServicesSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: benefits.map(b => b.title),
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    name: 'Services'
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
