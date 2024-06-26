import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
  const {logout} = useAuth0();
  return (
    <>
        <Link to="/profile" className="flex bg-white items-center font-bold hover:text-blue-500">
            Profile
        </Link>
        <Link to="/order-status" className="flex bg-white items-center font-bold hover:text-blue-500">
            Orders
        </Link>
        <Link to="/manage-restaurant" className='font-bold hover:text-blue-500'>
            Manage Restaurant
        </Link>
        <Button 
            onClick={() => logout()}
            className="flex item items-center px-3 font-bold hover:bg-gray-500">
            Log Out
        </Button>
    </>
  )
}
