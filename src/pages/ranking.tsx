import Cookie from 'js-cookie'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/pages/Ranking.module.css'

export default function Ranking() {
    return (
            <div className={styles.container}>
                <Sidebar />

                <strong>Ranking</strong>

                <div className={styles.spanLeaderbord}>
                    <span className={styles.spamOne}>POSIÇÃO</span>
                    <span className={styles.spamTwo}>USUÁRIO</span>
                    <span className={styles.spamThree}>DESAFIOS</span>
                    <span className={styles.spamFour}>EXPERIÊNCIA</span>
                </div>

                <div className={styles.resultLeaderbord}>

                    <div className={styles.positionLeaderboard}>
                        1
                    </div>

                    <div className={styles.userLeaderbord}>
                        <img src="https://avatars.githubusercontent.com/u/51963952?v=4" alt="Imagem de perfil" />
                        <div className={styles.userLeaderbordDetails}>
                            <span>kNgill</span>
                            <p>
                                <img src="icons/level.svg" alt="level" />
                        Level 100
                    </p>
                        </div>
                    </div>

                    <div className={styles.challengesLeaderbord}>
                        <span>95</span> <p>completados</p>
                    </div>

                    <div className={styles.expLeaderbord}>
                        <span>100000</span> <p>xp</p>
                    </div>
                </div>
                <div className={styles.resultLeaderbord}>

                    <div className={styles.positionLeaderboard}>
                        2
                </div>

                    <div className={styles.userLeaderbord}>
                        <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Imagem de perfil" />
                        <div className={styles.userLeaderbordDetails}>
                            <span>Diego Fernandes</span>
                            <p>
                                <img src="icons/level.svg" alt="level" />
                        Level 93
                    </p>
                        </div>
                    </div>

                    <div className={styles.challengesLeaderbord}>
                        <span>85</span> <p>completados</p>
                    </div>

                    <div className={styles.expLeaderbord}>
                        <span>99900</span> <p>xp</p>
                    </div>
                </div>
                <div className={styles.resultLeaderbord}>

                    <div className={styles.positionLeaderboard}>
                        3
                </div>

                    <div className={styles.userLeaderbord}>
                        <img src="https://github.com/jonatafsa.png" alt="Imagem de perfil" />
                        <div className={styles.userLeaderbordDetails}>
                            <span>Jonata Santos</span>
                            <p>
                                <img src="icons/level.svg" alt="level" />
                        Level 63
                    </p>
                        </div>
                    </div>

                    <div className={styles.challengesLeaderbord}>
                        <span>45</span> <p>completados</p>
                    </div>

                    <div className={styles.expLeaderbord}>
                        <span>13500</span> <p>xp</p>
                    </div>
                </div>
                <div className={styles.resultLeaderbord}>

                    <div className={styles.positionLeaderboard02}>
                        4
                </div>

                    <div className={styles.userLeaderbord}>
                        <img src="https://avatars.githubusercontent.com/u/6643122?v=4" alt="Imagem de perfil" />
                        <div className={styles.userLeaderbordDetails}>
                            <span>Mayk Brito</span>
                            <p>
                                <img src="icons/level.svg" alt="level" />
                        Level 55
                    </p>
                        </div>
                    </div>

                    <div className={styles.challengesLeaderbord}>
                        <span>50</span> <p>completados</p>
                    </div>

                    <div className={styles.expLeaderbord}>
                        <span>1500</span> <p>xp</p>
                    </div>
                </div>

                
                <div className={styles.resultLeaderbord}>

                    <div className={styles.positionLeaderboard02}>
                        5
                </div>

                    <div className={styles.userLeaderbord}>
                        <img src="https://avatars.githubusercontent.com/u/7737862?s=200&v=4" alt="Imagem de perfil" />
                        <div className={styles.userLeaderbordDetails}>
                            <span>Coda</span>
                            <p>
                                <img src="icons/level.svg" alt="level" />
                        Level 52
                    </p>
                        </div>
                    </div>

                    <div className={styles.challengesLeaderbord}>
                        <span>50</span> <p>completados</p>
                    </div>

                    <div className={styles.expLeaderbord}>
                        <span>1350</span> <p>xp</p>
                    </div>
                </div>
                <div className={styles.resultLeaderbord}>

                    <div className={styles.positionLeaderboard03}>
                        6
                </div>

                    <div className={styles.userLeaderbord}>
                        <img src="https://avatars.githubusercontent.com/u/51996690?v=4" alt="Imagem de perfil" />
                        <div className={styles.userLeaderbordDetails}>
                            <span>Danilo Caneschi</span>
                            <p>
                                <img src="icons/level.svg" alt="level" />
                        Level 40
                    </p>
                        </div>
                    </div>

                    <div className={styles.challengesLeaderbord}>
                        <span>35</span> <p>completados</p>
                    </div>

                    <div className={styles.expLeaderbord}>
                        <span>1000</span> <p>xp</p>
                    </div>
                </div>
                <div className={styles.resultLeaderbord}>

                <div className={styles.positionLeaderboard04}>
                    7
                </div>

                <div className={styles.userLeaderbord}>
                    <img src="https://avatars.githubusercontent.com/u/39966929?v=4" alt="Imagem de perfil" />
                    <div className={styles.userLeaderbordDetails}>
                        <span>Weslley Fratini</span>
                        <p>
                            <img src="icons/level.svg" alt="level" />
                    Level 10
                </p>
                    </div>
                </div>

                <div className={styles.challengesLeaderbord}>
                    <span>15</span> <p>completados</p>
                </div>

                <div className={styles.expLeaderbord}>
                    <span>350</span> <p>xp</p>
                </div>
                </div> 
                <div className={styles.resultLeaderbord}>

                <div className={styles.positionLeaderboard00}>
                    8
                </div>

                <div className={styles.userLeaderbord}>
                    <img src="https://avatars.githubusercontent.com/u/70381963?v=4" alt="Imagem de perfil" />
                    <div className={styles.userLeaderbordDetails}>
                        <span>Weslley Fratini</span>
                        <p>
                            <img src="icons/level.svg" alt="level" />
                    Level 0
                </p>
                    </div>
                </div>

                <div className={styles.challengesLeaderbord}>
                    <span>0</span> <p>completados</p>
                </div>

                <div className={styles.expLeaderbord}>
                    <span>0</span> <p>xp</p>
                </div>
                </div>     
            </div>
    )
}