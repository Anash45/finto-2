function showPassword(event) {
    let target = event.currentTarget;
    var password = $(target).siblings('input');
    if (password.attr('type') === "password") {
        password.attr('type', "text");
        password.siblings('.ssp-eye-icon').addClass('slash');
    } else {
        password.attr('type', "password");
        password.siblings('.ssp-eye-icon').removeClass('slash');
    }
}

$(document).ready(function () {
    if ($('.carousel').length > 0) {
        $('.carousel').slick({
            centerMode: true,
            centerPadding: '500px', /* Adjust this to control how much of the side items are visible */
            slidesToShow: 1,
            variableWidth: true,
            focusOnSelect: true,
            autoplay: false, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            prevArrow: `<button type="button" class="slick-arrows slick-prev">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3306)">
<rect width="36" height="36" rx="18" transform="matrix(-1 0 0 1 56 20)" fill="white" shape-rendering="crispEdges"/>
<path d="M44.6666 38H31.3333M31.3333 38L36.3333 33M31.3333 38L36.3333 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3306" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3306"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3306" result="shape"/>
</filter>
</defs>
</svg>

    </button>`,
            nextArrow: `<button type="button" class="slick-arrows slick-next">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3308)">
<rect x="20" y="20" width="36" height="36" rx="18" fill="white" shape-rendering="crispEdges"/>
<path d="M31.3333 38H44.6666M44.6666 38L39.6666 33M44.6666 38L39.6666 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3308" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3308"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3308" result="shape"/>
</filter>
</defs>
</svg>

    </button>`,
            dots: false, // Hide navigation dots
            draggable: true, // Enable dragging
            infinite: true, // Infinite looping
            arrows: true, // Show arrows
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        variableWidth: false,
                        centerPadding: '0px', /* Adjust this to control how much of the side items are visible */
                    }
                }
            ]
        });
    }
    
    if ($('.groups-slider').length > 0) {
        $('.groups-slider').slick({
            variableWidth: true,
            autoplay: true, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            prevArrow: `<button type="button" class="slick-arrows slick-prev">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3306)">
<rect width="36" height="36" rx="18" transform="matrix(-1 0 0 1 56 20)" fill="white" shape-rendering="crispEdges"/>
<path d="M44.6666 38H31.3333M31.3333 38L36.3333 33M31.3333 38L36.3333 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3306" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3306"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3306" result="shape"/>
</filter>
</defs>
</svg>

    </button>`,
            nextArrow: `<button type="button" class="slick-arrows slick-next">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3308)">
<rect x="20" y="20" width="36" height="36" rx="18" fill="white" shape-rendering="crispEdges"/>
<path d="M31.3333 38H44.6666M44.6666 38L39.6666 33M44.6666 38L39.6666 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3308" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3308"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3308" result="shape"/>
</filter>
</defs>
</svg>

    </button>`
        });
    }

    $('.more-info-btn').each(function () {

        $(this).click(function () {
            $(this).closest('.gt-match').toggleClass('expanded');
        });

    });
});