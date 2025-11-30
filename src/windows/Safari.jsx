import WindowControls from "#components/WindowControls.jsx";
import { blogPosts } from "#constants";
import windowWrapper from "#hoc/windowWrapper.jsx";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plug,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = ({ windowKey }) => {
  return (
    <div className="safari-window">
      <div id="window-header">
        <WindowControls target={windowKey} />

        <PanelLeft className="icon ml-8" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex items-center gap-3 ml-5">
          <ShieldHalf className="icon" />

          <div className="safari-search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or Enter Website Name"
              className="safari-input"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Share className="icon" />
          <Plug className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="safari-body">
        <h2 className="safari-title">My Developer Blog</h2>

        <div className="safari-posts">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="safari-post">
              <img src={image} alt={title} className="safari-post-img" />

              <div className="safari-post-content">
                <p className="safari-post-date">{date}</p>
                <h3 className="safari-post-title">{title}</h3>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="safari-post-link"
                >
                  Checkout the full post
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SafariWindow = windowWrapper(Safari, "safari");
export default SafariWindow;
