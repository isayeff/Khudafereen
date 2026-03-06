import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { scrollToSection } from "../../utils/helpers";
import { CONTACT_INFO } from "../../data/siteData";

function Footer() {

  const menuItems = [
    { label: 'Haqqımızda', href: 'haqqimizda' },
    { label: 'Xidmətlərimiz', href: 'xidmetler' },
    { label: 'Nəticələrimiz', href: 'neticeler', },
    { label: 'Ölkələr', href: 'olkeler' },
    { label: 'Paketlər', href: 'paketler' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Əlaqə', href: 'elaqe' }
  ];

  const { instagram, facebook, whatsapp, tiktok } = CONTACT_INFO.social

  const mediaButtons = [
    { link: instagram, icon: <FaInstagram /> },
    { link: facebook, icon: <FaFacebook /> },
    { link: tiktok, icon: <FaTiktok /> },
    { link: whatsapp, icon: <FaWhatsapp /> }
  ]

  return (
    <>
      <footer className="xuduBg">
        <Container className="py-10">
          <div>
            <div className="flex justify-between items-start">
              <div className="w-50">
                <img
                  className="w-full"
                  src="/logos/logoNav.svg"
                  alt="Khudaferin Logo - Official brand logo of Khudaferin"
                  loading="lazy"
                />
              </div>
              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 md:gap-x-30 text-white">
                {
                  menuItems.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="cursor-pointer"
                        onClick={() => scrollToSection(item.href)}
                      >
                        {item.label}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-7 ml-2 mt-15 text-white text-3xl md:text-2xl">
              {
                mediaButtons.map((item, i) => {
                  return (
                    <Link
                      className="hover:scale-120 transition-all"
                      to={item.link}
                      target="_blank"
                      key={i}
                    >
                      {item.icon}
                    </Link>
                  )
                })
              }
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