<template>
  <div>
    <nav class="pt-1 bg-red-200">
      <img src="/img/banner.png" alt="700x100" class="h-40 w-full" />
    </nav>
    <main>
      <MidSection />
      <SchoolList />
    </main>
  </div>
</template>
<script setup>
import MidSection from "../components/MidSection.vue";
import SchoolList from "../components/SchoolList.vue";
</script>
