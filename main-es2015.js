(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/csc-productos/csc-productos.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/csc-productos/csc-productos.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 mt-5\">\n            <form>\n                <div class=\"form-group\">\n                  <label for=\"exampleFormControlInput1\" >Sku</label>\n                  <input type=\"text\" class=\"form-control\"name='sku' [(ngModel)]=\"selectedCsv.sku\" id=\"exampleFormControlInput1\" placeholder=\"Ejemplo: Emonk-7-000023-003\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleFormControlSelect1\"  >Tipo de Producto</label>\n                  <select class=\"form-control\" name=\"tipo\"id=\"exampleFormControlSelect1\" [(ngModel)]=\"selectedCsv.tipo\" >\n                    <option>simple</option>\n                    <option>configurable</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect1\">Categoria</label>\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                      <option>Hogar</option>\n                      <option>Electronicos</option>\n                      <option>Agricola</option>\n                      <option>Medica</option>\n                      <option>Fitnes</option>\n                      <option>Piezas Auto</option>\n                      <option>Laboratorio</option>\n                      <option>Materia Prima</option>\n\n                   \n                    </select>\n                  </div>\n        \n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Nombre</label>\n                    <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\"name='nombre' [(ngModel)]=\"selectedCsv.nombre\" placeholder=\"Ejemplo: Sartén Grill Cuadrado\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlTextarea1\">Descripción</label>\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"name='descripcion' [(ngModel)]=\"selectedCsv.descripcion\"></textarea>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Descripción Corta</label>\n                    <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\"name='descripcionCorta' [(ngModel)]=\"selectedCsv.descripcionCorta\" placeholder=\"Ejemplo: Sartén Grill Cuadrado\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Peso</label>\n                    <input type=\"number\" class=\"form-control\" id=\"exampleFormControlInput1\" name='peso' [(ngModel)]=\"selectedCsv.peso\" placeholder=\"Ejemplo: 50\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect1\">Color</label>\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\" name='color' [(ngModel)]=\"selectedCsv.color\">\n                      <option>Rojo</option>\n                      <option>Negro</option>\n                      <option>Azul</option>\n                      <option>Amarillo</option>\n                      <option>Verde</option>\n                      <option>Gris</option>\n                      <option>Cafe</option>\n                      <option>Blanco</option>\n\n                   \n                    </select>\n                  </div>\n                \n                  <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect1\">Material</label>\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\" name='material' [(ngModel)]=\"selectedCsv.material\">\n                      <option>Plastico</option>\n                      <option>Acero</option>\n                      <option>Cobre</option>\n                      <option>Aluminio</option>\n                      <option>Madera</option>\n                      <option>Poliester</option>\n                      <option>Hierro</option>\n                    </select>\n                  </div>\n              </form>\n\n        \n              <button class=\"btn btn-success\" (click)=\"add()\">Agregar</button>\n\n              <div class=\"container\">\n                <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\">\n              </div>\n        </div>\n        <div class=\"col-md-6 mt-5\">\n            <div class=\"container\">\n                <table class=\"table table-striped\">\n                    <thead>\n                      <tr>\n                        \n                        <th scope=\"col\">SKU</th>\n                        <th scope=\"col\">Tipo</th>\n                        <th scope=\"col\">Categoria</th>\n                        <th scope=\"col\">Nombre</th>\n                        <th scope=\"col\">Descripción</th>\n                        <th scope=\"col\">Des.Corta</th>\n                        <th scope=\"col\">Peso</th>\n                        <th scope=\"col\">Color</th>\n                        <th scope=\"col\">Material</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of csvArray\">\n                        \n                        <th>{{item.sku}}</th>\n                        <td>{{item.tipo}}</td>\n                        <td>{{item.categoria}}</td>\n                        <td>{{item.nombre}}</td>\n                        <td>{{item.descripcion}}</td>\n                        <td>{{item.descripcionCorta}}</td>\n                        <td>{{item.peso}}</td>\n                        <td>{{item.color}}</td>\n                        <td>{{item.material}}</td>\n                      </tr>\n                      \n                    </tbody>\n                  </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"casilleros-footer\"></div>\n    <div class=\"casilleros-footer\"></div>\n    <div class=\"casilleros-footer\"></div>\n    \n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/formulario/formulario.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/formulario/formulario.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>formulario works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n    <div class=\"\">\n        <nav class=\"navbar navbar-expand-lg navbar-dark emonk-nav\">\n            <a class=\"navbar-brand\" href=\"#\">\n              <img src=\"../../../assets/img/emonk-logo.png\" width=\"120\" height=\"60\" alt=\"\" loading=\"lazy\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n              <div class=\"navbar-nav\">\n                <a class=\"nav-item nav-link active\" href=\"#\">Inicio <span class=\"sr-only\">(current)</span></a>\n                <a class=\"nav-item nav-link\" href=\"#\">Instrucciones</a>\n                <a class=\"nav-item nav-link\" routerLink=\"/csvproductos\">Crear CSV</a>\n                <a class=\"nav-item nav-link\" href=\"#\">Contacto</a>\n              </div>\n            </div>\n          </nav>\n    </div>\n    <div class=\"presentacion\">\n        <div class=\"titulo-presentacion\">\n            <h1>App para Elaboración de Archivo CSV</h1>\n        </div>\n        \n    </div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1 class=\"text-center mb-5 mt-4\">Que Tipo de CSV deseas Crear?</h1>\n    \n    <div class=\"card-deck mt-4\">\n        <div class=\"card animate__animated animate__fadeInDown\">\n          <img src=\"../../../assets/img/productos.png\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">CSV PRODUCTOS</h5>\n            <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n            \n          </div>\n          <a class=\"btn btn-dark\" routerLink=\"/csvproductos\">COMENZAR</a>\n        \n        </div>\n        <div class=\"card animate__animated animate__fadeInDown\">\n          <img src=\"../../../assets/img/precios.png \" class=\"card-img-top\" height=\"232\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">CSV ADVANCED PRICING</h5>\n            <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n         \n          </div>\n          <button class=\"btn btn-dark\">Crear</button>\n        </div>\n        <div class=\"card animate__animated animate__fadeInDown\">\n          <img src=\"../../../assets/img/comprador.png\" class=\"card-img-top\" height=\"232\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">CSV CUSTOMER</h5>\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n            \n          </div>\n          <button class=\"btn btn-dark\">Crear</button>\n        </div>\n      </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"lectorExcel\">\n      <h1>Tienes un Documento Excel Listo?</h1>\n      <button class=\"btn btn-dark ml-2\" routerLink=\"/lectorexcel\"> Click Aqui</button>\n  </div>\n \n</div>\n<section class=\"container mt-5\">\n    <h1 class=\"text-center mt-5\">Como Funciona</h1>\n    <div class=\"accordion\" id=\"accordionExample\">\n        <div class=\"card \">\n          <div class=\"card-header bg-dark\" id=\"headingOne\">\n            <h2 class=\"mb-0\">\n              <button class=\"btn text-white btn-block text-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Paso 1\n              </button>\n            </h2>\n          </div>\n      \n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              <h5>Elige que Tipo de CSV desea crear.</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header bg-dark\" id=\"headingTwo\">\n            <h2 class=\"mb-0\">\n              <button class=\"btn text-white btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                Paso 2\n              </button>\n            </h2>\n          </div>\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header bg-dark \"  id=\"headingThree\">\n            <h2 class=\"mb-0\">\n              <button class=\"btn text-white btn-block text-left collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                Paso 3\n              </button>\n            </h2>\n          </div>\n          <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n            <div class=\"card-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n      </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lectorexcel/lectorexcel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lectorexcel/lectorexcel.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container mt-5\">\n    <div class=\"card text-center\" *ngIf=\"!tablaexcel\">\n        <div class=\"card-header\">\n          Lector Excel\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Añade tu archivo excel</h5>\n          <div class=\"container\">\n            <input type=\"file\" class=\"btn btn-primary\" (change)=\"onFileChange($event)\" multiple=\"false\">\n          </div>\n          \n        </div>\n        <div class=\"card-footer text-muted\">\n          \n        </div>\n      </div>\n\n     <div class=\"container\" *ngIf=\"cargando\">\n        <div class=\"d-flex align-items-center\">\n            <strong>Leyendo Documento Excel, espere unos segundos...</strong>\n            <div class=\"spinner-border ml-auto\" role=\"status\" aria-hidden=\"true\"></div>\n          </div>\n     </div> \n  \n</div>\n<div class=\"container-fluid\" *ngIf=\"tablaexcel\" id=\"element\">\n    <table class=\"table\">\n        <tbody>\n          <tr *ngFor=\"let row of data\">\n            <td *ngFor=\"let cell of row\">\n                {{cell}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </div>\n  <hr>\n  <div class=\"container d-flex justify-content-center\">\n    <button class=\"btn btn-primary\"  *ngIf=\"tablaexcel\" (click)=\"download()\">Descargar CSV</button>\n    <button class=\"btn btn-primary ml-3\"  *ngIf=\"tablaexcel\" (click)=\"downloadExcel()\">Descargar Excel</button>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app-emonk';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/formulario/formulario.component */ "./src/app/components/formulario/formulario.component.ts");
/* harmony import */ var _components_csc_productos_csc_productos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/csc-productos/csc-productos.component */ "./src/app/components/csc-productos/csc-productos.component.ts");
/* harmony import */ var _components_lectorexcel_lectorexcel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lectorexcel/lectorexcel.component */ "./src/app/components/lectorexcel/lectorexcel.component.ts");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");













