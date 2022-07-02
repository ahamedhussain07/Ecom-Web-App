import {FaHome,FaBookmark,FaShoppingCart} from "react-icons/fa"
import {MdOutlineProductionQuantityLimits} from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"

const SidebarDb = [
  {
    id: 1,
    name: 'Home',
    icons: <FaHome />,
    path: '/',
  },
  {
    id: 2,
    name: 'Post Products',
    icons: <MdOutlineProductionQuantityLimits />,
    path: '/PostProducts',
  },
  {
    id: 3,
    name: 'Customer Products',
    icons: <FaShoppingCart />,
    path: '/CustomerProducts',
  },
  {
    id: 4,
    name: 'Savelist',
    icons: <FaBookmark />,
    path: '/Savelist',
  },
  {
    id: 5,
    name: 'Profile',
    icons: <CgProfile />,
    path: '/Profile',
  },
  {
    id: 6,
    name: 'Setting ',
    icons: <AiFillSetting />,
    path: '/Setting ',
  },
];

export {SidebarDb}