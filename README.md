# MyClock - Szkolny Zegarek

### Funkcje 

- Wyświetlanie aktualnego czasu i godziny;
- Odliczanie czasu do następnego dzwonka;
- Podawanie następnej lekcji z planu lekcji;
- Informowanie o zakończeniu lekcji;
- (aktualizacja 04.12.2022) Odliczanie do świąt Bożego Narodzenia 🎁

# [Link do aplikacji](https://myclock-three.vercel.app/ "Link do aplikacji")
<!-- ![szkolny_zegarek](https://github.com/dariusz-grubba/myclock/blob/013b001a82cd7769e8d32d76f96e154b90ea2de4/public/logo.png) -->

Projekt został stworzony przy użyciu frameworku **React.js**. Umożliwiło to zbudowanie dynamicznego, responsywnego interfejsu, za którym stoją poszczególne modułowe komponenty.

![zdjecia](https://github.com/dariusz-grubba/myclock/blob/4e725a158b446462f530cf6842cecdeacf2b74e2/public/phones.png)

### Moduły

#### - Aktualna godzina i data

```javascript
import { useEffect, useState } from "react";  //zaimportowanie wbudowanych w Reacts.js bibliotek
function Zegarek() {
    const [clockState, setClockState] = useState();
    useEffect(() => { //komponent useEffect() renderuje element na stronie
        setInterval(() => { //setInterval wywołuje funkcję w określonych, regularnych odstępach czasowych
            const date = new Date();
            setClockState(date.toLocaleTimeString('pl-PL')); //wyświetlenie zegarka w formacie 24 godzinnym
        }, 1000); }, []);
    return document.getElementById('tykajacyZegar').innerHTML = clockState //przekazanie rezultatu funkcji do diva
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
```
# Instalacja

Aby zainstalować i uruchomić na localhost **Szkolny Zegarek** należy zainstalować  **Node.js** i użyć następujących komend w terminalu:

`$ npm install`

Otwiera aplikację w trybie deweloperskim.
Przeście do [http://localhost:3000](http://localhost:3000) spowoduje włączenie aplikacji w przeglądarce na lokalnym serwerze.

`$  npm start`

Uruchamia tryb testowy w interaktywnym trybie obserwacyjnym.

`$  npm test`

Buduje aplikację do produkcji w folderze `build`.

`$  npm run build`

Więcej informacji o [komplilacji kodu](https://facebook.github.io/create-react-app/docs/deployment)
