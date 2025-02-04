"use client";

import Footer from "@/components/general/footer/footer";
import Header from "@/components/general/header/header";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import React from "react";
import "../styles/globals.css";
import { metadata } from "./metadata";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname: string = usePathname();
	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body
				className={`${roboto.variable} ${roboto.variable} antialiased`}
			>
				{(pathname === "/" ||
					pathname === "/delivery" ||
					pathname === "/services") && <Header />}
				<main className="main-content">{children}</main>
				{(pathname === "/" ||
					pathname === "/delivery" ||
					pathname === "/services") && <Footer />}
			</body>
		</html>
	);
}
