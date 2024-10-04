import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.devharlemwizardsinabox.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCampaignSchoolList = (searchQuery) => {
  return apiClient.get(`/campaign/campaign_school_list/`, {
    params: { search: searchQuery },
  });
};
