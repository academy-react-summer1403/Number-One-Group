import React from 'react'

const CreateSocialMediaItems = ({ Icon, style }) => {
    return (
        <div className={`mt-2 w-8 h-8 rounded-full border border-neutral-500 flex justify-center items-center ${style}`}>
            {Icon}
        </div>
    )
}

export default CreateSocialMediaItems
