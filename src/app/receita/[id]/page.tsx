"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Cada receita segue essa estrutura
interface propsReceita {
    id: string;
    categoria: string;
    nome: string;
    ingredientes: [];
    modoPreparo: string;
    tempo: string;
    imagem: string;
}

export default function Receita(){

    // Pegando o id do parâmetro da URL
    const { id } = useParams();

    const [receita, setReceita] = useState<propsReceita | null>(null)

    // Buscando pela receita quando a página for carregada
    useEffect( () => {
        async function BuscarReceita() {
            const response = await fetch("/data/receitas.json");
            const data = await response.json();

            // Buscando pela receita por meio do ID obtido no parâmtro da URL
            const receitaData = data.find((d: { id: string} ) => d.id == id);

            setReceita(receitaData);
        }
        BuscarReceita();
    }, [id])

    return(
        <main >
            <PageTitle>Receita de {receita?.nome}</PageTitle>
        </main>
    )
}