// /**
//  * 
//  * Нужно сделать рендеринг списка заметок (как в прошлый раз), но теперь вместо заверстанных 
//  * элементов списка, нужно написать скрипт который будет их добавлять после загрузки страницы. 
//  * 
//  * В начале скрипта добавь тот обьект, что ниже и отрисуй список заметок из него. 
//  * Если у заметки флаг "highligh" установлен в true, нужно визуально (любым способом) выделять ее среди других
//  */
//  const notesData = document.querySelector('.column .rows');
 var txt = '';
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
 notesData.items.forEach(myFunction);
 function myFunction (value, index, array) {
  txt = txt + value + "<br>"; 
 }
  var note = `<div class="row"><div></div><div class="second"><i class="fas fa-pen"></i></div></div>`;
  notesData.innerHTML += note;
  document.getElementById("demo").innerHTML = txt;

// var notesData, items, text, i;
// for (i=0; i < 8; i++) {
//  notesData.items += text + i + '<br>';
// }
// document.getElementsByClassName('.column .rows').innerHTML = text;


//  const row = document.createElement('div');
//  row.classList.add('row');

//     const textDiv = document.createElement('div');
//     textDiv.innerText = 'Заметка 1';
 
//     const penIcon = document.createElement('div');
//     penIcon.classList.add('second');
 
//     const fasFaPen = document.createElement('i');
//     fasFaPen.classList.add('fas');
//     fasFaPen.classList.add('fa-pen');

//  const row1 = document.createElement('div');
//  row1.classList.add('row');

//      const textDiv1 = document.createElement('div');
//     textDiv1.innerText = 'Заметка 2';
 
//     const penIcon1 = document.createElement('div');
//     penIcon.classList.add('second');
 
//     const fasFaPen1 = document.createElement('i');
//     fasFaPen.classList.add('fas');
//     fasFaPen.classList.add('fa-pen');

//  const row2 = document.createElement('div');
//  row2.classList.add('row');
 
//      const textDiv2 = document.createElement('div');
//     textDiv2.innerText = 'Заметка 3';
 
//     const penIcon2 = document.createElement('div');
//     penIcon.classList.add('second');
 
//     const fasFaPen2 = document.createElement('i');
//     fasFaPen.classList.add('fas');
//     fasFaPen.classList.add('fa-pen');

//   const row3 = document.createElement('div');
//  row3.classList.add('row');
 
//      const textDiv3 = document.createElement('div');
//     textDiv3.innerText = 'Заметка 4';
 
//     const penIcon3 = document.createElement('div');
//     penIcon.classList.add('second');
 
//     const fasFaPen3 = document.createElement('i');
//     fasFaPen.classList.add('fas');
//     fasFaPen.classList.add('fa-pen');


//     row.appendChild(textDiv);
//     row.appendChild(penIcon);
//     row1.appendChild(textDiv1);
//     row1.appendChild(penIcon1);
//     row2.appendChild(textDiv2);
//     row2.appendChild(penIcon2);
//     row3.appendChild(textDiv3);
//     row3.appendChild(penIcon3);
//     penIcon.appendChild(fasFaPen);
//     penIcon1.appendChild(fasFaPen1);
//     penIcon2.appendChild(fasFaPen2);
//     penIcon3.appendChild(fasFaPen3);
//     allNotes.appendChild(row);
//     allNotes.appendChild(row1);
//     allNotes.appendChild(row2);
//     allNotes.appendChild(row3);