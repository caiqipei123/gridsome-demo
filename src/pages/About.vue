<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead"
            :style="{
        backgroundImage: `url('http://106.75.65.135:1337${about.cover.url}')`
      }">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="page-heading">
              <h1>{{about.title}}</h1>
              <span class="subheading">{{about.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="mdToHtml(about.content)">
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>
<page-query>
  query{
    about: allStrapiAbout{
      edges{
        node{
          id,
          title,
          subtitle,
          content,
          cover{
            url
          }
        }
      }
    }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'About us'
  },
  computed: {
    about(){
      return this.$page.about.edges[0].node
    }
  },
  methods: {
    mdToHtml(markdown){
      return md.render(markdown)
    }
  },
}
</script>
