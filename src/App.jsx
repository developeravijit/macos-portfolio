import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import { Background, Dock, Home, Navbar, Welcome } from "#components";
import {
  Contact,
  Finder,
  Galary,
  Resume,
  Safari,
  Terminal,
  WindowsManager,
} from "#windows";
import windowWrapper from "#hoc/windowWrapper.jsx";
import useWindowStore from "#store/window";
import { TextContent } from "#windows/Text.jsx";
import { ImageContent } from "#windows/Image.jsx";

const WrappedText = windowWrapper(TextContent);
const WrappedImage = windowWrapper(ImageContent);
function App() {
  const windows = useWindowStore((s) => s.windows);

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
      <WindowsManager />
      <Contact />
      <Galary />

      <Home />
    </main>
  );
}

export default App;
