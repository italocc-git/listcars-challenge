# Listcars Challenge

Projeto criado com o intuito de demonstrar conhecimentos e organização de código utilizando NodeJs com Prisma ORM para integração com mongoDB cluster.

A Aplicação consiste em criar e listar carros para venda . O usuário deve preencher no momento da criação informações simples como : Modelo , Marca, Preço e Ano do veículo. Ao cadastrar essa informação um log é gerado
e armazenado no banco de Dados.

# Tecnologias utilizadas

 <li> Fastify </li>
 <li> Zod  </li>
 <li> Prisma / Prisma Client</li>
 <li> Axios </li>
 <li> Typescript </li>
 
 
 # Como executar o projeto (Siga as orientações na ordem)
 
 Pré-requisitos: NPM / YARN instaladas de forma global ,  Docker

Atenção: Para iniciar o projeto você precisa instalar o banco mongoDB localmente ou remotamente , nos próximos passos eu explico como fazer de ambas as formas.
Escolha apenas uma forma.

### Utilizando o banco mongoDB localmente .
 - Para isso você irá precisar do [Docker](https://www.docker.com/products/docker-desktop/) instalado. 
 - Ao terminar a instalação , certifique-se que você está na pasta do projeto pelo terminal do VS Code ou qualquer outro terminal ('/challenge-cars-list')
 - digite o comando 'docker-compose up -d '. Com isso será feito automaticamente o download, instalação e inicialização do container challenge-cars-list com o serviço mongo-1 em execução. (Você pode verificar a lista com os containers utilizando o comando : "docker ps -a" ou acessando o aplicativo Docker Desktop)
 - Agora o seu banco está criado e então basta o prisma gerar a tabela que se encontra no arquivo Schema Prisma, digite o comando : yarn prisma ou npm run prisma.
 - Feito isso sua tabela será criada e poderá ser sempre acessada no comando mencionado acima 

 ### Utilizando o banco mongoDB Remotamente . 
 - Crie uma conta gratuitamenteno MongoDB Cloud , acessando o link : https://www.mongodb.com/
 - Clique em Try Free / Start Free
 - Preencha os dados necessários ou faça o cadastro com sua conta Google( Clicando em Sign up with Google)
 - Verifique o seu e-mail e confirme o cadastro.
 - Perguntas opcionais serão apresentadas sobre Qual o seu objetivo , Qual tipo de aplicação você está criando e Qual a lingua de sua preferência . Como exemplo você pode colocar sequencialmente: Learn mongoDB , Other (Learning) e Typescript. Ao preencher os dados , clique em Finish.
 - Escolha o plano da sua escolha, se for o gratuito escolhe o Shared.
 - Cloud Provider : Escolha o AWS
 - Região : Deixe a região padrão ( N. Virginia (us-east-1)) e clique em Create Cluster
 - Em Security Quickstart , escolha Username and Password . 
 - Preencha o seu username e password. (Ao escolher esses dados , é importante você anotar pois eles serão utilizados na configuração do acesso ao banco de dados mongoDB) 
 - Clique em Create User
 - Escolha My Local Environment e adicione um IP para acesso ao seu cluster. (Não precisa adicionar mais de um IP)
 - Clique em Finish and Close

### Configuração do Banco de Dados mongoDB

- Com a página do seu cluster aberta, clique em Connect e escolha a opção Connect your application Drivers
- Anote a URL que aparece no passo 3 (Exemplo: mongodb+srv://italocc16:< password >@cluster0.bfvrbxy.mongodb.net/?retryWrites=true&w=majority) 
- No lugar de <password> , coloque a senha que foi gerada ao criar o seu usuário (Passo feito na página Security Quickstart)
- Deixe esse dado salvo que será utilizado no momento da configuração das variáveis de ambiente.

### Configuração do Redis
 
 - O Redis é uma estrutura de armazenamento em memória, muito utilizado como banco de dados e será utilizado nesse projeto para armazenar os registros das filas.
 - Instale o [Docker](https://www.docker.com/products/docker-desktop/) e com o terminal aberto execute o comando para instalar a imagem do banco de dados redis :  docker run --name redis -d -p 6379:6379 redis:latest
 - Com esse comando ele irá fazer o download da imagem do redis e iniciar o container no Docker.  
 - Sempre que for iniciar o projeto (Com o comando yarn dev / npm run dev) , certifique-se que o Docker está rodando o container chamado redis.
 
### Criando websocket 
 - Acesse o site : https://webhook.site/
 - Será gerado uma url para testar o websocket , selecione e copie a URL (Localizado em : Your Unique URL).
 - Altere o valor da variável de ambiente chamada WEBHOOK_URL no arquivo .env.example.
 - Com o site aberto , fique acompanhando as requisições que serão recebidas sempre que um novo carro for cadastrado.

### Clonar Repositório
- Crie uma pasta com o nome de sua preferência
- Acesse essa pasta por meio de um terminal e digite o comando abaixo:
  git clone https://github.com/italocc-git/nodejs-rentx.git
  
### Instalando Dependências
- Entre na pasta do projeto utilizando o comando :  cd listcars-challenge-main 
- Digite o comando : yarn / npm install
  
### Configuração da variável de ambiente
- Acesse o projeto pelo vsCode
- Renomeie o arquivo .env.example para .env
- Na variável DATABASE_URL , altere o conteúdo dessa variável para o link gerado pelo cluster do mongoDB( O link que você anotou no passo Configuração do Banco de Dados mongoDB)
- Feito isso , o seu banco está configurado e pronto para ser utilizado por meio do Prisma ORM  
 
### Execute o projeto
- Com todas as dependências instaladas e banco configurado , execute o projeto com o comando npm run dev ou yarn dev.
- Utilize o programa de sua preferência para cadastrar os dados na API externa (Ex : Insomnia ou Postman) 
  
  
# Autor
Italo Costa Cavalcante

https://www.linkedin.com/in/italo-costa-cavalcante/
 
