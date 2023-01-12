import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

//className={Inter.className}
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(false);

  let openResume = () => {
    setShow(true);
  };
  let closeResume = () => {
    setShow(false);
  };

  return (
    <main className={styles.main}>
      <Head>
        <title>Full Stack Developer</title>
        <meta name="description" content="My Resume and profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.navigation}>
        <section className={styles.firstBox} onClick={openResume}>
          <h1>View Resume</h1>
        </section>
        <section className={styles.firstBox} onClick={openResume}>
          <h1>View Projects</h1>
        </section>
        <section className={styles.firstBox} onClick={openResume}>
          <h1>View Certificates</h1>
        </section>
      </nav>
      <body className={styles.body}>
        <>
          {show && (
            <section className={styles.resume}>
              <span onClick={closeResume}>&times;</span>
              <h1>Hii There</h1>
            </section>
          )}
        </>
        <Image className={styles.image}
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
      </body>
    </main>
  );
}
