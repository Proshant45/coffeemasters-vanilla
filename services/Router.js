
const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach( a=> {
            a.addEventListener("click" , event => {
                event.preventDefault();
                const url = event.target.getAttribute("href")
                Router.go(url);
            })
            window.addEventListener('popstate', event => {
                console.log(event.state.route);
                Router.go(event.state.route, false);
            })
        
        })

        Router.go(location.pathname)
        
        },
    go: (route, addToHistory = true) => {  
        console.log(route);
        if(addToHistory) {
            history.pushState({route}, null, route);
        }

        let pageElement = null;
        switch(route){
            case "/":
                pageElement = document.createElement('h1');
                pageElement.textContent = "Home";
                console.log(pageElement);
                break;

            case "/order":
                pageElement = document.createElement('h1');
                pageElement.textContent = " Here is Your Order";
                console.log(pageElement);
                break;
            
            default:
                if(route.startsWith("/product-")){
                    pageElement = document.createElement('h1');
                    pageElement.textContent = " Details";
                    pageElement.dataset.productId = route.substring(route.lastIndexOf("-")+1);
                }

        }

        if(pageElement){
            const cache = document.querySelector("main")
            cache.innerHTML = "";
             cache.appendChild(pageElement);
        }
      
        window.scrollX = 0;
        window.scrollY = 0;
    
    }

}

export default Router;