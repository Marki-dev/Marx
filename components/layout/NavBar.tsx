import { FaQuestion } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function NavBar() {
  return (
    <div className="absolute top-3 right-3 flex gap-3 bg-background-1 p-1.5 rounded-full">
      <div className="rounded-full h-full w-full bg-background-2 p-3 text-xl">
        <FaQuestion />
      </div>
      <div className="rounded-full h-full w-full bg-background-2 p-3 text-xl">
        <FaGithub />
      </div>
    </div>
  )
}