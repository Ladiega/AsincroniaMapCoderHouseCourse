/* eslint-disable react/prop-types */
import githublogo from '../../assets/github.svg'
import "./Header.css"


export default function Header({title}) {
  return (
    <div className='Header'>
      <h1>{title}</h1>
      <img src={githublogo } alt="githublogo" />

    </div>
  )
}

