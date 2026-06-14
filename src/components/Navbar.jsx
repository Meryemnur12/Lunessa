export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-16 py-8 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-xl md:text-2xl tracking-[8px] md:tracking-[10px] text-[#2A2A2A] font-light">
        LUNESSA
      </h1>

      {/* Masaüstü Menü */}
      <ul className="hidden md:flex items-center gap-12 text-sm tracking-[3px] text-[#6F6B67]">

        <li className="cursor-pointer hover:text-black duration-300">
          Ana Sayfa
        </li>

        <li className="cursor-pointer hover:text-black duration-300">
          Organizasyonlar
        </li>

        <li className="cursor-pointer hover:text-black duration-300">
          Mekanlar
        </li>

        <li className="cursor-pointer hover:text-black duration-300">
          Galeri
        </li>

        <li className="cursor-pointer hover:text-black duration-300">
          İletişim
        </li>

      </ul>

      {/* Mobil Menü Butonu */}
      <button className="md:hidden text-2xl text-[#2A2A2A]">
        ☰
      </button>

    </nav>
  )
}