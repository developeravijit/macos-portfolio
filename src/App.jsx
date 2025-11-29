import { useEffect, useState } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Background, Dock, Home, Navbar, Welcome } from "#components";
import LoadingScreen from "#components/Loading.jsx";

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
  const [loading, setLoading] = useState(true);
  const windows = useWindowStore((s) => s.windows);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      {loading && <LoadingScreen />}
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
