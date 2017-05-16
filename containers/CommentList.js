import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAsyncLists } from "../actions/List";
import CommentListComponent from 'components/CommentList'

class CommentList extends Component {  
  render () {
    const { lists } = this.props
    return (
      <CommentListComponent list={lists} />
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

const mapDispatchToProps = (dispatch) => {
  return {
    getAsyncLists: bindActionCreators(getAsyncLists, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
