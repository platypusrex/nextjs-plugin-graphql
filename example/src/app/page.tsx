import styles from '../styles/Home.module.css';
import { gqlClient } from '../lib/gqlClient';
import { UsersQuery, UsersQueryVariables } from '../types/generated';
import USERS_QUERY from '../gql/usersQuery.graphql';

export default async function HomePage() {
  const data = await gqlClient.request<UsersQuery, UsersQueryVariables>(USERS_QUERY);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/platypusrex/nextjs-plugin-graphql">nextjs-plugin-graphql</a>!
        </h1>

        <div className={styles.grid}>
          {data?.users.map((user) => (
            <div key={user.id} className={styles.card}>
              <h2>{user.name}</h2>
              <p>{user.greeting}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
