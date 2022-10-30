import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title , description}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
         {description}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Checkout my Projects created with engaging website designs with responsive UI and various Animations which works in real time. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MY Personal Projects
          </div>
        <a href="https://celadon-alfajores-65137c.netlify.app/">  <Project title="Project 1" description="CryptoTracker is a crypto currency dashboard built using react js. The website serves as a platform to view all details of top 100 cryptocurrencies in the world and allows them to
search ,filter, compare and view details of specific cryptocurrencies. You can also view the data in various filters that is by the number of days, and see variations in prices, market cap and volume during the time period chosen. The project is fully responsive and works in real time. "/></a>
          <a href="https://frolicking-beignet-bee566.netlify.app/" > <Project title="Project 2" description="Admin Dashboard report viewers a unified view of the organization's content creation and consumption patterns. built using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build
this entire application. This application consists of Light and Dark Mode, 4 different Charts, 3 different
Data Table Pages, FAQ Page, Form Page, and Calendar Integration." /></a>

          {/* ROW 2 */}
         <a href="https://vocal-paprenjak-95b5c7.netlify.app/"> <Project title="Project 3"  description="Fetching Marvel hero's ,using marvel developer API and fetching data from API and displaying in cards, and
navigating to another page for more information and details regarding Marvel Heros using React Router Dom"/></a>
         <a href=""> <Project title="Project 4" /></a>
         <a href=""> <Project title="Project 5" /></a>

          {/* ROW 3 */}
         {/* <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;