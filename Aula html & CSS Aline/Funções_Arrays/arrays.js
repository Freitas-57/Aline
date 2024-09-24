
let times = ['Fortaleza', 'Botafogo', 'PaLmeiras', 'Flamengo', 'Cruzeiro'];

times.forEach(function (time, indice) {
    console.log(time, indice)
})


var pos = times.indexOf('Fortaleza');
console.log(pos);

times.push('Fortaleza');
console.log(times);

times.unshift('Botafogo')
console.log(times);

times.shift();
console.log(times);
times.pop()