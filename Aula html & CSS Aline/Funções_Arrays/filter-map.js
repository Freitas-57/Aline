
let alunos = ['Gisele', 'Pedro', 'Adriana','Pedro', 'Alex', 'Berg', 'Marina', 'Pedro']

alunos.forEach(function(aluno, indice){
    console.log(aluno, indice)
})

const alunosAtualizados = alunos.map((aluno, index) => {
    return aluno + ' -> ' + index;
});

console.log(alunosAtualizados)

const alunosFiltrados = alunos.filter(aluno => {
    return aluno !== 'Pedro'
}
);
console.log(alunosFiltrados)