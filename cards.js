
const cardButton = document.querySelector(".cardButton");
const listButton =  document.querySelector(".listButton");

const ulContainer = document.querySelector(".ulContainer");
const liContainer = document.querySelectorAll(".liContainer");
const myCard = document.querySelectorAll(".myCard");
const cardsImg = document.querySelectorAll(".exempleimg");

/******************************************
*card button's actions:
*/
cardButton.addEventListener("click", function(){
    listButton.classList.toggle("visible");
    cardButton.classList.toggle("none");

    ulContainer.classList.toggle("d-flex");
    ulContainer.classList.toggle("flex-wrap");
    ulContainer.classList.toggle("justify-content-around");
	ulContainer.classList.toggle("list-unstyled");

});

liContainer.forEach(liContainer=>cardButton.addEventListener("click", function(){
																			liContainer.classList.toggle("card");
																		    liContainer.classList.toggle("mb-4");
																		
																		    liContainer.classList.toggle("col-md-4");
																		    liContainer.classList.toggle("d-flex");
																		    liContainer.classList.toggle("justify-content-around");


																		    liContainer.classList.toggle("media");
																		    liContainer.classList.toggle("my-4");
																		    liContainer.classList.toggle("element-list");
																		}));
cardsImg.forEach(cardsImg=>cardButton.addEventListener("click", function(){
																	cardsImg.classList.toggle("w-100");
																	cardsImg.classList.toggle("col-5");																	
																}));

myCard.forEach(myCard=>cardButton.addEventListener("click", function(){
															    myCard.classList.toggle("card-body");
															    myCard.classList.toggle("media-body");
															}));

/****************************************************
* list button's actions
*/
listButton.addEventListener("click", function(){
    listButton.classList.toggle("visible");
    cardButton.classList.toggle("none");

    ulContainer.classList.toggle("d-flex");
    ulContainer.classList.toggle("flex-wrap");
    ulContainer.classList.toggle("justify-content-around");
	ulContainer.classList.toggle("list-unstyled");

});

liContainer.forEach(liContainer=>listButton.addEventListener("click", function(){
																			liContainer.classList.toggle("card");
																			liContainer.classList.toggle("mb-4");

																			liContainer.classList.toggle("col-md-4");
																			liContainer.classList.toggle("d-flex");
																			liContainer.classList.toggle("justify-content-around");


																			liContainer.classList.toggle("media");
																			liContainer.classList.toggle("my-4");
																			liContainer.classList.toggle("element-list");
																		}));
cardsImg.forEach(cardsImg=>listButton.addEventListener("click", function(){
																			cardsImg.classList.toggle("w-100");	
																			cardsImg.classList.toggle("col-5");																	
																		}));
myCard.forEach(myCard=>listButton.addEventListener("click", function(){
															    myCard.classList.toggle("card-body");
															    myCard.classList.toggle("media-body");
															}));
