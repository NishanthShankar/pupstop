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
import location from 'assets/location.jpg'
import { benefits } from 'data/data'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
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
    left: 0,
    right: 0,
    bottom: 20,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  },
  shell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 40,
    justifyContent: 'center',
    marginLeft: 20,
    color: '#fff'
  }
}

const BlobFeature = props => {
  return (
    <article
      style={{
        position: 'relative',
        width: 270,
        height: 220,
        marginLeft: 12,
        marginRight: 12
      }}
    >
      <img src={props.image?.src} />
      <article style={blobStyles[props.type]}>
        <span style={{ fontWeight: 600, fontSize: 20 }}>{props.title}</span>
        <span styl>{props.description}</span>
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
        minHeight: 44,
        minWidth: 44,
        overflow: 'hidden',
        borderRadius: 999,
        backgroundColor: 'white',
        border: '2px solid #01C4C6'
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
          style={{ maxWidth: '100vw' }}
        >
          <h2 className={styles.title}>
            One stop for all
            <br /> your Pet needs
          </h2>
          <article
            className='row'
            style={{
              alignSelf: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '70vw'
            }}
          >
            {benefits.map(benefit => (
              <BlobFeature
                type={benefit.type}
                image={benefit.icon}
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </article>
        </section>
        <section
          id='about-us'
          className={`flexBox ${styles.section}`}
          style={{ alignItems: 'center' }}
        >
          <span className={styles.title}>
            What people have to tell about us
          </span>
          <Carousel
            showStatus={false}
            showThumbs={false}
            className={styles.no_xs}
          >
            <iframe
              width='720'
              height='405'
              src='https://www.youtube.com/embed/_5XCigBt66Q'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />

            <iframe
              width='720'
              height='405'
              src='https://www.youtube.com/embed/AeSkeHHAPIk?modestbranding=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <iframe
              width='720'
              height='405'
              src='https://www.youtube.com/embed/L_HQcawDEF8'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Carousel>

          <iframe
            className={styles.xs_only}
            style={{ marginBottom: 36 }}
            width='100%'
            height='220'
            src='https://www.youtube.com/embed/_5XCigBt66Q?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'
            title='YouTube video player'
            frameBorder='0'
            allowFullScreen
          />

          <iframe
            className={styles.xs_only}
            style={{ marginBottom: 36 }}
            width='100%'
            height='220'
            src='https://www.youtube.com/embed/AeSkeHHAPIk'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
          <iframe
            className={styles.xs_only}
            width='100%'
            height='220'
            src='https://www.youtube.com/embed/L_HQcawDEF8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </section>
        <section id='book' className={`flexBox ${styles.section}`}>
          <article className={styles.xs_only} style={{ alignItems: 'center' }}>
            <article style={{ flex: 1 }}>
              <h2 style={{ fontSize: 44 }}>
                How can we <br />
                pamper your <br />
                pet today?
              </h2>
            </article>
            <LeadForm />
          </article>
          <article className={`row ${styles.no_xs}`}>
            <article style={{ flex: 1 }}>
              <h2 style={{ fontSize: 44 }}>
                How can we <br />
                pamper your <br />
                pet today?
              </h2>
            </article>
            <LeadForm />
          </article>
        </section>

        <section id='facilities' className={`flexBox ${styles.section}`}>
          <h2 className={styles.title}>We take Pet Care very seriously</h2>
          <article
            className='row'
            style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <article className='row flex' style={{ justifyContent: 'center' }}>
              <article>
                <SmallFeatureItem label='Air Conditioning' icon={acIcon} />
                <SmallFeatureItem label='24x7 CCTV' icon={cctvIcon} />
                <SmallFeatureItem label='Daily Updates' icon={downloadIcon} />
              </article>
              <article>
                <SmallFeatureItem label='Pick up & Drop' icon={carIcon} />
                <SmallFeatureItem label='On Call Vet' icon={emergencyIcon} />
                <SmallFeatureItem label='Private Cabins' icon={cabinIcon} />
              </article>
            </article>
            {/* <article
              style={{ height: 240, width: 240, backgroundColor: 'gray' }}
            /> */}
          </article>
        </section>
        <section id='locate-us' className={`flexBox ${styles.section}`}>
          <h2 className={styles.title}>The Best Choice for your Pooch</h2>
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
                heading='From 8 AM to 10 PM'
                description='Facility is open for visit from 8am to 10pm'
              />
              <InfoItem
                icon={partyIcon}
                heading='Favorites'
                description='If your dog has separation anxiety we encourage you to bring something that smells like home.'
              />
              <InfoItem
                type='call'
                icon={callIcon}
                heading='Contact us'
                description='+91-9987511279'
              />
            </article>
            <img
              onClick={() =>
                window.open('https://g.page/Pupstop?share', '_blank')
              }
              src={location.src}
              style={{ cursor: 'pointer', width: '82vw', maxWidth: 400 }}
            />
          </article>
        </section>
        <section id='faq' className={`flexBox ${styles.section}`}>
          <Faq data={faqData} styles={faqStyles} />
        </section>
      </main>

      <footer className={styles.footer}>
        <article>
          <span>Follow #Pupstop : A Pet Boarding Centre</span>
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
          <span>All days - 8:00 am to 10:00 pm</span>
          <div style={{ height: 12 }} />
        </article>

        <article>
          <span style={{ fontWeight: 'bold' }}>Address</span>
          <span>Shop No.3 & 4 Ground Floor</span>
          <span>Shramseva premises CHS Ltd</span>
          <span>J 2 Wadala Truck Terminal, Wadala</span>
          <span>Mumbai 400037</span>
        </article>
      </footer>
    </article>
  )
}
