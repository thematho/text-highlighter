import TextHtmlParserModule from './text-html-parser';
import TextHtmlParserService from './text-html-parser.service';

describe('Module ng6Starter.textHtmlParser', () => {

  // Load involved Modules
  beforeEach(window.module(TextHtmlParserModule));
  describe('TextHtmlParserService', () => {
    let getService;

    beforeEach(inject(($injector) => {

      getService = () => {
        // You can use injection to obtain the service but you really should
        // test the service alone as a function and provide the injections yourself
        // return $injector.get('TextHtmlParserService');
        return new TextHtmlParserService();
      };
    }));

    it('Should parse properly a simple string into the same string parsed by spans', () => { // erase if removing this.items from the service
      const service = getService();
      const charsMock = 'abc d';
      const expectedOutput = '<span class="">a</span><span class="">b</span><span class="">c</span><span class=""> </span><span class="">d</span>'
      expect(service.parseCharsToSpans(charsMock)).toEqual(expectedOutput);
    });
    it('Should return an empty output when input is empty', () => { // erase if removing this.items from the service
      const service = getService();
      const charsMock = '';
      const expectedOutput = '';
      expect(service.parseCharsToSpans(charsMock)).toEqual(expectedOutput);
    });
  });
});