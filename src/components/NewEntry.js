import styles from './newentry.module.css';

const NewEntry = ({handleCreateJournal}) => {
    return (
        <div className={styles.form}>
            <form className={styles.fields} onSubmit={handleCreateJournal}>
                <fieldset>
                    <legend>Dear diary:</legend>
                    <textarea className={styles.textArea}
                    defaultValue="What is on your mind today?"
                    name="entry"
                    />
                </fieldset>

                <button className={styles.btn}>Create Entry</button>
            </form>
        </div>
        
    )
}

export default NewEntry;