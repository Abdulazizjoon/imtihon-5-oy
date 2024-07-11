let wraper=document.querySelector('.wraper_lar')
function createCard(product) {
    return `
    <div class="wraper" data-id="${product.id}">
                    <div style="background-image:url('${product.image}');" class="p">
                        <p class="a">
                            <i class="fa-solid fa-x"> </i>
                            <span>${product.category}</span>
                        </p>
                        
                        
                    </div>
                    <div class="k">
                        <div class="reyting">
                            <div class="imglarr">
                                <img src="./img/рейтинг.svg" alt="">
                                <p>(${product.comments}) отзывов</p>
                            </div>
                            <div class="ii">
                                <p class="variat">${product.name}</p>
                                <p class="skidka">
                                    <span class="yangi">${product.newPrice}₽</span>
                                    <span class="eski">${product.oldPrice}₽</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    `
  }
document.addEventListener('DOMContentLoaded',function() {
    fetch(`https://cars-pagination.onrender.com/products`)
    .then(res=>res.json())
    .then(function(data) {
        data.slice(1,13).forEach(product => {
            let card=createCard(product)
            wraper.innerHTML+=card 
        });
        let wrap=document.querySelector('.wraper')
        wrap.forEach(wrap=>{
            card.addEventListener('click',function() {
                let cardId=this.getAttribute('data-id')
                if(cardId) {
                    window.location.assign(`http://127.0.0.1:5500/html/pages.html?id=${cardId}`)
                }
            })
        })
    })
    .catch(function(err) {
        console.log(err);
    })
    .finally(function(er) {
        let loader=document.querySelector('.loader')
        loader.style.display='none'
        console.log(er);
    })
})





