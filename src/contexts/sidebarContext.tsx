import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
interface SidebarProviderProps {
    children: ReactNode;
}
interface SidebarContextData {
    homeIsActive: boolean
    rankingIsActive: boolean
    activeHome: () => void
    activeRanking: () => void
}
export const SidebarContext = createContext({} as SidebarContextData) 
export function SidebarProvider({ children }: SidebarProviderProps) {
    const [homeIsActive, setHomeIsActive] = useState(true)
    const [rankingIsActive, setRankingIsHomeActive] = useState(false)

    function activeHome() {
        setHomeIsActive(true)
        setRankingIsHomeActive(false)
        console.log('HOME: ', homeIsActive)
    }
    function activeRanking() {
        setHomeIsActive(false)
        setRankingIsHomeActive(true)
        console.log('Ranking: ', rankingIsActive)
    }

    return (
        <SidebarContext.Provider value={{
            homeIsActive,
            rankingIsActive,
            activeHome,
            activeRanking,
        }}>
            {children}
        </SidebarContext.Provider>
    )
}