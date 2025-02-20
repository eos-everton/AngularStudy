﻿# AngularStudy - 📌 Projeto CodeIgniter 3 + Angular 17

Como iniciar o projeto: 

## 🚀 Requisitos

Antes de iniciar, certifique-se de ter instalado:

PHP 7.4 e extensões necessárias

Node.js 22 e NVM (Node Version Manager)

Angular CLI 17

MySQL/MariaDB (caso o projeto use banco de dados)

# 📌 Configuração do Banco de Dados

##Criando a Estrutura do Banco

Execute o seguinte script SQL para criar o banco e a tabela guardiões:
```
-- Database: `angular`
CREATE DATABASE IF NOT EXISTS `north`;
USE `north`;

DROP TABLE IF EXISTS `guardiões`;
CREATE TABLE IF NOT EXISTS `guardiões` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `raca` varchar(50) NOT NULL,
  `forma_animal` varchar(50) DEFAULT NULL,
  `descricao` text,
  `images` varchar(244) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserindo dados iniciais
INSERT INTO `guardiões` (`id`, `nome`, `titulo`, `raca`, `forma_animal`, `descricao`, `images`) VALUES
(1, 'Eryndor', 'Lobo Sombrio – O Batedor Silencioso', 'Humano', 'Lobo Negro', 'Um caçador experiente e ágil...', 'eryndor.jpeg'),
(2, 'Kaelen', 'Caçador de Relíquias – O Explorador', 'Humano', 'Falcão Prateado', 'O irmão mais novo de Eryndor...', 'kaelen.jpeg'),
(3, 'Freya', 'Tempestade Gélida – A Guardiã Etérea', 'Espírito', 'Coruja Fantasma', 'Um ser de pura energia gélida...', 'freya.jpeg'),
(4, 'Bjorn', 'Mão de Ferro – O Escudo Indestrutível', 'Anão', 'Urso Pardo Gigante', 'Um guerreiro imponente...', 'bjorn.jpeg'),
(5, 'Selene', 'Sombra da Aurora – A Espiã Fantasma', 'Elfa', 'Pantera Branca', 'Alta e esguia, Selene se move...', 'selene.jpeg'),
(6, 'Vörga', 'O Sopro do Inverno – Guardiã do Vento', 'Elemental', NULL, 'Uma entidade ancestral formada...', 'vento.jpeg'),
(7, 'Sýlfir', 'O Gelo Eterno – Guardião da Neve', 'Espírito', NULL, 'Vörga é a força implacável do inverno...', 'gelo.jpeg');
```

# 🎯 Configurando o Projeto Angular 17

1️⃣ Instalando NVM e Node.js 22:

Caso ainda não tenha o NVM instalado, siga as instruções aqui.
```
  nvm install 22
  nvm use 22
```
2️⃣ Instalando o Angular CLI 17:
```
  npm install -g @angular/cli@17
```
3️⃣ Instalando dependências do projeto:
  ```
  cd C:\wamp64\www\AngularStudy\ProjectNorthWind\landing-page-Nw
  
  npm install
  ```

4️⃣ Rodando o projeto Angular
 ```
  ng serve
```

O projeto estará disponível em http://localhost:4200/


# 📌 Configurando o Servidor PHP com CodeIgniter 3

✅ Passo 1: Instalar o WAMP:
Se ainda não tem o WAMP instalado, faça o download e instale-o:
```
🔗 Baixar WAMP https://www.wampserver.com/en/
```
Durante a instalação, escolha o diretório padrão (geralmente C:\wamp64 para sistemas 64 bits).

✅ Passo 2: Iniciar o WAMP:
```
Abra o WAMP clicando no ícone do programa.
Aguarde até o ícone na barra de tarefas ficar verde (significa que Apache e MySQL estão rodando).
Se o ícone estiver laranja ou vermelho, clique nele e vá em Restart All Services.
```

✅ Passo 3: Colocar seus arquivos PHP no Diretório Correto
Os arquivos PHP devem estar na pasta www do WAMP:
```
Caminho padrão: C:\wamp64\www

Coloque o projeto dentro , por exemplo: C:\wamp64\www\
```

✅ Passo 4: Acessar o Servidor Local
Agora, abra seu navegador e acesse:
```
http://localhost/AngularStudy/ProjectNorthWind/API/
```

