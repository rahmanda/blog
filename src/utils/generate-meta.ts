interface GenerateMetaParams {
  title: string
  description: string
  siteUrl: string
  url: string
}

export function generateMeta({title, description, siteUrl, url}: GenerateMetaParams) {
  const image = url.replace('/blog', '/thumbnails/blog').slice(0, -1) + '.png'

  return [
    {
      key: 'description', name: 'description', content: description
    },
    {
      name: 'twitter:card', content: 'summary_large_image'
    },
    {
      name: 'twitter:title', content: title
    },
    {
      name: 'twitter:site', content: '@rahmandawibowo'
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
      property: 'og:type', content: 'website'
    },
    {
      property: 'og:image', content: image
    }
  ]
}
