import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { UsersQuery, useUsersQuery } from '../types/generated';
import { addApolloState, initializeApollo } from '../lib/apollo';
import USERS_QUERY from '../gql/usersQuery.graphql';

const Home: NextPage = () => {
  const { data } = useUsersQuery();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">nextjs-plugin-graphql</a>!
        </h1>

        <div className={styles.grid}>
          {data?.users.map((user) => (
            <div className={styles.card}>
              <h2>{user.name}</h2>
              <p>{user.greeting}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query<UsersQuery>({ query: USERS_QUERY });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
