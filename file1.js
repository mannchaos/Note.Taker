console.log("checked runs perfectly");
showNotes();

// creating add text buttons logic to save text to local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){

  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();

});

// defining function to show elements from local storage

function showNotes() {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } 
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    
    html += `
      <div class="noteCard mx-5 my-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element} </p>
            <button id=${index} onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
        </div>
      </div>
          `;
  });


  let notesElem = document.getElementById("notes");
  if (notesObj != 0) {
    notesElem.innerHTML = html;
  }
  else {
    notesElem.innerHTML = `
      <div class="flex">
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_42LUVm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
        <p> <big>Nothing to show here!  Add note to save notes :)</big> </</p>
      </div>`;
  }
}

// defining function to delete a note

function deleteNote(index) {

  // console.log("deleting Note index of", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}

// programming search bar 

let search = document.getElementById("srchTxt");
search.addEventListener("input", function(){

  let inputVal = search.value.toLowerCase();
  // console.log("done", inputVal);
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function(element){

    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  
  }); 
    
});
