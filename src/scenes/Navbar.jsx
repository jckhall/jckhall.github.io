import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage, setSelectedProject, setIsMenuToggled }) => {

  const isDesktop = useMediaQuery("(min-width: 948px)");
  const goToSection = () => {
    if (isDesktop) {
      document.getElementById(`${lowerCasePage}`).scrollIntoView( { behavior: "smooth" } )
    }
  }
  
  const lowerCasePage = page.toLowerCase();
  return (
    <span
      className={`${
        selectedPage === lowerCasePage ? "text-white" : "text-zinc-400"
      } hover:text-white hover:underline hover:underline-offset-8 duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => {
          setSelectedPage(lowerCasePage);
          setIsMenuToggled(false)
          if(lowerCasePage==='about'){
            setSelectedProject(lowerCasePage);
          setTimeout(() => {goToSection(lowerCasePage)}, 20);}}}
    >
      {page}
    </span>
  );
};

const Navbar = ({ selectedPage, setSelectedPage, setSelectedProject, isMenuToggled, setIsMenuToggled }) => {
  const isDesktop = useMediaQuery("(min-width: 948px)");

  return (
    <nav className="fixed z-40 right-0 top-0 pt-4 pr-2">
      <div className="flex items-center justify-between">

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="py-2 mr-10 flex justify-between gap-[200px] font-sans text-xl font-regular">
            <Link
              page="WORK"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setSelectedProject={setSelectedProject}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="ABOUT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setSelectedProject={setSelectedProject}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="CONTACT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setSelectedProject={setSelectedProject}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
        ) : (
          <button
            className="z-80 rounded-full bg-black"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="z-50 fixed h-full inset-0 p-6 bg-black">
            {/* CLOSE ICON */}
            <div className="flex justify-end pb-32">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col justify-center items-center text-2xl gap-10 text-white font-sans font-regular">
            <Link
              page="WORK"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setSelectedProject={setSelectedProject}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="ABOUT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setSelectedProject={setSelectedProject}
              setIsMenuToggled={setIsMenuToggled}
            />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
