export default function Footer() {
  return (
    <footer className="px-6 md:px-16 pb-10">

      <div className="border-t border-[#D8D2CC] pt-16 flex flex-col md:flex-row items-start justify-between gap-12">

        {/* Left */}
        <div>

          <h2 className="text-2xl md:text-3xl tracking-[8px] md:tracking-[10px] text-[#2A2A2A] font-light mb-8">
            LUNESSA
          </h2>

          <p className="text-[#8E8A86] leading-8 max-w-md">
            Premium düğün ve organizasyon deneyimi ile
            en özel anlarınızı unutulmaz hale getiriyoruz.
          </p>

        </div>

        {/* Center */}
        <div>

          <h3 className="text-[#2A2A2A] text-lg mb-8">
            Hızlı Menü
          </h3>

          <ul className="space-y-4 text-[#8E8A86]">

            <li className="hover:text-black duration-300 cursor-pointer">
              Ana Sayfa
            </li>

            <li className="hover:text-black duration-300 cursor-pointer">
              Organizasyonlar
            </li>

            <li className="hover:text-black duration-300 cursor-pointer">
              Mekanlar
            </li>

            <li className="hover:text-black duration-300 cursor-pointer">
              Galeri
            </li>

            <li className="hover:text-black duration-300 cursor-pointer">
              İletişim
            </li>

          </ul>

        </div>

        {/* Right */}
        <div>

          <h3 className="text-[#2A2A2A] text-lg mb-8">
            İletişim
          </h3>

          <div className="space-y-4 text-[#8E8A86]">

            <p>info@lunessa.com</p>

            <p>+90 555 555 55 55</p>

            <p>İstanbul / Türkiye</p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 pt-8 border-t border-[#D8D2CC] flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-[#8E8A86] text-sm text-center md:text-left">
          © 2026 Lunessa. Tüm hakları saklıdır.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-[#8E8A86] text-sm">

          <p className="hover:text-black duration-300 cursor-pointer">
            Instagram
          </p>

          <p className="hover:text-black duration-300 cursor-pointer">
            Pinterest
          </p>

          <p className="hover:text-black duration-300 cursor-pointer">
            Behance
          </p>

        </div>

      </div>

    </footer>
  )
}