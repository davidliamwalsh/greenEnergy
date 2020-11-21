import { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      rememberMe: false
    }
  }

  handleChange = (e) => {
    const input = e.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({
      [input.name]: value
    })
  }

  handleFormSubmit = () => {
    const { email, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe)
    localStorage.setItem('email', rememberMe ? email : '')
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    this.setState({ email, rememberMe })
  }

  render () {
    return  <div className='c-form'>
    <form onSubmit={this.handleFormSubmit} method="POST">
      <label className="c-form__label">Email Address</label>
      <input className="c-form__input border" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
      <div className="c-form__check">
        <input className="c-form__check--input" type="checkbox" name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} /><span className="c-form__check--span">Rembember this device</span>
      </div>
      <div className="c-form__submit">
        <input className="c-form__submit--button border" type="submit" value="Sign in" />
      </div>
    </form>
  </div>  
  }
}

export default Form