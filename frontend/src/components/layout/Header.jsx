import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

export default function Header() {
  const { user, token, logout } = useAuthStore();

  return (
    <header className="sticky top-0 border-b bg-zinc-900 z-10">
     <nav className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="font-star-jedi text-xl text-secondary-400">Galactic Grub</Link>

      <div className="space-x-4">
        {user && token ? (
          <>
            <Link to="/create-recipe">
              <Button variant="outline">Create</Button>
            </Link>
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
