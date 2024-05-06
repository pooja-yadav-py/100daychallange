console.log("welcome to my")

let tabs = document.querySelector('.tabs');
let gallery = document.querySelectorAll('.images');
console.log(gallery)
tabs.addEventListener('click',(event)=>{
    console.log(event.target.dataset.category)
    if(event.target.dataset.category!==undefined){
        filterGallery(event.target.dataset.category);
    }
    
})

const filterGallery = (value)=>{
    gallery.forEach((item)=>{
        if(item.dataset.category === value || value === 'all' ){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
        
    })
}