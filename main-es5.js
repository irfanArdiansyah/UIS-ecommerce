function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div class=\"ms-site-container\">\n    <!-- Modal -->\n    <div class=\"modal modal-primary\" id=\"ms-account-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n      <div class=\"modal-dialog animated zoomIn animated-3x\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header d-block shadow-2dp no-pb\">\n            <button type=\"button\" class=\"close d-inline pull-right mt-2\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">\n                <i class=\"zmdi zmdi-close\"></i>\n              </span>\n            </button>\n            <div class=\"modal-title text-center\">\n              <span class=\"ms-logo ms-logo-white ms-logo-sm mr-1\">UIS</span>\n              <h3 class=\"no-m ms-site-title\">Ibnusina\n                <span>E-Commerce</span>\n              </h3>\n            </div>\n            <div class=\"modal-header-tabs\">\n              <ul class=\"nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-primary\" role=\"tablist\">\n                <li class=\"nav-item\" role=\"presentation\">\n                  <a href=\"#ms-login-tab\" aria-controls=\"ms-login-tab\" role=\"tab\" data-toggle=\"tab\"\n                    class=\"nav-link active withoutripple\">\n                    <i class=\"zmdi zmdi-account\"></i> Login</a>\n                </li>\n                <li class=\"nav-item\" role=\"presentation\">\n                  <a href=\"#ms-register-tab\" aria-controls=\"ms-register-tab\" role=\"tab\" data-toggle=\"tab\"\n                    class=\"nav-link withoutripple\">\n                    <i class=\"zmdi zmdi-account-add\"></i> Register</a>\n                </li>\n                <li class=\"nav-item\" role=\"presentation\">\n                  <a href=\"#ms-recovery-tab\" aria-controls=\"ms-recovery-tab\" role=\"tab\" data-toggle=\"tab\"\n                    class=\"nav-link withoutripple\">\n                    <i class=\"zmdi zmdi-key\"></i> Recovery Pass</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"tab-content\">\n              <div role=\"tabpanel\" class=\"tab-pane fade active show\" id=\"ms-login-tab\">\n                <form autocomplete=\"off\">\n                  <fieldset>\n                    <div class=\"form-group label-floating\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"zmdi zmdi-account\"></i>\n                        </span>\n                        <label class=\"control-label\" for=\"ms-form-user\">Username</label>\n                        <input type=\"text\" id=\"ms-form-user\" class=\"form-control\"> </div>\n                    </div>\n                    <div class=\"form-group label-floating\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                        <label class=\"control-label\" for=\"ms-form-pass\">Password</label>\n                        <input type=\"password\" id=\"ms-form-pass\" class=\"form-control\"> </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-md-6\">\n                        <div class=\"form-group no-mt\">\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\"> Remember Me </label>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <button class=\"btn btn-raised btn-primary pull-right\">Login</button>\n                      </div>\n                    </div>\n                  </fieldset>\n                </form>\n                <div class=\"text-center\">\n                  <h3>Login with</h3>\n                  <a href=\"javascript:void(0)\" class=\"wave-effect-light btn btn-raised btn-facebook\">\n                    <i class=\"zmdi zmdi-facebook\"></i> Facebook</a>\n                  <a href=\"javascript:void(0)\" class=\"wave-effect-light btn btn-raised btn-twitter\">\n                    <i class=\"zmdi zmdi-twitter\"></i> Twitter</a>\n                  <a href=\"javascript:void(0)\" class=\"wave-effect-light btn btn-raised btn-google\">\n                    <i class=\"zmdi zmdi-google\"></i> Google</a>\n                </div>\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"ms-register-tab\">\n                <form>\n                  <fieldset>\n                    <div class=\"form-group label-floating\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"zmdi zmdi-account\"></i>\n                        </span>\n                        <label class=\"control-label\" for=\"ms-form-user\">Username</label>\n                        <input type=\"text\" id=\"ms-form-user\" class=\"form-control\"> </div>\n                    </div>\n                    <div class=\"form-group label-floating\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"zmdi zmdi-email\"></i>\n                        </span>\n                        <label class=\"control-label\" for=\"ms-form-email\">Email</label>\n                        <input type=\"email\" id=\"ms-form-email\" class=\"form-control\"> </div>\n                    </div>\n                    <div class=\"form-group label-floating\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                        <label class=\"control-label\" for=\"ms-form-pass\">Password</label>\n                        <input type=\"password\" id=\"ms-form-pass\" class=\"form-control\"> </div>\n                    </div>\n                    <div class=\"form-group label-floating\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                        <label class=\"control-label\" for=\"ms-form-pass\">Re-type Password</label>\n                        <input type=\"password\" id=\"ms-form-pass\" class=\"form-control\"> </div>\n                    </div>\n                    <button class=\"btn btn-raised btn-block btn-primary\">Register Now</button>\n                  </fieldset>\n                </form>\n              </div>\n              <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"ms-recovery-tab\">\n                <fieldset>\n                  <div class=\"form-group label-floating\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"zmdi zmdi-account\"></i>\n                      </span>\n                      <label class=\"control-label\" for=\"ms-form-user\">Username</label>\n                      <input type=\"text\" id=\"ms-form-user\" class=\"form-control\"> </div>\n                  </div>\n                  <div class=\"form-group label-floating\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"zmdi zmdi-email\"></i>\n                      </span>\n                      <label class=\"control-label\" for=\"ms-form-email\">Email</label>\n                      <input type=\"email\" id=\"ms-form-email\" class=\"form-control\"> </div>\n                  </div>\n                  <button class=\"btn btn-raised btn-block btn-primary\">Send Password</button>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <header class=\"ms-header ms-header-dark\">\n      <!--ms-header-dark-->\n      <div class=\"container container-full\">\n        <div class=\"ms-title\">\n          <a href=\"index.html\">\n            <!-- <img src=\"assets/img/demo/logo-header.png\" alt=\"\"> -->\n            <span class=\"ms-logo animated zoomInDown animation-delay-5\">UIS</span>\n            <h1 class=\"animated fadeInRight animation-delay-6\">Ibnusina\n              <span>E-Commerce</span>\n            </h1>\n          </a>\n        </div>\n        <div class=\"header-right\">\n          <div class=\"share-menu\">\n            <ul class=\"share-menu-list\">\n              <li class=\"animated fadeInRight animation-delay-3\">\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-google\">\n                  <i class=\"zmdi zmdi-google\"></i>\n                </a>\n              </li>\n              <li class=\"animated fadeInRight animation-delay-2\">\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-facebook\">\n                  <i class=\"zmdi zmdi-facebook\"></i>\n                </a>\n              </li>\n              <li class=\"animated fadeInRight animation-delay-1\">\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-twitter\">\n                  <i class=\"zmdi zmdi-twitter\"></i>\n                </a>\n              </li>\n            </ul>\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-primary animated zoomInDown animation-delay-7\">\n              <i class=\"zmdi zmdi-share\"></i>\n            </a>\n          </div>\n          <a href=\"javascript:void(0)\"\n            class=\"btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8\" data-toggle=\"modal\"\n            data-target=\"#ms-account-modal\">\n            <i class=\"zmdi zmdi-account\"></i>\n          </a>\n          <form class=\"search-form animated zoomInDown animation-delay-9\">\n            <input id=\"search-box\" type=\"text\" class=\"search-input\" placeholder=\"Search...\" name=\"q\" />\n            <label for=\"search-box\">\n              <i class=\"zmdi zmdi-search\"></i>\n            </label>\n          </form>\n          <a href=\"javascript:void(0)\"\n            class=\"btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10\">\n            <i class=\"zmdi zmdi-menu\"></i>\n          </a>\n        </div>\n      </div>\n    </header>\n    <nav class=\"navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-primary\">\n      <div class=\"container container-full\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"index.html\">\n            <!-- <img src=\"assets/img/demo/logo-navbar.png\" alt=\"\"> -->\n            <span class=\"ms-logo ms-logo-sm\">UIS</span>\n            <span class=\"ms-title\">Ibnusina\n              <strong>E-Commerce</strong>\n            </span>\n          </a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"ms-navbar\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item dropdown active\">\n              <a routerLink=\"/home\" class=\"nav-link dropdown-toggle animated fadeIn animation-delay-7\" data-toggle=\"dropdown\"\n                data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-name=\"home\">Home\n                <!-- <i class=\"zmdi zmdi-chevron-down\"></i> -->\n              </a>\n             \n            </li>\n            <li class=\"nav-item dropdown\">\n              <a routerLink=\"/shopping\" class=\"nav-link dropdown-toggle animated fadeIn animation-delay-7\" data-toggle=\"dropdown\"\n                data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-name=\"page\">Start Shopping\n               \n              </a>\n            \n            </li>\n            \n            <li class=\"nav-item dropdown\">\n              <a routerLink=\"/items\" class=\"nav-link dropdown-toggle animated fadeIn animation-delay-9\" data-toggle=\"dropdown\"\n                data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                data-name=\"ecommerce\">Carts\n              </a>\n            \n            </li>\n          </ul>\n        </div>\n        <a href=\"javascript:void(0)\" class=\"ms-toggle-left btn-navbar-menu\">\n          <i class=\"zmdi zmdi-menu\"></i>\n        </a>\n      </div>\n      <!-- container -->\n    </nav>\n    <router-outlet></router-outlet>\n    <!-- <div class=\"container mt-6\">\n      <h1 class=\"text-center mb-4\">Products</h1>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Filter List</h3>\n            </div>\n            <div class=\"card-block\">\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <form class=\"form-horizontal\" id=\"Filters\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <fieldset>\n                          <h4 class=\"mb-1 no-mt\">Devices</h4>\n                          <div class=\"form-group no-mt\">\n                            <div class=\"checkbox ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".smartphone\"> Smartphones </label>\n                            </div>\n                            <div class=\"checkbox  ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".tablet\"> Tablets </label>\n                            </div>\n                            <div class=\"checkbox  ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".laptop\"> Laptops </label>\n                            </div>\n                            <div class=\"checkbox  ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".accessory\"> Accesories </label>\n                            </div>\n                          </div>\n                        </fieldset>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <fieldset>\n                          <h4 class=\"mb-1\">Brand</h4>\n                          <div class=\"form-group no-mt\">\n                            <div class=\"checkbox  ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".apple\"> Apple </label>\n                            </div>\n                            <div class=\"checkbox  ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".microsoft\"> Microsoft </label>\n                            </div>\n                            <div class=\"checkbox  ml-2\">\n                              <label>\n                                <input type=\"checkbox\" value=\".samsung\"> Samsung </label>\n                            </div>\n                          </div>\n                        </fieldset>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"col-md-4\">\n                  <form class=\"form-horizontal\">\n                    <h4>Sort by</h4>\n                    <select id=\"SortSelect\" class=\"form-control selectpicker\">\n                      <option value=\"random\">Popular</option>\n                      <option value=\"price:asc\">Price ASC</option>\n                      <option value=\"price:desc\">Price DESC</option>\n                      <option value=\"date:asc\">Release ASC</option>\n                      <option value=\"date:desc\">Release DESC</option>\n                    </select>\n                  </form>\n                  <button class=\"btn btn-danger btn-block no-mb mt-2\" id=\"Reset\">\n                    <i class=\"zmdi zmdi-delete\"></i> Clear Filters</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"row\" id=\"Container\">\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix laptop apple\" data-price=\"1999.99\" data-date=\"20160901\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/macbook.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Macbook Pro 2015</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 1999.99</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix tablet apple\" data-price=\"999.99\" data-date=\"20160705\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/ipad.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">iPad Pro</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 999.99</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory samsung\" data-price=\"459.89\" data-date=\"20160815\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/gear.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Galaxy Gear S3</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 459.89</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory apple\" data-price=\"769.99\" data-date=\"20151014\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/appleWatch.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Apple Watch Serie 2</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 769.99</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix smartphone samsung\" data-price=\"569.99\" data-date=\"20151201\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/s7.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Samsung Galaxy S7</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 569.99</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix laptop microsoft\" data-price=\"2499.25\" data-date=\"20161205\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/surfaceBook.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Microsoft Surface Book</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix smartphone apple\" data-price=\"769.00\" data-date=\"20160907\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/iphone7.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">iPhone 7 Plus</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 769.00</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory samsung\" data-price=\"819.00\" data-date=\"20160725\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/vr.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Gear VR</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix tablet microsoft\" data-price=\"799.80\" data-date=\"20151015\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/surface.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Surface Pro 4</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 799.80</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory microsoft\" data-price=\"79.95\" data-date=\"20151015\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/xboxController.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Xbox One Controller</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 79.95</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix smartphone microsoft\" data-price=\"298.99\" data-date=\"20141015\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/lumia.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Lumia 950</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 298.99</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-3 col-lg-4 col-sm-6 mix tablet samsung\" data-price=\"538.99\" data-date=\"20151015\">\n              <div class=\"card\">\n                <div class=\"card-block text-center\">\n                  <a href=\"ecommerce-item.html\">\n                    <img src=\"assets/img/demo/products/galaxyTab.png\" alt=\"\" class=\"img-fluid center-block\">\n                  </a>\n                  <h4 class=\"text-normal text-center\">Galaxy Tab S2</h4>\n                  <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                  <div class=\"mt-2\">\n                    <span class=\"mr-2\">\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star color-warning\"></i>\n                      <i class=\"zmdi zmdi-star\"></i>\n                    </span>\n                    <span class=\"ms-tag ms-tag-success\">$ 538.99</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                    <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n    <!-- container -->\n    <aside class=\"ms-footbar\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 ms-footer-col\">\n            <div class=\"ms-footbar-block\">\n              <h3 class=\"ms-footbar-title\">Sitemap</h3>\n              <ul class=\"list-unstyled ms-icon-list three_cols\">\n                <li>\n                  <a href=\"index.html\">\n                    <i class=\"zmdi zmdi-home\"></i> Home</a>\n                </li>\n                <li>\n                  <a href=\"page-blog.html\">\n                    <i class=\"zmdi zmdi-edit\"></i> Blog</a>\n                </li>\n                <li>\n                  <a href=\"page-blog.html\">\n                    <i class=\"zmdi zmdi-image-o\"></i> Portafolio</a>\n                </li>\n                <li>\n                  <a href=\"portfolio-filters_sidebar.html\">\n                    <i class=\"zmdi zmdi-case\"></i> Works</a>\n                </li>\n                <li>\n                  <a href=\"page-timeline_left2.html\">\n                    <i class=\"zmdi zmdi-time\"></i> Timeline</a>\n                </li>\n                <li>\n                  <a href=\"page-pricing.html\">\n                    <i class=\"zmdi zmdi-money\"></i> Pricing</a>\n                </li>\n                <li>\n                  <a href=\"page-about.html\">\n                    <i class=\"zmdi zmdi-favorite-outline\"></i> About Us</a>\n                </li>\n                <li>\n                  <a href=\"page-team2.html\">\n                    <i class=\"zmdi zmdi-accounts\"></i> Our Team</a>\n                </li>\n                <li>\n                  <a href=\"page-services.html\">\n                    <i class=\"zmdi zmdi-face\"></i> Services</a>\n                </li>\n                <li>\n                  <a href=\"page-faq2.html\">\n                    <i class=\"zmdi zmdi-help\"></i> FAQ</a>\n                </li>\n                <li>\n                  <a href=\"page-login2.html\">\n                    <i class=\"zmdi zmdi-lock\"></i> Login</a>\n                </li>\n                <li>\n                  <a href=\"page-contact.html\">\n                    <i class=\"zmdi zmdi-email\"></i> Contact</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"ms-footbar-block\">\n              <h3 class=\"ms-footbar-title\">Subscribe</h3>\n              <p class=\"\">Selalu Tahu kapan barang bagus datang, ayo subscribe sekarang</p>\n              <form>\n                <div class=\"form-group label-floating mt-2 mb-1\">\n                  <div class=\"input-group ms-input-subscribe\">\n                    <label class=\"control-label\" for=\"ms-subscribe\">\n                      <i class=\"zmdi zmdi-email\"></i> Email Adress</label>\n                    <input type=\"email\" id=\"ms-subscribe\" class=\"form-control\"> </div>\n                </div>\n                <button class=\"ms-subscribre-btn\" type=\"button\">Subscribe</button>\n              </form>\n            </div>\n          </div>\n          <div class=\"col-lg-5 col-md-7 ms-footer-col ms-footer-alt-color\">\n            <div class=\"ms-footbar-block\">\n              <h3 class=\"ms-footbar-title text-center mb-2\">Last Articles</h3>\n              <div class=\"ms-footer-media\">\n                <div class=\"media\">\n                  <div class=\"media-left media-middle\">\n                    <a href=\"javascript:void(0)\">\n                      <img class=\"media-object media-object-circle\" src=\"assets/img/demo/p75.jpg\" alt=\"...\"> </a>\n                  </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">\n                      <a href=\"javascript:void(0)\">Lorem ipsum dolor sit expedita cumque amet consectetur adipisicing\n                        repellat</a>\n                    </h4>\n                    <div class=\"media-footer\">\n                      <span>\n                        <i class=\"zmdi zmdi-time color-info-light\"></i> August 18, 2016</span>\n                      <span>\n                        <i class=\"zmdi zmdi-folder-outline color-warning-light\"></i>\n                        <a href=\"javascript:void(0)\">Design</a>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"media\">\n                  <div class=\"media-left media-middle\">\n                    <a href=\"javascript:void(0)\">\n                      <img class=\"media-object media-object-circle\" src=\"assets/img/demo/p75.jpg\" alt=\"...\"> </a>\n                  </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">\n                      <a href=\"javascript:void(0)\">Labore ut esse Duis consectetur expedita cumque ullamco ad dolor veniam\n                        velit</a>\n                    </h4>\n                    <div class=\"media-footer\">\n                      <span>\n                        <i class=\"zmdi zmdi-time color-info-light\"></i> August 18, 2016</span>\n                      <span>\n                        <i class=\"zmdi zmdi-folder-outline color-warning-light\"></i>\n                        <a href=\"javascript:void(0)\">News</a>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"media\">\n                  <div class=\"media-left media-middle\">\n                    <a href=\"javascript:void(0)\">\n                      <img class=\"media-object media-object-circle\" src=\"assets/img/demo/p75.jpg\" alt=\"...\"> </a>\n                  </div>\n                  <div class=\"media-body\">\n                    <h4 class=\"media-heading\">\n                      <a href=\"javascript:void(0)\">voluptates deserunt ducimus expedita cumque quaerat molestiae\n                        labore</a>\n                    </h4>\n                    <div class=\"media-footer\">\n                      <span>\n                        <i class=\"zmdi zmdi-time color-info-light\"></i> August 18, 2016</span>\n                      <span>\n                        <i class=\"zmdi zmdi-folder-outline color-warning-light\"></i>\n                        <a href=\"javascript:void(0)\">Productivity</a>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-5 ms-footer-col ms-footer-text-right\">\n            <div class=\"ms-footbar-block\">\n              <div class=\"ms-footbar-title\">\n                <span class=\"ms-logo ms-logo-white ms-logo-sm mr-1\">M</span>\n                <h3 class=\"no-m ms-site-title\">Ibnusina\n                  <span>E-Commerce</span>\n                </h3>\n              </div>\n              <address class=\"no-mb\">\n                <p>\n                  <i class=\"color-danger-light zmdi zmdi-pin mr-1\"></i> jalan gatau</p>\n                <p>\n                  <i class=\"color-warning-light zmdi zmdi-map mr-1\"></i> Batam Kota, Batam </p>\n                <p>\n                  <i class=\"color-info-light zmdi zmdi-email mr-1\"></i>\n                  <a href=\"mailto:joe@example.com\">ifanm.irfan@yahoo.com</a>\n                </p>\n                <p>\n                  <i class=\"color-royal-light zmdi zmdi-phone mr-1\"></i>0812xxxx </p>\n                <p>\n                  <i class=\"color-success-light fa fa-fax mr-1\"></i>0812xxxx </p>\n              </address>\n            </div>\n            <div class=\"ms-footbar-block\">\n              <h3 class=\"ms-footbar-title\">Social Media</h3>\n              <div class=\"ms-footbar-social\">\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-facebook\">\n                  <i class=\"zmdi zmdi-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-twitter\">\n                  <i class=\"zmdi zmdi-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-youtube\">\n                  <i class=\"zmdi zmdi-youtube-play\"></i>\n                </a>\n                <br>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-google\">\n                  <i class=\"zmdi zmdi-google\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-instagram\">\n                  <i class=\"zmdi zmdi-instagram\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-github\">\n                  <i class=\"zmdi zmdi-github\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </aside>\n    <footer class=\"ms-footer\">\n      <div class=\"container\">\n        <p>Copyright &copy; Ibnusina E-commerce 2020</p>\n      </div>\n    </footer>\n    <div class=\"btn-back-top\">\n      <a href=\"\" data-scroll id=\"back-top\" class=\"btn-circle btn-circle-primary btn-circle-sm btn-circle-raised \">\n        <i class=\"zmdi zmdi-long-arrow-up\"></i>\n      </a>\n    </div>\n  </div>\n  <!-- ms-site-container -->\n  <div class=\"ms-slidebar sb-slidebar sb-left sb-style-overlay\" id=\"ms-slidebar\">\n    <div class=\"sb-slidebar-container\">\n      <header class=\"ms-slidebar-header\">\n        <div class=\"ms-slidebar-login\">\n          <a href=\"javascript:void(0)\" class=\"withripple\">\n            <i class=\"zmdi zmdi-account\"></i> Login</a>\n          <a href=\"javascript:void(0)\" class=\"withripple\">\n            <i class=\"zmdi zmdi-account-add\"></i> Register</a>\n        </div>\n        <div class=\"ms-slidebar-title\">\n          <form class=\"search-form\">\n            <input id=\"search-box-slidebar\" type=\"text\" class=\"search-input\" placeholder=\"Search...\" name=\"q\" />\n            <label for=\"search-box-slidebar\">\n              <i class=\"zmdi zmdi-search\"></i>\n            </label>\n          </form>\n          <div class=\"ms-slidebar-t\">\n            <span class=\"ms-logo ms-logo-sm\">M</span>\n            <h3>Ibnusina\n              <span>E-Commerce</span>\n            </h3>\n          </div>\n        </div>\n      </header>\n      <ul class=\"ms-slidebar-menu\" id=\"slidebar-menu\" role=\"tablist\" aria-multiselectable=\"true\">\n        <!-- <li class=\"card\" role=\"tab\" id=\"sch2\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc2\"\n            aria-expanded=\"false\" aria-controls=\"sc2\">\n            <i class=\"zmdi zmdi-desktop-mac\"></i> Pages </a>\n          <ul id=\"sc2\" class=\"card-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch2\">\n            <li>\n              <a href=\"page-about.html\">About US</a>\n            </li>\n            <li>\n              <a href=\"page-team.html\">Our Team</a>\n            </li>\n            <li>\n              <a href=\"page-product.html\">Products</a>\n            </li>\n            <li>\n              <a href=\"page-services.html\">Services</a>\n            </li>\n            <li>\n              <a href=\"page-faq.html\">FAQ</a>\n            </li>\n            <li>\n              <a href=\"page-timeline_left.html\">Timeline</a>\n            </li>\n            <li>\n              <a href=\"page-contact.html\">Contact Option</a>\n            </li>\n            <li>\n              <a href=\"page-login.html\">Login</a>\n            </li>\n            <li>\n              <a href=\"page-pricing.html\">Pricing</a>\n            </li>\n            <li>\n              <a href=\"page-coming.html\">Coming Soon</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"card\" role=\"tab\" id=\"sch4\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc4\"\n            aria-expanded=\"false\" aria-controls=\"sc4\">\n            <i class=\"zmdi zmdi-edit\"></i> Blog </a>\n          <ul id=\"sc4\" class=\"card-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch4\">\n            <li>\n              <a href=\"blog-sidebar.html\">Blog Sidebar 1</a>\n            </li>\n            <li>\n              <a href=\"blog-sidebar2.html\">Blog Sidebar 2</a>\n            </li>\n            <li>\n              <a href=\"blog-masonry.html\">Blog Masonry 1</a>\n            </li>\n            <li>\n              <a href=\"blog-masonry2.html\">Blog Masonry 2</a>\n            </li>\n            <li>\n              <a href=\"blog-full.html\">Blog Full Page 1</a>\n            </li>\n            <li>\n              <a href=\"blog-full2.html\">Blog Full Page 2</a>\n            </li>\n            <li>\n              <a href=\"blog-post.html\">Blog Post 1</a>\n            </li>\n            <li>\n              <a href=\"blog-post2.html\">Blog Post 2</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"card\" role=\"tab\" id=\"sch5\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc5\"\n            aria-expanded=\"false\" aria-controls=\"sc5\">\n            <i class=\"zmdi zmdi-shopping-basket\"></i> E-Commerce </a>\n          <ul id=\"sc5\" class=\"card-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch5\">\n            <li>\n              <a href=\"ecommerce-filters.html\">E-Commerce Sidebar</a>\n            </li>\n            <li>\n              <a href=\"ecommerce-filters-full.html\">E-Commerce Sidebar Full</a>\n            </li>\n            <li>\n              <a href=\"ecommerce-filters-full2.html\">E-Commerce Topbar Full</a>\n            </li>\n            <li>\n              <a href=\"ecommerce-item.html\">E-Commerce Item</a>\n            </li>\n            <li>\n              <a href=\"ecommerce-cart.html\">E-Commerce Cart</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"card\" role=\"tab\" id=\"sch6\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc6\"\n            aria-expanded=\"false\" aria-controls=\"sc6\">\n            <i class=\"zmdi zmdi-collection-image-o\"></i> Portfolio </a>\n          <ul id=\"sc6\" class=\"card-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch6\">\n            <li>\n              <a href=\"portfolio-filters_sidebar.html\">Portfolio Sidebar Filters</a>\n            </li>\n            <li>\n              <a href=\"portfolio-filters_topbar.html\">Portfolio Topbar Filters</a>\n            </li>\n            <li>\n              <a href=\"portfolio-filters_sidebar_fluid.html\">Portfolio Sidebar Fluid</a>\n            </li>\n            <li>\n              <a href=\"portfolio-filters_topbar_fluid.html\">Portfolio Topbar Fluid</a>\n            </li>\n            <li>\n              <a href=\"portfolio-cards.html\">Porfolio Cards</a>\n            </li>\n            <li>\n              <a href=\"portfolio-masonry.html\">Porfolio Masonry</a>\n            </li>\n            <li>\n              <a href=\"portfolio-item.html\">Portfolio Item 1</a>\n            </li>\n            <li>\n              <a href=\"portfolio-item2.html\">Portfolio Item 2</a>\n            </li>\n          </ul>\n        </li> -->\n        <li>\n          <a class=\"link\" routerLink=\"/home\">\n            <i class=\"zmdi zmdi-home\"></i> Home</a>\n        </li>\n        <li>\n          <a class=\"link\" href=\"page-all.html\">\n            <i class=\"zmdi zmdi-link\"></i> Shopping</a>\n        </li>\n        <li>\n          <a class=\"link\" href=\"page-all.html\">\n            <i class=\"zmdi zmdi-link\"></i> Carts</a>\n        </li>\n      </ul>\n      <div class=\"ms-slidebar-social ms-slidebar-block\">\n        <h4 class=\"ms-slidebar-block-title\">Social Links</h4>\n        <div class=\"ms-slidebar-social\">\n          <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-facebook\">\n            <i class=\"zmdi zmdi-facebook\"></i>\n            <span class=\"badge-pill badge-pill-pink\">12</span>\n            <div class=\"ripple-container\"></div>\n          </a>\n          <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-twitter\">\n            <i class=\"zmdi zmdi-twitter\"></i>\n            <span class=\"badge-pill badge-pill-pink\">4</span>\n            <div class=\"ripple-container\"></div>\n          </a>\n          <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-google\">\n            <i class=\"zmdi zmdi-google\"></i>\n            <div class=\"ripple-container\"></div>\n          </a>\n          <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-instagram\">\n            <i class=\"zmdi zmdi-instagram\"></i>\n            <div class=\"ripple-container\"></div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ms-site-container\">\n  <div class=\"ms-hero-page bg-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 order-lg-2 text-center\">\n          <img src=\"./assets/img/demo/pixelPro.png\" alt=\"\" class=\"img-fluid animated bounceInRight animation-delay-14\">\n        </div>\n        <div class=\"col-lg-6 order-lg-1\">\n          <h1 class=\"animated fadeInDown animation-delay-4\">Google Pixel</h1>\n          <p class=\"lead lead-lg animated fadeInDown animation-delay-5\">The future is in your hands</p>\n          <p class=\"animated fadeInDown animation-delay-6\">It has the highest rated smartphone camera. Ever. A battery\n            that lasts all day. Unlimited storage for all your photos and videos. And it’s the first phone with the\n            Google Assistant built in.</p>\n          <ul class=\"list-unstyled\">\n            <li class=\"animated fadeInLeft animation-delay-7\">5.5 inches QHD AMOLED at 534ppi.</li>\n            <li class=\"animated fadeInLeft animation-delay-8\">4GB LPDDR4 RAM.</li>\n            <li class=\"animated fadeInLeft animation-delay-9\">32 or 128GB.</li>\n            <li class=\"animated fadeInLeft animation-delay-10\">Qualcomm® Snapdragon™ 821.</li>\n            <li class=\"animated fadeInLeft animation-delay-11\">12.3MP Large 1.55μm pixels.</li>\n          </ul>\n          <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-royal animated fadeInLeft animation-delay-14\">More\n            info</a>\n          <a href=\"javascript:void(0)\"\n            class=\"btn btn-raised btn-white color-info animated fadeInRight animation-delay-14\">Purchase</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wrap bg-warning\">\n    <div class=\"container\">\n      <h1 class=\"color-white text-center mb-4\">Latest Offers</h1>\n      <div class=\"row color-dark\">\n        <div class=\"col-lg-4 col-md-6 mix laptop apple\" data-price=\"1999.99\" data-date=\"20160901\">\n          <div class=\"card wow zoomInUp\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/macbook.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Macbook Pro 2015</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 1999.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 mix tablet apple\" data-price=\"999.99\" data-date=\"20160705\">\n          <div class=\"card wow zoomInUp\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/ipad.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">iPad Pro</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 999.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 mix accessory samsung\" data-price=\"459.89\" data-date=\"20160815\">\n          <div class=\"card wow zoomInUp\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/gear.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Galaxy Gear S3</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 459.89</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 mix accessory apple\" data-price=\"769.99\" data-date=\"20151014\">\n          <div class=\"card wow zoomInUp\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/appleWatch.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Apple Watch Serie 2</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 769.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 mix smartphone samsung\" data-price=\"569.99\" data-date=\"20151201\">\n          <div class=\"card wow zoomInUp\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/s7.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Samsung Galaxy S7</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 569.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 mix laptop microsoft\" data-price=\"2499.25\" data-date=\"20161205\">\n          <div class=\"card wow zoomInUp\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/surfaceBook.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Microsoft Surface Book</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- container -->\n  </div>\n\n  <!-- container -->\n\n</div>\n<div class=\"container mt-6\">\n  <h1 class=\"text-center mb-4\">Products</h1>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-primary\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Filter List</h3>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <form class=\"form-horizontal\" id=\"Filters\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <fieldset>\n                      <h4 class=\"mb-1 no-mt\">Devices</h4>\n                      <div class=\"form-group no-mt\">\n                        <div class=\"checkbox ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".smartphone\"> Smartphones </label>\n                        </div>\n                        <div class=\"checkbox  ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".tablet\"> Tablets </label>\n                        </div>\n                        <div class=\"checkbox  ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".laptop\"> Laptops </label>\n                        </div>\n                        <div class=\"checkbox  ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".accessory\"> Accesories </label>\n                        </div>\n                      </div>\n                    </fieldset>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <fieldset>\n                      <h4 class=\"mb-1\">Brand</h4>\n                      <div class=\"form-group no-mt\">\n                        <div class=\"checkbox  ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".apple\"> Apple </label>\n                        </div>\n                        <div class=\"checkbox  ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".microsoft\"> Microsoft </label>\n                        </div>\n                        <div class=\"checkbox  ml-2\">\n                          <label>\n                            <input type=\"checkbox\" value=\".samsung\"> Samsung </label>\n                        </div>\n                      </div>\n                    </fieldset>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"col-md-4\">\n              <form class=\"form-horizontal\">\n                <h4>Sort by</h4>\n                <select id=\"SortSelect\" class=\"form-control selectpicker\">\n                  <option value=\"random\">Popular</option>\n                  <option value=\"price:asc\">Price ASC</option>\n                  <option value=\"price:desc\">Price DESC</option>\n                  <option value=\"date:asc\">Release ASC</option>\n                  <option value=\"date:desc\">Release DESC</option>\n                </select>\n              </form>\n              <button class=\"btn btn-danger btn-block no-mb mt-2\" id=\"Reset\">\n                <i class=\"zmdi zmdi-delete\"></i> Clear Filters</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"row\" id=\"Container\">\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix laptop apple\" data-price=\"1999.99\" data-date=\"20160901\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"././assets/img/demo/products/macbook.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Macbook Pro 2015</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 1999.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix tablet apple\" data-price=\"999.99\" data-date=\"20160705\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/ipad.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">iPad Pro</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 999.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory samsung\" data-price=\"459.89\" data-date=\"20160815\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/gear.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Galaxy Gear S3</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 459.89</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory apple\" data-price=\"769.99\" data-date=\"20151014\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/appleWatch.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Apple Watch Serie 2</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 769.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix smartphone samsung\" data-price=\"569.99\" data-date=\"20151201\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/s7.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Samsung Galaxy S7</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 569.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix laptop microsoft\" data-price=\"2499.25\" data-date=\"20161205\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/surfaceBook.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Microsoft Surface Book</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix smartphone apple\" data-price=\"769.00\" data-date=\"20160907\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/iphone7.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">iPhone 7 Plus</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 769.00</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory samsung\" data-price=\"819.00\" data-date=\"20160725\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/vr.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Gear VR</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix tablet microsoft\" data-price=\"799.80\" data-date=\"20151015\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/surface.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Surface Pro 4</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 799.80</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix accessory microsoft\" data-price=\"79.95\" data-date=\"20151015\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/xboxController.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Xbox One Controller</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 79.95</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix smartphone microsoft\" data-price=\"298.99\" data-date=\"20141015\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/lumia.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Lumia 950</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 298.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-4 col-sm-6 mix tablet samsung\" data-price=\"538.99\" data-date=\"20151015\">\n          <div class=\"card\">\n            <div class=\"card-block text-center\">\n              <a href=\"ecommerce-item.html\">\n                <img src=\"./assets/img/demo/products/galaxyTab.png\" alt=\"\" class=\"img-fluid center-block\">\n              </a>\n              <h4 class=\"text-normal text-center\">Galaxy Tab S2</h4>\n              <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n              <div class=\"mt-2\">\n                <span class=\"mr-2\">\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star color-warning\"></i>\n                  <i class=\"zmdi zmdi-star\"></i>\n                </span>\n                <span class=\"ms-tag ms-tag-success\">$ 538.99</span>\n              </div>\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping/shopping.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping/shopping.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShoppingShoppingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ms-site-container\">\n  <div class=\"ms-hero-page ms-hero-img-mountain ms-hero-bg-primary mb-6\">\n    <div class=\"text-center color-white mt-6 mb-6 index-1\">\n      <h1>Ibnusina E-Commerce Store</h1>\n      <p class=\"lead lead-lg\">Welcome to the Ibnusina E-Commerce Store. Discover the latest products at incredible prices.\n        <br> Don't forget to check our daily offers.</p>\n      <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-white color-danger\">\n        <i class=\"zmdi zmdi-label\"></i> Latest offers</a>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-lg-8\">\n        <div class=\"card card-primary\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Filter List</h3>\n          </div>\n          <div class=\"card-block\">\n            <div class=\"row\">\n              <div class=\"col-lg-8\">\n                <form class=\"form-horizontal\" id=\"Filters\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <fieldset>\n                        <h4 class=\"mb-1 no-mt\">Devices</h4>\n                        <div class=\"form-group no-mt\">\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".smartphone\"> Smartphones </label>\n                          </div>\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".tablet\"> Tablets </label>\n                          </div>\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".laptop\"> Laptops </label>\n                          </div>\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".accessory\"> Accesories </label>\n                          </div>\n                        </div>\n                      </fieldset>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <fieldset>\n                        <h4 class=\"mb-1\">Brand</h4>\n                        <div class=\"form-group no-mt\">\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".apple\"> Apple </label>\n                          </div>\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".microsoft\"> Microsoft </label>\n                          </div>\n                          <div class=\"checkbox\">\n                            <label>\n                              <input type=\"checkbox\" value=\".samsung\"> Samsung </label>\n                          </div>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"col-lg-4\">\n                <form class=\"form-horizontal\">\n                  <h4>Sort by</h4>\n                  <select id=\"SortSelect\" class=\"form-control selectpicker\">\n                    <option value=\"random\">Popular</option>\n                    <option value=\"price:asc\">Price ASC</option>\n                    <option value=\"price:desc\">Price DESC</option>\n                    <option value=\"date:asc\">Release ASC</option>\n                    <option value=\"date:desc\">Release DESC</option>\n                  </select>\n                </form>\n                <button class=\"btn btn-danger btn-block no-mb mt-2\" id=\"Reset\">\n                  <i class=\"zmdi zmdi-delete\"></i> Clear Filters</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"row\" id=\"Container\">\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix laptop apple\" data-price=\"1999.99\" data-date=\"20160901\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/macbook.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Macbook Pro 2015</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 1999.99</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix tablet apple\" data-price=\"999.99\" data-date=\"20160705\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/ipad.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">iPad Pro</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 999.99</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix accessory samsung\" data-price=\"459.89\" data-date=\"20160815\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/gear.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Galaxy Gear S3</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 459.89</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix accessory apple\" data-price=\"769.99\" data-date=\"20151014\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/appleWatch.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Apple Watch Serie 2</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 769.99</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix smartphone samsung\" data-price=\"569.99\" data-date=\"20151201\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/s7.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Samsung Galaxy S7</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 569.99</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix laptop microsoft\" data-price=\"2499.25\" data-date=\"20161205\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/surfaceBook.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Microsoft Surface Book</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix smartphone apple\" data-price=\"769.00\" data-date=\"20160907\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/iphone7.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">iPhone 7 Plus</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 769.00</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix accessory samsung\" data-price=\"819.00\" data-date=\"20160725\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/vr.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Gear VR</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 2499.25</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix tablet microsoft\" data-price=\"799.80\" data-date=\"20151015\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/surface.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Surface Pro 4</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 799.80</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix accessory microsoft\" data-price=\"79.95\" data-date=\"20151015\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/xboxController.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Xbox One Controller</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 79.95</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix smartphone microsoft\" data-price=\"298.99\" data-date=\"20141015\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/lumia.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Lumia 950</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 298.99</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-3 col-lg-4 col-md-6 mix tablet samsung\" data-price=\"538.99\" data-date=\"20151015\">\n            <div class=\"card ms-feature\">\n              <div class=\"card-block text-center\">\n                <a href=\"ecommerce-item.html\">\n                  <img src=\"assets/img/demo/products/galaxyTab.png\" alt=\"\" class=\"img-fluid center-block\">\n                </a>\n                <h4 class=\"text-normal text-center\">Galaxy Tab S2</h4>\n                <p>Quibusdam aperiam tempora ut blanditiis cumque ab pariatur.</p>\n                <div class=\"mt-2\">\n                  <span class=\"mr-2\">\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star color-warning\"></i>\n                    <i class=\"zmdi zmdi-star\"></i>\n                  </span>\n                  <span class=\"ms-tag ms-tag-success\">$ 538.99</span>\n                </div>\n                <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm btn-block btn-raised mt-2 no-mb\">\n                  <i class=\"zmdi zmdi-shopping-cart-plus\"></i> Add to Cart</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/shopping/shopping.component */
    "./src/app/pages/shopping/shopping.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: "full"
    }, {
      path: 'shopping',
      component: _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingComponent"]
    }, {
      path: 'items',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-item-item-module */
        "pages-item-item-module").then(__webpack_require__.bind(null,
        /*! ./pages/item/item.module */
        "./src/app/pages/item/item.module.ts")).then(function (m) {
          return m.ItemModule;
        });
      }
    }, {
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ibnusinaCommerce';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/shopping/shopping.component */
    "./src/app/pages/shopping/shopping.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_shopping_shopping_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/home/home.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/pages/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/shopping/shopping.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/shopping/shopping.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShoppingShoppingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nL3Nob3BwaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/shopping/shopping.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/shopping/shopping.component.ts ***!
    \******************************************************/

  /*! exports provided: ShoppingComponent */

  /***/
  function srcAppPagesShoppingShoppingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function () {
      return ShoppingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShoppingComponent =
    /*#__PURE__*/
    function () {
      function ShoppingComponent() {
        _classCallCheck(this, ShoppingComponent);
      }

      _createClass(ShoppingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShoppingComponent;
    }();

    ShoppingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shopping/shopping.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping.component.scss */
      "./src/app/pages/shopping/shopping.component.scss")).default]
    })], ShoppingComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Irfan\Ibnu Sina\e-Commerce\ibnusinaCommerce\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map