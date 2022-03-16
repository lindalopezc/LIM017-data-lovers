/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import datos from './data/athletes/athletes.js';
import{filterData, sortData, computeStats} from './data.js';

let dataForAthletes = datos.athletes;

//Reemplazamos los géneros F y M por íconos, igualmente con las medallas:
for(let element of dataForAthletes){
    (element.gender === 'F') ? element.gender='🙋🏻‍♀️': element.gender = '🙋🏻‍♂️';

    if(element.medal ==='Bronze'){
      element.medal = '🥉';
    }
    else if (element.medal ==='Silver'){
        element.medal = '🥈';
    }
    else{
        element.medal = '🥇';
    }
}

//Llamamos al botón que nos mostrará la sección de deportes con sus dibujos:
document.getElementById('btn-sports').addEventListener('click',()=>{
    document.getElementById('intro').style.display='none';
    document.getElementById('sectionSports').style.display='block'; 
})

///Verificamos qué deportes tiene la data:
let arraySports = [];
for(let element of dataForAthletes){
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
    dataForSport  =  dataForSport.concat(filterData(dataForAthletes,card.getAttribute('value')));
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
//Eventos para que botón "volver" regrese a la vista principal:
document.getElementById('btn-return-one').addEventListener('click', () => {
    document.getElementById('sectionSports').style.display='none'; 
    document.getElementById('intro').style.display='block';
})
document.getElementById('btn-return-three').addEventListener('click', () => {
    document.getElementById('stadistics').style.display='none'; 
    document.getElementById('intro').style.display='block';
})

// Evento para que el botón "volver" nos retorne a la vista de tarjetas de deportes:
document.getElementById('btn-return-two').addEventListener('click', () => {
    playersTable.innerHTML='';
    dataForSport = [];
    document.getElementById('medalTable').style.display='none'; 
    document.getElementById('sectionSports').style.display='block';
})

//Evento que muestra los nombres que coinciden con la busquedad del usuario🔍 :
document.getElementById('button-search').addEventListener('click', ()=> {
    
    const searchText = document.getElementById('input-text').value;
    let arrayForSearch =[];
    let index;
    for(let element of dataForSport){
        index = element.name.search(searchText);
        if( index >= 0){
            arrayForSearch.push(element);
            playersTable.innerHTML = '';
            createTable(arrayForSearch);  
        }
    }
})

//En adelante haremos la implementación de las gráficas de países con más número de medallas y de género:

//Generamos un objeto con la cantidad de mujeres y varones.
let peopleByGender = {Female:0,Male:0};
for(let element of dataForAthletes){
    (element.gender === 'F' || element.gender ==='🙋🏻‍♀️')? peopleByGender.Female += 1: peopleByGender.Male += 1;
}
console.log(peopleByGender);

//Sección para gráficas:

//Gráfica para países destacados:
document.getElementById("btn-stadistics").addEventListener("click", () => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("stadistics").style.display = "block";
  });
  
let myChart = document.getElementById("myChart");
let teams = [];
let value =[];
for(let element of computeStats(dataForAthletes,10)){
    teams.push(element.name);
    value.push(element.valor);
}

// eslint-disable-next-line no-unused-vars
let firstGraphic = new Chart(myChart, {
  type: "bar",
  data: {
    labels: teams,
    datasets: [
      {
        label: "Medallas obtenidas",
        data: value,
        backgroundColor: [
            'rgb(154, 220, 255)',
            'rgb(255, 248, 154)',
            'rgb(255, 178, 166)',
            'rgb(255, 138, 174)',
            'rgb(212, 122, 232)',
            'rgb(244, 190, 238)',
            'rgb(168, 236, 231)',
            'rgb(244, 190, 238)',
            'rgb(216, 133, 163)',
            'rgb(120, 151, 171)',
            ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    maintainAspectRatio:false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title:{
        display:true,
        align:'center',
        position:'top',
        text:'Países destacados',
        font:{
            size:20,
            family:"Delius",
        }
    }
    }
  }
});


//Gráfica pie para género:
let graphicForGender=document.getElementById('graphic-gender');
let gender= ['Femenino','Masculino'];
let count =[969,1054];
let secondGraphic = new Chart(graphicForGender, {
    type: "pie",
    data:{
        labels:gender,
        datasets:[
            {
                label:'Género',
                data: count,
                backgroundColor:['rgb(216, 133, 163)','rgb(120, 151, 171)']
            },
        ],
    },
    options:{
        maintainAspectRatio:false,
        plugins: {
            title:{
                display:true,
                align:'center',
                position:'top',
                text:'Participantes por género',
                font:{
                    size:20,
                    family:"Delius",
                }
            },
            legend: {
              position: "top",
            }
          }
    },
}
)