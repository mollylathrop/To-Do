var cardContainer = $('.card-container');
var submit = $('.submit-btn');
var currentPlan = JSON.parse(localStorage.getItem('plan')) || [];



function appendCurrentPlan() {
  currentPlan.forEach(function(plan) {
    cardContainer.append(`
      <article class="name-card"><input type= "checkbox" class= "checkbox">
        ${plan.exercise}: ${plan.sets} sets of ${plan.reps} at ${plan.weight} lbs
      </article>
    `);
    var checkbox = $('.checkbox');
    checkbox.on("click", remove)
  })
}

appendCurrentPlan();

submit.on("click", appendPlan);

function appendPlan(e) {
  e.preventDefault();
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

  currentPlan.push({exercise: exercise, sets: sets, reps: reps, weight: weight});
  var currentPlanString = JSON.stringify(currentPlan);
  localStorage.setItem('plan', currentPlanString);
  console.log(localStorage);
}

function remove(){
event.target.parentNode.remove();
localStorage.removeItem('plan');
 }
