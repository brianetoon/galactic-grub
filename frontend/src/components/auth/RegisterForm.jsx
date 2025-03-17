import AuthCard from "./AuthCard"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/authSchema";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

const RegisterForm = () => {

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <AuthCard
      title="register"
      label="Create an account"
      backButtonHref="/login"
      backButtonLabel="Already have an account? Log in here."
    >
      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField 
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Chewie" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="chewbacca@smugglernet.space" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          <Button type="submit" variant="default" className="w-full">
            Register
          </Button>

        </form>
      </Form>
    </AuthCard>
  )
}

export default RegisterForm