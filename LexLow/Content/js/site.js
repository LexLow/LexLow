function NavbarLoc() {
    var obj = $('#icon_navbar_lock')
    var navbar = $('#navbar_main')

    if (obj.attr('class') == '') {
        obj.attr('class', 'glyphicon glyphicon-saved')
        navbar.attr('class', 'navbar navbar-default navbar-fixed-top')
    }
    else {
        obj.attr('class', '')
        navbar.attr('class', 'navbar navbar-default')
    }

}