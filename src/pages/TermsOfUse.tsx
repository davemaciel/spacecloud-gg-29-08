import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft, FileText, AlertCircle, Check, X, Clock, Shield, HardDrive } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export function TermsOfUse({ onBack }: TermsOfUseProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        <AnimatedSection animation="slideUp" className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-indigo-400" />
              <h1 className="text-3xl font-bold text-white">Termos de Uso</h1>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">1. Aceitação dos Termos</h2>
                </div>
                <p>
                  Ao utilizar os serviços da Space Cloud, você concorda com estes termos de uso. 
                  Nossos serviços de computação em nuvem são projetados para fornecer uma experiência 
                  segura e eficiente, mantendo altos padrões de qualidade e desempenho.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">2. Responsabilidades do Usuário</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Manter suas credenciais de acesso seguras</li>
                  <li>Não compartilhar ou vender acesso à sua instância</li>
                  <li>Utilizar os recursos de forma responsável</li>
                  <li>Respeitar os limites de uso estabelecidos no plano</li>
                  <li>Não realizar modificações não autorizadas no sistema</li>
                  <li>Manter backups de seus dados importantes</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">3. Atividades Proibidas</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mineração de criptomoedas</li>
                  <li>Ataques de rede ou hacking</li>
                  <li>Distribuição de malware ou vírus</li>
                  <li>Hospedagem de conteúdo ilegal</li>
                  <li>Violação de direitos autorais</li>
                  <li>Modificação não autorizada do sistema operacional</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">4. Disponibilidade do Serviço</h2>
                </div>
                <p className="mb-4">
                  A Space Cloud se compromete a manter:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Alta disponibilidade dos serviços conforme SLA</li>
                  <li>Manutenções programadas com aviso prévio</li>
                  <li>Suporte técnico durante horário comercial</li>
                  <li>Backup e recuperação de dados conforme política</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">5. Segurança e Privacidade</h2>
                </div>
                <p className="mb-4">
                  Nosso compromisso com sua segurança inclui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proteção contra ameaças externas</li>
                  <li>Isolamento de recursos entre usuários</li>
                  <li>Monitoramento constante de segurança</li>
                  <li>Atualizações regulares de segurança</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">6. Isenção de Responsabilidade sobre Dados</h2>
                </div>
                <p className="mb-4 bg-indigo-900/30 p-4 rounded-lg border-l-4 border-indigo-500">
                  Ao utilizar nossos serviços, você reconhece e concorda que não nos responsabilizamos pela perda, dano ou indisponibilidade de quaisquer arquivos armazenados em nossa plataforma. É de sua inteira responsabilidade manter cópias de segurança (backups) regulares de todos os seus arquivos importantes. Recomendamos enfaticamente que você mantenha seus próprios backups em local seguro e independente de nossos serviços.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">7. Alterações nos Termos</h2>
                </div>
                <p>
                  A Space Cloud se reserva o direito de modificar estes termos a qualquer momento, 
                  com notificação prévia aos usuários. O uso continuado dos serviços após alterações 
                  constitui aceitação dos novos termos.
                </p>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}