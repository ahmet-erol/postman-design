import React from 'react'
import './Rightworkplace.css'
import { IoSaveOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";





function Rightworkplace() {
    return (
        <div className='top-main-div'>
            <div className='top-title-div'>
                <div className='top-left'>
                    <div className='http-logo'>
                        HTTP
                    </div>

                    <div className='texts'>
                        <div className='police-button'>
                            Poliçe İşlemleri
                        </div>
                        <div className='space-between-buttons'>
                            /
                        </div>

                        <div className='zeyil-button'>
                            Zeyil Sil
                        </div>
                    </div>

                </div>

                <div className='top-right'>
                    <div className='save-btn'>
                        <button className='save-btn-inside'>
                            <div className='save-icon'>
                                <IoSaveOutline />
                            </div>
                            <div className='save-text'>
                                Save
                            </div>
                        </button>
                        <button className='save-btn-down'>
                            <div className='save-down-icon'>
                                <FaAngleDown />
                            </div>
                        </button>
                    </div>

                    <div className='share-btn'>
                        <button className='share-btn-inside'>
                            Share
                        </button>

                    </div>


                </div>
            </div>
        </div>




    )
}

export default Rightworkplace
