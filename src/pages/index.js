import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import Head from 'next/head';
import awsExports from '@/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });



export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  )
}
