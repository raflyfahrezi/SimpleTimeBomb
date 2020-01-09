/// <reference path="./typings/globals/jquery/index.d.ts" />

let time = 0
userScore = 0
var score = 0 //3

function setTime(time) {  //1
    document.getElementById('timeDisplay').innerText = time + ' s' 
}

function setScore(scr) { //1
    document.getElementById('scoreDisplay').innerText = 'Score : ' + scr 
}

function startTimer() { //5
    time -= 1
    if (time == 0) {
        $(".third_container").fadeOut(1)
        $(".fourth_container").fadeIn(100)
        clearInterval(timerStart)
    }
    setTime(time)
}

function validation(id) { //3
    let value
    switch (id) {
        case 'blue_cable':
                value = 1
            break;
        case 'green_cable':
                value = 2
            break;
        case 'red_cable':
                value = 3
            break;
    }
    return value
}

function buttonValidation(btn) { //6
    switch (btn) {
        case 'firstButton':
                $('.first_container').fadeOut('fast')
                setTimeout(() => {
                $('.second_container').fadeIn('fast')
                }, 1000);
            break;
        case 'secondButton':
                $('.second_container').fadeOut('fast')
                setTimeout(() => {
                    $('.third_container').fadeIn('fast')
                }, 1000);
                time = 6
                timerStart = setInterval(startTimer, 1000)
            break;
        case 'thirdButton':
                $('.fourth_container').fadeOut('fast')
                setTimeout(() => {
                    $('.second_container').fadeIn('fast')
                }, 1000);
                clearInterval(timerStart)
            break;
        case 'fourthButton':
                $('.fifth_container').fadeOut('fast')
                setTimeout(() => {
                    $('.second_container').fadeIn('fast')
                }, 1000);
                clearInterval(timerStart)
            break;  
        case 'fifthButton':
                $('.sixth_container').fadeOut('fast')
                setTimeout(() => {
                    $('.second_container').fadeIn('fast')
                }, 1000);
                clearInterval(timerStart)
            break;
    }
}

function results(user, wire) {
    console.log('User : ' + user + ' and wire : ' +  wire)
    clearInterval(timerStart)
    if (score != -30) {
            if (user == wire) {
            score += 10
            setScore(score)
            console.log(score)
            $('.third_container').fadeOut('fast')
            setTimeout(() => {
                $('.fifth_container').fadeIn('fast')
            }, 500)
        } else {
            score -= 10
            setScore(score)
            $('.third_container').fadeOut('fast')
            setTimeout(() => {
                $('.sixth_container').fadeIn('fast')
            }, 500)
        }
    } else {
        $('.third_container').fadeOut('fast')
        setTimeout(() => {
            $('.seventh_container').fadeIn('slow')
             setTimeout(() => {
                $('.seventh_container').fadeOut('slow')
                setTimeout(() => {
                    $('.eighth_container').fadeIn('slow')
                    setTimeout(() => {
                        $('.eighth_container').fadeOut('slow')
                    }, 5000);
                }, 3000);
            }, 5000);
        }, 1000);  
    }
    
}

let getButton = document.getElementsByClassName('button')

for (let index = 0; index < getButton.length; index++) {
    getButton[index].addEventListener('click', function(){
        buttonValidation(this.id)
    })
}
let getCables = document.getElementsByClassName('cables')

for (let index = 0; index < getCables.length; index++) {
        getCables[index].addEventListener('click', function(){
        let wireKey = Math.floor(Math.random() * 3) + 1  
        let result = validation(this.id)
        results(result, wireKey)
    })
}
