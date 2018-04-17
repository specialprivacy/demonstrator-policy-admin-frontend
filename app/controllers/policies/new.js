import Controller from '@ember/controller';

export default Controller.extend({
  collections: Ember.inject.service(),
  dataCollections: Ember.computed.alias("collections.dataCollections"),
  locationCollections: Ember.computed.alias("collections.locationCollections"),
  processCollections: Ember.computed.alias("collections.processCollections"),
  purposeCollections: Ember.computed.alias("collections.purposeCollections"),
  recipientCollections: Ember.computed.alias("collections.recipientCollections"),
  selectedDataCollection: Ember.computed("model.dataCollection", function(){
    return this.get("dataCollections").filter(collection => {return collection.value === this.model.get("dataCollection")})[0];
  }),
  selectedLocationCollection: Ember.computed("model.locationCollection", function(){
    return this.get("locationCollections").filter(collection => {return collection.value === this.model.get("locationCollection")})[0];
  }),
  selectedProcessCollection: Ember.computed("model.processCollection", function(){
    return this.get("processCollections").filter(collection => {return collection.value === this.model.get("processCollection")})[0];
  }),
  selectedPurposeCollection: Ember.computed("model.purposeCollection", function(){
    return this.get("purposeCollections").filter(collection => {return collection.value === this.model.get("purposeCollection")})[0];
  }),
  selectedRecipientCollection: Ember.computed("model.recipientCollection", function(){
    return this.get("recipientCollections").filter(collection => {return collection.value === this.model.get("recipientCollection")})[0];
  }),

  actions: {
    set: function(attribute, value){
      this.get("model").set(attribute, value.value);
    },
    save: function () {
      this.get("model").save().then(model => {
        this.transitionToRoute("policies");
      });
    },
    cancel: function () {
      this.get("model").reload()
        .then(model => {
          return model.rollbackAttributes();
        }).then(() => {
        this.transitionToRoute("policies");
      });
    }
  }
});
