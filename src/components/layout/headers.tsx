
"use client"
import { appConfig } from "@/config/appConfig"
import Link from "next/link"
import { PrimaryButton, SecondaryButton, TextButton } from "../ui/buttons"
import Image from "next/image"
import { useCookies } from 'next-client-cookies';
import { authConfig } from "@/config/authConfig"
import { useRouter } from "next/navigation"
import { useCreateAccountModal } from "@/store/authModals";
import NestedDropdown from "./NestedDropdown"
import { useEffect, useState } from "react"

export const Header: React.FC = ()=>{
    const cookies = useCookies()
  const { open } = useCreateAccountModal()
    const router = useRouter()
    const token = cookies.get(authConfig.tokenCookieName)
  console.log("token", token)
  const [sticky, setSticky] = useState<boolean>(false);

  let timeoutId: number | null = null;
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleScroll = (): void => {
      if (timeoutId !== null) {
          clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
          const currentScrollPos = window.pageYOffset;
          const stickyClassApplied = currentScrollPos > 0;
          setSticky(stickyClassApplied);
      }, 100); // Adjust delay as needed
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
          if (timeoutId !== null) {
              clearTimeout(timeoutId);
          }
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

    return         <div className="nav1 bg-[#fff] ">

    <div className=" flex   overflow-hidden px-4 border-whinGray border-b-2 items-center justify-between xl:justify-center py-3 sm:py-6 gap-2 sm:gap-40" >
  {/* logo,searchbox */}
        <div className="flex gap-4" >
    <video 
  poster="https://assets.grailed.com/logo.jpg" 
  className="w-[90px] sm:w-[140px] h-auto"  

  autoPlay 
  loop 
  playsInline 
  muted
  
>
  <source src="https://assets.grailed.com/logo.webm" type="video/webm" />
  <source src="https://assets.grailed.com/logo.mp4" type="video/mp4" />
</video>
        <div className="flex p-1 gap-5 w-[160px] sm:w-[400px!important] lg:w-auto centerContent  border-1 border-black" >
        <i style={{WebkitTextStroke : "1px"}} className="bi bi-search  mx-4 h-fit  font-bold   "></i>
        <input placeholder="Search" className="w-[90px] sm:w-[200px] md:w-[350px] xl:w-[400px] outline-none h-fit "  />
        <TextButton className="border-stone-400 hidden sm:block uppercase text-xs font-bold" >Search</TextButton>
        </div>
        </div>
        {/* buttons */}
        <div className="hidden xl:flex gap-3" >
            <PrimaryButton onClick={()=> token ? router.push(appConfig.routes.forSale ) : open() } className="font-semibold">SELL</PrimaryButton>
            <Link href={appConfig.routes.shop} ><PrimaryButton className="border-none  font-semibold" >SHOP</PrimaryButton></Link>
            <Link href={appConfig.routes.drycleanonly} ><PrimaryButton className="border-none font-semibold " >READ</PrimaryButton></Link>
            <TextButton className="border-stone-500 font-semibold" >LOGIN</TextButton>
            <SecondaryButton onClick={open}  >SITN UP</SecondaryButton>

        </div>
        {/* hambergur and heart icon */}
        <div className="flex gap-4 items-center xl:hidden">
        <svg className="Heart-module__heart___GCAPd heart" width="24px" height="24px" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8941 12.6944L14 22.5886H12L2.10585 12.6944C-0.701951 9.8866 -0.701951 5.33367 2.10585 2.52587C4.91366 -0.281938 9.46658 -0.281938 12.2744 2.52587L13 3.25148L13.7256 2.52587C16.5334 -0.281938 21.0863 -0.281938 23.8941 2.52587C26.702 5.33367 26.702 9.8866 23.8941 12.6944Z" fill="black"></path></svg>
          {
            !mobileMenu?      <svg onClick={()=>{  setMobileMenu(!mobileMenu);}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-menu-icon"><rect width="24" height="24" fill="white"></rect><path d="M3 5H21V6.5H3V5Z" fill="black"></path><path d="M3 11.5H21V13H3V11.5Z" fill="black"></path><path d="M3 18H21V19.5H3V18Z" fill="black"></path></svg>
:<svg onClick={()=>{  setMobileMenu(!mobileMenu);}}  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2683_5091)"><circle cx="11" cy="11" r="10.5" fill="#E1E1E1"></circle><path d="M9.9393 11.0001L5.96964 14.9697L7.03029 16.0304L11 12.0607L14.9696 16.0304L16.0303 14.9697L12.0606 11.0001L16.0303 7.03039L14.9696 5.96973L11 9.9394L7.0303 5.96973L5.96964 7.03039L9.9393 11.0001Z" fill="#343434"></path></g><defs><clipPath id="clip0_2683_5091"><rect width="22" height="22" fill="white"></rect></clipPath></defs></svg>
       }
       
        </div>
      </div>
      {/* dropdown contents */}
      {!sticky ?
      <div className="hidden lg:flex px-4 w-full items-center py-2 justify-center  border-whinGray border-b-2">
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
              <div className="mt-7 py-3 flex pl-4 ml-[-50px] w-[190px]  h-[350px] border border-1 border-t-[#ddd] bg-[#fff]">
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
                    BOTTOMS <p className="  text-[18px]">&gt;</p>
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
                  TAILORING<p className="ml-4 text-[18px]">&gt;</p>
                    <NestedDropdown 
        menuItems={[
          { title: "JEANS", href: "/jeans" },
          { title: "JOGGERS", href: "/joggers" },
          // ... add more items
        ]}
      />
                  </div>
                  
                  <div className=" w-[130px]  wtop flex justify-between  py-2 text-[14px]">
                    {" "}
                    ACCESSORIES     <p className="text-[18px]">&gt;</p>
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
        : ""}
      

      {/* mobile menu */}
      <div className={`${
    mobileMenu ? "translate-x-0" : "-translate-x-full"
  } p-6  shadow-lg absolute xl:hidden overflow-y-scroll top-0 left-0 mx-4 ml-[-10px] bg-[#fafafa] mt-[-10px]  my-2 h-[100vh] w-[340px] min-w-[300px] z-50 rounded-xl transition-transform duration-500 ease-in-out`}>
  sdkkskdklsdlsd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nobis magni delectus possimus consequuntur. Id, sed commodi reprehenderit aliquid tempore repellat autem delectus dolor pariatur aut est iusto velit accusantium cum, dolorum sapiente? Debitis quaerat praesentium tempore libero molestias laudantium, reprehenderit iste architecto optio magnam. Excepturi repellendus eius deserunt accusamus adipisci eligendi officia dolorum veritatis vel nulla quod tempore quidem veniam id eum ullam aperiam aspernatur sed, tenetur explicabo aut? Earum delectus voluptas a error at. Minus harum animi dolorem ullam temporibus autem iusto quos numquam hic dolore modi ut, asperiores fugit distinctio consequuntur perferendis, maiores deleniti! Sit, quisquam reiciendis soluta recusandae voluptates voluptas quaerat consequatur repudiandae? Aspernatur nostrum nesciunt doloribus officiis fugiat vel iusto, ea suscipit deleniti cupiditate molestias reprehenderit ad quae eveniet amet cum accusamus laborum sunt earum eos ratione minima commodi in facilis! Sit blanditiis obcaecati harum. Quod dolor id voluptates fuga officia asperiores eos cupiditate illum officiis ducimus alias qui recusandae nostrum laudantium, possimus, dignissimos labore ad saepe ipsam. Consequuntur molestias, repudiandae animi eos a inventore placeat, voluptatibus aliquid eveniet quibusdam recusandae explicabo tempora earum dolores repellat assumenda facere deleniti dolore ipsa, odit deserunt! Consequuntur sequi vero laudantium recusandae. Esse consectetur laudantium ut id hic commodi veritatis optio rem, maxime officiis nemo nulla sapiente necessitatibus animi sit nam aperiam culpa ea cumque enim iusto delectus. Sequi, perspiciatis itaque. Perferendis quam, deserunt porro nemo eum dolor non nihil modi officia temporibus veritatis voluptates possimus totam veniam hic ab minima? Adipisci repellendus quas molestiae ab alias vitae laborum veniam assumenda pariatur reprehenderit aliquam magni, illo repudiandae odio enim quam accusantium sed, nulla quo amet mollitia doloribus velit in. Praesentium eos, delectus quisquam, corporis iste nihil illo, accusamus molestias vel minima recusandae nostrum. Quae amet quod sunt suscipit necessitatibus? Aperiam aliquid, nemo at perspiciatis itaque est voluptatibus cupiditate optio numquam tempora voluptate commodi, vitae nostrum labore? Veniam, tenetur expedita! Beatae quidem incidunt eligendi omnis quos! Voluptatum ipsam optio mollitia repudiandae corrupti cumque reprehenderit aspernatur, explicabo ab illum quaerat? Magni odit culpa quae laboriosam deleniti ratione minus voluptatibus animi suscipit, optio ipsam distinctio sapiente officia praesentium nesciunt sequi labore exercitationem architecto! Inventore voluptate temporibus dolor fuga rerum possimus? Et, eligendi omnis cupiditate perferendis explicabo voluptatem natus voluptatibus ratione debitis error quidem. Illum inventore accusamus neque odit, debitis quos quo, sapiente nemo expedita, quaerat incidunt obcaecati. Aperiam possimus hic molestias nemo corrupti earum deleniti voluptates quibusdam commodi cumque, pariatur quidem maiores reprehenderit sed tempore neque suscipit inventore dolores exercitationem sint animi. Consequuntur dolorem libero totam adipisci sint accusantium dolore in, ipsa, commodi pariatur vero. Consequuntur ipsam voluptate dignissimos id fugit iure nulla nesciunt numquam perspiciatis nisi tempore laboriosam vero eligendi nobis nemo, quasi possimus quas dolores quis in sint iusto ipsa vel amet? Omnis repellat eveniet nobis culpa autem, nesciunt unde quisquam perspiciatis aperiam dolorum consequatur perferendis beatae obcaecati id soluta excepturi amet dolor dolorem cum modi adipisci exercitationem totam earum quae. Voluptate quisquam ullam explicabo delectus, sit asperiores quidem omnis voluptatum a deleniti modi fugiat earum inventore ratione labore vitae.
</div>

    </div>
  
};
