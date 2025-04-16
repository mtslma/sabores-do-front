"use client";
import Link from "next/link";

export default function NavigationBar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    // Lista de links que aparecerão na sidebar
    const LinksList = (
        <>
            {/* Home só aparece em mobile, talvez eu mude isso */}
            <span className="md:hidden">
                <LinkSidebar href="/" icon="home" onClick={onClose}>
                    Início
                </LinkSidebar>
            </span>
            <p className="text-xs font-bold mt-2 block md:hidden">Util</p>
            <LinkSidebar href="/receitas" icon="bowl-food" onClick={onClose}>
                Receitas
            </LinkSidebar>
            <p className="text-xs font-bold mt-2 block md:hidden">Outro</p>
            <LinkSidebar href="/sobre" icon="info-circle" onClick={onClose}>
                Sobre
            </LinkSidebar>
        </>
    );

    return (
        <>
            {/* Nav para dispositivos grandes */}
            <nav className="hidden gap-2 md:flex md:justify-center">{LinksList}</nav>

            {/* Sidebar para dispositivos pequenos */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 border-t-2
                    bg-slate-200 dark:bg-gray-900 p-4 transition-transform duration-100 ease-in-out z-10 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
            >
                {/* Botão de fechar dentro do próprio menu */}
                <button onClick={onClose} className="w-full flex flex-row items-center justify-start gap-4 px-4 py-1 mb-8 border-2 dark:hover:bg-gray-500 dark:border-gray-300 rounded-xl hover:bg-gray-300 transition-colors">
                    <p className="text-xl flex items-center justify-center gap-4">
                        <i className="fa-solid fa-xmark text-2xl" /> Fechar
                    </p>
                </button>
                <nav className="flex flex-col gap-2">{LinksList}</nav>
            </aside>
        </>
    );
}

// Componente para os links da sidebar
export function LinkSidebar(props: { href: string; icon: string; children: React.ReactNode; onClick?: () => void }) {
    const { href, icon, children, onClick } = props;
    return (
        <Link className="flex flex-row items-center justify-start gap-4 px-4 py-1.5 border-2 dark:hover:bg-gray-500 dark:border-gray-300 rounded-xl hover:bg-gray-300 transition-colors" href={href} onClick={onClick}>
            <i className={`text-2xl fa-solid fa-${icon} bg-gradient-to-tr from-emerald-700 dark:from-emerald-300 to-emerald-500 text-transparent bg-clip-text`} />
            <p className="text-xl">{children}</p>
        </Link>
    );
}
