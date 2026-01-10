import { IoMenu } from "react-icons/io5";
import { Container } from "../common/Container";
import { useState } from "react";
import MobileMenu from "../common/MobileMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="xuduBg py-3">
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
            <IoMenu onClick={() => setOpen(true)} size={30} />
          </div>
        </Container>
      </nav>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
