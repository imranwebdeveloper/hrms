import Link from "next/link";
import React from "react";

const MenuLink = ({ path, icon, content }) => {
  return (
    <Link
      href={path}
      className="flex items-center gap-4 rounded px-2  py-3 hover:bg-gray-100"
    >
      <span className=" text-xl">{icon}</span>
      <p> {content}</p>
    </Link>
  );
};

export default MenuLink;
