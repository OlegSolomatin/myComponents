import React from 'react';
import Counter from './components/counter/counter';
import CounterTitle from './components/counterTitle/counterTitle'
import CounterButtons from "./components/counterButtons/counterButtons";

function AppCounter() {
    const [count, setCount] = React.useState(0);
    const intervalRef = React.useRef(null);

    React.useEffect(() => {
        return () => stopCounter();
    }, []);

    const onClickPlus = () => {
        setCount(count + 1);
    }
    const onClickMinus = () => {
        setCount(count - 1);
    }
    const startCounterPlus = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCount((prevCounter) => prevCounter + 1);
        }, 150);
    };

    const startCounterMinus = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCount((prevCounter) => prevCounter - 1);
        }, 150);
    };

    const stopCounter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

  return (
    <div className="AppCounter">
        <>
            <CounterTitle />
            <Counter count={count}/>
            <CounterButtons countMouseDownPlus={startCounterPlus} countMouseDownMinus={startCounterMinus} countMouseUp={stopCounter} countMouseLeave={stopCounter} countMinus={onClickMinus} countPlus={onClickPlus}/>
        </>
    </div>
  );
}

export default AppCounter;
