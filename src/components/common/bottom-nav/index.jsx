import React from 'react'
import LanguageButton from './LanguageButton'
import ThemeButton from './ThemeButton'
import ScrollToUpButton from './ScrollToUpButton'
import VoiceToText from './SpeechRecognition'
import SupportButton from './SupportButton'
import HelperButton from './HelperButton'

const BottomNav = () => {
    return (
        <>
            <div className="flex flex-col gap-3 fixed left-5 bottom-20 z-30">
                <HelperButton/>
                <VoiceToText />
                <ThemeButton />
                <LanguageButton />
                <span className='w-10 h-3 bottomNav_shadow'></span>
            </div>
            <div className='flex flex-col gap-3 fixed right-5 bottom-20 z-30'>
                <ScrollToUpButton />
                <SupportButton />
                <span className='w-10 h-3 bottomNav_shadow'></span>
            </div>
        </>
    )
}

export default BottomNav
