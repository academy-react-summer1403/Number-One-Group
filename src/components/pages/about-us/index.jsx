import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { BreadCrumb, TitleSection } from '../../partials/title-section'
import { HowToStart, InformedPoster } from '../../common'
import MoreInfoAboutUs from './MoreInfoAboutUs'
import WhatWeOffer from './WhatWeOffer'
import OurTestimonials from './OurTestimonials'
import configVariants from '../../../config/page-transition'
import { motion } from 'framer-motion'

const AboutWrapper = () => {
    const { t } = useTranslation()

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={t("aboutTitle")}>
                <BreadCrumb type="Div" text={t("aboutTitle")} />
            </TitleSection>
            <MoreInfoAboutUs />
            <WhatWeOffer />
            <InformedPoster />
            <HowToStart requestSection="hide" />
            <OurTestimonials />
        </motion.div>
    )
}

export default AboutWrapper
