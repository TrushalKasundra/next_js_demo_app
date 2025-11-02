import Link from "next/link";

const register = () => {
    return (<>
        <p>this is registration page</p>
        <Link href={"/login"}>Click here to go to login page</Link>
    </>
    )
}
export default register;