const routes = [
    { path: '', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_8__["InicioComponent"] },
    { path: 'csvproductos', component: _components_csc_productos_csc_productos_component__WEBPACK_IMPORTED_MODULE_10__["CscProductosComponent"] },
    { path: 'lectorexcel', component: _components_lectorexcel_lectorexcel_component__WEBPACK_IMPORTED_MODULE_11__["LectorexcelComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_8__["InicioComponent"],
            _components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_9__["FormularioComponent"],
            _components_csc_productos_csc_productos_component__WEBPACK_IMPORTED_MODULE_10__["CscProductosComponent"],
            _components_lectorexcel_lectorexcel_component__WEBPACK_IMPORTED_MODULE_11__["LectorexcelComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_12__["ExportAsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/csc-productos/csc-productos.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/csc-productos/csc-productos.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3NjLXByb2R1Y3Rvcy9jc2MtcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/csc-productos/csc-productos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/csc-productos/csc-productos.component.ts ***!
  \*********************************************************************/
/*! exports provided: CscProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CscProductosComponent", function() { return CscProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/csv */ "./src/app/models/csv.ts");



let CscProductosComponent = class CscProductosComponent {
    constructor() {
        this.csvArray = [
            { sku: 'Emonk-7-000023-003', tipo: 'simple', categoria: 'Hogar', nombre: 'Sarten Grill Cuadrado', descripcion: 'Sarten bañado en ceramica, basta de usar aceite en tus alimentos', descripcionCorta: 'Sarten bañado en ceramica', peso: 2, color: 'Negro', material: 'Hierro' }
        ];
        this.selectedCsv = new _models_csv__WEBPACK_IMPORTED_MODULE_2__["Csv"]();
    }
    ngOnInit() {
    }
    add() {
        console.log(this.selectedCsv);
        this.csvArray.push(this.selectedCsv);
        this.selectedCsv = new _models_csv__WEBPACK_IMPORTED_MODULE_2__["Csv"]();
    }
};
CscProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-csc-productos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./csc-productos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/csc-productos/csc-productos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./csc-productos.component.css */ "./src/app/components/csc-productos/csc-productos.component.css")).default]
    })
], CscProductosComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n    background:#000;\r\n    height: 200px;\r\n    width:100%;\r\n    margin-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7SUFDVixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/formulario/formulario.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/formulario/formulario.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/formulario/formulario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/formulario/formulario.component.ts ***!
  \***************************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormularioComponent = class FormularioComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formulario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formulario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/formulario/formulario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formulario.component.css */ "./src/app/components/formulario/formulario.component.css")).default]
    })
], FormularioComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header{\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    height: 500px;\r\n    background: url('banner.jpg');\r\n    background-size:cover;\r\n    background-attachment: fixed; \r\n}\r\n\r\n.menu{\r\n    background:#000;\r\n    color: white;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items:center;\r\n    \r\n}\r\n\r\n.logo{\r\n    flex: 4;\r\n}\r\n\r\n.nav{\r\n    flex:1;\r\n    \r\n}\r\n\r\n.logo{\r\n    margin-left: 50px;\r\n}\r\n\r\n.nav-enlace{\r\n    text-decoration: none;\r\n    color:#fff;\r\n    margin-left: 10px;\r\n    padding:5px;\r\n    font-size: 16px;\r\n}\r\n\r\n.presentacion{\r\n    display:flex;\r\n    align-items:center;\r\n    height: 400px;\r\n    color:#fff;\r\n    justify-content: center;\r\n    \r\n    background:rgba(0,0,0, .4);\r\n}\r\n\r\n.presentacion h1{\r\n    font-weight:lighter;\r\n}\r\n\r\n.emonk-nav{\r\n    background:#000;\r\n    height: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYiw2QkFBaUQ7SUFDakQscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUNBO0lBQ0ksTUFBTTs7QUFFVjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1Qjs7SUFFdkIsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyBcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIGZsZXg6IDQ7XHJcbn1cclxuLm5hdntcclxuICAgIGZsZXg6MTtcclxuICAgIFxyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5uYXYtZW5sYWNle1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnByZXNlbnRhY2lvbntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwgLjQpO1xyXG59XHJcbi5wcmVzZW50YWNpb24gaDF7XHJcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG59XHJcbi5lbW9uay1uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/inicio/inicio.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section{\r\n    margin-top: 160px;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 300px;\r\n    \r\n\r\n}\r\n\r\n.howdoit{\r\n    width:50%;\r\n}\r\n\r\n.lectorExcel{\r\n    height: 300px;\r\n    width: 100%;\r\n    background: url('listo.jpg');\r\n    margin-top:50px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.howdoit-img{\r\n    width:50%;\r\n    background: url('instruccion.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center;\r\n}\r\n\r\n.lectorExcel{\r\n    display: flex;\r\n    color: antiquewhite;\r\n    align-items:center;\r\n    justify-content: center;\r\n}\r\n\r\n@media(max-width:600px){\r\n    .section{\r\n        flex-direction: column;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDRCQUFnRDtJQUNoRCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtDQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4uaG93ZG9pdHtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG5cclxuLmxlY3RvckV4Y2Vse1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xpc3RvLmpwZycpO1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaG93ZG9pdC1pbWd7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltZy9pbnN0cnVjY2lvbi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmxlY3RvckV4Y2Vse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICAuc2VjdGlvbntcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InicioComponent = class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
};
InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inicio.component.css */ "./src/app/components/inicio/inicio.component.css")).default]
    })
], InicioComponent);



