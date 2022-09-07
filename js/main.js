const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')


function currentTime() {
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    const timeInterval = 6;


    secondsHand.style.transform = 'rotate(' + (ss * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (mm * timeInterval + ss / 10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hh * 30 + mm / 2) + 'deg)'

  }

  setInterval(currentTime, 100)
