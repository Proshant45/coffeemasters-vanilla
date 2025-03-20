import API from "./services/API.js";
import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import ProductItem from "./components/ProductItem.js";

window.app = {}
app.Store = Store;
app.Router = Router;
window.addEventListener('DOMContentLoaded', () => {
    app.Router.init();
    loadData();
});

window.addEventListener('appcartchange', () => {
    const badge = document.getElementById('badge');
    const quantity = app.Store.cart.reduce(
        (acc, item) => acc + item.quantity, 0);

    badge.textContent = quantity;
    badge.hidden = quantity;
    

});
