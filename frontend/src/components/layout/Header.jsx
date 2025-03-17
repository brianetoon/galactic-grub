import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="border-b bg-background">
     <nav className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="font-star-jedi text-xl text-secondary-500">Galactic Grub</Link>

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
