import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/headers";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      {/* hero */}
      <div
        className="px-4 sm:px-16 bg-center flex justify-center items-center bg-cover h-[350px] w-full"
        style={{ backgroundImage: "url(/images/about/about-hero.jpg)" }}
      >
        <h2 className="text-[26px] text-[#fff] font-bold">
          Grailed is the one-stop destination for{" "}
          <br className="hidden sm:block" /> buying, selling and exploring
          menswear <br  className='hidden sm:block'/> and womenswear.
        </h2>
      </div>
     
      {/*  */}
      <div className="shadow-sm py-3 border hidden md:flex justify-center items-center gap-4  border-[#ddd]">
      <a href="#" className="text-[11px] font-semibold text-[#777]"    >BUY</a>
<a href="#buy" className="text-[11px] font-semibold text-[#777]"       >SELL</a>
<a href="#sell"   className="text-[11px] font-semibold text-[#777]"     >FEES</a>
<a href="#fee"  className="text-[11px] font-semibold text-[#777]"      >GRAILED APP</a>
<a href="#ios"  className="text-[11px] font-semibold text-[#777]"      >DRY CLEAN ONLY</a>
<a href="#social"  className="text-[11px] font-semibold text-[#777]"      >SOCIAL MEDIA</a>
<a href="#join"  className="text-[11px] font-semibold text-[#777]"      >JOBS</a>
<a href="#q"  className="text-[11px] font-semibold text-[#777]"      >HELP</a>

      </div>
      {/*  */}
      <div id="buy" className="sm:flex mx-auto max-w-[800px] px-4 justify-center gap-4 items-center ">
      <Image className="mx-auto" src={'/images/about/Screenshot_2019-03-11_19.07.10.png'} alt="shirt" width={300} height={400}/>
        <div className="mx-auto">
        <h2 className="text-[26px] text-[#000] font-bold">
        The Best Selection, at the  <br className="hidden sm:block" /> Best Prices
          </h2>
          <p className="text-[#777] text-[11px] py-4 max-w-[300px]">Browse our marketplace for incredible new and used clothing that you can’t find anywhere else. We curate the largest men’s fashion marketplace, with new products arriving every day. Grailed, with help from community, ensures all items are authentic. If anything goes wrong, every transaction conducted through Grailed with PayPal is eligible for a full refund.

          </p>
          <div className="flex gap-3 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[18px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 "> Brows the shop</Link>
            <Link href={'/'} className="border text-[12px] sm:text-[18px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 ">Buyer Protection</Link>

          </div>
        </div>
      </div>

      <div id="sell" className="sm:flex mx-auto py-8 max-w-[800px] px-4 justify-center gap-4 items-center ">
        <div className="mx-auto">
        <h2 className="text-[26px] text-[#000] font-bold">
        Make Money From Your Closet

          </h2>
          <p className="text-[#777] text-[11px] py-4 max-w-[300px]">
          Your closet is valuable. Flip your wardrobe on Grailed and find like-minded buyers from within our community. Listing an item is always free.


          </p>
          <div className="flex gap-3 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[18px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 "> Sell an item</Link>
            <Link href={'/'} className="border text-[12px] sm:text-[18px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 ">Seller Protection</Link>

          </div>
        </div>
        <Image className="mx-auto" src={'/images/about/ccp.jpg'} alt="shirt" width={300} height={400}/>

      </div>
      {/*  */}
      <div
        className="px-4 sm:px-16 bg-center  flex justify-center items-center bg-cover h-[350px] w-full"
        style={{ backgroundImage: "url(/images/about/fee-back.jpg)" }}
      >
        <div id="fee" className="">
        <h2 className="text-[26px] text-[#000] font-bold">
        Free for Buyers, Low Commission Fee for Sellers
          </h2>
          <p className="text-center  font-bold w-[130px] mx-auto bg-[#fafafa] py-4 px-8 rounded-md border border-[#ddd]">9%</p>
          <p className="text-center text-[11px] pb-4 pt-1 w-[130px] mx-auto ">Grailed Commission Fee
