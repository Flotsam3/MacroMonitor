import {useState} from "react";
import vector1 from "../assets/images/Vector_1.png";
import orange from "../assets/images/orange.png";
import dish from "../assets/images/balance-dish.png";
import styles from "./Balance.module.scss";
import Navigation from "../components/Navigation";
import MacroCups from "../components/MacroCups";


export default function Balance() {
  const [macroBalance, setMacroBalance] = useState([{class: "carbsWrapper", title: "Carbs", amount:450, percent:"95%"},{class: "fatWrapper", title: "Fat", amount:450, percent:"95%"},{class: "proteinWrapper", title: "Protein", amount:450, percent:"95%"},{class: "saturatedFatWrapper", title: "Sat. fat", amount:450, percent:"95%"},{class: "sugarWrapper", title: "Sugar", amount:450, percent:"95%"},{class: "saltWrapper", title: "Salt", amount:450, percent:"95%"},{class: "caloriesWrapper", title: "Calories", amount:450, percent:"95%"}]);
  return (
    <>
    <div className={styles.balance}>
      <Navigation />
      <div className={styles.headerContainer}>
        <h1>Daily intake</h1>
        <div className={styles.buttonWrapper}>
          <button>Reset</button>
          <button>Archivate<img src={orange} alt="orange" /></button>
        </div>
        <img src={dish} alt="Dish on a plate" />
      </div>
      <img className={styles.vector1} src={vector1} alt="curved background" ></img>
      <div className={styles.infoCircle}>
        {macroBalance.map((obj, index)=>(
          <MacroCups key={index} styles={styles} cName={obj.class} title={obj.title} amount={obj.amount} percent={obj.percent}  />
        ))}
        {/* <div className={styles.carbsWrapper}>
          <div className={styles.textWrapper}>
            <h3>Carbs</h3>
            <span>450</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className={styles.fatWrapper}>
          <div className={styles.textWrapper}>
            <h3>Fat</h3>
            <span>450</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className={styles.proteinWrapper}>
          <div className={styles.textWrapper}>
            <h3>Protein</h3>
            <span>85</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className={styles.saturatedFatWrapper}>
          <div className={styles.textWrapper}>
            <h3>Saturated</h3>
            <h3>fat</h3>
            <span>85</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className={styles.sugarWrapper}>
          <div className={styles.textWrapper}>
            <h3>Sugar</h3>
            <span>85</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className={styles.saltWrapper}>
          <div className={styles.textWrapper}>
            <h3>Salt</h3>
            <span>85</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div>
        <div className={styles.caloriesWrapper}>
          <div className={styles.textWrapper}>
            <h3>Calories</h3>
            <span>1850</span>
          </div>
          <div className={styles.cupWrapper}>
            <div className={styles.textWrapper}>
              <span>95%</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
      <h2>Consumption</h2>
      <div className={styles.panelWrapper}>
        <div className={styles.panel}>
          <div className={styles.nameWrapper}>
            <h4>Apfel</h4>
            <p>78g</p>
          </div>
          <div className={styles.macrosWrapper}>
            <div className={styles.singleMacroWrapper}>
              <h5>Kcal</h5>
              <p>54</p>
            </div>
            <div className={styles.singleMacroWrapper}>
              <h5>Carbs</h5>
              <p>54</p>
            </div>
            <div className={styles.singleMacroWrapper}>
              <h5>Fat</h5>
              <p>54</p>
            </div>
            <div className={styles.singleMacroWrapper}>
              <h5>Protein</h5>
              <p>54</p>
            </div>
            <div className={styles.singleMacroWrapper}>
              <h5>Sat. fat</h5>
              <p>54</p>
            </div>
            <div className={styles.singleMacroWrapper}>
              <h5>Sugar</h5>
              <p>54</p>
            </div>
            <div className={styles.singleMacroWrapper}>
              <h5>Salt</h5>
              <p>54</p>
            </div>
          </div>
          <span className={styles.close}>x</span>
        </div>
      </div>
    </>
  )
}

