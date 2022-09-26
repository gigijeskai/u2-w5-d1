
function showDateTime(){
    let dateTime = new Date();
document.getElementById('current-date').innerHTML = dateTime
}

function showYear(){
    let year =  new Date();
    document.getElementById('current-year').innerHTML = year.getFullYear();
}
function showMonth(){
    let date = new Date();
    let month =  date.toLocaleString('en-EN',{'month' : 'long'})
    document.getElementById('current-month').innerHTML = month;
}
 function showDay(){
     let date  =  new Date();
let day = date.toLocaleString('en-EN',{'weekday' : 'long'})
     document.getElementById('current-day').innerHTML = day;
 }
 function showHour(){
     let hour  =  new Date();
     document.getElementById('current-hour').innerHTML = hour.getHours();
 }

 function showMinute(){
  let minute =  new Date();
     document.getElementById('current-minute').innerHTML = minute.getMinutes();
 }

 function showSecond(){
     let second =  new Date();
     document.getElementById('current-second').innerHTML = second.getSeconds();
 }
 function showMillisecond(){
    let millisecond  =  new Date();
     document.getElementById('current-millisecond').innerHTML = millisecond.getMilliseconds();
 }

 function showItalianDateTime(){
    let options = {'weekday': 'long', 'month': 'long', 'day': '2-digit', 'year':'2-digit'};
    let dateIt = new Date().toLocaleString('it-IT', options);
    let timeIt = new Date().toLocaleTimeString('it-IT');
   document.getElementById("data-it").innerHTML = (timeIt + " " + dateIt)
 }

 function showBritishDateTime(){
    let options = {'weekday': 'long', 'month': 'long', 'day': '2-digit', 'year':'2-digit'};
    let dateGb = new Date().toDateString('en-GB', options, { timeZone: 'Europe/London' });
    let timeGb = new Date().toTimeString('en-GB', { timeZone: 'Europe/London' });
   document.getElementById("data-gb").innerHTML = (timeGb + " " + dateGb)
 }
 function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let time = h + ":" + m + ":" + s;
    document.getElementById("ClockDisplay").innerHTML = time;
   setTimeout(showTime, 1000);
    
}