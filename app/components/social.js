import { load, html } from "emmy-dom"
import { socialNetworksMessage } from '../lib'
import config from '../config'

const social = ({ props }) => {
  const { name } = props()

  const { accentColor, socials } = config

  const key = name().toLowerCase()
  const user = socials[key]

  if (!user) return ''

  return () => html`
    <a href="${socialNetworksMessage[key](user)}" target="_blank" class="text-green-500 text-${accentColor}-500" aria-label="Chatea en ${name()}">${name()}</a>
  `
}

load(social, 'Social')
