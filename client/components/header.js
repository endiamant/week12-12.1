import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { username, repository } = useParams()
  return <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white font-bold">
   <div id= "repository-name"> {username} {repository}</div>
   {username && (<Link to="/" id="go-back"> GO HOME </Link>)}
   {repository && (<Link to={`/${username}`} id="go-repository-list"> GO repository list </Link>)}
   </nav>
}

Header.propTypes = {}

export default React.memo(Header)
