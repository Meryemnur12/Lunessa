export default function Gallery() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-40">

      <div className="text-center mb-16 md:mb-24">

        <p className="text-[#B39B84] tracking-[5px] text-xs md:text-sm mb-4 md:mb-6">
          İLHAM GALERİSİ
        </p>

        <h3 className="text-[36px] sm:text-[45px] md:text-[60px]
        leading-[50px] md:leading-[70px]
        text-[#2A2A2A] font-light">

          Zarif ve Unutulmaz
          <br />
          Anlardan İlham Alın.

        </h3>

      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Image 1 */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[35px] h-[350px] md:h-[500px] group">

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
          />

        </div>

        {/* Image 2 */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[35px]
        h-[350px] md:h-[350px]
        md:mt-20 group">

          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
          />

        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[35px] h-[350px] md:h-[500px] group">

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
          />

        </div>

        {/* Image 4 */}
        <div className="overflow-hidden rounded-[30px] md:rounded-[35px]
        h-[350px] md:h-[350px]
        md:mt-20 group">

          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 duration-700"
          />

        </div>

      </div>

    </section>
  )
}