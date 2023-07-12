import { graphql, StaticQuery, Link } from "gatsby"
import React from "react"
import { Button, Panel } from "@pantheon-systems/pds-toolkit-react"
import MarketoForm from "../../components/marketoForm"
import "./style.css"

const Footer = ({ data }) => {
  const pantheonLogo = data.allFile.edges.find(
    (file) => file.node.publicURL.indexOf("pantheon-logo-symbol") > -1
  )

  const CCLogo = data.allFile.edges.find(
    (file) => file.node.publicURL.indexOf("CC-BY-SA_icon") > -1
  )

  return (
    <div>
      <div id="footer">
        <div id="office-hours" className="office-hours-slice">
          <div className="office-hours-slice__content">
            <h2>Got questions? We've got answers!</h2>
            <div className="pds-button-group">
              <a
                className="pds-button"
                href="https://pantheon.io/learn-pantheon?docs"
              >
                Learn Pantheon
              </a>
              <a
                className="pds-button pds-button--secondary"
                href="https://pantheon.io/developers/office-hours?docs"
              >
                Office Hours
              </a>
            </div>
          </div>
        </div>
        <footer role="contentinfo" className="pds-docs-footer">
          <div className="pds-container pds-container--docs pds-grid">
            <div className="pds-grid-item pds-grid-item--sm-4 pds-grid-item--md-3 pds-grid-item--lg-3">
              <div className="footer-menu-header">Topics</div>
            </div>
            <div className="pds-grid-item pds-grid-item--sm-4 pds-grid-item--md-3 pds-grid-item--lg-3">
              <div className="footer-menu-header">Help</div>
            </div>
            <div className="pds-grid-item pds-grid-item--sm-4 pds-grid-item--md-3 pds-grid-item--lg-3">
              <div className="footer-menu-header">Community</div>
            </div>
            <div className="pds-grid-item pds-grid-item--sm-4 pds-grid-item--md-3 pds-grid-item--lg-3">
              <div className="footer-menu-header">Monthly Insights</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      {
        allFile(
          filter: {
            relativePath: {
              in: ["pantheon-logo-symbol.svg", "CC-BY-SA_icon.png"]
            }
          }
        ) {
          edges {
            node {
              id
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} {...props} />}
  />
)
