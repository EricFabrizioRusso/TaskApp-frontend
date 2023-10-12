import React from 'react'

const HomePage = () => {

  useEffect(() => {
    
    checkLogin()
  }, []);


  return (
    <div>HomePage</div>
  )
}

export default HomePage