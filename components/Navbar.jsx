import React from "react";
import Image from "next/image";
import { cn } from "../lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar";

export function Navbarmain() {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between p-4 z-50 shadow-md">
      <div className="flex items-center h-full">
        <Image
          src="/ShelterAfrique logo.png"
          alt="Shelter Logo"
          width={80} 
          height={40} 
          className="mr-4"
        />
      </div>

      <Navbar />

      <div className="flex items-center h-full">
        <button className="px-4 py-2 border border-gray-300 bg-black text-white rounded-md">
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
      {/* Menu in the center */}
      <Menu setActive={setActive} className="flex-grow">
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-2 text-sm max-w-xs lg:max-w-sm overflow-auto">
            <HoveredLink href="/web-dev">Who we are</HoveredLink>
            <HoveredLink href="/interface-design">Our Leaders</HoveredLink>
            <HoveredLink href="/seo">Strategy</HoveredLink>
            <HoveredLink href="/branding">Members</HoveredLink>
            <HoveredLink href="/branding">Yaounde Declaration</HoveredLink>
            <HoveredLink href="/branding">Quality Policy Statement</HoveredLink>
            <HoveredLink href="/branding">Corporate Governance</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-xs  sm:grid-cols-2">
            <ProductItem
              title="Financial Institution Group(FIG)"
              href="#"   
              description="We offer the support and finance you need for the construction and infrastructure components of your project."
            />
            <ProductItem
              title="Project Finance Group(PFG)"
              href="#"
              description="Work with a range of specialized financial intermediaries to promote home building and ownership."
            />
            <ProductItem
              title="Fund Management Group(FMG)"
              href="#"
              description="We offer technical assistance and partner with public institutions on a range of housing initiatives."
            />
            <ProductItem
              title="Sovereign & Public-Private Partnerships(PPP)"
              href="#"
              description="We offer technical assistance and partner with public institutions on a range of housing initiatives."
            />
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
