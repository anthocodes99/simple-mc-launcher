<script setup lang="ts">
interface Props {
  profileName: string
  version: string
  dateLastPlayed: number
  icon: string
  profile: string // TODO: update this later
}

const props = defineProps<Props>()

function launchMinecraft(): void {
  // TODO: implement
}
</script>

<template>
  <div class="max-w-sm mx-auto bg-[#2F2F2F] border border-[#999999] rounded-md px-6 py-6">
    <div class="flex justify-between">
      <div class="flex items-center gap-8">
        <span class="text-2xl">{{ icon }}</span>
        <div>
          <h2 class="text-2xl font-bold">{{ profileName }}</h2>
          <p class="text-[#999999] font-light">{{ version }}</p>
        </div>
      </div>
      <div class="w-6 h-6 hover:cursor-pointer">
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <!-- TODO: Implement Last Played -->
    <p class="text-[#999999] mt-4">Last Played: 3 days ago</p>
    <button
      class="flex items-center gap-2 justify-center mt-2 px-4 py-2 w-full text-black bg-[#00FF5E] hover:bg-green-400 hover:cursor-pointer transition delay-200 rounded-md"
      @click="launchMinecraft"
    >
      <div class="w-6 h-6">
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      Play
    </button>
  </div>
</template>
