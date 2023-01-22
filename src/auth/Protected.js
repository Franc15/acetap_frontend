import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Auth'

function Protected({ children }) {
    const { currentUser } = React.useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />
  }
  return children
}
export default Protected