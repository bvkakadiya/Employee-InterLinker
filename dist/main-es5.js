(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- nav -->\n<!-- <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n  <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/\">Employee InterLinker</a>\n      <a class=\"nav-item nav-link\" *ngIf=\"currentUser\" (click)=\"logout()\">Logout</a>\n  </div>\n</nav> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Employee InterLinker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngIf=\"!currentUser\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\" role=\"button\">\n            Sign in\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" *ngIf=\"currentUser\">\n          <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"navbarDropdown\" role=\"button\"\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            User\n          </a>\n          <!-- Here's the magic. Add the .animate and .slide-in classes to your .dropdown-menu and you're all set! -->\n          <div class=\"dropdown-menu dropdown-menu-right animate slideIn\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Profile</a>\n            <!-- <a class=\"dropdown-item\" href=\"#\">Another action</a> -->\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" *ngIf=\"currentUser\" (click)=\"logout()\">log out</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"nav-scroller bg-white box-shadow\" *ngIf=\"currentUser?.role === 'REGULAR'\">\n  <nav class=\"nav nav-underline nav-blue\">\n    <a class=\"nav-link\" [routerLink]=\"['/home']\">\n      <i class=\"material-icons\">\n        home\n      </i>Home</a>\n      <a class=\"nav-link active\" [routerLink]=\"['/user/my-shift-schedules']\">\n        <i class=\"material-icons\">\n            schedule\n        </i> My Schedule</a>\n    <a class=\"nav-link active\" [routerLink]=\"['/user/my-connections']\">\n      <i class=\"material-icons\">\n        group\n      </i> My Connections</a>\n    <a class=\"nav-link\" [routerLink]=\"['/profile']\">\n      <i class=\"material-icons\">\n        perm_identity\n      </i> My Profile</a>\n    <a class=\"nav-link\" [routerLink]=\"['/user/connection-requests']\">\n      <i class=\"material-icons\">\n        group_add\n      </i> Connection Requests</a>\n\n    <a class=\"nav-link\" [routerLink]=\"['/user/connection-requests-approved']\">\n      <i class=\"material-icons\">\n          done_all\n      </i> Approved Requests</a>\n  </nav>\n</div>\n\n\n<div class=\"nav-scroller bg-white box-shadow\" *ngIf=\"currentUser?.role === 'COMPANY'\">\n  <nav class=\"nav nav-underline nav-blue\">\n    <a class=\"nav-link active\" [routerLink]=\"['/company-home']\">\n      <i class=\"material-icons\">\n        home\n      </i> My Dashboard</a>\n    <a class=\"nav-link\" [routerLink]=\"['/profile']\">\n      <i class=\"material-icons\">\n        perm_identity\n      </i> My Profile</a>\n\n      <a class=\"nav-link\" [routerLink]=\"['/company/employee-list']\">\n        <i class=\"material-icons\">\n          group\n        </i> Employees</a>\n  </nav>\n</div>\n\n<!-- main app container -->\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt-2\" *ngIf=\"!this.isLoading\">\n    <div class=\"row\">\n        <nav class=\"col-md-2 sidebar mb-2\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"sidebar-sticky\">\n                        <ul class=\"nav flex-column\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"javascript:void(0);\" (click)=\"onCompanyView()\">\n                                    <i class=\"material-icons\">\n                                        home_work\n                                    </i>\n                                    Companies <span class=\"sr-only\">(current)</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"onUserView()\">\n                                    <i class=\"material-icons\">\n                                        supervised_user_circle\n                                    </i>\n                                    Users\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n        </nav>\n\n\n        <main role=\"main\" class=\"col-md-10 ml-sm-auto col-lg-10 px-4\">\n            <div class=\"chartjs-size-monitor\"\n                style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\n                <div class=\"chartjs-size-monitor-expand\"\n                    style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n                    <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\n                </div>\n                <div class=\"chartjs-size-monitor-shrink\"\n                    style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\n                    <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <h5 class=\"card-header\">Dashboard</h5>\n                <div class=\"card-body\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <div class=\"card-counter primary\">\n                                    <i class=\"material-icons\">\n                                        home_work\n                                    </i> <span class=\"count-numbers\">{{totalCompanies}}</span>\n                                    <span class=\"count-name\">Companies</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <div class=\"card-counter danger\">\n                                    <i class=\"material-icons\">\n                                        supervised_user_circle\n                                    </i>\n                                    <span class=\"count-numbers\">{{totalUSers}}</span>\n                                    <span class=\"count-name\">Users</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <div class=\"card-counter success\">\n                                    <i class=\"material-icons\">\n                                        verified_user\n                                    </i>\n                                    <span class=\"count-numbers\">{{totalVerifiedCompanies}}</span>\n                                    <span class=\"count-name\">Verified Companies</span>\n                                </div>\n                            </div>\n\n                            <div class=\"col-md-3\">\n                                <div class=\"card-counter info\">\n                                    <i class=\"material-icons\">\n                                        verified_user\n                                    </i>\n                                    <span class=\"count-numbers\">{{totalVerifiedUsers}}</span>\n                                    <span class=\"count-name\">Verified Users</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n                    <h6 *ngIf=\"isCompanyView\">Companies</h6>\n                    <h6 *ngIf=\"!isCompanyView\">Users</h6>\n                    <hr />\n\n                    <div class=\"mat-elevation-z8\" *ngIf=\"!isCompanyView\">\n                        <table mat-table [dataSource]=\"dataSourceUsers\" class=\"mat-elevation-z8\">\n\n                            <!--- Note that these columns can be defined in any order.\n                                  The actual rendered columns are set as a property on the row definition\" -->\n\n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"avatar\">\n                                <th mat-header-cell *matHeaderCellDef> Logo </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <img height=\"50\" width=\"50\"\n                                        src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\"\n                                        alt=\"company-profile0pic\" class=\"rounded-circle rounded-sm\">\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"date\">\n                                <th mat-header-cell *matHeaderCellDef> Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.date | date:'mediumDate' }} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"email\">\n                                <th mat-header-cell *matHeaderCellDef> Email </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"gender\">\n                                <th mat-header-cell *matHeaderCellDef> Gender </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.gender}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"Full-time/Part-time\">\n                                <th mat-header-cell *matHeaderCellDef> Full-time/Part-time </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <span *ngIf=\"element.fullTime\">Full Time</span>\n                                    <span *ngIf=\"element.partTime\">Part Time</span>\n                                    <span *ngIf=\"!element.fullTime && !element.partTime\">N/A</span>\n                                </td>\n                            </ng-container>\n\n\n                            <ng-container matColumnDef=\"verified\">\n                                <th mat-header-cell *matHeaderCellDef> verified </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <span *ngIf=\"element.verified\" class=\"badge badge-success mr-2\">\n                                        <i class=\"material-icons\">\n                                            verified_user\n                                        </i>\n                                    </span>\n\n                                    <a href=\"javascript:void(0);\" (click)=\"onDeleteCompany(element.email)\" class=\"mr-2\">\n                                        <span class=\"badge badge-danger\">\n                                            <i class=\"material-icons\">delete_forever</i></span></a>\n                                    <button *ngIf=\"!element.verified\" class=\"btn btn-success\"\n                                        (click)=\"onVerifyCompany(element.email)\">Verify Now</button>\n\n                                </td>\n                            </ng-container>\n\n\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedUserColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedUserColumns;\"></tr>\n                        </table>\n                    </div>\n                    <div class=\"mat-elevation-z8\" *ngIf=\"isCompanyView\">\n\n                        <!-- <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                        </mat-form-field> -->\n\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                            <!--- Note that these columns can be defined in any order.\n                              The actual rendered columns are set as a property on the row definition\" -->\n\n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"avatar\">\n                                <th mat-header-cell *matHeaderCellDef> Logo </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <img height=\"50\" width=\"50\"\n                                        src=\"https://www.cqse.eu/images/company/company-landscape.png\"\n                                        alt=\"company-profile0pic\" class=\"rounded-circle rounded-sm\">\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"date\">\n                                <th mat-header-cell *matHeaderCellDef> Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.date | date:'mediumDate' }} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"email\">\n                                <th mat-header-cell *matHeaderCellDef> Email </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"numbersOfEmployees\">\n                                <th mat-header-cell *matHeaderCellDef> numbersOfEmployees </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.numbersOfEmployees}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"webSite\">\n                                <th mat-header-cell *matHeaderCellDef> webSite </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <i class=\"material-icons\">\n                                        link\n                                    </i>&nbsp;<a href={{element.webSite}} target=\"_blank\">{{element.webSite}}</a>\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"verified\">\n                                <th mat-header-cell *matHeaderCellDef> verified </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <span *ngIf=\"element.verified\" class=\"badge badge-success mr-2\">\n                                        <i class=\"material-icons\">\n                                            verified_user\n                                        </i>\n                                    </span>\n                                    <a href=\"javascript:void(0);\" (click)=\"onDeleteCompany(element.email)\" class=\"mr-2\">\n                                        <span class=\"badge badge-danger\">\n                                            <i class=\"material-icons\">delete_forever</i></span></a>\n                                    <button *ngIf=\"!element.verified\" class=\"btn btn-success\"\n                                        (click)=\"onVerifyCompany(element.email)\">Verify Now</button>\n\n                                </td>\n                            </ng-container>\n\n\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                        <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n                    </div>\n                </div>\n            </div>\n        </main>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-details/company-details.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-details/company-details.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col-xl-4\">\n        <div class=\"card card-profile shadow\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-3 order-lg-2\">\n              <div class=\"card-profile-image\">\n                <a href=\"#\">\n                  <img\n                    src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGRd7bdqRLA2J1odZd-efME3HjI-7ORe1P_7-T9z8lbrY-xNDEA&s\"\n                    class=\"rounded-circle\">\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n            <div class=\"d-flex justify-content-between\">\n              <!-- <a href=\"#\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\n              <a href=\"#\" class=\"btn btn-sm btn-default float-right\">Message</a> -->\n            </div>\n          </div>\n          <div class=\"card-body pt-0 pt-md-4\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\n                  <div>\n                    <span class=\"heading\">{{currentCompany?.numbersOfEmployees}}</span>\n                    <span class=\"description\">Employees</span>\n                  </div>\n                  <div>\n                    <span class=\"heading\">10</span>\n                    <span class=\"description\">Photos</span>\n                  </div>\n                  <div>\n                    <span class=\"heading\">89</span>\n                    <span class=\"description\">Comments</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <h3>\n                {{currentCompany?.name}}\n              </h3>\n              <div class=\"h5 font-weight-300\">\n                <i class=\"ni location_pin mr-2\"></i>{{currentCompany?.city}}, {{currentCompany?.country}}\n              </div>\n              <div class=\"h5 mt-4\">\n                <i class=\"ni business_briefcase-24 mr-2\"></i>{{currentCompany?.address}}\n              </div>\n              <div>\n                <i class=\"ni education_hat mr-2\"></i>{{currentCompany?.contactNumber}}\n              </div>\n              <hr class=\"my-4\">\n              <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all\n                of his own music.</p>\n              <a href=\"#\">Show more</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-8\">\n        <div class=\"card card-profile shadow\">\n          <div class=\"card-body pt-0 pt-md-4\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                  aria-selected=\"true\">Verification Requests</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                  aria-selected=\"false\">Reviews</a>\n              </li>\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n              <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                <div class=\"container\" style=\"margin-top:40px;\">\n                  <div class=\"card\" style=\"width:100%\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">Employees</h5>\n                      <!-- <table class=\"table table-bordered\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">Name</th>\n                            <th scope=\"col\">Position</th>\n                            <th scope=\"col\">Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let c of employeeList\">\n                            <th scope=\"row\">1</th>\n                            <td>{{c.name}}</td>\n                            <td>{{c.position}} {{c._id}}</td>\n                            <td>\n                              <button class=\"btn btn-success\" (click)=\"addConnection(c._id)\">Connect</button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table> -->\n                      <mat-form-field>\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Employees\">\n                      </mat-form-field>\n\n                      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                        <!--- Note that these columns can be defined in any order.\n                              The actual rendered columns are set as a property on the row definition\" -->\n\n                        <!-- Position Column -->\n                        <ng-container matColumnDef=\"avatar\">\n                            <th mat-header-cell *matHeaderCellDef> Logo </th>\n                            <td mat-cell *matCellDef=\"let element\">\n                                <img height=\"50\" width=\"50\"\n                                    src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\"\n                                    alt=\"company-profile0pic\" class=\"rounded-circle rounded-sm\">\n                            </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"name\">\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"position\">\n                            <th mat-header-cell *matHeaderCellDef> Position </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"action\">\n                            <th mat-header-cell *matHeaderCellDef> Action</th>\n                            <td mat-cell *matCellDef=\"let element\">\n                                <button class=\"btn btn-success\" (click)=\"addConnection(element.action)\">Connect</button>\n                            </td>\n                        </ng-container>\n\n\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-employee-list/company-employee-list.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-employee-list/company-employee-list.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:4rem\">\n        <!-- <div class=\"container\" *ngIf=\"myConnections?.length == 0\">\n            <div class=\"alert alert-success\" role=\"alert\">\n                You dont have a any approved connection requests.\n            </div>\n        </div> -->\n    \n        <div class=\"card\" style=\"width: 100%;\"> \n                <div class=\"card-body\">\n                        <mat-form-field>\n                                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Employees\">\n                            </mat-form-field>\n                        \n                            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                        \n                                <!--- Note that these columns can be defined in any order.\n                                              The actual rendered columns are set as a property on the row definition\" -->\n                        \n                                <!-- Position Column -->\n                                <ng-container matColumnDef=\"avatar\">\n                                    <th mat-header-cell *matHeaderCellDef> Logo </th>\n                                    <td mat-cell *matCellDef=\"let element\">\n                                        <img height=\"50\" width=\"50\"\n                                            src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\"\n                                            alt=\"company-profile0pic\" class=\"rounded-circle rounded-sm\">\n                                    </td>\n                                </ng-container>\n                        \n                                <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef> Name </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                </ng-container>\n                        \n                                <ng-container matColumnDef=\"position\">\n                                    <th mat-header-cell *matHeaderCellDef> Position </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                                </ng-container>\n                        \n                                <ng-container matColumnDef=\"view\">\n                                        <th mat-header-cell *matHeaderCellDef> View </th>\n                                        <td mat-cell *matCellDef=\"let element\"> \n                                                <button class=\"btn btn-success\" [routerLink]=\"[ '/user/connections-request',element.view,element.view]\">View Profile</button>\n                                        </td>\n                                    </ng-container>\n                        \n                                <ng-container matColumnDef=\"action\">\n                                    <th mat-header-cell *matHeaderCellDef> Action</th>\n                                    <td mat-cell *matCellDef=\"let element\">\n                                        <button class=\"btn btn-danger\"  (click)=\"removeConnection(element.action)\">Deactive</button>\n                                        &nbsp;\n                                        <button class=\"btn btn-warning\" [routerLink]=\"[ '/company/scheduler',element.view]\">Manage</button>\n                                    </td>\n                                </ng-container>\n                        \n                        \n                        \n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                            </table>\n                            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n              </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/childbox/childbox.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/childbox/childbox.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"childForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" placeholder=\"Leave a comment\" formControlName=\"comment\" [ngClass]=\"{ 'is-invalid': submitted && childForm.controls['comment'].errors }\"></textarea>\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && childForm.controls['comment'].errors\">\n            <div *ngIf=\"childForm.controls['comment'].errors.required\">Comment is required</div>\n            <div *ngIf=\"childForm.controls['comment'].errors.minlength\">Comment must be at least 6 characters</div>\n            <div *ngIf=\"childForm.controls['comment'].errors.maxlength\">Comment must be at most 100 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\">Post Comment</button>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/commentbox.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/commentbox.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <textarea class=\"form-control\" placeholder=\"Leave a comment\" formControlName=\"comment\" [ngClass]=\"{ 'is-invalid': submitted && commentForm.controls['comment'].errors }\"></textarea>\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && commentForm.controls['comment'].errors\">\n            <div *ngIf=\"commentForm.controls['comment'].errors.required\">Comment is required</div>\n            <div *ngIf=\"commentForm.controls['comment'].errors.minlength\">Comment must be at least 6 characters</div>\n            <div *ngIf=\"commentForm.controls['comment'].errors.maxlength\">Comment must be at most 100 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\">Post Comment</button>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/comments/comments.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/comments/comments.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"comments\" *ngIf=\"postComment!==undefined\">\n    <h6 *ngIf=\"postComment?.length<1\">No Comments found</h6>\n    <ul *ngIf=\"postComment?.length>0\">\n        <li *ngFor=\"let post of postComment; let i = index;\">\n            <div class=\"col-12 col-sm-12 comment-container\">\n                    <p>{{post.commentTxt}}</p>\n                    <div class=\"actions\">\n                        <span>{{post.currentDate | date: 'dd/MM/yyyy'}}</span>\n                        <span class=\"divider\"></span>\n                        <button class=\"btn btn-sm btn-info\" (click)=\"replyComment(i)\">\n                            Reply\n                        </button>\n                        <span class=\"divider\"></span>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"removeComment(i)\">\n                            <i class=\"fa fa-trash\"></i>\n                        </button>\n                </div>\n                <div class=\"childCommentBox\">\n                    <div datacontainer></div>\n                    <ul *ngIf=\"post?.replyComment?.length>0\">\n                        <li *ngFor=\"let rl of post.replyComment\">\n                            <div class=\"col-12 col-sm-12 comment-container\">\n                                    <p>{{rl.commentTxt}}</p>\n                            </div>\n                        </li>\n                    </ul>            \n                </div>                \n            </div>\n        </li>\n    </ul>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/company-home.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/company-home.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-4\">\n      <div class=\"card card-profile shadow\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-3 order-lg-2\">\n            <div class=\"card-profile-image\">\n              <a href=\"#\">\n                <img\n                  src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGRd7bdqRLA2J1odZd-efME3HjI-7ORe1P_7-T9z8lbrY-xNDEA&s\"\n                  class=\"rounded-circle\">\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n          <div class=\"d-flex justify-content-between\">\n            <!-- <a href=\"#\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\n            <a href=\"#\" class=\"btn btn-sm btn-default float-right\">Message</a> -->\n          </div>\n        </div>\n        <div class=\"card-body pt-0 pt-md-4\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\n                <div>\n                  <span class=\"heading\">{{currentUser?.numbersOfEmployees}}</span>\n                  <span class=\"description\">Employees</span>\n                </div>\n                <div>\n                  <span class=\"heading\">10</span>\n                  <span class=\"description\">Photos</span>\n                </div>\n                <div>\n                  <span class=\"heading\">89</span>\n                  <span class=\"description\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center\">\n            <h3>\n              {{currentUser?.name}}\n            </h3>\n            <div class=\"h5 font-weight-300\">\n              <i class=\"ni location_pin mr-2\"></i>{{currentUser?.city}}, {{currentUser?.country}}\n            </div>\n            <div class=\"h5 mt-4\">\n              <i class=\"ni business_briefcase-24 mr-2\"></i>{{currentUser?.address}}\n            </div>\n            <div>\n              <i class=\"ni education_hat mr-2\"></i>{{currentUser?.contactNumber}}\n            </div>\n            <hr class=\"my-4\">\n            <p>{{currentUser?.bio}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-8\">\n      <div class=\"card card-profile shadow\">\n        <div class=\"card-body pt-0 pt-md-4\">\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">Verification Requests</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                aria-selected=\"false\">Reviews</a>\n            </li>\n          </ul>\n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n              <div class=\"container\" style=\"margin-top:40px;\">\n                <div class=\"alert alert-info\" *ngIf=\"!currentUser.verified\">\n                  Your Profile is not approved yet.\n                </div>\n                <div class=\"card\" style=\"width:100%\" *ngIf=\"currentUser.verified\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Verification Requests</h5>\n                    <mat-form-field>\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Employees\">\n                    </mat-form-field>\n\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                      <!--- Note that these columns can be defined in any order.\n                            The actual rendered columns are set as a property on the row definition\" -->\n\n                      <!-- Position Column -->\n                      <ng-container matColumnDef=\"avatar\">\n                          <th mat-header-cell *matHeaderCellDef> Logo </th>\n                          <td mat-cell *matCellDef=\"let element\">\n                              <img height=\"50\" width=\"50\"\n                                  src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\"\n                                  alt=\"company-profile0pic\" class=\"rounded-circle rounded-sm\">\n                          </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"name\">\n                          <th mat-header-cell *matHeaderCellDef> Name </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"position\">\n                          <th mat-header-cell *matHeaderCellDef> Position </th>\n                          <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"action\">\n                          <th mat-header-cell *matHeaderCellDef> Action</th>\n                          <td mat-cell *matCellDef=\"let element\">\n                              <button class=\"btn btn-success\" (click)=\"onVerifyUser(element.email)\">Verify</button>\n                          </td>\n                      </ng-container>\n\n\n\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n              <div class=\"container\">\n                <div class=\"card\">\n                    <div class=\"commentbox\">\n                        <div class=\"col-12 col-sm-12 header\">\n                            <h4>Comments ({{count}})</h4>\n                        </div>\n                        <div class=\"col-12 col-sm-12 body\">\n                            <div class=\"comment-container\">\n                                    <div class=\"comment-form\">\n                                            <app-commentbox (usercomment)=\"receiveComment($event)\"></app-commentbox>\n                                    </div>\n                            </div>\n                        </div>\n                    </div>\n                    <app-comments [postComment]=\"comments\" (countComments)=\"recieveCount($event)\"></app-comments>\n                </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-scheduler/company-scheduler.component.html": 
        /*!*****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-scheduler/company-scheduler.component.html ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader-div\" *ngIf=\"isLoading\">\n        <div class=\"loader\"></div>\n    </div>\n<div class=\"container-fluid\" style=\"margin-top:20px;\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"row text-center\">\n                        <div class=\"col-md-4\">\n                            <div class=\"btn-group\">\n                                <div class=\"btn btn-primary\" mwlCalendarPreviousView [view]=\"view\"\n                                    [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n                                    Previous\n                                </div>\n                                <div class=\"btn btn-outline-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n                                    Today\n                                </div>\n                                <div class=\"btn btn-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                                    (viewDateChange)=\"closeOpenMonthViewDay()\">\n                                    Next\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"btn-group\">\n                                <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Month)\"\n                                    [class.active]=\"view === CalendarView.Month\">\n                                    Month\n                                </div>\n                                <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Week)\"\n                                    [class.active]=\"view === CalendarView.Week\">\n                                    Week\n                                </div>\n                                <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Day)\"\n                                    [class.active]=\"view === CalendarView.Day\">\n                                    Day\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <br />\n\n                    <div [ngSwitch]=\"view\">\n                        <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\"\n                            [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\"\n                            (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                            (eventTimesChanged)=\"eventTimesChanged($event)\">\n                        </mwl-calendar-month-view>\n                        <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\"\n                            [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                            (eventTimesChanged)=\"eventTimesChanged($event)\">\n                        </mwl-calendar-week-view>\n                        <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"\n                            [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                            (eventTimesChanged)=\"eventTimesChanged($event)\">\n                        </mwl-calendar-day-view>\n                    </div>\n\n                    <!-- Everything you see below is just for the demo, you don't need to include it in your app -->\n\n                    <br /><br /><br />\n\n                    <ng-template #modalContent let-close=\"close\">\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\">Event action occurred</h5>\n                            <button type=\"button\" class=\"close\" (click)=\"close()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body\">\n                            <div>\n                                Action:\n                                <pre>{{ modalData?.action }}</pre>\n                            </div>\n                            <div>\n                                Event:\n                                <pre>{{ modalData?.event | json }}</pre>\n                            </div>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n                                OK\n                            </button>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"alert alert-info\">\n                        Make Sure you save shift after adding new shift or deleting existing one.\n                    </div>\n                    <h3>\n                        Shifts\n                        <button class=\"btn btn-primary pull-right\" style=\"float:right;\" (click)=\"save()\">\n                                Save Shift\n                            </button>\n\n                        <button class=\"btn btn-primary pull-right\" style=\"float:right; margin-right:2px;\" (click)=\"addEvent()\">\n                            Add Shift\n                        </button>\n                        &nbsp;\n                       \n                        <div class=\"clearfix\"></div>\n                    </h3>\n\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th>Title</th>\n                                    <th>Starts at</th>\n                                    <th>Ends at</th>\n                                    <th>Remove</th>\n                                </tr>\n                            </thead>\n\n                            <tbody>\n                                <tr *ngFor=\"let event of events\">\n                                    <td>\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.title\"\n                                            (keyup)=\"refresh.next()\" />\n                                    </td>\n                                    <td>\n                                        <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.start\"\n                                            (ngModelChange)=\"refresh.next()\" [altInput]=\"true\"\n                                            [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"\n                                            altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\n                                    </td>\n                                    <td>\n                                        <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.end\"\n                                            (ngModelChange)=\"refresh.next()\" [altInput]=\"true\"\n                                            [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\"\n                                            altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\n                                    </td>\n                                    <td>\n                                        <button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">\n                                            Delete\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container h-100 mt-5\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"searchbar\">\n\t\t\t<input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\">\n\t\t\t<a href=\"#\" class=\"search_icon\"> <i class=\"material-icons\" style=\"font-size: 35px;\">\n\t\t\t\t\tsearch\n\t\t\t\t</i> </a>\n\t\t</div>\n\t</div>\n</div>\n<section class=\"row-section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<h2 class=\"text-center\"><span>Top Companies Listing</span></h2>\n\t\t</div>\n\t\t<div class=\"col-md-10 offset-md-1 row-block\">\n\t\t\t<ul id=\"sortable\">\n\t\t\t\t<li  *ngFor=\"let c of companyList\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<div class=\"media-left align-self-center\">\n\t\t\t\t\t\t\t<img class=\"rounded-circle\"\n\t\t\t\t\t\t\t\tsrc=\"https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h4>{{c.name}}</h4>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\t\t\t\t\t\t\t\tut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"media-right align-self-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" [routerLink]=\"[ '/company-details',c._id]\" class=\"btn btn-default\" >See Companies Details</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <h3>Login</h3>\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div> -->\n\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Sign In</h5>\n            <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n              <div class=\"form-label-group\">\n                <input type=\"text\" formControlName=\"username\" id=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Username\" required autofocus />\n                <label for=\"userName\">Username</label>\n              </div>\n\n              <div class=\"form-label-group\">\n                <input type=\"password\" id=\"inputPassword\"  formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"  placeholder=\"Password\" required>\n                <label for=\"inputPassword\">Password</label>\n              </div>\n\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n              </div>\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\"><span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>Sign in</button>\n              <hr class=\"my-4\">\n              <p>Don't have account? <a [routerLink]=\"['/register']\" >Register</a> here.</p>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"col-md-6 offset-md-3 mt-5\">>\n  <div class=\"card\">\n      <div class=\"card-body\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <h3>Register</h3>\n              <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                  <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.name.errors.required\">Username is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">email</label>\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Username is required</div>\n                </div>\n            </div>\n              <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"confirmPassword\">Confirm Password</label>\n                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.confirmPassword.errors.required\">Password is required</div>\n                </div>\n            </div>\n              <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                  <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                  Register\n              </button>\n              <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n          </form>\n      </div>\n  </div>\n</div> -->\n\n\n<div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-10 col-xl-9 mx-auto\">\n            <div class=\"card card-signin flex-row my-5\">\n              <div class=\"card-img-left d-none d-md-flex\" [ngClass]=\"{'company': isCompanyView}\">\n                 <!-- Background image for card set in CSS! -->\n\n\n              </div>\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">Register As</h5>\n                <div style=\"text-align: center;margin-bottom: 25px;\">\n                    <div class=\"ui-group-buttons\">\n                        <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'disabled': !isCompanyView}\" (click)=\"onRegularUserSelect()\">Regular User</button>\n                        <div class=\"or\"></div>\n                        <button type=\"button\" class=\"button btn btn-success\" [ngClass]=\"{'disabled': isCompanyView}\" (click)=\"onCompanySelect()\">Company</button>\n                    </div>\n                </div>\n                <form class=\"form-signin\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"!isCompanyView\">\n                  <div class=\"form-label-group\">\n                    <input type=\"text\" id=\"inputUserame\" type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Username\" required autofocus>\n                    <label for=\"inputUserame\">Username</label>\n                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.name.errors.required\">Username is required</div>\n                        </div>\n                  </div>\n    \n                  <div class=\"form-label-group\">\n                    <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"form-control\" placeholder=\"Email address\" required>\n                    <label for=\"inputEmail\">Email address</label>\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Username is required</div>\n                        </div>\n                  </div>\n                  \n                  <hr>\n    \n                  <div class=\"form-label-group\">\n                    <input type=\"password\" id=\"inputPassword\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\" required>\n                    <label for=\"inputPassword\">Password</label>\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                  </div>\n                  \n                  <div class=\"form-label-group\">\n                    <input type=\"password\" id=\"inputConfirmPassword\"  formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"  placeholder=\"Password\" required>\n                    <label for=\"inputConfirmPassword\">Confirm password</label>\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.confirmPassword.errors.required\">Password is required</div>\n                        </div>\n                  </div>\n    \n                  <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span> Register</button>\n                  <a class=\"d-block text-center mt-2 small\" [routerLink]=\"['/login']\" >Sign In</a>\n                </form>\n                <form class=\"form-signin\" [formGroup]=\"registerForm\" (ngSubmit)=\"onCorpSubmit()\" *ngIf=\"isCompanyView\">\n                    <div class=\"form-label-group\">\n                      <input type=\"text\" id=\"inputUserame\" type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Username\" required autofocus>\n                      <label for=\"inputUserame\">Company Name</label>\n                      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.name.errors.required\">Company Name is required</div>\n                          </div>\n                    </div>\n      \n                    <div class=\"form-label-group\">\n                      <input type=\"email\" id=\"inputEmail\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"form-control\" placeholder=\"Email address\" required>\n                      <label for=\"inputEmail\">Email address</label>\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.email.errors.required\">Username is required</div>\n                          </div>\n                    </div>\n                    \n                    <hr>\n      \n                    <div class=\"form-label-group\">\n                      <input type=\"password\" id=\"inputPassword\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\" required>\n                      <label for=\"inputPassword\">Password</label>\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                          </div>\n                    </div>\n                    \n                    <div class=\"form-label-group\">\n                      <input type=\"password\" id=\"inputConfirmPassword\"  formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\"  placeholder=\"Password\" required>\n                      <label for=\"inputConfirmPassword\">Confirm password</label>\n                      <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                              <div *ngIf=\"f.confirmPassword.errors.required\">Password is required</div>\n                          </div>\n                    </div>\n      \n                    <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">   <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span> Register</button>\n                    <a class=\"d-block text-center mt-2 small\" [routerLink]=\"['/login']\" >Sign In</a>\n                  </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.html": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.html ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:4rem\">\n    <div class=\"container\" *ngIf=\"myConnections?.length == 0\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            You dont have a any approved connection requests.\n        </div>\n    </div>\n\n    <div class=\"card\" style=\"width: 100%;\"  *ngIf=\"myConnections?.length != 0\"> \n            <div class=\"card-body\">\n                    <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Employees\">\n                        </mat-form-field>\n                    \n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                    \n                            <!--- Note that these columns can be defined in any order.\n                                          The actual rendered columns are set as a property on the row definition\" -->\n                    \n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"avatar\">\n                                <th mat-header-cell *matHeaderCellDef> Logo </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <img height=\"50\" width=\"50\"\n                                        src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\"\n                                        alt=\"company-profile0pic\" class=\"rounded-circle rounded-sm\">\n                                </td>\n                            </ng-container>\n                    \n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                            </ng-container>\n                    \n                            <ng-container matColumnDef=\"position\">\n                                <th mat-header-cell *matHeaderCellDef> Position </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                            </ng-container>\n                    \n                            <ng-container matColumnDef=\"view\">\n                                    <th mat-header-cell *matHeaderCellDef> View </th>\n                                    <td mat-cell *matCellDef=\"let element\"> \n                                            <button class=\"btn btn-success\" [routerLink]=\"[ '/user/connections-request',element.view,element.action]\">View Profile</button>\n                                    </td>\n                                </ng-container>\n                    \n                            <ng-container matColumnDef=\"action\">\n                                <th mat-header-cell *matHeaderCellDef> Action</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <button class=\"btn btn-danger\"  (click)=\"removeConnection(element.action)\">Remove Connection</button>\n                                </td>\n                            </ng-container>\n                    \n                    \n                    \n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>\n          </div>\n<!--    \n    <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let e of myConnections\">\n            <div class=\"card\">\n                <div class=\"box\">\n                    <div class=\"img\">\n                        <img\n                            src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\">\n                    </div>\n                    <h2>{{e.senderName}}<br><span>{{e.senderPosition}}</span></h2>\n                    <p> {{e.senderBio}}</p>\n                    <button type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\"\n                        [routerLink]=\"[ '/user/connections-request',e.userId,e._id]\"><i style=\"vertical-align: bottom;\"\n                            class=\"material-icons\">\n                            details\n                        </i> View Profile</button>\n                    <button type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\"\n                        (click)=\"removeConnection(e._id)\"><i style=\"vertical-align: bottom;\" class=\"material-icons\">\n                            details\n                        </i> Remove Connection</button>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-profile/connection-profile.component.html": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-profile/connection-profile.component.html ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container emp-profile\">\n    <form method=\"post\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-img\">\n                    <img src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\" alt=\"\"/>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"profile-head\">\n                            <h5>\n                              {{connectionUser.name}}            <i class=\"material-icons\" style=\"color:green\">\n                                  verified_user\n                                  </i>\n                            </h5>\n                            <h6>\n                                {{connectionUser.position}}\n                            </h6>\n                            <p class=\"proile-rating\">RANKINGS : <span>8/10</span></p>\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">About</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Timeline</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                    <button *ngIf=\"requestId\" type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\" (click)=\"acceptRequest(requestId)\"><i style=\"vertical-align: bottom;\" class=\"material-icons\">\n                         details\n                    </i> Accept</button>\n                <a href=\"mailto:{{connectionUser.email}}\" class=\"btn btn-lg btn-block btn-outline-primary\">Send Email</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-work\">\n                    <p>WORK AT</p>\n                    <div>{{connectionEmployer.name}}</div>\n                    <div>{{connectionEmployer.address}}</div>\n                    <a href=\"{{connectionEmployer.webSite}}\">{{connectionEmployer.webSite}}</a><br/>\n                    <p>SKILLS</p>\n                    <a href=\"\">Web Designer</a><br/>\n                    <a href=\"\">Web Developer</a><br/>\n                    <a href=\"\">WordPress</a><br/>\n                    <a href=\"\">WooCommerce</a><br/>\n                    <a href=\"\">PHP, .Net</a><br/>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Name</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.name}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Email</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.email}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Phone</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.contactNumber}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Gender</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.gender}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Profession</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.position}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Address</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.address}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>City</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.city}}</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Country</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>{{connectionUser.country}}</p>\n                                    </div>\n                                </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Experience</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>Expert</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>English Level</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p>Expert</p>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Availability</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <p *ngIf=\"connectionUser.partTime\">Part Time</p>\n                                        <p *ngIf=\"!connectionUser.partTime\">Full Time</p>\n                                      </div>\n                                </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <label>Biography</label><br/>\n                                <p>\n                                  {{connectionUser.bio}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>   \n    <div class=\"row\" style=\"float:right;\">\n      <a class=\"requestId == undefied\" [routerLink]=\"[ '/user/my-connections']\">Back to Connections</a>\n      <a *ngIf=\"requestId\" class=\"\" [routerLink]=\"[ '/user/connection-requests']\">Back to Connection Request</a>\n    </div>        \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-request/connection-request.component.html": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-request/connection-request.component.html ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top:4rem\">\n    <div class=\"container\" *ngIf=\"myConnections?.length == 0\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            You dont have a any pending connection requests.\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let e of myConnections\">\n            <div class=\"card\">\n                <div class=\"box\">\n                    <div class=\"img\">\n                        <img\n                            src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\">\n                    </div>\n                    <h2>{{e.senderName}}<br><span>{{e.senderPosition}}</span></h2>\n                    <p> {{e.senderBio}}</p>\n\n\n                    <button type=\"button\" style=\"margin-bottom:10px;\" class=\"btn btn-lg btn-block btn-outline-primary\"\n                        [routerLink]=\"[ '/user/connections-request',e.userId,e._id]\"><i style=\"vertical-align: bottom;\"\n                            class=\"material-icons\">\n                            details\n                        </i> View Profile</button>\n                    <a href=\"javascript:void(0);\" style=\"color:#dc3545;font-size: 19px;\"\n                        (click)=\"removeRequest(e._id)\"><i style=\" vertical-align: bottom;\" class=\"material-icons\">\n                            delete\n                        </i> Delete</a>&nbsp;\n                    <a href=\"javascript:void(0);\" style=\"color:green;font-size: 19px;\" (click)=\"acceptRequest(e._id)\"><i\n                            style=\"vertical-align: bottom;\" class=\"material-icons\">\n                            check_circle\n                        </i> Accept</a>\n                    <!-- <button type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\" (click)=\"acceptRequest(e._id)\"><i style=\"vertical-align: bottom;\" class=\"material-icons\">\n                                            details\n                                            </i> Accept</button> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/user-connnections.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/user-connnections.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top:4rem\">\n        <div class=\"container\" *ngIf=\"myConnections?.length == 0\">\n                <div class=\"alert alert-success\" role=\"alert\">\n                        You don't have a any connections till now.\n                      </div>\n        </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let e of myConnections\">\n            <div class=\"card\">\n                <div class=\"box\">\n                    <div class=\"img\">\n                        <img\n                            src=\"https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png\">\n                    </div>\n                    <h2>{{e.name}}<br><span>{{e.position}}</span></h2>\n                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        tempor incididunt ut labore et.</p>\n                        <button type=\"button\" class=\"btn btn-lg btn-block btn-outline-primary\" [routerLink]=\"[ '/user/my-connections',e.connectionId]\"><i style=\"vertical-align: bottom;\" class=\"material-icons\">\n                                details\n                                </i> View Profile</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-home/user-home.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-home/user-home.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-user-connnections> </app-user-connnections>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader-div\" *ngIf=\"inProgress\">\n    <div class=\"loader\"></div>\n</div>\n<div class=\"container emp-profile\">\n        <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"!currentUser?.verified && currentUser?.employer !== ''\">\n                Your profile is not verified Yet by your current employer\n            </div>\n    <form *ngIf=\"!isCompany\" [formGroup]=\"userDetailForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-img\">\n                    <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog\"\n                        alt=\"\" />\n                    <div class=\"file btn btn-lg btn-primary\">\n                        Change Photo\n                        <input type=\"file\" name=\"file\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"profile-head\">\n                    <h5>\n                        {{currentUser?.name}}\n                    </h5>\n                    <h6>\n                        {{currentUser?.position}}\n                    </h6>\n                    <!-- <p class=\"proile-rating\">RANKINGS : <span>8/10</span></p> -->\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                                aria-controls=\"home\" aria-selected=\"true\">About</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                                aria-controls=\"profile\" aria-selected=\"false\">Timeline</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <button class=\"btn btn-primary mr-1\">Save Profile</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-work\">\n                    <p>WORK LINK</p>\n                    <a href=\"\">Website Link</a><br />\n                    <a href=\"\">Bootsnipp Profile</a><br />\n                    <a href=\"\">Bootply Profile</a>\n                    <p>SKILLS</p>\n                    <a href=\"\">Web Designer</a><br />\n                    <a href=\"\">Web Developer</a><br />\n                    <a href=\"\">WordPress</a><br />\n                    <a href=\"\">WooCommerce</a><br />\n                    <a href=\"\">PHP, .Net</a><br />\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Phone</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"contactNumber\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.contactNumber.errors }\" />\n                                    <div *ngIf=\"submitted && f.contactNumber.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.contactNumber.error.required\">Phone Number is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Date of Birth</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field>\n                                    <input matInput [matDatepicker]=\"pickerdob\" formControlName=\"dob\"\n                                        placeholder=\"Choose a date\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"pickerdob\"></mat-datepicker-toggle>\n                                    <mat-datepicker #pickerdob></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Employer</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                <select formControlName=\"employer\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.employer.errors }\">\n                                    <option *ngFor=\"let c of companies\" [ngValue]=\"c.value\">{{ c.name }}</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.employer.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.employer.errors.required\">Employer is required</div>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <label>Position</label>\n                                </div>\n                                <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                                <input type=\"text\" formControlName=\"position\" class=\"form-control\"\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.position.errors }\" />\n                                                <div *ngIf=\"submitted && f.position.errors\" class=\"invalid-feedback\">\n                                                    <div *ngIf=\"f.position.error.required\">Position is required</div>\n                                                </div>\n                                            </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <label>Biography</label>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <textarea formControlName=\"bio\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.bio.errors }\"></textarea>\n                                            <div *ngIf=\"submitted && f.bio.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.bio.error.required\">Bio. is required</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Gender</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>\n                                    <input type=\"radio\" value=\"Male\" formControlName=\"gender\">\n                                    <span>Male</span>\n                                </label>\n                                &nbsp;\n                                <label>\n                                    <input type=\"radio\" value=\"Female\" formControlName=\"gender\">\n                                    <span>Female</span>\n                                </label> </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Employment Status</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>\n                                    <input type=\"radio\" value=\"true\" formControlName=\"fullTime\">\n                                    <span>Full-Time</span>\n                                </label>\n                                &nbsp;\n                                <label>\n                                    <input type=\"radio\" value=\"false\" formControlName=\"fullTime\">\n                                    <span>Part-Time</span>\n                                </label> </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Joining Date</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field>\n                                    <input matInput [matDatepicker]=\"picker\" formControlName=\"joiningDate\"\n                                        placeholder=\"Choose a date\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Address</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <textarea formControlName=\"address\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"></textarea>\n                                    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.address.error.required\">Address is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Postal Code</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"postalCode\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.postalCode.errors }\" />\n                                    <div *ngIf=\"submitted && f.postalCode.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.postalCode.error.required\">PostalCode is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>City</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"city\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" />\n                                    <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.city.error.required\">City is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Country</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"country\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\" />\n                                    <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.country.error.required\">Country is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n\n    <form *ngIf=\"isCompany\" [formGroup]=\"companyDetailForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-img\">\n                    <img src=\"https://www.cqse.eu/images/company/company-landscape.png\"\n                        alt=\"\" />\n                    <div class=\"file btn btn-lg btn-primary\">\n                        Change Photo\n                        <input type=\"file\" name=\"file\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"profile-head\">\n                    <h5>\n                        {{currentUser?.name}}\n                    </h5>\n                    <h6>\n                        {{currentUser?.webSite}}\n                    </h6>\n                    <!-- <p class=\"proile-rating\">RANKINGS : <span>8/10</span></p> -->\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                                aria-controls=\"home\" aria-selected=\"true\">About</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                                aria-controls=\"profile\" aria-selected=\"false\">Timeline</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <button class=\"btn btn-primary mr-1\">Save Profile</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"profile-work\">\n                    <p>WORK LINK</p>\n                    <a href=\"\">Website Link</a><br />\n                    <a href=\"\">Bootsnipp Profile</a><br />\n                    <a href=\"\">Bootply Profile</a>\n                    <p>SKILLS</p>\n                    <a href=\"\">Web Designer</a><br />\n                    <a href=\"\">Web Developer</a><br />\n                    <a href=\"\">WordPress</a><br />\n                    <a href=\"\">WooCommerce</a><br />\n                    <a href=\"\">PHP, .Net</a><br />\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Company Name</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.name.errors }\" />\n                                    <div *ngIf=\"submitted && c.name.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.name.errors.required\">Name is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Company Email</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"email\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.email.errors }\" />\n                                    <div *ngIf=\"submitted && c.email.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.email.errors.required\">Email is required</div>\n                                        <div *ngIf=\"c.email.errors.email\">Email must be a valid email address</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Corporate Phone</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"contactNumber\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.contactNumber.errors }\" />\n                                    <div *ngIf=\"submitted && c.contactNumber.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.contactNumber.error.required\">Phone Number is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Founded Date</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field>\n                                    <input matInput [matDatepicker]=\"pickerfounned\" formControlName=\"dob\"\n                                        placeholder=\"Choose a date\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"pickerfounned\"></mat-datepicker-toggle>\n                                    <mat-datepicker #pickerfounned></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Website</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"webSite\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.webSite.errors }\" />\n                                    <div *ngIf=\"submitted && c.webSite.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.webSite.error.required\">Website is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Biography</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <textarea formControlName=\"bio\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.bio.errors }\"></textarea>\n                                    <div *ngIf=\"submitted && c.bio.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.bio.error.required\">Bio. is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Address</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <textarea formControlName=\"address\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.address.errors }\"></textarea>\n                                    <div *ngIf=\"submitted && c.address.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.address.error.required\">Address is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Postal Code</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"postalCode\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.postalCode.errors }\" />\n                                    <div *ngIf=\"submitted && c.postalCode.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.postalCode.error.required\">PostalCode is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>City</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"city\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.city.errors }\" />\n                                    <div *ngIf=\"submitted && c.city.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.city.error.required\">City is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Country</label>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" formControlName=\"country\" class=\"form-control\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && c.country.errors }\" />\n                                    <div *ngIf=\"submitted && c.country.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"c.country.error.required\">Country is required</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-shift-schedules/user-shift-schedules.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-shift-schedules/user-shift-schedules.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:20px;\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n    \n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"row text-center\">\n                            <div class=\"col-md-4\">\n                                <div class=\"btn-group\">\n                                    <div class=\"btn btn-primary\" mwlCalendarPreviousView [view]=\"view\"\n                                        [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\n                                        Previous\n                                    </div>\n                                    <div class=\"btn btn-outline-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n                                        Today\n                                    </div>\n                                    <div class=\"btn btn-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n                                        (viewDateChange)=\"closeOpenMonthViewDay()\">\n                                        Next\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"btn-group\">\n                                    <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Month)\"\n                                        [class.active]=\"view === CalendarView.Month\">\n                                        Month\n                                    </div>\n                                    <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Week)\"\n                                        [class.active]=\"view === CalendarView.Week\">\n                                        Week\n                                    </div>\n                                    <div class=\"btn btn-primary\" (click)=\"setView(CalendarView.Day)\"\n                                        [class.active]=\"view === CalendarView.Day\">\n                                        Day\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <br />\n    \n                        <div [ngSwitch]=\"view\">\n                            <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\"\n                                [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\"\n                                (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                                (eventTimesChanged)=\"eventTimesChanged($event)\">\n                            </mwl-calendar-month-view>\n                            <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\"\n                                [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                                (eventTimesChanged)=\"eventTimesChanged($event)\">\n                            </mwl-calendar-week-view>\n                            <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"\n                                [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n                                (eventTimesChanged)=\"eventTimesChanged($event)\">\n                            </mwl-calendar-day-view>\n                        </div>\n    \n                        <!-- Everything you see below is just for the demo, you don't need to include it in your app -->\n    \n                        <br /><br /><br />\n    \n                        <ng-template #modalContent let-close=\"close\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\">Event action occurred</h5>\n                                <button type=\"button\" class=\"close\" (click)=\"close()\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div>\n                                    Action:\n                                    <pre>{{ modalData?.action }}</pre>\n                                </div>\n                                <div>\n                                    Event:\n                                    <pre>{{ modalData?.event | json }}</pre>\n                                </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n                                    OK\n                                </button>\n                            </div>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/_helpers/admin.guard.ts": 
        /*!*****************************************!*\
          !*** ./src/app/_helpers/admin.guard.ts ***!
          \*****************************************/
        /*! exports provided: AdminGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function () { return AdminGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var AdminGuard = /** @class */ (function () {
                function AdminGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AdminGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    var role = JSON.parse(localStorage.getItem('currentUser')).role;
                    if (currentUser && role == 'ADMIN') {
                        // logged in so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AdminGuard;
            }());
            AdminGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AdminGuard);
            /***/ 
        }),
        /***/ "./src/app/_helpers/auth.guard.ts": 
        /*!****************************************!*\
          !*** ./src/app/_helpers/auth.guard.ts ***!
          \****************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser) {
                        // logged in so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/_helpers/company.guard.ts": 
        /*!*******************************************!*\
          !*** ./src/app/_helpers/company.guard.ts ***!
          \*******************************************/
        /*! exports provided: CompanyGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyGuard", function () { return CompanyGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var CompanyGuard = /** @class */ (function () {
                function CompanyGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                CompanyGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    var role = JSON.parse(localStorage.getItem('currentUser')).role;
                    if (currentUser && role == "COMPANY") {
                        // logged in so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return CompanyGuard;
            }());
            CompanyGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            CompanyGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], CompanyGuard);
            /***/ 
        }),
        /***/ "./src/app/_helpers/error.interceptor.ts": 
        /*!***********************************************!*\
          !*** ./src/app/_helpers/error.interceptor.ts ***!
          \***********************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        if (err.status === 401) {
                            // auto logout if 401 response returned from api
                            _this.authenticationService.logout();
                            location.reload(true);
                        }
                        var error = err.error.message || err.statusText;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_helpers/fake-backend.ts": 
        /*!******************************************!*\
          !*** ./src/app/_helpers/fake-backend.ts ***!
          \******************************************/
        /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return FakeBackendInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return fakeBackendProvider; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
            var FakeBackendInterceptor = /** @class */ (function () {
                function FakeBackendInterceptor() {
                }
                FakeBackendInterceptor.prototype.intercept = function (request, next) {
                    var url = request.url, method = request.method, headers = request.headers, body = request.body;
                    // wrap in delayed observable to simulate server api call
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
                    function handleRoute() {
                        switch (true) {
                            case url.endsWith('/users/authenticate') && method === 'POST':
                                return authenticate();
                            case url.endsWith('/users') && method === 'GET':
                                return getUsers();
                            default:
                                // pass through any requests not handled above
                                return next.handle(request);
                        }
                    }
                    // route functions
                    function authenticate() {
                        var username = body.username, password = body.password;
                        var user = users.find(function (x) { return x.username === username && x.password === password; });
                        if (!user)
                            return error('Username or password is incorrect');
                        return ok({
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        });
                    }
                    function getUsers() {
                        if (!isLoggedIn())
                            return unauthorized();
                        return ok(users);
                    }
                    // helper functions
                    function ok(body) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                    }
                    function error(message) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
                    }
                    function unauthorized() {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                    }
                    function isLoggedIn() {
                        return headers.get('Authorization') === 'Bearer fake-jwt-token';
                    }
                };
                return FakeBackendInterceptor;
            }());
            FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], FakeBackendInterceptor);
            var fakeBackendProvider = {
                // use fake backend in place of Http service for backend-less development
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: FakeBackendInterceptor,
                multi: true
            };
            /***/ 
        }),
        /***/ "./src/app/_helpers/index.ts": 
        /*!***********************************!*\
          !*** ./src/app/_helpers/index.ts ***!
          \***********************************/
        /*! exports provided: AuthGuard, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider, JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });
            /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });
            /* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });
            /* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"]; });
            /***/ 
        }),
        /***/ "./src/app/_helpers/jwt.interceptor.ts": 
        /*!*********************************************!*\
          !*** ./src/app/_helpers/jwt.interceptor.ts ***!
          \*********************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    // add authorization header with jwt token if available
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser && currentUser.token) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: "Bearer " + currentUser.token
                            }
                        });
                    }
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/_services/authentication.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/_services/authentication.service.ts ***!
          \*****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.login = function (email, password) {
                    var _this = this;
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/users/login", { email: email, password: password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        _this.currentUserSubject.next(user);
                        return user;
                    }));
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/_services/company.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/_services/company.service.ts ***!
          \**********************************************/
        /*! exports provided: CompanyService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function () { return CompanyService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var CompanyService = /** @class */ (function () {
                function CompanyService(http) {
                    this.http = http;
                }
                CompanyService.prototype.getAllCompanies = function () {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/allCompany", {});
                };
                CompanyService.prototype.getCompanyById = function (id) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/getCompanyById", { id: id });
                };
                CompanyService.prototype.getVerificationRequest = function (employer) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/getVerificationRequests", { employer: employer });
                };
                CompanyService.prototype.getEmployees = function (employer) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/getEmployees", { employer: employer });
                };
                CompanyService.prototype.getVerifiedUsers = function (employer) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/getVerifiedUsers", { employer: employer });
                };
                return CompanyService;
            }());
            CompanyService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], CompanyService);
            /***/ 
        }),
        /***/ "./src/app/_services/connections.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/_services/connections.service.ts ***!
          \**************************************************/
        /*! exports provided: ConnectionsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsService", function () { return ConnectionsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var ConnectionsService = /** @class */ (function () {
                function ConnectionsService(http) {
                    this.http = http;
                }
                ConnectionsService.prototype.makeConnection = function (userId, connectionId, name, employer, position, bio, senderName, senderEmployer, senderPosition, senderBio) {
                    var role = 'REGULAR';
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/connections/addConnection", { userId: userId, connectionId: connectionId, name: name, employer: employer, position: position, bio: bio, senderName: senderName, senderEmployer: senderEmployer, senderPosition: senderPosition, senderBio: senderBio });
                };
                ConnectionsService.prototype.getMyConnection = function (userId) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/connections/getMyConnnections", { userId: userId });
                };
                ConnectionsService.prototype.getMyConnectionRequests = function (connectionId) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/connections/getConnnectionRequests", { connectionId: connectionId });
                };
                ConnectionsService.prototype.getMyConnectionRequestsApproved = function (connectionId) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/connections/getConnnectionRequestsApproved", { connectionId: connectionId });
                };
                ConnectionsService.prototype.acceptRequest = function (Id) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/connections/acceptRequest", { Id: Id });
                };
                ConnectionsService.prototype.removeConnection = function (Id) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/connections/removeConnection", { Id: Id });
                };
                return ConnectionsService;
            }());
            ConnectionsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ConnectionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], ConnectionsService);
            /***/ 
        }),
        /***/ "./src/app/_services/index.ts": 
        /*!************************************!*\
          !*** ./src/app/_services/index.ts ***!
          \************************************/
        /*! exports provided: AuthenticationService, UserService, CompanyService, ConnectionsService, UsershiftsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });
            /* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.service */ "./src/app/_services/company.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function () { return _company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]; });
            /* harmony import */ var _connections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connections.service */ "./src/app/_services/connections.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionsService", function () { return _connections_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionsService"]; });
            /* harmony import */ var _usershifts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usershifts.service */ "./src/app/_services/usershifts.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsershiftsService", function () { return _usershifts_service__WEBPACK_IMPORTED_MODULE_5__["UsershiftsService"]; });
            /***/ 
        }),
        /***/ "./src/app/_services/user.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/_services/user.service.ts ***!
          \*******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.getAll = function () {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/all", {});
                };
                UserService.prototype.verifyCompany = function (email) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/verify", { email: email });
                };
                UserService.prototype.verifyUser = function (email) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/verify", { email: email });
                };
                UserService.prototype.deleteCompany = function (email) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/delete", { email: email });
                };
                UserService.prototype.deleteUser = function (email) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/delete", { email: email });
                };
                UserService.prototype.registerUser = function (name, email, password, confirmPassword) {
                    var role = 'REGULAR';
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/register", { name: name, email: email, password: password, confirmPassword: confirmPassword, role: role });
                };
                UserService.prototype.registerCompany = function (name, email, password, confirmPassword) {
                    var role = 'COMPANY';
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/register", { name: name, email: email, password: password, confirmPassword: confirmPassword, role: role });
                };
                UserService.prototype.getCurrentUser = function () {
                    var currentUSer = JSON.parse(localStorage.getItem('currentUser'));
                    var id = currentUSer.id;
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/getUser", { id: id });
                };
                UserService.prototype.getUser = function (id) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/getUser", { id: id });
                };
                UserService.prototype.updateUser = function (profileData) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/updateUser", { profileData: profileData });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/_services/usershifts.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/_services/usershifts.service.ts ***!
          \*************************************************/
        /*! exports provided: UsershiftsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsershiftsService", function () { return UsershiftsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var UsershiftsService = /** @class */ (function () {
                function UsershiftsService(http) {
                    this.http = http;
                }
                UsershiftsService.prototype.addShift = function (userId, data) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/usershifts/addShift", { userId: userId, data: data });
                };
                UsershiftsService.prototype.getUserShift = function (userId) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/usershifts/getShift", { userId: userId });
                };
                UsershiftsService.prototype.removeConnection = function (userId, start, end) {
                    console.log("inside");
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/usershifts/removeShift", { userId: userId, start: start, end: end });
                };
                return UsershiftsService;
            }());
            UsershiftsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UsershiftsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], UsershiftsService);
            /***/ 
        }),
        /***/ "./src/app/angular-material.module.ts": 
        /*!********************************************!*\
          !*** ./src/app/angular-material.module.ts ***!
          \********************************************/
        /*! exports provided: AngularMaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () { return AngularMaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var AngularMaterialModule = /** @class */ (function () {
                function AngularMaterialModule() {
                }
                return AngularMaterialModule;
            }());
            AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
                    ],
                    exports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
                    ],
                    providers: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                    ]
                })
            ], AngularMaterialModule);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
            /* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
            /* harmony import */ var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
            /* harmony import */ var _components_company_company_home_company_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company/company-home/company-home.component */ "./src/app/components/company/company-home/company-home.component.ts");
            /* harmony import */ var _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/admin.guard */ "./src/app/_helpers/admin.guard.ts");
            /* harmony import */ var _helpers_company_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_helpers/company.guard */ "./src/app/_helpers/company.guard.ts");
            /* harmony import */ var _components_company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/company/company-details/company-details.component */ "./src/app/components/company/company-details/company-details.component.ts");
            /* harmony import */ var _components_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user-home/user-home.component */ "./src/app/components/user/user-home/user-home.component.ts");
            /* harmony import */ var _components_user_user_connnections_user_connnections_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/user-connnections/user-connnections.component */ "./src/app/components/user/user-connnections/user-connnections.component.ts");
            /* harmony import */ var _components_user_user_connnections_connection_profile_connection_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/user-connnections/connection-profile/connection-profile.component */ "./src/app/components/user/user-connnections/connection-profile/connection-profile.component.ts");
            /* harmony import */ var _components_user_user_connnections_connection_request_connection_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/user-connnections/connection-request/connection-request.component */ "./src/app/components/user/user-connnections/connection-request/connection-request.component.ts");
            /* harmony import */ var _components_user_user_connnections_connection_approved_list_connection_approved_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/user-connnections/connection-approved-list/connection-approved-list.component */ "./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.ts");
            /* harmony import */ var _components_company_company_employee_list_company_employee_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/company/company-employee-list/company-employee-list.component */ "./src/app/components/company/company-employee-list/company-employee-list.component.ts");
            /* harmony import */ var _components_company_company_scheduler_company_scheduler_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/company/company-scheduler/company-scheduler.component */ "./src/app/components/company/company-scheduler/company-scheduler.component.ts");
            /* harmony import */ var _components_user_user_shift_schedules_user_shift_schedules_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user/user-shift-schedules/user-shift-schedules.component */ "./src/app/components/user/user-shift-schedules/user-shift-schedules.component.ts");
            var routes = [
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                { path: 'login', component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__["LogInComponent"] },
                { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
                { path: 'profile', component: _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _helpers_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]] },
                { path: 'company-home', component: _components_company_company_home_company_home_component__WEBPACK_IMPORTED_MODULE_9__["CompanyHomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _helpers_company_guard__WEBPACK_IMPORTED_MODULE_11__["CompanyGuard"]] },
                { path: 'company-details/:id', component: _components_company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_12__["CompanyDetailsComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user-home', component: _components_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_13__["UserHomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user/my-connections', component: _components_user_user_connnections_user_connnections_component__WEBPACK_IMPORTED_MODULE_14__["UserConnnectionsComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user/my-shift-schedules', component: _components_user_user_shift_schedules_user_shift_schedules_component__WEBPACK_IMPORTED_MODULE_20__["UserShiftSchedulesComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'company/scheduler/:id', component: _components_company_company_scheduler_company_scheduler_component__WEBPACK_IMPORTED_MODULE_19__["CompanySchedulerComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'company/employee-list', component: _components_company_company_employee_list_company_employee_list_component__WEBPACK_IMPORTED_MODULE_18__["CompanyEmployeeListComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user/connection-requests', component: _components_user_user_connnections_connection_request_connection_request_component__WEBPACK_IMPORTED_MODULE_16__["ConnectionRequestComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user/connection-requests-approved', component: _components_user_user_connnections_connection_approved_list_connection_approved_list_component__WEBPACK_IMPORTED_MODULE_17__["ConnectionApprovedListComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user/my-connections/:id', component: _components_user_user_connnections_connection_profile_connection_profile_component__WEBPACK_IMPORTED_MODULE_15__["ConnectionProfileComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'user/connections-request/:id/:requestId', component: _components_user_user_connnections_connection_profile_connection_profile_component__WEBPACK_IMPORTED_MODULE_15__["ConnectionProfileComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Change this breakpoint if you change the breakpoint of the navbar */\n@media (min-width: 992px) {\n  .animate {\n    animation-duration: 0.3s;\n    -webkit-animation-duration: 0.3s;\n    animation-fill-mode: both;\n    -webkit-animation-fill-mode: both;\n  }\n}\n@keyframes slideIn {\n  0% {\n    transform: translateY(1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0rem);\n    opacity: 1;\n  }\n  0% {\n    transform: translateY(1rem);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes slideIn {\n  0% {\n    -webkit-transform: transform;\n    -webkit-opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateY(0);\n    -webkit-opacity: 1;\n  }\n  0% {\n    -webkit-transform: translateY(1rem);\n    -webkit-opacity: 0;\n  }\n}\n.slideIn {\n  -webkit-animation-name: slideIn;\n  animation-name: slideIn;\n}\n.nav-blue {\n  background: #0f50a0;\n  background: linear-gradient(#115cb7, #0f50a0);\n}\n.nav-blue a {\n  color: white;\n}\n.nav-blue a i {\n  vertical-align: bottom;\n}\n.nav-blue a:hover {\n  background: rgba(255, 255, 255, 0.2);\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxFbXBsb3llZS1JbnRlckxpbmtlci1tYXN0ZXJcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3Rlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQUE7QUFDQTtFQUNJO0lBQ0Usd0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsaUNBQUE7RUNDSjtBQUNGO0FERUU7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ0FKO0VERUU7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNBSjtFREVFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VDQUo7QUFDRjtBREdFO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLGtCQUFBO0VDREo7RURHRTtJQUNFLGdDQUFBO0lBQ0Esa0JBQUE7RUNESjtFREdFO0lBQ0UsbUNBQUE7SUFDQSxrQkFBQTtFQ0RKO0FBQ0Y7QURJRTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFFQSw2Q0FBQTtBQ0ZKO0FER0k7RUFDRSxZQUFBO0FDRE47QURFTTtFQUNFLHNCQUFBO0FDQVI7QURFTTtFQUNFLG9DQUFBO0VBVUEsZ0ZBQUE7QUNSUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENoYW5nZSB0aGlzIGJyZWFrcG9pbnQgaWYgeW91IGNoYW5nZSB0aGUgYnJlYWtwb2ludCBvZiB0aGUgbmF2YmFyICovXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYW5pbWF0ZSB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHJlbSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2Zvcm07XG4gICAgICAtd2Via2l0LW9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAtd2Via2l0LW9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFyZW0pO1xuICAgICAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlSW4ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG4gIH1cblxuICAubmF2LWJsdWUge1xuICAgIGJhY2tncm91bmQ6ICMwZjUwYTA7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTE1Y2I3LCAjMGY1MGEwKTtcbiAgICBhIHtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgaXtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIFxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxuICAgICAgICAgIGxpbmVhcixcbiAgICAgICAgICBsZWZ0IHRvcCxcbiAgICAgICAgICBsZWZ0IGJvdHRvbSxcbiAgICAgICAgICBmcm9tKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksXG4gICAgICAgICAgdG8ocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSlcbiAgICAgICAgKTtcbiAgXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi8qIENoYW5nZSB0aGlzIGJyZWFrcG9pbnQgaWYgeW91IGNoYW5nZSB0aGUgYnJlYWtwb2ludCBvZiB0aGUgbmF2YmFyICovXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmFuaW1hdGUge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zZm9ybTtcbiAgICAtd2Via2l0LW9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgLXdlYmtpdC1vcGFjaXR5OiAxO1xuICB9XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcmVtKTtcbiAgICAtd2Via2l0LW9wYWNpdHk6IDA7XG4gIH1cbn1cbi5zbGlkZUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW47XG59XG5cbi5uYXYtYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwZjUwYTA7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzExNWNiNyksIHRvKCMwZjUwYTApKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxMTVjYjcsICMwZjUwYTApO1xufVxuLm5hdi1ibHVlIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2LWJsdWUgYSBpIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi5uYXYtYmx1ZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, authenticationService) {
                    var _this = this;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.isRegular = false;
                    this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
                }
                AppComponent.prototype.ngOnInit = function () {
                    if (JSON.parse(localStorage.getItem("currentUser")).role === 'REGULAR') {
                        this.isRegular = true;
                    }
                };
                AppComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default, styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default] })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
            /* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
            /* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ng_angular8_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-angular8-datatable */ "./node_modules/ng-angular8-datatable/index.js");
            /* harmony import */ var ng_angular8_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(ng_angular8_datatable__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
            /* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
            /* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
            /* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
            /* harmony import */ var _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
            /* harmony import */ var _components_company_company_home_company_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/company/company-home/company-home.component */ "./src/app/components/company/company-home/company-home.component.ts");
            /* harmony import */ var _components_company_company_home_commentbox_commentbox_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/company/company-home/commentbox/commentbox.component */ "./src/app/components/company/company-home/commentbox/commentbox.component.ts");
            /* harmony import */ var _components_company_company_home_commentbox_comments_comments_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/company/company-home/commentbox/comments/comments.component */ "./src/app/components/company/company-home/commentbox/comments/comments.component.ts");
            /* harmony import */ var _components_company_company_home_commentbox_childbox_childbox_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/company/company-home/commentbox/childbox/childbox.component */ "./src/app/components/company/company-home/commentbox/childbox/childbox.component.ts");
            /* harmony import */ var _components_company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/company/company-details/company-details.component */ "./src/app/components/company/company-details/company-details.component.ts");
            /* harmony import */ var _components_user_user_connnections_user_connnections_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user/user-connnections/user-connnections.component */ "./src/app/components/user/user-connnections/user-connnections.component.ts");
            /* harmony import */ var _components_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user/user-home/user-home.component */ "./src/app/components/user/user-home/user-home.component.ts");
            /* harmony import */ var _components_user_user_connnections_connection_profile_connection_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user/user-connnections/connection-profile/connection-profile.component */ "./src/app/components/user/user-connnections/connection-profile/connection-profile.component.ts");
            /* harmony import */ var _components_user_user_connnections_connection_request_connection_request_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user/user-connnections/connection-request/connection-request.component */ "./src/app/components/user/user-connnections/connection-request/connection-request.component.ts");
            /* harmony import */ var _components_user_user_connnections_connection_approved_list_connection_approved_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user/user-connnections/connection-approved-list/connection-approved-list.component */ "./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.ts");
            /* harmony import */ var _components_company_company_employee_list_company_employee_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/company/company-employee-list/company-employee-list.component */ "./src/app/components/company/company-employee-list/company-employee-list.component.ts");
            /* harmony import */ var _components_company_company_scheduler_company_scheduler_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/company/company-scheduler/company-scheduler.component */ "./src/app/components/company/company-scheduler/company-scheduler.component.ts");
            /* harmony import */ var _components_user_user_shift_schedules_user_shift_schedules_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user/user-shift-schedules/user-shift-schedules.component */ "./src/app/components/user/user-shift-schedules/user-shift-schedules.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"],
                        _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                        _components_user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_21__["UserProfileComponent"],
                        _components_company_company_home_company_home_component__WEBPACK_IMPORTED_MODULE_22__["CompanyHomeComponent"],
                        _components_company_company_home_commentbox_commentbox_component__WEBPACK_IMPORTED_MODULE_23__["CommentboxComponent"],
                        _components_company_company_home_commentbox_comments_comments_component__WEBPACK_IMPORTED_MODULE_24__["CommentsComponent"],
                        _components_company_company_home_commentbox_childbox_childbox_component__WEBPACK_IMPORTED_MODULE_25__["ChildboxComponent"],
                        _components_company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_26__["CompanyDetailsComponent"],
                        _components_user_user_connnections_user_connnections_component__WEBPACK_IMPORTED_MODULE_27__["UserConnnectionsComponent"],
                        _components_user_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_28__["UserHomeComponent"],
                        _components_user_user_connnections_connection_profile_connection_profile_component__WEBPACK_IMPORTED_MODULE_29__["ConnectionProfileComponent"],
                        _components_user_user_connnections_connection_request_connection_request_component__WEBPACK_IMPORTED_MODULE_30__["ConnectionRequestComponent"],
                        _components_user_user_connnections_connection_approved_list_connection_approved_list_component__WEBPACK_IMPORTED_MODULE_31__["ConnectionApprovedListComponent"],
                        _components_company_company_employee_list_company_employee_list_component__WEBPACK_IMPORTED_MODULE_32__["CompanyEmployeeListComponent"],
                        _components_company_company_scheduler_company_scheduler_component__WEBPACK_IMPORTED_MODULE_33__["CompanySchedulerComponent"],
                        _components_user_user_shift_schedules_user_shift_schedules_component__WEBPACK_IMPORTED_MODULE_34__["UserShiftSchedulesComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        ng_angular8_datatable__WEBPACK_IMPORTED_MODULE_12__["DataTableModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModalModule"],
                        ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
                        angularx_flatpickr__WEBPACK_IMPORTED_MODULE_16__["FlatpickrModule"].forRoot(),
                        angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({
                            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"],
                            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__["adapterFactory"]
                        })
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                        // provider used to create fake backend
                        _helpers__WEBPACK_IMPORTED_MODULE_7__["fakeBackendProvider"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/admin/admin.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/components/admin/admin.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-counter {\n  box-shadow: 2px 2px 10px #DADADA;\n  margin: 5px;\n  padding: 20px 10px;\n  background-color: #fff;\n  height: 100px;\n  border-radius: 5px;\n  transition: 0.3s linear all;\n}\n\n.card-counter:hover {\n  box-shadow: 4px 4px 20px #DADADA;\n  transition: 0.3s linear all;\n}\n\n.card-counter.primary {\n  background-color: #007bff;\n  color: #FFF;\n}\n\n.card-counter.danger {\n  background-color: #ef5350;\n  color: #FFF;\n}\n\n.card-counter.success {\n  background-color: #66bb6a;\n  color: #FFF;\n}\n\n.card-counter.info {\n  background-color: #26c6da;\n  color: #FFF;\n}\n\n.card-counter i {\n  font-size: 5em;\n  opacity: 0.2;\n}\n\n.card-counter .count-numbers {\n  position: absolute;\n  right: 35px;\n  top: 20px;\n  font-size: 32px;\n  display: block;\n}\n\n.card-counter .count-name {\n  position: absolute;\n  right: 35px;\n  top: 65px;\n  font-style: italic;\n  text-transform: capitalize;\n  opacity: 0.5;\n  display: block;\n  font-size: 18px;\n}\n\ntable {\n  width: 100%;\n}\n\n.material-icons {\n  vertical-align: middle;\n}\n\ntd.mat-cell {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.delete-icon {\n  color: red;\n}\n\n.mr-5 {\n  margin-right: 5px;\n}\n\n.rounded-circle {\n  border: 4px solid #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRTtFQUNFLGdDQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7QUNFSjs7QURBRTtFQUNFLHNCQUFBO0FDR0o7O0FEREU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDSUo7O0FERkE7RUFDRSxVQUFBO0FDS0Y7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb3VudGVye1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjREFEQURBO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IC4zcyBsaW5lYXIgYWxsO1xuICB9XG5cbiAgLmNhcmQtY291bnRlcjpob3ZlcntcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDIwcHggI0RBREFEQTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyIGFsbDtcbiAgfVxuXG4gIC5jYXJkLWNvdW50ZXIucHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG5cbiAgLmNhcmQtY291bnRlci5kYW5nZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgfSAgXG5cbiAgLmNhcmQtY291bnRlci5zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XG4gICAgY29sb3I6ICNGRkY7XG4gIH0gIFxuXG4gIC5jYXJkLWNvdW50ZXIuaW5mb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZjNmRhO1xuICAgIGNvbG9yOiAjRkZGO1xuICB9ICBcblxuICAuY2FyZC1jb3VudGVyIGl7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG5cbiAgLmNhcmQtY291bnRlciAuY291bnQtbnVtYmVyc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM1cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jYXJkLWNvdW50ZXIgLmNvdW50LW5hbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzNXB4O1xuICAgIHRvcDogNjVweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1hdGVyaWFsLWljb25ze1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmRlbGV0ZS1pY29ue1xuICBjb2xvcjpyZWQ7XG59XG5cbi5tci01e1xuICBtYXJnaW4tcmlnaHQ6NXB4O1xufVxuXG4ucm91bmRlZC1jaXJjbGV7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmMmYyZjI7XG59IiwiLmNhcmQtY291bnRlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjREFEQURBO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgbGluZWFyIGFsbDtcbn1cblxuLmNhcmQtY291bnRlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMjBweCAjREFEQURBO1xuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhciBhbGw7XG59XG5cbi5jYXJkLWNvdW50ZXIucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLmRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uY2FyZC1jb3VudGVyLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmNhcmQtY291bnRlci5pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YzZkYTtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5jYXJkLWNvdW50ZXIgaSB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5jYXJkLWNvdW50ZXIgLmNvdW50LW51bWJlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkLWNvdW50ZXIgLmNvdW50LW5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICB0b3A6IDY1cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudGQubWF0LWNlbGwge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5kZWxldGUtaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tci01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmMmYyZjI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/admin/admin.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/admin/admin.component.ts ***!
          \*****************************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(http, userService, ref) {
                    this.http = http;
                    this.userService = userService;
                    this.ref = ref;
                    this.isLoading = false;
                    this.isCompanyView = true;
                    this.totalCompanies = 0;
                    this.totalUSers = 0;
                    this.totalVerifiedUsers = 0;
                    this.totalVerifiedCompanies = 0;
                    this.dataVarCompanies = [];
                    this.dataVarUsers = [];
                    this.displayedColumns = ["avatar", "date", "email", "name", "numbersOfEmployees", "webSite", "verified"];
                    this.displayedUserColumns = ["avatar", "date", "email", "name", "gender", "Full-time/Part-time", "verified",];
                    this.dataSource = [];
                    this.dataSourceUsers = [];
                    this.title = 'app';
                }
                AdminComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.userService.getAll().subscribe(function (data) {
                        _this.setDataCompany(data);
                    });
                    this.isLoading = false;
                    //this.dataSource.paginator = this.paginator;
                };
                AdminComponent.prototype.applyFilter = function (filterValue) {
                    //this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                AdminComponent.prototype.setDataCompany = function (data) {
                    var _this = this;
                    this.dataVarCompanies = [];
                    this.dataVarUsers = [];
                    this.totalVerifiedCompanies = 0;
                    this.totalVerifiedUsers = 0;
                    data.data.forEach(function (element) {
                        if (element.role === "COMPANY") {
                            if (element.verified) {
                                _this.totalVerifiedCompanies += 1;
                            }
                            _this.dataVarCompanies.push({
                                avatar: element.avatar,
                                date: element.date,
                                email: element.email,
                                fullTime: element.fullTime,
                                gender: element.gender,
                                name: element.name,
                                partTime: element.partTime,
                                verified: element.verified,
                                webSite: element.webSite
                            });
                        }
                        else if (element.role === "REGULAR") {
                            if (element.verified) {
                                _this.totalVerifiedUsers += 1;
                            }
                            _this.dataVarUsers.push({
                                avatar: element.avatar,
                                date: element.date,
                                email: element.email,
                                fullTime: element.fullTime,
                                gender: element.gender,
                                name: element.name,
                                partTime: element.partTime,
                                verified: element.verified,
                            });
                        }
                    });
                    this.totalCompanies = this.dataVarCompanies.length;
                    this.totalUSers = this.dataVarUsers.length;
                    this.dataSource = this.dataVarCompanies;
                    this.dataSourceUsers = this.dataVarUsers;
                };
                AdminComponent.prototype.onUserView = function () {
                    this.isCompanyView = false;
                };
                AdminComponent.prototype.onCompanyView = function () {
                    this.isCompanyView = true;
                };
                AdminComponent.prototype.onVerifyCompany = function (email) {
                    var _this = this;
                    this.userService.verifyCompany(email).subscribe(function (data) {
                        _this.userService.getAll().subscribe(function (data) {
                            _this.setDataCompany(data);
                        });
                    });
                };
                AdminComponent.prototype.onDeleteCompany = function (email) {
                    var _this = this;
                    this.userService.deleteCompany(email).subscribe(function (data) {
                        _this.userService.getAll().subscribe(function (data) {
                            _this.setDataCompany(data);
                        });
                    });
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
            ], AdminComponent.prototype, "paginator", void 0);
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-details/company-details.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/company/company-details/company-details.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-profile-image img {\n  position: absolute;\n  left: 50%;\n  max-width: 180px;\n  transition: all 0.15s ease;\n  transform: translate(-50%, -30%);\n  border-radius: 0.375rem;\n}\n\n.nav-blue {\n  background: #0f50a0;\n  background: linear-gradient(#115cb7, #0f50a0);\n}\n\n.mat-elevation-z8 {\n  width: 100%;\n}\n\n.shadow,\n.card-profile-image img {\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;\n}\n\n.mt--7 {\n  margin-top: 6rem !important;\n}\n\n.card-profile-image {\n  position: relative;\n}\n\n.card-profile-image img {\n  position: absolute;\n  left: 50%;\n  max-width: 180px;\n  transition: all 0.15s ease;\n  transform: translate(-50%, -30%);\n  border-radius: 0.375rem;\n}\n\n.card-profile-image img:hover {\n  transform: translate(-50%, -33%);\n}\n\n.card-profile-stats {\n  padding: 1rem 0;\n}\n\n.card-profile-stats > div {\n  margin-right: 1rem;\n  padding: 0.875rem;\n  text-align: center;\n}\n\n.card-profile-stats > div:last-child {\n  margin-right: 0;\n}\n\n.card-profile-stats > div .heading {\n  font-size: 1.1rem;\n  font-weight: bold;\n  display: block;\n}\n\n.card-profile-stats > div .description {\n  font-size: 0.875rem;\n  color: #adb5bd;\n}\n\n.main-content {\n  position: relative;\n}\n\n.footer {\n  padding: 2.5rem 0;\n  background: #f7fafc;\n}\n\n.footer .copyright {\n  font-size: 0.875rem;\n}\n\n@media (min-width: 768px) {\n  @-webkit-keyframes show-navbar-dropdown {\n    0% {\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n      opacity: 0;\n    }\n    100% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes show-navbar-dropdown {\n    0% {\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n      opacity: 0;\n    }\n    100% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n  }\n  @-webkit-keyframes hide-navbar-dropdown {\n    from {\n      opacity: 1;\n    }\n    to {\n      transform: translate(0, 10px);\n      opacity: 0;\n    }\n  }\n  @keyframes hide-navbar-dropdown {\n    from {\n      opacity: 1;\n    }\n    to {\n      transform: translate(0, 10px);\n      opacity: 0;\n    }\n  }\n}\n\n@-webkit-keyframes show-navbar-collapse {\n  0% {\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes show-navbar-collapse {\n  0% {\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes hide-navbar-collapse {\n  from {\n    transform: scale(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n}\n\n@keyframes hide-navbar-collapse {\n  from {\n    transform: scale(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n}\n\np {\n  font-size: 1rem;\n  font-weight: 300;\n  line-height: 1.7;\n}\n\n.description {\n  font-size: 0.875rem;\n}\n\n.heading {\n  font-size: 0.95rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktZGV0YWlscy9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wYW55XFxjb21wYW55LWRldGFpbHNcXGNvbXBhbnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktZGV0YWlscy9jb21wYW55LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFFQSw2Q0FBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBRERBOztFQUVFLDJEQUFBO0FDSUY7O0FEREE7RUFDRSwyQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FDSUY7O0FEREE7RUFDRSxnQ0FBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QUREQTtFQUNFO0lBQ0U7TUFDRSw0REFBQTtNQUNBLCtEQUFBO01BQ0EsVUFBQTtJQ0lGO0lEREE7TUFDRSwwQkFBQTtNQUNBLFVBQUE7SUNHRjtFQUNGO0VEYkE7SUFDRTtNQUNFLDREQUFBO01BQ0EsK0RBQUE7TUFDQSxVQUFBO0lDSUY7SUREQTtNQUNFLDBCQUFBO01BQ0EsVUFBQTtJQ0dGO0VBQ0Y7RURBQTtJQUNFO01BQ0UsVUFBQTtJQ0VGO0lEQ0E7TUFDRSw2QkFBQTtNQUNBLFVBQUE7SUNDRjtFQUNGO0VEVEE7SUFDRTtNQUNFLFVBQUE7SUNFRjtJRENBO01BQ0UsNkJBQUE7TUFDQSxVQUFBO0lDQ0Y7RUFDRjtBQUNGOztBREVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUNERjtBQUNGOztBRFRBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0FGO0VER0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0ZGO0VES0E7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0ZGO0VES0E7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktZGV0YWlscy9jb21wYW55LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcm9maWxlLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLm5hdi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzBmNTBhMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExNWNiNywgIzBmNTBhMCk7XG59XG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNoYWRvdyxcbi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMCByZ2JhKDEzNiwgMTUyLCAxNzAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0tNyB7XG4gIG1hcmdpbi10b3A6IDZyZW0gIWltcG9ydGFudDtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzMlKTtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgcGFkZGluZzogMC44NzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzID4gZGl2IC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdiAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogI2FkYjViZDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjZjdmYWZjO1xufVxuXG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgQGtleWZyYW1lcyBzaG93LW5hdmJhci1kcm9wZG93biB7XG4gICAgMCUge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcGVyc3BlY3RpdmUoMjAwcHgpIHJvdGF0ZVgoLTJkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWRyb3Bkb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWNvbGxhcHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlLW5hdmJhci1jb2xsYXBzZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbnAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5uYXYtYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwZjUwYTA7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzExNWNiNyksIHRvKCMwZjUwYTApKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxMTVjYjcsICMwZjUwYTApO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hhZG93LFxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWcge1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSAwIHJnYmEoMTM2LCAxNTIsIDE3MCwgMC4xNSkgIWltcG9ydGFudDtcbn1cblxuLm10LS03IHtcbiAgbWFyZ2luLXRvcDogNnJlbSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1wcm9maWxlLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1wcm9maWxlLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuXG4uY2FyZC1wcm9maWxlLWltYWdlIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMyUpO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzID4gZGl2IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nOiAwLjg3NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzID4gZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJkLXByb2ZpbGUtc3RhdHMgPiBkaXYgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzID4gZGl2IC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjYWRiNWJkO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMi41cmVtIDA7XG4gIGJhY2tncm91bmQ6ICNmN2ZhZmM7XG59XG5cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBAa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWRyb3Bkb3duIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMjVzLCBvcGFjaXR5IDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXM7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSBwZXJzcGVjdGl2ZSgyMDBweCkgcm90YXRlWCgtMmRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBoaWRlLW5hdmJhci1kcm9wZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5Aa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWNvbGxhcHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWNvbGxhcHNlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5wIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-details/company-details.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/company/company-details/company-details.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: CompanyDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function () { return CompanyDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            var ELEMENT_DATA = [
                { avatar: "f", name: 'Hydrogen', position: "fasdfa", action: 'H', bio: '' }
            ];
            var CompanyDetailsComponent = /** @class */ (function () {
                function CompanyDetailsComponent(route, companyService, connectionsService, userService) {
                    this.route = route;
                    this.companyService = companyService;
                    this.connectionsService = connectionsService;
                    this.userService = userService;
                    this.employeeList = [];
                    this.displayedColumns = ["avatar", "name", "position", "action"];
                }
                CompanyDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (param) {
                        _this.companyId = param.id;
                    });
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.userService.getUser(this.currentUserId).subscribe(function (res) {
                        _this.currentUser = res.data;
                    });
                    this.companyService.getCompanyById(this.companyId).subscribe(function (res) {
                        _this.currentCompany = res.data;
                    });
                    this.connectionsService.getMyConnection(this.currentUserId).subscribe(function (res) {
                        _this.myConnection = res;
                        _this.companyService.getVerifiedUsers(_this.companyId).subscribe(function (res) {
                            _this.setEmployeeList(res);
                        });
                    });
                    console.log("Company Id:", this.companyId);
                };
                CompanyDetailsComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                CompanyDetailsComponent.prototype.setEmployeeList = function (res) {
                    var _this = this;
                    this.employeeList = [];
                    res.data.forEach(function (element) {
                        if (_this.myConnection.data.length > 0) {
                            _this.myConnection.data.forEach(function (c) {
                                if (c.connectionId != element._id && _this.currentUserId != element._id) {
                                    _this.employeeList.push({
                                        avatar: element.avatar,
                                        name: element.name,
                                        position: element.position,
                                        action: element._id,
                                        bio: element.bio,
                                    });
                                }
                            });
                        }
                        else {
                            if (_this.currentUserId != element._id) {
                                _this.employeeList.push({
                                    avatar: element.avatar,
                                    name: element.name,
                                    position: element.position,
                                    action: element._id,
                                    bio: element.bio,
                                });
                            }
                        }
                    });
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.employeeList);
                    this.dataSource.paginator = this.paginator;
                    console.log("fasdfasdfa", this.dataSource);
                };
                CompanyDetailsComponent.prototype.addConnection = function (id) {
                    var _this = this;
                    console.log("fadsfas", id);
                    var requestConnection = [];
                    this.employeeList.find(function (e) {
                        if (e.action == id) {
                            requestConnection = e;
                        }
                    });
                    this.connectionsService.makeConnection(this.currentUserId, requestConnection.action, requestConnection.name, this.companyId, requestConnection.position, requestConnection.bio, this.currentUser.name, this.currentUser.employer, this.currentUser.position, this.currentUser.bio).subscribe(function (res) {
                        _this.connectionsService.getMyConnection(_this.currentUserId).subscribe(function (res) {
                            _this.myConnection = res;
                            _this.companyService.getVerifiedUsers(_this.companyId).subscribe(function (res) {
                                _this.setEmployeeList(res);
                            });
                        });
                    });
                };
                return CompanyDetailsComponent;
            }());
            CompanyDetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["ConnectionsService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], CompanyDetailsComponent.prototype, "paginator", void 0);
            CompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-details/company-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-details.component.scss */ "./src/app/components/company/company-details/company-details.component.scss")).default]
                })
            ], CompanyDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-employee-list/company-employee-list.component.scss": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/components/company/company-employee-list/company-employee-list.component.scss ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-elevation-z8 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktZW1wbG95ZWUtbGlzdC9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wYW55XFxjb21wYW55LWVtcGxveWVlLWxpc3RcXGNvbXBhbnktZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktZW1wbG95ZWUtbGlzdC9jb21wYW55LWVtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnkvY29tcGFueS1lbXBsb3llZS1saXN0L2NvbXBhbnktZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZWxldmF0aW9uLXo4e1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-employee-list/company-employee-list.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/company/company-employee-list/company-employee-list.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: CompanyEmployeeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEmployeeListComponent", function () { return CompanyEmployeeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var CompanyEmployeeListComponent = /** @class */ (function () {
                function CompanyEmployeeListComponent(companyService) {
                    this.companyService = companyService;
                    this.displayedColumns = ["avatar", "name", "position", "view", "action"];
                }
                CompanyEmployeeListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.companyService.getEmployees(this.currentUserId).subscribe(function (res) {
                        _this.setEmployee(res);
                    });
                };
                CompanyEmployeeListComponent.prototype.setEmployee = function (res) {
                    var _this = this;
                    this.employeeList = [];
                    res.data.forEach(function (element) {
                        _this.employeeList.push({
                            avatar: element.avatar,
                            name: element.name,
                            position: element.position,
                            view: element._id,
                            action: element._id,
                            bio: element.bio,
                        });
                    });
                    console.log('fasdfasd', this.employeeList);
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.employeeList);
                    this.dataSource.paginator = this.paginator;
                };
                return CompanyEmployeeListComponent;
            }());
            CompanyEmployeeListComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], CompanyEmployeeListComponent.prototype, "paginator", void 0);
            CompanyEmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-employee-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-employee-list/company-employee-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-employee-list.component.scss */ "./src/app/components/company/company-employee-list/company-employee-list.component.scss")).default]
                })
            ], CompanyEmployeeListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/commentbox/childbox/childbox.component.scss": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/company/company-home/commentbox/childbox/childbox.component.scss ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LWhvbWUvY29tbWVudGJveC9jaGlsZGJveC9jaGlsZGJveC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/commentbox/childbox/childbox.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/components/company/company-home/commentbox/childbox/childbox.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: ChildboxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildboxComponent", function () { return ChildboxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var ChildboxComponent = /** @class */ (function () {
                function ChildboxComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.replyComment = [];
                    this.submitted = false;
                    this.userReplycomment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.deletNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ChildboxComponent.prototype.ngOnInit = function () {
                    this.createForm();
                    console.log('Comment no==>', this.commentNo);
                };
                ChildboxComponent.prototype.createForm = function () {
                    this.childForm = this.formBuilder.group({
                        comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]]
                    });
                };
                ChildboxComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    if (this.childForm.invalid) {
                        return false;
                    }
                    else {
                        this.replyComment.push({
                            currentDate: new Date(),
                            commentTxt: this.childForm.controls['comment'].value
                        });
                        this.userReplycomment.emit(this.replyComment);
                        this.deletNo.emit(this.commentNo);
                    }
                };
                return ChildboxComponent;
            }());
            ChildboxComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ChildboxComponent.prototype, "userReplycomment", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ChildboxComponent.prototype, "deletNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ChildboxComponent.prototype, "commentNo", void 0);
            ChildboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-childbox',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./childbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/childbox/childbox.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./childbox.component.scss */ "./src/app/components/company/company-home/commentbox/childbox/childbox.component.scss")).default]
                })
            ], ChildboxComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/commentbox/commentbox.component.scss": 
        /*!**************************************************************************************!*\
          !*** ./src/app/components/company/company-home/commentbox/commentbox.component.scss ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LWhvbWUvY29tbWVudGJveC9jb21tZW50Ym94LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/commentbox/commentbox.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/company/company-home/commentbox/commentbox.component.ts ***!
          \************************************************************************************/
        /*! exports provided: CommentboxComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentboxComponent", function () { return CommentboxComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var CommentboxComponent = /** @class */ (function () {
                function CommentboxComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.commentInfo = [];
                    this.submitted = false;
                    this.id = 0;
                    this.usercomment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                CommentboxComponent.prototype.ngOnInit = function () {
                    this.createForm();
                };
                CommentboxComponent.prototype.createForm = function () {
                    this.commentForm = this.formBuilder.group({
                        comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]]
                    });
                };
                CommentboxComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.commentForm.invalid) {
                        return false;
                    }
                    else {
                        this.commentInfo.push({
                            commentId: this.id++,
                            currentDate: new Date(),
                            commentTxt: this.commentForm.controls['comment'].value,
                            replyComment: []
                        });
                        this.usercomment.emit(this.commentInfo);
                    }
                };
                return CommentboxComponent;
            }());
            CommentboxComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CommentboxComponent.prototype, "usercomment", void 0);
            CommentboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-commentbox',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commentbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/commentbox.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commentbox.component.scss */ "./src/app/components/company/company-home/commentbox/commentbox.component.scss")).default]
                })
            ], CommentboxComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/commentbox/comments/comments.component.scss": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/company/company-home/commentbox/comments/comments.component.scss ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LWhvbWUvY29tbWVudGJveC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/commentbox/comments/comments.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/components/company/company-home/commentbox/comments/comments.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: DatacontainerDirective, CommentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatacontainerDirective", function () { return DatacontainerDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () { return CommentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _childbox_childbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../childbox/childbox.component */ "./src/app/components/company/company-home/commentbox/childbox/childbox.component.ts");
            var DatacontainerDirective = /** @class */ (function () {
                function DatacontainerDirective(viewContainerRef) {
                    this.viewContainerRef = viewContainerRef;
                }
                return DatacontainerDirective;
            }());
            DatacontainerDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
            ]; };
            DatacontainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    // tslint:disable-next-line:directive-selector
                    selector: '[datacontainer]',
                })
            ], DatacontainerDirective);
            var CommentsComponent = /** @class */ (function () {
                function CommentsComponent(resolver) {
                    this.resolver = resolver;
                    this.postComment = [];
                    this.countComments = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loadComponent = false;
                    this.commentIndex = 0;
                    this.reply = [];
                }
                CommentsComponent.prototype.ngOnInit = function () {
                };
                CommentsComponent.prototype.ngOnChanges = function () {
                    if (this.postComment !== undefined) {
                        console.log('Main array====>', this.postComment);
                    }
                };
                CommentsComponent.prototype.removeComment = function (no) {
                    this.postComment.splice(no, 1);
                    console.log('After remove array====>', this.postComment);
                    this.countComments.emit(this.postComment);
                };
                CommentsComponent.prototype.replyComment = function (index) {
                    var _this = this;
                    this.loadComponent = true;
                    var myFactory = this.resolver.resolveComponentFactory(_childbox_childbox_component__WEBPACK_IMPORTED_MODULE_2__["ChildboxComponent"]);
                    if (this.entry.toArray()[index].viewContainerRef.length <= 0) {
                        var myRef_1 = this.entry.toArray()[index].viewContainerRef.createComponent(myFactory);
                        myRef_1.instance['commentNo'] = index;
                        myRef_1.changeDetectorRef.detectChanges();
                        myRef_1.instance.userReplycomment.subscribe(function (data) {
                            console.log('Piyali=>', data);
                            _this.receiveReplyComment(data, index);
                        });
                        myRef_1.instance.deletNo.subscribe(function (no) {
                            myRef_1.destroy();
                        });
                    }
                };
                CommentsComponent.prototype.receiveReplyComment = function ($event, i) {
                    var _this = this;
                    this.reply = $event;
                    console.log($event);
                    this.postComment.forEach(function (element) {
                        var _a;
                        if (element['commentId'] === i) {
                            (_a = element['replyComment']).push.apply(_a, $event);
                            console.log('Main array after reply comment=>', _this.postComment);
                        }
                    });
                    console.log(this.reply);
                    this.loadComponent = false;
                };
                return CommentsComponent;
            }());
            CommentsComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CommentsComponent.prototype, "postComment", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CommentsComponent.prototype, "countComments", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(DatacontainerDirective)
            ], CommentsComponent.prototype, "entry", void 0);
            CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-comments',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/commentbox/comments/comments.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/company/company-home/commentbox/comments/comments.component.scss")).default]
                })
            ], CommentsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/company-home.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/company/company-home/company-home.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-profile-image img {\n  position: absolute;\n  left: 50%;\n  max-width: 180px;\n  transition: all 0.15s ease;\n  transform: translate(-50%, -30%);\n  border-radius: 0.375rem;\n}\n\n.mat-elevation-z8 {\n  width: 100%;\n}\n\n.shadow,\n.card-profile-image img {\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;\n}\n\n.mt--7 {\n  margin-top: 6rem !important;\n}\n\n.card-profile-image {\n  position: relative;\n}\n\n.card-profile-image img {\n  position: absolute;\n  left: 50%;\n  max-width: 180px;\n  transition: all 0.15s ease;\n  transform: translate(-50%, -30%);\n  border-radius: 0.375rem;\n}\n\n.card-profile-image img:hover {\n  transform: translate(-50%, -33%);\n}\n\n.card-profile-stats {\n  padding: 1rem 0;\n}\n\n.card-profile-stats > div {\n  margin-right: 1rem;\n  padding: 0.875rem;\n  text-align: center;\n}\n\n.card-profile-stats > div:last-child {\n  margin-right: 0;\n}\n\n.card-profile-stats > div .heading {\n  font-size: 1.1rem;\n  font-weight: bold;\n  display: block;\n}\n\n.card-profile-stats > div .description {\n  font-size: 0.875rem;\n  color: #adb5bd;\n}\n\n.main-content {\n  position: relative;\n}\n\n.footer {\n  padding: 2.5rem 0;\n  background: #f7fafc;\n}\n\n.footer .copyright {\n  font-size: 0.875rem;\n}\n\n@media (min-width: 768px) {\n  @-webkit-keyframes show-navbar-dropdown {\n    0% {\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n      opacity: 0;\n    }\n    100% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n  }\n  @keyframes show-navbar-dropdown {\n    0% {\n      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n      opacity: 0;\n    }\n    100% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n  }\n  @-webkit-keyframes hide-navbar-dropdown {\n    from {\n      opacity: 1;\n    }\n    to {\n      transform: translate(0, 10px);\n      opacity: 0;\n    }\n  }\n  @keyframes hide-navbar-dropdown {\n    from {\n      opacity: 1;\n    }\n    to {\n      transform: translate(0, 10px);\n      opacity: 0;\n    }\n  }\n}\n\n@-webkit-keyframes show-navbar-collapse {\n  0% {\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes show-navbar-collapse {\n  0% {\n    transform: scale(0.95);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes hide-navbar-collapse {\n  from {\n    transform: scale(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n}\n\n@keyframes hide-navbar-collapse {\n  from {\n    transform: scale(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n}\n\np {\n  font-size: 1rem;\n  font-weight: 300;\n  line-height: 1.7;\n}\n\n.description {\n  font-size: 0.875rem;\n}\n\n.heading {\n  font-size: 0.95rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktaG9tZS9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21wYW55XFxjb21wYW55LWhvbWVcXGNvbXBhbnktaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktaG9tZS9jb21wYW55LWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBRENBOztFQUVFLDJEQUFBO0FDRUY7O0FEQ0E7RUFDRSwyQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQ0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0U7TUFDRSw0REFBQTtNQUNBLCtEQUFBO01BQ0EsVUFBQTtJQ0VGO0lEQ0E7TUFDRSwwQkFBQTtNQUNBLFVBQUE7SUNDRjtFQUNGO0VEWEE7SUFDRTtNQUNFLDREQUFBO01BQ0EsK0RBQUE7TUFDQSxVQUFBO0lDRUY7SURDQTtNQUNFLDBCQUFBO01BQ0EsVUFBQTtJQ0NGO0VBQ0Y7RURFQTtJQUNFO01BQ0UsVUFBQTtJQ0FGO0lER0E7TUFDRSw2QkFBQTtNQUNBLFVBQUE7SUNERjtFQUNGO0VEUEE7SUFDRTtNQUNFLFVBQUE7SUNBRjtJREdBO01BQ0UsNkJBQUE7TUFDQSxVQUFBO0lDREY7RUFDRjtBQUNGOztBRElBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0ZGO0VES0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRFBBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0ZGO0VES0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0pGO0VET0E7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGOztBRExBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLHdCQUFBO0lBQ0EsVUFBQTtFQ0pGO0VET0E7SUFDRSxzQkFBQTtJQUNBLFVBQUE7RUNMRjtBQUNGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnktaG9tZS9jb21wYW55LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wcm9maWxlLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLm1hdC1lbGV2YXRpb24tejgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoYWRvdyxcbi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMCByZ2JhKDEzNiwgMTUyLCAxNzAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0tNyB7XG4gIG1hcmdpbi10b3A6IDZyZW0gIWltcG9ydGFudDtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzMlKTtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgcGFkZGluZzogMC44NzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzID4gZGl2IC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdiAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogI2FkYjViZDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjZjdmYWZjO1xufVxuXG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgQGtleWZyYW1lcyBzaG93LW5hdmJhci1kcm9wZG93biB7XG4gICAgMCUge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjI1cywgb3BhY2l0eSAwLjI1cywgdHJhbnNmb3JtIDAuMjVzO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcGVyc3BlY3RpdmUoMjAwcHgpIHJvdGF0ZVgoLTJkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWRyb3Bkb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWNvbGxhcHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBoaWRlLW5hdmJhci1jb2xsYXBzZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbnAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFkb3csXG4uY2FyZC1wcm9maWxlLWltYWdlIGltZyB7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIDAgcmdiYSgxMzYsIDE1MiwgMTcwLCAwLjE1KSAhaW1wb3J0YW50O1xufVxuXG4ubXQtLTcge1xuICBtYXJnaW4tdG9wOiA2cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXByb2ZpbGUtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMzJSk7XG59XG5cbi5jYXJkLXByb2ZpbGUtc3RhdHMge1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5jYXJkLXByb2ZpbGUtc3RhdHMgPiBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmc6IDAuODc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLXByb2ZpbGUtc3RhdHMgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyA+IGRpdiAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkLXByb2ZpbGUtc3RhdHMgPiBkaXYgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAyLjVyZW0gMDtcbiAgYmFja2dyb3VuZDogI2Y3ZmFmYztcbn1cblxuLmZvb3RlciAuY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIEBrZXlmcmFtZXMgc2hvdy1uYXZiYXItZHJvcGRvd24ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4yNXMsIG9wYWNpdHkgMC4yNXMsIHRyYW5zZm9ybSAwLjI1cztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHBlcnNwZWN0aXZlKDIwMHB4KSByb3RhdGVYKC0yZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWRyb3Bkb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hvdy1uYXZiYXItY29sbGFwc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGlkZS1uYXZiYXItY29sbGFwc2Uge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbnAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-home/company-home.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/company/company-home/company-home.component.ts ***!
          \***************************************************************************/
        /*! exports provided: CompanyHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyHomeComponent", function () { return CompanyHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            var ELEMENT_DATA = [
                { avatar: "f", name: 'Hydrogen', email: "", position: "fasdfa", action: 'H' }
            ];
            var CompanyHomeComponent = /** @class */ (function () {
                function CompanyHomeComponent(companyService, connectionsService, userService) {
                    this.companyService = companyService;
                    this.connectionsService = connectionsService;
                    this.userService = userService;
                    this.employeeList = [];
                    this.verificationRequests = [];
                    this.displayedColumns = ["avatar", "name", "email", "position", "action"];
                }
                CompanyHomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.count = 0;
                    this.userService.getCurrentUser().subscribe(function (res) {
                        console.log("fsafasdf", res);
                        _this.currentUser = res.data;
                    });
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.role = JSON.parse(localStorage.getItem('currentUser')).role;
                    // if (this.role === "COMPANY") {
                    this.companyService.getVerificationRequest(this.currentUserId).subscribe(function (res) {
                        _this.setVerificationRequest(res);
                    });
                    // } else {
                    this.companyService.getVerifiedUsers(this.currentUserId).subscribe(function (res) {
                        _this.setEmployeeList(res);
                    });
                    // }
                };
                CompanyHomeComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                CompanyHomeComponent.prototype.setVerificationRequest = function (res) {
                    var _this = this;
                    this.verificationRequests = [];
                    res.data.forEach(function (element) {
                        _this.verificationRequests.push({
                            avatar: element.avatar,
                            name: element.name,
                            email: element.email,
                            position: element.position,
                            action: element._id,
                        });
                    });
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.verificationRequests);
                    this.dataSource.paginator = this.paginator;
                };
                CompanyHomeComponent.prototype.setEmployeeList = function (res) {
                    var employees = [];
                    res.data.forEach(function (element) {
                        employees.push(element);
                    });
                    this.employeeList = employees;
                };
                // addConnection(id:string){
                //   let requestConnection:any = [];
                //   this.employeeList.find(e =>{
                //     if(e._id == id){
                //       requestConnection = e;
                //     }
                //   })
                //   this.connectionsService.makeConnection(this.currentUserId,requestConnection._id,requestConnection.name,requestConnection.employee,requestConnection.position);
                // }
                CompanyHomeComponent.prototype.onVerifyUser = function (email) {
                    var _this = this;
                    this.userService.verifyCompany(email).subscribe(function (data) {
                        _this.companyService.getVerificationRequest(_this.currentUserId).subscribe(function (res) {
                            _this.setVerificationRequest(res);
                        });
                    });
                };
                CompanyHomeComponent.prototype.receiveComment = function ($event) {
                    this.comments = $event;
                    this.count = this.comments.length;
                    console.log(this.comments.length);
                };
                CompanyHomeComponent.prototype.recieveCount = function ($event) {
                    this.comments = $event;
                    this.count = this.comments.length;
                };
                return CompanyHomeComponent;
            }());
            CompanyHomeComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["ConnectionsService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], CompanyHomeComponent.prototype, "paginator", void 0);
            CompanyHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-home/company-home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-home.component.scss */ "./src/app/components/company/company-home/company-home.component.scss")).default]
                })
            ], CompanyHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company-scheduler/company-scheduler.component.scss": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/company/company-scheduler/company-scheduler.component.scss ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LXNjaGVkdWxlci9jb21wYW55LXNjaGVkdWxlci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company-scheduler/company-scheduler.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/company/company-scheduler/company-scheduler.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: CompanySchedulerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySchedulerComponent", function () { return CompanySchedulerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var colors = {
                red: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                },
                blue: {
                    primary: '#1e90ff',
                    secondary: '#D1E8FF'
                },
                yellow: {
                    primary: '#e3bc08',
                    secondary: '#FDF1BA'
                }
            };
            var CompanySchedulerComponent = /** @class */ (function () {
                function CompanySchedulerComponent(ref, router, route, modal, userShiftServices) {
                    var _this = this;
                    this.ref = ref;
                    this.router = router;
                    this.route = route;
                    this.modal = modal;
                    this.userShiftServices = userShiftServices;
                    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
                    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
                    this.isLoading = false;
                    this.viewDate = new Date();
                    this.actions = [
                        {
                            label: '<i class="fa fa-fw fa-pencil"></i>',
                            a11yLabel: 'Edit',
                            onClick: function (_a) {
                                var event = _a.event;
                                _this.handleEvent('Edited', event);
                            }
                        },
                        {
                            label: '<i class="fa fa-fw fa-times"></i>',
                            a11yLabel: 'Delete',
                            onClick: function (_a) {
                                var event = _a.event;
                                _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                                _this.handleEvent('Deleted', event);
                            }
                        }
                    ];
                    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.events = [];
                    this.activeDayIsOpen = true;
                }
                CompanySchedulerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.route.params.subscribe(function (param) {
                        _this.currentUserId = param.id;
                    });
                    this.userShiftServices.getUserShift(this.currentUserId).subscribe(function (res) {
                        _this.setEvents(res);
                    });
                };
                CompanySchedulerComponent.prototype.dayClicked = function (_a) {
                    var date = _a.date, events = _a.events;
                    if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
                        if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                            events.length === 0) {
                            this.activeDayIsOpen = false;
                        }
                        else {
                            this.activeDayIsOpen = true;
                        }
                        this.viewDate = date;
                    }
                };
                CompanySchedulerComponent.prototype.eventTimesChanged = function (_a) {
                    var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
                    this.events = this.events.map(function (iEvent) {
                        if (iEvent === event) {
                            return Object.assign({}, event, { start: newStart, end: newEnd });
                        }
                        return iEvent;
                    });
                    this.handleEvent('Dropped or resized', event);
                };
                CompanySchedulerComponent.prototype.handleEvent = function (action, event) {
                    this.modalData = { event: event, action: action };
                    this.modal.open(this.modalContent, { size: 'lg' });
                };
                CompanySchedulerComponent.prototype.addEvent = function () {
                    this.events = this.events.concat([
                        {
                            title: '9:00 AM - 5:00 PM',
                            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
                            color: colors.blue,
                            draggable: true,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true
                            }
                        }
                    ]);
                };
                CompanySchedulerComponent.prototype.save = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.userShiftServices.addShift(this.currentUserId, JSON.stringify(this.events)).subscribe(function (res) {
                        _this.userShiftServices.getUserShift(_this.currentUserId).subscribe(function (res) {
                            _this.setEvents(res);
                        });
                    });
                };
                CompanySchedulerComponent.prototype.setEvents = function (res) {
                    this.events = [];
                    var cont = [];
                    if (res.data.length > 0) {
                        this.events = [
                            JSON.parse(res.data[0].data).forEach(function (element) {
                                cont.push({
                                    title: element.title,
                                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(element.start)),
                                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date(element.end)),
                                    color: colors.red,
                                    draggable: true,
                                    resizable: {
                                        beforeStart: true,
                                        afterEnd: true
                                    }
                                });
                            })
                        ];
                    }
                    this.events = cont;
                    this.isLoading = false;
                    this.ref.detectChanges();
                };
                CompanySchedulerComponent.prototype.deleteEvent = function (eventToDelete) {
                    this.events = this.events.filter(function (event) { return event !== eventToDelete; });
                };
                CompanySchedulerComponent.prototype.setView = function (view) {
                    this.view = view;
                };
                CompanySchedulerComponent.prototype.closeOpenMonthViewDay = function () {
                    this.activeDayIsOpen = false;
                };
                return CompanySchedulerComponent;
            }());
            CompanySchedulerComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["UsershiftsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
            ], CompanySchedulerComponent.prototype, "modalContent", void 0);
            CompanySchedulerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company-scheduler',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-scheduler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company-scheduler/company-scheduler.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company-scheduler.component.scss */ "./src/app/components/company/company-scheduler/company-scheduler.component.scss")).default]
                })
            ], CompanySchedulerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/components/home/home.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-control-borderless {\n  border: none;\n}\n\n.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {\n  border: none;\n  outline: none;\n  box-shadow: none;\n}\n\n.material-icon {\n  vertical-align: middle;\n}\n\n.searchbar {\n  margin-bottom: auto;\n  margin-top: auto;\n  height: 60px;\n  background-color: #fff;\n  border-radius: 30px;\n  padding: 10px;\n  width: 600px;\n}\n\n.search_input {\n  color: #777;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 500px;\n  margin-left: 15px;\n  padding-top: 0px;\n  caret-color: transparent;\n  line-height: 40px;\n  transition: width 0.4s linear;\n}\n\n.search_icon {\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n  color: #fff;\n}\n\n.search_icon {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: white;\n}\n\n.row-section h2 {\n  float: left;\n  width: 100%;\n  color: #fff;\n  margin-bottom: 30px;\n  font-size: 14px;\n}\n\n.row-section h2 span {\n  font-family: \"Libre Baskerville\", serif;\n  display: block;\n  font-size: 45px;\n  text-transform: none;\n  margin-bottom: 20px;\n  margin-top: 30px;\n  font-weight: 700;\n}\n\n.row-section h2 a {\n  color: #d2abce;\n}\n\n.row-section .row-block {\n  padding: 20px;\n  margin-bottom: 50px;\n}\n\n.row-section .row-block ul {\n  margin: 0;\n  padding: 0;\n}\n\n.row-section .row-block ul li {\n  list-style: none;\n  margin-bottom: 20px;\n}\n\n.row-section .row-block ul li:last-child {\n  margin-bottom: 0;\n}\n\n.row-section .row-block ul li:hover {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.row-section .row-block .media {\n  border: 1px solid #d5dbdd;\n  padding: 5px 20px;\n  border-radius: 5px;\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.04);\n  background: #fff;\n}\n\n.row-section .media .media-left img {\n  width: 75px;\n}\n\n.row-section .media .media-body p {\n  padding: 0 15px;\n  font-size: 14px;\n}\n\n.row-section .media .media-body h4 {\n  color: #007bff;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 0;\n  padding-left: 14px;\n  margin-top: 12px;\n}\n\n.btn-default {\n  background: #007bff;\n  color: #fff;\n  border-radius: 30px;\n  border: none;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxQcm9qZWN0c1xcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyXFxFbXBsb3llZS1JbnRlckxpbmtlci1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0k7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0s7RUFDRCx1REFBQTtFQUNBLFdBQUE7QUNBSjs7QURHSTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FERVE7RUFBZ0IsV0FBQTtFQUFZLFdBQUE7RUFBWSxXQUFBO0VBQVksbUJBQUE7RUFBb0IsZUFBQTtBQ01oRjs7QURMUTtFQUFxQix1Q0FBQTtFQUF5QyxjQUFBO0VBQWUsZUFBQTtFQUFnQixvQkFBQTtFQUFxQixtQkFBQTtFQUFvQixnQkFBQTtFQUFnQixnQkFBQTtBQ2U5Sjs7QURkUTtFQUFrQixjQUFBO0FDa0IxQjs7QURqQlE7RUFBeUIsYUFBQTtFQUFjLG1CQUFBO0FDc0IvQzs7QURyQlE7RUFBMkIsU0FBQTtFQUFVLFVBQUE7QUMwQjdDOztBRHpCUTtFQUE4QixnQkFBQTtFQUFpQixtQkFBQTtBQzhCdkQ7O0FEN0JRO0VBQXlDLGdCQUFBO0FDaUNqRDs7QURoQ1E7RUFBb0Msd0JBQUE7RUFBQSxnQkFBQTtBQ29DNUM7O0FEbkNRO0VBQStCLHlCQUFBO0VBQTBCLGlCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLDJDQUFBO0VBQXlDLGdCQUFBO0FDMkNoSjs7QUQxQ1E7RUFBb0MsV0FBQTtBQzhDNUM7O0FEN0NRO0VBQWtDLGVBQUE7RUFBaUIsZUFBQTtBQ2tEM0Q7O0FEakRRO0VBQW9DLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixnQkFBQTtBQzBEckk7O0FEekRRO0VBQWEsbUJBQUE7RUFBb0IsV0FBQTtFQUFZLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxlQUFBO0FDaUV0RiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpob3ZlciwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmFjdGl2ZSwgLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0ZXJpYWwtaWNvbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5cbi5zZWFyY2hiYXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDo2MDBweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoX2lucHV0e1xuICAgIGNvbG9yOiAjNzc3OztcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIGNhcmV0LWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgbGluZWFyO1xuICAgIH1cblxuICAgICAuc2VhcmNoX2ljb257XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTs7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLnNlYXJjaF9pY29ue1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG4gICAgICAgIC5yb3ctc2VjdGlvbiBoMntmbG9hdDpsZWZ0OyB3aWR0aDoxMDAlOyBjb2xvcjojZmZmOyBtYXJnaW4tYm90dG9tOjMwcHg7IGZvbnQtc2l6ZTogMTRweDt9XG4gICAgICAgIC5yb3ctc2VjdGlvbiBoMiBzcGFue2ZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjsgZGlzcGxheTpibG9jazsgZm9udC1zaXplOjQ1cHg7IHRleHQtdHJhbnNmb3JtOm5vbmU7IG1hcmdpbi1ib3R0b206MjBweDsgbWFyZ2luLXRvcDozMHB4O2ZvbnQtd2VpZ2h0OjcwMDt9XG4gICAgICAgIC5yb3ctc2VjdGlvbiBoMiBhe2NvbG9yOiNkMmFiY2U7fVxuICAgICAgICAucm93LXNlY3Rpb24gLnJvdy1ibG9ja3sgcGFkZGluZzoyMHB4OyBtYXJnaW4tYm90dG9tOjUwcHg7fVxuICAgICAgICAucm93LXNlY3Rpb24gLnJvdy1ibG9jayB1bHttYXJnaW46MDsgcGFkZGluZzowO31cbiAgICAgICAgLnJvdy1zZWN0aW9uIC5yb3ctYmxvY2sgdWwgbGl7bGlzdC1zdHlsZTpub25lOyBtYXJnaW4tYm90dG9tOjIwcHg7fVxuICAgICAgICAucm93LXNlY3Rpb24gLnJvdy1ibG9jayB1bCBsaTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MDt9XG4gICAgICAgIC5yb3ctc2VjdGlvbiAucm93LWJsb2NrIHVsIGxpOmhvdmVye2N1cnNvcjpncmFiYmluZzt9XG4gICAgICAgIC5yb3ctc2VjdGlvbiAucm93LWJsb2NrIC5tZWRpYXtib3JkZXI6MXB4IHNvbGlkICNkNWRiZGQ7IHBhZGRpbmc6NXB4IDIwcHg7IGJvcmRlci1yYWRpdXM6IDVweDsgYm94LXNoYWRvdzowcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMDQpOyBiYWNrZ3JvdW5kOiNmZmY7fVxuICAgICAgICAucm93LXNlY3Rpb24gLm1lZGlhIC5tZWRpYS1sZWZ0IGltZ3t3aWR0aDo3NXB4O31cbiAgICAgICAgLnJvdy1zZWN0aW9uIC5tZWRpYSAubWVkaWEtYm9keSBwe3BhZGRpbmc6IDAgMTVweDsgZm9udC1zaXplOjE0cHg7fVxuICAgICAgICAucm93LXNlY3Rpb24gLm1lZGlhIC5tZWRpYS1ib2R5IGg0IHtjb2xvcjogIzAwN2JmZjsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNjAwOyBtYXJnaW4tYm90dG9tOiAwOyBwYWRkaW5nLWxlZnQ6IDE0cHg7IG1hcmdpbi10b3A6MTJweDt9XG4gICAgICAgIC5idG4tZGVmYXVsdHtiYWNrZ3JvdW5kOiMwMDdiZmY7IGNvbG9yOiNmZmY7IGJvcmRlci1yYWRpdXM6MzBweDsgYm9yZGVyOm5vbmU7IGZvbnQtc2l6ZToxNnB4O31cbiAgICAgICAgIiwiLmZvcm0tY29udHJvbC1ib3JkZXJsZXNzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sLWJvcmRlcmxlc3M6aG92ZXIsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczphY3RpdmUsIC5mb3JtLWNvbnRyb2wtYm9yZGVybGVzczpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1hdGVyaWFsLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5zZWFyY2hfaW5wdXQge1xuICBjb2xvcjogIzc3NztcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGxpbmVhcjtcbn1cblxuLnNlYXJjaF9pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2MkU2LCAjMzNBRUZGKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2hfaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm93LXNlY3Rpb24gaDIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yb3ctc2VjdGlvbiBoMiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucm93LXNlY3Rpb24gaDIgYSB7XG4gIGNvbG9yOiAjZDJhYmNlO1xufVxuXG4ucm93LXNlY3Rpb24gLnJvdy1ibG9jayB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5yb3ctc2VjdGlvbiAucm93LWJsb2NrIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucm93LXNlY3Rpb24gLnJvdy1ibG9jayB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yb3ctc2VjdGlvbiAucm93LWJsb2NrIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucm93LXNlY3Rpb24gLnJvdy1ibG9jayB1bCBsaTpob3ZlciB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbi5yb3ctc2VjdGlvbiAucm93LWJsb2NrIC5tZWRpYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWRiZGQ7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5yb3ctc2VjdGlvbiAubWVkaWEgLm1lZGlhLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5yb3ctc2VjdGlvbiAubWVkaWEgLm1lZGlhLWJvZHkgcCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucm93LXNlY3Rpb24gLm1lZGlhIC5tZWRpYS1ib2R5IGg0IHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uYnRuLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(companyService) {
                    this.companyService = companyService;
                    this.companyList = [];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.companyService.getAllCompanies().subscribe(function (res) {
                        _this.setCompanies(res);
                    });
                };
                HomeComponent.prototype.setCompanies = function (res) {
                    var companies = [];
                    res.data.forEach(function (element) {
                        companies.push(element);
                    });
                    this.companyList = companies;
                    console.log("fasdfasd", this.companyList);
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/log-in/log-in.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/log-in/log-in.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem;\n}\n\n.card-signin {\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.card-signin .card-body {\n  padding: 2rem;\n}\n\n.form-signin {\n  width: 100%;\n}\n\n.form-signin .btn {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s;\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group input {\n  height: auto;\n  border-radius: 2rem;\n  padding: 10px 5px;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: 0.75rem 1.5rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input:-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(0.75rem + 0.75rem * (2 / 3));\n  padding-bottom: calc(0.75rem / 3);\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(0.75rem / 3);\n  padding-bottom: calc(0.75rem / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.btn-google {\n  color: white;\n  background-color: #ea4335;\n}\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998;\n}\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input::-ms-input-placeholder {\n    color: #777;\n  }\n}\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none;\n  }\n\n  .form-label-group input:-ms-input-placeholder {\n    color: #777;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2ctaW4vRDpcXFByb2plY3RzXFxFbXBsb3llZS1JbnRlckxpbmtlci1tYXN0ZXJcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9nLWluXFxsb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOENBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO29EQUFBOztBQUdBO0VBQ0U7SUFDRSxhQUFBO0VDQUY7O0VERUE7SUFDRSxXQUFBO0VDQ0Y7QUFDRjs7QURFQTtvREFBQTs7QUFHQTtFQUVFO0lBQ0UsYUFBQTtFQ0ZGOztFRElBO0lBQ0UsV0FBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XG59XG5cbi5jYXJkLXNpZ25pbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLXNpZ25pbiAuYnRuIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuNzVyZW0gKyAwLjc1cmVtICogKDIgLyAzKSk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNzVyZW0gLyAzKTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+bGFiZWwge1xuICBwYWRkaW5nLXRvcDogY2FsYygwLjc1cmVtIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNzVyZW0gLyAzKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLmJ0bi1nb29nbGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzU7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi8qIEZhbGxiYWNrIGZvciBFZGdlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuLyogRmFsbGJhY2sgZm9yIElFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxuKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufSIsIjpyb290IHtcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcbn1cblxuLmNhcmQtc2lnbmluIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZm9ybS1zaWduaW4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tc2lnbmluIC5idG4ge1xuICBmb250LXNpemU6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMC43NXJlbSArIDAuNzVyZW0gKiAoMiAvIDMpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMC43NXJlbSAvIDMpO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMC43NXJlbSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjc1cmVtIC8gMyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/log-in/log-in.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/log-in/log-in.component.ts ***!
          \*******************************************************/
        /*! exports provided: LogInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function () { return LogInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
            var LogInComponent = /** @class */ (function () {
                function LogInComponent(formBuilder, route, router, authenticationService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.loading = false;
                    this.submitted = false;
                    this.error = '';
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                LogInComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(LogInComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LogInComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.authenticationService.login(this.f.username.value, this.f.password.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        debugger;
                        if (data.role === 'ADMIN') {
                            _this.router.navigate(['/admin']);
                        }
                        else if (data.role === 'COMPANY') {
                            _this.router.navigate(['/company-home']);
                        }
                        else {
                            _this.router.navigate([_this.returnUrl]);
                        }
                    }, function (error) {
                        _this.error = error;
                        _this.loading = false;
                    });
                };
                return LogInComponent;
            }());
            LogInComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
            ]; };
            LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-log-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-in.component.scss */ "./src/app/components/log-in/log-in.component.scss")).default]
                })
            ], LogInComponent);
            /***/ 
        }),
        /***/ "./src/app/components/register/register.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/components/register/register.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card-signin {\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.card-signin .card-img-left {\n  width: 45%;\n  /* Link to your background image using in the property below! */\n  background: scroll center url(\"https://miro.medium.com/max/1551/1*ukM74jDxbMpyzcEi7CiCLg.png\");\n  background-size: cover;\n}\n\n.card-signin .card-img-left.company {\n  width: 45%;\n  /* Link to your background image using in the property below! */\n  background: scroll center url(\"http://printingpressservices.com/wp-content/uploads/2019/03/company.jpg\");\n  background-size: cover;\n}\n\n.card-signin .card-body {\n  padding: 2rem;\n}\n\n.form-signin {\n  width: 100%;\n}\n\n.form-signin .btn {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s;\n}\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group input {\n  height: auto;\n  border-radius: 2rem;\n}\n\n.form-label-group > input,\n.form-label-group > label {\n  padding: 0.75rem 1.5rem;\n}\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input:-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.form-label-group input::placeholder {\n  color: transparent;\n}\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(0.75rem + 0.75rem * (2 / 3));\n  padding-bottom: calc(0.75rem / 3);\n}\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(0.75rem / 3);\n  padding-bottom: calc(0.75rem / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.btn-google {\n  color: white;\n  background-color: #ea4335;\n}\n\n.btn-facebook {\n  color: white;\n  background-color: #3b5998;\n}\n\n.ui-group-buttons .or {\n  position: relative;\n  float: left;\n  width: 0.3em;\n  height: 1.3em;\n  z-index: 3;\n  font-size: 12px;\n}\n\n.ui-group-buttons .or:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  content: \"or\";\n  background-color: #5a5a5a;\n  margin-top: -0.1em;\n  margin-left: -0.9em;\n  width: 1.8em;\n  height: 1.8em;\n  line-height: 1.55;\n  color: #fff;\n  font-style: normal;\n  font-weight: 400;\n  text-align: center;\n  border-radius: 500px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.ui-group-buttons .or:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \" \";\n  width: 0.3em;\n  height: 2.84em;\n  background-color: rgba(0, 0, 0, 0);\n  border-top: 0.6em solid #5a5a5a;\n  border-bottom: 0.6em solid #5a5a5a;\n}\n\n.ui-group-buttons .or.or-lg {\n  height: 1.3em;\n  font-size: 16px;\n}\n\n.ui-group-buttons .or.or-lg:after {\n  height: 2.85em;\n}\n\n.ui-group-buttons .or.or-sm {\n  height: 1em;\n}\n\n.ui-group-buttons .or.or-sm:after {\n  height: 2.5em;\n}\n\n.ui-group-buttons .or.or-xs {\n  height: 0.25em;\n}\n\n.ui-group-buttons .or.or-xs:after {\n  height: 1.84em;\n  z-index: -1000;\n}\n\n.ui-group-buttons {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ui-group-buttons:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.ui-group-buttons .btn {\n  float: left;\n  border-radius: 0;\n}\n\n.ui-group-buttons .btn:first-child {\n  margin-left: 0;\n  border-top-left-radius: 0.25em;\n  border-bottom-left-radius: 0.25em;\n  padding-right: 15px;\n}\n\n.ui-group-buttons .btn:last-child {\n  border-top-right-radius: 0.25em;\n  border-bottom-right-radius: 0.25em;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSwrREFBQTtFQUNBLDhGQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7RUFDQSwrREFBQTtFQUNBLHdHQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFOztFQUVFLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLDhDQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDRTtFQUFzQixrQkFBQTtFQUFrQixXQUFBO0VBQVcsWUFBQTtFQUFXLGFBQUE7RUFBYSxVQUFBO0VBQVUsZUFBQTtBQ1F2Rjs7QURQQTtFQUE2QixrQkFBQTtFQUFrQixRQUFBO0VBQVEsU0FBQTtFQUFTLGFBQUE7RUFBYSx5QkFBQTtFQUF5QixrQkFBQTtFQUFpQixtQkFBQTtFQUFrQixZQUFBO0VBQVksYUFBQTtFQUFhLGlCQUFBO0VBQWlCLFdBQUE7RUFBVyxrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixvQkFBQTtFQUFpRSx3Q0FBQTtFQUE4RiwwQkFBQTtFQUEwQixzQkFBQTtBQytCM2E7O0FEOUJBO0VBQTRCLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxPQUFBO0VBQU8sWUFBQTtFQUFZLFlBQUE7RUFBVyxjQUFBO0VBQWMsa0NBQUE7RUFBK0IsK0JBQUE7RUFBOEIsa0NBQUE7QUMwQzdKOztBRHpDQTtFQUE0QixhQUFBO0VBQWEsZUFBQTtBQzhDekM7O0FEN0NBO0VBQWtDLGNBQUE7QUNpRGxDOztBRGhEQTtFQUE0QixXQUFBO0FDb0Q1Qjs7QURuREE7RUFBa0MsYUFBQTtBQ3VEbEM7O0FEdERBO0VBQTRCLGNBQUE7QUMwRDVCOztBRHpEQTtFQUFrQyxjQUFBO0VBQWMsY0FBQTtBQzhEaEQ7O0FEN0RBO0VBQWtCLHFCQUFBO0VBQXFCLHNCQUFBO0FDa0V2Qzs7QURqRUE7RUFBd0IsWUFBQTtFQUFZLGNBQUE7RUFBYyxTQUFBO0VBQVMsV0FBQTtFQUFXLGtCQUFBO0FDeUV0RTs7QUR4RUE7RUFBdUIsV0FBQTtFQUFXLGdCQUFBO0FDNkVsQzs7QUQ1RUE7RUFBbUMsY0FBQTtFQUFjLDhCQUFBO0VBQTZCLGlDQUFBO0VBQWdDLG1CQUFBO0FDbUY5Rzs7QURsRkE7RUFBa0MsK0JBQUE7RUFBOEIsa0NBQUE7RUFBaUMsa0JBQUE7QUN3RmpHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXNpZ25pbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgLmNhcmQtc2lnbmluIC5jYXJkLWltZy1sZWZ0IHtcbiAgICB3aWR0aDogNDUlO1xuICAgIC8qIExpbmsgdG8geW91ciBiYWNrZ3JvdW5kIGltYWdlIHVzaW5nIGluIHRoZSBwcm9wZXJ0eSBiZWxvdyEgKi9cbiAgICBiYWNrZ3JvdW5kOiBzY3JvbGwgY2VudGVyIHVybCgnaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzE1NTEvMSp1a003NGpEeGJNcHl6Y0VpN0NpQ0xnLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuY2FyZC1zaWduaW4gLmNhcmQtaW1nLWxlZnQuY29tcGFueSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICAvKiBMaW5rIHRvIHlvdXIgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBpbiB0aGUgcHJvcGVydHkgYmVsb3chICovXG4gICAgYmFja2dyb3VuZDogc2Nyb2xsIGNlbnRlciB1cmwoJ2h0dHA6Ly9wcmludGluZ3ByZXNzc2VydmljZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAzL2NvbXBhbnkuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiAuYnRuIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMC43NXJlbSArIDAuNzVyZW0gKiAoMiAvIDMpKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjc1cmVtIC8gMyk7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygwLjc1cmVtIC8gMyk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMC43NXJlbSAvIDMpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxuICBcbiAgLmJ0bi1nb29nbGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xuICB9XG4gIFxuICAuYnRuLWZhY2Vib29rIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgfVxuICAudWktZ3JvdXAtYnV0dG9ucyAub3J7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bGVmdDt3aWR0aDouM2VtO2hlaWdodDoxLjNlbTt6LWluZGV4OjM7Zm9udC1zaXplOjEycHh9XG4udWktZ3JvdXAtYnV0dG9ucyAub3I6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7Y29udGVudDonb3InO2JhY2tncm91bmQtY29sb3I6IzVhNWE1YTttYXJnaW4tdG9wOi0uMWVtO21hcmdpbi1sZWZ0Oi0uOWVtO3dpZHRoOjEuOGVtO2hlaWdodDoxLjhlbTtsaW5lLWhlaWdodDoxLjU1O2NvbG9yOiNmZmY7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NTAwcHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLDAuMSk7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwwLjEpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy1tcy1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtjb250ZW50OicgJzt3aWR0aDouM2VtO2hlaWdodDoyLjg0ZW07YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApO2JvcmRlci10b3A6LjZlbSBzb2xpZCAjNWE1YTVhO2JvcmRlci1ib3R0b206LjZlbSBzb2xpZCAjNWE1YTVhfVxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yLm9yLWxne2hlaWdodDoxLjNlbTtmb250LXNpemU6MTZweH1cbi51aS1ncm91cC1idXR0b25zIC5vci5vci1sZzphZnRlcntoZWlnaHQ6Mi44NWVtfVxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yLm9yLXNte2hlaWdodDoxZW19XG4udWktZ3JvdXAtYnV0dG9ucyAub3Iub3Itc206YWZ0ZXJ7aGVpZ2h0OjIuNWVtfVxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yLm9yLXhze2hlaWdodDouMjVlbX1cbi51aS1ncm91cC1idXR0b25zIC5vci5vci14czphZnRlcntoZWlnaHQ6MS44NGVtO3otaW5kZXg6LTEwMDB9XG4udWktZ3JvdXAtYnV0dG9uc3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9XG4udWktZ3JvdXAtYnV0dG9uczphZnRlcntjb250ZW50OlwiLlwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjA7Y2xlYXI6Ym90aDt2aXNpYmlsaXR5OmhpZGRlbn1cbi51aS1ncm91cC1idXR0b25zIC5idG57ZmxvYXQ6bGVmdDtib3JkZXItcmFkaXVzOjB9XG4udWktZ3JvdXAtYnV0dG9ucyAuYnRuOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czouMjVlbTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOi4yNWVtO3BhZGRpbmctcmlnaHQ6MTVweH1cbi51aS1ncm91cC1idXR0b25zIC5idG46bGFzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czouMjVlbTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czouMjVlbTtwYWRkaW5nLWxlZnQ6MTVweH0iLCIuY2FyZC1zaWduaW4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY2FyZC1zaWduaW4gLmNhcmQtaW1nLWxlZnQge1xuICB3aWR0aDogNDUlO1xuICAvKiBMaW5rIHRvIHlvdXIgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBpbiB0aGUgcHJvcGVydHkgYmVsb3chICovXG4gIGJhY2tncm91bmQ6IHNjcm9sbCBjZW50ZXIgdXJsKFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzE1NTEvMSp1a003NGpEeGJNcHl6Y0VpN0NpQ0xnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQtc2lnbmluIC5jYXJkLWltZy1sZWZ0LmNvbXBhbnkge1xuICB3aWR0aDogNDUlO1xuICAvKiBMaW5rIHRvIHlvdXIgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBpbiB0aGUgcHJvcGVydHkgYmVsb3chICovXG4gIGJhY2tncm91bmQ6IHNjcm9sbCBjZW50ZXIgdXJsKFwiaHR0cDovL3ByaW50aW5ncHJlc3NzZXJ2aWNlcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvY29tcGFueS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLXNpZ25pbiAuYnRuIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMC43NXJlbSArIDAuNzVyZW0gKiAoMiAvIDMpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMC43NXJlbSAvIDMpO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMC43NXJlbSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjc1cmVtIC8gMyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59XG5cbi5idG4tZ29vZ2xlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyAub3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMC4zZW07XG4gIGhlaWdodDogMS4zZW07XG4gIHotaW5kZXg6IDM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgY29udGVudDogXCJvclwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xuICBtYXJnaW4tdG9wOiAtMC4xZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC45ZW07XG4gIHdpZHRoOiAxLjhlbTtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyAub3I6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAwLjNlbTtcbiAgaGVpZ2h0OiAyLjg0ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlci10b3A6IDAuNmVtIHNvbGlkICM1YTVhNWE7XG4gIGJvcmRlci1ib3R0b206IDAuNmVtIHNvbGlkICM1YTVhNWE7XG59XG5cbi51aS1ncm91cC1idXR0b25zIC5vci5vci1sZyB7XG4gIGhlaWdodDogMS4zZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yLm9yLWxnOmFmdGVyIHtcbiAgaGVpZ2h0OiAyLjg1ZW07XG59XG5cbi51aS1ncm91cC1idXR0b25zIC5vci5vci1zbSB7XG4gIGhlaWdodDogMWVtO1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyAub3Iub3Itc206YWZ0ZXIge1xuICBoZWlnaHQ6IDIuNWVtO1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyAub3Iub3IteHMge1xuICBoZWlnaHQ6IDAuMjVlbTtcbn1cblxuLnVpLWdyb3VwLWJ1dHRvbnMgLm9yLm9yLXhzOmFmdGVyIHtcbiAgaGVpZ2h0OiAxLjg0ZW07XG4gIHotaW5kZXg6IC0xMDAwO1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnVpLWdyb3VwLWJ1dHRvbnM6YWZ0ZXIge1xuICBjb250ZW50OiBcIi5cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnVpLWdyb3VwLWJ1dHRvbnMgLmJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udWktZ3JvdXAtYnV0dG9ucyAuYnRuOmxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNWVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/register/register.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/register/register.component.ts ***!
          \***********************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(formBuilder, route, router, authenticationService, userService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.loading = false;
                    this.submitted = false;
                    this.error = '';
                    this.isCompanyView = false;
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(RegisterComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.registerForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.userService.registerUser(this.f.name.value, this.f.email.value, this.f.password.value, this.f.confirmPassword.value).subscribe(function (data) {
                        _this.router.navigate(['/']);
                    });
                };
                RegisterComponent.prototype.onCorpSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // stop here if form is invalid
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.userService.registerCompany(this.f.name.value, this.f.email.value, this.f.password.value, this.f.confirmPassword.value).subscribe(function (data) {
                        _this.router.navigate(['/']);
                    });
                };
                RegisterComponent.prototype.onRegularUserSelect = function () {
                    this.isCompanyView = false;
                };
                RegisterComponent.prototype.onCompanySelect = function () {
                    this.isCompanyView = true;
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.scss": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.scss ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-blue {\n  background: #0f50a0;\n  background: linear-gradient(#115cb7, #0f50a0);\n}\n.nav-blue a {\n  color: white;\n}\n.nav-blue a:hover {\n  background: rgba(255, 255, 255, 0.2);\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15));\n}\n.button {\n  width: 350px;\n  margin: 0 auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.button1 {\n  background: #33AEFF;\n  position: relative;\n}\n.button1:after {\n  content: \"\";\n  background: linear-gradient(to right, #fff 0%, #fff 50%, #222 50%, #222 100%);\n  background-position: 100% 0;\n  background-size: 200% 100%;\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  transition: all 0.5s;\n}\n.button1:hover:after {\n  background-position: 0 0;\n}\n.card {\n  width: 300px;\n  min-height: 400px;\n  background: #fff;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  transition: 0.5s;\n}\n.card:hover {\n  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);\n}\n.card .box {\n  text-align: center;\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.card .box .img {\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.card .box .img img {\n  width: 100%;\n  height: 100%;\n}\n.card .box h2 {\n  font-size: 20px;\n  color: #262626;\n  margin: 20px auto;\n}\n.card .box h2 span {\n  font-size: 14px;\n  background: #e91e63;\n  color: #fff;\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 15px;\n}\n.card .box p {\n  color: #262626;\n}\n.card .box span {\n  display: inline-flex;\n}\n.card .box ul {\n  margin: 0;\n  padding: 0;\n}\n.card .box ul li {\n  list-style: none;\n  float: left;\n}\n.card .box ul li a {\n  display: block;\n  color: #aaa;\n  margin: 0 10px;\n  font-size: 20px;\n  transition: 0.5s;\n  text-align: center;\n}\n.card .box ul li:hover a {\n  color: #e91e63;\n  transform: rotateY(360deg);\n}\n.mat-elevation-z8 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL2Nvbm5lY3Rpb24tYXBwcm92ZWQtbGlzdC9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLWNvbm5uZWN0aW9uc1xcY29ubmVjdGlvbi1hcHByb3ZlZC1saXN0XFxjb25uZWN0aW9uLWFwcHJvdmVkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWNvbm5uZWN0aW9ucy9jb25uZWN0aW9uLWFwcHJvdmVkLWxpc3QvY29ubmVjdGlvbi1hcHByb3ZlZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFFQSw2Q0FBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURETTtFQUNFLG9DQUFBO0VBVUEsZ0ZBQUE7QUNMUjtBRFVFO0VBQ0ksWUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQUjtBRFVJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ1BOO0FEUU07RUFDTSxXQUFBO0VBQ0EsNkVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNOWjtBRFNZO0VBQ0ksd0JBQUE7QUNQaEI7QURZRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVE47QURXRTtFQUNJLDBDQUFBO0FDUk47QURVRTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1BOO0FEU0U7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTk47QURRRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTE47QURPRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE1FO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0hOO0FES0U7RUFDSSxjQUFBO0FDRk47QURJRTtFQUNJLG9CQUFBO0FDRE47QURHRTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQU47QURFRTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQ0U7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQUU7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNHTjtBRERFO0VBQ0ksV0FBQTtBQ0lOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL2Nvbm5lY3Rpb24tYXBwcm92ZWQtbGlzdC9jb25uZWN0aW9uLWFwcHJvdmVkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJsdWUge1xuICAgIGJhY2tncm91bmQ6ICMwZjUwYTA7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTE1Y2I3LCAjMGY1MGEwKTtcbiAgICBhIHtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgICAgICAgbGluZWFyLFxuICAgICAgICAgIGxlZnQgdG9wLFxuICAgICAgICAgIGxlZnQgYm90dG9tLFxuICAgICAgICAgIGZyb20ocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpKSxcbiAgICAgICAgICB0byhyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKVxuICAgICAgICApO1xuICBcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b24xIHtcbiAgICAgIGJhY2tncm91bmQ6ICMzM0FFRkY7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2ZmZiAwJSwgI2ZmZiA1MCUsICMyMjIgNTAlLCAjMjIyIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICBcbiAgLmNhcmQge1xuICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICBtaW4taGVpZ2h0OjQwMHB4O1xuICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgYm94LXNoYWRvdzowIDIwcHggNTBweCByZ2JhKDAsMCwwLC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgIHRyYW5zaXRpb246MC41cztcbiAgfVxuICAuY2FyZDpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OjAgMzBweCA3MHB4IHJnYmEoMCwwLDAsLjIpO1xuICB9XG4gIC5jYXJkIC5ib3gge1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgICB3aWR0aDoxMDAlO1xuICB9XG4gIC5jYXJkIC5ib3ggLmltZyB7XG4gICAgICB3aWR0aDoxMjBweDtcbiAgICAgIGhlaWdodDoxMjBweDtcbiAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgfVxuICAuY2FyZCAuYm94IC5pbWcgaW1nIHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgfVxuICAuY2FyZCAuYm94IGgyIHtcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgY29sb3I6IzI2MjYyNjtcbiAgICAgIG1hcmdpbjoyMHB4IGF1dG87XG4gIH1cbiAgLmNhcmQgLmJveCBoMiBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgYmFja2dyb3VuZDojZTkxZTYzO1xuICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzo0cHggMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgfVxuICAuY2FyZCAuYm94IHAge1xuICAgICAgY29sb3I6IzI2MjYyNjtcbiAgfVxuICAuY2FyZCAuYm94IHNwYW4ge1xuICAgICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICAuY2FyZCAuYm94IHVsIHtcbiAgICAgIG1hcmdpbjowO1xuICAgICAgcGFkZGluZzowO1xuICB9XG4gIC5jYXJkIC5ib3ggdWwgbGkge1xuICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgfVxuICAuY2FyZCAuYm94IHVsIGxpIGEge1xuICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIGNvbG9yOiNhYWE7XG4gICAgICBtYXJnaW46MCAxMHB4O1xuICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgfVxuICAuY2FyZCAuYm94IHVsIGxpOmhvdmVyIGEge1xuICAgICAgY29sb3I6I2U5MWU2MztcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZyk7XG4gIH1cbiAgLm1hdC1lbGV2YXRpb24tejh7XG4gICAgICB3aWR0aDoxMDAlO1xuICB9IiwiLm5hdi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzBmNTBhMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExNWNiNywgIzBmNTBhMCk7XG59XG4ubmF2LWJsdWUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXYtYmx1ZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSk7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQ6ICMzM0FFRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idXR0b24xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgIzIyMiA1MCUsICMyMjIgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmJ1dHRvbjE6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmQgLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIC5ib3ggLmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQgLmJveCAuaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIC5ib3ggaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmNhcmQgLmJveCBoMiBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNhcmQgLmJveCBwIHtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG5cbi5jYXJkIC5ib3ggc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2FyZCAuYm94IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZCAuYm94IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkIC5ib3ggdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCAuYm94IHVsIGxpOmhvdmVyIGEge1xuICBjb2xvcjogI2U5MWU2MztcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: ConnectionApprovedListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionApprovedListComponent", function () { return ConnectionApprovedListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var ConnectionApprovedListComponent = /** @class */ (function () {
                function ConnectionApprovedListComponent(connectionsService) {
                    this.connectionsService = connectionsService;
                    this.employeeList = [];
                    this.displayedColumns = ["avatar", "name", "position", "view", "action"];
                }
                ConnectionApprovedListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.connectionsService.getMyConnectionRequestsApproved(this.currentUserId).subscribe(function (res) {
                        _this.setConnections(res);
                    });
                };
                ConnectionApprovedListComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                ConnectionApprovedListComponent.prototype.setConnections = function (res) {
                    var _this = this;
                    this.employeeList = [];
                    this.myConnections = res.data;
                    res.data.forEach(function (element) {
                        _this.employeeList.push({
                            avatar: element.avatar,
                            name: element.senderName,
                            position: element.senderPosition,
                            view: element.userId,
                            action: element._id,
                            bio: element.bio,
                        });
                    });
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.employeeList);
                    this.dataSource.paginator = this.paginator;
                    console.log("fasdfasdfa", this.dataSource);
                };
                ConnectionApprovedListComponent.prototype.removeConnection = function (id) {
                    var _this = this;
                    this.connectionsService.removeConnection(id).subscribe(function (res) {
                        _this.connectionsService.getMyConnectionRequestsApproved(_this.currentUserId).subscribe(function (res) {
                            _this.setConnections(res);
                        });
                    });
                };
                return ConnectionApprovedListComponent;
            }());
            ConnectionApprovedListComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["ConnectionsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], ConnectionApprovedListComponent.prototype, "paginator", void 0);
            ConnectionApprovedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-connection-approved-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connection-approved-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connection-approved-list.component.scss */ "./src/app/components/user/user-connnections/connection-approved-list/connection-approved-list.component.scss")).default]
                })
            ], ConnectionApprovedListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/connection-profile/connection-profile.component.scss": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/connection-profile/connection-profile.component.scss ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff;\n}\n\n.profile-img {\n  text-align: center;\n}\n\n.profile-img img {\n  width: 185px;\n  height: 100%;\n}\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 100px;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8;\n}\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0;\n}\n\n.profile-head h5 {\n  color: #333;\n}\n\n.profile-head h6 {\n  color: #0062cc;\n}\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer;\n}\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%;\n}\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc;\n}\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%;\n}\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.profile-work ul {\n  list-style: none;\n}\n\n.profile-tab label {\n  font-weight: 600;\n}\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL2Nvbm5lY3Rpb24tcHJvZmlsZS9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLWNvbm5uZWN0aW9uc1xcY29ubmVjdGlvbi1wcm9maWxlXFxjb25uZWN0aW9uLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWNvbm5uZWN0aW9ucy9jb25uZWN0aW9uLXByb2ZpbGUvY29ubmVjdGlvbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDWUo7O0FEVkE7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7QUNhSjs7QURYQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNlSjs7QURiQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2dCSjs7QURkQTtFQUNJLGdCQUFBO0FDaUJKOztBRGZBO0VBQ0ksZ0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDbUJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL2Nvbm5lY3Rpb24tcHJvZmlsZS9jb25uZWN0aW9uLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wLXByb2ZpbGV7XG4gICAgcGFkZGluZzogMyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucHJvZmlsZS1pbWd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1nIGltZ3tcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnByb2ZpbGUtaW1nIC5maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbn1cbi5wcm9maWxlLWhlYWQgaDV7XG4gICAgY29sb3I6ICMzMzM7XG59XG4ucHJvZmlsZS1oZWFkIGg2e1xuICAgIGNvbG9yOiAjMDA2MmNjO1xufVxuLnByb2ZpbGUtZWRpdC1idG57XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2lsZS1yYXRpbmd7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODE4MTgyO1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuLnByb2lsZS1yYXRpbmcgc3BhbntcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJze1xuICAgIG1hcmdpbi1ib3R0b206NSU7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMwMDYyY2M7XG59XG4ucHJvZmlsZS13b3Jre1xuICAgIHBhZGRpbmc6IDE0JTtcbiAgICBtYXJnaW4tdG9wOiAtMTUlO1xufVxuLnByb2ZpbGUtd29yayBwe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzgxODE4MjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5wcm9maWxlLXdvcmsgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZmlsZS13b3JrIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJvZmlsZS10YWIgbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLXRhYiBwe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDYyY2M7XG59IiwiLmVtcC1wcm9maWxlIHtcbiAgcGFkZGluZzogMyU7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltZyBpbWcge1xuICB3aWR0aDogMTg1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2ZpbGUtaW1nIC5maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAtMjAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMjEyNTI5Yjg7XG59XG5cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnByb2ZpbGUtaGVhZCBoNSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ucHJvZmlsZS1oZWFkIGg2IHtcbiAgY29sb3I6ICMwMDYyY2M7XG59XG5cbi5wcm9maWxlLWVkaXQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDIlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvaWxlLXJhdGluZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MTgxODI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ucHJvaWxlLXJhdGluZyBzcGFuIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwNjJjYztcbn1cblxuLnByb2ZpbGUtd29yayB7XG4gIHBhZGRpbmc6IDE0JTtcbiAgbWFyZ2luLXRvcDogLTE1JTtcbn1cblxuLnByb2ZpbGUtd29yayBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgxODE4MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ucHJvZmlsZS13b3JrIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9maWxlLXdvcmsgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ucHJvZmlsZS10YWIgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvZmlsZS10YWIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA2MmNjO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/connection-profile/connection-profile.component.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/connection-profile/connection-profile.component.ts ***!
          \******************************************************************************************************/
        /*! exports provided: ConnectionProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionProfileComponent", function () { return ConnectionProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            var ConnectionProfileComponent = /** @class */ (function () {
                function ConnectionProfileComponent(router, route, userService, companyService, connectionsService) {
                    this.router = router;
                    this.route = route;
                    this.userService = userService;
                    this.companyService = companyService;
                    this.connectionsService = connectionsService;
                }
                ConnectionProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (param) {
                        _this.userId = param.id;
                        if (param.requestId) {
                            _this.requestId = param.requestId;
                        }
                    });
                    this.userService.getUser(this.userId).subscribe(function (res) {
                        _this.connectionUser = res.data;
                        _this.companyService.getCompanyById(_this.connectionUser.employer).subscribe(function (res) {
                            _this.connectionEmployer = res.data;
                        });
                    });
                };
                ConnectionProfileComponent.prototype.acceptRequest = function (id) {
                    var _this = this;
                    this.connectionsService.acceptRequest(id).subscribe(function (res) {
                        _this.router.navigate(['/']);
                    });
                };
                return ConnectionProfileComponent;
            }());
            ConnectionProfileComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["ConnectionsService"] }
            ]; };
            ConnectionProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-connection-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connection-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-profile/connection-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connection-profile.component.scss */ "./src/app/components/user/user-connnections/connection-profile/connection-profile.component.scss")).default]
                })
            ], ConnectionProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/connection-request/connection-request.component.scss": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/connection-request/connection-request.component.scss ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-blue {\n  background: #0f50a0;\n  background: linear-gradient(#115cb7, #0f50a0);\n}\n.nav-blue a {\n  color: white;\n}\n.nav-blue a:hover {\n  background: rgba(255, 255, 255, 0.2);\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15));\n}\n.button {\n  width: 350px;\n  margin: 0 auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.button1 {\n  background: #33AEFF;\n  position: relative;\n}\n.button1:after {\n  content: \"\";\n  background: linear-gradient(to right, #fff 0%, #fff 50%, #222 50%, #222 100%);\n  background-position: 100% 0;\n  background-size: 200% 100%;\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  transition: all 0.5s;\n}\n.button1:hover:after {\n  background-position: 0 0;\n}\n.card {\n  width: 300px;\n  min-height: 400px;\n  background: #fff;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  transition: 0.5s;\n}\n.card:hover {\n  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);\n}\n.card .box {\n  text-align: center;\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.card .box .img {\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.card .box .img img {\n  width: 100%;\n  height: 100%;\n}\n.card .box h2 {\n  font-size: 20px;\n  color: #262626;\n  margin: 20px auto;\n}\n.card .box h2 span {\n  font-size: 14px;\n  background: #e91e63;\n  color: #fff;\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 15px;\n}\n.card .box p {\n  color: #262626;\n}\n.card .box span {\n  display: inline-flex;\n}\n.card .box ul {\n  margin: 0;\n  padding: 0;\n}\n.card .box ul li {\n  list-style: none;\n  float: left;\n}\n.card .box ul li a {\n  display: block;\n  color: #aaa;\n  margin: 0 10px;\n  font-size: 20px;\n  transition: 0.5s;\n  text-align: center;\n}\n.card .box ul li:hover a {\n  color: #e91e63;\n  transform: rotateY(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL2Nvbm5lY3Rpb24tcmVxdWVzdC9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLWNvbm5uZWN0aW9uc1xcY29ubmVjdGlvbi1yZXF1ZXN0XFxjb25uZWN0aW9uLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWNvbm5uZWN0aW9ucy9jb25uZWN0aW9uLXJlcXVlc3QvY29ubmVjdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFFQSw2Q0FBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0FDRU47QURETTtFQUNFLG9DQUFBO0VBVUEsZ0ZBQUE7QUNMUjtBRFVFO0VBQ0ksWUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQUjtBRFVJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ1BOO0FEUU07RUFDTSxXQUFBO0VBQ0EsNkVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNOWjtBRFNZO0VBQ0ksd0JBQUE7QUNQaEI7QURZRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVE47QURXRTtFQUNJLDBDQUFBO0FDUk47QURVRTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1BOO0FEU0U7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTk47QURRRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTE47QURPRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRE1FO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0hOO0FES0U7RUFDSSxjQUFBO0FDRk47QURJRTtFQUNJLG9CQUFBO0FDRE47QURHRTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQU47QURFRTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQ0U7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQUU7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWNvbm5uZWN0aW9ucy9jb25uZWN0aW9uLXJlcXVlc3QvY29ubmVjdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGY1MGEwO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzExNWNiNyksIHRvKCMwZjUwYTApKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExNWNiNywgIzBmNTBhMCk7XG4gICAgYSB7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIFxuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxuICAgICAgICAgIGxpbmVhcixcbiAgICAgICAgICBsZWZ0IHRvcCxcbiAgICAgICAgICBsZWZ0IGJvdHRvbSxcbiAgICAgICAgICBmcm9tKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksXG4gICAgICAgICAgdG8ocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSlcbiAgICAgICAgKTtcbiAgXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uMSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzNBRUZGO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNmZmYgMCUsICNmZmYgNTAlLCAjMjIyIDUwJSwgIzIyMiAxMDAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgXG4gIC5jYXJkIHtcbiAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgbWluLWhlaWdodDo0MDBweDtcbiAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6MCAyMHB4IDUwcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gIH1cbiAgLmNhcmQ6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzowIDMwcHggNzBweCByZ2JhKDAsMCwwLC4yKTtcbiAgfVxuICAuY2FyZCAuYm94IHtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgICAgd2lkdGg6MTAwJTtcbiAgfVxuICAuY2FyZCAuYm94IC5pbWcge1xuICAgICAgd2lkdGg6MTIwcHg7XG4gICAgICBoZWlnaHQ6MTIwcHg7XG4gICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgICBvdmVyZmxvdzpoaWRkZW47XG4gIH1cbiAgLmNhcmQgLmJveCAuaW1nIGltZyB7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gIH1cbiAgLmNhcmQgLmJveCBoMiB7XG4gICAgICBmb250LXNpemU6MjBweDtcbiAgICAgIGNvbG9yOiMyNjI2MjY7XG4gICAgICBtYXJnaW46MjBweCBhdXRvO1xuICB9XG4gIC5jYXJkIC5ib3ggaDIgc3BhbiB7XG4gICAgICBmb250LXNpemU6MTRweDtcbiAgICAgIGJhY2tncm91bmQ6I2U5MWU2MztcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmc6NHB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gIH1cbiAgLmNhcmQgLmJveCBwIHtcbiAgICAgIGNvbG9yOiMyNjI2MjY7XG4gIH1cbiAgLmNhcmQgLmJveCBzcGFuIHtcbiAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIH1cbiAgLmNhcmQgLmJveCB1bCB7XG4gICAgICBtYXJnaW46MDtcbiAgICAgIHBhZGRpbmc6MDtcbiAgfVxuICAuY2FyZCAuYm94IHVsIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gIH1cbiAgLmNhcmQgLmJveCB1bCBsaSBhIHtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICBjb2xvcjojYWFhO1xuICAgICAgbWFyZ2luOjAgMTBweDtcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cbiAgLmNhcmQgLmJveCB1bCBsaTpob3ZlciBhIHtcbiAgICAgIGNvbG9yOiNlOTFlNjM7XG4gICAgICB0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpO1xuICB9IiwiLm5hdi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzBmNTBhMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExNWNiNywgIzBmNTBhMCk7XG59XG4ubmF2LWJsdWUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXYtYmx1ZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSk7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQ6ICMzM0FFRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idXR0b24xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgIzIyMiA1MCUsICMyMjIgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmJ1dHRvbjE6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmQgLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIC5ib3ggLmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQgLmJveCAuaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIC5ib3ggaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmNhcmQgLmJveCBoMiBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNhcmQgLmJveCBwIHtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG5cbi5jYXJkIC5ib3ggc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2FyZCAuYm94IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZCAuYm94IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkIC5ib3ggdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCAuYm94IHVsIGxpOmhvdmVyIGEge1xuICBjb2xvcjogI2U5MWU2MztcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/connection-request/connection-request.component.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/connection-request/connection-request.component.ts ***!
          \******************************************************************************************************/
        /*! exports provided: ConnectionRequestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionRequestComponent", function () { return ConnectionRequestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            var ConnectionRequestComponent = /** @class */ (function () {
                function ConnectionRequestComponent(connectionsService) {
                    this.connectionsService = connectionsService;
                }
                ConnectionRequestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.connectionsService.getMyConnectionRequests(this.currentUserId).subscribe(function (res) {
                        _this.setConnections(res);
                    });
                };
                ConnectionRequestComponent.prototype.setConnections = function (res) {
                    var connections = [];
                    res.data.forEach(function (element) {
                        connections.push(element);
                    });
                    this.myConnections = connections;
                };
                ConnectionRequestComponent.prototype.acceptRequest = function (id) {
                    var _this = this;
                    this.connectionsService.acceptRequest(id).subscribe(function (res) {
                        _this.connectionsService.getMyConnectionRequests(_this.currentUserId).subscribe(function (res) {
                            _this.setConnections(res);
                        });
                    });
                };
                ConnectionRequestComponent.prototype.removeRequest = function (id) {
                    var _this = this;
                    this.connectionsService.removeConnection(id).subscribe(function (res) {
                        _this.connectionsService.getMyConnectionRequests(_this.currentUserId).subscribe(function (res) {
                            _this.setConnections(res);
                        });
                    });
                };
                return ConnectionRequestComponent;
            }());
            ConnectionRequestComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["ConnectionsService"] }
            ]; };
            ConnectionRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-connection-request',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connection-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/connection-request/connection-request.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connection-request.component.scss */ "./src/app/components/user/user-connnections/connection-request/connection-request.component.scss")).default]
                })
            ], ConnectionRequestComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/user-connnections.component.scss": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/user-connnections.component.scss ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-blue {\n  background: #0f50a0;\n  background: linear-gradient(#115cb7, #0f50a0);\n}\n.nav-blue a {\n  color: white;\n}\n.nav-blue a:hover {\n  background: rgba(255, 255, 255, 0.2);\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15));\n}\n.button {\n  width: 350px;\n  margin: 0 auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.button1 {\n  background: #33AEFF;\n  position: relative;\n}\n.button1:after {\n  content: \"\";\n  background: linear-gradient(to right, #fff 0%, #fff 50%, #222 50%, #222 100%);\n  background-position: 100% 0;\n  background-size: 200% 100%;\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  transition: all 0.5s;\n}\n.button1:hover:after {\n  background-position: 0 0;\n}\n.card {\n  width: 300px;\n  min-height: 400px;\n  background: #fff;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  transition: 0.5s;\n}\n.card:hover {\n  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);\n}\n.card .box {\n  text-align: center;\n  padding: 20px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.card .box .img {\n  width: 120px;\n  height: 120px;\n  margin: 0 auto;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.card .box .img img {\n  width: 100%;\n  height: 100%;\n}\n.card .box h2 {\n  font-size: 20px;\n  color: #262626;\n  margin: 20px auto;\n}\n.card .box h2 span {\n  font-size: 14px;\n  background: #e91e63;\n  color: #fff;\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 15px;\n}\n.card .box p {\n  color: #262626;\n}\n.card .box span {\n  display: inline-flex;\n}\n.card .box ul {\n  margin: 0;\n  padding: 0;\n}\n.card .box ul li {\n  list-style: none;\n  float: left;\n}\n.card .box ul li a {\n  display: block;\n  color: #aaa;\n  margin: 0 10px;\n  font-size: 20px;\n  transition: 0.5s;\n  text-align: center;\n}\n.card .box ul li:hover a {\n  color: #e91e63;\n  transform: rotateY(360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL0Q6XFxQcm9qZWN0c1xcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyXFxFbXBsb3llZS1JbnRlckxpbmtlci1tYXN0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVzZXJcXHVzZXItY29ubm5lY3Rpb25zXFx1c2VyLWNvbm5uZWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL3VzZXItY29ubm5lY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFFQSw2Q0FBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURESTtFQUNFLG9DQUFBO0VBVUEsZ0ZBQUE7QUNMTjtBRFVBO0VBQ0ksWUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQTjtBRFVFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ1BKO0FEUUk7RUFDTSxXQUFBO0VBQ0EsNkVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNOVjtBRFNVO0VBQ0ksd0JBQUE7QUNQZDtBRFlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFdBO0VBQ0ksMENBQUE7QUNSSjtBRFVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDUEo7QURTQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNMSjtBRE9BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0pKO0FETUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURLQTtFQUNJLGNBQUE7QUNGSjtBRElBO0VBQ0ksb0JBQUE7QUNESjtBREdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNBSjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7QURDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItY29ubm5lY3Rpb25zL3VzZXItY29ubm5lY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzBmNTBhMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExNWNiNywgIzBmNTBhMCk7XG4gIGEge1xuICAgIGNvbG9yOndoaXRlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KFxuICAgICAgICBsaW5lYXIsXG4gICAgICAgIGxlZnQgdG9wLFxuICAgICAgICBsZWZ0IGJvdHRvbSxcbiAgICAgICAgZnJvbShyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikpLFxuICAgICAgICB0byhyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpKVxuICAgICAgKTtcblxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSk7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24ge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5idXR0b24xIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzNBRUZGO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZmZmIDAlLCAjZmZmIDUwJSwgIzIyMiA1MCUsICMyMjIgMTAwJSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbi5jYXJkIHtcbiAgICB3aWR0aDozMDBweDtcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBib3gtc2hhZG93OjAgMjBweCA1MHB4IHJnYmEoMCwwLDAsLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICB0cmFuc2l0aW9uOjAuNXM7XG59XG4uY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzowIDMwcHggNzBweCByZ2JhKDAsMCwwLC4yKTtcbn1cbi5jYXJkIC5ib3gge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5jYXJkIC5ib3ggLmltZyB7XG4gICAgd2lkdGg6MTIwcHg7XG4gICAgaGVpZ2h0OjEyMHB4O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuLmNhcmQgLmJveCAuaW1nIGltZyB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cbi5jYXJkIC5ib3ggaDIge1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGNvbG9yOiMyNjI2MjY7XG4gICAgbWFyZ2luOjIwcHggYXV0bztcbn1cbi5jYXJkIC5ib3ggaDIgc3BhbiB7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgYmFja2dyb3VuZDojZTkxZTYzO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzo0cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG59XG4uY2FyZCAuYm94IHAge1xuICAgIGNvbG9yOiMyNjI2MjY7XG59XG4uY2FyZCAuYm94IHNwYW4ge1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG59XG4uY2FyZCAuYm94IHVsIHtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG4uY2FyZCAuYm94IHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG4gICAgZmxvYXQ6bGVmdDtcbn1cbi5jYXJkIC5ib3ggdWwgbGkgYSB7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBjb2xvcjojYWFhO1xuICAgIG1hcmdpbjowIDEwcHg7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmNhcmQgLmJveCB1bCBsaTpob3ZlciBhIHtcbiAgICBjb2xvcjojZTkxZTYzO1xuICAgIHRyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZyk7XG59IiwiLm5hdi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzBmNTBhMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMTE1Y2I3KSwgdG8oIzBmNTBhMCkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzExNWNiNywgIzBmNTBhMCk7XG59XG4ubmF2LWJsdWUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXYtYmx1ZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksIHRvKHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSk7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQ6ICMzM0FFRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idXR0b24xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgIzIyMiA1MCUsICMyMjIgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmJ1dHRvbjE6aG92ZXI6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA3MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmQgLmJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIC5ib3ggLmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQgLmJveCAuaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkIC5ib3ggaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmNhcmQgLmJveCBoMiBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmNhcmQgLmJveCBwIHtcbiAgY29sb3I6ICMyNjI2MjY7XG59XG5cbi5jYXJkIC5ib3ggc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2FyZCAuYm94IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZCAuYm94IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jYXJkIC5ib3ggdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2FhYTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCAuYm94IHVsIGxpOmhvdmVyIGEge1xuICBjb2xvcjogI2U5MWU2MztcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-connnections/user-connnections.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/user/user-connnections/user-connnections.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: UserConnnectionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConnnectionsComponent", function () { return UserConnnectionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            var UserConnnectionsComponent = /** @class */ (function () {
                function UserConnnectionsComponent(connectionsService) {
                    this.connectionsService = connectionsService;
                }
                UserConnnectionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.connectionsService.getMyConnection(this.currentUserId).subscribe(function (res) {
                        _this.setConnections(res);
                    });
                };
                UserConnnectionsComponent.prototype.setConnections = function (res) {
                    var connections = [];
                    res.data.forEach(function (element) {
                        connections.push(element);
                    });
                    this.myConnections = connections;
                };
                return UserConnnectionsComponent;
            }());
            UserConnnectionsComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["ConnectionsService"] }
            ]; };
            UserConnnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-connnections',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-connnections.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-connnections/user-connnections.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-connnections.component.scss */ "./src/app/components/user/user-connnections/user-connnections.component.scss")).default]
                })
            ], UserConnnectionsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-home/user-home.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/components/user/user-home/user-home.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWhvbWUvdXNlci1ob21lLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-home/user-home.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/components/user/user-home/user-home.component.ts ***!
          \******************************************************************/
        /*! exports provided: UserHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () { return UserHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserHomeComponent = /** @class */ (function () {
                function UserHomeComponent() {
                }
                UserHomeComponent.prototype.ngOnInit = function () {
                };
                return UserHomeComponent;
            }());
            UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-home/user-home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-home.component.scss */ "./src/app/components/user/user-home/user-home.component.scss")).default]
                })
            ], UserHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-profile/user-profile.component.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/user/user-profile/user-profile.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff;\n}\n\n.profile-img {\n  text-align: center;\n}\n\n.profile-img img {\n  width: 140px;\n  height: 100%;\n}\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8;\n}\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0;\n}\n\n.profile-head h5 {\n  color: #333;\n}\n\n.profile-head h6 {\n  color: #0062cc;\n}\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer;\n}\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%;\n}\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%;\n}\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none;\n}\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc;\n}\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%;\n}\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%;\n}\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.profile-work ul {\n  list-style: none;\n}\n\n.profile-tab label {\n  font-weight: 600;\n}\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItcHJvZmlsZS9EOlxcUHJvamVjdHNcXEVtcGxveWVlLUludGVyTGlua2VyLW1hc3RlclxcRW1wbG95ZWUtSW50ZXJMaW5rZXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNTSjs7QURQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNZSjs7QURWQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2VKOztBRGJBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZ0JBQUE7QUNpQko7O0FEZkE7RUFDSSxnQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNtQkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXAtcHJvZmlsZXtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wcm9maWxlLWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWcgaW1ne1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJvZmlsZS1pbWcgLmZpbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IC0yMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzIxMjUyOWI4O1xufVxuLnByb2ZpbGUtaW1nIC5maWxlIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG59XG4ucHJvZmlsZS1oZWFkIGg1e1xuICAgIGNvbG9yOiAjMzMzO1xufVxuLnByb2ZpbGUtaGVhZCBoNntcbiAgICBjb2xvcjogIzAwNjJjYztcbn1cbi5wcm9maWxlLWVkaXQtYnRue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9pbGUtcmF0aW5ne1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzgxODE4MjtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5wcm9pbGUtcmF0aW5nIHNwYW57XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFic3tcbiAgICBtYXJnaW4tYm90dG9tOjUlO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMDA2MmNjO1xufVxuLnByb2ZpbGUtd29ya3tcbiAgICBwYWRkaW5nOiAxNCU7XG4gICAgbWFyZ2luLXRvcDogLTE1JTtcbn1cbi5wcm9maWxlLXdvcmsgcHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4MTgxODI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4ucHJvZmlsZS13b3JrIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2ZpbGUtd29yayB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnByb2ZpbGUtdGFiIGxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucHJvZmlsZS10YWIgcHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDA2MmNjO1xufSIsIi5lbXAtcHJvZmlsZSB7XG4gIHBhZGRpbmc6IDMlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnByb2ZpbGUtaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1pbWcgaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9maWxlLWltZyAuZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogLTIwJTtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMyMTI1MjliODtcbn1cblxuLnByb2ZpbGUtaW1nIC5maWxlIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4ucHJvZmlsZS1oZWFkIGg1IHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5wcm9maWxlLWhlYWQgaDYge1xuICBjb2xvcjogIzAwNjJjYztcbn1cblxuLnByb2ZpbGUtZWRpdC1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMiU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9pbGUtcmF0aW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgxODE4MjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5wcm9pbGUtcmF0aW5nIHNwYW4ge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA2MmNjO1xufVxuXG4ucHJvZmlsZS13b3JrIHtcbiAgcGFkZGluZzogMTQlO1xuICBtYXJnaW4tdG9wOiAtMTUlO1xufVxuXG4ucHJvZmlsZS13b3JrIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODE4MTgyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5wcm9maWxlLXdvcmsgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2ZpbGUtd29yayB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5wcm9maWxlLXRhYiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlLXRhYiBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDYyY2M7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-profile/user-profile.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/components/user/user-profile/user-profile.component.ts ***!
          \************************************************************************/
        /*! exports provided: UserProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () { return UserProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/company.service */ "./src/app/_services/company.service.ts");
            var UserProfileComponent = /** @class */ (function () {
                function UserProfileComponent(userService, companyService, formBuilder) {
                    this.userService = userService;
                    this.companyService = companyService;
                    this.formBuilder = formBuilder;
                    this.isCompany = false;
                    this.submitted = false;
                    this.inProgress = false;
                    this.companies = [];
                }
                UserProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.inProgress = true;
                    this.isCompany = JSON.parse(localStorage.getItem('currentUser')).role === 'COMPANY' ? true : false;
                    this.userService.getCurrentUser().subscribe(function (res) {
                        _this.SET_USER_DATA(res);
                    });
                    this.companyService.getAllCompanies().subscribe(function (res) {
                        _this.SET_COMPANIES_DATA(res);
                    });
                    this.userDetailForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                        dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        address: [''],
                        postalCode: [''],
                        country: [''],
                        city: [''],
                        joiningDate: [''],
                        bio: [''],
                        gender: [''],
                        employer: [''],
                        contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        fullTime: [''],
                        position: ['']
                    });
                    this.companyDetailForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                        dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        address: [''],
                        postalCode: [''],
                        country: [''],
                        city: [''],
                        webSite: [''],
                        bio: [''],
                        contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    });
                };
                Object.defineProperty(UserProfileComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.userDetailForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserProfileComponent.prototype, "c", {
                    get: function () { return this.companyDetailForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                UserProfileComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.inProgress = true;
                    // stop here if form is invalid
                    if (this.isCompany) {
                        if (this.companyDetailForm.invalid) {
                            return;
                        }
                    }
                    else {
                        if (this.userDetailForm.invalid) {
                            return;
                        }
                    }
                    // display form values on success
                    console.log(this.userDetailForm.value, null, 4);
                    if (this.isCompany) {
                        this.userService.updateUser(this.companyDetailForm.value).subscribe(function (res) {
                            _this.userService.getCurrentUser().subscribe(function (res) {
                                _this.SET_USER_DATA(res);
                            });
                        });
                    }
                    else {
                        this.userService.updateUser(this.userDetailForm.value).subscribe(function (res) {
                            _this.userService.getCurrentUser().subscribe(function (res) {
                                _this.SET_USER_DATA(res);
                            });
                        });
                    }
                };
                UserProfileComponent.prototype.onReset = function () {
                    this.submitted = false;
                    this.userDetailForm.reset();
                };
                UserProfileComponent.prototype.SET_USER_DATA = function (res) {
                    console.log(res);
                    this.currentUser = res.data;
                    if (this.isCompany) {
                        this.companyDetailForm.get('name').setValue(res.data.name);
                        this.companyDetailForm.get('email').setValue(res.data.email);
                        if (res.data.dob != undefined) {
                            this.companyDetailForm.get('dob').setValue(res.data.dob);
                        }
                        if (res.data.address != undefined) {
                            this.companyDetailForm.get('address').setValue(res.data.address);
                        }
                        if (res.data.postalCode != undefined) {
                            this.companyDetailForm.get('postalCode').setValue(res.data.postalCode);
                        }
                        if (res.data.country != undefined) {
                            this.companyDetailForm.get('country').setValue(res.data.country);
                        }
                        if (res.data.city != undefined) {
                            this.companyDetailForm.get('city').setValue(res.data.city);
                        }
                        if (res.data.contactNumber != undefined) {
                            this.companyDetailForm.get('contactNumber').setValue(res.data.contactNumber);
                        }
                        if (res.data.bio != undefined) {
                            this.companyDetailForm.get('bio').setValue(res.data.bio);
                        }
                        if (res.data.webSite != undefined) {
                            this.companyDetailForm.get('webSite').setValue(res.data.webSite);
                        }
                    }
                    else {
                        this.userDetailForm.get('name').setValue(res.data.name);
                        this.userDetailForm.get('email').setValue(res.data.email);
                        if (res.data.dob != undefined) {
                            this.userDetailForm.get('dob').setValue(res.data.dob);
                        }
                        if (res.data.address != undefined) {
                            this.userDetailForm.get('address').setValue(res.data.address);
                        }
                        if (res.data.postalCode != undefined) {
                            this.userDetailForm.get('postalCode').setValue(res.data.postalCode);
                        }
                        if (res.data.country != undefined) {
                            this.userDetailForm.get('country').setValue(res.data.country);
                        }
                        if (res.data.city != undefined) {
                            this.userDetailForm.get('city').setValue(res.data.city);
                        }
                        if (res.data.joiningDate != undefined) {
                            this.userDetailForm.get('joiningDate').setValue(res.data.joiningDate);
                        }
                        if (res.data.gender != undefined) {
                            this.userDetailForm.get('gender').setValue(res.data.gender);
                        }
                        if (res.data.bio != undefined) {
                            this.companyDetailForm.get('bio').setValue(res.data.bio);
                        }
                        if (res.data.employer != undefined) {
                            this.userDetailForm.get('employer').setValue(res.data.employer);
                        }
                        if (res.data.contactNumber != undefined) {
                            this.userDetailForm.get('contactNumber').setValue(res.data.contactNumber);
                        }
                        if (res.data.fullTime != undefined) {
                            this.userDetailForm.get('fullTime').setValue(res.data.fullTime);
                        }
                        if (res.data.position != undefined) {
                            this.userDetailForm.get('position').setValue(res.data.position);
                        }
                    }
                    this.inProgress = false;
                };
                UserProfileComponent.prototype.SET_COMPANIES_DATA = function (res) {
                    var companiesList = [];
                    res.data.forEach(function (element) {
                        companiesList.push({ "name": element.name, "value": element._id });
                    });
                    this.companies = companiesList;
                    console.log(this.companies);
                };
                return UserProfileComponent;
            }());
            UserProfileComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/user/user-profile/user-profile.component.scss")).default]
                })
            ], UserProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user-shift-schedules/user-shift-schedules.component.scss": 
        /*!******************************************************************************************!*\
          !*** ./src/app/components/user/user-shift-schedules/user-shift-schedules.component.scss ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLXNoaWZ0LXNjaGVkdWxlcy91c2VyLXNoaWZ0LXNjaGVkdWxlcy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user-shift-schedules/user-shift-schedules.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/user/user-shift-schedules/user-shift-schedules.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: UserShiftSchedulesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShiftSchedulesComponent", function () { return UserShiftSchedulesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services */ "./src/app/_services/index.ts");
            var colors = {
                red: {
                    primary: '#ad2121',
                    secondary: '#FAE3E3'
                },
                blue: {
                    primary: '#1e90ff',
                    secondary: '#D1E8FF'
                },
                yellow: {
                    primary: '#e3bc08',
                    secondary: '#FDF1BA'
                }
            };
            var UserShiftSchedulesComponent = /** @class */ (function () {
                function UserShiftSchedulesComponent(ref, modal, userShiftServices) {
                    var _this = this;
                    this.ref = ref;
                    this.modal = modal;
                    this.userShiftServices = userShiftServices;
                    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
                    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
                    this.viewDate = new Date();
                    this.actions = [
                        {
                            label: '<i class="fa fa-fw fa-pencil"></i>',
                            a11yLabel: 'Edit',
                            onClick: function (_a) {
                                var event = _a.event;
                                _this.handleEvent('Edited', event);
                            }
                        },
                        {
                            label: '<i class="fa fa-fw fa-times"></i>',
                            a11yLabel: 'Delete',
                            onClick: function (_a) {
                                var event = _a.event;
                                _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                                _this.handleEvent('Deleted', event);
                            }
                        }
                    ];
                    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.events = [];
                    this.activeDayIsOpen = true;
                    this.isLoading = false;
                }
                UserShiftSchedulesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    this.userShiftServices.getUserShift(this.currentUserId).subscribe(function (res) {
                        _this.setEvents(res);
                    });
                };
                UserShiftSchedulesComponent.prototype.dayClicked = function (_a) {
                    var date = _a.date, events = _a.events;
                    if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
                        if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                            events.length === 0) {
                            this.activeDayIsOpen = false;
                        }
                        else {
                            this.activeDayIsOpen = true;
                        }
                        this.viewDate = date;
                    }
                };
                UserShiftSchedulesComponent.prototype.eventTimesChanged = function (_a) {
                    var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
                    this.events = this.events.map(function (iEvent) {
                        if (iEvent === event) {
                            return Object.assign({}, event, { start: newStart, end: newEnd });
                        }
                        return iEvent;
                    });
                    this.handleEvent('Dropped or resized', event);
                };
                UserShiftSchedulesComponent.prototype.handleEvent = function (action, event) {
                    this.modalData = { event: event, action: action };
                    this.modal.open(this.modalContent, { size: 'lg' });
                };
                UserShiftSchedulesComponent.prototype.setEvents = function (res) {
                    this.events = [];
                    var cont = [];
                    if (res.data.length > 0) {
                        this.events = [
                            JSON.parse(res.data[0].data).forEach(function (element) {
                                cont.push({
                                    title: element.title,
                                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date(element.start)),
                                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date(element.end)),
                                    color: colors.red,
                                    draggable: true,
                                    resizable: {
                                        beforeStart: true,
                                        afterEnd: true
                                    }
                                });
                            })
                        ];
                    }
                    this.events = cont;
                    this.isLoading = false;
                    this.ref.detectChanges();
                };
                UserShiftSchedulesComponent.prototype.deleteEvent = function (eventToDelete) {
                    this.events = this.events.filter(function (event) { return event !== eventToDelete; });
                };
                UserShiftSchedulesComponent.prototype.setView = function (view) {
                    this.view = view;
                };
                UserShiftSchedulesComponent.prototype.closeOpenMonthViewDay = function () {
                    this.activeDayIsOpen = false;
                };
                return UserShiftSchedulesComponent;
            }());
            UserShiftSchedulesComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["UsershiftsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
            ], UserShiftSchedulesComponent.prototype, "modalContent", void 0);
            UserShiftSchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-shift-schedules',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-shift-schedules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-shift-schedules/user-shift-schedules.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-shift-schedules.component.scss */ "./src/app/components/user/user-shift-schedules/user-shift-schedules.component.scss")).default]
                })
            ], UserShiftSchedulesComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiUrl: 'https://employee-interlinker.herokuapp.com/api'
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Projects\Employee-InterLinker-master\Employee-InterLinker-master\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map