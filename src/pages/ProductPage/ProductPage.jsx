import React from 'react'

function ProductPage() {
  return (
    <div>
      <HeroSection />
      <Section2 />
    </div>
  )
}

export default ProductPage;

function HeroSection() {
  return(
    <>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 13.28.47.jpeg"
          title="Songket Nago Betarung"
          from="Sumatra Barat"
          processing="Wet-Hulledd"
          Altitude="1,200-1,500 masl"
          motif="pertarungan antara kekuatan besar"
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.23.04.jpeg"
          title="Songket Tabur Limar"
          from="Sumatra Selatan"
          processing="Washed"
          Altitude="1,300-1,600 masl"
          motif="keindahan yang tersebar merata"
          available="every-major-holiday"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.24.35.jpeg"
          title="Songket Cempuk"
          from="Sumatra Selatan"
          processing="Wet Process"
          Altitude="1,200-1,600 masl"
          flavor="Kehormatan dan Kesucian"
          available="May - October"
        />
      </div>

      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.24.48.jpeg"
          title="Songket Lepus Berakam"
          from="Sumatra Selatan"
          processing="Semi-Washed"
          Altitude="1,300-1,800 masl"
          motif="kewaspadaan, kesederhanaan, dan perlindungan "
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 13.28.47.jpeg"
          title="Toraja Kalosi"
          from="South Sulawesi"
          processing="Wet-Hulled"
          Altitude="1,400-1,800 masl"
          flavor="Dark Chocolate, Spicy, Earthy"
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 13.28.47.jpeg"
          title="Java Robusta"
          from="East Java"
          processing="Dry Process"
          Altitude="600-900 masl"
          flavor="Woody, Nutty, Strong"
          available="Year-round"
        />
      </div>
    </>
  );
}

  
