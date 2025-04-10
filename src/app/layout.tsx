import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Sabores do Front",
    description: "Receitas maravilhosas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className="">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </head>
            <body className=" dark:bg-gray-700 dark:text-gray-200">
                <div className="h-screen flex flex-col justify-between">
                    <Header></Header>
                    <div className="my-8 mx-4">{children}</div>
                    <Footer></Footer>
                </div>
            </body>
        </html>
    );
}
