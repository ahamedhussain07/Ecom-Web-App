import react, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser, loginUser } from '../../utils/authUser';
import uploadPic from '../../utils/uploadPicToCloudinary';
const AuthProvider = react.createContext();
const ContextAuth = ({ children }) => {
  const [Show, setShow] = useState(false);
  const [Login, setLogin] = useState(false);
  const { reset } = useForm();
  const handlepassword = () => {
    setShow(!Show);
  };
  const handlelogintoggle = () => {
    setLogin(!Login);
  };
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // for image
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleChangeimg = (e) => {
    const { name, files } = e.target;

    if (name === 'media') {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
  };

  const onhandleSignup = async (data) => {
    console.log(data);
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await uploadPic(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg('error at uplaoding image');
    }

    await registerUser(data, profilePicUrl, setErrorMsg, setFormLoading);
    console.log(data);
    reset();
  };
  const onhandleLogin = async (data) => {
    console.log(data);
    setFormLoading(true);
    await loginUser(data, setErrorMsg);
    setFormLoading(false);
console.log(errorMsg)
    reset();
  };
  console.log(errorMsg);
  return (
    <AuthProvider.Provider
      value={{
        Show,
        onhandleSignup,
        onhandleLogin,
        handleChangeimg,
        mediaPreview,
        formLoading,
        Login,
        handlepassword,
        handlelogintoggle,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AuthProvider);
};

export { ContextAuth, useGlobalContext };
