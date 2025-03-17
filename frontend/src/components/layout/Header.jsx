import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-neutral-900">
     <nav className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="font-star-jedi text-xl text-secondary-400">Galactic Grub</Link>

      <div className="space-x-4">
        <Link to="/register">
          <Button variant="outline">Register</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
     </nav>
    </header>
  )
}
