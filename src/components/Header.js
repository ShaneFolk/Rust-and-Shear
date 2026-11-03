import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/barbers", label: "Barbers" },
  { href: "/book", label: "Book" },
];

export default function Header() {
  return (
    <header className="bg-nearblack text-offwhite">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-2xl uppercase tracking-wide">
          Rust &amp; <span className="text-rust">Shear</span>
        </Link>
        <nav>
          <ul className="flex gap-6 font-heading uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-rust">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
