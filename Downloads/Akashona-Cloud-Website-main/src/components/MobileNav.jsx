import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Pastikan menggunakan React Router

export default function MobileNav({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <ul>
          {Menus.map(({ name, href, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name} className="">
                <Link
                  to={href || "#"} // Arahkan ke href jika tersedia
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => {
                    if (!hasSubMenu) toggleDrawer(); // Tutup drawer jika tidak ada submenu
                    setClicked(isClicked ? null : i); // Toggle submenu jika ada
                  }}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </Link>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, href, icon: Icon }) => (
                      <li key={name} className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2">
                        <Link
                          to={href || "#"}
                          className="flex items-center gap-x-2"
                          onClick={toggleDrawer} // Tutup drawer setelah klik submenu
                        >
                          {Icon && <Icon size={17} />}
                          {name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
  