import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Information from "@/components/Information";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="absolute top-0 left-0 h-full w-full p-10 bg-gradient-to-t from-gray-50 to-gray-100">
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        <div className="flex-row space-y-2 md:col-start-1 md:col-end-2 col-auto">
          <Profile />
          <Information />
          <Skills />
        </div>
        <div className="flex-row space-y-2 md:col-start-2 md:col-end-4 col-auto">
          <AboutMe />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </main>
  )
}