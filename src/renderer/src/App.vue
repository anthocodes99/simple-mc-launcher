<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HomeProfileInstance from './components/HomeProfileInstance.vue'
const profilePath = ref('')
const profileData = ref([])
async function getProfile(): Promise<void> {
  console.log(profilePath.value)
  const result = await window.electronAPI.getProfile(profilePath.value)
  profileData.value = result
}
async function launchMinecraft(): Promise<void> {
  await window.electronAPI.launchMinecraft()
}
onMounted(async () => {
  profileData.value = await window.electronAPI.loadProfiles('./profiles')
})
</script>

<template>
  <h1 class="text-2xl px-8 mt-4 text-center font-bold">Simple Minecraft Launcher</h1>
  <section class="mt-8">
    <template v-if="profileData.length === 0"> Loading... </template>
    <template v-for="profile in profileData" v-else :key="profile">
      <HomeProfileInstance :profile />
    </template>
  </section>
</template>
