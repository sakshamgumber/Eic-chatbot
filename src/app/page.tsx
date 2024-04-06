"use client"
import { BentoGrid, BentoGridItem } from "@/components/(global)/bento-grid";
import Navbar from "@/components/(global)/navbar";
import { items } from "@/components/(global)/bento-skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ContainerScroll } from "@/components/(global)/container-scroll-animation";
import img from "@/app/assets/1.jpeg"
import { CheckIcon, CrossIcon, NutOffIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/(global)/3d-card";
import { LampComponent } from "@/components/(global)/lamp";
export default  function Home() {
 
  
  return (
    <main className=" flex flex-col gap-[20px] overflow-x-hidden">
      <Navbar/>
      <section  className="flex flex-col w-screen bg-background text-foreground relative pt-[80px]">
       <ContainerScroll 
       titleComponent={
        <>
          <h1 className="text-5xl font-semibold text-black dark:text-white">
            The first in its category<br />
            <span className="text-6xl  md:text-[10vw] font-bold mt-1 leading-none">
              Oversee
            </span>
          </h1>
        </>
      }
       >
         <Image
          src={img}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top object-center"
          draggable={false}
        />
       </ContainerScroll>
      </section>
      <section id="vision" className="flex justify-center items-center pt-[50px]">
        <div className="flex flex-col gap-4 max-md:w-[80vw]">
        <h1 className=" md:text-8xl max-md:px-6 text-4xl text-foreground py-4">Our Vision</h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-8 py-6 px-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
      </section>
      <section className=" max-md:mt-[-500px]">
        <LampComponent className="" />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72 bg-black">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Silver Package
                <h2 className="text-6xl ">$3</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Basic package with essential tools for individuals or small businesses starting out.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <NutOffIcon/>
                    Active customer care
                  </li>
                  <li className="flex items-center gap-2">
                    <NutOffIcon/>
                    Early feature access
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Gold Package
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Free 2 online meetings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Active customer care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Early feature access
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
               Platinum Package
                <h2 className="text-6xl ">$99</h2>
              
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Premium package with top-tier services and advanced customization options for established enterprises.
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />Preference over other customers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    50% appointment discount
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    AI Assistance
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
