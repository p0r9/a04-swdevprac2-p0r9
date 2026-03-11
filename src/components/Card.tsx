import styles from "./card.module.css"
import Image from "next/image";

export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}) {
  return (
    <div className="w-1/5 h-75 rounded-lg shadow-lg bg-white">
      
      <div className="w-full h-[70%] relative rounded-t-lg overflow-hidden">

        <Image
          src={imgSrc}
          alt="venue image"
          fill
          className="object-cover"
        />
        
      </div>

      <div className="w-full h-[30%] p-2 text-black">
        <h3 className="font-semibold">{venueName}</h3>
        <p className="text-sm text-black">
          A luxurious venue perfect for weddings, corporate events.
        </p>
      </div>

    </div>
  );
}