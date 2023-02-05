import React, { Component } from 'react'

class Profile extends Component {
    render() {
        const { value } = this.props
        return (
            <>
                <div className='flex items-center justify-start gap-2 pt-2 font-tnr'>
                    <img className='rounded-full h-12 ml-1' src={value.avatar || null} alt="avatar" />
                    <div className='flex flex-col gap-1'>
                        <span className='font-bold'>{value.name || null}</span>
                        <div className='flex gap-1'>
                            <img className='run-icon' alt="run_icon" />
                            <span className=' font-light text-sm flex items-center min-w-280'>
                                {value.time || null} . {value.location || null}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='p-2 font-bold text-lg text-gray-600 font-tnr'>
                    {value.session || null}  {value.className || null}
                </div>
            </>
        )
    }
}

export default Profile