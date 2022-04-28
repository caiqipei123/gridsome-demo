const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-post-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\src\\pages\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\src\\pages\\Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\学习资料\\拉勾\\3-4\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/post/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
