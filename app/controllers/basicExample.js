// get data from stored collection
Alloy.Collections.library.fetch();

function onClickAdd(e) {
	// create
	var book = Alloy.createModel('library', {
		title: 'Title' + Math.floor(Math.random() * 1000),
		subtitle: 'subtitle ' + Math.floor(Math.random() * 1000),
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-220px-SIPI_Jelly_Beans_4.1.07.tiff.jpg'
	});

	// run extended method from model
	console.log("Book valid: " + book.validate());

	if (book.validate()) {
		book.save(); // save database
		Alloy.Collections.library.fetch(); // get data again and update listView
	}
}

function onClickClear(e) {
	// get every model from collection and run 'destroy()'
	_.invoke(Alloy.Collections.library.toArray(), 'destroy');

	// Alloy.Collections.library.clear();	// same function as above but as an extended method on the controller
}

function onClickItem(e) {
	var rowid = e.section.getItemAt(e.itemIndex).properties.rowid;
	if (OS_IOS) {
		$.listView.deselectItem(e.sectionIndex, e.itemIndex);
	}

	// find models by id and destroy it (array with one element -> id = primary key)
	Alloy.Collections.library.where({
		id: rowid
	})[0].destroy();
}

function onClickDump(e) {
	// call collection method
	console.log(Alloy.Collections.library.dump());
}

function onClickClose(e){
	$.destroy();
	$.basicExample.close();
}

$.btn_close.addEventListener("click",onClickClose);
$.listView.addEventListener("itemclick", onClickItem);
$.btn_dump.addEventListener("singletap", onClickDump);
$.btn_clear.addEventListener("singletap", onClickClear);
$.btn_add.addEventListener("singletap", onClickAdd);

$.basicExample.open();
