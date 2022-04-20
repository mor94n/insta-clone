import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare, FiSearch, FiSend } from "react-icons/fi";
import { GrCompass } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";


const Header = () => {
    return(
      <div className="navbar">
      <img className="logo"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="Instagram original logo"/>

      <div className="search">
					<IconContext.Provider
						value={{ size: "1.1em", color: "#919191" }}
					>
						<FiSearch />
					</IconContext.Provider>
					<input type="search" placeholder="Search" />
				</div>

				<div className="links">
					<IconContext.Provider value={{ size: "1.5em" }}>
						<AiFillHome />
						<FiSend />
						<FiPlusSquare />
						<GrCompass />
						<FaRegHeart />
					</IconContext.Provider>
				</div>
			</div>
    )
};

export default Header;