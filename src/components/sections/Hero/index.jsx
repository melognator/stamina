import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={`content ${styles.content}`}>
                <section className={styles.left}>
                    <h2>{texts.title}</h2>
                    <p><strong>{texts.subtitle1}</strong>{texts.subtitle2}</p>
                    <Link href='#pricing' >{texts.button}</Link>
                </section>
                <section className={styles.right}>
                </section>
            </div>
        </section>
    )
}

export default Hero