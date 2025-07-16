import { Star } from "lucide-react";

const Rating = ({ rate }: { rate: number }) => {
	return (
		<div className="flex gap-x-0.5 item-center">
			{Array.from({ length: rate }).map((_, index) => (
				<Star
					key={index}
					strokeWidth={0}
					fill="#DBC64E"
					size={24}
				/>
			))}
		</div>
	);
};

export default Rating;