</p>

          <p className="text-[11px] font-semibold">Post any item for free. Grailed only charges a commission when your item sells.</p>
       <span className="text-[10px]"> Does Grailed charge a payment processing fee?</span>
          <a className="text-[blue] text-[10px]" href="https://help.grailed.com/hc/en-us/articles/360052676193-Does-Grailed-charge-a-payment-processing-fee" target="_blank">
         Learn more
        </a>
       </div>
      </div>
      {/*  */}
      <div id="buy" className="sm:flex mx-auto max-w-[800px] px-4 justify-center gap-4 items-center ">
      <Image className="mx-auto" src={'/images/about/About-Asset.jpeg'} alt="shirt" width={300} height={400}/>
        <div className="mx-auto">
        <h2 className="text-[26px] text-[#000] font-bold">
     Browse, Buy, Sell on the Go

          </h2>
          <p className="text-[#777] text-[11px] py-4 max-w-[300px]">The Grailed app lets you shop incredible pieces and sell your personal archive where you are. Get instant notifications on price drops, messages, and more.



          </p>
          <div className="flex gap-3 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[18px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-10 "> IOS</Link>

          </div>
        </div>
      </div>
<div id="ios" className="sm:flex mx-auto py-8 max-w-[800px] px-4 justify-center gap-4 items-center ">
        <div className="mx-auto">
        <h2 className="text-[26px] text-[#000] font-bold">
Shop, Study, Stay in the Know

          </h2>
          <p className="text-[#777] text-[11px] py-4 max-w-[300px]">
Dry Clean Only, our exclusive editorial platform, provides unique perspective on designers, drops and more. From designer archives to celebrity closet sales, it’s your springboard to shop the best pieces on the planet.



          </p>
          <div className="flex gap-3 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[12px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 "> READ OUR LATEST ARTICLES</Link>

          </div>
        </div>
        <Image className="mx-auto" src={'/images/about/dcoasdf.jpg'} alt="shirt" width={350} height={400}/>

      </div>

      {/*  */}
        <div
        className="px-4 sm:px-16 bg-center  flex justify-center items-center bg-cover h-[350px] w-full"
        style={{ backgroundImage: "url(/images/about/download.jpg)" }}
      >
        <div id="social" className="">
        <h2 className="text-[26px] text-[#000] font-bold">
Be Social          </h2>

          <p className="text-[11px] font-semibold">Follow us on Instagram and Twitter to keep up on the biggest drops and best pieces. Get inspired <br /> by our community who love to share their style.

          </p>
          <div className="flex gap-3 py-4 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[12px] bg-[#fff] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 "> INSTAGRAM
</Link>
            <Link href={'/'} className="border text-[12px] sm:text-[12px] bg-[#fff] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 ">TWITTER</Link>

          </div>

       
       </div>
      </div>
      {/*  */}
       <div id="join" className="sm:flex py-4 mx-auto max-w-[800px] px-4 justify-center gap-4 items-center ">
      <Image className="mx-auto" src={'/images/about/nyc_team2018.jpg'} alt="shirt" width={300} height={400}/>
        <div className="mx-auto">
        <h2 className="text-[26px] text-[#000] font-bold">
Join the Team

          </h2>
          <p className="text-[#777] text-[11px] py-4 max-w-[300px]">We are always looking for talented individuals to join our NYC-based team. Our team is full of people who are passionate about fashion and committed to improving our community marketplace.





          </p>
          <div className="flex gap-3 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[18px] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-10 "> AVAILABLE POSITIONS</Link>

          </div>
        </div>
      </div>
      {/*  */}
        <div
        className="px-4 sm:px-16 bg-center  flex justify-center items-center bg-cover h-[350px] w-full"
        style={{ backgroundImage: "url(/images/about/help2.jpg)" }}
      >
        <div id="q" className="">
        <h2 className="text-[26px] text-[#000] font-bold">
More Questions?
         </h2>

          <p className="text-[11px] font-semibold">We’ve got answers. Visit our Help Section for our most Frequently Asked Questions, detailed info <br /> on how Grailed works, or you can get in touch directly with our Community Support Team.



          </p>
          <div className="flex gap-3 py-4 items-center">
            <Link href={'/'} className="border text-[12px] sm:text-[12px] bg-[#fff] border-[#ddd] hover:border-[#000] ease-linear duration-200 py-2 px-6 "> VISIT THE HELP CENTER
</Link>

          </div>

       
       </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
