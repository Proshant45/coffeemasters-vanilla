import API from "./services/API.js";
import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {}
app.Store = Store;
app.Router = Router;
window.addEventListener('DOMContentLoaded', () => {
    app.Router.init();
    loadData();
});
