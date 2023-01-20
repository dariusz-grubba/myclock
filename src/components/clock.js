import { useEffect, useState } from "react";

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString('pl-PL'));
        }, 1000);

    }, []);

    return document.getElementById('tickingClock').innerHTML = clockState
}

export default Clock;