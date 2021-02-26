import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdowContextData {
    minutes: number;
    seconds: number;
    hasfinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown:() => void; 
}

interface CountdowProviderProps{
    children: ReactNode;
}


export const CountdowContext = createContext({} as CountdowContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({children}: CountdowProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasfinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time -1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountdowContext.Provider value={{minutes, seconds, hasfinished, isActive, startCountdown, resetCountdown}}>
            {children}
        </CountdowContext.Provider>
    )
}