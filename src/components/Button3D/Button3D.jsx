import React from 'react'
import './Button3D.css'

const Button3D = () => {
    return (
        <div className='container'>
            <a href='#' className="button">
                <div className="plate"></div>
                <div className="plate"></div>
                <div className="plate"></div>
                <div className="plate"></div>
                <div className="plate"></div>
                <div className="button__wrapper">
                    <span className="button__text">ENTRY</span>
                </div>
                <div className="button__box">
                    <div className="inner inner__top"></div>
                    <div className="inner inner__front"></div>
                    <div className="inner inner__bottom"></div>
                    <div className="inner inner__back"></div>
                    <div className="inner inner__left"></div>
                    <div className="inner inner__right"></div>
                </div>
            </a>
        </div>
    )
}

export default Button3D
