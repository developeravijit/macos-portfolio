import WindowControls from "#components/WindowControls";
import windowWrapper from "#hoc/windowWrapper.jsx";
import useWindowStore from "#store/window";

export const ImageContent = ({ windowKey }) => {
  const { windows } = useWindowStore();
  const data = windows[windowKey]?.data;

  if (!data) return null;

  const { name, imageUrl, image } = data;
  const src = imageUrl || image || null;

  return (
    <div className="image-file-window">
      <div id="window-header" className="sticky top-0 z-10 bg-white flex items-center justify-between px-4 py-3">
        <WindowControls target={windowKey} />
        <h2 className="text-sm text-gray-500 truncate max-w-[80%]">{name}</h2>
      </div>

      <div className="image-file-content p-4 flex justify-center items-center">
        {src ? (
          <img src={src} alt={name} className="max-w-full max-h-[70vh] rounded-md shadow" />
        ) : (
          <p className="text-gray-500">No image available.</p>
        )}
      </div>
    </div>
  );
};

const ImageWindow = windowWrapper(ImageContent, "imgfile");
export default ImageWindow;
