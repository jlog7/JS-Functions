  
  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    for(let i =0; i<param.length; i++) 
    {
        let contador = 0;
        for(j=0; j<param.length; j++)
        {
            if (param[j] == param[i]) {
                contador +=1;
            }
        }
        console.log(param[i] + " se repite: " + contador + " veces" );
    }
  }
  repeatCounter(counterWords);
