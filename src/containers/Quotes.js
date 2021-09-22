import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {this.props.quotes.map((quote, idx) =>
                 <QuoteCard quote={quote}
                   key={idx}
                   upvoteQuote={this.props.upVote}
                   downvoteQuote={this.props.downVote}/>
               )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    upVote: (quote) => dispatch(upvoteQuote(quote)),
    downVote: (quote) => dispatch(downvoteQuote(quote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);