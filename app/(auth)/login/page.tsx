import Link from "next/link";

const login = () => {
  return (
    <>
      <p>this is login page</p>
      <p>don't have an account? </p>
      <Link href={"/register"} className="link">
        Click here to Register
      </Link>
    </>
  );
};
export default login;
