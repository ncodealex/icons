<script lang="ts" setup>
import { ref, watch } from 'vue'

const icons = [
  {
    name: 'Rocket',
    className: 'i i-rocket',
    tags: 'rocket,start'
  },
  {
    name: 'Sun',
    className: 'i i-sun',
    tags: 'light,sun'
  },
  {
    name: 'Moon',
    className: 'i i-moon',
    tags: 'dark,moon'
  },
  {
    name: 'Drag',
    className: 'i i-drag',
    tags: 'drag element, drag'
  },
  {
    name: 'Dots vertical',
    className: 'i i-dots-v',
    tags: 'dots'
  },
  {
    name: 'Add',
    className: 'i i-add',
    tags: 'add, plus'
  },
  {
    name: 'Close',
    className: 'i i-close',
    tags: 'close'
  },

  ///
  {
    name: 'Translate',
    className: 'i i-translate',
    tags: 'translate'
  },
  {
    name: 'Ok',
    className: 'i i-ok',
    tags: 'ok'
  },
  {
    name: 'Minus',
    className: 'i i-minus',
    tags: 'minus'
  },
  {
    name: 'Edit',
    className: 'i i-edit',
    tags: 'edit'
  },
  {
    name: 'Copy',
    className: 'i i-copy',
    tags: 'Copy'
  },
  {
    name: 'trash',
    className: 'i i-trash',
    tags: 'trash'
  },
  {
    name: 'Refresh',
    className: 'i i-refresh',
    tags: 'refresh, update'
  },
  {
    name: 'Folder',
    className: 'i i-folder',
    tags: 'folder'
  },
  {
    name: 'Folder Open',
    className: 'i i-folder-open',
    tags: 'folder open'
  },
  {
    name: 'Settings',
    className: 'i i-settings',
    tags: 'settings, cog'
  },
  {
    name: 'Eye',
    className: 'i i-eye',
    tags: 'eye, glass, password show'
  },
  {
    name: 'Eye off',
    className: 'i i-eye-off',
    tags: 'eye, glass, password hide'
  },
  {
    name: 'Log in',
    className: 'i i-log-in',
    tags: 'login'
  },
  {
    name: 'Log out',
    className: 'i i-log-out',
    tags: 'logout'
  }
]

const iconsSet = icons.map((icon) => {
  return Object.assign({}, icon, { show: true })
})

const items = ref(iconsSet)

const qs = ref('')

watch(
  () => qs.value,
  (value) => {
    if (value.length == 0) {
      items.value = iconsSet
    }
    items.value = iconsSet.filter((iconItem) =>
      iconItem.tags.includes(qs.value)
    )
  },
  { immediate: true }
)

const showCopyMessage = ref(false)
const copyMessageText = ref('')

const copyToClipboard = (clipboardItem: string) => {
  navigator.clipboard.writeText(clipboardItem)

  copyMessageText.value = clipboardItem
  showCopyMessage.value = true

  setTimeout(() => {
    copyMessageText.value = ''
    showCopyMessage.value = false
  }, 1000)
}
</script>

<template>
  <div class="flex h-lvh w-lvw flex-col bg-gray-50 p-8">
    <div class="container mx-auto flex flex-col gap-4">
      <!--input-->
      <div
        class="flex w-full flex-col items-center justify-between gap-4"
      >
        <div
          class="flex w-full justify-start gap-8"
          data-Id="head"
        >
          <div class="flex flex-row items-center gap-4">
            <div class="text-3xl font-bold">
              <span class="text-blue-900">_N</span>Code icons
            </div>

            <span
              class="rounded-md border border-blue-300 bg-blue-50 p-1 text-base"
            >{{ icons.length }}</span>
          </div>
          <div class="flex items-center gap-4">
            <input
              v-model="qs"
              class="border-primary relative flex flex-row items-center rounded-md border bg-white px-4 py-2 text-gray-900 shadow transition-shadow focus:outline-none"
              placeholder="Keyup for search"
              tabindex="0"
            >
            <span
              :class="
                qs.length > 0 ? 'opacity-100' : 'opacity-0'
              "
              class="i i-close cursor-pointer text-gray-300 transition-all hover:text-blue-400"
              style="width: 1.5rem; height: 1.5rem"
              @click="qs = ''"
            />
          </div>
          <div
            v-show="showCopyMessage"
            class="absolute bottom-8 left-8 flex gap-2"
          >
            <span
              class="flex items-center gap-2 rounded-md border bg-blue-200 px-6 py-2 opacity-100 shadow-2xl"
            >
              <span class="text-2xl">🫡</span>
              <span>Copied to clipboard:</span>
              <span class="font-bold">{{
                copyMessageText
              }}</span>
            </span>
          </div>
        </div>

        <div
          class="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8"
        >
          <div
            v-for="icon in items"
            v-show="icon.show"
            :key="icon.className"
            class="flex flex-col items-center justify-center gap-2 rounded-md p-2 hover:bg-blue-100 hover:shadow"
          >
            <div
              class="flex text-center text-xs font-bold text-blue-800"
            >
              {{ icon.name.toUpperCase() }}
            </div>
            <i
              :class="icon.className"
              style="width: 2rem; height: 2rem"
            />
            <span
              class="cursor-pointer rounded px-1 hover:bg-blue-600 hover:text-white"
              @click="copyToClipboard(icon.className)"
            >{{ icon.className }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
