import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../Button/Link';
import Menu from '../Menu';
import styles from './component.module.css'
import menuStyles from '../Menu/component.module.css'
import links from './links';
import texts from './texts';
import { faBars, faBolt } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    return (
        <>
            <section id='navbar' className={styles.container}>
                <div className='content'>
                    <a href="/" className={styles.brand}>
                        <FontAwesomeIcon height="1.5rem" fontSize="1.5rem" icon={faBolt} />
                        <h1>{texts.brand}</h1>
                    </a>
                    <nav>
                        <div className={styles.links}>
                            {links.map((link, index) => (
                                <a key={index} className={styles.link} href={link.url}>{link.text}</a>
                            ))}
                            <Link className={styles.button} href="https://wa.me/59899117514">{'Contáctanos'}</Link>
                        </div>
                        <button className={`${menuStyles.button} ${styles.menu}`} onClick={openMenu} title='Open menu'>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </nav>
                </div>
            </section>
            <Menu className={styles.menu} links={links} footer={
                <Link href="https://wa.me/59899117514">{'Contáctanos'}</Link>
            } showMenu={showMenu} openMenu={openMenu} closeMenu={closeMenu} />
        </>
    )
}

export default Navbar;