/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Link } from "gatsby"


const Layout = ({ children }) => {
  return (
    <>
      <header>
        Skillbill company site
        <Link to="/">Home</Link>
        <Link to="/people/">People</Link>
        <Link to="/stats/">Stats</Link>
        <Link to="/clients/">Clients</Link>
        <Link to="/contact/">Contact</Link>
      </header>
      <main>{children}</main>
      <footer>
        Skillbill 2020
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
