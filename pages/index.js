import Head from "next/head";
import Image from "next/image";
import { Fascinate, Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";


//className={Inter.className}
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [certificates, setCertificates] = useState(false);



  useEffect(() => {
    if (resume) {
      const resumeElement = document.querySelector(`.${styles.resume}`);
      resumeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (projects){
      const resumeElement = document.querySelector(`.${styles.projects}`);
      resumeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (certificates){
      const resumeElement = document.querySelector(`.${styles.certificates}`);
      resumeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [resume, projects, certificates]);

  let openUp = (event) => {
    if(event.target.innerText === "View Resume"){
      if(projects || certificates){
        setCertificates(false);
        setProjects(false);
      }
      setResume(!resume);
    } else if(event.target.innerText === "View Projects"){
      if(resume || certificates){
        setCertificates(false);
        setResume(false);
      }
      setProjects(!projects);
    } else if(event.target.innerText === "View Certificates"){
      if(resume || projects){
        setProjects(false);
        setResume(false);
      }
      setCertificates(!certificates);
    }
    console.log(event.target.innerHTML)
  };

  let closeWindow = () => {
    setResume(false);
    setProjects(false);
    setCertificates(false);
  };

  return (
    
    <section className={styles.main}>
      <Head>
        <title>Full Stack Developer</title>
        <meta name="description" content="My Resume and profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.navigation}>
        <section className={styles.firstBox} onClick={openUp}>
          <h1>View Resume</h1>
        </section>
        <section className={styles.firstBox} onClick={openUp}>
          <h1>View Projects</h1>
        </section>
        <section className={styles.firstBox} onClick={openUp}>
          <h1>View Certificates</h1>
        </section>
      </nav>
      <section className={styles.body}>
        <>
          {resume && (
            <section className={styles.resume}>
              <button className={styles.closeButtonResume} onClick={closeWindow}>X</button>
              <Image
                className={styles.resumeImage}
                src="/resume.jpg"
                alt="A picture of my resume showing my skills education and Work Experience."
                width={375}
                height={110}
              />
            </section>
          )}
          {projects && (
            <section className={styles.projects}>
              <button className={styles.closeButtonProject} onClick={closeWindow}>&times;</button>
              <section>
                <ul className={styles.projectList}>
                  <li className={styles.projectListItems}>Pomodoro:<iframe className={styles.iframePomodoroSite} src="https://pomodoro-jade-seven.vercel.app/" border="0"></iframe></li>
                  <li className={styles.projectListItems}>Calculator:<iframe className={styles.iframeCalculatorSite} src="https://calculator-murex-psi.vercel.app/" border="0"></iframe></li>
                </ul>
              </section>
            </section>
          )}
          {certificates && (
            <section className={styles.certificates}>
              <button className={styles.closeButton} onClick={closeWindow}>&times;</button>
              <h1>Hii There again.. working...., for a list of current certificates please visit Linked in @ https://www.linkedin.com/in/jesus-tello/</h1>
            </section>
          )}
        </>
        <Image
          className={styles.image}
          src="/smile.jpg"
          alt="A description of the image"
          width={200}
          height={200}
        />
        <h1 className={styles.heading}>Welcome to my profile</h1>
        <p className={styles.introParagraph}>
          I am a Full Stack MERN Developer with a passion for staying current
          with emerging technologies. My expertise lies in JavaScript, and I
          have a strong focus on utilizing Docker containers to aid in my
          learning and development process. I am available for hire to assist
          with any and all of your online development needs. Please take a
          moment to review my portfolio, projects and resume as linked above to
          see my qualifications and past work.
        </p>
      </section>
    </section>
  );
}
