import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SEO from "../components/seo"

export default function test() {
    return (
 <Layout>
     <SEO title="Test Page" />
     <p>Je suis une page test</p>
     <Link to="/">Retour à l'index</Link>
 </Layout>
    )
}
