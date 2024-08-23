<script setup lang="ts">
import { ref, watch } from 'vue'

const dialog = ref(null)

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:open', 'close'])

const closeDialog = () => {
	emit('update:open', false)
};

watch(
  () => props.open,
  (open) => {
    if (open) {
      dialog.value.showModal()
    } else {
      dialog.value.close()
    }
  }
)
</script>

<template>
	<dialog ref="dialog">
		<button autoFocus class="close" @click="closeDialog">X</button>
		Hello!
	</dialog>
</template>

<style scoped>
	dialog .close {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>