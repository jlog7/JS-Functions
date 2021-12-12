const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let promedioNumeros = 0;
let promedioStrings = 0;
function averageWord(param) {
  for(let i=0; i<mixedElements.length; i++)
  {
      if (typeof mixedElements[i] =="number") promedioNumeros += mixedElements[i];
      else if (typeof mixedElements[i] =="string") promedioStrings += mixedElements[i].length;
  }
}
averageWord(mixedElements);
console.log("Suma numerica: " + promedioNumeros);
console.log("Suma de strings: " + promedioStrings);