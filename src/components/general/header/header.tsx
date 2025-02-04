"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={s.header}>
			<div className={s.header__top}>
				<div className={s["header__left-section"]}>
					<div className={s.header__title}>
						<Image
							src="/icons/logo.svg"
							alt=""
							width={35}
							height={35}
						/>
						<div className="ml-2 flex flex-col">
							<p className="text-darkgreen font-bold text-3xl">
								Стальэнерго
							</p>
							<div className="flex items-center w-full">
								<div className={s.header__line}></div>
								<p className="text-darkgray font-bold text-1xl">
									Урал
								</p>
								<div className={s.header__line}></div>
							</div>
						</div>
					</div>
					<div className="text-sm leading-3 ml-8 w-[40%]">
						Оптовые поставки металлопроката по России и странам СНГ
					</div>
				</div>

				<div className={s["header__center-section"]}>
					<ul className="text-base">
						<li>
							<Link href="/">Главная</Link>
						</li>
						<li>
							<Link href="/services">Услуги</Link>
						</li>
						<li>
							<Link href="/delivery">Доставка</Link>
						</li>
					</ul>
				</div>

				<div className={s["header__right-section"]}>
					<div className="header_contacts flex">
						<Image
							src="/icons/phone-call.svg"
							alt=""
							width={12}
							height={12}
						/>
						<p className="text-high font-bold ml-2.5">
							8 800 999 79 77
						</p>
					</div>
					<div>
						<p className="phone-order font-base text-sm leading-3">
							Заказать звонок
						</p>
						<div className={s["header__dashed-line"]}></div>
					</div>
				</div>
			</div>

			<div className={s.header__divider}></div>

			<div className={s.header__bottom}>
				<div className={s.header__catalog}>
					<p className="font-medium text-base ml-4">КАТАЛОГ</p>
					<button>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.6 5.40004L7.49999 9.60004L2.39999 5.40004"
								stroke="#FFFFFF"
								strokeWidth="3.2"
							/>
						</svg>
					</button>
				</div>
				<div className={s.header__search}>
					<Image
						src="/icons/search-icon.svg"
						alt=""
						width={16}
						height={16}
						className="ml-6"
					/>
					<input
						type="text"
						defaultValue="Поиск по каталогу"
						className="ml-4 w-4/5 border-0 outline-0 text-base"
					/>
				</div>
				<div className={s.header__address}>
					<Image
						src="/icons/adress-icon.svg"
						alt=""
						width={12}
						height={12}
					/>
					<p className="text-sm ledding-3 ml-2">
						Свердл. обл., г. Первоуральск Пн-Вс 8:00 - 21:00
					</p>
				</div>
				<div className={s.header__profile}>
					<div className="flex items-center">
						<Image
							src="/icons/user-icon.svg"
							alt=""
							width={26}
							height={26}
						/>
						<svg
							className="stroke-green-600 cursor-pointer"
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.6 5.40004L7.49999 9.60004L2.39999 5.40004"
								stroke="currentColor"
								strokeWidth="3.2"
							/>
						</svg>
					</div>
					<div className="mr-3">
						<Image
							src="/icons/shopping-cart.svg"
							alt=""
							width={26}
							height={26}
							className="cursor-pointer shopping-cart-image"
						/>
					</div>
				</div>
				<p className={s["header__shop-number"]}>2</p>
			</div>
		</header>
	);
};

export default Header;
