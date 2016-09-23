var axios = require('axios');
var Q = require('q');


var FFNERD_ENDPOINT = 'http://www.fantasyfootballnerd.com/service/';


module.exports = {
  weeklyRankings: function(week) {
    var deferred = Q.defer();

    // TODO: deferred.reject(err);

    function getQBRankings() {
      return axios.get(`${FFNERD_ENDPOINT}/weekly-rankings/json/${process.env.FFNERD_API_KEY}/QB/${week}`);
    }

    function getRBRankings() {
      return axios.get(`${FFNERD_ENDPOINT}/weekly-rankings/json/${process.env.FFNERD_API_KEY}/RB/${week}`);
    }

    function getWRRankings() {
      return axios.get(`${FFNERD_ENDPOINT}/weekly-rankings/json/${process.env.FFNERD_API_KEY}/WR/${week}`);
    }

    function getTERankings() {
      return axios.get(`${FFNERD_ENDPOINT}/weekly-rankings/json/${process.env.FFNERD_API_KEY}/TE/${week}`);
    }

    function getKRankings() {
      return axios.get(`${FFNERD_ENDPOINT}/weekly-rankings/json/${process.env.FFNERD_API_KEY}/K/${week}`);
    }

    function getDEFRankings() {
      return axios.get(`${FFNERD_ENDPOINT}/weekly-rankings/json/${process.env.FFNERD_API_KEY}/DEF/${week}`);
    }
    
    axios.all([
      getQBRankings(),
      getRBRankings(),
      getWRRankings(),
      getTERankings(),
      getKRankings(),
      getDEFRankings(),
    ]).then(axios.spread(function(QBResponse, RBResponse, WRResponse, TEResponse, KResponse, DEFResponse) {
      console.log(QBResponse);
      var rankings = QBResponse.data.Rankings.concat(RBResponse.data.Rankings,
          WRResponse.data.Rankings, TEResponse.data.Rankings,
          KResponse.data.Rankings, DEFResponse.data.Rankings);

      deferred.resolve(rankings);
    })).catch(function (error) {
      console.log(error);
    });

    return deferred.promise;
  }
};
