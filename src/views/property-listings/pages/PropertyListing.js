import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText, Row, UncontrolledButtonDropdown } from 'reactstrap'
import Filterbutton from '../components/Filterbutton'
import { useState } from 'react'
import { AuctionViewIcon, AuctionViewPrimaryIcon, FilterGrey, ListViewIcon, ListViewPrimaryIcon, MapPrimaryIcon, MapViewIcon, Search, SearchGrey, Searchblack } from '../../../assets/images/custom-images'
import Commonbutton from '../components/Common'
import PropertyViewType from '../components/PropertyViewType'
import Select from 'react-select'
import RecentAddedProperty from '../components/RecentAddedProperty'
import PropertyAlert from '../components/PropertyAlert'
import CommonListingCard from '../components/CommonListingCard'
import FeaturedListingSec from '../components/FeaturedListingSec'
import SoldPropertySec from '../components/SoldPropertySec'
import PropertyProjectCard from '../components/PropertyProjectCard'
import SecondCommonListingCard from '../components/SecondCommonListingCard'
import RealEstateCard from '../../../@core/components/custom-components/realEstateCard'
import search1 from '../../../assets/images/png/search1.png'
import PropertyNewYouCard from '../components/PropertyNewYouCard'
import PropertyAddsCard from '../components/PropertyAddsCard'
import ReactPaginate from 'react-paginate';
import AuctionDatesSelection from '../components/AuctionDatesSelection'

const PropertyListing = () => {
    const [selected, setSelected] = useState(1)
    const [selectedType, setSelectedType] = useState(1)
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedDate, setSelectedDate] = useState(1);

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };
    const types = [
        {id: 1, title: 'Buy'},
        {id: 2, title: 'Rent'},
        {id: 3, title: 'Price'},
        {id: 4, title: 'Beds'},
        {id: 5, title: 'Property Types'},
    ]

    const ViewTypes = [
      {id: 1, title: 'List View', icon: ListViewIcon, selectedIcon: ListViewPrimaryIcon},
      {id: 2, title: 'Map View', icon: MapViewIcon, selectedIcon: MapPrimaryIcon},
      {id: 3, title: 'Auctions', icon: AuctionViewIcon, selectedIcon: AuctionViewPrimaryIcon}
  ]

  const Options = [
    {value: 'Featured', label: 'Featured'},
    {value: 'Date (Newest - Oldest)', label: 'Date (Newest - Oldest)'},
    {value: 'Date (Oldest - Newest)', label: 'Date (Oldest - Newest)'},
    {value: 'Price (Lowest - Highest)', label: 'Price (Lowest - Highest)'},
    {value: 'Price (Highest - Lowest)', label: 'Price (Highest - Lowest)'},
    {value: 'Next Auction', label: 'Next Auction'},
    {value: 'Suburb', label: 'Suburb'},
  ]
  return (
    <div className='container-lg'>
      <Breadcrumb>
        <BreadcrumbItem className='text_primary_4'><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem className='text_primary_4'><a href="#">Property Listing to "Home"</a></BreadcrumbItem>
        <BreadcrumbItem className='text_primary_4'><a href="#">Sale</a></BreadcrumbItem>
        <BreadcrumbItem className='text_primary_4'><a href="#">NSW</a></BreadcrumbItem>
        <BreadcrumbItem className='text_silver_2' active>Chipping Norton 2170</BreadcrumbItem>
      </Breadcrumb>
      <div className='flex-row-start gap_10 mt_40'>
        {
            types.map((item, index) => (
                <Filterbutton id={item?.id} selected={selected} setSelected={setSelected} title={item?.title}/>
            ))
        }
        <InputGroup style={{height: 44, borderRadius: 10}} className="input-group-merge">
        <InputGroupText>
            <img src={Searchblack} />
        </InputGroupText>
        <Input
            type="search"
            placeholder="Type keyword..."
        />
        </InputGroup>
        <Commonbutton icon={FilterGrey} title='Filters'/>
        {/* <Commonbutton search icon={SearchGrey} title='Search Now'/> */}
        <button className="btn1 search-btn" type="button" style={{ gap: "0.5rem", height: 45 }}>
          <img src={Search}/>
          <div className="" style={{ marginTop: "0.3rem" }}>
            Search
          </div>
        </button>
      </div>
      <div className='flex-row-start align-items-center gap_20 mt_50'>
        <span className='text_black_custom_1'>Real Estate & Property for sale in Casula, NSW 2170</span>
        <span className='text_black-marlin_2'>There are currently 164,814 properties.</span>
      </div>
      <div className='flex-row-start gap_10 mt_40'>
        {
          ViewTypes?.map((item, index) => (
            <PropertyViewType id={item?.id} selectedIcon={item?.selectedIcon} selectedType={selectedType} setSelectedType={setSelectedType} icon={item?.icon} title={item?.title}/>
          ))
        }
        <Select 
          className="react-select custom-select"
          classNamePrefix="select"
          options={Options}
          defaultValue={Options[0]}
        />
      </div>
      <Row className='mt_20'>
        <Col md={8}>
          {
            selectedType === 3 ?
            <AuctionDatesSelection selected={selectedDate} setSelected={setSelectedDate}/>
            : 
            <RecentAddedProperty />
          }
          <div className='mt_40'>
            <CommonListingCard />
            <CommonListingCard auction />
            <CommonListingCard />
            <CommonListingCard />
          </div>
          <div className='mt_40'>
          <PropertyProjectCard />
          <SecondCommonListingCard />
          <SecondCommonListingCard />
          </div>
        </Col>
        <Col md={4}>
          <div className='flex-col-end'>
              <PropertyAlert primary />
              <div className='mt_29'>
              <FeaturedListingSec />
              <SoldPropertySec />
              <div className='mt_29'>
                <span className='text_black_custom_4'>Real estate near you</span>
              </div>
              <Row className='g-1 mt_5'>
                <Col md={6}>
                  <PropertyNewYouCard />
                </Col>
                <Col md={6}>
                  <PropertyNewYouCard />
                </Col>
                <Col md={6}>
                  <PropertyNewYouCard />
                </Col>
                <Col md={6}>
                  <PropertyNewYouCard />
                </Col>
                <Col md={6}>
                  <PropertyNewYouCard />
                </Col>
                <Col md={6}>
                  <PropertyNewYouCard />
                </Col>
              </Row>
              <div className='mt_32'>
                <PropertyAddsCard />
              </div>
          </div>
          </div>
        </Col>
      </Row>
      <ReactPaginate
      nextLabel=""
      breakLabel="..."
      previousLabel=""
      pageRangeDisplayed={2}
      forcePage={currentPage}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      // pageCount={Math.ceil(data.length / 7) || 1}
      pageCount={10}
      onPageChange={(page) => handlePagination(page)}
      containerClassName="pagination react-paginate separated-pagination pagination-lg pe-1 mt_100"
    />
    <div className='mt_20'>
      <span className='text_black_custom_3'>Viewing 1-25 of 51298 properties</span>
    </div>
    </div>
  )
}

export default PropertyListing
