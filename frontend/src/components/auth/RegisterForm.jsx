import AuthCard from "./AuthCard"

const RegisterForm = () => {
  return (
    <AuthCard
      title="Register"
      label="Create an account"
      backButtonHref="/login"
      backButtonLabel="Already have an account? Log in here."
    >

    </AuthCard>
  )
}

export default RegisterForm