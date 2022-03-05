import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Survey Form</title>
      </Head>
      <main>
        <div className={styles.content}>
          <h1 className={styles.title}>freeCodeCamp Survey Form</h1>
          <h2 className={styles.subtitle}>Thank you for taking the time to help us improve the platform</h2>
          <div>
            <Form></Form>
          </div>
        </div>
      </main>
    </div>
  )
}
