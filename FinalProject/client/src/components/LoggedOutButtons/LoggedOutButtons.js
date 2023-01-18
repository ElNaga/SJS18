import React from 'react'
import { Link } from 'react-router-dom'

export const LoggedOutButtons = () => {
  return (
      <div className="logButtons">
          <ul>
              <li className="logIn">
                <Link style={{ textDecoration: 'none' }} to="/login">LOG IN</Link>
                </li>
              <li className="orangeOr">
                or
                </li>
              <li className="createAccount">
                <Link style={{ textDecoration: 'none' }} to="/create-account">CREATE ACCOUNT</Link>
                </li>
          </ul>
      </div>
  )
}
