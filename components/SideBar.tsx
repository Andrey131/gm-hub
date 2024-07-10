import { NavigationSideBar } from "./NavigationSideBar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Races", href: "/race" },
];

const SideBar = () => {
  return (
    <div className="flex basis-1/6 m-2 bg-gray-600 border border-gray-500 rounded-md">
      <NavigationSideBar navLinks={navItems} />
    </div>
  );
};

export { SideBar };
