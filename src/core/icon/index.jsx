export function MenuIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-list" viewBox="0 0 16 16" {...props}>
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
    )
}

export function CartIcon(props) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#7F7E97" {...props} />
            <g clipPath="url(#clip0_151_427)">
                <path d="M29.4853 17.2598C29.2241 16.9321 28.8323 16.7442 28.4102 16.7442H24.6011L22.5355 12.0145C22.4075 11.7212 22.0659 11.5872 21.7726 11.7154C21.4793 11.8434 21.3454 12.185 21.4735 12.4783L23.3365 16.7442H16.4425L18.3055 12.4783C18.4335 12.185 18.2996 11.8435 18.0063 11.7154C17.7131 11.5872 17.3715 11.7212 17.2434 12.0145L15.1779 16.7442H11.3687C10.9466 16.7442 10.5548 16.9321 10.2936 17.2598C10.0372 17.5816 9.94264 17.9951 10.0341 18.3946L12.0682 27.2797C12.2103 27.9001 12.7591 28.3334 13.4029 28.3334H26.376C27.0198 28.3334 27.5686 27.9001 27.7107 27.2797L29.7449 18.3946C29.8363 17.9951 29.7417 17.5815 29.4853 17.2598ZM26.376 27.1745H13.4029C13.3045 27.1745 13.2183 27.1099 13.198 27.021L11.1638 18.136C11.1478 18.0663 11.1746 18.0138 11.1999 17.9821C11.2234 17.9526 11.2766 17.9031 11.3687 17.9031H14.6718L14.52 18.2507C14.3919 18.544 14.5258 18.8855 14.8191 19.0136C14.8946 19.0466 14.9733 19.0622 15.0507 19.0622C15.2741 19.0622 15.4869 18.9323 15.582 18.7146L15.9364 17.9032H23.8426L24.197 18.7146C24.2921 18.9324 24.505 19.0622 24.7283 19.0622C24.8057 19.0622 24.8844 19.0466 24.9599 19.0136C25.2532 18.8856 25.3871 18.544 25.259 18.2507L25.1073 17.9031H28.4103C28.5024 17.9031 28.5556 17.9526 28.5791 17.9821C28.6044 18.0139 28.6312 18.0663 28.6152 18.136L26.5811 27.0211C26.5607 27.1099 26.4744 27.1745 26.376 27.1745Z" fill="#7F7E97" />
                <path d="M16.4125 20.4141C16.0925 20.4141 15.833 20.6735 15.833 20.9935V25.2429C15.833 25.5629 16.0925 25.8224 16.4125 25.8224C16.7325 25.8224 16.9919 25.5629 16.9919 25.2429V20.9935C16.9919 20.6735 16.7325 20.4141 16.4125 20.4141Z" fill="#7F7E97" />
                <path d="M19.8895 20.4141C19.5695 20.4141 19.3101 20.6735 19.3101 20.9935V25.2429C19.3101 25.5629 19.5695 25.8224 19.8895 25.8224C20.2095 25.8224 20.4689 25.5629 20.4689 25.2429V20.9935C20.4689 20.6735 20.2095 20.4141 19.8895 20.4141Z" fill="#7F7E97" />
                <path d="M23.366 20.4141C23.046 20.4141 22.7866 20.6735 22.7866 20.9935V25.2429C22.7866 25.5629 23.046 25.8224 23.366 25.8224C23.6861 25.8224 23.9455 25.5629 23.9455 25.2429V20.9935C23.9455 20.6735 23.6861 20.4141 23.366 20.4141Z" fill="#7F7E97" />
            </g>
            <defs>
                <clipPath id="clip0_151_427">
                    <rect width="20" height="18" fill="white" transform="translate(10 11)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function FavoriteIcon(props) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="0.5" y="0.5" width="39px" height="39px" rx="19.5" stroke="#7F7E97" {...props} />
            <g clipPath="url(#clip0_151_422)">
                <path d="M19.7554 13.6113L18.7914 12.6205C16.5287 10.2946 12.3798 11.0972 10.8821 14.0214C10.1789 15.3968 10.0203 17.3825 11.3042 19.9168C12.5411 22.3569 15.1144 25.2797 19.7554 28.4634C24.3964 25.2797 26.9683 22.3569 28.2065 19.9168C29.4905 17.3812 29.3332 15.3968 28.6287 14.0214C27.131 11.0972 22.982 10.2933 20.7193 12.6191L19.7554 13.6113ZM19.7554 30.0834C-0.858929 16.4616 13.4083 5.82972 19.5188 11.4535C19.5994 11.5275 19.6787 11.6041 19.7554 11.6834C19.8312 11.6042 19.9102 11.5279 19.992 11.4549C26.1011 5.82703 40.3697 16.4602 19.7554 30.0834Z" fill="#7F7E97" />
            </g>
            <defs>
                <clipPath id="clip0_151_422">
                    <rect width="22" height="22" fill="white" transform="translate(9 9)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function FacebookIcon(props) {
    return (
        <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_151_484)">
                <path d="M5 6.39772V4.34036C5 3.77253 5.448 3.31169 6 3.31169H7V0.73999H5C3.343 0.73999 2 2.12151 2 3.82602V6.39772H0V8.96942H2V17.1989H5V8.96942H7L8 6.39772H5Z" fill="#666" {...props} />
            </g>
            <defs>
                <clipPath id="clip0_151_484">
                    <rect width="8" height="17" fill="white" transform="translate(0 0.73999)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function TwitterIcon(props) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_151_486)">
                <path d="M16 2.42867C15.405 2.71505 14.771 2.90488 14.11 2.99705C14.79 2.55156 15.309 1.85151 15.553 1.00772C14.919 1.42248 14.219 1.71545 13.473 1.87894C12.871 1.1756 12.013 0.73999 11.077 0.73999C9.261 0.73999 7.799 2.35735 7.799 4.34009C7.799 4.62538 7.821 4.89969 7.875 5.16084C5.148 5.0149 2.735 3.58079 1.114 1.39615C0.831 1.9349 0.665 2.55156 0.665 3.2154C0.665 4.46189 1.25 5.56682 2.122 6.20652C1.595 6.19555 1.078 6.02767 0.64 5.76323C0.64 5.7742 0.64 5.78847 0.64 5.80273C0.64 7.55176 1.777 9.00453 3.268 9.33919C3.001 9.41929 2.71 9.4577 2.408 9.4577C2.198 9.4577 1.986 9.44453 1.787 9.39625C2.212 10.8216 3.418 11.8695 4.852 11.9035C3.736 12.8614 2.319 13.4386 0.785 13.4386C0.516 13.4386 0.258 13.4254 0 13.3892C1.453 14.4173 3.175 15.0043 5.032 15.0043C11.068 15.0043 14.368 9.51805 14.368 4.76253C14.368 4.60343 14.363 4.44982 14.356 4.2973C15.007 3.79036 15.554 3.15725 16 2.42867Z" fill="#666" {...props} />
            </g>
            <defs>
                <clipPath id="clip0_151_486">
                    <rect width="16" height="15" fill="white" transform="translate(0 0.73999)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function WhatsAppIcon(props) {
    return (
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_151_488)">
                <path d="M7.50187 0.73999H7.49813C3.36281 0.73999 0 4.10374 0 8.23999C0 9.88061 0.52875 11.4013 1.42781 12.6359L0.493125 15.4222L3.37594 14.5006C4.56187 15.2863 5.97656 15.74 7.50187 15.74C11.6372 15.74 15 12.3753 15 8.23999C15 4.10468 11.6372 0.73999 7.50187 0.73999ZM11.8659 11.3309C11.685 11.8419 10.9669 12.2656 10.3941 12.3894C10.0022 12.4728 9.49031 12.5394 7.76719 11.825C5.56312 10.9119 4.14375 8.67218 4.03312 8.52686C3.92719 8.38155 3.1425 7.34093 3.1425 6.26468C3.1425 5.18843 3.68906 4.66437 3.90938 4.43937C4.09031 4.25468 4.38937 4.1703 4.67625 4.1703C4.76906 4.1703 4.8525 4.17499 4.9275 4.17874C5.14781 4.18811 5.25844 4.20124 5.40375 4.54905C5.58469 4.98499 6.02531 6.06124 6.07781 6.17187C6.13125 6.28249 6.18469 6.43249 6.10969 6.5778C6.03938 6.7278 5.9775 6.79436 5.86687 6.92186C5.75625 7.04936 5.65125 7.14687 5.54062 7.28374C5.43937 7.4028 5.325 7.5303 5.4525 7.75062C5.58 7.96624 6.02063 8.6853 6.66937 9.2628C7.50656 10.0081 8.18531 10.2462 8.42812 10.3475C8.60906 10.4225 8.82469 10.4047 8.95687 10.2641C9.12469 10.0831 9.33187 9.78312 9.54281 9.4878C9.69281 9.27593 9.88219 9.24968 10.0809 9.32468C10.2834 9.39499 11.355 9.92468 11.5753 10.0344C11.7956 10.145 11.9409 10.1975 11.9944 10.2903C12.0469 10.3831 12.0469 10.8191 11.8659 11.3309Z" fill="#666" {...props} />
            </g>
            <defs>
                <clipPath id="clip0_151_488">
                    <rect width="15" height="15" fill="white" transform="translate(0 0.73999)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function InstagramIcon(props) {
    return (
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_151_490)">
                <path d="M10.3125 0.73999H4.6875C2.09906 0.73999 0 2.83905 0 5.42749V11.0525C0 13.6409 2.09906 15.74 4.6875 15.74H10.3125C12.9009 15.74 15 13.6409 15 11.0525V5.42749C15 2.83905 12.9009 0.73999 10.3125 0.73999ZM13.5938 11.0525C13.5938 12.8619 12.1219 14.3338 10.3125 14.3338H4.6875C2.87813 14.3338 1.40625 12.8619 1.40625 11.0525V5.42749C1.40625 3.61812 2.87813 2.14624 4.6875 2.14624H10.3125C12.1219 2.14624 13.5938 3.61812 13.5938 5.42749V11.0525Z" fill="#666" {...props} />
                <path d="M7.5 4.48999C5.42906 4.48999 3.75 6.16905 3.75 8.23999C3.75 10.3109 5.42906 11.99 7.5 11.99C9.57094 11.99 11.25 10.3109 11.25 8.23999C11.25 6.16905 9.57094 4.48999 7.5 4.48999ZM7.5 10.5837C6.20813 10.5837 5.15625 9.53186 5.15625 8.23999C5.15625 6.94718 6.20813 5.89624 7.5 5.89624C8.79187 5.89624 9.84375 6.94718 9.84375 8.23999C9.84375 9.53186 8.79187 10.5837 7.5 10.5837Z" fill="#666" {...props} />
                <path d="M11.5314 4.70849C11.8073 4.70849 12.0311 4.48477 12.0311 4.2088C12.0311 3.93283 11.8073 3.70911 11.5314 3.70911C11.2554 3.70911 11.0317 3.93283 11.0317 4.2088C11.0317 4.48477 11.2554 4.70849 11.5314 4.70849Z" fill="#B2BBCC" {...props} />
            </g>
            <defs>
                <clipPath id="clip0_151_490">
                    <rect width="15" height="15" fill="white" transform="translate(0 0.73999)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function YouTubeIcon(props) {
    return (
        <svg width="18" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_151_494)">
                <path d="M20.1075 2.32602C19.5379 1.17091 18.9197 0.958444 17.661 0.877646C16.4036 0.780389 13.2418 0.73999 10.5026 0.73999C7.75819 0.73999 4.59506 0.780389 3.339 0.87615C2.08294 0.958444 1.46344 1.16942 0.888563 2.32602C0.301875 3.47964 0 5.46667 0 8.96493C0 8.96792 0 8.96942 0 8.96942C0 8.97241 0 8.97391 0 8.97391V8.9769C0 12.4602 0.301875 14.4622 0.888563 15.6038C1.46344 16.759 2.08162 16.9684 3.33769 17.0657C4.59506 17.1495 7.75819 17.1989 10.5026 17.1989C13.2418 17.1989 16.4036 17.1495 17.6623 17.0672C18.921 16.9699 19.5392 16.7604 20.1088 15.6053C20.7008 14.4637 21 12.4617 21 8.97839C21 8.97839 21 8.97391 21 8.97091V8.96642C21 5.46667 20.7008 3.47964 20.1075 2.32602ZM7.875 13.4582V4.48064L14.4375 8.96942L7.875 13.4582Z" fill="#666" {...props} />
            </g>
            <defs>
                <clipPath id="clip0_151_494">
                    <rect width="21" height="17" fill="white" transform="translate(0 0.73999)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function SearchIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="48px" height="48px" {...props}>
            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                <g transform="scale(5.33333,5.33333)">
                    <path d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z">
                    </path>
                </g>
            </g>
        </svg>
    )
}

