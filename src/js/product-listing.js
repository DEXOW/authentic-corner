window.onload = async () => {
    let listing;
    let data;

    const results = await Promise.allSettled([
        fetch('src/listings.json').then(response => response.json()).then(response => { listing = response; }),
        fetch('src/data.json').then(response => response.json()).then(response => { data = response; })
    ]);
    

    let featured_cols = document.querySelectorAll('#featured .col');
    let shop_cols = document.querySelectorAll('#shop .col');
    let i = 1;
    let n = 1;
    for (let c = 0; c < listing.length; c++) {
        if (listing[c].featured == "true") {
            if (i >= featured_cols.length) {
                i = 0;
            }
            //Inserting listings to featured_cols
            let listingDiv = document.createElement('div');
            listingDiv.className = 'item';
            listingDiv.innerHTML = `
            <img src="src/img/products/${listing[c].image_name}" alt="featured-item">
            <div class="item-info">
                <h3>${listing[c].name}</h3>
                <p>LKR ${listing[c].price}</p>
                <a href="https://wa.me/94${data.whatsapp}?text=Hi%20I%20would%20like%20to%20know%20more%20about%20this%20product.%20ID:%20${listing[c].id}%20Name:%20${listing[c].name}%20Listed%20at%20LKR%20${listing[c].price}" target="_blank" rel="noreferrer noopener">Buy Now</a>
            </div>`

            featured_cols[i].appendChild(listingDiv);
            i == 0 ? i = 3 : i == 3 ? i = 1 : i == 1 ? i = 2 : i == 2 ? i = 0 : i = 0;
        }
        //Inserting listings to shop_cols
        let shopListingDiv = document.createElement('div');
        shopListingDiv.className = 'item';
        shopListingDiv.innerHTML = `
        <img src="src/img/products/${listing[c].image_name}" alt="shop-item">
        <div class="item-info">
            <h3>${listing[c].name}</h3>
            <p>LKR ${listing[c].price}</p>
            <a href="https://wa.me/94${data.whatsapp}?text=Hi%20I%20would%20like%20to%20know%20more%20about%20this%20product.%20ID:%20${listing[c].id}%20Name:%20${listing[c].name}%20Listed%20at%20LKR%20${listing[c].price}" target="_blank" rel="noreferrer noopener">Buy Now</a>
        </div>`

        shop_cols[n].appendChild(shopListingDiv);
        n == 0 ? n = 3 : n == 3 ? n = 1 : n == 1 ? n = 2 : n == 2 ? n = 0 : n = 0;
    }
}