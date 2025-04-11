"use client";
import PageLink from "@/components/PageLink/PageLink";
import PageTitle from "@/components/PageTitle/PageTitle";
import TextBox from "@/components/TextBox/TextBox";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Cada receita segue essa estrutura
interface propsReceita {
    id: string;
    categoria: string;
    nome: string;
    ingredientes: string[];
    modoPreparo: string;
    tempo: string;
    imagem: string;
}

export default function Receita() {
    // Pegando o id do parâmetro da URL
    const { id } = useParams();

    // Informações da receita são armazenadas aqui
    const [receita, setReceita] = useState<propsReceita | null>(null);

    // Erros vão ser armazenados aqui
    const [erro, setErro] = useState<string | null>(null);

    // Buscando pela receita quando a página for carregada
    useEffect(() => {
        async function BuscarReceita() {
            try {
                const response = await fetch("/data/receitas.json");

                if (!response.ok) {
                    throw new Error("Erro ao acessar a base de dados...");
                }

                const data = await response.json();

                // Buscando pela receita por meio do ID obtido no parâmtro da URL
                const receitaData = data.find((d: { id: string }) => d.id == id);

                if (!receitaData) {
                    throw new Error("Receita não encontrada...")
                }

                setReceita(receitaData);
            }
            catch (error) {
                // Definindo a mensagem de erro
                setErro((error instanceof Error ? error.message : "Erro desconhecido"));
            }
        }
        // Se passar um ID ele retorna
        if (id) {
            BuscarReceita();
        }
    }, [id]);

    // Verificando se existe erro antes de retornar a página
    if (erro) {
        return (
            <main className="flex flex-col justify-start items-center gap-8 h-screen md:h-screen">
                <p className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-500">4 0 4</p>
                <PageTitle>Ops! Não chegamos lá ainda...</PageTitle>
                <p className="text-xl text-center text-red-400 font-bold">{erro}</p>
                <PageLink href={"/receitas"}><i className="fa-solid fa-lemon text-amber-300" /> Voltar para receitas</PageLink>
            </main>
        );
    }

    // Mapeando categorias para definir as cores que apareceram
    const categoriaMap: Record<string, { cor: string }> = {
        Doces: { cor: "bg-pink-200" },
        Salgados: { cor: "bg-orange-200" },
        Massas: { cor: "bg-yellow-200" },
        Bebidas: { cor: "bg-blue-200" },
        Sobremesas: { cor: "bg-purple-200" },
    };

    // Definindo a cor da categoria de acordo com o map, tem um padrão caso o nome esteja errado
    const corDaCategoria = receita?.categoria ? categoriaMap[receita.categoria]?.cor || "bg-gray-200" : "bg-gray-200";

    return (
        <main className="flex flex-col justify-start items-center gap-6 md:gap-6">
            <div className="flex items-center justify-center flex-row gap-4">
                <PageLink href={"/receitas"}>
                    <i className="fa-solid fa-arrow-left" />
                </PageLink>
                <PageTitle>Detalhes receita #{id}</PageTitle>
            </div>

            <TextBox>
                {/* Nome da receita */}
                <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{receita?.nome}</h1>
                <div className="flex flex-col gap-2">
                    {/* Imagem */}
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-24 lg:w-36 lg:h-36 border-2 border-emerald-600 dark:border-emerald-400 flex-shrink-0 overflow-hidden rounded-lg bg-emerald-600">{receita?.imagem && <Image src={receita.imagem} alt={`Imagem de ${receita.nome}`} width={144} height={144} className="w-full h-full object-cover" />}</div>

                        {/* Tempo de preparo */}
                        <div className="flex flex-wrap lg:flex-col justify-start items-start gap-2">
                            <div className="flex gap-2">
                                <strong>Categoria:</strong>
                                {receita?.categoria && <span className={`px-3 py-1 rounded-full text-sm font-semibold text-gray-800 w-fit ${corDaCategoria}`}>{receita.categoria}</span>}
                                {/* Tempo de preparo */}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <strong>Tempo preparo:</strong>
                                {receita?.tempo}
                            </div>
                        </div>

                    </div>

                    {/* Mapeando os ingredientes */}
                    <p className="font-bold">Ingredientes: </p>
                    <ul className="p-4 bg-gray-300 dark:bg-gray-900 rounded-xl">
                        {receita?.ingredientes.map((ingrediente, index) => {
                            return <li key={index}>- {ingrediente}</li>;
                        })}
                    </ul>

                    {/* Modo de preparo */}
                    <p className="font-bold">Modo de preparo: </p>
                    <div className="p-4 bg-gray-300 dark:bg-gray-900 rounded-xl">
                        <p>{receita?.modoPreparo}</p>
                    </div>
                </div>
            </TextBox>
        </main>
    );
}