export function ArrowIcon(props) {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M9.66675 1.10667C9.66675 0.982222 9.63564 0.865556 9.57341 0.756667C9.51119 0.647778 9.42564 0.577778 9.31675 0.546667C9.20786 0.515556 9.09119 0.507778 8.96675 0.523333C8.8423 0.538889 8.74897 0.593333 8.68675 0.686667L5.00008 4.32667L1.31341 0.686667C1.22008 0.562222 1.08786 0.5 0.916748 0.5C0.745637 0.5 0.605637 0.554444 0.496748 0.663333C0.387859 0.772222 0.333415 0.912222 0.333415 1.08333C0.333415 1.25444 0.395637 1.38667 0.520082 1.48L4.58008 5.58667C4.70453 5.68 4.84453 5.72667 5.00008 5.72667C5.15564 5.72667 5.29564 5.68 5.42008 5.58667L9.48008 1.48C9.60453 1.38667 9.66675 1.24667 9.66675 1.06V1.10667Z" fill={props.fill} />
        </svg>
    )
}

export function CategoryIcon(props) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_26_344)">
                <path d="M6.22939 11.7778C6.59757 11.7778 6.89605 12.0763 6.89605 12.4445C6.89605 12.8126 6.59757 13.1111 6.22939 13.1111V11.7778ZM0.896053 13.1111C0.527876 13.1111 0.229387 12.8126 0.229387 12.4445C0.229387 12.0763 0.527876 11.7778 0.896053 11.7778V13.1111ZM2.89605 9.77778C2.89605 9.40961 3.19454 9.11112 3.56272 9.11112C3.9309 9.11112 4.22939 9.40961 4.22939 9.77778H2.89605ZM4.22939 15.1111C4.22939 15.4793 3.9309 15.7778 3.56272 15.7778C3.19454 15.7778 2.89605 15.4793 2.89605 15.1111H4.22939ZM6.22939 13.1111H3.56272V11.7778H6.22939V13.1111ZM0.896053 11.7778H3.56272V13.1111H0.896053V11.7778ZM2.89605 12.4445V9.77778H4.22939V12.4445H2.89605ZM4.22939 12.4445V15.1111H2.89605V12.4445H4.22939ZM14.4445 5.6889V1.42223H15.7778V5.6889H14.4445ZM14.4445 1.42223C14.4445 1.45759 14.4585 1.49151 14.4835 1.51651L15.4264 0.573701C15.6514 0.798745 15.7778 1.10397 15.7778 1.42223H14.4445ZM14.4835 1.51651C14.5086 1.54152 14.5425 1.55556 14.5778 1.55556V0.222229C14.8961 0.222229 15.2013 0.348657 15.4264 0.573701L14.4835 1.51651ZM14.5778 1.55556H10.3112V0.222229H14.5778V1.55556ZM10.3112 1.55556C10.3465 1.55556 10.3804 1.54152 10.4054 1.51651L9.46264 0.573701C9.68768 0.348657 9.99291 0.222229 10.3112 0.222229V1.55556ZM10.4054 1.51651C10.4305 1.4915 10.4445 1.45759 10.4445 1.42223H9.11117C9.11117 1.10397 9.23759 0.798745 9.46264 0.573701L10.4054 1.51651ZM10.4445 1.42223V5.6889H9.11117V1.42223H10.4445ZM10.4445 5.6889C10.4445 5.65354 10.4305 5.61962 10.4054 5.59461L9.46264 6.53742C9.23759 6.31238 9.11117 6.00715 9.11117 5.6889H10.4445ZM10.4054 5.59461C10.3804 5.56961 10.3465 5.55556 10.3112 5.55556V6.8889C9.99291 6.8889 9.68768 6.76247 9.46264 6.53742L10.4054 5.59461ZM10.3112 5.55556H14.5778V6.8889H10.3112V5.55556ZM14.5778 5.55556C14.5425 5.55556 14.5086 5.56961 14.4835 5.59461L15.4264 6.53742C15.2013 6.76247 14.8961 6.8889 14.5778 6.8889V5.55556ZM14.4835 5.59461C14.4585 5.61962 14.4445 5.65354 14.4445 5.6889H15.7778C15.7778 6.00715 15.6514 6.31238 15.4264 6.53742L14.4835 5.59461ZM14.4445 14.5778V10.3111H15.7778V14.5778H14.4445ZM14.4445 10.3111C14.4445 10.3465 14.4585 10.3804 14.4835 10.4054L15.4264 9.46258C15.6514 9.68765 15.7778 9.9929 15.7778 10.3111H14.4445ZM14.4835 10.4054C14.5086 10.4304 14.5425 10.4445 14.5778 10.4445V9.11112C14.8961 9.11112 15.2013 9.23752 15.4264 9.46258L14.4835 10.4054ZM14.5778 10.4445H10.3112V9.11112H14.5778V10.4445ZM10.3112 10.4445C10.3465 10.4445 10.3804 10.4304 10.4054 10.4054L9.46264 9.46258C9.68768 9.23752 9.99291 9.11112 10.3112 9.11112V10.4445ZM10.4054 10.4054C10.4305 10.3804 10.4445 10.3465 10.4445 10.3111H9.11117C9.11117 9.9929 9.23759 9.68765 9.46264 9.46258L10.4054 10.4054ZM10.4445 10.3111V14.5778H9.11117V10.3111H10.4445ZM10.4445 14.5778C10.4445 14.5424 10.4305 14.5085 10.4054 14.4835L9.46264 15.4263C9.23759 15.2013 9.11117 14.896 9.11117 14.5778H10.4445ZM10.4054 14.4835C10.3804 14.4585 10.3465 14.4445 10.3112 14.4445V15.7778C9.99291 15.7778 9.68768 15.6514 9.46264 15.4263L10.4054 14.4835ZM10.3112 14.4445H14.5778V15.7778H10.3112V14.4445ZM14.5778 14.4445C14.5425 14.4445 14.5086 14.4585 14.4835 14.4835L15.4264 15.4263C15.2013 15.6514 14.8961 15.7778 14.5778 15.7778V14.4445ZM14.4835 14.4835C14.4585 14.5085 14.4445 14.5424 14.4445 14.5778H15.7778C15.7778 14.896 15.6514 15.2013 15.4264 15.4263L14.4835 14.4835ZM5.55561 5.6889V1.42223H6.88894V5.6889H5.55561ZM5.55561 1.42223C5.55561 1.45759 5.56965 1.4915 5.59463 1.51651L6.53748 0.573701C6.76254 0.798745 6.88894 1.10397 6.88894 1.42223H5.55561ZM5.59463 1.51651C5.6197 1.54152 5.65357 1.55556 5.68894 1.55556V0.222229C6.00716 0.222229 6.31241 0.348657 6.53748 0.573701L5.59463 1.51651ZM5.68894 1.55556H1.42228V0.222229H5.68894V1.55556ZM1.42228 1.55556C1.45765 1.55556 1.49152 1.54152 1.51659 1.51651L0.573742 0.573701C0.798809 0.348657 1.10405 0.222229 1.42228 0.222229V1.55556ZM1.51659 1.51651C1.54157 1.4915 1.55561 1.45759 1.55561 1.42223H0.222277C0.222277 1.10397 0.348676 0.798745 0.573742 0.573701L1.51659 1.51651ZM1.55561 1.42223V5.6889H0.222277V1.42223H1.55561ZM1.55561 5.6889C1.55561 5.65354 1.54157 5.61962 1.51659 5.59461L0.573742 6.53742C0.348676 6.31238 0.222277 6.00715 0.222277 5.6889H1.55561ZM1.51659 5.59461C1.49152 5.56961 1.45765 5.55556 1.42228 5.55556V6.8889C1.10405 6.8889 0.798809 6.76247 0.573742 6.53742L1.51659 5.59461ZM1.42228 5.55556H5.68894V6.8889H1.42228V5.55556ZM5.68894 5.55556C5.65357 5.55556 5.6197 5.56961 5.59463 5.59461L6.53748 6.53742C6.31241 6.76247 6.00716 6.8889 5.68894 6.8889V5.55556ZM5.59463 5.59461C5.56965 5.61962 5.55561 5.65354 5.55561 5.6889H6.88894C6.88894 6.00715 6.76254 6.31238 6.53748 6.53742L5.59463 5.59461Z" fill="#5751E1" />
            </g>
        </svg>
    )
}

