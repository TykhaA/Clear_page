let reviewsBtn = document.getElementsByClassName("reviews_btn");
let reviews = document.getElementsByClassName("reviews");
let reviewsBtnActive = document.getElementsByClassName("reviews_btn-active");
let reviewsBtnStatic = document.getElementsByClassName("reviews_btn-static");

    function OpenReviews(){
        if (reviewsBtnActive[0].style.display === "block") {
                reviews[0].style.height = "500px";
                reviews[0].style.overflow = "hidden";
                reviewsBtnActive[0].style.display = "none";
                reviewsBtnStatic[0].style.display = "block";
            } else {
                reviews[0].style.height = "auto";
                reviews[0].style.overflow = "auto";
                reviewsBtnActive[0].style.display = "block";
                reviewsBtnStatic[0].style.display = "none";
            }
    }
    // function OpenReviews(){
    //     reviews[0].style.height = "auto";
    //     reviews[0].style.overflow = "auto";
    //     reviewsBtnActive[0].style.display = "block";
    //     reviewsBtnStatic[0].style.display = "none";
    // }
    reviewsBtn[0].addEventListener("click", OpenReviews);

let OpenWrapContentquestionsWrap = document.getElementsByClassName("questions_wrap");
let questionsTitleOpen = document.getElementsByClassName("questions_wrap__title-open");
let questionsWrapContent = document.getElementsByClassName("questions_wrap__content");
    function OpenWrapContent(element, index){
        if (questionsWrapContent[index].style.display === "block") {
            questionsWrapContent[index].style.display = ("none");
            OpenWrapContentquestionsWrap[index].classList.remove("questions_wrap-active");
            questionsTitleOpen[index].classList.remove("questions_wrap__title-open-active");
        } else {
            questionsWrapContent[index].style.display = "block";
            OpenWrapContentquestionsWrap[index].classList.add("questions_wrap-active");
            questionsTitleOpen[index].classList.add("questions_wrap__title-open-active");
        }
    }
let NewOpenWrapContent = Object.values(questionsTitleOpen);
NewOpenWrapContent.forEach(function(element, i){
    element.addEventListener("click", () => OpenWrapContent(element, i));
});

