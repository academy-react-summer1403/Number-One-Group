import React, { useEffect, useState } from 'react'
import { menuItem } from '../../../core/constants/Header/headerData'
import MenuHeaderItems from './MenuHeaderItems'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Menu = () => {
    const { t, i18n } = useTranslation()
    const [isTrue, setIsTrue] = useState([])
    const [isFalse, setIsFalse] = useState([])

    useEffect(() => {
        if (isTrue.length === 0 || isFalse.length === 0) {
            setIsTrue(menuItem.filter(ev => ev.show === true))
            setIsFalse(menuItem.filter(ev => ev.show === false))
        }
    }, [menuItem])

    return (
        <div className='w-fit flex gap-x-6 items-center'>
            {isTrue.map((item, index) => (
                <MenuHeaderItems
                    key={index}
                    href={item.href}
                    title={item.title}
                />
            ))}
            <Dropdown>
                <DropdownTrigger className='hover:text-VioletBlue cursor-pointer duration-200'>
                    صفحات دیگر
                </DropdownTrigger>
                <DropdownMenu
                    dir={i18n.language != "en" ? "rtl" : "ltr"}
                    aria-label="Dynamic Actions"
                    items={isFalse}
                >
                    {(menuItem) => (
                        <DropdownItem
                            key={menuItem.key}
                        >
                            <Link
                                to={menuItem.href}
                                className="font-IranSans w-full h-full"
                                style={{ display: "block" }}
                            >
                                {t(menuItem.title)}
                            </Link>
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default Menu