export function TopicsIcon(props) {
    return (
        <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M14.2141 15.6125H3.64801C1.92811 15.6125 0.528912 14.2107 0.528912 12.4875V3.42499C0.528912 1.70181 1.92811 0.299988 3.64801 0.299988H14.2141C15.9341 0.299988 17.3333 1.70181 17.3333 3.42499V17.175C17.3333 18.8982 15.9341 20.3 14.2141 20.3H3.64801C1.92811 20.3 0.528912 18.8982 0.528912 17.175C0.528912 16.7435 0.878012 16.3937 1.30871 16.3937C1.73941 16.3937 2.08851 16.7435 2.08851 17.175C2.08851 18.0365 2.78811 18.7375 3.64801 18.7375H14.2141C15.074 18.7375 15.7737 18.0365 15.7737 17.175C15.7737 16.3135 15.074 15.6125 14.2141 15.6125ZM15.7737 3.42499C15.7737 2.56348 15.074 1.86249 14.2141 1.86249H3.64801C2.78811 1.86249 2.08851 2.56348 2.08851 3.42499V12.4875C2.08851 13.349 2.78811 14.05 3.64801 14.05H14.2141C14.7819 14.05 15.3147 14.2027 15.7737 14.4693V3.42499ZM12.6156 5.57343C12.6156 5.14191 12.2665 4.79218 11.8358 4.79218H5.98741C5.55671 4.79218 5.20761 5.14191 5.20761 5.57343C5.20761 6.00495 5.55671 6.35468 5.98741 6.35468H11.8358C12.2665 6.35468 12.6156 6.00495 12.6156 5.57343Z" fill="#7F7E97" {...props} />
        </svg>

    )
}

