let arrNomes = ['Matheus', 'Marcos', 'Lucas', 'João', 'Guilherme'];

let contemGuilherme = arrNomes.includes('Guilherme');


if (contemGuilherme === true) {
    console.log('Há um Guilherme no array');
} else {
    console.log('Não há um Guilherme no array');
}

// Exercicio a parte 

if (arrNomes.includes('Maria')) {
    console.log('Há uma Maria também')
} else {
    arrNomes.push('Maria');
    console.log('Adicionado Maria ao array ' + arrNomes[arrNomes.length - 1]); 
    // pegar o último valor do array, como Maria foi inserida via push ela é última

};

arrNomes.forEach(nome => {
    console.log(nome)
});



for (let i = 0; i < arrNomes.length; i++) {
    if(arrNomes[i] === 'João'){
        console.log(arrNomes[i] + ' na posição ' + i)
    }    
};
