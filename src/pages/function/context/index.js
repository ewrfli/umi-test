import React, { useState, useEffect } from 'react';
import { UserContext, UserContextProvider } from './userContext';
import App from './app'
export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>
      <UserContextProvider>
        <App  {...props}/>
      </UserContextProvider>
    </div>
  )
}