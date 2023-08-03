import { faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hero from '../components/Hero'

const experience = [
  {
    name: 'Evidently',
    time: '2022 - Present',
    description:
      'Working as a frontend developer, creating and maintaining the Evidently app.',
    link: 'https://evidently.com'
  },
  {
    name: 'Innatical',
    time: '2020 - Present',
    description:
      "Founded Innatical, a software development company focused on creating innovative and unique products.",
    link: 'https://innatical.com'
  },
  {
    name: 'Tailosive Media',
    time: '2019 - 2020',
    description:
      'Worked as a full-stack developer, creating and maintaining the Tailosive website and backend systems.',
    link: 'https://tailosive.com'
  },
  {
    name: 'Points',
    time: '2018 - Present',
    description:
      'Founded Points, built the backend and frontend systems, and maintained the bot.',
    link: 'https://points.bot'
  },
]

const skills = [
  {
    name: 'Frontend Development',
    categories: [
      {
        name: 'Languages',
        skills: [
          'TypeScript/JavaScript',
          'HTML',
          'CSS/SCSS',
        ],
      },
      {
        name: "Frameworks",
        skills: [
          'ReactJS',
          'NextJS',
        ],
      },
      {
        name: 'Styling',
        skills: [
          'TailwindCSS',
          'SCSS',
          'Styled Components',
          'MUI',
        ],
      },
      {
        name: "State Management",
        skills: [
          'Redux',
          'MobX',
          'Jotai',
          'Zustand',
        ],
      },
      {
        name: "Routing",
        skills: [
          'React Router',
          'TanStack Router'
        ]
      }
    ]
  },
  {
    name: 'Backend Development',
    categories: [
      {
        name: 'Languages',
        skills: [
          'TypeScript/JavaScript',
          'Golang',
          'Python'
        ],
      },
      {
        name: 'Frameworks',
        skills: [
          'ExpressJS',
          'Fastify',
          'Gin',
          'GoFiber',
          'Flask',
          'FastAPI',
        ],
      },
      {
        name: 'Databases',
        skills: [
          'PostgresSQL',
          'MySQL',
          'MongoDB',
          'Redis',
        ],
      },
    ]
  },
  {
    name: 'Mobile Development',
    categories: [
      {
        name: 'Languages',
        skills: [
          'TypeScript/JavaScript',
          'Swift',
        ]
      },
      {
        name: 'Frameworks',
        skills: [
          'React Native',
          'Ionic Framework',
          'CapacitorJS',
          'Expo',
          'SwiftUI',
        ]
      }
    ],
  },
  {
    name: 'Other',
    categories: [
      {
        name: 'Tools',
        skills: [
          'Git',
          'Docker',
          'JetBrains IDEs',
          'VSCode',
          'Figma',
          'Sketch',
        ],
      }
    ]
  }
]

const Home = () => {
  return (
    <main>
      <Hero />
      <div id="story" className="bg-[#0F120E] text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">About Me</h3>
            <p className="text-lg mb-12">
              As a 21-year-old developer, I am deeply engrossed in the realm of
              web development, although I've also ventured into app creation and
              system-level programming. I love to experiment and innovate,
              constantly pushing myself to learn and adapt in this fast-paced
              industry.
            </p>
            <h4 className="text-2xl font-bold mb-4">My Development Philosophy</h4>
            <p className="text-lg mb-6">
              Creating a product is about more than just writing code - it's about
              designing experiences. My priority is to build with the user in
              mind, ensuring a seamless interface and positive interactions. I
              value reliability in my work and respect for user privacy, believing
              these to be the cornerstone of any great product.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0F120E] text-white py-16 border-t-4 border-black">
        <div className="container mx-auto px-4 md:px-8">
          <div >
            <h3 className="text-3xl font-bold mb-4">My Knowledge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div className="">
                  <h4 className="text-2xl font-bold mb-4">{skill.name}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {skill.categories.map((cat) => (
                      <div className="">
                        <h5 className="text-xl font-bold mb-2">{cat.name}</h5>
                        <ul className="list-disc list-inside">
                          {cat.skills.map((skill) => (
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <p className="text-sm">{skill}</p>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-bold mb-6">My Experince</h3>
          <div>
            {experience.map((exp, index) => (
              <div key={index} className="p-4  bg-[#0F120E] rounded-2xl mb-4 hover:shadow-lg transition-all">
                <small className="text-gray-400 uppercase">
                  {exp.time}
                  </small>
                <h4 className='font-bold'>{exp.name}</h4>
                <p className='mb-2'>{exp.description}</p>
                <a href={exp.link} className='text-green-400 hover:text-green-500'>
                  View Website <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-green-700 to-green-900 text-white py-16'>
        <div className="container mx-auto px-4 md:px-8">
          <h3>Interested? Reach out to me!</h3>
          <p>
            I'm available most weekdays, so feel free to send me an email at{' '}
            <a href={'mailto:adam@adamabbas.dev'} className='font-bold'>adam@adamabbas.dev</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home