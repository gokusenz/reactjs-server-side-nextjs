import React from 'react'
import { Provider } from "react-redux";
import withRedux from 'next-redux-wrapper'
import { initStore } from "../stores";
import CommentList from '../containers/CommentList'
import * as listActions from "../actions/List";

class IndexPage extends React.Component {
  
  static async getInitialProps ({ store, req }) {
    const isServer = !!req;
    await store.dispatch(listActions.getAsyncLists());
    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.initialState);
  }

  render () {
    return (
      <Provider store={this.store}>
        <CommentList />
      </Provider>
    )
  }
}

export default withRedux(initStore)(IndexPage);
