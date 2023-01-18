import React from "react";
import "./App.css";
import Zegarek from "./components/Zegar";
import { nastepnaLekcja } from "./components/nastepnaLekcja";
import { wszystkieDzwonki } from "./package-react";
import { planLekcji } from "./planLekcji";
import { doSwiat } from "./components/doSwiat";
import { wypiszGodzineLekcyjna } from "./components/wypiszGodzineLekcyjna";

(function () {
  var start = new Date();
  const { dzwonki, poniedzialek, wtorek, sroda, czwartek, piatek, sobota } = planLekcji();

  const nowaData = new Date();
  var wyswietlDate = nowaData.toLocaleDateString('pl-PL');
  let wyswietl_dzienTygodnia = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

  document.getElementById('tytul').innerHTML = ("MyClock");
  document.getElementById('autor').innerHTML = ("Dariusz Grubba");
  document.getElementById('aktualnaData').innerHTML = (wyswietl_dzienTygodnia + ", " + wyswietlDate);
  var Teraz1 = nowaData.toLocaleTimeString('pl-PL');
  var Teraz2 = nowaData.toLocaleTimeString('pl-PL');

  Teraz1 = Teraz1.slice(0, 5);
  Teraz2 = Teraz2.slice(0, 5);

  var aktualnaGodzina = nowaData.toLocaleTimeString('pl-PL');
  aktualnaGodzina = aktualnaGodzina.slice(0, 5);

  if (aktualnaGodzina.startsWith("0") && aktualnaGodzina.startsWith("0")) {
    aktualnaGodzina = aktualnaGodzina.slice(1);
  }
  if (Teraz1.startsWith("0") && Teraz2.startsWith("0")) {
    Teraz1 = Teraz1.slice(1, 2);
    Teraz2 = Teraz2.slice(3, 5);
  } else {
    Teraz1 = Teraz1.slice(0, 2);
    Teraz2 = Teraz2.slice(3, 5);
  }
  wszystkieDzwonki(Teraz1, dzwonki, Teraz2, start);
  let dzienTygodnia = new Date();

  const godzinaLekcyjna = wypiszGodzineLekcyjna(aktualnaGodzina, dzwonki);
  nastepnaLekcja(godzinaLekcyjna, dzienTygodnia, poniedzialek, wtorek, sroda, czwartek, piatek, sobota);

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }
  function odliczajDoDzwonka() {
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
    setTimeout(odliczajDoDzwonka, 1000);
    if (((hh + ":" + mm + ":" + ss) < "00:00:01")) {
      document.location.reload();
    }
    if (((hh + ":" + mm + ":" + ss) > "14:00:00")) {
      document.location.reload();
    }
    if (((hh + ":" + mm + ":" + ss) < "12:40:00") && (((hh + ":" + mm + ":" + ss) > "00:46:00"))) {
      document.getElementById('wyswietlLekcje').innerHTML = "(Free time)";
    }
  }
  document.addEventListener('DOMContentLoaded', odliczajDoDzwonka);
})();
function App() {
  return (
    <><div className="App">
      <Zegarek></Zegarek>
    </div>
    </>

  );
}
export default App;