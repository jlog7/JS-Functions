const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function encontrarNombre(param, name) {
    if (param.includes(name)) return true;
    else return false;
  }

  console.log ("¿Esta Pedro en la lista? "  + encontrarNombre(nameFinder, "Peter"));
  console.log ("¿Esta Pablo en la lista? "  + encontrarNombre(nameFinder, "Pablo"));