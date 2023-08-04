import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '@/aws-exports';
import { createJournal } from '@/graphql/mutations';
import { listJournals } from '@/graphql/queries';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import TimeLine from '@/components/Timeline';
import styles from '../components/newentry.module.css';


Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  
  try {
    const response = await SSR.API.graphql({ query: listJournals, authMode: 'API_KEY' });
    return {
      props: {
        journals: response.data.listJournals.items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}

async function handleCreateJournal(event) 
{
  event.preventDefault();

  const form = new FormData(event.target);

  const date = new Date().toLocaleTimeString();

  try {
    const { data } = await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: createJournal,
      variables: {
        input: {
          date: date,
          entry: form.get('entry')
        }
      }
    });
    window.location.href = `/journals/${data.createJournal.id}`;
  }
  catch (errors ) {
    console.log("Error occured", errors)
  }
}

export default function Home({ journals = [] }) 
{
  const [journalEntries, setJournals] = useState(journals);

  return (
    <main>
      <Authenticator>
        <NavBar/>

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

        <TimeLine journalEntries={journalEntries}/>
      </Authenticator>
    </main>
  )
}
