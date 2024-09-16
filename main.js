let url = "https://fakestoreapi.com/products";
let man = document.getElementById('menCategory');
let women = document.getElementById('womenCategory');
let other = document.getElementById('otherCategory');
fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            if (element.category === "men's clothing") {
                let cart = document.createElement('div');
                let productName = document.createElement('h3')
                let image = document.createElement('img')
                let price = document.createElement('p');
                cart.setAttribute('class', 'cart')
                productName.setAttribute('class', 'prodct-name')
                image.setAttribute('class', 'prodct-image')
                price.setAttribute('class', 'prodct-price')
                productName.textContent = element.title;
                image.src = element.image
                price.textContent = "price: "+element.price+" $";
                cart.appendChild(productName)
                cart.appendChild(image)
                cart.appendChild(price)
                man.appendChild(cart)
            }

            else if (element.category === "women's clothing") {
                let cart = document.createElement('div');
                let productName = document.createElement('h3')
                let image = document.createElement('img')
                let price = document.createElement('p');
                cart.setAttribute('class', 'cart')
                productName.setAttribute('class', 'prodct-name')
                image.setAttribute('class', 'prodct-image')
                price.setAttribute('class', 'prodct-price')
                productName.textContent = element.title;
                image.src = element.image
                price.textContent = "price: "+element.price+" $";

                cart.appendChild(productName)
                cart.appendChild(image)
                cart.appendChild(price)
                women.appendChild(cart)
            }
            else{
                let cart = document.createElement('div');
                let productName = document.createElement('h3')
                let image = document.createElement('img')
                let price = document.createElement('p');
                cart.setAttribute('class', 'cart')
                productName.setAttribute('class', 'prodct-name')
                image.setAttribute('class', 'prodct-image')
                price.setAttribute('class', 'prodct-price')
                productName.textContent = element.title;
                image.src = element.image
                price.textContent = "price: "+element.price+" $";

                cart.appendChild(productName)
                cart.appendChild(image)
                cart.appendChild(price)
                other.appendChild(cart)
            }

        });

    })