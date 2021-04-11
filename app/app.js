import * as MODEL from "../model/model.js";

function init() {

    let currentHeroImage = "home";

    $("nav a").click(function(e){
        let btnID = this.id;
        let contentID = btnID + "Content"
        // let heroID = btnID + "Hero"
        

        $(".hero-image") 
        .removeClass(`${currentHeroImage}-hero`) 
        .addClass(`${btnID}-hero`);
        currentHeroImage = btnID;

        console.log(currentHeroImage);

        MODEL.getPageContent(contentID);
        // MODEL.getHeroContent(heroID);
    })
}

$(document).ready(function(){
    init();
    MODEL.getPageContent("homeContent");
})