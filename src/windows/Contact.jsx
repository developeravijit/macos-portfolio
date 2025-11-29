import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
import windowWrapper from "#hoc/windowWrapper";

const Contact = () => {
  return (
    <div className="contact-window bg-white rounded-xl overflow-hidden shadow-lg w-[340px] sm:w-[420px]">
      <div
        id="window-header"
        className="flex items-center justify-between px-4 py-3 border-b bg-gray-50"
      >
        <WindowControls target="contact" />
        <h2 className="text-sm font-medium text-gray-600">Contact Me</h2>
      </div>

      <div className="p-6 flex flex-col items-center text-center space-y-5">
        <img
          src="images/avijit.png"
          alt="Avijit"
          className="w-24 h-24 rounded-full object-cover shadow"
        />

        <h3 className="text-lg font-semibold text-gray-700">Let’s Connect</h3>

        <p className="text-gray-600 leading-relaxed">
          I'm Avijit Roy. You can reach me anytime.
        </p>

        <p className="text-gray-800 font-medium">roysidharth1996@gmail.com</p>

        <ul className="w-full flex flex-col gap-3 mt-3">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              className="rounded-lg hover:opacity-90 transition"
              style={{ backgroundColor: bg }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3"
              >
                <img src={icon} alt={text} className="w-6 h-6" />
                <p className="font-medium text-white">{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ContactWindow = windowWrapper(Contact, "contact");
export default ContactWindow;
