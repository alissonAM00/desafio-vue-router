import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/productos",
    name: "productos",
    component: () => import("../views/ProductosView.vue"),
    props: (route) => {
      return {
        platos: [
          {
            nombre: "Pizza",
            precio: 15.99,
            descripcion: "Delicious pizza with a variety of toppings",
            cantidad: 10,
            imagen:require("../assets/img/pizza.jpeg")
          },
          {
            nombre: 'Hamburguesa',
            precio: 12.99,
            descripcion: 'Classic burger with juicy beef and fresh lettuce',
            cantidad: 20,
            imagen:require("../assets/img/hamburguesa.jpeg")
          },
          {
            nombre: 'Tacos',
            precio: 8.99,
            descripcion: 'Crispy tacos served with guacamole and sour cream',
            cantidad: 15,
            imagen:require("../assets/img/tacos.jpeg")
          },
          {
            nombre: 'Ensalada Caprese',
            precio: 10.99,
            descripcion: 'Fresh mozzarella cheese on a bed of tomatoes with basil leaves',
            cantidad: 25,
            imagen:require("../assets/img/ensaladacaprese.jpeg")
          },
          {
            nombre: 'Sushi',
            precio: 18.99,
            descripcion: 'Delicious sushi rolls with fresh fish and vegetables',
            cantidad: 12,
            imagen:require("../assets/img/sushi.jpeg")
          },
          {
            nombre: 'Pasta al Carbonara',
            precio: 14.99,
            descripcion: 'Spaghetti served with a creamy sauce made from cream, eggs, and Parmesan cheese',
            cantidad: 18,
            imagen:require("../assets/img/pastaalcarbonara.jpeg")
          }
        ],
      };
    },
  },
  {
    path: '/contacto',
    name: 'contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import ('../views/NotFoundView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
