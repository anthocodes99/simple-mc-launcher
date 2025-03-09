<script setup lang="ts">
import { ref } from 'vue'
import HomeProfileInstance from './components/HomeProfileInstance.vue'
const profilePath = ref('')
const profileData = ref({})
async function getProfile(): Promise<void> {
  console.log(profilePath.value)
  const result = await window.electronAPI.getProfile(profilePath.value)
  profileData.value = result
}
async function launchMinecraft(): Promise<void> {
  await window.electronAPI.launchMinecraft()
}
</script>

<template>
  <h1 class="text-2xl px-8 mt-4 text-center font-bold">Simple Minecraft Launcher</h1>
  <section class="mt-8">
    <HomeProfileInstance
      :profile-name="'Vanilla+ 1.21.4'"
      :icon="'🔨'"
      :version="'1.21.4 - Fabric'"
    />
    <HomeProfileInstance
      :profile-name="'Tech World'"
      :icon="'🔧'"
      :version="'1.20.4 - Forge'"
      class="mt-4"
    />
  </section>
</template>
