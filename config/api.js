'use strict';

const baseUrl = 'https://venera-node-api.herokuapp.com';

const api = {
  getSearches: baseUrl + '/getSearches',
  getTopSearches: baseUrl + '/getTopSearches',
  getByID: baseUrl + '/getByID',
  deleteSearch: baseUrl + '/deleteSearch',
  getData: baseUrl + '/getData',
  analysisData: baseUrl + '/analysisData',
};

module.exports = api;
