import windowWrapper from "#hoc/windowWrapper.jsx";
import useWindowStore from "#store/window";
import { TextContent } from "#windows/Text.jsx";
import { ImageContent } from "#windows/Image.jsx";
import Resume from "#windows/Resume.jsx";   // <-- import your resume window

const WrappedText = windowWrapper(TextContent, "txtfile");
const WrappedImage = windowWrapper(ImageContent, "imgfile");
const WrappedResume = windowWrapper(Resume, "resume");  // <-- wrap resume

const WindowsManager = () => {
  const windows = useWindowStore((s) => s.windows);

  return (
    <>
      {Object.keys(windows)
        .filter(
          (k) =>
            k.startsWith("txtfile") ||
            k.startsWith("imgfile") ||
            k.startsWith("resume")        // <-- add this
        )
        .map((key) => {
          if (key.startsWith("txtfile"))
            return <WrappedText key={key} windowKey={key} />;
          if (key.startsWith("imgfile"))
            return <WrappedImage key={key} windowKey={key} />;
          if (key.startsWith("resume"))
            return <WrappedResume key={key} windowKey={key} />;  // <-- add this

          return null;
        })}
    </>
  );
};

export default WindowsManager;
