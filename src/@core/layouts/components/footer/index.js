// ** Icons Import
import { Heart } from "react-feather";
import { FIcon, IIcon, LIcon, LogoTitle, TIcon } from "../../../../assets/images/custom-images";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import { useState } from "react";

const Footer = () => {

  const [onHover, setOnHover] = useState(false)
  const [type, setType] = useState(null)

  return (
    <>
      <div className="footer-help">
        <div className="logo-sec-footer"> 
          <img src={LogoTitle}/>
        </div>
        <div className="flex-row-between xs-flex-col-start w-100 mt_12 px-2">
          <Link className="text_white_4">Help</Link>
          <div className="flex-row-start gap-1">
            <Link onMouseEnter={() => {
              setOnHover(true)
              setType(1)
            }} onMouseLeave={() => {
              setOnHover(false)
              setType(null)
              }} className={`${onHover === true && type === 1 ? 'hovered-link text_primary_3' : 'without-hover text_white_5 '}`}>Agent Admin</Link>
            <Link onMouseEnter={() => {
              setOnHover(true)
              setType(2)
            }} onMouseLeave={() => {
              setOnHover(false)
              setType(null)
              }} className={`${onHover === true && type === 2 ? 'hovered-link text_primary_3' : 'without-hover text_white_5 '}`}>Owner Admin</Link>
            <Link onMouseEnter={() => {
              setOnHover(true)
              setType(3)
            }} onMouseLeave={() => {
              setOnHover(false)
              setType(null)
              }} className={`${onHover === true && type === 3 ? 'hovered-link text_primary_3' : 'without-hover-last text_white_5 '}`}>Property Developer Admin</Link>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <Row className="me-0">
          <Col md={2}>
            <span className="text_white_1">States</span>
            <ul className="list-style-custom">
              <li className="mt_8"><Link className="text_silver_1">Apartment for Rent</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Apartment Low to Hide</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Offices for Buy</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Offices for Rent</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <span className="text_white_1">Capital Cities</span>
            <ul className="list-style-custom">
              <li className="mt_8"><Link className="text_silver_1">Terms of Use</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Privacy Policy</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Pricing Plans</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Our Services</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Contact Support</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Careers</Link></li>
              <li className="mt_8"><Link className="text_silver_1">FAQs</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <span className="text_white_1">Capital Cities - Rentals</span>
            <ul className="list-style-custom">
              <li className="mt_8"><Link className="text_silver_1">Apartment for rent</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Office for rent</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Office for buy</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <span className="text_white_1">Popular Areas</span>
            <ul className="list-style-custom">
              <li className="mt_8"><Link className="text_silver_1">Apartment for Rent</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Apartment Low to Hide</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Offices for Buy</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Offices for Rent</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <span className="text_white_1">Domain</span>
            <ul className="list-style-custom">
              <li className="mt_8"><Link className="text_silver_1">Terms of Use</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Privacy Policy</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Pricing Plans</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Our Services</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Contact Support</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Careers</Link></li>
              <li className="mt_8"><Link className="text_silver_1">FAQs</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <span className="text_white_1">Our Network</span>
            <ul className="list-style-custom">
              <li className="mt_8"><Link className="text_silver_1">Apartment for rent</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Office for rent</Link></li>
              <li className="mt_8"><Link className="text_silver_1">Office for buy</Link></li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="footer-last-sec">
        <div className="flex-row-between xs-flex-col-start footer-last-sec-border custom-padding">
            <Button color="light" outline>
              <span>Commercial Real Estate</span>
            </Button>
            <div className="flex-row-start gap-3">
              <Link className="text_white_6">About Bababura Group</Link>
              <Link className="text_white_6">Careers</Link>
              <Link className="text_white_6">Contact</Link>
            </div>
            <div className="flex-row-start gap_8">
              <Link className="social-circle">
                  <img src={FIcon}/>
              </Link>
              <Link className="social-circle">
                  <img src={TIcon}/>
              </Link>
              <Link className="social-circle">
                  <img src={LIcon}/>
              </Link>
              <Link className="social-circle">
                  <img src={IIcon}/>
              </Link>
            </div>
        </div>
        <div className="custom-padding flex-col-center">
            <span className="text_silver_1">This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply</span>
        </div>
      </div>
    </>
    // <p className="clearfix mb-0">
    //   <span className="float-md-start d-block d-md-inline-block mt-25">
    //     COPYRIGHT © {new Date().getFullYear()}{" "}
    //     <a
    //       href="https://1.envato.market/pixinvent_portfolio"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Pixinvent
    //     </a>
    //     <span className="d-none d-sm-inline-block">, All rights Reserved</span>
    //   </span>
    //   <span className="float-md-end d-none d-md-block">
    //     Hand-crafted & Made with
    //     <Heart size={14} />
    //   </span>
    // </p>
  );
};

export default Footer;
