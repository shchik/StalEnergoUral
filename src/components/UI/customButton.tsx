interface HomePageButtonProps {
  text: string;
  bgColor: string;
}

export default function HomePageButton({ text, bgColor }: HomePageButtonProps) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="bg-darkgreen text-white px-8 py-4 rounded-md hover:shadow-[0px_0px_4px_#171717] active:opacity-70"
    >
      {text}
    </button>
  );
}
