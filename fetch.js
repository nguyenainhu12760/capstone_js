fetch('https://shop.cyberlearn.vn/api/Product/getbyid?id=1')
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('nameProduct').textContent = JSON.stringify(data.content.name);
        document.getElementById('img').src = data.content.image;
        document.getElementById('desc').textContent = JSON.stringify(data.content.description);
        document.getElementById('pri').textContent = JSON.stringify(data.content.price);

        const productList = document.getElementById('col');

            data.forEach(item => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                for (const key in item) {
                    if (Object.hasOwnProperty.call(item, key)) {
                        const p = document.createElement('p');
                        p.textContent = `${key}: ${item[key]}`;
                        productDiv.appendChild(p);
                    }
                }

                productList.appendChild(productDiv);
            })

    if (data.name)
        console.log(data.name);
    })
    .catch(function(err) {
    console.log(err);
    });