export function ArrowLeftIcon(props) {
    return (
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M14.7227 7.84003H1.59766M1.59766 7.84003L7.22266 2.21503M1.59766 7.84003L7.22266 13.465" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" {...props} />
            <path d="M14.7227 7.84003H1.59766M1.59766 7.84003L7.22266 2.21503M1.59766 7.84003L7.22266 13.465" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" {...props} />
        </svg>
    )
}

export function OptionIcon(props) {
    return (
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.30667 10.5C5.44889 10.5 5.58222 10.4667 5.70667 10.4C5.83111 10.3333 5.91111 10.2417 5.94667 10.125C5.98222 10.0083 5.99111 9.88333 5.97333 9.75C5.95556 9.61667 5.89333 9.51667 5.78667 9.45L1.62667 5.5L5.78667 1.55C5.92889 1.45 6 1.30833 6 1.125C6 0.941667 5.93778 0.791667 5.81333 0.675C5.68889 0.558333 5.52889 0.5 5.33333 0.5C5.13778 0.5 4.98667 0.566667 4.88 0.7L0.186666 5.05C0.0799999 5.18333 0.0266666 5.33333 0.0266666 5.5C0.0266666 5.66667 0.0799999 5.81667 0.186666 5.95L4.88 10.3C4.98667 10.4333 5.14667 10.5 5.36 10.5H5.30667Z" fill="#161439" {...props} />
        </svg>
    )
}

