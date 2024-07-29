import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu
} from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./ui/icons";

export default function Mainnavbar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar className="bg-[#fffbfb] border-black p-4 shadow-md rounded-full">
      <NavbarBrand>
        <p className="font-bold text-black">SHELTER AFRIQUE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 text-black" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent hover:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="bg-white text-black border border-gray-300 shadow-lg rounded-md mt-1"
            itemClasses={{
              base: "gap-4 hover:bg-gray-100",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="description."
              startContent={icons.scale}
            >
              Investors
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="description."
              
              startContent={icons.activity}
            >
              Projects
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="description."
              startContent={icons.flash}
            >
              Who we are
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="description."
              startContent={icons.server}
            >
             
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="description."
              startContent={icons.user}
            >
              
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Investors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="text-black">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
