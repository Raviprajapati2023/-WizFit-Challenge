const routes = [
  {
    path: "/",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/index.vue"),
      },

      // 404 Error page
      // NOTE: This route must be at last
      {
        path: "/:catchAll(.*)*",
        name: "notfound",
        component: () => import("../pages/NotFound.vue"),
        // redirect: '/', // homepage
      },
    ],
  },
];

export default routes;
