import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const SinglePage = () => {
  return (
    <div className='container-lg'>
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Property Listing</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default SinglePage
