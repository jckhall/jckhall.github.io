import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-white" : "text-zinc-400"
      } hover:text-white duration-500 hover:underline hover:underline-offset-8`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`z-40 w-full fixed py-2 ${isDesktop ? 'bottom-0' : 'top-0'}`}>
      <div className="flex items-center justify-between">
        <h4 className="font-sans text-6xl px-5 font-medium">JACK HALL</h4>
        {/* <div className="w-25 border-2 p-2 pr-8 border-slate-100">
          <h4 className="font-sans text- font-semibold pr-3">JACK HALL</h4>
        </div> */}

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="pr-5 flex justify-between gap-16 font-sans text-sm font-regular">
            <Link
              page="PROJECTS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="ART"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="CONTACT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-black p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="z-30 fixed h-full inset-0 p-6 bg-black">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col justify-center items-center text-2xl gap-10 text-white font-sans font-regular">
            <Link
              page="PROJECTS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="ART"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="CONTACT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
