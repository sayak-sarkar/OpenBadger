<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/bootstrap-2.0.2.min.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <link href="//www.mozilla.org/tabzilla/media/css/tabzilla.css" rel="stylesheet" /> 
    <title dir="ltr">Open Badger</title>
  </head>
  <body>
    <div class="navbar">
      <div class="navbar-inner">
        <div class="container" style="position: relative;">
          <h3><a class="brand" href="/">Open Badger</a></h3>
          <a href="http://www.mozilla.org/" id="tabzilla">a mozilla.org joint</a> 
          <ul class="nav">
            {{#user}}
              <li><a href="#">Home</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Organization <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#">View your page</a></li>
                  <li><a href="#">Edit your info</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  Badges <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#">Add a badge</a></li>
                  <li><a href="#">Issue a badge</a></li>
                </ul>
            {{/user}}
          </ul>
          {{#user}}
            <ul class="nav pull-right">
              <li class="user">{{attributes.email}}</li>
              <li><a href="#">Sign Out</a></li>
            </ul>
          {{/user}}
        </div>
      </div>
    </div>

    <div id="body" class="container">
      <div class='message-container'>
      {{#error.length}}
        <div class="alert alert-error">
          <a class="close" data-dismiss="alert">×</a>
          {{error}}
        </div>
      {{/error.length}}
      
      {{#success.length}}
        <div class="alert alert-success">
          <a class="close" data-dismiss="alert">×</a>
          {{success}}
        </div>
      {{/success.length}}
      </div>

      {{{body}}}
    </div>

    <div id="footer" class="container">
      <aside>
        <h2>Legal</h2>
        <ul>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </aside>
    </div>
      
      
      <!-- third party -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
      <script src="//www.mozilla.org/tabzilla/media/js/tabzilla.js"></script> 
      <script src="js/bootstrap-2.0.2.min.js"></script>
      
      <!-- my libraries -->
      
  </body>
</html>
