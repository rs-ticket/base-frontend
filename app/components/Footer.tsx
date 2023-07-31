import React from 'react';
import styles from '../../styles/Footer.module.css'


function Footer() {

    const version = `v_011.02`;
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className={styles.footer}>
            <div className={styles.copy_right}>
                <p>copyright @ {year} aapkajyotish All rights reserved {version}</p>
            </div>
        </div>
    )
}
export default Footer;