export function PlayIcon(props) {
    return (
        <svg width="76" height="81" viewBox="0 0 76 81" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="76" height="80.042" rx="38" transform="matrix(-1 0 0 1 76 0)" fill="white" />
            <g clipPath="url(#clip0_473_2017)">
                <path d="M48.8086 52.3132V27.6942C48.8087 27.406 48.7537 27.1226 48.6488 26.8707C48.5438 26.6188 48.3923 26.4068 48.2088 26.2548C48.0252 26.1027 47.8155 26.0157 47.5997 26.0019C47.3838 25.9882 47.1689 26.0481 46.9752 26.176L28.5134 38.3292C28.3017 38.4694 28.1236 38.6856 27.9991 38.9535C27.8745 39.2214 27.8086 39.5304 27.8086 39.8456C27.8086 40.1608 27.8745 40.4697 27.9991 40.7376C28.1236 41.0055 28.3017 41.2217 28.5134 41.3619L46.9752 53.824C47.1685 53.9517 47.3829 54.0116 47.5983 53.9981C47.8137 53.9847 48.023 53.8983 48.2064 53.7472C48.3898 53.596 48.5414 53.385 48.6467 53.1342C48.7521 52.8833 48.8078 52.6008 48.8086 52.3132Z" fill="#E11B24" />
            </g>
            <defs>
                <clipPath id="clip0_473_2017">
                    <rect width="22" height="28" fill="white" transform="matrix(-1 0 0 1 49 26)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function CloseIcon(props) {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.72273 1.72267L10.5616 10.5615M10.5616 1.72267L1.72273 10.5615" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props} />
        </svg>
    )
}

