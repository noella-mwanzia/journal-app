"use client"; 

import Preview from './Preview';
import styles from './timeline.module.css';

const TimeLine = ({journalEntries}) => {

    return (
        <div className={styles.timeline}>
        <h2 className={styles.header}>Past journal entries</h2>
        
        {journalEntries.map(journal => <Preview key={journal.id} journal={journal}/>)}
        </div>
    )
}

export default TimeLine;