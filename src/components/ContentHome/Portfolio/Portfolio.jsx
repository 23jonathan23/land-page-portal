import React from 'react'

import './Portfolio.css'

import PortfolioItem from './PortfolioItem/PortfolioItem'

export default props => {
  return (
    <section id='portfolio'>
      <div className='container text-center'>
        <div className='row row-margin-portfolio'>
          <div className='text-portfolio col-sm-10 col-sm-offset-1 col-md-12'>
            <h3>Alguns dos nossos trabalhos</h3>
          </div>
        </div>
      </div>
      <div className='container-publication'>
        <div className='row portfolio-items'>
          <PortfolioItem />
        </div>
      </div>
    </section>
  )
}
