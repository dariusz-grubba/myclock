#MyClock - Szkolny Zegarek

### Funkcjonalość 

- Wyświetlanie aktualnego czasu i godziny;
- Odliczanie czasu do następnego dzwonka;
- Podawanie następnej lekcji z planu lekcji;
- Informowanie o zakończeniu lekcji

# [Link do aplikacji](https://myclock-three.vercel.app/ "Link do aplikacji")
![szkolny_zegarek](https://github.com/dariusz-grubba/myclock/blob/013b001a82cd7769e8d32d76f96e154b90ea2de4/public/logo.png)

Projekt został stworzony przy użyciu frameworku **React.js**. Umożliwiło to zbudowanie dynamicznego, responsywnego interfejsu, za którym stoją poszczególne modułowe komponenty.

![zdjecia](https://github.com/dariusz-grubba/myclock/blob/4e725a158b446462f530cf6842cecdeacf2b74e2/public/phones.png)

### Moduły

#### Aktualna godzina i data

```javascript
import { useEffect, useState } from "react";  //**zaimportowanie wbudowanych w Reacts.js bibliotek**
function Zegarek() {
    const [clockState, setClockState] = useState();
    useEffect(() => { //**komponent useEffect() renderuje element na stronie**
        setInterval(() => { //**setInterval wywołuje funkcję w określonych, regularnych odstępach czasowych**
            const date = new Date();
            setClockState(date.toLocaleTimeString('pl-PL')); //**wyświetlenie zegarka w formacie 24 godzinnym**
        }, 1000); }, []);
    return document.getElementById('tykajacyZegar').innerHTML = clockState //**przekazanie rezultatu funkcji do diva**
}
```
#### Do następnego dzwonka