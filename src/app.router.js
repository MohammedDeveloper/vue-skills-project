import Vue from 'vue';
import Router from 'vue-router';

// App components
import LearnComp from "./components/Learn.vue";
import AboutUsComp from "./components/AboutUs.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "learn",
            component: LearnComp
        },
        {
            path: "/aboutus/:name?",
            name: "aboutUs",
            component: AboutUsComp
        }
    ]
})