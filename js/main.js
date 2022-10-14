document.getElementById("my-work").addEventListener("click", function() {
    window.open("https://github.com/KrisDevBG?tab=repositories");
});

document.getElementById("my-work-button").addEventListener("click", function() {
    window.open("https://github.com/KrisDevBG?tab=repositories");
});

document.getElementById("home-page").addEventListener("click", function() {
    window.location.replace("../index.html");
});

document.getElementById("about-page").addEventListener("click", function() {
    window.location.replace("../about.html");
});

function OpenLink(link) {
    window.open(link);
}

function CheckShit(elementId) {
    let alegedColor = document.getElementById(elementId).value;

    switch (elementId) {
        case 'bcolor':
            document.body.style.backgroundColor = alegedColor;
            break;
        case 'bscolor':
            document.getElementById("settings").style.transition = "0.5s";
            document.getElementById("settings").style.backgroundColor = alegedColor;
            var all = document.getElementsByTagName("input");
            for (var i=0, max=all.length; i < max; i++) {
                all[i].style.transition = "0.5s";
                all[i].style.backgroundColor = alegedColor;
            }
            break;
        case 'tcolor':
            var all = document.getElementsByTagName("*");
            for (var i=0, max=all.length; i < max; i++) {
                all[i].style.transition = "0.5s";
                all[i].style.color = alegedColor;
            }
            break;
        case 'pcolor':
            let progresses = document.getElementsByClassName("main-inner-progressbar");
            progresses = Array.from(progresses);
            for (let i = 0; i < progresses.length; i++) {
                progresses[i].style.backgroundColor = alegedColor;
            }
            break;
        case 'fperc':
            if (alegedColor < 0) {
                alegedColor = 0;
            } else if (alegedColor > 100) {
                alegedColor = 100;
            }
            document.getElementById("main-inner-progressbar-f").style.width = (alegedColor || 0) + "%";
            const obj1 = document.getElementById("main-inner-progressbar-f-t");
            animateValue(obj1, parseInt(document.getElementById("main-inner-progressbar-t-t").innerHTML), alegedColor, 500);
            break;
        case 'sperc':
            if (alegedColor < 0) {
                alegedColor = 0;
            } else if (alegedColor > 100) {
                alegedColor = 100;
            }
            document.getElementById("main-inner-progressbar-s").style.width = (alegedColor || 0) + "%";
            const obj2 = document.getElementById("main-inner-progressbar-s-t");
            animateValue(obj2, parseInt(document.getElementById("main-inner-progressbar-t-t").innerHTML), alegedColor, 500);
            break;
        case 'tperc':
            if (alegedColor < 0) {
                alegedColor = 0;
            } else if (alegedColor > 100) {
                alegedColor = 100;
            }
            document.getElementById("main-inner-progressbar-t").style.width = (alegedColor || 0) + "%";
            const obj = document.getElementById("main-inner-progressbar-t-t");
            animateValue(obj, parseInt(document.getElementById("main-inner-progressbar-t-t").innerHTML), alegedColor, 500);
            break;
        default:
            break;
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

let settingsShown = false;
function ToggleSettings() {
    if (settingsShown) {
        document.getElementById("settings").style.opacity = 0;
        settingsShown = false;
    } else {
        document.getElementById("settings").style.opacity = 1;
        settingsShown = true;
    }
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
window.scrollTo({top: 0, behavior: 'smooth'});
}

function ChangePosition() {
    if (getRandomInt(1, 10) <= 8) {
        let el = document.getElementById("kris");
        el.style.marginLeft = getRandomInt(200, 600) + "px";
        el.style.marginTop = getRandomInt(200, 600) + "px";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDate();
    let year = today.getFullYear();
    let month = today.toLocaleString('default', { month: 'long' });
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  d + " " + month + " " + year + " | " + h + ":" + m; // + ":" + s;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

let seconds = 0;
function DoSomethingCool() {
    document.body.style.backgroundColor = `rgb(${getRandomInt(1, 255)}, ${getRandomInt(1, 255)}, ${getRandomInt(1, 255)})`
    let num = getRandomInt(1, 3);
    console.log(num);
    if (num == 1) {
        window.scrollTo({top: document.body.scrollTop + 20, behavior: 'smooth'});
    } else {
        window.scrollTo({top: document.body.scrollTop - 20, behavior: 'smooth'});
    }
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        document.body.style.backgroundColor = "";
        return;
    }
    setTimeout(DoSomethingCool, 1000);
}

// function OpenDropDownMenu() {
//     let element = document.getElementById("mywork-dropdown-menu");
//     element.style.display = "block";
// }

// function CloseDropDownMenu() {
//     let element = document.getElementById("mywork-dropdown-menu");
//     element.style.display = "none";
// }

// function ChangeOpacity(value) {
//     let element = document.getElementById("mywork-dropdown-menu");
//     if (value) {
//         element.style.display = "block";
//     } else {
//         element.style.display = "none";
//     }
// }