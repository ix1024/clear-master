import { useState } from "react"

import MyApp from "~component/MyApp"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div>
      <MyApp />
    </div>
  )
}

export default IndexPopup
