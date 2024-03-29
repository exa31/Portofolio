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

    const windowWidth = $(window).width();

    if (currentScroll > 0)    {
        $('#navBar').css('backgroundColor', '#081B29')
    } else if(windowWidth < 768)    {
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

const nama = $("#name");
const email = $("#email");
const message = $("#message");

$('button[type="submit"]').click(function (e) {
    e.preventDefault();

    if  (!$(nama).val())    {
        alert("Name is required")
    } else if  (!$(email).val())    {
        alert("Email is required")
    } else if   ($(email).val().indexOf("@") === -1) {
        alert("@ is required")
    } else if  (!$(message).val())    {
        alert("Message is required")
    } else  {
        alert('Submitted')
        $(nama).val("")
        $(email).val("")
        $(message).val("")
    }
})
