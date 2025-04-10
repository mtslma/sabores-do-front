import PageTitle from "@/components/PageTitle/PageTitle";
import TextBox from "@/components/TextBox/TextBox";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 md:gap-12">
        <PageTitle><i className="fa-solid fa-info-circle text-emerald-500"/> Sobre o projeto</PageTitle>

        <TextBox>
            <p>
                O Sabores do Front é um projeto desenvolvido como parte do Checkpoint 05 da disciplina Front-End Design Engineering, do curso de Análise e Desenvolvimento de Sistemas da Faculdade de Informática e Administração Paulista (FIAP).
            </p>

            <p>
                A proposta da atividade era criar uma aplicação web com o tema Livro de Receitas, utilizando tecnologias como HTML, Tailwind CSS, TypeScript e Next.js. O foco está na exibição e navegação de dados vindos de um arquivo JSON, com uso de React Hooks como useState, useEffect, useContext e useParams para manipulação de estado e compartilhamento de informações entre componentes.
            </p>

            <p>
                A interface foi construída com HTML semântico e estilizada com Tailwind, prezando pela clareza visual e experiência do usuário.
            </p>
        </TextBox>



    </main>
  );
}
