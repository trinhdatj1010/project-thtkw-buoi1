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
    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
        <div class="ratio ratio-1x1">
            <img class="card-img-top object-fit-cover" src="${obj.image}" alt="${obj.name}">
        </div>
        <div class="card-body d-flex flex-column p-3" style="background: #fff;">
            <h5 class="card-title fw-semibold mb-1" style="font-size:15px; color:#1a1a1a;">
                ${obj.name}
            </h5>
            <p class="mb-2 fw-semibold" style="font-size:16px; color:#185FA5;">
                ${obj.price}
            </p>
            <p class="card-text text-secondary mb-3" style="font-size:13px; line-height:1.6; flex-grow:1;">
                ${obj.description}
            </p>
            <a href="${obj.link}?masp=${obj.id}"
                class="btn w-100 d-flex align-items-center justify-content-center gap-2"
                style="background:#378ADD; color:#fff; border-radius:8px; font-size:14px; font-weight:500; padding:9px 0; border:none;">
                Chi tiết
            </a>
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