angular.module('mean-blog')
  .filter('markdown', function() {
    return function(input) {
      if (input) {
        return marked(input);
      }
    };
  });

  marked.setOptions({
    gfm: true,
    highlight: function(code, lang) {
      if (lang)
        return hljs.highlight(lang, code).value;
      else
        return hljs.highlightAuto(code).value;
    }
  });
