import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { CommentSection, FeedbackSection, OptionParts, OverView_Details } from "../../common";
import { AddCourseComment, AddReplyCourseComment } from "../../../core/services/api/post-data";

const TabPanel = ({
    overView,
    training,
    MajorElements,
    variant,
    getReplay,
    params,
}) => {
    const weeks = [
        {
            title: "هفته اول: آشنایی با CSS و Tailwind CSS- روز۱-۲: مقدمه‌ای بر CSS و درک اصول پایه آن.",
            options: [
                "روز۳-۴: معرفی Tailwind CSS و مزایای آن نسبت به فریم‌ورک‌های CSS دیگر.",
                "روز۵-۶: نصب و راه‌اندازی Tailwind CSS در پروژه‌های کوچک.",
                "روز۷: آشنایی با مستندات Tailwind و نحوه استفاده از آن.",
            ]
        },
        {
            title: "هفته دوم: کار با کلاس‌های پایه Tailwind- روز۸-۹: آشنایی با کلاس‌های رنگ، اندازه‌ها و فضاها.",
            options: [
                "روز۱۰-۱۱: بررسی کلاس‌های نوشتاری (typography) و تنظیمات متنی.",
                "روز۱۲-۱۳: استفاده از کلاس‌های Flexbox و Grid در Tailwind.",
                "روز۱۴: پروژه کوچک: طراحی یک صفحه وب ساده با استفاده از Tailwind CSS.",
            ]
        },
        {
            title: "هفته سوم: سفارشی‌سازی و بهینه‌سازی- روز۱۵-۱۶: سفارشی‌سازی Tailwind با استفاده از فایل پیکربندی.",
            options: [
                "روز۱۷-۱۸: افزودن ترکیب‌ها و ایجاد کلاس‌های سفارشی.",
                "روز۱۹-۲۰: کار با Responsive Design و رسانه‌ها در Tailwind.",
                "روز۲۱: پروژه میان‌فصل: طراحی یک وب‌سایت چند صفحه‌ای.",
            ]
        },
        {
            title: "هفته چهارم: ابزارهای جانبی و فریم‌ورک‌ها- روز۲۲-۲۳: آشنایی با استفاده از Tailwind CSS در کنار JavaScript و فریم‌ورک‌های مثل React یا Vue.js.",
            options: [
                "روز۲۴-۲۵: بررسی پلاگین‌های مفید و ابزارهای جانبی برای Tailwind.",
                "روز۲۶-۲۷: بحث در مورد بهترین شیوه‌ها و مباحث مربوط به عملکرد و بهینه‌سازی.",
                "روز۲۸: پروژه نهایی: طراحی یک وب‌سایت کامل با استفاده از Tailwind CSS و فریم‌ورک‌های جاوا اسکریپت.",
            ]
        }
    ]
    return (
        <div>
            <Details_Tabs>
                <Tab label="Overview">
                    <>
                        <OverView_Details
                            overView={overView}
                            training={training}
                            MajorElements={MajorElements}
                            Class={'block'}
                            ElementClass={'hidden'}
                            titleOverView={'CourseOverView'}
                            titleLearning={'LearnCourse'}
                            variant={params.variant} />
                        <FeedbackSection params={params} />
                    </>
                </Tab>
                <Tab label="Study program">
                    <div data-aos="fade-left" className="max-sm:text-center Box-shadow1 p-5 bg-MainBg rounded-lg border border-LightLavender">
                        {weeks.map((item) => (
                            <div className="mb-8">
                                <h1 className="boldStyle_text text-2xl mb-5">{item.title}</h1>
                                {item.options.map((item, index) => (
                                    <OptionParts
                                        key={index}
                                        text={item}
                                        holderStyle="justify-center lg:justify-start my-3"
                                        disableIconIn="1024px"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </Tab>
                <Tab label="User comments">
                    <CommentSection
                        Id={params.Id}
                        apiFunction={AddCourseComment}
                        variant={variant}
                        replayComment={AddReplyCourseComment}
                        getReplay={getReplay}
                        data={params.commentData}
                        commentSuccess={params.commentSuccess}
                        refetch={params.refetchComment}
                    />
                </Tab>
            </Details_Tabs>
        </div>
    )
}

export default TabPanel