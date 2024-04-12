<script lang="ts" setup>
import { ref, watch } from 'vue'

const icons = [
  {
    name: 'Rocket',
    className: 'n-icon n-icon-rocket',
    tags: 'rocket,start'
  },
  {
    name: 'Sun',
    className: 'n-icon n-icon-sun',
    tags: 'light,sun'
  },
  {
    name: 'Moon',
    className: 'n-icon n-icon-moon',
    tags: 'dark,moon'
  },
  {
    name: 'Drag',
    className: 'n-icon n-icon-drag',
    tags: 'drag element, drag'
  },
  {
    name: 'Dots vertical',
    className: 'n-icon n-icon-dots-v',
    tags: 'dots'
  },
  {
    name: 'Add',
    className: 'n-icon n-icon-add',
    tags: 'add, plus'
  },
  {
    name: 'Close',
    className: 'n-icon n-icon-close',
    tags: 'close'
  },

  ///
  {
    name: 'Translate',
    className: 'n-icon n-icon-translate',
    tags: 'translate'
  },
  {
    name: 'Ok',
    className: 'n-icon n-icon-ok',
    tags: 'ok'
  },
  {
    name: 'Minus',
    className: 'n-icon n-icon-minus',
    tags: 'minus'
  },
  {
    name: 'Edit',
    className: 'n-icon n-icon-edit',
    tags: 'edit'
  },
  {
    name: 'Copy',
    className: 'n-icon n-icon-copy',
    tags: 'Copy'
  },
  {
    name: 'trash',
    className: 'n-icon n-icon-trash',
    tags: 'trash'
  },
  {
    name: 'Refresh',
    className: 'n-icon n-icon-refresh',
    tags: 'refresh, update'
  },
  {
    name: 'Folder',
    className: 'n-icon n-icon-folder',
    tags: 'folder'
  },
  {
    name: 'Folder Open',
    className: 'n-icon n-icon-folder-open',
    tags: 'folder open'
  },
  {
    name: 'Settings',
    className: 'n-icon n-icon-settings',
    tags: 'settings, cog'
  },
  {
    name: 'Eye',
    className: 'n-icon n-icon-eye',
    tags: 'eye, glass, password show'
  },
  {
    name: 'Eye off',
    className: 'n-icon n-icon-eye-off',
    tags: 'eye, glass, password hide'
  },
  {
    name: 'Log in',
    className: 'n-icon n-icon-log-in',
    tags: 'login'
  },
  {
    name: 'Log out',
    className: 'n-icon n-icon-log-out',
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
        class="flex w-full flex-col items-center justify-between gap-4 "
      >
        <div
          class="flex w-full justify-start gap-8 flex-col sm:flex-row"
          data-Id="head"
        >
          <div class="flex flex-row items-center gap-4 flex-nowrap">
            <div class="text-3xl font-bold flex-nowrap truncate">
              <span class="text-blue-900">_N</span>Code icons
            </div>
            <span
              class="rounded-md border border-blue-300 bg-blue-50 p-1 text-base"
            >{{ icons.length }}</span>
          </div>
          <div class="relative flex items-center gap-4 w-full sm:w-60">
            <input
              v-model="qs"
              class="border-primary w-full relative flex flex-row items-center rounded-md border bg-white pl-4 pr-10 py-2 text-gray-900 shadow transition-shadow focus:outline-none"
              placeholder="Keyup for search"
              tabindex="0"
            >
            <span
                v-show="qs.length > 0"
              class="n-icon n-icon-close cursor-pointer text-gray-300 transition-all hover:text-blue-400 absolute right-3"
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
              class="cursor-pointer rounded px-1 hover:bg-blue-600 items-center text-sm text-center hover:text-white"
              @click="copyToClipboard(icon.className)"
            >{{ icon.className.split(' ')[1] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
