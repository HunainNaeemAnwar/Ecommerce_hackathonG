import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({
  links,
}: {
  links: { path: string; title: string }[];
}) => {
  return (
    <ul className="flex flex-col items-center py-10">
      {links.map(
        (
          link: { path: string; title: string },
          index: React.Key | null | undefined
        ) => (
          <li key={index}>
            <NavLink href={link.path} tittle={link.title} />
          </li>
        )
      )}
    </ul>
  );
};

export default MenuOverlay;
