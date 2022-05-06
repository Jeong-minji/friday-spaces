import Head from 'next/head'

interface HelmetProps {
  title: string
  description: string
}

const Helmet = ({ title, description }: HelmetProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default Helmet
