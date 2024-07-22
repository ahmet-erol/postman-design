import React from 'react'
import './Leftworkplace.css'
import { FaRegUser } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { RiHistoryFill } from "react-icons/ri";





function Leftworkplace() {
    return (
        <div className='mainleft-div'>
            <div className='my-workspace'>

                <div className='workspace-left'>

                    <div className='left-user-logo'>
                        <FaRegUser className='workspace-logo' />
                        <div className='myworkspace-texting'>
                            My Workspace
                        </div>
                    </div>
                </div>


                <div className='workspace-right'>
                    <div className='.left-newbutton'>
                        <button type='button' className='left-newbutton-inside'>
                            New
                        </button>
                    </div>
                    <div className='left-importbutton'>
                        <button type='button' className='left-importbutton-inside'>
                            Import
                        </button>
                    </div>

                </div>


            </div>



            <div className='options'>
                <div className='options-buttons-left acordionleft'>
                    <button className='left-collections-button'>
                        <BsCollection className='collections-but' />
                        Collections
                    </button>

                    <button className='left-environments-button'>
                        <CiBoxes className='envi-but' />
                        Environments
                    </button>

                    <button className='left-history-button'>
                        <RiHistoryFill className='history-but' />
                        History
                    </button>
                </div>


                <div className='options-buttons acordionmenu'>
                    <button className='left-collections-button'>
                        Collections
                    </button>
                    <button className='left-environments-button'>
                        Environments
                    </button>
                    <button className='left-history-button'>
                        History
                    </button>
                    <button className='left-collections-button'>
                        Collections
                    </button>
                    <button className='left-environments-button'>
                        Environments
                    </button>
                    <button className='left-history-button'>
                        History
                    </button>
                    <button className='left-collections-button'>
                        Collections
                    </button>
                    <button className='left-environments-button'>
                        Environments
                    </button>
                    <button className='left-history-button'>
                        History
                    </button>
                </div>
            </div>

        </div >


    )
}

export default Leftworkplace
