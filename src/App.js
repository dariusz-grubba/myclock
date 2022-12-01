import React from "react";
import "./App.css";
import Zegarek from "./components/Zegar";
import { newFunction } from "./package-react";
import { newFunction_1 } from "./planLekcji";
import { FallingEmojis } from 'falling-emojis';

(function () {
  var start = new Date();
  const { dzwonki, poniedzialek, wtorek, sroda, czwartek, piatek, sobota } = newFunction_1();

  const datee = new Date();
  var wyswietlDate = datee.toLocaleDateString('pl-PL');
  let wyswietl_dzienTygodnia = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'][new Date().getDay()];
  console.log(wyswietlDate);
  console.log(wyswietl_dzienTygodnia);

  document.getElementById('tytul').innerHTML = ("SZKOLNY<br>ZEGAREK");
  //document.getElementById('podTytul').innerHTML = ("🏫📚🍎✏️🎒📐⏰📕");
  document.getElementById('autor').innerHTML = ("Dariusz Grubba");
  document.getElementById('aktualnaData').innerHTML = (wyswietl_dzienTygodnia + ", " + wyswietlDate);
  var aTeraz = datee.toLocaleTimeString('pl-PL');
  var bTeraz = datee.toLocaleTimeString('pl-PL');
  // var aTeraz = "19:09";
  // var bTeraz = "19:09";

  aTeraz = aTeraz.slice(0, 5);
  bTeraz = bTeraz.slice(0, 5);

  var aktualnaGodzina = datee.toLocaleTimeString('pl-PL');
  //var aktualnaGodzina = "10:45";
  aktualnaGodzina = aktualnaGodzina.slice(0, 5);

  if (aktualnaGodzina.startsWith("0") && aktualnaGodzina.startsWith("0")) {
    aktualnaGodzina = aktualnaGodzina.slice(1); //DO GODZIN PRZED 10:00 NP. 9:46
  }
  if (aTeraz.startsWith("0") && bTeraz.startsWith("0")) {
    aTeraz = aTeraz.slice(1, 2); //DO GODZIN PRZED 10:00 NP. 9:46
    bTeraz = bTeraz.slice(3, 5); //TO TEŻ
  } else {
    aTeraz = aTeraz.slice(0, 2);
    bTeraz = bTeraz.slice(3, 5);
  }
  newFunction(aTeraz, dzwonki, bTeraz, start);
  let dzienTygodnia = new Date();
  console.log(dzienTygodnia.getDay());

  const godzinaLekcyjna = [];
  godzinaLekcyjna[1] = aktualnaGodzina > "0:00" && aktualnaGodzina > "18:30" && aktualnaGodzina < dzwonki[0];
  godzinaLekcyjna[2] = aktualnaGodzina >= dzwonki[0] && aktualnaGodzina < dzwonki[2];
  godzinaLekcyjna[3] = aktualnaGodzina >= dzwonki[2] && aktualnaGodzina < dzwonki[4];
  godzinaLekcyjna[4] = aktualnaGodzina >= dzwonki[4] && aktualnaGodzina < dzwonki[6];
  godzinaLekcyjna[5] = (aktualnaGodzina >= "9:45" && aktualnaGodzina < "9:59.99") || (aktualnaGodzina > "10:00" && aktualnaGodzina < dzwonki[8]);
  godzinaLekcyjna[6] = aktualnaGodzina >= dzwonki[8] && aktualnaGodzina < dzwonki[10];
  godzinaLekcyjna[7] = aktualnaGodzina >= dzwonki[10] && aktualnaGodzina < dzwonki[12];
  godzinaLekcyjna[8] = aktualnaGodzina >= dzwonki[12] && aktualnaGodzina < dzwonki[14];
  godzinaLekcyjna[9] = aktualnaGodzina >= dzwonki[14] && aktualnaGodzina < dzwonki[16];
  godzinaLekcyjna[10] = aktualnaGodzina >= dzwonki[16] && aktualnaGodzina < dzwonki[18];
  godzinaLekcyjna[11] = aktualnaGodzina >= dzwonki[18] && aktualnaGodzina < dzwonki[20];
  godzinaLekcyjna[12] = aktualnaGodzina >= dzwonki[20] && aktualnaGodzina < dzwonki[22];
  godzinaLekcyjna[13] = aktualnaGodzina >= dzwonki[22] && aktualnaGodzina < dzwonki[24];
  // for(var numerLekcji=1;numerLekcji<=6;numerLekcji++)

  if ((godzinaLekcyjna[1])) {

    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[1]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[1]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[1]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[1]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[1]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[1]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[2])) {

    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[2]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[2]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[2]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[2]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[2]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[2]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[3])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[3]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[3]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[3]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[3]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[3]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[3]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[4])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[4]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[4]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[4]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[4]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[4]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[4]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[5])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[5]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[5]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[5]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[5]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[5]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[5]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[6])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[6]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[6]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[6]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[6]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[6]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[6]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[7])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[7]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[7]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[7]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[7]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[7]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[7]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[8])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[8]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[8]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[8]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[8]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[8]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[8]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[9])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[9]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[9]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[9]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[9]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[9]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[9]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[10])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[10]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[10]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[10]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[10]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[10]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[10]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[11])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[11]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[11]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[11]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[11]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[11]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[11]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[12])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[12]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[12]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[12]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[12]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[12]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[12]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } else if ((godzinaLekcyjna[13])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[13]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[13]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[13]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[13]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[13]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[13]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  } 
  if (document.getElementById('wyswietlLekcje').innerHTML === "") {
    document.getElementById('wyswietlLekcje').innerHTML = "(Koniec lekcji)";
  }

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function odliczajDoDzwonka() {
    var now = new Date();
    if (now > start) { // too late, go to tomorrow
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
      document.getElementById('wyswietlLekcje').innerHTML = "(Koniec lekcji)";
    }
  }

  document.addEventListener('DOMContentLoaded', odliczajDoDzwonka);
})();

function App() {
  // const hoursMinSecs = {hourss:0, minutes: 45, seconds: 0}
  return (
    <><div className="App">
      <Zegarek></Zegarek>
      
    </div>
    </>

  );
}


export default App;