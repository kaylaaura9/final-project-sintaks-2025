import React from 'react'
import { GiRolledCloth } from "react-icons/gi";

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
   <div className="hero bg-amber-800 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="src\images\WhatsApp Image 2025-05-29 at 10.35.33.jpeg"
      className="max-h-100 rounded-lg shadow-2xl mr-6"
    />
    
    <div>
       <p className="bg-amber-800 text-amber-100 w-max p-1.5 rounded-lg text-sm font-medium mt-3"> <GiRolledCloth />
              Direct from Indonesia 
            </p>
      <h1 className="text-5xl font-bold text-amber-300"> PREMIUM SONGKET PRODUCTS</h1> 
      <p className="py-6 text-amber-950 font-stretch-ultra-condensed font-bold ml-3  rounded-2xl">
        Ditata dari benang emas dan perak pilihan, setiap helai songket ditenun tangan
        oleh pengrajin lokal penuh dedikasi. Motif-motif khas Melayu tak hanya memikat mata,
        tapi juga menyimpan kisah dan makna. Anggun, bermakna, dan sempurna untuk setiap momen berharga.
      </p>

      
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
          Price="1,200-1,500 masl"
          motif="pertarungan antara kekuatan besar"
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.23.04.jpeg"
          title="Songket Tabur Limar"
          from="Sumatra Selatan"
          processing="Washed"
          Price="1,300-1,600 masl"
          motif="keindahan yang tersebar merata"
          available="every-major-holiday"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.24.35.jpeg"
          title="Songket Cempuk"
          from="Sumatra Selatan"
          processing="Wet Process"
          Price="1,200-1,600 masl"
          motif="Kehormatan dan Kesucian"
          available="May - October"
        />
      </div>

      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard   
          image="src\images\WhatsApp Image 2025-05-28 at 23.24.48.jpeg"
          title="songket lepus berakam"
          from="Sumatra Barat"
          processing="Wet-Hulledd"
          Price="1,200-1,500 masl"
          motif="pertarungan antara kekuatan besar"
          available="Year-round"
        />

        <ProductCard
          image="src\images\Cuplikan layar 2025-05-29 120104.png"
          title="songket bungo cino"
          from="Sumatra Selatan"
          processing="Washed"
          Price="1,300-1,600 masl"
          motif="keindahan yang tersebar merata"
          available="every-major-holiday"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.25.55.jpeg"
          title="songket bungo intan"
          from="Sumatra Selatan"
          processing="Wet Process"
          Price="1,200-1,600 masl"
          flavor="Kehormatan dan Kesucian"
          available="May - October"
        />
      </div>
 <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard   
          image="src\images\WhatsApp Image 2025-05-28 at 23.27.48 (1).jpeg"
          title="songket nampak perak"
          from="Sumatra Barat"
          processing="Wet-Hulledd"
          Price="1,200-1,500 masl"
          motif="pertarungan antara kekuatan besar"
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.28.31.jpeg  "
          title="songket bintang kayu apuy"
          from="Sumatra Selatan"
          processing="Washed"
          Price="1,300-1,600 masl"
          motif="keindahan yang tersebar merata"
          available="every-major-holiday"
        />

        <ProductCard
          image="src\images\Cuplikan layar 2025-05-29 115912.png"
          title="songket pulir"
          from="Sumatra Selatan"
          processing="Wet Process"
          Price="1,200-1,600 masl"
          flavor="Kehormatan dan Kesucian"
          available="May - October"
        />
      </div>
      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.28.20.jpeg"
          title="songket bungo jepang"
          from="Sumatra Barat"
          processing="Wet-Hulledd"
          Price="1,200-1,500 masl"
          motif="pertarungan antara kekuatan besar"
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.27.59.jpeg"
          title="songket biji pare"
          from="Sumatra Selatan"
          processing="Washed"
          Price="1,300-1,600 masl"
          motif="keindahan yang tersebar merata"
          available="every-major-holiday"
        />

        <ProductCard
          image="src\images\Cuplikan layar 2025-05-29 115625.png"
          title="songket kenango makan ulet"
          from="Sumatra Selatan"
          processing="Wet Process"
          Price="1,200-1,600 masl"
          flavor="Kehormatan dan Kesucian"
          available="May - October"
        />
      </div>

<div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.30.02.jpeg"
          title="Songket Nago Betarung"
          from="Sumatra Barat"
          processing="Wet-Hulledd"
          Price="1,200-1,500 masl"
          motif="pertarungan antara kekuatan besar"
          available="Year-round"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.30.12.jpeg"
          title="Songket Tabur Limar"
          from="Sumatra Selatan"
          processing="Washed"
          Price="1,300-1,600 masl"
          motif="keindahan yang tersebar merata"
          available="every-major-holiday"
        />

        <ProductCard
          image="src\images\WhatsApp Image 2025-05-28 at 23.30.37.jpeg"
          title="Songket Cempuk"
          from="Sumatra Selatan"
          processing="Wet Process"
          Price="1,200-1,600 masl"
          flavor="Kehormatan dan Kesucian"
          available="May - October"
        />
      </div>

    </>
  );
}

function ProductCard(props) {
  return (
    <>
      {/* Card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={props.image}
            alt="Shoes"
            img
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{props.title}</h2>
          <p className=" ">{props.from}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Processing</span>
            <span className=" text-md">{props.processing}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Price</span>
            <span className=" text-md">{props.Price}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Motif Meaning</span>
            <span className=" text-md">{props.motif}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Available</span>
            <span className=" text-md">{props.available}</span>
          </div>

          <div className="card-actions justify-center">
            <button className="btn bg-amber-800 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
  
