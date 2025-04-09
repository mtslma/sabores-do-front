"use client";

import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";

export default function Header() {

    // Lógica de abrir e fechar o menu está contida aqui
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>

        <header className="flex items-center justify-between border-b-2 p-4 z-10 shadow-sm">
            <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none md:hidden"
            >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
            </button>

            {/* Título da página */}
            <Link  href={"/"} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-500 md:text-4xl">
                <p>Sabores do Front</p>
            </Link>

            {/* Exibição da sidebar */}
            <Sidebar isOpen={menuOpen} />
        </header>
        </>
  );
}
