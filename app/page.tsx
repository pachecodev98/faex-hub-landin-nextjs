import cabecalho from "@/components/Header";
import hero from "@/components/Hero";
import funcionalidades_secao from "@/components/Features";
import depoimentos_secao from "@/components/Testimonials";
import chamada_acao from "@/components/CTA";
import rodape from "@/components/Footer";

export default function pagina_inicial(): JSX.Element {
  return (
    <main>
      <cabecalho />
      <hero />
      <funcionalidades_secao />
      <depoimentos_secao />
      <chamada_acao />
      <rodape />
    </main>
  );
}
