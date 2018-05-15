import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  handleResponse(status, headers, payload) {
    console.log(`status: ${status}`)
    console.log(`headers: ${JSON.stringify(headers)}`)
    if (status === 401) {
      const locationHeader = headers.location || headers.Location || headers.LOCATION
      if (locationHeader) {
        return window.location.replace(locationHeader);
      }
    }
    return this._super(...arguments);
  }
});
