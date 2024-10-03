import React from 'react';
import Head from 'next/head';

export default function PlaywrightReport() {
  return (
    <>
      <Head>
        <title>Playwright Report</title>
      </Head>
      <main style={{ padding: '20px' }}>
        <h1>Playwright Test Results</h1>
        <iframe
          src="/playwright-report/index.html"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          title="Playwright Test Results"
        ></iframe>
      </main>
    </>
  );
}
