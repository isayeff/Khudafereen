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

function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const menuItems = [
    { label: 'Haqqımızda', href: '#haqqimizda', icon: <GoHome size={30} /> },
    { label: 'Xidmətlərimiz', href: '#xidmetler', icon: <MdOutlineMedicalServices size={30} /> },
    { label: 'Nəticələrimiz', href: '#neticeler', icon: <GoTrophy size={30} /> },
    { label: 'Ölkələr', href: '#olkeler', icon: <BsGlobe size={30} /> },
    { label: 'Paketlər', href: '#paketler', icon: <AiOutlineFileSearch size={30} /> },
    { label: 'FAQ', href: '#faq', icon: <GoQuestion size={30} /> },
    { label: 'Əlaqə', href: '#elaqe', icon: <LuMessageSquareMore size={30} /> }
  ];


  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="xuduBg py-2 relative">
        <Container>
          <div className="flex justify-between items-center text-white">
            <div>
              <img
                src={"/logos/logo.png"}
                alt="Khudaferin Logo - Official brand logo of Khudaferin"
                title="Khudaferin Logo"
                className="w-24 lg:w-30 h-auto"
                loading="lazy"
              />
            </div>

            {/* Habmurger icon for mobile */}
            <div className="block lg:hidden">
              <Hamburger className="hidden" size={25} direction="right" toggled={open} toggle={toggleMenu} />
            </div>

            {/* Navbar menu for desktop */}
            <ul className="hidden lg:flex justify-center items-center gap-7">
              {
                menuItems.map((item, i) => {
                  return (
                    <li key={i} className="text-white text-sm xl:text-[1rem]">
                      <Link to={item.href}>{item.label}</Link>
                    </li>
                  )
                })
              }
            </ul>

            <button className="hidden lg:block xuduText bg-white font-semibold py-2 w-35 xl:w-46 rounded transition-colors">
              Müraciət Et
            </button>
          </div>
        </Container>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} menuItems={menuItems} />
    </>
  );
}

export default Navbar;
