import Head from 'next/head';
import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css';
import { fetchGraphQL } from '../api';

export default function Home(props) {
  console.log(props);
  let recipes = props.recipes.data.allM_Content_Recipe.results;
  console.log(recipes);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service">Next.js Starter kit</a> for
          the Sitecore Content Hub - Content as a Service!
        </h1>

        <div className={styles.grid}>
          {recipes?.length > 0
            ? recipes.map((recipe, index) => (
                <a href="#" className={styles.card} key={index}>
                  <h3>{recipe.recipe_Title} &rarr;</h3>
                  <p>{recipe.recipe_Ingredients}</p>
                </a>
              ))
            : null}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.konabos.com/"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img
            src="/next-js-content-hub-logo.png"
            alt="next-js-content-hub-logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const recipesQuery: any = `
query {
    allM_Content_Recipe{
      results
      {
        id
        recipe_Title
        recipe_Ingredients
      }
    }
  }
  `;
  const recipes: any = await fetchGraphQL(recipesQuery, preview);
  return {
    props: {
      recipes,
    },
  };
};
