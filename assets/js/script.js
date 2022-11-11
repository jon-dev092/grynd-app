var weekBtn = document.querySelector('.weekBtn');
var btnDrop = document.querySelector('#example-dropdown');
var selectedDateEl = document.querySelector('#selected-date');


$("#current-day").text(moment().format("h:mm A on dddd, MMMM D" + "."))


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

    
