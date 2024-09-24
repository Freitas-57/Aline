function executarPasso1(nome, callback){
    var acao= "Buscar café -> " + nome; callback(acao);
}

function executarPasso2(acao){
    console.log(acao);
    console.log("fazer ligação enquanto toma café...");
}

executarPasso1("Pedro", executarPasso2);
