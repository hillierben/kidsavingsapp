import React from 'react'

const ParentPortal = () => {
  const[parentLogged, setParentLogged] = React.useState("Parent Portal")

  // React.useEffect(() => {
  //   fetch()
  // })
  
  return (
    <div className="pp-main-page">
      <h1>{parentLogged}</h1>
    </div>
  )
}

export default ParentPortal
