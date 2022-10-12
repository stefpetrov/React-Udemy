import { useEffect, useState } from "react"


const useCounter = (mark) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (mark === 'forward') {
                setCounter((prevCounter) => prevCounter + 1);

            } else if (mark === 'backward') {
                setCounter((prevCounter) => prevCounter - 1);

            }
        }, 1000);

        return () => clearInterval(interval);
    }, [mark]);

    return counter


}

export default useCounter