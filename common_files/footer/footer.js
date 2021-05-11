document.write('<footer>\n' +
    '    <div class="contacts-info">\n' +
    '        <div class="email">\n' +
    '            <h3>Email:</h3>\n' +
    '            <h4>alexandra.spirina18@gmail.com</h4>\n' +
    '        </div>\n' +
    '        <div class="contacts">\n' +
    '            <h3>Other contacts:</h3>\n' +
    '            <nav>\n' +
    '                <a href="https://github.com/alexandra-hw" class="nav-link"><i class="fa fa-github fa-lg" style="font-size:36px"></i></a>\n' +
    '                <a href="https://www.instagram.com/spirina_alexandra/" class="nav-link"><i class="fa fa-instagram fa-lg" style="font-size:36px"></i></a>\n' +
    '            </nav>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="center">\n' +
    '        <div id="copyright-info"></div>\n' +
    '    </div>\n' +
    '</footer>');

function date_time() {
    let current_datetime = new Date();
    let year = current_datetime.getFullYear();
    return "© 2019-" + year + ", Spirina Alexandra BSU FAMS";
}

document.getElementById('copyright-info').innerHTML = date_time();