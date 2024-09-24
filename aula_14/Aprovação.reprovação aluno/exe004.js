const nro= prompt('Digite número: ')
if (nro >= 7){
    console.log('Aprovado')
} 
if (nro >= 5 && nro<7){
    console.log('Em recuperação')
}
if (nro<5) {
    console.log('Reprovado')
}