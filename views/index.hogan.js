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

<h1>{{org.name}}</h1>
<p>
  {{org.description}}
</p>

<h1>Available badges</h1>
{{#badges}}
<div class="avail-badge">
  <img src="{{src}}" />
  <h2>{{name}}</h2>
  <p>{{description}}</p>
</div>
{{/badges}}
