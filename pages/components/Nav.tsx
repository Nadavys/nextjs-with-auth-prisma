import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";
const active = 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold';
const inactive = 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"';

const Nav = () => {
    const router = useRouter();
    return (
        <ul className="flex border-b">
            <li className="-mb-px mr-1">
                <Link href="/">
                    <Image src="/logo.png" height={100} width={100} alt="logo" priority />
                </Link>
            </li>
            <li className="-mb-px mr-1">
                <Link className={router.pathname == "/" ? active : inactive} href="/">Home</Link>
            </li>

            <li className="mr-1">
                <Link className={router.pathname == "/profile" ? active : inactive} href="/profile">User Profile</Link>
            </li>

            <li className="mr-1">
                <Link className={router.pathname == "/userList" ? active : inactive} href="/userList">User List</Link>
            </li>
        </ul>
    )
}

export default Nav