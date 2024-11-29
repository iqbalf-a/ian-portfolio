import React from 'react'

const PortfolioCard = ({ itemPortfolio, onShowDetail }) => {
    return (
        <div className='shadow-sm px-4 py-2 rounded-md cursor-pointer hover:scale-[1.01] transition-transform duration-200' onClick={() => onShowDetail(itemPortfolio)}>
            <img src={itemPortfolio.image} alt="" className='w-[350px] h-[200px] object-cover object-left rounded-md' />
            <p className='font-semibold mt-2'>{itemPortfolio.name}</p>
            <p></p>
        </div>
    )
}

export default PortfolioCard;