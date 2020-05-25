import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {
    const { transactions, dispatch } = useContext(GlobalContext)
    const handleDelete = id => {
        dispatch({
            type: 'DELETE', 
            payload: id
        })
    }
    const sign = item => item < 0 ? '-' : '+'
    return (
        <div className='transation'>
            <h4>记录</h4>
            <ul className='list'>
                {transactions.map((item, index) => (
                    <li className={item.amount < 0 ? 'minus' : 'plus'} key={index}>
                    {item.text}
                    <span>
                        {sign(item.amount)}￥{Math.abs(item.amount)}
                    </span>
                    <div className="delete" onClick={() => handleDelete(item.id)}>
                        <span>x</span>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList