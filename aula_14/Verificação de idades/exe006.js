const idade = prompt('Digite idade: ')
if (idade > 0 && idade <= 12) {
    console.log('CRIANÇA')
}
if (idade >=13 && idade <= 17) {
    console.log('ADOLESCENTE')
}
if (idade >= 18 && idade <= 59) {
    console.log('ADULTO')
}
if (idade >= 60) {
    console.log('IDOSO')
}