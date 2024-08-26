import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaSearch, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function Navbarmain() {
  return (
    <Navbar
      className="bg-transparent"
      maxWidth="fluid"
    >
      {/* Left Content */}
      <NavbarContent justify="start">
        <NavbarItem>
          <Image
          src="/ShelterAfrique logo.png"
          width={100}
          height={100}
          />
        </NavbarItem>
       
      </NavbarContent>

      {/* Centered Links */}
      <NavbarContent className="hidden md:flex gap-6" justify="center">
        <NavbarItem>
          <Link href="#" className="text-black hover:underline">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black hover:underline">
            HOLIDAYS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black hover:underline">
            DESTINATIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black hover:underline">
            FLIGHTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black hover:underline">
            OFFERS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-black hover:underline">
            CONTACTS
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content with Icons */}
      <NavbarContent justify="end">
        <NavbarItem>
          <FaSearch className="text-black w-5 h-5 cursor-pointer" />
        </NavbarItem>
        <NavbarItem>
          <FaUser className="text-black w-5 h-5 cursor-pointer" />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
