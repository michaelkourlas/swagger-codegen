/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['petstore/ApiClient', 'petstore/mdl/Client'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../mdl/Client'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.FakeClassnameTags123Api = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.Client);
  }
}(this, function(ApiClient, Client) {
  'use strict';

  /**
   * FakeClassnameTags123 service.
   * @module petstore/handler/FakeClassnameTags123Api
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeClassnameTags123Api. 
   * @alias module:petstore/handler/FakeClassnameTags123Api
   * @class
   * @param {module:petstore/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:petstore/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the testClassname operation.
     * @callback module:petstore/handler/FakeClassnameTags123Api~testClassnameCallback
     * @param {String} error Error message, if any.
     * @param {module:petstore/mdl/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test class name in snake case
     * To test class name in snake case
     * @param {module:petstore/mdl/Client} body client model
     * @param {module:petstore/handler/FakeClassnameTags123Api~testClassnameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:petstore/mdl/Client}
     */
    this.testClassname = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testClassname");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Client;

      return this.apiClient.callApi(
        '/fake_classname_test', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
