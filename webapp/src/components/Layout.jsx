// import Head from 'next/head';
// import React from 'react';
// import Navbar from './Navbar.jsx';
// // import Footer from './Footer.jsx';

// import styles from './Layout.module.scss';

// const Layout = ({ children }) => {
//   return (
//     <div className={styles.layout}>
//       <div className={styles.container}>
//         <Head>
//           <title>Online Shoe Store</title>
//         </Head>
//         <Navbar />
//         <div className={styles.main}>{children}</div>

//       </div>
//     </div>
//   );
// };

// export default Layout;

import styles from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <h1> Layout </h1>
      {children}
    </div>
  );
};
export default Layout;
