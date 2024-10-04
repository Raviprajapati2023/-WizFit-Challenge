import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCampaignSchoolList = (searchQuery) => {
  return apiClient.get(`/campaign/campaign_school_list/`, {
    params: { search: searchQuery },
  });
};
