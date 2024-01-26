import { fetchStyles } from "@/cms/fetchFuntions";
import Image from "next/image";
import { Styles } from "./_components/styles";

export default async  function Home() {
const styles = await fetchStyles()

  return (
    <main className="flex flex-col w-full items-center jsutify-center" >
      <div className="hero flex items-center justify-center w-full h-[600px] relative" >
        <video className="w-full absolute top-0 left-0 z-0 object-cover h-full"  poster="/heroVideoPoster.jpg" src="/heroVideo.mp4" autoPlay={true} playsInline={true} loop={true} ></video>
        <div className="flex flex-col gap-6 items-center justify-center text-white z-10" >
          <h3 className="text-4xl font-bold text-center" >THE PLATFORM FOR PERSONAL STYLE</h3>
          <h4 className="text-3xl max-w-[600px] text-center" >Buy, sell, discover authenticated pieces from the world's top brands.</h4>
          <div className="flex  gap-11" >
          <button className="p-4 border-2 border-white text-xl font-bold" >SHOP MENSWEAR</button>
          <button className="p-4 border-2 border-white text-xl font-bold" >SHOP WOMENSWEAR</button>
          </div>
        </div>
      </div>
      <Styles styles={styles || [] } />
    </main>
  );
}
