import PageLink from "@/components/PageLink/PageLink";
import PageTitle from "@/components/PageTitle/PageTitle";
import Image from 'next/image';

export default function NotFound(){


    return(
        <main className="flex flex-col justify-start items-center gap-8 h-screen md:h-screen">
            <p className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500">4 0 4</p>
            <PageTitle>Ops! Não chegamos lá ainda...</PageTitle>
            <p className="text-xl text-center">Essa página não está disponível.</p>

            <PageLink href={"/"}>Voltar ao início</PageLink>

        </main>
    )
}