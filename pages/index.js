import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Career Wings | Make your first flight to your dream Job</title>
        <meta
          name="description"
          content="Career Wings | Make your first flight to your dream Job"
        />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
