"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import NavLink from "../_components/_UI/_sidebar/NavLink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideLinks = [
    {
      label: "🏡 Home",
      path: "/game/dashboard",
      id: 0,
      targetSegment: "dashboard",
    },
    { label: "📦 Store", path: "/game/create", id: 1, targetSegment: "create" },
    {
      label: "📘 About",
      path: "/game/settings",
      id: 2,
      targetSegment: "settings",
    },
  ];

  return (
    <div className="fixed top-0 right-0 w-1/6 h-full overflow-y-auto">
      {children}
      <div className="flex h-full justify-center items-center">
        <ul>
          {sideLinks.map((sideLink) => (
            <li key={sideLink.id}>
              <NavLink {...sideLink} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
