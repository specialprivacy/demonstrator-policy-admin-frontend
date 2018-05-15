import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  handleResponse(status, headers, payload) {
    console.log(`status: ${status}`)
    console.log(`headers: ${JSON.stringify(headers)}`)
    if (status === 401) {
      if(headers.Location){
        return window.location.replace(headers.Location);
      }
    }
    return this._super(...arguments);
  }
});
