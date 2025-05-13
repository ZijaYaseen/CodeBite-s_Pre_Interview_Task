import { IoMdStar } from "react-icons/io";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div
      className="
        relative md:px-4 px-2 py-6 border rounded-2xl font-space-mono overflow-hidden 
        transition duration-300 ease-out hover:shadow-lg hover:bg-primary_text hover:text-background
      "
    >
      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-white/30
          to-white/3
          pointer-events-none
          transition duration-300 ease-out
          hover:from-white/10 hover:to-white/0
        "
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col md:gap-4 gap-2">
        <IoMdStar size={26} className="transition duration-300 hover:text-yellow-500" />
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="md:text-base text-xs">{description}</p>
      </div>
    </div>
  );
}
