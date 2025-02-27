import projectOne from '../../assets/project-1.png'
import projectTwo from '../../assets/project-2.png'
import projectThree from '../../assets/project-3.png'

const projectsData = {
  1: {
    title: 'Web Portfolio',
    image: projectOne,
    description: (
      <>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
          pariatur cumque voluptas alias eaque totam nobis quisquam harum
          consequatur quos odio porro corporis, accusantium fugit aspernatur
          expedita amet, sapiente dolore.
        </p>
      </>
    ),
    github: 'https://github.com/Jae-Kae/react-portfolio',
    demo: '',
  },
  2: {
    title: 'Fitfolio',
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
          pariatur cumque voluptas alias eaque totam nobis quisquam harum
          consequatur quos odio porro corporis, accusantium fugit aspernatur
          expedita amet, sapiente dolore.
        </p>
      </>
    ),
    github: 'https://github.com/Jae-Kae/fitfolio-frontend',
    demo: 'https://fitfolioapp.netlify.app/login',
  },
  3: {
    title: 'Links To Locs',
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
          pariatur cumque voluptas alias eaque totam nobis quisquam harum
          consequatur quos odio porro corporis, accusantium fugit aspernatur
          expedita amet, sapiente dolore.
        </p>
      </>
    ),
    github: 'https://github.com/Jae-Kae/',
    demo: 'https://www.linkstolocs.com/',
  },
}

export default projectsData
