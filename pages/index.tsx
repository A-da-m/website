import {
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const qualifications = ['Passion for Technology and People', 'Communications Skills', 'Listening Skills', 'Software & Programming', 'Fast Learner', 'Customer Service', 'Detail Oriented', 'Self-motivated']
const skills = ['TypeScript/JavaScript', 'ReactJS', 'CSS/SCSS', 'React Native', 'Electron',  'PostgresSQL/MySQL', 'Ionic Framework/CapacitorJS', 'Golang']
const projects = [{
	name: 'Tailosive Website',
	time: '2019-2020',
	description: 'Links to all the Tailosive Network Twitter, YouTube, and Twitch accounts.',
	link: 'https://tailosive.com'
}, {
	name: 'Points',
	time: '2018-Present',
	description: 'Points is a next generation, simple, and clean discord points bot.',
	link: 'https://points.city'
}]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>a-da-m.me</title>
				<meta name='title' content='a-da-m.me' />
				<meta
					name='description'
					content='Making websites & applications with you in mind.'
				/>
				<meta name='theme-color' content='#000000' />

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://a-da-m.me' />
				<meta property='og:title' content='a-da-m.me' />
				<meta
					property='og:description'
					content='Making websites & applications with you in mind.'
				/>
				<meta property='og:image' content='/banner.png' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://a-da-m.me' />
				<meta property='twitter:title' content='a-da-m.me' />
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
              <h3>Adam</h3>
              <div className={styles.icons}>
                <a href='https://twitter.com/_A_D__A_M_'>
                  <FontAwesomeIcon icon={faTwitter}  />
                </a>
                <a href='https://github.com/A-da-m'>
                  <FontAwesomeIcon icon={faGithub}  />
                </a>
              </div>
            </div>
            <div className={styles.titles}>
              <h1>Hi there,</h1>
              <h5>
                I'm a college student seeking a
                <br />
                career in Computer Science,
                <br />
                more specifically web
                <br />
                development.
              </h5>
            </div>
            <a href={'/#story'} className={styles.learnMore}>
              <FontAwesomeIcon icon={faChevronDown} width='15px' /> Learn More
            </a>
          </div>
        </div>

        <div className={styles.story} id={'story'}>
          <h3>About Me</h3>
          <p>
						I'm a 19-year-old developer. My focus is web development, but I do have app development and system-level experience in programming.
          </p>
					<br />
					<h4>My Development Philosophy</h4>
					<p>When making a product, my first focus is the user experience and interface because nobody wants to use a horribly designed product. Reliability and privacy are also high priorities to make any great product.</p>
        </div>

				<div className={styles.skills}>
					<h3>My Skills</h3>
					<div className={styles.list}>
						{skills.map((skill, index) => <div key={index} className={styles.skill}>{skill}</div>)}
					</div>
				</div>

				<div className={styles.qualifications}>
					<h3>My Qualifications</h3>
					<div className={styles.list}>
						{qualifications.map((qualification, index) => <div key={index} className={styles.qualification}>{qualification}</div>)}
					</div>
				</div>

				<div className={styles.projects}>
					<h3>My Projects</h3>
					<div className={styles.list}>
						{projects.map((project, index) => (
							<div key={index} className={styles.project}>
								<small>{project.time}</small>
								<h4>{project.name}</h4>
								<p>{project.description}</p>
								<a href={project.link}>View Website <FontAwesomeIcon icon={faChevronRight} /></a>
							</div>
						))}
					</div>
				</div>

				<div className={styles.contact}>
					<h3>Interested? Reach out to me!</h3>
					<p>I'm available most weekdays, so feel free to send me an email at <a href={'mailto:adam@a-da-m.me'}>adam@a-da-m.me</a></p>
				</div>
      </main>
    </div>
  )
}
