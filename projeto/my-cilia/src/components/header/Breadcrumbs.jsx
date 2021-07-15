import React from "react"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import "./breadcrumbs.scss"

const Breadcrumbs = ({ path }) => {

  return (
    //path.join(`, `)
    // style="--bs-breadcrumb-divider: '>';"
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid breadcrumbs">
        
        <Breadcrumb>
          { path.map(crumb => <BreadcrumbItem active>{crumb}</BreadcrumbItem>) }
        </Breadcrumb>

      </div>
    </nav>
  )
}

export default Breadcrumbs;