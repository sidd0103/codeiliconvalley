var done = 0;
var done = 0;
$(document).ready(function () {
    //HEIGHT FIX
    
    //NAVIGATION
    //NAVIGATION
    //NAVIGATION
    //NAVIGATION
    //NAVIGATION
    //NAVIGATION


    var currentSlide = '0container';
    var prevHighlight = 'about'
    $('#home').click(function () {
        var targetSlide = '0container';
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');
        var currentSlideNumber = currentSlide.replace('container', '') * 1;
        var targetSlideNumber = targetSlide.replace('container', '') * 1;
        if (targetSlide == currentSlide) {
        } else {
            if (targetSlideNumber > currentSlideNumber) {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            } else {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '-2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            }
        }
    });
    $('#about').click(function () {
        var targetSlide = '1container';
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');
        var currentSlideNumber = currentSlide.replace('container', '') * 1;
        var targetSlideNumber = targetSlide.replace('container', '') * 1;
        if (targetSlide == currentSlide) {

        } else {
            if (targetSlideNumber > currentSlideNumber) {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#about').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            } else {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '-2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#about').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            }
        }
    });
    $('#classes').click(function () {
        var targetSlide = '2container';
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');

        var currentSlideNumber = currentSlide.replace('container', '') * 1;
        var targetSlideNumber = targetSlide.replace('container', '') * 1;
        if (targetSlide == currentSlide) {

        } else {
            if (targetSlideNumber > currentSlideNumber) {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#classes').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            } else {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '-2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#classes').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            }
        }
    });
     $('#news').click(function () {
        var targetSlide = '3container';
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');
         console.log(prevHighlight2);
        var currentSlideNumber = currentSlide.replace('container', '') * 1;
        var targetSlideNumber = targetSlide.replace('container', '') * 1;
        if (targetSlide == currentSlide) {

        } else {
            if (targetSlideNumber > currentSlideNumber) {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#news').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            } else {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '-2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#news').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            }
        }
    });
    $('#resources').click(function () {
        var targetSlide = '4container';
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');

        var currentSlideNumber = currentSlide.replace('container', '') * 1;
        var targetSlideNumber = targetSlide.replace('container', '') * 1;
        if (targetSlide == currentSlide) {

        } else {
            if (targetSlideNumber > currentSlideNumber) {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#resources').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            } else {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '-2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#resources').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            }
        }
    });
    $('#donate').click(function () {
        var targetSlide = '5container';
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');

        var currentSlideNumber = currentSlide.replace('container', '') * 1;
        var targetSlideNumber = targetSlide.replace('container', '') * 1;
        if (targetSlide == currentSlide) {

        } else {
            if (targetSlideNumber > currentSlideNumber) {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#donate').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            } else {
                $('#' + currentSlide).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
                $('#' + currentSlide).css('margin-left', '-2000');
                $('#' + currentSlide).css('opacity', '0');
                $(prevHighlight2).css('color', '');
                $('#donate').css('color', 'lightgreen');
                setTimeout(function () {
                    $('#' + currentSlide).css('display', 'none');
                    $('#' + targetSlide).css('display', 'block');
                }, 700);
                setTimeout(function () {
                    $('#' + targetSlide).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
                    $('#' + targetSlide).css('opacity', '1');
                    $('#' + targetSlide).css('margin-left', '0');
                    currentSlide = targetSlide;
                }, 800);
            }
        }
    });
    $('.move').click(function () {
        done = 0;
        var prevHighlight2 = '.' + currentSlide.replace("container", 'select');
        $(prevHighlight2).css('color', '');
        var idWhole = $(this).prop('id');
        var id = idWhole.match(/\d+/)[0];
        var target = idWhole.replace(/[0-9]/g, '');

        var nextId = (id * 1) + 1;
        var containerId = id + 'container';
        var nextContainerId = nextId + 'container';
        currentSlide = nextContainerId;

        $('#' + containerId).css('transition', 'all 800ms cubic-bezier(.86,.01,.63,.99)');
        $('#' + containerId).css('margin-left', '2000');
        $('#' + containerId).css('opacity', '0');
        setTimeout(function () {
            $('#' + containerId).css('display', 'none');
            $('#' + nextContainerId).css('display', 'block');
        }, 700);
        setTimeout(function () {
            $('#' + prevHighlight).css('color', '');
            $('#' + nextContainerId).css('transition', 'margin-left 1s ease-in-out, opacity 1s');
            $('#' + nextContainerId).css('opacity', '1');
            $('#' + nextContainerId).css('margin-left', '0');
            $('#' + target).css('color', 'lightgreen');
            prevHighlight = target;
        }, 800);
        setTimeout(function () {
            done = 1
        }, 1000);
    });




    //BIO
    //BIO
    //BIO
    //BIO
    var biographies = {
        '1bio' : 'Sahil has first started coding when he was very young. He has completed the AP Computer Science A course and exam. In addition, he won first place in Coding and Programming at the State FBLA conference. He has coded various projects of his own such as tower defense games, artificial intelligence based games, and even a speech generator. Having been coding for such a long time, he wants to help others learn to code.',
        '2bio' : 'Sidd Iyer has been creating websites since middle school.  Over the years, he devloped a variety of different web applications, including grades.mvla.me, a website similar to naviance that helps students predict their grades in the future and choose colleges that are tailored toward their academic progress.  Along with grades.mvla.me, Sidd Iyer is currently working on two other sibling projects; agenda.mvla.me and study.mvla.me; both applictiaons that aim to lower student stress. This website was developed and designed from scratch by Sidd Iyer.'
    }
    
    var projects = {
        '1proj' : [
            {
              'name': 'Family Entertainment Center Database System',
              'desc': 'A database system to manage the general operations of a family entertainment center. A program that earned him first place at the State FBLA Conference. '
            },
            {
              'name': 'Asteria',
              'desc': 'A 2D side-scrolling space shooter game with sci-fi and MMO elements.'
            },
            {
              'name': 'Flux Planner',
              'desc': 'An ACT/SAT study tool that help you keep track of your test scores, and tailors a custom study plan for you. '
            }
        ],
        '2proj' : [
            {
              'name': 'Grades Calculator',
              'desc': 'Calculator that allows students to make real time changes to their grade.'
            },
            {
              'name': 'Study Guide',
              'desc': 'Allows you to take a photo of your work and can convert it to a compiled study guide.'
            },
            {
              'name': 'School Agenda',
              'desc': 'An agenda tailored towards his school district to manage classes and schoolwork.'
            }
        ]
        
    }
    
    $('.picture').mouseenter(function () {
        var id = $(this).prop("id");

        var newId = id.replace('picture', 'desc');
        $('#' + newId).css("color", "lightgreen");
        $('#' + newId).css("box-shadow", "0 0 9px black");
    });
    $('.picture').mouseleave(function () {
        var id = $(this).prop("id");

        var newId = id.replace('picture', 'desc');
        $('#' + newId).css("color", "white");
        $('#' + newId).css("box-shadow", "");
    });


    $('.picture').click(function () {
        var id = $(this).prop("id");
        var newId = id.replace('picture', 'desc');
        var descId = id.replace('picture', 'bio');
        var name = $('#'+newId).text();
        var description = biographies[descId];
        var fullName = 'Portfolio // ' + name; 
        var projId = id.replace('picture', 'proj');
        var profile = projects[projId];
        var selectedRow = 0;
        $('.projects').find('tr').each(function(){
           $(this).children().first().text(profile[selectedRow]['name']);
           $(this).children().last().text(profile[selectedRow]['desc']);
            selectedRow++;
        });
            
        
        
        $('.sheetDesc').text(fullName);
        $('.sheetContent').text(description);
        $('.overlayBio').css('display', 'block');
        setTimeout(function () {
            $('.mission').css('filter', 'blur(10px)');
            $('.overlayBio').css('opacity', '1');
        }, 100)
    });
    $('.closeThis').click(function () {
        $('.overlayBio').css('opacity', '0');
        $('.mission').css('filter', 'blur(0px)');
        setTimeout(function () {
            $('.overlayBio').css('display', 'none');
        }, 400)
    });



    //SIGNUP FORM
    //SIGNUP FORM
    //SIGNUP FORM
    //SIGNUP FORM
    //SIGNUP FORM
    //SIGNUP FORM
    var sessionList = {
        'Web Development': [
            {
                'INSTRUCTOR': 'Sidd Iyer',
                'DATE': 'Sunday, from Jan 7th - March 11th',
                'LOCATION': '783 West Portola Ave, Los Altos',
                'TIME': '4pm - 6pm'
            },
            {
               'INSTRUCTOR': 'Sidd Iyer',
                'DATE': 'Sunday, from Jun 10th - July 5th',
                'LOCATION': '783 West Portola Ave, Los Altos',
                'TIME': '4pm - 6pm'
            }
            
        ],
        'Java': [
            {
                'INSTRUCTOR': 'Sahil Morchi',
                'DATE': 'Sunday, Jan 7th - March 11th',
                'LOCATION': '915 Mackenzie Drive, Sunnyvale',
                'TIME': '4pm - 6pm'
            },
            {
                'INSTRUCTOR': 'Sahil Morchi',
                'DATE': 'Sunday, from Jun 10th - July 5th',
                'LOCATION': '915 Mackenzie Drive, Sunnyvale',
                'TIME': '4pm - 6pm'
            }
           
        ],
        'Game Development': [
            {
                'INSTRUCTOR': 'Henry Lai',
                'DATE': 'Sunday, Jan 7th - March 11th',
                'LOCATION': 'Los Altos High School, Room 702',
                'TIME': '4pm - 6pm'
            },
            {
                'INSTRUCTOR': 'Henry Lai',
                'DATE': 'Everyday, from Jun 10th - July 5th',
                'LOCATION': 'Mountain View High School, Room 702',
                'TIME': '4pm-6pm'
            }
            
        ]
    }
    var hasInteracted = 0;
    var sessionChosen = 'UNSELECTED'
    $('.select').css("color", "white");
    $('.select').change(function () {
        hasInteracted = 1;
        $('.select').css("color", "black");
        sessionChosen = $('.select').val();
        var sessionChosen2 = sessionChosen - 1;
        var wordSession = 'SESSION: WEEK ' + sessionChosen;
        var instructor = sessionList[CollumName][sessionChosen2]['INSTRUCTOR'];
        var date = sessionList[CollumName][sessionChosen2]['DATE'];
        var location = sessionList[CollumName][sessionChosen2]['LOCATION'];
        var time = sessionList[CollumName][sessionChosen2]['TIME'];


        $('.sessionID').text(wordSession);
        $('#instructor').text(instructor);
        $('#date').text(date);
        $('#location').text(location);
        $('#time').text(time);
    });

    $('.tableCol').mouseenter(function () {
        $(this).css('opacity', '1');
    });
    $('.tableCol').mouseleave(function () {
        $(this).css('opacity', '.6');
    });

    var CollumName = '';
    $('.tableCol').click(function () {
        CollumName = $(this).children().first().text();
        var headerText = "SIGNUP : " + CollumName;
        $('.changethis').text(headerText);
        $('#className').text(CollumName);
        $('.overlay2').css('display', 'block');
        setTimeout(function () {
            $('.classPrelim').css('filter', 'blur(10px)');
            $('.overlay2').css('opacity', '1');
        }, 100);
        if (hasInteracted == 1) {
            sessionChosen = $('.select').val();
            var sessionChosen2 = sessionChosen - 1;
            var wordSession = 'SESSION: WEEK ' + sessionChosen;
            var instructor = sessionList[CollumName][sessionChosen2]['INSTRUCTOR'];
            var date = sessionList[CollumName][sessionChosen2]['DATE'];
            var location = sessionList[CollumName][sessionChosen2]['LOCATION'];
            var time = sessionList[CollumName][sessionChosen2]['TIME'];


            $('.sessionID').text(wordSession);
            $('#instructor').text(instructor);
            $('#date').text(date);
            $('#location').text(location);
            $('#time').text(time);
        }
    });


    $('.closeThis2').click(function () {
        $('.overlay2').css('opacity', '0');
        $('.classPrelim').css('filter', 'blur(0px)');
        setTimeout(function () {
            $('.overlay2').css('display', 'none');
        }, 400)
    });

    
    
    
    //VOLUNTEER SIGNUP
    //VOLUNTEER SIGNUP
    //VOLUNTEER SIGNUP
    //VOLUNTEER SIGNUP
    //VOLUNTEER SIGNUP
    
    var part = 1;
    
    $('.switchThis').click(function(){
        if (part == 2) {
            var email = $('#email2').val();
            $('.overlayApp').css('display', 'block');
            setTimeout(function () {
                $('.overlayApp').css('opacity', '1');
            }, 100); 
            emailjs.send("gmail", "application_email", {
                email: email
            })
            .then(function (response) {
                $('.message3').css('opacity', '1');
                $(document).click(function () {
                    $('.overlayApp').css('opacity', '0');
                    $('.message3').css('opacity', '0');
                    setTimeout(function () {
                        $('.overlayApp').css('display', 'none');
                        $(document).unbind("click");
                    }, 400);
                });
            }, function (err) {
                $('#errorApply').text('There was an error sending you an email.');
                $('#errorApply2').text('Did you enter your email correctly?');
                $('.message3').css('opacity', '1');
                $('#errorApply4').removeClass('signupMessage');
                $('#errorApply4').addClass('signupMessage2');
                $('#errorApply4').addClass('animated shake');
                $(document).click(function () {
                    $('.overlayApp').css('opacity', '0');
                    $('.message3').css('opacity', '0');
                    setTimeout(function () {
                        $('.overlayApp').css('display', 'none');
                        $(document).unbind("click");
                        $('#errorApply4').addClass('signupMessage');
                        $('#errorApply4').removeClass('signupMessage2');
                        $('#errorApply4').removeClass('animated shake');
                        $('#errorApply').text('Congradulations on signing up for your coding course! ');
                        $('#errorApply2').text('We have emailed you the details.');
                    }, 400);
                });
             });
        }
        else {
            part = 2;
            $('#email2').css('display','block');
            $('.detailsTable').css('display','block');
            $(this).removeClass('x');
            $(this).addClass('o');
            setTimeout(function(){
                $('#email2').css('opacity','1');
                $('.detailsTable').css('opacity','1');
            },100);
        }
        
    });
    $('.closethis4').click(function(){
        part = 1;
        $('#email2').css('opacity','0');
        $('.detailsTable').css('opacity','0');
        $('#email2').css('display','none');
        $('.detailsTable').css('display','none');
        $('.switchThis').removeClass('o');
        $('.switchThis').addClass('x');
    });
    
    //NEWS AND EVENTS
    var hasClickedRow = 0;
    $('.hoverRow').click(function(){
        var last = $(this).children().last().children().last();
        var first = $(this).children().last().children().first();
        var idTd = $(last).prop("id");
        if (idTd == 0) {
            var id5 = $(this).prop("id");
            var articleId = id5.replace("row","")
            var last = $(this).children().last().children().last();
            $(first).removeClass("animated fadeInLeft2");
            $(last).removeClass("animated fadeOutRight2");
            $(first).addClass("animated fadeOutLeft2");
            setTimeout(function(){
                $(last).css("display","block");
                $(first).css("display","none");
                $(first).css("opacity","0");
            },300);
            setTimeout(function(){
                $(last).addClass("animated fadeInRight2");
            },400);
            $(last).attr("id","1");
        }
        else {
            var id5 = $(this).prop("id");
            var articleId = id5.replace("row","")
            var last = $(this).children().last().children().last();
            $(last).removeClass("animated fadeInRight2");
            $(first).removeClass("animated fadeOutLeft2");
            $(last).addClass("animated fadeOutRight2");
            setTimeout(function(){
                $(last).css("display","none");
                $(first).css("display","block");
            },400);
            setTimeout(function(){
                $(first).addClass("animated fadeInLeft2");
            },500);
            $(last).attr("id","0");
        }
            
        
    });
    $('.hoverRow').mouseleave(function(){
        $(this).children().first().css('color','');
    });
    $('.searchbox').focus(function(){
        $('.searchIcon').css('color','lightgreen');
    });
    $('.searchbox').focusout(function(){
        $('.searchIcon').css('color','white');
    });
    
    $('.searchbox').bind("enterKey",function(e){
        var txt = $('.searchbox').val();
        var tableRow = $(".newsTable td").filter(function() {
            var lowerCase = $(this).text().toLowerCase();
            var txtLowerCase = txt.toLowerCase();
            return lowerCase.includes(txtLowerCase);
        }).closest("tr");
        var rowId = tableRow[0]["id"];
        $('#'+rowId).css('transform','scale(1.02)');
        $('#'+rowId+' .changme').css('color','lightgreen');
        $('#'+rowId+' .iconNews').css('text-shadow','0 0 20px black');
        $('#'+rowId+' .iconNews').css('background-color','rgba(0,0,0,.7)');
        $('#'+rowId+' .titleNews').css('background-color','lightgray');
        $('#'+rowId+' .descNews').css('background-color','#e1d3c1');
        $('#'+rowId+' .date').css('color','white');
        $('#'+rowId+' .date').css('opacity','1');
        $('#'+rowId+' .button').css('border-color','white');
        $('#'+rowId+' .button').css('box-shadow','0 0 5px white');
        $('#'+rowId+' .button a').css('color','BLACK');
        $('#'+rowId+' .button a').css('text-shadow','0 0 20px black');
        $('#'+rowId+' .button .mask').css('background','#fff');
        $('#'+rowId+' .button .mask').css('-webkit-transform','translate3d(120%,-100px,0) rotate3d(0,0,1,90deg)');
        $('#'+rowId+' .button .mask').css('transform','translate3d(120%,-100px,0) rotate3d(0,0,1,90deg)');
        $('#'+rowId+' .button .shift').css('padding-left','5px');
        setTimeout(function(){
            $('#'+rowId).css('transform','');
            $('#'+rowId+' .changme').css('color','');
            $('#'+rowId+' .iconNews').css('text-shadow','');
            $('#'+rowId+' .iconNews').css('background-color','');
            $('#'+rowId+' .titleNews').css('background-color','');
            $('#'+rowId+' .descNews').css('background-color','');
            $('#'+rowId+' .date').css('color','');
            $('#'+rowId+' .date').css('opacity','');
            $('#'+rowId+' .button').css('border-color','');
            $('#'+rowId+' .button').css('box-shadow','');
            $('#'+rowId+' .button a').css('color','');
            $('#'+rowId+' .button a').css('text-shadow','');
            $('#'+rowId+' .button .mask').css('background','');
            $('#'+rowId+' .button .mask').css('-webkit-transform','');
            $('#'+rowId+' .button .mask').css('transform','');
            $('#'+rowId+' .button .shift').css('padding-left','');
        },1000);
        
    });
    $('.searchbox').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });
    
    //MAPS
    //MAPS
    //MAPS
    //MAPS
    var chosenSource = $('.selectSchool').val();
    var source = 'media/img/'+chosenSource+'.png';
    var chosenText = $('.selectSchool option:selected').text();
    $('.mapName2').text(chosenText);
    $('.map').attr('src',source);
    
    $('.selectSchool').change(function(){
        var chosenSource = $('.selectSchool').val();
        var source = 'media/img/'+chosenSource+'.png';
        var chosenText = $('.selectSchool option:selected').text();
        $('.mapName2').text(chosenText);
        $('.map').attr('src',source);
    })
    $('.mapPrev').mouseenter(function(){
        $('.mapName').removeClass('animated fadeInDown');
        $('.mapName').addClass('animated fadeOutUp2');
    });
    $('.mapPrev').mouseleave(function(){
        $('.mapName').removeClass('animated fadeOutUp2');
        $('.mapName').addClass('animated fadeInDown');
    });
    $('.closethis10').click(function () {
        $('.mapOverlay').css('opacity', '0');
        $('.resourcesPrelim').css('filter', 'blur(0px)');
        setTimeout(function () {
            $('.mapOverlay').css('display', 'none');
        }, 400)
    });
    $('#maps').click(function(){
        $('.videoOverlay').css('opacity', '0');
        setTimeout(function () {
            $('.videoOverlay').css('display', 'none');
        }, 400);
        $('.mapOverlay').css('display', 'block');
        setTimeout(function () {
            $('.mapOverlay').css('opacity', '1');
            $('.resourcesPrelim').css('filter', 'blur(10px)');
        }, 100)
    });


    //VIDEOS
    //VIDEOS
    //VIDEOS
    //VIDEOS
    var videoLinks = {
        'HTML' : 'https://www.youtube.com/embed/videoseries?list=PLfaFNeId9nhUmg_IaUVtvV9llZ6e9Fa9G',
        'JAVA' : 'https://www.youtube.com/embed/videoseries?list=PLfaFNeId9nhXoI4uhlHR_N_slsO7J_xgw',
        'WEBSERVER' : 'https://www.youtube.com/embed/videoseries?list=PLfaFNeId9nhVyoZjoJBQVJopece0FIgii'
    }
    var chosenVideo = $('.selectCat').val();
    var chosenURL = videoLinks[chosenVideo];
    $('.videoActual').attr('src',chosenURL);
    $('.selectCat').change(function(){
        var chosenVideo = $('.selectCat').val();
        var chosenURL = videoLinks[chosenVideo];
        $('.videoActual').attr('src',chosenURL);
    });
    $('.closethis11').click(function () {
        $('.videoOverlay').css('opacity', '0');
        $('.resourcesPrelim').css('filter', 'blur(0px)');
        setTimeout(function () {
            $('.videoOverlay').css('display', 'none');
        }, 400);
    });
    $('#videos').click(function(){
        $('.mapOverlay').css('opacity', '0');
        setTimeout(function () {
            $('.mapOverlay').css('display', 'none');
        }, 400)
        $('.videoOverlay').css('display', 'block');
        setTimeout(function () {
            $('.videoOverlay').css('opacity', '1');
            $('.resourcesPrelim').css('filter', 'blur(10px)');
        }, 100)
    });
    



});

//SEND SIGNUP MESSAGE
//SEND SIGNUP MESSAGE
//SEND SIGNUP MESSAGE
//SEND SIGNUP MESSAGE
//SEND SIGNUP MESSAGE
//SEND SIGNUP MESSAGE


function send() {
    var session = $('.sessionID').text();
    session = session.replace("SESSION: WEEK ", "");
    var firstName = $("#Fname").val();
    var lastName = $("#Lname").val();
    var email = $("#email").val();
    var classname = $(".changethis").text();
    classname = classname.replace("SIGNUP : ", "")
    var name = firstName + " " + lastName
    emailjs.send("gmail", "code_silicon_valley_2", {
            email: email,
            class: classname,
            instructor: $('#instructor').text(),
            date: $('#date').text(),
            location: $('#location').text(),
            time: $('#time').text(),
            name: name
        })
        .then(function (response) {
            $('.message2').css('opacity', '1');
            $(document).click(function () {
                $('.overlay3').css('opacity', '0');
                $('.message2').css('opacity', '0');
                setTimeout(function () {
                    $('.overlay3').css('display', 'none');
                    $(document).unbind("click");
                }, 400);
            });
        }, function (err) {
            $('#error2').text('There was an error sending you an email.');
            $('#error3').text('Did you enter your email correctly?');
            $('.message2').css('opacity', '1');
            $('#error').removeClass('signupMessage');
            $('#error').addClass('signupMessage2');
            $('#error').addClass('animated shake');
            $(document).click(function () {
                $('.overlay3').css('opacity', '0');
                $('.message2').css('opacity', '0');
                setTimeout(function () {
                    $('.overlay3').css('display', 'none');
                    $(document).unbind("click");
                    $('#error').addClass('signupMessage');
                    $('#error').removeClass('signupMessage2');
                    $('#error').removeClass('animated shake');
                    $('#error2').text('Congradulations on signing up for your coding course! ');
                    $('#error3').text('We have emailed you the details.');
                }, 400);
            });
        });
    $('.overlay3').css('display', 'block');
    setTimeout(function () {
        $('.overlay3').css('opacity', '1');
    }, 100);
    $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd8Q3II2WOVRltMIsnyXJEGcM-me2YbmXqVXK39jXrsR165yg/formResponse',
        data: {
            "entry.54058384": name,
            "entry.1311504193": classname,
            "entry.94533805": session,
            "entry.1413946718": $('#instructor').text()
        },
        error: function () {},
        dataType: 'xml',
        success: function (data) {},
        type: 'POST'
    });

}