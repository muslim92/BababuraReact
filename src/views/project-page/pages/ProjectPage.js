import React from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Col, Row } from 'reactstrap'
import { BuildingGreyIcon, HeartGreyIcon, MailWhiteIcon, MapViewIcon, PhoneGreyIcon, PrinterGreyIcon, ShareBlackIcon, ShareGreyIcon } from '../../../assets/images/custom-images'
import CommonSwiper from '../../property-listings/components/CommonSwiper'
import { Calendar, Check, Eye, Heart, Link, Link2, Printer, Share } from 'react-feather'
import ReadMoreSec from '../components/ReadMoreSec'
import { Line } from 'react-chartjs-2'

const ProjectPage = () => {

    const highlightData = [
        {id: 1, title: 'Brand New Ready To Move In'},
        {id: 2, title: 'State Of The Art Amenities'},
        {id: 3, title: 'Commanding Views'},
        {id: 4, title: 'Near shops and amenities'},
        {id: 5, title: 'Modern & sophisticated design'},
        {id: 6, title: 'Superb riverfront location'},
        {id: 7, title: 'Automated car park system'},
        {id: 8, title: '20m swimming pool and terrace'},
        {id: 9, title: 'Concierge service'},
    ]

    const longContent =
    "This is a long piece of content that needs to be truncated unless the user wants to read This is a long piece of content that needs to be truncated unless the user wants to read This is a long piece of content that needs to be truncated unless the user wants to read This is a long piece of content that needs to be truncated unless the user wants to read.";

  return (
    <>
    <div className='container-lg'>
    <Breadcrumb>
        <BreadcrumbItem className='text_primary_4'><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem className='text_primary_4'><a href="#">Property Listing to "Home"</a></BreadcrumbItem>
        <BreadcrumbItem className='text_primary_4'><a href="#">Sale</a></BreadcrumbItem>
        <BreadcrumbItem className='text_primary_4'><a href="#">NSW</a></BreadcrumbItem>
        <BreadcrumbItem className='text_silver_2' active>Chipping Norton 2170</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <hr style={{color: '#F1FAFF'}}/>
    <div className='container-lg'>
        <Row>
            <Col md={4}>
                <div className='project-title-area'>
                    <span className='text_black_custom_5'>THE CENTENNIAL COLLECTION</span>
                </div>
            </Col>
            <Col md={4}>
                <div className='d-flex align-items-center h-100'>
                <div className='flex-col-start'>
                    <span className='text2_black_2'>The Centennial Collection</span>
                    <span className='text2_silver_1 mt_10'>by ABC DEF</span>
                    <span className='text_black-marlin_1 mt_4'>58 Hullbrook Road, Billesley street, B13 0LA</span>
                </div>
                </div>
            </Col>
            <Col md={4}>
            <div className='d-flex align-items-center h-100'>
            <div className='flex-row-start gap_10'>
                    <Button color='secondary' className='flex-row-start gap_5 align-items-center common-btn-light-primary-1'>
                        <img src={PhoneGreyIcon}/>
                        <span className='text_silver_3'>1300 392 727</span>
                    </Button>
                    <Button color='primary' className='flex-row-start gap_5 align-items-center common-btn-primary-1'>
                        <span className='text_white_8'>Enquire Now</span>
                        <img src={MailWhiteIcon}/>
                    </Button>
                    <Button color='flat-dark' className='flex-row-start gap_8 align-items-end'>
                        <img src={ShareBlackIcon}/>
                        <span className='text_black-marlin_1'>Share</span>
                    </Button>
            </div>
            </div>
            </Col>
        </Row>

        {/* Swiper sec */}
        <div className='mt_10'>
            <CommonSwiper isThumb />
        </div>

        {/* main content */}
        <Row className='mt_50'>
            <Col md={9}>
                <div className='common-style'>
                    <div className='flex-row-between'>
                        <div className='flex-col-start'>
                            <span className='text_black_15'>Gorgeous Apartment Building</span>
                            <div className='flex-row-start align-items-center gap_12 mt_14'>
                                <div className='for-sale-3'>
                                    <span className='text_white_8'>For Sale</span>
                                </div>
                                <div className='flex-row-start align-items-center gap_5'>
                                    <img src={MapViewIcon}/>
                                    <span className='text_black-marlin_1'>58 Hullbrook Road, Billesley, B13 0LA</span>
                                </div>
                                <div className='flex-row-start align-items-center gap_5'>
                                    <Calendar size={16}/>
                                    <span className='text_black-marlin_1'>2 years ago</span>
                                </div>
                                <div className='flex-row-start align-items-center gap_5'>
                                    <Eye size={16}/>
                                    <span className='text_black-marlin_1'>4.529 Views</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex-col-end'>
                            <div className='flex-row-start gap_8'>
                                <Button className='btn-icon common-btn-icon' outline color='light'>
                                    <img src={HeartGreyIcon}/>
                                </Button>
                                <Button className='btn-icon common-btn-icon' outline color='light'>
                                    <img src={ShareGreyIcon}/>
                                </Button>
                                <Button className='btn-icon common-btn-icon' outline color='light'>
                                    <img src={PrinterGreyIcon}/>
                                </Button>
                            </div>
                            <div className='mt_10 text-right'>
                                <span className='text_primary_7'>$7,500</span>
                            </div>
                            <div>
                                <span className='text_black-marlin_3'>House</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='common-style'>
                    <div className='flex-row-start align-items-center gap_31'>
                        <img src={BuildingGreyIcon}/>
                        <span className='text_matterhorn_1'>Type : Apartment / Unit / Flat - New apartments / off the plan</span>  
                    </div>
                </div>
                <div className='common-style-1'>
                    <span className='text_black_15'>
                    Project Highlights
                    </span>
                    <Row className='mt_20 g-2'>
                        {
                            highlightData?.map((item, index) => (
                            <Col key={index} md={6}>
                                <div className='flex-row-start align-items-center gap_20'>
                                    <Check size={24} color='#4E4E4E'/>
                                    <span className='text_matterhorn_1'>{item?.title}</span>
                                </div>
                            </Col>
                            ))
                        }
                    </Row>
                </div>
                <div className='common-style-1'>
                    <span className='text_black_15'>
                        Project Overview
                    </span>
                    <div className='mt_14'>
                        <span className='text_matterhorn_2'>Elevated Riverside Living, in the heart of Parramatta.</span>
                    </div>
                    <div className='mt_14'>
                        <span className='text_grey-suit_3'>WHERE LIFESTYLE MEETS LIVING.</span>
                    </div>
                    <div className='mt_24'>
                        <span className='text_black_custom_6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus leo, blandit vitae diam a, vestibulum viverra nisi. Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus luctus pulvinar. Integer et libero ut purus bibendum gravida non ac tellus. Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.
                        </span>
                    {/* <ReadMoreSec content={longContent} /> */}
                    </div>
                    <div className='flex-row-between'>
                        <Button color='primary' outline>Read more</Button>
                        <Button color='flat-primary'>
                            <Link2 size={15} />
                            Website
                        </Button>
                    </div>
                </div>
            </Col>
            <Col md={3}></Col>
        </Row>
    </div>
    </>
  )
}

export default ProjectPage
