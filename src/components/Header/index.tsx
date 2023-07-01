import { useRouter } from "next/router";
import { useState } from "react";

import LinesIcon from "@/assets/svg/LinesIcon";
import XIcon from "@/assets/svg/XIcon";

const Header = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const navs = [
    { path: "/", title: "Home" },
    { path: "/skillset", title: "Skills Set" },
    { path: "/projects", title: "Projects" },
    { path: "/contact", title: "Contact Me" },
  ];
  return (
    // switch to mobile mode in md
    <div className="mx-auto container relative ">
      <div className="relative flex justify-between items-center h-[70px] bg-[#fffbed] z-50 px-8">
        <div
          className="font-bold text-2xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          VINCENT
        </div>
        <div className=" flex-1"></div>
        <div className="relative hidden md:flex  items-center gap-10 text-lg animated">
          {navs.map((item) => {
            return (
              <div
                className=" hover:text-primary cursor-pointer font-medium"
                key={item.title}
                onClick={() => router.push(item.path)}
              >
                {item.title}
              </div>
            );
          })}
        </div>

        <div
          className="cursor-pointer md:hidden"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <XIcon color={"#333"} size="40" />
          ) : (
            <LinesIcon color={"#333"} size="40" />
          )}
        </div>
      </div>
      <div
        className={`absolute top-[70px] overflow-hidden px-8 ${
          show ? "h-[260px]" : "h-0"
        } animated w-screen bg-[#fffbed]`}
        style={{
          boxShadow: show
            ? "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
            : undefined,
        }}
      >
        {navs.map((nav) => (
          <div
            key={nav.path}
            className=" font-medium my-8 cursor-pointer hover:font-bold"
          >
            {nav.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
{
  /*  */
}
