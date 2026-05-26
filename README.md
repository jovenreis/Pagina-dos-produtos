Açaí Itaki - Projeto Web

* **Henry Reis** - 10752725
* **Bruno Magalhães** - 10752758
* **Luiz Prado** - 10738516
* **Gustavo Biassio** - 10738330

---

##  Planejamento de Interface: Wireframes Açaí Itaki

### 1. Metodologia de Desenho Manual
A fase de desenhos foi feita à mão para permitir uma visualização rápida de onde cada coisa ficaria no site. O objetivo foi testar o caminho que o cliente faz na tela antes de começar a criar o código de verdade.

### 2. Organização das Informações
Os desenhos definiram a ordem de importância das coisas no site:
* **Topo da página:** Lugar do logotipo e do menu de navegação para o cliente achar as páginas facilmente.
* **Apresentação Principal:** Um espaço grande para destacar o açaí principal e um botão chamativo de compra.
* **Vitrine de Produtos:** Caixinhas organizadas para mostrar as fotos dos copos, os preços e os botões de compra, tudo no mesmo padrão.
* **Área de Interação:** Espaço para mostrar os comentários de clientes reais e um campo para a pessoa deixar o e-mail e receber novidades.

### 3. Criação de Ideias
O uso de desenhos no papel garantiu que o visual final do site fosse simples e direto ao ponto, focado em ser fácil para o cliente usar e bem organizado.

### 4. Planejamento das Páginas do Site
Durante os desenhos no papel, definimos duas formas diferentes de abrir as páginas do site para que o usuário encontre o que precisa com poucos cliques:
* **Página Comum (Caminho Fixo):** Feita para as páginas principais do site (Home, Sobre, Contato). São telas com textos fixos que não mudam sozinhos, ideal para quem quer conhecer a história da loja ou ver as formas de falar com a gente.
* **Página Inteligente (Caminho que Muda):** Feita especialmente para a vitrine e para a hora de montar o açaí. Ao clicar em um produto, o site abre uma única tela que se adapta para mostrar as fotos, tamanhos (300ml ou 500ml) e preços daquele item específico. Isso evita o trabalho de ter que criar uma página diferente para cada copo do cardápio.

---

## 5. O Que Foi Feito no Site (Atualização de Hoje)

Na etapa atual do projeto, tiramos as ideias do papel e colocamos para funcionar no site do Açaí Itaki. Organizamos o sistema dividindo o visual da loja e as informações dos produtos em duas partes separadas.

### A. Criação das Novas Páginas do Site
Organizamos as pastas do projeto para criar os acessos que combinamos nos desenhos manuais:
* **Página de Contato:** Criamos a página de atendimento para o cliente ver o telefone, e-mail e endereço da loja.
* **Página do Produto:** Criamos o sistema inteligente onde uma única página lê qual copo foi clicado (como o copo de 300ml) e atualiza o preço e o tamanho na tela na mesma hora.

### B. Criação e Consumo da Lista de Produtos Automatizada
Para não deixar os preços e fotos dos copos presos e escondidos no meio do código visual, criamos um sistema de envio de dados:
* **A Central de Dados:** Criamos um arquivo secreto que funciona como uma lista de estoque da loja. Esse arquivo guarda os nomes dos copos, os preços e o caminho das fotos, e deixa tudo pronto para o site usar.
* **O Site Buscando os Dados:** Atualizamos a tela principal de produtos do site. Agora, assim que o cliente abre a página, o site vai correndo buscar as informações naquela "Central de Dados", pega os copos atualizados e desenha eles com seus botões na tela automaticamente.

### C. Por Que Fizemos Desse Jeito?
1. **Facilidade para Mudar os Preços:** O visual do site não fica preso aos valores dos produtos. Se amanhã o preço do açaí mudar, basta alterar o valor em um único lugar na central de dados que a tela do site se atualiza sozinha.
2. **Organização:** Deixa o projeto limpo e leve, já que o código que cuida das cores e botões não fica misturado com as informações de preços e produtos.
3. **Pronto para Crescer:** Essa mesma lista de dados criada hoje poderá ser usada no futuro caso o grupo queira criar um aplicativo de celular para a loja, sem precisar refazer as informações do zero.

---

## Galeria de Desenhos (Wireframes)

<img width="250" height="300" alt="design responsivo copo de açaí" src="https://github.com/user-attachments/assets/14cb6f4d-ec06-4726-aeaf-1091f38e0c24" />
<p> </p>

<img width="250" height="300" alt="design responsivo produtos" src="https://github.com/user-attachments/assets/bf5642e0-cfea-4972-b894-e40ebc1d6449" />
<p> </p>

<img width="800" height="432" alt="wireframe dos produtos" src="https://github.com/user-attachments/assets/33d74d52-f4d2-4213-b400-1693b13f511d" />
<p> </p>

<img width="800" height="432" alt="wirerame copo de açaí" src="https://github.com/user-attachments/assets/24d95cb8-3d89-4f18-adc3-bf9beeaf235f" />
