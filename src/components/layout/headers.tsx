
"use client"
import { appConfig } from "@/config/appConfig"
import Link from "next/link"
import { PrimaryButton, SecondaryButton, TextButton } from "../ui/buttons"
import Image from "next/image"
import { useCookies  } from 'next-client-cookies';
import { authConfig } from "@/config/authConfig"
import { useRouter } from "next/navigation"
import { useCreateAccountModal } from "@/store/authModals";
import NestedDropdown from "./NestedDropdown"

export const Header  = ()=>{
    const cookies = useCookies()
    const token = cookies.get(authConfig.tokenCookieName)
    const {open} = useCreateAccountModal()
    const router = useRouter()
    return <div>
    <div className="flex border-whinGray border-b-2 items-center justify-center py-6 gap-40" >
    <div className="flex gap-4" >
    <video 
  poster="https://assets.grailed.com/logo.jpg" 
  className="w-[140px] h-auto"  

  autoPlay 
  loop 
  playsInline 
  muted
>
  <source src="https://assets.grailed.com/logo.webm" type="video/webm" />
  <source src="https://assets.grailed.com/logo.mp4" type="video/mp4" />
</video>
        <div className="flex p-1 gap-5  centerContent  border-2 border-black" >
        <i style={{WebkitTextStroke : "1px"}} className="bi bi-search  mx-4 h-fit  font-bold   "></i>
        <input placeholder="Search" className="w-[400px] outline-none h-fit "  />
        <TextButton className="border-stone-400 uppercase text-xs font-bold" >Search</TextButton>
        </div>
    </div>
        <div className="flex gap-3" >
            <PrimaryButton onClick={()=> token ? router.push(appConfig.routes.forSale ) : open() } className="font-semibold">SELL</PrimaryButton>
            <Link href={appConfig.routes.shop} ><PrimaryButton className="border-none  font-semibold" >SHOP</PrimaryButton></Link>
            <Link href={appConfig.routes.drycleanonly} ><PrimaryButton className="border-none font-semibold " >READ</PrimaryButton></Link>
            <TextButton className="border-stone-500 font-semibold" >LOGIN</TextButton>
            <SecondaryButton onClick={open}  >SITN UP</SecondaryButton>

        </div>
      </div>
      <div className="flex w-full items-center py-2 justify-center  border-whinGray border-b-2">
        <div className="flex pageMaxWidth w-full justify-between items-center ">
          <div className="text-sm group  relative ">
            <Link href={""} className="font-semibold">
              {" "}
              DESIGNERS{" "}
            </Link>
            <div className="w-[1400px] absolute z-50  hidden group-hover:block h-[410px]">
              <div className="w-[1400px]  flex justify-around py-10 gap-8 h-[410px] mt-2 border border-1 border-t-[#ddd] bg-[#fff] ">
                <div className="">
                  {" "}
                  <p className=" hover:text-[blue] text-[22px]">
                    {" "}
                    Designers A-Z
                  </p>
                </div>
                <div className="">
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Acne Studios{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Adidas
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Alexander McQueen{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Amiri{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Balenciaga{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Bape
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Bottega Veneta
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Celine{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Chanel
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Chrome Hearts
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Comme des Garcons
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Dior
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Dries Van Noten{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Fear of God{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Gucci{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Jacquemus
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Kapital
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Loewe{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Louis Vuitton
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Maison Margiela
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Nike
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Number (N)ine
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Off-White
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Prada
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Raf Simons
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Rick Owens
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Saint Laurent Paris{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Stone Island{" "}
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    Supreme
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Undercover
                  </Link>
                  <Link
                    className="block hover:text-[blue]  py-1 text-[14px]"
                    href={""}
                  >
                    {" "}
                    Vintage
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2 text-sm group  relative">
            <Link href={""} className="font-semibold">
              {" "}
              MENSWEAR{" "}
            </Link>

            <Image
              src={"/dropdown.svg"}
              alt="dropdown"
              width={13}
              height={13}
              className=""
            />
         
                      <div className="absolute  top-0 z-50 w-[240px]  h-[350px]  hidden group-hover:block">
              <div className="mt-7 py-3 flex  px-4 ml-[-50px] w-[180px]  h-[350px] border border-1 border-t-[#ddd] bg-[#fff]">
                <div className="font-semibold">
                  <Link
                    className="block hover:text-[blue]  py-2 text-[14px]"
                    href={""}
                  >
                    {" "}
                    ALL CATEGORIES
                  </Link>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    <p className="hover:text-[blue] ">Top</p>{" "}
                    <p className="text-[18px]">&gt;</p>
                    <NestedDropdown
                      menuItems={[
                        { title: "BLOUSES", href: "/" },
                        { title: "BODYSUITS", href: "/" },
                        { title: "  BUTTON UPS", href: "/" },
                        { title: " CROP TOPS", href: "/" },
                        { title: " HOODIES", href: "/" },
                        { title: "LONG SLEEVE T-SHIRTS", href: "/" },
                        { title: "POLOS", href: "/" },
                        { title: " SHORT SLEEVE T-SHIRTS", href: "/" },
                        { title: "SWEATERS", href: "/" },
                        { title: "SWEATSHIRTS", href: "/" },
                        { title: "TANK TOPS", href: "/" },
                        { title: " SHORT SLEEVE T-SHIRTS", href: "/" },
                        { title: "SWEATERS", href: "/" },
                        { title: "SWEATSHIRTS", href: "/" },
                                              { title: "TANK TOPS", href: "/" },
                                              
                                              
                        // ... add more menu items here
                      ]}
                    />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    BOTTOMS <p className="text-[18px]">&gt;</p>
                    <NestedDropdown
                      menuItems={[
                        { title: "JEANS", href: "/jeans" },
                        { title: "JOGGERS", href: "/joggers" },
                        { title: "JUMPSUITS", href: "/jumpsuits" },
                        { title: "LEGGINGS", href: "/leggings" },
                        { title: "MAXI SKIRTS", href: "/maxi-skirts" },
                        { title: "MIDI SKIRTS", href: "/midi-skirts" },
                        { title: "MINI SKIRTS", href: "/mini-skirts" },
                        { title: "PANTS", href: "/pants" },
                        // Add more items as needed
                      ]}
                    />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    OUTERWEAR <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    DRESSES <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    FOOTWEAR <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                  TAILORING <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    {" "}
                    ACCESSORIES <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center gap-2 text-sm group  relative">
            <Link href={""} className="font-semibold">
              {" "}
              WOMENSWEAR{" "}
            </Link>

            <Image
              src={"/dropdown.svg"}
              alt="dropdown"
              width={13}
              height={13}
              className=""
            />
            <div className="absolute  top-0 z-50 w-[240px]  h-[350px]  hidden group-hover:block">
              <div className="mt-7 py-3 flex  px-4 ml-[-50px] w-[180px]  h-[350px] border border-1 border-t-[#ddd] bg-[#fff]">
                <div className="font-semibold">
                  <Link
                    className="block hover:text-[blue]  py-2 text-[14px]"
                    href={""}
                  >
                    {" "}
                    ALL CATEGORIES
                  </Link>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    <p className="hover:text-[blue] ">Top</p>{" "}
                    <p className="text-[18px]">&gt;</p>
                    <NestedDropdown
                      menuItems={[
                        { title: "BLOUSES", href: "/" },
                        { title: "BODYSUITS", href: "/" },
                        { title: "  BUTTON UPS", href: "/" },
                        { title: " CROP TOPS", href: "/" },
                        { title: " HOODIES", href: "/" },
                        { title: "LONG SLEEVE T-SHIRTS", href: "/" },
                        { title: "POLOS", href: "/" },
                        { title: " SHORT SLEEVE T-SHIRTS", href: "/" },
                        { title: "SWEATERS", href: "/" },
                        { title: "SWEATSHIRTS", href: "/" },
                        { title: "TANK TOPS", href: "/" },
                        { title: " SHORT SLEEVE T-SHIRTS", href: "/" },
                        { title: "SWEATERS", href: "/" },
                        { title: "SWEATSHIRTS", href: "/" },
                                              { title: "TANK TOPS", href: "/" },
                                              
                                              
                        // ... add more menu items here
                      ]}
                    />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    BOTTOMS <p className="text-[18px]">&gt;</p>
                    <NestedDropdown
                      menuItems={[
                        { title: "JEANS", href: "/jeans" },
                        { title: "JOGGERS", href: "/joggers" },
                        { title: "JUMPSUITS", href: "/jumpsuits" },
                        { title: "LEGGINGS", href: "/leggings" },
                        { title: "MAXI SKIRTS", href: "/maxi-skirts" },
                        { title: "MIDI SKIRTS", href: "/midi-skirts" },
                        { title: "MINI SKIRTS", href: "/mini-skirts" },
                        { title: "PANTS", href: "/pants" },
                        // Add more items as needed
                      ]}
                    />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    OUTERWEAR <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    DRESSES <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    FOOTWEAR <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    BAGS & LUGGAGE <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    JEWELRY <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  <div className="   wtop flex justify-between  py-2 text-[14px]">
                    {" "}
                    ACCESSORIES <p className="text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm font-semibold">SNEAKERS</div>
          <div className="text-sm font-semibold">STAFF PICKS</div>
          <div className="text-sm font-semibold">COLLECTIONS</div>
        </div>
      </div>
    </div>
  
};
