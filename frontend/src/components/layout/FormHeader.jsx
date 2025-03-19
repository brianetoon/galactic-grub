const FormHeader = ({ title, label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h2 className="font-star-jedi-hollow text-secondary-400 text-4xl font-semibold text-center">{ title }</h2>
      <p className="text-muted-foreground text-sm text-center">{ label }</p>
    </div>
  )
}

export default FormHeader