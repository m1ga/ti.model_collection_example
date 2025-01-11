// get data from stored collection
var library = Alloy.Collections.library
library.fetch({
	reset: true
});

function onClickAdd(e) {
	// create
	var book = Alloy.createModel('library');
	book.save({
		title: 'Title' + Math.floor(Math.random() * 1000),
		subtitle: 'asdfasdf ' + Math.floor(Math.random() * 1000),
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-220px-SIPI_Jelly_Beans_4.1.07.tiff.jpg'
	}, {
		success: function() {
			console.log("success")

			console.log(book.transform());
			console.log(book.transform().dateFormatted);

			library.fetch(); // update listView
			console.log(library.length)
		}
	}); // save database
	library.fetch({
		reset: true
	});
}

function onClickClear(e) {
	// get every model from collection and run 'destroy()'
	_.invoke(Alloy.Collections.library.toArray(), 'destroy');
}

function onClickItem(e) {
	var rowid = e.section.getItemAt(e.itemIndex).properties.rowid;
	if (OS_IOS) {
		$.listView.deselectItem(e.sectionIndex, e.itemIndex);
	}

	// find models by id and destroy it (array with one element -> id = primary key)
	var res = Alloy.Collections.library.where({
		id: rowid
	})

	if (res.length > 0) {
		res[0].destroy();
	}
}

$.listView.addEventListener("itemclick", onClickItem);
$.index.open();

function onClickOne(e) {
	var w = Alloy.createController("/single").getView()
	w.open();
}

var checked = false;

function dataFilter(collection) {
	let arrayObj = collection.where();
	console.log(arrayObj.length)
	return arrayObj;
}
