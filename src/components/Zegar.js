import { useEffect, useState } from "react";

function Zegarek() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString('pl-PL'));
        }, 1000);

    }, []);

    return document.getElementById('tykajacyZegar').innerHTML = clockState
}

export default Zegarek;