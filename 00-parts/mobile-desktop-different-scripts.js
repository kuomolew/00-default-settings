/*
    // Add to scss:
    
    head {
        max-width: 100500px; //desktop screen size indicator
        @media screen and (max-width: 768px) {
            max-width: 700px; //mobile screen size indicator
        }
    }

*/

let browserMaxWidth = parseInt($('head').css('max-width'), 10);  

if (browserMaxWidth > 1000) {
    // Do some staff
} else {
    // Do another
}