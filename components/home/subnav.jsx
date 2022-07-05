import React from 'react';
import { BsFilterRight, BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import {
  HStack,
  Button,
  Icon,
  Flex,
  Box,
  InputLeftAddon,
  InputRightAddon,
  Input,
  InputGroup,
  Select,
} from '@chakra-ui/react';
function Subnav() {
  return (
    <Box mb={1} bg={'gray.200'} w={'100%'} p={3} id="subnav">
      <HStack>
        <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
          <Button>
            <BsFilterRight fontWeight={'700'} fontSize={'2rem'} />
            &nbsp; Filter
          </Button>
          <Button>Top Rated</Button>
          <Button>
            Top Categories <IoIosArrowDown />
          </Button>
          <Button>
            Fashino <IoIosArrowDown />
          </Button>
          <Button>
            Furniture <IoIosArrowDown />
          </Button>
          <Button>
            Electronics <IoIosArrowDown />
          </Button>
          <Button>
            Mobiles <IoIosArrowDown />
          </Button>
          <Button>
            Videogame <IoIosArrowDown />
          </Button>
          <Button>
            Sort <IoIosArrowDown />
          </Button>

          {/* <Flex w={'100%'} gap={'0.5rem'} flexWrap={'wrap'}>
            <Search />
          </Flex> */}
        </Flex>
      </HStack>
    </Box>
  );
}
export const Search = () => {
  return (
    <InputGroup color={'black'}>
      <InputLeftAddon bg={'gray.600'} color={'white'}>
        <Select border={'none'}>
          <option value="All">All</option>
          <option value="Fashino">Fashino</option>
          <option value="Furniture">Furniture</option>
          <option value="Electronics">Electronics</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Videogame">Videogame</option>
        </Select>
      </InputLeftAddon>
      <Input
        type="text"
        w={'100%'}
        placeholder={'Search Products,Electronis ,Dresses,Furniter'}
        variant={''}
      />
      <InputRightAddon bg={'gray.600'} color={'white'}>
        Search &nbsp; <BsSearch />
      </InputRightAddon>
    </InputGroup>
  );
};

export default Subnav;
