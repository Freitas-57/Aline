const sumOfValues = (a, b , c)=>{

    const sum = a + b;
    
    if(sum > c){
    
    return alert(`O valor da soma é maior. Valor da soma: ${sum}, o valor de C: ${c}.`);
    
    } else {
    
      return alert(`O valor de C é maior. Valor de C: ${c}, valor da soma: ${sum}. `)
    
    }
    
    }
    
    sumOfValues(5, 5, 15);