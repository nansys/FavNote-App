import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import GridTemplate from 'templates/GridTemplate.js'
import Card from 'components/molecules/Card/Card.js'

const Articles = () => {

  const { articles } = useSelector(({ articles }) => ({ articles }))

  return (
    <GridTemplate pageType="articles">
    {articles.map(item => (
      <Card cardType="articles" key={item.id} {...item} />
    ))}
  </GridTemplate>
  )
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      cardType: PropTypes.string.isRequired
    })
  )
}

export default Articles