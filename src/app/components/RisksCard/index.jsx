import risksData from "../../assets/RisksData.json"
import styles from "./risksCard.module.css"

const RisksCard = () => {

    console.log(risksData)
    return (
        <div className={styles.risksContainer}>
            {risksData.map((risk, index) => (
                <div className={styles.riskItem}>
                <div className={styles.title}>
                {risk.title}
                </div>
                <p>{risk.text}</p>
                </div>
            ))}
        </div>
    )
}

export default RisksCard


// console.log(trendsData)

// return (
//     <div className={styles.main}>
//         <div className={styles.trendContainer}>
//             {trendsData.map((trend, index) => (
//                 <div className={styles.trendItem}>
//                     <div className={styles.img}>
//               
//                     </div>
//                     <p className={styles.text}>{trend.text}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
// )
