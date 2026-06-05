const productlist=[
    {
        name: "chuối",
        price: "20k/kg",
        description: "ngon",
        image: "../assets/image/banana.jpg",
        link: "https://nutriscan.app/calories-nutrition/banana"
    },

    {
        name: "táo",
        price: "20k/kg",
        description: "ngon",
        image: "../assets/image/apple.jpg",
        link: "##"
    },

    {
        name: "sầu riêng",
        price: "100k/kg",
        description: "ngon",
        image: "../assets/image/durian.png",
        link: "##"
    },
]
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