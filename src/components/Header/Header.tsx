"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Header() {
    // Hooks para alterar o menu
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    // Hooks para alterar o tema usando o localStorage e botão
    const [lightModeActive, setLightModeActive] = useState(false);

    const toggleTheme = () => {
        const isLight = !lightModeActive;
        const newTheme = isLight ? "light" : "dark";

        // Atualizando o tema
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        setLightModeActive(isLight);

        // Salvando no localStorage
        localStorage.setItem("theme", newTheme);
    };

    // Atualiza o tema com base no localStorage ao carregar
    useEffect(() => {
        function loadTheme() {
            if (typeof window !== undefined) {
                const savedTheme = localStorage.getItem("theme") || "light";
                document.documentElement.classList.toggle("dark", savedTheme === "dark");
                setLightModeActive(savedTheme === "light");
            }
        }
        loadTheme();
    }, []);

    return (
        <header className="flex items-center justify-between border-b-2 p-4 z-10 shadow-sm bg-white dark:bg-gray-950">
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
                    <i className={`fa-solid fa-${lightModeActive ? "moon" : "sun"}`} />
                </button>

                <NavigationBar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>
        </header>
    );
}
