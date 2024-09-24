function executarPasso1(nome, outraFuncao){
    var acao= "Buscar café -> " + nome; 
    outraFuncao(acao);
}

executarPasso1("Pedro", (acao) => {
    console.log(acao);
    console.log("Fazer ligação enquanto toma café...");
} 
);

//function verificaServidor() {
 //   console.log('função verificando servidor...')
//}
//setTimeout(verificaServidor, 5000);

//setTimeout(() => {
  //  console.log('estou utilizando a função setTimeout...')
//}, 10000);

//setInterval(() => {
  //  console.log('estou utilizando a funcao setInterval')
//}, 3000);