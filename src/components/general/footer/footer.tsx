import Image from "next/image";
import HomePageButton from "../../UI/customButton";
import s from "./footer.module.scss";

const Footer: React.FC = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer__top}>
				<div className={s.footer__logo}>
					<div className={s.footer__title}>
						<Image
							src="/icons/logo.svg"
							alt=""
							width={35}
							height={35}
						/>
						<div className="ml-2 flex flex-col">
							<p className="text-darkgreen font-bold text-2xl">
								Стальэнерго
							</p>
							<div className="flex items-center w-full">
								<div className=" bg-darkgray w-full"></div>
								<p className="text-darkgray font-bold text-1xl">
									Урал
								</p>
								<div className=" bg-darkgray w-full"></div>
							</div>
						</div>
					</div>
					<p className="text-sm text-gray2">
						<span className="block underline decoration-solid mb-4 text-black">
							Политика конфиденциальности
						</span>
						Вся предоставленная на сайте информация не является
						публичной офертой, определяемой положениями Статьи
						437(2) Гражданского кодекса РФ.
					</p>
				</div>
				<div className={s.footer__company}>
					<h1>Компания</h1>
					<div className={s.footer__links}>
						<a>Главная</a>
						<a>О компании</a>
						<a>Доставка и оплата</a>
					</div>
				</div>
				<div className={s.footer__catalog}>
					<h1 className="mb-8">Каталог</h1>
					<ul className="text-base">
						<li>Трубный прокат</li>
						<li>Трубопроводная арматура</li>
						<li>Нержавеющий прокат</li>
						<li>Черный прокат</li>
						<li>Листовой прокат</li>
						<li>Жаропрочный прокат</li>
						<li>Металлоконструкция</li>
						<li>Ферросплавы</li>
						<li>Металлические порошки</li>
					</ul>
				</div>
				<div className={s.footer__contacts}>
					<div className={s.footer__contacts_container}>
						<h1>Контакты</h1>
						<div className="text-high">
							<p>8 800 999 79 77</p>
							<p>atomes@help.com</p>
						</div>
					</div>

					<HomePageButton
						text="ЗАКАЗАТЬ ЗВОНОК"
						bgColor="#F3AA3C"
					></HomePageButton>
				</div>
			</div>
			<div className={s.footer__bottom}>
				<div className={s.footer__bottom_container}>
					<p className="text-sm text-white w-64">
						© 2009-2020 ООО “Стальэнерго”{" "}
						<span className="block">Все права защищены</span>
					</p>
					<div className={s.footer__button_container}>
						<img
							src="/footer-images/vk.png"
							alt=""
							className="w-[30px] h-[30px]"
						/>
						<img
							src="/footer-images/instagram.png"
							alt=""
							className="w-[30px] h-[30px]"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
