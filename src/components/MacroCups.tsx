
export default function MacroCups({styles, cName, title, amount, percent}) {
  return (
   <div className={styles[cName]}>
      <div className={styles.textWrapper}>
      <h3>{title}</h3>
      <span>{amount}</span>
      </div>
      <div className={styles.cupWrapper}>
      <div className={styles.textWrapper}>
         <span>{percent}</span>
      </div>
      </div>
   </div>
  )
}
