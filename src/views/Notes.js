import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import GridTemplate from 'templates/GridTemplate.js'
import Card from 'components/molecules/Card/Card.js'

const Notes = () => {

  const { notes } = useSelector(({ notes }) => ( { notes }))

  return (
    <GridTemplate pageType="notes">
    {notes.map(item => (
      <Card cardType="notes" key={item.id} {...item} />
    ))}
  </GridTemplate>
  )
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired
    })
  )
}

export default Notes