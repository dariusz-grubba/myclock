import React from 'react'

function TimeTillTheBell({ hoursMinSecs }) {
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    const countDownToRing = () => {
        if (hrs === 0 && mins === 0 && secs === 0)
            reset();
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };
    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    React.useEffect(() => {
        const timerId = setInterval(() => countDownToRing(), 1000);
        return () => clearInterval(timerId);
    });
    return (
        <div style={{ fontSize: "55px", margin: "60px" }}>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        </div>
    );
}

export default TimeTillTheBell;