const petsModule = (function(){
    const _data = [
        {
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type b",
            background:"#EA640D"
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type m",
            background:"#6C5B7B"
        },
        {
            image: "https://www.abc.net.au/cm/rimage/7701966-3x4-large.jpg?v=2",
            name: "King",
            type: "Lion",
            sound: "lion",
            soundText: "Roar - type r",
            background:"#FFBC67"
        },
        {
            image: "https://images.pexels.com/photos/51311/cow-calf-cattle-stock-51311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "Molly",
            type: "Moscow",
            sound: "cow",
            soundText: "Moo - type c",
            background:"#00A388"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg",
            name: "Oliver",
            type: "Eastern Barn",
            sound: "owl",
            soundText: "Hoot - type h",
            background:"#CFA084"
        },
        {
            image: "https://www.refinery29.com/images/8636920.jpg",
            name: "Athena",
            type: "African Elephants.",
            sound: "elephant",
            soundText: "Trumpet - type t",
            background:"#F9A84D"
        }
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $buttons= document.querySelectorAll("button");
     
    const getButtons = function(){
        return document.querySelectorAll("button");
    }

    const getAudios = function(){
        return document.querySelectorAll("audio");
    }

    const createPetElement = function(pet){
        return "<tr data-color='"+pet.background+"'><td><img class='pet-image' src='"+pet.image+"' /></td><td>"+pet.name+"</td><td>"+pet.type+"</td><td><button data-sound='"+pet.sound+"'>"+pet.soundText+"</button></td></tr>"
    };

    const addToTable = function(content){
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function(){
        for(let i=0; i< _data.length; i++){
            addToTable(createPetElement(_data[i]));
        }
    }

    const keyEvent = function(){
        document.addEventListener("keydown", function(e){
            petAudio = getAudios();
            for (let i = 0; i < petAudio.length; i++) {
                if(petAudio[i].dataset.key == e.keyCode){
                    console.log(petAudio[i].id);
                    petAudio[i].play();
                }
            }
            
        })
    }

    const rowEvent = function() {
        const $satirlar = document.querySelectorAll("tr");
        const $anaResim = document.getElementById("mainImage");
        for (let i = 1; i < $satirlar.length; i++) {
            $satirlar[i].addEventListener("click", function(event){
                $satirlar[i].style.background=$satirlar[i].dataset.color;
                $anaResim.src = $satirlar[i].firstElementChild.firstElementChild.src  

            })
            
        }
    }

    const bindEvents = function(){
        const buttons = getButtons();
        for(let i= 0; i< buttons.length; i++){
            buttons[i].addEventListener("click", function(event){
                event.stopPropagation();
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if(soundElement){
                    soundElement.play();
                }
            });
        }
    }

    const init = function(){
        putPetsInHtml();
        bindEvents();
        keyEvent();
        rowEvent();
    }

    return {
        init: init
    }
})();