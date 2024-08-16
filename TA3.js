function removeFromArray(arreglo, item){
    eliminarArreglo = arreglo.filter(elemento => elemento !=item)
    console.log(eliminarArreglo);
}

removeFromArray([1,2,3], 1);