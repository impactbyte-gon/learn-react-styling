import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  text-align: center;
  color: black;
`

class App extends Component {
  render() {
    return (
      <Content>
        <h1>Hello World!</h1>
        <p>This is a sentence.</p>
      </Content>
    )
  }
}

export default App
