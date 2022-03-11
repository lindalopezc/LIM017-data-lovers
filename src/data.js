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
      const filterFemale = data.filter(element => element.gender ==='🙋🏻‍♀️'|| element.gender ==='F');
      return filterFemale;
    }
    else if (condition ==='M'){
      const filterMale = data.filter(element => element.gender ==='🙋🏻‍♂️'|| element.gender ==='M');
      return filterMale;
    }
    else if (condition ==='Golden'){
      const filterMedal = data.filter(element => element.medal ==='🥇'|| element.medal ==='Golden');
      return filterMedal;
    }
    else if (condition ==='Silver'){
      const filterMedal = data.filter(element => element.medal ==='🥈'|| element.medal ==='Silver');
    return filterMedal;
    }
    else if (condition ==='Bronze'){
      const filterMedal = data.filter(element => element.medal ==='🥉' || element.medal ==='Bronze');
      return filterMedal; 
    }
    else{
      const dataForSelementort = data.filter(element => element.sport === condition);
      return dataForSelementort;
    }
}

