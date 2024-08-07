// ぽよん
$(function () {
    $('.modal-new-open').on('click', function () {
        $('.modal-new').fadeIn();
        return false;
    });
    $('.modal-new-close').on('click', function () {
        $('.modal-new').fadeOut();
        return false;
    });
});

// here
$(function () {
    $('.modal-here-open').on('click', function () {
        $('.modal-here').fadeIn();
        return false;
    });
    $('.modal-here-close').on('click', function () {
        $('.modal-here').fadeOut();
        return false;
    });
});

// form
$(function () {
    $('.modal-form-open').on('click', function () {
        $('.modal-form').fadeIn();
        return false;
    });
    $('.modal-form-close').on('click', function () {
        $('.modal-form').fadeOut();
        return false;
    });
});


$(function () {
    $('.modal-m-open').on('click', function () {
        $('.modal-menu').fadeIn();
        return false;
    });
    $('.modal-m-close').on('click', function () {
        $('.modal-menu').fadeOut();
        return false;
    });
});

// --------------------------------------------
// スクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 100;
        var speed = 600;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});



// --------------------------------------

function header_dayo() {
    var html = "";
    html += '<header id="header">';
    html += '<nav>';
    html += '<ul>';
    html += '<font size="2">';
    html += '<li class=""><a href="../index.html">一覧</a></li>';
    html += '</font>';
    html += '</ul>';
    html += '</nav>';
    html += '</header>';
    document.write(html);
}

