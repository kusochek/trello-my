// /**
//  * 
//  * Нужно сделать рендеринг списка заметок (как в прошлый раз), но теперь вместо заверстанных 
//  * элементов списка, нужно написать скрипт который будет их добавлять после загрузки страницы. 
//  * 
//  * В начале скрипта добавь тот обьект, что ниже и отрисуй список заметок из него. 
//  * Если у заметки флаг "highligh" установлен в true, нужно визуально (любым способом) выделять ее среди других
//  */
//  const notesData = {
//    items: [
//     {
//       text: "заметка 1",
//       highlight: false,
//     },
//     {
//       text: "заметка 2",
//       highlight: true,
//     },
//     {
//       text: "заметка 3",
//       highlight: false,
//     },
//     {
//       text: "заметка 4",
//       highlight: false,
//     },
//     {
//       text: "заметка 5",
//       highlight: false,
//     },
//     {
//       text: "заметка 6",
//       highlight: false,
//     },
//     {
//       text: "заметка 7",
//       highlight: true,
//     },
//     {
//       text: "заметка 8",
//       highlight: false,
//     },
//    ],
//  }

 const listsData = [
  {
    name: 'Первый список',
    items: [
     {
       text: "заметка 1",
       highlight: false,
     },
     {
       text: "заметка 2",
       highlight: true,
     },
     {
       text: "заметка 3",
       highlight: false,
     },
    ],
  },
  {
    name: 'Второй список',
    items: [
     {
       text: "заметка 4",
       highlight: false,
     },
     {
       text: "заметка 5",
       highlight: false,
     },
     {
       text: "заметка 6",
       highlight: true,
     },
    ],
  },
  {
    name: 'Третий список',
    items: [
     {
       text: "заметка 7",
       highlight: true,
     },
     {
       text: "заметка 8",
       highlight: true,
     }
    ],
  }
 ];

for(var i = 0; i < listsData.length; i++) {
  const block = (listsData[i].name);
  const column = document.createElement('div');
  column.classList.add('column');
  const first = document.createElement('div');
  first.classList.add('first');
  const textLeft = document.createElement('div');
  textLeft.classList.add('textleft');
  textLeft.innerText = block;
  const ellipsIcon = document.createElement('div');
  ellipsIcon.classList.add('icon')
  // const fasFaEllips = document.createElement('i');
  // fasFaEllips.classList('fas');
  // fasFaEllips.classList('fa-ellipsis-h');

  column.appendChild(first);
  first.appendChild(textLeft);
  first.appendChild(ellipsIcon);
  // ellipsIcon.appendChild(fasFaEllips);

  document.getElementById('demo').appendChild(column);

  for(var j = 0; j < listsData[i].items.length; j++) {
    const textBlock = (listsData[i].items[j].text);


    const rows = document.createElement('div');
    rows.classList.add('rows');
    const row = document.createElement('div');
    row.classList.add('row');
    row.innerText = textBlock ;
    const penIcon = document.createElement('div');
    penIcon.classList.add('second');
 
    const fasFaPen = document.createElement('i');
    fasFaPen.classList.add('fas');
    fasFaPen.classList.add('fa-pen');

    rows.appendChild(row);
    row.appendChild(penIcon);
    penIcon.appendChild(fasFaPen);
    column.appendChild(rows);
    if(listsData[i].items[j].highlight === true) {
      function myFunction() {
        
        var letters = '0123456789ABCDEF';
        var color = '#';
         for(var k = 0; k < 6; k++ ) {
          color += letters[Math.floor(Math.random() * 16)]}
      
          row.style.backgroundColor = color;        
      }
      var myVar = setTimeout(function(){myFunction()}, 2000);
      }
  }
}




 
//  for(var i=0; i < notesData.items.length; i++) {

//  const entry = (notesData.items[i].text);  
//  const row = document.createElement('div');
//  row.classList.add('row');
//  row.innerText = entry ;
//     const penIcon = document.createElement('div');
//     penIcon.classList.add('second');
 
//     const fasFaPen = document.createElement('i');
//     fasFaPen.classList.add('fas');
//     fasFaPen.classList.add('fa-pen');

//     row.appendChild(penIcon);
//     penIcon.appendChild(fasFaPen);

//  document.getElementById('demo').appendChild(row);
//  if(notesData.items[i].highlight === true) {
// //  row.classList.add('highlight');
// //  row.style.backgroundColor = myFunction();
// function myFunction() {
  
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//    for(var i = 0; i < 6; i++ ) {
//     color += letters[Math.floor(Math.random() * 16)]}

//     row.style.backgroundColor = color;
  
// }

// var myVar = setInterval(function(){myFunction()}, 2000);
// }
// }
