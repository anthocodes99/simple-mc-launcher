<script setup lang="ts">
import { ref } from 'vue'
const profilePath = ref('')
const profileData = ref({})
const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
async function getProfile(): Promise<void> {
  console.log(profilePath.value)
  const result = await window.electronAPI.getProfile(profilePath.value)
  profileData.value = result
}
</script>

<template>
  <h1 class="text-4xl px-8 mt-4">Simple Minecraft Launcher</h1>
  <div class="flex flex-col max-w-lg gap-4 p-4 mx-4 mt-8 border border-gray-200 rounded-md">
    <label for="profile">Select Minecraft Profile</label>
    <select id="profile">
      <option>SkyFactory 5</option>
    </select>
    <label for="username">Username</label>
    <input id="username" type="text" placeholder="anthocodes99" />
    <label for="path">Path</label>
    <input id="path" v-model="profilePath" type="text" placeholder="anthocodes99" />
    <p>{{ profileData }}</p>
    <button
      class="px-4 py-2 max-w-sm bg-green-500 hover:bg-green-400 hover:cursor-pointer transition delay-200 rounded-md"
      @click="getProfile"
    >
      Launch Minecraft
    </button>
  </div>
  <section>
    <form
      action=""
      class="flex flex-col max-w-lg gap-4 p-4 mx-4 mt-12 border border-gray-200 rounded-md"
    >
      <h2 class="text-2xl">Create New Profile</h2>
      <input type="text" placeholder="My New Profile" />
      <input type="text" placeholder="./minecraft" />
      <select>
        <option>1.21.1</option>
      </select>
      <button
        class="px-4 py-2 max-w-sm bg-gray-500 hover:bg-gray-400 transition delay-200 rounded-md"
      >
        Create New Profile
      </button>
    </form>
  </section>
</template>
