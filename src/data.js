// estas funciones son de ejemplo

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
      const filterFemale = data.filter(p => p.gender ==='🙋🏻‍♀️'|| p.gender ==='F');
      return filterFemale;
    }
    else if (condition ==='M'){
      const filterMale = data.filter(p => p.gender ==='🙋🏻‍♂️'|| p.gender ==='M');
      return filterMale;
    }
    else {

      if (condition ==='Golden'){
        const filterMedal = data.filter(p => p.medal ==='🥇'|| p.medal ==='Golden');
        return filterMedal;
      }
      else if (condition ==='Silver'){
        const filterMedal = data.filter(p => p.medal ==='🥈'|| p.medal ==='Silver');
      return filterMedal;
      }
      else if (condition ==='Bronze'){
        const filterMedal = data.filter(p => p.medal ==='🥉' || p.medal ==='Bronze');
        return filterMedal; 
      }
      else{
        const dataForSport = data.filter(element => element.sport === condition);
        return dataForSport;
      }
    }
}

