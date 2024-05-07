import { html, load } from 'emmy-dom'
import config from './config'
import { socialNetworksMessage, getPrice } from './lib'
import './components/card'
import './components/social'

const app = ({ el }) => {
  el.className = 'flex flex-col justify-center items-center gap-6 text-center w-full h-fit mt-10'

  const { socials, prizes, numberOfNumbers, numberOfPrizesPerUnlock, ticketPrice, currency, numbersBuyed } =  config

  const numberOfParticipants = numbersBuyed.length
  const prizesUnlocked = 1 + Math.floor(numberOfParticipants / numberOfPrizesPerUnlock)

  return html`
    <main class="flex flex-col items-center p-6 w-[90%] md:w-[60%] gap-6">
      <section class="flex flex-col items-center p-4 gap-6">
        <h1 class="text-3xl font-bold">${config.title}</h1>
        <p>${config.description}</p>
        ${config.details && html`
          <p class="text-md font-semibold">
            ${config.details({ price: getPrice(), numberOfNumbers })}
          </p>
        `}
        <p class="text-md">
          Si quieres participar, escríbeme a mi
          <Social name="WhatsApp" />
          ${ config.telegram && html` o <Social name="Telegram" />` }. ¡Mucha suerte! 🍀
        </p>
        ${ config.legal && html`
          <p class="relative text-sm opacity-[90%]">
            ${config.legal}
            <span class="absolute -top-{0.1rem} inline-block">* </span>
          </p>
        `}
      </section>
      <section class="flex flex-col items-center p-4 gap-6">
        <h2 class="text-2xl font-bold">${config.subheading}</h2>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${String(prizes.map(({ title, src }, index) => html`
            <Card
              title="${title}"
              src=${src}
              locked=${index <= prizesUnlocked}
              lockedtext="Para desbloquear este premio faltan ${Math.max(index * numberOfPrizesPerUnlock - numberOfParticipants, 0)} participantes"
            />
          `)).replace(/,/g, '')}
        </section>
      </section>
      <section class="flex flex-col items-center p-4 gap-6">
        <h2 class="text-2xl font-bold">🎟️Números Disponibles🎟️</h2>
        <p>Quedan ${numberOfNumbers} números disponibles</p>
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
