

export default function Login() {
    return (
      <div className="flex justify-center mt-28 sm:mt-28  sm:mb-20 mb-28">

        <form className="h-80 w-80 box-border border-2 rounded-lg pt-5 bg-stone-200" id="form">
        <h1 className="text-center font-bold " >Login Page</h1>

        <p className="mt-4 ml-3 font-bold">Enter your E-mail and password to login</p> 

        {/* <label htmlFor="e-mail" >E-mail</label><br /> */}
        <p className="mt-4 ml-3 font-bold ">E-mail</p>

        <input type="text" id="e-mail" placeholder="Enter your e-mail" required className="rounded-r-lg rounded-l-lg  ml-3 h-8 w-72"/>
        
        {/* <label htmlFor="password">Password</label><br /> */}
        <p className="mt-4 ml-3 font-bold ">Password</p>

        <input type="text" id="e-mail" placeholder="Enter your password" required className="rounded-r-lg rounded-l-lg ml-3 h-8 w-72"/>
        <br />
        
        <button className=" ml-8 mr-2 box-border h-8 w-20  rounded-full bg-green-600 border mt-4 text-white">Login</button>or
        <button className="ml-2 box-border h-8 w-36 border-2 rounded-full bg-green-600 text-white">Create Account</button>
        </form>


      </div>
    );
  }