export function MoonIcon(props) {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                fill="#000" {...props}
            />
        </svg>
    )
}

export function SunIcon(props) {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <g fill="#000" {...props}>
                <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
            </g>
        </svg>
    )
}

export function ShopIcon(props) {
    return (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M19.9 5.89L18.85 1.52C18.63 0.62 17.85 0 16.94 0H3.05001C2.15001 0 1.36001 0.63 1.15001 1.52L0.100007 5.89C-0.139993 6.91 0.0800067 7.95 0.720007 8.77C0.800007 8.88 0.910007 8.96 1.00001 9.06V16C1.00001 17.1 1.90001 18 3.00001 18H17C18.1 18 19 17.1 19 16V9.06C19.09 8.97 19.2 8.88 19.28 8.78C19.92 7.96 20.15 6.91 19.9 5.89ZM16.91 1.99L17.96 6.36C18.06 6.78 17.97 7.2 17.71 7.53C17.57 7.71 17.27 8 16.77 8C16.16 8 15.63 7.51 15.56 6.86L14.98 2L16.91 1.99ZM11 2H12.96L13.5 6.52C13.55 6.91 13.43 7.3 13.17 7.59C12.95 7.85 12.63 8 12.22 8C11.55 8 11 7.41 11 6.69V2ZM6.49001 6.52L7.04001 2H9.00001V6.69C9.00001 7.41 8.45001 8 7.71001 8C7.37001 8 7.06001 7.85 6.82001 7.59C6.57001 7.3 6.45001 6.91 6.49001 6.52ZM2.04001 6.36L3.05001 2H5.02001L4.44001 6.86C4.36001 7.51 3.84001 8 3.23001 8C2.74001 8 2.43001 7.71 2.30001 7.53C2.03001 7.21 1.94001 6.78 2.04001 6.36ZM3.00001 16V9.97C3.08001 9.98 3.15001 10 3.23001 10C4.10001 10 4.89001 9.64 5.47001 9.05C6.07001 9.65 6.87001 10 7.78001 10C8.65001 10 9.43001 9.64 10.01 9.07C10.6 9.64 11.4 10 12.3 10C13.14 10 13.94 9.65 14.54 9.05C15.12 9.64 15.91 10 16.78 10C16.86 10 16.93 9.98 17.01 9.97V16H3.00001Z" fill="#323232" {...props} />
        </svg>
    )
}

export function EventIcon(props) {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M27.5339 19.8175C27.3913 19.7275 27.2283 19.6751 27.06 19.6651C26.8917 19.655 26.7236 19.6877 26.5714 19.76C26.1903 19.9402 25.7699 20.0211 25.3492 19.9953C24.9285 19.9694 24.5211 19.8376 24.165 19.6121C23.8089 19.3866 23.5156 19.0747 23.3124 18.7054C23.1091 18.3362 23.0025 17.9215 23.0025 17.5C23.0025 17.0785 23.1091 16.6638 23.3124 16.2945C23.5156 15.9253 23.8089 15.6134 24.165 15.3879C24.5211 15.1624 24.9285 15.0305 25.3492 15.0047C25.7699 14.9788 26.1903 15.0598 26.5714 15.24C26.7238 15.3123 26.8921 15.3449 27.0605 15.3347C27.229 15.3245 27.3921 15.2719 27.5347 15.1817C27.6773 15.0915 27.7948 14.9666 27.8762 14.8188C27.9575 14.671 28.0002 14.505 28.0001 14.3362V8.99998C28.0001 8.46955 27.7894 7.96084 27.4143 7.58577C27.0393 7.2107 26.5306 6.99998 26.0001 6.99998H21.4726C21.4912 6.83397 21.5004 6.66703 21.5001 6.49998C21.4992 5.88539 21.3728 5.27745 21.1286 4.71344C20.8844 4.14943 20.5276 3.64123 20.0801 3.21998C19.4605 2.638 18.6886 2.24344 17.854 2.08201C17.0193 1.92057 16.156 1.99886 15.364 2.30781C14.5721 2.61675 13.8838 3.14372 13.3789 3.82768C12.8741 4.51165 12.5733 5.32463 12.5114 6.17248C12.4922 6.44828 12.498 6.72525 12.5289 6.99998H8.00012C7.46969 6.99998 6.96098 7.2107 6.58591 7.58577C6.21083 7.96084 6.00012 8.46955 6.00012 8.99998V13.0275C5.83411 13.0089 5.66717 12.9997 5.50012 13C4.88554 13.001 4.27763 13.1274 3.71363 13.3716C3.14963 13.6158 2.64141 13.9725 2.22012 14.42C1.79581 14.8682 1.46908 15.3995 1.2606 15.9805C1.05211 16.5614 0.966396 17.1792 1.00887 17.795C1.08053 18.8792 1.54122 19.9011 2.30621 20.6727C3.0712 21.4444 4.08907 21.9139 5.17262 21.995C5.4484 22.0148 5.72543 22.009 6.00012 21.9775V26C6.00012 26.5304 6.21083 27.0391 6.58591 27.4142C6.96098 27.7893 7.46969 28 8.00012 28H26.0001C26.5306 28 27.0393 27.7893 27.4143 27.4142C27.7894 27.0391 28.0001 26.5304 28.0001 26V20.6637C28.0002 20.4948 27.9575 20.3285 27.876 20.1806C27.7944 20.0326 27.6768 19.9077 27.5339 19.8175ZM26.0001 26H8.00012V20.6637C8.00018 20.495 7.95753 20.329 7.87615 20.1811C7.79477 20.0333 7.67731 19.9085 7.5347 19.8183C7.39209 19.7281 7.22897 19.6754 7.06053 19.6652C6.8921 19.655 6.72382 19.6876 6.57137 19.76C6.19033 19.9402 5.76991 20.0211 5.34919 19.9953C4.92848 19.9694 4.52113 19.8376 4.16502 19.6121C3.80891 19.3866 3.5156 19.0747 3.31236 18.7054C3.10912 18.3362 3.00254 17.9215 3.00254 17.5C3.00254 17.0785 3.10912 16.6638 3.31236 16.2945C3.5156 15.9253 3.80891 15.6134 4.16502 15.3879C4.52113 15.1624 4.92848 15.0305 5.34919 15.0047C5.76991 14.9788 6.19033 15.0598 6.57137 15.24C6.72382 15.3123 6.8921 15.3449 7.06053 15.3347C7.22897 15.3245 7.39209 15.2719 7.5347 15.1817C7.67731 15.0915 7.79477 14.9666 7.87615 14.8188C7.95753 14.671 8.00018 14.505 8.00012 14.3362V8.99998H13.8364C14.0051 9.00004 14.1711 8.95739 14.319 8.87601C14.4668 8.79463 14.5916 8.67717 14.6818 8.53456C14.772 8.39195 14.8247 8.22883 14.8349 8.06039C14.8451 7.89196 14.8125 7.72368 14.7401 7.57123C14.5599 7.19019 14.479 6.76977 14.5048 6.34905C14.5307 5.92834 14.6625 5.52099 14.888 5.16488C15.1135 4.80877 15.4254 4.51546 15.7947 4.31222C16.1639 4.10898 16.5786 4.0024 17.0001 4.0024C17.4216 4.0024 17.8363 4.10898 18.2056 4.31222C18.5748 4.51546 18.8867 4.80877 19.1122 5.16488C19.3377 5.52099 19.4696 5.92834 19.4954 6.34905C19.5213 6.76977 19.4403 7.19019 19.2601 7.57123C19.1878 7.72368 19.1552 7.89196 19.1654 8.06039C19.1756 8.22883 19.2282 8.39195 19.3184 8.53456C19.4086 8.67717 19.5335 8.79463 19.6813 8.87601C19.8291 8.95739 19.9951 9.00004 20.1639 8.99998H26.0001V13.0287C25.7254 12.9973 25.4484 12.9914 25.1726 13.0112C24.0088 13.0936 22.9224 13.6249 22.1427 14.4929C21.363 15.3609 20.951 16.4978 20.9935 17.6638C21.0359 18.8298 21.5296 19.9338 22.3704 20.7427C23.2112 21.5517 24.3334 22.0025 25.5001 22C25.6672 22.0003 25.8341 21.9911 26.0001 21.9725V26Z" fill="#343330" {...props} />
        </svg>
    )
}

