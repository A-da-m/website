import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

const qualifications = [
  'Passion for Technology and People',
  'Communications Skills',
  'Listening Skills',
  'Software & Programming',
  'Fast Learner',
  'Customer Service',
  'Detail Oriented',
  'Self-motivated'
]
const skills = [
  'TypeScript/JavaScript',
  'ReactJS',
  'CSS/SCSS',
  'React Native',
  'Electron',
  'PostgresSQL/MySQL',
  'Ionic Framework/CapacitorJS',
  'Golang'
]
const projects = [
  {
    name: 'Tailosive Website',
    time: '2019-2020',
    description:
      'Links to all the Tailosive Network Twitter, YouTube, and Twitch accounts.',
    link: 'https://tailosive.com'
  },
  {
    name: 'Points',
    time: '2018-Present',
    description:
      'Points is a next generation, simple, and clean discord points bot.',
    link: 'https://points.city'
  }
]

export default function Honors() {
  return (
    <div className={styles.container}>
      <Head>
        <title>adamabbas.dev</title>
        <meta name='title' content='adamabbas.dev' />
        <meta
          name='description'
          content='Making websites & applications with you in mind.'
        />
        <meta name='theme-color' content='#000000' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://adamabbas.dev' />
        <meta property='og:title' content='adamabbas.dev' />
        <meta
          property='og:description'
          content='Making websites & applications with you in mind.'
        />
        <meta property='og:image' content='/banner.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://adamabbas.dev' />
        <meta property='twitter:title' content='adamabbas.dev' />
        <meta
          property='twitter:description'
          content='Making websites & applications with you in mind.'
        />
        <meta property='twitter:image' content='/banner.png' />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.navbar}>
              <h3>Adam Abbas</h3>
            </div>
            <div className={styles.titles}>
              <h1>Hello, I'm Adam</h1>
              <h5>
                I'm a Minnesota State University,
                <br />
                Mankato student pursing a Computer
                <br />
                Information Technology, BS.
              </h5>
            </div>
            <a href={'/#story'} className={styles.learnMore}>
              <FontAwesomeIcon icon={faChevronDown} width='15px' /> Learn More
            </a>
          </div>
        </div>

        <div className={styles.story} id={'story'}>
          <h3>My Mission Statement</h3>
          <p>Coming Soon</p>
        </div>
      </main>
    </div>
  )
}
