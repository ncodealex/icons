<script lang="ts" setup>
import { ref, watch } from 'vue'

const icons = [
  {
    name: 'Rocket',
    className: 'n-icon n-icon-rocket',
    tags: 'rocket,start',
    isNew:false
  },
  {
    name: 'Home',
    className: 'n-icon n-icon-home',
    tags: 'home, breadcrumbs',
    isNew:false,

  },
  {
    name: 'Image',
    className: 'n-icon n-icon-image',
    tags: 'image, no-image, avatar',
    isNew:false
  },
  {
    name: 'Sun',
    className: 'n-icon n-icon-sun',
    tags: 'light,sun',
    isNew:false
  },
  {
    name: 'Moon',
    className: 'n-icon n-icon-moon',
    tags: 'dark,moon',
    isNew:false
  },
  {
    name: 'Drag',
    className: 'n-icon n-icon-drag',
    tags: 'drag element, drag, dots grid',
    isNew:false
  },
  {
    name: 'Dots vertical',
    className: 'n-icon n-icon-dots-v',
    tags: 'dots vertical',
    isNew:false
  },
  {
    name: 'Add',
    className: 'n-icon n-icon-add',
    tags: 'add, plus',
    isNew:false
  },
  {
    name: 'Close',
    className: 'n-icon n-icon-close',
    tags: 'close',
    isNew:false
  },

  ///
  {
    name: 'Translate',
    className: 'n-icon n-icon-translate',
    tags: 'translate',
  },
  {
    name: 'Ok',
    className: 'n-icon n-icon-ok',
    tags: 'ok',
    isNew:false
  },
  {
    name: 'Minus',
    className: 'n-icon n-icon-minus',
    tags: 'minus',
    isNew:false
  },
  {
    name: 'Edit',
    className: 'n-icon n-icon-edit',
    tags: 'edit',
    isNew:false
  },
  {
    name: 'Copy',
    className: 'n-icon n-icon-copy',
    tags: 'Copy',
    isNew:false
  },
  {
    name: 'trash',
    className: 'n-icon n-icon-trash',
    tags: 'trash',
    isNew:false
  },
  {
    name: 'Refresh',
    className: 'n-icon n-icon-refresh',
    tags: 'refresh, update',
    isNew:false
  },
  {
    name: 'Folder',
    className: 'n-icon n-icon-folder',
    tags: 'folder',
    isNew:false
  },
  {
    name: 'Folder Open',
    className: 'n-icon n-icon-folder-open',
    tags: 'folder open',
    isNew:false
  },
  {
    name: 'Settings',
    className: 'n-icon n-icon-settings',
    tags: 'settings, cog',
    isNew:false
  },
  {
    name: 'Eye',
    className: 'n-icon n-icon-eye',
    tags: 'eye, glass, password show',
    isNew:false
  },
  {
    name: 'Eye off',
    className: 'n-icon n-icon-eye-off',
    tags: 'eye, glass, password hide',
    isNew:false
  },
  {
    name: 'Log in',
    className: 'n-icon n-icon-log-in',
    tags: 'login',
    isNew:false
  },
  {
    name: 'Log out',
    className: 'n-icon n-icon-log-out',
    tags: 'logout',
    isNew:false
  },
  {
    name: 'Sort',
    className: 'n-icon n-icon-sort',
    tags: 'sort, sort column',
    isNew:false
  },
  {
    name: 'Sort',
    className: 'n-icon n-icon-sort',
    tags: 'sort, sort column',
    isNew:false
  },
  {
    name: 'Sort Asc',
    className: 'n-icon n-icon-sort-asc',
    tags: 'sort, sort ascelling asc',
    isNew:false
  },

  {
    name: 'Sort Desc',
    className: 'n-icon n-icon-sort-desc',
    tags: 'sort, sort ascelling asc',
    isNew:false
  },

  {
    name: 'Search',
    className: 'n-icon n-icon-search',
    tags: 'search',
    isNew:false
  },

  {
    name: 'Chevron right',
    className: 'n-icon n-icon-chevron-right',
    tags: 'chevron right',
    isNew:false
  },
  {
    name: 'Arrow right',
    className: 'n-icon n-icon-arrow-right',
    tags: 'Arrow right',
    isNew:false
  },
    /// NEW

  {
    name: 'Attach',
    className: 'n-icon n-icon-attach',
    tags: 'Attach',
    isNew:false
  },
  {
    name: 'Bell',
    className: 'n-icon n-icon-bell',
    tags: 'Bell',
    isNew:false
  },
  {
    name: 'Book open',
    className: 'n-icon n-icon-book-open',
    tags: 'Book open, help desk',
    isNew:false
  },
  {
    name: 'Coins stacked',
    className: 'n-icon n-icon-coins-stacked',
    tags: 'Coins stacked',
    isNew:false
  },
  {
    name: 'Container',
    className: 'n-icon n-icon-container',
    tags: 'Container',
    isNew:false
  },
    /////

  {
    name: 'Delete',
    className: 'n-icon n-icon-delete',
    tags: 'delete',
    isNew:false
  },
  {
    name: 'Flip backward',
    className: 'n-icon n-icon-flip-backward',
    tags: 'Flip backward, return, clear',
    isNew:false
  },
  {
    name: 'Hash',
    className: 'n-icon n-icon-hash',
    tags: 'Hash',
    isNew:false
  },
  {
    name: 'Layer tree',
    className: 'n-icon n-icon-layer-three',
    tags: 'Layer',
    isNew:false
  },
  {
    name: 'Left indent',
    className: 'n-icon n-icon-left-indent',
    tags: 'Left indent',
    isNew:false
  },
  {
    name: 'Right indent',
    className: 'n-icon n-icon-right-indent',
    tags: 'Right indent',
    isNew:false
  },
  {
    name: 'Life buoy',
    className: 'n-icon n-icon-life-buoy',
    tags: 'Life buoy',
    isNew:false
  },
  {
    name: 'Lock',
    className: 'n-icon n-icon-lock',
    tags: 'Lock',
    isNew:false
  },
  {
    name: 'Lock unlock',
    className: 'n-icon n-icon-lock-unlock',
    tags: 'Lock unlock',
    isNew:false
  },
////

  {
    name: 'Pin',
    className: 'n-icon n-icon-marker-pin',
    tags: 'pin, location',
    isNew:false
  },
  {
    name: 'Menu',
    className: 'n-icon n-icon-menu',
    tags: 'menu',
    isNew:false
  },
  {
    name: 'Package',
    className: 'n-icon n-icon-package',
    tags: 'package',
    isNew:false
  },
  {
    name: 'Phone',
    className: 'n-icon n-icon-phone',
    tags: 'phone',
    isNew:false
  },
  {
    name: 'Puzzle',
    className: 'n-icon n-icon-puzzle',
    tags: 'puzzle',
    isNew:false
  },  {
    name: 'Qr code',
    className: 'n-icon n-icon-qr-code',
    tags: 'Lock unlock',
    isNew:false
  },
  {
    name: 'Scan',
    className: 'n-icon n-icon-scan',
    tags: 'Lock unlock',
    isNew:false
  },

  {
    name: 'Send',
    className: 'n-icon n-icon-send',
    tags: 'send',
    isNew:false
  },

  {
    name: 'Switch',
    className: 'n-icon n-icon-switch-h',
    tags: 'Lock unlock',
    isNew:false
  },

  {
    name: 'Tool',
    className: 'n-icon n-icon-tool',
    tags: 'tool, repair, service',
    isNew:false
  },

  {
    name: 'Tool 2',
    className: 'n-icon n-icon-tool-2',
    tags: 'tool, repair, service',
    isNew:false
  },

  {
    name: 'Truck',
    className: 'n-icon n-icon-truck',
    tags: 'truck',
    isNew:false
  },

  {
    name: 'Text',
    className: 'n-icon n-icon-text',
    tags: 'text',
    isNew:false
  },


  {
    name: 'Volume max',
    className: 'n-icon n-icon-volume-max',
    tags: 'volume',
    isNew:false
  },

  {
    name: 'Volume off',
    className: 'n-icon n-icon-volume-off',
    tags: 'volume',
    isNew:false
  },

  {
    name: 'Warehouse',
    className: 'n-icon n-icon-warehouse',
    tags: 'warehouse',
    isNew:false
  },
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
      iconItem.tags.includes(qs.value.toLowerCase())
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
