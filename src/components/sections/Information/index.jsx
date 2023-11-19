import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColoredLink from '../../common/Button/ColoredLink';
import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Information = () => {
    const colored = true
    return (
        <>
            <a className='anchor' id='information' href='#'></a>
            <section className={colored ? 'colored-section' : ''}>
                <div className={`content center ${styles.content}`}>
                    <h2>{texts.title}</h2>
                    <p>{texts.description}</p>
                    <i>
                        <FontAwesomeIcon height="1.5rem" icon={faArrowDown} />
                    </i>
                </div>
            </section>
        </>
    )
}

export default Information