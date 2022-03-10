//import { example } from './data.js';

import datos from './data/athletes/athletes.js';

let data = datos.athletes;

//Llamamos al botón que nos mostrará la sección de deportes con sus dibujos:

document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('intro').style.display='none';
    document.getElementById('sectionSports').style.display='block'; 
})

//Reemplazamos los géneros F y M por íconos, igualmente con las medallas:
for(let i = 0; i<data.length; i++){
    if(data[i].medal ==='Bronze'){
        data[i].medal = '🥉';
    }
    else if (data[i].medal ==='Silver'){
        data[i].medal = '🥈';
    }
    else{
        data[i].medal = '🥇';
    }
    if (data[i].gender === 'F'){
        data[i].gender='🙋🏻‍♀️'
    }
    else{
        data[i].gender = '🙋🏻‍♂️'
    }
}


/* Verificamos qué deportes tiene la data:
let myArray = [];
for(let elemento of data){
    myArray.push(elemento.sport);
}
const dataArr = new Set(myArray);
let result = [...dataArr];
console.log(result); */

//Creamos un array con todos los deportes:
let arraySports=['Athletics','Badminton','Basketball','Handball','Boxing','Cycling'];
arraySports.push('Fencing','Football','Gymnastics','Golf','Weightlifting','Hockey','Judo',);
arraySports.push('Swimming','Canoeing','Rowing','Taekwondo','Tennis','Triathlon','Sailing','Volleyball','Water Polo');
arraySports.push('Trampolining','Archery','Table Tennis','Diving','Beach Volleyball','Shooting','Equestrianism','Rugby Sevens','Wrestling','canoeing','Rhythmic Gymnastics','Modern Pentathlon')


//Traemos el ID donde está la etiqueta "<table>" de HTML:
let playersTable=document.getElementById('playersTable');

//Creamos un filtro para que sólo se muestre la data del deporte seleccionado de las tarjetas:
let dataForSport = [];
for(let i = 0; i<arraySports.length; i++){
    let card= document.getElementsByClassName('card')[i];
    card.addEventListener('click', ()=>{
    document.getElementById('sectionSports').style.display='none';
    document.getElementById('medalTable').style.display='block';
    dataForSport  =  dataForSport.concat(data.filter(p => p.sport === arraySports[i]));
    createTable(dataForSport);
    })
}


//Creamos una función que se encargue de crear la tabla y que cambie los íconos :):
function createTable(array){
    playersTable.innerHTML+='<tr><th>NOMBRE</th><th>GÉNERO</th>'
    + '<th>PAÍS</th><th>EDAD</th><th>EVENTO</th><th>MEDALLA</th></tr>';
     
    for(let i = 0; i<array.length; i++){
        let fila = '<tr><td>'+ array[i].name +'</td>';
        fila += '<td>'+ array[i].gender +'</td>';
        fila += '<td>'+ array[i].team +'</td>';
        fila += '<td>'+ array[i].age +'</td>';
        fila += '<td>'+ array[i].event +'</td>';
        fila += '<td>'+ array[i].medal +'</td></tr>';
        playersTable.innerHTML+= fila;
    }
    
    return array;
}

//Traemos los selectores para desplegar opciones:
let sortNames = document.getElementsByClassName('filterBtn')[0];
let filterGender = document.getElementsByClassName('filterBtn')[1];
let filterMedal = document.getElementsByClassName('filterBtn')[2];

//Función que ordena la data por género:
filterGender.addEventListener('change', sortedGender);

function sortedGender (){
    if (filterGender.value ==='F'){
        const filterFemale = dataForSport.filter(p => p.gender ==='🙋🏻‍♀️');
        playersTable.innerHTML = '';
        createTable(filterFemale);
    }
    else{
        const filterMale = dataForSport.filter(p => p.gender ==='🙋🏻‍♂️');
        playersTable.innerHTML = '';
        createTable(filterMale);
    }
}

//Función que ordena la data por nombres.
sortNames.addEventListener('change', sortedNames);
function sortedNames(){
    if (sortNames.value === 'ASC'){ 
        dataForSport.sort( (a,b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
            return 0;
        });
        playersTable.innerHTML='';
        createTable( dataForSport );
    }
    else{
        dataForSport.sort( (a,b) => {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return ;
        }
            return 0;
        });
        playersTable.innerHTML='';
        createTable( dataForSport );
    }
}

//Función que ordena la data por medalla:
filterMedal.addEventListener('change', sortedMedal);

function sortedMedal (){
    if (filterMedal.value ==='G'){
        const filterMedal = dataForSport.filter(p => p.medal ==='🥇');
        playersTable.innerHTML = '';
        createTable(filterMedal);
    }
    else if (filterMedal.value ==='S'){
        const filterMedal = dataForSport.filter(p => p.medal ==='🥈');
        playersTable.innerHTML = '';
        createTable(filterMedal);
    }
    else{
        const filterMedal = dataForSport.filter(p => p.medal ==='🥉');
        playersTable.innerHTML = '';
        createTable(filterMedal); 
    }
}
// Dar funcionalidad al boton volver//
const btnReturn= document.getElementById("return");
btnReturn.addEventListener("click", () => {
    playersTable.innerHTML='';
    dataForSport = [];
    document.getElementById('medalTable').style.display='none'; 
    document.getElementById('sectionSports').style.display='block';
    
})

