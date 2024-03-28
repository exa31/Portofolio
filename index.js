const sections = $('section');

$('a').click(function () {
    $('#navBar a').removeClass('active')
    $(this).addClass("active")
})

$(window).on('scroll', function () {
    const currentScroll = $(this).scrollTop();
    const windowHeight = $(this).height();

    //agar pada saat scrolling tidak membuat hover tampil secara tidak benar
    $(this).css("cursor", "none")

    if (currentScroll > 0)    {
        $('#navBar').css('backgroundColor', '#081B29')
    } else  {
        $('#navBar').css('backgroundColor', 'transparent')
    }

    sections.each(function () {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();

        // Periksa jika bagian ini dominan atau tidak
        const isDominant = (sectionTop <= currentScroll + windowHeight / 2) && (sectionTop + sectionHeight > currentScroll + windowHeight / 2);

        // Jika bagian ini dominan, tambahkan kelas 'active'
        if (isDominant) { //jadi setiap section di cek kemudian apabila 
            $('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            $('a[href="#' + $(this).attr('id') + '"]').css("cursor", "default")
        } else {
            // Jika tidak dominan, hapus kelas 'active'
            $('a[href="#' + $(this).attr('id') + '"]').removeClass('active');
            $('a[href="#' + $(this).attr('id') + '"]').css("cursor", "pointer")
        }
    });
});