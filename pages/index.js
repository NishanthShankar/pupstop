import Head from 'next/head'
import Faq from 'react-faq-component'

import styles from '../styles/Home.module.css'
import InfoItem from 'components/InfoItem'
import LeadForm from 'components/LeadForm'
import HeroSection from 'components/HeroSection'
import Header from 'components/Header'
import faqData from 'data/faq_data.js'
import acIcon from 'assets/air-conditioning.png'
import cctvIcon from 'assets/cctv-camera.png'
import downloadIcon from 'assets/download.png'
import carIcon from 'assets/garage.png'
import cabinIcon from 'assets/incognito.png'
import emergencyIcon from 'assets/emergency-call.png'
import videoIcon from 'assets/video-camera.png'
import callIcon from 'assets/phone-call.png'
import ballIcon from 'assets/fitness-ball.png'
import partyIcon from 'assets/party.png'
import facebook from 'assets/facebook.png'
import instagram from 'assets/instagram.png'
import location from 'assets/location.png'
import { benefits } from './data'
// import featureBlob6 from 'assets/feature_blob_6.svg'
// import featureBlob6 from 'assets/feature_blob_6.svg'

const faqStyles = {
  bgColor: 'transparent'
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const blobStyles = {
  egg: {
    position: 'absolute',
    left: 40,
    right: 0,
    bottom: 0,
    top: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shell: {
    position: 'absolute',
    left: 40,
    right: 0,
    bottom: 0,
    top: 28,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const BlobFeature = props => {
  return (
    <article
      style={{
        position: 'relative',
        minWidth: 250,
        width: '20%',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 48,
        marginBottom: 48
      }}
    >
      <h3 style={{ fontSize: 20, textAlign: 'center', marginBottom: 24 }}>
        {props.title}
      </h3>
      <img src={props.image?.src} />
      <article style={blobStyles[props.type]}>
        <span>{props.description}</span>
      </article>
    </article>
  )
}

const SmallFeatureItem = props => (
  <article
    className='row'
    style={{ alignItems: 'center', marginRight: 24, marginBottom: 12 }}
  >
    <article
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        height: 44,
        width: 44,
        overflow: 'hidden',
        borderRadius: 999,
        backgroundColor: 'white',
        border: '2px solid #c5cfd8'
      }}
    >
      <img src={props.icon?.src} style={{ width: 24, height: 24 }} />
    </article>
    <span>{props.label}</span>
  </article>
)

export default function Home () {
  const title =
    'Trusted pet daycare & boarding center near me, Mumbai | Pupstop'
  const description =
    'Best dog & cat boarding center for short & long term in Mumbai. Services: Daycare, Overnight boarding, 24x7 Vet, Dog sitting & Pet parties. Board your pet at Pupstop when on a holiday!'
  return (
    <article className='flexBox'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <HeroSection />
        <section
          id='services'
          className={`flexBox flex ${styles.section}`}
          style={{ maxWidth: 1300 }}
        >
          <h2 className={styles.title}>One Stop for your pet needs</h2>
          <article
            className='row'
            style={{
              alignSelf: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {benefits.map(benefit => (
              <BlobFeature
                type='egg'
                image={benefit.icon}
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </article>
        </section>
        <section id='about-us' className={`flexBox ${styles.section}`}>
          <span className={styles.title}>
            What people have to tell about us
          </span>
        </section>
        <section id='book' className={`flexBox ${styles.section}`}>
          <article
            className='row'
            style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <article
              style={{ flex: 1, justifyContent: 'space-around', minWidth: 276 }}
            >
              <h2 style={{ marginBottom: 54, fontSize: 44, marginRight: 44 }}>
                How can we pamper your pet today?
              </h2>
            </article>
            <LeadForm />
          </article>
        </section>
        <section id='facilities' className={`flexBox ${styles.section}`}>
          <h2 className={styles.title}>We take pet care very seriously</h2>
          <article
            className='row'
            style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <article className='row flex' style={{ justifyContent: 'center' }}>
              <article>
                <SmallFeatureItem label='Air Conditioning' icon={acIcon} />
                <SmallFeatureItem label='24x7 CCTV' icon={cctvIcon} />
                <SmallFeatureItem label='Daily Updates' icon={downloadIcon} />
                <SmallFeatureItem label='Private Cabins' icon={cabinIcon} />
              </article>
              <article>
                <SmallFeatureItem label='Pick up & Drop' icon={carIcon} />
                <SmallFeatureItem label='On Call Vet' icon={emergencyIcon} />
                <SmallFeatureItem label='Video Callings' icon={videoIcon} />
              </article>
            </article>
            <article
              style={{ height: 240, width: 240, backgroundColor: 'gray' }}
            />
          </article>
        </section>
        <section id='locate-us' className={`flexBox ${styles.section}`}>
          <h2 className={styles.title}>The best choice for your Pooch</h2>
          <article
            className='row'
            style={{ alignItems: 'center', flexWrap: 'wrap' }}
          >
            <article
              style={{
                flex: 1,
                minWidth: 276,
                justifyContent: 'space-around',
                marginRight: 48
              }}
            >
              <InfoItem
                icon={ballIcon}
                heading='FROM 8 AM TO 10 PM'
                description='Timings are drop off after 8am and collection is before 10am on the morning of going home.'
              />
              <InfoItem
                icon={partyIcon}
                heading='FAVORITES'
                description='If your dog has separation anxiety we encourage you to bring something that smells like home.'
              />
              <InfoItem
                icon={callIcon}
                heading='CONTACT US ON'
                description='axc@gfh.com | 9999999999'
              />
            </article>
            <img
              src={location.src}
              style={{ height: 320, width: 320, backgroundColor: 'gray' }}
            />
          </article>
        </section>
        <section id='faq' className={`flexBox ${styles.section}`}>
          <Faq data={faqData} styles={faqStyles} />
        </section>
      </main>

      <footer className={styles.footer}>
        <article>
          <span>Follow #Pupstop : a pet boarding centre</span>
          <article className='row'>
            <img
              onClick={() => {
                window.location = 'https://www.facebook.com/pupstopmumbai/'
              }}
              src={facebook.src}
              style={{
                cursor: 'pointer',
                margin: 12,
                height: 32,
                width: 32
              }}
            />
            <img
              onClick={() => {
                window.location = 'https://www.instagram.com/pupstopmumbai/'
              }}
              src={instagram.src}
              style={{
                cursor: 'pointer',
                margin: 12,
                height: 32,
                width: 32
              }}
            />
          </article>
          <span>Working hours</span>
          <span>All days - 8:00 am to 10:00 pm</span>
        </article>

        <article>
          <span>Address</span>
          <span>Wadala truck terminal Gala no 14</span>
          <span>Plot C1, shram shakti society</span>
          <span>Mumbai, Maharashtra</span>
          <span>400037</span>
        </article>
      </footer>
    </article>
  )
}
