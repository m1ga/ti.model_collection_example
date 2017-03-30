exports.definition = {
	config: {
		columns: {
			"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
			"title": "text",
			"subtitle": "text",
			"image": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "library",
			idAttribute: "id",
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			validate: function() {
				// check if a book is valid: title, subtitle and image are not empty
				var val = false;
				if (this.get("title") != null && this.get("subtitle") != null && this.get("image") != null) {
					return true;
				} else {
					return false;
				}
				return false;
			}
		});
 
		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			dump: function() {
				// get all models
				return this.models;
			},
			clear: function() {
				// remove/destroy all models
				_.invoke(this.toArray(), 'destroy');
			}
		});

		return Collection;
	}
};
