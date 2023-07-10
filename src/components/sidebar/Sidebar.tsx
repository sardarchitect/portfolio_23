import Skills from "../resume/Skills";
import Information from "./Information";
import Profile from "./Profile";
import Contributions from "./Contributions";

export default function Sidebar() {
    return (
      <div className="space-y-5 md:col-start-1 md:col-end-2">
        <Profile />
        <Information />
        <Skills />
        <Contributions />
      </div>
    )
  }