<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle
} from 'reka-ui'

import type { Profile } from '@customTypes/profile'
import { toRefs } from 'vue'

// import { Icon } from '@iconify/vue'
interface Props {
  profile: Profile
}
const props = defineProps<Props>()
const { name, icon, dateLastPlayed, options } = toRefs(props.profile)
</script>

<template>
  <DialogRoot>
    <slot />
    <DialogPortal>
      <DialogOverlay
        class="bg-[#070707b3] data-[state=open]:animate-overlayShow fixed inset-0 z-30"
      />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#2F2F2F] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold"> Edit Profile</DialogTitle>
        <fieldset class="mt-8 mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-sm" for="name"> Name </label>
          <input
            id="name"
            class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            :value="name"
          />
        </fieldset>
        <!-- TODO: Implemnet icon selector -->
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-sm" for="version"> Version </label>
          <input
            id="version"
            class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            :value="options.version.custom ?? options.version.number"
          />
        </fieldset>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-sm" for="root">
            Game Directory
          </label>
          <input
            id="root"
            class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            :value="options.root"
          />
        </fieldset>
        <fieldset class="mb-[15px] flex items-center gap-5">
          <label class="text-grass11 w-[90px] text-right text-sm" for="customLaunchArgs">
            Custom Launch Arguments
          </label>
          <input
            id="customLaunchArgs"
            class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            :value="options.customLaunchArgs"
          />
        </fieldset>
        <div class="border border-[#999999] rounded-sm py-2 pr-4 mb-[15px]">
          <fieldset class="flex items-center gap-5">
            <legend class="pl-5">Memory</legend>
            <label class="text-grass11 w-[90px] text-right text-sm" for="minMemory"> Min </label>
            <input
              id="minMemory"
              class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              :value="options.memory.min"
            />
            <label class="text-grass11 w-[90px] text-right text-sm" for="maxMemory"> Max</label>
            <input
              id="maxMemory"
              class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              :value="options.memory.max"
            />
          </fieldset>
        </div>
        <div class="border border-[#999999] rounded-sm py-2 pr-4 mb-[15px]">
          <fieldset class="flex items-center gap-5">
            <legend class="pl-5">Window</legend>
            <label class="text-grass11 w-[90px] text-right text-sm" for="windowWidth">
              Width
            </label>
            <input
              id="windowWidth"
              class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              :value="options.window.width"
            />
            <label class="text-grass11 w-[90px] text-right text-sm" for="windowHeight">
              Height</label
            >
            <input
              id="windowHeight"
              class="text-grass11 bg-[#2F2F2F] shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-sm leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              :value="options.window.height"
            />
          </fieldset>
        </div>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="bg-[#00FF5E] text-[#2F2F2F] text-sm hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-lg px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none cursor-pointer"
            >
              Save changes
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <svg class="w-6 h-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
