import React from "react";

import styles from './title.module.css'

const Title = ({title, subtitle}) =>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}
            </h1>
            <h5 className={styles.subtitle}>
                {subtitle}
            </h5>
        </div>
    )
}

export default Title