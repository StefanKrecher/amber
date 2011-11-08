smalltalk.addPackage('FileServer', {"version":"0.8"});
smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'port', 'basePath', 'sys', 'db'], 'FileServer');
smalltalk.addMethod(
unescape('_basePath'),
smalltalk.method({
selector: unescape('basePath'),
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@basePath']) == nil || $receiver == undefined ? function () {return unescape("./");}() : $receiver;
    return self;
},
args: [],
source: unescape('basePath%0A%09%5EbasePath%20ifNil%3A%20%5B%27./%27%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_basePath_'),
smalltalk.method({
selector: unescape('basePath%3A'),
category: 'accessing',
fn: function (aString) {
    var self = this;
    self['@basePath'] = aString;
    return self;
},
args: ["aString"],
source: unescape('basePath%3A%20aString%0A%09basePath%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_port'),
smalltalk.method({
selector: unescape('port'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "_port", []);
    return self;
},
args: [],
source: unescape('port%0A%09%5Eself%20class%20port'),
messageSends: ["port", "class"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@path'] = smalltalk.send(self, "_require_", ["path"]);
    self['@http'] = smalltalk.send(self, "_require_", ["http"]);
    self['@fs'] = smalltalk.send(self, "_require_", ["fs"]);
    self['@sys'] = smalltalk.send(self, "_require_", ["sys"]);
    self['@url'] = smalltalk.send(self, "_require_", ["url"]);
    self['@db'] = smalltalk.send(self, "_require_", ["mongodb"]);
    return self;
},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09path%20%3A%3D%20self%20require%3A%20%27path%27.%0A%09http%20%3A%3D%20self%20require%3A%20%27http%27.%0A%09fs%20%3A%3D%20self%20require%3A%20%27fs%27.%0A%09sys%20%3A%3D%20self%20require%3A%20%27sys%27.%0A%09url%20%3A%3D%20self%20require%3A%20%27url%27.%0A%09db%20%3A%3D%20self%20require%3A%20%27mongodb%27.'),
messageSends: ["initialize", "require:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_require_'),
smalltalk.method({
selector: unescape('require%3A'),
category: 'private',
fn: function (aModuleString) {
    var self = this;
    return smalltalk.send(typeof require == "undefined" ? nil : require, "_value_", [aModuleString]);
    return self;
},
args: ["aModuleString"],
source: unescape('require%3A%20aModuleString%0A%09%22call%20to%20the%20require%20function%22%0A%09%5Erequire%20value%3A%20aModuleString'),
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_writeData_toFileNamed_'),
smalltalk.method({
selector: unescape('writeData%3AtoFileNamed%3A'),
category: 'private',
fn: function (data, aFilename) {
    var self = this;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [aFilename]);
    return self;
},
args: ["data", "aFilename"],
source: unescape('writeData%3A%20data%20toFileNamed%3A%20aFilename%0A%09console%20log%3A%20aFilename'),
messageSends: ["log:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondNotFoundTo_'),
smalltalk.method({
selector: unescape('respondNotFoundTo%3A'),
category: 'request handling',
fn: function (aResponse) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [404, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", ["404 Not found"]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
},
args: ["aResponse"],
source: unescape('respondNotFoundTo%3A%20aResponse%0A%09aResponse%20%0A%09%09writeHead%3A%20404%20options%3A%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09write%3A%20%27404%20Not%20found%27%3B%0A%09%09end'),
messageSends: ["writeHead:options:", unescape("-%3E"), "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_handleRequest_respondTo_'),
smalltalk.method({
selector: unescape('handleRequest%3ArespondTo%3A'),
category: 'request handling',
fn: function (aRequest, aResponse) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["PUT"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);}]);
    ($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["GET"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);}]);
    ($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["POST"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_handlePOSTRequest_respondTo_", [aRequest, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_handlePOSTRequest_respondTo_", [aRequest, aResponse]);}]);
    return self;
},
args: ["aRequest", "aResponse"],
source: unescape('handleRequest%3A%20aRequest%20respondTo%3A%20aResponse%0A%09aRequest%20method%20%3D%20%27PUT%27%0A%09%09ifTrue%3A%20%5Bself%20handlePUTRequest%3A%20aRequest%20respondTo%3A%20aResponse%5D.%0A%09aRequest%20method%20%3D%20%27GET%27%0A%09%09ifTrue%3A%20%5Bself%20handleGETRequest%3A%20aRequest%20respondTo%3A%20aResponse%5D.%0A%09aRequest%20method%20%3D%20%27POST%27%0A%09%09ifTrue%3A%20%5Bself%20handlePOSTRequest%3A%20aRequest%20respondTo%3A%20aResponse%5D.'),
messageSends: ["ifTrue:", unescape("%3D"), "method", "handlePUTRequest:respondTo:", "handleGETRequest:respondTo:", "handlePOSTRequest:respondTo:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_handleGETRequest_respondTo_'),
smalltalk.method({
selector: unescape('handleGETRequest%3ArespondTo%3A'),
category: 'request handling',
fn: function (aRequest, aResponse) {
    var self = this;
    var uri = nil;
    var filename = nil;
    var urlObj = nil;
    var pathElements = nil;
    urlObj = smalltalk.send(self['@url'], "_parse_parseQueryString_", [smalltalk.send(aRequest, "_url", []), true]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("path: ", "__comma", [smalltalk.send(urlObj, "_pathname", [])])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("urlObj query ", "__comma", [smalltalk.send(urlObj, "_query", [])])]);
    uri = smalltalk.send(urlObj, "_pathname", []);
    pathElements = smalltalk.send(uri, "_tokenize_", [unescape("/")]);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(pathElements, "_size", []), "__eq", [3]), "_and_", [function () {return smalltalk.send(smalltalk.send(pathElements, "_second", []), "__eq", ["packages"]);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [unescape("TRUE%21")]);return smalltalk.send(self, "_respondPackageSt_properties_to_", [smalltalk.send(smalltalk.send(smalltalk.send(pathElements, "_third", []), "_tokenize_", ["."]), "_first", []), smalltalk.send(urlObj, "_query", []), aResponse]);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [unescape("FALSE%21")]);filename = smalltalk.send(self['@path'], "_join_with_", [smalltalk.send(self, "_basePath", []), uri]);return smalltalk.send(self['@path'], "_exists_do_", [filename, function (boolean) {return ($receiver = boolean).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}() : function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}, function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [unescape("TRUE%21")]);return smalltalk.send(self, "_respondPackageSt_properties_to_", [smalltalk.send(smalltalk.send(smalltalk.send(pathElements, "_third", []), "_tokenize_", ["."]), "_first", []), smalltalk.send(urlObj, "_query", []), aResponse]);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [unescape("FALSE%21")]);filename = smalltalk.send(self['@path'], "_join_with_", [smalltalk.send(self, "_basePath", []), uri]);return smalltalk.send(self['@path'], "_exists_do_", [filename, function (boolean) {return ($receiver = boolean).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}() : function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}, function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}]);}]);}]);
    return self;
},
args: ["aRequest", "aResponse"],
source: unescape('handleGETRequest%3A%20aRequest%20respondTo%3A%20aResponse%0A%09%7C%20uri%20filename%20urlObj%20pathElements%20%7C%0A%09urlObj%20%3A%3D%20url%20parse%3A%20%28aRequest%20url%29%20parseQueryString%3A%20true.%20%0A%09console%20log%3A%20%27path%3A%20%27%2C%20%28urlObj%20pathname%29.%0A%09console%20log%3A%20%27urlObj%20query%20%27%2C%20%28urlObj%20query%29.%0A%09uri%20%3A%3D%20urlObj%20pathname.%0A%0A%09pathElements%20%3A%3D%20uri%20tokenize%3A%20%27/%27.%0A%09%28%28pathElements%20size%20%3D%203%29%20and%3A%20%5BpathElements%20second%20%3D%20%27packages%27%5D%29%0A%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%20log%3A%20%27TRUE%21%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20respondPackageSt%3A%20%28%28pathElements%20third%20tokenize%3A%20%27.%27%29%20first%29%20properties%3A%20%28urlObj%20query%29%20to%3A%20aResponse.%0A%09%09%22self%20respondOKTo%3A%20aResponse.%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%20log%3A%20%27FALSE%21%27.%0A%09%09%09filename%20%3A%3D%20path%20join%3A%20self%20basePath%20with%3A%20uri.%0A%09%09%09%22console%20log%3A%20%28aRequest%20data%29.%22%0A%09%09%09path%20exists%3A%20filename%20do%3A%20%5B%3Aboolean%20%7C%20%0A%09%09%09%09boolean%20%0A%09%09%09%09%09ifFalse%3A%20%5Bself%20respondNotFoundTo%3A%20aResponse%5D%0A%09%09%09%09%09ifTrue%3A%20%5Bself%20respondFileNamed%3A%20filename%20to%3A%20aResponse%5D%5D%20%20%0A%20%20%20%20%20%20%20%20%09%20%5D'),
messageSends: ["parse:parseQueryString:", "url", "log:", unescape("%2C"), "pathname", "query", "tokenize:", "ifTrue:ifFalse:", "and:", unescape("%3D"), "size", "second", "respondPackageSt:properties:to:", "first", "third", "join:with:", "basePath", "exists:do:", "ifFalse:ifTrue:", "respondNotFoundTo:", "respondFileNamed:to:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_handlePUTRequest_respondTo_'),
smalltalk.method({
selector: unescape('handlePUTRequest%3ArespondTo%3A'),
category: 'request handling',
fn: function (aRequest, aResponse) {
    var self = this;
    var stream = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("PUT RequestURL: ", "__comma", [smalltalk.send(aRequest, "_url", [])])]);
    stream = smalltalk.send(self['@fs'], "_createWriteStream_", [smalltalk.send(".", "__comma", [smalltalk.send(aRequest, "_url", [])])]);
    smalltalk.send(aRequest, "_setEncoding_", ["utf8"]);
    smalltalk.send(aRequest, "_on_do_", ["data", function (data) {return smalltalk.send(stream, "_write_", [data]);}]);
    smalltalk.send(aRequest, "_on_do_", ["end", function () {smalltalk.send(stream, "_end", []);return smalltalk.send(self, "_respondOKTo_", [aResponse]);}]);
    return self;
},
args: ["aRequest", "aResponse"],
source: unescape('handlePUTRequest%3A%20aRequest%20respondTo%3A%20aResponse%0A%09%7C%20stream%20%7C%0A%09console%20log%3A%20%27PUT%20RequestURL%3A%20%27%2C%20aRequest%20url.%0A%09%22console%20log%3A%20%27PUT%20Request%3A%20%27%2C%20aRequest.%22%0A%09stream%20%3A%3D%20fs%20createWriteStream%3A%20%27.%27%2C%20aRequest%20url.%0A%0A%09aRequest%20setEncoding%3A%20%27utf8%27.%0A%09aRequest%20on%3A%20%23data%20do%3A%20%5B%3Adata%20%7C%20stream%20write%3A%20data%5D.%0A%0A%09aRequest%20on%3A%20%23end%20do%3A%20%5B%0A%09%09stream%20end.%0A%09%09self%20respondOKTo%3A%20aResponse%5D'),
messageSends: ["log:", unescape("%2C"), "url", "createWriteStream:", "setEncoding:", "on:do:", "write:", "end", "respondOKTo:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondFileNamed_to_'),
smalltalk.method({
selector: unescape('respondFileNamed%3Ato%3A'),
category: 'request handling',
fn: function (aFilename, aResponse) {
    var self = this;
    var type = nil;
    var filename = nil;
    var data = nil;
    filename = aFilename;
    ($receiver = smalltalk.send(smalltalk.send(self['@fs'], "_statSync_", [aFilename]), "_isDirectory", [])).klass === smalltalk.Boolean ? $receiver ? function () {return filename = smalltalk.send(filename, "__comma", ["index.html"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return filename = smalltalk.send(filename, "__comma", ["index.html"]);}]);
    type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);
    ($receiver = smalltalk.send(type, "__eq_eq", [unescape("text/html")])).klass === smalltalk.Boolean ? $receiver ? function () {data = fs.readFileSync(filename, "utf8");data = smalltalk.send(data, "_replace_with_", [unescape("%3C/body%3E"), unescape("%3Cscript%3Esmalltalk.runsOnNode%20%3D%20true%3B%3C/script%3E%3C/body%3E")]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_", [data]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : function () {return smalltalk.send(self['@fs'], "_readFile_do_", [filename, function (ex, file) {return ($receiver = smalltalk.send(ex, "_notNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}() : function () {type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}, function () {type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {data = fs.readFileSync(filename, "utf8");data = smalltalk.send(data, "_replace_with_", [unescape("%3C/body%3E"), unescape("%3Cscript%3Esmalltalk.runsOnNode%20%3D%20true%3B%3C/script%3E%3C/body%3E")]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_", [data]);return smalltalk.send($rec, "_end", []);}(aResponse);}, function () {return smalltalk.send(self['@fs'], "_readFile_do_", [filename, function (ex, file) {return ($receiver = smalltalk.send(ex, "_notNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}() : function () {type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}, function () {type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}]);}]);}]);
    return self;
},
args: ["aFilename", "aResponse"],
source: unescape('respondFileNamed%3A%20aFilename%20to%3A%20aResponse%0A%09%7C%20type%20filename%20data%20%7C%0A%0A%09filename%20%3A%3D%20aFilename.%0A%09%28fs%20statSync%3A%20aFilename%29%20isDirectory%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%09filename%20%3A%3D%20filename%2C%20%27index.html%27%5D.%0A%0A%09type%20%3A%3D%20self%20class%20mimeTypeFor%3A%20filename.%0A%0A%09type%20%3D%3D%20%27text/html%27%20%0A%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%20%3A%3D%20%3Cfs.readFileSync%28filename%2C%20%27utf8%27%29%3E.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data%20%3A%3D%20data%20replace%3A%20%27%3C/body%3E%27%20with%3A%20%27%3Cscript%3Esmalltalk.runsOnNode%20%3D%20true%3B%3C/script%3E%3C/body%3E%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aResponse%0A%09%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20type%7D%3B%0A%09%09%09write%3A%20data%3B%20end.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%09%09ifFalse%3A%20%5B%0A%09fs%20readFile%3A%20filename%20do%3A%20%5B%3Aex%20%3Afile%20%7C%0A%09%09ex%20notNil%20%0A%09%09%09ifTrue%3A%20%5Bself%20respondInternalErrorTo%3A%20aResponse%5D%0A%09%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%09%09%09type%20%3A%3D%20self%20class%20mimeTypeFor%3A%20filename.%0A%09%09%09%09aResponse%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20type%7D%3B%0A%09%09%09%09%09write%3A%20file%20binary%3A%20%27binary%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09end%5D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.'),
messageSends: ["ifTrue:", "isDirectory", "statSync:", unescape("%2C"), "mimeTypeFor:", "class", "ifTrue:ifFalse:", unescape("%3D%3D"), "replace:with:", "writeHead:options:", unescape("-%3E"), "write:", "end", "readFile:do:", "notNil", "respondInternalErrorTo:", "write:binary:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondInternalErrorTo_'),
smalltalk.method({
selector: unescape('respondInternalErrorTo%3A'),
category: 'request handling',
fn: function (aResponse) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [500, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", ["500 Internal server error"]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
},
args: ["aResponse"],
source: unescape('respondInternalErrorTo%3A%20aResponse%0A%09aResponse%20%0A%09%09writeHead%3A%20500%20options%3A%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09write%3A%20%27500%20Internal%20server%20error%27%3B%0A%09%09end'),
messageSends: ["writeHead:options:", unescape("-%3E"), "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondOKTo_'),
smalltalk.method({
selector: unescape('respondOKTo%3A'),
category: 'request handling',
fn: function (aResponse) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
},
args: ["aResponse"],
source: unescape('respondOKTo%3A%20aResponse%0A%09aResponse%20%0A%09%09writeHead%3A%20200%20options%3A%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09end'),
messageSends: ["writeHead:options:", unescape("-%3E"), "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_startOn_'),
smalltalk.method({
selector: unescape('startOn%3A'),
category: 'starting',
fn: function (aPort) {
    var self = this;
    self['@port'] = aPort;
    smalltalk.send(self, "_start", []);
    return self;
},
args: ["aPort"],
source: unescape('startOn%3A%20aPort%0A%09port%20%3A%3D%20aPort.%0A%09self%20start'),
messageSends: ["start"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'starting',
fn: function () {
    var self = this;
    var src = nil;
    var aStream = nil;
    smalltalk.send(smalltalk.send(self['@http'], "_createServer_", [function (request, response) {return smalltalk.send(self, "_handleRequest_respondTo_", [request, response]);}]), "_listen_", [smalltalk.send(self, "_port", [])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("Starting file server on port ", "__comma", [smalltalk.send(smalltalk.send(self, "_port", []), "_asString", [])])]);
    return self;
},
args: [],
source: unescape('start%0A%7C%20src%20aStream%20%7C%09%0A%0A%09%28http%20createServer%3A%20%5B%3Arequest%20%3Aresponse%20%7C%0A%09%20%09self%20handleRequest%3A%20request%20respondTo%3A%20response%5D%29%20listen%3A%20self%20port.%0A%09console%20log%3A%20%27Starting%20file%20server%20on%20port%20%27%2C%20self%20port%20asString'),
messageSends: ["listen:", "createServer:", "handleRequest:respondTo:", "port", "log:", unescape("%2C"), "asString"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondFileNamedOld_to_'),
smalltalk.method({
selector: unescape('respondFileNamedOld%3Ato%3A'),
category: 'request handling',
fn: function (aFilename, aResponse) {
    var self = this;
    var type = nil;
    var filename = nil;
    filename = aFilename;
    ($receiver = smalltalk.send(smalltalk.send(self['@fs'], "_statSync_", [aFilename]), "_isDirectory", [])).klass === smalltalk.Boolean ? $receiver ? function () {return filename = smalltalk.send(filename, "__comma", ["index.html"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return filename = smalltalk.send(filename, "__comma", ["index.html"]);}]);
    smalltalk.send(self['@fs'], "_readFile_do_", [filename, function (ex, file) {return ($receiver = smalltalk.send(ex, "_notNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("FILE: ", "__comma", [file])]);type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("FILE: ", "__comma", [file])]);type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}]);}]);
    return self;
},
args: ["aFilename", "aResponse"],
source: unescape('respondFileNamedOld%3A%20aFilename%20to%3A%20aResponse%0A%09%7C%20type%20filename%20%7C%0A%0A%09filename%20%3A%3D%20aFilename.%0A%09%28fs%20statSync%3A%20aFilename%29%20isDirectory%20ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%09filename%20%3A%3D%20filename%2C%20%27index.html%27%5D.%0A%0A%09fs%20readFile%3A%20filename%20do%3A%20%5B%3Aex%20%3Afile%20%7C%0A%09%09ex%20notNil%20%0A%09%09%09ifTrue%3A%20%5Bself%20respondInternalErrorTo%3A%20aResponse%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%20log%3A%20%27FILE%3A%20%27%2C%20file.%0A%20%20%20%20%20%20%20%20%09%09%09type%20%3A%3D%20self%20class%20mimeTypeFor%3A%20filename.%0A%09%09%09%09aResponse%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20type%7D%3B%0A%09%09%09%09%09write%3A%20file%20binary%3A%20%27binary%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09end%5D%5D'),
messageSends: ["ifTrue:", "isDirectory", "statSync:", unescape("%2C"), "readFile:do:", "ifTrue:ifFalse:", "notNil", "respondInternalErrorTo:", "log:", "mimeTypeFor:", "class", "writeHead:options:", unescape("-%3E"), "write:binary:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_handlePOSTRequest_respondTo_'),
smalltalk.method({
selector: unescape('handlePOSTRequest%3ArespondTo%3A'),
category: 'request handling',
fn: function (aRequest, aResponse) {
    var self = this;
    var data = nil;
    var requestURL = nil;
    var params = nil;
    var ret = nil;
    requestURL = smalltalk.send(aRequest, "_url", []);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("POST RequestURL: ", "__comma", [requestURL])]);
    smalltalk.send(aRequest, "_setEncoding_", ["utf8"]);
    smalltalk.send(aRequest, "_on_do_", ["data", function (tmpData) {return data = tmpData;}]);
    smalltalk.send(aRequest, "_on_do_", ["end", function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("POST OK: ", "__comma", [data])]);params = smalltalk.send(smalltalk.send(requestURL, "_trimLeft_", [unescape("/")]), "_tokenize_", [unescape("%3F")]);return smalltalk.send(self, "_try_catch_", [function () {return ($receiver = smalltalk.send(smalltalk.send(data, "_notNil", []), "_and_", [function () {return ($receiver = smalltalk.send(data, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0]);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("Parameter: ", "__comma", [params])]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["createAccount:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["login:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["reload:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["commitPackage:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);return ($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["browse:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}]);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["keine Parameter: "]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [smalltalk.send(params, "_at_", [1])]), "_perform_", [smalltalk.send(params, "_at_", [2])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("Parameter: ", "__comma", [params])]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["createAccount:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["login:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["reload:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["commitPackage:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);return ($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["browse:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}]);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["keine Parameter: "]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [smalltalk.send(params, "_at_", [1])]), "_perform_", [smalltalk.send(params, "_at_", [2])]);}]);}, function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}]);}]);
    return self;
},
args: ["aRequest", "aResponse"],
source: unescape('handlePOSTRequest%3A%20aRequest%20respondTo%3A%20aResponse%0A%09%7C%20data%20requestURL%20params%20ret%20%20%7C%0A%0A%09requestURL%20%3A%3D%20aRequest%20url.%0A%09console%20log%3A%20%27POST%20RequestURL%3A%20%27%2C%20requestURL.%0A%09%22console%20log%3A%20%27POST%20Request%3A%20%27%2C%20aRequest.%22%0A%0A%09aRequest%20setEncoding%3A%20%27utf8%27.%0A%0A%09aRequest%20on%3A%20%23data%20do%3A%20%5B%3AtmpData%20%7C%20%20data%20%3A%3D%20tmpData%20%5D.%0A%0A%09aRequest%20on%3A%20%23end%20do%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09console%20log%3A%20%27POST%20OK%3A%20%27%2C%20data.%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%09params%20%3A%3D%20%28requestURL%20trimLeft%3A%20%27/%27%29%20tokenize%3A%20%27%3F%27.%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%09self%20try%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%09%28data%20notNil%20and%3A%20%5B%20data%20size%20%3E%200%20%5D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09ifTrue%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%20log%3A%20%27Parameter%3A%20%27%2C%20%28params%29.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28params%20at%3A%202%29%20%3D%20%27createAccount%3A%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20self%20createAccount%3A%20%28JSON%20parse%3A%20data%29%20response%3A%20aResponse%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%22ifFalse%3A%20%5B%20%28Smalltalk%20current%20at%3A%20%28params%20at%3A%201%29%29%20perform%3A%20%28params%20at%3A%202%29%20withArguments%3A%20%7Bdata%7D%20%5D.%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28params%20at%3A%202%29%20%3D%20%27login%3A%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20self%20login%3A%20%28JSON%20parse%3A%20data%29%20response%3A%20aResponse%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28params%20at%3A%202%29%20%3D%20%27reload%3A%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20self%20reload%3A%20data%20response%3A%20aResponse%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28params%20at%3A%202%29%20%3D%20%27commitPackage%3A%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20self%20commit%3A%20%28JSON%20parse%3A%20data%29%20response%3A%20aResponse%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28params%20at%3A%202%29%20%3D%20%27browse%3A%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20self%20respondPublicPackageListTo%3A%20aResponse%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%09%09ifFalse%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%20log%3A%20%27keine%20Parameter%3A%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28Smalltalk%20current%20at%3A%20%28params%20at%3A%201%29%29%20perform%3A%20%28params%20at%3A%202%29.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%09%09%22self%20respondOKTo%3A%20aResponse%22%0A%20%20%20%20%20%20%20%20%20%20%5D%20catch%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%09self%20respondInternalErrorTo%3A%20aResponse.%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%5D'),
messageSends: ["url", "log:", unescape("%2C"), "setEncoding:", "on:do:", "tokenize:", "trimLeft:", "try:catch:", "ifTrue:ifFalse:", "and:", "notNil", unescape("%3E"), "size", "ifTrue:", unescape("%3D"), "at:", "createAccount:response:", "parse:", "login:response:", "reload:response:", "commit:response:", "respondPublicPackageListTo:", "perform:", "current", "respondInternalErrorTo:"],
referencedClasses: ["JSON", "Smalltalk"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_createAccount_response_'),
smalltalk.method({
selector: unescape('createAccount%3Aresponse%3A'),
category: 'actions',
fn: function (data, resp) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("NEW createAccount: ", "__comma", [data])]);
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["_id", smalltalk.send(data, "_at_", ["_id"])]);
    smalltalk.send(mongo, "_find_criteria_do_", ["users", smalltalk.send(crit, "_asJSONString", []), function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, "Username already taken"]);}() : function () {smalltalk.send(mongo, "_insert_document_", ["users", data]);return smalltalk.send(self, "_respondOKTo_message_", [resp, "User successfully created."]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, "Username already taken"]);}, function () {smalltalk.send(mongo, "_insert_document_", ["users", data]);return smalltalk.send(self, "_respondOKTo_message_", [resp, "User successfully created."]);}]);}]);
    return self;
},
args: ["data", "resp"],
source: unescape('createAccount%3A%20data%20response%3A%20resp%0A%7C%20err%20mongo%20crit%20%7C%0Aconsole%20log%3A%20%27NEW%20createAccount%3A%20%27%2C%20data.%0Amongo%20%3A%3D%20MongoDB%20new.%0Acrit%20%3A%3D%20Dictionary%20new.%0Acrit%20at%3A%20%27_id%27%20put%3A%20%28data%20at%3A%20%27_id%27%29.%0Amongo%20find%3A%20%27users%27%20criteria%3A%20%28crit%20asJSONString%29%20do%3A%20%5B%3Aerr%20%3Adocs%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28docs%20size%20%3E%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20respondInternalErrorTo%3A%20resp%20message%3A%20%27Username%20already%20taken%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%5B%20mongo%20insert%3A%20%27users%27%20document%3A%20%28data%29.%20self%20respondOKTo%3A%20resp%20message%3A%20%27User%20successfully%20created.%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.'),
messageSends: ["log:", unescape("%2C"), "new", "at:put:", "at:", "find:criteria:do:", "asJSONString", "ifTrue:ifFalse:", unescape("%3E"), "size", "respondInternalErrorTo:message:", "insert:document:", "respondOKTo:message:"],
referencedClasses: ["MongoDB", "Dictionary"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_login_response_'),
smalltalk.method({
selector: unescape('login%3Aresponse%3A'),
category: 'actions',
fn: function (data, resp) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("LOGIN ", "__comma", [data])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("user: ", "__comma", [smalltalk.send(data, "_at_", ["_id"])])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("PW: ", "__comma", [smalltalk.send(data, "_at_", ["password"])])]);
    smalltalk.send(self, "_login_password_onSuccess_onError_", [smalltalk.send(data, "_at_", ["_id"]), smalltalk.send(data, "_at_", ["password"]), function () {return smalltalk.send(self, "_respondOKTo_message_", [resp, "login successfull"]);}, function (message) {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, message]);}]);
    return self;
},
args: ["data", "resp"],
source: unescape('login%3A%20data%20response%3A%20resp%0A%7C%20err%20mongo%20crit%20%7C%0Aconsole%20log%3A%20%27LOGIN%20%27%2C%20data.%0Aconsole%20log%3A%20%27user%3A%20%27%2C%20%28data%20at%3A%20%27_id%27%29.%0A%22%0Amongo%20%3A%3D%20MongoDB%20new.%0Acrit%20%3A%3D%20Dictionary%20new.%0Acrit%20at%3A%20%27_id%27%20put%3A%20%28data%20at%3A%20%27_id%27%29.%0A%22%0Aconsole%20log%3A%20%27PW%3A%20%27%2C%20%28data%20at%3A%20%27password%27%29.%0A%0Aself%20login%3A%20%28data%20at%3A%20%27_id%27%29%20password%3A%20%28data%20at%3A%20%27password%27%29%20onSuccess%3A%20%5B%20self%20respondOKTo%3A%20resp%20message%3A%20%27login%20successfull%27%20%5D%20onError%3A%20%5B%20%3Amessage%20%7C%20self%20respondInternalErrorTo%3A%20resp%20message%3A%20message%20%5D.%0A%0A%22%0Amongo%20find%3A%20%27users%27%20criteria%3A%20%28crit%20asJSON%29%20do%3A%20%5B%3Aerr%20%3Adocs%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28docs%20size%20%3E%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28%28docs%20first%20at%3A%20%27password%27%29%20%3D%20%28json%20at%3A%20%27password%27%29%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20self%20respondOKTo%3A%20resp%20message%3A%20%27login%20successfull%27%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%20%5B%20self%20respondInternalErrorTo%3A%20resp%20message%3A%20%27wrong%20Password%27%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20respondInternalErrorTo%3A%20resp%20message%3A%20%27Unknown%20user.%27.%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%22'),
messageSends: ["log:", unescape("%2C"), "at:", "login:password:onSuccess:onError:", "respondOKTo:message:", "respondInternalErrorTo:message:"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondInternalErrorTo_message_'),
smalltalk.method({
selector: unescape('respondInternalErrorTo%3Amessage%3A'),
category: 'request handling',
fn: function (aResponse, aMessage) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [500, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [aMessage]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
},
args: ["aResponse", "aMessage"],
source: unescape('respondInternalErrorTo%3A%20aResponse%20message%3A%20aMessage%0A%09aResponse%20%0A%09%09writeHead%3A%20500%20options%3A%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09write%3A%20aMessage%3B%0A%09%09end'),
messageSends: ["writeHead:options:", unescape("-%3E"), "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondOKTo_message_'),
smalltalk.method({
selector: unescape('respondOKTo%3Amessage%3A'),
category: 'request handling',
fn: function (aResponse, aMessage) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [aMessage]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
},
args: ["aResponse", "aMessage"],
source: unescape('respondOKTo%3A%20aResponse%20message%3A%20aMessage%0A%09aResponse%20%0A%09%09writeHead%3A%20200%20options%3A%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09write%3A%20aMessage%3B%0A%09%09end'),
messageSends: ["writeHead:options:", unescape("-%3E"), "write:", "end"],
referencedClasses: []
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_reload_response_'),
smalltalk.method({
selector: unescape('reload%3Aresponse%3A'),
category: 'actions',
fn: function (aPackage, resp) {
    var self = this;
    var src = nil;
    var filename = nil;
    filename = smalltalk.send(smalltalk.send(unescape("st/"), "__comma", [aPackage]), "__comma", [".st"]);
    src = fs.readFileSync(filename, "utf8");
    smalltalk.send(smalltalk.send(smalltalk.Importer || Importer, "_new", []), "_importString_", [src]);
    smalltalk.send(self, "_respondOKTo_message_", [resp, smalltalk.send(smalltalk.send("Package ", "__comma", [aPackage]), "__comma", [" reloaded on the server."])]);
    return self;
},
args: ["aPackage", "resp"],
source: unescape('reload%3A%20aPackage%20response%3A%20resp%0A%7C%20src%20filename%20%7C%0Afilename%20%3A%3D%20%27st/%27%2C%20aPackage%2C%20%27.st%27.%0Asrc%20%3A%3D%20%3Cfs.readFileSync%28filename%2C%20%27utf8%27%29%3E.%0AImporter%20new%20importString%3A%20src.%0Aself%20respondOKTo%3A%20resp%20message%3A%20%27Package%20%27%2C%20aPackage%2C%20%27%20reloaded%20on%20the%20server.%27.'),
messageSends: [unescape("%2C"), "importString:", "new", "respondOKTo:message:"],
referencedClasses: ["Importer"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_commit_response_'),
smalltalk.method({
selector: unescape('commit%3Aresponse%3A'),
category: 'actions',
fn: function (data, resp) {
    var self = this;
    var json = nil;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    var user = nil;
    var password = nil;
    var packageName = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["commit "]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("DATA: ", "__comma", [data])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["commit 2"]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("commit: ", "__comma", [smalltalk.send(data, "_at_", ["packageName"])])]);
    user = smalltalk.send(data, "_at_", ["user"]);
    password = smalltalk.send(data, "_at_", ["password"]);
    packageName = smalltalk.send(data, "_at_", ["packageName"]);
    smalltalk.send(data, "_at_put_", ["password", ""]);
    smalltalk.send(self, "_login_password_onSuccess_onError_", [user, password, function () {return smalltalk.send(self, "_checkOwner_user_onSuccess_onError_", [packageName, user, function () {mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);smalltalk.send(mongo, "_insert_document_", ["packages", data]);return smalltalk.send(self, "_respondOKTo_message_", [resp, "Package saved."]);}, function (message) {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, message]);}]);}, function (message) {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, message]);}]);
    return self;
},
args: ["data", "resp"],
source: unescape('commit%3A%20data%20response%3A%20resp%0A%7C%20json%20err%20mongo%20crit%20user%20password%20packageName%20%7C%0Aconsole%20log%3A%20%27commit%20%27.%0Aconsole%20log%3A%20%27DATA%3A%20%27%2C%20data.%0Aconsole%20log%3A%20%27commit%202%27.%0Aconsole%20log%3A%20%27commit%3A%20%27%2C%20%28data%20at%3A%20%27packageName%27%29.%0A%0Auser%20%3A%3D%20data%20at%3A%20%27user%27.%0Apassword%20%3A%3D%20data%20at%3A%20%27password%27.%0ApackageName%20%3A%3D%20data%20at%3A%20%27packageName%27.%0A%0Adata%20at%3A%20%27password%27%20put%3A%20%27%27.%0A%0Aself%20login%3A%20user%20password%3A%20password%20%0A%09onSuccess%3A%20%5B%0A%09%09self%20checkOwner%3A%20packageName%20user%3A%20user%20onSuccess%3A%20%5B%0A%09%09%09mongo%20%3A%3D%20MongoDB%20new.%0A%09%09%09mongo%20insert%3A%20%27packages%27%20document%3A%20data.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20respondOKTo%3A%20resp%20message%3A%20%27Package%20saved.%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%20onError%3A%20%5B%20%3Amessage%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09self%20respondInternalErrorTo%3A%20resp%20message%3A%20message%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%09%0A%09%5D%20onError%3A%20%5B%20%3Amessage%20%7C%0A%20%20%20%20%20%20%20%20%20%20%09self%20respondInternalErrorTo%3A%20resp%20message%3A%20message%0A%20%20%20%20%20%20%20%20%5D.%0A%0A'),
messageSends: ["log:", unescape("%2C"), "at:", "at:put:", "login:password:onSuccess:onError:", "checkOwner:user:onSuccess:onError:", "new", "insert:document:", "respondOKTo:message:", "respondInternalErrorTo:message:"],
referencedClasses: ["MongoDB"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondPackageSt_properties_to_'),
smalltalk.method({
selector: unescape('respondPackageSt%3Aproperties%3Ato%3A'),
category: 'request handling',
fn: function (aPackageName, props, aResponse) {
    var self = this;
    var mongo = nil;
    var crit = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["packageName", aPackageName]);
    smalltalk.send(crit, "_at_put_", ["packageMeta.version", smalltalk.send(props, "_at_", ["version"])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(crit, "_asJSON", [])]);
    smalltalk.send(mongo, "_find_criteria_do_", ["packages", smalltalk.send(crit, "_asJSON", []), function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["TREFFER"]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["st"])]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["NIX GEFUNDEN"]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["TREFFER"]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["st"])]);return smalltalk.send($rec, "_end", []);}(aResponse);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["NIX GEFUNDEN"]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}]);}]);
    return self;
},
args: ["aPackageName", "props", "aResponse"],
source: unescape('respondPackageSt%3A%20aPackageName%20properties%3A%20props%20to%3A%20aResponse%0A%0A%7C%20mongo%20crit%20%7C%0A%0Amongo%20%3A%3D%20MongoDB%20new.%0Acrit%20%3A%3D%20Dictionary%20new.%0Acrit%20at%3A%20%27packageName%27%20put%3A%20aPackageName.%0Acrit%20at%3A%20%27packageMeta.version%27%20put%3A%20%28props%20at%3A%20%27version%27%29.%0Aconsole%20log%3A%20%28crit%20asJSON%29.%0A%22console%20log%3A%20%28%27PROPS%3A%20%27%2C%20props%20asJSON%29.%22%0Amongo%20find%3A%20%27packages%27%20criteria%3A%20%28crit%20asJSON%29%20do%3A%20%5B%3Aerr%20%3Adocs%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28docs%20size%20%3E%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09console%20log%3A%20%27TREFFER%27.%0A%09%09%09%09%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aResponse%0A%09%09%09%09%09%09%09%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09%09%09%09%09%09%09%09write%3A%20%28docs%20first%20at%3A%20%27st%27%29%3B%20end.%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09console%20log%3A%20%27NIX%20GEFUNDEN%27.%0A%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20respondInternalErrorTo%3A%20aResponse%20message%3A%20%27not%20found%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aResponse%0A%09%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20%27txt%27%7D%3B%0A%09%09%09write%3A%20%27data%27%3B%20end.%0A%22%0A'),
messageSends: ["new", "at:put:", "at:", "log:", "asJSON", "find:criteria:do:", "ifTrue:ifFalse:", unescape("%3E"), "size", "writeHead:options:", unescape("-%3E"), "write:", "first", "end", "respondInternalErrorTo:message:"],
referencedClasses: ["MongoDB", "Dictionary"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_respondPublicPackageListTo_'),
smalltalk.method({
selector: unescape('respondPublicPackageListTo%3A'),
category: 'request handling',
fn: function (aResponse) {
    var self = this;
    var mongo = nil;
    var crit = nil;
    var sortDict = nil;
    var omitDict = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    sortDict = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(sortDict, "_at_put_", ["packageName", 1]);
    smalltalk.send(sortDict, "_at_put_", ["packageMeta.version", 1]);
    omitDict = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(omitDict, "_at_put_", ["st", 0]);
    smalltalk.send(omitDict, "_at_put_", ["js", 0]);
    smalltalk.send(omitDict, "_at_put_", ["jsdeploy", 0]);
    smalltalk.send(omitDict, "_at_put_", ["_id", 0]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(crit, "_asJSON", [])]);
    smalltalk.send(mongo, "_find_criteria_omit_sort_do_", ["packages", smalltalk.send(crit, "_asJSON", []), smalltalk.send(omitDict, "_asJSON", []), smalltalk.send(sortDict, "_asJSON", []), function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {var responseArray = nil;responseArray = smalltalk.send(smalltalk.Array || Array, "_new", []);smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["TREFFER"]);smalltalk.send(docs, "_do_", [function (aDoc) {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send("P: ", "__comma", [smalltalk.send(aDoc, "_at_", ["packageName"])]), "__comma", [" V: "]), "__comma", [smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);return smalltalk.send(responseArray, "_add_", [smalltalk.send(smalltalk.Association || Association, "_key_value_", [smalltalk.send(aDoc, "_at_", ["packageName"]), smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);}]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(responseArray, "_asJSON", [])]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["NIX GEFUNDEN"]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {var responseArray = nil;responseArray = smalltalk.send(smalltalk.Array || Array, "_new", []);smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["TREFFER"]);smalltalk.send(docs, "_do_", [function (aDoc) {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send("P: ", "__comma", [smalltalk.send(aDoc, "_at_", ["packageName"])]), "__comma", [" V: "]), "__comma", [smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);return smalltalk.send(responseArray, "_add_", [smalltalk.send(smalltalk.Association || Association, "_key_value_", [smalltalk.send(aDoc, "_at_", ["packageName"]), smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);}]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(responseArray, "_asJSON", [])]);return smalltalk.send($rec, "_end", []);}(aResponse);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["NIX GEFUNDEN"]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}]);}]);
    return self;
},
args: ["aResponse"],
source: unescape('respondPublicPackageListTo%3A%20aResponse%20%0A%7C%20mongo%20crit%20sortDict%20omitDict%20%7C%0A%0Amongo%20%3A%3D%20MongoDB%20new.%0Acrit%20%3A%3D%20Dictionary%20new.%0A%22crit%20at%3A%20%27packageName%27%20put%3A%20aPackageName.%0Acrit%20at%3A%20%27packageMeta.version%27%20put%3A%20%28props%20at%3A%20%27version%27%29.%22%0AsortDict%20%3A%3D%20Dictionary%20new.%0AsortDict%20at%3A%20%27packageName%27%20put%3A%201.%0AsortDict%20at%3A%20%27packageMeta.version%27%20put%3A%201.%0A%0AomitDict%20%3A%3D%20Dictionary%20new.%0AomitDict%20at%3A%20%27st%27%20put%3A%200.%0AomitDict%20at%3A%20%27js%27%20put%3A%200.%0AomitDict%20at%3A%20%27jsdeploy%27%20put%3A%200.%0AomitDict%20at%3A%20%27_id%27%20put%3A%200.%0A%0Aconsole%20log%3A%20%28crit%20asJSON%29.%0A%22console%20log%3A%20%28%27PROPS%3A%20%27%2C%20props%20asJSON%29.%22%0A%22find%3A%20collectionName%20criteria%3A%20aCriteria%20sort%3A%20aSort%20do%3A%20aBlock%22%0Amongo%20find%3A%20%27packages%27%20criteria%3A%20%28crit%20asJSON%29%20omit%3A%20%28omitDict%20asJSON%29%20sort%3A%20%28sortDict%20asJSON%29%20do%3A%20%5B%3Aerr%20%3Adocs%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28docs%20size%20%3E%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%7C%20responseArray%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09responseArray%20%3A%3D%20Array%20new.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09console%20log%3A%20%27TREFFER%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09docs%20do%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3AaDoc%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09console%20log%3A%20%27P%3A%20%27%2C%20%28aDoc%20at%3A%20%27packageName%27%29%2C%20%27%20V%3A%20%27%2C%20%28%28aDoc%20at%3A%20%27packageMeta%27%29%20at%3A%20%27version%27%29.%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09responseArray%20add%3A%20%28Association%20key%3A%20%28aDoc%20at%3A%20%27packageName%27%29%20value%3A%20%28%28aDoc%20at%3A%20%27packageMeta%27%29%20at%3A%20%27version%27%29%29.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%09%09%09%09%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aResponse%0A%09%09%09%09%09%09%09%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20%27text/plain%27%7D%3B%0A%09%09%09%09%09%09%09%09%09write%3A%20%28responseArray%20asJSON%29%20%3B%20end.%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09console%20log%3A%20%27NIX%20GEFUNDEN%27.%0A%09%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20self%20respondInternalErrorTo%3A%20aResponse%20message%3A%20%27not%20found%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20aResponse%0A%09%09%09writeHead%3A%20200%20options%3A%20%20%23%7B%27Content-Type%27%20-%3E%20%27txt%27%7D%3B%0A%09%09%09write%3A%20%27data%27%3B%20end.%0A%22'),
messageSends: ["new", "at:put:", "log:", "asJSON", "find:criteria:omit:sort:do:", "ifTrue:ifFalse:", unescape("%3E"), "size", "do:", unescape("%2C"), "at:", "add:", "key:value:", "writeHead:options:", unescape("-%3E"), "write:", "end", "respondInternalErrorTo:message:"],
referencedClasses: ["MongoDB", "Dictionary", "Array", "Association"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_login_password_onSuccess_onError_'),
smalltalk.method({
selector: unescape('login%3Apassword%3AonSuccess%3AonError%3A'),
category: 'actions',
fn: function (anUser, aPassword, aSuccessBlock, anErrorBlock) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send("CHECKLOGIN: ", "__comma", [anUser]), "__comma", [" Pass: "]), "__comma", [aPassword])]);
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["_id", anUser]);
    smalltalk.send(mongo, "_find_criteria_do_", ["users", smalltalk.send(crit, "_asJSONString", []), function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["password"]), "__eq", [aPassword]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", ["wrong Password"]);}]);}() : function () {return smalltalk.send(anErrorBlock, "_value_", ["Unknown user."]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["password"]), "__eq", [aPassword]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", ["wrong Password"]);}]);}, function () {return smalltalk.send(anErrorBlock, "_value_", ["Unknown user."]);}]);}]);
    return self;
},
args: ["anUser", "aPassword", "aSuccessBlock", "anErrorBlock"],
source: unescape('login%3A%20anUser%20password%3A%20aPassword%20onSuccess%3A%20aSuccessBlock%20onError%3A%20anErrorBlock%0A%7C%20err%20mongo%20crit%20%7C%0Aconsole%20log%3A%20%27CHECKLOGIN%3A%20%27%2C%20anUser%2C%20%27%20Pass%3A%20%27%2C%20aPassword.%0A%0Amongo%20%3A%3D%20MongoDB%20new.%0Acrit%20%3A%3D%20Dictionary%20new.%0Acrit%20at%3A%20%27_id%27%20put%3A%20anUser.%0A%0Amongo%20find%3A%20%27users%27%20criteria%3A%20%28crit%20asJSONString%29%20do%3A%20%5B%3Aerr%20%3Adocs%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28docs%20size%20%3E%200%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20%5B%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28%28docs%20first%20at%3A%20%27password%27%29%20%3D%20aPassword%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20aSuccessBlock%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%20%5B%20anErrorBlock%20value%3A%20%27wrong%20Password%27%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20anErrorBlock%20value%3A%20%27Unknown%20user.%27.%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["log:", unescape("%2C"), "new", "at:put:", "find:criteria:do:", "asJSONString", "ifTrue:ifFalse:", unescape("%3E"), "size", unescape("%3D"), "at:", "first", "value:"],
referencedClasses: ["MongoDB", "Dictionary"]
}),
smalltalk.FileServer);

