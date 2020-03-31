import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mission from "../components/contents/Mission"
import Vision from "../components/contents/Vision"
import HelpingClients from "../components/contents/HelpingClients"
import WhatWeCanDo from "../components/contents/WhatWeCanDo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Mission />
    <Vision />
    <HelpingClients />
    <WhatWeCanDo />
  </Layout>
)

export default IndexPage
