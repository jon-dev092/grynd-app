var weekBtn = document.querySelector('.weekBtn');
var btnDrop = document.querySelector('#example-dropdown');
var selectedDateEl = document.querySelector('#selected-date');
var workoutType = document.querySelector('.workout-type');
var muscleGroup = document.querySelector('.muscle-group');
var workoutTime = document.querySelector('.workout-time');
var workoutCards = document.querySelector('.workout-cards');
var cardBtn = document.querySelector('#cardBtn');
var specificDate = document.querySelector('.specificDate');
var userName = document.querySelector('#user-name');


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
    var cardDividerText = document.createElement('p');
    var cardImgVid = document.createElement('iframe');
    var cardSection = document.createElement('div');
    var cardElWorkType = document.createElement('p');
    var cardElMuscleGroup = document.createElement('p');
    var cardElWorkTimer = document.createElement('p');
    var btnEl = document.createElement('button');
    
    var rmvBtn = document.createElement('button');
    rmvBtn.innerHTML = ("Remove");
    rmvBtn.style = ("color:red");

    rmvBtn.addEventListener ("click", function() {
        cardEl.remove();
    })

    if(workoutType && muscleGroup && workoutTime) {
        cardElWorkType.innerHTML = workoutType.value;
        cardElMuscleGroup.innerHTML = muscleGroup.value;
        cardElWorkTimer.innerHTML = workoutTime.value;
        cardDividerText.innerHTML = specificDate.textContent;

        workoutCards.appendChild(cardEl);
        cardEl.appendChild(cardDivider);
        cardDivider.appendChild(cardDividerText);
        cardEl.appendChild(cardImgVid);
        cardEl.appendChild(cardSection);
        cardSection.appendChild(cardElWorkType);
        cardSection.appendChild(cardElMuscleGroup);
        cardSection.appendChild(cardElWorkTimer);
        cardSection.appendChild(rmvBtn);
    }

    if (cardDividerText.innerHTML === 'Please select date') {
        cardDividerText.innerHTML = '<br>'; 
    }

    cardEl.setAttribute('class', 'card');
    cardDivider.setAttribute('class', 'card-divider');
    cardImgVid.setAttribute('id', 'player');
    cardImgVid.setAttribute('type', 'text/html');
    cardImgVid.setAttribute('width', '350');
    cardImgVid.setAttribute('height', '196.88');
    cardImgVid.setAttribute('frameborder', '0');
    cardSection.setAttribute('class', 'card-section');

    if(workoutType.value === 'Cardio' && muscleGroup.value === 'Fullbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/kZDvg92tTMc?enablejsapi=1');
    } else if (workoutType.value === 'Cardio' && muscleGroup.value === 'Upperbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/WGA_ctAMkMk?enablejsapi=1');
    } else if (workoutType.value === 'Cardio' && muscleGroup.value === 'Lowerbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/VnmRhnbHbu4?enablejsapi=1');
    } else if (workoutType.value === 'Cardio' && muscleGroup.value === 'Core') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/05fCNM9f0ic?enablejsapi=1');
    }

    if(workoutType.value === 'Strength' && muscleGroup.value === 'Fullbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/AjAVhtQ2vok?enablejsapi=1');
    } else if (workoutType.value === 'Strength' && muscleGroup.value === 'Upperbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/NDOlPdyZLMg?enablejsapi=1');
    } else if (workoutType.value === 'Strength' && muscleGroup.value === 'Lowerbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/_PRk8DH2_mY?enablejsapi=1');
    } else if (workoutType.value === 'Strength' && muscleGroup.value === 'Core') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/lGYT00uTDqY?enablejsapi=1');
    }

    if(workoutType.value === 'HITT' && muscleGroup.value === 'Fullbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/M0uO8X3_tEA?enablejsapi=1');
    } else if (workoutType.value === 'HITT' && muscleGroup.value === 'Upperbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/NF7XhCsITnU?enablejsapi=1');
    } else if (workoutType.value === 'HITT' && muscleGroup.value === 'Lowerbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/fbJL4_ccF9Q?enablejsapi=1');
    } else if (workoutType.value === 'HITT' && muscleGroup.value === 'Core') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/7-zjc6dAufg?enablejsapi=1');
    }

    if(workoutType.value === 'Streching' && muscleGroup.value === 'Fullbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/aZ1PzhThqcU?enablejsapi=1');
    } else if (workoutType.value === 'Streching' && muscleGroup.value === 'Upperbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/5OyGvz_QfuY?enablejsapi=1');
    } else if (workoutType.value === 'Streching' && muscleGroup.value === 'Lowerbody') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/UIRTPXj1Q1U?enablejsapi=1');
    } else if (workoutType.value === 'Streching' && muscleGroup.value === 'Core') {
        cardImgVid.setAttribute('src', 'https://www.youtube.com/embed/aIt-vTovNuA?enablejsapi=1');
    }
}

cardBtn.addEventListener('click', function() {
    appendWorkoutCard();
}); 



function init() {

    var email = localStorage.getItem("email");
    userName.textContent = email;
    
    if (userName.textContent === '') {
        var loginnHtml = './Loginn.html';
        document.location.replace(loginnHtml);
    }
}

init();

