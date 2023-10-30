'use client'
import Image from "next/image"
import trendsData from "../../assets/trendsData.json"
import styles from "./trendsCard.module.css"

const TrendsCard = () => {

    console.log(trendsData)

    return (
        <div>
            {trendsData.map((trend, index) => (
                <div key={index}>
                    <div className={styles.trendItem}>
                        <div>
                            <Image
                                src={
                                    trend.trend === "pos"
                                        ? '/images/positive-arrow-green-icon.svg'
                                        : '/images/negative-arrow-red-icon.svg'
                                }
                                alt={trend.trend === "pos"
                                    ? "Positive trend arrow icon"
                                    : "Negative trend arrow icon"}
                                width={15}
                                height={15}
                            />
                        </div>
                        <p className={styles.text}>{trend.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TrendsCard