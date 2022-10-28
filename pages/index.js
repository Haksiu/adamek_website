import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="h-screen bg-black/20 overflow-hidden">
      <Head>
        <title>Adamek.tv - Strona poświęcona streamerowi AdameK</title>
        <meta
          name="description"
          content="Adamek.tv - Strona poświęcona streamerowi AdameK"
        />
        <meta name="author" content="Haksiu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
