"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User } from "lucide-react";
import Image from "next/image";
const AnimatedMenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="focus:outline-none z-999"
  >
    <motion.div animate={{ y: isOpen ? 13 : 0 }} transition={{ duration: 0.3 }}>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
        className="text-black"
      >
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 22 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 12 L 22 12", opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 21.5 L 22 21.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
        />
      </motion.svg>
    </motion.div>
  </button>
);

const CollapsibleSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between py-2 px-4 rounded-xl hover:bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        {open ? <XIcon /> : <MenuIcon />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuIcon = () => (
  <motion.svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <motion.line x1="3" y1="12" x2="21" y2="12" />
  </motion.svg>
);

const XIcon = () => (
  <motion.svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <motion.line x1="18" y1="6" x2="6" y2="18" />
    <motion.line x1="6" y1="6" x2="18" y2="18" />
  </motion.svg>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileSidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const logo = {
    url: "/",
    src: "/logo/logo.png",
    alt: "argentinareanima",
  };
  return (
    <div className="flex  h-[500px]  bg-gray-300">
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileSidebarVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-white text-black "
          >
            <div className="flex flex-col h-full ">
              {/* Profile Section */}
              <div className="p-4 border-b border-gray-200 ">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Image
                      width={200}
                      height={200}
                      src={logo.src}
                      className="img-logo transform transition-transform duration-300 hover:scale-105 w-6 h-6 cursro-pointer"
                      alt={logo.alt}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">HextaUI</p>
                    <p className="text-sm text-gray-500">hi@preetsuthar.me</p>
                  </div>
                </div>
              </div>
              {/* Navigation Section */}
              <nav className="flex-1 p-4 overflow-y-auto   ">
                <ul>
                  <li className="mb-2">
                    <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                      <Home className="h-5 w-5" />
                      Home
                    </button>
                  </li>
                  {/* <li className="mb-2">
                    <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                      <Bell className="h-5 w-5" />
                      Notifications
                    </button>
                  </li> */}
                  {/* <li className="mb-2">
                    <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                      <Settings className="h-5 w-5" />
                      Settings
                    </button>
                  </li> */}
                </ul>
                {/* Toggleable Sections */}
                <div className="mt-4">
                  <CollapsibleSection title="Extra Options">
                    <ul>
                      <li>
                        <button className="w-full font-medium text-sm text-left p-2 rounded-xl hover:bg-gray-100">
                          Subscriptions
                        </button>
                      </li>
                      <li>
                        <button className="w-full font-medium text-sm text-left p-2 rounded-xl hover:bg-gray-100">
                          Appearance
                        </button>
                      </li>
                    </ul>
                  </CollapsibleSection>
                  <CollapsibleSection title="More Info">
                    <p className="text-sm text-gray-500">
                      Additional details and settings can be found here.
                    </p>
                  </CollapsibleSection>
                </div>
              </nav>
              {/* Footer / Action Button */}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col h-full w-64 bg-gray-50 text-black shadow " >
        {/* Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12  rounded-full flex items-center justify-center">
              <Image
                width={200}
                height={200}
                src={logo.src}
                className="img-logo transform transition-transform duration-300 hover:scale-105 w-6 h-6 cursro-pointer"
                alt={logo.alt}
              />
            </div>
            <div>
              <p className="font-semibold">Argentina Reanima</p>
              <p className="text-sm text-gray-500">argentinareanima@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Navigation Section */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul>
            <li className="mb-2">
              <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                <Home className="h-5 w-5" />
                Inicio
              </button>
            </li>
            {/* <li className="mb-2">
              <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                <Bell className="h-5 w-5" />
                Notifications
              </button>
            </li> */}
            {/* <li className="mb-2">
              <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                <Settings className="h-5 w-5" />
                Settings
              </button>
            </li> */}
            {/* <li className="mb-2">
              <button className="flex gap-2 font-medium text-sm items-center w-full py-2 px-4 rounded-xl hover:bg-gray-100">
                <Grid className="h-5 w-5" />
                Categories
              </button>
            </li> */}
          </ul>
          {/* Toggleable Sections */}
          <div className="mt-4 ">
            <CollapsibleSection title="Categorias">
              <ul>
                <li>
                  <button className="w-full font-medium text-sm text-left p-2 rounded-xl hover:bg-gray-100">
                    Novedades institucionales
                  </button>
                </li>
                <li>
                  <button className="w-full font-medium text-sm text-left p-2 rounded-xl hover:bg-gray-100">
                    Eventos
                  </button>
                </li>
                 <li>
                  <button className="w-full font-medium text-sm text-left p-2 rounded-xl hover:bg-gray-100">
                    Noticias en los medios
                  </button>
                </li>
                 <li>
                  <button className="w-full font-medium text-sm text-left p-2 rounded-xl hover:bg-gray-100">
                   Noticias Alianza con Camuzzi Gas
                  </button>
                </li>
              </ul>
            </CollapsibleSection>
            <CollapsibleSection title="Más Información">
              <p className="text-sm text-gray-500">
                Additional details and settings can be found here.
              </p>
            </CollapsibleSection>
          </div>
        </nav>
       
        
      </div>

      {/* Main Content Area */}
    </div>
  );
};

export { Sidebar };
