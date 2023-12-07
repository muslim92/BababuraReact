// ** Horizontal Menu Components
import { Button } from "reactstrap"
import { Logo1 } from "../../../../../assets/images/logo/idex"
import HorizontalNavMenuItems from "./HorizontalNavMenuItems"
import { Phone } from "react-feather"
import { Link } from "react-router-dom"
const HorizontalMenu = ({ menuData }) => {
  return (
    <div className="flex-row-between container-xxl  main-menu-content py-3">
      <Link to="/">
      <img src={Logo1} />
      </Link>
      <ul className="nav navbar-nav align-items-center" id="main-menu-navigation">
        <HorizontalNavMenuItems items={menuData} />
        <Button color="primary" style={{height: 50, borderRadius: 10}} className="flex-row-start align-items-center gap_6">
        <Phone size={13}/>
        <span>1300 393 727</span>
      </Button>
      </ul>
    </div>
  )
}

export default HorizontalMenu
