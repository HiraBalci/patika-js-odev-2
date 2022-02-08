const form = document.querySelector("#addTaskForm");
form.addEventListener("submit", formSubmit);
const alertDOM = document.querySelector("#alert");
const successDOM = document.querySelector("#success");
const ALERT = `
<div class="mr-1" style="position: relative">
      <div style="position: absolute; top: 0; right: 0">
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Lütfen alanı boş bırakmayınız.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"> <i class="fas fa-times"></i></button>
</div>
</div>
    </div>
`;
const SUCCESS = `<div class="mr-1" style="position: relative">
<div style="position: absolute; top: 0; right: 0">
<div class="alert alert-warning alert-dismissible fade show" role="alert">
Listeye eklendi.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"> <i class="fas fa-times"></i></button>
</div>
</div>
</div>`;
const tasklist = document.querySelector("#list");

function eventListeners() {
  tasklist.addEventListener("click", deleteItem);
}
function deleteItem(e) {
  console.log(e);
}
function formSubmit(event) {
  event.preventDefault(); //default işlemi engelledik.

  let scoreInputDom = document.querySelector("#task");
  console.log(scoreInputDom.value);
  if (scoreInputDom.value) {
    successDOM.innerHTML = SUCCESS;
    addItem(scoreInputDom.value);
    scoreInputDom.value = "";
  } else {
    alertDOM.innerHTML = ALERT;
  }
  localStorage.setItem("value", scoreInputDom.value); //local Storage 'a kayıt ediyor.
}
/*
 <li>
          3 Litre Su İç<a href="#" class="delete-item float-right">
            <i class="fas fa-times"></i>
          </a>
        </li>
*/
let userListDOM = document.querySelector("#list");
const addItem = (val) => {
  let liDOM = document.createElement("li");
  liDOM.className = "alert alert-dismissible";

  liDOM.innerHTML = `${val}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    style="float: right"
  >
    <i class="fas fa-times"></i>
  </button>`;
  userListDOM.append(liDOM);
};
