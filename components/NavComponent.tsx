'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";

const NavComponent = ({
    title,
    href,
    children,
  }: {
    title: string;
    href: string
    children: ReactNode;
  }) => {
    const pathname = usePathname();
    const isActive = pathname == href;
    let className = isActive ? "bg-foreground rounded-r-full" : "";
    return (
        <Link href={href} >
      <li className="h-20 grid grid-cols-2 items-center font-bold">
        <span className={`h-1/2 flex justify-end items-center pr-4 ${className}`}>{children}</span>
        <span className={isActive ? "ml-4" : ""}>{title}</span>
      </li>
        </Link>
    );
  };

  export default NavComponent;