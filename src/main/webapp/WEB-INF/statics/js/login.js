$(function () {

    $(".login").click(function (e) {

        // //获取控件值的方法
        var name = document.getElementById("name").value;
        var pass = document.getElementById("pass").value;

        if (name === "" || pass === "") {
            alert("Name or password can not be empty!");
            return;
        }

        $.ajax({

            url: "login/loginCheck",
            type: "POST",
            data: {username: name, password: pass},
            success: function (res) {

                if (res === "OK") {

                    location.href = "login/result";

                    //控制成功后打勾
                    var pX = e.pageX,
                        pY = e.pageY,
                        oX = parseInt($(this).offset().left),
                        oY = parseInt($(this).offset().top);

                    $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
                    $('.x-' + oX + '.y-' + oY + '').animate({
                        "width": "500px",
                        "height": "500px",
                        "top": "-250px",
                        "left": "-250px",

                    }, 600);
                    $("button", this).addClass('active');

                } else {
                    alert(res);
                }

            },

            error: function (xhr, textStatus, errorThrown) {
                alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
            }

        });


    })

    $(".regist").click(function (e) {

        // //获取控件值的方法
        var name = document.getElementById("regname").value;
        var pass = document.getElementById("regpass").value;
        var repass = document.getElementById("reregpass").value;

        if (name === "" || pass === "" || repass === "") {
            alert("Name or password can not be empty!");
            return;
        }

        if (pass !== repass) {
            alert("Password must be same!");
            return;
        }

        var user = {};
        user.name = name;
        user.password = pass;
        user.role = "normal";
        user.comments = "";
        user.sexy = 2;

        $.ajax({

            url: "result/addUser",
            type: "POST",
            async: false,
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(user),
            success: function (res) {

                if (res === "OK") {

                    alert("注册成功！");

                    //控制成功后打勾
                    var pX = e.pageX,
                        pY = e.pageY,
                        oX = parseInt($(this).offset().left),
                        oY = parseInt($(this).offset().top);

                    $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
                    $('.x-' + oX + '.y-' + oY + '').animate({
                        "width": "500px",
                        "height": "500px",
                        "top": "-250px",
                        "left": "-250px",

                    }, 600);
                    $("button", this).addClass('active');

                } else {
                    alert(res);
                }

            },

            error: function (xhr, textStatus, errorThrown) {
                alert("系统繁忙,请稍后再试!\n" + xhr.responseText);
            }

        });


    })


    $(".input input").focus(function () {

        $(this).parent(".input").each(function () {
            $("label", this).css({
                "line-height": "18px",
                "font-size": "18px",
                "font-weight": "100",
                "top": "0px"
            });
            $(".spin", this).css({
                "width": "100%"
            })
        });
    }).blur(function () {
        $(".spin").css({
            "width": "0px"
        });
        if ($(this).val() === "") {
            $(this).parent(".input").each(function () {
                $("label", this).css({
                    "line-height": "60px",
                    "font-size": "24px",
                    "font-weight": "300",
                    "top": "10px"
                })
            });

        }
    });

    $(".alt-2").click(function () {

        if (!$(this).hasClass('material-button')) {
            $(".shape").css({
                "width": "100%",
                "height": "100%",
                "transform": "rotate(0deg)"
            })

            setTimeout(function () {
                $(".overbox").css({
                    "overflow": "initial"
                })
            }, 600)

            $(this).animate({
                "width": "140px",
                "height": "140px"
            }, 500, function () {
                $(".box").removeClass("back");

                $(this).removeClass('active')
            });

            $(".overbox .title").fadeOut(300);
            $(".overbox .input").fadeOut(300);
            $(".overbox .button").fadeOut(300);

            $(".alt-2").addClass('material-buton');
        }

    })

    $(".material-button").click(function () {

        if ($(this).hasClass('material-button')) {
            setTimeout(function () {
                $(".overbox").css({
                    "overflow": "hidden"
                })
                $(".box").addClass("back");
            }, 200)
            $(this).addClass('active').animate({
                "width": "700px",
                "height": "700px"
            });

            setTimeout(function () {
                $(".shape").css({
                    "width": "50%",
                    "height": "50%",
                    "transform": "rotate(45deg)"
                })

                $(".overbox .title").fadeIn(300);
                $(".overbox .input").fadeIn(300);
                $(".overbox .button").fadeIn(300);
            }, 700)

            $(this).removeClass('material-button');

        }

        if ($(".alt-2").hasClass('material-buton')) {
            $(".alt-2").removeClass('material-buton');
            $(".alt-2").addClass('material-button');
        }

    });


});
