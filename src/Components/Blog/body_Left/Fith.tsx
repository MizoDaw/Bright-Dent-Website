import { Divider } from 'antd'
import React from 'react'
import useImageError from '../../../Hooks/useImageError'

const Fith = () => {
    return (
        <div className='Fith'>
            <Divider />
            <span>
                <span>Tags: </span>
                <div>
                    <span>Care</span>
                    <span>Face</span>
                    <span>Health</span>
                    <span>Laboratory</span>
                    <span>Lens</span>
                </div>
            </span>
            <Divider />
                <div className='User'>
                    <img src="../Blog/User.png" onError={useImageError} alt="" />
                    Bright Dent
                </div>

            <Divider />


        </div>
    )
}

export default Fith