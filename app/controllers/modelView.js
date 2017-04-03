// load collection:
Alloy.Collections.library.fetch();

// display last element:
var lastCollectionItem = Alloy.Collections.library.last();
console.log(lastCollectionItem);

// check if collection is available
if (lastCollectionItem != null) {
	// load specific model:
	$.currentId.fetch({
		id: lastCollectionItem.id
	});
} else {
	alert("Run basic example first and add elements to collection");
}


function onClickClose(e) {
	$.destroy();
	$.modelView.close();
}

$.btn_close.addEventListener("click", onClickClose);
$.modelView.open();
