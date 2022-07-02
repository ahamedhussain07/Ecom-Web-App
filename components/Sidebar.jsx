import React from 'react';
import {
  Avatar,
  HStack,
  VStack,
  Stack,
  Box,
  Flex,
  Icon,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { SidebarDb } from '../CustomDb/SidebarDb';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search } from '../components/subnav';
import {
  FaBars,
  FaShoppingBasket,
  FaShoppingBag,
  FaTimes,
} from 'react-icons/fa';
function Sidebar() {
  const [Open, setOpen] = React.useState(false);

  console.log(Open);
  return (
    <Box>
      <header>
        <HStack spacing={0} bg={'gray.600'} color={'white'} p={3}>
          <Flex
            w={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <HStack alignItems={'center'}>
              <FaBars
                size={'1.5rem'}
                onClick={() => setOpen(true)}
                cursor={'pointer'}
              />
              <Text fontSize={'3xl'}>Huassy</Text>
              <FaShoppingBag color={'white'} size={'1.5rem'} />
            </HStack>
            <HStack>
              <Avatar size={'sm'}></Avatar>
              <FaShoppingBasket size={'1.5rem'} />
            </HStack>
          </Flex>
        </HStack>
      </header>
      <SidebarContent setOpen={setOpen} Open={Open} />
    </Box>
  );
}

const SidebarContent = ({ setOpen, Open }) => {
  const { pathname } = useRouter();
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  console.log(pathname);
  return (
    <Stack>
      <div
        id="drawer"
        style={Open?{left:0}:{left:"-50%"}}
      >
        <Flex
          mt={5}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={5}
        >
          <Flex alignItems={'center'}>
            <Text fontSize={'3xl'}>Huassy</Text>
            <FaShoppingBag color={'white'} size={'1.5rem'} />
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
                    fontWeight={`${item.path === pathname ? '800' : ''}`}
                    w={'100%'}
                    bg={`${item.path === pathname ? 'black' : ''}`}
                    placeContent={'center'}
                    placeItems={'center'}
                    templateColumns={'1rem 10rem'}
                    _hover={{
                      background: '#7a7a7a',
                      transition: '0.8s all linear',
                    }}
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
