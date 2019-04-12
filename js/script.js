// function newNote() {
//     const input = document.querySelector('.plustext input[type=text]');
//     

//     // const note = `<div class="row"><div>${input.value}</div><div class="second"><i class="fas fa-pen"></i></div></div>`;

//     const row = document.createElement('div');
//     row.classList.add('row');

//     const textDiv = document.createElement('div');
//     textDiv.innerText = input.value;

//     const penIcon = document.createElement('div');
//     penIcon.classList.add('second');

//     const fasFaPen = document.createElement('i');
//     fasFaPen.classList.add('fas');
//     fasFaPen.classList.add('fa-pen');

//     row.appendChild(textDiv);
//     row.appendChild(penIcon);
//     penIcon.appendChild(fasFaPen);

//     allNotes.appendChild(row);
//     // allNotes.innerHTML += note;

//     // alert(input.value);
// }