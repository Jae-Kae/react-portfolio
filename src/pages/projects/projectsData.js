import projectOne from '../../assets/Fitfolio-app.png'
import projectTwo from '../../assets/web-portfolio-project.png'
import projectThree from '../../assets/LinksToLocs.png'

const projectsData = {
  1: {
    title: 'Fitfolio',
    image: projectOne,
    description: (
      <>
        <p>
          FitFolio is a MERN-stack workout tracking app I built to help users
          log and track their exercise progress. It allows users to record their
          workouts, including reps, sets, and exercises, providing an intuitive
          way to monitor fitness goals over time. With React on the frontend,
          Node.js and Express on the backend, and MongoDB for data storage,
          FitFolio offers a seamless and responsive experience. Designed for
          efficiency and ease of use, it helps users stay consistent and
          motivated on their fitness journey.
        </p>
      </>
    ),
    github: 'https://github.com/Jae-Kae/fitfolio-frontend',
    demo: 'https://fitfolioapp.netlify.app/',
  },
  2: {
    title: 'Web Portfolio',
    image: projectTwo,
    description: (
      <>
        <p>
          My web portfolio is a showcase of my work as a frontend developer.
          Built with React and styled using vanilla CSS, it highlights my
          ability to create dynamic and user-friendly interfaces. Deployed on
          Netlify, it features my past projects, technical skills, and a glimpse
          into my creative journey, blending my passion for tech and design.
        </p>
      </>
    ),
    github: 'https://github.com/Jae-Kae/react-portfolio',
    demo: '',
  },
  3: {
    title: 'Links To Locs',
    image: projectThree,
    description: (
      <>
        <p>
          The Links to Locs website is built on WordPress, utilizing custom
          themes and PHP functions to tailor the platform for Black hair care
          resources in Ottawa. The site features a directory of Black
          hairdressers, salon listings, and user-submitted recommendations. I
          customized the theme using PHP snippets for enhanced functionality,
          such as dynamic search filters, custom post types for hairstylists,
          and an interactive booking system. By leveraging Advanced Custom
          Fields (ACF) and custom WordPress hooks, the site provides a seamless
          user experience while maintaining a professional and community-focused
          aesthetic.
        </p>
      </>
    ),
    github: 'https://www.linkstolocs.com/',
    demo: 'https://www.linkstolocs.com/',
  },
}

export default projectsData
