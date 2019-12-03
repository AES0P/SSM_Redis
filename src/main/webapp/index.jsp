<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="static/css/bootstrap.min.css">
    <!-- Font Awesome & Pixeden Icon Stroke icon font-->
    <link rel="stylesheet" href="static/css/font-awesome.min.css">
    <link rel="stylesheet" href="static/css/pe-icon-7-stroke.css">
    <!-- Google fonts - Roboto Condensed & Roboto-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Roboto:300,400">
    <!-- lightbox-->
    <link rel="stylesheet" href="static/css/lightbox.min.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="static/css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="static/css/custom.css">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
</head>
<body class="home">
<!-- navbar-->
<header class="header">
    <div role="navigation" class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header"><a href="index.jsp" class="navbar-brand">Aesop.</a>
                <div class="navbar-buttons">
                    <button type="button" data-toggle="collapse" data-target=".navbar-collapse"
                            class="navbar-toggle navbar-btn">Menu<i class="fa fa-align-justify"></i></button>
                </div>
            </div>
            <div id="navigation" class="collapse navbar-collapse navbar-right">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="index.jsp">Home</a></li>
                    <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Dropdown <b
                            class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Dropdown item 1</a></li>
                            <li><a href="#">Dropdown item 2</a></li>
                            <li><a href="#">Dropdown item 3</a></li>
                            <li><a href="#">Dropdown item 4</a></li>
                        </ul>
                    </li>
                </ul>
                <a href="login" class="btn navbar-btn btn-white pull-left"><i class="fa fa-sign-in"></i>Log in</a>
            </div>
        </div>
    </div>
</header>

<div id="carousel-home" data-ride="carousel" class="carousel slide carousel-fullscreen carousel-fade">
    <!-- Indicators-->
    <ol class="carousel-indicators">
        <li data-target="#carousel-home" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-home" data-slide-to="1"></li>
        <li data-target="#carousel-home" data-slide-to="2"></li>
    </ol>
    <!-- Wrapper for slides-->
    <div role="listbox" class="carousel-inner">
        <div style="background-image: url('static/img/carousel3.jpg');" class="item active">
            <div class="overlay"></div>
            <div class="carousel-caption">
                <h1 class="super-heading">Welcome page 1!</h1>
                <p class="super-paragraph">A simple SSM + Redis framework demo.</p>
            </div>
        </div>
        <div style="background-image: url('static/img/carousel2.jpg');" class="item">
            <div class="overlay"></div>
            <div class="carousel-caption">
                <h1 class="super-heading">Welcome page 2!</h1>
                <p class="super-paragraph">A simple SSM + Redis framework demo.</p>
            </div>
        </div>
        <div style="background-image: url('static/img/carousel1.jpg');" class="item">
            <div class="overlay"></div>
            <div class="carousel-caption">
                <h1 class="super-heading">Welcome page 3!</h1>
                <p>A simple SSM + Redis framework demo..</p>
            </div>
        </div>
    </div>
</div>

<footer class="footer">
    <div class="footer__copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>Made on 2019.12.03 by<a
                            target="_blank"
                            href="http://www.github.com/AES0P">Aesop</a>
                    </p>
                </div>
                <div class="col-md-6">
                    <p class="credit"></p>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Javascript files-->
<script src="static/js/jquery.min.js"></script>
<script src="static/js/bootstrap.min.js"></script>
<script src="static/js/jquery.cookie.js"></script>
<script src="static/js/lightbox.min.js"></script>
<script src="static/js/front.js"></script><!-- substitute:livereload -->
</body>
</html>
