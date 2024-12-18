import React from 'react'
import "./Profiles.css"
function Profile() {
  return (
    <div className='profile'>
        
        <h1>Profile</h1>    
        <table>
            <th>
                Username
            </th>
            <th>    
                Password
            </th>
            <tr>
                <td>{localStorage.getItem('username')}</td>
                <td>{localStorage.getItem('password')}</td>
            </tr>
            </table>  </div>
  )
}

export default Profile
