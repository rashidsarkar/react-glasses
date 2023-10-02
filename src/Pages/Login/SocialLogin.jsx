import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log(user);
  const handleSocailLogin = (media) => {
    media()
      .then((res) => toast.success("user Login successfully"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button
          onClick={() => {
            handleSocailLogin(googleLogin);
          }}
          className="btn btn-neutral btn-sm "
        >
          Accent
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
