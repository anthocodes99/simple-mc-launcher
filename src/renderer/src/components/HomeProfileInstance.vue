<script setup lang="ts">
import HomeProfileEditDialog from './HomeProfileEditDialog.vue'
import HomeProfileInstanceDropdown from './HomeProfileInstanceDropdown.vue'
import { DialogTrigger } from 'reka-ui'
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
    <HomeProfileEditDialog>
      <div class="flex justify-between">
        <div class="flex items-center gap-8">
          <span class="text-2xl">{{ icon }}</span>
          <div>
            <h2 class="text-2xl font-bold">{{ profileName }}</h2>
            <p class="text-[#999999] font-light">{{ version }}</p>
          </div>
        </div>
        <div class="w-6 h-6 hover:cursor-pointer">
          <HomeProfileInstanceDropdown />
        </div>
      </div>
      <!-- TODO: Implement Last Played -->
      <p class="text-[#999999] mt-4">Last Played: 3 days ago</p>
      <div class="flex gap-2">
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
        <DialogTrigger as-child>
          <button
            class="flex items-center gap-2 justify-center mt-2 px-4 py-2 text-black bg-[#FFFF00] hover:bg-yellow-200 hover:cursor-pointer transition delay-200 rounded-md"
          >
            <div class="w-6 h-6">
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            Edit
          </button>
        </DialogTrigger>
      </div>
    </HomeProfileEditDialog>
  </div>
</template>
