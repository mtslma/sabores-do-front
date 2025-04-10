"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";

export default function Header() {
    // Hooks para alterar o menu
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    // Lógica para alterar o tema e ícone do botão de tema
    const [darkModeActive, setDarkModeActive] = useState(false);

    const toggleTheme = () => {
        // Aplicando a classe dark para todo o html -- https://tailwindcss.com/docs/dark-mode
        document.documentElement.classList.toggle("dark");
        setDarkModeActive(!darkModeActive);
    };

    return (
        <header className="flex items-center justify-between border-b-2 p-4 z-10 shadow-sm bg-white dark:bg-gray-700">
            {/* Botão da sidebar */}
            <button onClick={toggleMenu} className="text-2xl focus:outline-none md:hidden">
                <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
            </button>

            <Link href={"/"} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 dark:from-emerald-400 to-emerald-500 md:text-4xl">
                <p>Sabores do Front</p>
            </Link>

            <div className="flex justify-between gap-8">
                {/* Botão de tema */}
                <button onClick={toggleTheme} className="font-bold text-2xl hover:cursor-pointer">
                    <i className={`fa-solid fa-${darkModeActive ? "sun" : "moon"}`} />
                </button>

                <Sidebar isOpen={menuOpen} />
            </div>
        </header>
    );
}
