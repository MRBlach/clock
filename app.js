// JavaScript: Display the current day and time in a specific format

//  const start = alert ("Click OK for the current date and time:");
function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
  }

  function display_ct() {
    let today = new Date();
      let day = today.getDay();
      let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      document.getElementById("day").innerHTML = daylist[day];

      let month = today.getMonth();
      let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let date = today.getDate() + " ";
      if (date <10 ){date='0' + date;}      
      let year = today.getFullYear();
      document.getElementById("month-date-year").innerHTML = monthList[month] + " " + date + " " + year;

      let hour = today.getHours();
      if(hour <10 ){hour='0'+hour;}

      let minute = today.getMinutes();
      if(minute <10 ) {minute='0' + minute; }

      let second = today.getSeconds();
      if(second<10){second='0' + second;}

      let prepand = (hour >= 12)? " PM ":" AM ";
        hour = (hour >= 12)? hour - 12: hour;

      if (hour === 0  &&  prepand === ' PM ') {
        if (minute === 0  &&  second === 0) {
          hour = 12;
          prepand = ' Noon';
        }  else {
              hour = 12;
              prepand = ' PM';
            }
      }

      if (hour === 0  &&  prepand === ' AM ') {
        if (minute === 0  &&  second === 0) {
          hour = 12;
          prepand = ' Midnight';
        }  else {
              hour = 12;
              prepand = ' AM';
            }
      }

      document.getElementById("time").innerHTML = hour + " : " + minute + " : " + second + prepand;
      display_c();
  }


  

