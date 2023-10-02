import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  // console.log(user);
  const handleSocailLogin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
