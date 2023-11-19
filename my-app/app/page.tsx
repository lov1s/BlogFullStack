import Image from 'next/image'
import styles from './page.module.css'
import PostCreate from "@/app/posts/PostCreate";


export default function Home() {

  return (
    <main className={styles.main}>
      <PostCreate />
    </main>
  )
}
