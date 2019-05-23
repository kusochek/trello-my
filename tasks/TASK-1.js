const listsData = []; 

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
