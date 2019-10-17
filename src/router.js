import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Home from "./components/Student.vue";
import Home from "./views/Home.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Home",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      component: Home,
      children: [
        {
          path: "",
          name: "About",
          component: () => import("./views/About.vue")
        }
      ]
    },
    {
      path: "/student",
      component: Home,
      children: [
        {
          path: "",
          name: "student",
          component: () => import("./components/Student.vue")
        }
      ]
    },
    {
      path: "/score/:name/:fen",
      name: "score",
      component: () => import("./components/score.vue")
    },
    {
      path: "*",
      name: "error",
      component: () => import("./components/error.vue")
    }
  ]
});
export default router;
