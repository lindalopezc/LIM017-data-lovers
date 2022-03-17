// estas funciones son de ejemelementlo

export const sortData = (data, sortOrden) => {

    if (sortOrden === 'ASC'){ 
      data.sort ((a,b)=> {
        if (a.name > b.name) {
          return 1;
        }
        else if (a.name < b.name) {
          return -1;
        }
          return 0;
      })
    }
    else{
      data.sort( (a,b) => {
        if (a.name > b.name) {
          return -1;
        }
        else if (a.name < b.name) {
          return 1;
        }
          return 0;
      })
    }
    return data;
};

export const filterData = (data, condition) => {
  
    if (condition ==='F'){
      return data.filter(element => element.gender ==='🙋🏻‍♀️'|| element.gender ==='F');
    }
    else if (condition ==='M'){
      return data.filter(element => element.gender ==='🙋🏻‍♂️'|| element.gender ==='M');
    }
    else if (condition ==='Golden'){
      return data.filter(element => element.medal ==='🥇'|| element.medal ==='Golden');
    }
    else if (condition ==='Silver'){
    return data.filter(element => element.medal ==='🥈'|| element.medal ==='Silver');
    }
    else if (condition ==='Bronze'){
      return data.filter(element => element.medal ==='🥉' || element.medal ==='Bronze');
    }
    else{
      return data.filter(element => element.sport === condition);
    }
}

export const computeStats=(data,position)=>{
  let arrayTeam = [];
  for(let element of data){
      arrayTeam.push(element.team);
  }
  //Generamos un objeto con los nombres de los países y la cantidad de medallas. 
  let medalsByCountry ={};
  for(let element of arrayTeam){
      (medalsByCountry[element]) ? medalsByCountry[element] += 1 : medalsByCountry[element] = 1;
  }
  // Creamos un array con keys "name" y "valor" para guardar nombres de países y número de medallas.
  let array=[];
  for(let propiedad in medalsByCountry){
    array.push({name:propiedad, valor: medalsByCountry[propiedad]})
  }
  //Ordenamos los países por número de medallas obtenidas de manera descendente, retornando un array con los 10 primeros.
  array.sort((a,b)=>{return b.valor - a.valor})
  for(let i=array.length; i>position;i--){
    array.pop(array[i]);
  }
  return array;
}

export const porcentGender=(data,total) =>{
  
  //Generamos un objeto para conocer la cantidad de mujeres y varones
  let array =[{gender:'Femenino', valor:0},{gender:'Masculino', valor:0}];
  for(let element of data){
      (element.gender === 'F' || element.gender ==='🙋🏻‍♀️')? array[0].valor += 1: array[1].valor += 1;
  }
  //Convertimos los valores obtenidos de mujeres y varones en porcentaje:
  array[0].valor=Math.round((array[0].valor/total)*100);
  array[1].valor=Math.round((array[1].valor/total)*100);
  return array;
}