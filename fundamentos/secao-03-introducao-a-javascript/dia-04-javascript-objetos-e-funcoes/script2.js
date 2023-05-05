let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (value in names){
    console.log('Olá, ' + names[value]);
  };

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (index in car){
    console.log(index);
  };