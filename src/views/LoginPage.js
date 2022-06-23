import React from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from 'routes'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import Button from 'components/atoms/Button/Button.js'
import Heading from 'components/atoms/Heading/Heading.js'
import Input from 'components/atoms/Input/Input.js'
import AuthTemplate from 'templates/AuthTemplate.js'
import { connect } from 'react-redux'
import { authAction } from 'actions/authenticate.js'

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`

class LoginPage extends React.Component {

  render(){
    const { userID, authenticate } = this.props
    if(userID){
      return <Navigate to={routes.home} />
    }
    return(
      <AuthTemplate>
      <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={(value) => {
        authenticate(value)
      }}
      >
      {({ handleChange, handleBlur, values }) => (
        <StyledForm>
          <Heading>{userID}</Heading>
          <Heading>Sing in</Heading>
          <StyledInput
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}

          />
           <StyledInput
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <Button type="submit">sign in</Button>
        </StyledForm>
      )}
    </Formik>
    </AuthTemplate>
    )
  }

}

const mapStateToProps = ({ userID = null }) => ({
  userID,

})

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authAction(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)