import Image from "next/image";

type Props = {
  number: number;
  imgSrc: string;
  name: string;
};

export default function SkillCell({ number, imgSrc, name }: Props) {
  return (
    <li
      className="grid grid-rows-[15%_70%_15%] bg-yellow-100 w-28 h-28
       border-slate-800 mr-1 mb-1 rounded-lg p-1 text-xs
       sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 lg:text-sm
       xl:w-44 xl:h-44 xl:text-base 
       transition ease-linear hover:scale-105 hover:shadow-md hover:shadow-gray-900 duration-200"
    >
      <span className="flex items-center justify-start text-left">
        {number}
      </span>
      <span className="relative">
        <Image src={imgSrc} alt={name} layout="fill"/>
      </span>
      <span className="flex items-center justify-end">{name}</span>
    </li>
  );
}