smalltalk.addMethod(
unescape('_checkOwner_user_onSuccess_onError_'),
smalltalk.method({
selector: unescape('checkOwner%3Auser%3AonSuccess%3AonError%3A'),
category: 'actions',
fn: function (aPackage, anUser, aSuccessBlock, anErrorBlock) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    var omit = nil;
    var sort = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send("CHECKOWNER: ", "__comma", [aPackage]), "__comma", [" user: "]), "__comma", [anUser])]);
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["packageName", aPackage]);
    omit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(omit, "_at_put_", ["st", 0]);
    smalltalk.send(omit, "_at_put_", ["js", 0]);
    smalltalk.send(omit, "_at_put_", ["jsdeploy", 0]);
    sort = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(mongo, "_find_criteria_omit_sort_do_", ["packages", smalltalk.send(crit, "_asJSON", []), smalltalk.send(omit, "_asJSON", []), smalltalk.send(sort, "_asJSON", []), function (err, docs) {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(docs, "_size", []), "__eq", [0]), "_or_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["user"]), "__eq", [anUser]);}]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", ["Your not the owner of this package"]);}]);}]);
    return self;
},
args: ["aPackage", "anUser", "aSuccessBlock", "anErrorBlock"],
source: unescape('checkOwner%3A%20aPackage%20user%3A%20anUser%20onSuccess%3A%20aSuccessBlock%20onError%3A%20anErrorBlock%0A%7C%20err%20mongo%20crit%20omit%20sort%20%7C%0Aconsole%20log%3A%20%27CHECKOWNER%3A%20%27%2C%20aPackage%2C%20%27%20user%3A%20%27%2C%20anUser.%0A%0Amongo%20%3A%3D%20MongoDB%20new.%0Acrit%20%3A%3D%20Dictionary%20new.%0A%22crit%20at%3A%20%27_id%27%20put%3A%20anUser.%22%0Acrit%20at%3A%20%27packageName%27%20put%3A%20aPackage.%0A%0Aomit%20%3A%3D%20Dictionary%20new.%0Aomit%20at%3A%20%27st%27%20put%3A%200.%0Aomit%20at%3A%20%27js%27%20put%3A%200.%0Aomit%20at%3A%20%27jsdeploy%27%20put%3A%200.%0A%0Asort%20%3A%3D%20Dictionary%20new.%0A%0Amongo%20find%3A%20%27packages%27%20criteria%3A%20%28crit%20asJSON%29%20omit%3A%20%28omit%20asJSON%29%20sort%3A%20%28sort%20asJSON%29%20do%3A%20%5B%3Aerr%20%3Adocs%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28%28docs%20size%20%3D%200%29%20or%3A%20%5B%20%28docs%20first%20at%3A%20%27user%27%29%20%3D%20anUser%20%5D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifTrue%3A%20aSuccessBlock%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09ifFalse%3A%5B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20anErrorBlock%20value%3A%20%27Your%20not%20the%20owner%20of%20this%20package%27.%0A%09%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D'),
messageSends: ["log:", unescape("%2C"), "new", "at:put:", "find:criteria:omit:sort:do:", "asJSON", "ifTrue:ifFalse:", "or:", unescape("%3D"), "size", "at:", "first", "value:"],
referencedClasses: ["MongoDB", "Dictionary"]
}),
smalltalk.FileServer);


