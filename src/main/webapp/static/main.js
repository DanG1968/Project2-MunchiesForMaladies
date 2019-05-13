(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_list_ailments_list_ailments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-ailments/list-ailments.component */ "./src/app/components/list-ailments/list-ailments.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/components/item/item.component.ts");
/* harmony import */ var _components_meal_meal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/meal/meal.component */ "./src/app/components/meal/meal.component.ts");








var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'recipes/:item', component: _components_meal_meal_component__WEBPACK_IMPORTED_MODULE_7__["MealComponent"] },
    { path: 'list-ailments', component: _components_list_ailments_list_ailments_component__WEBPACK_IMPORTED_MODULE_5__["ListAilmentsComponent"] },
    { path: 'food-items/:problemId', component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'munchies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL, ERS_JPA_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERS_JPA_API_URL", function() { return ERS_JPA_API_URL; });
var API_URL = 'http://ec2-18-234-79-63.compute-1.amazonaws.com:8080';
var ERS_JPA_API_URL = 'http://ec2-18-234-79-63.compute-1.amazonaws.com:8080/MunchiesForMaladies/';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_meal_meal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/meal/meal.component */ "./src/app/components/meal/meal.component.ts");
/* harmony import */ var _components_ailment_ailment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ailment/ailment.component */ "./src/app/components/ailment/ailment.component.ts");
/* harmony import */ var _components_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/item/item.component */ "./src/app/components/item/item.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_list_ailments_list_ailments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/list-ailments/list-ailments.component */ "./src/app/components/list-ailments/list-ailments.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_meal_meal_component__WEBPACK_IMPORTED_MODULE_5__["MealComponent"],
                _components_ailment_ailment_component__WEBPACK_IMPORTED_MODULE_6__["AilmentComponent"],
                _components_item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                _components_list_ailments_list_ailments_component__WEBPACK_IMPORTED_MODULE_17__["ListAilmentsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_15__["appRoutes"]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ailment/ailment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/ailment/ailment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWlsbWVudC9haWxtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ailment/ailment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/ailment/ailment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ailment works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/ailment/ailment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ailment/ailment.component.ts ***!
  \*********************************************************/
/*! exports provided: AilmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AilmentComponent", function() { return AilmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AilmentComponent = /** @class */ (function () {
    function AilmentComponent() {
    }
    AilmentComponent.prototype.ngOnInit = function () {
    };
    AilmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ailment',
            template: __webpack_require__(/*! ./ailment.component.html */ "./src/app/components/ailment/ailment.component.html"),
            styles: [__webpack_require__(/*! ./ailment.component.css */ "./src/app/components/ailment/ailment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AilmentComponent);
    return AilmentComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  error works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/item/item.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/item/item.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/item/item.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/item/item.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Name</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of itemsArray\">\n      <td>{{item}}</td>\n      <td><button (click)=\"selectMeal(item)\" class=\"btn btn-success\">Get Meal Options</button></td>\n    </tr>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/item/item.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/item/item.component.ts ***!
  \***************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ailment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ailment.service */ "./src/app/services/ailment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");





var ItemComponent = /** @class */ (function () {
    function ItemComponent(ailmentService, itemService, router, activatedRoute) {
        this.ailmentService = ailmentService;
        this.itemService = itemService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ailmentService.selectAilment(this.activatedRoute.snapshot.params.problemId).subscribe(function (data) {
            _this.items = data[0];
            _this.itemsArray = _this.items.split(';');
        });
    };
    ItemComponent.prototype.selectMeal = function (item) {
        console.log("select foodItem " + item);
        this.router.navigate(['recipes', item.trim().toLowerCase()]);
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/components/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/components/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ailment_service__WEBPACK_IMPORTED_MODULE_2__["AilmentService"],
            _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/components/list-ailments/list-ailments.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/list-ailments/list-ailments.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1haWxtZW50cy9saXN0LWFpbG1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/list-ailments/list-ailments.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-ailments/list-ailments.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Id</th>\n      <th>Name</th>\n      <th>Description</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let ailment of ailments\">\n      <td>{{ailment.problemID}}</td>\n      <td>{{ailment.hcText}}</td>\n      <td><button (click)=\"selectAilment(ailment.problemID)\" class=\"btn btn-success\">Get Food Items</button></td>\n    </tr>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/list-ailments/list-ailments.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-ailments/list-ailments.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListAilmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAilmentsComponent", function() { return ListAilmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ailment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ailment.service */ "./src/app/services/ailment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListAilmentsComponent = /** @class */ (function () {
    function ListAilmentsComponent(ailmentService, router) {
        this.ailmentService = ailmentService;
        this.router = router;
    }
    ListAilmentsComponent.prototype.ngOnInit = function () {
        this.refreshAilments();
    };
    ListAilmentsComponent.prototype.refreshAilments = function () {
        var _this = this;
        this.ailmentService.retrieveAllAilments().subscribe(function (response) {
            console.log(response);
            _this.ailments = response;
        });
    };
    ListAilmentsComponent.prototype.selectAilment = function (id) {
        console.log("select ailment " + id);
        this.router.navigate(['food-items', id]);
    };
    ListAilmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-ailments',
            template: __webpack_require__(/*! ./list-ailments.component.html */ "./src/app/components/list-ailments/list-ailments.component.html"),
            styles: [__webpack_require__(/*! ./list-ailments.component.css */ "./src/app/components/list-ailments/list-ailments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ailment_service__WEBPACK_IMPORTED_MODULE_2__["AilmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListAilmentsComponent);
    return ListAilmentsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<H1>Munchies for Maladies Login!</H1>\n\n<div class=\"container\">\n  <div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>\n\n  <div>\n    User Name : <input type=\"text\" name=\"username\" [(ngModel)]=\"username\">\n    Password  : <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n    <button (click)=login() class=\"btn btn-success\">Login</button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({ username: this.username, password: this.password })
            .subscribe(function (token) {
            localStorage.setItem('authToken', token.idToken);
            var url = 'welcome/' + _this.username;
            _this.router.navigate(['list-ailments']);
        }, function (err) {
            console.log(err.status);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/meal/meal.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/meal/meal.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVhbC9tZWFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/meal/meal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/meal/meal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Name</th>\n    </tr>\n    <tr>\n      <th>Instructions</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let meal of meals \">\n      <td>{{meal.strMeal}}</td>\n      <td>{{meal.strInstructions}}</td>\n    </tr>\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/meal/meal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/meal/meal.component.ts ***!
  \***************************************************/
/*! exports provided: MealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealComponent", function() { return MealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_meal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/meal.service */ "./src/app/services/meal.service.ts");




var MealComponent = /** @class */ (function () {
    function MealComponent(mealService, activatedRoute) {
        this.mealService = mealService;
        this.activatedRoute = activatedRoute;
    }
    MealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mealService.selectMeal(this.activatedRoute.snapshot.params.item).subscribe(function (data) {
            console.log(data);
            _this.meals = data.meals;
            console.log(_this.meals);
            // this.mealArray = (this.meals as string).split(';');
        });
    };
    MealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meal',
            template: __webpack_require__(/*! ./meal.component.html */ "./src/app/components/meal/meal.component.html"),
            styles: [__webpack_require__(/*! ./meal.component.css */ "./src/app/components/meal/meal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_meal_service__WEBPACK_IMPORTED_MODULE_3__["MealService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MealComponent);
    return MealComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: #ccc;\r\n  }\r\n   \r\n  .nav ul {\r\n    list-style: none;\r\n    background-color: #444;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n   \r\n  .nav li {\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 1.2em;\r\n    line-height: 40px;\r\n    height: 40px;\r\n    border-bottom: 1px solid #888;\r\n  }\r\n   \r\n  .nav a {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    display: block;\r\n    transition: .3s background-color;\r\n  }\r\n   \r\n  .nav a:hover {\r\n    background-color: #005f5f;\r\n  }\r\n   \r\n  .nav a.active {\r\n    background-color: #fff;\r\n    color: #444;\r\n    cursor: default;\r\n  }\r\n   \r\n  @media screen and (min-width: 600px) {\r\n    .nav li {\r\n      width: 120px;\r\n      border-bottom: none;\r\n      height: 50px;\r\n      line-height: 50px;\r\n      font-size: 1.4em;\r\n    }\r\n   \r\n    /* Option 1 - Display Inline */\r\n    .nav li {\r\n      display: inline-block;\r\n      margin-right: -4px;\r\n    }\r\n   \r\n    /* Options 2 - Float\r\n    .nav li {\r\n      float: left;\r\n    }\r\n    .nav ul {\r\n      overflow: auto;\r\n      width: 600px;\r\n      margin: 0 auto;\r\n    }\r\n    .nav {\r\n      background-color: #444;\r\n    }\r\n    */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0U7TUFDRSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsZ0JBQWdCO0lBQ2xCOztJQUVBLDhCQUE4QjtJQUM5QjtNQUNFLHFCQUFxQjtNQUNyQixrQkFBa0I7SUFDcEI7O0lBRUE7Ozs7Ozs7Ozs7OztLQVlDO0VBQ0giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgfVxyXG4gICBcclxuICAubmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm5hdiBsaSB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcclxuICB9XHJcbiAgIFxyXG4gIC5uYXYgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG4gICBcclxuICAubmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWY1ZjtcclxuICB9XHJcbiAgIFxyXG4gIC5uYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuICAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5uYXYgbGkge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLyogT3B0aW9uIDEgLSBEaXNwbGF5IElubGluZSAqL1xyXG4gICAgLm5hdiBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC8qIE9wdGlvbnMgMiAtIEZsb2F0XHJcbiAgICAubmF2IGxpIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubmF2IHVsIHtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICAubmF2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIH1cclxuICAgICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-sm bg-primary navbar-dark\">\r\n\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" routerLink=\"login\">Login</a>\r\n    </li>\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" routerLink=\"logout\">Logout</a>\r\n    </li>\r\n\r\n  </ul>\r\n</nav> -->\r\n\r\n\r\n\r\n<div class=\"nav\">\r\n  <ul>\r\n    <li>\r\n      <a class=\"nav-link\" routerLink=\"list-ailments\">Home</a>\r\n    </li>\r\n    <li>\r\n      <a class=\"nav-link\" routerLink=\"login\">Login</a>\r\n    </li>\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" routerLink=\"logout\">Logout</a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");

/*
Routing is a feature that Angular uses to acheive
true single page application format.

Routing entails setting up a page to be injected
through the URL that we are connected to. The URLs
themselves don't point to separate files to be
displayed due to the fact that this would be a
multipage application.
*/
/*NOTE: If your routes don't work, try switching the
order of your routes to match the order in which
 */
var appRoutes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/ailment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ailment.service.ts ***!
  \*********************************************/
/*! exports provided: AilmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AilmentService", function() { return AilmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");




var AilmentService = /** @class */ (function () {
    function AilmentService(http) {
        this.http = http;
    }
    AilmentService.prototype.retrieveAllAilments = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["ERS_JPA_API_URL"] + "/api/ailments");
    };
    AilmentService.prototype.selectAilment = function (id) {
        console.log('inside retrieve reimbursements');
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["ERS_JPA_API_URL"] + "/api/topItemsToConsume/" + id);
    };
    AilmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AilmentService);
    return AilmentService;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (body) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["ERS_JPA_API_URL"] + "/auth/sign", body);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/meal.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/meal.service.ts ***!
  \******************************************/
/*! exports provided: MealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealService", function() { return MealService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MealService = /** @class */ (function () {
    function MealService(http) {
        this.http = http;
    }
    MealService.prototype.selectMeal = function (item) {
        console.log('inside retrieve meal');
        console.log(item);
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["ERS_JPA_API_URL"] + "/api/recipes/" + item);
    };
    MealService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MealService);
    return MealService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\T420\Documents\MunchiesForMaladies_Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map