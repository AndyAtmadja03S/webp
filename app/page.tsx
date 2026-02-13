'use client';

import NavBar from "./components/navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HeroPage from "./pages/HeroPage"
import SkillsPage from "./pages/SkillsPage";
import WorkPage from "./pages/WorkPage";

export default function Home() {
  return (
    <div>
      <NavBar>

      </NavBar>
      <HeroPage></HeroPage>
      <AboutPage/>
      <WorkPage></WorkPage>
      <SkillsPage></SkillsPage>
      <ContactPage></ContactPage>

    </div>
  );
}
