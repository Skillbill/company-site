import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import nm from "../images/clients/noriginmedia-off.png"
import gcs from "../images/clients/gcs-off.png"
import mn from "../images/clients/mess-off.png"
import clab from "../images/clients/contactlab-off.png"
import sky from "../images/clients/sky-off.png"
import cfmt from "../images/clients/cfmt-off.png"
import fw from "../images/clients/fast-off.png"
import bmc from "../images/clients/bmc-off.png"
import bv from "../images/clients/bottega-veneta-vector-logo-off.png"



export default () => (
  <Layout>
    <SEO title="Clients" />
    <div class="clients">
      <h2>Latest clients</h2>
      <div class="client">
        <img src={nm} alt="Norigin Media" />
        <h2>Norigin Media</h2>
        <a href="https://www.noriginmedia.com/" target="_blank" class="info">web site</a>
      </div>
      <div class="client">
        <img src={gcs} alt="GCS" />
        <h2>GCS</h2>
        <a href="https://uk.gcsrecruitment.com/" target="_blank" class="info">web site</a>
      </div>

      <div class="clent">
        <img src={clab} alt="Contactlab" />
        <h2>Contactlab</h2>
        <a href="http://www.contactlab.com" target="_blank" class="info">web site</a>
      </div>

      <div class="client">
        <img src={mn} alt="Messagenet" />
        <h2>Messagenet</h2>
        <a href="http://www.messagenet.com" target="_blank" class="info">web site</a>
      </div>

      <div class="client">
        <img src={sky} alt="Sky italia" />
        <h2>Sky italia</h2>
        <a href="http://www.sky.it" target="_blank" class="info">web site</a>
      </div>

      <div class="client">
        <img src={cfmt} alt="CFMT" />
        <h2>CFMT</h2>
        <a href="http://www.cfmt.it/formazione" target="_blank" class="info">web site</a>
      </div>

      <div class="client">
        <img src={fw} alt="Fastweb" />
        <h2>Fastweb</h2>
        <a href="http://www.fastweb.it" target="_blank" class="info">web site</a>
      </div>

      <div class="client">
        <img src={bmc} alt="BMC Software" />
        <h2>BMC Software</h2>
        <a href="http://www.bmc.com" target="_blank" class="info">web site</a>
      </div>

      <div class="client">
        <img src={bv} alt="Bottega Veneta" />
        <h2>Bottega Veneta</h2>
        <a href="https://www.bottegaveneta.com" target="_blank" class="info">web site</a>
      </div>

    </div>

  </Layout >
)