smalltalk.FileServer.klass.iVarNames = ['port','mimeTypes'];
smalltalk.addMethod(
unescape('_port'),
smalltalk.method({
selector: unescape('port'),
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@port']) == nil || $receiver == undefined ? function () {return 4000;}() : $receiver;
    return self;
},
args: [],
source: unescape('port%0A%09%5Eport%20ifNil%3A%20%5B4000%5D'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
unescape('_port_'),
smalltalk.method({
selector: unescape('port%3A'),
category: 'accessing',
fn: function (aNumber) {
    var self = this;
    self['@port'] = aNumber;
    return self;
},
args: ["aNumber"],
source: unescape('port%3A%20aNumber%0A%09port%20%3A%3D%20aNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
unescape('_defaultMimeTypes'),
smalltalk.method({
selector: unescape('defaultMimeTypes'),
category: 'accessing',
fn: function () {
    var self = this;
    return smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("%25"), "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("323", "__minus_gt", [unescape("text/h323")]), smalltalk.send("abw", "__minus_gt", [unescape("application/x-abiword")]), smalltalk.send("ai", "__minus_gt", [unescape("application/postscript")]), smalltalk.send("aif", "__minus_gt", [unescape("audio/x-aiff")]), smalltalk.send("aifc", "__minus_gt", [unescape("audio/x-aiff")]), smalltalk.send("aiff", "__minus_gt", [unescape("audio/x-aiff")]), smalltalk.send("alc", "__minus_gt", [unescape("chemical/x-alchemy")]), smalltalk.send("art", "__minus_gt", [unescape("image/x-jg")]), smalltalk.send("asc", "__minus_gt", [unescape("text/plain")]), smalltalk.send("asf", "__minus_gt", [unescape("video/x-ms-asf")]), smalltalk.send("asn", "__minus_gt", [unescape("chemical/x-ncbi-asn1-spec")]), smalltalk.send("aso", "__minus_gt", [unescape("chemical/x-ncbi-asn1-binary")]), smalltalk.send("asx", "__minus_gt", [unescape("video/x-ms-asf")]), smalltalk.send("au", "__minus_gt", [unescape("audio/basic")]), smalltalk.send("avi", "__minus_gt", [unescape("video/x-msvideo")]), smalltalk.send("b", "__minus_gt", [unescape("chemical/x-molconn-Z")]), smalltalk.send("bak", "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("bat", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("bcpio", "__minus_gt", [unescape("application/x-bcpio")]), smalltalk.send("bib", "__minus_gt", [unescape("text/x-bibtex")]), smalltalk.send("bin", "__minus_gt", [unescape("application/octet-stream")]), smalltalk.send("bmp", "__minus_gt", [unescape("image/x-ms-bmp")]), smalltalk.send("book", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("bsd", "__minus_gt", [unescape("chemical/x-crossfire")]), smalltalk.send("c", "__minus_gt", [unescape("text/x-csrc")]), smalltalk.send(unescape("c++"), "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("c3d", "__minus_gt", [unescape("chemical/x-chem3d")]), smalltalk.send("cac", "__minus_gt", [unescape("chemical/x-cache")]), smalltalk.send("cache", "__minus_gt", [unescape("chemical/x-cache")]), smalltalk.send("cascii", "__minus_gt", [unescape("chemical/x-cactvs-binary")]), smalltalk.send("cat", "__minus_gt", [unescape("application/vnd.ms-pki.seccat")]), smalltalk.send("cbin", "__minus_gt", [unescape("chemical/x-cactvs-binary")]), smalltalk.send("cc", "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("cdf", "__minus_gt", [unescape("application/x-cdf")]), smalltalk.send("cdr", "__minus_gt", [unescape("image/x-coreldraw")]), smalltalk.send("cdt", "__minus_gt", [unescape("image/x-coreldrawtemplate")]), smalltalk.send("cdx", "__minus_gt", [unescape("chemical/x-cdx")]), smalltalk.send("cdy", "__minus_gt", [unescape("application/vnd.cinderella")]), smalltalk.send("cef", "__minus_gt", [unescape("chemical/x-cxf")]), smalltalk.send("cer", "__minus_gt", [unescape("chemical/x-cerius")]), smalltalk.send("chm", "__minus_gt", [unescape("chemical/x-chemdraw")]), smalltalk.send("chrt", "__minus_gt", [unescape("application/x-kchart")]), smalltalk.send("cif", "__minus_gt", [unescape("chemical/x-cif")]), smalltalk.send("class", "__minus_gt", [unescape("application/java-vm")]), smalltalk.send("cls", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("cmdf", "__minus_gt", [unescape("chemical/x-cmdf")]), smalltalk.send("cml", "__minus_gt", [unescape("chemical/x-cml")]), smalltalk.send("cod", "__minus_gt", [unescape("application/vnd.rim.cod")]), smalltalk.send("com", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("cpa", "__minus_gt", [unescape("chemical/x-compass")]), smalltalk.send("cpio", "__minus_gt", [unescape("application/x-cpio")]), smalltalk.send("cpp", "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("cpt", "__minus_gt", [unescape("image/x-corelphotopaint")]), smalltalk.send("crl", "__minus_gt", [unescape("application/x-pkcs7-crl")]), smalltalk.send("crt", "__minus_gt", [unescape("application/x-x509-ca-cert")]), smalltalk.send("csf", "__minus_gt", [unescape("chemical/x-cache-csf")]), smalltalk.send("csh", "__minus_gt", [unescape("text/x-csh")]), smalltalk.send("csm", "__minus_gt", [unescape("chemical/x-csml")]), smalltalk.send("csml", "__minus_gt", [unescape("chemical/x-csml")]), smalltalk.send("css", "__minus_gt", [unescape("text/css")]), smalltalk.send("csv", "__minus_gt", [unescape("text/comma-separated-values")]), smalltalk.send("ctab", "__minus_gt", [unescape("chemical/x-cactvs-binary")]), smalltalk.send("ctx", "__minus_gt", [unescape("chemical/x-ctx")]), smalltalk.send("cu", "__minus_gt", [unescape("application/cu-seeme")]), smalltalk.send("cub", "__minus_gt", [unescape("chemical/x-gaussian-cube")]), smalltalk.send("cxf", "__minus_gt", [unescape("chemical/x-cxf")]), smalltalk.send("cxx", "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("dat", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("dcr", "__minus_gt", [unescape("application/x-director")]), smalltalk.send("deb", "__minus_gt", [unescape("application/x-debian-package")]), smalltalk.send("dif", "__minus_gt", [unescape("video/dv")]), smalltalk.send("diff", "__minus_gt", [unescape("text/plain")]), smalltalk.send("dir", "__minus_gt", [unescape("application/x-director")]), smalltalk.send("djv", "__minus_gt", [unescape("image/vnd.djvu")]), smalltalk.send("djvu", "__minus_gt", [unescape("image/vnd.djvu")]), smalltalk.send("dl", "__minus_gt", [unescape("video/dl")]), smalltalk.send("dll", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("dmg", "__minus_gt", [unescape("application/x-apple-diskimage")]), smalltalk.send("dms", "__minus_gt", [unescape("application/x-dms")]), smalltalk.send("doc", "__minus_gt", [unescape("application/msword")]), smalltalk.send("dot", "__minus_gt", [unescape("application/msword")]), smalltalk.send("dv", "__minus_gt", [unescape("video/dv")]), smalltalk.send("dvi", "__minus_gt", [unescape("application/x-dvi")]), smalltalk.send("dx", "__minus_gt", [unescape("chemical/x-jcamp-dx")]), smalltalk.send("dxr", "__minus_gt", [unescape("application/x-director")]), smalltalk.send("emb", "__minus_gt", [unescape("chemical/x-embl-dl-nucleotide")]), smalltalk.send("embl", "__minus_gt", [unescape("chemical/x-embl-dl-nucleotide")]), smalltalk.send("ent", "__minus_gt", [unescape("chemical/x-pdb")]), smalltalk.send("eps", "__minus_gt", [unescape("application/postscript")]), smalltalk.send("etx", "__minus_gt", [unescape("text/x-setext")]), smalltalk.send("exe", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("ez", "__minus_gt", [unescape("application/andrew-inset")]), smalltalk.send("fb", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("fbdoc", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("fch", "__minus_gt", [unescape("chemical/x-gaussian-checkpoint")]), smalltalk.send("fchk", "__minus_gt", [unescape("chemical/x-gaussian-checkpoint")]), smalltalk.send("fig", "__minus_gt", [unescape("application/x-xfig")]), smalltalk.send("flac", "__minus_gt", [unescape("application/x-flac")]), smalltalk.send("fli", "__minus_gt", [unescape("video/fli")]), smalltalk.send("fm", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("frame", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("frm", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("gal", "__minus_gt", [unescape("chemical/x-gaussian-log")]), smalltalk.send("gam", "__minus_gt", [unescape("chemical/x-gamess-input")]), smalltalk.send("gamin", "__minus_gt", [unescape("chemical/x-gamess-input")]), smalltalk.send("gau", "__minus_gt", [unescape("chemical/x-gaussian-input")]), smalltalk.send("gcd", "__minus_gt", [unescape("text/x-pcs-gcd")]), smalltalk.send("gcf", "__minus_gt", [unescape("application/x-graphing-calculator")]), smalltalk.send("gcg", "__minus_gt", [unescape("chemical/x-gcg8-sequence")]), smalltalk.send("gen", "__minus_gt", [unescape("chemical/x-genbank")]), smalltalk.send("gf", "__minus_gt", [unescape("application/x-tex-gf")]), smalltalk.send("gif", "__minus_gt", [unescape("image/gif")]), smalltalk.send("gjc", "__minus_gt", [unescape("chemical/x-gaussian-input")]), smalltalk.send("gjf", "__minus_gt", [unescape("chemical/x-gaussian-input")]), smalltalk.send("gl", "__minus_gt", [unescape("video/gl")]), smalltalk.send("gnumeric", "__minus_gt", [unescape("application/x-gnumeric")]), smalltalk.send("gpt", "__minus_gt", [unescape("chemical/x-mopac-graph")]), smalltalk.send("gsf", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("gsm", "__minus_gt", [unescape("audio/x-gsm")]), smalltalk.send("gtar", "__minus_gt", [unescape("application/x-gtar")]), smalltalk.send("h", "__minus_gt", [unescape("text/x-chdr")]), smalltalk.send(unescape("h++"), "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("hdf", "__minus_gt", [unescape("application/x-hdf")]), smalltalk.send("hh", "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("hin", "__minus_gt", [unescape("chemical/x-hin")]), smalltalk.send("hpp", "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("hqx", "__minus_gt", [unescape("application/mac-binhex40")]), smalltalk.send("hs", "__minus_gt", [unescape("text/x-haskell")]), smalltalk.send("hta", "__minus_gt", [unescape("application/hta")]), smalltalk.send("htc", "__minus_gt", [unescape("text/x-component")]), smalltalk.send("htm", "__minus_gt", [unescape("text/html")]), smalltalk.send("html", "__minus_gt", [unescape("text/html")]), smalltalk.send("hxx", "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("ica", "__minus_gt", [unescape("application/x-ica")]), smalltalk.send("ice", "__minus_gt", [unescape("x-conference/x-cooltalk")]), smalltalk.send("ico", "__minus_gt", [unescape("image/x-icon")]), smalltalk.send("ics", "__minus_gt", [unescape("text/calendar")]), smalltalk.send("icz", "__minus_gt", [unescape("text/calendar")]), smalltalk.send("ief", "__minus_gt", [unescape("image/ief")]), smalltalk.send("iges", "__minus_gt", [unescape("model/iges")]), smalltalk.send("igs", "__minus_gt", [unescape("model/iges")]), smalltalk.send("iii", "__minus_gt", [unescape("application/x-iphone")]), smalltalk.send("inp", "__minus_gt", [unescape("chemical/x-gamess-input")]), smalltalk.send("ins", "__minus_gt", [unescape("application/x-internet-signup")]), smalltalk.send("iso", "__minus_gt", [unescape("application/x-iso9660-image")]), smalltalk.send("isp", "__minus_gt", [unescape("application/x-internet-signup")]), smalltalk.send("ist", "__minus_gt", [unescape("chemical/x-isostar")]), smalltalk.send("istr", "__minus_gt", [unescape("chemical/x-isostar")]), smalltalk.send("jad", "__minus_gt", [unescape("text/vnd.sun.j2me.app-descriptor")]), smalltalk.send("jar", "__minus_gt", [unescape("application/java-archive")]), smalltalk.send("java", "__minus_gt", [unescape("text/x-java")]), smalltalk.send("jdx", "__minus_gt", [unescape("chemical/x-jcamp-dx")]), smalltalk.send("jmz", "__minus_gt", [unescape("application/x-jmol")]), smalltalk.send("jng", "__minus_gt", [unescape("image/x-jng")]), smalltalk.send("jnlp", "__minus_gt", [unescape("application/x-java-jnlp-file")]), smalltalk.send("jpe", "__minus_gt", [unescape("image/jpeg")]), smalltalk.send("jpeg", "__minus_gt", [unescape("image/jpeg")]), smalltalk.send("jpg", "__minus_gt", [unescape("image/jpeg")]), smalltalk.send("js", "__minus_gt", [unescape("application/javascript")]), smalltalk.send("kar", "__minus_gt", [unescape("audio/midi")]), smalltalk.send("key", "__minus_gt", [unescape("application/pgp-keys")]), smalltalk.send("kil", "__minus_gt", [unescape("application/x-killustrator")]), smalltalk.send("kin", "__minus_gt", [unescape("chemical/x-kinemage")]), smalltalk.send("kpr", "__minus_gt", [unescape("application/x-kpresenter")]), smalltalk.send("kpt", "__minus_gt", [unescape("application/x-kpresenter")]), smalltalk.send("ksp", "__minus_gt", [unescape("application/x-kspread")]), smalltalk.send("kwd", "__minus_gt", [unescape("application/x-kword")]), smalltalk.send("kwt", "__minus_gt", [unescape("application/x-kword")]), smalltalk.send("latex", "__minus_gt", [unescape("application/x-latex")]), smalltalk.send("lha", "__minus_gt", [unescape("application/x-lha")]), smalltalk.send("lhs", "__minus_gt", [unescape("text/x-literate-haskell")]), smalltalk.send("lsf", "__minus_gt", [unescape("video/x-la-asf")]), smalltalk.send("lsx", "__minus_gt", [unescape("video/x-la-asf")]), smalltalk.send("ltx", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("lzh", "__minus_gt", [unescape("application/x-lzh")]), smalltalk.send("lzx", "__minus_gt", [unescape("application/x-lzx")]), smalltalk.send("m3u", "__minus_gt", [unescape("audio/x-mpegurl")]), smalltalk.send("m4a", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("maker", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("man", "__minus_gt", [unescape("application/x-troff-man")]), smalltalk.send("mcif", "__minus_gt", [unescape("chemical/x-mmcif")]), smalltalk.send("mcm", "__minus_gt", [unescape("chemical/x-macmolecule")]), smalltalk.send("mdb", "__minus_gt", [unescape("application/msaccess")]), smalltalk.send("me", "__minus_gt", [unescape("application/x-troff-me")]), smalltalk.send("mesh", "__minus_gt", [unescape("model/mesh")]), smalltalk.send("mid", "__minus_gt", [unescape("audio/midi")]), smalltalk.send("midi", "__minus_gt", [unescape("audio/midi")]), smalltalk.send("mif", "__minus_gt", [unescape("application/x-mif")]), smalltalk.send("mm", "__minus_gt", [unescape("application/x-freemind")]), smalltalk.send("mmd", "__minus_gt", [unescape("chemical/x-macromodel-input")]), smalltalk.send("mmf", "__minus_gt", [unescape("application/vnd.smaf")]), smalltalk.send("mml", "__minus_gt", [unescape("text/mathml")]), smalltalk.send("mmod", "__minus_gt", [unescape("chemical/x-macromodel-input")]), smalltalk.send("mng", "__minus_gt", [unescape("video/x-mng")]), smalltalk.send("moc", "__minus_gt", [unescape("text/x-moc")]), smalltalk.send("mol", "__minus_gt", [unescape("chemical/x-mdl-molfile")]), smalltalk.send("mol2", "__minus_gt", [unescape("chemical/x-mol2")]), smalltalk.send("moo", "__minus_gt", [unescape("chemical/x-mopac-out")]), smalltalk.send("mop", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("mopcrt", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("mov", "__minus_gt", [unescape("video/quicktime")]), smalltalk.send("movie", "__minus_gt", [unescape("video/x-sgi-movie")]), smalltalk.send("mp2", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("mp3", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("mp4", "__minus_gt", [unescape("video/mp4")]), smalltalk.send("mpc", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("mpe", "__minus_gt", [unescape("video/mpeg")]), smalltalk.send("mpeg", "__minus_gt", [unescape("video/mpeg")]), smalltalk.send("mpega", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("mpg", "__minus_gt", [unescape("video/mpeg")]), smalltalk.send("mpga", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("ms", "__minus_gt", [unescape("application/x-troff-ms")]), smalltalk.send("msh", "__minus_gt", [unescape("model/mesh")]), smalltalk.send("msi", "__minus_gt", [unescape("application/x-msi")]), smalltalk.send("mvb", "__minus_gt", [unescape("chemical/x-mopac-vib")]), smalltalk.send("mxu", "__minus_gt", [unescape("video/vnd.mpegurl")]), smalltalk.send("nb", "__minus_gt", [unescape("application/mathematica")]), smalltalk.send("nc", "__minus_gt", [unescape("application/x-netcdf")]), smalltalk.send("nwc", "__minus_gt", [unescape("application/x-nwc")]), smalltalk.send("o", "__minus_gt", [unescape("application/x-object")]), smalltalk.send("oda", "__minus_gt", [unescape("application/oda")]), smalltalk.send("odb", "__minus_gt", [unescape("application/vnd.oasis.opendocument.database")]), smalltalk.send("odc", "__minus_gt", [unescape("application/vnd.oasis.opendocument.chart")]), smalltalk.send("odf", "__minus_gt", [unescape("application/vnd.oasis.opendocument.formula")]), smalltalk.send("odg", "__minus_gt", [unescape("application/vnd.oasis.opendocument.graphics")]), smalltalk.send("odi", "__minus_gt", [unescape("application/vnd.oasis.opendocument.image")]), smalltalk.send("odm", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text-master")]), smalltalk.send("odp", "__minus_gt", [unescape("application/vnd.oasis.opendocument.presentation")]), smalltalk.send("ods", "__minus_gt", [unescape("application/vnd.oasis.opendocument.spreadsheet")]), smalltalk.send("odt", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text")]), smalltalk.send("ogg", "__minus_gt", [unescape("application/ogg")]), smalltalk.send("old", "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("oth", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text-web")]), smalltalk.send("oza", "__minus_gt", [unescape("application/x-oz-application")]), smalltalk.send("p", "__minus_gt", [unescape("text/x-pascal")]), smalltalk.send("p7r", "__minus_gt", [unescape("application/x-pkcs7-certreqresp")]), smalltalk.send("pac", "__minus_gt", [unescape("application/x-ns-proxy-autoconfig")]), smalltalk.send("pas", "__minus_gt", [unescape("text/x-pascal")]), smalltalk.send("pat", "__minus_gt", [unescape("image/x-coreldrawpattern")]), smalltalk.send("pbm", "__minus_gt", [unescape("image/x-portable-bitmap")]), smalltalk.send("pcf", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pcf.Z", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pcx", "__minus_gt", [unescape("image/pcx")]), smalltalk.send("pdb", "__minus_gt", [unescape("chemical/x-pdb")]), smalltalk.send("pdf", "__minus_gt", [unescape("application/pdf")]), smalltalk.send("pfa", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pfb", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pgm", "__minus_gt", [unescape("image/x-portable-graymap")]), smalltalk.send("pgn", "__minus_gt", [unescape("application/x-chess-pgn")]), smalltalk.send("pgp", "__minus_gt", [unescape("application/pgp-signature")]), smalltalk.send("pk", "__minus_gt", [unescape("application/x-tex-pk")]), smalltalk.send("pl", "__minus_gt", [unescape("text/x-perl")]), smalltalk.send("pls", "__minus_gt", [unescape("audio/x-scpls")]), smalltalk.send("pm", "__minus_gt", [unescape("text/x-perl")]), smalltalk.send("png", "__minus_gt", [unescape("image/png")]), smalltalk.send("pnm", "__minus_gt", [unescape("image/x-portable-anymap")]), smalltalk.send("pot", "__minus_gt", [unescape("text/plain")]), smalltalk.send("ppm", "__minus_gt", [unescape("image/x-portable-pixmap")]), smalltalk.send("pps", "__minus_gt", [unescape("application/vnd.ms-powerpoint")]), smalltalk.send("ppt", "__minus_gt", [unescape("application/vnd.ms-powerpoint")]), smalltalk.send("prf", "__minus_gt", [unescape("application/pics-rules")]), smalltalk.send("prt", "__minus_gt", [unescape("chemical/x-ncbi-asn1-ascii")]), smalltalk.send("ps", "__minus_gt", [unescape("application/postscript")]), smalltalk.send("psd", "__minus_gt", [unescape("image/x-photoshop")]), smalltalk.send("psp", "__minus_gt", [unescape("text/x-psp")]), smalltalk.send("py", "__minus_gt", [unescape("text/x-python")]), smalltalk.send("pyc", "__minus_gt", [unescape("application/x-python-code")]), smalltalk.send("pyo", "__minus_gt", [unescape("application/x-python-code")]), smalltalk.send("qt", "__minus_gt", [unescape("video/quicktime")]), smalltalk.send("qtl", "__minus_gt", [unescape("application/x-quicktimeplayer")]), smalltalk.send("ra", "__minus_gt", [unescape("audio/x-realaudio")]), smalltalk.send("ram", "__minus_gt", [unescape("audio/x-pn-realaudio")]), smalltalk.send("rar", "__minus_gt", [unescape("application/rar")]), smalltalk.send("ras", "__minus_gt", [unescape("image/x-cmu-raster")]), smalltalk.send("rd", "__minus_gt", [unescape("chemical/x-mdl-rdfile")]), smalltalk.send("rdf", "__minus_gt", [unescape("application/rdf+xml")]), smalltalk.send("rgb", "__minus_gt", [unescape("image/x-rgb")]), smalltalk.send("rm", "__minus_gt", [unescape("audio/x-pn-realaudio")]), smalltalk.send("roff", "__minus_gt", [unescape("application/x-troff")]), smalltalk.send("ros", "__minus_gt", [unescape("chemical/x-rosdal")]), smalltalk.send("rpm", "__minus_gt", [unescape("application/x-redhat-package-manager")]), smalltalk.send("rss", "__minus_gt", [unescape("application/rss+xml")]), smalltalk.send("rtf", "__minus_gt", [unescape("text/rtf")]), smalltalk.send("rtx", "__minus_gt", [unescape("text/richtext")]), smalltalk.send("rxn", "__minus_gt", [unescape("chemical/x-mdl-rxnfile")]), smalltalk.send("sct", "__minus_gt", [unescape("text/scriptlet")]), smalltalk.send("sd", "__minus_gt", [unescape("chemical/x-mdl-sdfile")]), smalltalk.send("sd2", "__minus_gt", [unescape("audio/x-sd2")]), smalltalk.send("sda", "__minus_gt", [unescape("application/vnd.stardivision.draw")]), smalltalk.send("sdc", "__minus_gt", [unescape("application/vnd.stardivision.calc")]), smalltalk.send("sdd", "__minus_gt", [unescape("application/vnd.stardivision.impress")]), smalltalk.send("sdf", "__minus_gt", [unescape("chemical/x-mdl-sdfile")]), smalltalk.send("sdp", "__minus_gt", [unescape("application/vnd.stardivision.impress")]), smalltalk.send("sdw", "__minus_gt", [unescape("application/vnd.stardivision.writer")]), smalltalk.send("ser", "__minus_gt", [unescape("application/java-serialized-object")]), smalltalk.send("sgf", "__minus_gt", [unescape("application/x-go-sgf")]), smalltalk.send("sgl", "__minus_gt", [unescape("application/vnd.stardivision.writer-global")]), smalltalk.send("sh", "__minus_gt", [unescape("text/x-sh")]), smalltalk.send("shar", "__minus_gt", [unescape("application/x-shar")]), smalltalk.send("shtml", "__minus_gt", [unescape("text/html")]), smalltalk.send("sid", "__minus_gt", [unescape("audio/prs.sid")]), smalltalk.send("sik", "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("silo", "__minus_gt", [unescape("model/mesh")]), smalltalk.send("sis", "__minus_gt", [unescape("application/vnd.symbian.install")]), smalltalk.send("sit", "__minus_gt", [unescape("application/x-stuffit")]), smalltalk.send("skd", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("skm", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("skp", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("skt", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("smf", "__minus_gt", [unescape("application/vnd.stardivision.math")]), smalltalk.send("smi", "__minus_gt", [unescape("application/smil")]), smalltalk.send("smil", "__minus_gt", [unescape("application/smil")]), smalltalk.send("snd", "__minus_gt", [unescape("audio/basic")]), smalltalk.send("spc", "__minus_gt", [unescape("chemical/x-galactic-spc")]), smalltalk.send("spl", "__minus_gt", [unescape("application/x-futuresplash")]), smalltalk.send("src", "__minus_gt", [unescape("application/x-wais-source")]), smalltalk.send("stc", "__minus_gt", [unescape("application/vnd.sun.xml.calc.template")]), smalltalk.send("std", "__minus_gt", [unescape("application/vnd.sun.xml.draw.template")]), smalltalk.send("sti", "__minus_gt", [unescape("application/vnd.sun.xml.impress.template")]), smalltalk.send("stl", "__minus_gt", [unescape("application/vnd.ms-pki.stl")]), smalltalk.send("stw", "__minus_gt", [unescape("application/vnd.sun.xml.writer.template")]), smalltalk.send("sty", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("sv4cpio", "__minus_gt", [unescape("application/x-sv4cpio")]), smalltalk.send("sv4crc", "__minus_gt", [unescape("application/x-sv4crc")]), smalltalk.send("svg", "__minus_gt", [unescape("image/svg+xml")]), smalltalk.send("svgz", "__minus_gt", [unescape("image/svg+xml")]), smalltalk.send("sw", "__minus_gt", [unescape("chemical/x-swissprot")]), smalltalk.send("swf", "__minus_gt", [unescape("application/x-shockwave-flash")]), smalltalk.send("swfl", "__minus_gt", [unescape("application/x-shockwave-flash")]), smalltalk.send("sxc", "__minus_gt", [unescape("application/vnd.sun.xml.calc")]), smalltalk.send("sxd", "__minus_gt", [unescape("application/vnd.sun.xml.draw")]), smalltalk.send("sxg", "__minus_gt", [unescape("application/vnd.sun.xml.writer.global")]), smalltalk.send("sxi", "__minus_gt", [unescape("application/vnd.sun.xml.impress")]), smalltalk.send("sxm", "__minus_gt", [unescape("application/vnd.sun.xml.math")]), smalltalk.send("sxw", "__minus_gt", [unescape("application/vnd.sun.xml.writer")]), smalltalk.send("t", "__minus_gt", [unescape("application/x-troff")]), smalltalk.send("tar", "__minus_gt", [unescape("application/x-tar")]), smalltalk.send("taz", "__minus_gt", [unescape("application/x-gtar")]), smalltalk.send("tcl", "__minus_gt", [unescape("text/x-tcl")]), smalltalk.send("tex", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("texi", "__minus_gt", [unescape("application/x-texinfo")]), smalltalk.send("texinfo", "__minus_gt", [unescape("application/x-texinfo")]), smalltalk.send("text", "__minus_gt", [unescape("text/plain")]), smalltalk.send("tgf", "__minus_gt", [unescape("chemical/x-mdl-tgf")]), smalltalk.send("tgz", "__minus_gt", [unescape("application/x-gtar")]), smalltalk.send("tif", "__minus_gt", [unescape("image/tiff")]), smalltalk.send("tiff", "__minus_gt", [unescape("image/tiff")]), smalltalk.send("tk", "__minus_gt", [unescape("text/x-tcl")]), smalltalk.send("tm", "__minus_gt", [unescape("text/texmacs")]), smalltalk.send("torrent", "__minus_gt", [unescape("application/x-bittorrent")]), smalltalk.send("tr", "__minus_gt", [unescape("application/x-troff")]), smalltalk.send("ts", "__minus_gt", [unescape("text/texmacs")]), smalltalk.send("tsp", "__minus_gt", [unescape("application/dsptype")]), smalltalk.send("tsv", "__minus_gt", [unescape("text/tab-separated-values")]), smalltalk.send("txt", "__minus_gt", [unescape("text/plain")]), smalltalk.send("udeb", "__minus_gt", [unescape("application/x-debian-package")]), smalltalk.send("uls", "__minus_gt", [unescape("text/iuls")]), smalltalk.send("ustar", "__minus_gt", [unescape("application/x-ustar")]), smalltalk.send("val", "__minus_gt", [unescape("chemical/x-ncbi-asn1-binary")]), smalltalk.send("vcd", "__minus_gt", [unescape("application/x-cdlink")]), smalltalk.send("vcf", "__minus_gt", [unescape("text/x-vcard")]), smalltalk.send("vcs", "__minus_gt", [unescape("text/x-vcalendar")]), smalltalk.send("vmd", "__minus_gt", [unescape("chemical/x-vmd")]), smalltalk.send("vms", "__minus_gt", [unescape("chemical/x-vamas-iso14976")]), smalltalk.send("vor", "__minus_gt", [unescape("application/vnd.stardivision.writer")]), smalltalk.send("vrm", "__minus_gt", [unescape("x-world/x-vrml")]), smalltalk.send("vrml", "__minus_gt", [unescape("x-world/x-vrml")]), smalltalk.send("vsd", "__minus_gt", [unescape("application/vnd.visio")]), smalltalk.send("wad", "__minus_gt", [unescape("application/x-doom")]), smalltalk.send("wav", "__minus_gt", [unescape("audio/x-wav")]), smalltalk.send("wax", "__minus_gt", [unescape("audio/x-ms-wax")]), smalltalk.send("wbmp", "__minus_gt", [unescape("image/vnd.wap.wbmp")]), smalltalk.send("wbxml", "__minus_gt", [unescape("application/vnd.wap.wbxml")]), smalltalk.send("wk", "__minus_gt", [unescape("application/x-123")]), smalltalk.send("wm", "__minus_gt", [unescape("video/x-ms-wm")]), smalltalk.send("wma", "__minus_gt", [unescape("audio/x-ms-wma")]), smalltalk.send("wmd", "__minus_gt", [unescape("application/x-ms-wmd")]), smalltalk.send("wml", "__minus_gt", [unescape("text/vnd.wap.wml")]), smalltalk.send("wmlc", "__minus_gt", [unescape("application/vnd.wap.wmlc")]), smalltalk.send("wmls", "__minus_gt", [unescape("text/vnd.wap.wmlscript")]), smalltalk.send("wmlsc", "__minus_gt", [unescape("application/vnd.wap.wmlscriptc")]), smalltalk.send("wmv", "__minus_gt", [unescape("video/x-ms-wmv")]), smalltalk.send("wmx", "__minus_gt", [unescape("video/x-ms-wmx")]), smalltalk.send("wmz", "__minus_gt", [unescape("application/x-ms-wmz")]), smalltalk.send("wp5", "__minus_gt", [unescape("application/wordperfect5.1")]), smalltalk.send("wpd", "__minus_gt", [unescape("application/wordperfect")]), smalltalk.send("wrl", "__minus_gt", [unescape("x-world/x-vrml")]), smalltalk.send("wsc", "__minus_gt", [unescape("text/scriptlet")]), smalltalk.send("wvx", "__minus_gt", [unescape("video/x-ms-wvx")]), smalltalk.send("wz", "__minus_gt", [unescape("application/x-wingz")]), smalltalk.send("xbm", "__minus_gt", [unescape("image/x-xbitmap")]), smalltalk.send("xcf", "__minus_gt", [unescape("application/x-xcf")]), smalltalk.send("xht", "__minus_gt", [unescape("application/xhtml+xml")]), smalltalk.send("xhtml", "__minus_gt", [unescape("application/xhtml+xml")]), smalltalk.send("xlb", "__minus_gt", [unescape("application/vnd.ms-excel")]), smalltalk.send("xls", "__minus_gt", [unescape("application/vnd.ms-excel")]), smalltalk.send("xlt", "__minus_gt", [unescape("application/vnd.ms-excel")]), smalltalk.send("xml", "__minus_gt", [unescape("application/xml")]), smalltalk.send("xpi", "__minus_gt", [unescape("application/x-xpinstall")]), smalltalk.send("xpm", "__minus_gt", [unescape("image/x-xpixmap")]), smalltalk.send("xsl", "__minus_gt", [unescape("application/xml")]), smalltalk.send("xtel", "__minus_gt", [unescape("chemical/x-xtel")]), smalltalk.send("xul", "__minus_gt", [unescape("application/vnd.mozilla.xul+xml")]), smalltalk.send("xwd", "__minus_gt", [unescape("image/x-xwindowdump")]), smalltalk.send("xyz", "__minus_gt", [unescape("chemical/x-xyz")]), smalltalk.send("zip", "__minus_gt", [unescape("application/zip")]), smalltalk.send("zmt", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send(unescape("%7E"), "__minus_gt", [unescape("application/x-trash")])]);
    return self;
},
args: [],
source: unescape('defaultMimeTypes%0A%09%5E%20%23%7B%0A%09%09%27%25%27%20-%3E%20%27application/x-trash%27.%0A%09%09%27323%27%20-%3E%20%27text/h323%27.%0A%09%09%27abw%27%20-%3E%20%27application/x-abiword%27.%0A%09%09%27ai%27%20-%3E%20%27application/postscript%27.%0A%09%09%27aif%27%20-%3E%20%27audio/x-aiff%27.%0A%09%09%27aifc%27%20-%3E%20%27audio/x-aiff%27.%0A%09%09%27aiff%27%20-%3E%20%27audio/x-aiff%27.%0A%09%09%27alc%27%20-%3E%20%27chemical/x-alchemy%27.%0A%09%09%27art%27%20-%3E%20%27image/x-jg%27.%0A%09%09%27asc%27%20-%3E%20%27text/plain%27.%0A%09%09%27asf%27%20-%3E%20%27video/x-ms-asf%27.%0A%09%09%27asn%27%20-%3E%20%27chemical/x-ncbi-asn1-spec%27.%0A%09%09%27aso%27%20-%3E%20%27chemical/x-ncbi-asn1-binary%27.%0A%09%09%27asx%27%20-%3E%20%27video/x-ms-asf%27.%0A%09%09%27au%27%20-%3E%20%27audio/basic%27.%0A%09%09%27avi%27%20-%3E%20%27video/x-msvideo%27.%0A%09%09%27b%27%20-%3E%20%27chemical/x-molconn-Z%27.%0A%09%09%27bak%27%20-%3E%20%27application/x-trash%27.%0A%09%09%27bat%27%20-%3E%20%27application/x-msdos-program%27.%0A%09%09%27bcpio%27%20-%3E%20%27application/x-bcpio%27.%0A%09%09%27bib%27%20-%3E%20%27text/x-bibtex%27.%0A%09%09%27bin%27%20-%3E%20%27application/octet-stream%27.%0A%09%09%27bmp%27%20-%3E%20%27image/x-ms-bmp%27.%0A%09%09%27book%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27bsd%27%20-%3E%20%27chemical/x-crossfire%27.%0A%09%09%27c%27%20-%3E%20%27text/x-csrc%27.%0A%09%09%27c++%27%20-%3E%20%27text/x-c++src%27.%0A%09%09%27c3d%27%20-%3E%20%27chemical/x-chem3d%27.%0A%09%09%27cac%27%20-%3E%20%27chemical/x-cache%27.%0A%09%09%27cache%27%20-%3E%20%27chemical/x-cache%27.%0A%09%09%27cascii%27%20-%3E%20%27chemical/x-cactvs-binary%27.%0A%09%09%27cat%27%20-%3E%20%27application/vnd.ms-pki.seccat%27.%0A%09%09%27cbin%27%20-%3E%20%27chemical/x-cactvs-binary%27.%0A%09%09%27cc%27%20-%3E%20%27text/x-c++src%27.%0A%09%09%27cdf%27%20-%3E%20%27application/x-cdf%27.%0A%09%09%27cdr%27%20-%3E%20%27image/x-coreldraw%27.%0A%09%09%27cdt%27%20-%3E%20%27image/x-coreldrawtemplate%27.%0A%09%09%27cdx%27%20-%3E%20%27chemical/x-cdx%27.%0A%09%09%27cdy%27%20-%3E%20%27application/vnd.cinderella%27.%0A%09%09%27cef%27%20-%3E%20%27chemical/x-cxf%27.%0A%09%09%27cer%27%20-%3E%20%27chemical/x-cerius%27.%0A%09%09%27chm%27%20-%3E%20%27chemical/x-chemdraw%27.%0A%09%09%27chrt%27%20-%3E%20%27application/x-kchart%27.%0A%09%09%27cif%27%20-%3E%20%27chemical/x-cif%27.%0A%09%09%27class%27%20-%3E%20%27application/java-vm%27.%0A%09%09%27cls%27%20-%3E%20%27text/x-tex%27.%0A%09%09%27cmdf%27%20-%3E%20%27chemical/x-cmdf%27.%0A%09%09%27cml%27%20-%3E%20%27chemical/x-cml%27.%0A%09%09%27cod%27%20-%3E%20%27application/vnd.rim.cod%27.%0A%09%09%27com%27%20-%3E%20%27application/x-msdos-program%27.%0A%09%09%27cpa%27%20-%3E%20%27chemical/x-compass%27.%0A%09%09%27cpio%27%20-%3E%20%27application/x-cpio%27.%0A%09%09%27cpp%27%20-%3E%20%27text/x-c++src%27.%0A%09%09%27cpt%27%20-%3E%20%27image/x-corelphotopaint%27.%0A%09%09%27crl%27%20-%3E%20%27application/x-pkcs7-crl%27.%0A%09%09%27crt%27%20-%3E%20%27application/x-x509-ca-cert%27.%0A%09%09%27csf%27%20-%3E%20%27chemical/x-cache-csf%27.%0A%09%09%27csh%27%20-%3E%20%27text/x-csh%27.%0A%09%09%27csm%27%20-%3E%20%27chemical/x-csml%27.%0A%09%09%27csml%27%20-%3E%20%27chemical/x-csml%27.%0A%09%09%27css%27%20-%3E%20%27text/css%27.%0A%09%09%27csv%27%20-%3E%20%27text/comma-separated-values%27.%0A%09%09%27ctab%27%20-%3E%20%27chemical/x-cactvs-binary%27.%0A%09%09%27ctx%27%20-%3E%20%27chemical/x-ctx%27.%0A%09%09%27cu%27%20-%3E%20%27application/cu-seeme%27.%0A%09%09%27cub%27%20-%3E%20%27chemical/x-gaussian-cube%27.%0A%09%09%27cxf%27%20-%3E%20%27chemical/x-cxf%27.%0A%09%09%27cxx%27%20-%3E%20%27text/x-c++src%27.%0A%09%09%27dat%27%20-%3E%20%27chemical/x-mopac-input%27.%0A%09%09%27dcr%27%20-%3E%20%27application/x-director%27.%0A%09%09%27deb%27%20-%3E%20%27application/x-debian-package%27.%0A%09%09%27dif%27%20-%3E%20%27video/dv%27.%0A%09%09%27diff%27%20-%3E%20%27text/plain%27.%0A%09%09%27dir%27%20-%3E%20%27application/x-director%27.%0A%09%09%27djv%27%20-%3E%20%27image/vnd.djvu%27.%0A%09%09%27djvu%27%20-%3E%20%27image/vnd.djvu%27.%0A%09%09%27dl%27%20-%3E%20%27video/dl%27.%0A%09%09%27dll%27%20-%3E%20%27application/x-msdos-program%27.%0A%09%09%27dmg%27%20-%3E%20%27application/x-apple-diskimage%27.%0A%09%09%27dms%27%20-%3E%20%27application/x-dms%27.%0A%09%09%27doc%27%20-%3E%20%27application/msword%27.%0A%09%09%27dot%27%20-%3E%20%27application/msword%27.%0A%09%09%27dv%27%20-%3E%20%27video/dv%27.%0A%09%09%27dvi%27%20-%3E%20%27application/x-dvi%27.%0A%09%09%27dx%27%20-%3E%20%27chemical/x-jcamp-dx%27.%0A%09%09%27dxr%27%20-%3E%20%27application/x-director%27.%0A%09%09%27emb%27%20-%3E%20%27chemical/x-embl-dl-nucleotide%27.%0A%09%09%27embl%27%20-%3E%20%27chemical/x-embl-dl-nucleotide%27.%0A%09%09%27ent%27%20-%3E%20%27chemical/x-pdb%27.%0A%09%09%27eps%27%20-%3E%20%27application/postscript%27.%0A%09%09%27etx%27%20-%3E%20%27text/x-setext%27.%0A%09%09%27exe%27%20-%3E%20%27application/x-msdos-program%27.%0A%09%09%27ez%27%20-%3E%20%27application/andrew-inset%27.%0A%09%09%27fb%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27fbdoc%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27fch%27%20-%3E%20%27chemical/x-gaussian-checkpoint%27.%0A%09%09%27fchk%27%20-%3E%20%27chemical/x-gaussian-checkpoint%27.%0A%09%09%27fig%27%20-%3E%20%27application/x-xfig%27.%0A%09%09%27flac%27%20-%3E%20%27application/x-flac%27.%0A%09%09%27fli%27%20-%3E%20%27video/fli%27.%0A%09%09%27fm%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27frame%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27frm%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27gal%27%20-%3E%20%27chemical/x-gaussian-log%27.%0A%09%09%27gam%27%20-%3E%20%27chemical/x-gamess-input%27.%0A%09%09%27gamin%27%20-%3E%20%27chemical/x-gamess-input%27.%0A%09%09%27gau%27%20-%3E%20%27chemical/x-gaussian-input%27.%0A%09%09%27gcd%27%20-%3E%20%27text/x-pcs-gcd%27.%0A%09%09%27gcf%27%20-%3E%20%27application/x-graphing-calculator%27.%0A%09%09%27gcg%27%20-%3E%20%27chemical/x-gcg8-sequence%27.%0A%09%09%27gen%27%20-%3E%20%27chemical/x-genbank%27.%0A%09%09%27gf%27%20-%3E%20%27application/x-tex-gf%27.%0A%09%09%27gif%27%20-%3E%20%27image/gif%27.%0A%09%09%27gjc%27%20-%3E%20%27chemical/x-gaussian-input%27.%0A%09%09%27gjf%27%20-%3E%20%27chemical/x-gaussian-input%27.%0A%09%09%27gl%27%20-%3E%20%27video/gl%27.%0A%09%09%27gnumeric%27%20-%3E%20%27application/x-gnumeric%27.%0A%09%09%27gpt%27%20-%3E%20%27chemical/x-mopac-graph%27.%0A%09%09%27gsf%27%20-%3E%20%27application/x-font%27.%0A%09%09%27gsm%27%20-%3E%20%27audio/x-gsm%27.%0A%09%09%27gtar%27%20-%3E%20%27application/x-gtar%27.%0A%09%09%27h%27%20-%3E%20%27text/x-chdr%27.%0A%09%09%27h++%27%20-%3E%20%27text/x-c++hdr%27.%0A%09%09%27hdf%27%20-%3E%20%27application/x-hdf%27.%0A%09%09%27hh%27%20-%3E%20%27text/x-c++hdr%27.%0A%09%09%27hin%27%20-%3E%20%27chemical/x-hin%27.%0A%09%09%27hpp%27%20-%3E%20%27text/x-c++hdr%27.%0A%09%09%27hqx%27%20-%3E%20%27application/mac-binhex40%27.%0A%09%09%27hs%27%20-%3E%20%27text/x-haskell%27.%0A%09%09%27hta%27%20-%3E%20%27application/hta%27.%0A%09%09%27htc%27%20-%3E%20%27text/x-component%27.%0A%09%09%27htm%27%20-%3E%20%27text/html%27.%0A%09%09%27html%27%20-%3E%20%27text/html%27.%0A%09%09%27hxx%27%20-%3E%20%27text/x-c++hdr%27.%0A%09%09%27ica%27%20-%3E%20%27application/x-ica%27.%0A%09%09%27ice%27%20-%3E%20%27x-conference/x-cooltalk%27.%0A%09%09%27ico%27%20-%3E%20%27image/x-icon%27.%0A%09%09%27ics%27%20-%3E%20%27text/calendar%27.%0A%09%09%27icz%27%20-%3E%20%27text/calendar%27.%0A%09%09%27ief%27%20-%3E%20%27image/ief%27.%0A%09%09%27iges%27%20-%3E%20%27model/iges%27.%0A%09%09%27igs%27%20-%3E%20%27model/iges%27.%0A%09%09%27iii%27%20-%3E%20%27application/x-iphone%27.%0A%09%09%27inp%27%20-%3E%20%27chemical/x-gamess-input%27.%0A%09%09%27ins%27%20-%3E%20%27application/x-internet-signup%27.%0A%09%09%27iso%27%20-%3E%20%27application/x-iso9660-image%27.%0A%09%09%27isp%27%20-%3E%20%27application/x-internet-signup%27.%0A%09%09%27ist%27%20-%3E%20%27chemical/x-isostar%27.%0A%09%09%27istr%27%20-%3E%20%27chemical/x-isostar%27.%0A%09%09%27jad%27%20-%3E%20%27text/vnd.sun.j2me.app-descriptor%27.%0A%09%09%27jar%27%20-%3E%20%27application/java-archive%27.%0A%09%09%27java%27%20-%3E%20%27text/x-java%27.%0A%09%09%27jdx%27%20-%3E%20%27chemical/x-jcamp-dx%27.%0A%09%09%27jmz%27%20-%3E%20%27application/x-jmol%27.%0A%09%09%27jng%27%20-%3E%20%27image/x-jng%27.%0A%09%09%27jnlp%27%20-%3E%20%27application/x-java-jnlp-file%27.%0A%09%09%27jpe%27%20-%3E%20%27image/jpeg%27.%0A%09%09%27jpeg%27%20-%3E%20%27image/jpeg%27.%0A%09%09%27jpg%27%20-%3E%20%27image/jpeg%27.%0A%09%09%27js%27%20-%3E%20%27application/javascript%27.%0A%09%09%27kar%27%20-%3E%20%27audio/midi%27.%0A%09%09%27key%27%20-%3E%20%27application/pgp-keys%27.%0A%09%09%27kil%27%20-%3E%20%27application/x-killustrator%27.%0A%09%09%27kin%27%20-%3E%20%27chemical/x-kinemage%27.%0A%09%09%27kpr%27%20-%3E%20%27application/x-kpresenter%27.%0A%09%09%27kpt%27%20-%3E%20%27application/x-kpresenter%27.%0A%09%09%27ksp%27%20-%3E%20%27application/x-kspread%27.%0A%09%09%27kwd%27%20-%3E%20%27application/x-kword%27.%0A%09%09%27kwt%27%20-%3E%20%27application/x-kword%27.%0A%09%09%27latex%27%20-%3E%20%27application/x-latex%27.%0A%09%09%27lha%27%20-%3E%20%27application/x-lha%27.%0A%09%09%27lhs%27%20-%3E%20%27text/x-literate-haskell%27.%0A%09%09%27lsf%27%20-%3E%20%27video/x-la-asf%27.%0A%09%09%27lsx%27%20-%3E%20%27video/x-la-asf%27.%0A%09%09%27ltx%27%20-%3E%20%27text/x-tex%27.%0A%09%09%27lzh%27%20-%3E%20%27application/x-lzh%27.%0A%09%09%27lzx%27%20-%3E%20%27application/x-lzx%27.%0A%09%09%27m3u%27%20-%3E%20%27audio/x-mpegurl%27.%0A%09%09%27m4a%27%20-%3E%20%27audio/mpeg%27.%0A%09%09%27maker%27%20-%3E%20%27application/x-maker%27.%0A%09%09%27man%27%20-%3E%20%27application/x-troff-man%27.%0A%09%09%27mcif%27%20-%3E%20%27chemical/x-mmcif%27.%0A%09%09%27mcm%27%20-%3E%20%27chemical/x-macmolecule%27.%0A%09%09%27mdb%27%20-%3E%20%27application/msaccess%27.%0A%09%09%27me%27%20-%3E%20%27application/x-troff-me%27.%0A%09%09%27mesh%27%20-%3E%20%27model/mesh%27.%0A%09%09%27mid%27%20-%3E%20%27audio/midi%27.%0A%09%09%27midi%27%20-%3E%20%27audio/midi%27.%0A%09%09%27mif%27%20-%3E%20%27application/x-mif%27.%0A%09%09%27mm%27%20-%3E%20%27application/x-freemind%27.%0A%09%09%27mmd%27%20-%3E%20%27chemical/x-macromodel-input%27.%0A%09%09%27mmf%27%20-%3E%20%27application/vnd.smaf%27.%0A%09%09%27mml%27%20-%3E%20%27text/mathml%27.%0A%09%09%27mmod%27%20-%3E%20%27chemical/x-macromodel-input%27.%0A%09%09%27mng%27%20-%3E%20%27video/x-mng%27.%0A%09%09%27moc%27%20-%3E%20%27text/x-moc%27.%0A%09%09%27mol%27%20-%3E%20%27chemical/x-mdl-molfile%27.%0A%09%09%27mol2%27%20-%3E%20%27chemical/x-mol2%27.%0A%09%09%27moo%27%20-%3E%20%27chemical/x-mopac-out%27.%0A%09%09%27mop%27%20-%3E%20%27chemical/x-mopac-input%27.%0A%09%09%27mopcrt%27%20-%3E%20%27chemical/x-mopac-input%27.%0A%09%09%27mov%27%20-%3E%20%27video/quicktime%27.%0A%09%09%27movie%27%20-%3E%20%27video/x-sgi-movie%27.%0A%09%09%27mp2%27%20-%3E%20%27audio/mpeg%27.%0A%09%09%27mp3%27%20-%3E%20%27audio/mpeg%27.%0A%09%09%27mp4%27%20-%3E%20%27video/mp4%27.%0A%09%09%27mpc%27%20-%3E%20%27chemical/x-mopac-input%27.%0A%09%09%27mpe%27%20-%3E%20%27video/mpeg%27.%0A%09%09%27mpeg%27%20-%3E%20%27video/mpeg%27.%0A%09%09%27mpega%27%20-%3E%20%27audio/mpeg%27.%0A%09%09%27mpg%27%20-%3E%20%27video/mpeg%27.%0A%09%09%27mpga%27%20-%3E%20%27audio/mpeg%27.%0A%09%09%27ms%27%20-%3E%20%27application/x-troff-ms%27.%0A%09%09%27msh%27%20-%3E%20%27model/mesh%27.%0A%09%09%27msi%27%20-%3E%20%27application/x-msi%27.%0A%09%09%27mvb%27%20-%3E%20%27chemical/x-mopac-vib%27.%0A%09%09%27mxu%27%20-%3E%20%27video/vnd.mpegurl%27.%0A%09%09%27nb%27%20-%3E%20%27application/mathematica%27.%0A%09%09%27nc%27%20-%3E%20%27application/x-netcdf%27.%0A%09%09%27nwc%27%20-%3E%20%27application/x-nwc%27.%0A%09%09%27o%27%20-%3E%20%27application/x-object%27.%0A%09%09%27oda%27%20-%3E%20%27application/oda%27.%0A%09%09%27odb%27%20-%3E%20%27application/vnd.oasis.opendocument.database%27.%0A%09%09%27odc%27%20-%3E%20%27application/vnd.oasis.opendocument.chart%27.%0A%09%09%27odf%27%20-%3E%20%27application/vnd.oasis.opendocument.formula%27.%0A%09%09%27odg%27%20-%3E%20%27application/vnd.oasis.opendocument.graphics%27.%0A%09%09%27odi%27%20-%3E%20%27application/vnd.oasis.opendocument.image%27.%0A%09%09%27odm%27%20-%3E%20%27application/vnd.oasis.opendocument.text-master%27.%0A%09%09%27odp%27%20-%3E%20%27application/vnd.oasis.opendocument.presentation%27.%0A%09%09%27ods%27%20-%3E%20%27application/vnd.oasis.opendocument.spreadsheet%27.%0A%09%09%27odt%27%20-%3E%20%27application/vnd.oasis.opendocument.text%27.%0A%09%09%27ogg%27%20-%3E%20%27application/ogg%27.%0A%09%09%27old%27%20-%3E%20%27application/x-trash%27.%0A%09%09%27oth%27%20-%3E%20%27application/vnd.oasis.opendocument.text-web%27.%0A%09%09%27oza%27%20-%3E%20%27application/x-oz-application%27.%0A%09%09%27p%27%20-%3E%20%27text/x-pascal%27.%0A%09%09%27p7r%27%20-%3E%20%27application/x-pkcs7-certreqresp%27.%0A%09%09%27pac%27%20-%3E%20%27application/x-ns-proxy-autoconfig%27.%0A%09%09%27pas%27%20-%3E%20%27text/x-pascal%27.%0A%09%09%27pat%27%20-%3E%20%27image/x-coreldrawpattern%27.%0A%09%09%27pbm%27%20-%3E%20%27image/x-portable-bitmap%27.%0A%09%09%27pcf%27%20-%3E%20%27application/x-font%27.%0A%09%09%27pcf.Z%27%20-%3E%20%27application/x-font%27.%0A%09%09%27pcx%27%20-%3E%20%27image/pcx%27.%0A%09%09%27pdb%27%20-%3E%20%27chemical/x-pdb%27.%0A%09%09%27pdf%27%20-%3E%20%27application/pdf%27.%0A%09%09%27pfa%27%20-%3E%20%27application/x-font%27.%0A%09%09%27pfb%27%20-%3E%20%27application/x-font%27.%0A%09%09%27pgm%27%20-%3E%20%27image/x-portable-graymap%27.%0A%09%09%27pgn%27%20-%3E%20%27application/x-chess-pgn%27.%0A%09%09%27pgp%27%20-%3E%20%27application/pgp-signature%27.%0A%09%09%27pk%27%20-%3E%20%27application/x-tex-pk%27.%0A%09%09%27pl%27%20-%3E%20%27text/x-perl%27.%0A%09%09%27pls%27%20-%3E%20%27audio/x-scpls%27.%0A%09%09%27pm%27%20-%3E%20%27text/x-perl%27.%0A%09%09%27png%27%20-%3E%20%27image/png%27.%0A%09%09%27pnm%27%20-%3E%20%27image/x-portable-anymap%27.%0A%09%09%27pot%27%20-%3E%20%27text/plain%27.%0A%09%09%27ppm%27%20-%3E%20%27image/x-portable-pixmap%27.%0A%09%09%27pps%27%20-%3E%20%27application/vnd.ms-powerpoint%27.%0A%09%09%27ppt%27%20-%3E%20%27application/vnd.ms-powerpoint%27.%0A%09%09%27prf%27%20-%3E%20%27application/pics-rules%27.%0A%09%09%27prt%27%20-%3E%20%27chemical/x-ncbi-asn1-ascii%27.%0A%09%09%27ps%27%20-%3E%20%27application/postscript%27.%0A%09%09%27psd%27%20-%3E%20%27image/x-photoshop%27.%0A%09%09%27psp%27%20-%3E%20%27text/x-psp%27.%0A%09%09%27py%27%20-%3E%20%27text/x-python%27.%0A%09%09%27pyc%27%20-%3E%20%27application/x-python-code%27.%0A%09%09%27pyo%27%20-%3E%20%27application/x-python-code%27.%0A%09%09%27qt%27%20-%3E%20%27video/quicktime%27.%0A%09%09%27qtl%27%20-%3E%20%27application/x-quicktimeplayer%27.%0A%09%09%27ra%27%20-%3E%20%27audio/x-realaudio%27.%0A%09%09%27ram%27%20-%3E%20%27audio/x-pn-realaudio%27.%0A%09%09%27rar%27%20-%3E%20%27application/rar%27.%0A%09%09%27ras%27%20-%3E%20%27image/x-cmu-raster%27.%0A%09%09%27rd%27%20-%3E%20%27chemical/x-mdl-rdfile%27.%0A%09%09%27rdf%27%20-%3E%20%27application/rdf+xml%27.%0A%09%09%27rgb%27%20-%3E%20%27image/x-rgb%27.%0A%09%09%27rm%27%20-%3E%20%27audio/x-pn-realaudio%27.%0A%09%09%27roff%27%20-%3E%20%27application/x-troff%27.%0A%09%09%27ros%27%20-%3E%20%27chemical/x-rosdal%27.%0A%09%09%27rpm%27%20-%3E%20%27application/x-redhat-package-manager%27.%0A%09%09%27rss%27%20-%3E%20%27application/rss+xml%27.%0A%09%09%27rtf%27%20-%3E%20%27text/rtf%27.%0A%09%09%27rtx%27%20-%3E%20%27text/richtext%27.%0A%09%09%27rxn%27%20-%3E%20%27chemical/x-mdl-rxnfile%27.%0A%09%09%27sct%27%20-%3E%20%27text/scriptlet%27.%0A%09%09%27sd%27%20-%3E%20%27chemical/x-mdl-sdfile%27.%0A%09%09%27sd2%27%20-%3E%20%27audio/x-sd2%27.%0A%09%09%27sda%27%20-%3E%20%27application/vnd.stardivision.draw%27.%0A%09%09%27sdc%27%20-%3E%20%27application/vnd.stardivision.calc%27.%0A%09%09%27sdd%27%20-%3E%20%27application/vnd.stardivision.impress%27.%0A%09%09%27sdf%27%20-%3E%20%27chemical/x-mdl-sdfile%27.%0A%09%09%27sdp%27%20-%3E%20%27application/vnd.stardivision.impress%27.%0A%09%09%27sdw%27%20-%3E%20%27application/vnd.stardivision.writer%27.%0A%09%09%27ser%27%20-%3E%20%27application/java-serialized-object%27.%0A%09%09%27sgf%27%20-%3E%20%27application/x-go-sgf%27.%0A%09%09%27sgl%27%20-%3E%20%27application/vnd.stardivision.writer-global%27.%0A%09%09%27sh%27%20-%3E%20%27text/x-sh%27.%0A%09%09%27shar%27%20-%3E%20%27application/x-shar%27.%0A%09%09%27shtml%27%20-%3E%20%27text/html%27.%0A%09%09%27sid%27%20-%3E%20%27audio/prs.sid%27.%0A%09%09%27sik%27%20-%3E%20%27application/x-trash%27.%0A%09%09%27silo%27%20-%3E%20%27model/mesh%27.%0A%09%09%27sis%27%20-%3E%20%27application/vnd.symbian.install%27.%0A%09%09%27sit%27%20-%3E%20%27application/x-stuffit%27.%0A%09%09%27skd%27%20-%3E%20%27application/x-koan%27.%0A%09%09%27skm%27%20-%3E%20%27application/x-koan%27.%0A%09%09%27skp%27%20-%3E%20%27application/x-koan%27.%0A%09%09%27skt%27%20-%3E%20%27application/x-koan%27.%0A%09%09%27smf%27%20-%3E%20%27application/vnd.stardivision.math%27.%0A%09%09%27smi%27%20-%3E%20%27application/smil%27.%0A%09%09%27smil%27%20-%3E%20%27application/smil%27.%0A%09%09%27snd%27%20-%3E%20%27audio/basic%27.%0A%09%09%27spc%27%20-%3E%20%27chemical/x-galactic-spc%27.%0A%09%09%27spl%27%20-%3E%20%27application/x-futuresplash%27.%0A%09%09%27src%27%20-%3E%20%27application/x-wais-source%27.%0A%09%09%27stc%27%20-%3E%20%27application/vnd.sun.xml.calc.template%27.%0A%09%09%27std%27%20-%3E%20%27application/vnd.sun.xml.draw.template%27.%0A%09%09%27sti%27%20-%3E%20%27application/vnd.sun.xml.impress.template%27.%0A%09%09%27stl%27%20-%3E%20%27application/vnd.ms-pki.stl%27.%0A%09%09%27stw%27%20-%3E%20%27application/vnd.sun.xml.writer.template%27.%0A%09%09%27sty%27%20-%3E%20%27text/x-tex%27.%0A%09%09%27sv4cpio%27%20-%3E%20%27application/x-sv4cpio%27.%0A%09%09%27sv4crc%27%20-%3E%20%27application/x-sv4crc%27.%0A%09%09%27svg%27%20-%3E%20%27image/svg+xml%27.%0A%09%09%27svgz%27%20-%3E%20%27image/svg+xml%27.%0A%09%09%27sw%27%20-%3E%20%27chemical/x-swissprot%27.%0A%09%09%27swf%27%20-%3E%20%27application/x-shockwave-flash%27.%0A%09%09%27swfl%27%20-%3E%20%27application/x-shockwave-flash%27.%0A%09%09%27sxc%27%20-%3E%20%27application/vnd.sun.xml.calc%27.%0A%09%09%27sxd%27%20-%3E%20%27application/vnd.sun.xml.draw%27.%0A%09%09%27sxg%27%20-%3E%20%27application/vnd.sun.xml.writer.global%27.%0A%09%09%27sxi%27%20-%3E%20%27application/vnd.sun.xml.impress%27.%0A%09%09%27sxm%27%20-%3E%20%27application/vnd.sun.xml.math%27.%0A%09%09%27sxw%27%20-%3E%20%27application/vnd.sun.xml.writer%27.%0A%09%09%27t%27%20-%3E%20%27application/x-troff%27.%0A%09%09%27tar%27%20-%3E%20%27application/x-tar%27.%0A%09%09%27taz%27%20-%3E%20%27application/x-gtar%27.%0A%09%09%27tcl%27%20-%3E%20%27text/x-tcl%27.%0A%09%09%27tex%27%20-%3E%20%27text/x-tex%27.%0A%09%09%27texi%27%20-%3E%20%27application/x-texinfo%27.%0A%09%09%27texinfo%27%20-%3E%20%27application/x-texinfo%27.%0A%09%09%27text%27%20-%3E%20%27text/plain%27.%0A%09%09%27tgf%27%20-%3E%20%27chemical/x-mdl-tgf%27.%0A%09%09%27tgz%27%20-%3E%20%27application/x-gtar%27.%0A%09%09%27tif%27%20-%3E%20%27image/tiff%27.%0A%09%09%27tiff%27%20-%3E%20%27image/tiff%27.%0A%09%09%27tk%27%20-%3E%20%27text/x-tcl%27.%0A%09%09%27tm%27%20-%3E%20%27text/texmacs%27.%0A%09%09%27torrent%27%20-%3E%20%27application/x-bittorrent%27.%0A%09%09%27tr%27%20-%3E%20%27application/x-troff%27.%0A%09%09%27ts%27%20-%3E%20%27text/texmacs%27.%0A%09%09%27tsp%27%20-%3E%20%27application/dsptype%27.%0A%09%09%27tsv%27%20-%3E%20%27text/tab-separated-values%27.%0A%09%09%27txt%27%20-%3E%20%27text/plain%27.%0A%09%09%27udeb%27%20-%3E%20%27application/x-debian-package%27.%0A%09%09%27uls%27%20-%3E%20%27text/iuls%27.%0A%09%09%27ustar%27%20-%3E%20%27application/x-ustar%27.%0A%09%09%27val%27%20-%3E%20%27chemical/x-ncbi-asn1-binary%27.%0A%09%09%27vcd%27%20-%3E%20%27application/x-cdlink%27.%0A%09%09%27vcf%27%20-%3E%20%27text/x-vcard%27.%0A%09%09%27vcs%27%20-%3E%20%27text/x-vcalendar%27.%0A%09%09%27vmd%27%20-%3E%20%27chemical/x-vmd%27.%0A%09%09%27vms%27%20-%3E%20%27chemical/x-vamas-iso14976%27.%0A%09%09%27vor%27%20-%3E%20%27application/vnd.stardivision.writer%27.%0A%09%09%27vrm%27%20-%3E%20%27x-world/x-vrml%27.%0A%09%09%27vrml%27%20-%3E%20%27x-world/x-vrml%27.%0A%09%09%27vsd%27%20-%3E%20%27application/vnd.visio%27.%0A%09%09%27wad%27%20-%3E%20%27application/x-doom%27.%0A%09%09%27wav%27%20-%3E%20%27audio/x-wav%27.%0A%09%09%27wax%27%20-%3E%20%27audio/x-ms-wax%27.%0A%09%09%27wbmp%27%20-%3E%20%27image/vnd.wap.wbmp%27.%0A%09%09%27wbxml%27%20-%3E%20%27application/vnd.wap.wbxml%27.%0A%09%09%27wk%27%20-%3E%20%27application/x-123%27.%0A%09%09%27wm%27%20-%3E%20%27video/x-ms-wm%27.%0A%09%09%27wma%27%20-%3E%20%27audio/x-ms-wma%27.%0A%09%09%27wmd%27%20-%3E%20%27application/x-ms-wmd%27.%0A%09%09%27wml%27%20-%3E%20%27text/vnd.wap.wml%27.%0A%09%09%27wmlc%27%20-%3E%20%27application/vnd.wap.wmlc%27.%0A%09%09%27wmls%27%20-%3E%20%27text/vnd.wap.wmlscript%27.%0A%09%09%27wmlsc%27%20-%3E%20%27application/vnd.wap.wmlscriptc%27.%0A%09%09%27wmv%27%20-%3E%20%27video/x-ms-wmv%27.%0A%09%09%27wmx%27%20-%3E%20%27video/x-ms-wmx%27.%0A%09%09%27wmz%27%20-%3E%20%27application/x-ms-wmz%27.%0A%09%09%27wp5%27%20-%3E%20%27application/wordperfect5.1%27.%0A%09%09%27wpd%27%20-%3E%20%27application/wordperfect%27.%0A%09%09%27wrl%27%20-%3E%20%27x-world/x-vrml%27.%0A%09%09%27wsc%27%20-%3E%20%27text/scriptlet%27.%0A%09%09%27wvx%27%20-%3E%20%27video/x-ms-wvx%27.%0A%09%09%27wz%27%20-%3E%20%27application/x-wingz%27.%0A%09%09%27xbm%27%20-%3E%20%27image/x-xbitmap%27.%0A%09%09%27xcf%27%20-%3E%20%27application/x-xcf%27.%0A%09%09%27xht%27%20-%3E%20%27application/xhtml+xml%27.%0A%09%09%27xhtml%27%20-%3E%20%27application/xhtml+xml%27.%0A%09%09%27xlb%27%20-%3E%20%27application/vnd.ms-excel%27.%0A%09%09%27xls%27%20-%3E%20%27application/vnd.ms-excel%27.%0A%09%09%27xlt%27%20-%3E%20%27application/vnd.ms-excel%27.%0A%09%09%27xml%27%20-%3E%20%27application/xml%27.%0A%09%09%27xpi%27%20-%3E%20%27application/x-xpinstall%27.%0A%09%09%27xpm%27%20-%3E%20%27image/x-xpixmap%27.%0A%09%09%27xsl%27%20-%3E%20%27application/xml%27.%0A%09%09%27xtel%27%20-%3E%20%27chemical/x-xtel%27.%0A%09%09%27xul%27%20-%3E%20%27application/vnd.mozilla.xul+xml%27.%0A%09%09%27xwd%27%20-%3E%20%27image/x-xwindowdump%27.%0A%09%09%27xyz%27%20-%3E%20%27chemical/x-xyz%27.%0A%09%09%27zip%27%20-%3E%20%27application/zip%27.%0A%09%09%27zmt%27%20-%3E%20%27chemical/x-mopac-input%27.%0A%09%09%27%7E%27%20-%3E%20%27application/x-trash%27%0A%09%7D'),
messageSends: [unescape("-%3E")],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
unescape('_mimeTypes'),
smalltalk.method({
selector: unescape('mimeTypes'),
category: 'accessing',
fn: function () {
    var self = this;
    return ($receiver = self['@mimeTypes']) == nil || $receiver == undefined ? function () {return self['@mimeTypes'] = smalltalk.send(self, "_defaultMimeTypes", []);}() : $receiver;
    return self;
},
args: [],
source: unescape('mimeTypes%0A%09%5EmimeTypes%20ifNil%3A%20%5BmimeTypes%20%3A%3D%20self%20defaultMimeTypes%5D'),
messageSends: ["ifNil:", "defaultMimeTypes"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
unescape('_mimeTypeFor_'),
smalltalk.method({
selector: unescape('mimeTypeFor%3A'),
category: 'accessing',
fn: function (aString) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_mimeTypes", []), "_at_ifAbsent_", [smalltalk.send(aString, "_replace_with_", [unescape(".*%5B%5C.%5D"), ""]), function () {return unescape("text/plain");}]);
    return self;
},
args: ["aString"],
source: unescape('mimeTypeFor%3A%20aString%0A%09%5Eself%20mimeTypes%20at%3A%20%28aString%20replace%3A%20%27.*%5B%5C.%5D%27%20with%3A%20%27%27%29%20ifAbsent%3A%20%5B%27text/plain%27%5D'),
messageSends: ["at:ifAbsent:", "mimeTypes", "replace:with:"],
referencedClasses: []
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
unescape('_main'),
smalltalk.method({
selector: unescape('main'),
category: 'initialization',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_startOn_", [smalltalk.send(self, "_port", [])]);
    return self;
},
args: [],
source: unescape('main%0A%0A%09%5Eself%20new%20startOn%3A%20self%20port'),
messageSends: ["startOn:", "new", "port"],
referencedClasses: []
}),
smalltalk.FileServer.klass);


smalltalk.addClass('MongoDB', smalltalk.Object, ['path', 'http', 'fs', 'sys', 'url', 'db', 'server', 'host', 'port'], 'FileServer');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.Object);
    self['@path'] = smalltalk.send(self, "_require_", ["path"]);
    self['@http'] = smalltalk.send(self, "_require_", ["http"]);
    self['@fs'] = smalltalk.send(self, "_require_", ["fs"]);
    self['@sys'] = smalltalk.send(self, "_require_", ["sys"]);
    self['@url'] = smalltalk.send(self, "_require_", ["url"]);
    self['@db'] = smalltalk.send(self, "_require_", ["mongodb"]);
    self['@host'] = "127.0.0.1";
    self['@port'] = 27017;
    return self;
},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09path%20%3A%3D%20self%20require%3A%20%27path%27.%0A%09http%20%3A%3D%20self%20require%3A%20%27http%27.%0A%09fs%20%3A%3D%20self%20require%3A%20%27fs%27.%0A%09sys%20%3A%3D%20self%20require%3A%20%27sys%27.%0A%09url%20%3A%3D%20self%20require%3A%20%27url%27.%0A%09db%20%3A%3D%20self%20require%3A%20%27mongodb%27.%0A%09host%20%3A%3D%20%27127.0.0.1%27.%0A%09port%20%3A%3D%2027017.'),
messageSends: ["initialize", "require:"],
referencedClasses: []
}),
smalltalk.MongoDB);

smalltalk.addMethod(
unescape('_require_'),
smalltalk.method({
selector: unescape('require%3A'),
category: 'not yet classified',
fn: function (aModuleString) {
    var self = this;
    return smalltalk.send(typeof require == "undefined" ? nil : require, "_value_", [aModuleString]);
    return self;
},
args: ["aModuleString"],
source: unescape('require%3A%20aModuleString%0A%09%22call%20to%20the%20require%20function%22%0A%09%5Erequire%20value%3A%20aModuleString'),
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.MongoDB);

smalltalk.addMethod(
unescape('_insert_document_'),
smalltalk.method({
selector: unescape('insert%3Adocument%3A'),
category: 'not yet classified',
fn: function (collectionName, aDict) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    var mongodb = require("mongodb");
    var server = new (mongodb.Server)(myHost, myPort, {});
    (new (mongodb.Db)("test", server, {})).open(function (error, client) {var collection = new (mongodb.Collection)(client, collectionName);collection.insert(aDict, {safe: true}, function (err, objects) {if (err) {console.warn(err.message);}});});
    return self;
},
args: ["collectionName", "aDict"],
source: unescape('insert%3A%20collectionName%20document%3A%20aDict%0A%7C%20myHost%20myPort%20%7C%0AmyHost%20%3A%3D%20host.%0AmyPort%20%3A%3D%20port.%0A%0A%3Cvar%20mongodb%20%3D%20require%28%27mongodb%27%29%3B%0Avar%20server%20%3D%20new%20mongodb.Server%28myHost%2C%20myPort%2C%20%7B%7D%29%3B%0A%0Anew%20mongodb.Db%28%27test%27%2C%20server%2C%20%7B%7D%29.open%28function%20%28error%2C%20client%29%20%7B%0A%09var%20collection%20%3D%20new%20mongodb.Collection%28client%2C%20collectionName%29%3B%0A%09collection.insert%28aDict%2C%20%7Bsafe%3Atrue%7D%2C%20function%28err%2C%20objects%29%20%7B%0A%09if%20%28err%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.warn%28err.message%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%09%7D%29%3B%0A%7D%29%3B%3E.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MongoDB);

smalltalk.addMethod(
unescape('_find_criteria_'),
smalltalk.method({
selector: unescape('find%3Acriteria%3A'),
category: 'not yet classified',
fn: function (collectionName, aCriteria) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    var json = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    json = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [aCriteria]);
    var mongodb = require("mongodb");
    var server = new (mongodb.Server)(myHost, myPort, {});
    (new (mongodb.Db)("test", server, {})).open(function (error, client) {var collection = new (mongodb.Collection)(client, collectionName);collection.find(json).toArray(function (err, docs) {console.dir(docs);});});
    return self;
},
args: ["collectionName", "aCriteria"],
source: unescape('find%3A%20collectionName%20criteria%3A%20aCriteria%0A%7C%20myHost%20myPort%20json%20%7C%0AmyHost%20%3A%3D%20host.%0AmyPort%20%3A%3D%20port.%0A%0Ajson%20%3A%3D%20JSON%20parse%3A%20aCriteria.%0A%0A%3Cvar%20mongodb%20%3D%20require%28%27mongodb%27%29%3B%0Avar%20server%20%3D%20new%20mongodb.Server%28myHost%2C%20myPort%2C%20%7B%7D%29%3B%0Anew%20mongodb.Db%28%27test%27%2C%20server%2C%20%7B%7D%29.open%28function%20%28error%2C%20client%29%20%7B%0A%20%20var%20collection%20%3D%20new%20mongodb.Collection%28client%2C%20collectionName%29%3B%0A%20%20collection.find%28json%29.toArray%28function%28err%2C%20docs%29%20%7B%0A%20%20%20%20console.dir%28docs%29%3B%0A%20%20%7D%29%3B%0A%7D%29%3B%3E.'),
messageSends: ["parse:"],
referencedClasses: ["JSON"]
}),
smalltalk.MongoDB);

smalltalk.addMethod(
unescape('_find_criteria_do_'),
smalltalk.method({
selector: unescape('find%3Acriteria%3Ado%3A'),
category: 'not yet classified',
fn: function (collectionName, aCriteria, aBlock) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    var json = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    json = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [aCriteria]);
    var mongodb = require("mongodb");
    var server = new (mongodb.Server)(myHost, myPort, {});
    (new (mongodb.Db)("test", server, {})).open(function (error, client) {var collection = new (mongodb.Collection)(client, collectionName);collection.find(json).toArray(aBlock);});
    return self;
},
args: ["collectionName", "aCriteria", "aBlock"],
source: unescape('find%3A%20collectionName%20criteria%3A%20aCriteria%20do%3A%20aBlock%0A%7C%20myHost%20myPort%20json%20%7C%0AmyHost%20%3A%3D%20host.%0AmyPort%20%3A%3D%20port.%0A%0Ajson%20%3A%3D%20JSON%20parse%3A%20aCriteria.%0A%0A%3Cvar%20mongodb%20%3D%20require%28%27mongodb%27%29%3B%0Avar%20server%20%3D%20new%20mongodb.Server%28myHost%2C%20myPort%2C%20%7B%7D%29%3B%0Anew%20mongodb.Db%28%27test%27%2C%20server%2C%20%7B%7D%29.open%28function%20%28error%2C%20client%29%20%7B%0A%20%20var%20collection%20%3D%20new%20mongodb.Collection%28client%2C%20collectionName%29%3B%0A%20%20collection.find%28json%29.toArray%28aBlock%29%3B%0A%7D%29%3B%3E.'),
messageSends: ["parse:"],
referencedClasses: ["JSON"]
}),
smalltalk.MongoDB);

smalltalk.addMethod(
unescape('_find_criteria_sort_do_'),
smalltalk.method({
selector: unescape('find%3Acriteria%3Asort%3Ado%3A'),
category: 'not yet classified',
fn: function (collectionName, aCriteria, aSort, aBlock) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    var json = nil;
    var sortJson = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    json = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [aCriteria]);
    sortJson = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [aSort]);
    var mongodb = require("mongodb");
    var server = new (mongodb.Server)(myHost, myPort, {});
    (new (mongodb.Db)("test", server, {})).open(function (error, client) {var collection = new (mongodb.Collection)(client, collectionName);collection.find(json).sort(sortJson).toArray(aBlock);});
    return self;
},
args: ["collectionName", "aCriteria", "aSort", "aBlock"],
source: unescape('find%3A%20collectionName%20criteria%3A%20aCriteria%20sort%3A%20aSort%20do%3A%20aBlock%0A%7C%20myHost%20myPort%20json%20sortJson%20%7C%0AmyHost%20%3A%3D%20host.%0AmyPort%20%3A%3D%20port.%0A%0Ajson%20%3A%3D%20JSON%20parse%3A%20aCriteria.%0AsortJson%20%3A%3D%20JSON%20parse%3A%20aSort.%0A%0A%3Cvar%20mongodb%20%3D%20require%28%27mongodb%27%29%3B%0Avar%20server%20%3D%20new%20mongodb.Server%28myHost%2C%20myPort%2C%20%7B%7D%29%3B%0Anew%20mongodb.Db%28%27test%27%2C%20server%2C%20%7B%7D%29.open%28function%20%28error%2C%20client%29%20%7B%0A%20%20var%20collection%20%3D%20new%20mongodb.Collection%28client%2C%20collectionName%29%3B%0A%20%20collection.find%28json%29.sort%28sortJson%29.toArray%28aBlock%29%3B%0A%7D%29%3B%3E.'),
messageSends: ["parse:"],
referencedClasses: ["JSON"]
}),
smalltalk.MongoDB);

smalltalk.addMethod(
unescape('_find_criteria_omit_sort_do_'),
smalltalk.method({
selector: unescape('find%3Acriteria%3Aomit%3Asort%3Ado%3A'),
category: 'not yet classified',
fn: function (collectionName, aCriteria, anOmit, aSort, aBlock) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    var json = nil;
    var sortJson = nil;
    var omitJson = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    json = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [aCriteria]);
    sortJson = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [aSort]);
    omitJson = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [anOmit]);
    var mongodb = require("mongodb");
    var server = new (mongodb.Server)(myHost, myPort, {});
    (new (mongodb.Db)("test", server, {})).open(function (error, client) {var collection = new (mongodb.Collection)(client, collectionName);collection.find(json, omitJson).sort(sortJson).toArray(aBlock);});
    return self;
},
args: ["collectionName", "aCriteria", "anOmit", "aSort", "aBlock"],
source: unescape('find%3A%20collectionName%20criteria%3A%20aCriteria%20omit%3A%20anOmit%20sort%3A%20aSort%20do%3A%20aBlock%0A%7C%20myHost%20myPort%20json%20sortJson%20omitJson%20%7C%0AmyHost%20%3A%3D%20host.%0AmyPort%20%3A%3D%20port.%0A%0Ajson%20%3A%3D%20JSON%20parse%3A%20aCriteria.%0AsortJson%20%3A%3D%20JSON%20parse%3A%20aSort.%0AomitJson%20%3A%3D%20JSON%20parse%3A%20anOmit.%0A%0A%3Cvar%20mongodb%20%3D%20require%28%27mongodb%27%29%3B%0Avar%20server%20%3D%20new%20mongodb.Server%28myHost%2C%20myPort%2C%20%7B%7D%29%3B%0Anew%20mongodb.Db%28%27test%27%2C%20server%2C%20%7B%7D%29.open%28function%20%28error%2C%20client%29%20%7B%0A%20%20var%20collection%20%3D%20new%20mongodb.Collection%28client%2C%20collectionName%29%3B%0A%20%20collection.find%28json%2C%20omitJson%29.sort%28sortJson%29.toArray%28aBlock%29%3B%0A%7D%29%3B%3E.'),
messageSends: ["parse:"],
referencedClasses: ["JSON"]
}),
smalltalk.MongoDB);



