import { useState } from "react";
// import { useLocation } from "react-router-dom";
// Components
import Button from "./ui/Button";
import ThemeSwitcher from "./ui/ThemeSwitcher";
// import Link from "./ui/Links/Link";
import PageLink from "./ui/Links/PageLink";
// Icons
import { GiAbstract014 } from "react-icons/gi";
import { IoIosMenu, IoIosClose, IoIosArrowDown } from "react-icons/io";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation(); // Get current location

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="md:border-b-2 border-brd/10 w-full">
      <div className="mx-auto flex justify-between items-center h-16 max-w-[1240px] px-4">
        {/* Logo */}
        <PageLink to="/" hover="opacity" variant="blankbox" 
        className="text-2xl font-extrabold md:font-bold">
          <GiAbstract014 className="fill-obackground size-8" />
          YouPoint
        </PageLink>
        
        {/* Desktop nav */}
        <ul className="hidden font-semibold md:flex gap-8 text-md items-center">
          {/* Navigation */}
          {/* {location.pathname !== "/" && <li><PageLink href="/" hover="underline">Home</PageLink></li>} */}
          <li><PageLink to="/tutorial" hover="underline">Tutorial</PageLink></li>
          <li><PageLink to="/about" hover="underline">About</PageLink></li>
          <li><PageLink to="/blog" hover="underline">Blog</PageLink></li>
          {/* Controls */}
          <span className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="outline" hover="ring" size="lg" className="text-md bg-transparent">
                Dashboard <IoIosArrowDown />
            </Button>
          </span>  
        </ul>

        {/* Mobile menu */}
        {/* open/close button */}
        <Button variant="outline" size="icon" onClick={handleMobileMenu} className="md:hidden">
          {isOpen ? <IoIosClose className="fill-accent size-10" /> : <IoIosMenu className="fill-accent size-8" />}
        </Button>

        <div className={isOpen ? "md:hidden fixed flex flex-col gap-4 right-0 top-16 w-full h-full bg-background/90 p-8" : "fixed right-[-100%]"}>
          <Button variant="dark" className="w-full">Sign Up</Button>
          <Button variant="outline" className="w-full">Sign Up</Button>
          <ul className="font-semibold flex flex-col text-md items-left">
            <li><PageLink to="/tutorial/" hover="none">Tutorial</PageLink></li>
            <li><PageLink to="/about/" hover="none">About</PageLink></li>
            <li><PageLink to="/blog/" hover="none">Blog</PageLink></li>
            <span className="flex items-center gap-4">
              <ThemeSwitcher />
            </span>  
          </ul>
        </div>
      </div>
    </nav>
  );
}

