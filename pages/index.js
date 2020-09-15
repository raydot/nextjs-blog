import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is the world's leading expert in building monkey web sites!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing el it aliquet
          Cillum occaecat aute do cupidatat consequat aliqua non officia
          consequat. Magna nostrud pariatur eiusmod excepteur excepteur ut duis
          adipisicing do est reprehenderit. Eu eu ut quis reprehenderit. Velit
          officia commodo ad exercitation consectetur nisi exercitation magna
          nulla eiusmod. Aute deserunt cupidatat veniam ad veniam in cupidatat
          nostrud deserunt pariatur. Est exercitation Lorem qui magna est
          consequat et veniam fugiat dolor do mollit amet.
        </p>
      </section>
    </Layout>
  );
}
