var nome = prompt('Digite um nome: ')
var sexo = prompt('Digite sexo f ou m: ')
var estadoCivil = prompt('Estado casado ou solteiro: ')

if (sexo === 'f' && estadoCivil === "casada"){const tempoCasada = prompt(" Há quantos anos você está casada? ")

alert(`olá, ${nome}! seu sexo é ${sexo} e seu estado cívil é ${estadoCivil} e você tem ${tempoCasada} anos de casada. `);} else{
    alert(`Olá, ${nome}! Seu sexo é ${sexo} e seu estado civil é ${estadoCivil}. `);
}
}



