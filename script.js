const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
  // INHERITING THE DATETIME PROPERTIES FROM THE STANDARD TIME ZONE ::
  var date =new Date();
  console.log(date);

  let hr=date.getHours();
  let min=date.getMinutes();
  let sec=date.getSeconds();
  console.log("Hour: " + "Minutes:" + "Second:");


  let hrPosition = (hr*360/12)+(min*(360/60)/12);
  let minPostion = (min*360/60)+(sec*(360/60)/60);
  let secPosition = sec*360/60;
  function runTheClock() {

      hrPosition+=(3/60);
      minPostion+=(6/60);
      secPosition+=6;

      HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
      MINUTEHAND.style.transform = "rotate(" + minPostion + "deg)";
      SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
var interval = setInterval(runTheClock,1000);
