import React from 'react'
import LanguageButton from './LanguageButton'
import ThemeButton from './ThemeButton'
import ScrollToUpButton from './ScrollToUpButton'
import VoiceToText from './SpeechRecognition'

const BottomNav = () => {
    return (
        <>
            <div className="flex flex-col gap-3 fixed left-5 bottom-20 z-30">
                <VoiceToText />
                <ThemeButton />
                <LanguageButton />
                <span className='w-10 h-3 bottomNav_shadow'></span>
            </div>
            <div className='fixed right-5 bottom-20 z-30'>
                <ScrollToUpButton />
            </div>
        </>
    )
}

export default BottomNav
