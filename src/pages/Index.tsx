import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Download, Lock, RefreshCw, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-headphones.jpg";
import bookPaiRico from "@/assets/book-pai-rico.jpg";
import bookMilagreManha from "@/assets/book-milagre-manha.jpg";
import book7Habitos from "@/assets/book-7-habitos.jpg";
import bookPensaEnriquece from "@/assets/book-pensa-enriquece.jpg";

const Index = () => {
  const benefits = [
    {
      icon: "📈",
      text: "Domine sua mente e suas finanças com lições práticas de mestres como Napoleon Hill e Robert Kiyosaki"
    },
    {
      icon: "🧠",
      text: "Aumente sua produtividade, foco e disciplina em poucos minutos por dia"
    },
    {
      icon: "💰",
      text: "Aprenda a gerar renda, investir e fazer o dinheiro trabalhar para você"
    },
    {
      icon: "⚡",
      text: "Transforme sua mentalidade de escassez em mentalidade de abundância"
    },
    {
      icon: "🕒",
      text: "Tenha acesso vitalício e ouça em qualquer dispositivo, sem limites"
    }
  ];

  const books = [
    {
      image: bookPaiRico,
      title: "Pai Rico, Pai Pobre",
      description: "Aprenda a fazer o dinheiro trabalhar por você."
    },
    {
      image: bookMilagreManha,
      title: "O Milagre da Manhã",
      description: "Desperte seu melhor eu e eleve sua produtividade."
    },
    {
      image: book7Habitos,
      title: "Os 7 Hábitos das Pessoas Altamente Eficazes",
      description: "Descubra os comportamentos que definem líderes e milionários."
    },
    {
      image: bookPensaEnriquece,
      title: "Quem Pensa Enriquece",
      description: "Construa uma mentalidade milionária e alcance resultados extraordinários."
    }
  ];

  const testimonials = [
    "Comecei ouvindo no carro e em 2 semanas já mudei minha forma de pensar sobre dinheiro.",
    "Senti como se estivesse ouvindo conselhos de mentores milionários.",
    "Valeu cada centavo. Escuto todos os dias antes de dormir!"
  ];

  const features = [
    {
      icon: Download,
      title: "Download Ilimitado",
      description: "Ouça offline, onde quiser"
    },
    {
      icon: Lock,
      title: "Acesso Vitalício",
      description: "Sem mensalidades"
    },
    {
      icon: RefreshCw,
      title: "Atualizações Gratuitas",
      description: "Novos áudios incluídos automaticamente"
    }
  ];

  const faqs = [
    {
      question: "Como recebo o acesso?",
      answer: "Imediatamente após a compra, você recebe um link exclusivo por e-mail."
    },
    {
      question: "Posso ouvir offline?",
      answer: "Sim! Você pode baixar os áudios e ouvir sem internet."
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer: "Acesso vitalício, sem limite de tempo."
    },
    {
      question: "Funciona no celular?",
      answer: "Sim! Em qualquer dispositivo, Android, iPhone ou PC."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/50 text-sm py-2 px-4">
            💎 OFERTA EXCLUSIVA
          </Badge>
          <h1 className="text-5xl md:text-7xl font-jakarta font-bold mb-6 bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent leading-tight">
            A Chave Para o Seu Próximo Nível Está Aqui
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-foreground/90 max-w-4xl mx-auto font-jakarta">
            Desbloqueie o Sucesso Financeiro e Mental com 200 Áudios que Mudaram a Vida de Milhares de Pessoas.
          </p>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto font-jakarta">
            Acesse agora os maiores Best-Sellers de Desenvolvimento Pessoal e Finanças em versão áudio — para ouvir onde quiser, quando quiser.
            Transforme sua mentalidade, conquiste liberdade financeira e viva seu potencial máximo.
          </p>
          <CTAButton size="xl">
            🟢 QUERO TRANSFORMAR MINHA VIDA AGORA
          </CTAButton>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-center mb-6 text-accent">
            🔓 O que 200 Áudios Best-Sellers Vão Fazer por Você
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 mt-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{benefit.icon}</span>
                  <p className="text-lg text-foreground/90 font-jakarta leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton>
              🔊 COMEÇAR A OUVIR AGORA
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Books Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-center mb-16 text-accent">
            📚 Os Clássicos Que Você Vai Ouvir
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {books.map((book, index) => (
              <Card 
                key={index}
                className="bg-secondary border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] group"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-3 text-accent">
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground font-jakarta">
                    {book.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-center mb-6 text-accent">
            ⭐ O Que Nossos Ouvintes Estão Falando
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-jakarta">
            Milhares de pessoas já transformaram sua forma de pensar, agir e investir.
            Veja o que alguns estão dizendo após ouvir nossos áudios:
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card border-border p-8 hover:border-success/50 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 font-jakarta italic leading-relaxed">
                  "{testimonial}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-center mb-6 text-accent">
            🚀 O Pack Que Acelera Sua Evolução Pessoal e Financeira
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto font-jakarta">
            Você não precisa gastar anos lendo livros — ou centenas de reais em cursos.
            Aqui você tem os 200 maiores ensinamentos de todos os tempos, prontos para ouvir e aplicar.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="bg-secondary border-border p-8 text-center hover:border-accent/50 transition-all duration-300"
                >
                  <Icon className="w-16 h-16 mx-auto mb-6 text-success" />
                  <h3 className="text-2xl font-poppins font-semibold mb-3 text-accent">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-jakarta text-lg">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <CTAButton>
              🟢 QUERO ACESSO IMEDIATO
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-center mb-6 text-accent">
            💸 O Valor de um Livro… O Conhecimento de 200.
          </h2>
          <Card className="max-w-3xl mx-auto bg-card border-accent/30 p-12 mt-12">
            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-center text-lg font-jakarta">
                <span className="text-muted-foreground">Livros físicos:</span>
                <span className="text-foreground line-through">R$67 a R$150 cada</span>
              </div>
              <div className="flex justify-between items-center text-lg font-jakarta">
                <span className="text-muted-foreground">Audiobooks avulsos:</span>
                <span className="text-foreground line-through">R$49,90 cada</span>
              </div>
              <div className="border-t border-accent/30 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-jakarta font-semibold text-accent">👉 Seu Acesso Hoje:</span>
                  <span className="text-5xl font-jakarta font-bold text-success animate-glow-pulse">
                    R$19,90
                  </span>
                </div>
                <p className="text-center text-muted-foreground mt-4 font-jakarta">único pagamento</p>
              </div>
            </div>
            <p className="text-center text-lg text-foreground/90 font-jakarta leading-relaxed">
              Invista menos do que um café por dia e leve um acervo completo de conhecimento que vai durar para sempre.
            </p>
          </Card>
        </div>
      </section>

      {/* Limited Offer */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/50">
        <div className="container mx-auto px-4">
          <Badge className="mx-auto block w-fit mb-8 bg-destructive text-destructive-foreground text-lg py-3 px-6 animate-glow-pulse">
            🚨 OFERTA LIMITADA — SÓ HOJE
          </Badge>
          <h2 className="text-4xl md:text-6xl font-jakarta font-bold text-center mb-8 text-accent">
            200 Áudios Best-Sellers + Bônus Exclusivos
          </h2>
          <div className="text-center mb-12">
            <p className="text-3xl text-muted-foreground mb-4 font-jakarta">
              <span className="line-through">De R$149,00</span>
            </p>
            <p className="text-6xl md:text-7xl font-jakarta font-bold text-success mb-6">
              R$19,90
            </p>
            <p className="text-xl text-foreground/80 font-jakarta">
              (Acesso vitalício + Garantia de 7 dias)
            </p>
          </div>
          <div className="text-center">
            <CTAButton size="xl">
              🟩 COMPRAR AGORA E MUDAR MINHA VIDA
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-24 h-24 mx-auto mb-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-jakarta font-bold mb-6 text-accent">
              ✅ Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-xl text-foreground/90 leading-relaxed font-jakarta">
              Ouça sem riscos. Se você não sentir que sua mentalidade evoluiu, devolvemos seu dinheiro — sem perguntas.
              Seu sucesso é nossa prioridade.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-center mb-16 text-accent">
            ❓ Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-xl font-jakarta hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground font-jakarta">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-t from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-jakarta font-bold mb-8 bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent leading-tight">
            💬 O Sucesso Está a Um Clique de Distância.
          </h2>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-16 font-jakarta max-w-4xl mx-auto leading-relaxed">
            200 Áudios Que Podem Mudar Seu Destino Começam Aqui.
          </p>
          <CTAButton size="xl">
            🟩 QUERO MEU ACESSO AGORA — R$19,90
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-jakarta">
            © 2025 | Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 font-jakarta">
            Design em modo escuro premium | Desenvolvido para inspirar e transformar.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
