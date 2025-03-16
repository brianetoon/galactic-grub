import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import AuthHeader from "./AuthHeader";
import BackButton from "./BackButton";

const AuthCard = ({ title, label, backButtonHref, backButtonLabel, children }) => {
  return (
   <Card className="xl:w-1/3 md:w-1/2 shadow-md mx-auto">
    <CardHeader>
      <AuthHeader title={title} label={label} />
    </CardHeader>
    <CardContent>
      { children }
    </CardContent>
    <CardFooter>
      <BackButton label={backButtonLabel} href={backButtonHref} />
    </CardFooter>
   </Card>
  )
}

export default AuthCard;