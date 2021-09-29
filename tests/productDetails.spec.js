const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Verifica se a função `productDetails` tem o comportamento esperado", () => {
    const arrayReturned = productDetails("Alcool gel", "Máscara");
    let finalString = '';
    for (let index = 0; index < arrayReturned.length; index += 1) {
       finalString = arrayReturned[index].details.productId.replace(/\D/g, '');
    }
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe("function");
    // Teste se o retorno da função é um array.
    expect(typeof productDetails("Alcool gel", "Máscara")).toBe("object");
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(arrayReturned).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof arrayReturned).toEqual("object");
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
      expect(productDetails("Luvas", "Esparadrapo")).toEqual([
        { name: "Luvas", details: { productId: "Luvas123" } },
        { name: "Esparadrapo", details: { productId: "Esparadrapo123" } },
      ]);
    // Teste se os dois productIds terminam com 123.
      expect(finalString).toBe('123');
  });
});
