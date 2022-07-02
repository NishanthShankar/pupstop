import Head from 'next/head'
import faqData from 'data/faq_data.js'

const FAQSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: []
  }
  faqData.rows.forEach(q =>
    schema.mainEntity.push({
      '@type': 'Question',
      name: q.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.content
      }
    })
  )

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

export default FAQSchema
