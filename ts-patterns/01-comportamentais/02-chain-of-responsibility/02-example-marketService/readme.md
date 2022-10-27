# Chain Of Responsibility
---

`Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.` [Desing Patterns Guru](https://refactoring.guru/design-patterns/chain-of-responsibility)


![chain](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/structure-2x.png)

<div align="right">

[Design Patterns Guru](https://refactoring.guru/design-patterns/chain-of-responsibility)

</div>

---

## 02 - Market Service Example

<img src="https://img.freepik.com/fotos-gratis/closeup-detalhe-de-uma-mulher-as-compras-em-um-supermercado_1150-17788.jpg?w=1800&t=st=1666876292~exp=1666876892~hmac=cb412847537fdff79733c3cd0bae2c5978287879033fd71aba389e9234d4f9dd" width="800"/>

fonte: [freepik](https://br.freepik.com/fotos-gratis/closeup-detalhe-de-uma-mulher-as-compras-em-um-supermercado_5519345.htm#query=market&position=19&from_view=search&track=sph)

<details>
<summary>

### Saiba mais

</summary>

Nesse exemplo, temos um _Market_ que inicia um serviço _MarketService_ de distribuição de alimentos _healthy_ and _unhealthy_ para várias pessoas.

As regras são:

- Uma `FitPerson`só pode comprar alimentos que sejam _healthy_, desde que haja quantidade suficiente do produto em estoque e que a pessoa tenha dinheiro suficiente.
- Uma `NonFitPerson` só pode comprar alimentos que sejam _unhealthy_ desde que haja quantidade suficiente do produto em estoque e que a pessoa tenha dinheiro suficiente.

Para exemplificar o uso do pattern _ChainOfResponsibility_ cada pessoa tem em sua implementação a responsabilidade de verificar se atende os requisitos de compra, caso não atenda, ela delega para que a próxima pessoa na _Chain_ verifique se faz sentido realizar a compra.

Desse modo, caso novas pessoas, com diferentes regras, incluindo verificação de diferentes propriedades em uma _IFood_, porém que implementem a interface `IPerson`, sejam criadas, poderão ser adicionadas a _Chain_ sem corromper os príncipios _SOLID_.

O gatillho que "dispara" a _Chain_ é o metódo `buy` implementa nas classes extendidas de _BasePerson_ nesse projeto demonstrativo.

Detalhes no Diagrama a seguir:

![diagram](./images/ChainOfResponsibilityMarket.png)

</details>


