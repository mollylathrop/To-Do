var cardContainer = $('.card-container');
var submit = $('.submit-btn');
var currentPlan = localStorage.getItem("name-card");

submit.on("click", appendPlan);

function appendPlan() {
  var exercise = $('.exercise').val();
  var sets = $('.sets').val();
  var reps = $('.reps').val();
  var weight = $('.weight').val();

  cardContainer.append(`
    <div class="name-card"><input type= "checkbox" class= "checkbox">
    ${exercise}: ${sets} sets of ${reps} at ${weight} lbs
    </div>
  `);

  var checkbox = $('.checkbox');
  checkbox.on("click", remove)

  $('.exercise').val("");
  $('.sets').val("");
  $('.reps').val("");
  $('.weight').val("");

  storePlan(currentPlan);
}

function remove(){
event.target.parentNode.remove();
 }

 function storePlan(e) {
   e.preventDefault();
   localStorage.setItem('name-card', name-card);
 }
