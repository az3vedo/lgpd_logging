# lgpd_logging

 
#### 🚧  Em desenvolvimento  🚧

<p align="center">
  <kbd>
    <img src="https://i.imgur.com/bU8KxIg.gif" alt="Intro">
  </kbd>
</p>


### :checkered_flag: Índice 

<!--ts-->
   * [Projeto de Segurança da Informação](#projeto)
   * [Objetivo](#objetivo)
   * [Situação Atual](#situação)
   * [Tecnologias](#tecnologias)
   * [Backlog](#backlog)
      * [Sprint 1](#sprint-1)
      * [Sprint 2](#sprint-2)
      * [Sprint 3](#sprint-3)
      * [Sprint 4](#sprint-4)
   * [Diagrama de caso de uso](#diagrama-caso-de-uso)
   * [Sequencia de Atividades](#sequencia)
   * [Team](#team)
<!--te-->


### :lock: Projeto de Segurança da Informação <a name="projeto"></a>
Repositório para o projeto de Segurança da Informação na FATEC SJC.
Este projeto é um sistema de logs para queries. 
 
Criar API que possibilite a evidenciação de ações em um banco de dados, para que em casos de criação, consulta, edição e exclusão de dados haja um meio de comprovação da ação.

Adaptando o sistema de banco de dados da empresa conforme as especificações da lei 13.709/18
conhecida como [Lei Geral de Proteção de Dados (LGPD)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) a fim de garantir a transparência sobre o uso das informações dos usuários/clientes, evitando multas e o detrimento da empresa perante o mercado.

### :triangular_flag_on_post: Situação atual <a name="objetivo"></a>
Sistema de banco de dados ainda não adaptado para lei geral de proteção de dados, sistema não contém logs que evidencie ações realizadas no banco de dados.

### :computer: TECNOLOGIAS <a name="tecnologias"></a>
- [Java](https://docs.oracle.com/en/java/javase/11/): versão 11
- [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [Hibernate](https://hibernate.org/orm/documentation/5.4/)
- [Maven](https://maven.apache.org/guides/)
- [Heroku](https://devcenter.heroku.com/categories/reference)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [React.js](https://pt-br.reactjs.org/docs/react-api.html)
- [Axios](https://github.com/axios/axios)
- [Material-UI](https://material-ui.com/pt/)


### :bookmark_tabs: Backlog <a name="backlog"></a>


|  Sprint 1 (28/03) |  Sprint 2 (18/04)| Sprint 3 (16/05) |  Sprint 4 (05/06)|
|---|---|---|---|
|  Declaração do contexto  | Criação da tabela da entidade usuário no banco de dados para que a partir desses dados armazenados seja gerado um log  | Desenvolvimento da tela de login para que gere log de login  | Desenvolvimento da tela de consulta para consultar os logs gerados  |
|  Implementação de métodos de gerações de logs no back-end, sendo eles, método de inserção, consulta, atualização, remoção e logs  |  Desenvolvimento da tela de cadastro para que gere um log do tipo inserção |  Criação da tabela da entidade login no banco de dados para que seja armazenados os log de login |  Implementação do método de log para filtrar os logs e exibí-los |
|   |  Conexão entre banco de dados e o back-end para a persistência do log | Implementação do método de login para o adminitrador sinalizar a entrada  e gerar o log de login  |   |

### :date: Diagrama de Caso de Uso <a name="diagrama-caso-de-uso"></a>
![Diagrama de caso de uso](https://github.com/az3vedo/lgpd_logging/blob/documentation/Imagens/DiagramaDeCasoDeUso.png)

### :date: Sequencia de Atividades <a name="sequencia"></a>
![Sequencia de atividades](https://github.com/az3vedo/lgpd_logging/blob/documentation/Imagens/sequenciaAtividade.png)

### 	:two_women_holding_hands: Team <a name="team"></a>


<table>
    <thead>
    </thead>
    <tbody>
      <tr>
        <td>Scrum Master</td>
        <td>Tábatha Fróes</td>
        <td><a href = "https://www.linkedin.com/  in/tabathafroes/">Linkedin</a></td>
        <td><a href = "https://github.com/tabathafroes">Github</a></td>       
      </tr>
    <tr>
       <td>Product Owner</td>
        <td>Gabriel Azevedo</td>
            <td><a href = "https://www.linkedin.com/in/gabrielsouzati">Linkedin</a></td>
            <td><a href = "https://github.com/az3vedo">Github</a></td>           
    </tr>
    <tr>
            <td>Develop</td>
            <td>Ângelo Lima</td>
            <td><a href = "https://www.linkedin.com/in/%C3%A2ngelo-lima-0003201b0/">Linkedin</a></td>
            <td><a href = "https://github.com/angelovlima">Github</a></td>           
        </tr>
        <tr>
            <td>Develop</td>
            <td>Larissa Takahashi</td> 
            <td><a href = "https://www.linkedin.com/in/larissa-miho-takahashi/">Linkedin</a></td> 
            <td><a href = "https://github.com/LarissaMiho"> Github</a> </td>
        </tr>
        <tr>
            <td>Develop</td>
            <td>Natália Neves</td>
            <td> <a href= "https://www.linkedin.com/in/natalia-reis-neves">Linkedin</a></td>
            <td> <a href= "https://github.com/natalianeves18">Github</a></td>
        </tr>
        <tr>
            <td>Develop</td>
            <td>Maria Eduarda</td>
            <td><a href= "https://www.linkedin.com/in/mariaeduarda-oliveira">Linkedin</a></td>
            <td><a href = "https://github.com/Eduarda-Oliveira">Github</a></td>
        </tr>
        <tr>
            <td>Develop</td>
            <td>Renato Passos</td> 
            <td><a href = "https://www.linkedin.com/in/renato-passos-049598185/">Linkedin</a></td>
            <td><a href = "https://github.com/Renato-Passos">Github</a></td>
      </tr>
   </tbody>
</table>