import * as JsSearch from 'js-search';

// Create Search Index function
  // id (string), indexes (array of strings), searchableItems (array of objects) 
  export default function createSearchIndex(id, indexes, searchableItems) {

    // Creates search index based on unique id
    const newSearchIndex = new JsSearch.Search(id);

    // Creates an index strategy. There are other indexing strategies available: https://github.com/bvaughn/js-search#configuring-the-index-strategy
    newSearchIndex.indexStrategy = new JsSearch.PrefixIndexStrategy();

    // Makes it okay for words to be lowercase
    newSearchIndex.sanitizer = new JsSearch.LowerCaseSanitizer();

    // Term frequency-inverse document frequency search index
    // Determines how important words are in a document.
    newSearchIndex.searchIndex = new JsSearch.TfIdfSearchIndex('id');

    indexes.forEach(index => {
      newSearchIndex.addIndex(index);
    })

    newSearchIndex.addDocuments(searchableItems)

    return newSearchIndex;

  }