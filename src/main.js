import datos from './data/athletes/athletes.js';
import{filterData, sortData} from './data.js';

let data = datos.athletes;

//Reemplazamos los géneros F y M por íconos, igualmente con las medallas:
for(let element of data){
    if(element.medal ==='Bronze'){
      element.medal = '🥉';
    }
    else if (element.medal ==='Silver'){
        element.medal = '🥈';
    }
    else{
        element.medal = '🥇';
    }
    if (element.gender === 'F'){
        element.gender='🙋🏻‍♀️';
    }
    else{
        element.gender = '🙋🏻‍♂️';
    }
}

//Llamamos al botón que nos mostrará la sección de deportes con sus dibujos:
document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('intro').style.display='none';
    document.getElementById('sectionSports').style.display='block'; 
})

///Verificamos qué deportes tiene la data:
let arraySports = [];
for(let element of data){
    arraySports.push(element.sport);
}

//Eliminamos los deportes que se repiten:
arraySports = arraySports.filter((item,index)=>{
      return arraySports.indexOf(item) === index;
})

//Traemos el ID donde está la etiqueta "<table>" de HTML:
let playersTable=document.getElementById('playersTable');

//Creamos un bucle para que se muestre la data del deporte seleccionado de las tarjetas:
let dataForSport = [];
for(let i = 0; i<arraySports.length; i++){
    let card= document.getElementsByClassName('card')[i];
    card.addEventListener('click', ()=>{
    document.getElementById('sectionSports').style.display='none';
    document.getElementById('medalTable').style.display='block';
    dataForSport  =  dataForSport.concat(filterData(data,card.getAttribute('value')));
    playersTable.innerHTML = '';
    createTable(dataForSport);
    }
)}

//Creamos una función que se encargue de crear la tabla:
const createTable = (array) => {
    playersTable.innerHTML+=`<tr><th>NOMBRE</th>
    <th>GÉNERO</th><th>PAÍS</th><th>EDAD</th>
    <th>EVENTO</th><th>MEDALLA</th></tr>`;
     
    for(let i = 0; i<array.length; i++){
        playersTable.innerHTML+=`<tr><td>${array[i].name}</td>
        <td>${array[i].gender}</td>
        <td>${array[i].team}</td>
        <td>${array[i].age}</td>
        <td>${array[i].event}</td>
        <td>${array[i].medal}</td></tr>`;
    }
    return array;
}

//Traemos los selectores para desplegar opciones:
let sortNames = document.getElementsByClassName('filterBtn')[0];
let filterGender = document.getElementsByClassName('filterBtn')[1];
let filterMedal = document.getElementsByClassName('filterBtn')[2];

//Evento que ordena la data por nombres.
sortNames.addEventListener('change', ()=>{
    playersTable.innerHTML='';
    createTable(sortData(dataForSport,sortNames.value));
})

//Función que filtra la data por género:
filterGender.addEventListener('change', ()=>{
    playersTable.innerHTML = '';
    createTable(filterData(dataForSport, filterGender.value));
})

//Función que filtra la data por medalla:
filterMedal.addEventListener('change', ()=>{
    playersTable.innerHTML='';
    createTable(filterData(dataForSport,filterMedal.value));
})

// Evento para que el botón "volver" nos retorne a la vista de tarjetas de deportes:
document.getElementById("return").addEventListener("click", () => {
    playersTable.innerHTML='';
    dataForSport = [];
    document.getElementById('medalTable').style.display='none'; 
    document.getElementById('sectionSports').style.display='block';
})

//Evento que muestra los nombres que coinciden con la busquedad del usuario🔍 :
document.getElementById("btnBuscador").addEventListener("click", ()=> {
    
    const txtBuscado = document.getElementById('txtBuscador').value;
    let array =[];
    let index;
    for(let element of dataForSport){
        index = element.name.search(txtBuscado);
        if( index >= 0){
            array.push(element);
            playersTable.innerHTML = '';
            createTable(array);
            
        }
    }
})