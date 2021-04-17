# lgpd_logging

 
#### 🚧  Em desenvolvimento  🚧


### :checkered_flag: Índice 

<!--ts-->
   * [Projeto de Segurança da Informação](#projeto)
   * [Objetivo](#objetivo)
   * [Situação Atual](#situação)
   * [Tecnologias](#tecnologias)
   * [Instruções de uso](#instruções)
   * [Backlog](#backlog)
      * [Sprint 1](#sprint-1)
      * [Sprint 2](#sprint-2)
      * [Sprint 3](#sprint-3)
      * [Sprint 4](#sprint-4)
   * [Sequencia de Atividades](#sequencia)
   * [Team](#team)
<!--te-->


### :lock: Projeto de Segurança da Informação <a name="projeto"></a>
Repositório para o projeto de Segurança da Informação na FATEC SJC.
Este projeto é um sistema de logs para queries.
 
Criar API que possibilite a evidenciação de ações (CRUD) em um banco de dados, para que em casos de exclusão de dados haja um meio de comprovação da ação.

### :triangular_flag_on_post: Situação atual <a name="objetivo"></a>
Sistema de banco de dados ainda não adaptado para lei geral de proteção de dados, sistema não contém logs que evidencie ações realizadas no banco de dados.

### :computer: TECNOLOGIAS <a name="tecnologias"></a>
- [Java](https://docs.oracle.com/en/java/javase/11/): versão 11
- [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [Hibernate](https://hibernate.org/orm/documentation/5.4/)
- [Maven](https://maven.apache.org/guides/)
- [Heroku](https://devcenter.heroku.com/categories/reference)
- [PostgreSQL](https://www.postgresql.org/docs/)

## :rocket: Instruções de uso <a name="instruções"></a>
- No terminal, clone o projeto:
    - git clone https://github.com/Eduarda-Oliveira/Billinho.git
- Entre na pasta do projeto:
    - cd Billinho
- Instale as dependencias: 
    - bundle install
- Crie o banco de dados:
    - rails db:create
    - rails db:migrate
- Preencha o banco de dados:
    - rails db:seed
- Rode a aplicação
    - rails s
- Utilize o Postman para acessar a aplicação a partir da rota http://localhost:3000/

### :bookmark_tabs: Backlog <a name="backlog"></a>

#### Sprint 1 (28/03) <a name="sprint-1"></a>

* [x] [BACK] Método-Inserção
* [x] [BACK] Método-Consulta
* [x] [BACK] Método-Atualização
* [x] [BACK] Método-Remoção
* [x] [BACK] Método-Logs
* [x] [BACK] Registro de Logs

#### Sprint 2 (18/04) <a name="sprint-2"></a>

* [x] [FRONT] Tela Cadastro
* [x] [BD] Tabela Usuário
* [x] [BACK-BD] Conexão BD

#### Sprint 3 (16/05) <a name="sprint-3"></a>

* [ ] [FRONT] Tela Login
* [ ] [BD] Tabela Login
* [ ] [BACK] Método para Login

#### Sprint 4 (05/06) <a name="sprint-4"></a>
* [ ] [FRONT] Tela-Consulta
* [ ] [BACK] Filtro - Logs (Exibição dos Logs)

### :date: Sequencia de Atividades <a name="sequencia"></a>
![Sequencia de atividades](https://github.com/az3vedo/lgpd_logging/blob/documentation/Imagens/sequenciaAtividade.png)

### 	:two_women_holding_hands: Team <a name="team"></a>
- SM: [Tábatha Fróes](https://github.com/tabathafroes)
- PO: [Gabriel Azevedo](https://github.com/az3vedo)
- Devs: [Ângelo Lima](https://github.com/angelovlima), [Larissa Takahashi](https://github.com/LarissaMiho), [Natália Neves](https://github.com/natalianeves18) e [Maria Eduarda](https://github.com/Eduarda-Oliveira), [Renato Passos](https://github.com/Renato-Passos)
