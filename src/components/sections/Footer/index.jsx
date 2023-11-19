import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './component.module.css'
import texts from './texts';
import socials from './socials';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <a className='anchor' id='footer' href='#'></a>
            <section className={`section ${styles.container}`}>
                
                <div className={`content ${styles.content}`}>
                    <section className={styles.left}>
                        <h2>{texts.title}</h2>
                        <p>{texts.description}</p>
                        <p>{texts.location}</p>
                    </section>
                    <section className={styles.right}>
                        <FontAwesomeIcon height="1.5rem" fontSize="1.5rem" icon={faBolt} />
                        <div className={styles.socials}>
                            {socials.map((social, index) => (
                                <a key={index} target='_blank' href={social.link} aria-label={social.title}>
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            ))}
                        </div>
                        
                        <p>{texts.copy}</p>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Footer