import { useState } from "react";
import mobile from "./images/image-hero-mobile.png";
import desktop from "./images/image-hero-desktop.png";
import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import logo from "./images/logo.svg";
import arrowUp from "./images/icon-arrow-up.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import menuOpen from "./images/icon-menu.svg";
import menuClose from "./images/icon-close-menu.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminders from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";

function App() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-btn");

    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menuButton.src = menuClose;
    } else {
      menuButton.src = menuOpen;
    }
  };

  return (
    <div>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start ">
          <img src={logo} alt="" className="lg: mr-5" />
          <nav className="navbar open">
            <div>
              <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className="flex items-center justify-start"
              >
                Features{" "}
                {openFeatures ? (
                  <img src={arrowUp} alt="" className="ml-2" />
                ) : (
                  <img src={arrowDown} alt="" className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg;ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={todo} className="mr-2" alt="" />
                    Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} className="mr-2" alt="" />
                    Calender
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminders} className="mr-2" alt="" />
                    Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} className="mr-2" alt="" />
                    Planning
                  </li>
                </ul>
              )}
            </div>
            <div>
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex items-center justify-start"
              >
                Company{" "}
                {openCompany ? (
                  <img src={arrowUp} alt="" className="ml-2" />
                ) : (
                  <img src={arrowDown} alt="" className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0">
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={handleOpenMenu}>
            <img src={menuOpen} alt="" className="menu-btn" />
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-black rounded-2xl px-6 py-2 opacity-75">
            Register
          </button>
        </div>
      </header>

      <section className="flex flex-col-reverse py-20 md:grid  md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto ">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg;text-6xl xl:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button
            className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 
        transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer"
          >
            Learn more
          </button>

          <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
            <li>
              <img src={databiz} alt="" className="w-15 md:w:24" />
            </li>
            <li>
              <img src={audiophile} alt="" className="w-15 md:w:24" />
            </li>
            <li>
              <img src={meet} alt="" className="w-15 md:w:24" />
            </li>
            <li>
              <img src={maker} alt="" className="w-15 md:w:24" />
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" srcset={desktop} />
            <img src={mobile} alt="" className="w-full" />
          </picture>
        </article>
      </section>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ojo Ayomide</a>.
      </div>
    </div>
  );
}

export default App;
