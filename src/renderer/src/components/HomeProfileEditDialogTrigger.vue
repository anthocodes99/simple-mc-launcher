<script setup lang="ts">
import { onMounted } from 'vue'
import { injectDialogRootContext, useForwardExpose, useId } from 'reka-ui'

const { currentElement } = useForwardExpose()
const rootContext = injectDialogRootContext()
rootContext.contentId ||= useId(undefined, 'reka-dialog-content')
onMounted(() => {
  rootContext.triggerElement.value = currentElement.value
})

function toggleDialog(): void {
  setTimeout(() => rootContext.onOpenToggle(), 500)
}
</script>

<template>
  <button
    aria-haspopup="dialog"
    :aria-expanded="rootContext.open.value || false"
    :aria-controls="rootContext.open.value ? rootContext.contentId : undefined"
    :data-state="rootContext.open.value ? 'open' : 'closed'"
    @click="toggleDialog"
  >
    Edit Profile
  </button>
</template>
