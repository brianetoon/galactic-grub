import React from 'react'

const AuthHeader = ({ title, label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h2 className="font-star-jedi-hollow text-secondary-400 text-4xl font-semibold">{ title }</h2>
      <p className="text-muted-foreground text-sm">{ label }</p>
    </div>
  )
}

export default AuthHeader