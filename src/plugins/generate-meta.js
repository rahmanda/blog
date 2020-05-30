export default {
  install(Vue) {
    Vue.prototype.$generateMeta = generateMeta
  }
}

export function generateMeta(title, description, siteUrl, url) {
  const image = `${siteUrl}/og-image.jpg`

  return [
    {
      key: 'description', name: 'description', content: description
    },
    {
      name: 'twitter:card', content: 'summary'
    },
    {
      name: 'twitter:title', content: title
    },
    {
      name: 'twitter:creator', content: '@rahmandawibowo'
    },
    {
      name: 'twitter:description', content: description
    },
    {
      name: 'twitter:image', content: image
    },
    {
      property: 'og:title', content: title
    },
    {
      property: 'og:description', content: description
    },
    {
      property: 'og:url', content: url
    },
    {
      property: 'og:image', content: image
    }
  ]
}
