// estas funciones son de ejemplo

export const sortData = (data, sortBy,sortOrden) => {

    if (sortBy === sortOrden[0]){ 
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
      const filterFemale = data.filter(p => p.gender ==='🙋🏻‍♀️');
      return filterFemale;
    }
    else if (condition ==='M'){
      const filterMale = data.filter(p => p.gender ==='🙋🏻‍♂️');
      return filterMale;
    }
    else {

      if (condition ==='G'){
        const filterMedal = data.filter(p => p.medal ==='🥇');
        return filterMedal;
      }
      else if (condition ==='S'){
        const filterMedal = data.filter(p => p.medal ==='🥈');
      return filterMedal;
      }
      else{
        const filterMedal = data.filter(p => p.medal ==='🥉');
        return filterMedal; 
      }
    }
};


