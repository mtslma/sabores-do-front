import PageLink from "@/components/PageLink/PageLink";
import PageTitle from "@/components/PageTitle/PageTitle";
import TextBox from "@/components/TextBox/TextBox";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 md:gap-12">
      <PageTitle>Bem vindo ao Sabores do Front!</PageTitle>

      {/* Conteúdo introdutório sobre a página */}
      <TextBox>
        <p>Aqui, tecnologia e gastronomia se encontram em um só lugar. Nosso objetivo é transformar a forma como você descobre e interage com receitas, oferecendo uma experiência moderna, intuitiva e visualmente agradável.</p>

        <p>Explore receitas organizadas por categorias, descubra pratos incríveis com apenas alguns cliques e mergulhe em sabores de todos os estilos — de entradas simples a sobremesas que impressionam.</p>

        <p>Feito para amantes da cozinha e entusiastas do front-end, este projeto é mais do que um catálogo de receitas: é uma vitrine interativa que une design, código e sabor.</p>
      </TextBox>

      <PageLink href={"/receitas"}><i className="fa-solid fa-lemon text-amber-300"></i> Ver receitas</PageLink>
    </main>
  );
}
