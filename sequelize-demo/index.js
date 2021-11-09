(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    const novoProduto = await Produto.create({
        nome: 'Mouse USB',
        preco: 15,
        descricao: 'Mouse bacana'
    })

    console.log(novoProduto);

    const produtos = await Produto.findAll();
    console.log(produtos);

})();