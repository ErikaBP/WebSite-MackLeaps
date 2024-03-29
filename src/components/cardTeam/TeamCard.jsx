import styles from "./TeamCard.module.css"

export const TeamCard = ({img, name, role, date}) => {
    return (
        <div className={styles.mainCard}>
            <div className={styles.cardImage}>
                <img src={img} alt="image" className={styles.image} />
            </div>
            <div className={styles.cardText}>
                <h3 className={styles.name}>{name}</h3>
                {
                    role?(<p className={styles.role}>{role}</p>):""
                }
                {
                    date?(<p className={styles.date}>{date}</p>):""
                }
            </div>
        </div>
    )
}