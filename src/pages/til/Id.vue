<template>
  <Til locale="id" :meta="meta" :posts="$page.posts.edges" :site-url="$page.metadata.siteUrl"/>
</template>

<script>
import Til from '~/components/Til.vue'

export default {
  metaInfo() {
    return this.meta
  },
  components: {
    Til
  },
  computed: {
    meta() {
      const title = '#TIL by Rahmanda Wibowo'
      const description = 'Kumpulan #TIL seputar web, teknologi, dan hal-hal yang random'
      const siteUrl = this.$page.metadata.siteUrl
      const url = `${siteUrl}/til/id/`

      return {
        htmlAttrs: {
          lang: 'id',
          dir: 'ltr'
        },
        title,
        description,
        link: [
          {
            href: `${siteUrl}/til/`, rel: 'canonical'
          },
          {
            href: url, hreflang: 'id', rel: 'alternate'
          },
          {
            href: `${siteUrl}/til/en/`, hreflang: 'en', rel: 'alternate'
          }
        ],
        meta: this.$generateMeta(title, description, siteUrl, url)
      }
    }
  }
}
</script>

<page-query>
query {
  metadata {
    siteUrl
  }
  posts: allTil(sortBy: "published_date", filter: {language: {eq: "id"}}) {
    edges {
      node {
        id
        title
        content
        slug
        published_date
        language
        translations {
          id
          en
        }
      }
    }
  }
}
</page-query>
