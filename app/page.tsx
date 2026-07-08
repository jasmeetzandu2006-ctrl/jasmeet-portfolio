import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 
        The Scrollytelling Section:
        Provides the 500vh scrollable area.
        Includes the sticky Canvas and the floating text Overlays.
      */}
      <div className="relative h-[500vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Tools section */}
      <Tools />

      {/* The Projects Grid follows after the scroll animation is complete */}
      <Projects />
    </main>
  );
}
