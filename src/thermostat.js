'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSN_OFF = 32;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.temperature === this.MINIMUM_TEMPERATURE) {
  return;
}
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSN_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = 20;
}
