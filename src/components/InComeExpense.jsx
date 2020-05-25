import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function InComeExpense() {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(item => item.amount)
    
    const inCome = amounts.filter(item => item > 0).reduce((acc, item) => (acc + item), 0).toFixed(2)
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc + item), 0) * -1 ).toFixed(2)
    return (
        <div className='inComeExpense'>
            <div className="inCome">
                <h4>收入</h4>
                <div className="inCome-num">￥{inCome}</div>
            </div>
            <div className="expense">
                <h4>支出</h4>
                <div className="expense-num">￥{expense}</div>
            </div>
        </div>
    )
}

export default InComeExpense
