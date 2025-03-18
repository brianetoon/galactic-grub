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
   <Card className="w-full max-w-sm md:max-w-md mx-auto mt-8">
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