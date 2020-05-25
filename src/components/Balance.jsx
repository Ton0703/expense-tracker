import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
     const { transactions } = useContext(GlobalContext)
     const amounts = transactions.map(item => item.amount)
     const total = amounts.reduce((rcc, item) => rcc + item, 0).toFixed(2)
    return (
        <div className='balance'>
            <h4>你的总收益</h4>
            <div className="number">
                ￥{total}
            </div>
        </div>
    )
}

export default Balance
