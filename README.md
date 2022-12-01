#MyClock - Szkolny Zegarek

### Funkcjonalość 

- Wyświetlanie aktualnego czasu i godziny;
- Odliczanie czasu do następnego dzwonka;
- Podawanie następnej lekcji z planu lekcji;
- Informowanie o zakończeniu lekcji

# [[Link do aplikacji]][1]
![szkolny_zegarek](https://github.com/dariusz-grubba/myclock/blob/013b001a82cd7769e8d32d76f96e154b90ea2de4/public/logo.png)

Projekt został stworzony przy użyciu frameworku **React.js**. Umożliwiło to zbudowanie dynamicznego, responsywnego interfejsu, za którym stoją poszczególne modułowe komponenty.

![zdjecia](https://github.com/dariusz-grubba/myclock/blob/4e725a158b446462f530cf6842cecdeacf2b74e2/public/phones.png)

### Moduły

####Aktualna godzina i data

```javascript
import { useEffect, useState } from "react"; 
function Zegarek() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString('pl-PL'));
        }, 1000); }, []);
    return document.getElementById('tykajacyZegar').innerHTML = clockState
}
```

- Wyświetlanie aktualnego czasu i godziny;
- Odliczanie czasu do następnego dzwonka;
- Podawanie następnej lekcji z planu lekcji;
- Informowanie o zakończeniu lekcji
# Szkolny Zegarek

Aplikacja ta zawiera następujące funckje:

- Wyświetlanie aktualnego czasu i godziny
* Odliczanie czasu do następnego dzwonka
+ Podawanie następnej lekcji z planu lekcji

## Instalacja


![szkolny_zegarek](https://github.com/dariusz-grubba/myclock/blob/013b001a82cd7769e8d32d76f96e154b90ea2de4/public/logo.png)

Projekt ten stworzony został przy pomocy **React.js**. Aby go zainstalować należy użyć następujących komend w terminalu:

### `npm install`

Instaluje środowisko npm (najpierw należy zainstalować **node.js**).

### `npm start`

Otwiera aplikację w trybie deweloperskim.\
Przeście do [http://localhost:3000](http://localhost:3000) spowoduje włączenie apliakcji w przeglądarce na lokalnym serwerze.

### `npm test`

Uruchamia tryb testowy w interaktywnym trybie obserwacyjnym\

### `npm run build`

Buduje aplikację do produkcji do folderu `build`\

Więcej informacji o [komplilacji kodu](https://facebook.github.io/create-react-app/docs/deployment)
