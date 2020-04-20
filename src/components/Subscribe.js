import React from 'react';
import { StyledSubscribe } from './styles/StyledSubscribe';

const Subscribe = () => (
  <StyledSubscribe>
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <form className='email-form'>
            <input
              className='email'
              type='text'
              name='email'
              placeholder='Want to get the latest news?'
            />
            <button type='submit'>Register Email</button>
          </form>
        </div>
      </div>
    </div>
  </StyledSubscribe>
);

export default Subscribe;
