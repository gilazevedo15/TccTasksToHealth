import { useContext } from "react";
import styles from "../styles/components/Shere.module.css";
import { FacebookButton, FacebookCount } from "react-social";
import { ChallengesContext } from "../contexts/ChallengesContext";

export default function Share() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  let url = "https://vercel.com/gilazevedo15/moveit-next";

  return (
    <div className={styles.container}>
      <FacebookButton
        className={styles.botao}
        url={url}
        appId={253256926479673}
      >
        <img className={styles.img} src="/icons/facebook.png" alt="" />
      </FacebookButton>
    </div>
  );
}
