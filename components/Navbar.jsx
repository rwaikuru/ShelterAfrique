import React from "react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar"; // Replace with your actual components
import { SearchIcon } from "./icons/searchicon";

export function Navbarmain() {
  return (
    <div className="sticky top-0 left-0 w-full h-12 flex items-center justify-between px-4 py-2 z-50  bg-white backdrop-blur bg-opacity-75  border-gray-200 mb-1">
      <div className="flex items-center h-full">
        <Image
          src="/ShelterAfrique logo.png"
          alt="Shelter Logo"
          width={100}
          height={100}
          className="mr-4"
        />
      </div>

      <Navbar />

      <div className="flex items-center h-full">
  <Input
    classNames={{
      base: "max-w-full sm:max-w-[10rem] h-10 mr-3",
      mainWrapper: "h-full",
      input: "text-center text-small", // Center the placeholder text
      inputWrapper: "border rounded-full h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
    }}
    placeholder="Type to search..."
    size="sm"
    type="search"
    className=""
  />



        
         <button className="px-4 py-2 border border-gray-300 bg-blue-950 text-white rounded-md">
          Contact Us
        </button> 
      </div>
    </div>
  );
}

function Navbar() {
  const [active, setActive] = React.useState(null);
  return (
    <div className="flex-grow flex items-center justify-center h-full">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="/who-we-are">Who we are</HoveredLink>
            <HoveredLink href="/leaders">Our Leaders</HoveredLink>
            <HoveredLink href="/seo">Strategy</HoveredLink>
            <HoveredLink href="/branding">Members</HoveredLink>
            <HoveredLink href="/branding">Yaounde Declaration</HoveredLink>
            <HoveredLink href="/branding">Quality Policy Statement</HoveredLink>
            <HoveredLink href="/branding">Corporate Governance</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-xs sm:grid-cols-2">
            <ProductItem title="Financial Institution Group(FIG)" href="#" />
            <ProductItem title="Project Finance Group(PFG)" href="#" />
            <ProductItem title="Fund Management Group(FMG)" href="#" />
            <ProductItem title="Sovereign & Public-Private Partnerships(PPP)" href="#" />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="#">Residential</HoveredLink>
            <HoveredLink href="#">Mortgage Finance</HoveredLink>
            <HoveredLink href="#">Commercial</HoveredLink>
            <HoveredLink href="#">Mixed Use</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Investors">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="#">Annual Reports</HoveredLink>
            <HoveredLink href="#">Credit Ratings</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Newsroom">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="#">Our Gallery</HoveredLink>
            <HoveredLink href="#">Press Release</HoveredLink>
            <HoveredLink href="#">Newsletters</HoveredLink>
            <HoveredLink href="#">Speeches</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Tenders">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="#">View Tenders</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Careers">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="#">View Careers</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbarmain;
