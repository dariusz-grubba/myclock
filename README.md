# MyClock - PWA Project

### Features

- Displaying the current time and date;
- Countdown to the next break;
- Passing the next lesson from the timetable;;
- Informing about the end of the lesson;
- Countdown to the next school break (e.g., spring break)

# [Preview link](https://myclock-github.vercel.app/ "Preview link")

Add your PWA’s icon to a home screen

- iOS

1. Open the browser by tapping on the Safari icon.
2. Navigate to the PWA url.
3. Tap on the Share button at the bottom of the browser window. It's represented by a square with an up arrow in the foreground.
4. The iOS Share Sheet will now appear, overlaying the main browser window. Select the option labeled "Add to home screen".

- Android

1. Open Chrome Chrome.
2. Navigate to the PWA url.
3. Tap Install.
4. Follow the on-screen instructions.

<!-- ![szkolny_zegarek](https://github.com/dariusz-grubba/myclock/blob/013b001a82cd7769e8d32d76f96e154b90ea2de4/public/logo.png) -->

# About

The project was created using the **React.js** framework. This made it possible to build a dynamic, responsive interface with individual modular components behind it.

![photos](https://github.com/dariusz-grubba/myclock/blob/6ec46c471020042a43c48f9522fda49ceadd563c/public/phones.png)

# Uploading your own schedule

If you would like to set your own schedule, you can do so by modifying the **schedule.js** file. In addition, you can also change the timing of school bells. Remember to keep the same layout as it is now.

<!-- ### Moduły

#### - Aktualna godzina i data

```javascript
import { useEffect, useState } from "react"; //zaimportowanie wbudowanych w Reacts.js bibliotek
function Zegarek() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    //komponent useEffect() renderuje element na stronie
    setInterval(() => {
      //setInterval wywołuje funkcję w określonych, regularnych odstępach czasowych
      const date = new Date();
      setClockState(date.toLocaleTimeString("pl-PL")); //wyświetlenie zegarka w formacie 24 godzinnym
    }, 1000);
  }, []);
  return (document.getElementById("tykajacyZegar").innerHTML = clockState); //przekazanie rezultatu funkcji do diva
}
```

#### - Do następnego dzwonka

Moduł wyświetlający aktualny czas i datę oraz ten odliczający czas do dzwonka działa niezależnie względem drugiego. Dzięki temu w przypadku awarii jednego, drugi nadal działa.

```javascript
function doDzwonkaPozostalo({ hoursMinSecs }) { //funkcja przyjmuje argument w formacie godziny-minuty-sekundy
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]); //useState przypisuje tzw. zmienną stanową, do której cały czas przypisywane są inne wartości, tu: godziny, minuty, sekundy
    const odliczajDoDzwonka = () => {
        if (hrs === 0 && mins === 0 && secs === 0)
            reset(); //jeżeli licznik osiągnie 00:00:00 - zresetuj i przejdź do kolejnej przerwy
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        } };
    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]); //resetuje pojedyncze wartości
    React.useEffect(() => {
        const timerId = setInterval(() => odliczajDoDzwonka(), 1000); //funkcja odświeża wartość godziny raz na sekundę
        return () => clearInterval(timerId); //resetuje zegar
```

#### - Następna lekcja

Wypisuje kolejną lekcję **n** (z przedziału 1-13) dopasowaną do aktualnego dnia **n** (poniedziałek-sobota).

```javascript
export function nastepnaLekcja(godzinaLekcyjna, dzienTygodnia, poniedzialek, wtorek, sroda, czwartek, piatek, sobota) {
  if ((godzinaLekcyjna[n])) {
    switch (dzienTygodnia.getDay()) {
      case 1: document.getElementById('wyswietlLekcje').innerHTML = poniedzialek[n]; break;
      case 2: document.getElementById('wyswietlLekcje').innerHTML = wtorek[n]; break;
      case 3: document.getElementById('wyswietlLekcje').innerHTML = sroda[n]; break;
      case 4: document.getElementById('wyswietlLekcje').innerHTML = czwartek[n]; break;
      case 5: document.getElementById('wyswietlLekcje').innerHTML = piatek[n]; break;
      case 6: document.getElementById('wyswietlLekcje').innerHTML = sobota[n]; break;
      default: console.log("nie wypisano żadnej lekcji");
    }
  }
``` -->

# Installation

To install **MyClock** and run it on localhost , install **Node.js** and use the following commands in the terminal:

`$ npm install`

Opens the application in developer mode.
[http://localhost:3000](http://localhost:3000) Opens on the local server in the browser.

`$  npm start`

Launches test mode in interactive observation mode.

`$  npm test`

Builds the application for production in the `build` folder.

`$  npm run build`

You can find more information about it here: [codeCompilation](https://facebook.github.io/create-react-app/docs/deployment)
