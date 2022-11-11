var weekBtn = document.querySelector('.weekBtn');
var btnDrop = document.querySelector('#example-dropdown');
var selectedDateEl = document.querySelector('#selected-date');
var workoutType = document.querySelector('.workout-type');
var muscleGroup = document.querySelector('.muscle-group');
var workoutTime = document.querySelector('.workout-time');
var workoutCards = document.querySelector('.workout-cards');
var cardBtn = document.querySelector('#cardBtn');


$("#current-day").text(moment().format("dddd, MMMM D" + "."))


var sunday = document.querySelector("#day1");
function changeDate1() {
    selectedDateEl.innerHTML = "Sunday";
}
sunday.addEventListener('click', function() {
    changeDate1();
});


var monday = document.querySelector('#day2')
function changeDate2() {
    selectedDateEl.innerHTML = "Monday";
}
monday.addEventListener('click', function() {
    changeDate2();
});


var tuesday = document.querySelector('#day3')
function changeDate3() {
    selectedDateEl.innerHTML = "Tuesday";
}
tuesday.addEventListener('click', function() {
    changeDate3();
});


var wednesday = document.querySelector('#day4')
function changeDate4() {
    selectedDateEl.innerHTML = "Wednesday";
}
wednesday.addEventListener('click', function() {
    changeDate4();
});


var thursday = document.querySelector('#day5')
function changeDate5() {
    selectedDateEl.innerHTML = "Thursday";
}
thursday.addEventListener('click', function() {
    changeDate5();
});


var friday = document.querySelector('#day6')
function changeDate6() {
    selectedDateEl.innerHTML = "Friday";
}
friday.addEventListener('click', function() {
    changeDate6();
});


var saturday = document.querySelector('#day7')
function changeDate7() {
    selectedDateEl.innerHTML = "Saturday";
}
saturday.addEventListener('click', function() {
    changeDate7();
});


function appendWorkoutCard() {
    var cardEl = document.createElement('div');
    var cardDivider = document.createElement('div');
    var cardDay = document.createElement('h4');
    var cardImgVid = document.createElement('img');
    var cardSection = document.createElement('div');
    var cardElWorkType = document.createElement('p');
    var cardElMuscleGroup = document.createElement('p');
    var cardElWorkTimer = document.createElement('p');


    if(workoutType && muscleGroup && workoutTime) {
        cardElWorkType.textContent = workoutType.value;
        cardElMuscleGroup.innerHTML = muscleGroup.value;
        cardElWorkTimer.innerHTML = workoutTime.value;

        workoutCards.appendChild(cardEl);
        cardEl.appendChild(cardDivider);
        cardDivider.appendChild(cardDay);
        cardEl.appendChild(cardImgVid);
        cardEl.appendChild(cardSection);
        cardSection.appendChild(cardElWorkType);
        cardSection.appendChild(cardElMuscleGroup);
        cardSection.appendChild(cardElWorkTimer);

    } else {
        alert('missing option');
    }

    cardImgVid.setAttribute('src', 'assets/img/generic/rectangle-1.jpg');

}

cardBtn.addEventListener('click', function() {
    appendWorkoutCard();
}); 





    
