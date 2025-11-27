import WindowControls from "#components/WindowControls";
import { locations } from "#constants";
import windowWrapper from "#hoc/windowWrapper";
import clsx from "clsx";
import { Search } from "lucide-react";
import useLocationStore from "#store/location";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const renderList = (title, items) => (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              "finder-item",
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header" className="finder-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="finder-wrapper">
        {/* LEFT SIDEBAR */}
        <div className="finder-sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="finder-content">
          {activeLocation?.children?.map((item) => (
            <div key={item.id} className="finder-item">
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const FinderWindow = windowWrapper(Finder, "finder");
export default FinderWindow;
