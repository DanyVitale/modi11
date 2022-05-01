import 'mocha';
import {expect} from 'chai';
import {weatherInfo, coordinatesInfo} from '../src/http';

describe('Asynchronous function weatherInfo tests', () => {
  it('weatherInfo should get weather information', (done) => {
    weatherInfo('Tenerife, Spain', (_, data) => {
      if (data) {
        expect(data.body.location.name).to.equal('Tenerife');
        done();
      }
    });
  });

  it('weatherInfo should provide an error', (done) => {
    weatherInfo('12wherever', (error, _) => {
      if (error) {
        expect(error).to.equal('Weatherstack API error: request_failed');
        done();
      }
    });
  });
});

describe('Asynchronous function coordinatesInfo tests', () => {
  it('coordinatesInfo should get coordinates information', (done) => {
    coordinatesInfo('Tenerife, Spain', (_, data) => {
      if (data) {
        expect(data.body.features[0].center[0]).to.equal(-16.642039);
        done();
      }
    });
  });

  it('coordinatesInfo should provide an error', (done) => {
    coordinatesInfo('12wherever', (error, _) => {
      if (error) {
        expect(error).to.equal('Mapbox API error: no location found');
        done();
      }
    });
  });
});