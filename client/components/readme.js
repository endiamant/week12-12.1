import React from 'react'
import ReactMarkdown from 'react-markdown'

const Readme = (props) => {
  return <ReactMarkdown id="description" source={props.readme} />
}

Readme.propTypes = {}

export default React.memo(Readme)
