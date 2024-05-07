import { load, html } from 'emmy-dom'


const lockIcon = ({ size, stroke = "currentColor" }) => html`
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>
`

const card = ({ el, props }) => {
  const { title, src, locked, lockedtext } = props()
  
  el.className = 'bg-white text-black p-3 rounded-lg w-fit-content border border-gray-200 grid grid-rows-subgrid gap-4 row-span-2 relative'

  return html`
    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-lg flex flex-column justify-center items-center ${locked() ? '' : 'hidden'}">
      ${lockIcon({ size: 50, stroke: '#ddd' })}
    </div>
    <h3 class="text-xl font-bold flex h-full items-center justify-center">${title()}</h3>
    <img src="${src()}" alt="${title() + locked() ?? lockedtext()}" class="w-full rounded-lg aspect-[3/4] object-cover" />
  `
}

load(card, 'Card')
