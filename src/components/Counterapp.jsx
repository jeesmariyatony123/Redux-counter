import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

const Counterapp = () => {


    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)


    const handleIncrementByAmout = () => {
        if (amount) {
            dispatch(incrementByAmount(amount))
        } else {
            alert("Enter a valid amount")
        }
    }
    return (
        <div>
            <div className='bg-secondary ' style={{ height: "100vh" }}>
                <h1 className='text-center  pt-5 text-white'>Counter App</h1>
                <div className='d-flex justify-content-center' style={{ paddingTop: "6%"}}>

                    <div className='bg-dark w-50 text-center ' >
                        <div className='pb-5 text-white pt-4' style={{ fontSize: "5em"  }}>
                            <h1 style={{ fontSize: '100px' }}>{count}</h1>
                        </div>
                        <div>
                            <button onClick={() => dispatch(decrement())} className=' btn btn-warning mx-4'>Decrement</button>
                            <button onClick={() => dispatch(reset())} className=' btn btn-danger mx-4'>Reset</button>
                            <button onClick={() => dispatch(increment())} className=' btn btn-success mx-4'>Increment</button>
                        </div>

                        <div className=" mt-5 mb-5 d-flex justify-content-center">
                            <input onChange={e => setAmount(e.target.value)} type="text" className="form-control " style={{ width: "25vw", height: "6vh" }} placeholder="Enter the amount to be incremented!!!" />
                            <button onClick={handleIncrementByAmout} className="btn btn-primary mb-3 ms-3 py-2">Increment by Amount</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counterapp