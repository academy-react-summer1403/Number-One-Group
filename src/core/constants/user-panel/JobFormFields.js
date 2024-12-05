const JobFormFields = [
  {
    id: 1,
    certificate: "jobTitle",
    sectionName: ["نام شغل", "Job Title"],
    dir: "rtl",
    variant: "simple",
  },
  {
    id: 2,
    certificate: "companyName",
    sectionName: ["نام شرکت", "Company Name"],
    dir: "rtl",
    variant: "simple",
  },
  {
    id: 3,
    certificate: "workStartDate",
    sectionName: ["تاریخ شروع", "Start Date"],
    dir: "ltr",
    variant: "date",
  },
  {
    id: 4,
    certificate: "workEndDate",
    sectionName: ["تاریخ پایان", "End Date"],
    dir: "ltr",
    variant: "date",
  },
  {
    id: 5,
    type: "url",
    certificate: "companyLinkdin",
    sectionName: ["لینکداین", "LinkedIn"],
    dir: "ltr",
    variant: "simple",
  },
  {
    id: 6,
    type: "url",
    certificate: "companyWebSite",
    sectionName: ["سایت شرکت", "Company Website"],
    dir: "ltr",
    variant: "simple",
  },
  {
    id: 7,
    certificate: "aboutJob",
    sectionName: ["درباره شغل", "About Job"],
    dir: "rtl",
    fullSize: true,
    variant: "area",
    style: "w-full sm:w-[94%]",
  },
];

export default JobFormFields;
