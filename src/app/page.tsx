import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Information from "@/components/Information";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="p-10 bg-gradient-to-bl from-purple-950 to-teal-600">
      <div className="grid m-auto justify-center md:grid-cols-3 md:gap-5 max-w-screen-lg">
        <div className="space-y-5 md:col-start-1 md:col-end-2">
          <Profile />
          <Information />
          <Skills />
        </div>
        <div className="space-y-5 md:col-start-2 md:col-end-4">
          <AboutMe />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  )
}