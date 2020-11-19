import { Component } from 'react'

import GreenLogo from '../static/logo-r.svg'

class Logo extends Component {
  render () {
    return <div className='c-logo'>
      <img src={GreenLogo} alt=""/> 
    </div>
  }
}

export default Logo