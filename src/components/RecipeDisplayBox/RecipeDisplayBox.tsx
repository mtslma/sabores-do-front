import Image from "next/image";
import Link from "next/link";

export default function RecipeDisplayBox(props: { idReceita: string; imagem: string; nome: string; categoria: string; tempo: string; ingredientes: [] }) {
    const { idReceita, imagem, nome, categoria, tempo, ingredientes } = props;

    // Mapeando categorias para definir as cores que apareceram
    const categoriaMap: Record<string, { cor: string }> = {
        Doces: { cor: "bg-pink-200" },
        Salgados: { cor: "bg-orange-200" },
        Massas: { cor: "bg-yellow-200" },
        Bebidas: { cor: "bg-blue-200" },
        Sobremesas: { cor: "bg-purple-200" },
    };

    // Definindo a cor da categoria de acordo com o map, tem um padrão caso o nome esteja errado
    const { cor: corDaCategoria } = categoriaMap[categoria] || { cor: "bg-gray-200" };

    return (
        // ARRUMAR O LINK DEPOIS - Já arrumei, remover o comentário depois ;)
        <Link href={`/receita/${idReceita}`} className="group flex flex-row md:max-w-96 min-h-48 max-h-48 overflow-hidden items-center gap-4 border-2 border-emerald-600 dark:border-emerald-400 rounded-xl p-4 max-w-full bg-gray-100 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-gray-950">
            {/* Imagem */}
            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-emerald-600">
                <Image src={imagem} alt={`Imagem de ${nome}`} width={96} height={96} className="w-full h-full object-cover" />
            </div>

            {/* Informações */}
            <div className="flex flex-col justify-between flex-1 gap-2 bg-white p-2 rounded-lg text-left group-hover:bg-emerald-50">
                <div className="flex flex-col gap-4">
                    {/* Nome */}
                    <h2 className="text-xl font-bold text-emerald-600 group-hover:underline">{nome}</h2>

                    {/* Categoria */}
                    <h3 className="text-sm text-gray-800">
                        <i className="fa-solid fa-utensils"></i> <span className="font-sm font-semibold">Categoria:</span> <span className={`px-2 py-1 text-md ${corDaCategoria} rounded-xl`}>{categoria}</span>
                    </h3>

                    {/* Detalhes */}
                    <div className="flex gap-4 justify-start items-center">
                        <h3 className="text-sm text-gray-800">
                            <i className="fa-solid fa-clock" /> {tempo}
                        </h3>
                        <h3 className="text-sm text-gray-800">
                            <i className="fa-solid fa-spoon" /> {ingredientes.length} ingredientes
                        </h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}
