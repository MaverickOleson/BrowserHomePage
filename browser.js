const favicon = 'https://s2.googleusercontent.com/s2/favicons?domain_url=';
if (localStorage.getItem("recentSearches")) {
    $('#curShortcut h1').css({ display: 'none' });
    JSON.parse(localStorage.getItem("recentSearches")).forEach((e, i) => {
        $('#curShortcut a').eq(i).attr('href', `${e}`);
        $('#curShortcut a img').eq(i).attr('src', `${favicon}${e}`);
        $('#curShortcut a p').eq(i).text(`${e.match(/^https:\/\/(.+)\//)[1]}`);
    });
};
$('.shortcuts .col').click(e => {
    window.scrollTo(0, document.body.scrollHeight);
    if (!$(e.target).hasClass('open')) {
        $(e.target).siblings().removeClass('open');
        $(e.target).addClass('open');
        $('#curShortcut').removeClass('fadeout');
        $('#curShortcut').removeClass('fadein');
        $('#curShortcut').addClass('fadeout');
        $('#curShortcut').on('animationend', () => {
            if (e.target === $('.shortcuts .col')[0]) {
                $('#curShortcut a').each(i => {
                    $('#curShortcut a').eq(i).css({ borderColor: '#f02' });
                    $('#curShortcut a').eq(i).hover(
                        e => {
                            $(e.target).css({ background: '#f02' });
                        }, e => {
                            $(e.target).css({ background: 'transparent' });
                        }
                    )
                });
                if (localStorage.getItem("recentSearches")) JSON.parse(localStorage.getItem("recentSearches")).forEach((e, i) => {
                    $('#curShortcut a').eq(i).attr('href', `${e}`);
                    $('#curShortcut a img').eq(i).attr('src', `${favicon}${e}`);
                    $('#curShortcut a p').eq(i).text(`${e.match(/^https:\/\/(.+)\//)[1]}`);
                });
                else {
                    $('#curShortcut a').each(i => {
                        $('#curShortcut a').eq(i).attr('href', '');
                        $('#curShortcut a img').eq(i).attr('src', '');
                        $('#curShortcut a p').eq(i).text('');
                    });
                }
            }
            if (e.target === $('.shortcuts .col')[1]) {
                $('#curShortcut a').each(i => {
                    $('#curShortcut a').eq(i).css({ borderColor: '#f0f' });
                    $('#curShortcut a').eq(i).hover(
                        e => {
                            $(e.target).css({ background: '#f0f' });
                        }, e => {
                            $(e.target).css({ background: 'transparent' });
                        }
                    )
                });

                $('#curShortcut a').eq(0).attr('href', 'https://www.w3schools.com/html/');
                $('#curShortcut a img').eq(0).attr('src', `${favicon}https://www.w3schools.com/html/`);
                $('#curShortcut a p').eq(0).text('www.w3schools.com');

                $('#curShortcut a').eq(1).attr('href', 'https://developer.mozilla.org/en-US/');
                $('#curShortcut a img').eq(1).attr('src', `${favicon}https://developer.mozilla.org/en-US/`);
                $('#curShortcut a p').eq(1).text('developer.mozilla.org');

                $('#curShortcut a').eq(2).attr('href', 'https://maverickoleson.com/');
                $('#curShortcut a img').eq(2).attr('src', `${favicon}https://maverickoleson.com/`);
                $('#curShortcut a p').eq(2).text('maverickoleson.com');

                $('#curShortcut a').eq(3).attr('href', 'https://stackoverflow.com/');
                $('#curShortcut a img').eq(3).attr('src', `${favicon}https://stackoverflow.com/`);
                $('#curShortcut a p').eq(3).text('stackoverflow.com');
            }
            if (e.target === $('.shortcuts .col')[2]) {
                $('#curShortcut a').each(i => {
                    $('#curShortcut a').eq(i).css({ borderColor: '#4000ff' });
                    $('#curShortcut a').eq(i).hover(
                        e => {
                            $(e.target).css({ background: '#4000ff' });
                        }, e => {
                            $(e.target).css({ background: 'transparent' });
                        }
                    )
                });

                $('#curShortcut a').eq(0).attr('href', 'https://www.dannyelfman.com/');
                $('#curShortcut a img').eq(0).attr('src', `${favicon}https://www.dannyelfman.com/`);
                $('#curShortcut a p').eq(0).text('www.dannyelfman.com');

                $('#curShortcut a').eq(1).attr('href', 'https://www.willwood.net/');
                $('#curShortcut a img').eq(1).attr('src', `${favicon}https://www.willwood.net/`);
                $('#curShortcut a p').eq(1).text('www.willwood.net');

                $('#curShortcut a').eq(2).attr('href', 'https://jackstauber.com/');
                $('#curShortcut a img').eq(2).attr('src', `${favicon}https://jackstauber.com/`);
                $('#curShortcut a p').eq(2).text('jackstauber.com');

                $('#curShortcut a').eq(3).attr('href', 'https://stackoverflow.com/');
                $('#curShortcut a img').eq(3).attr('src', `${favicon}https://stackoverflow.com/`);
                $('#curShortcut a p').eq(3).text('stackoverflow.com');
            }
            if (e.target === $('.shortcuts .col')[3]) {
                $('#curShortcut a').each(i => {
                    $('#curShortcut a').eq(i).css({ borderColor: '#0ff' });
                    $('#curShortcut a').eq(i).hover(
                        e => {
                            $(e.target).css({ background: '#0ff' });
                        }, e => {
                            $(e.target).css({ background: 'transparent' });
                        }
                    )
                });

                $('#curShortcut a').eq(0).attr('href', 'https://chat.google.com');
                $('#curShortcut a img').eq(0).attr('src', `${favicon}https://chat.google.com`);
                $('#curShortcut a p').eq(0).text('chat.google.com');

                $('#curShortcut a').eq(1).attr('href', 'https://drive.google.com/');
                $('#curShortcut a img').eq(1).attr('src', `${favicon}https://drive.google.com/`);
                $('#curShortcut a p').eq(1).text('drive.google.com');

                $('#curShortcut a').eq(2).attr('href', 'https://classroom.google.com');
                $('#curShortcut a img').eq(2).attr('src', `${favicon}https://classroom.google.com`);
                $('#curShortcut a p').eq(2).text('classroom.google.com');

                $('#curShortcut a').eq(3).attr('href', 'https://mail.google.com/');
                $('#curShortcut a img').eq(3).attr('src', `${favicon}https://mail.google.com/`);
                $('#curShortcut a p').eq(3).text('gmail.com');
            }
            if (!$('.shortcuts .col').eq(0).hasClass('open')) {
                $('#curShortcut h1').css({ display: 'none' });
            } else {
                if (!localStorage.getItem("recentSearches")) $('#curShortcut h1').css({ display: 'block' });
            }
            $('#curShortcut').addClass('fadein');
        })
    }
});
$('.search').keydown(e => {
    if (e.which === 13) {
        const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || '[]');
        console.log($(e.target).val().match(/^https:\/\//))
        const val = (!$(e.target).val().match(/\./g)) ? `https://www.google.com/search?q=${$(e.target).val()}` : ($(e.target).val().match(/^https:\/\/.+\//)) ? $(e.target).val() : ($(e.target).val().match(/^https:\/\//)) ? `${$(e.target).val()}/` : `https://${$(e.target).val()}/`;
        if (recentSearches.length !== 4) {
            recentSearches.unshift(val);
        }
        else {
            recentSearches.pop();
            recentSearches.unshift(val);
        }
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
        $(location).attr('href', val);
    }
});
$('.audio').click(e => {
    if ($(e.target).hasClass('on')) {
        $(e.target).removeClass('on');
        $(e.target).find('audio').trigger('pause');
    } else {
        $(e.target).addClass('on')
        $(e.target).find('audio').trigger('play');
    }
})