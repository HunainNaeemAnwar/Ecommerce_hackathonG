import Link from "next/link";

const NavLink = ({ href, tittle }: { href: string; tittle: string }) => {
  return (
    <Link
      href={href}
      className="block py-3  text-black text-[22px] font-SatoshiBold  md:p-0 hover:text-opacity-60"
    >
      {tittle}
    </Link>
  );
};
export default NavLink;
