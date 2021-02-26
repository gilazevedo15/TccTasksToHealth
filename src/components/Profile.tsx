import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a4/a4eb5a8f72947277d33211f0c9c1b5b259d63991_full.jpg" alt="VSM mito"/>
            <div>
                <strong>V$M</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}
