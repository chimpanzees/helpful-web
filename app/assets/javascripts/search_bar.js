$(function() {
  var $search = $('#q');
  var $dropdown = $search.closest('form').find('.dropdown');

  var open = function() {
    $dropdown.addClass('open');
  };

  var close = function() {
    $dropdown.removeClass('open');
  };

  $search.focus(function() { open() });
  $search.blur(function() { close() });

  $search.keypress(function() {
    if($search.val() === '') {
      open();
    } else {
      close();
    }
  });
});
