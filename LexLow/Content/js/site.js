function NavbarLoc() {
    var obj = $('#icon_navbar_lock')
    var navbar = $('#navbar_main')

    if (obj.attr('class') == '') {
        obj.attr('class', 'glyphicon glyphicon-saved')
        navbar.attr('class', 'navbar navbar-default navbar-fixed-top')
        $('#div_top_indent').attr('style','height:40px;')
    }
    else {
        obj.attr('class', '')
        navbar.attr('class', 'navbar navbar-default')
        $('#div_top_indent').attr('style', '')
    }
}

function ChangeTheme(theme_file, icon_theme_name) {
    $('#link_style').attr('href', theme_file)
    $('#icon_theme_deffault').attr('class', '')
    $('#icon_theme_light').attr('class', '')
    $('#icon_theme_blue').attr('class', '')
    $('#' + icon_theme_name).attr('class', 'glyphicon glyphicon-arrow-right')
}