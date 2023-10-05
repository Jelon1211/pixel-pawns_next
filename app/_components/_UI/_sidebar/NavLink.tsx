"use client";
import { INavLink } from "@/app/_types/sidebar";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ label, path, targetSegment }: INavLink) => {
  const activeSegment = useSelectedLayoutSegment();
  const activeClass =
    activeSegment === targetSegment
      ? "font-bold drop-shadow text-white"
      : "text-slate-400";

  return (
    <Link className={`${activeClass}`} href={path}>
      {label}
    </Link>
  );
};

export default NavLink;
