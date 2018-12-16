function FilterWordsEventService($rootScope, FILTER_WORDS_CONSTANTS) {
  'ngInject';

  const EVENTS = FILTER_WORDS_CONSTANTS;

  /**
   * @returns undefined (no return)
   * @param {String} color use to filter selected words
   */
  const onFilterWords = (color) => {
    $rootScope.$emit(EVENTS.ON_FILTER_WORDS, { color });
  };
  /**
   * @returns undefined (no return)
   * @param {function} filterWordsCallback function to be executed once the subscriber
   * receives a request event to filter words
   */
  const onFilterRequest = (filterWordsCallback) => {
    $rootScope.$on(EVENTS.ON_FILTER_WORDS, (event, { color }) => {
      event.stopPropagation();
      const wordList = filterWordsCallback(color);
      $rootScope.$emit(EVENTS.FILTER_COMPLETE, { wordList });
    });
  };
  /**
   * @returns undefined (no return)
   * @param {function} onResponseCallback function to be exected when an event responding to
   * a filter request has been emitted.
   */
  const onFilterResponse = (onResponseCallback) => {
    $rootScope.$on(EVENTS.FILTER_COMPLETE, (event, { wordList }) => {
      event.stopPropagation();
      onResponseCallback(wordList);
    });
  };

  return {
    onFilterWords,
    onFilterRequest,
    onFilterResponse,
  };
}

export default FilterWordsEventService;
