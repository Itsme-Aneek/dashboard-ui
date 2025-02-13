import { toast } from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div className="flex-1 bg-default h-full">
      <div className="container-custom-xs h-full flex flex-col gap-6 justify-center">
        <div className="upper">
          <h2 className="text-4xl font-montserrat font-bold">Sign In</h2>
          <p className="font-lato">Sign in to your account</p>
        </div>
        <div className="signin grid grid-cols-2 gap-4">
          <div
            onClick={handleSignIn}
            className="google cursor-pointer flex gap-3 text-sm items-center bg-white px-5 py-2 rounded-xl"
          >
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/icon/google.svg" alt="google" className="w-5" />
            }
            <span className="text-secondary font-montserrat">
              Sign in with Google
            </span>
          </div>
          <div
            onClick={() => toast.error("Please try with Google")}
            className="apple cursor-pointer flex gap-3 text-sm items-center bg-white px-5 py-2 rounded-xl"
          >
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/icon/apple.svg" alt="google" className="w-5" />
            }
            <span className="text-secondary font-montserrat">
              Sign in with Apple
            </span>
          </div>
        </div>
        <div className="form-container">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-8 bg-white rounded-[1.25rem] flex flex-col gap-4"
          >
            <div className="input-group flex flex-col gap-2">
              <label htmlFor="email">Email address</label>
              <input
                className="bg-[#EAEAEA] font-lato rounded-[0.625rem] py-2 px-4"
                type="text"
                id="email"
                name="email"
                placeholder="aneekhazra124@gmail.com"
              />
            </div>
            <div className="input-group flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                className="bg-[#EAEAEA] font-lato rounded-[0.625rem] py-2 px-4"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <Link className="text-link" href="">
              Forgot password?
            </Link>
            <button
              onClick={() => router.push("/dashboard")}
              className="text-white font-bold font-montserrat bg-black py-4 rounded-[0.625rem]"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="register text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link href="" className="text-link font-lato">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
