import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="border-b">
     <nav className="container mx-auto flex justify-between items-center py-2">
      <Link to="/" className="text-xl font-bold">Galactic Grub</Link>

      <div className="space-x-4">
        <Link to="/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
      </div>
     </nav>
    </header>
  )
}
