(function($) {
  Drupal.behaviors.webform_skip = {
    attach: function(context, settings) {
      $('.webform-progressbar-page').on('click', function() {
        // don't do anything if they click the "complete" progress bar
        var text = $(this).find('.webform-progressbar-page-label').text().trim();
        if (text === 'Complete') {
          return;
        }

        // find which page number was clicked on
        var page_num = $(this).find('.webform-progressbar-page-number').text();

        // set the hidden form element to that value
        $('#edit-skip').val(page_num);

        // submit the webform
        $('.webform-next, .webform-previous').first().click();
      });
    }
  };
})(jQuery);
