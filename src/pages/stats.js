import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default () => (
  <Layout>
    <SEO title="Stats" />
    <div class="stats">
      <h2>Some company stats</h2>
      <ul>
        <li>14 years of software development, 25% senior resources with over 20 years of experience</li>
        <li>+130 completed projects, approx. 30k hours / year of software development, 30% for foreign countries</li>
        <li>Languages: Java , JS,  Python, C ++, C, Go</li>
        <li>Areas: Microservices, Docker, Kubernets, CI/CD Pipelins, Embedded, Mobile, SmartTV, Set Top Boxes, SCADA, Machine Learning (Tesseract), BigData (Ms Azure Data Lake, Hadoop)</li>
        <li>Cloud: AWS, Azure, Serverless, Virtual machines, Containers, Terraform, Ansible</li>
        <li>Frontend: Angular, AngularJS, React, Vue, Webkit, SVG,  </li>
        <li>Services: Redis AuroraDB, DocumentDB, EC2, NOSQLs, RDBMs</li>
        <li>Organization: Agile / Scrum since 2005, Formation/Training</li>
      </ul>
    </div>

  </Layout>
)
