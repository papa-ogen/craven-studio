import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

console.log('hello world')

function Logo() {
  return <Image src="/images/Cstudio_BC_Black_Front.png" alt="Logo" width="64" height="64" />
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Craven Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to C Studio
        </h1>
        <Logo />
      </main>

      <footer className={styles.footer}>
       footer
      </footer>
    </div>
  )
}
