import { Component } from 'react'

class Form extends Component {
  render () {
    return <div className='c-form'>
      <form action="#" method="post">
        <label className="c-form__label" htmlFor="Email">Email Address</label>
        <input className="c-form__input border" type="email" />
        <div className="c-form__check">
          <input className="c-form__check--input" type="checkbox" value="rememberdevice" /><span className="c-form__check--span">Rembember this device</span>
        </div>
        <div className="c-form__submit">
          <input className="c-form__submit--button border" type="submit" defaultValue="Sign in" />
        </div>
      </form>
    </div>
  }
}

export default Form