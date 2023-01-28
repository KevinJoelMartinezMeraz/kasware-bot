import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <video controls autoPlay  src="./multimedia/Moneda_control_1.webm" type='video/webm'>
      <source src="./multimedia/Moneda_control_1.webm" type='video/webm'/>
    </video>
  </Layout>
)

export default IndexPage
