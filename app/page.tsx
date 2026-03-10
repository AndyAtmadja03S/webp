'use client';

import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HeroPage from "./pages/HeroPage"
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroPage/ >
      <AboutPage/>
      <ProjectPage/ >
      <SkillsPage />
      <ContactPage />
    </div>
  );
}
