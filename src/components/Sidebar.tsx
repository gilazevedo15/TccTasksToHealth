import Link from 'next/link';
import { FiAward, FiHome, FiLogOut } from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';

import { SidebarContext } from '../contexts/sidebarContext';
import { useContext, useState } from 'react';

export function Sidebar() {

  const [homeIsActive, setHomeIsActive] = useState(true)
  const [rankingIsActive, setRankingIsActive] = useState(true)
  return (
    <div className={styles.container}>
      
      <div className={styles.navigation}>
                <a href="/username.tsx">
                    <img src={ homeIsActive ? ('/icons/homeactive.svg') : ('/icons/home.svg') }/>
                </a>
                <a href="/ranking">
                    <img src={ rankingIsActive ? ('/icons/rankingactive.svg') : ('/icons/ranking.svg') } />
                </a>
            </div>
      <div className={styles.exit}>
      <div className={styles.logOut}>
        <Link href="/">
          <FiLogOut size={28} />
        </Link>
      </div>
      </div>
    </div>
  );
}