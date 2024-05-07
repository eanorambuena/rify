import { html, load } from 'emmy-dom'
import './components/card'

const app = ({ el }) => {
  el.className = 'flex flex-col justify-center items-center gap-6 text-center w-full h-fit mt-10'

  const prizes = [
    {
      title: 'Yucca Elephantipes',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaX0EsPMvbuep5N1ttSYEdSldFtM0xe8H-K6SOkCUqyo8huqXHvG6D1z60pXsUr4Z9xlWzKJvbQvoLKd-vdrwFH68pkkpHiOJpzp5u4M3VKJ7mg-3uu_MHPZJ_l4aM5iesa_Rf4y6IMAr6MeVvBnEi0D=w792-h1067-s-no?authuser=3'
    },
    {
      title: 'Nephrolepis',
      src: 'https://www.gardeningexpress.co.uk/media/catalog/product/cache/fa4e57de89a0fb1427d2c82c53fb200f/b/o/boston-fern750x750_2.jpg'
    },
    {
      title: 'Plectranthus o Dólar, Planta del dinero 💰',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaU7_CsT5hJkRfaBRswGoL59iXl9tIW-60ZsmNDiC3xGCDgWYpQic3v1xSE8OBwkXIZHm3vJOUVpqSIbqPZa46mWxbwsDak-LPohlcHZx0bD55grjCFELb-aU5eLh0gWHWQ3digtQhNBsevjv4ynncVS=w726-h1083-s-no?authuser=3'
    },
    {
      title: 'Zantedeschia',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaXMtpg4WygqRrCMya7abOuhS5_LPZ1ZqZTJV2arZ8qrLBTxCeE87ZbpdxjqAafxYYAoG6bEnn0WhAsbPzuXPojSdh2bXbi-3pn3PCDcVG0rwhGjWDP--OEngU8wYujQ5aNiU0vnuizZ7gOKF59_qSMD=w726-h1139-s-no?authuser=3'
    },
    {
      title: 'Plectranthus Incienso',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaWukJidChXEY-NqF9Pt6yysl7kCodeMgZx45-XjN43NGzPJFasEx8XeEfTLlWFWLluYeFh-vJdtPF6Xx2BZ8HMUXQJ4iTmc6zw1NhVai_j5p4i0gNxRP2ZbgcFowndNRllWiRHcX0UugONbOgjoSV8_=w843-h1070-s-no?authuser=3'
    },
    {
      title: 'Geranium',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaUUGKyWKlfqmLYPGwIR0bClw06VmF-tATN84a_7Jay3TX-lBSrAaAD-u0zIaWX-WVY5bE89PcdXvwY2UuMuMYiwExWz7yTWURE68_F2zXg30PFCpdNCJMbstZs_DbqcK2wQ6UzjcaO5EL-JP7daUf47=w667-h713-s-no?authuser=3'
    },
    {
      title: 'Lazo de amor',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaVTj_LYUaDSbav_nDrGRykH9CFFn0emGK_gvb61l4oAfEEU_cwvh22XsUa0LWxVrUzuy0rbJAGz0Cq5GSR6QnxvucnePOkaVeW6Ulkb3akn_vO97o1bGM9z7IDnd-nUXWn3y8a1W2F5H_Eh3H_9A4-X=w923-h806-s-no?authuser=3'
    },
    {
      title: 'Haworthia Cebra',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaU4sSb0DwAZNG8UkpCPIN3NubMAmgA4bEYOTwUVJawfOE3CEx-nldtuQmmFYY_LngbIEvmDXPomfb8XOh5HIKahW9aycF9v8ZwXO6ZcSZAKygOlEQosszzipxGv_u6JntINVnznC7t39fSy1U7xcp8S=w808-h943-s-no?authuser=3'
    },
    {
      title: 'Haworthia',
      src: 'https://lh3.googleusercontent.com/pw/AJFCJaV1GgNiJ2PcdigYEuiHlZ5GtqwSLQGIRp7_c70Rbaxjvt7XtPXeaVJHb3IrcPH4KKGnWY0F-RD6azVl4b8A7xa--lVCNoKAsrUMcJ_lWqwgKx2md8udmQegd-KAlkxOohxqkP6GZehD3e_gJ8JqdTQb=w702-h810-s-no?authuser=3'
    },
    {
      title: 'Aloe Vera',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4P8dTz8X477G7qiDv7X9hCXl44rgwWaUwOtazsx7AA&s'
    },
    {
      title: 'Árbol de la Abundancia o Jade',
      src: 'https://thefunkycactus.co.uk/wp-content/uploads/2023/03/il_fullxfull.4733374599_jyla-scaled.jpg'
    }
  ]

  const numberOfParticipants = 0
  const numberOfPrizesPerUnlock = 10
  const prizesUnlocked = Math.floor(numberOfParticipants / numberOfPrizesPerUnlock)

  return html`
    <main class="flex flex-col items-center p-6 w-[90%] md:w-[60%] gap-6">
      <section class="flex flex-col items-center p-4 gap-6">
        <h1 class="text-3xl font-bold">💚EcoRifa🍀</h1>
        <p>¿No sabes qué regalarle a la mujer más importante de tu vida? Demuéstrale tu amor y gratitud regalándole vida este mes de la madre. Sorpréndela con un ser vivo que necesite de sus cuidados y que le brinde alegría y tranquilidad. En nuestro sitio web encontrarás opciones increíbles para regalarle a esa mujer tan especial. ¡Haz de este regalo una experiencia inolvidable para ambos y regálale vida hoy mismo!</p>
        <p class="text-md font-semibold">
          Para financiar mi intercambio de estudios en el extranjero, estoy rifando plantas. Cada número tiene un valor de $1.000 CLP.
          Cada 10 número se desbloquea una planta más. ¡Participa y llévate una planta a casa! 🌿
        </p>
        <p class="text-md">
          Si quieres participar, escríbeme a mi
          <a href="https://wa.me/56966307170?text=Estoy%20interesado%20en%20la%20rifa" target="_blank" class="text-green-500" aria-label="Chatea en WhatsApp">WhatsApp</a>
          o
          <a href="https://t.me/cochichua" target="_blank" class="text-green-500" aria-label="Chatea en Telegram">Telegram</a>
          . ¡Mucha suerte! 🍀
        </p>
        <p class="relative text-sm opacity-[90%]">
          Se rifan plantas 🪴 Las imágenes son referenciales, se entrega en macetero estándar terracota de vivero
          <span class="absolute -top-{0.1rem} inline-block">* </span>
        </p>
      </section>
      <section class="flex flex-col items-center p-4 gap-6">
        <h2 class="text-2xl font-bold">🌿Plantas a Sortear🌿</h2>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${String(prizes.map(({ title, src }, index) => html`
            <Card
              title="${title}"
              src=${src}
              locked=${index <= prizesUnlocked}
              lockedtext="Para desbloquear este premio faltan ${index * numberOfPrizesPerUnlock - numberOfParticipants} participantes"
            />
          `)).replace(/,/g, '')}
        </section>
      </section>
    </main>
  `
}

load(app, 'App');
