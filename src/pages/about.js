import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="Sobre a CAEFE">
      <p>A CAEFE esta a 18 anos apoiando todos os seus associados, funcionários e ex-funcionários de Furnas e Eletronuclear.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Sobre" />

export default AboutPage
