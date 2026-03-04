import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom";
import { Container } from "../common/Container";

function Footer() {

  const menuItems = [
    { label: 'Haqqımızda', href: '#haqqimizda' },
    { label: 'Xidmətlərimiz', href: '#xidmetler' },
    { label: 'Nəticələrimiz', href: '#neticeler', },
    { label: 'Ölkələr', href: '#olkeler' },
    { label: 'Paketlər', href: '#paketler' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Əlaqə', href: '#elaqe' }
  ];

  return (
    <>
      <footer className="xuduBg">
        <Container className="py-10">
          <div>
            <div className="flex justify-between items-start">
              <div className="w-50">
                <img className="w-full" src="/logos/logoNav.svg" alt="" />
              </div>
              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 md:gap-x-30 text-white">
                {
                  menuItems.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link to={item.href}>{item.label}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-7 ml-2 mt-15 text-white text-3xl md:text-2xl">
              <FaInstagram />
              <FaFacebook />
              <FaTelegram />
              <FaTiktok />
              <FaWhatsapp />
            </div>
          </div>
        </Container>
        <div className="bg-[#599898] p-3 text-center text-white text-sm">
          © Copyright 2025 The Khudafereen, All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer