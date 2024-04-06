import { CrossIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type HomeCardProps={
    className:string,
    title:string,
    description:string,
    handleClick: any,
}

const HomeCard = ({ className,  title, description, handleClick }: HomeCardProps) => {
    return (
      <section
        className={cn(
          'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
          className
        )}
        onClick={handleClick}
      >
        <div className="flex-center  size-12 rounded-[10px]">
          <CrossIcon/>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-normal">{description}</p>
        </div>
      </section>
    );
  };
  
  export default HomeCard;