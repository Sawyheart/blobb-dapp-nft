import { useContext } from "react"
import BlobbsContext from "../contexts/BlobbsContext/BlobbsProvider"
import EtherContext from "../contexts/EtherContext/EtherProvider"
import MyBlobContext from "../contexts/MyBlobContext/MyBlobProvider"

import classes from "./EnemyBlobbActions.module.css"

let { POPUPS_TYPES } = require("./../popups-types")

function EnemyBlobbActions({ fBlobb, nextBlobbFunc }) {
  const {funcs: { newWalletRequest }} = useContext(EtherContext)
  const {blob: { hp }} = useContext(MyBlobContext)
  const {funcs: { attackFocusedBlobb }} = useContext(BlobbsContext)

  function attackButtonHandler() {
    if(fBlobb.hp === 1) newWalletRequest("KILL", "KILLING THE BLOBB!", attackFocusedBlobb, POPUPS_TYPES.KILLED)
    else newWalletRequest("ATTACK", "ATTACKING THE BLOBB!", attackFocusedBlobb)
  }

  function getInfoMessage() {
    if(hp === 0) return <span className={classes.info_comic_span}>
      YOUR BLOBB IS <span className={classes.highlight}>DEAD</span>
    </span>

    switch(fBlobb.hp) {
      case 0:
        return <span className={classes.info_comic_span}>
          THE BLOBB IS <span className={classes.highlight}>DEAD</span>
        </span>
      default:
        return <span className={classes.info_comic_span}>
          <span className={classes.highlight}>{fBlobb.hp === 1 ? 7.5 : 5} MATIC</span> + <span className={classes.highlight}>GAS</span>
        </span>
    }
  }

  return(
    <div className={classes.div_container}>
      <span className={classes.title_span}>CLICK THE <span className={classes.highlight}>ENEMY BLOBB</span> FOR MORE INFO</span>
      <div className={classes.actions_div}>
        <span className={classes.info_span}>
          i {getInfoMessage()}
        </span>
        <div className={fBlobb.hp === 0 || hp === 0 ? classes.attack_button_off : classes.attack_button} onClick={attackButtonHandler}>
          {fBlobb.hp === 0 ? "dead" : fBlobb.hp > 1 ? "attack" : "kill"}
        </div>
        <div className={classes.next_button} onClick={nextBlobbFunc}>
          next <span className={classes.arrows}>{">>"}</span>
        </div>
      </div>
    </div>
  )
}

export default EnemyBlobbActions