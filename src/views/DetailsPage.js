import React from 'react'
import { useParams } from 'react-router-dom'

import { routes } from 'routes'
import DetailsTemplate from 'templates/DetailsTemplate.js'
import withContext from 'hoc/withContext.js'
import { connect } from 'react-redux'
import axios from 'axios'


class DetailPage extends React.Component {

  state = {
    pageContext: 'notes',
    content: {
      
    },
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: ''
    }
  }

  componentDidMount() {
   
    if(this.props.activeItem){
      const { activeItem } = this.props.activeItem
      this.setState({ activeItem })
    } else {
      const { id } = useParams()

      if(!item) {
        axios.get(`http://localhost:9000/api/note/${id}`)
          .then(({ data }) => {
            this.setState({ activeItem: data})
          })
          .catch(e => console.log(e.message))
      }
    }

    switch (this.props.pageContext) {
      case routes.notes:
        this.setState({pageContext: 'notes'})
        break
      case routes.twitter:
        this.setState({pageContext: 'twitters'})
        break
      case routes.article:
        this.setState({pageContext: 'articles'})
        break
    }
  }
  
  render() {

    const { activeItem } = this.props
    const [item] = activeItem

    return (
      <DetailsTemplate
        pageType={this.state.pageContext}
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        twitterLink={item.twitterName}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  
  const { id } = useParams()

  if(state[ownProps.pageType]){
    return {
      activeItem: state[ownProps.pageType].filter(item => item._id === id)
    }
  }
  
}

export default withContext(connect(mapStateToProps)(DetailPage))