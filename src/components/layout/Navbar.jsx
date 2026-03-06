import { Container } from "../common/Container";
import { useState } from "react";
import MobileMenu from "../common/MobileMenu";
import { Spin as Hamburger } from 'hamburger-react'
import { GoHome } from 'react-icons/go';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { GoTrophy } from 'react-icons/go';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GoQuestion } from 'react-icons/go';
import { LuMessageSquareMore } from 'react-icons/lu';
import { Link } from "react-router-dom";
import { CALENDLY_LINK } from "../../data/siteData";
import { scrollToSection } from "../../utils/helpers";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Haqqımızda', href: 'haqqimizda', icon: <GoHome size={30} /> },
    { label: 'Xidmətlərimiz', href: 'xidmetler', icon: <MdOutlineMedicalServices size={30} /> },
    { label: 'Nəticələrimiz', href: 'neticeler', icon: <GoTrophy size={30} /> },
    { label: 'Ölkələr', href: 'olkeler', icon: <BsGlobe size={30} /> },
    { label: 'Paketlər', href: 'paketler', icon: <AiOutlineFileSearch size={30} /> },
    { label: 'FAQ', href: 'faq', icon: <GoQuestion size={30} /> },
    { label: 'Əlaqə', href: 'elaqe', icon: <LuMessageSquareMore size={30} /> },
  ];

  return (
    <>
      <nav className="xuduBg sticky top-0 z-50 flex items-center h-[12dvh]">
        <Container>
          <div className="flex justify-between items-center text-white">

            {/* Logo */}
            <a href={"/"}> 
              <img
                src={"/logos/logoNav.svg"}
                alt="Khudaferin Logo - Official brand logo of Khudaferin"
                title="Khudaferin Logo"
                className="w-24 lg:w-30 h-auto"
              />
            </a>

            {/* Hamburger — mobile only */}
            <div className="block lg:hidden">
              <Hamburger size={25} direction="right" toggled={open} toggle={setOpen} />
            </div>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex justify-center items-center gap-7">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white cursor-pointer text-sm xl:text-[1rem] hover:opacity-80 transition-opacity"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <button className="hidden cursor-pointer lg:block xuduText bg-white font-semibold py-2 w-35 xl:w-46 rounded transition-colors hover:bg-[#dfdfdf] hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <Link to={CALENDLY_LINK} target="_blank">
                Müraciət Et
              </Link>
            </button>

          </div>
        </Container>
      </nav>

      <MobileMenu
        open={open}
        setOpen={setOpen}
        menuItems={menuItems}
      />
    </>
  );
}

export default Navbar;