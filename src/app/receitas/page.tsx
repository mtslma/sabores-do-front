"use client";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import RecipeDisplayBox from "@/components/RecipeDisplayBox/RecipeDisplayBox";

// Cada receita segue essa estrutura
interface propReceitas {
    id: string;
    categoria: string;
    nome: string;
    tempo: string;
    imagem: string;
    ingredientes: [];
}

export default function Receitas(){

    // Lista de receitas
    const [receitas, setReceitas] = useState<propReceitas[]>([]);
    const [filtro, setFiltro] = useState<string>("Todas");

    // Buscando por receitas
    useEffect( () => {
        async function buscarReceitas() {
            try{
                // Fazendo o fetch
                const response = await fetch("/data/receitas.json");
                const data = await response.json();

                // Definindo as receitas na lista
                setReceitas(data);
            } catch(error){
                console.log(error)
            }           
        }
        buscarReceitas();
    }, [])

    // Função para filtrar pela categoria
    const receitasFiltradas = filtro === "Todas" ? receitas : receitas.filter(receita => receita.categoria === filtro);

    return(
        <main className={`flex flex-col justify-start gap-6 items-center ${filtro == "todas" ? "h-screen": "h-full"}`}>
            
            <PageTitle><i className="fa-solid fa-lemon text-amber-300"/> Nossas Receitas</PageTitle>
            <p className="text-lg text-gray-500 font-bold">Selecione uma categoria de receitas</p>

            <nav className="flex gap-2 text-md">
                {/* Criando os botões de radio */}
                {["Todas", "Doces", "Salgados", "Massas", "Bebidas", "Café" ].map((categoria) => (  
                    
                    <label key={categoria} className="flex flex-col-reverse items-center gap-2 cursor-pointer">
                        <input 
                            type="radio" 
                            name="categoria" 
                            value={categoria}
                            checked={filtro === categoria}
                            onChange={() => setFiltro(categoria)}/>
                        {categoria}
                        
                    </label>
                ))}
            </nav>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                receitasFiltradas.map((receita) => (
                    // Exibindo caixa com detalhes da receita
                    <li key={receita.id}>
                        <RecipeDisplayBox 
                            idReceita={receita.id}
                            imagem={receita.imagem} 
                            nome={receita.nome} 
                            categoria={receita.categoria}
                            tempo={receita.tempo} 
                            ingredientes={receita.ingredientes}>
                        </RecipeDisplayBox>
                    </li>
                    )
                )}
            </ul>
        </main>
    )
}
