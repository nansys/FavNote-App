import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import GridTemplate from 'templates/GridTemplate.js'
import Card from 'components/molecules/Card/Card.js'
import { fetchItemsAction } from 'actions/fetchItems.js'

class Twitters extends React.Component {

  componentDidMount() {
    this.props.fetchTwitters()
  }

  render(){

    const { twitters } = this.props
    return (
    <GridTemplate pageType="twitters">
      {twitters.map(item => (
        <Card cardType="twitters" key={item._id} {...item} />
      ))}
    </GridTemplate>
    )
  }

}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired
    })
  )
}

const mapStateToProps = ({ twitters }) => {
  return { twitters }
}

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItemsAction('twitters'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Twitters)