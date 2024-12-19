import React from 'react'

const PortfolioCard = ({ itemPortfolio, onShowDetail }) => {
    return (
        <div className='shadow px-6 py-6 rounded-md cursor-pointer transition-transform duration-200' onClick={() => onShowDetail(itemPortfolio)}>
            <img src={itemPortfolio.image} alt="" className='w-[350px] h-[200px] object-cover object-left rounded-md' />
            <p className='font-semibold mt-2'>{itemPortfolio.name}</p>
        </div>
    )
}

export default PortfolioCard;