const nroA= +prompt('Digite número A:')
const nroB= +prompt('Digite número:B ')
const nroC= +prompt('Digite número:C ')
if (nroA > nroB && nroA > nroC){
    console.log('O maior nro é: A')
} 
if (nroB > nroA && nroB > nroC){
    console.log('O maior nro é: B')
}
if (nroC > nroA && nroC > nroB) {
    console.log('O maior nro é: C')
}