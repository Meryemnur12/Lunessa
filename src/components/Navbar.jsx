import { Link } from "react-router-dom";

export default function Navbar() {
return ( <nav className="w-full px-6 md:px-16 py-8 flex items-center justify-between">

  {/* Logo */}
  <Link to="/">
    <h1 className="text-xl md:text-2xl tracking-[8px] md:tracking-[10px] text-[#2A2A2A] font-light">
      LUNESSA
    </h1>
  </Link>

  {/* Masaüstü Menü */}
  <ul className="hidden md:flex items-center gap-12 text-sm tracking-[3px] text-[#6F6B67]">

    <li>
      <Link
        to="/"
        className="hover:text-black duration-300"
      >
        Ana Sayfa
      </Link>
    </li>

    <li>
      <a
        href="#"
        className="hover:text-black duration-300"
      >
        Organizasyonlar
      </a>
    </li>

   <li>
  <Link
    to="/venues"
    className="hover:text-black duration-300"
  >
      Mekanlar
    </Link>
  </li>

    <li>
      <a
        href="#"
        className="hover:text-black duration-300"
      >
        Galeri
      </a>
    </li>

 <li>
  <Link
    to="/contact"
    className="hover:text-black duration-300"
  >
    İletişim
  </Link>
</li>
    </ul>

  {/* Mobil Menü Butonu */}
  <button className="md:hidden text-2xl text-[#2A2A2A]">
    ☰
  </button>

</nav>

);
}
