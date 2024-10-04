import http from "../../interceptor";

const GetLandingReports = () => {
  try {
    const response = http.get("/Home/LandingReport");
    return response;
  } catch (error) {
    return [];
  }
};

export default GetLandingReports
