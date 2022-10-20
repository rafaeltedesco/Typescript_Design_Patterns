# Strategy Pattern
---

`"Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."` [Design Patterns Guru](https://refactoring.guru/design-patterns/strategy)

![Strategy](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png)
<div align="right">

[Design Patterns Guru](https://refactoring.guru/design-patterns/strategy)

</div>

---
## <a href="./01-example-street-fighter" style="color:white;">01 - Street Fighter Example</a>

<img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_720,w_1280/c_fill,w_910,h_512/q_auto,f_auto/redbullcom/2017/05/26/f54674bf-425f-489a-9e9a-b4c899d03ad8/ultra-street-fighter-2-character-selection-screen" width="800">

fonte: [redbull](https://www.redbull.com/int-en/ultra-street-fighter-2-tips-and-tricks)

<details>
<summary>

### Saiba mais

</summary>

Nesse exemplo, é possível observar o padrão _Strategy_ sendo utilizado em mais de um cenário.

O Padrão Strategy é utilizado para tornar intercambiável o uso das classes concretas `Akuma` e `Balrog` (nossos players) na chamada do método `askForStoryPlayer` da classe `Narrator`.

Cada classe que implementa `IPlayer` sabe como carregar e compartilhar sua própria história.

Em uma partida, havendo um `Narrator`, é possível solicitar que ele conte a história de um dos `FightPlayers` que estão no jogo.

Como cada `Player` tem sua própria história para contar e o `Narrator` não deve ser responsável por conhecer cada uma das histórias, apenas a que ele foi solicitado para contar, e nem carregá-las, utilizando o padrão _Strategy_ é possível que seja solicitado ao `Narrator` para contar a história de qualquer `Player`do jogo que respeite a interface `IPlayer`.

Mais detalhes no Diagrama a seguir:

<center>

<img src="./01-example-street-fighter//images/streetFighterDgr.png">

</center>

Como os players sabem atacar e produzir dano nos oponentes uma ideia futura é construir um sistema de batalha.

Também há possibilidade de construir uma Web API para desenvolvimento de um Game integrado a uma aplicação front end.

Mais informações sobre o que cada _ator_ é capaz de fazer podem ser facilmente encontradas no descritivo de cada teste de unidade e integração.

#### Coverage

#### 100%

![coverage](./01-example-street-fighter/images/coverage.png)


</details>

---
## <a href="./02-example-payment-methods" style="color:white;">02 - Payment Methods Example</a>

<img src="https://img.freepik.com/free-photo/close-up-customer-paying-by-credit-card_329181-2048.jpg?w=740&t=st=1666301329~exp=1666301929~hmac=89cbb2341b51f19f9b22c5e013b0b90a3f097bbe4bb164b05e2755b7665ba995" width="800"/>

fonte: [freepik](https://www.freepik.com/free-photo/close-up-customer-paying-by-credit-card_10896159.htm#query=payment&position=21&from_view=search&track=sph)

<details>
<summary>

### Saiba mais

</summary>


</details>