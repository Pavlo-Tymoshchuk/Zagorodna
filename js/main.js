
document.addEventListener('DOMContentLoaded', function(){
    // SLider
    
    // let arrows = document.querySelectorAll(".js-arrows-main");
    
    //  function initialSlider() {
    //     for(var i = 0;arrows.length > i; i++) {
    //         let slider = arrows[i].closest(".js-slider");
    //         let arrowNext = arrows[i].querySelector('.next');
    //         let arrowPrev = arrows[i].querySelector('.prev');
    //         let allItems = slider.querySelectorAll('.js-main-slider').length;
    //         let mainItem = document.querySelectorAll('.js-main-slider');
           
            
    //         arrowNext.addEventListener('click', function() {
    //             let itemShow = slider.querySelector('.js-main-slider.show');
    //             let dotActive = slider.querySelector('.js-dot.active');
                
    //             if(slider.querySelector('.js-main-slider.show').nextElementSibling == null) {
    //                  mainItem.forEach(function(item){
    //                     item.classList.remove('show');
    //                 });
                    
    //                 document.querySelector('.js-main-slider[data-index = "1"]').classList.add('show');
    //             }
                
    //             // if(dotActive) {
    //             //     dotActive.nextElementSibling.classList.add('active');
    //             //     dotActive.classList.remove('active');
    //             // }
                
                
    //             itemShow.nextElementSibling.classList.add('show');
    //             itemShow.classList.remove('show');
                
                
    //         });
            
    //         arrowPrev.addEventListener('click', function() {
    //             let itemShow = slider.querySelector('.js-main-slider.show');
    //             let dotActive = slider.querySelector('.js-dot.active');
                
    //             if(slider.querySelector('.js-main-slider.show').previousElementSibling == null) {
    //                  mainItem.forEach(function(item){
    //                     item.classList.remove('show');
    //                 });
                    
    //                 document.querySelector('.js-main-slider[data-index= "'+ allItems + '"]').classList.add('show');
    //             }
                 
    //             if(dotActive) {
    //                 dotActive.previousElementSibling.classList.add('active');
    //                 dotActive.classList.remove('active');
    //             }
                
    //             itemShow.previousElementSibling.classList.add('show');
    //             itemShow.classList.remove('show');

    //         });

    //         var startPointX;
    //         var startPointY;
    //         slider.addEventListener("touchstart", function(event) {
    //             startPointX = event.changedTouches[0].screenX;
    //             startPointY = event.changedTouches[0].screenY;
    //         }, false);
    //         slider.addEventListener("touchend", function(event){
    //             var endPointX = event.changedTouches[0].screenX;
    //             var endPointY = event.changedTouches[0].screenY;
                
    //             if(startPointX - endPointX > 40) {
    //                 arrowNext.click();
    //             } else if(endPointX - startPointX > 40) {
    //                 arrowPrev.click();
    //             }
    //         }, false);
    //     }
    // }
    

    // initialSlider();
    
    
    // document.addEventListener('click', function(e){
    //     let elem = e.target;
        
    //     if(elem.closest('.js-dot')) {
    //         document.querySelectorAll('.js-dot').forEach(function(item){
    //             item.classList.remove('active');
    //         });
            
    //         let mainItem = document.querySelectorAll('.js-main-slider')
    //         mainItem.forEach(function(item){
    //             item.classList.remove('show');
    //         });
            
    //         let index = elem.getAttribute('data-index');
            
    //         document.querySelector('.js-main-slider[data-index= "'+ index + '"]').classList.add('show');
    //         elem.classList.add('active');
    //     }
    // });
    
    // // /SLider
    
    
    // Drop
    
    var dropList = document.querySelectorAll('.js-drop-item');


    document.addEventListener('click', function(e){
        let element = e.target;
        
        if(element.closest('.js-drop-button')){
            let isActive = element.closest('.js-drop-item').classList.contains('active')? true: false;
            
            dropList.forEach(item => {item.classList.remove('active')});
            
            if(isActive)
                element.closest('.js-drop-item').classList.remove('active');
            else
                element.closest('.js-drop-item').classList.add('active');
        }
        
        if(element.closest('.js-drop-contains')){
            let dropList = element.closest('.js-drop-item');
            let dropItems = dropList.querySelectorAll('.js-drop-contains');
            
            dropItems.forEach(item => {item.classList.remove('active')});
            element.closest('.js-drop-contains').classList.add('active');
            let innerContent = element.closest('.js-drop-contains').innerHTML;
            let dropInput = dropList.querySelector('.js-drop-input');
            
            if(dropInput) {
                dropInput.value = innerContent;
            }
            
            // close dropdown
            dropList.classList.remove('active');
        }
    });
    
    document.querySelector('body').addEventListener('click', function(event){
        if(!event.target.closest('.js-drop-item')) {
            document.querySelectorAll('.js-drop-item').forEach(function(item){
                item.classList.remove('active');
            }); 
        }
    });
    
    // //Drop
    
    
     // Infinty slider
    
    let arrowsInfinity = document.querySelectorAll('.js-arrow-infinity');
    
    function initialInfinitySlider() {
        for(var i = 0;arrowsInfinity.length > i; i++) {
            let slider = arrowsInfinity[i].closest(".slider-infinity");
            let arrowNext = arrowsInfinity[i].querySelector('.next');
            let arrowPrev = arrowsInfinity[i].querySelector('.prev');
            let sliderList = slider.querySelector('.js-infinity-slider-list');
            
            
            var checkSlider = true;
            
            arrowNext.addEventListener('click', function() {
                
                setTimeout(() => {
                    checkSlider = true;
                }, 400);
                
                if(!checkSlider) {
                    return;
                }
                
                checkSlider = false;
                
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                itemShow.nextElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                setTimeout(function(){
                    let newElem = itemShow;
                    itemShow.remove();
                    sliderList.append(newElem);
                },380);
                
            });
            
            arrowPrev.addEventListener('click', function() {
                setTimeout(() => {
                    checkSlider = true;
                }, 400);
                
                if(!checkSlider) {
                    return;
                }
                
                checkSlider = false;
                
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                let lastElem = sliderList.lastElementChild;

                sliderList.prepend(lastElem);
                
                setTimeout(function(){
                    itemShow.previousElementSibling.classList.add('show');
                    itemShow.classList.remove('show');
                },20);
            });
            
            var startPointX;
            var startPointY;
            slider.addEventListener("touchstart", function(event) {
                startPointX = event.changedTouches[0].screenX;
                startPointY = event.changedTouches[0].screenY;
            }, false);
            slider.addEventListener("touchend", function(event){
                var endPointX = event.changedTouches[0].screenX;
                var endPointY = event.changedTouches[0].screenY;
                
                if(startPointX - endPointX > 40) {
                    arrowNext.click();
                } else if(endPointX - startPointX > 40) {
                    arrowPrev.click();
                }
            }, false);
        }
    }
    
    initialInfinitySlider();
    
    // //Infinty slider
    
});