const day_btn = document.querySelector("#day_btn");
const sunset_btn = document.querySelector("#sunset_btn");
const night = document.querySelector("#night_btn");
const controls = document.querySelector(".controls");
let edited = document.querySelector(".edited");
let sun = document.querySelector(".sun");


controls.addEventListener("click", (e) => {
    let clicked = e.target.id;
    if (clicked == 'day_btn') {
        sun.classList.remove('sun')
        edited.classList.remove('sunset')
        edited.classList.remove('night')

        edited.classList.add('day_sun');
        edited.classList.add('day_click');  
    }
    else if (clicked == 'sunset_btn') {
        sun.classList.add('sun')
        edited.classList.add('sunset')
        edited.classList.remove('day_sun');
        edited.classList.remove('night')
        edited.classList.remove('day_click');  
    }
    else if (clicked == 'night_btn') {
        sun.classList.remove('sun')
        edited.classList.remove('sunset')
        edited.classList.remove('day_sun');
        edited.classList.remove('day_click');  
        edited.classList.add('night')
    }
});
