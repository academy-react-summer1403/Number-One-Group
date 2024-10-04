export const LandingReportsItem = (report) => {
  const statisticsItem = [
    {
      id: 1,
      name: ["وبلاگ ها", "Blogs"],
      statistics: report.newsCount,
      isBorder: true,
    },
    {
      id: 2,
      name: ["بهترین اساتید", "Best Professors"],
      statistics: report.teacherCount,
      isBorder: true,
    },
    {
      id: 3,
      name: ["دوره ها", "Courses"],
      statistics: report.courseCount,
      isBorder: true,
    },
    {
      id: 4,
      name: ["دانشجو های فعال", "Active Students"],
      statistics: report.studentCount,
      isBorder: false,
    },
  ];

  return statisticsItem;
};
