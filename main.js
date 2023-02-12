const popupadd = document.querySelector('#addNewList');
const defaultText = document.querySelector('.noTodo');
const blur = document.querySelector('.blur');
const popupaddBtn = document.querySelector('#add-new-list');



popupaddBtn.addEventListener("click", () => {
    popupadd.style.display = "block";
    blur.style.filter = "blur(8px)";
    defaultText.style.display = "none";
});

const closePopUp = document.querySelector('.close');

closePopUp.addEventListener("click", () => {
    popupadd.style.display = "none";
    blur.style.filter = "none";
    
});



const inputpop1 = document.querySelector('#inputBoxList');
const inputItem = document.querySelector('#inputBoxItem');
const addNewItemPopUp = document.querySelector('#add-new-item-box');
const addNewListBtn = document.querySelector('.add-new-list-btn');
const addNewItemBtn = document.querySelector('.add-new-item-btn');
const header = document.querySelector('.header');
const mainflexcontainer = document.querySelector('.boxes');
const containerSingle = document.querySelector(".container");
const triptoparis = document.querySelector(".triptoparis");
const singlecardcontainer = document.querySelector('.singlecardcontainer');
const listClose = document.getElementById("listClose");

let arrayOfObjectsOfCards = [];

function addCard(e) {
    
    const cardName = inputpop1.value;
    const cardObjet = {
        id: Date.now(),
        name: cardName
    };
    arrayOfObjectsOfCards.push(cardObjet);
    inputpop1.value = "";

}



let selectedCardId;

function createCard() {

    let card = document.createElement("div");
    card.className = "box";

    
    for (let index = 0; index < arrayOfObjectsOfCards.length; index++) {
        const element = arrayOfObjectsOfCards[index];
        card.id = element.id;
        card.innerHTML = `<i class="fas fa-trash-alt icon-style-22 display-none removeIcon"></i> <i class="icon-style-2 display-none fas fa-plus-circle plusbtn" data-card-id = "${card.id}"></i>`

        mainflexcontainer.appendChild(card);
        const HeadingOfCard = document.createElement("h1");
        HeadingOfCard.className = "headings subhead";
        HeadingOfCard.id = element.id;
        let createHR = document.createElement("hr");

        let cardsHeading = document.createTextNode(element.name);
        HeadingOfCard.appendChild(cardsHeading);
        card.appendChild(HeadingOfCard);
        card.appendChild(createHR);



        const headingOpen = document.querySelectorAll(".headings")
        headingOpen.forEach(e => {
            e.addEventListener("click", (e) => {
                let selDiv = e.target.parentNode;
                let currentDiv = e.target;
                console.log(currentDiv.innerText)

                triptoparis.innerText = currentDiv.innerText;

                let singleCard = document.createElement('div');
                singleCard.className = "single-card";
                singleCard.className = "single-style";
                singleCard.appendChild(selDiv);
                arrayOfObjectsSingle.unshift(singleCard);
                console.log(arrayOfObjectsSingle)

                singlecardcontainer.appendChild(arrayOfObjectsSingle[0]);
                mainflexcontainer.style.display = "none";
                header.style.display = "none";
                containerSingle.style.display = "block";

            })

        })

        if(document.querySelector(".boxes") == ""){
            console.log("hi")
        }
    }




    const removeitem = document.querySelectorAll(".removeIcon");
    removeitem.forEach(e => {
        e.addEventListener("click", (e) => {
            let selDiv = e.target.parentNode;
        

            selDiv.remove();
           
        })
    })

    const plusBtnInCard = document.querySelectorAll(".plusbtn");
    plusBtnInCard.forEach(e => {
        e.addEventListener("click", (e) => {
            addNewItemPopUp.style.display = "block";
            blur.style.filter = "blur(8px)";
            console.log(e.target.dataset);
            selectedCardId = e.target.dataset.cardId;


        })
    })
}

let arrayOfObjectsSingle = [];

function backToMainList(e) {
    mainflexcontainer.style.display = "flex";
    arrayOfObjectsSingle[0].classList.remove("single-style");
    mainflexcontainer.appendChild(arrayOfObjectsSingle[0]);
    arrayOfObjectsSingle = [];
    header.style.display = "flex";

    containerSingle.style.display = "none";
}





function addingDataIntoCard(temp) {
    

        
        const data = inputItem.value;
        const dataincard = document.createElement('p');
        for (let index = 0; index < arrayOfObjectsOfCards.length; index++) {
            const element = arrayOfObjectsOfCards[index];
            if (element.id == selectedCardId) {
                console.log(data);
                dataincard.innerHTML = data;
                document.getElementById(`${element.id}`).appendChild(dataincard);
            }
            inputItem.value = "";
        }

        // checklist
        dataincard.classList.add('tasklistitem');
        const checkBox = document.querySelectorAll(".tasklistitem")
        checkBox.forEach(e => {
            e.addEventListener("click", (e) => {
                let selDiv = e.target;
                selDiv.style.textDecoration = "line-through";
                selDiv.style.color = "red"
            })
        })



        blur.style.filter = "none";
        addNewItemPopUp.style.display = "none";
        mainflexcontainer.style.filter = "none";
        
        selectedCardId = null;
    
}



addNewListBtn.addEventListener("click", () => {


    
        addCard();
        
        popupadd.style.display = "none";
        blur.style.filter = "blur(0px)";
        createCard();
        inputItem.setAttribute("placeholder","Enter an Item Name");
    
});


listClose.addEventListener("click", () => {
    document.querySelector("#add-new-item-box").style.display = "none";
    blur.style.filter = "none";
    
});