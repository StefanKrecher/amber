smalltalk.addPackage('FileServer', {"version":"0.8"});
smalltalk.addClass('FileServer', smalltalk.Object, ['path', 'http', 'fs', 'url', 'port', 'basePath', 'sys', 'db'], 'FileServer');
smalltalk.addMethod(
'_basePath',
smalltalk.method({
selector: 'basePath',
fn: function () {
    var self = this;
    return ($receiver = self['@basePath']) == nil || $receiver == undefined ? function () {return unescape("./");}() : $receiver;
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_basePath_',
smalltalk.method({
selector: 'basePath:',
fn: function (aString) {
    var self = this;
    self['@basePath'] = aString;
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_port',
smalltalk.method({
selector: 'port',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_class", []), "_port", []);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
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
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_require_',
smalltalk.method({
selector: 'require:',
fn: function (aModuleString) {
    var self = this;
    return smalltalk.send(typeof require == "undefined" ? nil : require, "_value_", [aModuleString]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_writeData_toFileNamed_',
smalltalk.method({
selector: 'writeData:toFileNamed:',
fn: function (data, aFilename) {
    var self = this;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [aFilename]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondNotFoundTo_',
smalltalk.method({
selector: 'respondNotFoundTo:',
fn: function (aResponse) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [404, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", ["404 Not found"]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handleRequest_respondTo_',
smalltalk.method({
selector: 'handleRequest:respondTo:',
fn: function (aRequest, aResponse) {
    var self = this;
    ($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["PUT"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_handlePUTRequest_respondTo_", [aRequest, aResponse]);}]);
    ($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["GET"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_handleGETRequest_respondTo_", [aRequest, aResponse]);}]);
    ($receiver = smalltalk.send(smalltalk.send(aRequest, "_method", []), "__eq", ["POST"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_handlePOSTRequest_respondTo_", [aRequest, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_handlePOSTRequest_respondTo_", [aRequest, aResponse]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handleGETRequest_respondTo_',
smalltalk.method({
selector: 'handleGETRequest:respondTo:',
fn: function (aRequest, aResponse) {
    var self = this;
    var uri = nil;
    var filename = nil;
    var urlObj = nil;
    var pathElements = nil;
    urlObj = smalltalk.send(self['@url'], "_parse_parseQueryString_", [smalltalk.send(aRequest, "_url", []), true]);
    uri = smalltalk.send(urlObj, "_pathname", []);
    pathElements = smalltalk.send(uri, "_tokenize_", [unescape("/")]);
    ($receiver = smalltalk.send(smalltalk.send(smalltalk.send(pathElements, "_size", []), "__eq", [3]), "_and_", [function () {return smalltalk.send(smalltalk.send(pathElements, "_second", []), "__eq", ["packages"]);}])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondPackageSt_properties_to_", [smalltalk.send(smalltalk.send(smalltalk.send(pathElements, "_third", []), "_tokenize_", ["."]), "_first", []), smalltalk.send(urlObj, "_query", []), aResponse]);}() : function () {filename = smalltalk.send(self['@path'], "_join_with_", [smalltalk.send(self, "_basePath", []), uri]);return smalltalk.send(self['@path'], "_exists_do_", [filename, function (boolean) {return ($receiver = boolean).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}() : function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}, function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}]);}]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondPackageSt_properties_to_", [smalltalk.send(smalltalk.send(smalltalk.send(pathElements, "_third", []), "_tokenize_", ["."]), "_first", []), smalltalk.send(urlObj, "_query", []), aResponse]);}, function () {filename = smalltalk.send(self['@path'], "_join_with_", [smalltalk.send(self, "_basePath", []), uri]);return smalltalk.send(self['@path'], "_exists_do_", [filename, function (boolean) {return ($receiver = boolean).klass === smalltalk.Boolean ? !$receiver ? function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}() : function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}() : smalltalk.send($receiver, "_ifFalse_ifTrue_", [function () {return smalltalk.send(self, "_respondNotFoundTo_", [aResponse]);}, function () {return smalltalk.send(self, "_respondFileNamed_to_", [filename, aResponse]);}]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handlePUTRequest_respondTo_',
smalltalk.method({
selector: 'handlePUTRequest:respondTo:',
fn: function (aRequest, aResponse) {
    var self = this;
    var stream = nil;
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("PUT RequestURL: ", "__comma", [smalltalk.send(aRequest, "_url", [])])]);
    stream = smalltalk.send(self['@fs'], "_createWriteStream_", [smalltalk.send(".", "__comma", [smalltalk.send(aRequest, "_url", [])])]);
    smalltalk.send(aRequest, "_setEncoding_", ["utf8"]);
    smalltalk.send(aRequest, "_on_do_", ["data", function (data) {return smalltalk.send(stream, "_write_", [data]);}]);
    smalltalk.send(aRequest, "_on_do_", ["end", function () {smalltalk.send(stream, "_end", []);return smalltalk.send(self, "_respondOKTo_", [aResponse]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondFileNamed_to_',
smalltalk.method({
selector: 'respondFileNamed:to:',
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
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondInternalErrorTo_',
smalltalk.method({
selector: 'respondInternalErrorTo:',
fn: function (aResponse) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [500, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", ["500 Internal server error"]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondOKTo_',
smalltalk.method({
selector: 'respondOKTo:',
fn: function (aResponse) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_startOn_',
smalltalk.method({
selector: 'startOn:',
fn: function (aPort) {
    var self = this;
    self['@port'] = aPort;
    smalltalk.send(self, "_start", []);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_start',
smalltalk.method({
selector: 'start',
fn: function () {
    var self = this;
    var src = nil;
    var aStream = nil;
    smalltalk.send(smalltalk.send(self['@http'], "_createServer_", [function (request, response) {return smalltalk.send(self, "_handleRequest_respondTo_", [request, response]);}]), "_listen_", [smalltalk.send(self, "_port", [])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("Starting file server on port ", "__comma", [smalltalk.send(smalltalk.send(self, "_port", []), "_asString", [])])]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondFileNamedOld_to_',
smalltalk.method({
selector: 'respondFileNamedOld:to:',
fn: function (aFilename, aResponse) {
    var self = this;
    var type = nil;
    var filename = nil;
    filename = aFilename;
    ($receiver = smalltalk.send(smalltalk.send(self['@fs'], "_statSync_", [aFilename]), "_isDirectory", [])).klass === smalltalk.Boolean ? $receiver ? function () {return filename = smalltalk.send(filename, "__comma", ["index.html"]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return filename = smalltalk.send(filename, "__comma", ["index.html"]);}]);
    smalltalk.send(self['@fs'], "_readFile_do_", [filename, function (ex, file) {return ($receiver = smalltalk.send(ex, "_notNil", [])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("FILE: ", "__comma", [file])]);type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondInternalErrorTo_", [aResponse]);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("FILE: ", "__comma", [file])]);type = smalltalk.send(smalltalk.send(self, "_class", []), "_mimeTypeFor_", [filename]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [type])])]);smalltalk.send($rec, "_write_binary_", [file, "binary"]);return smalltalk.send($rec, "_end", []);}(aResponse);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_handlePOSTRequest_respondTo_',
smalltalk.method({
selector: 'handlePOSTRequest:respondTo:',
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
    smalltalk.send(aRequest, "_on_do_", ["end", function () {params = smalltalk.send(smalltalk.send(requestURL, "_trimLeft_", [unescape("/")]), "_tokenize_", [unescape("%3F")]);return smalltalk.send(self, "_try_catch_", [function () {return ($receiver = smalltalk.send(smalltalk.send(data, "_notNil", []), "_and_", [function () {return ($receiver = smalltalk.send(data, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0]);}])).klass === smalltalk.Boolean ? $receiver ? function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("Parameter: ", "__comma", [params])]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["createAccount:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["login:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["reload:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["commitPackage:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);return ($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["browse:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}]);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["keine Parameter: "]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [smalltalk.send(params, "_at_", [1])]), "_perform_", [smalltalk.send(params, "_at_", [2])]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("Parameter: ", "__comma", [params])]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["createAccount:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_createAccount_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["login:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_login_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["reload:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_reload_response_", [data, aResponse]);}]);($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["commitPackage:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_commit_response_", [smalltalk.send(smalltalk.JSON || JSON, "_parse_", [data]), aResponse]);}]);return ($receiver = smalltalk.send(smalltalk.send(params, "_at_", [2]), "__eq", ["browse:"])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}() : nil : smalltalk.send($receiver, "_ifTrue_", [function () {return smalltalk.send(self, "_respondPublicPackageListTo_", [aResponse]);}]);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["keine Parameter: "]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [smalltalk.send(params, "_at_", [1])]), "_perform_", [smalltalk.send(params, "_at_", [2])]);}]);}, function (ex) {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send("EXCEPTION: ", "__comma", [ex])]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, smalltalk.send("unerwartet: ", "__comma", [ex])]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_createAccount_response_',
smalltalk.method({
selector: 'createAccount:response:',
fn: function (data, resp) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["_id", smalltalk.send(data, "_at_", ["_id"])]);
    smalltalk.send(mongo, "_find_criteria_do_", ["users", smalltalk.send(crit, "_asJSONString", []), function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, "Username already taken"]);}() : function () {smalltalk.send(mongo, "_insert_document_", ["users", data]);return smalltalk.send(self, "_respondOKTo_message_", [resp, "User successfully created."]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, "Username already taken"]);}, function () {smalltalk.send(mongo, "_insert_document_", ["users", data]);return smalltalk.send(self, "_respondOKTo_message_", [resp, "User successfully created."]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_login_response_',
smalltalk.method({
selector: 'login:response:',
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
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondInternalErrorTo_message_',
smalltalk.method({
selector: 'respondInternalErrorTo:message:',
fn: function (aResponse, aMessage) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [500, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [aMessage]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondOKTo_message_',
smalltalk.method({
selector: 'respondOKTo:message:',
fn: function (aResponse, aMessage) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [aMessage]);return smalltalk.send($rec, "_end", []);}(aResponse));
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_reload_response_',
smalltalk.method({
selector: 'reload:response:',
fn: function (aPackage, resp) {
    var self = this;
    var src = nil;
    var filename = nil;
    filename = smalltalk.send(smalltalk.send(unescape("st/"), "__comma", [aPackage]), "__comma", [".st"]);
    src = fs.readFileSync(filename, "utf8");
    smalltalk.send(smalltalk.send(smalltalk.Importer || Importer, "_new", []), "_importString_", [src]);
    smalltalk.send(self, "_respondOKTo_message_", [resp, smalltalk.send(smalltalk.send("Package ", "__comma", [aPackage]), "__comma", [" reloaded on the server."])]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_commit_response_',
smalltalk.method({
selector: 'commit:response:',
fn: function (data, resp) {
    var self = this;
    var json = nil;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    var user = nil;
    var password = nil;
    var packageName = nil;
    var version = nil;
    user = smalltalk.send(data, "_at_", ["user"]);
    password = smalltalk.send(data, "_at_", ["password"]);
    packageName = smalltalk.send(data, "_at_", ["packageName"]);
    smalltalk.send(data, "_at_put_", ["password", ""]);
    smalltalk.send(data, "_at_put_", ["packageMeta", smalltalk.send(smalltalk.JSON || JSON, "_parse_", [smalltalk.send(data, "_at_", ["packageMeta"])])]);
    version = smalltalk.send(smalltalk.send(data, "_at_", ["packageMeta"]), "_at_", ["version"]);
    smalltalk.send(self, "_login_password_onSuccess_onError_", [user, password, function () {return smalltalk.send(self, "_checkOwner_user_onSuccess_onError_", [packageName, user, function () {return smalltalk.send(self, "_checkVersion_version_onSuccess_onError_", [packageName, version, function () {mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);smalltalk.send(mongo, "_insert_document_", ["packages", data]);return smalltalk.send(self, "_respondOKTo_message_", [resp, "Package saved."]);}, function (message) {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, message]);}]);}, function (message) {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, message]);}]);}, function (message) {return smalltalk.send(self, "_respondInternalErrorTo_message_", [resp, message]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondPackageSt_properties_to_',
smalltalk.method({
selector: 'respondPackageSt:properties:to:',
fn: function (aPackageName, props, aResponse) {
    var self = this;
    var mongo = nil;
    var crit = nil;
    var omit = nil;
    var sort = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["packageName", aPackageName]);
    smalltalk.send(crit, "_at_put_", ["packageMeta.version", smalltalk.send(props, "_at_", ["version"])]);
    smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [crit]);
    omit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    sort = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(mongo, "_find_criteria_omit_sort_do_", ["packages", crit, omit, sort, function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.HashedCollection._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["st"])]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : function () {return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.HashedCollection._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["st"])]);return smalltalk.send($rec, "_end", []);}(aResponse);}, function () {return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_respondPublicPackageListTo_',
smalltalk.method({
selector: 'respondPublicPackageListTo:',
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
    smalltalk.send(mongo, "_find_criteria_omit_sort_do_", ["packages", crit, omitDict, sortDict, function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {var responseArray = nil;responseArray = smalltalk.send(smalltalk.Array || Array, "_new", []);smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["TREFFER: "]);smalltalk.send(docs, "_do_", [function (aDoc) {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send("P: ", "__comma", [smalltalk.send(aDoc, "_at_", ["packageName"])]), "__comma", [" V: "]), "__comma", [smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);return smalltalk.send(responseArray, "_add_", [smalltalk.send(smalltalk.Association || Association, "_key_value_", [smalltalk.send(aDoc, "_at_", ["packageName"]), smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);}]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.HashedCollection._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(responseArray, "_asJSONString", [])]);return smalltalk.send($rec, "_end", []);}(aResponse);}() : function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["NIX GEFUNDEN"]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {var responseArray = nil;responseArray = smalltalk.send(smalltalk.Array || Array, "_new", []);smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["TREFFER: "]);smalltalk.send(docs, "_do_", [function (aDoc) {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", [smalltalk.send(smalltalk.send(smalltalk.send("P: ", "__comma", [smalltalk.send(aDoc, "_at_", ["packageName"])]), "__comma", [" V: "]), "__comma", [smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);return smalltalk.send(responseArray, "_add_", [smalltalk.send(smalltalk.Association || Association, "_key_value_", [smalltalk.send(aDoc, "_at_", ["packageName"]), smalltalk.send(smalltalk.send(aDoc, "_at_", ["packageMeta"]), "_at_", ["version"])])]);}]);return function ($rec) {smalltalk.send($rec, "_writeHead_options_", [200, smalltalk.HashedCollection._fromPairs_([smalltalk.send(unescape("Content-Type"), "__minus_gt", [unescape("text/plain")])])]);smalltalk.send($rec, "_write_", [smalltalk.send(responseArray, "_asJSONString", [])]);return smalltalk.send($rec, "_end", []);}(aResponse);}, function () {smalltalk.send(typeof console == "undefined" ? nil : console, "_log_", ["NIX GEFUNDEN"]);return smalltalk.send(self, "_respondInternalErrorTo_message_", [aResponse, "not found"]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_login_password_onSuccess_onError_',
smalltalk.method({
selector: 'login:password:onSuccess:onError:',
fn: function (anUser, aPassword, aSuccessBlock, anErrorBlock) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["_id", anUser]);
    smalltalk.send(mongo, "_find_criteria_do_", ["users", smalltalk.send(crit, "_asJSONString", []), function (err, docs) {return ($receiver = ($receiver = smalltalk.send(docs, "_size", [])).klass === smalltalk.Number ? $receiver > 0 : smalltalk.send($receiver, "__gt", [0])).klass === smalltalk.Boolean ? $receiver ? function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["password"]), "__eq", [aPassword]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", ["wrong Password"]);}]);}() : function () {return smalltalk.send(anErrorBlock, "_value_", ["Unknown user."]);}() : smalltalk.send($receiver, "_ifTrue_ifFalse_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["password"]), "__eq", [aPassword]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", ["wrong Password"]);}]);}, function () {return smalltalk.send(anErrorBlock, "_value_", ["Unknown user."]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_checkOwner_user_onSuccess_onError_',
smalltalk.method({
selector: 'checkOwner:user:onSuccess:onError:',
fn: function (aPackage, anUser, aSuccessBlock, anErrorBlock) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    var omit = nil;
    var sort = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["packageName", aPackage]);
    omit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(omit, "_at_put_", ["st", 0]);
    smalltalk.send(omit, "_at_put_", ["js", 0]);
    smalltalk.send(omit, "_at_put_", ["jsdeploy", 0]);
    sort = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(mongo, "_find_criteria_omit_sort_do_", ["packages", crit, omit, sort, function (err, docs) {return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(docs, "_size", []), "__eq", [0]), "_or_", [function () {return smalltalk.send(smalltalk.send(smalltalk.send(docs, "_first", []), "_at_", ["user"]), "__eq", [anUser]);}]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", ["Your not the owner of this package"]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);

smalltalk.addMethod(
'_checkVersion_version_onSuccess_onError_',
smalltalk.method({
selector: 'checkVersion:version:onSuccess:onError:',
fn: function (aPackage, version, aSuccessBlock, anErrorBlock) {
    var self = this;
    var err = nil;
    var mongo = nil;
    var crit = nil;
    var omit = nil;
    var sort = nil;
    mongo = smalltalk.send(smalltalk.MongoDB || MongoDB, "_new", []);
    crit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(crit, "_at_put_", ["packageName", aPackage]);
    smalltalk.send(crit, "_at_put_", ["packageMeta.version", version]);
    omit = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(omit, "_at_put_", ["st", 0]);
    smalltalk.send(omit, "_at_put_", ["js", 0]);
    smalltalk.send(omit, "_at_put_", ["jsdeploy", 0]);
    sort = smalltalk.send(smalltalk.Dictionary || Dictionary, "_new", []);
    smalltalk.send(mongo, "_find_criteria_omit_sort_do_", ["packages", crit, omit, sort, function (err, docs) {return smalltalk.send(smalltalk.send(smalltalk.send(docs, "_size", []), "__eq", [0]), "_ifTrue_ifFalse_", [aSuccessBlock, function () {return smalltalk.send(anErrorBlock, "_value_", [unescape("there%20is%20already%20a%20package%20with%20the%20same%20version-number")]);}]);}]);
    return self;
}
}),
smalltalk.FileServer);


smalltalk.FileServer.klass.iVarNames = ['port','mimeTypes'];
smalltalk.addMethod(
'_port',
smalltalk.method({
selector: 'port',
fn: function () {
    var self = this;
    return ($receiver = self['@port']) == nil || $receiver == undefined ? function () {return 4000;}() : $receiver;
    return self;
}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_port_',
smalltalk.method({
selector: 'port:',
fn: function (aNumber) {
    var self = this;
    self['@port'] = aNumber;
    return self;
}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_defaultMimeTypes',
smalltalk.method({
selector: 'defaultMimeTypes',
fn: function () {
    var self = this;
    return smalltalk.Dictionary._fromPairs_([smalltalk.send(unescape("%25"), "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("323", "__minus_gt", [unescape("text/h323")]), smalltalk.send("abw", "__minus_gt", [unescape("application/x-abiword")]), smalltalk.send("ai", "__minus_gt", [unescape("application/postscript")]), smalltalk.send("aif", "__minus_gt", [unescape("audio/x-aiff")]), smalltalk.send("aifc", "__minus_gt", [unescape("audio/x-aiff")]), smalltalk.send("aiff", "__minus_gt", [unescape("audio/x-aiff")]), smalltalk.send("alc", "__minus_gt", [unescape("chemical/x-alchemy")]), smalltalk.send("art", "__minus_gt", [unescape("image/x-jg")]), smalltalk.send("asc", "__minus_gt", [unescape("text/plain")]), smalltalk.send("asf", "__minus_gt", [unescape("video/x-ms-asf")]), smalltalk.send("asn", "__minus_gt", [unescape("chemical/x-ncbi-asn1-spec")]), smalltalk.send("aso", "__minus_gt", [unescape("chemical/x-ncbi-asn1-binary")]), smalltalk.send("asx", "__minus_gt", [unescape("video/x-ms-asf")]), smalltalk.send("au", "__minus_gt", [unescape("audio/basic")]), smalltalk.send("avi", "__minus_gt", [unescape("video/x-msvideo")]), smalltalk.send("b", "__minus_gt", [unescape("chemical/x-molconn-Z")]), smalltalk.send("bak", "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("bat", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("bcpio", "__minus_gt", [unescape("application/x-bcpio")]), smalltalk.send("bib", "__minus_gt", [unescape("text/x-bibtex")]), smalltalk.send("bin", "__minus_gt", [unescape("application/octet-stream")]), smalltalk.send("bmp", "__minus_gt", [unescape("image/x-ms-bmp")]), smalltalk.send("book", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("bsd", "__minus_gt", [unescape("chemical/x-crossfire")]), smalltalk.send("c", "__minus_gt", [unescape("text/x-csrc")]), smalltalk.send(unescape("c++"), "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("c3d", "__minus_gt", [unescape("chemical/x-chem3d")]), smalltalk.send("cac", "__minus_gt", [unescape("chemical/x-cache")]), smalltalk.send("cache", "__minus_gt", [unescape("chemical/x-cache")]), smalltalk.send("cascii", "__minus_gt", [unescape("chemical/x-cactvs-binary")]), smalltalk.send("cat", "__minus_gt", [unescape("application/vnd.ms-pki.seccat")]), smalltalk.send("cbin", "__minus_gt", [unescape("chemical/x-cactvs-binary")]), smalltalk.send("cc", "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("cdf", "__minus_gt", [unescape("application/x-cdf")]), smalltalk.send("cdr", "__minus_gt", [unescape("image/x-coreldraw")]), smalltalk.send("cdt", "__minus_gt", [unescape("image/x-coreldrawtemplate")]), smalltalk.send("cdx", "__minus_gt", [unescape("chemical/x-cdx")]), smalltalk.send("cdy", "__minus_gt", [unescape("application/vnd.cinderella")]), smalltalk.send("cef", "__minus_gt", [unescape("chemical/x-cxf")]), smalltalk.send("cer", "__minus_gt", [unescape("chemical/x-cerius")]), smalltalk.send("chm", "__minus_gt", [unescape("chemical/x-chemdraw")]), smalltalk.send("chrt", "__minus_gt", [unescape("application/x-kchart")]), smalltalk.send("cif", "__minus_gt", [unescape("chemical/x-cif")]), smalltalk.send("class", "__minus_gt", [unescape("application/java-vm")]), smalltalk.send("cls", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("cmdf", "__minus_gt", [unescape("chemical/x-cmdf")]), smalltalk.send("cml", "__minus_gt", [unescape("chemical/x-cml")]), smalltalk.send("cod", "__minus_gt", [unescape("application/vnd.rim.cod")]), smalltalk.send("com", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("cpa", "__minus_gt", [unescape("chemical/x-compass")]), smalltalk.send("cpio", "__minus_gt", [unescape("application/x-cpio")]), smalltalk.send("cpp", "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("cpt", "__minus_gt", [unescape("image/x-corelphotopaint")]), smalltalk.send("crl", "__minus_gt", [unescape("application/x-pkcs7-crl")]), smalltalk.send("crt", "__minus_gt", [unescape("application/x-x509-ca-cert")]), smalltalk.send("csf", "__minus_gt", [unescape("chemical/x-cache-csf")]), smalltalk.send("csh", "__minus_gt", [unescape("text/x-csh")]), smalltalk.send("csm", "__minus_gt", [unescape("chemical/x-csml")]), smalltalk.send("csml", "__minus_gt", [unescape("chemical/x-csml")]), smalltalk.send("css", "__minus_gt", [unescape("text/css")]), smalltalk.send("csv", "__minus_gt", [unescape("text/comma-separated-values")]), smalltalk.send("ctab", "__minus_gt", [unescape("chemical/x-cactvs-binary")]), smalltalk.send("ctx", "__minus_gt", [unescape("chemical/x-ctx")]), smalltalk.send("cu", "__minus_gt", [unescape("application/cu-seeme")]), smalltalk.send("cub", "__minus_gt", [unescape("chemical/x-gaussian-cube")]), smalltalk.send("cxf", "__minus_gt", [unescape("chemical/x-cxf")]), smalltalk.send("cxx", "__minus_gt", [unescape("text/x-c++src")]), smalltalk.send("dat", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("dcr", "__minus_gt", [unescape("application/x-director")]), smalltalk.send("deb", "__minus_gt", [unescape("application/x-debian-package")]), smalltalk.send("dif", "__minus_gt", [unescape("video/dv")]), smalltalk.send("diff", "__minus_gt", [unescape("text/plain")]), smalltalk.send("dir", "__minus_gt", [unescape("application/x-director")]), smalltalk.send("djv", "__minus_gt", [unescape("image/vnd.djvu")]), smalltalk.send("djvu", "__minus_gt", [unescape("image/vnd.djvu")]), smalltalk.send("dl", "__minus_gt", [unescape("video/dl")]), smalltalk.send("dll", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("dmg", "__minus_gt", [unescape("application/x-apple-diskimage")]), smalltalk.send("dms", "__minus_gt", [unescape("application/x-dms")]), smalltalk.send("doc", "__minus_gt", [unescape("application/msword")]), smalltalk.send("dot", "__minus_gt", [unescape("application/msword")]), smalltalk.send("dv", "__minus_gt", [unescape("video/dv")]), smalltalk.send("dvi", "__minus_gt", [unescape("application/x-dvi")]), smalltalk.send("dx", "__minus_gt", [unescape("chemical/x-jcamp-dx")]), smalltalk.send("dxr", "__minus_gt", [unescape("application/x-director")]), smalltalk.send("emb", "__minus_gt", [unescape("chemical/x-embl-dl-nucleotide")]), smalltalk.send("embl", "__minus_gt", [unescape("chemical/x-embl-dl-nucleotide")]), smalltalk.send("ent", "__minus_gt", [unescape("chemical/x-pdb")]), smalltalk.send("eps", "__minus_gt", [unescape("application/postscript")]), smalltalk.send("etx", "__minus_gt", [unescape("text/x-setext")]), smalltalk.send("exe", "__minus_gt", [unescape("application/x-msdos-program")]), smalltalk.send("ez", "__minus_gt", [unescape("application/andrew-inset")]), smalltalk.send("fb", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("fbdoc", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("fch", "__minus_gt", [unescape("chemical/x-gaussian-checkpoint")]), smalltalk.send("fchk", "__minus_gt", [unescape("chemical/x-gaussian-checkpoint")]), smalltalk.send("fig", "__minus_gt", [unescape("application/x-xfig")]), smalltalk.send("flac", "__minus_gt", [unescape("application/x-flac")]), smalltalk.send("fli", "__minus_gt", [unescape("video/fli")]), smalltalk.send("fm", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("frame", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("frm", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("gal", "__minus_gt", [unescape("chemical/x-gaussian-log")]), smalltalk.send("gam", "__minus_gt", [unescape("chemical/x-gamess-input")]), smalltalk.send("gamin", "__minus_gt", [unescape("chemical/x-gamess-input")]), smalltalk.send("gau", "__minus_gt", [unescape("chemical/x-gaussian-input")]), smalltalk.send("gcd", "__minus_gt", [unescape("text/x-pcs-gcd")]), smalltalk.send("gcf", "__minus_gt", [unescape("application/x-graphing-calculator")]), smalltalk.send("gcg", "__minus_gt", [unescape("chemical/x-gcg8-sequence")]), smalltalk.send("gen", "__minus_gt", [unescape("chemical/x-genbank")]), smalltalk.send("gf", "__minus_gt", [unescape("application/x-tex-gf")]), smalltalk.send("gif", "__minus_gt", [unescape("image/gif")]), smalltalk.send("gjc", "__minus_gt", [unescape("chemical/x-gaussian-input")]), smalltalk.send("gjf", "__minus_gt", [unescape("chemical/x-gaussian-input")]), smalltalk.send("gl", "__minus_gt", [unescape("video/gl")]), smalltalk.send("gnumeric", "__minus_gt", [unescape("application/x-gnumeric")]), smalltalk.send("gpt", "__minus_gt", [unescape("chemical/x-mopac-graph")]), smalltalk.send("gsf", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("gsm", "__minus_gt", [unescape("audio/x-gsm")]), smalltalk.send("gtar", "__minus_gt", [unescape("application/x-gtar")]), smalltalk.send("h", "__minus_gt", [unescape("text/x-chdr")]), smalltalk.send(unescape("h++"), "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("hdf", "__minus_gt", [unescape("application/x-hdf")]), smalltalk.send("hh", "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("hin", "__minus_gt", [unescape("chemical/x-hin")]), smalltalk.send("hpp", "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("hqx", "__minus_gt", [unescape("application/mac-binhex40")]), smalltalk.send("hs", "__minus_gt", [unescape("text/x-haskell")]), smalltalk.send("hta", "__minus_gt", [unescape("application/hta")]), smalltalk.send("htc", "__minus_gt", [unescape("text/x-component")]), smalltalk.send("htm", "__minus_gt", [unescape("text/html")]), smalltalk.send("html", "__minus_gt", [unescape("text/html")]), smalltalk.send("hxx", "__minus_gt", [unescape("text/x-c++hdr")]), smalltalk.send("ica", "__minus_gt", [unescape("application/x-ica")]), smalltalk.send("ice", "__minus_gt", [unescape("x-conference/x-cooltalk")]), smalltalk.send("ico", "__minus_gt", [unescape("image/x-icon")]), smalltalk.send("ics", "__minus_gt", [unescape("text/calendar")]), smalltalk.send("icz", "__minus_gt", [unescape("text/calendar")]), smalltalk.send("ief", "__minus_gt", [unescape("image/ief")]), smalltalk.send("iges", "__minus_gt", [unescape("model/iges")]), smalltalk.send("igs", "__minus_gt", [unescape("model/iges")]), smalltalk.send("iii", "__minus_gt", [unescape("application/x-iphone")]), smalltalk.send("inp", "__minus_gt", [unescape("chemical/x-gamess-input")]), smalltalk.send("ins", "__minus_gt", [unescape("application/x-internet-signup")]), smalltalk.send("iso", "__minus_gt", [unescape("application/x-iso9660-image")]), smalltalk.send("isp", "__minus_gt", [unescape("application/x-internet-signup")]), smalltalk.send("ist", "__minus_gt", [unescape("chemical/x-isostar")]), smalltalk.send("istr", "__minus_gt", [unescape("chemical/x-isostar")]), smalltalk.send("jad", "__minus_gt", [unescape("text/vnd.sun.j2me.app-descriptor")]), smalltalk.send("jar", "__minus_gt", [unescape("application/java-archive")]), smalltalk.send("java", "__minus_gt", [unescape("text/x-java")]), smalltalk.send("jdx", "__minus_gt", [unescape("chemical/x-jcamp-dx")]), smalltalk.send("jmz", "__minus_gt", [unescape("application/x-jmol")]), smalltalk.send("jng", "__minus_gt", [unescape("image/x-jng")]), smalltalk.send("jnlp", "__minus_gt", [unescape("application/x-java-jnlp-file")]), smalltalk.send("jpe", "__minus_gt", [unescape("image/jpeg")]), smalltalk.send("jpeg", "__minus_gt", [unescape("image/jpeg")]), smalltalk.send("jpg", "__minus_gt", [unescape("image/jpeg")]), smalltalk.send("js", "__minus_gt", [unescape("application/javascript")]), smalltalk.send("kar", "__minus_gt", [unescape("audio/midi")]), smalltalk.send("key", "__minus_gt", [unescape("application/pgp-keys")]), smalltalk.send("kil", "__minus_gt", [unescape("application/x-killustrator")]), smalltalk.send("kin", "__minus_gt", [unescape("chemical/x-kinemage")]), smalltalk.send("kpr", "__minus_gt", [unescape("application/x-kpresenter")]), smalltalk.send("kpt", "__minus_gt", [unescape("application/x-kpresenter")]), smalltalk.send("ksp", "__minus_gt", [unescape("application/x-kspread")]), smalltalk.send("kwd", "__minus_gt", [unescape("application/x-kword")]), smalltalk.send("kwt", "__minus_gt", [unescape("application/x-kword")]), smalltalk.send("latex", "__minus_gt", [unescape("application/x-latex")]), smalltalk.send("lha", "__minus_gt", [unescape("application/x-lha")]), smalltalk.send("lhs", "__minus_gt", [unescape("text/x-literate-haskell")]), smalltalk.send("lsf", "__minus_gt", [unescape("video/x-la-asf")]), smalltalk.send("lsx", "__minus_gt", [unescape("video/x-la-asf")]), smalltalk.send("ltx", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("lzh", "__minus_gt", [unescape("application/x-lzh")]), smalltalk.send("lzx", "__minus_gt", [unescape("application/x-lzx")]), smalltalk.send("m3u", "__minus_gt", [unescape("audio/x-mpegurl")]), smalltalk.send("m4a", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("maker", "__minus_gt", [unescape("application/x-maker")]), smalltalk.send("man", "__minus_gt", [unescape("application/x-troff-man")]), smalltalk.send("mcif", "__minus_gt", [unescape("chemical/x-mmcif")]), smalltalk.send("mcm", "__minus_gt", [unescape("chemical/x-macmolecule")]), smalltalk.send("mdb", "__minus_gt", [unescape("application/msaccess")]), smalltalk.send("me", "__minus_gt", [unescape("application/x-troff-me")]), smalltalk.send("mesh", "__minus_gt", [unescape("model/mesh")]), smalltalk.send("mid", "__minus_gt", [unescape("audio/midi")]), smalltalk.send("midi", "__minus_gt", [unescape("audio/midi")]), smalltalk.send("mif", "__minus_gt", [unescape("application/x-mif")]), smalltalk.send("mm", "__minus_gt", [unescape("application/x-freemind")]), smalltalk.send("mmd", "__minus_gt", [unescape("chemical/x-macromodel-input")]), smalltalk.send("mmf", "__minus_gt", [unescape("application/vnd.smaf")]), smalltalk.send("mml", "__minus_gt", [unescape("text/mathml")]), smalltalk.send("mmod", "__minus_gt", [unescape("chemical/x-macromodel-input")]), smalltalk.send("mng", "__minus_gt", [unescape("video/x-mng")]), smalltalk.send("moc", "__minus_gt", [unescape("text/x-moc")]), smalltalk.send("mol", "__minus_gt", [unescape("chemical/x-mdl-molfile")]), smalltalk.send("mol2", "__minus_gt", [unescape("chemical/x-mol2")]), smalltalk.send("moo", "__minus_gt", [unescape("chemical/x-mopac-out")]), smalltalk.send("mop", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("mopcrt", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("mov", "__minus_gt", [unescape("video/quicktime")]), smalltalk.send("movie", "__minus_gt", [unescape("video/x-sgi-movie")]), smalltalk.send("mp2", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("mp3", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("mp4", "__minus_gt", [unescape("video/mp4")]), smalltalk.send("mpc", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send("mpe", "__minus_gt", [unescape("video/mpeg")]), smalltalk.send("mpeg", "__minus_gt", [unescape("video/mpeg")]), smalltalk.send("mpega", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("mpg", "__minus_gt", [unescape("video/mpeg")]), smalltalk.send("mpga", "__minus_gt", [unescape("audio/mpeg")]), smalltalk.send("ms", "__minus_gt", [unescape("application/x-troff-ms")]), smalltalk.send("msh", "__minus_gt", [unescape("model/mesh")]), smalltalk.send("msi", "__minus_gt", [unescape("application/x-msi")]), smalltalk.send("mvb", "__minus_gt", [unescape("chemical/x-mopac-vib")]), smalltalk.send("mxu", "__minus_gt", [unescape("video/vnd.mpegurl")]), smalltalk.send("nb", "__minus_gt", [unescape("application/mathematica")]), smalltalk.send("nc", "__minus_gt", [unescape("application/x-netcdf")]), smalltalk.send("nwc", "__minus_gt", [unescape("application/x-nwc")]), smalltalk.send("o", "__minus_gt", [unescape("application/x-object")]), smalltalk.send("oda", "__minus_gt", [unescape("application/oda")]), smalltalk.send("odb", "__minus_gt", [unescape("application/vnd.oasis.opendocument.database")]), smalltalk.send("odc", "__minus_gt", [unescape("application/vnd.oasis.opendocument.chart")]), smalltalk.send("odf", "__minus_gt", [unescape("application/vnd.oasis.opendocument.formula")]), smalltalk.send("odg", "__minus_gt", [unescape("application/vnd.oasis.opendocument.graphics")]), smalltalk.send("odi", "__minus_gt", [unescape("application/vnd.oasis.opendocument.image")]), smalltalk.send("odm", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text-master")]), smalltalk.send("odp", "__minus_gt", [unescape("application/vnd.oasis.opendocument.presentation")]), smalltalk.send("ods", "__minus_gt", [unescape("application/vnd.oasis.opendocument.spreadsheet")]), smalltalk.send("odt", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text")]), smalltalk.send("ogg", "__minus_gt", [unescape("application/ogg")]), smalltalk.send("old", "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("oth", "__minus_gt", [unescape("application/vnd.oasis.opendocument.text-web")]), smalltalk.send("oza", "__minus_gt", [unescape("application/x-oz-application")]), smalltalk.send("p", "__minus_gt", [unescape("text/x-pascal")]), smalltalk.send("p7r", "__minus_gt", [unescape("application/x-pkcs7-certreqresp")]), smalltalk.send("pac", "__minus_gt", [unescape("application/x-ns-proxy-autoconfig")]), smalltalk.send("pas", "__minus_gt", [unescape("text/x-pascal")]), smalltalk.send("pat", "__minus_gt", [unescape("image/x-coreldrawpattern")]), smalltalk.send("pbm", "__minus_gt", [unescape("image/x-portable-bitmap")]), smalltalk.send("pcf", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pcf.Z", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pcx", "__minus_gt", [unescape("image/pcx")]), smalltalk.send("pdb", "__minus_gt", [unescape("chemical/x-pdb")]), smalltalk.send("pdf", "__minus_gt", [unescape("application/pdf")]), smalltalk.send("pfa", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pfb", "__minus_gt", [unescape("application/x-font")]), smalltalk.send("pgm", "__minus_gt", [unescape("image/x-portable-graymap")]), smalltalk.send("pgn", "__minus_gt", [unescape("application/x-chess-pgn")]), smalltalk.send("pgp", "__minus_gt", [unescape("application/pgp-signature")]), smalltalk.send("pk", "__minus_gt", [unescape("application/x-tex-pk")]), smalltalk.send("pl", "__minus_gt", [unescape("text/x-perl")]), smalltalk.send("pls", "__minus_gt", [unescape("audio/x-scpls")]), smalltalk.send("pm", "__minus_gt", [unescape("text/x-perl")]), smalltalk.send("png", "__minus_gt", [unescape("image/png")]), smalltalk.send("pnm", "__minus_gt", [unescape("image/x-portable-anymap")]), smalltalk.send("pot", "__minus_gt", [unescape("text/plain")]), smalltalk.send("ppm", "__minus_gt", [unescape("image/x-portable-pixmap")]), smalltalk.send("pps", "__minus_gt", [unescape("application/vnd.ms-powerpoint")]), smalltalk.send("ppt", "__minus_gt", [unescape("application/vnd.ms-powerpoint")]), smalltalk.send("prf", "__minus_gt", [unescape("application/pics-rules")]), smalltalk.send("prt", "__minus_gt", [unescape("chemical/x-ncbi-asn1-ascii")]), smalltalk.send("ps", "__minus_gt", [unescape("application/postscript")]), smalltalk.send("psd", "__minus_gt", [unescape("image/x-photoshop")]), smalltalk.send("psp", "__minus_gt", [unescape("text/x-psp")]), smalltalk.send("py", "__minus_gt", [unescape("text/x-python")]), smalltalk.send("pyc", "__minus_gt", [unescape("application/x-python-code")]), smalltalk.send("pyo", "__minus_gt", [unescape("application/x-python-code")]), smalltalk.send("qt", "__minus_gt", [unescape("video/quicktime")]), smalltalk.send("qtl", "__minus_gt", [unescape("application/x-quicktimeplayer")]), smalltalk.send("ra", "__minus_gt", [unescape("audio/x-realaudio")]), smalltalk.send("ram", "__minus_gt", [unescape("audio/x-pn-realaudio")]), smalltalk.send("rar", "__minus_gt", [unescape("application/rar")]), smalltalk.send("ras", "__minus_gt", [unescape("image/x-cmu-raster")]), smalltalk.send("rd", "__minus_gt", [unescape("chemical/x-mdl-rdfile")]), smalltalk.send("rdf", "__minus_gt", [unescape("application/rdf+xml")]), smalltalk.send("rgb", "__minus_gt", [unescape("image/x-rgb")]), smalltalk.send("rm", "__minus_gt", [unescape("audio/x-pn-realaudio")]), smalltalk.send("roff", "__minus_gt", [unescape("application/x-troff")]), smalltalk.send("ros", "__minus_gt", [unescape("chemical/x-rosdal")]), smalltalk.send("rpm", "__minus_gt", [unescape("application/x-redhat-package-manager")]), smalltalk.send("rss", "__minus_gt", [unescape("application/rss+xml")]), smalltalk.send("rtf", "__minus_gt", [unescape("text/rtf")]), smalltalk.send("rtx", "__minus_gt", [unescape("text/richtext")]), smalltalk.send("rxn", "__minus_gt", [unescape("chemical/x-mdl-rxnfile")]), smalltalk.send("sct", "__minus_gt", [unescape("text/scriptlet")]), smalltalk.send("sd", "__minus_gt", [unescape("chemical/x-mdl-sdfile")]), smalltalk.send("sd2", "__minus_gt", [unescape("audio/x-sd2")]), smalltalk.send("sda", "__minus_gt", [unescape("application/vnd.stardivision.draw")]), smalltalk.send("sdc", "__minus_gt", [unescape("application/vnd.stardivision.calc")]), smalltalk.send("sdd", "__minus_gt", [unescape("application/vnd.stardivision.impress")]), smalltalk.send("sdf", "__minus_gt", [unescape("chemical/x-mdl-sdfile")]), smalltalk.send("sdp", "__minus_gt", [unescape("application/vnd.stardivision.impress")]), smalltalk.send("sdw", "__minus_gt", [unescape("application/vnd.stardivision.writer")]), smalltalk.send("ser", "__minus_gt", [unescape("application/java-serialized-object")]), smalltalk.send("sgf", "__minus_gt", [unescape("application/x-go-sgf")]), smalltalk.send("sgl", "__minus_gt", [unescape("application/vnd.stardivision.writer-global")]), smalltalk.send("sh", "__minus_gt", [unescape("text/x-sh")]), smalltalk.send("shar", "__minus_gt", [unescape("application/x-shar")]), smalltalk.send("shtml", "__minus_gt", [unescape("text/html")]), smalltalk.send("sid", "__minus_gt", [unescape("audio/prs.sid")]), smalltalk.send("sik", "__minus_gt", [unescape("application/x-trash")]), smalltalk.send("silo", "__minus_gt", [unescape("model/mesh")]), smalltalk.send("sis", "__minus_gt", [unescape("application/vnd.symbian.install")]), smalltalk.send("sit", "__minus_gt", [unescape("application/x-stuffit")]), smalltalk.send("skd", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("skm", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("skp", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("skt", "__minus_gt", [unescape("application/x-koan")]), smalltalk.send("smf", "__minus_gt", [unescape("application/vnd.stardivision.math")]), smalltalk.send("smi", "__minus_gt", [unescape("application/smil")]), smalltalk.send("smil", "__minus_gt", [unescape("application/smil")]), smalltalk.send("snd", "__minus_gt", [unescape("audio/basic")]), smalltalk.send("spc", "__minus_gt", [unescape("chemical/x-galactic-spc")]), smalltalk.send("spl", "__minus_gt", [unescape("application/x-futuresplash")]), smalltalk.send("src", "__minus_gt", [unescape("application/x-wais-source")]), smalltalk.send("stc", "__minus_gt", [unescape("application/vnd.sun.xml.calc.template")]), smalltalk.send("std", "__minus_gt", [unescape("application/vnd.sun.xml.draw.template")]), smalltalk.send("sti", "__minus_gt", [unescape("application/vnd.sun.xml.impress.template")]), smalltalk.send("stl", "__minus_gt", [unescape("application/vnd.ms-pki.stl")]), smalltalk.send("stw", "__minus_gt", [unescape("application/vnd.sun.xml.writer.template")]), smalltalk.send("sty", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("sv4cpio", "__minus_gt", [unescape("application/x-sv4cpio")]), smalltalk.send("sv4crc", "__minus_gt", [unescape("application/x-sv4crc")]), smalltalk.send("svg", "__minus_gt", [unescape("image/svg+xml")]), smalltalk.send("svgz", "__minus_gt", [unescape("image/svg+xml")]), smalltalk.send("sw", "__minus_gt", [unescape("chemical/x-swissprot")]), smalltalk.send("swf", "__minus_gt", [unescape("application/x-shockwave-flash")]), smalltalk.send("swfl", "__minus_gt", [unescape("application/x-shockwave-flash")]), smalltalk.send("sxc", "__minus_gt", [unescape("application/vnd.sun.xml.calc")]), smalltalk.send("sxd", "__minus_gt", [unescape("application/vnd.sun.xml.draw")]), smalltalk.send("sxg", "__minus_gt", [unescape("application/vnd.sun.xml.writer.global")]), smalltalk.send("sxi", "__minus_gt", [unescape("application/vnd.sun.xml.impress")]), smalltalk.send("sxm", "__minus_gt", [unescape("application/vnd.sun.xml.math")]), smalltalk.send("sxw", "__minus_gt", [unescape("application/vnd.sun.xml.writer")]), smalltalk.send("t", "__minus_gt", [unescape("application/x-troff")]), smalltalk.send("tar", "__minus_gt", [unescape("application/x-tar")]), smalltalk.send("taz", "__minus_gt", [unescape("application/x-gtar")]), smalltalk.send("tcl", "__minus_gt", [unescape("text/x-tcl")]), smalltalk.send("tex", "__minus_gt", [unescape("text/x-tex")]), smalltalk.send("texi", "__minus_gt", [unescape("application/x-texinfo")]), smalltalk.send("texinfo", "__minus_gt", [unescape("application/x-texinfo")]), smalltalk.send("text", "__minus_gt", [unescape("text/plain")]), smalltalk.send("tgf", "__minus_gt", [unescape("chemical/x-mdl-tgf")]), smalltalk.send("tgz", "__minus_gt", [unescape("application/x-gtar")]), smalltalk.send("tif", "__minus_gt", [unescape("image/tiff")]), smalltalk.send("tiff", "__minus_gt", [unescape("image/tiff")]), smalltalk.send("tk", "__minus_gt", [unescape("text/x-tcl")]), smalltalk.send("tm", "__minus_gt", [unescape("text/texmacs")]), smalltalk.send("torrent", "__minus_gt", [unescape("application/x-bittorrent")]), smalltalk.send("tr", "__minus_gt", [unescape("application/x-troff")]), smalltalk.send("ts", "__minus_gt", [unescape("text/texmacs")]), smalltalk.send("tsp", "__minus_gt", [unescape("application/dsptype")]), smalltalk.send("tsv", "__minus_gt", [unescape("text/tab-separated-values")]), smalltalk.send("txt", "__minus_gt", [unescape("text/plain")]), smalltalk.send("udeb", "__minus_gt", [unescape("application/x-debian-package")]), smalltalk.send("uls", "__minus_gt", [unescape("text/iuls")]), smalltalk.send("ustar", "__minus_gt", [unescape("application/x-ustar")]), smalltalk.send("val", "__minus_gt", [unescape("chemical/x-ncbi-asn1-binary")]), smalltalk.send("vcd", "__minus_gt", [unescape("application/x-cdlink")]), smalltalk.send("vcf", "__minus_gt", [unescape("text/x-vcard")]), smalltalk.send("vcs", "__minus_gt", [unescape("text/x-vcalendar")]), smalltalk.send("vmd", "__minus_gt", [unescape("chemical/x-vmd")]), smalltalk.send("vms", "__minus_gt", [unescape("chemical/x-vamas-iso14976")]), smalltalk.send("vor", "__minus_gt", [unescape("application/vnd.stardivision.writer")]), smalltalk.send("vrm", "__minus_gt", [unescape("x-world/x-vrml")]), smalltalk.send("vrml", "__minus_gt", [unescape("x-world/x-vrml")]), smalltalk.send("vsd", "__minus_gt", [unescape("application/vnd.visio")]), smalltalk.send("wad", "__minus_gt", [unescape("application/x-doom")]), smalltalk.send("wav", "__minus_gt", [unescape("audio/x-wav")]), smalltalk.send("wax", "__minus_gt", [unescape("audio/x-ms-wax")]), smalltalk.send("wbmp", "__minus_gt", [unescape("image/vnd.wap.wbmp")]), smalltalk.send("wbxml", "__minus_gt", [unescape("application/vnd.wap.wbxml")]), smalltalk.send("wk", "__minus_gt", [unescape("application/x-123")]), smalltalk.send("wm", "__minus_gt", [unescape("video/x-ms-wm")]), smalltalk.send("wma", "__minus_gt", [unescape("audio/x-ms-wma")]), smalltalk.send("wmd", "__minus_gt", [unescape("application/x-ms-wmd")]), smalltalk.send("wml", "__minus_gt", [unescape("text/vnd.wap.wml")]), smalltalk.send("wmlc", "__minus_gt", [unescape("application/vnd.wap.wmlc")]), smalltalk.send("wmls", "__minus_gt", [unescape("text/vnd.wap.wmlscript")]), smalltalk.send("wmlsc", "__minus_gt", [unescape("application/vnd.wap.wmlscriptc")]), smalltalk.send("wmv", "__minus_gt", [unescape("video/x-ms-wmv")]), smalltalk.send("wmx", "__minus_gt", [unescape("video/x-ms-wmx")]), smalltalk.send("wmz", "__minus_gt", [unescape("application/x-ms-wmz")]), smalltalk.send("wp5", "__minus_gt", [unescape("application/wordperfect5.1")]), smalltalk.send("wpd", "__minus_gt", [unescape("application/wordperfect")]), smalltalk.send("wrl", "__minus_gt", [unescape("x-world/x-vrml")]), smalltalk.send("wsc", "__minus_gt", [unescape("text/scriptlet")]), smalltalk.send("wvx", "__minus_gt", [unescape("video/x-ms-wvx")]), smalltalk.send("wz", "__minus_gt", [unescape("application/x-wingz")]), smalltalk.send("xbm", "__minus_gt", [unescape("image/x-xbitmap")]), smalltalk.send("xcf", "__minus_gt", [unescape("application/x-xcf")]), smalltalk.send("xht", "__minus_gt", [unescape("application/xhtml+xml")]), smalltalk.send("xhtml", "__minus_gt", [unescape("application/xhtml+xml")]), smalltalk.send("xlb", "__minus_gt", [unescape("application/vnd.ms-excel")]), smalltalk.send("xls", "__minus_gt", [unescape("application/vnd.ms-excel")]), smalltalk.send("xlt", "__minus_gt", [unescape("application/vnd.ms-excel")]), smalltalk.send("xml", "__minus_gt", [unescape("application/xml")]), smalltalk.send("xpi", "__minus_gt", [unescape("application/x-xpinstall")]), smalltalk.send("xpm", "__minus_gt", [unescape("image/x-xpixmap")]), smalltalk.send("xsl", "__minus_gt", [unescape("application/xml")]), smalltalk.send("xtel", "__minus_gt", [unescape("chemical/x-xtel")]), smalltalk.send("xul", "__minus_gt", [unescape("application/vnd.mozilla.xul+xml")]), smalltalk.send("xwd", "__minus_gt", [unescape("image/x-xwindowdump")]), smalltalk.send("xyz", "__minus_gt", [unescape("chemical/x-xyz")]), smalltalk.send("zip", "__minus_gt", [unescape("application/zip")]), smalltalk.send("zmt", "__minus_gt", [unescape("chemical/x-mopac-input")]), smalltalk.send(unescape("%7E"), "__minus_gt", [unescape("application/x-trash")])]);
    return self;
}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_mimeTypes',
smalltalk.method({
selector: 'mimeTypes',
fn: function () {
    var self = this;
    return ($receiver = self['@mimeTypes']) == nil || $receiver == undefined ? function () {return self['@mimeTypes'] = smalltalk.send(self, "_defaultMimeTypes", []);}() : $receiver;
    return self;
}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_mimeTypeFor_',
smalltalk.method({
selector: 'mimeTypeFor:',
fn: function (aString) {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_mimeTypes", []), "_at_ifAbsent_", [smalltalk.send(aString, "_replace_with_", [unescape(".*%5B%5C.%5D"), ""]), function () {return unescape("text/plain");}]);
    return self;
}
}),
smalltalk.FileServer.klass);

smalltalk.addMethod(
'_main',
smalltalk.method({
selector: 'main',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.send(self, "_new", []), "_startOn_", [smalltalk.send(self, "_port", [])]);
    return self;
}
}),
smalltalk.FileServer.klass);


smalltalk.addClass('MongoDB', smalltalk.Object, ['path', 'http', 'fs', 'sys', 'url', 'db', 'server', 'host', 'port'], 'FileServer');
smalltalk.addMethod(
'_initialize',
smalltalk.method({
selector: 'initialize',
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
}
}),
smalltalk.MongoDB);

smalltalk.addMethod(
'_require_',
smalltalk.method({
selector: 'require:',
fn: function (aModuleString) {
    var self = this;
    return smalltalk.send(typeof require == "undefined" ? nil : require, "_value_", [aModuleString]);
    return self;
}
}),
smalltalk.MongoDB);

smalltalk.addMethod(
'_insert_document_',
smalltalk.method({
selector: 'insert:document:',
fn: function (collectionName, aDict) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    var mongodb = require("mongodb");
    var server = new mongodb.Server(myHost, myPort, {});
    (new mongodb.Db("test", server, {})).open(function (error, client) {var collection = new mongodb.Collection(client, collectionName);collection.insert(aDict, {safe: true}, function (err, objects) {if (err) {console.warn(err.message);}});});
    return self;
}
}),
smalltalk.MongoDB);

smalltalk.addMethod(
'_find_criteria_omit_sort_do_',
smalltalk.method({
selector: 'find:criteria:omit:sort:do:',
fn: function (collectionName, aCriteriaDict, anOmitDict, aSortDict, aBlock) {
    var self = this;
    var myHost = nil;
    var myPort = nil;
    var critJson = nil;
    var sortJson = nil;
    var omitJson = nil;
    var o = nil;
    myHost = self['@host'];
    myPort = self['@port'];
    critJson = smalltalk.send(self, "_toJSON_", [aCriteriaDict]);
    omitJson = smalltalk.send(self, "_toJSON_", [anOmitDict]);
    sortJson = smalltalk.send(self, "_toJSON_", [aSortDict]);
    var mongodb = require("mongodb");
    var server = new mongodb.Server(myHost, myPort, {});
    (new mongodb.Db("test", server, {})).open(function (error, client) {var collection = new mongodb.Collection(client, collectionName);collection.find(critJson, omitJson).sort(sortJson).toArray(aBlock);});
    return self;
}
}),
smalltalk.MongoDB);

smalltalk.addMethod(
'_toJSON_',
smalltalk.method({
selector: 'toJSON:',
fn: function (aDict) {
    var self = this;
    var json = nil;
    json = smalltalk.send(smalltalk.JSON || JSON, "_parse_", [unescape("%7B%7D")]);
    smalltalk.send(smalltalk.send(aDict, "_keys", []), "_do_", [function (key) {return smalltalk.send(json, "_at_put_", [key, smalltalk.send(aDict, "_at_", [key])]);}]);
    return json;
    return self;
}
}),
smalltalk.MongoDB);


