import { Auth } from 'aws-amplify';
import styles from './navbar.module.css';


const NavBar = () => {
    return (
        <>
        <header className={styles.navbar}>
        <h1 className={styles.title}> Random Journal App </h1>

        <button className={styles.btn} type="button" onClick={() => Auth.signOut()}>
            Sign out
        </button>
        </header>
        </>
    )
}

export default NavBar;