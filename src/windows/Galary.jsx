import WindowControls from "#components/WindowControls";
import windowWrapper from "#hoc/windowWrapper";
import { photosLinks, gallery } from "#constants";
import { Search } from "lucide-react";
import useWindowStore from "#store/window";

const Gallery = () => {
  const { openWindow } = useWindowStore();

  const openImage = (imgObj) => {
    openWindow("imgfile", {
      name: `Image-${imgObj.id}`,
      imageUrl: imgObj.img,
    });
  };

  return (
    <div className="gallery-window">
      <div id="window-header">
        <WindowControls target="photos" />
        <Search className="icon" />
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-sidebar">
          <h3>My Albums</h3>
          <ul>
            {photosLinks.map((item) => (
              <li key={item.id} className="gallery-item">
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="gallery-content">
          {gallery.map((img) => (
            <div
              key={img.id}
              className={`gallery-photo ${img.position}`}
              onClick={() => openImage(img)}
            >
              <img src={img.img} alt={`Photo-${img.id}`} />
              <p className="gallery-label">Photo {img.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryWindow = windowWrapper(Gallery, "photos");
export default GalleryWindow;
