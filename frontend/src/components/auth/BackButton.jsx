import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const BackButton = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm">
      <Link to={href}>
        {label}
      </Link>
    </Button>
  )
}

export default BackButton