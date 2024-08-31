# Feed Rocket Bombado 🚀

Este projeto é uma aplicação avançada de feed, desenvolvida para demonstrar o uso de tecnologias modernas e práticas recomendadas em desenvolvimento web. O objetivo é criar uma experiência rica e otimizada para o usuário final, com foco em performance, segurança e escalabilidade.

## 🛠 Tecnologias Utilizadas

- **💾 Supabase**: Utilizado como banco de dados SQL, gerenciando autenticação de usuários, multi login e armazenamento de dados de forma eficiente e segura.
- **🐳 Docker**: Implementação de imagens Docker otimizadas usando **multi-stage builds**, o que garante que a aplicação seja compacta e pronta para produção, com todos os ambientes configurados de maneira consistente.
- **📈 Google Analytics**: Integração com eventos personalizados e User-ID para um acompanhamento detalhado do comportamento dos usuários dentro da aplicação.
- **⚡ Caching**: Implementado para melhorar a performance, reduzindo a carga no servidor e acelerando o tempo de resposta para os usuários.
- **📦 Lazy Loading**: Utilizado para carregar recursos e componentes de forma inteligente, economizando banda e melhorando a experiência do usuário.
- **🔐 OAuth**: Integração com provedores de OAuth para uma autenticação simplificada e segura.
- **🔒 2FA (Autenticação de Dois Fatores)**: Adicionado para garantir uma camada extra de segurança nas contas dos usuários.
- **🚀 CI/CD Automatizado**: Pipeline de integração e entrega contínua configurado, com testes automatizados para garantir a qualidade do código e a integridade do projeto.

## 🌟 Funcionalidades Principais

- **🔑 Autenticação Completa**: Suporte a login social via OAuth, além de autenticação tradicional e 2FA para maior segurança.
- **⚡ Performance Otimizada**: Uso de caching e lazy loading para garantir uma experiência de usuário rápida e fluida.
- **🔒 Segurança Reforçada**: Implementação de autenticação forte com 2FA, além de práticas de segurança padrão no desenvolvimento.
- **📊 Monitoramento e Análise**: Integração com Google Analytics para rastreamento de eventos personalizados e uso de User-ID.

## 🏗️ Como Rodar o Projeto

### 🔧 Pré-requisitos

- 🐳 Docker instalado
- 💾 Conta no Supabase configurada
- 📈 Conta no Google Analytics com User-ID habilitado

### 🚀 Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/feed-rocketseat-bombado.git
   cd feed-rocketseat-bombado

## Configure as variáveis de ambiente:

Crie um arquivo .env baseado no .env.example e adicione as chaves necessárias para Supabase e Google Analytics.
Build e execução do Docker:

docker build -t feed-rocketseat-bombado .
docker run -d -p 80:80 feed-rocketseat-bombado

## Acesse a aplicação:

A aplicação estará disponível em http://localhost:80:80.

## 🤝 Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests. Todas as contribuições são bem-vindas!

## 📝 Licença
Este projeto é licenciado sob a MIT License.
