import { fetchStyles } from "@/cms/fetchFuntions";
import Image from "next/image";
import { Styles } from "./_components/styles";
import { signIn } from "next-auth/react";
import HFooter from "./_components/HFooter";
import FeaturedCollections from "./_components/FeaturedCollections";
import ShopMenswear from "./_components/ShopMenswear";
import ShopWomenswear from "./_components/ShopWomenswear";
import PopularDesigners from "./_components/PopularDesigners";
import StaffPicks from "./_components/StaffPicks";
import {  manShop,shopLogo , wanShop } from "@/front_utils/info";


export default async function Home() {
  const styles = await fetchStyles();
  const manshops = manShop;
  const wanshops = wanShop;
  const shopLogs = shopLogo;


  return (
    <main className="flex  flex-col w-full items-center jsutify-center">
 
      <div className="hero flex items-center justify-center w-full h-[600px] relative">
      <video
  className="w-full absolute top-0 left-0 z-0 object-cover h-full"
  poster="/heroVideoPoster.jpg"  // Assuming this is correctly placed in the public folder
  src="https://videos.ctfassets.net/bdvz0u6oqffk/2z5u1zVuSQbfB5oRyHXvgR/4fa7c0ce24f0d39308c7d571d60ee5e3/desktop-hp-video.mp4"
  autoPlay={true}
  playsInline={true}
  loop={true}
  muted={true} // Add this if audio is not crucial and browser autoplay policies are a concern
></video>

        <div className="flex px-4 flex-col gap-6 items-center justify-center text-white z-10">
          <h3 className="text-[30px] sm:text-4xl font-bold text-center">
            THE PLATFORM FOR PERSONAL STYLE
          </h3>
        

          <h4 className="text-[22px] sm:text-3xl max-w-[600px] text-center">
            Buy, sell, discover authenticated pieces from the world&rsquo;s top
            brands.
          </h4>
          <div className="flex gap-4  sm:gap-11">
          <button className="py-3 px-2 text-[12px] sm:p-4 border border-1 hover:bg-[#0000ff] hover:border-0 duration-200  ease-linear border-white md:text-xl font-bold">
              SHOP MENSWEAR
            </button>
            <button className="py-3 px-2 text-[12px] sm:p-4 border border-1 hover:bg-[#0000ff] hover:border-0 duration-200  ease-linear border-white md:text-xl font-bold">
              SHOP WOMENSWEAR
            </button>
          </div>
        </div>
      </div>
      <Styles styles={styles || []} />
      <FeaturedCollections />
      <div className="px-4">
      <ShopMenswear manshops={manshops||[]} />
      <ShopWomenswear wanshops={wanshops||[]} />
      <PopularDesigners shopLogo={shopLogs||[]}  />
      </div>
      <StaffPicks/>
      <HFooter/>
      
    </main>
  );
}
