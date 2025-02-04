interface HomePageButtonProps {
	text: string;
	bgColor: string;
}

export default function HomePageButton({ text, bgColor }: HomePageButtonProps) {
	return (
		<button
			style={{ backgroundColor: bgColor }}
			className="bg-darkgreen text-white px-10 py-5 rounded-md 
      hover:shadow-[0px_0px_4px_#171717] active:opacity-70
      max-lg:px-8 max-lg:py-4 
      max-md:px-6 max-md:py-3 
      max-sm:px-4 max-sm:py-2 max-sm:text-sm"
		>
			{text}
		</button>
	);
}
