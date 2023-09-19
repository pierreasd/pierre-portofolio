import Head from "next/head";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pierre Ibrahim | Developer</title>
        <meta name="description" content="Generated by next app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