/***/ }),

/***/ "./src/app/components/lectorexcel/lectorexcel.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/lectorexcel/lectorexcel.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVjdG9yZXhjZWwvbGVjdG9yZXhjZWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/lectorexcel/lectorexcel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/lectorexcel/lectorexcel.component.ts ***!
  \*****************************************************************/
/*! exports provided: LectorexcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectorexcelComponent", function() { return LectorexcelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/excel */ "./src/app/models/excel.ts");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");





let LectorexcelComponent = class LectorexcelComponent {
    constructor(exportAsService) {
        this.exportAsService = exportAsService;
        this.tipoArchivo = 'csv';
        // Funcion para exportar CSV
        this.exportAsConfig = {
            type: `csv`,
            elementIdOrContent: 'element',
        };
        // Funcion para exportar Excel
        this.exportAsConfigExcel = {
            type: `xlsx`,
            elementIdOrContent: 'element',
        };
        this.datos = [];
    }
    /**
     * Funcion que llama a la descarga csv
     */
    download() {
        let fecha = new Date();
        // download the file using old school javascript method
        this.exportAsService.save(this.exportAsConfig, `csv-emonk-${fecha}`).subscribe(() => {
            // save started
        });
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig).subscribe(content => {
            console.log(content);
        });
    }
    /**
     * Funcion que llama a la descarga
     */
    downloadExcel() {
        let random = Math.round(Math.random() * 100);
        // download the file using old school javascript method
        this.exportAsService.save(this.exportAsConfigExcel, `excel-emonk-${random}`).subscribe(() => {
            // save started
        });
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        this.exportAsService.get(this.exportAsConfig).subscribe(content => {
            console.log(content);
        });
    }
    ngOnInit() {
    }
    onFileChange(evt) {
        const target = (evt.target);
        if (target.files.length !== 1)
            throw new Error("No se permite multiples archivos");
        const reader = new FileReader();
        reader.onload = (e) => {
            const bstr = e.target.result;
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            this.data = (xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { header: 1 }));
            console.log(this.data);
            for (let i = 1; i < this.data.length; i++) {
                /**
                 * Variables para recoger data de excel
                 */
                let categoria = this.data[i][9];
                let nombre = this.data[i][10];
                let info = new _models_excel__WEBPACK_IMPORTED_MODULE_3__["Excel"]();
                let sku = this.data[i][4];
                let item = this.data[i][4];
                let cola = this.data[i][5];
                let configurableA = this.data[i][8];
                let configurableB = this.data[i][18];
                let contadorConfigurable = 0;
                if (sku !== null) {
                    /**
                     * Incio de logica para asignacion de cogido
                     */
                    //================================= Validacion para Categoria Home ============================================//
                    if (categoria.includes("Home") === true) {
                        let visibilidad;
                        if (configurableA === undefined && configurableB === 'Simple') {
                            visibilidad = "Catalog, Search";
                        }
                        if (configurableA === undefined && configurableB === "Configurable") {
                            visibilidad = "Not Visible Individually";
                        }
                        if (configurableA === 'Configurable' && configurableB === "Configurable") {
                            visibilidad = "Catalog, Search";
                        }
                        // Logica para productos configurable
                        this.datos.push([7 + "-00000" + sku + "-00" + cola, "Default", categoria, nombre, 1, "Taxable Goods", visibilidad]);
                    }
                    //=============================Fin Validacion =============================================//
                    //================================= Validacion para Categoria Home ============================================//
                    if (categoria.includes("Baby") === true) {
                        this.datos.push(27 + "-00000" + sku + "-00" + cola);
                        // Logica para productos configurable
                        // if( configurableA === undefined && configurableB === 'Simple'){
                        //   this.datos.push(27+"-0000"+sku+"-00"+1);
                        //  }
                        //  if( configurableA === undefined && configurableB === "Configurable"){
                        //   let resta = sku - i;
                        //   console.log("seccion baby "+ 'El valord de sku es' + sku +' el valor de i ='+ i + 'y el resultado es ='+resta);
                        //   let variante = resta*-1;
                        //   this.datos.push(27+"-0000"+sku+"-00"+variante);            
                        //  }
                        //  if( configurableA === 'Configurable' && configurableB === "Configurable"){
                        //       this.datos.push(27+"-0000"+sku+"-00"+0);
                        //  }
                    }
                    //=============================Fin Validacion =============================================//
                    //================================= Validacion para Cleaning============================================//
                    if (categoria.includes("Cleaning") === true) {
                        // Logica para productos configurable
                        this.datos.push(25 + "-00000" + sku + "-00" + cola);
                        // if( configurableA === undefined && configurableB === 'Simple'){
                        //   this.datos.push(25+"-0000"+sku+"-00"+1);
                        //  }
                        //  if( configurableA === undefined && configurableB === "Configurable"){
                        //   let resta = sku - i;
                        //   console.log("seccion cleaning"+resta);
                        //   let variante = resta*-1;
                        //   this.datos.push(25+"-0000"+sku+"-00"+variante);            
                        //  }
                        //  if( configurableA === 'Configurable' && configurableB === "Configurable"){
                        //       this.datos.push(25+"-0000"+sku+"-00"+0);
                        //  }
                    }
                    if (categoria.includes("Sustainable") === true) {
                        this.datos.push(17 + "-00000" + sku + "-00" + cola);
                    }
                    if (categoria.includes("Laboratory") === true) {
                        this.datos.push(9 + "-00000" + sku + "-00" + cola);
                    }
                    //=============================Fin Validacion =============================================//
                }
            }
            console.log(this.datos);
        };
        reader.readAsBinaryString(target.files[0]);
        this.cargando = true;
        setTimeout(() => {
            this.cargando = false;
            this.tablaexcel = true;
        }, 3000);
    }
};
LectorexcelComponent.ctorParameters = () => [
    { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_4__["ExportAsService"] }
];
LectorexcelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lectorexcel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lectorexcel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lectorexcel/lectorexcel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lectorexcel.component.css */ "./src/app/components/lectorexcel/lectorexcel.component.css")).default]
    })
], LectorexcelComponent);



/***/ }),

/***/ "./src/app/models/csv.ts":
/*!*******************************!*\
  !*** ./src/app/models/csv.ts ***!
  \*******************************/
/*! exports provided: Csv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Csv", function() { return Csv; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Csv {
}


/***/ }),

/***/ "./src/app/models/excel.ts":
/*!*********************************!*\
  !*** ./src/app/models/excel.ts ***!
  \*********************************/
/*! exports provided: Excel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Excel", function() { return Excel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Excel {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bodeg\OneDrive\Imágenes\Escritorio\app-emonk-csv\app-emonk\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map