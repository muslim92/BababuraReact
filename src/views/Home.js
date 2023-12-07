/* eslint-disable comma-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
import {
  Row,
  Col,
  CardImg,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input
} from "reactstrap";
import { HeroImg, Search } from "../assets/images/custom-images";
import icon1 from "../assets/images/icons/icon1.svg";
import icon2 from "../assets/images/icons/icon2.svg";
import icon3 from "../assets/images/icons/icon3.svg";
import icon4 from "../assets/images/icons/icon4.svg";
import icon5 from "../assets/images/icons/icon5.svg";
import icon6 from "../assets/images/icons/icon6.svg";
import icon7 from "../assets/images/icons/icon7.svg";
import icon8 from "../assets/images/icons/icon8.svg";
import icon9 from "../assets/images/icons/icon9.svg";
import icon10 from "../assets/images/icons/icon10.svg";
import icon11 from "../assets/images/icons/icon11.svg";
import icon12 from "../assets/images/icons/icon12.svg";
import icon_blue1 from "../assets/images/icons/icon_blue1.svg";
import icon_blue2 from "../assets/images/icons/icon_blue2.svg";
import icon_blue3 from "../assets/images/icons/icon_blue3.svg";
import icon_blue4 from "../assets/images/icons/icon_blue4.svg";
import icon_blue5 from "../assets/images/icons/icon_blue5.svg";
import icon_blue6 from "../assets/images/icons/icon_blue6.svg";
import icon_blue7 from "../assets/images/icons/icon_blue7.svg";
import icon_blue8 from "../assets/images/icons/icon_blue8.svg";
import icon_blue9 from "../assets/images/icons/icon_blue9.svg";
import icon_blue10 from "../assets/images/icons/icon_blue10.svg";
import icon_blue11 from "../assets/images/icons/icon_blue11.svg";
import icon_blue12 from "../assets/images/icons/icon_blue12.svg";
import search1 from '../assets/images/png/search1.png'
import search2 from '../assets/images/png/search2.png'
// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow
} from 'swiper'

// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

// ** Init Swiper Functions
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

// ** Third Party Components
import PropertyType from "../@core/components/custom-components/PropertyType";
import { useState } from "react";
// import CustomPills from "../@core/components/custom-components/customPills";
import CommonCard from "../@core/components/custom-components/CommonCard";
import Select from "react-select";
import RealEstateCard from "../@core/components/custom-components/realEstateCard";
import DiscoverdCard from "../@core/components/custom-components/discoverdCard";
import DreamCard from "../@core/components/custom-components/dreamCard";
import NewDevelopmentCard from "../@core/components/custom-components/newDevelopmentCard";
import NewsCard from "../@core/components/custom-components/newsCard";
import DreamHouse from "../@core/components/custom-components/dreamHouse";
import { useNavigate } from "react-router-dom";

const params = {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    clickable: true
  },
  breakpoints: {
    1024: {
      // slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      // slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      // slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      // slidesPerView: 1,
      spaceBetween: 10
    }
  }
}
const params2 = {
  slidesPerView: "auto",
  spaceBetween: 20,
  // pagination: {
  //   clickable: false
  // },
  breakpoints: {
    1024: {
      // slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      // slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      // slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      // slidesPerView: 1,
      spaceBetween: 10
    }
  }
}


const Home = () => {

  // ** States
  const [active, setActive] = useState('1')
  const [selectedPill, setSelectedPill] = useState(1)
  const [activeTab, setActiveTab] = useState('Buy');
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const navigate = useNavigate()
  const data = [
    { title: 'House', property: 8, id: 1 },
    { title: 'House & Land', property: 12, id: 2 },
    { title: 'New Homes & Developments', property: 1, id: 3 },
    { title: 'Townhouse', property: 3, id: 4 },
    { title: 'Apartment', property: 7, id: 5 },
    { title: 'Land', property: 10, id: 6 },
    { title: 'Retirement', property: 0, id: 7 },
    { title: 'Rural', property: 8, id: 8 },
    { title: 'Auction', property: 18, id: 9 },
    { title: 'Sold', property: 4, id: 10 },
  ]
  const data2 = [
    { name: "ALL", icon: "", icon_blue: "" },
    { name: "House", icon: icon1, icon_blue: icon_blue1 },
    { name: "House & Land", icon: icon2, icon_blue: icon_blue2 },
    { name: "New Homes & Developments", icon: icon3, icon_blue: icon_blue3 },
    { name: "Townhouse", icon: icon4, icon_blue: icon_blue4 },
    { name: "Apartments", icon: icon5, icon_blue: icon_blue5 },
    { name: "Land", icon: icon6, icon_blue: icon_blue6 },
    { name: "Rural", icon: icon7, icon_blue: icon_blue7 },
    { name: "Auction", icon: icon8, icon_blue: icon_blue8 },
    { name: "Sold", icon: icon9, icon_blue: icon_blue9 },
    // { name: "Leased", icon: icon10, icon_blue: icon_blue10 },
    // { name: "Share Accommodation", icon: icon11, icon_blue: icon_blue11 },
    { name: "Retirement", icon: icon12, icon_blue: icon_blue12 },
  ]

  const data3 = [
    { name: "ALL", icon: "", icon_blue: "" },
    { name: "House", icon: icon1, icon_blue: icon_blue1 },
    { name: "House & Land", icon: icon2, icon_blue: icon_blue2 },
    { name: "Townhouse", icon: icon4, icon_blue: icon_blue4 },
    { name: "Apartments", icon: icon5, icon_blue: icon_blue5 },
    { name: "Rural", icon: icon7, icon_blue: icon_blue7 },
    { name: "Leased", icon: icon10, icon_blue: icon_blue10 },
    { name: "Share Accommodation", icon: icon11, icon_blue: icon_blue11 },
    { name: "Retirement", icon: icon12, icon_blue: icon_blue12 },
  ]
  const toggle = tab => {
    setActive(tab)
  }
  const options = [{ value: 'Property_type', label: 'Property type' }]
  const options2 = [{ value: 'Property_type', label: 'Property type' }]
  return (
    <div className="">
      <section className="hero-sec banner_height">
        <div className="container-xxl h-100">
          <div className="position-relative h-100">
            <Row className="position-relative h-100">
              <Col md={7} className="">
                <div className={`py-4 ${activeTab === 'Rent' ? 'h_93' : 'h-100'}`}>
                  <div className="d-flex justify-content-between flex-column h-100">
                    <div>
                      <div className="">
                        <span className="text_black_2">Australian Real Estate <br /> Marketplace</span>
                      </div>
                      <div className="mt_23">
                        <span className="text2_bali-hai_1">Find your best smart real estate</span>
                      </div>
                    </div>
                    <div className="mt-2 position-relative">
                      <div className="d-flex align-items-center flex-wrap items-gap-1" >
                        {
                        
                        activeTab === 'Buy' ? data2.map((items, index) => (
                          <div
                            key={index}
                            className={`fillter-items ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(-1)}
                          >
                            {/* {items.icon &&
                              <img
                                src={activeIndex === index || hoverIndex === index ? items.icon_blue : items.icon}
                                alt=""
                              />
                            } */}
                            {items.name}
                          </div>
                        ))
                        :
                        activeTab === 'Rent' ? data3.map((items, index) => (
                          <div
                            key={index}
                            className={`fillter-items ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(-1)}
                          >
                            {/* {items.icon &&
                              <img
                                src={activeIndex === index || hoverIndex === index ? items.icon_blue : items.icon}
                                alt=""
                              />
                            } */}
                            {items.name}
                          </div>
                        ))
                        : null
                      }
                      </div>
                    </div>
                  </div>
                  <div className="filterMenu">
                    <div className="w-100 ">
                      <div className="d-flex align-items-center">
                        <div
                          className={`filterMenu-tab filterMenu-radius-left ${activeTab === 'Buy' && 'active'}`}
                          onClick={() => setActiveTab('Buy')}>
                          Buy
                        </div>
                        <div
                          className={`filterMenu-tab filterMenu-radius-right ${activeTab === 'Rent' && 'active'}`}
                          onClick={() => setActiveTab('Rent')}>
                          Rent
                        </div>
                      </div>
                      <div className="filterMenu-search-tab  filterMenu-shadow">
                        <Form>
                          <div className="w-100 d-flex gap-1">
                            <Input
                              type="search"
                              className="fillter-input"
                              placeholder="Try a location or a school or project name"
                            />
                            {/* <Select
                              placeholder="Property type"
                              options={options}
                              className="fillter-input w-100"
                            />
                            <Select
                              placeholder="States"
                              options={options2}
                              className="fillter-input w-100"
                            /> */}
                            <button className="fillter-btn btn1 " type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 13.5V3.75M6 13.5C6.39782 13.5 6.77936 13.658 7.06066 13.9393C7.34196 14.2206 7.5 14.6022 7.5 15C7.5 15.3978 7.34196 15.7794 7.06066 16.0607C6.77936 16.342 6.39782 16.5 6 16.5M6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5M6 20.25V16.5M18 13.5V3.75M18 13.5C18.3978 13.5 18.7794 13.658 19.0607 13.9393C19.342 14.2206 19.5 14.6022 19.5 15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5M18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5M18 20.25V16.5M12 7.5V3.75M12 7.5C12.3978 7.5 12.7794 7.65804 13.0607 7.93934C13.342 8.22064 13.5 8.60218 13.5 9C13.5 9.39782 13.342 9.77936 13.0607 10.0607C12.7794 10.342 12.3978 10.5 12 10.5M12 7.5C11.6022 7.5 11.2206 7.65804 10.9393 7.93934C10.658 8.22064 10.5 8.60218 10.5 9C10.5 9.39782 10.658 9.77936 10.9393 10.0607C11.2206 10.342 11.6022 10.5 12 10.5M12 20.25V10.5" stroke="#289ADE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </button>
                            <button onClick={() => navigate('/property-listing')} className="btn1 search-btn" type="button" style={{ gap: "0.5rem" }}>
                              <img src={Search}/>
                              <div className="" style={{ marginTop: "0.3rem" }}>
                                Search
                              </div>
                            </button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <CardImg className="banner_height_img" src={HeroImg} />
              </Col>
            </Row>

          </div>
        </div>
      </section >
      <section className="container-lg">
        <div className="mt_100 flex-col-start">
          <span className="slider-head">Find your neighborhood</span>
          <span className="slider-subhead">Find your dream apartment with our listing</span>
        </div>
        <div className="mt_40">
          <Swiper  {...params} className="pb-4">
            <SwiperSlide >
              <PropertyType title={'Office'} number={20} />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyType title={'Office'} number={20} />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyType title={'Office'} number={20} />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyType title={'Office'} number={20} />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyType title={'Office'} number={20} />
            </SwiperSlide>
            <SwiperSlide>
              <PropertyType title={'Office'} number={20} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt_100">
          <div className="flex-row-between align-items-center">
          <div className="flex-col-start">
            <span className="head1">Hot Properties for Sale</span>
            <span className="head2">Get some Inspirations from 800+ Properties</span>
          </div>
          <div className="flex-row-start">
            <Nav pills>
              <NavItem>
                <NavLink
                  active={active === '1'}
                  onClick={() => {
                    toggle('1')
                  }}
                >
                  Buy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === '2'}
                  onClick={() => {
                    toggle('2')
                  }}
                >
                  Rent
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          </div>
          <div className="card_grid mt_46">
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
            <CommonCard />
          </div>
        </div>
        <div className="flex-col-start mt_40">
          <span className="slider-head">Search real estate by area</span>
          <span className="slider-subhead">Find your dream apartment with our listing</span>
        </div>
        <div className="mt_40 ">
          <div className="card_grid2">
            <RealEstateCard title={'Office'} number={20} img={search1} />
            <RealEstateCard title={'Office'} number={20} img={search1} />
            <RealEstateCard title={'Office'} number={20} img={search1} />
            <RealEstateCard title={'Office'} number={20} img={search2} />
            <RealEstateCard title={'Office'} number={20} img={search1} />
            <RealEstateCard title={'Office'} number={20} img={search2} />
            <RealEstateCard title={'Office'} number={20} img={search1} />
            <RealEstateCard title={'Office'} number={20} img={search2} />
          </div>
        </div>
        <div className="mt-5 pt-3">
          <div className="discover" style={{ backgroundColor: " #F1FAFF" }}>
            <div className="text-center">
              <div className="head1 ">Discover Popular Properties</div>
              <div className="head2">Nulla ut pretium felis, in scelerisque diam quisque in.</div>
            </div>
            <div className="mt-2">
             <Row className="gap-xl-0 gap-2 justify-content-center">
              <Col xl="4" lg="5" md="6" className="d-flex" > <div className="mx-md-0 mx-auto "> <DiscoverdCard /></div></Col>
              <Col xl="4" lg="5" md="6" className="d-flex" > <div className="mx-md-0 mx-auto "> <DiscoverdCard /></div></Col>
              <Col xl="4" lg="5" md="6" className="d-flex" > <div className="mx-md-0 mx-auto "> <DiscoverdCard /></div></Col>
             </Row>
            </div>
          </div>
        </div>
        <div className="mt_100">
        <div className="flex-col-start">
        <div className="head1 ">Dream Homes</div>
        </div>
          <div className="card_grid_3 mt_40">
            <DreamCard />
            <DreamCard />
            <DreamCard />
          </div>
        </div>
        <div className="mt_100">
        <div className="flex-col-start">
        <div className="head1 ">New Developments</div>
        </div>
          <div className="card_grid_3 mt_40">
              <NewDevelopmentCard  title={'Atlas'} address={'4211 W 29th New York, NYC'} img={search1} />
              <NewDevelopmentCard  title={'Atlas'} address={'4211 W 29th New York, NYC'} img={search1} />
              <NewDevelopmentCard  title={'Atlas'} address={'4211 W 29th New York, NYC'} img={search1} />
          </div>
        </div>
        <div className="mt_100">
        <div className="flex-col-start">
        <div className="head1 ">Latest News</div>
        </div>
          <div className="card_grid_3 mt_40">
            <NewsCard title={"Rose Byrne and Bobby Cannavale star in Domain's spring campaign"} img={search1} />
            <NewsCard title={"Rose Byrne and Bobby Cannavale star in Domain's spring campaign"} img={search1} />
            <NewsCard title={"Rose Byrne and Bobby Cannavale star in Domain's spring campaign"} img={search1} />
            <NewsCard title={"Rose Byrne and Bobby Cannavale star in Domain's spring campaign"} img={search1} />
          </div>
        </div>
        <div className="mt_100">
          <DreamHouse />
        </div>
      </section >
    </div >

  );
};

export default Home;
