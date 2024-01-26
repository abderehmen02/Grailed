import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="hero w-full h-[500px] relative" >
        <video className="w-full object-cover h-full"  poster="/heroVideoPoster.jpg" src="/heroVideo.mp4" autoPlay={true} playsInline={true} loop={true} ></video>
      </div>
    </main>
  );
}
