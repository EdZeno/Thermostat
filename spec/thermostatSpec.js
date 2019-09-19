'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
  expect(thermostat.getCurrentTemperature()).toEqual(20)
});
  it('increases the temperature', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
  it('decreases the temperature', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
  it('has a powet saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can turn the power saving mode off', function(){
    thermostat.switchPowerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('can turn turn the power saving mode back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has the maximum temperature of 25', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
  describe('when power saving is off', function(){
    it('has the maximum temperature of 32', function(){
      thermostat.switchPowerSavingModeOff();
      for(var i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });
  it('can be reset to default temperatures', function(){
    for(var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
