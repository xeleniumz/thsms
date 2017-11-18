# THsms
asynchonous THsms api library For Node.js

# PHP Version & Credit
visit this website for php version https://thsms.com/api

# System requirement 
- babel transpiler
- node.js version 7.10 or higher
- request-promise-native https://github.com/request/request-promise-native
- node.js xmlparser for read xml response https://www.npmjs.com/package/xml2js


# How to use
- install require package 
- import this library to your controller
- setting username & password and if you are going to use sendMessage method don't forget to setting request mobileNumber and Message !!
- if you found any bugs please let me know or issue it.

# Example response
response from method sendMessage

```
{
  service: {
    $: {
      generator: "zend",
      version: "1.0"
  },
  send: [
    {
          message: [
            "OK"
          ],
          uuid: [
            "0bd4-b75815d4-00000000-4c15-e77f9e29"
          ],
          credit_usage: [
              "1"
          ],
          credit: [
              "767"
          ],
          status: [
              "success"
          ]
        }
     ]
  }
}
```

response from method getCredit
```
[
  {
    amount: [
    "767"
    ],
    status: [
    "success"
    ]
  }
]

```

# Debugging

There are at least three ways to debug the operation of request:
Launch the node process like NODE_DEBUG=request node script.js (lib,request,otherlib works too).
Set require('request').debug = true at any time 
Use the request-debug module to view request and response headers and bodies.
