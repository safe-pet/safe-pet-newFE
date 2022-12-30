import Head from "next/head";

export const NextHead = (descrpition: string | any): JSX.Element => {
  return (
    <Head>
      <title>safe-pet</title>
      <meta name="description" content={descrpition} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
