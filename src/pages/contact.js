import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"



export default () => (
  <Layout>
    <SEO title="Contact" />
    <div class="contact">
      <h2>Skillbill in the World</h2>
      <p>
        Being a small team hasn’t stopped us from dreaming big.
        Skillbill works with international customers, interacting and integrating with teams that are located all
        around the world.
        Skillbill has an important history on it, which can prove its ability. Since its early days Skillbill has
        efficiently jumped at the opportunity given by Internet to serve remote customers across the world as if
        Skillbill were the next door company. And we don’t mean plain vanilla offshore outsourcing for routine tasks,
        but again challenging projects and awesome products aimed to be the next big thing. And who knows, soon enough
        Skillbill will be physically located at the next door of many companies all around the world.
        We are also close to out clients even if they are abroad. Currently some of us are in Oslo and London
      </p>

      <div class="office-location">

        <h3>Milan's office</h3>
        <p>
          The historical Office is 5 minutes walk from the Duomo of Milano! Via Della Signora n.6 - 20122 MILAN
        </p>
        <h3>Maps</h3>
        <iframe title="map" allowfullscreen style={{ scrolling: 'no', height: 300, frameborder: 0, width: 400, border: 0 }} src="https://maps.google.it/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Via+della+Signora,+6,+20122+Milan,+Italy&amp;sll=45.464938,9.15519&amp;sspn=0.01064,0.027874&amp;ie=UTF8&amp;hq=&amp;hnear=Via+della+Signora,+6,+20122+Milan,+Lombardy,+Italy&amp;z=14&amp;ll=45.461703,9.196458&amp;output=embed" />

      </div>

      <div class="office-location">

        <h3>Salerno's Office</h3>
        <p>
          at "Palazzo Innovazione" in the center of the city
        </p>
        <h3>Maps</h3>
        <iframe title="map" allowfullscreen style={{ scrolling: 'no', height: 300, frameborder: 0, width: 400, border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.692211610915!2d14.755434015721145!3d40.68075017933537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc228d223c0d7%3A0xdd2b0bd1c72d0374!2sPalazzo+Innovazione!5e0!3m2!1sen!2sit!4v1560937340702!5m2!1sen!2sit" />
      </div>

      <div class="contact" >
        <div>
          <span>Admin Office</span>
          <p>Via XX Settembre n.114/A - 06124 PG</p>
        </div>
        <div>
          <span>P.IVA</span>
          <p>02850410545</p>
        </div>
        <div>
          <span>Phone</span>
          <p>+390287157217</p>
        </div>
        <div>
          <span>Fax</span>
          <p>+390287153440</p>
        </div>
        <div>
          <span>Email</span>
          <p>info@skillbill.it</p>
        </div>
      </div>
      <div class="work-with-us">
        <p>Search us on Linkedin. Apart of that you can write an email to info@skillbill.it introducing you with a CV.</p>
      </div>
      

    </div>

  </Layout >
)
