import { html, load } from 'emmy-dom'
import config from './config'
import { socialNetworksMessage, getPrice } from './lib'
import './components/card'
import './components/social'

const whatsappIcon = ({ size = 24, color = 'currentColor' }) => html`
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
  </svg>
`	

const app = ({ el }) => {
  el.className = 'flex flex-col justify-center items-center gap-6 text-center w-full h-fit mt-10'

  const { socials, prizes, numberOfNumbers, numberOfPrizesPerUnlock, numbersBuyed } =  config

  const numberOfParticipants = numbersBuyed.length
  const prizesUnlocked = 1 + Math.floor(numberOfParticipants / numberOfPrizesPerUnlock)
  const whatsappNumber = String(socials.whatsapp).replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '+$1 $2 $3 $4')

  return html`
    <main class="flex flex-col items-center p-6 w-[90%] md:w-[60%] gap-6">
      <section class="flex flex-col items-center p-4 gap-6">
        <h1 class="text-3xl font-bold">${config.title}</h1>
        <p>${config.description}</p>
        ${config.details && html`
          <p class="text-md font-semibold">
            ${config.details({ price: getPrice(), numberOfNumbers, numberOfParticipants })}
          </p>
        `}
        <p class="text-md">
          Si quieres participar, escríbeme a mi
          <Social name="WhatsApp" />${socials.telegram ? 'o' : ''}<Social name="Telegram" />.
          ¡Mucha suerte! 🍀
        </p>
        <p class="text-md">${whatsappIcon({ color: 'green' })} ${whatsappNumber}</p>
        ${ config.legal && html`
          <p class="relative text-sm opacity-[90%]">
            ${config.legal}
            <span class="absolute -top-{0.1rem} inline-block">* </span>
          </p>
        `}
      </section>
      <section class="flex flex-col items-center p-4 gap-6">
        <h2 class="text-2xl font-bold">${config.subheading}</h2>
        <div class="flex flex-col items-center gap-2">
          <p class="text-sm">Faltan ${Math.max(numberOfPrizesPerUnlock * prizesUnlocked - numberOfParticipants, 0)} participantes para desbloquear el siguiente premio</p>
          <progress class="w-full" max="${numberOfPrizesPerUnlock}" value="${numberOfParticipants % numberOfPrizesPerUnlock}"></progress>
        </div>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${String(prizes.map(({ title, src }, index) => html`
            <Card
              title="${title}"
              src=${src}
              locked=${index >= prizesUnlocked}
              lockedtext="Para desbloquear este premio faltan ${Math.max(index * numberOfPrizesPerUnlock - numberOfParticipants, 0)} participantes"
            />
          `)).replace(/,/g, '')}
        </section>
      </section>
      <section class="flex flex-col items-center p-4 gap-6">
        <h2 class="text-2xl font-bold">🎟️Números Disponibles🎟️</h2>
        <p>Quedan ${numberOfNumbers - numberOfParticipants} números disponibles</p>
        <article class="grid grid-cols-5 md:grid-cols-10 gap-4">
          ${String(Array.from({ length: numberOfNumbers }, (_, index) => index + 1).map(number => html`
            <a class="bg-green-500 text-white font-bold rounded-lg p-2 text-center ${numbersBuyed.includes(number) ? 'bg-red-500 cursor-not-allowed disabled' : 'hover:bg-green-600'}" aria-label="Comprar número ${number}" href="${numbersBuyed.includes(number) ? '#' : socialNetworksMessage.whatsapp(socials.whatsapp, number)}">
              ${number}
            </a>
          `)).replace(/,/g, '')}
        </article>
    </main>
  `
}

load(app, 'App')
