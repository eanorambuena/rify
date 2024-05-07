import config from './config'

export const socialNetworksMessage = {
  whatsapp: (phone, number) => `https://wa.me/${phone}?text=Estoy%20interesado%20en%20la%20rifa${number ? `%20del%20número%20${number}` : ''}`,
  telegram: (username) => `https://t.me/${username}`
}

export const getPrice = () => {
  const { ticketPrice, currency, lang } = config
  return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(ticketPrice)
}
