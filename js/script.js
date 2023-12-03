function lockBody() {
    $("body").addClass("lock")
}

function unlockBody() {
    $("body").removeClass("lock")
}

$(".menu-btn").click(function() {
    $(".main-menu").addClass("main-menu_active")
    lockBody()
})

$(".nav-cross, .main-menu-link").click(function() {
    $(".main-menu").removeClass("main-menu_active")
    unlockBody()
})

$(".form-approval").click(function() {
    $(this).toggleClass("form-approval-active")
    $(this).removeClass("form-approval-warning")
})

$("#question-form button").click(function(e) {
    
    if (!$("#question-form .form-approval").hasClass("form-approval-active")) {
        e.preventDefault()
        $("#question-form .form-approval").addClass("form-approval-warning")
    } 
})

$(".review-more-btn").click(function() {
    $(this).prev().toggleClass("review-text-open")
    $(this).toggleClass("review-more-btn-open")
})

// Popup
$('.gallery-img').magnificPopup({
    type:'image',
    gallery: {
        enabled: true,
        // tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
    }
});