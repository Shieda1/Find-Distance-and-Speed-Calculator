// https://calculator.swiftutors.com/time-from-distance-and-speed.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const timeRadio = document.getElementById('timeRadio');
const distanceRadio = document.getElementById('distanceRadio');
const speedRadio = document.getElementById('speedRadio');

let time;
let distance = v1;
let speed = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance (m)';
  variable2.textContent = 'Speed (m/s)';
  distance = v1;
  speed = v2;
  result.textContent = '';
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Time (s)';
  variable2.textContent = 'Speed (m/s)';
  time = v1;
  speed = v2;
  result.textContent = '';
});

speedRadio.addEventListener('click', function() {
  variable1.textContent = 'Time (s)';
  variable2.textContent = 'Distance (m)';
  time = v1;
  distance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)} s`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computeDistance().toFixed(2)} m`;

  else if(speedRadio.checked)
    result.textContent = `Speed = ${computeSpeed().toFixed(2)} m/s`;
})

// calculation

function computeTime() {
  return Number(distance.value) / Number(speed.value);
}

function computeDistance() {
  return Number(time.value) * Number(speed.value);
}

function computeSpeed() {
  return Number(distance.value) / Number(time.value);
}