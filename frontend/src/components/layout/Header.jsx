import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

export default function Header() {
  const { user, token, logout } = useAuthStore();

  return (
    <header className="border-b bg-neutral-900">
     <nav className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="font-star-jedi text-xl text-secondary-400">Galactic Grub</Link>

      <div className="space-x-4">
        {user && token ? (
          <>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/register">
              <Button variant="outline">Register</Button>
            </Link>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </>
        )}
      </div>

     </nav>
    </header>
  )
}
