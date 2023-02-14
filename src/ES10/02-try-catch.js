try {
    console.log('Ejecutando la funcion grettings')
    grettings();
} catch (error) { // Reference Error
    console.log('Perdon ha habido un error');
    console.log(error)
}

try {
    console.log('Ejecutando la funcion grettings')
    grettings();
} catch { // Error Personalizado
    console.log('Perdon ha habido un error2');
    console.log('No se ha cumplido!!')
}