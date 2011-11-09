Smalltalk current createPackage: 'CloudNodeClient' properties: #{'version'->'2.23'}!
Object subclass: #UserContainer
	instanceVariableNames: 'username password'
	category: 'CloudNodeClient'!

!UserContainer methodsFor: 'not yet classified'!

createAccount
| dict |
dict := Dictionary new. 
dict at: '_id' put: ('#createUsername' asJQuery val).
dict at: 'email' put: ('#createEmail' asJQuery val).
dict at: 'password' put: ('#createPassword' asJQuery val). 

  jQuery 
			ajax: 'FileServer?createAccount:'
			options: #{
				'type' -> 'POST'.
				'success' -> [ :message | window alert: message ].
				'error' -> [ :ex | window alert: 'error: ', ex responseText ].
				"'dataType' -> 'jsonp'."
				'data' -> dict asJSONString
			}.
!

showLogin
'#createAccount' asJQuery hide.
'#login' asJQuery show.
'#browse' asJQuery hide.
!

showCreateAccount
'#createAccount' asJQuery show.
'#login' asJQuery hide.
'#browse' asJQuery hide.
!

showBrowse
| canvas tb div | 
'#createAccount' asJQuery hide.
'#login' asJQuery hide.
'#browse' asJQuery show.

div := '#packages' asJQuery.
div empty.

PackageHandler new browsePublic: [
  	:message | 
	Transcript show: message.
  		(JSON parse: message) do: [ : entry |
			| url a name version json |
			json := JSON parse: entry.
                        name := json at: '@key'.
                        version := json at: '@value'.
			url := 'http://localhost:8080/packages/', name, '.st?version=', version.
  			Transcript show: url; cr.
                        a := (HTMLCanvas new a href: url).
                        a append: 'Package: ', name, ' Version: ', version.
                 	div append: (a asJQuery).
			div append: (HTMLCanvas new br asJQuery).
                ]
	] 

	onError:  [ :ex | window alert: (ex responseText) ].
!

login
| dict |
dict := Dictionary new. 
dict at: '_id' put: ('#loginUsername' asJQuery val).
dict at: 'password' put: ('#loginPassword' asJQuery val). 

  jQuery 
			ajax: 'FileServer?login:'
			options: #{
				'type' -> 'POST'.
				'success' -> [ :message | window alert: message. self username: (dict at: '_id'). self password: (dict at: 'password' ) ].
				'error' -> [ :ex | window alert: (ex responseText) ].
				"'dataType' -> 'jsonp'."
				'data' -> dict asJSONString
			}.
!

username
^username
!

username: aUsername
username := aUsername
!

password
^password
!

password: aPassword
password := aPassword
! !

Object subclass: #PackageHandler
	instanceVariableNames: ''
	category: 'CloudNodeClient'!

!PackageHandler methodsFor: 'not yet classified'!

browsePublic: onSuccessBlock onError: onErrorBlock

jQuery 
			ajax: ('FileServer?browse:')
			options: #{
				'type' -> 'POST'.
				'success' -> onSuccessBlock.
				'data' -> 'bla'.
				'error' -> [ :ex | onErrorBlock value: ex ]
			}.
!

commit: aPackage user: aUser password: aPassword
| dict |
dict := Dictionary new.

(Smalltalk current packageAt: aPackage)
	isNil ifTrue: [ ^window alert: 'Package not found' ].

dict at: 'packageName' put: aPackage.
dict at: 'packageMeta' put: ((Smalltalk current packageAt: aPackage) properties asJSONString).
dict at: 'js' put: (Exporter new exportPackage: aPackage).
dict at: 'jsdeploy' put: (StrippedExporter new exportPackage: aPackage).
dict at: 'st' put: (ChunkExporter new exportPackage: aPackage).
dict at: 'user' put: aUser.
dict at: 'password' put: aPassword.

jQuery 
			ajax: ('FileServer?commitPackage:')
			options: #{
				'type' -> 'POST'.
				'success' -> [ :message | window alert: message. ].
				'data' -> (dict asJSONString).
				'error' -> [ :ex | window alert: (ex responseText) ]
			}.
! !

