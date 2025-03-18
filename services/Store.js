const Store ={
    menu: null,
    cart: [],
}
const ProxiedStore = new Proxy(Store, { 
    set(target, property, value) {
        target[property] = value;

        if(property == 'menu'){
            window.dispatchEvent(new Event('appMenuChanged'));
        }
        if(property == 'cart'){
            window.dispatchEvent(new Event('appCartChanged'));
        }
        return true;

    }
})

export default ProxiedStore;