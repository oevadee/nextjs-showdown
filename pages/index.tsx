import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const BLOG_URL = 'https://nextjs-showdown.herokuapp.com';
const CONTENT_API_KEY = '259632adcb4b95e5bc9dadf37c';

type Post = {

}

const getPosts = async () => {
  // curl "https://demo.ghost.io/hgost/api/v3/content/posts?key=22444f78447824223cefc48062"
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts?key=${CONTENT_API_KEY}`
    ).then(res => res.json())

    console.log(res)

    return res
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()
  return {
    props: {posts}
  }
};

const Home:React.FC<{ posts: Post[] }> = (props) => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
