"use client"; 
import { useState } from 'react';

import Preview from './Preview';
import styles from './timeline.module.css';

const journalEntries = [
    {createdOn: 'August 1, 2023', id: 1, entry:
    <>
    <h1>Journal entry one</h1> <p>Hello world</p>
    </>},
    {createdOn: 'August 2, 2023', id: 2, entry: 
    <>
    <h1>Journal entry two</h1> <p>Hello world</p>
    </>},
    {createdOn: 'August 2, 2023', id: 3, entry: 
    <>
    <h1>Journal entry three</h1> <p>Hello world</p>
    </>}
]

const TimeLine = () => {

    const [journals, setJournals] = useState(journalEntries);

    const addJournal = () => {
        setJournals([
            ...journals,
            {createdOn: 'August 3, 2023', id: 4, entry: 
            <>
            <h1>Journal entry Four</h1> <p>Hello world</p>
            </>}
        ])
    }

    return (
        <div className={styles.timeline}>
        <h2 className={styles.header}>My journal entries</h2>
        
        {/* Extract component that previews journal entries */}
        {journals.map(journal => <Preview key={journal.id} journal={journal}/>)}

        <button type="button" className={styles.btn} onClick={addJournal}>
            New
        </button>
        </div>
    )
}

export default TimeLine;