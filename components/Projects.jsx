import '../styles/projects.css'
import GithubButton from './button';

const cardsData = [
  {
    title: 'Blogatron',
    description:
      'Blogatron is a dynamic and modern blogging web application that allows users to read, write, and comment on blog posts. It features user authentication and a responsive UI with a theme toggle for light and dark modes.',
    image: 'darkHomepage.png',
    githubLink: 'https://github.com/Abhay-The-Dev-007/Blogatron',
    tech: 'Nodejs, Expressjs, EJS, HTML, MongoDB, JWT, Bootstrap',
  },
  {
    title: 'Penny Path',
    description:
      'Penny Path is a full-stack MERN application designed to help users track expenses, manage incomes, and visualize their financial journey. It offers user authentication, insightful financial charts, and interactive dashboards to monitor, analyze, and export your transactions.',
    image: '',
    githubLink: 'https://github.com/Abhay-The-Dev-007/Penny-Path',
    tech: 'React (Vite), Axios, Chart.js/Recharts, TailwindCSS, Node.js, Express.js, MongoDB, JWT, bcrypt,
  },
  {
    title: 'IMAGE vision',
    description:
      'IMAGE vision is a React-based web application that leverages Gemini AI for analyzing images. The app allows users to upload images, input custom prompts, and get detailed analysis of the image content using AI.',
    image: 'analysis.png',
    githubLink: 'https://github.com/Abhay-The-Dev-007/IMAGE-vision',
    tech: 'Reactjs, CSS, Gemini API',
  },
  {
    title: 'Echoverse',
    description:
      'EchoVerse is a simple responsive and clean lyrics finder web app built using React. It allows users to search for song lyrics by entering the artist name and song title.',
    image: 'result.png',
    githubLink: 'https://github.com/Abhay-The-Dev-007/EchoVerse',
    tech: 'Reactjs, ReactDOM, CSS',
  },
  {
    title: 'Quick Eats',
    description:
      'Quick Eats is a sleek and modern homepage UI for a food delivery web application. Built using only HTML and CSS, it features a fully responsive design.',
    image: 'ss0.png',
    githubLink: 'https://github.com/Abhay-The-Dev-007/Quick-Eats',
    tech: 'HTML, CSS',
  },
];

const Projects = () => {
  return (

      <div className="card2">
        {cardsData.map((data, index) => (
          <div className="card2-section" key={index}>
            <div className="summary">
              <span>{data.title}</span>
            </div>
            <div className="details">
              <img src={data.image} alt={data.title} />
              <p className='desc'>{data.description}</p>
              <p className="tech">
                <strong>Tech:</strong> {data.tech}
              </p>
              <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
                <GithubButton/>
              </a>
            </div>
          </div>
        ))}
      </div>

  );
};

export default Projects;

  
