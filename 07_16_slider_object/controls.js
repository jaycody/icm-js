function Control(_name, _minValue, _maxValue, _initValue, _locScale, _length) {
  this.name       = _name;    //name of this control
  
  this.minValue   = _minValue;
  this.maxValue   = _maxValue;
  this.initValue  = _initValue;
  
  this.yOffsetName  = 45;
  
  // respond to screenwidth
  if (width < 1000){
    this.widthScale = .83;
  } else {
    this.widthScale = .80;
  }
  
  this.heightScale= height/CONTROL_COUNT;
  this.locScale   = _locScale + .2;  
  this.location   = createVector(width*this.widthScale, (this.heightScale)*(this.locScale));
  this.displayNameLocation = createVector(width*this.widthScale, (this.heightScale)*(this.locScale)+this.yOffsetName);
  
  //this.displayNamesList = ['Background', 'Hue', 'Brightness', 'Saturation', 'Alpha', 'Diameter'];
  this.displayNamesList = [];
  
  
  this.slider = createSlider(this.minValue, this.maxValue, this.initValue);
  this.slider.position(this.location.x, this.location.y);
  this.slider.size(_length);
  
  
  this.displayName = function(){
    textSize(15);
    text(this.name + " = " + this.getValue(), this.displayNameLocation.x, this.displayNameLocation.y);
    /*
    if (this.displayNamesList[this.name] != null){
      text(this.displayNamesList[this.name] + " = " + this.getValue(), this.displayNameLocation.x, this.displayNameLocation.y);
    } else {
      text(this.name + " = " + this.getValue(), this.displayNameLocation.x, this.displayNameLocation.y);
    }
    */
  };
  
  // Return the current value as a percentage
  this.asPercentage = function(){
    //var val = this.name.value();
    var val = this.slider.value();
    return val/this.maxValue;
  };
  
  // Return the current value 
  this.getValue = function(){
    return this.slider.value();
  };
  
  // Change the value of the control without using the slider
  this.setValue = function(newValue){
    //this.name.value(newValue);
    this.slider.value(newValue);
  };
}