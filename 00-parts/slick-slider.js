// Add the new slick-theme.css if you want the default styling

<link rel="stylesheet" type="text/css" href="plugins/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="plugins/slick/slick-theme.css"/>

<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>


<script type="text/javascript" src="plugins/jquery-3.4.1.min"></script>
<script type="text/javascript" src="plugins/slick/slick.min.js"></script>


$(document).ready(function(){

    $('.your-class').slick({
        infinite: true,
        slidesToShow: 5,
        rtl: true,
        arrows: true,
        dots: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
              }
            },
          ]
    });

});


/**
 * Custom arrows didnt check yet
 */

$slick = $('#main-slider');
$next = $('#next-button');
$prev = $('#prev-button');

$next.on('click', () => {
    $slick.slick('slickNext');
})

$prev.on('click', () => {
    $slick.slick('slickPrev');
})


/**
 * Custom arrows prevoius kostyli checked
 */
.slick-prev:before {
    display: none;
}
.slick-prev {
    position: absolute;
    display: block;
    width: 67px;
    height: 53px;
    background-image: url('../img/slider-arrow-right.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40% auto;
    z-index: 2;
    background-color: rgba($color: #000000, $alpha: .7);
    right: 0;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 49px;
        top: 450px;
        background-color: rgba($color: #000000, $alpha: 1);
    }
}
.slick-prev:hover {
    background-image: url('../img/slider-arrow-right-hover.svg');
}
.slick-next:before {
    display: none;
}
.slick-next {
    position: absolute;
    display: block;
    width: 67px;
    height: 53px;
    background-image: url('../img/slider-arrow-left.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 29px auto;
    z-index: 2;
    background-color: rgba($color: #000000, $alpha: .7);
    left: 0px;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 49px;
        top: 450px;
        background-color: rgba($color: #000000, $alpha: 1);
    }
}
.slick-next:hover {
    background-image: url('../img/slider-arrow-left-hover.svg');
}

/**
 * 
 *  Custom dots
 */

.slick-dots {
    // Custom dots position
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
    top: 40%;
}
.slick-dots li img:nth-child(1) {
    display: block;
}

.slick-dots li img:nth-child(2) {
    display: none;
}

.slick-dots li.slick-active img:nth-child(1) {
    display: none;
}

.slick-dots li.slick-active img:nth-child(2) {
    display: block;
}



$('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    customPaging : function(slider, i) {
        return '<img src="img/empty-dot.png" /><img src="../img/full-dot.png" />';
    },
});