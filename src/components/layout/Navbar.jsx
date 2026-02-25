import { Container } from "../common/Container";
import { useState } from "react";
import MobileMenu from "../common/MobileMenu";
import { Spin as Hamburger } from 'hamburger-react'

function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);
  
  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <nav className="xuduBg py-2 relative">
        <Container>
          <div className="flex justify-between items-center text-white">
            <div>
              <img
                src={"/logo.png"}
                alt="Khudaferin Logo - Official brand logo of Khudaferin"
                title="Khudaferin Logo"
                className="w-24 sm:w-28 md:w-32 lg:w-38 h-auto"
                loading="lazy"
              />
            </div>
            <Hamburger size={25} direction="right" toggled={open} toggle={toggleMenu} />
          </div>
        </Container>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
