import React from "react";
import "./App.css";
import Clock from "./components/clock";
import { nextLesson } from "./components/nextLesson";
import { wszystkieDzwonki } from "./package-react";
import { schedule } from "./schedule";
import { nextBreak } from "./components/nextBreak";
import { currentLesson } from "./components/currentLesson";

(function () {
  var start = new Date();
  const { schoolBell, monday, tuesday, wednesday, thursday, friday, saturday } = schedule();

  const newDate = new Date();
  var wyswietlDate = newDate.toLocaleDateString('pl-PL');
  let displayWeekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

  document.getElementById('title').innerHTML = ("MyClock");
  document.getElementById('author').innerHTML = ("<a href='https://github.com/dariusz-grubba/myclock' target='_blank'>" + "<i class='fa-brands fa-github fa-sm'></i>" + "&nbsp" + "Dariusz Grubba" + "</a>");
  document.getElementById('currentDate').innerHTML = (displayWeekday + ", " + wyswietlDate);
  var now1 = newDate.toLocaleTimeString('pl-PL');
  var now2 = newDate.toLocaleTimeString('pl-PL');

  now1 = now1.slice(0, 5);
  now2 = now2.slice(0, 5);

  var currentTime = newDate.toLocaleTimeString('pl-PL');
  currentTime = currentTime.slice(0, 5);

  if (currentTime.startsWith("0") && currentTime.startsWith("0")) {
    currentTime = currentTime.slice(1);
  }
  if (now1.startsWith("0") && now2.startsWith("0")) {
    now1 = now1.slice(1, 2);
    now2 = now2.slice(3, 5);
  } else {
    now1 = now1.slice(0, 2);
    now2 = now2.slice(3, 5);
  }
  wszystkieDzwonki(now1, schoolBell, now2, start);
  let dzienTygodnia = new Date();

  const lessonNumber = currentLesson(currentTime, schoolBell);
  nextLesson(lessonNumber, dzienTygodnia, monday, tuesday, wednesday, thursday, friday, saturday);

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }
  function coutdownToRing() {
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    document.getElementById('time').innerHTML =
      hh + ":" + mm + ":" + ss;
    setTimeout(coutdownToRing, 1000);
    if (((hh + ":" + mm + ":" + ss) < "00:00:01")) {
      document.location.reload();
    }
    if (((hh + ":" + mm + ":" + ss) > "14:00:00")) {
      document.location.reload();
    }
    if (((hh + ":" + mm + ":" + ss) < "12:40:00") && (((hh + ":" + mm + ":" + ss) > "00:46:00"))) {
      document.getElementById('showLesson').innerHTML = "(Free time)";
    }
  }
  document.addEventListener('DOMContentLoaded', coutdownToRing);
})();
function App() {
  return (
    <><div className="App">
      <Clock></Clock>
    </div>
    </>

  );
}
export default App;