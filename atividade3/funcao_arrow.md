# Função Arrow

As funções arrow são uma forma mais concisa de escrever funções em JavaScript. Elas têm uma sintaxe mais curta em comparação com as funções regulares e não têm seu próprio `this`, `arguments`, `super` ou `new.target`. Além disso, essas funções são sempre anônimas. Aqui está um exemplo de como usar uma função arrow:

```javascript
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log(numerosDobrados); // [2, 4, 6, 8, 10]
