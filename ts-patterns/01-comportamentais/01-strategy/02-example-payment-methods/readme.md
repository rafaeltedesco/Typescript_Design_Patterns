# Strategy Pattern
---

`"Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable."` [Design Patterns Guru](https://refactoring.guru/design-patterns/strategy)

![Strategy](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png)
<div align="right">

[Design Patterns Guru](https://refactoring.guru/design-patterns/strategy)

</div>

---
## <a href="./02-example-payment-methods" style="color:white;">02 - Payment Methods Example</a>

<img src="https://img.freepik.com/free-photo/close-up-customer-paying-by-credit-card_329181-2048.jpg?w=740&t=st=1666301329~exp=1666301929~hmac=89cbb2341b51f19f9b22c5e013b0b90a3f097bbe4bb164b05e2755b7665ba995" width="800"/>

fonte: [freepik](https://www.freepik.com/free-photo/close-up-customer-paying-by-credit-card_10896159.htm#query=payment&position=21&from_view=search&track=sph)

<details>
<summary>

### Saiba mais

</summary>

As _Strategies_ podem facilmente ser encontradas na pasta [strategies](./02-example-payment-methods/domain/strategies/). São os métodos de pagamento.

As _Strategies_ foram criadas para resolver o problema gerado ao aplicar um algoritmo diferente de desconto para cada forma de pagamento solicitada pelo cliente.

Além de evitar o uso de `ifs` para seleção dos métodos, que cresceria consideravelmente com o acréscimo de novas formas, também possibilitou adicionar um método que utiliza taxa fixa, ao invés de um valor percentual, isolando o cálculo da taxa e delegando a responsabilidade para cada uma das classes que implementa a interface `IPaymentMethod`.

Desse modo, a classe `Account` desconhece os detalhes de implementação do cálculo da taxa aplicada para cada nova forma de pagamento, desacoplando o sistema.

Detalhes no Diagrama a seguir:

<img src="./02-example-payment-methods/images/diagrams/paymentMethods.png" />

</details>
