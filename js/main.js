const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')


function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let session = "AM";

    if(hh == 0) {
      hh = 12;
    }
    if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    const timeInterval = 6;

    document.getElementById("digital-clock").innerText = time;
    setTimeout(function(){ currentTime() }, 1000);

    secondsHand.style.transform = 'rotate(' + (ss * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (mm * timeInterval + ss / 10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hh * 30 + mm / 2) + 'deg)'

  }

  setInterval(currentTime, 100)
