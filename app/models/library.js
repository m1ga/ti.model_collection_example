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

			transform: function() {
				var model = this;
				var t = this.toJSON();

				Object.defineProperty(t, 'dateFormatted', {
					get: function() {
						return "test";
					}
				});

				return t;
			},
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
		});
		return Collection;
	}
};
