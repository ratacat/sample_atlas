/**
* @Constructor Sample
* @param name: String // Name of the sample
* @param macro: String // Macro attribute (e.g., Bass)
* @param messo: Array[String] // Messo attributes (e.g., Analog Bass)
* @param micro: Array[String] // Micro attributes (e.g., FM, long evolving)
* @param technical: Array[String] // Technical attributes (e.g., recorder, mikes)
* @param filePath: String // pathToSampleFile
*/

var Sample = function (name, macro, messo, micro, technical, filePath) {
  this.id = Date.now();
  this.name = name;
  this.macro = macro;
  this.messo = messo;
  this.micro = micro;
  this.technical = technical;
  this.filePath = filePath;
}

/**
* @function getSamples
* @param pathToFile // path to JSON file
* Given a JSON file containing samples, this
* function will return an array of the Samples
* read from the file. 
*/
var getSamples = function (pathToFile) {
  var fileData, samples = [];
  $.ajax({
    url: pathToFile,
    async: false,
    dataType: 'json',
    success:  function (data) {
      //console.log("data: ", data);
      fileData = data;
    }
  });

  // Add the sample to the sample array
  fileData.forEach(function(s) {
    samples.push(new Sample(s.name, s.macro, s.messo,
                            s.micro, s.technical, s.filePath));
  });

  return samples;
}

  
