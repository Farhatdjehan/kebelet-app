import Head from "next/head";

interface HelmetProps {
  pageTitle: string;
}

export default function Helmet(props: HelmetProps) {
  const { pageTitle } = props;
  return (
    <>
      <Head>
        <title>Koneksi Group Apps | {pageTitle}</title>
        <meta name="description" content="CDLC By Satukelas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
