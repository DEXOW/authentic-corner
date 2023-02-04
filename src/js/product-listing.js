window.onload = async () => {
    let listing;

    await fetch('/src/listings.json')
        .then(response => response.json())
        .then(response => {
            listing = response;
        }
    );

    let featured_cols = document.querySelectorAll('#featured .col');
    let shop_cols = document.querySelectorAll('#shop .col');
    let i = 0;
    let n = 0;
    for (let c = 0; c < listing.length; c++) {
        if (listing[c].featured == "true") {
            if (i >= featured_cols.length) {
                i = 0;
            }
            //Inserting listings to featured_cols
            let listingDiv = document.createElement('div');
            listingDiv.className = 'item';
            listingDiv.innerHTML = `
            <img src="/src/img/products/${listing[c].image_name}" alt="featured-item">
            <div class="item-info">
                <h3>${listing[c].name}</h3>
                <p>LKR ${listing[c].price}</p>
                <a href="">Buy Now</a>
            </div>`

            featured_cols[i].appendChild(listingDiv);
            i++;
        }
        if (n >= shop_cols.length) {
            n = 0;
        }
        //Inserting listings to featured_cols
        let shopListingDiv = document.createElement('div');
        shopListingDiv.className = 'item';
        shopListingDiv.innerHTML = `
        <img src="/src/img/products/${listing[c].image_name}" alt="shop-item">
        <div class="item-info">
            <h3>${listing[c].name}</h3>
            <p>LKR ${listing[c].price}</p>
            <a href="">Buy Now</a>
        </div>`

        shop_cols[n].appendChild(shopListingDiv);
        n++;
        
    }
}