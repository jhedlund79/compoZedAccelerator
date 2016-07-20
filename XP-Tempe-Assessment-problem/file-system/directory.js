function Directory(dirName){
  this.name = dirName;
  this.files = [];
}

Directory.prototype.ls = function () {
  return this.files.map(function(file){
    return file.fileName
  }).sort();
};

Directory.prototype.write = function (name, content) {
  if(this.files.length > 0){
  for(var i = 0; i < this.files.length; i ++){
    if(this.files[i].fileName === name){
      this.files[i] = {fileName: name, content: content};
    }else{
      this.files.push({fileName: name, content: content});
    }
  }
  }else{
    this.files.push({fileName: name, content: content});
  }
};

Directory.prototype.ls_la = function(){
  return this.files.map(function(file){
    return file.fileName + " - " + file.content.length;
  }).sort();
}

Directory.prototype.cat = function(fileName){
  var fileCat = '';
  this.files.forEach(function(file){
    if(file.fileName === fileName){
      fileCat += file.content;
    }
  });
  return fileCat;
}

Directory.prototype.mv = function(fileName, newFileName){
  this.files.forEach(function(file){
    if(file.fileName === fileName){
      file.fileName =  newFileName;
    }
  });
}

Directory.prototype.cp = function(fileName, newFileName){
  for(var i = 0; i < this.files.length; i ++){
    if(this.files[i].fileName === fileName){
      this.files[i].fileName = newFileName;
    }
  }
}
//
// Directory.prototype.ln_s = function(name, newFileName){
//   for(var i = 0; i < this.files.length; i ++){
//     if(this.files[i].fileName === name){
//       this.write(newFileName, this.files[i].content);
//     }
//   }
// }

module.exports = Directory;
