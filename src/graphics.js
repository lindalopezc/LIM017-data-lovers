/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import{dataForAthletes} from './main.js';
import{computeStats,porcentGender} from './data.js';


const myChart = document.getElementById("myChart");
const graphicForGender=document.getElementById('graphic-gender');
let teams = [];
let value =[];
for(let element of computeStats(dataForAthletes,10)){
    teams.push(element.name);
    value.push(element.valor);
}

const firstGraphic = new Chart(myChart, {
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

let arrayForGender= [];
let count =[];
for(let element of porcentGender(dataForAthletes,2023) ){
  arrayForGender.push(element.gender);
  count.push(element.valor);
}
const secondGraphic = new Chart(graphicForGender, {
    type: "pie",
    data:{
        labels:arrayForGender,
        datasets:[
            {
                label:'Género',
                data: [964,1054],
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
                text:`Participantes por género: Mujeres: ${count[0]}%, Hombres:${count[1]}%`,
                font:{
                    size:20,
                    family:"Delius",
                },
            },
            legend: {
              position: "top",
            }
          }
    },
}
)