'use client';

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HeroPage from "./pages/HeroPage"
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage/ >
      <AboutPage/>
      <ProjectPage/ >
      <SkillsPage />
      <ContactPage />
    </div>
  );
}
