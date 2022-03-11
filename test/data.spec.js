import { sortData,filterData} from '../src/data.js';

const testData = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "sport": "Taekwondo",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "sport": "Taekwondo",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "sport": "Taekwondo",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "sport": "Gymnastics",
    "medal": "Bronze"
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "sport": "Gymnastics",
    "medal": "Silver"
  }
]

describe('Aplicación de tests para función sortData', () => {
  it('El return de la función sortData es de tipo: Objeto', () => {
    expect(typeof sortData(testData, 'ASC')).toBe('object');
  });

  it('El primer nombre de la data ordenada de manera ascendente es: Denis Mikhaylovich Ablyazin', () => {
    expect(sortData(testData,'ASC')[0].name).toEqual('Denis Mikhaylovich Ablyazin');
  });
  it('El primer nombre de la data ordenada de manera descendente es: Saeid Morad Abdevali', () => {
    expect(sortData(testData,'DESC')[0].name).toEqual('Saeid Morad Abdevali');
  });
});


describe('Aplicación de tests para la función filterData', () => {
  it('Solo existe 1 mujer en la dataPrueba', () => {
    expect(filterData(testData,'F').length).toEqual(1);
  });

  it('Solo existen 3 hombres en la dataPrueba', () => {
    expect(filterData(testData,'M').length).toEqual(4);
  });
  it('Solo existen 3 medallas de Bronze en la dataPrueba', () => {
    expect(filterData(testData,'Bronze').length).toEqual(3);
  });
  it('Solo existen 2 medallas de Plata en la dataPrueba', () => {
    expect(filterData(testData,'Silver').length).toEqual(2);
  });
  it('Solo existen 3 participantes de "Taekwondo" en la dataPrueba', () => {
    expect(filterData(testData,'Taekwondo').length).toEqual(3);
  });
  it('Solo existen 3 participantes de "Gymnastics" en la dataPrueba', () => {
    expect(filterData(testData,'Gymnastics').length).toEqual(2);
  });
}); 
