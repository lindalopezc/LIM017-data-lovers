import { it } from 'eslint/lib/rule-tester/rule-tester';
import { sortData,filterData, computeStats} from '../src/data.js';

const testData = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "sport": "Taekwondo",
    "medal": "Bronze",
    "team": "United States",
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "sport": "Taekwondo",
    "medal": "Bronze",
    "team": "United States",
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "sport": "Taekwondo",
    "medal": "Silver",
    "team": "United States",
  },
  {
  "name": "Luco Abalos",
  "gender": "M",
  "sport": "Taekwondo",
  "medal": "Silver",
  "team": "China",
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "sport": "Gymnastics",
    "medal": "Bronze",
    "team":"Japan",
  },
  {
    "name": "Denis Mikhaylovich Ablyazin",
    "gender": "M",
    "sport": "Gymnastics",
    "medal": "Silver",
    "team":"Japan",
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

  it('Solo existe 1 mujer en la data de muestra', () => {
    expect(filterData(testData,'F').length).toEqual(1);
  });
  it('Solo existen 5 hombres en la data de muestra', () => {
    expect(filterData(testData,'M').length).toEqual(5);
  });
  it('Solo existen 3 medallas de Bronze en la data de muestra', () => {
    expect(filterData(testData,'Bronze').length).toEqual(3);
  });
  it('Solo existen 3 medallas de Plata en la data de muestra', () => {
    expect(filterData(testData,'Silver').length).toEqual(3);
  });
  it('Solo existen 4 participantes de "Taekwondo" en la data de muestra', () => {
    expect(filterData(testData,'Taekwondo').length).toEqual(4);
  });
  it('Solo existen 3 participantes de "Gymnastics" en la data de muestra', () => {
    expect(filterData(testData,'Gymnastics').length).toEqual(2);
  });
}); 
describe('Aplicación de test para función computeStats',()=>{
  it('El primer país de la lista ordenada es EE.UU', () => {
    expect((computeStats(testData,3))[0].name).toBe('United States');
  });
  it('EE.UU tiene 3 medallas en la data de muestra', () => {
    expect((computeStats(testData,3))[0].valor).toEqual(3);
  });
  it('Japón tiene 3 medallas en la data de muestra', () => {
    expect((computeStats(testData,3))[1].valor).toEqual(2);
  });
})