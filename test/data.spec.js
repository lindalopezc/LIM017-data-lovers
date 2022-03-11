import { sortData,filterData} from '../src/data.js';

const dataPrueba = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "sport": "Rowing",
    "team": "Italy",
    "event": "Rowing Men's Coxless Pairs",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "sport": "Taekwondo",
    "team": "Azerbaijan",
    "event": "Taekwondo Women's Flyweight",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "sport": "Handball",
    "team": "France",
    "event": "Handball Men's Handball",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "sport": "Wrestling",
    "team": "Iran",
    "event": "Wrestling Men's Middleweight, Greco-Roman",
    "medal": "Bronze"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "sport": "Gymnastics",
    "team": "Russia",
    "event": "Gymnastics Men's Team All-Around",
    "medal": "Silver"
  }
]

describe('Aplicación de tests para función sortData', () => {
  it('El return de la función sortData es de tipo: Objeto', () => {
    expect(typeof sortData(dataPrueba, 'ASC')).toBe('object');
  });

  it('El primer nombre de la data ordenada de manera ascendente es: Denis Mikhaylovich Ablyazin', () => {
    expect(sortData(dataPrueba,'ASC')[0].name).toEqual('Denis Mikhaylovich Ablyazin');
  });
});


describe('Aplicación de tests para la función filterData', () => {
  it('Solo existe 1 mujer en la dataPrueba', () => {
    expect(filterData(dataPrueba,'F').length).toEqual(1);
  });

  it('Solo existen 3 hombres en la dataPrueba', () => {
    expect(filterData(dataPrueba,'M').length).toEqual(4);
  });
}); 
