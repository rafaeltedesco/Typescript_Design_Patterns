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

O Padrão Strategy é utilizado para tornar intercambiável o uso das classes concretas `Akuma` e `Balrog` (nossos players) na chamada do método `askForStoryPlayer` da classe `Narrator`. No exemplo, ambos carregam a história a partir da leitura de um arquivo JSON, mas poderiam utilizar diferentes implementações, sendo possível que a forma de carregar de cada `FighPlayer` seja independente. 
  
`Balrog`, por exemplo, poderia carregar a história de um banco de dados, enquanto que `Akuma` de uma Web API e etc.

Cada classe que implementa `IPlayer` sabe como carregar e compartilhar sua própria história.

Em uma partida, havendo um `Narrator`, é possível solicitar que ele conte a história de um dos `FightPlayers` que estão no jogo.

Como cada `Player` tem sua própria história para contar e o `Narrator` não deve ser responsável por conhecer cada uma das histórias, apenas a que ele foi solicitado para contar, e nem carregá-las, utilizando o padrão _Strategy_ é possível que seja solicitado ao `Narrator` para contar a história de qualquer `Player`do jogo que respeite a interface `IPlayer`.

Mais detalhes no Diagrama a seguir:

<center>

<img src="./01-example-street-fighter/images/streetFighterDgr.png">

</center>

Como os players sabem atacar e produzir dano nos oponentes uma ideia futura é construir um sistema de batalha.

Também há possibilidade de construir uma Web API para desenvolvimento de um Game integrado a uma aplicação front end.

Mais informações sobre o que cada _ator_ é capaz de fazer podem ser facilmente encontradas no descritivo de cada teste de unidade e integração.


</details>