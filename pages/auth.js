import { useState, useRef, useEffect } from 'react';
import {
  Button,
  Input,
  Flex,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack
} from '@chakra-ui/react';
import {Spinner} from "react-bootstrap"
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaCamera } from 'react-icons/fa';
import ImageDrop from '../components/ImageDrop';
import { ContextAuth, useGlobalContext } from '../src/context/authcontext';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import Notification from '../components/notification';
// import ImgSvg from '../public/img.webp';
function Authentication() {
  const [Show, setShow] = useState(false);
  const [Login, setLogin] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   console.log(errors);
  return (
    <ContextAuth>
      <div id="authication">
        <Flex>
          <Junction />
        </Flex>
        <img src="./img.png" alt="loading.." id="authbg"/>
      </div>
    </ContextAuth>
  );
}
const Junction = () => {
  const { Login } = useGlobalContext();

  return <>{Login ? <LoginUi /> : <Signup />}</>;
};
let cancel;

const Signup = () => {
  const inputRef = useRef();
  //username
  const [username, setUsername] = useState('');
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const {
    Show,
    Login,
    mediaPreview,
    handleChangeimg,
    formLoading,
    handlepassword,
    onhandleSignup,
    errorMsg,
    setErrorMsg,
  } = useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const checkUsername = async () => {
    setUsernameLoading(true);
    try {
      cancel && cancel();

      const CancelToken = axios.CancelToken;

      const res = await axios.get(`${baseUrl}/api/signup/${username}`, {
        cancelToken: new CancelToken((canceler) => (cancel = canceler)),
      });

      if (errorMsg !== null) setErrorMsg(null);
      console.log(res.data);
      if (res.data === 'username available') {
        setUsernameAvailable(true);
        // set the username setUsername()
      }
    } catch (error) {
      setErrorMsg('Username not Available');
      setUsernameAvailable(false);
    }
    setUsernameLoading(false);
  };
  useEffect(() => {
    username === '' ? setUsernameAvailable(false) : checkUsername();
  }, [username]);
  return (
    <>
      <form onSubmit={handleSubmit(onhandleSignup)}>
        <Stack spacing={0} width={'22rem'}>
          <Header Login={Login} errorMsg={errorMsg}></Header>

          <div className="Avatar">
            <ImageDrop
              handleChange={handleChangeimg}
              inputRef={inputRef}
              mediaPreview={mediaPreview}
            />
          </div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type={'text'}
              variant="filled"
              {...register('name', {
                required: 'Name is Required',
                min: {
                  value: 3,
                  message: 'Minimum Required Name is 3',
                },
              })}
              size={'sm'}
            />
            <FormHelperText color="red.700" fontWeight={'500'}>
              {errors?.Name?.message}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type={'text'}
              variant="filled"
              {...register('number', {
                required: 'Phone Number is Required',
                min: {
                  value: 10,
                  message: 'Minimum Required Number  10',
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Required Numbers only ',
                },
              })}
              size={'sm'}
            />
            <FormHelperText color="red.700" fontWeight={'500'}>
              {errors?.Number?.message}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>UserName</FormLabel>
            <InputGroup>
              <InputLeftElement
                size={'sm'}
                id="addod"
                children={formLoading ? <Spinner /> : <FaUser />}
              ></InputLeftElement>
              <Input
                type={'text'}
                variant="filled"
                {...register('username', {
                  required: 'Name is Required',
                  min: {
                    value: 3,
                    message: 'Minimum Required Name is 3',
                  },
                })}
                size={'sm'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormHelperText color="red.700" fontWeight={'500'}>
                {errors?.username?.message}
              </FormHelperText>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <textarea
              cols={43}
              rows={3}
              id="address"
              {...register('address', {
                required: 'address is Required',
              })}
            ></textarea>
            <FormHelperText color="red.700" fontWeight={'500'}>
              {errors?.address?.message}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                backgroundColor={'black.50'}
                focusBorderColor="red"
                placeholder="Enter Password"
                variant="outline"
                type={Show ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is Required',
                  min: {
                    value: 8,
                    message: 'Minimum Required Passowrd  10',
                  },
                })}
                size={'sm'}
              />
              <InputRightElement
                onClick={handlepassword}
                cursor="pointer"
                size={'sm'}
                id="addod"
                children={Show ? <FaEye /> : <FaEyeSlash />}
              ></InputRightElement>
            </InputGroup>
            <FormHelperText color="red.700" fontWeight={'500'}>
              {errors?.Password?.message}
            </FormHelperText>
          </FormControl>
          <Suggestions Login={Login}></Suggestions>
          <Buttons Login={Login}></Buttons>
        </Stack>
      </form>
    </>
  );
};
const LoginUi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { formLoading, Show, errorMsg, handlepassword, Login, onhandleLogin } =
    useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit(onhandleLogin)}>
        <Stack spacing={5} m={3} width={'22rem'}>
          <Header Login={Login} errorMsg={errorMsg}></Header>
          <FormControl>
            <FormLabel>UserName</FormLabel>
            <InputGroup>
              <InputLeftElement
                id="addod"
                children={formLoading ? <Spinner /> : <FaUser />}
              ></InputLeftElement>
              <Input
                type={'text'}
                variant="filled"
                {...register('username', {
                  required: 'Name is Required',
                  min: {
                    value: 3,
                    message: 'Minimum Required Name is 3',
                  },
                })}
              />
              <FormHelperText color="red.700" fontWeight={'500'}>
                {errors?.username?.message}
              </FormHelperText>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                backgroundColor={'black.50'}
                focusBorderColor="red"
                placeholder="Enter Password"
                variant="outline"
                type={Show ? 'text' : 'password'}
                {...register('Password', {
                  required: 'Password is Required',
                  min: {
                    value: 8,
                    message: 'Minimum Required Passowrd  10',
                  },
                })}
              />
              <InputRightElement
                onClick={handlepassword}
                cursor="pointer"
                id="addod"
                children={Show ? <FaEye /> : <FaEyeSlash />}
              ></InputRightElement>
            </InputGroup>
            <FormHelperText color="red.700" fontWeight={'500'}>
              {errors?.Password?.message}
            </FormHelperText>
          </FormControl>
          <Suggestions Login={Login}></Suggestions>
          <Buttons Login={Login} />
        </Stack>
      </form>
    </>
  );
};
const Header = ({ Login, errorMsg }) => {
  return (
    <>
      {errorMsg && <Notification msg={errorMsg} resmsg={errorMsg} />}
      <Text
        p={2}
        alignContent="center"
        className="heading"
      >
        {Login ? 'Login' : 'Create an Account'}
      </Text>
    </>
  );
};
const Buttons = ({Login}) => {
  return (
    <div className="d-flex justify-content-end aligns-items-center gap-3">
      <button type={'reset'} className="btn btn-secondary">
        Reset
      </button>
      <button type={'submit'} className="btn btn-success">
        {Login ? 'Login' : 'Create An Account'}
      </button>
    </div>
  );
};
const Suggestions = ({ Login }) => {
  const { handlelogintoggle } = useGlobalContext();
  return (
    <>
      <Text color="black" fontWeight={'900'} as={'span'}>
        Forgot Password?
      </Text>
      <Text color="black" fontWeight={'900'}>
        {Login ? "I don't Have a Account" : 'Already have A Account?'}
        <Button variant={'link'} onClick={handlelogintoggle}>
          {Login ? 'SignUp' : 'Login'}
        </Button>
      </Text>
    </>
  );
};
export default Authentication;
