<template>
  <div class="flex flex-col items-center">
    <div class="w-[25vw] mb-0">
      <img src="/img/player.png" alt="Player Image" class="w-full" />
    </div>
    <div
      class="bg-white rounded-lg custom-shadow p-4 w-full max-w-2xl text-center md:px-20 sm:px-8"
    >
      <div class="text-3xl font-bold text-pink-600 mb-2">
        Are you ready to take the challenge?
      </div>
      <div class="text-xs font-bold text-black mb-2 capitalize font-sans">
        Download Hariem Wizards App
      </div>

      <div class="flex flex-wrap justify-center gap-x-2 mb-2">
        <img
          src="/img/google-store.png"
          alt="Google Play"
          class="w-28 cursor-pointer"
        />
        <img
          src="/img/apple-store.png"
          alt="App Store"
          class="w-28 cursor-pointer"
        />
      </div>

      <Divider>
        <span class="px-4 text-black font-sans font-semibold">
          or you can sign up right now
        </span>
      </Divider>

      <input
        type="text"
        class="border rounded-lg p-1 px-2 w-full mb-4 focus:outline-pink-600 focus:outline outline-1"
        placeholder="Search Campaign here..."
        v-model="searchQuery"
        @input="fetchCampaigns"
      />

      <div v-if="loading">
        <Loader />
      </div>
      <div v-if="error" class="text-red-500">
        {{ error }}
      </div>

      <div class="h-32 overflow-auto pr-4 md:pr-8">
        <div v-if="!loading && !campaigns.length" class="text-gray-500">
          No campaigns found. Please try a different search.
        </div>

        <div
          v-for="(campaign, index) in campaigns"
          :key="index"
          class="flex items-center justify-between border p-2 rounded-lg mb-2 bg-gray-100 font-sans"
        >
          <div class="flex items-center">
            <img
              :src="campaign.logo_url || '/img/default-img.jpg'"
              alt="100x100"
              class="w-8 h-8 rounded-full mr-2 md:w-10 md:h-10 lg:w-12 lg:h-12"
              loading="lazy"
              @error="handleImageError"
            />
            <span
              class="truncate max-w-[100px] text-sm font-semibold sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px]"
            >
              {{ campaign.school_name }}
            </span>
          </div>
          <button
            class="bg-transparent text-pink-600 outline outline-pink-600 outline-1 px-2 py-1 rounded-lg hover:bg-pink-100 font-semibold text-xs md:text-sm lg:text-base md:px-4"
          >
            Join Campaign
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Divider from "./Divider.vue";
import Loader from "./Loader.vue";
import { getCampaignSchoolList } from "../api/campaignApi";

const campaigns = ref([]);
const searchQuery = ref("");
const loading = ref(false);
const error = ref("");

const fetchCampaigns = async () => {
  loading.value = true;
  error.value = "";
  try {
    const response = await getCampaignSchoolList(searchQuery.value);
    if (response && response.data?.school_list) {
      campaigns.value = response.data.school_list;
    } else {
      campaigns.value = [];
      error.value = "No campaigns found. Please try a different search.";
    }
  } catch (err) {
    console.error(err);
    error.value = "Failed to fetch campaigns. Please try again later.";
  } finally {
    loading.value = false;
  }
};

const handleImageError = (event) => {
  event.target.src = "/img/default-img.jpg";
};
onMounted(() => {
  fetchCampaigns();
});
console.log("Base URL:", import.meta.env.VITE_BASE_URL);
</script>

<style scoped>
.custom-shadow {
  box-shadow: 0 8px 16px rgba(104, 104, 104, 0.2),
    0 8px 16px rgba(86, 86, 86, 0.2);
}
</style>
