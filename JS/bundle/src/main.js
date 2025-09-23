import { load } from 'cheerio'

/** @type {KittyUtils} */
const utils = {
  /**
   * @param {KittyEnv} env
   * @returns {string}
   */
  async getM3u8WithIframe(env) {
    const iframe = env.get<string>("iframe")
    const html = await req(`${env.baseUrl}${iframe}`)
    const m3u8 = html.match(/"url"\s*:\s*"([^"]+\.m3u8)"/)[1]
    const realM3u8 = m3u8.replaceAll("\\/", "/")
    return realM3u8
  }
}

export { load, utils }