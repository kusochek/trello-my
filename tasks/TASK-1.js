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
//  const allNotes = document.querySelector('.column .rows');

 for(var i=0; i < notesData.items.length; i++) {
 const entry = (notesData.items[i].text);

//  if(notesData.items[0].highlight === true) {
//  document.querySelector('row').style.color = 'red';
  

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

// }
}
