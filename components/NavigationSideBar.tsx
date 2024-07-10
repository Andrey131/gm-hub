"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const NavigationSideBar = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={
              isActive ? "bg-gray-700 text-white p-1" : "text-white p-1"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export { NavigationSideBar };
