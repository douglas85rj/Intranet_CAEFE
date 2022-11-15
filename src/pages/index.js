import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
       <p>A CAEFE tem o objetivo de compartilhar todos seus projetos e conquistas durante seus 18 anos de empresa. 
        Esse portal foi criado exclusivamente para os seus colaboradores, aqui você se mantém informado sobre tudo. </p>
        <StaticImage
        alt="Imagem simbolizando o trabalho em equipe da CAEFE"
        src="../images/work.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
