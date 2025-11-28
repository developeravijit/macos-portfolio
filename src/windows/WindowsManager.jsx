import windowWrapper from "#hoc/windowWrapper.jsx";
import useWindowStore from "#store/window";
import { TextContent } from "#windows/Text.jsx";
import { ImageContent } from "#windows/Image.jsx";

const WrappedText = windowWrapper(TextContent);
const WrappedImage = windowWrapper(ImageContent);

const WindowsManager = () => {
  const windows = useWindowStore((s) => s.windows);

  return (
    <>
      {Object.keys(windows)
        .filter((k) => k.startsWith("txtfile") || k.startsWith("imgfile"))
        .map((key) => {
          if (key.startsWith("txtfile")) return <WrappedText key={key} windowKey={key} />;
          if (key.startsWith("imgfile")) return <WrappedImage key={key} windowKey={key} />;
          return null;
        })}
    </>
  );
};

export default WindowsManager;
