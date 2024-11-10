
import Link from "next/link";


export default function Navbar() {
    return (
      <div className="flex-auto sm:flex items-center justify-end bg-sky-600 text-white sm:pt-3 p-3 ">
         

         <ul  className="flex items-center gap-7 sm:gap-7 mr-10">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/career">Career</Link>
            </li>
            <li>
                <Link href="/contact-us">Contact</Link>
            </li>
            <li>
                <Link href="/skills">Skills</Link>
            </li>
         </ul>
         <button className="mr-2 sm:mr-5 mt-3 sm:mt-0 ml-52 sm:ml-0 box-border sm:h-8 w-16 sm:w-20 border-2 rounded-full bg-green-600"><a href="/login">Login</a></button>

        <button className="sm:mr-10 box-border sm:h-8 w-16 sm:w-20 border-2 rounded-full bg-green-600"><a href="/sign-up">SignUp</a></button>
         
         {/* <Image src={back} alt="logo"/> */}
        {/* <h1>Navbar Page</h1> */}
      </div>
    );
  }