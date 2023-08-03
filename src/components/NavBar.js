import styles from './navbar.module.css'

const NavBar = (props) => {
    return (
        <>
        <header className={styles.navbar}>
        <h1 className={styles.title}> Random Journal App </h1>
        </header>
        </>
    )
}

export default NavBar;