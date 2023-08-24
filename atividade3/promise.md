# Promise

Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Ela permite que você associe manipuladores com o sucesso ou falha de uma ação assíncrona. Aqui está um exemplo de como usar uma Promise:

```javascript
const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso!');
    }, 1000);
});

minhaPromise
    .then(resultado => console.log(resultado)) // 'Sucesso!'
    .catch(erro => console.log(erro));
