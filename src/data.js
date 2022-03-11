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


