// /**
//  * 
//  * Нужно сделать рендеринг списка заметок (как в прошлый раз), но теперь вместо заверстанных 
//  * элементов списка, нужно написать скрипт который будет их добавлять после загрузки страницы. 
//  * 
//  * В начале скрипта добавь тот обьект, что ниже и отрисуй список заметок из него. 
//  * Если у заметки флаг "highligh" установлен в true, нужно визуально (любым способом) выделять ее среди других
//  */
 const notesData = {
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
      highlight: false,
    },
    {
      text: "заметка 7",
      highlight: true,
    },
    {
      text: "заметка 8",
      highlight: false,
    },
   ],
 }

 for(var i=0; i < notesData.items.length; i++) {

 const entry = (notesData.items[i].text);  
 const row = document.createElement('div');
 row.classList.add('row');
 row.innerText = entry ;
    const penIcon = document.createElement('div');
    penIcon.classList.add('second');
 
    const fasFaPen = document.createElement('i');
    fasFaPen.classList.add('fas');
    fasFaPen.classList.add('fa-pen');

    row.appendChild(penIcon);
    penIcon.appendChild(fasFaPen);

 document.getElementById('demo').appendChild(row);
 if(notesData.items[i].highlight === true) {
//  row.classList.add('highlight');
 row.style.backgroundColor = myFunction()
}
}
function myFunction() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const random = (myFunction())