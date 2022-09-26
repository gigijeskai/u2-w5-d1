
    let dateTime = new Date();
    document.getElementById("current-date").innerHTML = dateTime;

    document.getElementById("current-year").innerHTML = dateTime.getFullYear();

    document.getElementById("current-month").innerHTML = dateTime.getMonth();

    document.getElementById("current-day").innerHTML = dateTime.getDay();

    document.getElementById("current-hours").innerHTML = dateTime.getHours();

    document.getElementById("current-minutes").innerHTML = dateTime.getMinutes();

    document.getElementById("current-seconds").innerHTML = dateTime.getSeconds();

    document.getElementById("current-milliseconds").innerHTML = dateTime.getMilliseconds();

  //   let dateIT = dateTime.toLocaleDateString()
  // let timeIT = dateTime.toLocaleTimeString()
  // let dateTimeIt = dateIT + timeIT
  // document.getElementById('data-it').innerHTML = dateTimeIt
 
  let options = {'weekday': 'long', 'month': 'long', 'day': '2-digit', 'year':'2-digit'};
  let dateIt = new Date().toLocaleString('it-IT', options);
  let timeIt = new Date().toLocaleTimeString('it-IT');
 document.getElementById("data-it").innerHTML = (timeIt + " " + dateIt)
 

