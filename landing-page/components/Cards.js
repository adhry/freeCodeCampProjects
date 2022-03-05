import styles from './Cards.module.css'

export default function Cards() {
    return (
        <div>
            <div className={styles.card}>
                <h3>TENOR TROMBONE</h3>
                <p>$600</p>
                <p>Lorem ipsum.</p>
                <p>Lorem ipsum.</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum.</p>
                <button>SELECT</button>
            </div>
            <div className={styles.card}>
                <h3>BASS TROMBONE</h3>
                <p>$900</p>
                <p>Lorem ipsum.</p>
                <p>Lorem ipsum.</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum.</p>
                <button>SELECT</button>
            </div>
            <div className={styles.card}>
                <h3>VALVE TROMBONE</h3>
                <p>$1200</p>
                <p>Plays similar to a Trumpet</p>
                <p>Great for Jazz Bands</p>
                <p>Lorem ipsum dolor.</p>
                <p>Lorem ipsum.</p>
                <button>SELECT</button>
            </div>
        </div>
    )
}