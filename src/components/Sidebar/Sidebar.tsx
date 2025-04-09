"use client";
import Link from "next/link";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {

    // Lista de links que aparecerão na sidebar
    const LinksList = (
        <>
            {/* Home só aparece em mobile, talvez eu mude isso */}
            <span className="md:hidden"><LinkSidebar  href="/" icon="home">Início</LinkSidebar></span>
            <LinkSidebar href="/receitas" icon="bowl-food">Receitas</LinkSidebar>
            <LinkSidebar href="/sobre" icon="info-circle">Sobre</LinkSidebar>
        </>
    )

    return (
        <> 
            {/* Nav para dispositivos grandes */}
            <nav className="hidden gap-2 md:flex md:justify-center">
                {LinksList}
            </nav>

            {/* Sidebar para dispositivos pequenos */}
            <aside className={`fixed top-16 left-0 h-full w-64 border-t-2
                    bg-gray-100 border-r-2 p-4 transition-transform duration-100 ease-in-out z-10 
                    ${ isOpen ? "translate-x-0" : "-translate-x-full" } md:hidden`}>
                <nav className="flex flex-col gap-2">
                    {LinksList}
                </nav>
            </aside>
        </>
    );
}

// Componente para os links da sidebar
export function LinkSidebar(props: { href: string; icon: string; children: React.ReactNode; }) {
    const { href, icon, children } = props;
    return (
        <Link className="flex flex-row items-center justify-start gap-4 px-4 py-1.5 border-2 border-black rounded-xl hover:bg-gray-300 transition" href={href}>
        <i className={`text-2xl fa-solid fa-${icon} bg-gradient-to-tr from-emerald-700 to-emerald-500 text-transparent bg-clip-text`}/>
        <p className="text-xl">{children}</p>
        </Link>
    );
}
