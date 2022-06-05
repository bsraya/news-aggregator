import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>This is Machine Learning page</h1>
      <Link href="/deeplearning">
        <a>Deep learning</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/get?tag=machinelearning')

  const data = await res.json()

  console.log(data)

  return {
    props: {},
  }
}


export default Home
