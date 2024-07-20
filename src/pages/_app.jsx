import '../styles/globals.css';
import React from 'react';

const EmptyLayout = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
