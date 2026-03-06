import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Container } from './Container';
import { scrollToSection } from '../../utils/helpers';

export default function MobileMenu({ open, setOpen, menuItems }) {
  
  const handleClick = (href) => {
    scrollToSection(href); // smooth scroll
    setOpen(false);   // close the menu
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="z-10 bg-white fixed top-[12dvh]" onClose={() => setOpen(false)} static>

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
          <div className="transition-opacity" />
        </Transition.Child>

        <div className="fixed overflow-hidden">
          <div className="absolute overflow-hidden">
            <div className="pointer-events-none fixed left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen">
                  <Container className="bg-white absolute pt-5 top-0 h-screen">
                    {menuItems.map((item, i) => (
                      <div key={i} className="flex items-center p-4 gap-6 border-b border-[#f0f0f0]">
                        <div className="text-[#414141]">
                          {item.icon}
                        </div>
                        <button
                          className="text-[#414141] font-normal duration-100 hover:opacity-70 transition-opacity"
                          onClick={() => handleClick(item.href)}
                        >
                          {item.label}
                        </button>
                      </div>
                    ))}
                  </Container>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>

      </Dialog>
    </Transition.Root>
  );
}