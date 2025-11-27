import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import { Background, Dock, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal } from "#windows";
function App() {
  return (
    <main>
      <Background />
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  );
}

export default App;
