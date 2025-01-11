var args = $.args;
var library = Alloy.Collections.library
var lastCollectionItem = Alloy.Collections.library.last();

$.current.fetch({
    id: lastCollectionItem.attributes.id
});
