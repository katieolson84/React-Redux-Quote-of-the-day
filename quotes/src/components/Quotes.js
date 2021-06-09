import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';
import styled from 'styled-components';

const Container = styled.div`
    width: 85%;
    .quoteText{
        font-size: 1.8rem;
        color: white;

    }
    button{
        background-color: #2B7A78;
        position: fixed;
        padding: 1.2rem;
        border: none;
        font-size: 1.1rem;
        border-radius: 3px;
        color: #DEF2F1;
        font-family: 'Rozha One', serif;
        left: 50%;
        top: 50%;
        margin-top: 130px;
        margin-left: -80px;
        cursor: pointer;
        
        .wait{
          color: white;
        }
    }
    @media (min-width: 1024px){
      width: 80%;
      .quoteText{
        font-size: 2.8rem;
      }
      button{
        left: 46%;
        font-size: 1.8rem;
        top: 50%;
      }
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

  // if (isFetching) {
  //   return <h2 className="wait">Ron is busy saying cool stuff, please wait...</h2>;
  // }

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
        <div>
        <button onClick={handleClick}>What did Ron say?</button>
        </div>
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
