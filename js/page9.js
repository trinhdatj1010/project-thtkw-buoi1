function createItem(obj)
{
    const item=document.createElement("div");
    item.setAttribute("class","container-item");
    //tạo ảnh
    const image=document.createElement("img");
    image.setAttribute("src",obj.image);
    image.setAttribute("alt",obj.name);
    //tạo khung chứa 
    const containerImage=document.createElement("div");
    containerImage.setAttribute("class","container-image");
    const containerInfo=document.createElement("div");
    containerInfo.setAttribute("class","container-info");
    //tạo text
    const name=document.createElement("p");
    name.innerHTML=obj.name;
    const price=document.createElement("p");
    price.innerHTML=obj.price;
    const description=document.createElement("p");
    description.innerHTML=obj.description;
    const link=document.createElement("a");
    link.innerHTML="More";
    link.setAttribute("href",obj.link);
    //appen
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);
    containerImage.appendChild(image);
    //appen
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    document.getElementById("product-list").appendChild(item);
}

function createItemV2(obj)
{
    const list=document.getElementById("product-list")
    list.innerHTML +=`
        <div class="col">
                <div class="card h-100 w-100">
                    <div class="image ratio ratio-1x1">
                        <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                    </div>
                    <div class="card-body text-center" style="background: whitesmoke;">
                        <h5 class="card-title text-primary">${obj.name}</h5>
                        <h6 class="card-text">${obj.price}</h6>
                        <p style="text-align: ; line-height: 1.5;" class="card-text">${obj.description}</p>
                        <a href="${obj.link}?masp=${obj.id}" class="card-link btn btn-primary" style="background: gray; border: white">Chi tiết</a>
                    </div>
                </div>
            </div>
    `;
}

function fullitem(arr)
{
    let i=0;
    while (i<arr.length) {
        createItemV2(arr[i]);
        i++;
    }
}