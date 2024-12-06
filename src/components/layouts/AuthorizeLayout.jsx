// packages
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Tooltip } from '@nextui-org/react';
import { AdminIcon, ExitBtnPanelIcon, HomeBtnPanelIcon } from '../../core/icon';
import tooltipStyle from '../../core/constants/tooltip-style';
import ParticlesBackground from '../../core/utility/Particles'
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../common';
import { useDispatch } from 'react-redux';
import { clearAction } from '../../redux/slices/StepStatus';

const AuthorizeLayout = () => {
    const { t, i18n } = useTranslation()
    const persianWords = ["یادگیری", "تلاش", "استقامت"]
    const englishWords = ["Learning", "Effort", "Stamina"]
    const [vector, setVector] = useState("")
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(clearAction())
    }, [location.pathname])

    return (
        <>
            {/* <LoadingSpinner /> */}
            <div className='w-full h-svh max-h-svh lg:px-44 sm:px-16 px-8 flex justify-center xl:justify-start items-center'>
                <ParticlesBackground />
                <div className='relative xl:w-full sm:h-[590px] flex justify-between rounded-[50px] bg-white/50 dark:bg-black/30'>
                    <div className={`authorizeForm ${i18n.language == "en" ? "authorizePanel_shadow_en" : "authorizePanel_shadow_fa"}`}>
                        <Outlet context={{ setVector: setVector }} />
                    </div>
                    <div className='relative hidden w-full h-full xl:flex flex-wrap justify-end rounded-e-[50px] py-28 px-10'>
                        <div className='w-full'>
                            <div className='w-full flex items-center justify-between -mt-16 mb-8'>
                                <Link to={"/authorize/login"} className='flex gap-x-2 items-center text-[#161439] px-4 rounded-full py-1 bg-[#5751E1]'>
                                    <ExitBtnPanelIcon className="stroke-[#161439]" />
                                    {t("loginBtn")}
                                </Link>
                                <div className='flex gap-x-3 items-center'>
                                    <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Admin" : "ادمین"}>
                                        <Link>
                                            <AdminIcon fill="#050079" />
                                        </Link>
                                    </Tooltip>
                                    <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Home" : "خانه"}>
                                        <Link to="/">
                                            <HomeBtnPanelIcon fill="#050079" />
                                        </Link>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start flex-wrap h-fit gap-y-4 md:gap-x-3 items-end">
                                <h1 className='boldStyle_text w-full text-nowrap text-center md:w-auto'>{t("heroSectionTitle1")}</h1>
                                <h1 className='importantWord py-1'>
                                    <Typewriter
                                        options={{
                                            strings: (i18n.language === "en" ? englishWords : persianWords),
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </div>
                            <h1 className='boldStyle_text md:text-start text-center h-[72px]'>{t("heroSectionTitle2")}</h1>
                        </div>
                        <img className={`w-[350px] h-[350px] ${i18n.language != "en" && "reverse-img"}`} src={vector} alt="Vector" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorizeLayout
