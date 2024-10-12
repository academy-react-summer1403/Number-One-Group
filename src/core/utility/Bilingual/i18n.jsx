import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getItem } from "../../services/local-storage/LocalStorage";

i18n.use(initReactI18next)
    .init({
        fallbackLng: (getItem('lang') === false ? 'fa' : getItem('lang')),
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fa: {
                translation: {
                    // name Group
                    nameGroup: 'نامبر وان', teamSlogan: 'همیشه بهترین',
                    // Others
                    yes: 'بله', no: 'خیر', Reviews: 'امتیاز', student: 'دانشجو', Development: 'توسعه', By: 'توسط', map: 'نقشه', from: 'از',
                    test: 'این یک پیام تستی است', priceCount: 'تومان', show: 'نمایش', result: 'نتیجه از', sortBy: 'مرتب سازی بر اساس:', upTo: 'تا',
                    studyTime: "دقیقه خواندن",
                    course: "دوره", viewAll: "مشاهده همه", edit: "ویرایش", cancel: "لغـــو", category: 'دسته بندی ها', AddToCart: "افزودن به سبد خرید",
                    description: "شرح", Comments: "کامنت ها", products: "محصولات", related: "مرتبط",
                    // shop Details
                    ShopDetailId: "شناسه", ShopDetailTags: "برچسب ها",
                    // Menu Items in the Header
                    HomeSection: 'صفحه اصلی', CoursesSection: 'دوره های آموزشی', Events: 'ایونت ها', ShopSection: 'فروشگاه', BlogSection: 'وبلاگ', InstructorsSection: "مربیان",
                    // Search Input in the Header
                    Login: 'حساب کاربری',
                    // PlaceHolders
                    PlaceHolder_Courses: 'جستجو برای دوره ...', PlaceHolder_Blogs: 'جستجو برای وبلاگ ...',
                    PlaceHolder_Shop: 'جستجو برای محصول ...', emailPlaceholder: "ایمیل خود را وارد کنید", passwordPlaceholder: "رمز عبور خود را وارد کنید",
                    phonePlaceholder: "شماره مبایل خود را وارد کنید",
                    // data in the Footer
                    footerDescription: 'هنگامی که یک چاپگر ناشناخته گالری را تایپ کرده و آن را در هم می زند تا نمونه ای بسازد',
                    // Links
                    linksTitle: 'لینک های مفید', link1: 'ارزش های ما', link2: 'هیئت مشاوران ما', link3: 'شرکای ما',
                    link4: 'شریک شدن', link5: 'در Future Learn کار کنید', link6: 'Quizlet Plus',
                    // Landing
                    // heroSection
                    heroSectionDescription: "هر سفر آموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک خواهیم کرد", heroSectionTitle1: "هرگز از",
                    heroSectionTitle2: "دست نکشید زندگی هرگز از آموزش دست نمی کشد", heroSectionBtn: "رایگان آزمایش کنید",
                    // category
                    categoryLabel: "دسته بندی های پرطرفدار", categoryTitle: "دسته بندی های برتر", categoryDescription: "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است",
                    // aboutUs
                    aboutLabel: "درباره ما بیشتر بدانید", aboutTitle1: "هزاران", aboutTitle2: "برتر اکنون در یک مکان",
                    aboutDescription: "صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم در مورد پایه پلتفرم وب.",
                    aboutBtn: "رایگان آزمایش کنید", aboutImportantWord: "دوره های", boardText: "بیش از 36 هزار دانشجوی ثبت نام شده",
                    // topCourses
                    topCoursesLabel: "دوره های کلاس برتر", topCoursesTitle: "بهترین دوره های آموزشی جهان ما را کاوش کنید", topCoursesDescription: "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است",
                    // skilledTeachers
                    skilledTeachersLabel: "معلم های ماهر", skilledTeachersTitle: "کلاس برتر ما و مربیان خبره در یک مکان",
                    skilledTeachersDesc: "هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست شده باقی نمانده است فقط پنج قرن", skilledTeachersBtn: "همه مربیان را ببینید",
                    // faq
                    faqLabel: "سوالات متداول", faqTitle: "شروع به تمرین از مربیان حرفه ای جهان", faqDescription: "صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می کند دهی، اولویت بندی و.در این قسمت.",
                    // howToStart
                    howToStartLabel: "چگونه سفر را شروع می کنیم", howToStartTitle: "سفر یادگیری خود را از همین امروز شروع کنید!", howToStartDesc: "اعضای شهودی Groove make team ورودی را با هم به تقسیم سازماندهی، اولویت بندی و.در این قسمت.",
                    // lastBlogs
                    lastBlogsLabel: "اخبار و وبلاگ ها", lastBlogsTitle: "آخرین خبر ما", lastBlogsDesc: "هنگامی که چاپگر شناخته شده یک گالری از نوع scrambl edmake گرفت",
                    blogFavorite: 'آیا از این مقاله راضی بودید؟', LearnBlog: 'در این مقاله چه چیزی یاد خواهم گرفت؟',
                    // informedPoster
                    informedPlaceholder: "ایمیل خود را تایپ کنید", informedWord1: "میخواهید در مورد", informedWord3: "جدید",
                    informedImportantWord1: "دوره های", informedImportantWord2: "مطلع باشید", informedBtn: "اکنون مشترک شوید",
                    // Company
                    companyTitle: 'شرکت ما', company1: 'با ما تماس بگیرید', company2: 'معلم شوید',
                    company3: 'وبلاگ', company4: 'مربی', company5: 'مناسبت ها',
                    touchTitle: 'در تماس باشید', touchDesc: 'هنگامی که یک چاپگر ناشناس گرفت نوع گالری و درهم',
                    // titlePages
                    loginTitle: 'ورود به عنوان دانش آموز', login: "ورود", instructorsTitle: "همه مربیان",
                    CoursesTitle: 'همه دوره ها', comparisonTitle: 'مقایسه',
                    signUpTitle: 'ثبت نام به عنوان دانش آموز', or: "یا", EventsTitle: "همه مناسبت ها", contactUsTitle: "تماس با ما", shopDetail: "جزئیات فروشگاه",
                    // Buttons
                    GoHomePage: "به صفحه اصلی بروید", Join: 'به رویداد بپیوندید', submit: "ارسال کنید",
                    signUpCourse: "ثبت نام در دوره",
                    // LoginForm
                    LoginCaption: "ورود",
                    LoginDesc: "برای ورود به حساب خود ایمیل و رمز عبور خود را وارد کنید",
                    RememberMe: "مرا به خاطر بسپار", ForgetPassword: "فراموشی رمز؟", loginBtn: "ورود به حساب کاربری",
                    HaveAccount2: "حساب کاربری ندارید؟", signUp: "ثبت نام",
                    // SignUpForm
                    SignUpCaption: "ثبت نام",
                    SignUpDesc: "جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید",
                    SignUpBtn: "ثبت نام", HaveAccount1: "از قبل حساب کاربری دارید؟",
                    // Steps
                    // ChangePassword
                    ChangePasswordCaption: "تغییر رمزعبور", ChangePasswordDesc: "جهت تغییر رمز عبور ایمیل خود را وارد کنید",
                    ChangePasswordPlaceholder: "ایمیل خود را وارد کنید", ChangePasswordBtn: "ارسال ایمیل",
                    // GetCode
                    GetCodeCaption: "دریافت کد", GetCodeDesc1: "کدی برای شماره مبایل", GetCodeDesc2: "ارسال شد آن کد را در اینجا وارد کنید",
                    GetCodePlaceholder: "کد را وارد کنید", GetCodeBtn: "تایید کد یک بار مصرف",
                    // SetNewPassword
                    SetNewPasswordCaption: "رمز عبور جدید", SetNewPasswordDesc: "رمز عبور جدید خود را وارد کنید",
                    SetNewPasswordPlaceholder: "رمز عبور جدید را وارد کنید", SetNewPasswordBtn: "تکمیل فرایند",
                    // GetUserInfo
                    GetUserInfoCaption: " مشخصات کاربری", GetUserInfoDesc: "ایمیل و پسورد خود را وارد کنید", GetUserInfoBtn: "تکمیل ثبت نام",
                    // GoToEmail
                    GoToEmailCaption: "چک کردن ایمیل", GoToEmailDesc1: "پیامی به ایمیل", GoToEmailDesc2: "ارسال شد لطفا آن را بررسی کنید", GoToEmailBtn: "بررسی ایمیل",
                    // ErrorPage
                    error: "صفحه خطا", ErrorDesc: "متاسفم! این صفحه در دسترس نیست!",
                    // EventsPage
                    EventTitle1: "آموزش جاوا اسکریپت با خیال پردازی", EventDate: "14تیر، 1403", EventCity1: "توکیو",
                    EventTitle2: " ایجاد آینده از طریق فناوری Aewe", EventCity2: "نیویورک",
                    EventPrice: 'هزینه رویداد', EventInfo: 'اطلاعات رویداد', eventDate: 'تاریخ', StartTime: 'زمان شروع', graduation: 'فارغ التحصیلی',
                    EventTopics: 'موضوعات', EventQuizzes: 'آزمون ها', EventCertifications: 'گواهینامه ها', duration: 'مدت زمان', lessons: 'درس ها',
                    EventTotalSeat: 'صندلی کل', Payment: 'پرداخت امن:', ShareCourse: 'این دوره را به اشتراک بگذارید:',
                    //Instructors-Details page
                    sideBarTitle: "تماس سریع", sideBarBtn: "فرستادن پیام", sideBarDesc: "از طریق تماس با ما راحت باشید اگر ترجیح می دهید توییتر یا فیس بوک!",
                    instructorBiography: "زندگینامه", instructorSkill: "مهارت ها", instructorCourses: "دوره های من",
                    EventOverview: 'نمای کلی رویداد', LearnEvent: 'در این رویداد چه خواهید آموخت؟',
                    EventElements: 'چهار عنصر اصلی که ما ارائه می دهیم برای این رویداد',
                    EventElement1: 'با رنگ و گرادیان و شبکه کار کنید', EventElement2: 'تمام میانبرهای مفید',
                    EventElement3: 'قادر به ایجاد بروشور، بروشور، تبلیغات باشید',
                    EventElement4: 'نحوه کار با تصاویر و متن',
                    // Contact us page
                    contactUsCaption: "برای ما پیام ارسال کنید", contactUsDescription: "آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *",
                    // Filters Name
                    price: 'قیمت', level: 'سطح مهارت', instructor: 'مربیان', rating: 'رتبه بندی ها', type: 'نحوه برگذاری',
                    removeFilters: 'حذف فیلترها', openFilter: 'فیلتر ها', filters: 'فیلتر ها', exist: "موجودی در انبار",
                    // Comparison page
                    titleComparison: 'مقایسه دو دوره با هم!',
                    descComparison: 'با مقایسه کردن دوره های آموزشی باهم دیگه میتونی دوره مناسب خودتو پیدا کنی!',
                    // course Details
                    CourseOverView: "شرح دوره", LearnCourse: 'در این دوره چه چیزی یاد خواهید گرفت؟',
                    CourseInfo: 'دوره شامل', CoursePrice: 'هزینه دوره',
                    // Dashboard
                    exitFromAccount: "خروج از حساب", welcome: "خوش آمدید", progressTip: "برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.",
                    latestNewsAndBlogs: "جدید ترین اخبار و مقالات", currentCourses: "دوره های در حال برگزاری:", suggestedCourses: "دوره های پیشنهادی:", changePassword: "تغییر رمز عبور", twoStep: "تایید ورود دو مرحله ای", emailRecovery: "ایمیل بازیابی",
                    SecuritySettings: "تنظیمات امنیتی", saveChanges: "ذخیره تغییرات", newEmail: "ایمیل جدید", editInformationTitle: "ویرایش اطلاعات کاربری", participateInCourse: "شرکت کرده اید", reservationInCourse: "رزرو کرده اید",
                    // Comments
                    comment: 'نظر', user_comment: 'نظرات کاربران', sendComment: 'ارسال نظر', titleComment: 'عنوان پیام',
                    descComment: 'توضیحات بیشتر', comment_text: 'متن خود را وارد کنید', ConfirmComment: 'نظر شما پس از تأیید توسط ادمین ثبت خواهد شد!',
                    commentAnswer: 'پاسخ', viewAnswers: 'مشاهده پاسخ ها',
                    // Related titles
                    Related: 'مرتبط', Blogs: 'اخبار',
                    // Cart
                    cartTitle: "سبد خرید", cartTotalSum: "جمع کل", cartInfo: "اطلاعات", cartButton: "اقدام به پرداخت", clearBtn: "خالی کردن سبد", numberOfItemsInCart: "تعداد آیتم ها",
                    // About
                    aboutTitle: "ما کی هستیم",
                    //MoreInfoAboutUs
                    MoreInfoAboutUsChip: "درباره ما بیشتر بدانید", MoreInfoAboutUsTitleS1: "توانمندسازی دانش آموزان برای رسیدن به هدف", MoreInfoAboutUsTitleS2: "بالقوه ",
                    MoreInfoAboutUsTitleS3: "آنها برای چالش سطح بعدی.", MoreInfoAboutUsBtn: "آزمایش رایگان را شروع کنید",
                    MoreInfoAboutUsDesc: "هنگامی که یک چاپگر ناشناس یک گالری از نوع را گرفت و آن را به هم زد تا یک تایپ بسازد کتاب نمونه نه تنها از پنج قرن، بلکه از جهش به آن نیز جان سالم به در برده است حروفچینی الکترونیکی",
                    //WhatWeOffer
                    WhatWeOfferChip: "آنچه ما ارائه می دهیم", WhatWeOfferTitle: "یادگیری مهارت های جدید در زمانی که و جایی که تو دوست داری",
                    WhatWeOfferDesc: "هنگامی که چاپگر شناخته شده یک گالری از نوع scrambl edmake گرفت",
                    //OurTestimonials
                    OurTestimonialsChip: "توصیفات ما", OurTestimonialsTitle: "آنچه دانش آموزان فکر می کنند و می گویند درباره نامبر وان",
                    OurTestimonialsDesc: "نظرات کاربران ما نشان‌دهنده کیفیت بالای خدمات و محصولات ماست و ما همواره به بازخوردهای آنان گوش می‌دهیم تا تجربه بهتری را ارائه دهیم.",
                    // SortOptions 
                    Descending: "نزولی", Ascending: "صعودی", ActiveCourses: "دوره های فعال", Price: "قیمت",
                    Popularity: "محبوبیت", MostPopular: "محبوب ترین ها", Latest: "جدید ترین ها", MostVisited: "پربازدیدترین ها",
                    // NotFound
                    course_NotFound: "دوره ای یافت نشد", blog_NotFound: "وبلاگی یافت نشد",

                },
            },
            en: {
                translation: {
                    // name Group
                    nameGroup: 'Number One', teamSlogan: 'ALWAYS THE BEST',
                    // Others
                    yes: 'Yes', no: 'No', Reviews: 'Reviews', student: 'Students', Development: 'Development', By: 'By', map: 'Map',
                    test: 'This is a test message', priceCount: '$', show: 'Showing', result: 'Result of', sortBy: 'Sort By:', from: 'from', upTo: 'up To',
                    studyTime: "minutes of reading",
                    course: "Course", viewAll: "view all", edit: "Edit", cancel: "Cancel", category: 'Categories', AddToCart: "Add to cart",
                    description: "Description", Comments: "Comments", products: "Products", related: "related",
                    // shop Details
                    ShopDetailId: "ID", ShopDetailTags: "Tags",
                    // Menu Items in the Header
                    HomeSection: 'Home', CoursesSection: 'Courses', Events: 'Events', ShopSection: 'Shop', BlogSection: 'Blog', InstructorsSection: "Instructors",
                    // Search Input in the Header
                    Login: 'User Account',
                    // PalceHolders
                    PlaceHolder_Courses: 'Search For Course ...', PlaceHolder_Blogs: 'Search For Blog ...',
                    PlaceHolder_Shop: 'Search For Product ...', emailPlaceholder: "Enter your email", passwordPlaceholder: "Enter your password",
                    phonePlaceholder: "Enter your mobile number",
                    // Footer
                    footerDescription: 'when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.',
                    // Links
                    linksTitle: 'Useful Links', link1: 'Our values', link2: 'Our advisory board', link3: 'Our partners',
                    link4: 'Become a partner', link5: 'Work at Future Learn', link6: 'Quizlet Plus',
                    // Landing
                    // heroSection
                    heroSectionDescription: "Every teaching and learning journey is unique Following We'll help guide your way.", heroSectionTitle1: "Never Stop",
                    heroSectionTitle2: "Life Never Stop Teaching", heroSectionBtn: "Start Free Trial",
                    // category
                    categoryLabel: "Trending Categories", categoryTitle: "Top Category We Have", categoryDescription: "when known printer took a galley of type scrambl edmake",
                    // aboutUs
                    aboutLabel: "Get More About Us", aboutTitle1: "Thousand Of Top", aboutTitle2: "Now in One Place",
                    aboutDescription: "Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode of the Smashing Pod we’re alking about Web Platform Baseline.",
                    aboutBtn: "Start Free Trial", aboutImportantWord: "Courses", boardText: "36K+ Enrolled Students",
                    // topCourses
                    topCoursesLabel: "Top Class Courses", topCoursesTitle: "Explore Our World's Best Courses", topCoursesDescription: "When known printer took a galley of type scrambl edmake",
                    //skilledTeachers
                    skilledTeachersLabel: "Skilled Introduce", skilledTeachersTitle: "Our Top Class & Expert Instructors in One Place",
                    skilledTeachersDesc: "when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries", skilledTeachersBtn: "See All Instructors",
                    // faq
                    faqLabel: "Faq’s", faqTitle: "Start Learning From World’s Pro Instructors", faqDescription: "Groove’s intuitive shared inbox makes it easy for team members to organize, prioritize and.In this episode.",
                    // howToStart
                    howToStartLabel: "How We Start Journey", howToStartTitle: "Start your Learning Journey Today!", howToStartDesc: "Groove’s intuitive shared inbox makesteam members together organize, prioritize and.In this episode.",
                    // lastBlogs
                    lastBlogsLabel: "News & Blogs", lastBlogsTitle: "Our Latest News Feed", lastBlogsDesc: "when known printer took a galley of type scrambl edmake",
                    blogFavorite: 'Were you satisfied with this article?', LearnBlog: 'What will I learn in this blog?',
                    // informedPoster
                    informedPlaceholder: "Type your e-mail", informedWord1: "Want To Stay About", informedWord3: "New",
                    informedImportantWord1: "Informed", informedImportantWord2: "Courses & Study?", informedBtn: "Subscribe Now",
                    // Company
                    companyTitle: 'Our Company', company1: 'Contact Us', company2: 'Become Teacher',
                    company3: 'Blog', company4: 'Instructor', company5: 'Events',
                    touchTitle: 'Get In Touch', touchDesc: 'when an unknown printer took galley type and scrambled',
                    // titlePages
                    loginTitle: 'Student Login', login: "Login", instructorsTitle: "All Instructors",
                    CoursesTitle: 'All Courses', comparisonTitle: 'Comparison',
                    signUpTitle: 'Student SignUp', or: "or", EventsTitle: "All Events", contactUsTitle: "Contact With Us", shopDetail: "Shop Detail",
                    // Buttons
                    GoHomePage: "Go To Home Page", Join: 'Join This Event', submit: "Submit Now",
                    signUpCourse: "Enroll course",
                    // LoginForm
                    LoginCaption: "Sign in",
                    LoginDesc: "Enter your email and password to log in to your account",
                    RememberMe: "Remember me", ForgetPassword: "Forget Password?", loginBtn: "login",
                    HaveAccount2: "Don't have an account?", signUp: "Sign Up",
                    // SignUpForm
                    SignUpCaption: "Sign up",
                    SignUpDesc: "Enter your phone number to receive a one-time code",
                    SignUpBtn: "Sign Up", HaveAccount1: "Already have an account?",
                    // Steps
                    // ChangePassword
                    ChangePasswordCaption: "Change password", ChangePasswordDesc: "Enter your email to change your password",
                    ChangePasswordPlaceholder: "Enter your email", ChangePasswordBtn: "Send Email",
                    // GetCode
                    GetCodeCaption: "Get the code", GetCodeDesc1: "A code has been sent to mobile number", GetCodeDesc2: "Enter that code here",
                    GetCodePlaceholder: "Enter the code", GetCodeBtn: "Verification code",
                    // SetNewPassword
                    SetNewPasswordCaption: "New password", SetNewPasswordDesc: "Enter your new password",
                    SetNewPasswordPlaceholder: "Enter the new password", SetNewPasswordBtn: "Complete the process",
                    // GetUserInfo
                    GetUserInfoCaption: "User profile", GetUserInfoDesc: "Enter your email and password", GetUserInfoBtn: "Complete",
                    // GoToEmail
                    GoToEmailCaption: "Check Email", GoToEmailDesc1: "A message was sent to", GoToEmailDesc2: "please check it", GoToEmailBtn: "Check Email",
                    // ErrorPage
                    error: "Error Page", ErrorDesc: "Sorry! This Page is Not Available!",
                    // EventsPage
                    EventTitle1: "Learning JavaScript With Imagination", EventDate: "25 June, 2024", EventCity1: "Tokyo",
                    EventTitle2: "Aewe Creating Futures Through Technology", EventCity2: "New Work",
                    EventPrice: 'Event Fee', EventInfo: 'Event Infomation', eventDate: 'Date', StartTime: 'Start Time', graduation: 'graduation',
                    EventTopics: 'Topics', EventQuizzes: 'Quizzes', EventCertifications: 'Certifications', duration: 'duration', lessons: 'lessons',
                    EventTotalSeat: 'Total Seat', Payment: 'Secure Payment:', ShareCourse: 'Share this course:',
                    //Instructors-Details page
                    sideBarTitle: "Quick Contact", sideBarBtn: "Send Message", sideBarDesc: "Feel free to contact us through Twitter or Facebook if you prefer!",
                    instructorBiography: "Biography", instructorSkill: "Skills", instructorCourses: "My Courses",
                    EventOverview: 'Event Overview', LearnEvent: 'What will you learn in this event?',
                    EventElements: 'Four major elements that we offer for this event',
                    EventElement1: 'Work with color & Gradients & Grids', EventElement2: 'All the useful shortcuts',
                    EventElement3: 'Be able to create Flyers, Brochures, Advertisements',
                    EventElement4: 'How to work with Images & Text',
                    // Contact us page
                    contactUsCaption: "Send Us Message", contactUsDescription: "Your email address will not be published. Required fields are marked *",
                    // Filters Name
                    price: 'Price', level: 'Skill Level', instructor: 'Instructors', rating: 'Ratings', type: 'How to put',
                    removeFilters: 'Remove Filters', openFilter: 'Open Filters', filters: 'Filters', exist: "Stock in stock",
                    // Comparison page
                    titleComparison: 'Comparison of two courses',
                    descComparison: 'By comparing training courses, you can find the right course for you!',
                    // course Details
                    CourseOverView: "Course Overview", LearnCourse: 'What will you learn in this course?',
                    CourseInfo: 'Course Information', CoursePrice: 'Course Fee',
                    // Dashboard
                    exitFromAccount: "Exit", welcome: "welcome", progressTip: "To participate in the courses, you must complete at least 80% of your profile.",
                    latestNewsAndBlogs: "The latest news and Blogs", currentCourses: "Current courses:", suggestedCourses: "Suggested courses:", changePassword: "Change password", twoStep: "Two-step login verification", emailRecovery: "Email recovery",
                    SecuritySettings: "Security settings", saveChanges: "Save changes", newEmail: "New email", editInformationTitle: "Edit user information", participateInCourse: "Participate", reservationInCourse: "Reserved",
                    // Comments
                    comment: 'Comment', user_comment: 'User Comments', sendComment: 'Submit a comment', titleComment: 'Comment title',
                    descComment: 'More details', comment_text: 'Enter your text', ConfirmComment: 'Your comment will be registered after approval by the admin!',
                    commentAnswer: 'Answer', viewAnswers: 'View Answers',
                    // Related titles
                    Related: 'Related', Blogs: 'Blogs',
                    // Cart
                    cartTitle: "Cart", cartTotalSum: "Total sum", cartInfo: "Information", cartButton: "Proceed to pay", clearBtn: "Clear Cart", numberOfItemsInCart: "Number of items",
                    // About
                    aboutTitle: "Who We Are",
                    //MoreInfoAboutUs
                    MoreInfoAboutUsChip: "Learn More About Us", MoreInfoAboutUsTitleS1: "Empowering Students To Reach Their", MoreInfoAboutUsTitleS2: "Potential",
                    MoreInfoAboutUsTitleS3: " Goal For Next Level Challenge.", MoreInfoAboutUsBtn: "Start Free Trial",
                    MoreInfoAboutUsDesc: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
                    //WhatWeOffer
                    WhatWeOfferChip: "What We Offer", WhatWeOfferTitle: "Learn New Skills When And Where You Like",
                    WhatWeOfferDesc: "When known printer took a galley of type scrambl edmake",
                    //OurTestimonials
                    OurTestimonialsChip: "Our Testimonials", OurTestimonialsTitle: "What Students Think and Say About SkillGrow",
                    OurTestimonialsDesc: "The opinions of our users show the high quality of our services and products, and we always listen to their feedback to provide a better experience.",
                    // SortOptions 
                    Descending: "Descending", Ascending: "Ascending", ActiveCourses: "Active Courses", Price: "Price",
                    Popularity: "Popularity", MostPopular: "Most Popular", Latest: "Latest", MostVisited: "Most Visited",
                    // NotFound
                    course_NotFound: "Course not found", blog_NotFound: "Blog not found",
                },
            },
        },
    });

export default i18n;
