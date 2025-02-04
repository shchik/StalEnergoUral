import { News } from "@/types/news";

type NewsItemProps = {
	newsItem: News;
};

const NewsItem: React.FC<NewsItemProps> = ({ newsItem }) => {
	return (
		<li>
			<p className="text-normal font-medium underline decoration-solid">
				{newsItem.newsTitle}
			</p>
			<p className="text-normal font-medium">{newsItem.date}</p>
			<p className="text-sm">{newsItem.info}</p>
		</li>
	);
};

export default NewsItem;
