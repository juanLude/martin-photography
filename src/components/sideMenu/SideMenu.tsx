// import { useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
// import hiddenMenuIcon from "../../assets/images/burger-passive.png";
// import activeMenuIcon from "../../assets/images/burger-active.png";
// import Socials from "./Socials";
// import CSS from "csstype";

// const activeMenuStyles: CSS.Properties = {
//   textDecoration: "none",
//   color: "rgb(37, 99, 235)",
// };

// const SideMenu = () => {
//   const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);
//   const ref = useRef<HTMLImageElement>(null);

//   function ToggleMenu() {
//     setHiddenMenu(!hiddenMenu);
//   }
//   function RemoveMenu() {
//     setHiddenMenu(true);
//     window.scrollTo(0, 0);
//   }

//   return (
//     <header className="sm:relative flex flex-col min-h-screen sm:col-span-1 md:col-span-2 items-center absolute">
//       <img
//         className="burger-icon w-10 fixed cursor-pointer md:hidden z-50 sm:ml-2 ml-12"
//         onClick={ToggleMenu}
//         ref={ref}
//         src={hiddenMenu ? hiddenMenuIcon : activeMenuIcon}
//         alt="Toggle menu"
//       />
//       <nav
//         className={`main-menu${
//           hiddenMenu ? `` : ` show-menu`
//         } flex-col items-center fixed mt-60 text-2xl gap-5 text-slate-600 hidden md:flex`}
//       >
//         <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black font-light">
//           Martin Scarponi<br></br>
//           <span className="font-semibold font-namefont text-5xl">
//             Photography
//           </span>
//         </h1>
//         <NavLink
//           className="hover:text-blue-600 smooth-transition text-xl"
//           to="/"
//           onClick={() => {
//             RemoveMenu();
//           }}
//         >
//           Gallery
//         </NavLink>
//         <NavLink
//           className="hover:text-blue-600 smooth-transition text-xl"
//           to="/blog"
//           onClick={() => {
//             RemoveMenu();
//           }}
//           style={({ isActive }) => (isActive ? activeMenuStyles : {})}
//         >
//           Blog
//         </NavLink>
//         <NavLink
//           className="hover:text-blue-600 smooth-transition text-xl"
//           to="/about"
//           onClick={() => {
//             RemoveMenu();
//           }}
//           style={({ isActive }) => (isActive ? activeMenuStyles : {})}
//         >
//           About
//         </NavLink>
//         <NavLink
//           className="hover:text-blue-600 smooth-transition text-xl"
//           to="/contact"
//           onClick={() => {
//             RemoveMenu();
//           }}
//           style={({ isActive }) => (isActive ? activeMenuStyles : {})}
//         >
//           Contact
//         </NavLink>
//         <Socials />
//         <p className="text-sm">&copy; 2022-2023</p>
//       </nav>
//     </header>
//   );
// };

// export default SideMenu;

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import hiddenMenuIcon from "../../assets/images/burger-passive.png";
import activeMenuIcon from "../../assets/images/burger-active.png";
import CSS from "csstype";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const activeMenuStyles: CSS.Properties = {
  textDecoration: "none",
  color: "rgb(37, 99, 235)",
};
const SubMenu = () => {
  return (
    <div className="relative ">
      <div className="absolute left-0 top-0">
        <span className="block bg-white p-2">
          <NavLink
            to="/gallery/weddings"
            className="text-slate-600 hover:text-blue-600 smooth-transition"
          >
            Weddings
          </NavLink>
        </span>
        <span className="block bg-white p-2">
          <NavLink
            to="/gallery/couples"
            className="py-2 text-slate-600 hover:text-blue-600 smooth-transition"
            // className="absolute bg-white left-0 top-12 w-100"
          >
            Couples
          </NavLink>
        </span>
        <span className="block bg-white p-2">
          <NavLink
            to="/gallery/parties"
            className="py-2 text-slate-600 hover:text-blue-600 smooth-transition"
            // className="py-1 absolute bg-white left-0 top-24 w-200"
          >
            Parties
          </NavLink>
        </span>
      </div>
    </div>
  );
};

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  function ToggleMenu() {
    setHiddenMenu(!hiddenMenu);
  }

  function RemoveMenu() {
    setHiddenMenu(true);
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    // Listen for scroll events and toggle the isScrolled state
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = `fixed top-0 left-0 right-0 bg-white shadow-md z-50 ${
    isScrolled
      ? "py-0 opacity-0 transition-all duration-300"
      : "py-2.5 opacity-100 transition-all duration-300"
  }`;

  return (
    <nav
      // className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 pb-1 transition-all duration-300 ${
      //   isScrolled ? "py-1" : "py-2"
      // }`}
      className={navbarClassName}
    >
      <div className="flex justify-between items-center py-0 px-4">
        {/* <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-light">
          <span className="text-4xl sm:text-5xl font-semibold font-namefont">
            Martin Scarponi
          </span>
          <br />
          Photography
        </h1> */}
        <img
          className="burger-icon w-10 cursor-pointer md:hidden"
          onClick={ToggleMenu}
          ref={ref}
          src={hiddenMenu ? hiddenMenuIcon : activeMenuIcon}
          alt="Toggle menu"
        />
        <NavLink
          className="hover:text-blue-600 smooth-transition text-right md:hidden"
          to="/"
          onClick={() => {
            RemoveMenu();
          }}
        >
          <h1 className="text-base md:text-xl lg:text-2xl text-black font-light">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-namefont">
              Martin Scarponi
            </span>
            {/* <br />
            Photography */}
          </h1>
        </NavLink>
      </div>

      <div
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex flex-col md:flex-row items-center text-xl gap-8 text-slate-600 hidden md:flex p-6`}
      >
        {hiddenMenu && (
          <div className="flex items-center">
            <NavLink
              className="hover:text-blue-600 smooth-transition "
              to="/"
              onClick={() => {
                RemoveMenu();
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-light pl-3 pr-6 ">
                <span className="text-4xl sm:text-5xl font-semibold font-namefont">
                  Martin Scarponi
                </span>
                {/* <br />
            Photography */}
              </h1>
            </NavLink>
          </div>
        )}
        <div className="md:ml-auto flex flex-col items-center md:flex-row md:items-start">
          <NavLink
            className="inline-block hover:text-blue-600 smooth-transition mt-4 md:mt-0 mb-4 md:mb-0"
            to="/"
            onClick={() => {
              RemoveMenu();
            }}
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            Gallery
            {showSubMenu && <SubMenu />}
          </NavLink>
          <NavLink
            className="hover:text-blue-600 smooth-transition md:ml-12 mb-4 md:mb-0"
            to="/blog"
            onClick={() => {
              RemoveMenu();
            }}
            style={({ isActive }) => (isActive ? activeMenuStyles : {})}
          >
            Blog
          </NavLink>
          <NavLink
            className="hover:text-blue-600 smooth-transition md:ml-12 mb-4 md:mb-0"
            to="/about"
            onClick={() => {
              RemoveMenu();
            }}
            style={({ isActive }) => (isActive ? activeMenuStyles : {})}
          >
            About
          </NavLink>
          <NavLink
            className="hover:text-blue-600 smooth-transition md:ml-12 mb-4 md:mb-0"
            to="/contact"
            onClick={() => {
              RemoveMenu();
            }}
            style={({ isActive }) => (isActive ? activeMenuStyles : {})}
          >
            Contact
          </NavLink>

          <a
            href="https://www.instagram.com/your-instagram-page"
            target="_blank"
            rel="noreferrer"
            className="md:ml-12 hover:text-blue-600 smooth-transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
