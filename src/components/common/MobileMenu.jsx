import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import { Container } from './Container'
import { GoHome } from "react-icons/go";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function MobileMenu({ open, setOpen }) {

  const menuItems = [
    { label: 'Haqqımızda', href: '#haqqimizda', icon: <GoHome size={30} /> },
    { label: 'Xidmətlərimiz', href: '#xidmetler', icon: <MdOutlineMedicalServices size={30} /> },
    { label: 'Nəticələrimiz', href: '#neticeler', icon: <GoTrophy size={30} /> },
    { label: 'Ölkələr', href: '#olkeler', icon: <BsGlobe size={30} /> },
    { label: 'Paketlər', href: '#paketler', icon: <AiOutlineFileSearch size={30} /> },
    { label: 'FAQ', href: '#faq', icon: <GoQuestion size={30} /> },
    { label: 'Əlaqə', href: '#elaqe', icon: <LuMessageSquareMore size={30} /> }
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Soldan sağa açılması üçün left-0 və pr-10 */}
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"  // ← Soldan gəlir
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"    // ← Sola gedir
              >
                {/* w-screen = full width */}
                <Dialog.Panel className="pointer-events-auto w-screen">
                  <div className="xuduBg py-3">
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
                        <IoCloseOutline
                          size={30}
                          onClick={() => setOpen(false)}
                        />
                      </div>

                    </Container>
                  </div>

                  <Container className='mt-6'>
                    {
                      menuItems.map((item, i) => {
                        return (
                          <div key={i} className='flex items-center p-4 gap-6 border-b border-[#f0f0f0]'>
                            <div className='text-[#414141]'>
                              {item.icon}
                            </div>
                            <Link
                              className='text-xl text-[#414141] font-normal duration-100'
                              href={"#" + item.href}
                            >
                              {item.label}
                            </Link>
                          </div>
                        )
                      })
                    }
                  </Container>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}