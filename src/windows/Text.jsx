import WindowControls from "#components/WindowControls";
import windowWrapper from "#hoc/windowWrapper.jsx";
import useWindowStore from "#store/window";

export const TextContent = ({ windowKey }) => {
  const { windows } = useWindowStore();
  const data = windows[windowKey]?.data;

  if (!data) return null;

  const { name, image, imageUrl, subtitle, description } = data;
  const imgSrc = image || imageUrl || null;

  return (
    <div className="text-file-window">
      <div
        id="window-header"
        className="sticky top-0 z-10 bg-white flex items-center justify-between px-4 py-3"
      >
        <WindowControls target={windowKey} />
        <h2 className="text-sm text-gray-500 truncate max-w-[60%]">{name}</h2>
      </div>

      <div className="text-file-content px-4 pb-4">
        <div className="max-h-[60vh] overflow-auto">
          <div className="flex flex-col gap-6">
            {imgSrc && (
              <div className="w-30 h-30 md:w-48 md:h-48 shrink-0 m-auto overflow-hidden rounded-full">
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            <div className="flex-1 space-y-3">
              {subtitle && (
                <h3 className="text-lg font-medium text-gray-700">
                  {subtitle}
                </h3>
              )}

              {description && Array.isArray(description) ? (
                <div className="space-y-3 text-gray-700 leading-7">
                  {description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No content available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// default wrapped export for single-instance usage
const TextWindow = windowWrapper(TextContent, "txtfile");
export default TextWindow;