export function AdminIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7" {...props}>
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>
    )
}

export function HomeBtnPanelIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" {...props}>
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
    )
}

export function CheckIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-6" {...props}>
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
    )
}

export function UnEyeIcon(props) {
    return (
        <svg width="20" height="20" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_429_1373)">
                <path d="M2.08478 3.76887C1.59473 4.27496 1.22982 4.86438 1.01306 5.5C1.68982 7.48825 3.79449 8.9375 6.28573 8.9375C6.80587 8.9375 7.30873 8.87425 7.7854 8.75646M3.2623 2.8545C4.1594 2.33652 5.21092 2.06107 6.28573 2.0625C8.77697 2.0625 10.8811 3.51175 11.5579 5.49908C11.187 6.58503 10.3908 7.52198 9.30916 8.1455M3.2623 2.8545L1.57144 1.375M3.2623 2.8545L5.17421 4.52742M9.30916 8.1455L11 9.625M9.30916 8.1455L7.39725 6.47258C7.54319 6.34489 7.65895 6.1933 7.73793 6.02646C7.8169 5.85963 7.85755 5.68081 7.85755 5.50023C7.85755 5.31965 7.8169 5.14083 7.73793 4.97399C7.65895 4.80716 7.54319 4.65557 7.39725 4.52787C7.25132 4.40018 7.07807 4.29889 6.8874 4.22979C6.69673 4.16068 6.49237 4.12511 6.28599 4.12511C6.07961 4.12511 5.87525 4.16068 5.68458 4.22979C5.49391 4.29889 5.32066 4.40018 5.17473 4.52787M7.39673 6.47213L5.17525 4.52833" stroke="#5751E1" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_429_1373">
                    <rect width="12.5714" height="11" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function EyeIcon(props) {
    return (
        <svg width="20" height="20" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M16.9559 5.82353C17.1952 6.1255 17.3148 6.27651 17.3148 6.49999C17.3148 6.72347 17.1952 6.87449 16.9559 7.17645C15.8808 8.53333 13.135 11.4583 9.44447 11.4583C5.75388 11.4583 3.00816 8.53333 1.93302 7.17645C1.69373 6.87449 1.5741 6.72347 1.5741 6.49999C1.5741 6.27651 1.69373 6.1255 1.93302 5.82353C3.00816 4.46668 5.75388 1.54166 9.44447 1.54166C13.135 1.54166 15.8808 4.46668 16.9559 5.82353Z" stroke="#5751E1" strokeWidth="1.5" />
            <path d="M11.8055 6.5C11.8055 5.32636 10.7485 4.375 9.44442 4.375C8.14038 4.375 7.08331 5.32636 7.08331 6.5C7.08331 7.67364 8.14038 8.625 9.44442 8.625C10.7485 8.625 11.8055 7.67364 11.8055 6.5Z" stroke="#5751E1" strokeWidth="1.5" />
        </svg>
    )
}