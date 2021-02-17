import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    .quoteText{
        font-size: 2.6rem;
        color: white;
    }
    button{
        background-color: #2B7A78;
        margin-top: 1.5%;
        padding: 1%;
        border: none;
        color: #17252A;
        font-size: 1.2rem;
        border-radius: 3px;
        color: #DEF2F1;
        font-family: 'Rozha One', serif;
    }
    
`

const Quotes = ({ quote, isFetching, error, getQuote }) => {
  useEffect(() => {
    const timer= setTimeout(() => {
        getQuote();
    }, 3000)
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return <h2>Something went wrong: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Ron is busy saying cool stuff, please wait...</h2>;
  }

  const handleClick = ()=> {
    getQuote();
  }

  return (
    <Container>
        <div className="quote">
            
            <div className="quoteText">
                <h3>{quote}</h3>
            </div>
            <hr></hr>
        </div>
        <button onClick={handleClick}>What did Ron say?</button>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getQuote})(Quotes);