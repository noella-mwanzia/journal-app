import { Amplify, API, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import { useRouter } from 'next/router';
import awsExports from '@/aws-exports';

import { deleteJournal } from '@/graphql/mutations';
import { getJournal } from '@/graphql/queries';

import styles from '../../styles/Home.module.css';

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req, params }) {

  const SSR = withSSRContext({ req });

  const { data } = await SSR.API.graphql({
    query: getJournal,
    variables: {
      id: params.id
    }
  });

  return { 
    props: {
      journal: data.getJournal
    }
  };

}

export default function Journal({ journal }) {
    
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Loading&hellip;</h1>
      </div>
    );
  }

  async function handleDelete() {
    try {
      await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: deleteJournal,
        variables: {
          input: { id: journal.id }
        }
      });

      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
        <div className={styles.container}>
        <Head>
            <title>{journal.title} – Journal</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>{journal.date}</h1>

            <p className={styles.description}>{journal.entry}</p>
        </main>
        </div>
        <button className={styles.btn} onClick={handleDelete}>Delete Entry</button>
    </>
    
  );
}