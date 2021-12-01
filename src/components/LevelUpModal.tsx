import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";
import Share from "./Shere";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Congrats!</strong>
        <p> You have reached a new Level..</p>

        <a href="http://twitter.com/share" data-text="Título Teste"  className="twitter-
share-button"  data-via="brunowebdev" data-button="grey"  data-link-color="800080"
data-lang="pt">Tweetar</a>


        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
