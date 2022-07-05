import React from 'react';
import {
  Avatar,
  VStack,
  Stack,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { SidebarDb } from '../../src/context/CustomDb/SidebarDb';
import Link from 'next/link';
import Router from 'next/router';
import { logoutUser } from '../../utils/authUser';
import {
  FaBars,
  FaShoppingBasket,
  FaShoppingBag,
  FaTimes,
} from 'react-icons/fa';
import cookie from 'js-cookie';
let token = cookie.get('token');
function Sidebar() {
  const [Open, setOpen] = React.useState(false);
  const handlelogout = () => {
    logoutUser();
  };
  const handleSignup = () => {
    Router.push('/Authetication');
  };
  return (
    <Box>
      <header>
        <Navbar spacing={0} fixed={'top'} className="shadow" id="header" p={3}>
          <Flex
            w={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <FaBars
              size={'1.5rem'}
              onClick={() => setOpen(true)}
              cursor={'pointer'}
            />
            <Navbar.Brand className="d-flex  row-gap-3 ml-3 align-items-center">
              <h2 className="brandname">Huassy</h2>
              <FaShoppingBag className="brandname" size={'1.5rem'} />
            </Navbar.Brand>
            <Nav className="ms-auto  d-flex row-gap-3 align-items-center">
              <NavDropdown
                className="text-dark"
                drop={'start'}
                title={<Avatar size={'sm'} />}
              >
                <NavDropdown.Item>Setting</NavDropdown.Item>
                <NavDropdown.Item>Payment</NavDropdown.Item>
                {token ? (
                  <NavDropdown.Item onClick={handlelogout}>
                    Log Out
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item onClick={handleSignup}>
                    Signup
                  </NavDropdown.Item>
                )}{' '}
              </NavDropdown>
              <FaShoppingBasket size={'1.5rem'} />
            </Nav>
          </Flex>
        </Navbar>
      </header>
      <SidebarContent setOpen={setOpen} Open={Open} />
    </Box>
  );
}

const SidebarContent = ({ setOpen, Open }) => {
  const { pathname } = Router.useRouter();
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  console.log(pathname);
  return (
    <Stack>
      <div id="drawer" style={Open ? { left: 0 } : { left: '-80%' }}>
        <Flex
          mt={5}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={5}
        >
          <Flex alignItems={'center'}>
            <h2 className="brandname">Visit To</h2>
          </Flex>
          <FaTimes
            onClick={() => setOpen((prev) => !prev)}
            cursor={'pointer'}
          />
        </Flex>
        <Box bg={''}>
          <VStack spacing={8}>
            {SidebarDb.map((item, index) => {
              return (
                <Link href={`${item.path}`} key={item.id}>
                  <Grid
                    p={3}
                    cursor={'pointer'}
                    fontWeight={`${item.path === pathname ? 'bold' : ''}`}
                    w={'100%'}
                    bg={`${item.path === pathname ? '#3333' : ''}`}
                    className={`${item.path === pathname ? 'activelink' : ''}`}
                    placeContent={'center'}
                    placeItems={'center'}
                    templateColumns={'1rem 10rem'}
                    id="drawernavlinks"
                  >
                    <GridItem>{item.icons}</GridItem>
                    <GridItem>{item.name}</GridItem>
                  </Grid>
                </Link>
              );
            })}
          </VStack>
        </Box>
      </div>
    </Stack>
  );
};

export default Sidebar;
