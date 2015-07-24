/* Define API endpoints once globally */
$.fn.api.settings.api = {
  'get followers' : '/followers/{id}?results={count}',
  'create user'   : '/create',
  'add user'      : '/add/{id}',
  'follow user'   : '/follow/{id}',
  'search'        : '/search/?query={value}'
};

// Named API actions are not required to use API,
// you can also manually specify the url for a request and
// use the same templating:
$('.search.button')
  .api({
    url: 'http://www.google.com?q={value}'
  })
;


<div class="ui follow button">
  Follow
</div>

// translates '/follow/{id}' to 'follow/22'
$('.follow.button')
  .api({
    action: 'follow user',
    urlData: {
      id: 22
    }
  });


<div class="ui follow button" data-action="follow user" data-id="22">
  Follow
</div>

// also calls '/follow/22'
$('.follow.button')
  .api();


// Specifying DOM Events
// If you need to override what action an API event occurs on 
// you can use the 'on' parameter.

$('.follow.button')
  .api({
    action: 'follow user',
    on: 'mouseenter'
  });

// NOW
$('.follow.button')
  .api({
    action: 'follow user',
    on: 'now'
  });

