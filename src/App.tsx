import React, { useState } from 'react';
import {
  Cloud,
  Cpu,
  HardDrive,
  Clock,
  Power,
  ChevronRight,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  MemoryStick,
  Database,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Save,
  Server,
  Shield,
  Lock,
  FileText,
  Instagram,
  MessageCircle,
  Phone,
  Youtube,
  Gamepad,
  Code,
  Palette,
  LineChart,
  Video,
  Building,
  Star,
  Menu,
  X
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { FacebookPixel } from './components/FacebookPixel';
import { ConfirmationModal } from './components/ConfirmationModal';
import { ContactWidget } from './components/ContactWidget';
import LogoImg from '../IMG/LOGO.png';

function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 p-8">
          <a href="#home" onClick={onClose} className="text-xl text-white hover:text-indigo-400 transition-colors">Home</a>
          <a href="#plans" onClick={onClose} className="text-xl text-white hover:text-indigo-400 transition-colors">Planos</a>
          <a href="#testimonials" onClick={onClose} className="text-xl text-white hover:text-indigo-400 transition-colors">Depoimentos</a>
          <a href="#faq" onClick={onClose} className="text-xl text-white hover:text-indigo-400 transition-colors">FAQ</a>
          <div className="flex flex-col gap-4 mt-8">
            <a href="https://spacecloudbr.com/painel/login" className="btn-primary text-center">Login</a>
            <a href="https://spacecloudbr.com/painel/register.php" className="btn-primary text-center">Registrar</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

function UserCategory({ icon: Icon, title, description }) {
  return (
    <AnimatedSection animation="scale" className="bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-indigo-400" />
        </div>
        <h3 className="text-xl font-semibold text-indigo-400 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </AnimatedSection>
  );
}

function ProviderToggle({ activeProvider, onToggle }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-800 p-1 rounded-lg inline-flex">
        <button
          onClick={() => onToggle('AZURE')}
          className={`px-6 py-2 rounded-md transition-all duration-200 ${
            activeProvider === 'AZURE'
              ? 'bg-indigo-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          AZURE
        </button>
        <button
          onClick={() => onToggle('SCG')}
          className={`px-6 py-2 rounded-md transition-all duration-200 ${
            activeProvider === 'SCG'
              ? 'bg-indigo-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          SCG
        </button>
      </div>
    </div>
  );
}

function PlanCard({ title, price, priceUnit = "/mês", specs, isPopular = false, link, isSpot = true, purchaseEnabled = true }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const incompatibleGames = "Incompatíveis: FIFA23, FiveM (BAN), REDM, Valorant, Genshin Impact, MTA: Multi Theft Auto, COD Warzone";

  const handlePurchase = () => {
    window.location.href = link;
  };

  return (
    <>
      <AnimatedSection animation="scale" className={`bg-gray-800 rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 ${isPopular ? 'border-2 border-indigo-500 relative' : ''}`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Mais Popular
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="text-4xl font-bold text-indigo-400 mb-6">
          R${price}<span className="text-lg text-gray-400">{priceUnit}</span>
        </div>
        {isSpot === false && (
          <div className="mb-4 bg-green-900/50 text-green-300 px-3 py-2 rounded-md text-sm">
            Máquina Dedicada - Sem Interrupções
          </div>
        )}
        <ul className="space-y-4 mb-8">
          {specs.map((spec, index) => (
            <li key={index} className="flex items-start gap-3">
              <spec.icon className="w-5 h-5 text-indigo-400 mt-1" />
              <span className="text-gray-300">{spec.text}</span>
            </li>
          ))}
          <li className="flex items-start gap-3">
            <Save className="w-5 h-5 text-indigo-400 mt-1" />
            <span className="text-gray-300">Contém salvamento de arquivos</span>
          </li>
          <li className="relative">
            <div 
              className="flex items-start gap-3 cursor-help"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <HelpCircle className="w-5 h-5 text-indigo-400 mt-1" />
              <span className="text-gray-300">Jogos Incompatíveis</span>
            </div>
            {showTooltip && (
              <div className="absolute z-10 w-64 p-4 mt-2 bg-gray-700 text-gray-300 rounded-lg shadow-lg text-sm">
                {incompatibleGames}
              </div>
            )}
          </li>
        </ul>
        <button 
          onClick={() => (purchaseEnabled ? setShowModal(true) : null)}
          disabled={!purchaseEnabled}
          className={`block w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center ${purchaseEnabled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}
        >
          {purchaseEnabled ? 'Comprar Agora' : 'Em Breve'}
        </button>
      </AnimatedSection>
      
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handlePurchase}
        planTitle={title}
      />
    </>
  );
}

function FAQ() {
  const faqs = [
    {
      question: 'O que é um "PC na nuvem"?',
      answer: 'Um computador em nuvem é uma máquina virtual, acessada remotamente pelo seu dispositivo, sem limitações de região, oferecendo acessibilidade e conforto, com todos os serviços e funcionalidades de um computador normal, mas sem a necessidade de ter em mãos o produto físico.'
    },
    {
      question: 'Posso atualizar o sistema?',
      answer: 'Não, todos os componentes do sistema incluindo os drivers, foram pensados para o melhor desempenho da sua máquina, alterar essas configurações pode diminuir a performance e até quebrar a máquina, além disso é considerado uso indevido dos nossos serviços.'
    },
    {
      question: 'Como isso funciona?',
      answer: 'Nosso sistema permite que você conecte seu dispositivo diretamente a um computador em nosso servidor, esse computador é projetado para oferecer o melhor desempenho as suas atividades, como jogos, trabalhos e muito mais.'
    },
    {
      question: 'Funciona em Android e IOS?',
      answer: 'Sim, no Android o primeiro acesso pode ser feito pelo RDP ou VNC e partir para o uso com Moonlight ou Persec. Já no IOS o primeiro acesso também ocorre pelo Remote Desktop ou VNC, mas não é possível usar Moonlight e Parsec, o único aplicativo de streaming compatível para IOS é o Steam Link.'
    },
    {
      question: 'Posso jogar pelo RDP ou VNC?',
      answer: 'Não, o RDP (Remote Desktop Protocol) e VNC (Virtual Network Computing) são usados apenas para o primeiro acesso, permitindo vincular suas contas Parsec, Moonlight e Steam Link. Após vincular suas contas você deve fechar o RDP ou VNC e jogar exclusivamente pelo Persec, Moonlight ou Steam Link.'
    },
    {
      question: 'Por que usar um pc em nuvem?',
      answer: 'Os gastos para ter um computador como os da Space Cloud, físico em mãos, chegaria perto dos R$12.000, sem contar os gastos de manutenção que vão chegar com tempo de uso, por isso um computador na nuvem sai bem mais em conta.'
    },
    {
      question: 'O que é Máquina Spot?',
      answer: 'Máquina Spots são uma variante mais em conta das VMs padrão, Isso por porque essas instâncias podem ser interrompidas pelo Compute Engine, Afim de recuperar a capacidade de computação para direciona-las para outras Vms.'
    },
    {
      question: 'Eu perco meus arquivos ao desligar a máquina?',
      answer: 'Não, nossos serviços incluem o salvamento dos seus arquivos de forma 100% segura, basta alocar esses arquivos e documentos em um dos hds da máquina, assim seus arquivos de jogos, documentos de trabalhos e projetos não são perdidos ao desligar ou reiniciar sua máquina.'
    },
    {
      question: 'Existe algum sistema de fila de login?',
      answer: 'Não, para tornar a sua experiência mais confortável trabalhamos sem filas de espera, assim é possível acessar sua máquina quando e onde quiser sem tomar muito de seu tempo apenas para um login.'
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <AnimatedSection
          key={index}
          animation="slideRight"
          delay={index * 0.1}
          className="bg-gray-800 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-indigo-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-indigo-400" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-700">
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          )}
        </AnimatedSection>
      ))}
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      content: "O serviço é muito bom, 100% de confiança, a entrega do produto é bem rápida e as máquinas são ótimas, recomendo um plano de 6 núcleos ou acima se você quiser uma boa experiência nos games, comecei com o plano de 6 núcleos, mas não rodava bem meus games, então fiz upgrade para 8 núcleos e supriu bem minhas necessidades.",
      author: "DaniFull",
      role: "Cliente"
    },
    {
      content: "É a melhor VM que já usei, ganha de outras clouds por coisas como não ter fila de login, salvar os arquivos e ter um acesso quase instantâneo, comprei o plano de 4 núcleos e de todos os jogos que testei o mais pesado foi o Warzone, com um desempenho ótimo e 0 delay, também tirou de letra no emulador de PS2.",
      author: "Felps",
      role: "Cliente"
    },
    {
      content: "Quis fazer uma prova de fogo com a máquina, peguei Nier Automata que tem fama de ser mal otimizado para PC e ainda enchi de mod gráfico, coloquei reshade e texturas em HD e assim o jogo já teria explodido meu pc se não fosse pela Space Cloud. Já to alegre por poder jogar pela quarta vez esse jogo maravilhoso, obrigado pessoal.",
      author: "Justice",
      role: "Cliente"
    },
    {
      content: "Peço perdão pelas vezes em que critiquei o sistema de vocês, a verdade é que eu jogo um jogo pesado de mais até para máquinas de última geração, todos os streamings que já tentei usar não aguentaram, mas a máquina de 16 núcleos de vocês é surreal, mesmo com HD e não SSD, supera outras clouds com certeza, pc top demais.",
      author: "Dilann",
      role: "Cliente"
    },
    {
      content: "Para os que perguntam se vale a pena, eu posso dizer com toda certeza que sim, máquinas com potência altíssima, desde do plano mais básico até o melhor, e o melhor de tudo é o salvamento de arquivos, que já coloca a Space Cloud a frente de muitos clouds, no suporte e atendimento ajudam e resolvem seu problema rápido.",
      author: "Yuri",
      role: "Cliente"
    },
    {
      content: "Após um mês de uso estou impressionado com os serviços da Space, atendimento simplesmente incrível, os caras realmente tentam resolver os problemas e são rápidos com isso, realmente um bom investimento considerando o preço dos hardwares atualmente, com uma jogabilidade incrível, sem lags e com boa qualidade.",
      author: "Verstappen",
      role: "Cliente"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={0.2}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
                <p className="text-gray-300 italic mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-indigo-400" />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
      >
        <ChevronRightIcon className="w-6 h-6 text-indigo-400" />
      </button>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProvider, setActiveProvider] = useState('AZURE');
  const [currentPage, setCurrentPage] = useState('home');

  const userCategories = [
    {
      icon: Gamepad,
      title: "Gamer",
      description: "Desfrute de uma experiência de jogo sem travamentos e com desempenho máximo, rodando os jogos mais pesados com qualidade ultra, sem se preocupar com a sua máquina local."
    },
    {
      icon: Code,
      title: "Desenvolvedor",
      description: "Tenha acesso a máquinas robustas, ideais para compilar projetos complexos, rodar ambientes virtuais pesados ou testar suas aplicações com velocidade e eficiência."
    },
    {
      icon: Palette,
      title: "Designer/Editor",
      description: "Renderize vídeos e trabalhe com gráficos pesados sem atrasos, aproveitando o poder de uma máquina feita para lidar com grandes demandas de software criativo."
    },
    {
      icon: LineChart,
      title: "Data Science",
      description: "Execute análises de dados massivas, treine modelos de IA e realize simulações complexas com os recursos avançados das nossas máquinas em nuvem."
    },
    {
      icon: Video,
      title: "Streamer",
      description: "Transmita ao vivo com qualidade de ponta, sem sobrecarregar seu PC local, aproveitando o processamento poderoso da Space Cloud para garantir uma experiência de streaming fluida."
    },
    {
      icon: Building,
      title: "Empreendedor",
      description: "Gerencie e escale seu negócio com total flexibilidade, com máquinas que se adaptam ao seu fluxo de trabalho e garantem alta performance para suas demandas de TI."
    }
  ];

  const AZUREPlans = [
    {
      title: "Azure Basic",
      price: "99,90",
      link: "https://www.spacecloudbr.com/painel/store/azure/azure-basic-4vcpu",
      specs: [
        { icon: Cpu, text: "4vCPU AMD Epyc 2.44Ghz" },
        { icon: MemoryStick, text: "28GB Memória RAM" },
        { icon: HardDrive, text: "SSD NVME 256GB" },
        { icon: Cpu, text: "GPU Tesla T4 16GB" },
        { icon: Cloud, text: "Sistema Spot" },
        { icon: Clock, text: "Desligamentos programados (00h, 6h, 12h e 18h)" },
        { icon: Power, text: "Prazo de entrega 2 dias Úteis" }
      ]
    },
    {
      title: "Azure Standard",
      price: "119,90",
      link: "https://www.spacecloudbr.com/painel/store/azure/azure-standard-8vcpu",
      specs: [
        { icon: Cpu, text: "8vCPU AMD Epyc 2.44Ghz" },
        { icon: MemoryStick, text: "56GB Memória RAM" },
        { icon: HardDrive, text: "SSD NVME 256GB" },
        { icon: Cpu, text: "GPU Tesla T4 16GB" },
        { icon: Cloud, text: "Sistema Spot" },
        { icon: Clock, text: "Desligamentos programados (00h, 06h, 12h e 18h)" },
        { icon: Power, text: "Prazo de entrega 2 dias Úteis" }
      ]
    },
    {
      title: "Azure Deluxe",
      price: "199,90",
      link: "https://www.spacecloudbr.com/painel/store/azure/azure-deluxe-16vcpu",
      specs: [
        { icon: Cpu, text: "16vCPU AMD Epyc 2.44Ghz" },
        { icon: MemoryStick, text: "112GB Memória RAM" },
        { icon: HardDrive, text: "SSD NVME 256GB" },
        { icon: Cpu, text: "GPU Tesla T4 16GB" },
        { icon: Cloud, text: "Sistema Spot" },
        { icon: Clock, text: "Desligamentos programados (00h, 06h, 12h e 18h)" },
        { icon: Power, text: "Prazo de entrega 2 dias Úteis" }
      ]
    }
  ];

  const SCGPlans = [
    {
      title: "Plano Hora",
      price: "6,97",
      priceUnit: "/hora",
      link: "https://www.spacecloudbr.com/painel/store/hourly-plan",
      isSpot: false,
      specs: [
        { icon: Cpu, text: "Intel i5 10400F 2.90Ghz" },
        { icon: MemoryStick, text: "16GB Memória RAM" },
        { icon: HardDrive, text: "SSD 1TB" },
        { icon: Server, text: "GPU GTX 1660 6GB" },
        { icon: Shield, text: "Windows 11 Pro" },
        { icon: Clock, text: "Sem desligamentos programados" },
        { icon: Power, text: "Prazo de entrega 2 dias Úteis" }
      ]
    },
    {
      title: "Plano Diário",
      price: "19,90",
      priceUnit: "/dia",
      link: "https://www.spacecloudbr.com/painel/store/daily-plan",
      isSpot: false,
      specs: [
        { icon: Cpu, text: "Intel i5 10400F 2.90Ghz" },
        { icon: MemoryStick, text: "16GB Memória RAM" },
        { icon: HardDrive, text: "SSD 1TB" },
        { icon: Server, text: "GPU GTX 1660 6GB" },
        { icon: Shield, text: "Windows 11 Pro" },
        { icon: Clock, text: "Sem desligamentos programados" },
        { icon: Power, text: "Prazo de entrega 2 dias Úteis" }
      ]
    },
    {
      title: "Plano Mensal",
      price: "169,90",
      priceUnit: "/mês",
      link: "https://www.spacecloudbr.com/painel/store/monthly-plan",
      isSpot: false,
      specs: [
        { icon: Cpu, text: "Intel i5 10400F 2.90Ghz" },
        { icon: MemoryStick, text: "16GB Memória RAM" },
        { icon: HardDrive, text: "SSD 1TB" },
        { icon: Server, text: "GPU GTX 1660 6GB" },
        { icon: Shield, text: "Windows 11 Pro" },
        { icon: Clock, text: "Sem desligamentos programados" },
        { icon: Power, text: "Prazo de entrega 2 dias Úteis" }
      ]
    }
  ];

  // Usamos os planos SCG normalmente, mas aplicaremos blur na renderização
  const activePlans = activeProvider === 'AZURE' ? AZUREPlans : SCGPlans;

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfUse onBack={() => setCurrentPage('home')} />;
  }

  return (
    <>
      <FacebookPixel />
      <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
        <header className="fixed w-full px-4 py-2 z-50">
          <div className="container mx-auto">
            <div className="glass-effect rounded-2xl shadow-lg px-6 py-4 transform transition-all duration-300 hover:shadow-indigo-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={LogoImg} alt="Space Cloud logo" className="h-8 w-auto" />
                </div>
                <div className="flex-1 hidden md:flex justify-center">
                  <nav className="flex space-x-8">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#plans" className="nav-link">Planos</a>
                    <a href="#testimonials" className="nav-link">Depoimentos</a>
                    <a href="#faq" className="nav-link">FAQ</a>
                  </nav>
                </div>
                <div className="hidden md:flex items-center gap-4">
                  <a href="https://spacecloudbr.com/painel/login" className="btn-primary">Login</a>
                  <a href="https://spacecloudbr.com/painel/register.php" className="btn-primary">Registrar</a>
                </div>
                <button 
                  className="md:hidden text-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        <section id="home" className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <AnimatedSection animation="slideUp" className="mb-6">
              <h1 className="heading-primary">
                <span className="gradient-text">Poder Computacional</span>
                <br />
                Onde Você Estiver
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experimente o futuro da computação em nuvem com a Space Cloud
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.4}>
              <a href="#plans" className="btn-primary inline-flex items-center gap-2">
                Explore Nossos Planos
                <Star className="w-5 h-5" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 px-6 relative">
          <div className="container mx-auto">
            <AnimatedSection animation="slideUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                A Space Cloud é pra você que é:
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {userCategories.map((category, index) => (
                <UserCategory key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="py-20 px-6">
          <div className="container mx-auto">
            <AnimatedSection animation="slideUp" className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white">
                Escolha o plano ideal para você
              </h2>
            </AnimatedSection>
            
            <ProviderToggle 
              activeProvider={activeProvider} 
              onToggle={setActiveProvider} 
            />

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {activePlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative ${activeProvider === 'SCG' ? 'pointer-events-none' : ''}`}
                >
                  {activeProvider === 'SCG' && (
                    <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-lg z-10 rounded-xl flex items-center justify-center">
                      <div className="bg-gray-800/80 px-6 py-3 rounded-lg text-white font-bold text-xl rotate-12">
                        Em Breve
                      </div>
                    </div>
                  )}
                  <PlanCard 
                    {...plan} 
                    isPopular={index === 1}
                    purchaseEnabled={activeProvider === 'AZURE'}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto">
            <AnimatedSection animation="slideUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-2">Depoimentos</h2>
              <p className="text-xl text-gray-400">De Clientes</p>
            </AnimatedSection>
            <Testimonials />
          </div>
        </section>

        <section id="faq" className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto">
            <AnimatedSection animation="slideUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">
                Dúvidas Frequentes
              </h2>
            </AnimatedSection>
            <FAQ />
          </div>
        </section>

        <footer className="bg-gray-900/50 backdrop-blur-sm py-12 px-6 border-t border-gray-800/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="slideLeft">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <img src={LogoImg} alt="Space Cloud logo" className="h-8 w-auto" />
                  </div>
                  <p className="text-gray-400">
O poder de um PC gamer na palma da sua mão.
Jogue em qualquer lugar, sem limites.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideUp">
                <div>
                  <h4 className="text-white font-semibold mb-4">Links Importantes</h4>
                  <ul className="space-y-3">
                    <li>
                      <button 
                        onClick={() => setCurrentPage('privacy')} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Política de Privacidade
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setCurrentPage('terms')} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Termos de Uso
                      </button>
                    </li>
                    <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideRight">
                <div>
                  <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.instagram.com/spacecloud.gg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Instagram className="w-5 h-5 text-indigo-400" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://discord.gg/aj9Dkajjkq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5 text-indigo-400" />
                        Discord
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://api.whatsapp.com/send/?phone=551143958420&text&type=phone_number&app_absent=0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-5 h-5 text-indigo-400" />
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.youtube.com/@spacecloudgg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <Youtube className="w-5 h-5 text-indigo-400" />
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="slideUp" delay={0.2}>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Todos os direitos reservados. Spaceverse Negocios Digitais LTDA CNPJ: 52.877.876/0001-14.</p>
              </div>
            </AnimatedSection>
          </div>
        </footer>
      </div>
      <ContactWidget />
    </>
  );
}

export default App;