import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { BsFilm } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";



function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-3 text" />,
    Dashboard: <RiDashboard3Line className="fs-3 text" />,
    Courses: <FaBook className="fs-4 text" />,
    Calendar: <BsCalendar2Week className="fs-4 text" />,
    Inbox: <AiOutlineInbox className="fs-4 text" />,
    History: <AiOutlineHistory className="fs-4 text" />,
    Studio: <BsFilm className="fs-4 text" />,
    Commons: <BsBoxArrowRight className="fs-4 text" />,
    Help: <BsQuestionCircle className="fs-4 text" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group col-1" style={{}}>
      <img className="wd-kanbas-navigation-icon align-items-center p-2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png" alt=""></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item text-center p-3 ${pathname.includes(link) && "active"
            }`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
