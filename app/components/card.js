import { load, html } from 'emmy-dom'

const card = ({ el, props }) => {
  el.className = 'bg-white text-black p-3 rounded-lg w-fit-content border border-gray-200 grid grid-rows-subgrid gap-4 row-span-2'

  const { title, src } = props()

  return html`
    <h3 class="text-xl font-bold flex h-full items-center justify-center">${title()}</h3>
    <img src="${src()}" alt="${title()}" class="w-full rounded-lg aspect-[3/4] object-cover" />
  `
}

load(card, 'Card')
