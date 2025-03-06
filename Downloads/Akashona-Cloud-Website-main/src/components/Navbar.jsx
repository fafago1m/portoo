import { Menus } from "../database/navbar";
import Logo from "../assets/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import '../index.css';

export default function Navbar() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A] z-[1000]">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="" className="size-8" />
            <h3 className="text-lg font-semibold">Akashona Cloud</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopNav menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
              onClick={() => window.location.href = 'https://game-controlcenter.akashonacloud.com'} 
            >
              Control Center
            </button>
            <div className="lg:hidden">
              <MobileNav Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
} 