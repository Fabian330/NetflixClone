import React from 'react'
import './Catalog.css'
import { cards_data } from '../../assets/cards/Cards_data'

const Catalog = () => {
  return (
    <div className='catalog'>
        <p>Popular on netflix</p>
        <div className="catalog-rows">
            {cards_data.map((item, index) => {
                return(
                    <div className='catalog-row' key={index}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
        <p>Only on netflix</p>
        <div className="catalog-rows">
            {cards_data.map((item, index) => {
                return(
                    <div className='catalog-row' key={index}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
        <p>What's new on netflix</p>
        <div className="catalog-rows">
            {cards_data.map((item, index) => {
                return(
                    <div className='catalog-row last' key={index}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Catalog