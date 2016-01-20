angular.module('mean-blog')
  .filter('date', function() {
    var months = [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ];

    return function(input) {
      if (input) {
        var dateString = '';
        var date = new Date(input);

        // make sure input is a valid date
        if (date.toString().indexOf('Invalid Date') === -1) {
          dateString += months[date.getMonth()];
          dateString += ' ' + date.getDate();
          dateString += ', ' + date.getFullYear();
          dateString += ' - ' + date.getHours();
          dateString += ':' + date.getMinutes();
        }

        return dateString;
      }
    };
  });
