import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { dispatch } = useContext(GlobalContext)

    const handleSubmit = (e) => {
          e.preventDefault()
          const newTransction = {
              id: Math.floor(Math.random() * 10000),
              text,
              amount: parseInt(amount)
          }
          text !=='' && dispatch({
              type: 'ADD',
              payload: newTransction
          })
          setText('')
          setAmount(0)
    }
    return (
        <div className='add'>
            <h4>添加新的交易记录</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='text'>名称</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='商品名称' />
                </div>
                <div className="form-control">
                    <label htmlFor='amount'>金额</label>
                    <input type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder='金额' />
                </div>
                <button>添加</button>
            </form>
        </div>
    )
}

export default AddTransaction
