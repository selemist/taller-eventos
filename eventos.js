document.getElementById('divbonito').addEventListener('click', function(){
    alert('Hola! Soy el Div');
});
//Esto es para el div //
var button = document.getElementById('botoncito');

//esto es para definir que la variable button es el id con el nombre botoncito

button.addEventListener('click', function(event){
    event.stopPropagation();
});