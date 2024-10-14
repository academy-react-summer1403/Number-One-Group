import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getItem, setItem } from '../../../core/hooks/local-storage';

const LanguageButton = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (getItem('lang') === false) {
            setItem('lang', 'fa')
        }
    }, [])

    const onChangeLang = () => {
        if (getItem('lang') !== false) {
            if (getItem('lang') == 'fa') {
                i18n.changeLanguage("en");
                setItem('lang', 'en')
            } else {
                i18n.changeLanguage("fa");
                setItem('lang', 'fa')
            }
        }
    }
    return (
        <div defaultValue={"fa"} onClick={onChangeLang} className="bottomNav">
            <span>{getItem('lang') === false ? 'fa' : getItem('lang')}</span>
        </div>
    )
}

export default LanguageButton
