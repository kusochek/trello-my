/**
 * 
 * Нужно сделать рендеринг списка заметок (как в прошлый раз), но теперь вместо заверстанных 
 * элементов списка, нужно написать скрипт который будет их добавлять после загрузки страницы. 
 * 
 * В начале скрипта добавь тот обьект, что ниже и отрисуй список заметок из него. 
 * Если у заметки флаг "highligh" установлен в true, нужно визуально (любым способом) выделять ее среди других
 */

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
   ],
 }
document.getElementsByClassName('column');
allert ();

 const first = document.createElement('div');
 first.classList.add('first');

 const row = document.createElement('div');
 row.classList.add('row');

 const row = document.createElement('div');
 row.classList.add('row');

 const row = document.createElement('div');
 row.classList.add('row');

 const plusText = document.createElement('div');
 plusText.classList.add('plusText');

 const fieldText = document.createElement('div');
 fieldText.classList.add('fieldText');

 const inputText = document.createElement('input');
 inputText.classList.add('.plustext input[type=text]');

 const buttonAdd = document.createElement('button');
 const fasFaPlus = document.createElement('i');
 fasFaPen.classList.add('fas');
 fasFaPen.classList.add('fa-plus');