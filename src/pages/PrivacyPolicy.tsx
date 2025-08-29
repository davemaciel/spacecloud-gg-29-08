import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft, Shield, Lock, Eye, Database, Server, UserCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
              <Shield className="w-8 h-8 text-indigo-400" />
              <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">1. Coleta de Dados</h2>
                </div>
                <p className="mb-4">
                  A Space Cloud coleta apenas as informações necessárias para fornecer nossos serviços de computação em nuvem:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Informações de cadastro (nome, e-mail, telefone)</li>
                  <li>Dados de pagamento (processados de forma segura por nossos parceiros)</li>
                  <li>Informações técnicas sobre uso dos serviços</li>
                  <li>Logs de acesso para segurança</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">2. Uso das Informações</h2>
                </div>
                <p className="mb-4">
                  Utilizamos seus dados para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer e melhorar nossos serviços de cloud computing</li>
                  <li>Garantir a segurança de sua conta e dados</li>
                  <li>Comunicar atualizações e informações importantes</li>
                  <li>Processar pagamentos e gerenciar sua conta</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">3. Armazenamento de Dados</h2>
                </div>
                <p className="mb-4">
                  Seus dados são armazenados com segurança em nossos servidores:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Utilizamos criptografia de ponta a ponta</li>
                  <li>Backups regulares para garantir a preservação dos dados</li>
                  <li>Acesso restrito apenas a pessoal autorizado</li>
                  <li>Monitoramento constante de segurança</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">4. Segurança da Infraestrutura</h2>
                </div>
                <p className="mb-4">
                  Nossa infraestrutura é projetada com múltiplas camadas de segurança:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Firewalls avançados e sistemas de detecção de intrusão</li>
                  <li>Monitoramento 24/7 de atividades suspeitas</li>
                  <li>Atualizações regulares de segurança</li>
                  <li>Isolamento de recursos entre clientes</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-xl font-semibold text-white">5. Seus Direitos</h2>
                </div>
                <p className="mb-4">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Solicitar correções de informações</li>
                  <li>Exportar seus dados</li>
                  <li>Solicitar exclusão de conta e dados</li>
                </ul>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}