import { sideLinks } from "@/app/game/_sideLinksConfig";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <div className="fixed flex top-0 right-0 w-1/6 h-full overflow-y-auto justify-center items-center">
      <ul>
        {sideLinks.map((sideLink) => (
          <li key={sideLink.id} className="py-6 px-4">
            <NavLink {...sideLink} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
