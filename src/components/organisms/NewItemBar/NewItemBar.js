import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Input from 'components/atoms/Input/Input.js'
import Button from 'components/atoms/Button/Button.js'
import withContext from 'hoc/withContext.js'
import Heading from 'components/atoms/Heading/Heading'
import { connect } from 'react-redux'
import { addItem as addItemAction } from 'reducers'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const StyledWrapper = styled.div`
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`
const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`

const StyledInput = styled(Input)`
  margin-top: 30px;
`

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{title: '', content: '', articleUrl: '', twitterName: '', created: ''}}
      onSubmit={(values) => {
        addItem({
          pageContext,
          content: {
            title: values.title,
            content: values.content
          }
        })
        handleClose()
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' && (
            <StyledInput
              placeholder="twitter name"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}

            />
          )}
          {pageContext === 'articles' && (
            <StyledInput 
              type="text"
              placeholder="link"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            as="textarea"
            name="content"
            placeholder="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button
            type="submit"
            activeColor={pageContext}
          >
          Add Note
          </Button>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
)

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool
}

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false
}

const MapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent))
})

export default connect(null, MapDispatchToProps)(withContext(NewItemBar))