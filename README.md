Very basic example on how to use models and collections in Titanium.

**How to start**
- check out this repo
<br>or
- create a new project `ti create`
- go to the folder and run `alloy new` to make it an Alloy project
- create a model/collection `alloy generate model NAME sql id:'INTEGER PRIMARY KEY AUTOINCREMENT' title:text subtitle:text image:text`
- create the controller code (see `controller/index.js`) and the view (see `views/index.xml`)

**Features:**
- SQL collection/models (called `library`) at `models/library.js`
- Creating a model (called `book`)
- Adding it to a collection
- Saving the data to make it persistent (model.save())
- Create a custom function on the model (`extendModel` inside `models/library.js`)
- Use a ListView to display the data
- Remove one model from the collection
- Clear the whole collection

For more information have a look at the Titanium documentation or the Backbone.js page:
* http://docs.appcelerator.com/platform/latest/#!/guide/Alloy_Models
* http://backbonejs.org/
