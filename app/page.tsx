import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="flex justify-center bg-black overflow-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-h-7xl w-full ">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
          className="string"
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

// Page uses acelentry UI, Tailwind CSS, React, Typescript
