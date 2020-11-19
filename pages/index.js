import { Component } from 'react'

import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Intro from '../components/Intro'
import Form from '../components/Form'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <div className="c-modal section">
        <Logo />
        <Intro />
        <Form />
      </div>
    </Layout>
  }
}

export default Index