const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
   arraySinDuplicados= [];
   for(let i=0; i<param.length; i++)
   {
       if(!arraySinDuplicados.includes(param[i])) arraySinDuplicados.push(param[i]);

   }
   return arraySinDuplicados;
  }
  console.log(removeDuplicates(duplicates));