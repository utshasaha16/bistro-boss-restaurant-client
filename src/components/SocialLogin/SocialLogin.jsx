import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleLogin} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // handle google log in
  const handleGoogleLogIn = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        navigate('/')
      })
    })
  }


  return (
    <div className="">
      <div className="flex justify-center mb-3">
        <button onClick={handleGoogleLogIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
