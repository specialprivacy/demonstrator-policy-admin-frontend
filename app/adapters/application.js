import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  handleResponse(status, headers, payload) {
    if (status === 401) {
      if(headers.location){
        return window.location.replace(headers.location);
      }
    }
    return this._super(...arguments);
  }
});
