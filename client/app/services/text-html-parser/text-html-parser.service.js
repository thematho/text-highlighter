function TextHtmlParserService() {
  'ngInject';

  let parseCharsToSpans = (text = '') => (text.split('')
    .map(char => `<span class="">${char}</span>`)
    .join('')
  );
  return {
    parseCharsToSpans,
  };
}

export default TextHtmlParserService;
