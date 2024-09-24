const cliente = 'Joaquina';
const premium = false;
let saldo = 20.00;
const atualizarSaldo = (saldo, novoValor) => {saldo += novoValor;}

const transacao = {
    descricao: 'Almoço Juliano',
    tipo: 'crédito',
    valor: '20.00',
    data: '08/05/2019'
}

const contasBancárias = [
    {agência: 1234, conta: 16452-2},
    {agência: 1234, conta: 16458-5}
];
typeof cliente // string
typeof premium // boolean
typeof saldoConta // number
typeof atualizaSaldo // function, definida por " => ", arrow function
typeof transacao // object, definida entre "{}"

const verificaTransacao = (transacao, novaTransacao) => {return transacao === novaTransacao;}

const novaTransacao = {
    descricao: 'Almoço Juliano',
    tipo: 'crédito',
    valor: '20.00',
    data: '08/05/2019'
}
verificaTransacao(transacao, novaTransacao) // false


