import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repos = (props) => {
  const { username } = useParams()
  return (
    <div>
      
      {props.repos.map((repo) => (
        <div className="bg-indigo-600 text-white rounded p-2 mb-2S" key={repo.id}>
          <Link to={`/${username}/${repo.name}`}>{repo.name}</Link>
        </div>
      ))}
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
