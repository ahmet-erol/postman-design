import React from 'react'
import './Leftworkplace.css'
import { FaRegUser } from "react-icons/fa";


function Leftworkplace() {
    return (
        <div className='mainleft-div'>
            <div className='my-workspace'>
                <div className='left-user-logo'>
                    <FaRegUser />
                </div>

                <div className='left-myworkspace'>
                    My Workspace
                </div>

                <div>
                    <button type='button' className='left-newbutton'>
                        New
                    </button>

                    <button type='button' className='left-importbutton'>
                        Import
                    </button>
                </div>

            </div>



            <div className='options'>
                <div>
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




            <div className='services'>
                3
            </div>
        </div>

    )
}

export default Leftworkplace
