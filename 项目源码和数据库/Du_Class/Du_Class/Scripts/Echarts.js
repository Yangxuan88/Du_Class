(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("echarts"));
    else if (typeof define === 'function' && define.amd)
        define(["echarts"], factory);
    else if (typeof exports === 'object')
        exports["echarts-gl"] = factory(require("echarts"));
    else
        root["echarts-gl"] = factory(root["echarts"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_0__) {
    return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
                /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
                /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
            /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
        /******/
});
                /******/
}
            /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
            /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
        /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

            /***/
}),
/* 1 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_claygl_src_Mesh__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_claygl_src_Renderer__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_claygl_src_Texture2D__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_claygl_src_Node__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_claygl_src_Geometry__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__EChartsSurface__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_claygl_src_light_AmbientCubemap__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_claygl_src_light_AmbientSH__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_claygl_src_util_sh__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__retrieve__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_claygl_src_geometry_Sphere__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_claygl_src_geometry_Plane__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_claygl_src_geometry_Cube__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_claygl_src_light_Ambient__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_claygl_src_light_Directional__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_claygl_src_light_Point__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_claygl_src_light_Spot__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_claygl_src_camera_Perspective__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_claygl_src_camera_Orthographic__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_claygl_src_math_Vector2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_claygl_src_math_Vector3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_claygl_src_math_Vector4__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_claygl_src_math_Quaternion__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_claygl_src_math_Matrix2__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_claygl_src_math_Matrix2d__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_claygl_src_math_Matrix3__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_claygl_src_math_Matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_claygl_src_math_Plane__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_claygl_src_math_Ray__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_claygl_src_math_BoundingBox__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_claygl_src_math_Frustum__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__animatableMixin__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_claygl_src_shader_source_util_glsl_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_claygl_src_shader_source_prez_glsl_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shader_common_glsl_js__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shader_color_glsl_js__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shader_lambert_glsl_js__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shader_realistic_glsl_js__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shader_hatching_glsl_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shader_shadow_glsl_js__ = __webpack_require__(152);






























            // Math

















            // Some common shaders










            __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts___default.a.util.extend(__WEBPACK_IMPORTED_MODULE_6_claygl_src_Node__["a" /* default */].prototype, __WEBPACK_IMPORTED_MODULE_38__animatableMixin__["a" /* default */]);

            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_39_claygl_src_shader_source_util_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_40_claygl_src_shader_source_prez_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_41__shader_common_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_42__shader_color_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_43__shader_lambert_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_44__shader_realistic_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_45__shader_hatching_glsl_js__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_46__shader_shadow_glsl_js__["a" /* default */]);

            function isValueNone(value) {
                return !value || value === 'none';
            }

            function isValueImage(value) {
                return value instanceof HTMLCanvasElement
                    || value instanceof HTMLImageElement
                    || value instanceof Image;
            }

            function isECharts(value) {
                return value.getZr && value.setOption;
            }

            // Overwrite addToScene and removeFromScene
            var oldAddToScene = __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.addToScene;
            var oldRemoveFromScene = __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.removeFromScene;

            __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.addToScene = function (node) {
                oldAddToScene.call(this, node);

                if (this.__zr) {
                    var zr = this.__zr;
                    node.traverse(function (child) {
                        child.__zr = zr;
                        if (child.addAnimatorsToZr) {
                            child.addAnimatorsToZr(zr);
                        }
                    });
                }
            };

            __WEBPACK_IMPORTED_MODULE_9_claygl_src_Scene__["a" /* default */].prototype.removeFromScene = function (node) {
                oldRemoveFromScene.call(this, node);

                node.traverse(function (child) {
                    var zr = child.__zr;
                    child.__zr = null;
                    if (zr && child.removeAnimatorsFromZr) {
                        child.removeAnimatorsFromZr(zr);
                    }
                });
            };

            /**
             * @param {string} textureName
             * @param {string|HTMLImageElement|HTMLCanvasElement} imgValue
             * @param {module:echarts/ExtensionAPI} api
             * @param {Object} [textureOpts]
             */
            __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__["a" /* default */].prototype.setTextureImage = function (textureName, imgValue, api, textureOpts) {
                if (!this.shader) {
                    return;
                }

                var zr = api.getZr();
                var material = this;
                var texture;
                material.autoUpdateTextureStatus = false;
                // disableTexture first
                material.disableTexture(textureName);
                if (!isValueNone(imgValue)) {
                    texture = graphicGL.loadTexture(imgValue, api, textureOpts, function (texture) {
                        material.enableTexture(textureName);
                        zr && zr.refresh();
                    });
                    // Set texture immediately for other code to verify if have this texture.
                    material.set(textureName, texture);
                }

                return texture;
            };

            var graphicGL = {};

            graphicGL.Renderer = __WEBPACK_IMPORTED_MODULE_1_claygl_src_Renderer__["a" /* default */];

            graphicGL.Node = __WEBPACK_IMPORTED_MODULE_6_claygl_src_Node__["a" /* default */];

            graphicGL.Mesh = __WEBPACK_IMPORTED_MODULE_0_claygl_src_Mesh__["a" /* default */];

            graphicGL.Shader = __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */];

            graphicGL.Material = __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__["a" /* default */];

            graphicGL.Texture = __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__["a" /* default */];

            graphicGL.Texture2D = __WEBPACK_IMPORTED_MODULE_2_claygl_src_Texture2D__["a" /* default */];

            // Geometries
            graphicGL.Geometry = __WEBPACK_IMPORTED_MODULE_7_claygl_src_Geometry__["a" /* default */];
            graphicGL.SphereGeometry = __WEBPACK_IMPORTED_MODULE_17_claygl_src_geometry_Sphere__["a" /* default */];
            graphicGL.PlaneGeometry = __WEBPACK_IMPORTED_MODULE_18_claygl_src_geometry_Plane__["a" /* default */];
            graphicGL.CubeGeometry = __WEBPACK_IMPORTED_MODULE_19_claygl_src_geometry_Cube__["a" /* default */];

            // Lights
            graphicGL.AmbientLight = __WEBPACK_IMPORTED_MODULE_20_claygl_src_light_Ambient__["a" /* default */];
            graphicGL.DirectionalLight = __WEBPACK_IMPORTED_MODULE_21_claygl_src_light_Directional__["a" /* default */];
            graphicGL.PointLight = __WEBPACK_IMPORTED_MODULE_22_claygl_src_light_Point__["a" /* default */];
            graphicGL.SpotLight = __WEBPACK_IMPORTED_MODULE_23_claygl_src_light_Spot__["a" /* default */];

            // Cameras
            graphicGL.PerspectiveCamera = __WEBPACK_IMPORTED_MODULE_24_claygl_src_camera_Perspective__["a" /* default */];
            graphicGL.OrthographicCamera = __WEBPACK_IMPORTED_MODULE_25_claygl_src_camera_Orthographic__["a" /* default */];

            // Math
            graphicGL.Vector2 = __WEBPACK_IMPORTED_MODULE_26_claygl_src_math_Vector2__["a" /* default */];
            graphicGL.Vector3 = __WEBPACK_IMPORTED_MODULE_27_claygl_src_math_Vector3__["a" /* default */];
            graphicGL.Vector4 = __WEBPACK_IMPORTED_MODULE_28_claygl_src_math_Vector4__["a" /* default */];

            graphicGL.Quaternion = __WEBPACK_IMPORTED_MODULE_29_claygl_src_math_Quaternion__["a" /* default */];

            graphicGL.Matrix2 = __WEBPACK_IMPORTED_MODULE_30_claygl_src_math_Matrix2__["a" /* default */];
            graphicGL.Matrix2d = __WEBPACK_IMPORTED_MODULE_31_claygl_src_math_Matrix2d__["a" /* default */];
            graphicGL.Matrix3 = __WEBPACK_IMPORTED_MODULE_32_claygl_src_math_Matrix3__["a" /* default */];
            graphicGL.Matrix4 = __WEBPACK_IMPORTED_MODULE_33_claygl_src_math_Matrix4__["a" /* default */];

            graphicGL.Plane = __WEBPACK_IMPORTED_MODULE_34_claygl_src_math_Plane__["a" /* default */];
            graphicGL.Ray = __WEBPACK_IMPORTED_MODULE_35_claygl_src_math_Ray__["a" /* default */];
            graphicGL.BoundingBox = __WEBPACK_IMPORTED_MODULE_36_claygl_src_math_BoundingBox__["a" /* default */];
            graphicGL.Frustum = __WEBPACK_IMPORTED_MODULE_37_claygl_src_math_Frustum__["a" /* default */];

            // Texture utilities

            var blankImage = __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__["a" /* default */].createBlank('rgba(255,255,255,0)').image;


            function nearestPowerOfTwo(val) {
                return Math.pow(2, Math.round(Math.log(val) / Math.LN2));
            }
            function convertTextureToPowerOfTwo(texture) {
                if ((texture.wrapS === __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__["a" /* default */].REPEAT || texture.wrapT === __WEBPACK_IMPORTED_MODULE_3_claygl_src_Texture__["a" /* default */].REPEAT)
                    && texture.image
                ) {
                    // var canvas = document.createElement('canvas');
                    var width = nearestPowerOfTwo(texture.width);
                    var height = nearestPowerOfTwo(texture.height);
                    if (width !== texture.width || height !== texture.height) {
                        var canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(texture.image, 0, 0, width, height);
                        texture.image = canvas;
                    }
                }
            }
            /**
             * @param {string|HTMLImageElement|HTMLCanvasElement} imgValue
             * @param {module:echarts/ExtensionAPI} api
             * @param {Object} [textureOpts]
             * @param {Function} cb
             */
            // TODO Promise, test
            graphicGL.loadTexture = function (imgValue, api, textureOpts, cb) {
                if (typeof textureOpts === 'function') {
                    cb = textureOpts;
                    textureOpts = {};
                }
                textureOpts = textureOpts || {};

                var keys = Object.keys(textureOpts).sort();
                var prefix = '';
                for (var i = 0; i < keys.length; i++) {
                    prefix += keys[i] + '_' + textureOpts[keys[i]] + '_';
                }

                var textureCache = api.__textureCache = api.__textureCache || new __WEBPACK_IMPORTED_MODULE_10_zrender_lib_core_LRU___default.a(20);

                if (isECharts(imgValue)) {
                    var id = imgValue.__textureid__;
                    var textureObj = textureCache.get(prefix + id);
                    if (!textureObj) {
                        var surface = new __WEBPACK_IMPORTED_MODULE_12__EChartsSurface__["a" /* default */](imgValue);
                        surface.onupdate = function () {
                            api.getZr().refresh();
                        };
                        textureObj = {
                            texture: surface.getTexture()
                        };
                        for (var i = 0; i < keys.length; i++) {
                            textureObj.texture[keys[i]] = textureOpts[keys[i]];
                        }
                        id = imgValue.__textureid__ || '__ecgl_ec__' + textureObj.texture.__uid__;
                        imgValue.__textureid__ = id;
                        textureCache.put(prefix + id, textureObj);
                        cb && cb(textureObj.texture);
                    }
                    else {
                        textureObj.texture.surface.setECharts(imgValue);

                        cb && cb(textureObj.texture);
                    }
                    return textureObj.texture;
                }
                else if (isValueImage(imgValue)) {
                    var id = imgValue.__textureid__;
                    var textureObj = textureCache.get(prefix + id);
                    if (!textureObj) {
                        textureObj = {
                            texture: new graphicGL.Texture2D({
                                image: imgValue
                            })
                        };
                        for (var i = 0; i < keys.length; i++) {
                            textureObj.texture[keys[i]] = textureOpts[keys[i]];
                        }
                        id = imgValue.__textureid__ || '__ecgl_image__' + textureObj.texture.__uid__;
                        imgValue.__textureid__ = id;
                        textureCache.put(prefix + id, textureObj);

                        convertTextureToPowerOfTwo(textureObj.texture);
                        // TODO Next tick?
                        cb && cb(textureObj.texture);
                    }
                    return textureObj.texture;
                }
                else {
                    var textureObj = textureCache.get(prefix + imgValue);
                    if (textureObj) {
                        if (textureObj.callbacks) {
                            // Add to pending callbacks
                            textureObj.callbacks.push(cb);
                        }
                        else {
                            // TODO Next tick?
                            cb && cb(textureObj.texture);
                        }
                    }
                    else {
                        // Maybe base64
                        if (imgValue.match(/.hdr$|^data:application\/octet-stream/)) {
                            textureObj = {
                                callbacks: [cb]
                            };
                            var texture = __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__["a" /* default */].loadTexture(imgValue, {
                                exposure: textureOpts.exposure,
                                fileType: 'hdr'
                            }, function () {
                                texture.dirty();
                                textureObj.callbacks.forEach(function (cb) {
                                    cb && cb(texture);
                                });
                                textureObj.callbacks = null;
                            });
                            textureObj.texture = texture;
                            textureCache.put(prefix + imgValue, textureObj);
                        }
                        else {
                            var texture = new graphicGL.Texture2D({
                                image: new Image()
                            });
                            for (var i = 0; i < keys.length; i++) {
                                texture[keys[i]] = textureOpts[keys[i]];
                            }

                            textureObj = {
                                texture: texture,
                                callbacks: [cb]
                            };
                            var originalImage = texture.image;
                            originalImage.onload = function () {
                                texture.image = originalImage;
                                convertTextureToPowerOfTwo(texture);

                                texture.dirty();
                                textureObj.callbacks.forEach(function (cb) {
                                    cb && cb(texture);
                                });
                                textureObj.callbacks = null;
                            };
                            originalImage.src = imgValue;
                            // Use blank image as place holder.
                            texture.image = blankImage;

                            textureCache.put(prefix + imgValue, textureObj);
                        }
                    }

                    return textureObj.texture;
                }
            };

            /**
             * Create ambientCubemap and ambientSH light. respectively to have specular and diffuse light
             * @return {Object} { specular, diffuse }
             */
            graphicGL.createAmbientCubemap = function (opt, renderer, api, cb) {
                opt = opt || {};
                var textureUrl = opt.texture;
                var exposure = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(opt.exposure, 1.0);

                var ambientCubemap = new __WEBPACK_IMPORTED_MODULE_13_claygl_src_light_AmbientCubemap__["a" /* default */]({
                    intensity: __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(opt.specularIntensity, 1.0)
                });
                var ambientSH = new __WEBPACK_IMPORTED_MODULE_14_claygl_src_light_AmbientSH__["a" /* default */]({
                    intensity: __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(opt.diffuseIntensity, 1.0),
                    coefficients: [0.844, 0.712, 0.691, -0.037, 0.083, 0.167, 0.343, 0.288, 0.299, -0.041, -0.021, -0.009, -0.003, -0.041, -0.064, -0.011, -0.007, -0.004, -0.031, 0.034, 0.081, -0.060, -0.049, -0.060, 0.046, 0.056, 0.050]
                });


                ambientCubemap.cubemap = graphicGL.loadTexture(textureUrl, api, {
                    exposure: exposure
                }, function () {
                    // TODO Performance when multiple view
                    ambientCubemap.cubemap.flipY = false;
                    if (true) {
                        var time = Date.now();
                    }
                    ambientCubemap.prefilter(renderer, 32);
                    if (true) {
                        var dTime = Date.now() - time;
                        console.log('Prefilter environment map: ' + dTime + 'ms');
                    }
                    ambientSH.coefficients = __WEBPACK_IMPORTED_MODULE_15_claygl_src_util_sh__["a" /* default */].projectEnvironmentMap(renderer, ambientCubemap.cubemap, {
                        lod: 1
                    });

                    cb && cb();

                    // TODO Refresh ?
                });

                return {
                    specular: ambientCubemap,
                    diffuse: ambientSH
                };
            };

            /**
             * Create a blank texture for placeholder
             */
            graphicGL.createBlankTexture = __WEBPACK_IMPORTED_MODULE_11_claygl_src_util_texture__["a" /* default */].createBlank;

            /**
             * If value is image
             * @param {*}
             * @return {boolean}
             */
            graphicGL.isImage = isValueImage;

            graphicGL.additiveBlend = function (gl) {
                gl.blendEquation(gl.FUNC_ADD);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            };

            /**
             * @param {string|Array.<number>} colorStr
             * @param {Array.<number>} [rgba]
             * @return {Array.<number>} rgba
             */
            graphicGL.parseColor = function (colorStr, rgba) {
                if (colorStr instanceof Array) {
                    if (!rgba) {
                        rgba = [];
                    }
                    // Color has been parsed.
                    rgba[0] = colorStr[0];
                    rgba[1] = colorStr[1];
                    rgba[2] = colorStr[2];
                    if (colorStr.length > 3) {
                        rgba[3] = colorStr[3];
                    }
                    else {
                        rgba[3] = 1;
                    }
                    return rgba;
                }

                rgba = __WEBPACK_IMPORTED_MODULE_8_echarts_lib_echarts___default.a.color.parse(colorStr || '#000', rgba) || [0, 0, 0, 0];
                rgba[0] /= 255;
                rgba[1] /= 255;
                rgba[2] /= 255;
                return rgba;
            };

            /**
             * Convert alpha beta rotation to direction.
             * @param {number} alpha
             * @param {number} beta
             * @return {Array.<number>}
             */
            graphicGL.directionFromAlphaBeta = function (alpha, beta) {
                var theta = alpha / 180 * Math.PI + Math.PI / 2;
                var phi = -beta / 180 * Math.PI + Math.PI / 2;

                var dir = [];
                var r = Math.sin(theta);
                dir[0] = r * Math.cos(phi);
                dir[1] = -Math.cos(theta);
                dir[2] = r * Math.sin(phi);

                return dir;
            };
            /**
             * Get shadow resolution from shadowQuality configuration
             */
            graphicGL.getShadowResolution = function (shadowQuality) {
                var shadowResolution = 1024;
                switch (shadowQuality) {
                    case 'low':
                        shadowResolution = 512;
                        break;
                    case 'medium':
                        break;
                    case 'high':
                        shadowResolution = 2048;
                        break;
                    case 'ultra':
                        shadowResolution = 4096;
                        break;
                }
                return shadowResolution;
            };

            /**
             * Shading utilities
             */
            graphicGL.COMMON_SHADERS = ['lambert', 'color', 'realistic', 'hatching'];

            /**
             * Create shader including vertex and fragment
             * @param {string} prefix.
             */
            graphicGL.createShader = function (prefix) {
                var vertexShaderStr = __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].source(prefix + '.vertex');
                var fragmentShaderStr = __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */].source(prefix + '.fragment');
                if (!vertexShaderStr) {
                    console.error('Vertex shader of \'%s\' not exits', prefix);
                }
                if (!fragmentShaderStr) {
                    console.error('Fragment shader of \'%s\' not exits', prefix);
                }
                var shader = new __WEBPACK_IMPORTED_MODULE_4_claygl_src_Shader__["a" /* default */](vertexShaderStr, fragmentShaderStr);
                shader.name = prefix;
                return shader;
            };

            graphicGL.createMaterial = function (prefix, defines) {
                if (!(defines instanceof Array)) {
                    defines = [defines];
                }
                var shader = graphicGL.createShader(prefix);
                var material = new __WEBPACK_IMPORTED_MODULE_5_claygl_src_Material__["a" /* default */]({
                    shader: shader
                });
                defines.forEach(function (defineName) {
                    if (typeof defineName === 'string') {
                        material.define(defineName);
                    }
                });
                return material;
            };
            /**
             * Set material from model.
             * @param {clay.Material} material
             * @param {module:echarts/model/Model} model
             * @param {module:echarts/ExtensionAPI} api
             */
            graphicGL.setMaterialFromModel = function (shading, material, model, api) {
                material.autoUpdateTextureStatus = false;

                var materialModel = model.getModel(shading + 'Material');
                var detailTexture = materialModel.get('detailTexture');
                var uvRepeat = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('textureTiling'), 1.0);
                var uvOffset = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('textureOffset'), 0.0);
                if (typeof uvRepeat === 'number') {
                    uvRepeat = [uvRepeat, uvRepeat];
                }
                if (typeof uvOffset === 'number') {
                    uvOffset = [uvOffset, uvOffset];
                }
                var repeatParam = (uvRepeat[0] > 1 || uvRepeat[1] > 1) ? graphicGL.Texture.REPEAT : graphicGL.Texture.CLAMP_TO_EDGE;
                var textureOpt = {
                    anisotropic: 8,
                    wrapS: repeatParam,
                    wrapT: repeatParam
                };
                if (shading === 'realistic') {
                    var roughness = materialModel.get('roughness');
                    var metalness = materialModel.get('metalness');
                    if (metalness != null) {
                        // Try to treat as a texture, TODO More check
                        if (isNaN(metalness)) {
                            material.setTextureImage('metalnessMap', metalness, api, textureOpt);
                            metalness = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('metalnessAdjust'), 0.5);
                        }
                    }
                    else {
                        // Default metalness.
                        metalness = 0;
                    }
                    if (roughness != null) {
                        // Try to treat as a texture, TODO More check
                        if (isNaN(roughness)) {
                            material.setTextureImage('roughnessMap', roughness, api, textureOpt);
                            roughness = __WEBPACK_IMPORTED_MODULE_16__retrieve__["a" /* default */].firstNotNull(materialModel.get('roughnessAdjust'), 0.5);
                        }
                    }
                    else {
                        // Default roughness.
                        roughness = 0.5;
                    }
                    var normalTextureVal = materialModel.get('normalTexture');
                    material.setTextureImage('detailMap', detailTexture, api, textureOpt);
                    material.setTextureImage('normalMap', normalTextureVal, api, textureOpt);
                    material.set({
                        roughness: roughness,
                        metalness: metalness,
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                    // var normalTexture = material.get('normalMap');
                    // if (normalTexture) {
                    // PENDING
                    // normalTexture.format = Texture.SRGB;
                    // }
                }
                else if (shading === 'lambert') {
                    material.setTextureImage('detailMap', detailTexture, api, textureOpt);
                    material.set({
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                }
                else if (shading === 'color') {
                    material.setTextureImage('detailMap', detailTexture, api, textureOpt);
                    material.set({
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                }
                else if (shading === 'hatching') {
                    var tams = materialModel.get('hatchingTextures') || [];
                    if (tams.length < 6) {
                        if (true) {
                            console.error('Invalid hatchingTextures.');
                        }
                    }
                    for (var i = 0; i < 6; i++) {
                        material.setTextureImage('hatch' + (i + 1), tams[i], api, {
                            anisotropic: 8,
                            wrapS: graphicGL.Texture.REPEAT,
                            wrapT: graphicGL.Texture.REPEAT
                        });
                    }
                    material.set({
                        detailUvRepeat: uvRepeat,
                        detailUvOffset: uvOffset
                    });
                }
            };

            graphicGL.updateVertexAnimation = function (
                mappingAttributes, previousMesh, currentMesh, seriesModel
            ) {
                var enableAnimation = seriesModel.get('animation');
                var duration = seriesModel.get('animationDurationUpdate');
                var easing = seriesModel.get('animationEasingUpdate');
                var shadowDepthMaterial = currentMesh.shadowDepthMaterial;

                if (enableAnimation && previousMesh && duration > 0
                    // Only animate when bar count are not changed
                    && previousMesh.geometry.vertexCount === currentMesh.geometry.vertexCount
                ) {
                    currentMesh.material.define('vertex', 'VERTEX_ANIMATION');
                    currentMesh.ignorePreZ = true;
                    if (shadowDepthMaterial) {
                        shadowDepthMaterial.define('vertex', 'VERTEX_ANIMATION');
                    }
                    for (var i = 0; i < mappingAttributes.length; i++) {
                        currentMesh.geometry.attributes[mappingAttributes[i][0]].value =
                            previousMesh.geometry.attributes[mappingAttributes[i][1]].value;
                    }
                    currentMesh.geometry.dirty();
                    currentMesh.__percent = 0;
                    currentMesh.material.set('percent', 0);
                    currentMesh.stopAnimation();
                    currentMesh.animate()
                        .when(duration, {
                            __percent: 1
                        })
                        .during(function () {
                            currentMesh.material.set('percent', currentMesh.__percent);
                            if (shadowDepthMaterial) {
                                shadowDepthMaterial.set('percent', currentMesh.__percent);
                            }
                        })
                        .done(function () {
                            currentMesh.ignorePreZ = false;
                            currentMesh.material.undefine('vertex', 'VERTEX_ANIMATION');
                            if (shadowDepthMaterial) {
                                shadowDepthMaterial.undefine('vertex', 'VERTEX_ANIMATION');
                            }
                        })
                        .start(easing);
                }
                else {
                    currentMesh.material.undefine('vertex', 'VERTEX_ANIMATION');
                    if (shadowDepthMaterial) {
                        shadowDepthMaterial.undefine('vertex', 'VERTEX_ANIMATION');
                    }
                }
            };

/* harmony default export */ __webpack_exports__["a"] = (graphicGL);

            /***/
}),
/* 2 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);


            var retrieve = {

                firstNotNull: function () {
                    for (var i = 0, len = arguments.length; i < len; i++) {
                        if (arguments[i] != null) {
                            return arguments[i];
                        }
                    }
                },

                /**
                 * @param {module:echarts/data/List} data
                 * @param {Object} payload Contains dataIndex (means rawIndex) / dataIndexInside / name
                 *                         each of which can be Array or primary type.
                 * @return {number|Array.<number>} dataIndex If not found, return undefined/null.
                 */
                queryDataIndex: function (data, payload) {
                    if (payload.dataIndexInside != null) {
                        return payload.dataIndexInside;
                    }
                    else if (payload.dataIndex != null) {
                        return __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.isArray(payload.dataIndex)
                            ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.map(payload.dataIndex, function (value) {
                                return data.indexOfRawIndex(value);
                            })
                            : data.indexOfRawIndex(payload.dataIndex);
                    }
                    else if (payload.name != null) {
                        return __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.isArray(payload.name)
                            ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.map(payload.name, function (value) {
                                return data.indexOfName(value);
                            })
                            : data.indexOfName(payload.name);
                    }
                }
            };

/* harmony default export */ __webpack_exports__["a"] = (retrieve);

            /***/
}),
/* 3 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__ = __webpack_require__(12);


            /**
             * @constructor
             * @alias clay.Vector3
             * @param {number} x
             * @param {number} y
             * @param {number} z
             */
            var Vector3 = function (x, y, z) {

                x = x || 0;
                y = y || 0;
                z = z || 0;

                /**
                 * Storage of Vector3, read and write of x, y, z will change the values in array
                 * All methods also operate on the array instead of x, y, z components
                 * @name array
                 * @type {Float32Array}
                 * @memberOf clay.Vector3#
                 */
                this.array = __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].fromValues(x, y, z);

                /**
                 * Dirty flag is used by the Node to determine
                 * if the matrix is updated to latest
                 * @name _dirty
                 * @type {boolean}
                 * @memberOf clay.Vector3#
                 */
                this._dirty = true;
            };

            Vector3.prototype = {

                constructor: Vector3,

                /**
                 * Add b to self
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                add: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].add(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set x, y and z components
                 * @param  {number}  x
                 * @param  {number}  y
                 * @param  {number}  z
                 * @return {clay.Vector3}
                 */
                set: function (x, y, z) {
                    this.array[0] = x;
                    this.array[1] = y;
                    this.array[2] = z;
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set x, y and z components from array
                 * @param  {Float32Array|number[]} arr
                 * @return {clay.Vector3}
                 */
                setArray: function (arr) {
                    this.array[0] = arr[0];
                    this.array[1] = arr[1];
                    this.array[2] = arr[2];

                    this._dirty = true;
                    return this;
                },

                /**
                 * Clone a new Vector3
                 * @return {clay.Vector3}
                 */
                clone: function () {
                    return new Vector3(this.x, this.y, this.z);
                },

                /**
                 * Copy from b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                copy: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].copy(this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Cross product of self and b, written to a Vector3 out
                 * @param  {clay.Vector3} a
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                cross: function (a, b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].cross(this.array, a.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for distance
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                dist: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].dist(this.array, b.array);
                },

                /**
                 * Distance between self and b
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                distance: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].distance(this.array, b.array);
                },

                /**
                 * Alias for divide
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                div: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].div(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Divide self by b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                divide: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].divide(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Dot product of self and b
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                dot: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].dot(this.array, b.array);
                },

                /**
                 * Alias of length
                 * @return {number}
                 */
                len: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].len(this.array);
                },

                /**
                 * Calculate the length
                 * @return {number}
                 */
                length: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].length(this.array);
                },
                /**
                 * Linear interpolation between a and b
                 * @param  {clay.Vector3} a
                 * @param  {clay.Vector3} b
                 * @param  {number}  t
                 * @return {clay.Vector3}
                 */
                lerp: function (a, b, t) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].lerp(this.array, a.array, b.array, t);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Minimum of self and b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                min: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].min(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Maximum of self and b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                max: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].max(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for multiply
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                mul: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].mul(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Mutiply self and b
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                multiply: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].multiply(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Negate self
                 * @return {clay.Vector3}
                 */
                negate: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].negate(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Normalize self
                 * @return {clay.Vector3}
                 */
                normalize: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].normalize(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Generate random x, y, z components with a given scale
                 * @param  {number} scale
                 * @return {clay.Vector3}
                 */
                random: function (scale) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].random(this.array, scale);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale self
                 * @param  {number}  scale
                 * @return {clay.Vector3}
                 */
                scale: function (s) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scale(this.array, this.array, s);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale b and add to self
                 * @param  {clay.Vector3} b
                 * @param  {number}  scale
                 * @return {clay.Vector3}
                 */
                scaleAndAdd: function (b, s) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scaleAndAdd(this.array, this.array, b.array, s);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for squaredDistance
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                sqrDist: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrDist(this.array, b.array);
                },

                /**
                 * Squared distance between self and b
                 * @param  {clay.Vector3} b
                 * @return {number}
                 */
                squaredDistance: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].squaredDistance(this.array, b.array);
                },

                /**
                 * Alias for squaredLength
                 * @return {number}
                 */
                sqrLen: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrLen(this.array);
                },

                /**
                 * Squared length of self
                 * @return {number}
                 */
                squaredLength: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].squaredLength(this.array);
                },

                /**
                 * Alias for subtract
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                sub: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sub(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Subtract b from self
                 * @param  {clay.Vector3} b
                 * @return {clay.Vector3}
                 */
                subtract: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].subtract(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix3 m
                 * @param  {clay.Matrix3} m
                 * @return {clay.Vector3}
                 */
                transformMat3: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat3(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix4 m
                 * @param  {clay.Matrix4} m
                 * @return {clay.Vector3}
                 */
                transformMat4: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat4(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },
                /**
                 * Transform self with a Quaternion q
                 * @param  {clay.Quaternion} q
                 * @return {clay.Vector3}
                 */
                transformQuat: function (q) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformQuat(this.array, this.array, q.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Trasnform self into projection space with m
                 * @param  {clay.Matrix4} m
                 * @return {clay.Vector3}
                 */
                applyProjection: function (m) {
                    var v = this.array;
                    m = m.array;

                    // Perspective projection
                    if (m[15] === 0) {
                        var w = -1 / v[2];
                        v[0] = m[0] * v[0] * w;
                        v[1] = m[5] * v[1] * w;
                        v[2] = (m[10] * v[2] + m[14]) * w;
                    }
                    else {
                        v[0] = m[0] * v[0] + m[12];
                        v[1] = m[5] * v[1] + m[13];
                        v[2] = m[10] * v[2] + m[14];
                    }
                    this._dirty = true;

                    return this;
                },

                eulerFromQuat: function (q, order) {
                    Vector3.eulerFromQuat(this, q, order);
                },

                eulerFromMat3: function (m, order) {
                    Vector3.eulerFromMat3(this, m, order);
                },

                toString: function () {
                    return '[' + Array.prototype.join.call(this.array, ',') + ']';
                },

                toArray: function () {
                    return Array.prototype.slice.call(this.array);
                }
            };

            var defineProperty = Object.defineProperty;
            // Getter and Setter
            if (defineProperty) {

                var proto = Vector3.prototype;
                /**
                 * @name x
                 * @type {number}
                 * @memberOf clay.Vector3
                 * @instance
                 */
                defineProperty(proto, 'x', {
                    get: function () {
                        return this.array[0];
                    },
                    set: function (value) {
                        this.array[0] = value;
                        this._dirty = true;
                    }
                });

                /**
                 * @name y
                 * @type {number}
                 * @memberOf clay.Vector3
                 * @instance
                 */
                defineProperty(proto, 'y', {
                    get: function () {
                        return this.array[1];
                    },
                    set: function (value) {
                        this.array[1] = value;
                        this._dirty = true;
                    }
                });

                /**
                 * @name z
                 * @type {number}
                 * @memberOf clay.Vector3
                 * @instance
                 */
                defineProperty(proto, 'z', {
                    get: function () {
                        return this.array[2];
                    },
                    set: function (value) {
                        this.array[2] = value;
                        this._dirty = true;
                    }
                });
            }


            // Supply methods that are not in place

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.add = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].add(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {number}  x
             * @param  {number}  y
             * @param  {number}  z
             * @return {clay.Vector3}
             */
            Vector3.set = function (out, x, y, z) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].set(out.array, x, y, z);
                out._dirty = true;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.copy = function (out, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].copy(out.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.cross = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].cross(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.dist = function (a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].distance(a.array, b.array);
            };

            /**
             * @function
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.distance = Vector3.dist;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.div = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].divide(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @function
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.divide = Vector3.div;

            /**
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.dot = function (a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].dot(a.array, b.array);
            };

            /**
             * @param  {clay.Vector3} a
             * @return {number}
             */
            Vector3.len = function (b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].length(b.array);
            };

            // Vector3.length = Vector3.len;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @param  {number}  t
             * @return {clay.Vector3}
             */
            Vector3.lerp = function (out, a, b, t) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].lerp(out.array, a.array, b.array, t);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.min = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].min(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.max = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].max(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.mul = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].multiply(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.multiply = Vector3.mul;
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @return {clay.Vector3}
             */
            Vector3.negate = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].negate(out.array, a.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @return {clay.Vector3}
             */
            Vector3.normalize = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].normalize(out.array, a.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {number}  scale
             * @return {clay.Vector3}
             */
            Vector3.random = function (out, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].random(out.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {number}  scale
             * @return {clay.Vector3}
             */
            Vector3.scale = function (out, a, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scale(out.array, a.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @param  {number}  scale
             * @return {clay.Vector3}
             */
            Vector3.scaleAndAdd = function (out, a, b, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].scaleAndAdd(out.array, a.array, b.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.sqrDist = function (a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrDist(a.array, b.array);
            };
            /**
             * @function
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {number}
             */
            Vector3.squaredDistance = Vector3.sqrDist;
            /**
             * @param  {clay.Vector3} a
             * @return {number}
             */
            Vector3.sqrLen = function (a) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].sqrLen(a.array);
            };
            /**
             * @function
             * @param  {clay.Vector3} a
             * @return {number}
             */
            Vector3.squaredLength = Vector3.sqrLen;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.sub = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].subtract(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Vector3} b
             * @return {clay.Vector3}
             */
            Vector3.subtract = Vector3.sub;

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {Matrix3} m
             * @return {clay.Vector3}
             */
            Vector3.transformMat3 = function (out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat3(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Matrix4} m
             * @return {clay.Vector3}
             */
            Vector3.transformMat4 = function (out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformMat4(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector3} a
             * @param  {clay.Quaternion} q
             * @return {clay.Vector3}
             */
            Vector3.transformQuat = function (out, a, q) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec3__["a" /* default */].transformQuat(out.array, a.array, q.array);
                out._dirty = true;
                return out;
            };

            function clamp(val, min, max) {
                return val < min ? min : (val > max ? max : val);
            }
            var atan2 = Math.atan2;
            var asin = Math.asin;
            var abs = Math.abs;
            /**
             * Convert quaternion to euler angle
             * Quaternion must be normalized
             * From three.js
             */
            Vector3.eulerFromQuat = function (out, q, order) {
                out._dirty = true;
                q = q.array;

                var target = out.array;
                var x = q[0], y = q[1], z = q[2], w = q[3];
                var x2 = x * x;
                var y2 = y * y;
                var z2 = z * z;
                var w2 = w * w;

                var order = (order || 'XYZ').toUpperCase();

                switch (order) {
                    case 'XYZ':
                        target[0] = atan2(2 * (x * w - y * z), (w2 - x2 - y2 + z2));
                        target[1] = asin(clamp(2 * (x * z + y * w), - 1, 1));
                        target[2] = atan2(2 * (z * w - x * y), (w2 + x2 - y2 - z2));
                        break;
                    case 'YXZ':
                        target[0] = asin(clamp(2 * (x * w - y * z), - 1, 1));
                        target[1] = atan2(2 * (x * z + y * w), (w2 - x2 - y2 + z2));
                        target[2] = atan2(2 * (x * y + z * w), (w2 - x2 + y2 - z2));
                        break;
                    case 'ZXY':
                        target[0] = asin(clamp(2 * (x * w + y * z), - 1, 1));
                        target[1] = atan2(2 * (y * w - z * x), (w2 - x2 - y2 + z2));
                        target[2] = atan2(2 * (z * w - x * y), (w2 - x2 + y2 - z2));
                        break;
                    case 'ZYX':
                        target[0] = atan2(2 * (x * w + z * y), (w2 - x2 - y2 + z2));
                        target[1] = asin(clamp(2 * (y * w - x * z), - 1, 1));
                        target[2] = atan2(2 * (x * y + z * w), (w2 + x2 - y2 - z2));
                        break;
                    case 'YZX':
                        target[0] = atan2(2 * (x * w - z * y), (w2 - x2 + y2 - z2));
                        target[1] = atan2(2 * (y * w - x * z), (w2 + x2 - y2 - z2));
                        target[2] = asin(clamp(2 * (x * y + z * w), - 1, 1));
                        break;
                    case 'XZY':
                        target[0] = atan2(2 * (x * w + y * z), (w2 - x2 + y2 - z2));
                        target[1] = atan2(2 * (x * z + y * w), (w2 + x2 - y2 - z2));
                        target[2] = asin(clamp(2 * (z * w - x * y), - 1, 1));
                        break;
                    default:
                        console.warn('Unkown order: ' + order);
                }
                return out;
            };

            /**
             * Convert rotation matrix to euler angle
             * from three.js
             */
            Vector3.eulerFromMat3 = function (out, m, order) {
                // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
                var te = m.array;
                var m11 = te[0], m12 = te[3], m13 = te[6];
                var m21 = te[1], m22 = te[4], m23 = te[7];
                var m31 = te[2], m32 = te[5], m33 = te[8];
                var target = out.array;

                var order = (order || 'XYZ').toUpperCase();

                switch (order) {
                    case 'XYZ':
                        target[1] = asin(clamp(m13, -1, 1));
                        if (abs(m13) < 0.99999) {
                            target[0] = atan2(-m23, m33);
                            target[2] = atan2(-m12, m11);
                        }
                        else {
                            target[0] = atan2(m32, m22);
                            target[2] = 0;
                        }
                        break;
                    case 'YXZ':
                        target[0] = asin(-clamp(m23, -1, 1));
                        if (abs(m23) < 0.99999) {
                            target[1] = atan2(m13, m33);
                            target[2] = atan2(m21, m22);
                        }
                        else {
                            target[1] = atan2(-m31, m11);
                            target[2] = 0;
                        }
                        break;
                    case 'ZXY':
                        target[0] = asin(clamp(m32, -1, 1));
                        if (abs(m32) < 0.99999) {
                            target[1] = atan2(-m31, m33);
                            target[2] = atan2(-m12, m22);
                        }
                        else {
                            target[1] = 0;
                            target[2] = atan2(m21, m11);
                        }
                        break;
                    case 'ZYX':
                        target[1] = asin(-clamp(m31, -1, 1));
                        if (abs(m31) < 0.99999) {
                            target[0] = atan2(m32, m33);
                            target[2] = atan2(m21, m11);
                        }
                        else {
                            target[0] = 0;
                            target[2] = atan2(-m12, m22);
                        }
                        break;
                    case 'YZX':
                        target[2] = asin(clamp(m21, -1, 1));
                        if (abs(m21) < 0.99999) {
                            target[0] = atan2(-m23, m22);
                            target[1] = atan2(-m31, m11);
                        }
                        else {
                            target[0] = 0;
                            target[1] = atan2(m13, m33);
                        }
                        break;
                    case 'XZY':
                        target[2] = asin(-clamp(m12, -1, 1));
                        if (abs(m12) < 0.99999) {
                            target[0] = atan2(m32, m22);
                            target[1] = atan2(m13, m11);
                        }
                        else {
                            target[0] = atan2(-m23, m33);
                            target[1] = 0;
                        }
                        break;
                    default:
                        console.warn('Unkown order: ' + order);
                }
                out._dirty = true;

                return out;
            };

            Object.defineProperties(Vector3, {
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                POSITIVE_X: {
                    get: function () {
                        return new Vector3(1, 0, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                NEGATIVE_X: {
                    get: function () {
                        return new Vector3(-1, 0, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                POSITIVE_Y: {
                    get: function () {
                        return new Vector3(0, 1, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                NEGATIVE_Y: {
                    get: function () {
                        return new Vector3(0, -1, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                POSITIVE_Z: {
                    get: function () {
                        return new Vector3(0, 0, 1);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 */
                NEGATIVE_Z: {
                    get: function () {
                        return new Vector3(0, 0, -1);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                UP: {
                    get: function () {
                        return new Vector3(0, 1, 0);
                    }
                },
                /**
                 * @type {clay.Vector3}
                 * @readOnly
                 * @memberOf clay.Vector3
                 */
                ZERO: {
                    get: function () {
                        return new Vector3();
                    }
                }
            });

/* harmony default export */ __webpack_exports__["a"] = (Vector3);


            /***/
}),
/* 4 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_glenum__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Cache__ = __webpack_require__(57);
            /**
             * Base class for all textures like compressed texture, texture2d, texturecube
             * TODO mapping
             */




            /**
             * @constructor
             * @alias clay.Texture
             * @extends clay.core.Base
             */
            var Texture = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend( /** @lends clay.Texture# */ {
                /**
                 * Texture width, readonly when the texture source is image
                 * @type {number}
                 */
                width: 512,
                /**
                 * Texture height, readonly when the texture source is image
                 * @type {number}
                 */
                height: 512,
                /**
                 * Texel data type.
                 * Possible values:
                 *  + {@link clay.Texture.UNSIGNED_BYTE}
                 *  + {@link clay.Texture.HALF_FLOAT}
                 *  + {@link clay.Texture.FLOAT}
                 *  + {@link clay.Texture.UNSIGNED_INT_24_8_WEBGL}
                 *  + {@link clay.Texture.UNSIGNED_INT}
                 * @type {number}
                 */
                type: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_BYTE,
                /**
                 * Format of texel data
                 * Possible values:
                 *  + {@link clay.Texture.RGBA}
                 *  + {@link clay.Texture.DEPTH_COMPONENT}
                 *  + {@link clay.Texture.DEPTH_STENCIL}
                 * @type {number}
                 */
                format: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].RGBA,
                /**
                 * Texture wrap. Default to be REPEAT.
                 * Possible values:
                 *  + {@link clay.Texture.CLAMP_TO_EDGE}
                 *  + {@link clay.Texture.REPEAT}
                 *  + {@link clay.Texture.MIRRORED_REPEAT}
                 * @type {number}
                 */
                wrapS: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].REPEAT,
                /**
                 * Texture wrap. Default to be REPEAT.
                 * Possible values:
                 *  + {@link clay.Texture.CLAMP_TO_EDGE}
                 *  + {@link clay.Texture.REPEAT}
                 *  + {@link clay.Texture.MIRRORED_REPEAT}
                 * @type {number}
                 */
                wrapT: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].REPEAT,
                /**
                 * Possible values:
                 *  + {@link clay.Texture.NEAREST}
                 *  + {@link clay.Texture.LINEAR}
                 *  + {@link clay.Texture.NEAREST_MIPMAP_NEAREST}
                 *  + {@link clay.Texture.LINEAR_MIPMAP_NEAREST}
                 *  + {@link clay.Texture.NEAREST_MIPMAP_LINEAR}
                 *  + {@link clay.Texture.LINEAR_MIPMAP_LINEAR}
                 * @type {number}
                 */
                minFilter: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_LINEAR,
                /**
                 * Possible values:
                 *  + {@link clay.Texture.NEAREST}
                 *  + {@link clay.Texture.LINEAR}
                 * @type {number}
                 */
                magFilter: __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR,
                /**
                 * If enable mimap.
                 * @type {boolean}
                 */
                useMipmap: true,

                /**
                 * Anisotropic filtering, enabled if value is larger than 1
                 * @see https://developer.mozilla.org/en-US/docs/Web/API/EXT_texture_filter_anisotropic
                 * @type {number}
                 */
                anisotropic: 1,
                // pixelStorei parameters, not available when texture is used as render target
                // http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml
                /**
                 * If flip in y axis for given image source
                 * @type {boolean}
                 * @default true
                 */
                flipY: true,

                /**
                 * A flag to indicate if texture source is sRGB
                 */
                sRGB: true,
                /**
                 * @type {number}
                 * @default 4
                 */
                unpackAlignment: 4,
                /**
                 * @type {boolean}
                 * @default false
                 */
                premultiplyAlpha: false,

                /**
                 * Dynamic option for texture like video
                 * @type {boolean}
                 */
                dynamic: false,

                NPOT: false,

                // PENDING
                // Init it here to avoid deoptimization when it's assigned in application dynamically
                __used: 0

            }, function () {
                this._cache = new __WEBPACK_IMPORTED_MODULE_2__core_Cache__["a" /* default */]();
            },
                /** @lends clay.Texture.prototype */
                {

                    getWebGLTexture: function (renderer) {
                        var _gl = renderer.gl;
                        var cache = this._cache;
                        cache.use(renderer.__uid__);

                        if (cache.miss('webgl_texture')) {
                            // In a new gl context, create new texture and set dirty true
                            cache.put('webgl_texture', _gl.createTexture());
                        }
                        if (this.dynamic) {
                            this.update(renderer);
                        }
                        else if (cache.isDirty()) {
                            this.update(renderer);
                            cache.fresh();
                        }

                        return cache.get('webgl_texture');
                    },

                    bind: function () { },
                    unbind: function () { },

                    /**
                     * Mark texture is dirty and update in the next frame
                     */
                    dirty: function () {
                        if (this._cache) {
                            this._cache.dirtyAll();
                        }
                    },

                    update: function (renderer) { },

                    // Update the common parameters of texture
                    updateCommon: function (renderer) {
                        var _gl = renderer.gl;
                        _gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
                        _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                        _gl.pixelStorei(_gl.UNPACK_ALIGNMENT, this.unpackAlignment);

                        // Use of none-power of two texture
                        // http://www.khronos.org/webgl/wiki/WebGL_and_OpenGL_Differences
                        if (this.format === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].DEPTH_COMPONENT) {
                            this.useMipmap = false;
                        }

                        var sRGBExt = renderer.getGLExtension('EXT_sRGB');
                        // Fallback
                        if (this.format === Texture.SRGB && !sRGBExt) {
                            this.format = Texture.RGB;
                        }
                        if (this.format === Texture.SRGB_ALPHA && !sRGBExt) {
                            this.format = Texture.RGBA;
                        }

                        this.NPOT = !this.isPowerOfTwo();
                    },

                    getAvailableWrapS: function () {
                        if (this.NPOT) {
                            return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CLAMP_TO_EDGE;
                        }
                        return this.wrapS;
                    },
                    getAvailableWrapT: function () {
                        if (this.NPOT) {
                            return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CLAMP_TO_EDGE;
                        }
                        return this.wrapT;
                    },
                    getAvailableMinFilter: function () {
                        var minFilter = this.minFilter;
                        if (this.NPOT || !this.useMipmap) {
                            if (minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_NEAREST ||
                                minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_LINEAR
                            ) {
                                return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST;
                            }
                            else if (minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_LINEAR ||
                                minFilter === __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_NEAREST
                            ) {
                                return __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR;
                            }
                            else {
                                return minFilter;
                            }
                        }
                        else {
                            return minFilter;
                        }
                    },
                    getAvailableMagFilter: function () {
                        return this.magFilter;
                    },

                    nextHighestPowerOfTwo: function (x) {
                        --x;
                        for (var i = 1; i < 32; i <<= 1) {
                            x = x | x >> i;
                        }
                        return x + 1;
                    },
                    /**
                     * @param  {clay.Renderer} renderer
                     */
                    dispose: function (renderer) {

                        var cache = this._cache;

                        cache.use(renderer.__uid__);

                        var webglTexture = cache.get('webgl_texture');
                        if (webglTexture) {
                            renderer.gl.deleteTexture(webglTexture);
                        }
                        cache.deleteContext(renderer.__uid__);

                    },
                    /**
                     * Test if image of texture is valid and loaded.
                     * @return {boolean}
                     */
                    isRenderable: function () { },

                    /**
                     * Test if texture size is power of two
                     * @return {boolean}
                     */
                    isPowerOfTwo: function () { }
                });

            Object.defineProperty(Texture.prototype, 'width', {
                get: function () {
                    return this._width;
                },
                set: function (value) {
                    this._width = value;
                }
            });
            Object.defineProperty(Texture.prototype, 'height', {
                get: function () {
                    return this._height;
                },
                set: function (value) {
                    this._height = value;
                }
            });

            /* DataType */

            /**
             * @type {number}
             */
            Texture.BYTE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].BYTE;
            /**
             * @type {number}
             */
            Texture.UNSIGNED_BYTE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_BYTE;
            /**
             * @type {number}
             */
            Texture.SHORT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].SHORT;
            /**
             * @type {number}
             */
            Texture.UNSIGNED_SHORT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_SHORT;
            /**
             * @type {number}
             */
            Texture.INT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].INT;
            /**
             * @type {number}
             */
            Texture.UNSIGNED_INT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].UNSIGNED_INT;
            /**
             * @type {number}
             */
            Texture.FLOAT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FLOAT;
            /**
             * @type {number}
             */
            Texture.HALF_FLOAT = 0x8D61;

            /**
             * UNSIGNED_INT_24_8_WEBGL for WEBGL_depth_texture extension
             * @type {number}
             */
            Texture.UNSIGNED_INT_24_8_WEBGL = 34042;

            /* PixelFormat */
            /**
             * @type {number}
             */
            Texture.DEPTH_COMPONENT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].DEPTH_COMPONENT;
            /**
             * @type {number}
             */
            Texture.DEPTH_STENCIL = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].DEPTH_STENCIL;
            /**
             * @type {number}
             */
            Texture.ALPHA = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].ALPHA;
            /**
             * @type {number}
             */
            Texture.RGB = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].RGB;
            /**
             * @type {number}
             */
            Texture.RGBA = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].RGBA;
            /**
             * @type {number}
             */
            Texture.LUMINANCE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LUMINANCE;
            /**
             * @type {number}
             */
            Texture.LUMINANCE_ALPHA = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LUMINANCE_ALPHA;

            /**
             * @see https://www.khronos.org/registry/webgl/extensions/EXT_sRGB/
             * @type {number}
             */
            Texture.SRGB = 0x8C40;
            /**
             * @see https://www.khronos.org/registry/webgl/extensions/EXT_sRGB/
             * @type {number}
             */
            Texture.SRGB_ALPHA = 0x8C42;

            /* Compressed Texture */
            Texture.COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
            Texture.COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
            Texture.COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
            Texture.COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;

            /* TextureMagFilter */
            /**
             * @type {number}
             */
            Texture.NEAREST = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST;
            /**
             * @type {number}
             */
            Texture.LINEAR = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR;

            /* TextureMinFilter */
            /**
             * @type {number}
             */
            Texture.NEAREST_MIPMAP_NEAREST = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_NEAREST;
            /**
             * @type {number}
             */
            Texture.LINEAR_MIPMAP_NEAREST = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_NEAREST;
            /**
             * @type {number}
             */
            Texture.NEAREST_MIPMAP_LINEAR = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].NEAREST_MIPMAP_LINEAR;
            /**
             * @type {number}
             */
            Texture.LINEAR_MIPMAP_LINEAR = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINEAR_MIPMAP_LINEAR;

            /* TextureWrapMode */
            /**
             * @type {number}
             */
            Texture.REPEAT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].REPEAT;
            /**
             * @type {number}
             */
            Texture.CLAMP_TO_EDGE = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CLAMP_TO_EDGE;
            /**
             * @type {number}
             */
            Texture.MIRRORED_REPEAT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].MIRRORED_REPEAT;


/* harmony default export */ __webpack_exports__["a"] = (Texture);


            /***/
}),
/* 5 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_glenum__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_vendor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_util__ = __webpack_require__(73);




            var isPowerOfTwo = __WEBPACK_IMPORTED_MODULE_3__math_util__["a" /* default */].isPowerOfTwo;

            function nearestPowerOfTwo(val) {
                return Math.pow(2, Math.round(Math.log(val) / Math.LN2));
            }
            function convertTextureToPowerOfTwo(texture, canvas) {
                // var canvas = document.createElement('canvas');
                var width = nearestPowerOfTwo(texture.width);
                var height = nearestPowerOfTwo(texture.height);
                canvas = canvas || document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(texture.image, 0, 0, width, height);

                return canvas;
            }

            /**
             * @constructor clay.Texture2D
             * @extends clay.Texture
             *
             * @example
             *     ...
             *     var mat = new clay.Material({
             *         shader: clay.shader.library.get('clay.phong', 'diffuseMap')
             *     });
             *     var diffuseMap = new clay.Texture2D();
             *     diffuseMap.load('assets/textures/diffuse.jpg');
             *     mat.set('diffuseMap', diffuseMap);
             *     ...
             *     diffuseMap.success(function () {
             *         // Wait for the diffuse texture loaded
             *         animation.on('frame', function (frameTime) {
             *             renderer.render(scene, camera);
             *         });
             *     });
             */
            var Texture2D = __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].extend(function () {
                return /** @lends clay.Texture2D# */ {
                    /**
                     * @type {?HTMLImageElement|HTMLCanvasElemnet}
                     */
                    // TODO mark dirty when assigned.
                    image: null,
                    /**
                     * Pixels data. Will be ignored if image is set.
                     * @type {?Uint8Array|Float32Array}
                     */
                    pixels: null,
                    /**
                     * @type {Array.<Object>}
                     * @example
                     *     [{
                     *         image: mipmap0,
                     *         pixels: null
                     *     }, {
                     *         image: mipmap1,
                     *         pixels: null
                     *     }, ....]
                     */
                    mipmaps: [],

                    /**
                     * If convert texture to power-of-two
                     * @type {boolean}
                     */
                    convertToPOT: false
                };
            }, {

                textureType: 'texture2D',

                update: function (renderer) {

                    var _gl = renderer.gl;
                    _gl.bindTexture(_gl.TEXTURE_2D, this._cache.get('webgl_texture'));

                    this.updateCommon(renderer);

                    var glFormat = this.format;
                    var glType = this.type;

                    // Convert to pot is only available when using image/canvas/video element.
                    var convertToPOT = !!(this.convertToPOT
                        && !this.mipmaps.length && this.image
                        && (this.wrapS === __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].REPEAT || this.wrapT === __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].REPEAT)
                        && this.NPOT
                    );

                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, convertToPOT ? this.wrapS : this.getAvailableWrapS());
                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, convertToPOT ? this.wrapT : this.getAvailableWrapT());

                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, convertToPOT ? this.magFilter : this.getAvailableMagFilter());
                    _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, convertToPOT ? this.minFilter : this.getAvailableMinFilter());

                    var anisotropicExt = renderer.getGLExtension('EXT_texture_filter_anisotropic');
                    if (anisotropicExt && this.anisotropic > 1) {
                        _gl.texParameterf(_gl.TEXTURE_2D, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic);
                    }

                    // Fallback to float type if browser don't have half float extension
                    if (glType === 36193) {
                        var halfFloatExt = renderer.getGLExtension('OES_texture_half_float');
                        if (!halfFloatExt) {
                            glType = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FLOAT;
                        }
                    }

                    if (this.mipmaps.length) {
                        var width = this.width;
                        var height = this.height;
                        for (var i = 0; i < this.mipmaps.length; i++) {
                            var mipmap = this.mipmaps[i];
                            this._updateTextureData(_gl, mipmap, i, width, height, glFormat, glType, false);
                            width /= 2;
                            height /= 2;
                        }
                    }
                    else {
                        this._updateTextureData(_gl, this, 0, this.width, this.height, glFormat, glType, convertToPOT);

                        if (this.useMipmap && (!this.NPOT || convertToPOT)) {
                            _gl.generateMipmap(_gl.TEXTURE_2D);
                        }
                    }

                    _gl.bindTexture(_gl.TEXTURE_2D, null);
                },

                _updateTextureData: function (_gl, data, level, width, height, glFormat, glType, convertToPOT) {
                    if (data.image) {
                        var imgData = data.image;
                        if (convertToPOT) {
                            this._potCanvas = convertTextureToPowerOfTwo(this, this._potCanvas);
                            imgData = this._potCanvas;
                        }
                        _gl.texImage2D(_gl.TEXTURE_2D, level, glFormat, glFormat, glType, imgData);
                    }
                    else {
                        // Can be used as a blank texture when writing render to texture(RTT)
                        if (
                            glFormat <= __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].COMPRESSED_RGBA_S3TC_DXT5_EXT
                            && glFormat >= __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].COMPRESSED_RGB_S3TC_DXT1_EXT
                        ) {
                            _gl.compressedTexImage2D(_gl.TEXTURE_2D, level, glFormat, width, height, 0, data.pixels);
                        }
                        else {
                            // Is a render target if pixels is null
                            _gl.texImage2D(_gl.TEXTURE_2D, level, glFormat, width, height, 0, glFormat, glType, data.pixels);
                        }
                    }
                },

                /**
                 * @param  {clay.Renderer} renderer
                 * @memberOf clay.Texture2D.prototype
                 */
                generateMipmap: function (renderer) {
                    var _gl = renderer.gl;
                    if (this.useMipmap && !this.NPOT) {
                        _gl.bindTexture(_gl.TEXTURE_2D, this._cache.get('webgl_texture'));
                        _gl.generateMipmap(_gl.TEXTURE_2D);
                    }
                },

                isPowerOfTwo: function () {
                    return isPowerOfTwo(this.width) && isPowerOfTwo(this.height);
                },

                isRenderable: function () {
                    if (this.image) {
                        return this.image.nodeName === 'CANVAS'
                            || this.image.nodeName === 'VIDEO'
                            || this.image.complete;
                    }
                    else {
                        return !!(this.width && this.height);
                    }
                },

                bind: function (renderer) {
                    renderer.gl.bindTexture(renderer.gl.TEXTURE_2D, this.getWebGLTexture(renderer));
                },

                unbind: function (renderer) {
                    renderer.gl.bindTexture(renderer.gl.TEXTURE_2D, null);
                },

                load: function (src, crossOrigin) {
                    var image = __WEBPACK_IMPORTED_MODULE_2__core_vendor__["a" /* default */].createImage();
                    if (crossOrigin) {
                        image.crossOrigin = crossOrigin;
                    }
                    var self = this;
                    image.onload = function () {
                        self.dirty();
                        self.trigger('success', self);
                        image.onload = null;
                    };
                    image.onerror = function () {
                        self.trigger('error', self);
                        image.onerror = null;
                    };

                    image.src = src;
                    this.image = image;

                    return this;
                }
            });

            Object.defineProperty(Texture2D.prototype, 'width', {
                get: function () {
                    if (this.image) {
                        return this.image.width;
                    }
                    return this._width;
                },
                set: function (value) {
                    if (this.image) {
                        console.warn('Texture from image can\'t set width');
                    }
                    else {
                        if (this._width !== value) {
                            this.dirty();
                        }
                        this._width = value;
                    }
                }
            });
            Object.defineProperty(Texture2D.prototype, 'height', {
                get: function () {
                    if (this.image) {
                        return this.image.height;
                    }
                    return this._height;
                },
                set: function (value) {
                    if (this.image) {
                        console.warn('Texture from image can\'t set height');
                    }
                    else {
                        if (this._height !== value) {
                            this.dirty();
                        }
                        this._height = value;
                    }
                }
            });

/* harmony default export */ __webpack_exports__["a"] = (Texture2D);


            /***/
}),
/* 6 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix__ = __webpack_require__(161);
// DEPRECATED


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__glmatrix__["a" /* default */]);


            /***/
}),
/* 7 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_extend__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_notifier__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(23);




            /**
             * Base class of all objects
             * @constructor
             * @alias clay.core.Base
             * @mixes clay.core.mixin.notifier
             */
            var Base = function () {
                /**
                 * @type {number}
                 */
                this.__uid__ = __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].genGUID();
            };

            Base.__initializers__ = [
                function (opts) {
                    __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].extend(this, opts);
                }
            ];

            __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].extend(Base, __WEBPACK_IMPORTED_MODULE_0__mixin_extend__["a" /* default */]);
            __WEBPACK_IMPORTED_MODULE_2__util__["a" /* default */].extend(Base.prototype, __WEBPACK_IMPORTED_MODULE_1__mixin_notifier__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Base);


            /***/
}),
/* 8 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_vendor__ = __webpack_require__(14);
            /**
             * Mainly do the parse and compile of shader string
             * Support shader code chunk import and export
             * Support shader semantics
             * http://www.nvidia.com/object/using_sas.html
             * https://github.com/KhronosGroup/collada2json/issues/45
             */



            var uniformRegex = /uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g;
            var attributeRegex = /attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g;
            // Only parse number define.
            var defineRegex = /#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g;

            var uniformTypeMap = {
                'bool': '1i',
                'int': '1i',
                'sampler2D': 't',
                'samplerCube': 't',
                'float': '1f',
                'vec2': '2f',
                'vec3': '3f',
                'vec4': '4f',
                'ivec2': '2i',
                'ivec3': '3i',
                'ivec4': '4i',
                'mat2': 'm2',
                'mat3': 'm3',
                'mat4': 'm4'
            };

            function createZeroArray(len) {
                var arr = [];
                for (var i = 0; i < len; i++) {
                    arr[i] = 0;
                }
                return arr;
            }

            var uniformValueConstructor = {
                'bool': function () { return true; },
                'int': function () { return 0; },
                'float': function () { return 0; },
                'sampler2D': function () { return null; },
                'samplerCube': function () { return null; },

                'vec2': function () { return createZeroArray(2); },
                'vec3': function () { return createZeroArray(3); },
                'vec4': function () { return createZeroArray(4); },

                'ivec2': function () { return createZeroArray(2); },
                'ivec3': function () { return createZeroArray(3); },
                'ivec4': function () { return createZeroArray(4); },

                'mat2': function () { return createZeroArray(4); },
                'mat3': function () { return createZeroArray(9); },
                'mat4': function () { return createZeroArray(16); },

                'array': function () { return []; }
            };

            var attributeSemantics = [
                'POSITION',
                'NORMAL',
                'BINORMAL',
                'TANGENT',
                'TEXCOORD',
                'TEXCOORD_0',
                'TEXCOORD_1',
                'COLOR',
                // Skinning
                // https://github.com/KhronosGroup/glTF/blob/master/specification/README.md#semantics
                'JOINT',
                'WEIGHT'
            ];
            var uniformSemantics = [
                'SKIN_MATRIX',
                // Information about viewport
                'VIEWPORT_SIZE',
                'VIEWPORT',
                'DEVICEPIXELRATIO',
                // Window size for window relative coordinate
                // https://www.opengl.org/sdk/docs/man/html/gl_FragCoord.xhtml
                'WINDOW_SIZE',
                // Infomation about camera
                'NEAR',
                'FAR',
                // Time
                'TIME'
            ];
            var matrixSemantics = [
                'WORLD',
                'VIEW',
                'PROJECTION',
                'WORLDVIEW',
                'VIEWPROJECTION',
                'WORLDVIEWPROJECTION',
                'WORLDINVERSE',
                'VIEWINVERSE',
                'PROJECTIONINVERSE',
                'WORLDVIEWINVERSE',
                'VIEWPROJECTIONINVERSE',
                'WORLDVIEWPROJECTIONINVERSE',
                'WORLDTRANSPOSE',
                'VIEWTRANSPOSE',
                'PROJECTIONTRANSPOSE',
                'WORLDVIEWTRANSPOSE',
                'VIEWPROJECTIONTRANSPOSE',
                'WORLDVIEWPROJECTIONTRANSPOSE',
                'WORLDINVERSETRANSPOSE',
                'VIEWINVERSETRANSPOSE',
                'PROJECTIONINVERSETRANSPOSE',
                'WORLDVIEWINVERSETRANSPOSE',
                'VIEWPROJECTIONINVERSETRANSPOSE',
                'WORLDVIEWPROJECTIONINVERSETRANSPOSE'
            ];

            var attributeSizeMap = {
                // WebGL does not support integer attributes
                'vec4': 4,
                'vec3': 3,
                'vec2': 2,
                'float': 1
            };


            var shaderIDCache = {};
            var shaderCodeCache = {};

            function getShaderID(vertex, fragment) {
                var key = 'vertex:' + vertex + 'fragment:' + fragment;
                if (shaderIDCache[key]) {
                    return shaderIDCache[key];
                }
                var id = __WEBPACK_IMPORTED_MODULE_0__core_util__["a" /* default */].genGUID();
                shaderIDCache[key] = id;

                shaderCodeCache[id] = {
                    vertex: vertex,
                    fragment: fragment
                };

                return id;
            }

            function removeComment(code) {
                return code.replace(/[ \t]*\/\/.*\n/g, '')   // remove //
                    .replace(/[ \t]*\/\*[\s\S]*?\*\//g, ''); // remove /* */
            }

            function logSyntaxError() {
                console.error('Wrong uniform/attributes syntax');
            }

            function parseDeclarations(type, line) {
                var speratorsRegexp = /[,=\(\):]/;
                var tokens = line
                    // Convert `symbol: [1,2,3]` to `symbol: vec3(1,2,3)`
                    .replace(/:\s*\[\s*(.*)\s*\]/g, '=' + type + '($1)')
                    .replace(/\s+/g, '')
                    .split(/(?=[,=\(\):])/g);

                var newTokens = [];
                for (var i = 0; i < tokens.length; i++) {
                    if (tokens[i].match(speratorsRegexp)) {
                        newTokens.push(
                            tokens[i].charAt(0),
                            tokens[i].slice(1)
                        );
                    }
                    else {
                        newTokens.push(tokens[i]);
                    }
                }
                tokens = newTokens;

                var TYPE_SYMBOL = 0;
                var TYPE_ASSIGN = 1;
                var TYPE_VEC = 2;
                var TYPE_ARR = 3;
                var TYPE_SEMANTIC = 4;
                var TYPE_NORMAL = 5;

                var opType = TYPE_SYMBOL;
                var declarations = {};
                var declarationValue = null;
                var currentDeclaration;

                addSymbol(tokens[0]);

                function addSymbol(symbol) {
                    if (!symbol) {
                        logSyntaxError();
                    }
                    var arrResult = symbol.match(/\[(.*?)\]/);
                    currentDeclaration = symbol.replace(/\[(.*?)\]/, '');
                    declarations[currentDeclaration] = {};
                    if (arrResult) {
                        declarations[currentDeclaration].isArray = true;
                        declarations[currentDeclaration].arraySize = arrResult[1];
                    }
                }

                for (var i = 1; i < tokens.length; i++) {
                    var token = tokens[i];
                    if (!token) {   // Empty token;
                        continue;
                    }
                    if (token === '=') {
                        if (opType !== TYPE_SYMBOL
                            && opType !== TYPE_ARR) {
                            logSyntaxError();
                            break;
                        }
                        opType = TYPE_ASSIGN;

                        continue;
                    }
                    else if (token === ':') {
                        opType = TYPE_SEMANTIC;

                        continue;
                    }
                    else if (token === ',') {
                        if (opType === TYPE_VEC) {
                            if (!(declarationValue instanceof Array)) {
                                logSyntaxError();
                                break;
                            }
                            declarationValue.push(+tokens[++i]);
                        }
                        else {
                            opType = TYPE_NORMAL;
                        }

                        continue;
                    }
                    else if (token === ')') {
                        declarations[currentDeclaration].value = new __WEBPACK_IMPORTED_MODULE_1__core_vendor__["a" /* default */].Float32Array(declarationValue);
                        declarationValue = null;
                        opType = TYPE_NORMAL;
                        continue;
                    }
                    else if (token === '(') {
                        if (opType !== TYPE_VEC) {
                            logSyntaxError();
                            break;
                        }
                        if (!(declarationValue instanceof Array)) {
                            logSyntaxError();
                            break;
                        }
                        declarationValue.push(+tokens[++i]);
                        continue;
                    }
                    else if (token.indexOf('vec') >= 0) {
                        if (opType !== TYPE_ASSIGN
                            // Compatitable with old syntax `symbol: [1,2,3]`
                            && opType !== TYPE_SEMANTIC) {
                            logSyntaxError();
                            break;
                        }
                        opType = TYPE_VEC;
                        declarationValue = [];
                        continue;
                    }
                    else if (opType === TYPE_ASSIGN) {
                        if (type === 'bool') {
                            declarations[currentDeclaration].value = token === 'true';
                        }
                        else {
                            declarations[currentDeclaration].value = parseFloat(token);
                        }
                        declarationValue = null;
                        continue;
                    }
                    else if (opType === TYPE_SEMANTIC) {
                        var semantic = token;
                        if (attributeSemantics.indexOf(semantic) >= 0
                            || uniformSemantics.indexOf(semantic) >= 0
                            || matrixSemantics.indexOf(semantic) >= 0
                        ) {
                            declarations[currentDeclaration].semantic = semantic;
                        }
                        else if (semantic === 'ignore' || semantic === 'unconfigurable') {
                            declarations[currentDeclaration].ignore = true;
                        }
                        else {
                            // Try to parse as a default tvalue.
                            if (type === 'bool') {
                                declarations[currentDeclaration].value = semantic === 'true';
                            }
                            else {
                                declarations[currentDeclaration].value = parseFloat(semantic);
                            }
                        }
                        continue;
                    }

                    // treat as symbol.
                    addSymbol(token);
                    opType = TYPE_SYMBOL;
                }

                return declarations;
            }


            /**
             * @constructor
             * @extends clay.core.Base
             * @alias clay.Shader
             * @param {string} vertex
             * @param {string} fragment
             * @example
             * // Create a phong shader
             * var shader = new clay.Shader(
             *      clay.Shader.source('clay.standard.vertex'),
             *      clay.Shader.source('clay.standard.fragment')
             * );
             */
            function Shader(vertex, fragment) {
                // First argument can be { vertex, fragment }
                if (typeof vertex === 'object') {
                    fragment = vertex.fragment;
                    vertex = vertex.vertex;
                }

                vertex = removeComment(vertex);
                fragment = removeComment(fragment);

                this._shaderID = getShaderID(vertex, fragment);

                this._vertexCode = Shader.parseImport(vertex);
                this._fragmentCode = Shader.parseImport(fragment);

                /**
                 * @readOnly
                 */
                this.attributeSemantics = {};
                /**
                 * @readOnly
                 */
                this.matrixSemantics = {};
                /**
                 * @readOnly
                 */
                this.uniformSemantics = {};
                /**
                 * @readOnly
                 */
                this.matrixSemanticKeys = [];
                /**
                 * @readOnly
                 */
                this.uniformTemplates = {};
                /**
                 * @readOnly
                 */
                this.attributes = {};
                /**
                 * @readOnly
                 */
                this.textures = {};
                /**
                 * @readOnly
                 */
                this.vertexDefines = {};
                /**
                 * @readOnly
                 */
                this.fragmentDefines = {};

                this._parseAttributes();
                this._parseUniforms();
                this._parseDefines();
            }

            Shader.prototype = {

                constructor: Shader,

                // Create a new uniform instance for material
                createUniforms: function () {
                    var uniforms = {};

                    for (var symbol in this.uniformTemplates) {
                        var uniformTpl = this.uniformTemplates[symbol];
                        uniforms[symbol] = {
                            type: uniformTpl.type,
                            value: uniformTpl.value()
                        };
                    }

                    return uniforms;
                },

                _parseImport: function () {
                    this._vertexCode = Shader.parseImport(this.vertex);
                    this._fragmentCode = Shader.parseImport(this.fragment);
                },

                _addSemanticUniform: function (symbol, uniformType, semantic) {
                    // This case is only for SKIN_MATRIX
                    // TODO
                    if (attributeSemantics.indexOf(semantic) >= 0) {
                        this.attributeSemantics[semantic] = {
                            symbol: symbol,
                            type: uniformType
                        };
                    }
                    else if (matrixSemantics.indexOf(semantic) >= 0) {
                        var isTranspose = false;
                        var semanticNoTranspose = semantic;
                        if (semantic.match(/TRANSPOSE$/)) {
                            isTranspose = true;
                            semanticNoTranspose = semantic.slice(0, -9);
                        }
                        this.matrixSemantics[semantic] = {
                            symbol: symbol,
                            type: uniformType,
                            isTranspose: isTranspose,
                            semanticNoTranspose: semanticNoTranspose
                        };
                    }
                    else if (uniformSemantics.indexOf(semantic) >= 0) {
                        this.uniformSemantics[semantic] = {
                            symbol: symbol,
                            type: uniformType
                        };
                    }
                },

                _addMaterialUniform: function (symbol, type, uniformType, defaultValueFunc, isArray, materialUniforms) {
                    materialUniforms[symbol] = {
                        type: uniformType,
                        value: isArray ? uniformValueConstructor['array'] : (defaultValueFunc || uniformValueConstructor[type]),
                        semantic: null
                    };
                },

                _parseUniforms: function () {
                    var uniforms = {};
                    var self = this;
                    var shaderType = 'vertex';
                    this._uniformList = [];

                    this._vertexCode = this._vertexCode.replace(uniformRegex, _uniformParser);
                    shaderType = 'fragment';
                    this._fragmentCode = this._fragmentCode.replace(uniformRegex, _uniformParser);

                    self.matrixSemanticKeys = Object.keys(this.matrixSemantics);

                    function makeDefaultValueFunc(value) {
                        return value != null ? function () { return value; } : null;
                    }

                    function _uniformParser(str, type, content) {
                        var declaredUniforms = parseDeclarations(type, content);
                        var uniformMainStr = [];
                        for (var symbol in declaredUniforms) {

                            var uniformInfo = declaredUniforms[symbol];
                            var semantic = uniformInfo.semantic;
                            var tmpStr = symbol;
                            var uniformType = uniformTypeMap[type];
                            var defaultValueFunc = makeDefaultValueFunc(declaredUniforms[symbol].value);
                            if (declaredUniforms[symbol].isArray) {
                                tmpStr += '[' + declaredUniforms[symbol].arraySize + ']';
                                uniformType += 'v';
                            }

                            uniformMainStr.push(tmpStr);

                            self._uniformList.push(symbol);

                            if (!uniformInfo.ignore) {
                                if (type === 'sampler2D' || type === 'samplerCube') {
                                    // Texture is default disabled
                                    self.textures[symbol] = {
                                        shaderType: shaderType,
                                        type: type
                                    };
                                }

                                if (semantic) {
                                    // TODO Should not declare multiple symbols if have semantic.
                                    self._addSemanticUniform(symbol, uniformType, semantic);
                                }
                                else {
                                    self._addMaterialUniform(
                                        symbol, type, uniformType, defaultValueFunc,
                                        declaredUniforms[symbol].isArray, uniforms
                                    );
                                }
                            }
                        }
                        return uniformMainStr.length > 0
                            ? 'uniform ' + type + ' ' + uniformMainStr.join(',') + ';\n' : '';
                    }

                    this.uniformTemplates = uniforms;
                },

                _parseAttributes: function () {
                    var attributes = {};
                    var self = this;
                    this._vertexCode = this._vertexCode.replace(attributeRegex, _attributeParser);

                    function _attributeParser(str, type, content) {
                        var declaredAttributes = parseDeclarations(type, content);

                        var size = attributeSizeMap[type] || 1;
                        var attributeMainStr = [];
                        for (var symbol in declaredAttributes) {
                            var semantic = declaredAttributes[symbol].semantic;
                            attributes[symbol] = {
                                // TODO Can only be float
                                type: 'float',
                                size: size,
                                semantic: semantic || null
                            };
                            // TODO Should not declare multiple symbols if have semantic.
                            if (semantic) {
                                if (attributeSemantics.indexOf(semantic) < 0) {
                                    throw new Error('Unkown semantic "' + semantic + '"');
                                }
                                else {
                                    self.attributeSemantics[semantic] = {
                                        symbol: symbol,
                                        type: type
                                    };
                                }
                            }
                            attributeMainStr.push(symbol);
                        }

                        return 'attribute ' + type + ' ' + attributeMainStr.join(',') + ';\n';
                    }

                    this.attributes = attributes;
                },

                _parseDefines: function () {
                    var self = this;
                    var shaderType = 'vertex';
                    this._vertexCode = this._vertexCode.replace(defineRegex, _defineParser);
                    shaderType = 'fragment';
                    this._fragmentCode = this._fragmentCode.replace(defineRegex, _defineParser);

                    function _defineParser(str, symbol, value) {
                        var defines = shaderType === 'vertex' ? self.vertexDefines : self.fragmentDefines;
                        if (!defines[symbol]) { // Haven't been defined by user
                            if (value === 'false') {
                                defines[symbol] = false;
                            }
                            else if (value === 'true') {
                                defines[symbol] = true;
                            }
                            else {
                                defines[symbol] = value
                                    // If can parse to float
                                    ? (isNaN(parseFloat(value)) ? value.trim() : parseFloat(value))
                                    : null;
                            }
                        }
                        return '';
                    }
                },

                /**
                 * Clone a new shader
                 * @return {clay.Shader}
                 */
                clone: function () {
                    var code = shaderCodeCache[this._shaderID];
                    var shader = new Shader(code.vertex, code.fragment);
                    return shader;
                }
            };

            if (Object.defineProperty) {
                Object.defineProperty(Shader.prototype, 'shaderID', {
                    get: function () {
                        return this._shaderID;
                    }
                });
                Object.defineProperty(Shader.prototype, 'vertex', {
                    get: function () {
                        return this._vertexCode;
                    }
                });
                Object.defineProperty(Shader.prototype, 'fragment', {
                    get: function () {
                        return this._fragmentCode;
                    }
                });
                Object.defineProperty(Shader.prototype, 'uniforms', {
                    get: function () {
                        return this._uniformList;
                    }
                });
            }

            var importRegex = /(@import)\s*([0-9a-zA-Z_\-\.]*)/g;
            Shader.parseImport = function (shaderStr) {
                shaderStr = shaderStr.replace(importRegex, function (str, importSymbol, importName) {
                    var str = Shader.source(importName);
                    if (str) {
                        // Recursively parse
                        return Shader.parseImport(str);
                    }
                    else {
                        console.error('Shader chunk "' + importName + '" not existed in library');
                        return '';
                    }
                });
                return shaderStr;
            };

            var exportRegex = /(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;

            /**
             * Import shader source
             * @param  {string} shaderStr
             * @memberOf clay.Shader
             */
            Shader['import'] = function (shaderStr) {
                shaderStr.replace(exportRegex, function (str, exportSymbol, exportName, code) {
                    var code = code.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g, '');
                    if (code) {
                        var parts = exportName.split('.');
                        var obj = Shader.codes;
                        var i = 0;
                        var key;
                        while (i < parts.length - 1) {
                            key = parts[i++];
                            if (!obj[key]) {
                                obj[key] = {};
                            }
                            obj = obj[key];
                        }
                        key = parts[i];
                        obj[key] = code;
                    }
                    return code;
                });
            };

            /**
             * Library to store all the loaded shader codes
             * @type {Object}
             * @readOnly
             * @memberOf clay.Shader
             */
            Shader.codes = {};

            /**
             * Get shader source
             * @param  {string} name
             * @return {string}
             */
            Shader.source = function (name) {
                var parts = name.split('.');
                var obj = Shader.codes;
                var i = 0;
                while (obj && i < parts.length) {
                    var key = parts[i++];
                    obj = obj[key];
                }
                if (typeof obj !== 'string') {
                    // FIXME Use default instead
                    console.error('Shader "' + name + '" not existed in library');
                    return '';
                }
                return obj;
            };

/* harmony default export */ __webpack_exports__["a"] = (Shader);


            /***/
}),
/* 9 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__glmatrix_quat__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__glmatrix_mat3__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Vector3__ = __webpack_require__(3);






            /**
             * @constructor
             * @alias clay.Matrix4
             */
            var Matrix4 = function () {

                this._axisX = new __WEBPACK_IMPORTED_MODULE_4__Vector3__["a" /* default */]();
                this._axisY = new __WEBPACK_IMPORTED_MODULE_4__Vector3__["a" /* default */]();
                this._axisZ = new __WEBPACK_IMPORTED_MODULE_4__Vector3__["a" /* default */]();

                /**
                 * Storage of Matrix4
                 * @name array
                 * @type {Float32Array}
                 * @memberOf clay.Matrix4#
                 */
                this.array = __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].create();

                /**
                 * @name _dirty
                 * @type {boolean}
                 * @memberOf clay.Matrix4#
                 */
                this._dirty = true;
            };

            Matrix4.prototype = {

                constructor: Matrix4,

                /**
                 * Set components from array
                 * @param  {Float32Array|number[]} arr
                 */
                setArray: function (arr) {
                    for (var i = 0; i < this.array.length; i++) {
                        this.array[i] = arr[i];
                    }
                    this._dirty = true;
                    return this;
                },
                /**
                 * Calculate the adjugate of self, in-place
                 * @return {clay.Matrix4}
                 */
                adjoint: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].adjoint(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Clone a new Matrix4
                 * @return {clay.Matrix4}
                 */
                clone: function () {
                    return (new Matrix4()).copy(this);
                },

                /**
                 * Copy from b
                 * @param  {clay.Matrix4} b
                 * @return {clay.Matrix4}
                 */
                copy: function (a) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].copy(this.array, a.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Calculate matrix determinant
                 * @return {number}
                 */
                determinant: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].determinant(this.array);
                },

                /**
                 * Set upper 3x3 part from quaternion
                 * @param  {clay.Quaternion} q
                 * @return {clay.Matrix4}
                 */
                fromQuat: function (q) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromQuat(this.array, q.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set from a quaternion rotation and a vector translation
                 * @param  {clay.Quaternion} q
                 * @param  {clay.Vector3} v
                 * @return {clay.Matrix4}
                 */
                fromRotationTranslation: function (q, v) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromRotationTranslation(this.array, q.array, v.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set from Matrix2d, it is used when converting a 2d shape to 3d space.
                 * In 3d space it is equivalent to ranslate on xy plane and rotate about z axis
                 * @param  {clay.Matrix2d} m2d
                 * @return {clay.Matrix4}
                 */
                fromMat2d: function (m2d) {
                    Matrix4.fromMat2d(this, m2d);
                    return this;
                },

                /**
                 * Set from frustum bounds
                 * @param  {number} left
                 * @param  {number} right
                 * @param  {number} bottom
                 * @param  {number} top
                 * @param  {number} near
                 * @param  {number} far
                 * @return {clay.Matrix4}
                 */
                frustum: function (left, right, bottom, top, near, far) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].frustum(this.array, left, right, bottom, top, near, far);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set to a identity matrix
                 * @return {clay.Matrix4}
                 */
                identity: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].identity(this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Invert self
                 * @return {clay.Matrix4}
                 */
                invert: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].invert(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set as a matrix with the given eye position, focal point, and up axis
                 * @param  {clay.Vector3} eye
                 * @param  {clay.Vector3} center
                 * @param  {clay.Vector3} up
                 * @return {clay.Matrix4}
                 */
                lookAt: function (eye, center, up) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].lookAt(this.array, eye.array, center.array, up.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for mutiply
                 * @param  {clay.Matrix4} b
                 * @return {clay.Matrix4}
                 */
                mul: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].mul(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for multiplyLeft
                 * @param  {clay.Matrix4} a
                 * @return {clay.Matrix4}
                 */
                mulLeft: function (a) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].mul(this.array, a.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Multiply self and b
                 * @param  {clay.Matrix4} b
                 * @return {clay.Matrix4}
                 */
                multiply: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].multiply(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Multiply a and self, a is on the left
                 * @param  {clay.Matrix3} a
                 * @return {clay.Matrix3}
                 */
                multiplyLeft: function (a) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].multiply(this.array, a.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set as a orthographic projection matrix
                 * @param  {number} left
                 * @param  {number} right
                 * @param  {number} bottom
                 * @param  {number} top
                 * @param  {number} near
                 * @param  {number} far
                 * @return {clay.Matrix4}
                 */
                ortho: function (left, right, bottom, top, near, far) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].ortho(this.array, left, right, bottom, top, near, far);
                    this._dirty = true;
                    return this;
                },
                /**
                 * Set as a perspective projection matrix
                 * @param  {number} fovy
                 * @param  {number} aspect
                 * @param  {number} near
                 * @param  {number} far
                 * @return {clay.Matrix4}
                 */
                perspective: function (fovy, aspect, near, far) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].perspective(this.array, fovy, aspect, near, far);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by rad about axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param  {number}   rad
                 * @param  {clay.Vector3} axis
                 * @return {clay.Matrix4}
                 */
                rotate: function (rad, axis) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotate(this.array, this.array, rad, axis.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by a given radian about X axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param {number} rad
                 * @return {clay.Matrix4}
                 */
                rotateX: function (rad) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateX(this.array, this.array, rad);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by a given radian about Y axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param {number} rad
                 * @return {clay.Matrix4}
                 */
                rotateY: function (rad) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateY(this.array, this.array, rad);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Rotate self by a given radian about Z axis.
                 * Equal to right-multiply a rotaion matrix
                 * @param {number} rad
                 * @return {clay.Matrix4}
                 */
                rotateZ: function (rad) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateZ(this.array, this.array, rad);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale self by s
                 * Equal to right-multiply a scale matrix
                 * @param  {clay.Vector3}  s
                 * @return {clay.Matrix4}
                 */
                scale: function (v) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].scale(this.array, this.array, v.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Translate self by v.
                 * Equal to right-multiply a translate matrix
                 * @param  {clay.Vector3}  v
                 * @return {clay.Matrix4}
                 */
                translate: function (v) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].translate(this.array, this.array, v.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transpose self, in-place.
                 * @return {clay.Matrix2}
                 */
                transpose: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].transpose(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Decompose a matrix to SRT
                 * @param {clay.Vector3} [scale]
                 * @param {clay.Quaternion} rotation
                 * @param {clay.Vector} position
                 * @see http://msdn.microsoft.com/en-us/library/microsoft.xna.framework.matrix.decompose.aspx
                 */
                decomposeMatrix: (function () {

                    var x = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var y = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var z = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();

                    var m3 = __WEBPACK_IMPORTED_MODULE_3__glmatrix_mat3__["a" /* default */].create();

                    return function (scale, rotation, position) {

                        var el = this.array;
                        __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(x, el[0], el[1], el[2]);
                        __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(y, el[4], el[5], el[6]);
                        __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(z, el[8], el[9], el[10]);

                        var sx = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].length(x);
                        var sy = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].length(y);
                        var sz = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].length(z);

                        // if determine is negative, we need to invert one scale
                        var det = this.determinant();
                        if (det < 0) {
                            sx = -sx;
                        }

                        if (scale) {
                            scale.set(sx, sy, sz);
                        }

                        position.set(el[12], el[13], el[14]);

                        __WEBPACK_IMPORTED_MODULE_3__glmatrix_mat3__["a" /* default */].fromMat4(m3, el);
                        // Not like mat4, mat3 in glmatrix seems to be row-based
                        // Seems fixed in gl-matrix 2.2.2
                        // https://github.com/toji/gl-matrix/issues/114
                        // mat3.transpose(m3, m3);

                        m3[0] /= sx;
                        m3[1] /= sx;
                        m3[2] /= sx;

                        m3[3] /= sy;
                        m3[4] /= sy;
                        m3[5] /= sy;

                        m3[6] /= sz;
                        m3[7] /= sz;
                        m3[8] /= sz;

                        __WEBPACK_IMPORTED_MODULE_2__glmatrix_quat__["a" /* default */].fromMat3(rotation.array, m3);
                        __WEBPACK_IMPORTED_MODULE_2__glmatrix_quat__["a" /* default */].normalize(rotation.array, rotation.array);

                        rotation._dirty = true;
                        position._dirty = true;
                    };
                })(),

                toString: function () {
                    return '[' + Array.prototype.join.call(this.array, ',') + ']';
                },

                toArray: function () {
                    return Array.prototype.slice.call(this.array);
                }
            };

            var defineProperty = Object.defineProperty;

            if (defineProperty) {
                var proto = Matrix4.prototype;
                /**
                 * Z Axis of local transform
                 * @name z
                 * @type {clay.Vector3}
                 * @memberOf clay.Matrix4
                 * @instance
                 */
                defineProperty(proto, 'z', {
                    get: function () {
                        var el = this.array;
                        this._axisZ.set(el[8], el[9], el[10]);
                        return this._axisZ;
                    },
                    set: function (v) {
                        // TODO Here has a problem
                        // If only set an item of vector will not work
                        var el = this.array;
                        v = v.array;
                        el[8] = v[0];
                        el[9] = v[1];
                        el[10] = v[2];

                        this._dirty = true;
                    }
                });

                /**
                 * Y Axis of local transform
                 * @name y
                 * @type {clay.Vector3}
                 * @memberOf clay.Matrix4
                 * @instance
                 */
                defineProperty(proto, 'y', {
                    get: function () {
                        var el = this.array;
                        this._axisY.set(el[4], el[5], el[6]);
                        return this._axisY;
                    },
                    set: function (v) {
                        var el = this.array;
                        v = v.array;
                        el[4] = v[0];
                        el[5] = v[1];
                        el[6] = v[2];

                        this._dirty = true;
                    }
                });

                /**
                 * X Axis of local transform
                 * @name x
                 * @type {clay.Vector3}
                 * @memberOf clay.Matrix4
                 * @instance
                 */
                defineProperty(proto, 'x', {
                    get: function () {
                        var el = this.array;
                        this._axisX.set(el[0], el[1], el[2]);
                        return this._axisX;
                    },
                    set: function (v) {
                        var el = this.array;
                        v = v.array;
                        el[0] = v[0];
                        el[1] = v[1];
                        el[2] = v[2];

                        this._dirty = true;
                    }
                })
            }

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.adjoint = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].adjoint(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.copy = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].copy(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} a
             * @return {number}
             */
            Matrix4.determinant = function (a) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].determinant(a.array);
            };

            /**
             * @param  {clay.Matrix4} out
             * @return {clay.Matrix4}
             */
            Matrix4.identity = function (out) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].identity(out.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {number}  left
             * @param  {number}  right
             * @param  {number}  bottom
             * @param  {number}  top
             * @param  {number}  near
             * @param  {number}  far
             * @return {clay.Matrix4}
             */
            Matrix4.ortho = function (out, left, right, bottom, top, near, far) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].ortho(out.array, left, right, bottom, top, near, far);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {number}  fovy
             * @param  {number}  aspect
             * @param  {number}  near
             * @param  {number}  far
             * @return {clay.Matrix4}
             */
            Matrix4.perspective = function (out, fovy, aspect, near, far) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].perspective(out.array, fovy, aspect, near, far);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Vector3} eye
             * @param  {clay.Vector3} center
             * @param  {clay.Vector3} up
             * @return {clay.Matrix4}
             */
            Matrix4.lookAt = function (out, eye, center, up) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].lookAt(out.array, eye.array, center.array, up.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.invert = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].invert(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Matrix4} b
             * @return {clay.Matrix4}
             */
            Matrix4.mul = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].mul(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @function
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Matrix4} b
             * @return {clay.Matrix4}
             */
            Matrix4.multiply = Matrix4.mul;

            /**
             * @param  {clay.Matrix4}    out
             * @param  {clay.Quaternion} q
             * @return {clay.Matrix4}
             */
            Matrix4.fromQuat = function (out, q) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromQuat(out.array, q.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4}    out
             * @param  {clay.Quaternion} q
             * @param  {clay.Vector3}    v
             * @return {clay.Matrix4}
             */
            Matrix4.fromRotationTranslation = function (out, q, v) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].fromRotationTranslation(out.array, q.array, v.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} m4
             * @param  {clay.Matrix2d} m2d
             * @return {clay.Matrix4}
             */
            Matrix4.fromMat2d = function (m4, m2d) {
                m4._dirty = true;
                var m2d = m2d.array;
                var m4 = m4.array;

                m4[0] = m2d[0];
                m4[4] = m2d[2];
                m4[12] = m2d[4];

                m4[1] = m2d[1];
                m4[5] = m2d[3];
                m4[13] = m2d[5];

                return m4;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @param  {clay.Vector3} axis
             * @return {clay.Matrix4}
             */
            Matrix4.rotate = function (out, a, rad, axis) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotate(out.array, a.array, rad, axis.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @return {clay.Matrix4}
             */
            Matrix4.rotateX = function (out, a, rad) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateX(out.array, a.array, rad);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @return {clay.Matrix4}
             */
            Matrix4.rotateY = function (out, a, rad) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateY(out.array, a.array, rad);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {number}  rad
             * @return {clay.Matrix4}
             */
            Matrix4.rotateZ = function (out, a, rad) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].rotateZ(out.array, a.array, rad);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Vector3} v
             * @return {clay.Matrix4}
             */
            Matrix4.scale = function (out, a, v) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].scale(out.array, a.array, v.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @return {clay.Matrix4}
             */
            Matrix4.transpose = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].transpose(out.array, a.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Matrix4} out
             * @param  {clay.Matrix4} a
             * @param  {clay.Vector3} v
             * @return {clay.Matrix4}
             */
            Matrix4.translate = function (out, a, v) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_mat4__["a" /* default */].translate(out.array, a.array, v.array);
                out._dirty = true;
                return out;
            };

/* harmony default export */ __webpack_exports__["a"] = (Matrix4);


            /***/
}),
/* 10 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Texture__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextureCube__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_glenum__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Cache__ = __webpack_require__(57);






            var KEY_FRAMEBUFFER = 'framebuffer';
            var KEY_RENDERBUFFER = 'renderbuffer';
            var KEY_RENDERBUFFER_WIDTH = KEY_RENDERBUFFER + '_width';
            var KEY_RENDERBUFFER_HEIGHT = KEY_RENDERBUFFER + '_height';
            var KEY_RENDERBUFFER_ATTACHED = KEY_RENDERBUFFER + '_attached';
            var KEY_DEPTHTEXTURE_ATTACHED = 'depthtexture_attached';

            var GL_FRAMEBUFFER = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].FRAMEBUFFER;
            var GL_RENDERBUFFER = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].RENDERBUFFER;
            var GL_DEPTH_ATTACHMENT = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_ATTACHMENT;
            var GL_COLOR_ATTACHMENT0 = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].COLOR_ATTACHMENT0;
            /**
             * @constructor clay.FrameBuffer
             * @extends clay.core.Base
             */
            var FrameBuffer = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend(
                /** @lends clay.FrameBuffer# */
                {
                    /**
                     * If use depth buffer
                     * @type {boolean}
                     */
                    depthBuffer: true,

                    /**
                     * @type {Object}
                     */
                    viewport: null,

                    _width: 0,
                    _height: 0,

                    _textures: null,

                    _boundRenderer: null,
                }, function () {
                    // Use cache
                    this._cache = new __WEBPACK_IMPORTED_MODULE_4__core_Cache__["a" /* default */]();

                    this._textures = {};
                },

                /**@lends clay.FrameBuffer.prototype. */
                {
                    /**
                     * Get attached texture width
                     * {number}
                     */
                    // FIXME Can't use before #bind
                    getTextureWidth: function () {
                        return this._width;
                    },

                    /**
                     * Get attached texture height
                     * {number}
                     */
                    getTextureHeight: function () {
                        return this._height;
                    },

                    /**
                     * Bind the framebuffer to given renderer before rendering
                     * @param  {clay.Renderer} renderer
                     */
                    bind: function (renderer) {

                        if (renderer.__currentFrameBuffer) {
                            // Already bound
                            if (renderer.__currentFrameBuffer === this) {
                                return;
                            }

                            console.warn('Renderer already bound with another framebuffer. Unbind it first');
                        }
                        renderer.__currentFrameBuffer = this;

                        var _gl = renderer.gl;

                        _gl.bindFramebuffer(GL_FRAMEBUFFER, this._getFrameBufferGL(renderer));
                        this._boundRenderer = renderer;
                        var cache = this._cache;

                        cache.put('viewport', renderer.viewport);

                        var hasTextureAttached = false;
                        var width;
                        var height;
                        for (var attachment in this._textures) {
                            hasTextureAttached = true;
                            var obj = this._textures[attachment];
                            if (obj) {
                                // TODO Do width, height checking, make sure size are same
                                width = obj.texture.width;
                                height = obj.texture.height;
                                // Attach textures
                                this._doAttach(renderer, obj.texture, attachment, obj.target);
                            }
                        }

                        this._width = width;
                        this._height = height;

                        if (!hasTextureAttached && this.depthBuffer) {
                            console.error('Must attach texture before bind, or renderbuffer may have incorrect width and height.')
                        }

                        if (this.viewport) {
                            renderer.setViewport(this.viewport);
                        }
                        else {
                            renderer.setViewport(0, 0, width, height, 1);
                        }

                        var attachedTextures = cache.get('attached_textures');
                        if (attachedTextures) {
                            for (var attachment in attachedTextures) {
                                if (!this._textures[attachment]) {
                                    var target = attachedTextures[attachment];
                                    this._doDetach(_gl, attachment, target);
                                }
                            }
                        }
                        if (!cache.get(KEY_DEPTHTEXTURE_ATTACHED) && this.depthBuffer) {
                            // Create a new render buffer
                            if (cache.miss(KEY_RENDERBUFFER)) {
                                cache.put(KEY_RENDERBUFFER, _gl.createRenderbuffer());
                            }
                            var renderbuffer = cache.get(KEY_RENDERBUFFER);

                            if (width !== cache.get(KEY_RENDERBUFFER_WIDTH)
                                || height !== cache.get(KEY_RENDERBUFFER_HEIGHT)) {
                                _gl.bindRenderbuffer(GL_RENDERBUFFER, renderbuffer);
                                _gl.renderbufferStorage(GL_RENDERBUFFER, _gl.DEPTH_COMPONENT16, width, height);
                                cache.put(KEY_RENDERBUFFER_WIDTH, width);
                                cache.put(KEY_RENDERBUFFER_HEIGHT, height);
                                _gl.bindRenderbuffer(GL_RENDERBUFFER, null);
                            }
                            if (!cache.get(KEY_RENDERBUFFER_ATTACHED)) {
                                _gl.framebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_ATTACHMENT, GL_RENDERBUFFER, renderbuffer);
                                cache.put(KEY_RENDERBUFFER_ATTACHED, true);
                            }
                        }
                    },

                    /**
                     * Unbind the frame buffer after rendering
                     * @param  {clay.Renderer} renderer
                     */
                    unbind: function (renderer) {
                        // Remove status record on renderer
                        renderer.__currentFrameBuffer = null;

                        var _gl = renderer.gl;

                        _gl.bindFramebuffer(GL_FRAMEBUFFER, null);
                        this._boundRenderer = null;

                        this._cache.use(renderer.__uid__);
                        var viewport = this._cache.get('viewport');
                        // Reset viewport;
                        if (viewport) {
                            renderer.setViewport(viewport);
                        }

                        this.updateMipmap(renderer);
                    },

                    // Because the data of texture is changed over time,
                    // Here update the mipmaps of texture each time after rendered;
                    updateMipmap: function (renderer) {
                        var _gl = renderer.gl;
                        for (var attachment in this._textures) {
                            var obj = this._textures[attachment];
                            if (obj) {
                                var texture = obj.texture;
                                // FIXME some texture format can't generate mipmap
                                if (!texture.NPOT && texture.useMipmap
                                    && texture.minFilter === __WEBPACK_IMPORTED_MODULE_1__Texture__["a" /* default */].LINEAR_MIPMAP_LINEAR) {
                                    var target = texture.textureType === 'textureCube' ? __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].TEXTURE_CUBE_MAP : __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].TEXTURE_2D;
                                    _gl.bindTexture(target, texture.getWebGLTexture(renderer));
                                    _gl.generateMipmap(target);
                                    _gl.bindTexture(target, null);
                                }
                            }
                        }
                    },


                    // 0x8CD5, 36053, FRAMEBUFFER_COMPLETE
                    // 0x8CD6, 36054, FRAMEBUFFER_INCOMPLETE_ATTACHMENT
                    // 0x8CD7, 36055, FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
                    // 0x8CD9, 36057, FRAMEBUFFER_INCOMPLETE_DIMENSIONS
                    // 0x8CDD, 36061, FRAMEBUFFER_UNSUPPORTED
                    checkStatus: function (_gl) {
                        return _gl.checkFramebufferStatus(GL_FRAMEBUFFER);
                    },

                    _getFrameBufferGL: function (renderer) {
                        var cache = this._cache;
                        cache.use(renderer.__uid__);

                        if (cache.miss(KEY_FRAMEBUFFER)) {
                            cache.put(KEY_FRAMEBUFFER, renderer.gl.createFramebuffer());
                        }

                        return cache.get(KEY_FRAMEBUFFER);
                    },

                    /**
                     * Attach a texture(RTT) to the framebuffer
                     * @param  {clay.Texture} texture
                     * @param  {number} [attachment=gl.COLOR_ATTACHMENT0]
                     * @param  {number} [target=gl.TEXTURE_2D]
                     */
                    attach: function (texture, attachment, target) {

                        if (!texture.width) {
                            throw new Error('The texture attached to color buffer is not a valid.');
                        }
                        // TODO width and height check

                        // If the depth_texture extension is enabled, developers
                        // Can attach a depth texture to the depth buffer
                        // http://blog.tojicode.com/2012/07/using-webgldepthtexture.html
                        attachment = attachment || GL_COLOR_ATTACHMENT0;
                        target = target || __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].TEXTURE_2D;

                        var boundRenderer = this._boundRenderer;
                        var _gl = boundRenderer && boundRenderer.gl;
                        var attachedTextures;

                        if (_gl) {
                            var cache = this._cache;
                            cache.use(boundRenderer.__uid__);
                            attachedTextures = cache.get('attached_textures');
                        }

                        // Check if texture attached
                        var previous = this._textures[attachment];
                        if (previous && previous.target === target
                            && previous.texture === texture
                            && (attachedTextures && attachedTextures[attachment] != null)
                        ) {
                            return;
                        }

                        var canAttach = true;
                        if (boundRenderer) {
                            canAttach = this._doAttach(boundRenderer, texture, attachment, target);
                            // Set viewport again incase attached to different size textures.
                            if (!this.viewport) {
                                boundRenderer.setViewport(0, 0, texture.width, texture.height, 1);
                            }
                        }

                        if (canAttach) {
                            this._textures[attachment] = this._textures[attachment] || {};
                            this._textures[attachment].texture = texture;
                            this._textures[attachment].target = target;
                        }
                    },

                    _doAttach: function (renderer, texture, attachment, target) {
                        var _gl = renderer.gl;
                        // Make sure texture is always updated
                        // Because texture width or height may be changed and in this we can't be notified
                        // FIXME awkward;
                        var webglTexture = texture.getWebGLTexture(renderer);
                        // Assume cache has been used.
                        var attachedTextures = this._cache.get('attached_textures');
                        if (attachedTextures && attachedTextures[attachment]) {
                            var obj = attachedTextures[attachment];
                            // Check if texture and target not changed
                            if (obj.texture === texture && obj.target === target) {
                                return;
                            }
                        }
                        attachment = +attachment;

                        var canAttach = true;
                        if (attachment === GL_DEPTH_ATTACHMENT || attachment === __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL_ATTACHMENT) {
                            var extension = renderer.getGLExtension('WEBGL_depth_texture');

                            if (!extension) {
                                console.error('Depth texture is not supported by the browser');
                                canAttach = false;
                            }
                            if (texture.format !== __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_COMPONENT
                                && texture.format !== __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL
                            ) {
                                console.error('The texture attached to depth buffer is not a valid.');
                                canAttach = false;
                            }

                            // Dispose render buffer created previous
                            if (canAttach) {
                                var renderbuffer = this._cache.get(KEY_RENDERBUFFER);
                                if (renderbuffer) {
                                    _gl.framebufferRenderbuffer(GL_FRAMEBUFFER, GL_DEPTH_ATTACHMENT, GL_RENDERBUFFER, null);
                                    _gl.deleteRenderbuffer(renderbuffer);
                                    this._cache.put(KEY_RENDERBUFFER, false);
                                }

                                this._cache.put(KEY_RENDERBUFFER_ATTACHED, false);
                                this._cache.put(KEY_DEPTHTEXTURE_ATTACHED, true);
                            }
                        }

                        // Mipmap level can only be 0
                        _gl.framebufferTexture2D(GL_FRAMEBUFFER, attachment, target, webglTexture, 0);

                        if (!attachedTextures) {
                            attachedTextures = {};
                            this._cache.put('attached_textures', attachedTextures);
                        }
                        attachedTextures[attachment] = attachedTextures[attachment] || {};
                        attachedTextures[attachment].texture = texture;
                        attachedTextures[attachment].target = target;

                        return canAttach;
                    },

                    _doDetach: function (_gl, attachment, target) {
                        // Detach a texture from framebuffer
                        // https://github.com/KhronosGroup/WebGL/blob/master/conformance-suites/1.0.0/conformance/framebuffer-test.html#L145
                        _gl.framebufferTexture2D(GL_FRAMEBUFFER, attachment, target, null, 0);

                        // Assume cache has been used.
                        var attachedTextures = this._cache.get('attached_textures');
                        if (attachedTextures && attachedTextures[attachment]) {
                            attachedTextures[attachment] = null;
                        }

                        if (attachment === GL_DEPTH_ATTACHMENT || attachment === __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL_ATTACHMENT) {
                            this._cache.put(KEY_DEPTHTEXTURE_ATTACHED, false);
                        }
                    },

                    /**
                     * Detach a texture
                     * @param  {number} [attachment=gl.COLOR_ATTACHMENT0]
                     * @param  {number} [target=gl.TEXTURE_2D]
                     */
                    detach: function (attachment, target) {
                        // TODO depth extension check ?
                        this._textures[attachment] = null;
                        if (this._boundRenderer) {
                            var cache = this._cache;
                            cache.use(this._boundRenderer.__uid__);
                            this._doDetach(this._boundRenderer.gl, attachment, target);
                        }
                    },
                    /**
                     * Dispose
                     * @param  {WebGLRenderingContext} _gl
                     */
                    dispose: function (renderer) {

                        var _gl = renderer.gl;
                        var cache = this._cache;

                        cache.use(renderer.__uid__);

                        var renderBuffer = cache.get(KEY_RENDERBUFFER);
                        if (renderBuffer) {
                            _gl.deleteRenderbuffer(renderBuffer);
                        }
                        var frameBuffer = cache.get(KEY_FRAMEBUFFER);
                        if (frameBuffer) {
                            _gl.deleteFramebuffer(frameBuffer);
                        }
                        cache.deleteContext(renderer.__uid__);

                        // Clear cache for reusing
                        this._textures = {};

                    }
                });

            FrameBuffer.DEPTH_ATTACHMENT = GL_DEPTH_ATTACHMENT;
            FrameBuffer.COLOR_ATTACHMENT0 = GL_COLOR_ATTACHMENT0;
            FrameBuffer.STENCIL_ATTACHMENT = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].STENCIL_ATTACHMENT;
            FrameBuffer.DEPTH_STENCIL_ATTACHMENT = __WEBPACK_IMPORTED_MODULE_3__core_glenum__["a" /* default */].DEPTH_STENCIL_ATTACHMENT;

/* harmony default export */ __webpack_exports__["a"] = (FrameBuffer);


            /***/
}),
/* 11 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/**
 * @namespace clay.core.glenum
 * @see http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14
 */
/* harmony default export */ __webpack_exports__["a"] = ({
                /* ClearBufferMask */
                DEPTH_BUFFER_BIT: 0x00000100,
                STENCIL_BUFFER_BIT: 0x00000400,
                COLOR_BUFFER_BIT: 0x00004000,

                /* BeginMode */
                POINTS: 0x0000,
                LINES: 0x0001,
                LINE_LOOP: 0x0002,
                LINE_STRIP: 0x0003,
                TRIANGLES: 0x0004,
                TRIANGLE_STRIP: 0x0005,
                TRIANGLE_FAN: 0x0006,

                /* AlphaFunction (not supported in ES20) */
                /*      NEVER */
                /*      LESS */
                /*      EQUAL */
                /*      LEQUAL */
                /*      GREATER */
                /*      NOTEQUAL */
                /*      GEQUAL */
                /*      ALWAYS */

                /* BlendingFactorDest */
                ZERO: 0,
                ONE: 1,
                SRC_COLOR: 0x0300,
                ONE_MINUS_SRC_COLOR: 0x0301,
                SRC_ALPHA: 0x0302,
                ONE_MINUS_SRC_ALPHA: 0x0303,
                DST_ALPHA: 0x0304,
                ONE_MINUS_DST_ALPHA: 0x0305,

                /* BlendingFactorSrc */
                /*      ZERO */
                /*      ONE */
                DST_COLOR: 0x0306,
                ONE_MINUS_DST_COLOR: 0x0307,
                SRC_ALPHA_SATURATE: 0x0308,
                /*      SRC_ALPHA */
                /*      ONE_MINUS_SRC_ALPHA */
                /*      DST_ALPHA */
                /*      ONE_MINUS_DST_ALPHA */

                /* BlendEquationSeparate */
                FUNC_ADD: 0x8006,
                BLEND_EQUATION: 0x8009,
                BLEND_EQUATION_RGB: 0x8009, /* same as BLEND_EQUATION */
                BLEND_EQUATION_ALPHA: 0x883D,

                /* BlendSubtract */
                FUNC_SUBTRACT: 0x800A,
                FUNC_REVERSE_SUBTRACT: 0x800B,

                /* Separate Blend Functions */
                BLEND_DST_RGB: 0x80C8,
                BLEND_SRC_RGB: 0x80C9,
                BLEND_DST_ALPHA: 0x80CA,
                BLEND_SRC_ALPHA: 0x80CB,
                CONSTANT_COLOR: 0x8001,
                ONE_MINUS_CONSTANT_COLOR: 0x8002,
                CONSTANT_ALPHA: 0x8003,
                ONE_MINUS_CONSTANT_ALPHA: 0x8004,
                BLEND_COLOR: 0x8005,

                /* Buffer Objects */
                ARRAY_BUFFER: 0x8892,
                ELEMENT_ARRAY_BUFFER: 0x8893,
                ARRAY_BUFFER_BINDING: 0x8894,
                ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,

                STREAM_DRAW: 0x88E0,
                STATIC_DRAW: 0x88E4,
                DYNAMIC_DRAW: 0x88E8,

                BUFFER_SIZE: 0x8764,
                BUFFER_USAGE: 0x8765,

                CURRENT_VERTEX_ATTRIB: 0x8626,

                /* CullFaceMode */
                FRONT: 0x0404,
                BACK: 0x0405,
                FRONT_AND_BACK: 0x0408,

                /* DepthFunction */
                /*      NEVER */
                /*      LESS */
                /*      EQUAL */
                /*      LEQUAL */
                /*      GREATER */
                /*      NOTEQUAL */
                /*      GEQUAL */
                /*      ALWAYS */

                /* EnableCap */
                /* TEXTURE_2D */
                CULL_FACE: 0x0B44,
                BLEND: 0x0BE2,
                DITHER: 0x0BD0,
                STENCIL_TEST: 0x0B90,
                DEPTH_TEST: 0x0B71,
                SCISSOR_TEST: 0x0C11,
                POLYGON_OFFSET_FILL: 0x8037,
                SAMPLE_ALPHA_TO_COVERAGE: 0x809E,
                SAMPLE_COVERAGE: 0x80A0,

                /* ErrorCode */
                NO_ERROR: 0,
                INVALID_ENUM: 0x0500,
                INVALID_VALUE: 0x0501,
                INVALID_OPERATION: 0x0502,
                OUT_OF_MEMORY: 0x0505,

                /* FrontFaceDirection */
                CW: 0x0900,
                CCW: 0x0901,

                /* GetPName */
                LINE_WIDTH: 0x0B21,
                ALIASED_POINT_SIZE_RANGE: 0x846D,
                ALIASED_LINE_WIDTH_RANGE: 0x846E,
                CULL_FACE_MODE: 0x0B45,
                FRONT_FACE: 0x0B46,
                DEPTH_RANGE: 0x0B70,
                DEPTH_WRITEMASK: 0x0B72,
                DEPTH_CLEAR_VALUE: 0x0B73,
                DEPTH_FUNC: 0x0B74,
                STENCIL_CLEAR_VALUE: 0x0B91,
                STENCIL_FUNC: 0x0B92,
                STENCIL_FAIL: 0x0B94,
                STENCIL_PASS_DEPTH_FAIL: 0x0B95,
                STENCIL_PASS_DEPTH_PASS: 0x0B96,
                STENCIL_REF: 0x0B97,
                STENCIL_VALUE_MASK: 0x0B93,
                STENCIL_WRITEMASK: 0x0B98,
                STENCIL_BACK_FUNC: 0x8800,
                STENCIL_BACK_FAIL: 0x8801,
                STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
                STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
                STENCIL_BACK_REF: 0x8CA3,
                STENCIL_BACK_VALUE_MASK: 0x8CA4,
                STENCIL_BACK_WRITEMASK: 0x8CA5,
                VIEWPORT: 0x0BA2,
                SCISSOR_BOX: 0x0C10,
                /*      SCISSOR_TEST */
                COLOR_CLEAR_VALUE: 0x0C22,
                COLOR_WRITEMASK: 0x0C23,
                UNPACK_ALIGNMENT: 0x0CF5,
                PACK_ALIGNMENT: 0x0D05,
                MAX_TEXTURE_SIZE: 0x0D33,
                MAX_VIEWPORT_DIMS: 0x0D3A,
                SUBPIXEL_BITS: 0x0D50,
                RED_BITS: 0x0D52,
                GREEN_BITS: 0x0D53,
                BLUE_BITS: 0x0D54,
                ALPHA_BITS: 0x0D55,
                DEPTH_BITS: 0x0D56,
                STENCIL_BITS: 0x0D57,
                POLYGON_OFFSET_UNITS: 0x2A00,
                /*      POLYGON_OFFSET_FILL */
                POLYGON_OFFSET_FACTOR: 0x8038,
                TEXTURE_BINDING_2D: 0x8069,
                SAMPLE_BUFFERS: 0x80A8,
                SAMPLES: 0x80A9,
                SAMPLE_COVERAGE_VALUE: 0x80AA,
                SAMPLE_COVERAGE_INVERT: 0x80AB,

                /* GetTextureParameter */
                /*      TEXTURE_MAG_FILTER */
                /*      TEXTURE_MIN_FILTER */
                /*      TEXTURE_WRAP_S */
                /*      TEXTURE_WRAP_T */

                COMPRESSED_TEXTURE_FORMATS: 0x86A3,

                /* HintMode */
                DONT_CARE: 0x1100,
                FASTEST: 0x1101,
                NICEST: 0x1102,

                /* HintTarget */
                GENERATE_MIPMAP_HINT: 0x8192,

                /* DataType */
                BYTE: 0x1400,
                UNSIGNED_BYTE: 0x1401,
                SHORT: 0x1402,
                UNSIGNED_SHORT: 0x1403,
                INT: 0x1404,
                UNSIGNED_INT: 0x1405,
                FLOAT: 0x1406,

                /* PixelFormat */
                DEPTH_COMPONENT: 0x1902,
                ALPHA: 0x1906,
                RGB: 0x1907,
                RGBA: 0x1908,
                LUMINANCE: 0x1909,
                LUMINANCE_ALPHA: 0x190A,

                /* PixelType */
                /*      UNSIGNED_BYTE */
                UNSIGNED_SHORT_4_4_4_4: 0x8033,
                UNSIGNED_SHORT_5_5_5_1: 0x8034,
                UNSIGNED_SHORT_5_6_5: 0x8363,

                /* Shaders */
                FRAGMENT_SHADER: 0x8B30,
                VERTEX_SHADER: 0x8B31,
                MAX_VERTEX_ATTRIBS: 0x8869,
                MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB,
                MAX_VARYING_VECTORS: 0x8DFC,
                MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D,
                MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C,
                MAX_TEXTURE_IMAGE_UNITS: 0x8872,
                MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD,
                SHADER_TYPE: 0x8B4F,
                DELETE_STATUS: 0x8B80,
                LINK_STATUS: 0x8B82,
                VALIDATE_STATUS: 0x8B83,
                ATTACHED_SHADERS: 0x8B85,
                ACTIVE_UNIFORMS: 0x8B86,
                ACTIVE_ATTRIBUTES: 0x8B89,
                SHADING_LANGUAGE_VERSION: 0x8B8C,
                CURRENT_PROGRAM: 0x8B8D,

                /* StencilFunction */
                NEVER: 0x0200,
                LESS: 0x0201,
                EQUAL: 0x0202,
                LEQUAL: 0x0203,
                GREATER: 0x0204,
                NOTEQUAL: 0x0205,
                GEQUAL: 0x0206,
                ALWAYS: 0x0207,

                /* StencilOp */
                /*      ZERO */
                KEEP: 0x1E00,
                REPLACE: 0x1E01,
                INCR: 0x1E02,
                DECR: 0x1E03,
                INVERT: 0x150A,
                INCR_WRAP: 0x8507,
                DECR_WRAP: 0x8508,

                /* StringName */
                VENDOR: 0x1F00,
                RENDERER: 0x1F01,
                VERSION: 0x1F02,

                /* TextureMagFilter */
                NEAREST: 0x2600,
                LINEAR: 0x2601,

                /* TextureMinFilter */
                /*      NEAREST */
                /*      LINEAR */
                NEAREST_MIPMAP_NEAREST: 0x2700,
                LINEAR_MIPMAP_NEAREST: 0x2701,
                NEAREST_MIPMAP_LINEAR: 0x2702,
                LINEAR_MIPMAP_LINEAR: 0x2703,

                /* TextureParameterName */
                TEXTURE_MAG_FILTER: 0x2800,
                TEXTURE_MIN_FILTER: 0x2801,
                TEXTURE_WRAP_S: 0x2802,
                TEXTURE_WRAP_T: 0x2803,

                /* TextureTarget */
                TEXTURE_2D: 0x0DE1,
                TEXTURE: 0x1702,

                TEXTURE_CUBE_MAP: 0x8513,
                TEXTURE_BINDING_CUBE_MAP: 0x8514,
                TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
                TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
                TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
                TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
                TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
                TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A,
                MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C,

                /* TextureUnit */
                TEXTURE0: 0x84C0,
                TEXTURE1: 0x84C1,
                TEXTURE2: 0x84C2,
                TEXTURE3: 0x84C3,
                TEXTURE4: 0x84C4,
                TEXTURE5: 0x84C5,
                TEXTURE6: 0x84C6,
                TEXTURE7: 0x84C7,
                TEXTURE8: 0x84C8,
                TEXTURE9: 0x84C9,
                TEXTURE10: 0x84CA,
                TEXTURE11: 0x84CB,
                TEXTURE12: 0x84CC,
                TEXTURE13: 0x84CD,
                TEXTURE14: 0x84CE,
                TEXTURE15: 0x84CF,
                TEXTURE16: 0x84D0,
                TEXTURE17: 0x84D1,
                TEXTURE18: 0x84D2,
                TEXTURE19: 0x84D3,
                TEXTURE20: 0x84D4,
                TEXTURE21: 0x84D5,
                TEXTURE22: 0x84D6,
                TEXTURE23: 0x84D7,
                TEXTURE24: 0x84D8,
                TEXTURE25: 0x84D9,
                TEXTURE26: 0x84DA,
                TEXTURE27: 0x84DB,
                TEXTURE28: 0x84DC,
                TEXTURE29: 0x84DD,
                TEXTURE30: 0x84DE,
                TEXTURE31: 0x84DF,
                ACTIVE_TEXTURE: 0x84E0,

                /* TextureWrapMode */
                REPEAT: 0x2901,
                CLAMP_TO_EDGE: 0x812F,
                MIRRORED_REPEAT: 0x8370,

                /* Uniform Types */
                FLOAT_VEC2: 0x8B50,
                FLOAT_VEC3: 0x8B51,
                FLOAT_VEC4: 0x8B52,
                INT_VEC2: 0x8B53,
                INT_VEC3: 0x8B54,
                INT_VEC4: 0x8B55,
                BOOL: 0x8B56,
                BOOL_VEC2: 0x8B57,
                BOOL_VEC3: 0x8B58,
                BOOL_VEC4: 0x8B59,
                FLOAT_MAT2: 0x8B5A,
                FLOAT_MAT3: 0x8B5B,
                FLOAT_MAT4: 0x8B5C,
                SAMPLER_2D: 0x8B5E,
                SAMPLER_CUBE: 0x8B60,

                /* Vertex Arrays */
                VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
                VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
                VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
                VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
                VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A,
                VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
                VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F,

                /* Shader Source */
                COMPILE_STATUS: 0x8B81,

                /* Shader Precision-Specified Types */
                LOW_FLOAT: 0x8DF0,
                MEDIUM_FLOAT: 0x8DF1,
                HIGH_FLOAT: 0x8DF2,
                LOW_INT: 0x8DF3,
                MEDIUM_INT: 0x8DF4,
                HIGH_INT: 0x8DF5,

                /* Framebuffer Object. */
                FRAMEBUFFER: 0x8D40,
                RENDERBUFFER: 0x8D41,

                RGBA4: 0x8056,
                RGB5_A1: 0x8057,
                RGB565: 0x8D62,
                DEPTH_COMPONENT16: 0x81A5,
                STENCIL_INDEX: 0x1901,
                STENCIL_INDEX8: 0x8D48,
                DEPTH_STENCIL: 0x84F9,

                RENDERBUFFER_WIDTH: 0x8D42,
                RENDERBUFFER_HEIGHT: 0x8D43,
                RENDERBUFFER_INTERNAL_FORMAT: 0x8D44,
                RENDERBUFFER_RED_SIZE: 0x8D50,
                RENDERBUFFER_GREEN_SIZE: 0x8D51,
                RENDERBUFFER_BLUE_SIZE: 0x8D52,
                RENDERBUFFER_ALPHA_SIZE: 0x8D53,
                RENDERBUFFER_DEPTH_SIZE: 0x8D54,
                RENDERBUFFER_STENCIL_SIZE: 0x8D55,

                FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0,
                FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3,

                COLOR_ATTACHMENT0: 0x8CE0,
                DEPTH_ATTACHMENT: 0x8D00,
                STENCIL_ATTACHMENT: 0x8D20,
                DEPTH_STENCIL_ATTACHMENT: 0x821A,

                NONE: 0,

                FRAMEBUFFER_COMPLETE: 0x8CD5,
                FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6,
                FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7,
                FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9,
                FRAMEBUFFER_UNSUPPORTED: 0x8CDD,

                FRAMEBUFFER_BINDING: 0x8CA6,
                RENDERBUFFER_BINDING: 0x8CA7,
                MAX_RENDERBUFFER_SIZE: 0x84E8,

                INVALID_FRAMEBUFFER_OPERATION: 0x0506,

                /* WebGL-specific enums */
                UNPACK_FLIP_Y_WEBGL: 0x9240,
                UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
                CONTEXT_LOST_WEBGL: 0x9242,
                UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,
                BROWSER_DEFAULT_WEBGL: 0x9244,
            });


            /***/
}),
/* 12 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(20);

            /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
            
            Redistribution and use in source and binary forms, with or without modification,
            are permitted provided that the following conditions are met:
            
              * Redistributions of source code must retain the above copyright notice, this
                list of conditions and the following disclaimer.
              * Redistributions in binary form must reproduce the above copyright notice,
                this list of conditions and the following disclaimer in the documentation
                and/or other materials provided with the distribution.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
            ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
            DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
            ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
            (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
            LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
            ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
            (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
            SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */



            /**
             * @class 3 Dimensional Vector
             * @name vec3
             */

            var vec3 = {};

            /**
             * Creates a new, empty vec3
             *
             * @returns {vec3} a new 3D vector
             */
            vec3.create = function () {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](3);
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
                return out;
            };

            /**
             * Creates a new vec3 initialized with values from an existing vector
             *
             * @param {vec3} a vector to clone
             * @returns {vec3} a new 3D vector
             */
            vec3.clone = function (a) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](3);
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                return out;
            };

            /**
             * Creates a new vec3 initialized with the given values
             *
             * @param {Number} x X component
             * @param {Number} y Y component
             * @param {Number} z Z component
             * @returns {vec3} a new 3D vector
             */
            vec3.fromValues = function (x, y, z) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](3);
                out[0] = x;
                out[1] = y;
                out[2] = z;
                return out;
            };

            /**
             * Copy the values from one vec3 to another
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the source vector
             * @returns {vec3} out
             */
            vec3.copy = function (out, a) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                return out;
            };

            /**
             * Set the components of a vec3 to the given values
             *
             * @param {vec3} out the receiving vector
             * @param {Number} x X component
             * @param {Number} y Y component
             * @param {Number} z Z component
             * @returns {vec3} out
             */
            vec3.set = function (out, x, y, z) {
                out[0] = x;
                out[1] = y;
                out[2] = z;
                return out;
            };

            /**
             * Adds two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.add = function (out, a, b) {
                out[0] = a[0] + b[0];
                out[1] = a[1] + b[1];
                out[2] = a[2] + b[2];
                return out;
            };

            /**
             * Subtracts vector b from vector a
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.subtract = function (out, a, b) {
                out[0] = a[0] - b[0];
                out[1] = a[1] - b[1];
                out[2] = a[2] - b[2];
                return out;
            };

            /**
             * Alias for {@link vec3.subtract}
             * @function
             */
            vec3.sub = vec3.subtract;

            /**
             * Multiplies two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.multiply = function (out, a, b) {
                out[0] = a[0] * b[0];
                out[1] = a[1] * b[1];
                out[2] = a[2] * b[2];
                return out;
            };

            /**
             * Alias for {@link vec3.multiply}
             * @function
             */
            vec3.mul = vec3.multiply;

            /**
             * Divides two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.divide = function (out, a, b) {
                out[0] = a[0] / b[0];
                out[1] = a[1] / b[1];
                out[2] = a[2] / b[2];
                return out;
            };

            /**
             * Alias for {@link vec3.divide}
             * @function
             */
            vec3.div = vec3.divide;

            /**
             * Returns the minimum of two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.min = function (out, a, b) {
                out[0] = Math.min(a[0], b[0]);
                out[1] = Math.min(a[1], b[1]);
                out[2] = Math.min(a[2], b[2]);
                return out;
            };

            /**
             * Returns the maximum of two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.max = function (out, a, b) {
                out[0] = Math.max(a[0], b[0]);
                out[1] = Math.max(a[1], b[1]);
                out[2] = Math.max(a[2], b[2]);
                return out;
            };

            /**
             * Scales a vec3 by a scalar number
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the vector to scale
             * @param {Number} b amount to scale the vector by
             * @returns {vec3} out
             */
            vec3.scale = function (out, a, b) {
                out[0] = a[0] * b;
                out[1] = a[1] * b;
                out[2] = a[2] * b;
                return out;
            };

            /**
             * Adds two vec3's after scaling the second operand by a scalar value
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @param {Number} scale the amount to scale b by before adding
             * @returns {vec3} out
             */
            vec3.scaleAndAdd = function (out, a, b, scale) {
                out[0] = a[0] + (b[0] * scale);
                out[1] = a[1] + (b[1] * scale);
                out[2] = a[2] + (b[2] * scale);
                return out;
            };

            /**
             * Calculates the euclidian distance between two vec3's
             *
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {Number} distance between a and b
             */
            vec3.distance = function (a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2];
                return Math.sqrt(x * x + y * y + z * z);
            };

            /**
             * Alias for {@link vec3.distance}
             * @function
             */
            vec3.dist = vec3.distance;

            /**
             * Calculates the squared euclidian distance between two vec3's
             *
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {Number} squared distance between a and b
             */
            vec3.squaredDistance = function (a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2];
                return x * x + y * y + z * z;
            };

            /**
             * Alias for {@link vec3.squaredDistance}
             * @function
             */
            vec3.sqrDist = vec3.squaredDistance;

            /**
             * Calculates the length of a vec3
             *
             * @param {vec3} a vector to calculate length of
             * @returns {Number} length of a
             */
            vec3.length = function (a) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                return Math.sqrt(x * x + y * y + z * z);
            };

            /**
             * Alias for {@link vec3.length}
             * @function
             */
            vec3.len = vec3.length;

            /**
             * Calculates the squared length of a vec3
             *
             * @param {vec3} a vector to calculate squared length of
             * @returns {Number} squared length of a
             */
            vec3.squaredLength = function (a) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                return x * x + y * y + z * z;
            };

            /**
             * Alias for {@link vec3.squaredLength}
             * @function
             */
            vec3.sqrLen = vec3.squaredLength;

            /**
             * Negates the components of a vec3
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a vector to negate
             * @returns {vec3} out
             */
            vec3.negate = function (out, a) {
                out[0] = -a[0];
                out[1] = -a[1];
                out[2] = -a[2];
                return out;
            };

            /**
             * Returns the inverse of the components of a vec3
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a vector to invert
             * @returns {vec3} out
             */
            vec3.inverse = function (out, a) {
                out[0] = 1.0 / a[0];
                out[1] = 1.0 / a[1];
                out[2] = 1.0 / a[2];
                return out;
            };

            /**
             * Normalize a vec3
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a vector to normalize
             * @returns {vec3} out
             */
            vec3.normalize = function (out, a) {
                var x = a[0],
                    y = a[1],
                    z = a[2];
                var len = x * x + y * y + z * z;
                if (len > 0) {
                    //TODO: evaluate use of glm_invsqrt here?
                    len = 1 / Math.sqrt(len);
                    out[0] = a[0] * len;
                    out[1] = a[1] * len;
                    out[2] = a[2] * len;
                }
                return out;
            };

            /**
             * Calculates the dot product of two vec3's
             *
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {Number} dot product of a and b
             */
            vec3.dot = function (a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
            };

            /**
             * Computes the cross product of two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @returns {vec3} out
             */
            vec3.cross = function (out, a, b) {
                var ax = a[0], ay = a[1], az = a[2],
                    bx = b[0], by = b[1], bz = b[2];

                out[0] = ay * bz - az * by;
                out[1] = az * bx - ax * bz;
                out[2] = ax * by - ay * bx;
                return out;
            };

            /**
             * Performs a linear interpolation between two vec3's
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the first operand
             * @param {vec3} b the second operand
             * @param {Number} t interpolation amount between the two inputs
             * @returns {vec3} out
             */
            vec3.lerp = function (out, a, b, t) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2];
                out[0] = ax + t * (b[0] - ax);
                out[1] = ay + t * (b[1] - ay);
                out[2] = az + t * (b[2] - az);
                return out;
            };

            /**
             * Generates a random vector with the given scale
             *
             * @param {vec3} out the receiving vector
             * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
             * @returns {vec3} out
             */
            vec3.random = function (out, scale) {
                scale = scale || 1.0;

                var r = Object(__WEBPACK_IMPORTED_MODULE_0__common__["c" /* GLMAT_RANDOM */])() * 2.0 * Math.PI;
                var z = (Object(__WEBPACK_IMPORTED_MODULE_0__common__["c" /* GLMAT_RANDOM */])() * 2.0) - 1.0;
                var zScale = Math.sqrt(1.0 - z * z) * scale;

                out[0] = Math.cos(r) * zScale;
                out[1] = Math.sin(r) * zScale;
                out[2] = z * scale;
                return out;
            };

            /**
             * Transforms the vec3 with a mat4.
             * 4th vector component is implicitly '1'
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the vector to transform
             * @param {mat4} m matrix to transform with
             * @returns {vec3} out
             */
            vec3.transformMat4 = function (out, a, m) {
                var x = a[0], y = a[1], z = a[2],
                    w = m[3] * x + m[7] * y + m[11] * z + m[15];
                w = w || 1.0;
                out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
                out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
                out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
                return out;
            };

            /**
             * Transforms the vec3 with a mat3.
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the vector to transform
             * @param {mat4} m the 3x3 matrix to transform with
             * @returns {vec3} out
             */
            vec3.transformMat3 = function (out, a, m) {
                var x = a[0], y = a[1], z = a[2];
                out[0] = x * m[0] + y * m[3] + z * m[6];
                out[1] = x * m[1] + y * m[4] + z * m[7];
                out[2] = x * m[2] + y * m[5] + z * m[8];
                return out;
            };

            /**
             * Transforms the vec3 with a quat
             *
             * @param {vec3} out the receiving vector
             * @param {vec3} a the vector to transform
             * @param {quat} q quaternion to transform with
             * @returns {vec3} out
             */
            vec3.transformQuat = function (out, a, q) {
                // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

                var x = a[0], y = a[1], z = a[2],
                    qx = q[0], qy = q[1], qz = q[2], qw = q[3],

                    // calculate quat * vec
                    ix = qw * x + qy * z - qz * y,
                    iy = qw * y + qz * x - qx * z,
                    iz = qw * z + qx * y - qy * x,
                    iw = -qx * x - qy * y - qz * z;

                // calculate result * inverse quat
                out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
                return out;
            };

            /**
             * Rotate a 3D vector around the x-axis
             * @param {vec3} out The receiving vec3
             * @param {vec3} a The vec3 point to rotate
             * @param {vec3} b The origin of the rotation
             * @param {Number} c The angle of rotation
             * @returns {vec3} out
             */
            vec3.rotateX = function (out, a, b, c) {
                var p = [], r = [];
                //Translate point to the origin
                p[0] = a[0] - b[0];
                p[1] = a[1] - b[1];
                p[2] = a[2] - b[2];

                //perform rotation
                r[0] = p[0];
                r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
                r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

                //translate to correct position
                out[0] = r[0] + b[0];
                out[1] = r[1] + b[1];
                out[2] = r[2] + b[2];

                return out;
            };

            /**
             * Rotate a 3D vector around the y-axis
             * @param {vec3} out The receiving vec3
             * @param {vec3} a The vec3 point to rotate
             * @param {vec3} b The origin of the rotation
             * @param {Number} c The angle of rotation
             * @returns {vec3} out
             */
            vec3.rotateY = function (out, a, b, c) {
                var p = [], r = [];
                //Translate point to the origin
                p[0] = a[0] - b[0];
                p[1] = a[1] - b[1];
                p[2] = a[2] - b[2];

                //perform rotation
                r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
                r[1] = p[1];
                r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

                //translate to correct position
                out[0] = r[0] + b[0];
                out[1] = r[1] + b[1];
                out[2] = r[2] + b[2];

                return out;
            };

            /**
             * Rotate a 3D vector around the z-axis
             * @param {vec3} out The receiving vec3
             * @param {vec3} a The vec3 point to rotate
             * @param {vec3} b The origin of the rotation
             * @param {Number} c The angle of rotation
             * @returns {vec3} out
             */
            vec3.rotateZ = function (out, a, b, c) {
                var p = [], r = [];
                //Translate point to the origin
                p[0] = a[0] - b[0];
                p[1] = a[1] - b[1];
                p[2] = a[2] - b[2];

                //perform rotation
                r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
                r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
                r[2] = p[2];

                //translate to correct position
                out[0] = r[0] + b[0];
                out[1] = r[1] + b[1];
                out[2] = r[2] + b[2];

                return out;
            };

            /**
             * Perform some operation over an array of vec3s.
             *
             * @param {Array} a the array of vectors to iterate over
             * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
             * @param {Number} offset Number of elements to skip at the beginning of the array
             * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
             * @param {Function} fn Function to call for each vector in the array
             * @param {Object} [arg] additional argument to pass to fn
             * @returns {Array} a
             * @function
             */
            vec3.forEach = (function () {
                var vec = vec3.create();

                return function (a, stride, offset, count, fn, arg) {
                    var i, l;
                    if (!stride) {
                        stride = 3;
                    }

                    if (!offset) {
                        offset = 0;
                    }

                    if (count) {
                        l = Math.min((count * stride) + offset, a.length);
                    } else {
                        l = a.length;
                    }

                    for (i = offset; i < l; i += stride) {
                        vec[0] = a[i]; vec[1] = a[i + 1]; vec[2] = a[i + 2];
                        fn(vec, vec, arg);
                        a[i] = vec[0]; a[i + 1] = vec[1]; a[i + 2] = vec[2];
                    }

                    return a;
                };
            })();

            /**
             * Get the angle between two 3D vectors
             * @param {vec3} a The first operand
             * @param {vec3} b The second operand
             * @returns {Number} The angle in radians
             */
            vec3.angle = function (a, b) {

                var tempA = vec3.fromValues(a[0], a[1], a[2]);
                var tempB = vec3.fromValues(b[0], b[1], b[2]);

                vec3.normalize(tempA, tempA);
                vec3.normalize(tempB, tempB);

                var cosine = vec3.dot(tempA, tempB);

                if (cosine > 1.0) {
                    return 0;
                } else {
                    return Math.acos(cosine);
                }
            };

/* harmony default export */ __webpack_exports__["a"] = (vec3);

            /***/
}),
/* 13 */
/***/ (function (module, exports) {

            /**
             * @module zrender/core/util
             */
            // ç”¨äºŽå¤„ç†mergeæ—¶æ— æ³•éåŽ†Dateç­‰å¯¹è±¡çš„é—®é¢˜
            var BUILTIN_OBJECT = {
                '[object Function]': 1,
                '[object RegExp]': 1,
                '[object Date]': 1,
                '[object Error]': 1,
                '[object CanvasGradient]': 1,
                '[object CanvasPattern]': 1,
                // For node-canvas
                '[object Image]': 1,
                '[object Canvas]': 1
            };
            var TYPED_ARRAY = {
                '[object Int8Array]': 1,
                '[object Uint8Array]': 1,
                '[object Uint8ClampedArray]': 1,
                '[object Int16Array]': 1,
                '[object Uint16Array]': 1,
                '[object Int32Array]': 1,
                '[object Uint32Array]': 1,
                '[object Float32Array]': 1,
                '[object Float64Array]': 1
            };
            var objToString = Object.prototype.toString;
            var arrayProto = Array.prototype;
            var nativeForEach = arrayProto.forEach;
            var nativeFilter = arrayProto.filter;
            var nativeSlice = arrayProto.slice;
            var nativeMap = arrayProto.map;
            var nativeReduce = arrayProto.reduce; // Avoid assign to an exported variable, for transforming to cjs.

            var methods = {};

            function $override(name, fn) {
                // Clear ctx instance for different environment
                if (name === 'createCanvas') {
                    _ctx = null;
                }

                methods[name] = fn;
            }
            /**
             * Those data types can be cloned:
             *     Plain object, Array, TypedArray, number, string, null, undefined.
             * Those data types will be assgined using the orginal data:
             *     BUILTIN_OBJECT
             * Instance of user defined class will be cloned to a plain object, without
             * properties in prototype.
             * Other data types is not supported (not sure what will happen).
             *
             * Caution: do not support clone Date, for performance consideration.
             * (There might be a large number of date in `series.data`).
             * So date should not be modified in and out of echarts.
             *
             * @param {*} source
             * @return {*} new
             */


            function clone(source) {
                if (source == null || typeof source != 'object') {
                    return source;
                }

                var result = source;
                var typeStr = objToString.call(source);

                if (typeStr === '[object Array]') {
                    if (!isPrimitive(source)) {
                        result = [];

                        for (var i = 0, len = source.length; i < len; i++) {
                            result[i] = clone(source[i]);
                        }
                    }
                } else if (TYPED_ARRAY[typeStr]) {
                    if (!isPrimitive(source)) {
                        var Ctor = source.constructor;

                        if (source.constructor.from) {
                            result = Ctor.from(source);
                        } else {
                            result = new Ctor(source.length);

                            for (var i = 0, len = source.length; i < len; i++) {
                                result[i] = clone(source[i]);
                            }
                        }
                    }
                } else if (!BUILTIN_OBJECT[typeStr] && !isPrimitive(source) && !isDom(source)) {
                    result = {};

                    for (var key in source) {
                        if (source.hasOwnProperty(key)) {
                            result[key] = clone(source[key]);
                        }
                    }
                }

                return result;
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} target
             * @param {*} source
             * @param {boolean} [overwrite=false]
             */


            function merge(target, source, overwrite) {
                // We should escapse that source is string
                // and enter for ... in ...
                if (!isObject(source) || !isObject(target)) {
                    return overwrite ? clone(source) : target;
                }

                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        var targetProp = target[key];
                        var sourceProp = source[key];

                        if (isObject(sourceProp) && isObject(targetProp) && !isArray(sourceProp) && !isArray(targetProp) && !isDom(sourceProp) && !isDom(targetProp) && !isBuiltInObject(sourceProp) && !isBuiltInObject(targetProp) && !isPrimitive(sourceProp) && !isPrimitive(targetProp)) {
                            // å¦‚æžœéœ€è¦é€’å½’è¦†ç›–ï¼Œå°±é€’å½’è°ƒç”¨merge
                            merge(targetProp, sourceProp, overwrite);
                        } else if (overwrite || !(key in target)) {
                            // å¦åˆ™åªå¤„ç†overwriteä¸ºtrueï¼Œæˆ–è€…åœ¨ç›®æ ‡å¯¹è±¡ä¸­æ²¡æœ‰æ­¤å±žæ€§çš„æƒ…å†µ
                            // NOTEï¼Œåœ¨ target[key] ä¸å­˜åœ¨çš„æ—¶å€™ä¹Ÿæ˜¯ç›´æŽ¥è¦†ç›–
                            target[key] = clone(source[key], true);
                        }
                    }
                }

                return target;
            }
            /**
             * @param {Array} targetAndSources The first item is target, and the rests are source.
             * @param {boolean} [overwrite=false]
             * @return {*} target
             */


            function mergeAll(targetAndSources, overwrite) {
                var result = targetAndSources[0];

                for (var i = 1, len = targetAndSources.length; i < len; i++) {
                    result = merge(result, targetAndSources[i], overwrite);
                }

                return result;
            }
            /**
             * @param {*} target
             * @param {*} source
             * @memberOf module:zrender/core/util
             */


            function extend(target, source) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }

                return target;
            }
            /**
             * @param {*} target
             * @param {*} source
             * @param {boolean} [overlay=false]
             * @memberOf module:zrender/core/util
             */


            function defaults(target, source, overlay) {
                for (var key in source) {
                    if (source.hasOwnProperty(key) && (overlay ? source[key] != null : target[key] == null)) {
                        target[key] = source[key];
                    }
                }

                return target;
            }

            var createCanvas = function () {
                return methods.createCanvas();
            };

            methods.createCanvas = function () {
                return document.createElement('canvas');
            }; // FIXME


            var _ctx;

            function getContext() {
                if (!_ctx) {
                    // Use util.createCanvas instead of createCanvas
                    // because createCanvas may be overwritten in different environment
                    _ctx = createCanvas().getContext('2d');
                }

                return _ctx;
            }
            /**
             * æŸ¥è¯¢æ•°ç»„ä¸­å…ƒç´ çš„index
             * @memberOf module:zrender/core/util
             */


            function indexOf(array, value) {
                if (array) {
                    if (array.indexOf) {
                        return array.indexOf(value);
                    }

                    for (var i = 0, len = array.length; i < len; i++) {
                        if (array[i] === value) {
                            return i;
                        }
                    }
                }

                return -1;
            }
            /**
             * æž„é€ ç±»ç»§æ‰¿å…³ç³»
             *
             * @memberOf module:zrender/core/util
             * @param {Function} clazz æºç±»
             * @param {Function} baseClazz åŸºç±»
             */


            function inherits(clazz, baseClazz) {
                var clazzPrototype = clazz.prototype;

                function F() { }

                F.prototype = baseClazz.prototype;
                clazz.prototype = new F();

                for (var prop in clazzPrototype) {
                    clazz.prototype[prop] = clazzPrototype[prop];
                }

                clazz.prototype.constructor = clazz;
                clazz.superClass = baseClazz;
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {Object|Function} target
             * @param {Object|Function} sorce
             * @param {boolean} overlay
             */


            function mixin(target, source, overlay) {
                target = 'prototype' in target ? target.prototype : target;
                source = 'prototype' in source ? source.prototype : source;
                defaults(target, source, overlay);
            }
            /**
             * Consider typed array.
             * @param {Array|TypedArray} data
             */


            function isArrayLike(data) {
                if (!data) {
                    return;
                }

                if (typeof data == 'string') {
                    return false;
                }

                return typeof data.length == 'number';
            }
            /**
             * æ•°ç»„æˆ–å¯¹è±¡éåŽ†
             * @memberOf module:zrender/core/util
             * @param {Object|Array} obj
             * @param {Function} cb
             * @param {*} [context]
             */


            function each(obj, cb, context) {
                if (!(obj && cb)) {
                    return;
                }

                if (obj.forEach && obj.forEach === nativeForEach) {
                    obj.forEach(cb, context);
                } else if (obj.length === +obj.length) {
                    for (var i = 0, len = obj.length; i < len; i++) {
                        cb.call(context, obj[i], i, obj);
                    }
                } else {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            cb.call(context, obj[key], key, obj);
                        }
                    }
                }
            }
            /**
             * æ•°ç»„æ˜ å°„
             * @memberOf module:zrender/core/util
             * @param {Array} obj
             * @param {Function} cb
             * @param {*} [context]
             * @return {Array}
             */


            function map(obj, cb, context) {
                if (!(obj && cb)) {
                    return;
                }

                if (obj.map && obj.map === nativeMap) {
                    return obj.map(cb, context);
                } else {
                    var result = [];

                    for (var i = 0, len = obj.length; i < len; i++) {
                        result.push(cb.call(context, obj[i], i, obj));
                    }

                    return result;
                }
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {Array} obj
             * @param {Function} cb
             * @param {Object} [memo]
             * @param {*} [context]
             * @return {Array}
             */


            function reduce(obj, cb, memo, context) {
                if (!(obj && cb)) {
                    return;
                }

                if (obj.reduce && obj.reduce === nativeReduce) {
                    return obj.reduce(cb, memo, context);
                } else {
                    for (var i = 0, len = obj.length; i < len; i++) {
                        memo = cb.call(context, memo, obj[i], i, obj);
                    }

                    return memo;
                }
            }
            /**
             * æ•°ç»„è¿‡æ»¤
             * @memberOf module:zrender/core/util
             * @param {Array} obj
             * @param {Function} cb
             * @param {*} [context]
             * @return {Array}
             */


            function filter(obj, cb, context) {
                if (!(obj && cb)) {
                    return;
                }

                if (obj.filter && obj.filter === nativeFilter) {
                    return obj.filter(cb, context);
                } else {
                    var result = [];

                    for (var i = 0, len = obj.length; i < len; i++) {
                        if (cb.call(context, obj[i], i, obj)) {
                            result.push(obj[i]);
                        }
                    }

                    return result;
                }
            }
            /**
             * æ•°ç»„é¡¹æŸ¥æ‰¾
             * @memberOf module:zrender/core/util
             * @param {Array} obj
             * @param {Function} cb
             * @param {*} [context]
             * @return {*}
             */


            function find(obj, cb, context) {
                if (!(obj && cb)) {
                    return;
                }

                for (var i = 0, len = obj.length; i < len; i++) {
                    if (cb.call(context, obj[i], i, obj)) {
                        return obj[i];
                    }
                }
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {Function} func
             * @param {*} context
             * @return {Function}
             */


            function bind(func, context) {
                var args = nativeSlice.call(arguments, 2);
                return function () {
                    return func.apply(context, args.concat(nativeSlice.call(arguments)));
                };
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {Function} func
             * @return {Function}
             */


            function curry(func) {
                var args = nativeSlice.call(arguments, 1);
                return function () {
                    return func.apply(this, args.concat(nativeSlice.call(arguments)));
                };
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isArray(value) {
                return objToString.call(value) === '[object Array]';
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isFunction(value) {
                return typeof value === 'function';
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isString(value) {
                return objToString.call(value) === '[object String]';
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isObject(value) {
                // Avoid a V8 JIT bug in Chrome 19-20.
                // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
                var type = typeof value;
                return type === 'function' || !!value && type == 'object';
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isBuiltInObject(value) {
                return !!BUILTIN_OBJECT[objToString.call(value)];
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isTypedArray(value) {
                return !!TYPED_ARRAY[objToString.call(value)];
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {*} value
             * @return {boolean}
             */


            function isDom(value) {
                return typeof value === 'object' && typeof value.nodeType === 'number' && typeof value.ownerDocument === 'object';
            }
            /**
             * Whether is exactly NaN. Notice isNaN('a') returns true.
             * @param {*} value
             * @return {boolean}
             */


            function eqNaN(value) {
                return value !== value;
            }
            /**
             * If value1 is not null, then return value1, otherwise judget rest of values.
             * Low performance.
             * @memberOf module:zrender/core/util
             * @return {*} Final value
             */


            function retrieve(values) {
                for (var i = 0, len = arguments.length; i < len; i++) {
                    if (arguments[i] != null) {
                        return arguments[i];
                    }
                }
            }

            function retrieve2(value0, value1) {
                return value0 != null ? value0 : value1;
            }

            function retrieve3(value0, value1, value2) {
                return value0 != null ? value0 : value1 != null ? value1 : value2;
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {Array} arr
             * @param {number} startIndex
             * @param {number} endIndex
             * @return {Array}
             */


            function slice() {
                return Function.call.apply(nativeSlice, arguments);
            }
            /**
             * Normalize css liked array configuration
             * e.g.
             *  3 => [3, 3, 3, 3]
             *  [4, 2] => [4, 2, 4, 2]
             *  [4, 3, 2] => [4, 3, 2, 3]
             * @param {number|Array.<number>} val
             * @return {Array.<number>}
             */


            function normalizeCssArray(val) {
                if (typeof val === 'number') {
                    return [val, val, val, val];
                }

                var len = val.length;

                if (len === 2) {
                    // vertical | horizontal
                    return [val[0], val[1], val[0], val[1]];
                } else if (len === 3) {
                    // top | horizontal | bottom
                    return [val[0], val[1], val[2], val[1]];
                }

                return val;
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {boolean} condition
             * @param {string} message
             */


            function assert(condition, message) {
                if (!condition) {
                    throw new Error(message);
                }
            }
            /**
             * @memberOf module:zrender/core/util
             * @param {string} str string to be trimed
             * @return {string} trimed string
             */


            function trim(str) {
                if (str == null) {
                    return null;
                } else if (typeof str.trim === 'function') {
                    return str.trim();
                } else {
                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                }
            }

            var primitiveKey = '__ec_primitive__';
            /**
             * Set an object as primitive to be ignored traversing children in clone or merge
             */

            function setAsPrimitive(obj) {
                obj[primitiveKey] = true;
            }

            function isPrimitive(obj) {
                return obj[primitiveKey];
            }
            /**
             * @constructor
             * @param {Object} obj Only apply `ownProperty`.
             */


            function HashMap(obj) {
                var isArr = isArray(obj);
                var thisMap = this;
                obj instanceof HashMap ? obj.each(visit) : obj && each(obj, visit);

                function visit(value, key) {
                    isArr ? thisMap.set(value, key) : thisMap.set(key, value);
                }
            } // Add prefix to avoid conflict with Object.prototype.


            HashMap.prototype = {
                constructor: HashMap,
                // Do not provide `has` method to avoid defining what is `has`.
                // (We usually treat `null` and `undefined` as the same, different
                // from ES6 Map).
                get: function (key) {
                    return this.hasOwnProperty(key) ? this[key] : null;
                },
                set: function (key, value) {
                    // Comparing with invocation chaining, `return value` is more commonly
                    // used in this case: `var someVal = map.set('a', genVal());`
                    return this[key] = value;
                },
                // Although util.each can be performed on this hashMap directly, user
                // should not use the exposed keys, who are prefixed.
                each: function (cb, context) {
                    context !== void 0 && (cb = bind(cb, context));

                    for (var key in this) {
                        this.hasOwnProperty(key) && cb(this[key], key);
                    }
                },
                // Do not use this method if performance sensitive.
                removeKey: function (key) {
                    delete this[key];
                }
            };

            function createHashMap(obj) {
                return new HashMap(obj);
            }

            function concatArray(a, b) {
                var newArray = new a.constructor(a.length + b.length);

                for (var i = 0; i < a.length; i++) {
                    newArray[i] = a[i];
                }

                var offset = a.length;

                for (i = 0; i < b.length; i++) {
                    newArray[i + offset] = b[i];
                }

                return newArray;
            }

            function noop() { }

            exports.$override = $override;
            exports.clone = clone;
            exports.merge = merge;
            exports.mergeAll = mergeAll;
            exports.extend = extend;
            exports.defaults = defaults;
            exports.createCanvas = createCanvas;
            exports.getContext = getContext;
            exports.indexOf = indexOf;
            exports.inherits = inherits;
            exports.mixin = mixin;
            exports.isArrayLike = isArrayLike;
            exports.each = each;
            exports.map = map;
            exports.reduce = reduce;
            exports.filter = filter;
            exports.find = find;
            exports.bind = bind;
            exports.curry = curry;
            exports.isArray = isArray;
            exports.isFunction = isFunction;
            exports.isString = isString;
            exports.isObject = isObject;
            exports.isBuiltInObject = isBuiltInObject;
            exports.isTypedArray = isTypedArray;
            exports.isDom = isDom;
            exports.eqNaN = eqNaN;
            exports.retrieve = retrieve;
            exports.retrieve2 = retrieve2;
            exports.retrieve3 = retrieve3;
            exports.slice = slice;
            exports.normalizeCssArray = normalizeCssArray;
            exports.assert = assert;
            exports.trim = trim;
            exports.setAsPrimitive = setAsPrimitive;
            exports.isPrimitive = isPrimitive;
            exports.createHashMap = createHashMap;
            exports.concatArray = concatArray;
            exports.noop = noop;

            /***/
}),
/* 14 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* WEBPACK VAR INJECTION */(function (global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(112);


                var supportWebGL;

                var vendor = {};

                /**
                 * If support WebGL
                 * @return {boolean}
                 */
                vendor.supportWebGL = function () {
                    if (supportWebGL == null) {
                        try {
                            var canvas = document.createElement('canvas');
                            var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                            if (!gl) {
                                throw new Error();
                            }
                        }
                        catch (e) {
                            supportWebGL = false;
                        }

                    }
                    return supportWebGL;
                };

                vendor.Int8Array = typeof Int8Array === 'undefined' ? Array : Int8Array;

                vendor.Uint8Array = typeof Uint8Array === 'undefined' ? Array : Uint8Array;

                vendor.Uint16Array = typeof Uint16Array === 'undefined' ? Array : Uint16Array;

                vendor.Uint32Array = typeof Uint32Array === 'undefined' ? Array : Uint32Array;

                vendor.Int16Array = typeof Int16Array === 'undefined' ? Array : Int16Array;

                vendor.Float32Array = typeof Float32Array === 'undefined' ? Array : Float32Array;

                vendor.Float64Array = typeof Float64Array === 'undefined' ? Array : Float64Array;

                var g = {};
                if (typeof window !== 'undefined') {
                    g = window;
                }
                else if (typeof global !== 'undefined') {
                    g = global;
                }
                vendor.requestAnimationFrame = g.requestAnimationFrame
                    || g.msRequestAnimationFrame
                    || g.mozRequestAnimationFrame
                    || g.webkitRequestAnimationFrame
                    || function (func) { setTimeout(func, 16); };

                vendor.createCanvas = function () {
                    return document.createElement('canvas');
                };

                vendor.createImage = function () {
                    return new g.Image();
                };

                vendor.request = {
                    get: __WEBPACK_IMPORTED_MODULE_0__request__["a" /* default */].get
                };

/* harmony default export */ __webpack_exports__["a"] = (vendor);

                /* WEBPACK VAR INJECTION */
}.call(__webpack_exports__, __webpack_require__(68)))

            /***/
}),
/* 15 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_vendor__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__glmatrix_mat4__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_BoundingBox__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GeometryBase__ = __webpack_require__(118);






            var vec3Create = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create;
            var vec3Add = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].add;
            var vec3Set = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set;

            var Attribute = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].Attribute;

            /**
             * Geometry in ClayGL contains vertex attributes of mesh. These vertex attributes will be finally provided to the {@link clay.Shader}.
             * Different {@link clay.Shader} needs different attributes. Here is a list of attributes used in the builtin shaders.
             *
             * + position: `clay.basic`, `clay.lambert`, `clay.standard`
             * + texcoord0: `clay.basic`, `clay.lambert`, `clay.standard`
             * + color: `clay.basic`, `clay.lambert`, `clay.standard`
             * + weight: `clay.basic`, `clay.lambert`, `clay.standard`
             * + joint: `clay.basic`, `clay.lambert`, `clay.standard`
             * + normal: `clay.lambert`, `clay.standard`
             * + tangent: `clay.standard`
             *
             * #### Create a procedural geometry
             *
             * ClayGL provides a couple of builtin procedural geometries. Inlcuding:
             *
             *  + {@link clay.geometry.Cube}
             *  + {@link clay.geometry.Sphere}
             *  + {@link clay.geometry.Plane}
             *  + {@link clay.geometry.Cylinder}
             *  + {@link clay.geometry.Cone}
             *  + {@link clay.geometry.ParametricSurface}
             *
             * It's simple to create a basic geometry with these classes.
             *
            ```js
            var sphere = new clay.geometry.Sphere({
                radius: 2
            });
            ```
             *
             * #### Create the geometry data by yourself
             *
             * Usually the vertex attributes data are created by the {@link clay.loader.GLTF} or procedural geometries like {@link clay.geometry.Sphere}.
             * Besides these, you can create the data manually. Here is a simple example to create a triangle.
            ```js
            var TRIANGLE_POSITIONS = [
                [-0.5, -0.5, 0],
                [0.5, -0.5, 0],
                [0, 0.5, 0]
            ];
            var geometry = new clay.StaticGeometryBase();
            // Add triangle vertices to position attribute.
            geometry.attributes.position.fromArray(TRIANGLE_POSITIONS);
            ```
             * Then you can use the utility methods like `generateVertexNormals`, `generateTangents` to create the remaining necessary attributes.
             *
             *
             * #### Use with custom shaders
             *
             * If you wan't to write custom shaders. Don't forget to add SEMANTICS to these attributes. For example
             *
             ```glsl
            uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
            uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
            uniform mat4 world : WORLD;
            
            attribute vec3 position : POSITION;
            attribute vec2 texcoord : TEXCOORD_0;
            attribute vec3 normal : NORMAL;
            ```
             * These `POSITION`, `TEXCOORD_0`, `NORMAL` are SEMANTICS which will map the attributes in shader to the attributes in the GeometryBase
             *
             * Available attributes SEMANTICS includes `POSITION`, `TEXCOORD_0`, `TEXCOORD_1` `NORMAL`, `TANGENT`, `COLOR`, `WEIGHT`, `JOINT`.
             *
             *
             * @constructor clay.Geometry
             * @extends clay.GeometryBase
             */
            var Geometry = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].extend(function () {
                return /** @lends clay.Geometry# */ {
                    /**
                     * Attributes of geometry. Including:
                     *  + `position`
                     *  + `texcoord0`
                     *  + `texcoord1`
                     *  + `normal`
                     *  + `tangent`
                     *  + `color`
                     *  + `weight`
                     *  + `joint`
                     *  + `barycentric`
                     *
                     * @type {Object.<string, clay.Geometry.Attribute>}
                     */
                    attributes: {
                        position: new Attribute('position', 'float', 3, 'POSITION'),
                        texcoord0: new Attribute('texcoord0', 'float', 2, 'TEXCOORD_0'),
                        texcoord1: new Attribute('texcoord1', 'float', 2, 'TEXCOORD_1'),
                        normal: new Attribute('normal', 'float', 3, 'NORMAL'),
                        tangent: new Attribute('tangent', 'float', 4, 'TANGENT'),
                        color: new Attribute('color', 'float', 4, 'COLOR'),
                        // Skinning attributes
                        // Each vertex can be bind to 4 bones, because the
                        // sum of weights is 1, so the weights is stored in vec3 and the last
                        // can be calculated by 1-w.x-w.y-w.z
                        weight: new Attribute('weight', 'float', 3, 'WEIGHT'),
                        joint: new Attribute('joint', 'float', 4, 'JOINT'),
                        // For wireframe display
                        // http://codeflow.org/entries/2012/aug/02/easy-wireframe-display-with-barycentric-coordinates/
                        barycentric: new Attribute('barycentric', 'float', 3, null),
                    },
                    /**
                     * Calculated bounding box of geometry.
                     * @type {clay.BoundingBox}
                     */
                    boundingBox: null
                };
            },
                /** @lends clay.Geometry.prototype */
                {

                    mainAttribute: 'position',

                    /**
                     * Update boundingBox of Geometry
                     */
                    updateBoundingBox: function () {
                        var bbox = this.boundingBox;
                        if (!bbox) {
                            bbox = this.boundingBox = new __WEBPACK_IMPORTED_MODULE_3__math_BoundingBox__["a" /* default */]();
                        }
                        var posArr = this.attributes.position.value;
                        if (posArr && posArr.length) {
                            var min = bbox.min;
                            var max = bbox.max;
                            var minArr = min.array;
                            var maxArr = max.array;
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(minArr, posArr[0], posArr[1], posArr[2]);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set(maxArr, posArr[0], posArr[1], posArr[2]);
                            for (var i = 3; i < posArr.length;) {
                                var x = posArr[i++];
                                var y = posArr[i++];
                                var z = posArr[i++];
                                if (x < minArr[0]) { minArr[0] = x; }
                                if (y < minArr[1]) { minArr[1] = y; }
                                if (z < minArr[2]) { minArr[2] = z; }

                                if (x > maxArr[0]) { maxArr[0] = x; }
                                if (y > maxArr[1]) { maxArr[1] = y; }
                                if (z > maxArr[2]) { maxArr[2] = z; }
                            }
                            min._dirty = true;
                            max._dirty = true;
                        }
                    },

                    /**
                     * Generate normals per vertex.
                     */
                    generateVertexNormals: function () {
                        if (!this.vertexCount) {
                            return;
                        }

                        var indices = this.indices;
                        var attributes = this.attributes;
                        var positions = attributes.position.value;
                        var normals = attributes.normal.value;

                        if (!normals || normals.length !== positions.length) {
                            normals = attributes.normal.value = new __WEBPACK_IMPORTED_MODULE_0__core_vendor__["a" /* default */].Float32Array(positions.length);
                        }
                        else {
                            // Reset
                            for (var i = 0; i < normals.length; i++) {
                                normals[i] = 0;
                            }
                        }

                        var p1 = vec3Create();
                        var p2 = vec3Create();
                        var p3 = vec3Create();

                        var v21 = vec3Create();
                        var v32 = vec3Create();

                        var n = vec3Create();

                        var len = indices ? indices.length : this.vertexCount;
                        var i1, i2, i3;
                        for (var f = 0; f < len;) {
                            if (indices) {
                                i1 = indices[f++];
                                i2 = indices[f++];
                                i3 = indices[f++];
                            }
                            else {
                                i1 = f++;
                                i2 = f++;
                                i3 = f++;
                            }

                            vec3Set(p1, positions[i1 * 3], positions[i1 * 3 + 1], positions[i1 * 3 + 2]);
                            vec3Set(p2, positions[i2 * 3], positions[i2 * 3 + 1], positions[i2 * 3 + 2]);
                            vec3Set(p3, positions[i3 * 3], positions[i3 * 3 + 1], positions[i3 * 3 + 2]);

                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].sub(v21, p1, p2);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].sub(v32, p2, p3);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].cross(n, v21, v32);
                            // Already be weighted by the triangle area
                            for (var i = 0; i < 3; i++) {
                                normals[i1 * 3 + i] = normals[i1 * 3 + i] + n[i];
                                normals[i2 * 3 + i] = normals[i2 * 3 + i] + n[i];
                                normals[i3 * 3 + i] = normals[i3 * 3 + i] + n[i];
                            }
                        }

                        for (var i = 0; i < normals.length;) {
                            vec3Set(n, normals[i], normals[i + 1], normals[i + 2]);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].normalize(n, n);
                            normals[i++] = n[0];
                            normals[i++] = n[1];
                            normals[i++] = n[2];
                        }
                        this.dirty();
                    },

                    /**
                     * Generate normals per face.
                     */
                    generateFaceNormals: function () {
                        if (!this.vertexCount) {
                            return;
                        }

                        if (!this.isUniqueVertex()) {
                            this.generateUniqueVertex();
                        }

                        var indices = this.indices;
                        var attributes = this.attributes;
                        var positions = attributes.position.value;
                        var normals = attributes.normal.value;

                        var p1 = vec3Create();
                        var p2 = vec3Create();
                        var p3 = vec3Create();

                        var v21 = vec3Create();
                        var v32 = vec3Create();
                        var n = vec3Create();

                        if (!normals) {
                            normals = attributes.normal.value = new Float32Array(positions.length);
                        }
                        var len = indices ? indices.length : this.vertexCount;
                        var i1, i2, i3;
                        for (var f = 0; f < len;) {
                            if (indices) {
                                i1 = indices[f++];
                                i2 = indices[f++];
                                i3 = indices[f++];
                            }
                            else {
                                i1 = f++;
                                i2 = f++;
                                i3 = f++;
                            }

                            vec3Set(p1, positions[i1 * 3], positions[i1 * 3 + 1], positions[i1 * 3 + 2]);
                            vec3Set(p2, positions[i2 * 3], positions[i2 * 3 + 1], positions[i2 * 3 + 2]);
                            vec3Set(p3, positions[i3 * 3], positions[i3 * 3 + 1], positions[i3 * 3 + 2]);

                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].sub(v21, p1, p2);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].sub(v32, p2, p3);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].cross(n, v21, v32);

                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].normalize(n, n);

                            for (var i = 0; i < 3; i++) {
                                normals[i1 * 3 + i] = n[i];
                                normals[i2 * 3 + i] = n[i];
                                normals[i3 * 3 + i] = n[i];
                            }
                        }
                        this.dirty();
                    },

                    /**
                     * Generate tangents attributes.
                     */
                    generateTangents: function () {
                        if (!this.vertexCount) {
                            return;
                        }

                        var nVertex = this.vertexCount;
                        var attributes = this.attributes;
                        if (!attributes.tangent.value) {
                            attributes.tangent.value = new Float32Array(nVertex * 4);
                        }
                        var texcoords = attributes.texcoord0.value;
                        var positions = attributes.position.value;
                        var tangents = attributes.tangent.value;
                        var normals = attributes.normal.value;

                        if (!texcoords) {
                            console.warn('Geometry without texcoords can\'t generate tangents.');
                            return;
                        }

                        var tan1 = [];
                        var tan2 = [];
                        for (var i = 0; i < nVertex; i++) {
                            tan1[i] = [0.0, 0.0, 0.0];
                            tan2[i] = [0.0, 0.0, 0.0];
                        }

                        var sdir = [0.0, 0.0, 0.0];
                        var tdir = [0.0, 0.0, 0.0];
                        var indices = this.indices;

                        var len = indices ? indices.length : this.vertexCount;
                        var i1, i2, i3;
                        for (var i = 0; i < len;) {
                            if (indices) {
                                i1 = indices[i++];
                                i2 = indices[i++];
                                i3 = indices[i++];
                            }
                            else {
                                i1 = i++;
                                i2 = i++;
                                i3 = i++;
                            }

                            var st1s = texcoords[i1 * 2],
                                st2s = texcoords[i2 * 2],
                                st3s = texcoords[i3 * 2],
                                st1t = texcoords[i1 * 2 + 1],
                                st2t = texcoords[i2 * 2 + 1],
                                st3t = texcoords[i3 * 2 + 1],

                                p1x = positions[i1 * 3],
                                p2x = positions[i2 * 3],
                                p3x = positions[i3 * 3],
                                p1y = positions[i1 * 3 + 1],
                                p2y = positions[i2 * 3 + 1],
                                p3y = positions[i3 * 3 + 1],
                                p1z = positions[i1 * 3 + 2],
                                p2z = positions[i2 * 3 + 2],
                                p3z = positions[i3 * 3 + 2];

                            var x1 = p2x - p1x,
                                x2 = p3x - p1x,
                                y1 = p2y - p1y,
                                y2 = p3y - p1y,
                                z1 = p2z - p1z,
                                z2 = p3z - p1z;

                            var s1 = st2s - st1s,
                                s2 = st3s - st1s,
                                t1 = st2t - st1t,
                                t2 = st3t - st1t;

                            var r = 1.0 / (s1 * t2 - t1 * s2);
                            sdir[0] = (t2 * x1 - t1 * x2) * r;
                            sdir[1] = (t2 * y1 - t1 * y2) * r;
                            sdir[2] = (t2 * z1 - t1 * z2) * r;

                            tdir[0] = (s1 * x2 - s2 * x1) * r;
                            tdir[1] = (s1 * y2 - s2 * y1) * r;
                            tdir[2] = (s1 * z2 - s2 * z1) * r;

                            vec3Add(tan1[i1], tan1[i1], sdir);
                            vec3Add(tan1[i2], tan1[i2], sdir);
                            vec3Add(tan1[i3], tan1[i3], sdir);
                            vec3Add(tan2[i1], tan2[i1], tdir);
                            vec3Add(tan2[i2], tan2[i2], tdir);
                            vec3Add(tan2[i3], tan2[i3], tdir);
                        }
                        var tmp = vec3Create();
                        var nCrossT = vec3Create();
                        var n = vec3Create();
                        for (var i = 0; i < nVertex; i++) {
                            n[0] = normals[i * 3];
                            n[1] = normals[i * 3 + 1];
                            n[2] = normals[i * 3 + 2];
                            var t = tan1[i];

                            // Gram-Schmidt orthogonalize
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].scale(tmp, n, __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].dot(n, t));
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].sub(tmp, t, tmp);
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].normalize(tmp, tmp);
                            // Calculate handedness.
                            __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].cross(nCrossT, n, t);
                            tangents[i * 4] = tmp[0];
                            tangents[i * 4 + 1] = tmp[1];
                            tangents[i * 4 + 2] = tmp[2];
                            // PENDING can config ?
                            tangents[i * 4 + 3] = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].dot(nCrossT, tan2[i]) < 0.0 ? -1.0 : 1.0;
                        }
                        this.dirty();
                    },

                    /**
                     * If vertices are not shared by different indices.
                     */
                    isUniqueVertex: function () {
                        if (this.isUseIndices()) {
                            return this.vertexCount === this.indices.length;
                        }
                        else {
                            return true;
                        }
                    },
                    /**
                     * Create a unique vertex for each index.
                     */
                    generateUniqueVertex: function () {
                        if (!this.vertexCount || !this.indices) {
                            return;
                        }

                        if (this.indices.length > 0xffff) {
                            this.indices = new __WEBPACK_IMPORTED_MODULE_0__core_vendor__["a" /* default */].Uint32Array(this.indices);
                        }

                        var attributes = this.attributes;
                        var indices = this.indices;

                        var attributeNameList = this.getEnabledAttributes();

                        var oldAttrValues = {};
                        for (var a = 0; a < attributeNameList.length; a++) {
                            var name = attributeNameList[a];
                            oldAttrValues[name] = attributes[name].value;
                            attributes[name].init(this.indices.length);
                        }

                        var cursor = 0;
                        for (var i = 0; i < indices.length; i++) {
                            var ii = indices[i];
                            for (var a = 0; a < attributeNameList.length; a++) {
                                var name = attributeNameList[a];
                                var array = attributes[name].value;
                                var size = attributes[name].size;

                                for (var k = 0; k < size; k++) {
                                    array[cursor * size + k] = oldAttrValues[name][ii * size + k];
                                }
                            }
                            indices[i] = cursor;
                            cursor++;
                        }

                        this.dirty();
                    },

                    /**
                     * Generate barycentric coordinates for wireframe draw.
                     */
                    generateBarycentric: function () {
                        if (!this.vertexCount) {
                            return;
                        }

                        if (!this.isUniqueVertex()) {
                            this.generateUniqueVertex();
                        }

                        var attributes = this.attributes;
                        var array = attributes.barycentric.value;
                        var indices = this.indices;
                        // Already existed;
                        if (array && array.length === indices.length * 3) {
                            return;
                        }
                        array = attributes.barycentric.value = new Float32Array(indices.length * 3);

                        for (var i = 0; i < (indices ? indices.length : this.vertexCount / 3);) {
                            for (var j = 0; j < 3; j++) {
                                var ii = indices ? indices[i++] : (i * 3 + j);
                                array[ii * 3 + j] = 1;
                            }
                        }
                        this.dirty();
                    },

                    /**
                     * Apply transform to geometry attributes.
                     * @param {clay.Matrix4} matrix
                     */
                    applyTransform: function (matrix) {

                        var attributes = this.attributes;
                        var positions = attributes.position.value;
                        var normals = attributes.normal.value;
                        var tangents = attributes.tangent.value;

                        matrix = matrix.array;
                        // Normal Matrix
                        var inverseTransposeMatrix = __WEBPACK_IMPORTED_MODULE_2__glmatrix_mat4__["a" /* default */].create();
                        __WEBPACK_IMPORTED_MODULE_2__glmatrix_mat4__["a" /* default */].invert(inverseTransposeMatrix, matrix);
                        __WEBPACK_IMPORTED_MODULE_2__glmatrix_mat4__["a" /* default */].transpose(inverseTransposeMatrix, inverseTransposeMatrix);

                        var vec3TransformMat4 = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].transformMat4;
                        var vec3ForEach = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].forEach;
                        vec3ForEach(positions, 3, 0, null, vec3TransformMat4, matrix);
                        if (normals) {
                            vec3ForEach(normals, 3, 0, null, vec3TransformMat4, inverseTransposeMatrix);
                        }
                        if (tangents) {
                            vec3ForEach(tangents, 4, 0, null, vec3TransformMat4, inverseTransposeMatrix);
                        }

                        if (this.boundingBox) {
                            this.updateBoundingBox();
                        }
                    },
                    /**
                     * Dispose geometry data in GL context.
                     * @param {clay.Renderer} renderer
                     */
                    dispose: function (renderer) {

                        var cache = this._cache;

                        cache.use(renderer.__uid__);
                        var chunks = cache.get('chunks');
                        if (chunks) {
                            for (var c = 0; c < chunks.length; c++) {
                                var chunk = chunks[c];

                                for (var k = 0; k < chunk.attributeBuffers.length; k++) {
                                    var attribs = chunk.attributeBuffers[k];
                                    renderer.gl.deleteBuffer(attribs.buffer);
                                }

                                if (chunk.indicesBuffer) {
                                    renderer.gl.deleteBuffer(chunk.indicesBuffer.buffer);
                                }
                            }
                        }
                        if (this.__vaoCache) {
                            var vaoExt = renderer.getGLExtension('OES_vertex_array_object');
                            for (var id in this.__vaoCache) {
                                var vao = this.__vaoCache[id].vao;
                                if (vao) {
                                    vaoExt.deleteVertexArrayOES(vao);
                                }
                            }
                        }
                        this.__vaoCache = {};
                        cache.deleteContext(renderer.__uid__);
                    }

                });

            Geometry.STATIC_DRAW = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].STATIC_DRAW;
            Geometry.DYNAMIC_DRAW = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].DYNAMIC_DRAW;
            Geometry.STREAM_DRAW = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].STREAM_DRAW;

            Geometry.AttributeBuffer = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].AttributeBuffer;
            Geometry.IndicesBuffer = __WEBPACK_IMPORTED_MODULE_4__GeometryBase__["a" /* default */].IndicesBuffer;

            Geometry.Attribute = Attribute;

/* harmony default export */ __webpack_exports__["a"] = (Geometry);


            /***/
}),
/* 16 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_Orthographic__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_Plane__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Mesh__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_glenum__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shader_source_compositor_vertex_glsl_js__ = __webpack_require__(126);









            __WEBPACK_IMPORTED_MODULE_3__Shader__["a" /* default */]['import'](__WEBPACK_IMPORTED_MODULE_7__shader_source_compositor_vertex_glsl_js__["a" /* default */]);

            var planeGeo = new __WEBPACK_IMPORTED_MODULE_2__geometry_Plane__["a" /* default */]();
            var mesh = new __WEBPACK_IMPORTED_MODULE_5__Mesh__["a" /* default */]({
                geometry: planeGeo,
                frustumCulling: false
            });
            var camera = new __WEBPACK_IMPORTED_MODULE_1__camera_Orthographic__["a" /* default */]();

            /**
             * @constructor clay.compositor.Pass
             * @extends clay.core.Base
             */
            var Pass = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend(function () {
                return /** @lends clay.compositor.Pass# */ {
                    /**
                     * Fragment shader string
                     * @type {string}
                     */
                    // PENDING shader or fragment ?
                    fragment: '',

                    /**
                     * @type {Object}
                     */
                    outputs: null,

                    /**
                     * @type {clay.Material}
                     */
                    material: null,

                    /**
                     * @type {Boolean}
                     */
                    blendWithPrevious: false,

                    /**
                     * @type {Boolean}
                     */
                    clearColor: false,

                    /**
                     * @type {Boolean}
                     */
                    clearDepth: true
                };
            }, function () {

                var shader = new __WEBPACK_IMPORTED_MODULE_3__Shader__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3__Shader__["a" /* default */].source('clay.compositor.vertex'), this.fragment);
                var material = new __WEBPACK_IMPORTED_MODULE_4__Material__["a" /* default */]({
                    shader: shader
                });
                material.enableTexturesAll();

                this.material = material;

            },
                /** @lends clay.compositor.Pass.prototype */
                {
                    /**
                     * @param {string} name
                     * @param {} value
                     */
                    setUniform: function (name, value) {
                        this.material.setUniform(name, value);
                    },
                    /**
                     * @param  {string} name
                     * @return {}
                     */
                    getUniform: function (name) {
                        var uniform = this.material.uniforms[name];
                        if (uniform) {
                            return uniform.value;
                        }
                    },
                    /**
                     * @param  {clay.Texture} texture
                     * @param  {number} attachment
                     */
                    attachOutput: function (texture, attachment) {
                        if (!this.outputs) {
                            this.outputs = {};
                        }
                        attachment = attachment || __WEBPACK_IMPORTED_MODULE_6__core_glenum__["a" /* default */].COLOR_ATTACHMENT0;
                        this.outputs[attachment] = texture;
                    },
                    /**
                     * @param  {clay.Texture} texture
                     */
                    detachOutput: function (texture) {
                        for (var attachment in this.outputs) {
                            if (this.outputs[attachment] === texture) {
                                this.outputs[attachment] = null;
                            }
                        }
                    },

                    bind: function (renderer, frameBuffer) {

                        if (this.outputs) {
                            for (var attachment in this.outputs) {
                                var texture = this.outputs[attachment];
                                if (texture) {
                                    frameBuffer.attach(texture, attachment);
                                }
                            }
                        }

                        if (frameBuffer) {
                            frameBuffer.bind(renderer);
                        }
                    },

                    unbind: function (renderer, frameBuffer) {
                        frameBuffer.unbind(renderer);
                    },
                    /**
                     * @param  {clay.Renderer} renderer
                     * @param  {clay.FrameBuffer} [frameBuffer]
                     */
                    render: function (renderer, frameBuffer) {

                        var _gl = renderer.gl;

                        if (frameBuffer) {
                            this.bind(renderer, frameBuffer);
                            // MRT Support in chrome
                            // https://www.khronos.org/registry/webgl/sdk/tests/conformance/extensions/ext-draw-buffers.html
                            var ext = renderer.getGLExtension('EXT_draw_buffers');
                            if (ext && this.outputs) {
                                var bufs = [];
                                for (var attachment in this.outputs) {
                                    attachment = +attachment;
                                    if (attachment >= _gl.COLOR_ATTACHMENT0 && attachment <= _gl.COLOR_ATTACHMENT0 + 8) {
                                        bufs.push(attachment);
                                    }
                                }
                                ext.drawBuffersEXT(bufs);
                            }
                        }

                        this.trigger('beforerender', this, renderer);

                        // FIXME Don't clear in each pass in default, let the color overwrite the buffer
                        // FIXME pixels may be discard
                        var clearBit = this.clearDepth ? _gl.DEPTH_BUFFER_BIT : 0;
                        _gl.depthMask(true);
                        if (this.clearColor) {
                            clearBit = clearBit | _gl.COLOR_BUFFER_BIT;
                            _gl.colorMask(true, true, true, true);
                            var cc = this.clearColor;
                            if (Array.isArray(cc)) {
                                _gl.clearColor(cc[0], cc[1], cc[2], cc[3]);
                            }
                        }
                        _gl.clear(clearBit);

                        if (this.blendWithPrevious) {
                            // Blend with previous rendered scene in the final output
                            // FIXME Configure blend.
                            // FIXME It will cause screen blinkï¼Ÿ
                            _gl.enable(_gl.BLEND);
                            this.material.transparent = true;
                        }
                        else {
                            _gl.disable(_gl.BLEND);
                            this.material.transparent = false;
                        }

                        this.renderQuad(renderer);

                        this.trigger('afterrender', this, renderer);

                        if (frameBuffer) {
                            this.unbind(renderer, frameBuffer);
                        }
                    },

                    /**
                     * Simply do quad rendering
                     */
                    renderQuad: function (renderer) {
                        mesh.material = this.material;
                        renderer.renderPass([mesh], camera);
                    },

                    /**
                     * @param  {clay.Renderer} renderer
                     */
                    dispose: function (renderer) { }
                });

/* harmony default export */ __webpack_exports__["a"] = (Pass);


            /***/
}),
/* 17 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (seriesType, ecModel, api) {
                return {
                    seriesType: seriesType,
                    reset: function (seriesModel, ecModel) {
                        var data = seriesModel.getData();
                        var opacityAccessPath = seriesModel.visualColorAccessPath.split('.');
                        opacityAccessPath[opacityAccessPath.length - 1] = 'opacity';

                        var opacity = seriesModel.get(opacityAccessPath);

                        data.setVisual('opacity', opacity == null ? 1 : opacity);

                        function dataEach(data, idx) {
                            var itemModel = data.getItemModel(idx);
                            var opacity = itemModel.get(opacityAccessPath, true);
                            if (opacity != null) {
                                data.setItemVisual(idx, 'opacity', opacity);
                            }
                        }

                        return {
                            dataEach: data.hasItemOption ? dataEach : null
                        };
                    }
                };
            });

            /***/
}),
/* 18 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__ = __webpack_require__(12);



            var vec3Set = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].set;
            var vec3Copy = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].copy;

            /**
             * Axis aligned bounding box
             * @constructor
             * @alias clay.BoundingBox
             * @param {clay.Vector3} [min]
             * @param {clay.Vector3} [max]
             */
            var BoundingBox = function (min, max) {

                /**
                 * Minimum coords of bounding box
                 * @type {clay.Vector3}
                 */
                this.min = min || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* default */](Infinity, Infinity, Infinity);

                /**
                 * Maximum coords of bounding box
                 * @type {clay.Vector3}
                 */
                this.max = max || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* default */](-Infinity, -Infinity, -Infinity);

                this.vertices = null;
            };

            BoundingBox.prototype = {

                constructor: BoundingBox,
                /**
                 * Update min and max coords from a vertices array
                 * @param  {array} vertices
                 */
                updateFromVertices: function (vertices) {
                    if (vertices.length > 0) {
                        var min = this.min;
                        var max = this.max;
                        var minArr = min.array;
                        var maxArr = max.array;
                        vec3Copy(minArr, vertices[0]);
                        vec3Copy(maxArr, vertices[0]);
                        for (var i = 1; i < vertices.length; i++) {
                            var vertex = vertices[i];

                            if (vertex[0] < minArr[0]) { minArr[0] = vertex[0]; }
                            if (vertex[1] < minArr[1]) { minArr[1] = vertex[1]; }
                            if (vertex[2] < minArr[2]) { minArr[2] = vertex[2]; }

                            if (vertex[0] > maxArr[0]) { maxArr[0] = vertex[0]; }
                            if (vertex[1] > maxArr[1]) { maxArr[1] = vertex[1]; }
                            if (vertex[2] > maxArr[2]) { maxArr[2] = vertex[2]; }
                        }
                        min._dirty = true;
                        max._dirty = true;
                    }
                },

                /**
                 * Union operation with another bounding box
                 * @param  {clay.BoundingBox} bbox
                 */
                union: function (bbox) {
                    var min = this.min;
                    var max = this.max;
                    __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].min(min.array, min.array, bbox.min.array);
                    __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].max(max.array, max.array, bbox.max.array);
                    min._dirty = true;
                    max._dirty = true;
                    return this;
                },

                /**
                 * Intersection operation with another bounding box
                 * @param  {clay.BoundingBox} bbox
                 */
                intersection: function (bbox) {
                    var min = this.min;
                    var max = this.max;
                    __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].max(min.array, min.array, bbox.min.array);
                    __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].min(max.array, max.array, bbox.max.array);
                    min._dirty = true;
                    max._dirty = true;
                    return this;
                },

                /**
                 * If intersect with another bounding box
                 * @param  {clay.BoundingBox} bbox
                 * @return {boolean}
                 */
                intersectBoundingBox: function (bbox) {
                    var _min = this.min.array;
                    var _max = this.max.array;

                    var _min2 = bbox.min.array;
                    var _max2 = bbox.max.array;

                    return !(_min[0] > _max2[0] || _min[1] > _max2[1] || _min[2] > _max2[2]
                        || _max[0] < _min2[0] || _max[1] < _min2[1] || _max[2] < _min2[2]);
                },

                /**
                 * If contain another bounding box entirely
                 * @param  {clay.BoundingBox} bbox
                 * @return {boolean}
                 */
                containBoundingBox: function (bbox) {

                    var _min = this.min.array;
                    var _max = this.max.array;

                    var _min2 = bbox.min.array;
                    var _max2 = bbox.max.array;

                    return _min[0] <= _min2[0] && _min[1] <= _min2[1] && _min[2] <= _min2[2]
                        && _max[0] >= _max2[0] && _max[1] >= _max2[1] && _max[2] >= _max2[2];
                },

                /**
                 * If contain point entirely
                 * @param  {clay.Vector3} point
                 * @return {boolean}
                 */
                containPoint: function (p) {
                    var _min = this.min.array;
                    var _max = this.max.array;

                    var _p = p.array;

                    return _min[0] <= _p[0] && _min[1] <= _p[1] && _min[2] <= _p[2]
                        && _max[0] >= _p[0] && _max[1] >= _p[1] && _max[2] >= _p[2];
                },

                /**
                 * If bounding box is finite
                 */
                isFinite: function () {
                    var _min = this.min.array;
                    var _max = this.max.array;
                    return isFinite(_min[0]) && isFinite(_min[1]) && isFinite(_min[2])
                        && isFinite(_max[0]) && isFinite(_max[1]) && isFinite(_max[2]);
                },

                /**
                 * Apply an affine transform matrix to the bounding box
                 * @param  {clay.Matrix4} matrix
                 */
                applyTransform: function (matrix) {
                    this.transformFrom(this, matrix);
                },

                /**
                 * Get from another bounding box and an affine transform matrix.
                 * @param {clay.BoundingBox} source
                 * @param {clay.Matrix4} matrix
                 */
                transformFrom: (function () {
                    // http://dev.theomader.com/transform-bounding-boxes/
                    var xa = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var xb = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var ya = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var yb = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var za = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();
                    var zb = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].create();

                    return function (source, matrix) {
                        var min = source.min.array;
                        var max = source.max.array;

                        var m = matrix.array;

                        xa[0] = m[0] * min[0]; xa[1] = m[1] * min[0]; xa[2] = m[2] * min[0];
                        xb[0] = m[0] * max[0]; xb[1] = m[1] * max[0]; xb[2] = m[2] * max[0];

                        ya[0] = m[4] * min[1]; ya[1] = m[5] * min[1]; ya[2] = m[6] * min[1];
                        yb[0] = m[4] * max[1]; yb[1] = m[5] * max[1]; yb[2] = m[6] * max[1];

                        za[0] = m[8] * min[2]; za[1] = m[9] * min[2]; za[2] = m[10] * min[2];
                        zb[0] = m[8] * max[2]; zb[1] = m[9] * max[2]; zb[2] = m[10] * max[2];

                        min = this.min.array;
                        max = this.max.array;
                        min[0] = Math.min(xa[0], xb[0]) + Math.min(ya[0], yb[0]) + Math.min(za[0], zb[0]) + m[12];
                        min[1] = Math.min(xa[1], xb[1]) + Math.min(ya[1], yb[1]) + Math.min(za[1], zb[1]) + m[13];
                        min[2] = Math.min(xa[2], xb[2]) + Math.min(ya[2], yb[2]) + Math.min(za[2], zb[2]) + m[14];

                        max[0] = Math.max(xa[0], xb[0]) + Math.max(ya[0], yb[0]) + Math.max(za[0], zb[0]) + m[12];
                        max[1] = Math.max(xa[1], xb[1]) + Math.max(ya[1], yb[1]) + Math.max(za[1], zb[1]) + m[13];
                        max[2] = Math.max(xa[2], xb[2]) + Math.max(ya[2], yb[2]) + Math.max(za[2], zb[2]) + m[14];

                        this.min._dirty = true;
                        this.max._dirty = true;

                        return this;
                    };
                })(),

                /**
                 * Apply a projection matrix to the bounding box
                 * @param  {clay.Matrix4} matrix
                 */
                applyProjection: function (matrix) {
                    var min = this.min.array;
                    var max = this.max.array;

                    var m = matrix.array;
                    // min in min z
                    var v10 = min[0];
                    var v11 = min[1];
                    var v12 = min[2];
                    // max in min z
                    var v20 = max[0];
                    var v21 = max[1];
                    var v22 = min[2];
                    // max in max z
                    var v30 = max[0];
                    var v31 = max[1];
                    var v32 = max[2];

                    if (m[15] === 1) {  // Orthographic projection
                        min[0] = m[0] * v10 + m[12];
                        min[1] = m[5] * v11 + m[13];
                        max[2] = m[10] * v12 + m[14];

                        max[0] = m[0] * v30 + m[12];
                        max[1] = m[5] * v31 + m[13];
                        min[2] = m[10] * v32 + m[14];
                    }
                    else {
                        var w = -1 / v12;
                        min[0] = m[0] * v10 * w;
                        min[1] = m[5] * v11 * w;
                        max[2] = (m[10] * v12 + m[14]) * w;

                        w = -1 / v22;
                        max[0] = m[0] * v20 * w;
                        max[1] = m[5] * v21 * w;

                        w = -1 / v32;
                        min[2] = (m[10] * v32 + m[14]) * w;
                    }
                    this.min._dirty = true;
                    this.max._dirty = true;

                    return this;
                },

                updateVertices: function () {
                    var vertices = this.vertices;
                    if (!vertices) {
                        // Cube vertices
                        vertices = [];
                        for (var i = 0; i < 8; i++) {
                            vertices[i] = __WEBPACK_IMPORTED_MODULE_1__glmatrix_vec3__["a" /* default */].fromValues(0, 0, 0);
                        }

                        /**
                         * Eight coords of bounding box
                         * @type {Float32Array[]}
                         */
                        this.vertices = vertices;
                    }
                    var min = this.min.array;
                    var max = this.max.array;
                    //--- min z
                    // min x
                    vec3Set(vertices[0], min[0], min[1], min[2]);
                    vec3Set(vertices[1], min[0], max[1], min[2]);
                    // max x
                    vec3Set(vertices[2], max[0], min[1], min[2]);
                    vec3Set(vertices[3], max[0], max[1], min[2]);

                    //-- max z
                    vec3Set(vertices[4], min[0], min[1], max[2]);
                    vec3Set(vertices[5], min[0], max[1], max[2]);
                    vec3Set(vertices[6], max[0], min[1], max[2]);
                    vec3Set(vertices[7], max[0], max[1], max[2]);

                    return this;
                },
                /**
                 * Copy values from another bounding box
                 * @param  {clay.BoundingBox} bbox
                 */
                copy: function (bbox) {
                    var min = this.min;
                    var max = this.max;
                    vec3Copy(min.array, bbox.min.array);
                    vec3Copy(max.array, bbox.max.array);
                    min._dirty = true;
                    max._dirty = true;
                    return this;
                },

                /**
                 * Clone a new bounding box
                 * @return {clay.BoundingBox}
                 */
                clone: function () {
                    var boundingBox = new BoundingBox();
                    boundingBox.copy(this);
                    return boundingBox;
                }
            };

/* harmony default export */ __webpack_exports__["a"] = (BoundingBox);


            /***/
}),
/* 19 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_color__ = __webpack_require__(113);



            var parseColor = __WEBPACK_IMPORTED_MODULE_2__core_color__["a" /* default */].parseToFloat;

            var programKeyCache = {};

            function getDefineCode(defines) {
                var defineKeys = Object.keys(defines);
                defineKeys.sort();
                var defineStr = [];
                // Custom Defines
                for (var i = 0; i < defineKeys.length; i++) {
                    var key = defineKeys[i];
                    var value = defines[key];
                    if (value === null) {
                        defineStr.push(key);
                    }
                    else {
                        defineStr.push(key + ' ' + value.toString());
                    }
                }
                return defineStr.join('\n');
            }

            function getProgramKey(vertexDefines, fragmentDefines, enabledTextures) {
                enabledTextures.sort();
                var defineStr = [];
                for (var i = 0; i < enabledTextures.length; i++) {
                    var symbol = enabledTextures[i];
                    defineStr.push(symbol);
                }
                var key = getDefineCode(vertexDefines) + '\n'
                    + getDefineCode(fragmentDefines) + '\n'
                    + defineStr.join('\n');

                if (programKeyCache[key]) {
                    return programKeyCache[key];
                }

                var id = __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].genGUID();
                programKeyCache[key] = id;
                return id;
            }

            /**
             * Material defines the appearance of mesh surface, like `color`, `roughness`, `metalness`, etc.
             * It contains a {@link clay.Shader} and corresponding uniforms.
             *
             * Here is a basic example to create a standard material
            ```js
            var material = new clay.Material({
                shader: new clay.Shader(
                    clay.Shader.source('clay.vertex'),
                    clay.Shader.source('clay.fragment')
                )
            });
            ```
             * @constructor clay.Material
             * @extends clay.core.Base
             */
            var Material = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend(function () {
                return /** @lends clay.Material# */ {
                    /**
                     * @type {string}
                     */
                    name: '',

                    /**
                     * @type {Object}
                     */
                    // uniforms: null,

                    /**
                     * @type {clay.Shader}
                     */
                    // shader: null,

                    /**
                     * @type {boolean}
                     */
                    depthTest: true,

                    /**
                     * @type {boolean}
                     */
                    depthMask: true,

                    /**
                     * @type {boolean}
                     */
                    transparent: false,
                    /**
                     * Blend func is a callback function when the material
                     * have custom blending
                     * The gl context will be the only argument passed in tho the
                     * blend function
                     * Detail of blend function in WebGL:
                     * http://www.khronos.org/registry/gles/specs/2.0/es_full_spec_2.0.25.pdf
                     *
                     * Example :
                     * function(_gl) {
                     *  _gl.blendEquation(_gl.FUNC_ADD);
                     *  _gl.blendFunc(_gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA);
                     * }
                     */
                    blend: null,

                    /**
                     * If update texture status automatically.
                     */
                    autoUpdateTextureStatus: true,

                    uniforms: {},
                    vertexDefines: {},
                    fragmentDefines: {},
                    _textureStatus: {},

                    // shadowTransparentMap : null

                    // PENDING enable the uniform that only used in shader.
                    _enabledUniforms: null,
                };
            }, function () {
                if (!this.name) {
                    this.name = 'MATERIAL_' + this.__uid__;
                }

                if (this.shader) {
                    // Keep status, mainly preset uniforms, vertexDefines and fragmentDefines
                    this.attachShader(this.shader, true);
                }
            },
                /** @lends clay.Material.prototype */
                {
                    precision: 'highp',

                    /**
                     * Set material uniform
                     * @example
                     *  mat.setUniform('color', [1, 1, 1, 1]);
                     * @param {string} symbol
                     * @param {number|array|clay.Texture|ArrayBufferView} value
                     */
                    setUniform: function (symbol, value) {
                        if (value === undefined) {
                            console.warn('Uniform value "' + symbol + '" is undefined');
                        }
                        var uniform = this.uniforms[symbol];
                        if (uniform) {

                            if (typeof value === 'string') {
                                // Try to parse as a color. Invalid color string will return null.
                                value = parseColor(value) || value;
                            }

                            uniform.value = value;

                            if (this.autoUpdateTextureStatus && uniform.type === 't') {
                                if (value) {
                                    this.enableTexture(symbol);
                                }
                                else {
                                    this.disableTexture(symbol);
                                }
                            }
                        }
                    },

                    /**
                     * @param {Object} obj
                     */
                    setUniforms: function (obj) {
                        for (var key in obj) {
                            var val = obj[key];
                            this.setUniform(key, val);
                        }
                    },

                    /**
                     * @param  {string}  symbol
                     * @return {boolean}
                     */
                    isUniformEnabled: function (symbol) {
                        return this._enabledUniforms.indexOf(symbol) >= 0;
                    },

                    getEnabledUniforms: function () {
                        return this._enabledUniforms;
                    },
                    getTextureUniforms: function () {
                        return this._textureUniforms;
                    },

                    /**
                     * Alias of setUniform and setUniforms
                     * @param {object|string} symbol
                     * @param {number|array|clay.Texture|ArrayBufferView} [value]
                     */
                    set: function (symbol, value) {
                        if (typeof (symbol) === 'object') {
                            for (var key in symbol) {
                                var val = symbol[key];
                                this.setUniform(key, val);
                            }
                        }
                        else {
                            this.setUniform(symbol, value);
                        }
                    },
                    /**
                     * Get uniform value
                     * @param  {string} symbol
                     * @return {number|array|clay.Texture|ArrayBufferView}
                     */
                    get: function (symbol) {
                        var uniform = this.uniforms[symbol];
                        if (uniform) {
                            return uniform.value;
                        }
                    },
                    /**
                     * Attach a shader instance
                     * @param  {clay.Shader} shader
                     * @param  {boolean} keepStatus If try to keep uniform and texture
                     */
                    attachShader: function (shader, keepStatus) {
                        var originalUniforms = this.uniforms;

                        // Ignore if uniform can use in shader.
                        this.uniforms = shader.createUniforms();
                        this.shader = shader;

                        var uniforms = this.uniforms;
                        this._enabledUniforms = Object.keys(uniforms);
                        // Make sure uniforms are set in same order to avoid texture slot wrong
                        this._enabledUniforms.sort();
                        this._textureUniforms = this._enabledUniforms.filter(function (uniformName) {
                            var type = this.uniforms[uniformName].type;
                            return type === 't' || type === 'tv';
                        }, this);

                        var originalVertexDefines = this.vertexDefines;
                        var originalFragmentDefines = this.fragmentDefines;

                        this.vertexDefines = __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].clone(shader.vertexDefines);
                        this.fragmentDefines = __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].clone(shader.fragmentDefines);

                        if (keepStatus) {
                            for (var symbol in originalUniforms) {
                                if (uniforms[symbol]) {
                                    uniforms[symbol].value = originalUniforms[symbol].value;
                                }
                            }

                            __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].defaults(this.vertexDefines, originalVertexDefines);
                            __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].defaults(this.fragmentDefines, originalFragmentDefines);
                        }

                        var textureStatus = {};
                        for (var key in shader.textures) {
                            textureStatus[key] = {
                                shaderType: shader.textures[key].shaderType,
                                type: shader.textures[key].type,
                                enabled: (keepStatus && this._textureStatus[key]) ? this._textureStatus[key].enabled : false
                            };
                        }

                        this._textureStatus = textureStatus;

                        this._programKey = '';
                    },

                    /**
                     * Clone a new material and keep uniforms, shader will not be cloned
                     * @return {clay.Material}
                     */
                    clone: function () {
                        var material = new this.constructor({
                            name: this.name,
                            shader: this.shader
                        });
                        for (var symbol in this.uniforms) {
                            material.uniforms[symbol].value = this.uniforms[symbol].value;
                        }
                        material.depthTest = this.depthTest;
                        material.depthMask = this.depthMask;
                        material.transparent = this.transparent;
                        material.blend = this.blend;

                        material.vertexDefines = __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].clone(this.vertexDefines);
                        material.fragmentDefines = __WEBPACK_IMPORTED_MODULE_1__core_util__["a" /* default */].clone(this.fragmentDefines);
                        material.enableTexture(this.getEnabledTextures());
                        material.precision = this.precision;

                        return material;
                    },

                    /**
                     * Add a #define macro in shader code
                     * @param  {string} shaderType Can be vertex, fragment or both
                     * @param  {string} symbol
                     * @param  {number} [val]
                     */
                    define: function (shaderType, symbol, val) {
                        var vertexDefines = this.vertexDefines;
                        var fragmentDefines = this.fragmentDefines;
                        if (shaderType !== 'vertex' && shaderType !== 'fragment' && shaderType !== 'both'
                            && arguments.length < 3
                        ) {
                            // shaderType default to be 'both'
                            val = symbol;
                            symbol = shaderType;
                            shaderType = 'both';
                        }
                        val = val != null ? val : null;
                        if (shaderType === 'vertex' || shaderType === 'both') {
                            if (vertexDefines[symbol] !== val) {
                                vertexDefines[symbol] = val;
                                // Mark as dirty
                                this._programKey = '';
                            }
                        }
                        if (shaderType === 'fragment' || shaderType === 'both') {
                            if (fragmentDefines[symbol] !== val) {
                                fragmentDefines[symbol] = val;
                                if (shaderType !== 'both') {
                                    this._programKey = '';
                                }
                            }
                        }
                    },

                    /**
                     * Remove a #define macro in shader code
                     * @param  {string} shaderType Can be vertex, fragment or both
                     * @param  {string} symbol
                     */
                    undefine: function (shaderType, symbol) {
                        if (shaderType !== 'vertex' && shaderType !== 'fragment' && shaderType !== 'both'
                            && arguments.length < 2
                        ) {
                            // shaderType default to be 'both'
                            symbol = shaderType;
                            shaderType = 'both';
                        }
                        if (shaderType === 'vertex' || shaderType === 'both') {
                            if (this.isDefined('vertex', symbol)) {
                                delete this.vertexDefines[symbol];
                                // Mark as dirty
                                this._programKey = '';
                            }
                        }
                        if (shaderType === 'fragment' || shaderType === 'both') {
                            if (this.isDefined('fragment', symbol)) {
                                delete this.fragmentDefines[symbol];
                                if (shaderType !== 'both') {
                                    this._programKey = '';
                                }
                            }
                        }
                    },

                    /**
                     * If macro is defined in shader.
                     * @param  {string} shaderType Can be vertex, fragment or both
                     * @param  {string} symbol
                     */
                    isDefined: function (shaderType, symbol) {
                        // PENDING hasOwnProperty ?
                        switch (shaderType) {
                            case 'vertex':
                                return this.vertexDefines[symbol] !== undefined;
                            case 'fragment':
                                return this.fragmentDefines[symbol] !== undefined;
                        }
                    },
                    /**
                     * Get macro value defined in shader.
                     * @param  {string} shaderType Can be vertex, fragment or both
                     * @param  {string} symbol
                     */
                    getDefine: function (shaderType, symbol) {
                        switch (shaderType) {
                            case 'vertex':
                                return this.vertexDefines[symbol];
                            case 'fragment':
                                return this.fragmentDefines[symbol];
                        }
                    },
                    /**
                     * Enable a texture, actually it will add a #define macro in the shader code
                     * For example, if texture symbol is diffuseMap, it will add a line `#define DIFFUSEMAP_ENABLED` in the shader code
                     * @param  {string} symbol
                     */
                    enableTexture: function (symbol) {
                        if (Array.isArray(symbol)) {
                            for (var i = 0; i < symbol.length; i++) {
                                this.enableTexture(symbol[i]);
                            }
                            return;
                        }

                        var status = this._textureStatus[symbol];
                        if (status) {
                            var isEnabled = status.enabled;
                            if (!isEnabled) {
                                status.enabled = true;
                                this._programKey = '';
                            }
                        }
                    },
                    /**
                     * Enable all textures used in the shader
                     */
                    enableTexturesAll: function () {
                        var textureStatus = this._textureStatus;
                        for (var symbol in textureStatus) {
                            textureStatus[symbol].enabled = true;
                        }

                        this._programKey = '';
                    },
                    /**
                     * Disable a texture, it remove a #define macro in the shader
                     * @param  {string} symbol
                     */
                    disableTexture: function (symbol) {
                        if (Array.isArray(symbol)) {
                            for (var i = 0; i < symbol.length; i++) {
                                this.disableTexture(symbol[i]);
                            }
                            return;
                        }

                        var status = this._textureStatus[symbol];
                        if (status) {
                            var isDisabled = !status.enabled;
                            if (!isDisabled) {
                                status.enabled = false;
                                this._programKey = '';
                            }
                        }
                    },
                    /**
                     * Disable all textures used in the shader
                     */
                    disableTexturesAll: function () {
                        var textureStatus = this._textureStatus;
                        for (var symbol in textureStatus) {
                            textureStatus[symbol].enabled = false;
                        }

                        this._programKey = '';
                    },
                    /**
                     * If texture of given type is enabled.
                     * @param  {string}  symbol
                     * @return {boolean}
                     */
                    isTextureEnabled: function (symbol) {
                        var textureStatus = this._textureStatus;
                        return !!textureStatus[symbol]
                            && textureStatus[symbol].enabled;
                    },

                    /**
                     * Get all enabled textures
                     * @return {string[]}
                     */
                    getEnabledTextures: function () {
                        var enabledTextures = [];
                        var textureStatus = this._textureStatus;
                        for (var symbol in textureStatus) {
                            if (textureStatus[symbol].enabled) {
                                enabledTextures.push(symbol);
                            }
                        }
                        return enabledTextures;
                    },

                    /**
                     * Mark defines are updated.
                     */
                    dirtyDefines: function () {
                        this._programKey = '';
                    },

                    getProgramKey: function () {
                        if (!this._programKey) {
                            this._programKey = getProgramKey(
                                this.vertexDefines, this.fragmentDefines, this.getEnabledTextures()
                            );
                        }
                        return this._programKey;
                    }
                });

/* harmony default export */ __webpack_exports__["a"] = (Material);


            /***/
}),
/* 20 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () { return GLMAT_EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return GLMAT_ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () { return GLMAT_RANDOM; });

            var GLMAT_EPSILON = 0.000001;

            // Use Array instead of Float32Array. It seems to be much faster and higher precision.
            var GLMAT_ARRAY_TYPE = Array;
            // if(!GLMAT_ARRAY_TYPE) {
            //     GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
            // }

            var GLMAT_RANDOM = Math.random;


            /***/
}),
/* 21 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(20);

            /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
            
            Redistribution and use in source and binary forms, with or without modification,
            are permitted provided that the following conditions are met:
            
              * Redistributions of source code must retain the above copyright notice, this
                list of conditions and the following disclaimer.
              * Redistributions in binary form must reproduce the above copyright notice,
                this list of conditions and the following disclaimer in the documentation
                and/or other materials provided with the distribution.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
            ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
            DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
            ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
            (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
            LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
            ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
            (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
            SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */



            /**
             * @class 4x4 Matrix
             * @name mat4
             */

            var mat4 = {};

            /**
             * Creates a new identity mat4
             *
             * @returns {mat4} a new 4x4 matrix
             */
            mat4.create = function () {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](16);
                out[0] = 1;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = 1;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[10] = 1;
                out[11] = 0;
                out[12] = 0;
                out[13] = 0;
                out[14] = 0;
                out[15] = 1;
                return out;
            };

            /**
             * Creates a new mat4 initialized with values from an existing matrix
             *
             * @param {mat4} a matrix to clone
             * @returns {mat4} a new 4x4 matrix
             */
            mat4.clone = function (a) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](16);
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[8] = a[8];
                out[9] = a[9];
                out[10] = a[10];
                out[11] = a[11];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
                return out;
            };

            /**
             * Copy the values from one mat4 to another
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the source matrix
             * @returns {mat4} out
             */
            mat4.copy = function (out, a) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[8] = a[8];
                out[9] = a[9];
                out[10] = a[10];
                out[11] = a[11];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
                return out;
            };

            /**
             * Set a mat4 to the identity matrix
             *
             * @param {mat4} out the receiving matrix
             * @returns {mat4} out
             */
            mat4.identity = function (out) {
                out[0] = 1;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = 1;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[10] = 1;
                out[11] = 0;
                out[12] = 0;
                out[13] = 0;
                out[14] = 0;
                out[15] = 1;
                return out;
            };

            /**
             * Transpose the values of a mat4
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the source matrix
             * @returns {mat4} out
             */
            mat4.transpose = function (out, a) {
                // If we are transposing ourselves we can skip a few steps but have to cache some values
                if (out === a) {
                    var a01 = a[1], a02 = a[2], a03 = a[3],
                        a12 = a[6], a13 = a[7],
                        a23 = a[11];

                    out[1] = a[4];
                    out[2] = a[8];
                    out[3] = a[12];
                    out[4] = a01;
                    out[6] = a[9];
                    out[7] = a[13];
                    out[8] = a02;
                    out[9] = a12;
                    out[11] = a[14];
                    out[12] = a03;
                    out[13] = a13;
                    out[14] = a23;
                } else {
                    out[0] = a[0];
                    out[1] = a[4];
                    out[2] = a[8];
                    out[3] = a[12];
                    out[4] = a[1];
                    out[5] = a[5];
                    out[6] = a[9];
                    out[7] = a[13];
                    out[8] = a[2];
                    out[9] = a[6];
                    out[10] = a[10];
                    out[11] = a[14];
                    out[12] = a[3];
                    out[13] = a[7];
                    out[14] = a[11];
                    out[15] = a[15];
                }

                return out;
            };

            /**
             * Inverts a mat4
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the source matrix
             * @returns {mat4} out
             */
            mat4.invert = function (out, a) {
                var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
                    a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
                    a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
                    a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

                    b00 = a00 * a11 - a01 * a10,
                    b01 = a00 * a12 - a02 * a10,
                    b02 = a00 * a13 - a03 * a10,
                    b03 = a01 * a12 - a02 * a11,
                    b04 = a01 * a13 - a03 * a11,
                    b05 = a02 * a13 - a03 * a12,
                    b06 = a20 * a31 - a21 * a30,
                    b07 = a20 * a32 - a22 * a30,
                    b08 = a20 * a33 - a23 * a30,
                    b09 = a21 * a32 - a22 * a31,
                    b10 = a21 * a33 - a23 * a31,
                    b11 = a22 * a33 - a23 * a32,

                    // Calculate the determinant
                    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                    return null;
                }
                det = 1.0 / det;

                out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

                return out;
            };

            /**
             * Calculates the adjugate of a mat4
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the source matrix
             * @returns {mat4} out
             */
            mat4.adjoint = function (out, a) {
                var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
                    a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
                    a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
                    a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

                out[0] = (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
                out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
                out[2] = (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
                out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
                out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
                out[5] = (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
                out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
                out[7] = (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
                out[8] = (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
                out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
                out[10] = (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
                out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
                out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
                out[13] = (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
                out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
                out[15] = (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
                return out;
            };

            /**
             * Calculates the determinant of a mat4
             *
             * @param {mat4} a the source matrix
             * @returns {Number} determinant of a
             */
            mat4.determinant = function (a) {
                var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
                    a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
                    a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
                    a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

                    b00 = a00 * a11 - a01 * a10,
                    b01 = a00 * a12 - a02 * a10,
                    b02 = a00 * a13 - a03 * a10,
                    b03 = a01 * a12 - a02 * a11,
                    b04 = a01 * a13 - a03 * a11,
                    b05 = a02 * a13 - a03 * a12,
                    b06 = a20 * a31 - a21 * a30,
                    b07 = a20 * a32 - a22 * a30,
                    b08 = a20 * a33 - a23 * a30,
                    b09 = a21 * a32 - a22 * a31,
                    b10 = a21 * a33 - a23 * a31,
                    b11 = a22 * a33 - a23 * a32;

                // Calculate the determinant
                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
            };

            /**
             * Multiplies two mat4's
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the first operand
             * @param {mat4} b the second operand
             * @returns {mat4} out
             */
            mat4.multiply = function (out, a, b) {
                var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
                    a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
                    a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
                    a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

                // Cache only the current line of the second matrix
                var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
                out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

                b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
                out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

                b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
                out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

                b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
                out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return out;
            };

            /**
             * Multiplies two affine mat4's
             * Add by https://github.com/pissang
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the first operand
             * @param {mat4} b the second operand
             * @returns {mat4} out
             */
            mat4.multiplyAffine = function (out, a, b) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[4], a11 = a[5], a12 = a[6],
                    a20 = a[8], a21 = a[9], a22 = a[10],
                    a30 = a[12], a31 = a[13], a32 = a[14];

                // Cache only the current line of the second matrix
                var b0 = b[0], b1 = b[1], b2 = b[2];
                out[0] = b0 * a00 + b1 * a10 + b2 * a20;
                out[1] = b0 * a01 + b1 * a11 + b2 * a21;
                out[2] = b0 * a02 + b1 * a12 + b2 * a22;
                // out[3] = 0;

                b0 = b[4]; b1 = b[5]; b2 = b[6];
                out[4] = b0 * a00 + b1 * a10 + b2 * a20;
                out[5] = b0 * a01 + b1 * a11 + b2 * a21;
                out[6] = b0 * a02 + b1 * a12 + b2 * a22;
                // out[7] = 0;

                b0 = b[8]; b1 = b[9]; b2 = b[10];
                out[8] = b0 * a00 + b1 * a10 + b2 * a20;
                out[9] = b0 * a01 + b1 * a11 + b2 * a21;
                out[10] = b0 * a02 + b1 * a12 + b2 * a22;
                // out[11] = 0;

                b0 = b[12]; b1 = b[13]; b2 = b[14];
                out[12] = b0 * a00 + b1 * a10 + b2 * a20 + a30;
                out[13] = b0 * a01 + b1 * a11 + b2 * a21 + a31;
                out[14] = b0 * a02 + b1 * a12 + b2 * a22 + a32;
                // out[15] = 1;
                return out;
            };

            /**
             * Alias for {@link mat4.multiply}
             * @function
             */
            mat4.mul = mat4.multiply;

            /**
             * Alias for {@link mat4.multiplyAffine}
             * @function
             */
            mat4.mulAffine = mat4.multiplyAffine;
            /**
             * Translate a mat4 by the given vector
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the matrix to translate
             * @param {vec3} v vector to translate by
             * @returns {mat4} out
             */
            mat4.translate = function (out, a, v) {
                var x = v[0], y = v[1], z = v[2],
                    a00, a01, a02, a03,
                    a10, a11, a12, a13,
                    a20, a21, a22, a23;

                if (a === out) {
                    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
                    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
                    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
                    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
                } else {
                    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
                    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
                    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

                    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
                    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
                    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

                    out[12] = a00 * x + a10 * y + a20 * z + a[12];
                    out[13] = a01 * x + a11 * y + a21 * z + a[13];
                    out[14] = a02 * x + a12 * y + a22 * z + a[14];
                    out[15] = a03 * x + a13 * y + a23 * z + a[15];
                }

                return out;
            };

            /**
             * Scales the mat4 by the dimensions in the given vec3
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the matrix to scale
             * @param {vec3} v the vec3 to scale the matrix by
             * @returns {mat4} out
             **/
            mat4.scale = function (out, a, v) {
                var x = v[0], y = v[1], z = v[2];

                out[0] = a[0] * x;
                out[1] = a[1] * x;
                out[2] = a[2] * x;
                out[3] = a[3] * x;
                out[4] = a[4] * y;
                out[5] = a[5] * y;
                out[6] = a[6] * y;
                out[7] = a[7] * y;
                out[8] = a[8] * z;
                out[9] = a[9] * z;
                out[10] = a[10] * z;
                out[11] = a[11] * z;
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
                return out;
            };

            /**
             * Rotates a mat4 by the given angle
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the matrix to rotate
             * @param {Number} rad the angle to rotate the matrix by
             * @param {vec3} axis the axis to rotate around
             * @returns {mat4} out
             */
            mat4.rotate = function (out, a, rad, axis) {
                var x = axis[0], y = axis[1], z = axis[2],
                    len = Math.sqrt(x * x + y * y + z * z),
                    s, c, t,
                    a00, a01, a02, a03,
                    a10, a11, a12, a13,
                    a20, a21, a22, a23,
                    b00, b01, b02,
                    b10, b11, b12,
                    b20, b21, b22;

                if (Math.abs(len) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* GLMAT_EPSILON */]) { return null; }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;

                s = Math.sin(rad);
                c = Math.cos(rad);
                t = 1 - c;

                a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
                a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
                a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

                // Construct the elements of the rotation matrix
                b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
                b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
                b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

                // Perform rotation-specific matrix multiplication
                out[0] = a00 * b00 + a10 * b01 + a20 * b02;
                out[1] = a01 * b00 + a11 * b01 + a21 * b02;
                out[2] = a02 * b00 + a12 * b01 + a22 * b02;
                out[3] = a03 * b00 + a13 * b01 + a23 * b02;
                out[4] = a00 * b10 + a10 * b11 + a20 * b12;
                out[5] = a01 * b10 + a11 * b11 + a21 * b12;
                out[6] = a02 * b10 + a12 * b11 + a22 * b12;
                out[7] = a03 * b10 + a13 * b11 + a23 * b12;
                out[8] = a00 * b20 + a10 * b21 + a20 * b22;
                out[9] = a01 * b20 + a11 * b21 + a21 * b22;
                out[10] = a02 * b20 + a12 * b21 + a22 * b22;
                out[11] = a03 * b20 + a13 * b21 + a23 * b22;

                if (a !== out) { // If the source and destination differ, copy the unchanged last row
                    out[12] = a[12];
                    out[13] = a[13];
                    out[14] = a[14];
                    out[15] = a[15];
                }
                return out;
            };

            /**
             * Rotates a matrix by the given angle around the X axis
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the matrix to rotate
             * @param {Number} rad the angle to rotate the matrix by
             * @returns {mat4} out
             */
            mat4.rotateX = function (out, a, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad),
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11];

                if (a !== out) { // If the source and destination differ, copy the unchanged rows
                    out[0] = a[0];
                    out[1] = a[1];
                    out[2] = a[2];
                    out[3] = a[3];
                    out[12] = a[12];
                    out[13] = a[13];
                    out[14] = a[14];
                    out[15] = a[15];
                }

                // Perform axis-specific matrix multiplication
                out[4] = a10 * c + a20 * s;
                out[5] = a11 * c + a21 * s;
                out[6] = a12 * c + a22 * s;
                out[7] = a13 * c + a23 * s;
                out[8] = a20 * c - a10 * s;
                out[9] = a21 * c - a11 * s;
                out[10] = a22 * c - a12 * s;
                out[11] = a23 * c - a13 * s;
                return out;
            };

            /**
             * Rotates a matrix by the given angle around the Y axis
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the matrix to rotate
             * @param {Number} rad the angle to rotate the matrix by
             * @returns {mat4} out
             */
            mat4.rotateY = function (out, a, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad),
                    a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a20 = a[8],
                    a21 = a[9],
                    a22 = a[10],
                    a23 = a[11];

                if (a !== out) { // If the source and destination differ, copy the unchanged rows
                    out[4] = a[4];
                    out[5] = a[5];
                    out[6] = a[6];
                    out[7] = a[7];
                    out[12] = a[12];
                    out[13] = a[13];
                    out[14] = a[14];
                    out[15] = a[15];
                }

                // Perform axis-specific matrix multiplication
                out[0] = a00 * c - a20 * s;
                out[1] = a01 * c - a21 * s;
                out[2] = a02 * c - a22 * s;
                out[3] = a03 * c - a23 * s;
                out[8] = a00 * s + a20 * c;
                out[9] = a01 * s + a21 * c;
                out[10] = a02 * s + a22 * c;
                out[11] = a03 * s + a23 * c;
                return out;
            };

            /**
             * Rotates a matrix by the given angle around the Z axis
             *
             * @param {mat4} out the receiving matrix
             * @param {mat4} a the matrix to rotate
             * @param {Number} rad the angle to rotate the matrix by
             * @returns {mat4} out
             */
            mat4.rotateZ = function (out, a, rad) {
                var s = Math.sin(rad),
                    c = Math.cos(rad),
                    a00 = a[0],
                    a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a10 = a[4],
                    a11 = a[5],
                    a12 = a[6],
                    a13 = a[7];

                if (a !== out) { // If the source and destination differ, copy the unchanged last row
                    out[8] = a[8];
                    out[9] = a[9];
                    out[10] = a[10];
                    out[11] = a[11];
                    out[12] = a[12];
                    out[13] = a[13];
                    out[14] = a[14];
                    out[15] = a[15];
                }

                // Perform axis-specific matrix multiplication
                out[0] = a00 * c + a10 * s;
                out[1] = a01 * c + a11 * s;
                out[2] = a02 * c + a12 * s;
                out[3] = a03 * c + a13 * s;
                out[4] = a10 * c - a00 * s;
                out[5] = a11 * c - a01 * s;
                out[6] = a12 * c - a02 * s;
                out[7] = a13 * c - a03 * s;
                return out;
            };

            /**
             * Creates a matrix from a quaternion rotation and vector translation
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.translate(dest, vec);
             *     var quatMat = mat4.create();
             *     quat4.toMat4(quat, quatMat);
             *     mat4.multiply(dest, quatMat);
             *
             * @param {mat4} out mat4 receiving operation result
             * @param {quat4} q Rotation quaternion
             * @param {vec3} v Translation vector
             * @returns {mat4} out
             */
            mat4.fromRotationTranslation = function (out, q, v) {
                // Quaternion math
                var x = q[0], y = q[1], z = q[2], w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,

                    xx = x * x2,
                    xy = x * y2,
                    xz = x * z2,
                    yy = y * y2,
                    yz = y * z2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;

                out[0] = 1 - (yy + zz);
                out[1] = xy + wz;
                out[2] = xz - wy;
                out[3] = 0;
                out[4] = xy - wz;
                out[5] = 1 - (xx + zz);
                out[6] = yz + wx;
                out[7] = 0;
                out[8] = xz + wy;
                out[9] = yz - wx;
                out[10] = 1 - (xx + yy);
                out[11] = 0;
                out[12] = v[0];
                out[13] = v[1];
                out[14] = v[2];
                out[15] = 1;

                return out;
            };

            mat4.fromQuat = function (out, q) {
                var x = q[0], y = q[1], z = q[2], w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,

                    xx = x * x2,
                    yx = y * x2,
                    yy = y * y2,
                    zx = z * x2,
                    zy = z * y2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;

                out[0] = 1 - yy - zz;
                out[1] = yx + wz;
                out[2] = zx - wy;
                out[3] = 0;

                out[4] = yx - wz;
                out[5] = 1 - xx - zz;
                out[6] = zy + wx;
                out[7] = 0;

                out[8] = zx + wy;
                out[9] = zy - wx;
                out[10] = 1 - xx - yy;
                out[11] = 0;

                out[12] = 0;
                out[13] = 0;
                out[14] = 0;
                out[15] = 1;

                return out;
            };

            /**
             * Generates a frustum matrix with the given bounds
             *
             * @param {mat4} out mat4 frustum matrix will be written into
             * @param {Number} left Left bound of the frustum
             * @param {Number} right Right bound of the frustum
             * @param {Number} bottom Bottom bound of the frustum
             * @param {Number} top Top bound of the frustum
             * @param {Number} near Near bound of the frustum
             * @param {Number} far Far bound of the frustum
             * @returns {mat4} out
             */
            mat4.frustum = function (out, left, right, bottom, top, near, far) {
                var rl = 1 / (right - left),
                    tb = 1 / (top - bottom),
                    nf = 1 / (near - far);
                out[0] = (near * 2) * rl;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = (near * 2) * tb;
                out[6] = 0;
                out[7] = 0;
                out[8] = (right + left) * rl;
                out[9] = (top + bottom) * tb;
                out[10] = (far + near) * nf;
                out[11] = -1;
                out[12] = 0;
                out[13] = 0;
                out[14] = (far * near * 2) * nf;
                out[15] = 0;
                return out;
            };

            /**
             * Generates a perspective projection matrix with the given bounds
             *
             * @param {mat4} out mat4 frustum matrix will be written into
             * @param {number} fovy Vertical field of view in radians
             * @param {number} aspect Aspect ratio. typically viewport width/height
             * @param {number} near Near bound of the frustum
             * @param {number} far Far bound of the frustum
             * @returns {mat4} out
             */
            mat4.perspective = function (out, fovy, aspect, near, far) {
                var f = 1.0 / Math.tan(fovy / 2),
                    nf = 1 / (near - far);
                out[0] = f / aspect;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = f;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[10] = (far + near) * nf;
                out[11] = -1;
                out[12] = 0;
                out[13] = 0;
                out[14] = (2 * far * near) * nf;
                out[15] = 0;
                return out;
            };

            /**
             * Generates a orthogonal projection matrix with the given bounds
             *
             * @param {mat4} out mat4 frustum matrix will be written into
             * @param {number} left Left bound of the frustum
             * @param {number} right Right bound of the frustum
             * @param {number} bottom Bottom bound of the frustum
             * @param {number} top Top bound of the frustum
             * @param {number} near Near bound of the frustum
             * @param {number} far Far bound of the frustum
             * @returns {mat4} out
             */
            mat4.ortho = function (out, left, right, bottom, top, near, far) {
                var lr = 1 / (left - right),
                    bt = 1 / (bottom - top),
                    nf = 1 / (near - far);
                out[0] = -2 * lr;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = -2 * bt;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[10] = 2 * nf;
                out[11] = 0;
                out[12] = (left + right) * lr;
                out[13] = (top + bottom) * bt;
                out[14] = (far + near) * nf;
                out[15] = 1;
                return out;
            };

            /**
             * Generates a look-at matrix with the given eye position, focal point, and up axis
             *
             * @param {mat4} out mat4 frustum matrix will be written into
             * @param {vec3} eye Position of the viewer
             * @param {vec3} center Point the viewer is looking at
             * @param {vec3} up vec3 pointing up
             * @returns {mat4} out
             */
            mat4.lookAt = function (out, eye, center, up) {
                var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
                    eyex = eye[0],
                    eyey = eye[1],
                    eyez = eye[2],
                    upx = up[0],
                    upy = up[1],
                    upz = up[2],
                    centerx = center[0],
                    centery = center[1],
                    centerz = center[2];

                if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* GLMAT_EPSILON */] &&
                    Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* GLMAT_EPSILON */] &&
                    Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common__["b" /* GLMAT_EPSILON */]) {
                    return mat4.identity(out);
                }

                z0 = eyex - centerx;
                z1 = eyey - centery;
                z2 = eyez - centerz;

                len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
                z0 *= len;
                z1 *= len;
                z2 *= len;

                x0 = upy * z2 - upz * z1;
                x1 = upz * z0 - upx * z2;
                x2 = upx * z1 - upy * z0;
                len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
                if (!len) {
                    x0 = 0;
                    x1 = 0;
                    x2 = 0;
                } else {
                    len = 1 / len;
                    x0 *= len;
                    x1 *= len;
                    x2 *= len;
                }

                y0 = z1 * x2 - z2 * x1;
                y1 = z2 * x0 - z0 * x2;
                y2 = z0 * x1 - z1 * x0;

                len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
                if (!len) {
                    y0 = 0;
                    y1 = 0;
                    y2 = 0;
                } else {
                    len = 1 / len;
                    y0 *= len;
                    y1 *= len;
                    y2 *= len;
                }

                out[0] = x0;
                out[1] = y0;
                out[2] = z0;
                out[3] = 0;
                out[4] = x1;
                out[5] = y1;
                out[6] = z1;
                out[7] = 0;
                out[8] = x2;
                out[9] = y2;
                out[10] = z2;
                out[11] = 0;
                out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
                out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
                out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
                out[15] = 1;

                return out;
            };

            /**
             * Returns Frobenius norm of a mat4
             *
             * @param {mat4} a the matrix to calculate Frobenius norm of
             * @returns {Number} Frobenius norm
             */
            mat4.frob = function (a) {
                return (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2)))
            };

/* harmony default export */ __webpack_exports__["a"] = (mat4);

            /***/
}),
/* 22 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_claygl_src_Scene__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_claygl_src_prePass_ShadowMap__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_claygl_src_camera_Perspective__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_claygl_src_camera_Orthographic__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_claygl_src_math_Matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_claygl_src_math_Vector3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_claygl_src_math_Vector2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_claygl_src_core_mixin_notifier__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__effect_EffectCompositor__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__effect_TemporalSuperSampling__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effect_halton__ = __webpack_require__(49);
            /*
             * @module echarts-gl/core/ViewGL
             * @author Yi Shen(http://github.com/pissang)
             */

















            /**
             * @constructor
             * @alias module:echarts-gl/core/ViewGL
             * @param {string} [projection='perspective']
             */
            function ViewGL(projection) {

                projection = projection || 'perspective';

                /**
                 * @type {module:echarts-gl/core/LayerGL}
                 */
                this.layer = null;
                /**
                 * @type {clay.Scene}
                 */
                this.scene = new __WEBPACK_IMPORTED_MODULE_1_claygl_src_Scene__["a" /* default */]();

                /**
                 * @type {clay.Node}
                 */
                this.rootNode = this.scene;

                this.viewport = {
                    x: 0, y: 0, width: 0, height: 0
                };

                this.setProjection(projection);

                this._compositor = new __WEBPACK_IMPORTED_MODULE_9__effect_EffectCompositor__["a" /* default */]();

                this._temporalSS = new __WEBPACK_IMPORTED_MODULE_10__effect_TemporalSuperSampling__["a" /* default */]();

                this._shadowMapPass = new __WEBPACK_IMPORTED_MODULE_2_claygl_src_prePass_ShadowMap__["a" /* default */]();

                var pcfKernels = [];
                var off = 0;
                for (var i = 0; i < 30; i++) {
                    var pcfKernel = [];
                    for (var k = 0; k < 6; k++) {
                        pcfKernel.push(Object(__WEBPACK_IMPORTED_MODULE_11__effect_halton__["a" /* default */])(off, 2) * 4.0 - 2.0);
                        pcfKernel.push(Object(__WEBPACK_IMPORTED_MODULE_11__effect_halton__["a" /* default */])(off, 3) * 4.0 - 2.0);
                        off++;
                    }
                    pcfKernels.push(pcfKernel);
                }
                this._pcfKernels = pcfKernels;

                this.scene.on('beforerender', function (renderer, scene, camera) {
                    if (this.needsTemporalSS()) {
                        this._temporalSS.jitterProjection(renderer, camera);
                    }
                }, this);
            }

            /**
             * Set camera type of group
             * @param {string} cameraType 'perspective' | 'orthographic'
             */
            ViewGL.prototype.setProjection = function (projection) {
                var oldCamera = this.camera;
                oldCamera && oldCamera.update();
                if (projection === 'perspective') {
                    if (!(this.camera instanceof __WEBPACK_IMPORTED_MODULE_3_claygl_src_camera_Perspective__["a" /* default */])) {
                        this.camera = new __WEBPACK_IMPORTED_MODULE_3_claygl_src_camera_Perspective__["a" /* default */]();
                        if (oldCamera) {
                            this.camera.setLocalTransform(oldCamera.localTransform);
                        }
                    }
                }
                else {
                    if (!(this.camera instanceof __WEBPACK_IMPORTED_MODULE_4_claygl_src_camera_Orthographic__["a" /* default */])) {
                        this.camera = new __WEBPACK_IMPORTED_MODULE_4_claygl_src_camera_Orthographic__["a" /* default */]();
                        if (oldCamera) {
                            this.camera.setLocalTransform(oldCamera.localTransform);
                        }
                    }
                }
                // PENDING
                this.camera.near = 0.1;
                this.camera.far = 2000;
            };

            /**
             * Set viewport of group
             * @param {number} x Viewport left bottom x
             * @param {number} y Viewport left bottom y
             * @param {number} width Viewport height
             * @param {number} height Viewport height
             * @param {number} [dpr=1]
             */
            ViewGL.prototype.setViewport = function (x, y, width, height, dpr) {
                if (this.camera instanceof __WEBPACK_IMPORTED_MODULE_3_claygl_src_camera_Perspective__["a" /* default */]) {
                    this.camera.aspect = width / height;
                }
                dpr = dpr || 1;

                this.viewport.x = x;
                this.viewport.y = y;
                this.viewport.width = width;
                this.viewport.height = height;
                this.viewport.devicePixelRatio = dpr;

                // Source and output of compositor use high dpr texture.
                // But the intermediate texture of bloom, dof effects use fixed 1.0 dpr
                this._compositor.resize(width * dpr, height * dpr);
                this._temporalSS.resize(width * dpr, height * dpr);
            };

            /**
             * If contain screen point x, y
             * @param {number} x offsetX
             * @param {number} y offsetY
             * @return {boolean}
             */
            ViewGL.prototype.containPoint = function (x, y) {
                var viewport = this.viewport;
                var height = this.layer.renderer.getHeight();
                // Flip y;
                y = height - y;
                return x >= viewport.x && y >= viewport.y
                    && x <= viewport.x + viewport.width && y <= viewport.y + viewport.height;
            };

            /**
             * Cast a ray
             * @param {number} x offsetX
             * @param {number} y offsetY
             * @param {clay.math.Ray} out
             * @return {clay.math.Ray}
             */
            var ndc = new __WEBPACK_IMPORTED_MODULE_7_claygl_src_math_Vector2__["a" /* default */]();
            ViewGL.prototype.castRay = function (x, y, out) {
                var renderer = this.layer.renderer;

                var oldViewport = renderer.viewport;
                renderer.viewport = this.viewport;
                renderer.screenToNDC(x, y, ndc);
                this.camera.castRay(ndc, out);
                renderer.viewport = oldViewport;

                return out;
            };

            /**
             * Prepare and update scene before render
             */
            ViewGL.prototype.prepareRender = function () {
                this.scene.update();
                this.camera.update();
                this.scene.updateLights();
                var renderList = this.scene.updateRenderList(this.camera);

                this._needsSortProgressively = false;
                // If has any transparent mesh needs sort triangles progressively.
                for (var i = 0; i < renderList.transparent.length; i++) {
                    var renderable = renderList.transparent[i];
                    var geometry = renderable.geometry;
                    if (geometry.needsSortVerticesProgressively && geometry.needsSortVerticesProgressively()) {
                        this._needsSortProgressively = true;
                    }
                    if (geometry.needsSortTrianglesProgressively && geometry.needsSortTrianglesProgressively()) {
                        this._needsSortProgressively = true;
                    }
                }

                this._frame = 0;
                this._temporalSS.resetFrame();

                // var lights = this.scene.getLights();
                // for (var i = 0; i < lights.length; i++) {
                //     if (lights[i].cubemap) {
                //         if (this._compositor && this._compositor.isSSREnabled()) {
                //             lights[i].invisible = true;
                //         }
                //         else {
                //             lights[i].invisible = false;
                //         }
                //     }
                // }
            };

            ViewGL.prototype.render = function (renderer, accumulating) {
                this._doRender(renderer, accumulating, this._frame);
                this._frame++;
            };

            ViewGL.prototype.needsAccumulate = function () {
                return this.needsTemporalSS() || this._needsSortProgressively;
            };

            ViewGL.prototype.needsTemporalSS = function () {
                var enableTemporalSS = this._enableTemporalSS;
                if (enableTemporalSS === 'auto') {
                    enableTemporalSS = this._enablePostEffect;
                }
                return enableTemporalSS;
            };

            ViewGL.prototype.hasDOF = function () {
                return this._enableDOF;
            };

            ViewGL.prototype.isAccumulateFinished = function () {
                return this.needsTemporalSS() ? this._temporalSS.isFinished()
                    : (this._frame > 30);
            };

            ViewGL.prototype._doRender = function (renderer, accumulating, accumFrame) {

                var scene = this.scene;
                var camera = this.camera;

                accumFrame = accumFrame || 0;

                this._updateTransparent(renderer, scene, camera, accumFrame);

                if (!accumulating) {
                    this._shadowMapPass.kernelPCF = this._pcfKernels[0];
                    // Not render shadowmap pass in accumulating frame.
                    this._shadowMapPass.render(renderer, scene, camera, true);
                }

                this._updateShadowPCFKernel(accumFrame);

                // Shadowmap will set clear color.
                var bgColor = renderer.clearColor;
                renderer.gl.clearColor(bgColor[0], bgColor[1], bgColor[2], bgColor[3]);

                if (this._enablePostEffect) {
                    // normal render also needs to be jittered when have edge pass.
                    if (this.needsTemporalSS()) {
                        this._temporalSS.jitterProjection(renderer, camera);
                    }
                    this._compositor.updateNormal(renderer, scene, camera, this._temporalSS.getFrame());
                }

                // Always update SSAO to make sure have correct ssaoMap status
                this._updateSSAO(renderer, scene, camera, this._temporalSS.getFrame());

                if (this._enablePostEffect) {

                    var frameBuffer = this._compositor.getSourceFrameBuffer();
                    frameBuffer.bind(renderer);
                    renderer.gl.clear(renderer.gl.DEPTH_BUFFER_BIT | renderer.gl.COLOR_BUFFER_BIT);
                    renderer.render(scene, camera, true, true);
                    frameBuffer.unbind(renderer);

                    if (this.needsTemporalSS() && accumulating) {
                        this._compositor.composite(renderer, scene, camera, this._temporalSS.getSourceFrameBuffer(), this._temporalSS.getFrame());
                        renderer.setViewport(this.viewport);
                        this._temporalSS.render(renderer);
                    }
                    else {
                        renderer.setViewport(this.viewport);
                        this._compositor.composite(renderer, scene, camera, null, 0);
                    }
                }
                else {
                    if (this.needsTemporalSS() && accumulating) {
                        var frameBuffer = this._temporalSS.getSourceFrameBuffer();
                        frameBuffer.bind(renderer);
                        renderer.saveClear();
                        renderer.clearBit = renderer.gl.DEPTH_BUFFER_BIT | renderer.gl.COLOR_BUFFER_BIT;
                        renderer.render(scene, camera, true, true);
                        renderer.restoreClear();
                        frameBuffer.unbind(renderer);

                        renderer.setViewport(this.viewport);
                        this._temporalSS.render(renderer);
                    }
                    else {
                        renderer.setViewport(this.viewport);
                        renderer.render(scene, camera, true, true);
                    }
                }

                // this._shadowMapPass.renderDebug(renderer);
                // this._compositor._normalPass.renderDebug(renderer);
            };

            ViewGL.prototype._updateTransparent = function (renderer, scene, camera, frame) {

                var v3 = new __WEBPACK_IMPORTED_MODULE_6_claygl_src_math_Vector3__["a" /* default */]();
                var invWorldTransform = new __WEBPACK_IMPORTED_MODULE_5_claygl_src_math_Matrix4__["a" /* default */]();
                var cameraWorldPosition = camera.getWorldPosition();
                var transparentList = scene.getRenderList(camera).transparent;

                // Sort transparent object.
                for (var i = 0; i < transparentList.length; i++) {
                    var renderable = transparentList[i];
                    var geometry = renderable.geometry;
                    __WEBPACK_IMPORTED_MODULE_5_claygl_src_math_Matrix4__["a" /* default */].invert(invWorldTransform, renderable.worldTransform);
                    __WEBPACK_IMPORTED_MODULE_6_claygl_src_math_Vector3__["a" /* default */].transformMat4(v3, cameraWorldPosition, invWorldTransform);
                    if (geometry.needsSortTriangles && geometry.needsSortTriangles()) {
                        geometry.doSortTriangles(v3, frame);
                    }
                    if (geometry.needsSortVertices && geometry.needsSortVertices()) {
                        geometry.doSortVertices(v3, frame);
                    }
                }
            };

            ViewGL.prototype._updateSSAO = function (renderer, scene, camera) {
                var ifEnableSSAO = this._enableSSAO && this._enablePostEffect;
                if (ifEnableSSAO) {
                    this._compositor.updateSSAO(renderer, scene, camera, this._temporalSS.getFrame());
                }
                var renderList = scene.getRenderList(camera);

                for (var i = 0; i < renderList.opaque.length; i++) {
                    var renderable = renderList.opaque[i];
                    // PENDING
                    if (renderable.renderNormal) {
                        renderable.material[ifEnableSSAO ? 'enableTexture' : 'disableTexture']('ssaoMap');
                    }
                    if (ifEnableSSAO) {
                        renderable.material.set('ssaoMap', this._compositor.getSSAOTexture());
                    }
                }
            };

            ViewGL.prototype._updateShadowPCFKernel = function (frame) {
                var pcfKernel = this._pcfKernels[frame % this._pcfKernels.length];
                var renderList = this.scene.getRenderList(this.camera);
                var opaqueList = renderList.opaque;
                for (var i = 0; i < opaqueList.length; i++) {
                    if (opaqueList[i].receiveShadow) {
                        opaqueList[i].material.set('pcfKernel', pcfKernel);
                        opaqueList[i].material.define('fragment', 'PCF_KERNEL_SIZE', pcfKernel.length / 2);
                    }
                }
            };

            ViewGL.prototype.dispose = function (renderer) {
                this._compositor.dispose(renderer.gl);
                this._temporalSS.dispose(renderer.gl);
                this._shadowMapPass.dispose(renderer);
            };
            /**
             * @param {module:echarts/Model} Post effect model
             */
            ViewGL.prototype.setPostEffect = function (postEffectModel, api) {
                var compositor = this._compositor;
                this._enablePostEffect = postEffectModel.get('enable');
                var bloomModel = postEffectModel.getModel('bloom');
                var edgeModel = postEffectModel.getModel('edge');
                var dofModel = postEffectModel.getModel('DOF', postEffectModel.getModel('depthOfField'));
                var ssaoModel = postEffectModel.getModel('SSAO', postEffectModel.getModel('screenSpaceAmbientOcclusion'));
                var ssrModel = postEffectModel.getModel('SSR', postEffectModel.getModel('screenSpaceReflection'));
                var fxaaModel = postEffectModel.getModel('FXAA');
                var colorCorrModel = postEffectModel.getModel('colorCorrection');
                bloomModel.get('enable') ? compositor.enableBloom() : compositor.disableBloom();
                dofModel.get('enable') ? compositor.enableDOF() : compositor.disableDOF();
                ssrModel.get('enable') ? compositor.enableSSR() : compositor.disableSSR();
                colorCorrModel.get('enable') ? compositor.enableColorCorrection() : compositor.disableColorCorrection();
                edgeModel.get('enable') ? compositor.enableEdge() : compositor.disableEdge();
                fxaaModel.get('enable') ? compositor.enableFXAA() : compositor.disableFXAA();

                this._enableDOF = dofModel.get('enable');
                this._enableSSAO = ssaoModel.get('enable');

                this._enableSSAO ? compositor.enableSSAO() : compositor.disableSSAO();

                compositor.setBloomIntensity(bloomModel.get('intensity'));
                compositor.setEdgeColor(edgeModel.get('color'));
                compositor.setColorLookupTexture(colorCorrModel.get('lookupTexture'), api);
                compositor.setExposure(colorCorrModel.get('exposure'));

                ['radius', 'quality', 'intensity'].forEach(function (name) {
                    compositor.setSSAOParameter(name, ssaoModel.get(name));
                });
                ['quality', 'maxRoughness', 'physical'].forEach(function (name) {
                    compositor.setSSRParameter(name, ssrModel.get(name));
                });
                ['quality', 'focalDistance', 'focalRange', 'blurRadius', 'fstop'].forEach(function (name) {
                    compositor.setDOFParameter(name, dofModel.get(name));
                });
                ['brightness', 'contrast', 'saturation'].forEach(function (name) {
                    compositor.setColorCorrection(name, colorCorrModel.get(name));
                });

            };

            ViewGL.prototype.setDOFFocusOnPoint = function (depth) {
                if (this._enablePostEffect) {

                    if (depth > this.camera.far || depth < this.camera.near) {
                        return;
                    }

                    this._compositor.setDOFParameter('focalDistance', depth);
                    return true;
                }
            };

            ViewGL.prototype.setTemporalSuperSampling = function (temporalSuperSamplingModel) {
                this._enableTemporalSS = temporalSuperSamplingModel.get('enable');
            };

            ViewGL.prototype.isLinearSpace = function () {
                return this._enablePostEffect;
            };

            ViewGL.prototype.setRootNode = function (rootNode) {
                if (this.rootNode === rootNode) {
                    return;
                }
                var children = this.rootNode.children();
                for (var i = 0; i < children.length; i++) {
                    rootNode.add(children[i]);
                }
                if (rootNode !== this.scene) {
                    this.scene.add(rootNode);
                }

                this.rootNode = rootNode;
            };
            // Proxies
            ViewGL.prototype.add = function (node3D) {
                this.rootNode.add(node3D);
            };
            ViewGL.prototype.remove = function (node3D) {
                this.rootNode.remove(node3D);
            };
            ViewGL.prototype.removeAll = function (node3D) {
                this.rootNode.removeAll(node3D);
            };

            __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.extend(ViewGL.prototype, __WEBPACK_IMPORTED_MODULE_8_claygl_src_core_mixin_notifier__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ViewGL);

            /***/
}),
/* 23 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            var guid = 0;

            var ArrayProto = Array.prototype;
            var nativeForEach = ArrayProto.forEach;

            /**
             * Util functions
             * @namespace clay.core.util
             */
            var util = {

                /**
                 * Generate GUID
                 * @return {number}
                 * @memberOf clay.core.util
                 */
                genGUID: function () {
                    return ++guid;
                },
                /**
                 * Relative path to absolute path
                 * @param  {string} path
                 * @param  {string} basePath
                 * @return {string}
                 * @memberOf clay.core.util
                 */
                relative2absolute: function (path, basePath) {
                    if (!basePath || path.match(/^\//)) {
                        return path;
                    }
                    var pathParts = path.split('/');
                    var basePathParts = basePath.split('/');

                    var item = pathParts[0];
                    while (item === '.' || item === '..') {
                        if (item === '..') {
                            basePathParts.pop();
                        }
                        pathParts.shift();
                        item = pathParts[0];
                    }
                    return basePathParts.join('/') + '/' + pathParts.join('/');
                },

                /**
                 * Extend target with source
                 * @param  {Object} target
                 * @param  {Object} source
                 * @return {Object}
                 * @memberOf clay.core.util
                 */
                extend: function (target, source) {
                    if (source) {
                        for (var name in source) {
                            if (source.hasOwnProperty(name)) {
                                target[name] = source[name];
                            }
                        }
                    }
                    return target;
                },

                /**
                 * Extend properties to target if not exist.
                 * @param  {Object} target
                 * @param  {Object} source
                 * @return {Object}
                 * @memberOf clay.core.util
                 */
                defaults: function (target, source) {
                    if (source) {
                        for (var propName in source) {
                            if (target[propName] === undefined) {
                                target[propName] = source[propName];
                            }
                        }
                    }
                    return target;
                },
                /**
                 * Extend properties with a given property list to avoid for..in.. iteration.
                 * @param  {Object} target
                 * @param  {Object} source
                 * @param  {Array.<string>} propList
                 * @return {Object}
                 * @memberOf clay.core.util
                 */
                extendWithPropList: function (target, source, propList) {
                    if (source) {
                        for (var i = 0; i < propList.length; i++) {
                            var propName = propList[i];
                            target[propName] = source[propName];
                        }
                    }
                    return target;
                },
                /**
                 * Extend properties to target if not exist. With a given property list avoid for..in.. iteration.
                 * @param  {Object} target
                 * @param  {Object} source
                 * @param  {Array.<string>} propList
                 * @return {Object}
                 * @memberOf clay.core.util
                 */
                defaultsWithPropList: function (target, source, propList) {
                    if (source) {
                        for (var i = 0; i < propList.length; i++) {
                            var propName = propList[i];
                            if (target[propName] == null) {
                                target[propName] = source[propName];
                            }
                        }
                    }
                    return target;
                },
                /**
                 * @param  {Object|Array} obj
                 * @param  {Function} iterator
                 * @param  {Object} [context]
                 * @memberOf clay.core.util
                 */
                each: function (obj, iterator, context) {
                    if (!(obj && iterator)) {
                        return;
                    }
                    if (obj.forEach && obj.forEach === nativeForEach) {
                        obj.forEach(iterator, context);
                    }
                    else if (obj.length === + obj.length) {
                        for (var i = 0, len = obj.length; i < len; i++) {
                            iterator.call(context, obj[i], i, obj);
                        }
                    }
                    else {
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                iterator.call(context, obj[key], key, obj);
                            }
                        }
                    }
                },

                /**
                 * Is object
                 * @param  {}  obj
                 * @return {boolean}
                 * @memberOf clay.core.util
                 */
                isObject: function (obj) {
                    return obj === Object(obj);
                },

                /**
                 * Is array ?
                 * @param  {}  obj
                 * @return {boolean}
                 * @memberOf clay.core.util
                 */
                isArray: function (obj) {
                    return Array.isArray(obj);
                },

                /**
                 * Is array like, which have a length property
                 * @param  {}  obj
                 * @return {boolean}
                 * @memberOf clay.core.util
                 */
                isArrayLike: function (obj) {
                    if (!obj) {
                        return false;
                    }
                    else {
                        return obj.length === + obj.length;
                    }
                },

                /**
                 * @param  {} obj
                 * @return {}
                 * @memberOf clay.core.util
                 */
                clone: function (obj) {
                    if (!util.isObject(obj)) {
                        return obj;
                    }
                    else if (util.isArray(obj)) {
                        return obj.slice();
                    }
                    else if (util.isArrayLike(obj)) { // is typed array
                        var ret = new obj.constructor(obj.length);
                        for (var i = 0; i < obj.length; i++) {
                            ret[i] = obj[i];
                        }
                        return ret;
                    }
                    else {
                        return util.extend({}, obj);
                    }
                }
            };

/* harmony default export */ __webpack_exports__["a"] = (util);


            /***/
}),
/* 24 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Node__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shader_source_header_light__ = __webpack_require__(119);




            __WEBPACK_IMPORTED_MODULE_1__Shader__["a" /* default */]['import'](__WEBPACK_IMPORTED_MODULE_2__shader_source_header_light__["a" /* default */]);

            /**
             * @constructor clay.Light
             * @extends clay.Node
             */
            var Light = __WEBPACK_IMPORTED_MODULE_0__Node__["a" /* default */].extend(function () {
                return /** @lends clay.Light# */ {
                    /**
                     * Light RGB color
                     * @type {number[]}
                     */
                    color: [1, 1, 1],

                    /**
                     * Light intensity
                     * @type {number}
                     */
                    intensity: 1.0,

                    // Config for shadow map
                    /**
                     * If light cast shadow
                     * @type {boolean}
                     */
                    castShadow: true,

                    /**
                     * Shadow map size
                     * @type {number}
                     */
                    shadowResolution: 512,

                    /**
                     * Light group, shader with same `lightGroup` will be affected
                     *
                     * Only useful in forward rendering
                     * @type {number}
                     */
                    group: 0
                };
            },
                /** @lends clay.Light.prototype. */
                {
                    /**
                     * Light type
                     * @type {string}
                     * @memberOf clay.Light#
                     */
                    type: '',

                    /**
                     * @return {clay.Light}
                     * @memberOf clay.Light.prototype
                     */
                    clone: function () {
                        var light = __WEBPACK_IMPORTED_MODULE_0__Node__["a" /* default */].prototype.clone.call(this);
                        light.color = Array.prototype.slice.call(this.color);
                        light.intensity = this.intensity;
                        light.castShadow = this.castShadow;
                        light.shadowResolution = this.shadowResolution;

                        return light;
                    }
                });

/* harmony default export */ __webpack_exports__["a"] = (Light);


            /***/
}),
/* 25 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamicConvertMixin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_claygl_src_dep_glmatrix__ = __webpack_require__(6);
            /**
             * Lines geometry
             * Use screen space projected lines lineWidth > MAX_LINE_WIDTH
             * https://mattdesl.svbtle.com/drawing-lines-is-hard
             * @module echarts-gl/util/geometry/LinesGeometry
             * @author Yi Shen(http://github.com/pissang)
             */





            var vec3 = __WEBPACK_IMPORTED_MODULE_3_claygl_src_dep_glmatrix__["a" /* default */].vec3;

            // var CURVE_RECURSION_LIMIT = 8;
            // var CURVE_COLLINEAR_EPSILON = 40;

            var sampleLinePoints = [[0, 0], [1, 1]];
            /**
             * @constructor
             * @alias module:echarts-gl/util/geometry/LinesGeometry
             * @extends clay.Geometry
             */

            var LinesGeometry = __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].extend(function () {
                return {

                    segmentScale: 1,

                    dynamic: true,
                    /**
                     * Need to use mesh to expand lines if lineWidth > MAX_LINE_WIDTH
                     */
                    useNativeLine: true,

                    attributes: {
                        position: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('position', 'float', 3, 'POSITION'),
                        positionPrev: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('positionPrev', 'float', 3),
                        positionNext: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('positionNext', 'float', 3),
                        prevPositionPrev: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('prevPositionPrev', 'float', 3),
                        prevPosition: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('prevPosition', 'float', 3),
                        prevPositionNext: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('prevPositionNext', 'float', 3),
                        offset: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('offset', 'float', 1),
                        color: new __WEBPACK_IMPORTED_MODULE_0_claygl_src_Geometry__["a" /* default */].Attribute('color', 'float', 4, 'COLOR')
                    }
                };
            },
                /** @lends module: echarts-gl/util/geometry/LinesGeometry.prototype */
                {

                    /**
                     * Reset offset
                     */
                    resetOffset: function () {
                        this._vertexOffset = 0;
                        this._triangleOffset = 0;

                        this._itemVertexOffsets = [];
                    },

                    /**
                     * @param {number} nVertex
                     */
                    setVertexCount: function (nVertex) {
                        var attributes = this.attributes;
                        if (this.vertexCount !== nVertex) {
                            attributes.position.init(nVertex);
                            attributes.color.init(nVertex);

                            if (!this.useNativeLine) {
                                attributes.positionPrev.init(nVertex);
                                attributes.positionNext.init(nVertex);
                                attributes.offset.init(nVertex);
                            }

                            if (nVertex > 0xffff) {
                                if (this.indices instanceof Uint16Array) {
                                    this.indices = new Uint32Array(this.indices);
                                }
                            }
                            else {
                                if (this.indices instanceof Uint32Array) {
                                    this.indices = new Uint16Array(this.indices);
                                }
                            }
                        }
                    },

                    /**
                     * @param {number} nTriangle
                     */
                    setTriangleCount: function (nTriangle) {
                        if (this.triangleCount !== nTriangle) {
                            if (nTriangle === 0) {
                                this.indices = null;
                            }
                            else {
                                this.indices = this.vertexCount > 0xffff ? new Uint32Array(nTriangle * 3) : new Uint16Array(nTriangle * 3);
                            }
                        }
                    },

                    _getCubicCurveApproxStep: function (p0, p1, p2, p3) {
                        var len = vec3.dist(p0, p1) + vec3.dist(p2, p1) + vec3.dist(p3, p2);
                        var step = 1 / (len + 1) * this.segmentScale;
                        return step;
                    },

                    /**
                     * Get vertex count of cubic curve
                     * @param {Array.<number>} p0
                     * @param {Array.<number>} p1
                     * @param {Array.<number>} p2
                     * @param {Array.<number>} p3
                     * @return number
                     */
                    getCubicCurveVertexCount: function (p0, p1, p2, p3) {
                        var step = this._getCubicCurveApproxStep(p0, p1, p2, p3);
                        var segCount = Math.ceil(1 / step);
                        if (!this.useNativeLine) {
                            return segCount * 2 + 2;
                        }
                        else {
                            return segCount * 2;
                        }
                    },

                    /**
                     * Get face count of cubic curve
                     * @param {Array.<number>} p0
                     * @param {Array.<number>} p1
                     * @param {Array.<number>} p2
                     * @param {Array.<number>} p3
                     * @return number
                     */
                    getCubicCurveTriangleCount: function (p0, p1, p2, p3) {
                        var step = this._getCubicCurveApproxStep(p0, p1, p2, p3);
                        var segCount = Math.ceil(1 / step);
                        if (!this.useNativeLine) {
                            return segCount * 2;
                        }
                        else {
                            return 0;
                        }
                    },

                    /**
                     * Get vertex count of line
                     * @return {number}
                     */
                    getLineVertexCount: function () {
                        return this.getPolylineVertexCount(sampleLinePoints);
                    },

                    /**
                     * Get face count of line
                     * @return {number}
                     */
                    getLineTriangleCount: function () {
                        return this.getPolylineTriangleCount(sampleLinePoints);
                    },

                    /**
                     * Get how many vertices will polyline take.
                     * @type {number|Array} points Can be a 1d/2d list of points, or a number of points amount.
                     * @return {number}
                     */
                    getPolylineVertexCount: function (points) {
                        var pointsLen;
                        if (typeof points === 'number') {
                            pointsLen = points;
                        }
                        else {
                            var is2DArray = typeof points[0] !== 'number';
                            pointsLen = is2DArray ? points.length : (points.length / 3);
                        }
                        return !this.useNativeLine ? ((pointsLen - 1) * 2 + 2) : (pointsLen - 1) * 2;
                    },

                    /**
                     * Get how many triangles will polyline take.
                     * @type {number|Array} points Can be a 1d/2d list of points, or a number of points amount.
                     * @return {number}
                     */
                    getPolylineTriangleCount: function (points) {
                        var pointsLen;
                        if (typeof points === 'number') {
                            pointsLen = points;
                        }
                        else {
                            var is2DArray = typeof points[0] !== 'number';
                            pointsLen = is2DArray ? points.length : (points.length / 3);
                        }
                        return !this.useNativeLine ? Math.max(pointsLen - 1, 0) * 2 : 0;
                    },

                    /**
                     * Add a cubic curve
                     * @param {Array.<number>} p0
                     * @param {Array.<number>} p1
                     * @param {Array.<number>} p2
                     * @param {Array.<number>} p3
                     * @param {Array.<number>} color
                     * @param {number} [lineWidth=1]
                     */
                    addCubicCurve: function (p0, p1, p2, p3, color, lineWidth) {
                        if (lineWidth == null) {
                            lineWidth = 1;
                        }
                        // incremental interpolation
                        // http://antigrain.com/research/bezier_interpolation/index.html#PAGE_BEZIER_INTERPOLATION
                        var x0 = p0[0], y0 = p0[1], z0 = p0[2];
                        var x1 = p1[0], y1 = p1[1], z1 = p1[2];
                        var x2 = p2[0], y2 = p2[1], z2 = p2[2];
                        var x3 = p3[0], y3 = p3[1], z3 = p3[2];

                        var step = this._getCubicCurveApproxStep(p0, p1, p2, p3);

                        var step2 = step * step;
                        var step3 = step2 * step;

                        var pre1 = 3.0 * step;
                        var pre2 = 3.0 * step2;
                        var pre4 = 6.0 * step2;
                        var pre5 = 6.0 * step3;

                        var tmp1x = x0 - x1 * 2.0 + x2;
                        var tmp1y = y0 - y1 * 2.0 + y2;
                        var tmp1z = z0 - z1 * 2.0 + z2;

                        var tmp2x = (x1 - x2) * 3.0 - x0 + x3;
                        var tmp2y = (y1 - y2) * 3.0 - y0 + y3;
                        var tmp2z = (z1 - z2) * 3.0 - z0 + z3;

                        var fx = x0;
                        var fy = y0;
                        var fz = z0;

                        var dfx = (x1 - x0) * pre1 + tmp1x * pre2 + tmp2x * step3;
                        var dfy = (y1 - y0) * pre1 + tmp1y * pre2 + tmp2y * step3;
                        var dfz = (z1 - z0) * pre1 + tmp1z * pre2 + tmp2z * step3;

                        var ddfx = tmp1x * pre4 + tmp2x * pre5;
                        var ddfy = tmp1y * pre4 + tmp2y * pre5;
                        var ddfz = tmp1z * pre4 + tmp2z * pre5;

                        var dddfx = tmp2x * pre5;
                        var dddfy = tmp2y * pre5;
                        var dddfz = tmp2z * pre5;

                        var t = 0;

                        var k = 0;
                        var segCount = Math.ceil(1 / step);

                        var points = new Float32Array((segCount + 1) * 3);
                        var points = [];
                        var offset = 0;
                        for (var k = 0; k < segCount + 1; k++) {
                            points[offset++] = fx;
                            points[offset++] = fy;
                            points[offset++] = fz;

                            fx += dfx; fy += dfy; fz += dfz;
                            dfx += ddfx; dfy += ddfy; dfz += ddfz;
                            ddfx += dddfx; ddfy += dddfy; ddfz += dddfz;
                            t += step;

                            if (t > 1) {
                                fx = dfx > 0 ? Math.min(fx, x3) : Math.max(fx, x3);
                                fy = dfy > 0 ? Math.min(fy, y3) : Math.max(fy, y3);
                                fz = dfz > 0 ? Math.min(fz, z3) : Math.max(fz, z3);
                            }
                        }

                        return this.addPolyline(points, color, lineWidth);
                    },

                    /**
                     * Add a straight line
                     * @param {Array.<number>} p0
                     * @param {Array.<number>} p1
                     * @param {Array.<number>} color
                     * @param {number} [lineWidth=1]
                     */
                    addLine: function (p0, p1, color, lineWidth) {
                        return this.addPolyline([p0, p1], color, lineWidth);
                    },

                    /**
                     * Add a straight line
                     * @param {Array.<Array> | Array.<number>} points
                     * @param {Array.<number> | Array.<Array>} color
                     * @param {number} [lineWidth=1]
                     * @param {number} [startOffset=0]
                     * @param {number} [pointsCount] Default to be amount of points in the first argument
                     */
                    addPolyline: function (points, color, lineWidth, startOffset, pointsCount) {
                        if (!points.length) {
                            return;
                        }
                        var is2DArray = typeof points[0] !== 'number';
                        if (pointsCount == null) {
                            pointsCount = is2DArray ? points.length : points.length / 3;
                        }
                        if (pointsCount < 2) {
                            return;
                        }
                        if (startOffset == null) {
                            startOffset = 0;
                        }
                        if (lineWidth == null) {
                            lineWidth = 1;
                        }

                        this._itemVertexOffsets.push(this._vertexOffset);

                        var is2DArray = typeof points[0] !== 'number';
                        var notSharingColor = is2DArray
                            ? typeof color[0] !== 'number'
                            : color.length / 4 === pointsCount;

                        var positionAttr = this.attributes.position;
                        var positionPrevAttr = this.attributes.positionPrev;
                        var positionNextAttr = this.attributes.positionNext;
                        var colorAttr = this.attributes.color;
                        var offsetAttr = this.attributes.offset;
                        var indices = this.indices;

                        var vertexOffset = this._vertexOffset;
                        var point;
                        var pointColor;

                        lineWidth = Math.max(lineWidth, 0.01);

                        for (var k = startOffset; k < pointsCount; k++) {
                            if (is2DArray) {
                                point = points[k];
                                if (notSharingColor) {
                                    pointColor = color[k];
                                }
                                else {
                                    pointColor = color;
                                }
                            }
                            else {
                                var k3 = k * 3;
                                point = point || [];
                                point[0] = points[k3];
                                point[1] = points[k3 + 1];
                                point[2] = points[k3 + 2];

                                if (notSharingColor) {
                                    var k4 = k * 4;
                                    pointColor = pointColor || [];
                                    pointColor[0] = color[k4];
                                    pointColor[1] = color[k4 + 1];
                                    pointColor[2] = color[k4 + 2];
                                    pointColor[3] = color[k4 + 3];
                                }
                                else {
                                    pointColor = color;
                                }
                            }
                            if (!this.useNativeLine) {
                                if (k < pointsCount - 1) {
                                    // Set to next two points
                                    positionPrevAttr.set(vertexOffset + 2, point);
                                    positionPrevAttr.set(vertexOffset + 3, point);
                                }
                                if (k > 0) {
                                    // Set to previous two points
                                    positionNextAttr.set(vertexOffset - 2, point);
                                    positionNextAttr.set(vertexOffset - 1, point);
                                }

                                positionAttr.set(vertexOffset, point);
                                positionAttr.set(vertexOffset + 1, point);

                                colorAttr.set(vertexOffset, pointColor);
                                colorAttr.set(vertexOffset + 1, pointColor);

                                offsetAttr.set(vertexOffset, lineWidth / 2);
                                offsetAttr.set(vertexOffset + 1, -lineWidth / 2);

                                vertexOffset += 2;
                            }
                            else {
                                if (k > 1) {
                                    positionAttr.copy(vertexOffset, vertexOffset - 1);
                                    colorAttr.copy(vertexOffset, vertexOffset - 1);
                                    vertexOffset++;
                                }
                            }

                            if (!this.useNativeLine) {
                                if (k > 0) {
                                    var idx3 = this._triangleOffset * 3;
                                    var indices = this.indices;
                                    // 0-----2
                                    // 1-----3
                                    // 0->1->2, 1->3->2
                                    indices[idx3] = vertexOffset - 4;
                                    indices[idx3 + 1] = vertexOffset - 3;
                                    indices[idx3 + 2] = vertexOffset - 2;

                                    indices[idx3 + 3] = vertexOffset - 3;
                                    indices[idx3 + 4] = vertexOffset - 1;
                                    indices[idx3 + 5] = vertexOffset - 2;

                                    this._triangleOffset += 2;
                                }
                            }
                            else {
                                colorAttr.set(vertexOffset, pointColor);
                                positionAttr.set(vertexOffset, point);
                                vertexOffset++;
                            }
                        }
                        if (!this.useNativeLine) {
                            var start = this._vertexOffset;
                            var end = this._vertexOffset + pointsCount * 2;
                            positionPrevAttr.copy(start, start + 2);
                            positionPrevAttr.copy(start + 1, start + 3);
                            positionNextAttr.copy(end - 1, end - 3);
                            positionNextAttr.copy(end - 2, end - 4);
                        }

                        this._vertexOffset = vertexOffset;

                        return this._vertexOffset;
                    },

                    /**
                     * Set color of single line.
                     */
                    setItemColor: function (idx, color) {
                        var startOffset = this._itemVertexOffsets[idx];
                        var endOffset = idx < this._itemVertexOffsets.length - 1 ? this._itemVertexOffsets[idx + 1] : this._vertexOffset;

                        for (var i = startOffset; i < endOffset; i++) {
                            this.attributes.color.set(i, color);
                        }
                        this.dirty('color');
                    },

                    /**
                     * @return {number}
                     */
                    currentTriangleOffset: function () {
                        return this._triangleOffset;
                    },

                    /**
                     * @return {number}
                     */
                    currentVertexOffset: function () {
                        return this._vertexOffset;
                    }
                });

            __WEBPACK_IMPORTED_MODULE_1_echarts_lib_echarts___default.a.util.defaults(LinesGeometry.prototype, __WEBPACK_IMPORTED_MODULE_2__dynamicConvertMixin__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (LinesGeometry);

            /***/
}),
/* 26 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__ = __webpack_require__(70);


            /**
             * @constructor
             * @alias clay.Vector2
             * @param {number} x
             * @param {number} y
             */
            var Vector2 = function (x, y) {

                x = x || 0;
                y = y || 0;

                /**
                 * Storage of Vector2, read and write of x, y will change the values in array
                 * All methods also operate on the array instead of x, y components
                 * @name array
                 * @type {Float32Array}
                 * @memberOf clay.Vector2#
                 */
                this.array = __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].fromValues(x, y);

                /**
                 * Dirty flag is used by the Node to determine
                 * if the matrix is updated to latest
                 * @name _dirty
                 * @type {boolean}
                 * @memberOf clay.Vector2#
                 */
                this._dirty = true;
            };

            Vector2.prototype = {

                constructor: Vector2,

                /**
                 * Add b to self
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                add: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].add(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set x and y components
                 * @param  {number}  x
                 * @param  {number}  y
                 * @return {clay.Vector2}
                 */
                set: function (x, y) {
                    this.array[0] = x;
                    this.array[1] = y;
                    this._dirty = true;
                    return this;
                },

                /**
                 * Set x and y components from array
                 * @param  {Float32Array|number[]} arr
                 * @return {clay.Vector2}
                 */
                setArray: function (arr) {
                    this.array[0] = arr[0];
                    this.array[1] = arr[1];

                    this._dirty = true;
                    return this;
                },

                /**
                 * Clone a new Vector2
                 * @return {clay.Vector2}
                 */
                clone: function () {
                    return new Vector2(this.x, this.y);
                },

                /**
                 * Copy x, y from b
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                copy: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].copy(this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Cross product of self and b, written to a Vector3 out
                 * @param  {clay.Vector3} out
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                cross: function (out, b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].cross(out.array, this.array, b.array);
                    out._dirty = true;
                    return this;
                },

                /**
                 * Alias for distance
                 * @param  {clay.Vector2} b
                 * @return {number}
                 */
                dist: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].dist(this.array, b.array);
                },

                /**
                 * Distance between self and b
                 * @param  {clay.Vector2} b
                 * @return {number}
                 */
                distance: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].distance(this.array, b.array);
                },

                /**
                 * Alias for divide
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                div: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].div(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Divide self by b
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                divide: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].divide(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Dot product of self and b
                 * @param  {clay.Vector2} b
                 * @return {number}
                 */
                dot: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].dot(this.array, b.array);
                },

                /**
                 * Alias of length
                 * @return {number}
                 */
                len: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].len(this.array);
                },

                /**
                 * Calculate the length
                 * @return {number}
                 */
                length: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].length(this.array);
                },

                /**
                 * Linear interpolation between a and b
                 * @param  {clay.Vector2} a
                 * @param  {clay.Vector2} b
                 * @param  {number}  t
                 * @return {clay.Vector2}
                 */
                lerp: function (a, b, t) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].lerp(this.array, a.array, b.array, t);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Minimum of self and b
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                min: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].min(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Maximum of self and b
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                max: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].max(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for multiply
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                mul: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].mul(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Mutiply self and b
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                multiply: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].multiply(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Negate self
                 * @return {clay.Vector2}
                 */
                negate: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].negate(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Normalize self
                 * @return {clay.Vector2}
                 */
                normalize: function () {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].normalize(this.array, this.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Generate random x, y components with a given scale
                 * @param  {number} scale
                 * @return {clay.Vector2}
                 */
                random: function (scale) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].random(this.array, scale);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale self
                 * @param  {number}  scale
                 * @return {clay.Vector2}
                 */
                scale: function (s) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].scale(this.array, this.array, s);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Scale b and add to self
                 * @param  {clay.Vector2} b
                 * @param  {number}  scale
                 * @return {clay.Vector2}
                 */
                scaleAndAdd: function (b, s) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].scaleAndAdd(this.array, this.array, b.array, s);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Alias for squaredDistance
                 * @param  {clay.Vector2} b
                 * @return {number}
                 */
                sqrDist: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].sqrDist(this.array, b.array);
                },

                /**
                 * Squared distance between self and b
                 * @param  {clay.Vector2} b
                 * @return {number}
                 */
                squaredDistance: function (b) {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].squaredDistance(this.array, b.array);
                },

                /**
                 * Alias for squaredLength
                 * @return {number}
                 */
                sqrLen: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].sqrLen(this.array);
                },

                /**
                 * Squared length of self
                 * @return {number}
                 */
                squaredLength: function () {
                    return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].squaredLength(this.array);
                },

                /**
                 * Alias for subtract
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                sub: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].sub(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Subtract b from self
                 * @param  {clay.Vector2} b
                 * @return {clay.Vector2}
                 */
                subtract: function (b) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].subtract(this.array, this.array, b.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix2 m
                 * @param  {clay.Matrix2} m
                 * @return {clay.Vector2}
                 */
                transformMat2: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat2(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix2d m
                 * @param  {clay.Matrix2d} m
                 * @return {clay.Vector2}
                 */
                transformMat2d: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat2d(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix3 m
                 * @param  {clay.Matrix3} m
                 * @return {clay.Vector2}
                 */
                transformMat3: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat3(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },

                /**
                 * Transform self with a Matrix4 m
                 * @param  {clay.Matrix4} m
                 * @return {clay.Vector2}
                 */
                transformMat4: function (m) {
                    __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat4(this.array, this.array, m.array);
                    this._dirty = true;
                    return this;
                },

                toString: function () {
                    return '[' + Array.prototype.join.call(this.array, ',') + ']';
                },

                toArray: function () {
                    return Array.prototype.slice.call(this.array);
                }
            };

            // Getter and Setter
            if (Object.defineProperty) {

                var proto = Vector2.prototype;
                /**
                 * @name x
                 * @type {number}
                 * @memberOf clay.Vector2
                 * @instance
                 */
                Object.defineProperty(proto, 'x', {
                    get: function () {
                        return this.array[0];
                    },
                    set: function (value) {
                        this.array[0] = value;
                        this._dirty = true;
                    }
                });

                /**
                 * @name y
                 * @type {number}
                 * @memberOf clay.Vector2
                 * @instance
                 */
                Object.defineProperty(proto, 'y', {
                    get: function () {
                        return this.array[1];
                    },
                    set: function (value) {
                        this.array[1] = value;
                        this._dirty = true;
                    }
                });
            }

            // Supply methods that are not in place

            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.add = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].add(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector2} out
             * @param  {number}  x
             * @param  {number}  y
             * @return {clay.Vector2}
             */
            Vector2.set = function (out, x, y) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].set(out.array, x, y);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.copy = function (out, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].copy(out.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector3} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.cross = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].cross(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {number}
             */
            Vector2.dist = function (a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].distance(a.array, b.array);
            };
            /**
             * @function
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {number}
             */
            Vector2.distance = Vector2.dist;
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.div = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].divide(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.divide = Vector2.div;
            /**
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {number}
             */
            Vector2.dot = function (a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].dot(a.array, b.array);
            };

            /**
             * @param  {clay.Vector2} a
             * @return {number}
             */
            Vector2.len = function (b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].length(b.array);
            };

            // Vector2.length = Vector2.len;

            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @param  {number}  t
             * @return {clay.Vector2}
             */
            Vector2.lerp = function (out, a, b, t) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].lerp(out.array, a.array, b.array, t);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.min = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].min(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };

            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.max = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].max(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.mul = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].multiply(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.multiply = Vector2.mul;
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @return {clay.Vector2}
             */
            Vector2.negate = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].negate(out.array, a.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @return {clay.Vector2}
             */
            Vector2.normalize = function (out, a) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].normalize(out.array, a.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {number}  scale
             * @return {clay.Vector2}
             */
            Vector2.random = function (out, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].random(out.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {number}  scale
             * @return {clay.Vector2}
             */
            Vector2.scale = function (out, a, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].scale(out.array, a.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @param  {number}  scale
             * @return {clay.Vector2}
             */
            Vector2.scaleAndAdd = function (out, a, b, scale) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].scaleAndAdd(out.array, a.array, b.array, scale);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {number}
             */
            Vector2.sqrDist = function (a, b) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].sqrDist(a.array, b.array);
            };
            /**
             * @function
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {number}
             */
            Vector2.squaredDistance = Vector2.sqrDist;

            /**
             * @param  {clay.Vector2} a
             * @return {number}
             */
            Vector2.sqrLen = function (a) {
                return __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].sqrLen(a.array);
            };
            /**
             * @function
             * @param  {clay.Vector2} a
             * @return {number}
             */
            Vector2.squaredLength = Vector2.sqrLen;

            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.sub = function (out, a, b) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].subtract(out.array, a.array, b.array);
                out._dirty = true;
                return out;
            };
            /**
             * @function
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Vector2} b
             * @return {clay.Vector2}
             */
            Vector2.subtract = Vector2.sub;
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Matrix2} m
             * @return {clay.Vector2}
             */
            Vector2.transformMat2 = function (out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat2(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2}  out
             * @param  {clay.Vector2}  a
             * @param  {clay.Matrix2d} m
             * @return {clay.Vector2}
             */
            Vector2.transformMat2d = function (out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat2d(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {Matrix3} m
             * @return {clay.Vector2}
             */
            Vector2.transformMat3 = function (out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat3(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };
            /**
             * @param  {clay.Vector2} out
             * @param  {clay.Vector2} a
             * @param  {clay.Matrix4} m
             * @return {clay.Vector2}
             */
            Vector2.transformMat4 = function (out, a, m) {
                __WEBPACK_IMPORTED_MODULE_0__glmatrix_vec2__["a" /* default */].transformMat4(out.array, a.array, m.array);
                out._dirty = true;
                return out;
            };

/* harmony default export */ __webpack_exports__["a"] = (Vector2);


            /***/
}),
/* 27 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_glenum__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_util__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_vendor__ = __webpack_require__(14);





            var isPowerOfTwo = __WEBPACK_IMPORTED_MODULE_3__math_util__["a" /* default */].isPowerOfTwo;

            var targetList = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];

            /**
             * @constructor clay.TextureCube
             * @extends clay.Texture
             *
             * @example
             *     ...
             *     var mat = new clay.Material({
             *         shader: clay.shader.library.get('clay.phong', 'environmentMap')
             *     });
             *     var envMap = new clay.TextureCube();
             *     envMap.load({
             *         'px': 'assets/textures/sky/px.jpg',
             *         'nx': 'assets/textures/sky/nx.jpg'
             *         'py': 'assets/textures/sky/py.jpg'
             *         'ny': 'assets/textures/sky/ny.jpg'
             *         'pz': 'assets/textures/sky/pz.jpg'
             *         'nz': 'assets/textures/sky/nz.jpg'
             *     });
             *     mat.set('environmentMap', envMap);
             *     ...
             *     envMap.success(function () {
             *         // Wait for the sky texture loaded
             *         animation.on('frame', function (frameTime) {
             *             renderer.render(scene, camera);
             *         });
             *     });
             */
            var TextureCube = __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* default */].extend(function () {
                return /** @lends clay.TextureCube# */{

                    /**
                     * @type {boolean}
                     * @default false
                     */
                    // PENDING cubemap should not flipY in default.
                    // flipY: false,

                    /**
                     * @type {Object}
                     * @property {?HTMLImageElement|HTMLCanvasElemnet} px
                     * @property {?HTMLImageElement|HTMLCanvasElemnet} nx
                     * @property {?HTMLImageElement|HTMLCanvasElemnet} py
                     * @property {?HTMLImageElement|HTMLCanvasElemnet} ny
                     * @property {?HTMLImageElement|HTMLCanvasElemnet} pz
                     * @property {?HTMLImageElement|HTMLCanvasElemnet} nz
                     */
                    image: {
                        px: null,
                        nx: null,
                        py: null,
                        ny: null,
                        pz: null,
                        nz: null
                    },
                    /**
                     * Pixels data of each side. Will be ignored if images are set.
                     * @type {Object}
                     * @property {?Uint8Array} px
                     * @property {?Uint8Array} nx
                     * @property {?Uint8Array} py
                     * @property {?Uint8Array} ny
                     * @property {?Uint8Array} pz
                     * @property {?Uint8Array} nz
                     */
                    pixels: {
                        px: null,
                        nx: null,
                        py: null,
                        ny: null,
                        pz: null,
                        nz: null
                    },

                    /**
                     * @type {Array.<Object>}
                     */
                    mipmaps: []
                };
            }, {

                textureType: 'textureCube',

                update: function (renderer) {
                    var _gl = renderer.gl;
                    _gl.bindTexture(_gl.TEXTURE_CUBE_MAP, this._cache.get('webgl_texture'));

                    this.updateCommon(renderer);

                    var glFormat = this.format;
                    var glType = this.type;

                    _gl.texParameteri(_gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_WRAP_S, this.getAvailableWrapS());
                    _gl.texParameteri(_gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_WRAP_T, this.getAvailableWrapT());

                    _gl.texParameteri(_gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_MAG_FILTER, this.getAvailableMagFilter());
                    _gl.texParameteri(_gl.TEXTURE_CUBE_MAP, _gl.TEXTURE_MIN_FILTER, this.getAvailableMinFilter());

                    var anisotropicExt = renderer.getGLExtension('EXT_texture_filter_anisotropic');
                    if (anisotropicExt && this.anisotropic > 1) {
                        _gl.texParameterf(_gl.TEXTURE_CUBE_MAP, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropic);
                    }

                    // Fallback to float type if browser don't have half float extension
                    if (glType === 36193) {
                        var halfFloatExt = renderer.getGLExtension('OES_texture_half_float');
                        if (!halfFloatExt) {
                            glType = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FLOAT;
                        }
                    }

                    if (this.mipmaps.length) {
                        var width = this.width;
                        var height = this.height;
                        for (var i = 0; i < this.mipmaps.length; i++) {
                            var mipmap = this.mipmaps[i];
                            this._updateTextureData(_gl, mipmap, i, width, height, glFormat, glType);
                            width /= 2;
                            height /= 2;
                        }
                    }
                    else {
                        this._updateTextureData(_gl, this, 0, this.width, this.height, glFormat, glType);

                        if (!this.NPOT && this.useMipmap) {
                            _gl.generateMipmap(_gl.TEXTURE_CUBE_MAP);
                        }
                    }

                    _gl.bindTexture(_gl.TEXTURE_CUBE_MAP, null);
                },

                _updateTextureData: function (_gl, data, level, width, height, glFormat, glType) {
                    for (var i = 0; i < 6; i++) {
                        var target = targetList[i];
                        var img = data.image && data.image[target];
                        if (img) {
                            _gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, level, glFormat, glFormat, glType, img);
                        }
                        else {
                            _gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, level, glFormat, width, height, 0, glFormat, glType, data.pixels && data.pixels[target]);
                        }
                    }
                },

                /**
                 * @param  {clay.Renderer} renderer
                 * @memberOf clay.TextureCube.prototype
                 */
                generateMipmap: function (renderer) {
                    var _gl = renderer.gl;
                    if (this.useMipmap && !this.NPOT) {
                        _gl.bindTexture(_gl.TEXTURE_CUBE_MAP, this._cache.get('webgl_texture'));
                        _gl.generateMipmap(_gl.TEXTURE_CUBE_MAP);
                    }
                },

                bind: function (renderer) {
                    renderer.gl.bindTexture(renderer.gl.TEXTURE_CUBE_MAP, this.getWebGLTexture(renderer));
                },

                unbind: function (renderer) {
                    renderer.gl.bindTexture(renderer.gl.TEXTURE_CUBE_MAP, null);
                },

                // Overwrite the isPowerOfTwo method
                isPowerOfTwo: function () {
                    if (this.image.px) {
                        return isPowerOfTwo(this.image.px.width)
                            && isPowerOfTwo(this.image.px.height);
                    }
                    else {
                        return isPowerOfTwo(this.width)
                            && isPowerOfTwo(this.height);
                    }
                },

                isRenderable: function () {
                    if (this.image.px) {
                        return isImageRenderable(this.image.px)
                            && isImageRenderable(this.image.nx)
                            && isImageRenderable(this.image.py)
                            && isImageRenderable(this.image.ny)
                            && isImageRenderable(this.image.pz)
                            && isImageRenderable(this.image.nz);
                    }
                    else {
                        return !!(this.width && this.height);
                    }
                },

                load: function (imageList, crossOrigin) {
                    var loading = 0;
                    var self = this;
                    __WEBPACK_IMPORTED_MODULE_2__core_util__["a" /* default */].each(imageList, function (src, target) {
                        var image = __WEBPACK_IMPORTED_MODULE_4__core_vendor__["a" /* default */].createImage();
                        if (crossOrigin) {
                            image.crossOrigin = crossOrigin;
                        }
                        image.onload = function () {
                            loading--;
                            if (loading === 0) {
                                self.dirty();
                                self.trigger('success', self);
                            }
                            image.onload = null;
                        };
                        image.onerror = function () {
                            loading--;
                            image.onerror = null;
                        };

                        loading++;
                        image.src = src;
                        self.image[target] = image;
                    });

                    return this;
                }
            });

            Object.defineProperty(TextureCube.prototype, 'width', {
                get: function () {
                    if (this.image && this.image.px) {
                        return this.image.px.width;
                    }
                    return this._width;
                },
                set: function (value) {
                    if (this.image && this.image.px) {
                        console.warn('Texture from image can\'t set width');
                    }
                    else {
                        if (this._width !== value) {
                            this.dirty();
                        }
                        this._width = value;
                    }
                }
            });
            Object.defineProperty(TextureCube.prototype, 'height', {
                get: function () {
                    if (this.image && this.image.px) {
                        return this.image.px.height;
                    }
                    return this._height;
                },
                set: function (value) {
                    if (this.image && this.image.px) {
                        console.warn('Texture from image can\'t set height');
                    }
                    else {
                        if (this._height !== value) {
                            this.dirty();
                        }
                        this._height = value;
                    }
                }
            });
            function isImageRenderable(image) {
                return image.nodeName === 'CANVAS' ||
                    image.nodeName === 'VIDEO' ||
                    image.complete;
            }

/* harmony default export */ __webpack_exports__["a"] = (TextureCube);


            /***/
}),
/* 28 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
                defaultOption: {
                    // Post effect
                    postEffect: {
                        enable: false,

                        bloom: {
                            enable: true,
                            intensity: 0.1
                        },
                        depthOfField: {
                            enable: false,
                            focalRange: 20,
                            focalDistance: 50,
                            blurRadius: 10,
                            fstop: 2.8,
                            quality: 'medium'
                        },

                        screenSpaceAmbientOcclusion: {
                            enable: false,
                            radius: 2,
                            // low, medium, high, ultra
                            quality: 'medium',
                            intensity: 1
                        },

                        screenSpaceReflection: {
                            enable: false,
                            quality: 'medium',
                            maxRoughness: 0.8
                        },

                        colorCorrection: {
                            enable: true,

                            exposure: 0,

                            brightness: 0,

                            contrast: 1,

                            saturation: 1,

                            lookupTexture: ''
                        },

                        edge: {
                            enable: false
                        },

                        FXAA: {
                            enable: false
                        }
                    },

                    // Temporal super sampling when the picture is still.
                    temporalSuperSampling: {
                        // Only enabled when postEffect is enabled
                        enable: 'auto'
                    }
                }
            });

            /***/
}),
/* 29 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
                defaultOption: {
                    // Light is available when material.shading is not color
                    light: {
                        // Main light
                        main: {
                            shadow: false,
                            // low, medium, high, ultra
                            shadowQuality: 'high',

                            color: '#fff',
                            intensity: 1,

                            alpha: 0,
                            beta: 0
                        },
                        ambient: {
                            color: '#fff',
                            intensity: 0.2
                        },
                        ambientCubemap: {
                            // Panorama environment texture,
                            // Support .hdr and commmon web formats.
                            texture: null,
                            // Available when texture is hdr.
                            exposure: 1,
                            // Intensity for diffuse term
                            diffuseIntensity: 0.5,
                            // Intensity for specular term, only available when shading is realastic
                            specularIntensity: 0.5
                        }
                    }
                }
            });

            /***/
}),
/* 30 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_claygl_src_plugin_Skybox__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts_lib_echarts__);




            function SceneHelper() {
            }

            SceneHelper.prototype = {
                constructor: SceneHelper,

                setScene: function (scene) {
                    this._scene = scene;

                    if (this._skybox) {
                        this._skybox.attachScene(this._scene);
                    }
                },

                initLight: function (rootNode) {
                    this._lightRoot = rootNode;
                    /**
                     * @type {clay.light.Directional}
                     */
                    this.mainLight = new __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].DirectionalLight({
                        shadowBias: 0.005
                    });

                    /**
                     * @type {clay.light.Ambient}
                     */
                    this.ambientLight = new __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].AmbientLight();

                    rootNode.add(this.mainLight);
                    rootNode.add(this.ambientLight);
                },

                dispose: function () {
                    if (this._lightRoot) {
                        this._lightRoot.remove(this.mainLight);
                        this._lightRoot.remove(this.ambientLight);
                    }
                },

                updateLight: function (componentModel) {

                    var mainLight = this.mainLight;
                    var ambientLight = this.ambientLight;

                    var lightModel = componentModel.getModel('light');
                    var mainLightModel = lightModel.getModel('main');
                    var ambientLightModel = lightModel.getModel('ambient');

                    mainLight.intensity = mainLightModel.get('intensity');
                    ambientLight.intensity = ambientLightModel.get('intensity');
                    mainLight.color = __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].parseColor(mainLightModel.get('color')).slice(0, 3);
                    ambientLight.color = __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].parseColor(ambientLightModel.get('color')).slice(0, 3);

                    var alpha = mainLightModel.get('alpha') || 0;
                    var beta = mainLightModel.get('beta') || 0;
                    mainLight.position.setArray(__WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].directionFromAlphaBeta(alpha, beta));
                    mainLight.lookAt(__WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].Vector3.ZERO);

                    mainLight.castShadow = mainLightModel.get('shadow');
                    mainLight.shadowResolution = __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].getShadowResolution(mainLightModel.get('shadowQuality'));
                },

                updateAmbientCubemap: function (renderer, componentModel, api) {
                    var ambientCubemapModel = componentModel.getModel('light.ambientCubemap');

                    var textureUrl = ambientCubemapModel.get('texture');
                    if (textureUrl) {
                        this._cubemapLightsCache = this._cubemapLightsCache || {};
                        var lights = this._cubemapLightsCache[textureUrl];
                        if (!lights) {
                            var self = this;
                            lights = this._cubemapLightsCache[textureUrl]
                                = __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].createAmbientCubemap(ambientCubemapModel.option, renderer, api, function () {
                                    // Use prefitered cubemap
                                    if (self._isSkyboxFromAmbientCubemap) {
                                        self._skybox.setEnvironmentMap(lights.specular.cubemap);
                                    }

                                    api.getZr().refresh();
                                });
                        }
                        this._lightRoot.add(lights.diffuse);
                        this._lightRoot.add(lights.specular);

                        this._currentCubemapLights = lights;
                    }
                    else if (this._currentCubemapLights) {
                        this._lightRoot.remove(this._currentCubemapLights.diffuse);
                        this._lightRoot.remove(this._currentCubemapLights.specular);
                        this._currentCubemapLights = null;
                    }
                },

                updateSkybox: function (renderer, componentModel, api) {
                    var environmentUrl = componentModel.get('environment');

                    var self = this;
                    function getSkybox() {
                        self._skybox = self._skybox || new __WEBPACK_IMPORTED_MODULE_1_claygl_src_plugin_Skybox__["a" /* default */]();
                        return self._skybox;
                    }

                    var skybox = getSkybox();
                    if (environmentUrl && environmentUrl !== 'none') {
                        if (environmentUrl === 'auto') {
                            this._isSkyboxFromAmbientCubemap = true;
                            // Use environment in ambient cubemap
                            if (this._currentCubemapLights) {
                                var cubemap = this._currentCubemapLights.specular.cubemap;
                                skybox.setEnvironmentMap(cubemap);
                                if (this._scene) {
                                    skybox.attachScene(this._scene);
                                }
                                skybox.material.set('lod', 3);
                            }
                            else if (this._skybox) {
                                this._skybox.detachScene();
                            }
                        }
                        // Is gradient or color string
                        else if ((typeof environmentUrl === 'object' && environmentUrl.colorStops)
                            || (typeof environmentUrl === 'string' && __WEBPACK_IMPORTED_MODULE_2_echarts_lib_echarts___default.a.color.parse(environmentUrl))
                        ) {
                            this._isSkyboxFromAmbientCubemap = false;
                            var texture = new __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].Texture2D({
                                anisotropic: 8,
                                flipY: false
                            });
                            skybox.setEnvironmentMap(texture);
                            var canvas = texture.image = document.createElement('canvas');
                            canvas.width = canvas.height = 16;
                            var ctx = canvas.getContext('2d');
                            var rect = new __WEBPACK_IMPORTED_MODULE_2_echarts_lib_echarts___default.a.graphic.Rect({
                                shape: { x: 0, y: 0, width: 16, height: 16 },
                                style: { fill: environmentUrl }
                            });
                            rect.brush(ctx);

                            skybox.attachScene(this._scene);
                        }
                        else {
                            this._isSkyboxFromAmbientCubemap = false;
                            // Panorama
                            var texture = __WEBPACK_IMPORTED_MODULE_0__util_graphicGL__["a" /* default */].loadTexture(environmentUrl, api, {
                                anisotropic: 8,
                                flipY: false
                            });
                            skybox.setEnvironmentMap(texture);

                            skybox.attachScene(this._scene);
                        }
                    }
                    else {
                        if (this._skybox) {
                            this._skybox.detachScene(this._scene);
                        }
                        this._skybox = null;
                    }

                    var coordSys = componentModel.coordinateSystem;
                    if (this._skybox) {
                        if (coordSys && coordSys.viewGL
                            && environmentUrl !== 'auto'
                            && !(environmentUrl.match && environmentUrl.match(/.hdr$/))
                        ) {
                            var srgbDefineMethod = coordSys.viewGL.isLinearSpace() ? 'define' : 'undefine';
                            this._skybox.material[srgbDefineMethod]('fragment', 'SRGB_DECODE');
                        }
                        else {
                            this._skybox.material.undefine('fragment', 'SRGB_DECODE');
                        }
                        // var ambientCubemapUrl = environmentUrl === 'auto'
                        //     ? componentModel.get('light.ambientCubemap.texture')
                        //     : environmentUrl;
                    }
                }
            };

/* harmony default export */ __webpack_exports__["a"] = (SceneHelper);

            /***/
}),
/* 31 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
                defaultOption: {
                    shading: null,

                    realisticMaterial: {
                        textureTiling: 1,
                        textureOffset: 0,

                        detailTexture: null
                    },

                    lambertMaterial: {
                        textureTiling: 1,
                        textureOffset: 0,

                        detailTexture: null
                    },

                    colorMaterial: {
                        textureTiling: 1,
                        textureOffset: 0,

                        detailTexture: null
                    },

                    hatchingMaterial: {
                        textureTiling: 1,
                        textureOffset: 0,

                        paperColor: '#fff'
                    }
                }
            });

            /***/
}),
/* 32 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);


            var formatUtil = {};
            formatUtil.getFormattedLabel = function (seriesModel, dataIndex, status, dataType, dimIndex) {
                status = status || 'normal';
                var data = seriesModel.getData(dataType);
                var itemModel = data.getItemModel(dataIndex);

                var params = seriesModel.getDataParams(dataIndex, dataType);
                if (dimIndex != null && (params.value instanceof Array)) {
                    params.value = params.value[dimIndex];
                }

                var formatter = itemModel.get(status === 'normal' ? ['label', 'formatter'] : ['emphasis', 'label', 'formatter']);
                if (formatter == null) {
                    formatter = itemModel.get(['label', 'formatter']);
                }
                var text;
                if (typeof formatter === 'function') {
                    params.status = status;
                    text = formatter(params);
                }
                else if (typeof formatter === 'string') {
                    text = __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.formatTpl(formatter, params);
                }
                return text;
            };

            /**
             * If value is not array, then convert it to array.
             * @param  {*} value
             * @return {Array} [value] or value
             */
            formatUtil.normalizeToArray = function (value) {
                return value instanceof Array
                    ? value
                    : value == null
                        ? []
                        : [value];
            };

/* harmony default export */ __webpack_exports__["a"] = (formatUtil);

            /***/
}),
/* 33 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* unused harmony export vec4 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(20);

            /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
            
            Redistribution and use in source and binary forms, with or without modification,
            are permitted provided that the following conditions are met:
            
              * Redistributions of source code must retain the above copyright notice, this
                list of conditions and the following disclaimer.
              * Redistributions in binary form must reproduce the above copyright notice,
                this list of conditions and the following disclaimer in the documentation
                and/or other materials provided with the distribution.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
            ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
            DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
            ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
            (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
            LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
            ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
            (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
            SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */



            /**
             * @class 4 Dimensional Vector
             * @name vec4
             */

            var vec4 = {};

            /**
             * Creates a new, empty vec4
             *
             * @returns {vec4} a new 4D vector
             */
            vec4.create = function () {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](4);
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                return out;
            };

            /**
             * Creates a new vec4 initialized with values from an existing vector
             *
             * @param {vec4} a vector to clone
             * @returns {vec4} a new 4D vector
             */
            vec4.clone = function (a) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](4);
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                return out;
            };

            /**
             * Creates a new vec4 initialized with the given values
             *
             * @param {Number} x X component
             * @param {Number} y Y component
             * @param {Number} z Z component
             * @param {Number} w W component
             * @returns {vec4} a new 4D vector
             */
            vec4.fromValues = function (x, y, z, w) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](4);
                out[0] = x;
                out[1] = y;
                out[2] = z;
                out[3] = w;
                return out;
            };

            /**
             * Copy the values from one vec4 to another
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the source vector
             * @returns {vec4} out
             */
            vec4.copy = function (out, a) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                return out;
            };

            /**
             * Set the components of a vec4 to the given values
             *
             * @param {vec4} out the receiving vector
             * @param {Number} x X component
             * @param {Number} y Y component
             * @param {Number} z Z component
             * @param {Number} w W component
             * @returns {vec4} out
             */
            vec4.set = function (out, x, y, z, w) {
                out[0] = x;
                out[1] = y;
                out[2] = z;
                out[3] = w;
                return out;
            };

            /**
             * Adds two vec4's
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {vec4} out
             */
            vec4.add = function (out, a, b) {
                out[0] = a[0] + b[0];
                out[1] = a[1] + b[1];
                out[2] = a[2] + b[2];
                out[3] = a[3] + b[3];
                return out;
            };

            /**
             * Subtracts vector b from vector a
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {vec4} out
             */
            vec4.subtract = function (out, a, b) {
                out[0] = a[0] - b[0];
                out[1] = a[1] - b[1];
                out[2] = a[2] - b[2];
                out[3] = a[3] - b[3];
                return out;
            };

            /**
             * Alias for {@link vec4.subtract}
             * @function
             */
            vec4.sub = vec4.subtract;

            /**
             * Multiplies two vec4's
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {vec4} out
             */
            vec4.multiply = function (out, a, b) {
                out[0] = a[0] * b[0];
                out[1] = a[1] * b[1];
                out[2] = a[2] * b[2];
                out[3] = a[3] * b[3];
                return out;
            };

            /**
             * Alias for {@link vec4.multiply}
             * @function
             */
            vec4.mul = vec4.multiply;

            /**
             * Divides two vec4's
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {vec4} out
             */
            vec4.divide = function (out, a, b) {
                out[0] = a[0] / b[0];
                out[1] = a[1] / b[1];
                out[2] = a[2] / b[2];
                out[3] = a[3] / b[3];
                return out;
            };

            /**
             * Alias for {@link vec4.divide}
             * @function
             */
            vec4.div = vec4.divide;

            /**
             * Returns the minimum of two vec4's
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {vec4} out
             */
            vec4.min = function (out, a, b) {
                out[0] = Math.min(a[0], b[0]);
                out[1] = Math.min(a[1], b[1]);
                out[2] = Math.min(a[2], b[2]);
                out[3] = Math.min(a[3], b[3]);
                return out;
            };

            /**
             * Returns the maximum of two vec4's
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {vec4} out
             */
            vec4.max = function (out, a, b) {
                out[0] = Math.max(a[0], b[0]);
                out[1] = Math.max(a[1], b[1]);
                out[2] = Math.max(a[2], b[2]);
                out[3] = Math.max(a[3], b[3]);
                return out;
            };

            /**
             * Scales a vec4 by a scalar number
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the vector to scale
             * @param {Number} b amount to scale the vector by
             * @returns {vec4} out
             */
            vec4.scale = function (out, a, b) {
                out[0] = a[0] * b;
                out[1] = a[1] * b;
                out[2] = a[2] * b;
                out[3] = a[3] * b;
                return out;
            };

            /**
             * Adds two vec4's after scaling the second operand by a scalar value
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @param {Number} scale the amount to scale b by before adding
             * @returns {vec4} out
             */
            vec4.scaleAndAdd = function (out, a, b, scale) {
                out[0] = a[0] + (b[0] * scale);
                out[1] = a[1] + (b[1] * scale);
                out[2] = a[2] + (b[2] * scale);
                out[3] = a[3] + (b[3] * scale);
                return out;
            };

            /**
             * Calculates the euclidian distance between two vec4's
             *
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {Number} distance between a and b
             */
            vec4.distance = function (a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2],
                    w = b[3] - a[3];
                return Math.sqrt(x * x + y * y + z * z + w * w);
            };

            /**
             * Alias for {@link vec4.distance}
             * @function
             */
            vec4.dist = vec4.distance;

            /**
             * Calculates the squared euclidian distance between two vec4's
             *
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {Number} squared distance between a and b
             */
            vec4.squaredDistance = function (a, b) {
                var x = b[0] - a[0],
                    y = b[1] - a[1],
                    z = b[2] - a[2],
                    w = b[3] - a[3];
                return x * x + y * y + z * z + w * w;
            };

            /**
             * Alias for {@link vec4.squaredDistance}
             * @function
             */
            vec4.sqrDist = vec4.squaredDistance;

            /**
             * Calculates the length of a vec4
             *
             * @param {vec4} a vector to calculate length of
             * @returns {Number} length of a
             */
            vec4.length = function (a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3];
                return Math.sqrt(x * x + y * y + z * z + w * w);
            };

            /**
             * Alias for {@link vec4.length}
             * @function
             */
            vec4.len = vec4.length;

            /**
             * Calculates the squared length of a vec4
             *
             * @param {vec4} a vector to calculate squared length of
             * @returns {Number} squared length of a
             */
            vec4.squaredLength = function (a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3];
                return x * x + y * y + z * z + w * w;
            };

            /**
             * Alias for {@link vec4.squaredLength}
             * @function
             */
            vec4.sqrLen = vec4.squaredLength;

            /**
             * Negates the components of a vec4
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a vector to negate
             * @returns {vec4} out
             */
            vec4.negate = function (out, a) {
                out[0] = -a[0];
                out[1] = -a[1];
                out[2] = -a[2];
                out[3] = -a[3];
                return out;
            };

            /**
             * Returns the inverse of the components of a vec4
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a vector to invert
             * @returns {vec4} out
             */
            vec4.inverse = function (out, a) {
                out[0] = 1.0 / a[0];
                out[1] = 1.0 / a[1];
                out[2] = 1.0 / a[2];
                out[3] = 1.0 / a[3];
                return out;
            };

            /**
             * Normalize a vec4
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a vector to normalize
             * @returns {vec4} out
             */
            vec4.normalize = function (out, a) {
                var x = a[0],
                    y = a[1],
                    z = a[2],
                    w = a[3];
                var len = x * x + y * y + z * z + w * w;
                if (len > 0) {
                    len = 1 / Math.sqrt(len);
                    out[0] = a[0] * len;
                    out[1] = a[1] * len;
                    out[2] = a[2] * len;
                    out[3] = a[3] * len;
                }
                return out;
            };

            /**
             * Calculates the dot product of two vec4's
             *
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @returns {Number} dot product of a and b
             */
            vec4.dot = function (a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
            };

            /**
             * Performs a linear interpolation between two vec4's
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the first operand
             * @param {vec4} b the second operand
             * @param {Number} t interpolation amount between the two inputs
             * @returns {vec4} out
             */
            vec4.lerp = function (out, a, b, t) {
                var ax = a[0],
                    ay = a[1],
                    az = a[2],
                    aw = a[3];
                out[0] = ax + t * (b[0] - ax);
                out[1] = ay + t * (b[1] - ay);
                out[2] = az + t * (b[2] - az);
                out[3] = aw + t * (b[3] - aw);
                return out;
            };

            /**
             * Generates a random vector with the given scale
             *
             * @param {vec4} out the receiving vector
             * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
             * @returns {vec4} out
             */
            vec4.random = function (out, scale) {
                scale = scale || 1.0;

                //TODO: This is a pretty awful way of doing this. Find something better.
                out[0] = Object(__WEBPACK_IMPORTED_MODULE_0__common__["c" /* GLMAT_RANDOM */])();
                out[1] = Object(__WEBPACK_IMPORTED_MODULE_0__common__["c" /* GLMAT_RANDOM */])();
                out[2] = Object(__WEBPACK_IMPORTED_MODULE_0__common__["c" /* GLMAT_RANDOM */])();
                out[3] = Object(__WEBPACK_IMPORTED_MODULE_0__common__["c" /* GLMAT_RANDOM */])();
                vec4.normalize(out, out);
                vec4.scale(out, out, scale);
                return out;
            };

            /**
             * Transforms the vec4 with a mat4.
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the vector to transform
             * @param {mat4} m matrix to transform with
             * @returns {vec4} out
             */
            vec4.transformMat4 = function (out, a, m) {
                var x = a[0], y = a[1], z = a[2], w = a[3];
                out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
                out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
                out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
                out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
                return out;
            };

            /**
             * Transforms the vec4 with a quat
             *
             * @param {vec4} out the receiving vector
             * @param {vec4} a the vector to transform
             * @param {quat} q quaternion to transform with
             * @returns {vec4} out
             */
            vec4.transformQuat = function (out, a, q) {
                var x = a[0], y = a[1], z = a[2],
                    qx = q[0], qy = q[1], qz = q[2], qw = q[3],

                    // calculate quat * vec
                    ix = qw * x + qy * z - qz * y,
                    iy = qw * y + qz * x - qx * z,
                    iz = qw * z + qx * y - qy * x,
                    iw = -qx * x - qy * y - qz * z;

                // calculate result * inverse quat
                out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
                return out;
            };

            /**
             * Perform some operation over an array of vec4s.
             *
             * @param {Array} a the array of vectors to iterate over
             * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
             * @param {Number} offset Number of elements to skip at the beginning of the array
             * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
             * @param {Function} fn Function to call for each vector in the array
             * @param {Object} [arg] additional argument to pass to fn
             * @returns {Array} a
             * @function
             */
            vec4.forEach = (function () {
                var vec = vec4.create();

                return function (a, stride, offset, count, fn, arg) {
                    var i, l;
                    if (!stride) {
                        stride = 4;
                    }

                    if (!offset) {
                        offset = 0;
                    }

                    if (count) {
                        l = Math.min((count * stride) + offset, a.length);
                    } else {
                        l = a.length;
                    }

                    for (i = offset; i < l; i += stride) {
                        vec[0] = a[i]; vec[1] = a[i + 1]; vec[2] = a[i + 2]; vec[3] = a[i + 3];
                        fn(vec, vec, arg);
                        a[i] = vec[0]; a[i + 1] = vec[1]; a[i + 2] = vec[2]; a[i + 3] = vec[3];
                    }

                    return a;
                };
            })();

/* harmony default export */ __webpack_exports__["a"] = (vec4);

            /***/
}),
/* 34 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(20);

            /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
            
            Redistribution and use in source and binary forms, with or without modification,
            are permitted provided that the following conditions are met:
            
              * Redistributions of source code must retain the above copyright notice, this
                list of conditions and the following disclaimer.
              * Redistributions in binary form must reproduce the above copyright notice,
                this list of conditions and the following disclaimer in the documentation
                and/or other materials provided with the distribution.
            
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
            ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
            DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
            ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
            (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
            LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
            ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
            (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
            SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */



            /**
             * @class 3x3 Matrix
             * @name mat3
             */

            var mat3 = {};

            /**
             * Creates a new identity mat3
             *
             * @returns {mat3} a new 3x3 matrix
             */
            mat3.create = function () {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](9);
                out[0] = 1;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 1;
                out[5] = 0;
                out[6] = 0;
                out[7] = 0;
                out[8] = 1;
                return out;
            };

            /**
             * Copies the upper-left 3x3 values into the given mat3.
             *
             * @param {mat3} out the receiving 3x3 matrix
             * @param {mat4} a   the source 4x4 matrix
             * @returns {mat3} out
             */
            mat3.fromMat4 = function (out, a) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[4];
                out[4] = a[5];
                out[5] = a[6];
                out[6] = a[8];
                out[7] = a[9];
                out[8] = a[10];
                return out;
            };

            /**
             * Creates a new mat3 initialized with values from an existing matrix
             *
             * @param {mat3} a matrix to clone
             * @returns {mat3} a new 3x3 matrix
             */
            mat3.clone = function (a) {
                var out = new __WEBPACK_IMPORTED_MODULE_0__common__["a" /* GLMAT_ARRAY_TYPE */](9);
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[8] = a[8];
                return out;
            };

            /**
             * Copy the values from one mat3 to another
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the source matrix
             * @returns {mat3} out
             */
            mat3.copy = function (out, a) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[8] = a[8];
                return out;
            };

            /**
             * Set a mat3 to the identity matrix
             *
             * @param {mat3} out the receiving matrix
             * @returns {mat3} out
             */
            mat3.identity = function (out) {
                out[0] = 1;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 1;
                out[5] = 0;
                out[6] = 0;
                out[7] = 0;
                out[8] = 1;
                return out;
            };

            /**
             * Transpose the values of a mat3
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the source matrix
             * @returns {mat3} out
             */
            mat3.transpose = function (out, a) {
                // If we are transposing ourselves we can skip a few steps but have to cache some values
                if (out === a) {
                    var a01 = a[1], a02 = a[2], a12 = a[5];
                    out[1] = a[3];
                    out[2] = a[6];
                    out[3] = a01;
                    out[5] = a[7];
                    out[6] = a02;
                    out[7] = a12;
                } else {
                    out[0] = a[0];
                    out[1] = a[3];
                    out[2] = a[6];
                    out[3] = a[1];
                    out[4] = a[4];
                    out[5] = a[7];
                    out[6] = a[2];
                    out[7] = a[5];
                    out[8] = a[8];
                }

                return out;
            };

            /**
             * Inverts a mat3
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the source matrix
             * @returns {mat3} out
             */
            mat3.invert = function (out, a) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[3], a11 = a[4], a12 = a[5],
                    a20 = a[6], a21 = a[7], a22 = a[8],

                    b01 = a22 * a11 - a12 * a21,
                    b11 = -a22 * a10 + a12 * a20,
                    b21 = a21 * a10 - a11 * a20,

                    // Calculate the determinant
                    det = a00 * b01 + a01 * b11 + a02 * b21;

                if (!det) {
                    return null;
                }
                det = 1.0 / det;

                out[0] = b01 * det;
                out[1] = (-a22 * a01 + a02 * a21) * det;
                out[2] = (a12 * a01 - a02 * a11) * det;
                out[3] = b11 * det;
                out[4] = (a22 * a00 - a02 * a20) * det;
                out[5] = (-a12 * a00 + a02 * a10) * det;
                out[6] = b21 * det;
                out[7] = (-a21 * a00 + a01 * a20) * det;
                out[8] = (a11 * a00 - a01 * a10) * det;
                return out;
            };

            /**
             * Calculates the adjugate of a mat3
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the source matrix
             * @returns {mat3} out
             */
            mat3.adjoint = function (out, a) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[3], a11 = a[4], a12 = a[5],
                    a20 = a[6], a21 = a[7], a22 = a[8];

                out[0] = (a11 * a22 - a12 * a21);
                out[1] = (a02 * a21 - a01 * a22);
                out[2] = (a01 * a12 - a02 * a11);
                out[3] = (a12 * a20 - a10 * a22);
                out[4] = (a00 * a22 - a02 * a20);
                out[5] = (a02 * a10 - a00 * a12);
                out[6] = (a10 * a21 - a11 * a20);
                out[7] = (a01 * a20 - a00 * a21);
                out[8] = (a00 * a11 - a01 * a10);
                return out;
            };

            /**
             * Calculates the determinant of a mat3
             *
             * @param {mat3} a the source matrix
             * @returns {Number} determinant of a
             */
            mat3.determinant = function (a) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[3], a11 = a[4], a12 = a[5],
                    a20 = a[6], a21 = a[7], a22 = a[8];

                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
            };

            /**
             * Multiplies two mat3's
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the first operand
             * @param {mat3} b the second operand
             * @returns {mat3} out
             */
            mat3.multiply = function (out, a, b) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[3], a11 = a[4], a12 = a[5],
                    a20 = a[6], a21 = a[7], a22 = a[8],

                    b00 = b[0], b01 = b[1], b02 = b[2],
                    b10 = b[3], b11 = b[4], b12 = b[5],
                    b20 = b[6], b21 = b[7], b22 = b[8];

                out[0] = b00 * a00 + b01 * a10 + b02 * a20;
                out[1] = b00 * a01 + b01 * a11 + b02 * a21;
                out[2] = b00 * a02 + b01 * a12 + b02 * a22;

                out[3] = b10 * a00 + b11 * a10 + b12 * a20;
                out[4] = b10 * a01 + b11 * a11 + b12 * a21;
                out[5] = b10 * a02 + b11 * a12 + b12 * a22;

                out[6] = b20 * a00 + b21 * a10 + b22 * a20;
                out[7] = b20 * a01 + b21 * a11 + b22 * a21;
                out[8] = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
            };

            /**
             * Alias for {@link mat3.multiply}
             * @function
             */
            mat3.mul = mat3.multiply;

            /**
             * Translate a mat3 by the given vector
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the matrix to translate
             * @param {vec2} v vector to translate by
             * @returns {mat3} out
             */
            mat3.translate = function (out, a, v) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[3], a11 = a[4], a12 = a[5],
                    a20 = a[6], a21 = a[7], a22 = a[8],
                    x = v[0], y = v[1];

                out[0] = a00;
                out[1] = a01;
                out[2] = a02;

                out[3] = a10;
                out[4] = a11;
                out[5] = a12;

                out[6] = x * a00 + y * a10 + a20;
                out[7] = x * a01 + y * a11 + a21;
                out[8] = x * a02 + y * a12 + a22;
                return out;
            };

            /**
             * Rotates a mat3 by the given angle
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the matrix to rotate
             * @param {Number} rad the angle to rotate the matrix by
             * @returns {mat3} out
             */
            mat3.rotate = function (out, a, rad) {
                var a00 = a[0], a01 = a[1], a02 = a[2],
                    a10 = a[3], a11 = a[4], a12 = a[5],
                    a20 = a[6], a21 = a[7], a22 = a[8],

                    s = Math.sin(rad),
                    c = Math.cos(rad);

                out[0] = c * a00 + s * a10;
                out[1] = c * a01 + s * a11;
                out[2] = c * a02 + s * a12;

                out[3] = c * a10 - s * a00;
                out[4] = c * a11 - s * a01;
                out[5] = c * a12 - s * a02;

                out[6] = a20;
                out[7] = a21;
                out[8] = a22;
                return out;
            };

            /**
             * Scales the mat3 by the dimensions in the given vec2
             *
             * @param {mat3} out the receiving matrix
             * @param {mat3} a the matrix to rotate
             * @param {vec2} v the vec2 to scale the matrix by
             * @returns {mat3} out
             **/
            mat3.scale = function (out, a, v) {
                var x = v[0], y = v[1];

                out[0] = x * a[0];
                out[1] = x * a[1];
                out[2] = x * a[2];

                out[3] = y * a[3];
                out[4] = y * a[4];
                out[5] = y * a[5];

                out[6] = a[6];
                out[7] = a[7];
                out[8] = a[8];
                return out;
            };

            /**
             * Copies the values from a mat2d into a mat3
             *
             * @param {mat3} out the receiving matrix
             * @param {mat2d} a the matrix to copy
             * @returns {mat3} out
             **/
            mat3.fromMat2d = function (out, a) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = 0;

                out[3] = a[2];
                out[4] = a[3];
                out[5] = 0;

                out[6] = a[4];
                out[7] = a[5];
                out[8] = 1;
                return out;
            };

            /**
            * Calculates a 3x3 matrix from the given quaternion
            *
            * @param {mat3} out mat3 receiving operation result
            * @param {quat} q Quaternion to create matrix from
            *
            * @returns {mat3} out
            */
            mat3.fromQuat = function (out, q) {
                var x = q[0], y = q[1], z = q[2], w = q[3],
                    x2 = x + x,
                    y2 = y + y,
                    z2 = z + z,

                    xx = x * x2,
                    yx = y * x2,
                    yy = y * y2,
                    zx = z * x2,
                    zy = z * y2,
                    zz = z * z2,
                    wx = w * x2,
                    wy = w * y2,
                    wz = w * z2;

                out[0] = 1 - yy - zz;
                out[3] = yx - wz;
                out[6] = zx + wy;

                out[1] = yx + wz;
                out[4] = 1 - xx - zz;
                out[7] = zy - wx;

                out[2] = zx - wy;
                out[5] = zy + wx;
                out[8] = 1 - xx - yy;

                return out;
            };

            /**
            * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
            *
            * @param {mat3} out mat3 receiving operation result
            * @param {mat4} a Mat4 to derive the normal matrix from
            *
            * @returns {mat3} out
            */
            mat3.normalFromMat4 = function (out, a) {
                var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
                    a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
                    a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
                    a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

                    b00 = a00 * a11 - a01 * a10,
                    b01 = a00 * a12 - a02 * a10,
                    b02 = a00 * a13 - a03 * a10,
                    b03 = a01 * a12 - a02 * a11,
                    b04 = a01 * a13 - a03 * a11,
                    b05 = a02 * a13 - a03 * a12,
                    b06 = a20 * a31 - a21 * a30,
                    b07 = a20 * a32 - a22 * a30,
                    b08 = a20 * a33 - a23 * a30,
                    b09 = a21 * a32 - a22 * a31,
                    b10 = a21 * a33 - a23 * a31,
                    b11 = a22 * a33 - a23 * a32,

                    // Calculate the determinant
                    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                    return null;
                }
                det = 1.0 / det;

                out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

                out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

                out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

                return out;
            };

            /**
             * Returns Frobenius norm of a mat3
             *
             * @param {mat3} a the matrix to calculate Frobenius norm of
             * @returns {Number} Frobenius norm
             */
            mat3.frob = function (a) {
                return (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
            };


/* harmony default export */ __webpack_exports__["a"] = (mat3);

            /***/
}),
/* 35 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Quaternion__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_BoundingBox__ = __webpack_require__(18);







            var nameId = 0;

            /**
             * @constructor clay.Node
             * @extends clay.core.Base
             */
            var Node = __WEBPACK_IMPORTED_MODULE_0__core_Base__["a" /* default */].extend(/** @lends clay.Node# */{
                /**
                 * Scene node name
                 * @type {string}
                 */
                name: '',

                /**
                 * Position relative to its parent node. aka translation.
                 * @type {clay.Vector3}
                 */
                position: null,

                /**
                 * Rotation relative to its parent node. Represented by a quaternion
                 * @type {clay.Quaternion}
                 */
                rotation: null,

                /**
                 * Scale relative to its parent node
                 * @type {clay.Vector3}
                 */
                scale: null,

                /**
                 * Affine transform matrix relative to its root scene.
                 * @type {clay.Matrix4}
                 */
                worldTransform: null,

                /**
                 * Affine transform matrix relative to its parent node.
                 * Composited with position, rotation and scale.
                 * @type {clay.Matrix4}
                 */
                localTransform: null,

                /**
                 * If the local transform is update from SRT(scale, rotation, translation, which is position here) each frame
                 * @type {boolean}
                 */
                autoUpdateLocalTransform: true,

                /**
                 * Parent of current scene node
                 * @type {?clay.Node}
                 * @private
                 */
                _parent: null,
                /**
                 * The root scene mounted. Null if it is a isolated node
                 * @type {?clay.Scene}
                 * @private
                 */
                _scene: null,
                /**
                 * @type {boolean}
                 * @private
                 */
                _needsUpdateWorldTransform: true,
                /**
                 * @type {boolean}
                 * @private
                 */
                _inIterating: false,

                // Depth for transparent list sorting
                __depth: 0

            }, function () {

                if (!this.name) {
                    this.name = (this.type || 'NODE') + '_' + (nameId++);
                }

                if (!this.position) {
                    this.position = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* default */]();
                }
                if (!this.rotation) {
                    this.rotation = new __WEBPACK_IMPORTED_MODULE_2__math_Quaternion__["a" /* default */]();
                }
                if (!this.scale) {
                    this.scale = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* default */](1, 1, 1);
                }

                this.worldTransform = new __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */]();
                this.localTransform = new __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */]();

                this._children = [];

            },
                /**@lends clay.Node.prototype. */
                {

                    /**
                     * @type {?clay.Vector3}
                     * @instance
                     */
                    target: null,
                    /**
                     * If node and its chilren invisible
                     * @type {boolean}
                     * @instance
                     */
                    invisible: false,

                    /**
                     * If Node is a skinned mesh
                     * @return {boolean}
                     */
                    isSkinnedMesh: function () {
                        return false;
                    },
                    /**
                     * Return true if it is a renderable scene node, like Mesh and ParticleSystem
                     * @return {boolean}
                     */
                    isRenderable: function () {
                        return false;
                    },

                    /**
                     * Set the name of the scene node
                     * @param {string} name
                     */
                    setName: function (name) {
                        var scene = this._scene;
                        if (scene) {
                            var nodeRepository = scene._nodeRepository;
                            delete nodeRepository[this.name];
                            nodeRepository[name] = this;
                        }
                        this.name = name;
                    },

                    /**
                     * Add a child node
                     * @param {clay.Node} node
                     */
                    add: function (node) {
                        var originalParent = node._parent;
                        if (originalParent === this) {
                            return;
                        }
                        if (originalParent) {
                            originalParent.remove(node);
                        }
                        node._parent = this;
                        this._children.push(node);

                        var scene = this._scene;
                        if (scene && scene !== node.scene) {
                            node.traverse(this._addSelfToScene, this);
                        }
                        // Mark children needs update transform
                        // In case child are remove and added again after parent moved
                        node._needsUpdateWorldTransform = true;
                    },

                    /**
                     * Remove the given child scene node
                     * @param {clay.Node} node
                     */
                    remove: function (node) {
                        var children = this._children;
                        var idx = children.indexOf(node);
                        if (idx < 0) {
                            return;
                        }

                        children.splice(idx, 1);
                        node._parent = null;

                        if (this._scene) {
                            node.traverse(this._removeSelfFromScene, this);
                        }
                    },

                    /**
                     * Remove all children
                     */
                    removeAll: function () {
                        var children = this._children;

                        for (var idx = 0; idx < children.length; idx++) {
                            children[idx]._parent = null;

                            if (this._scene) {
                                children[idx].traverse(this._removeSelfFromScene, this);
                            }
                        }

                        this._children = [];
                    },

                    /**
                     * Get the scene mounted
                     * @return {clay.Scene}
                     */
                    getScene: function () {
                        return this._scene;
                    },

                    /**
                     * Get parent node
                     * @return {clay.Scene}
                     */
                    getParent: function () {
                        return this._parent;
                    },

                    _removeSelfFromScene: function (descendant) {
                        descendant._scene.removeFromScene(descendant);
                        descendant._scene = null;
                    },

                    _addSelfToScene: function (descendant) {
                        this._scene.addToScene(descendant);
                        descendant._scene = this._scene;
                    },

                    /**
                     * Return true if it is ancestor of the given scene node
                     * @param {clay.Node} node
                     */
                    isAncestor: function (node) {
                        var parent = node._parent;
                        while (parent) {
                            if (parent === this) {
                                return true;
                            }
                            parent = parent._parent;
                        }
                        return false;
                    },

                    /**
                     * Get a new created array of all children nodes
                     * @return {clay.Node[]}
                     */
                    children: function () {
                        return this._children.slice();
                    },

                    /**
                     * Get child scene node at given index.
                     * @param {number} idx
                     * @return {clay.Node}
                     */
                    childAt: function (idx) {
                        return this._children[idx];
                    },

                    /**
                     * Get first child with the given name
                     * @param {string} name
                     * @return {clay.Node}
                     */
                    getChildByName: function (name) {
                        var children = this._children;
                        for (var i = 0; i < children.length; i++) {
                            if (children[i].name === name) {
                                return children[i];
                            }
                        }
                    },

                    /**
                     * Get first descendant have the given name
                     * @param {string} name
                     * @return {clay.Node}
                     */
                    getDescendantByName: function (name) {
                        var children = this._children;
                        for (var i = 0; i < children.length; i++) {
                            var child = children[i];
                            if (child.name === name) {
                                return child;
                            } else {
                                var res = child.getDescendantByName(name);
                                if (res) {
                                    return res;
                                }
                            }
                        }
                    },

                    /**
                     * Query descendant node by path
                     * @param {string} path
                     * @return {clay.Node}
                     * @example
                     *  node.queryNode('root/parent/child');
                     */
                    queryNode: function (path) {
                        if (!path) {
                            return;
                        }
                        // TODO Name have slash ?
                        var pathArr = path.split('/');
                        var current = this;
                        for (var i = 0; i < pathArr.length; i++) {
                            var name = pathArr[i];
                            // Skip empty
                            if (!name) {
                                continue;
                            }
                            var found = false;
                            var children = current._children;
                            for (var j = 0; j < children.length; j++) {
                                var child = children[j];
                                if (child.name === name) {
                                    current = child;
                                    found = true;
                                    break;
                                }
                            }
                            // Early return if not found
                            if (!found) {
                                return;
                            }
                        }

                        return current;
                    },

                    /**
                     * Get query path, relative to rootNode(default is scene)
                     * @param {clay.Node} [rootNode]
                     * @return {string}
                     */
                    getPath: function (rootNode) {
                        if (!this._parent) {
                            return '/';
                        }

                        var current = this._parent;
                        var path = this.name;
                        while (current._parent) {
                            path = current.name + '/' + path;
                            if (current._parent == rootNode) {
                                break;
                            }
                            current = current._parent;
                        }
                        if (!current._parent && rootNode) {
                            return null;
                        }
                        return path;
                    },

                    /**
                     * Depth first traverse all its descendant scene nodes.
                     *
                     * **WARN** Don't do `add`, `remove` operation in the callback during traverse.
                     * @param {Function} callback
                     * @param {Node} [context]
                     */
                    traverse: function (callback, context) {
                        callback.call(context, this);
                        var _children = this._children;
                        for (var i = 0, len = _children.length; i < len; i++) {
                            _children[i].traverse(callback, context);
                        }
                    },

                    /**
                     * Traverse all children nodes.
                     *
                     * **WARN** DON'T do `add`, `remove` operation in the callback during iteration.
                     *
                     * @param {Function} callback
                     * @param {Node} [context]
                     */
                    eachChild: function (callback, context) {
                        var _children = this._children;
                        for (var i = 0, len = _children.length; i < len; i++) {
                            var child = _children[i];
                            callback.call(context, child, i);
                        }
                    },

                    /**
                     * Set the local transform and decompose to SRT
                     * @param {clay.Matrix4} matrix
                     */
                    setLocalTransform: function (matrix) {
                        __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].copy(this.localTransform.array, matrix.array);
                        this.decomposeLocalTransform();
                    },

                    /**
                     * Decompose the local transform to SRT
                     */
                    decomposeLocalTransform: function (keepScale) {
                        var scale = !keepScale ? this.scale : null;
                        this.localTransform.decomposeMatrix(scale, this.rotation, this.position);
                    },

                    /**
                     * Set the world transform and decompose to SRT
                     * @param {clay.Matrix4} matrix
                     */
                    setWorldTransform: function (matrix) {
                        __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].copy(this.worldTransform.array, matrix.array);
                        this.decomposeWorldTransform();
                    },

                    /**
                     * Decompose the world transform to SRT
                     * @function
                     */
                    decomposeWorldTransform: (function () {

                        var tmp = __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].create();

                        return function (keepScale) {
                            var localTransform = this.localTransform;
                            var worldTransform = this.worldTransform;
                            // Assume world transform is updated
                            if (this._parent) {
                                __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].invert(tmp, this._parent.worldTransform.array);
                                __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].multiply(localTransform.array, tmp, worldTransform.array);
                            } else {
                                __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].copy(localTransform.array, worldTransform.array);
                            }
                            var scale = !keepScale ? this.scale : null;
                            localTransform.decomposeMatrix(scale, this.rotation, this.position);
                        };
                    })(),

                    transformNeedsUpdate: function () {
                        return this.position._dirty
                            || this.rotation._dirty
                            || this.scale._dirty;
                    },

                    /**
                     * Update local transform from SRT
                     * Notice that local transform will not be updated if _dirty mark of position, rotation, scale is all false
                     */
                    updateLocalTransform: function () {
                        var position = this.position;
                        var rotation = this.rotation;
                        var scale = this.scale;

                        if (this.transformNeedsUpdate()) {
                            var m = this.localTransform.array;

                            // Transform order, scale->rotation->position
                            __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].fromRotationTranslation(m, rotation.array, position.array);

                            __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].scale(m, m, scale.array);

                            rotation._dirty = false;
                            scale._dirty = false;
                            position._dirty = false;

                            this._needsUpdateWorldTransform = true;
                        }
                    },

                    /**
                     * Update world transform, assume its parent world transform have been updated
                     * @private
                     */
                    _updateWorldTransformTopDown: function () {
                        var localTransform = this.localTransform.array;
                        var worldTransform = this.worldTransform.array;
                        if (this._parent) {
                            __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].multiplyAffine(
                                worldTransform,
                                this._parent.worldTransform.array,
                                localTransform
                            );
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_4__glmatrix_mat4__["a" /* default */].copy(worldTransform, localTransform);
                        }
                    },

                    /**
                     * Update world transform before whole scene is updated.
                     */
                    updateWorldTransform: function () {
                        // Find the root node which transform needs update;
                        var rootNodeIsDirty = this;
                        while (rootNodeIsDirty && rootNodeIsDirty.getParent()
                            && rootNodeIsDirty.getParent().transformNeedsUpdate()
                        ) {
                            rootNodeIsDirty = rootNodeIsDirty.getParent();
                        }
                        rootNodeIsDirty.update();
                    },

                    /**
                     * Update local transform and world transform recursively
                     * @param {boolean} forceUpdateWorld
                     */
                    update: function (forceUpdateWorld) {
                        if (this.autoUpdateLocalTransform) {
                            this.updateLocalTransform();
                        }
                        else {
                            // Transform is manually setted
                            forceUpdateWorld = true;
                        }

                        if (forceUpdateWorld || this._needsUpdateWorldTransform) {
                            this._updateWorldTransformTopDown();
                            forceUpdateWorld = true;
                            this._needsUpdateWorldTransform = false;
                        }

                        var children = this._children;
                        for (var i = 0, len = children.length; i < len; i++) {
                            children[i].update(forceUpdateWorld);
                        }
                    },

                    /**
                     * Get bounding box of node
                     * @param  {Function} [filter]
                     * @param  {clay.BoundingBox} [out]
                     * @return {clay.BoundingBox}
                     */
                    // TODO Skinning
                    getBoundingBox: (function () {
                        function defaultFilter(el) {
                            return !el.invisible && el.geometry;
                        }
                        var tmpBBox = new __WEBPACK_IMPORTED_MODULE_5__math_BoundingBox__["a" /* default */]();
                        var tmpMat4 = new __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */]();
                        var invWorldTransform = new __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */]();
                        return function (filter, out) {
                            out = out || new __WEBPACK_IMPORTED_MODULE_5__math_BoundingBox__["a" /* default */]();
                            filter = filter || defaultFilter;

                            if (this._parent) {
                                __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */].invert(invWorldTransform, this._parent.worldTransform);
                            }
                            else {
                                __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */].identity(invWorldTransform);
                            }

                            this.traverse(function (mesh) {
                                if (mesh.geometry && mesh.geometry.boundingBox) {
                                    tmpBBox.copy(mesh.geometry.boundingBox);
                                    __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */].multiply(tmpMat4, invWorldTransform, mesh.worldTransform);
                                    tmpBBox.applyTransform(tmpMat4);
                                    out.union(tmpBBox);
                                }
                            }, this, defaultFilter);

                            return out;
                        };
                    })(),

                    /**
                     * Get world position, extracted from world transform
                     * @param  {clay.Vector3} [out]
                     * @return {clay.Vector3}
                     */
                    getWorldPosition: function (out) {
                        // PENDING
                        if (this.transformNeedsUpdate()) {
                            this.updateWorldTransform();
                        }
                        var m = this.worldTransform.array;
                        if (out) {
                            var arr = out.array;
                            arr[0] = m[12];
                            arr[1] = m[13];
                            arr[2] = m[14];
                            return out;
                        }
                        else {
                            return new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* default */](m[12], m[13], m[14]);
                        }
                    },

                    /**
                     * Clone a new node
                     * @return {Node}
                     */
                    clone: function () {
                        var node = new this.constructor();

                        var children = this._children;

                        node.setName(this.name);
                        node.position.copy(this.position);
                        node.rotation.copy(this.rotation);
                        node.scale.copy(this.scale);

                        for (var i = 0; i < children.length; i++) {
                            node.add(children[i].clone());
                        }

                        return node;
                    },

                    /**
                     * Rotate the node around a axis by angle degrees, axis passes through point
                     * @param {clay.Vector3} point Center point
                     * @param {clay.Vector3} axis  Center axis
                     * @param {number}       angle Rotation angle
                     * @see http://docs.unity3d.com/Documentation/ScriptReference/Transform.RotateAround.html
                     * @function
                     */
                    rotateAround: (function () {
                        var v = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* default */]();
                        var RTMatrix = new __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */]();

                        // TODO improve performance
                        return function (point, axis, angle) {

                            v.copy(this.position).subtract(point);

                            var localTransform = this.localTransform;
                            localTransform.identity();
                            // parent node
                            localTransform.translate(point);
                            localTransform.rotate(angle, axis);

                            RTMatrix.fromRotationTranslation(this.rotation, v);
                            localTransform.multiply(RTMatrix);
                            localTransform.scale(this.scale);

                            this.decomposeLocalTransform();
                            this._needsUpdateWorldTransform = true;
                        };
                    })(),

                    /**
                     * @param {clay.Vector3} target
                     * @param {clay.Vector3} [up]
                     * @see http://www.opengl.org/sdk/docs/man2/xhtml/gluLookAt.xml
                     * @function
                     */
                    lookAt: (function () {
                        var m = new __WEBPACK_IMPORTED_MODULE_3__math_Matrix4__["a" /* default */]();
                        return function (target, up) {
                            m.lookAt(this.position, target, up || this.localTransform.y).invert();
                            this.setLocalTransform(m);

                            this.target = target;
                        };
                    })()
                });

/* harmony default export */ __webpack_exports__["a"] = (Node);


            /***/
}),
/* 36 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Node__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Light__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Camera__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_BoundingBox__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__glmatrix_mat4__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_LRU__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__ = __webpack_require__(9);









            var IDENTITY = __WEBPACK_IMPORTED_MODULE_5__glmatrix_mat4__["a" /* default */].create();
            var WORLDVIEW = __WEBPACK_IMPORTED_MODULE_5__glmatrix_mat4__["a" /* default */].create();

            var programKeyCache = {};

            function getProgramKey(lightNumbers) {
                var defineStr = [];
                var lightTypes = Object.keys(lightNumbers);
                lightTypes.sort();
                for (var i = 0; i < lightTypes.length; i++) {
                    var lightType = lightTypes[i];
                    defineStr.push(lightType + ' ' + lightNumbers[lightType]);
                }
                var key = defineStr.join('\n');

                if (programKeyCache[key]) {
                    return programKeyCache[key];
                }

                var id = __WEBPACK_IMPORTED_MODULE_4__core_util__["a" /* default */].genGUID();
                programKeyCache[key] = id;
                return id;
            }

            function RenderList() {

                this.opaque = [];
                this.transparent = [];

                this._opaqueCount = 0;
                this._transparentCount = 0;
            }

            RenderList.prototype.startCount = function () {
                this._opaqueCount = 0;
                this._transparentCount = 0;
            };

            RenderList.prototype.add = function (object, isTransparent) {
                if (isTransparent) {
                    this.transparent[this._transparentCount++] = object;
                }
                else {
                    this.opaque[this._opaqueCount++] = object;
                }
            };

            RenderList.prototype.endCount = function () {
                this.transparent.length = this._transparentCount;
                this.opaque.length = this._opaqueCount;
            };

            /**
             * @typedef {Object} clay.Scene.RenderList
             * @property {Array.<clay.Renderable>} opaque
             * @property {Array.<clay.Renderable>} transparent
             */

            /**
             * @constructor clay.Scene
             * @extends clay.Node
             */
            var Scene = __WEBPACK_IMPORTED_MODULE_0__Node__["a" /* default */].extend(function () {
                return /** @lends clay.Scene# */ {
                    /**
                     * Global material of scene
                     * @type {clay.Material}
                     */
                    material: null,

                    lights: [],

                    /**
                     * Scene bounding box in view space.
                     * Used when camera needs to adujst the near and far plane automatically
                     * so that the view frustum contains the visible objects as tightly as possible.
                     * Notice:
                     *  It is updated after rendering (in the step of frustum culling passingly). So may be not so accurate, but saves a lot of calculation
                     *
                     * @type {clay.BoundingBox}
                     */
                    viewBoundingBoxLastFrame: new __WEBPACK_IMPORTED_MODULE_3__math_BoundingBox__["a" /* default */](),

                    // Uniforms for shadow map.
                    shadowUniforms: {},

                    _cameraList: [],

                    // Properties to save the light information in the scene
                    // Will be set in the render function
                    _lightUniforms: {},

                    _previousLightNumber: {},

                    _lightNumber: {
                        // groupId: {
                        // POINT_LIGHT: 0,
                        // DIRECTIONAL_LIGHT: 0,
                        // SPOT_LIGHT: 0,
                        // AMBIENT_LIGHT: 0,
                        // AMBIENT_SH_LIGHT: 0
                        // }
                    },

                    _lightProgramKeys: {},

                    _nodeRepository: {},

                    _renderLists: new __WEBPACK_IMPORTED_MODULE_6__core_LRU__["a" /* default */](20)

                };
            }, function () {
                this._scene = this;
            },
                /** @lends clay.Scene.prototype. */
                {

                    // Add node to scene
                    addToScene: function (node) {
                        if (node instanceof __WEBPACK_IMPORTED_MODULE_2__Camera__["a" /* default */]) {
                            if (this._cameraList.length > 0) {
                                console.warn('Found multiple camera in one scene. Use the fist one.');
                            }
                            this._cameraList.push(node);
                        }
                        else if (node instanceof __WEBPACK_IMPORTED_MODULE_1__Light__["a" /* default */]) {
                            this.lights.push(node);
                        }
                        if (node.name) {
                            this._nodeRepository[node.name] = node;
                        }
                    },

                    // Remove node from scene
                    removeFromScene: function (node) {
                        var idx;
                        if (node instanceof __WEBPACK_IMPORTED_MODULE_2__Camera__["a" /* default */]) {
                            idx = this._cameraList.indexOf(node);
                            if (idx >= 0) {
                                this._cameraList.splice(idx, 1);
                            }
                        }
                        else if (node instanceof __WEBPACK_IMPORTED_MODULE_1__Light__["a" /* default */]) {
                            idx = this.lights.indexOf(node);
                            if (idx >= 0) {
                                this.lights.splice(idx, 1);
                            }
                        }
                        if (node.name) {
                            delete this._nodeRepository[node.name];
                        }
                    },

                    /**
                     * Get node by name
                     * @param  {string} name
                     * @return {Node}
                     * @DEPRECATED
                     */
                    getNode: function (name) {
                        return this._nodeRepository[name];
                    },

                    /**
                     * Set main camera of the scene.
                     * @param {claygl.Camera} camera
                     */
                    setMainCamera: function (camera) {
                        var idx = this._cameraList.indexOf(camera);
                        if (idx >= 0) {
                            this._cameraList.splice(idx, 1);
                        }
                        this._cameraList.unshift(camera);
                    },
                    /**
                     * Get main camera of the scene.
                     */
                    getMainCamera: function () {
                        return this._cameraList[0];
                    },

                    getLights: function () {
                        return this.lights;
                    },

                    updateLights: function () {
                        var lights = this.lights;
                        this._previousLightNumber = this._lightNumber;

                        var lightNumber = {};
                        for (var i = 0; i < lights.length; i++) {
                            var light = lights[i];
                            if (light.invisible) {
                                continue;
                            }
                            var group = light.group;
                            if (!lightNumber[group]) {
                                lightNumber[group] = {};
                            }
                            // User can use any type of light
                            lightNumber[group][light.type] = lightNumber[group][light.type] || 0;
                            lightNumber[group][light.type]++;
                        }
                        this._lightNumber = lightNumber;

                        for (var groupId in lightNumber) {
                            this._lightProgramKeys[groupId] = getProgramKey(lightNumber[groupId]);
                        }

                        this._updateLightUniforms();
                    },

                    /**
                     * Clone a node and it's children, including mesh, camera, light, etc.
                     * Unlike using `Node#clone`. It will clone skeleton and remap the joints. Material will also be cloned.
                     *
                     * @param {clay.Node} node
                     * @return {clay.Node}
                     */
                    cloneNode: function (node) {
                        var newNode = node.clone();
                        var clonedNodesMap = {};
                        function buildNodesMap(sNode, tNode) {
                            clonedNodesMap[sNode.__uid__] = tNode;

                            for (var i = 0; i < sNode._children.length; i++) {
                                var sChild = sNode._children[i];
                                var tChild = tNode._children[i];
                                buildNodesMap(sChild, tChild);
                            }
                        }
                        buildNodesMap(node, newNode);

                        newNode.traverse(function (newChild) {
                            if (newChild.skeleton) {
                                newChild.skeleton = newChild.skeleton.clone(clonedNodesMap);
                            }
                            if (newChild.material) {
                                newChild.material = newChild.material.clone();
                            }
                        });

                        return newNode;
                    },

                    /**
                     * Traverse the scene and add the renderable object to the render list.
                     * It needs camera for the frustum culling.
                     *
                     * @param {clay.Camera} camera
                     * @param {boolean} updateSceneBoundingBox
                     * @return {clay.Scene.RenderList}
                     */
                    updateRenderList: function (camera, updateSceneBoundingBox) {
                        var id = camera.__uid__;
                        var renderList = this._renderLists.get(id);
                        if (!renderList) {
                            renderList = new RenderList();
                            this._renderLists.put(id, renderList);
                        }
                        renderList.startCount();

                        if (updateSceneBoundingBox) {
                            this.viewBoundingBoxLastFrame.min.set(Infinity, Infinity, Infinity);
                            this.viewBoundingBoxLastFrame.max.set(-Infinity, -Infinity, -Infinity);
                        }

                        var sceneMaterialTransparent = this.material && this.material.transparent || false;
                        this._doUpdateRenderList(this, camera, sceneMaterialTransparent, renderList, updateSceneBoundingBox);

                        renderList.endCount();

                        return renderList;
                    },

                    /**
                     * Get render list. Used after {@link clay.Scene#updateRenderList}
                     * @param {clay.Camera} camera
                     * @return {clay.Scene.RenderList}
                     */
                    getRenderList: function (camera) {
                        return this._renderLists.get(camera.__uid__);
                    },

                    _doUpdateRenderList: function (parent, camera, sceneMaterialTransparent, renderList, updateSceneBoundingBox) {
                        if (parent.invisible) {
                            return;
                        }
                        // TODO Optimize
                        for (var i = 0; i < parent._children.length; i++) {
                            var child = parent._children[i];

                            if (child.isRenderable()) {
                                // Frustum culling
                                var worldM = child.isSkinnedMesh() ? IDENTITY : child.worldTransform.array;
                                var geometry = child.geometry;

                                __WEBPACK_IMPORTED_MODULE_5__glmatrix_mat4__["a" /* default */].multiplyAffine(WORLDVIEW, camera.viewMatrix.array, worldM);
                                if (updateSceneBoundingBox && !geometry.boundingBox || !this.isFrustumCulled(child, camera, WORLDVIEW)) {
                                    renderList.add(child, child.material.transparent || sceneMaterialTransparent);
                                }
                            }
                            if (child._children.length > 0) {
                                this._doUpdateRenderList(child, camera, sceneMaterialTransparent, renderList, updateSceneBoundingBox);
                            }
                        }
                    },

                    /**
                     * If an scene object is culled by camera frustum
                     *
                     * Object can be a renderable or a light
                     *
                     * @param {clay.Node} object
                     * @param {clay.Camera} camera
                     * @param {Array.<number>} worldViewMat represented with array
                     * @param {Array.<number>} projectionMat represented with array
                     */
                    isFrustumCulled: (function () {
                        // Frustum culling
                        // http://www.cse.chalmers.se/~uffe/vfc_bbox.pdf
                        var cullingBoundingBox = new __WEBPACK_IMPORTED_MODULE_3__math_BoundingBox__["a" /* default */]();
                        var cullingMatrix = new __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__["a" /* default */]();
                        return function (object, camera, worldViewMat) {
                            // Bounding box can be a property of object(like light) or renderable.geometry
                            // PENDING
                            var geoBBox = object.boundingBox;
                            if (!geoBBox) {
                                if (object.skeleton && object.skeleton.boundingBox) {
                                    geoBBox = object.skeleton.boundingBox;
                                }
                                else {
                                    geoBBox = object.geometry.boundingBox;
                                }
                            }

                            if (!geoBBox) {
                                return false;
                            }

                            cullingMatrix.array = worldViewMat;
                            cullingBoundingBox.transformFrom(geoBBox, cullingMatrix);

                            // Passingly update the scene bounding box
                            // FIXME exclude very large mesh like ground plane or terrain ?
                            // FIXME Only rendererable which cast shadow ?

                            // FIXME boundingBox becomes much larger after transformd.
                            if (object.castShadow) {
                                this.viewBoundingBoxLastFrame.union(cullingBoundingBox);
                            }
                            // Ignore frustum culling if object is skinned mesh.
                            if (object.frustumCulling) {
                                if (!cullingBoundingBox.intersectBoundingBox(camera.frustum.boundingBox)) {
                                    return true;
                                }

                                cullingMatrix.array = camera.projectionMatrix.array;
                                if (
                                    cullingBoundingBox.max.array[2] > 0 &&
                                    cullingBoundingBox.min.array[2] < 0
                                ) {
                                    // Clip in the near plane
                                    cullingBoundingBox.max.array[2] = -1e-20;
                                }

                                cullingBoundingBox.applyProjection(cullingMatrix);

                                var min = cullingBoundingBox.min.array;
                                var max = cullingBoundingBox.max.array;

                                if (
                                    max[0] < -1 || min[0] > 1
                                    || max[1] < -1 || min[1] > 1
                                    || max[2] < -1 || min[2] > 1
                                ) {
                                    return true;
                                }
                            }

                            return false;
                        };
                    })(),

                    _updateLightUniforms: function () {
                        var lights = this.lights;
                        // Put the light cast shadow before the light not cast shadow
                        lights.sort(lightSortFunc);

                        var lightUniforms = this._lightUniforms;
                        for (var group in lightUniforms) {
                            for (var symbol in lightUniforms[group]) {
                                lightUniforms[group][symbol].value.length = 0;
                            }
                        }
                        for (var i = 0; i < lights.length; i++) {

                            var light = lights[i];

                            if (light.invisible) {
                                continue;
                            }

                            var group = light.group;

                            for (var symbol in light.uniformTemplates) {
                                var uniformTpl = light.uniformTemplates[symbol];
                                var value = uniformTpl.value(light);
                                if (value == null) {
                                    continue;
                                }
                                if (!lightUniforms[group]) {
                                    lightUniforms[group] = {};
                                }
                                if (!lightUniforms[group][symbol]) {
                                    lightUniforms[group][symbol] = {
                                        type: '',
                                        value: []
                                    };
                                }
                                var lu = lightUniforms[group][symbol];
                                lu.type = uniformTpl.type + 'v';
                                switch (uniformTpl.type) {
                                    case '1i':
                                    case '1f':
                                    case 't':
                                        lu.value.push(value);
                                        break;
                                    case '2f':
                                    case '3f':
                                    case '4f':
                                        for (var j = 0; j < value.length; j++) {
                                            lu.value.push(value[j]);
                                        }
                                        break;
                                    default:
                                        console.error('Unkown light uniform type ' + uniformTpl.type);
                                }
                            }
                        }
                    },

                    getLightGroups: function () {
                        var lightGroups = [];
                        for (var groupId in this._lightNumber) {
                            lightGroups.push(groupId);
                        }
                        return lightGroups;
                    },

                    getNumberChangedLightGroups: function () {
                        var lightGroups = [];
                        for (var groupId in this._lightNumber) {
                            if (this.isLightNumberChanged(groupId)) {
                                lightGroups.push(groupId);
                            }
                        }
                        return lightGroups;
                    },

                    // Determine if light group is different with since last frame
                    // Used to determine whether to update shader and scene's uniforms in Renderer.render
                    isLightNumberChanged: function (lightGroup) {
                        var prevLightNumber = this._previousLightNumber;
                        var currentLightNumber = this._lightNumber;
                        // PENDING Performance
                        for (var type in currentLightNumber[lightGroup]) {
                            if (!prevLightNumber[lightGroup]) {
                                return true;
                            }
                            if (currentLightNumber[lightGroup][type] !== prevLightNumber[lightGroup][type]) {
                                return true;
                            }
                        }
                        for (var type in prevLightNumber[lightGroup]) {
                            if (!currentLightNumber[lightGroup]) {
                                return true;
                            }
                            if (currentLightNumber[lightGroup][type] !== prevLightNumber[lightGroup][type]) {
                                return true;
                            }
                        }
                        return false;
                    },

                    getLightsNumbers: function (lightGroup) {
                        return this._lightNumber[lightGroup];
                    },

                    getProgramKey: function (lightGroup) {
                        return this._lightProgramKeys[lightGroup];
                    },

                    setLightUniforms: (function () {
                        function setUniforms(uniforms, program, renderer) {
                            for (var symbol in uniforms) {
                                var lu = uniforms[symbol];
                                if (lu.type === 'tv') {
                                    if (!program.hasUniform(symbol)) {
                                        continue;
                                    }
                                    var texSlots = [];
                                    for (var i = 0; i < lu.value.length; i++) {
                                        var texture = lu.value[i];
                                        var slot = program.takeCurrentTextureSlot(renderer, texture);
                                        texSlots.push(slot);
                                    }
                                    program.setUniform(renderer.gl, '1iv', symbol, texSlots);
                                }
                                else {
                                    program.setUniform(renderer.gl, lu.type, symbol, lu.value);
                                }
                            }
                        }

                        return function (program, lightGroup, renderer) {
                            setUniforms(this._lightUniforms[lightGroup], program, renderer);
                            // Set shadows
                            setUniforms(this.shadowUniforms, program, renderer);
                        };
                    })(),

                    /**
                     * Dispose self, clear all the scene objects
                     * But resources of gl like texuture, shader will not be disposed.
                     * Mostly you should use disposeScene method in Renderer to do dispose.
                     */
                    dispose: function () {
                        this.material = null;
                        this._opaqueList = [];
                        this._transparentList = [];

                        this.lights = [];

                        this._lightUniforms = {};

                        this._lightNumber = {};
                        this._nodeRepository = {};
                    }
                });

            function lightSortFunc(a, b) {
                if (b.castShadow && !a.castShadow) {
                    return true;
                }
            }

/* harmony default export */ __webpack_exports__["a"] = (Scene);


            /***/
}),
/* 37 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(58);

            /**
             * @constructor clay.camera.Orthographic
             * @extends clay.Camera
             */
            var Orthographic = __WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* default */].extend(
                /** @lends clay.camera.Orthographic# */
                {
                    /**
                     * @type {number}
                     */
                    left: -1,
                    /**
                     * @type {number}
                     */
                    right: 1,
                    /**
                     * @type {number}
                     */
                    near: -1,
                    /**
                     * @type {number}
                     */
                    far: 1,
                    /**
                     * @type {number}
                     */
                    top: 1,
                    /**
                     * @type {number}
                     */
                    bottom: -1
                },
                /** @lends clay.camera.Orthographic.prototype */
                {

                    updateProjectionMatrix: function () {
                        this.projectionMatrix.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far);
                    },

                    decomposeProjectionMatrix: function () {
                        var m = this.projectionMatrix.array;
                        this.left = (-1 - m[12]) / m[0];
                        this.right = (1 - m[12]) / m[0];
                        this.top = (1 - m[13]) / m[5];
                        this.bottom = (-1 - m[13]) / m[5];
                        this.near = -(-1 - m[14]) / m[10];
                        this.far = -(1 - m[14]) / m[10];
                    },
                    /**
                     * @return {clay.camera.Orthographic}
                     */
                    clone: function () {
                        var camera = __WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* default */].prototype.clone.call(this);
                        camera.left = this.left;
                        camera.right = this.right;
                        camera.near = this.near;
                        camera.far = this.far;
                        camera.top = this.top;
                        camera.bottom = this.bottom;

                        return camera;
                    }
                });

/* harmony default export */ __webpack_exports__["a"] = (Orthographic);


            /***/
}),
/* 38 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
                convertToDynamicArray: function (clear) {
                    if (clear) {
                        this.resetOffset();
                    }
                    var attributes = this.attributes;
                    for (var name in attributes) {
                        if (clear || !attributes[name].value) {
                            attributes[name].value = [];
                        }
                        else {
                            attributes[name].value = Array.prototype.slice.call(attributes[name].value);
                        }
                    }
                    if (clear || !this.indices) {
                        this.indices = [];
                    }
                    else {
                        this.indices = Array.prototype.slice.call(this.indices);
                    }
                },

                convertToTypedArray: function () {
                    var attributes = this.attributes;
                    for (var name in attributes) {
                        if (attributes[name].value && attributes[name].value.length > 0) {
                            attributes[name].value = new Float32Array(attributes[name].value);
                        }
                        else {
                            attributes[name].value = null;
                        }
                    }
                    if (this.indices && this.indices.length > 0) {
                        this.indices = this.vertexCount > 0xffff ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
                    }

                    this.dirty();
                }
            });

            /***/
}),
/* 39 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts__);


            function otherDimToDataDim(data, otherDim) {
                var dataDim = [];
                __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.each(data.dimensions, function (dimName) {
                    var dimItem = data.getDimensionInfo(dimName);
                    var otherDims = dimItem.otherDims;
                    var dimIndex = otherDims[otherDim];
                    if (dimIndex != null && dimIndex !== false) {
                        dataDim[dimIndex] = dimItem.name;
                    }
                });
                return dataDim;
            }

/* harmony default export */ __webpack_exports__["a"] = (function (seriesModel, dataIndex, multipleSeries) {
                function formatArrayValue(value) {
                    var vertially = true;

                    var result = [];
                    var tooltipDims = otherDimToDataDim(data, 'tooltip');

                    tooltipDims.length
                        ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.each(tooltipDims, function (dimIdx) {
                            setEachItem(data.get(dimIdx, dataIndex), dimIdx);
                        })
                        // By default, all dims is used on tooltip.
                        : __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.each(value, setEachItem);

                    function setEachItem(val, dimIdx) {
                        var dimInfo = data.getDimensionInfo(dimIdx);
                        // If `dimInfo.tooltip` is not set, show tooltip.
                        if (!dimInfo || dimInfo.otherDims.tooltip === false) {
                            return;
                        }
                        var dimType = dimInfo.type;
                        var valStr = (vertially ? '- ' + (dimInfo.tooltipName || dimInfo.name) + ': ' : '')
                            + (dimType === 'ordinal'
                                ? val + ''
                                : dimType === 'time'
                                    ? (multipleSeries ? '' : __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.formatTime('yyyy/MM/dd hh:mm:ss', val))
                                    : __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.addCommas(val)
                            );
                        valStr && result.push(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.encodeHTML(valStr));
                    }

                    return (vertially ? '<br/>' : '') + result.join(vertially ? '<br/>' : ', ');
                }

                var data = seriesModel.getData();

                var value = seriesModel.getRawValue(dataIndex);
                var formattedValue = __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.isArray(value)
                    ? formatArrayValue(value) : __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.encodeHTML(__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.addCommas(value));
                var name = data.getName(dataIndex);

                var color = data.getItemVisual(dataIndex, 'color');
                if (__WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.util.isObject(color) && color.colorStops) {
                    color = (color.colorStops[0] || {}).color;
                }
                color = color || 'transparent';

                var colorEl = __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.getTooltipMarker(color);

                var seriesName = seriesModel.name;
                // FIXME
                if (seriesName === '\0-') {
                    // Not show '-'
                    seriesName = '';
                }
                seriesName = seriesName
                    ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.encodeHTML(seriesName) + (!multipleSeries ? '<br/>' : ': ')
                    : '';
                return !multipleSeries
                    ? seriesName + colorEl
                    + (name
                        ? __WEBPACK_IMPORTED_MODULE_0_echarts_lib_echarts___default.a.format.encodeHTML(name) + ': ' + formattedValue
                        : formattedValue
                    )
                    : colorEl + seriesName + formattedValue;
            });;

            /***/
}),
/* 40 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Renderable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_glenum__ = __webpack_require__(11);



            /**
             * @constructor clay.Mesh
             * @extends clay.Renderable
             */
            var Mesh = __WEBPACK_IMPORTED_MODULE_0__Renderable__["a" /* default */].extend(/** @lends clay.Mesh# */ {
                /**
                 * Used when it is a skinned mesh
                 * @type {clay.Skeleton}
                 */
                skeleton: null,
                /**
                 * Joints indices Meshes can share the one skeleton instance and each mesh can use one part of joints. Joints indices indicate the index of joint in the skeleton instance
                 * @type {number[]}
                 */
                joints: null,

                /**
                 * If store the skin matrices in vertex texture
                 * @type {bool}
                 */
                useSkinMatricesTexture: false

            }, function () {
                if (!this.joints) {
                    this.joints = [];
                }
            }, {

                isSkinnedMesh: function () {
                    return !!(this.skeleton && this.joints && this.joints.length > 0);
                },

                clone: function () {
                    var mesh = __WEBPACK_IMPORTED_MODULE_0__Renderable__["a" /* default */].prototype.clone.call(this);
                    mesh.skeleton = this.skeleton;
                    if (this.joints) {
                        mesh.joints = this.joints.slice();
                    }
                    return mesh;
                }
            });

            // Enums
            Mesh.POINTS = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].POINTS;
            Mesh.LINES = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINES;
            Mesh.LINE_LOOP = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINE_LOOP;
            Mesh.LINE_STRIP = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].LINE_STRIP;
            Mesh.TRIANGLES = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].TRIANGLES;
            Mesh.TRIANGLE_STRIP = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].TRIANGLE_STRIP;
            Mesh.TRIANGLE_FAN = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].TRIANGLE_FAN;

            Mesh.BACK = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].BACK;
            Mesh.FRONT = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FRONT;
            Mesh.FRONT_AND_BACK = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].FRONT_AND_BACK;
            Mesh.CW = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CW;
            Mesh.CCW = __WEBPACK_IMPORTED_MODULE_1__core_glenum__["a" /* default */].CCW;

/* harmony default export */ __webpack_exports__["a"] = (Mesh);


            /***/
}),
/* 41 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(58);


            /**
             * @constructor clay.camera.Perspective
             * @extends clay.Camera
             */
            var Perspective = __WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* default */].extend(/** @lends clay.camera.Perspective# */{
                /**
                 * Vertical field of view in degrees
                 * @type {number}
                 */
                fov: 50,
                /**
                 * Aspect ratio, typically viewport width / height
                 * @type {number}
                 */
                aspect: 1,
                /**
                 * Near bound of the frustum
                 * @type {number}
                 */
                near: 0.1,
                /**
                 * Far bound of the frustum
                 * @type {number}
                 */
                far: 2000
            },
                /** @lends clay.camera.Perspective.prototype */
                {

                    updateProjectionMatrix: function () {
                        var rad = this.fov / 180 * Math.PI;
                        this.projectionMatrix.perspective(rad, this.aspect, this.near, this.far);
                    },
                    decomposeProjectionMatrix: function () {
                        var m = this.projectionMatrix.array;
                        var rad = Math.atan(1 / m[5]) * 2;
                        this.fov = rad / Math.PI * 180;
                        this.aspect = m[5] / m[0];
                        this.near = m[14] / (m[10] - 1);
                        this.far = m[14] / (m[10] + 1);
                    },
                    /**
                     * @return {clay.camera.Perspective}
                     */
                    clone: function () {
                        var camera = __WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* default */].prototype.clone.call(this);
                        camera.fov = this.fov;
                        camera.aspect = this.aspect;
                        camera.near = this.near;
                        camera.far = this.far;

                        return camera;
                    }
                });

/* harmony default export */ __webpack_exports__["a"] = (Perspective);


            /***/
}),
/* 42 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Mesh__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_Cube__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Shader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Texture__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shader_source_skybox_glsl_js__ = __webpack_require__(121);
            // TODO Should not derived from mesh?







            __WEBPACK_IMPORTED_MODULE_2__Shader__["a" /* default */].import(__WEBPACK_IMPORTED_MODULE_5__shader_source_skybox_glsl_js__["a" /* default */]);
            /**
             * @constructor clay.plugin.Skybox
             *
             * @example
             *     var skyTex = new clay.TextureCube();
             *     skyTex.load({
             *         'px': 'assets/textures/sky/px.jpg',
             *         'nx': 'assets/textures/sky/nx.jpg'
             *         'py': 'assets/textures/sky/py.jpg'
             *         'ny': 'assets/textures/sky/ny.jpg'
             *         'pz': 'assets/textures/sky/pz.jpg'
             *         'nz': 'assets/textures/sky/nz.jpg'
             *     });
             *     var skybox = new clay.plugin.Skybox({
             *         scene: scene
             *     });
             *     skybox.material.set('environmentMap', skyTex);
             */
            var Skybox = __WEBPACK_IMPORTED_MODULE_0__Mesh__["a" /* default */].extend(function () {

                var skyboxShader = new __WEBPACK_IMPORTED_MODULE_2__Shader__["a" /* default */]({
                    vertex: __WEBPACK_IMPORTED_MODULE_2__Shader__["a" /* default */].source('clay.skybox.vertex'),
                    fragment: __WEBPACK_IMPORTED_MODULE_2__Shader__["a" /* default */].source('clay.skybox.fragment')
                });
                var material = new __WEBPACK_IMPORTED_MODULE_3__Material__["a" /* default */]({
                    shader: skyboxShader,
                    depthMask: false
                });

                return {
                    /**
                     * @type {clay.Scene}
                     * @memberOf clay.plugin.Skybox.prototype
                     */
                    scene: null,

                    geometry: new __WEBPACK_IMPORTED_MODULE_1__geometry_Cube__["a" /* default */](),

                    material: material,

                    environmentMap: null,

                    culling: false
                };
            }, function () {
                var scene = this.scene;
                if (scene) {
                    this.attachScene(scene);
                }
                if (this.environmentMap) {
                    this.setEnvironmentMap(this.environmentMap);
                }
            }, /** @lends clay.plugin.Skybox# */ {
                /**
                 * Attach the skybox to the scene
                 * @param  {clay.Scene} scene
                 */
                attachScene: function (scene) {
                    if (this.scene) {
                        this.detachScene();
                    }
                    scene.skybox = this;

                    this.scene = scene;
                    scene.on('beforerender', this._beforeRenderScene, this);
                },
                /**
                 * Detach from scene
                 */
                detachScene: function () {
                    if (this.scene) {
                        this.scene.off('beforerender', this._beforeRenderScene);
                        this.scene.skybox = null;
                    }
                    this.scene = null;
                },

                /**
                 * Dispose skybox
                 * @param  {clay.Renderer} renderer
                 */
                dispose: function (renderer) {
                    this.detachScene();
                    this.geometry.dispose(renderer);
                },
                /**
                 * Set environment map
                 * @param {clay.TextureCube} envMap
                 */
                setEnvironmentMap: function (envMap) {
                    if (envMap.textureType === 'texture2D') {
                        this.material.define('EQUIRECTANGULAR');
                        // LINEAR filter can remove the artifacts in pole
                        envMap.minFilter = __WEBPACK_IMPORTED_MODULE_4__Texture__["a" /* default */].LINEAR;
                    }
                    else {
                        this.material.undefine('EQUIRECTANGULAR');
                    }
                    this.material.set('environmentMap', envMap);
                },
                /**
                 * Get environment map
                 * @return {clay.TextureCube}
                 */
                getEnvironmentMap: function () {
                    return this.material.get('environmentMap');
                },

                _beforeRenderScene: function (renderer, scene, camera) {
                    this.renderSkybox(renderer, camera);
                },

                renderSkybox: function (renderer, camera) {
                    this.position.copy(camera.getWorldPosition());
                    this.update();
                    // Don't remember to disable blend
                    renderer.gl.disable(renderer.gl.BLEND);
                    if (this.material.get('lod') > 0) {
                        this.material.define('fragment', 'LOD');
                    }
                    else {
                        this.material.undefine('fragment', 'LOD');
                    }
                    renderer.renderPass([this], camera);
                }
            });

/* harmony default export */ __webpack_exports__["a"] = (Skybox);


            /***/
}),
/* 43 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Geometry__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_BoundingBox__ = __webpack_require__(18);



            /**
             * @constructor clay.geometry.Plane
             * @extends clay.Geometry
             * @param {Object} [opt]
             * @param {number} [opt.widthSegments]
             * @param {number} [opt.heightSegments]
             */
            var Plane = __WEBPACK_IMPORTED_MODULE_0__Geometry__["a" /* default */].extend(
                /** @lends clay.geometry.Plane# */
                {
                    dynamic: false,
                    /**
                     * @type {number}
                     */
                    widthSegments: 1,
                    /**
                     * @type {number}
                     */
                    heightSegments: 1
                }, function () {
                    this.build();
                },
                /** @lends clay.geometry.Plane.prototype */
                {
                    /**
                     * Build plane geometry
                     */
                    build: function () {
                        var heightSegments = this.heightSegments;
                        var widthSegments = this.widthSegments;
                        var attributes = this.attributes;
                        var positions = [];
                        var texcoords = [];
                        var normals = [];
                        var faces = [];

                        for (var y = 0; y <= heightSegments; y++) {
                            var t = y / heightSegments;
                            for (var x = 0; x <= widthSegments; x++) {
                                var s = x / widthSegments;

                                positions.push([2 * s - 1, 2 * t - 1, 0]);
                                if (texcoords) {
                                    texcoords.push([s, t]);
                                }
                                if (normals) {
                                    normals.push([0, 0, 1]);
                                }
                                if (x < widthSegments && y < heightSegments) {
                                    var i = x + y * (widthSegments + 1);
                                    faces.push([i, i + 1, i + widthSegments + 1]);
                                    faces.push([i + widthSegments + 1, i + 1, i + widthSegments + 2]);
                                }
                            }
                        }

                        attributes.position.fromArray(positions);
                        attributes.texcoord0.fromArray(texcoords);
                        attributes.normal.fromArray(normals);

                        this.initIndicesFromArray(faces);

                        this.boundingBox = new __WEBPACK_IMPORTED_MODULE_1__math_BoundingBox__["a" /* default */]();
                        this.boundingBox.min.set(-1, -1, 0);
                        this.boundingBox.max.set(1, 1, 0);
                    }
                });

/* harmony default export */ __webpack_exports__["a"] = (Plane);


            /***/
}),
/* 44 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
                defaultOption: {

                    viewControl: {
                        // perspective, orthographic.
                        // TODO Isometric
                        projection: 'perspective',
                        // If rotate on on init
                        autoRotate: false,
                        // cw or ccw
                        autoRotateDirection: 'cw',
                        // Degree per second
                        autoRotateSpeed: 10,

                        // Start rotating after still for a given time
                        // default is 3 seconds
                        autoRotateAfterStill: 3,

                        // Rotate, zoom damping.
                        damping: 0.8,
                        // Sensitivities for operations.
                        // Can be array to set x,y respectively
                        rotateSensitivity: 1,
                        zoomSensitivity: 1,
                        // Can be array to set x,y respectively
                        panSensitivity: 1,
                        // Which mouse button do rotate or pan
                        panMouseButton: 'middle',
                        rotateMouseButton: 'left',

                        // Distance to the target
                        // Only available when camera is perspective.
                        distance: 150,
                        // Min distance mouse can zoom in
                        minDistance: 40,
                        // Max distance mouse can zoom out
                        maxDistance: 400,

                        // Size of viewing volume.
                        // Only available when camera is orthographic
                        orthographicSize: 150,
                        maxOrthographicSize: 400,
                        minOrthographicSize: 20,

                        // Center view point
                        center: [0, 0, 0],
                        // Alpha angle for top-down rotation
                        // Positive to rotate to top.
                        alpha: 0,
                        // beta angle for left-right rotation
                        // Positive to rotate to right.
                        beta: 0,

                        minAlpha: -90,
                        maxAlpha: 90

                        // minBeta: -Infinity
                        // maxBeta: -Infinity
                    }
                },

                setView: function (opts) {
                    opts = opts || {};
                    this.option.viewControl = this.option.viewControl || {};
                    if (opts.alpha != null) {
                        this.option.viewControl.alpha = opts.alpha;
                    }
                    if (opts.beta != null) {
                        this.option.viewControl.beta = opts.beta;
                    }
                    if (opts.distance != null) {
                        this.option.viewControl.distance = opts.distance;
                    }
                    if (opts.center != null) {
                        this.option.viewControl.center = opts.center;
                    }
                }
            });

            /***/
}),
/* 45 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_claygl_src_core_Base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_claygl_src_math_Vector2__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_claygl_src_math_Vector3__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_claygl_src_math_Quaternion__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retrieve__ = __webpack_require__(2);
            /**
             * Provide orbit control for 3D objects
             *
             * @module echarts-gl/util/OrbitControl
             * @author Yi Shen(http://github.com/pissang)
             */

            // TODO Remove magic numbers on sensitivity





            var firstNotNull = __WEBPACK_IMPORTED_MODULE_4__retrieve__["a" /* default */].firstNotNull;


            var MOUSE_BUTTON_KEY_MAP = {
                left: 0,
                middle: 1,
                right: 2
            };

            function convertToArray(val) {
                if (!(val instanceof Array)) {
                    val = [val, val];
                }
                return val;
            }

            /**
             * @alias module:echarts-x/util/OrbitControl
             */
            var OrbitControl = __WEBPACK_IMPORTED_MODULE_0_claygl_src_core_Base__["a" /* default */].extend(function () {

                return {
                    /**
                     * @type {module:zrender~ZRender}
                     */
                    zr: null,

                    /**
                     * @type {module:echarts-gl/core/ViewGL}
                     */
                    viewGL: null,

                    /**
                     * @type {clay.math.Vector3}
                     */
                    _center: new __WEBPACK_IMPORTED_MODULE_2_claygl_src_math_Vector3__["a" /* default */](),

                    /**
                     * Minimum distance to the center
                     * Only available when camera is perspective.
                     * @type {number}
                     * @default 0.5
                     */
                    minDistance: 0.5,

                    /**
                     * Maximum distance to the center
                     * Only available when camera is perspective.
                     * @type {number}
                     * @default 2
                     */
                    maxDistance: 1.5,

                    /**
                     * Only available when camera is orthographic
                     */
                    maxOrthographicSize: 300,

                    /**
                     * Only available when camera is orthographic
                     */
                    minOrthographicSize: 30,

                    /**
                     * Minimum alpha rotation
                     */
                    minAlpha: -90,

                    /**
                     * Maximum alpha rotation
                     */
                    maxAlpha: 90,

                    /**
                     * Minimum beta rotation
                     */
                    minBeta: -Infinity,
                    /**
                     * Maximum beta rotation
                     */
                    maxBeta: Infinity,

                    /**
                     * Start auto rotating after still for the given time
                     */
                    autoRotateAfterStill: 0,

                    /**
                     * Direction of autoRotate. cw or ccw when looking top down.
                     */
                    autoRotateDirection: 'cw',

                    /**
                     * Degree per second
                     */
                    autoRotateSpeed: 60,

                    /**
                     * @param {number}
                     */
                    damping: 0.8,

                    /**
                     * @param {number}
                     */
                    rotateSensitivity: 1,

                    /**
                     * @param {number}
                     */
                    zoomSensitivity: 1,

                    /**
                     * @param {number}
                     */
                    panSensitivity: 1,

                    panMouseButton: 'middle',
                    rotateMouseButton: 'left',

                    /**
                     * Pan or rotate
                     * @private
                     * @type {String}
                     */
                    _mode: 'rotate',

                    /**
                     * @private
                     * @type {clay.Camera}
                     */
                    _camera: null,

                    _needsUpdate: false,

                    _rotating: false,

                    // Rotation around yAxis in radian
                    _phi: 0,
                    // Rotation around xAxis in radian
                    _theta: 0,

                    _mouseX: 0,
                    _mouseY: 0,

                    _rotateVelocity: new __WEBPACK_IMPORTED_MODULE_1_claygl_src_math_Vector2__["a" /* default */](),

                    _panVelocity: new __WEBPACK_IMPORTED_MODULE_1_claygl_src_math_Vector2__["a" /* default */](),

                    _distance: 500,

                    _zoomSpeed: 0,

                    _stillTimeout: 0,

                    _animators: []
                };
            }, function () {
                // Each OrbitControl has it's own handler
                ['_mouseDownHandler', '_mouseWheelHandler', '_mouseMoveHandler', '_mouseUpHandler',
                    '_pinchHandler', '_contextMenuHandler', '_update'].forEach(function (hdlName) {
                        this[hdlName] = this[hdlName].bind(this);
                    }, this);
            }, {
                /**
                 * Initialize.
                 * Mouse event binding
                 */
                init: function () {
                    var zr = this.zr;

                    if (zr) {
                        zr.on('mousedown', this._mouseDownHandler);
                        zr.on('globalout', this._mouseUpHandler);
                        zr.on('mousewheel', this._mouseWheelHandler);
                        zr.on('pinch', this._pinchHandler);

                        zr.animation.on('frame', this._update);

                        zr.dom.addEventListener('contextmenu', this._contextMenuHandler);
                    }
                },

                /**
                 * Dispose.
                 * Mouse event unbinding
                 */
                dispose: function () {
                    var zr = this.zr;

                    if (zr) {
                        zr.off('mousedown', this._mouseDownHandler);
                        zr.off('mousemove', this._mouseMoveHandler);
                        zr.off('mouseup', this._mouseUpHandler);
                        zr.off('mousewheel', this._mouseWheelHandler);
                        zr.off('pinch', this._pinchHandler);
                        zr.off('globalout', this._mouseUpHandler);
                        zr.dom.removeEventListener('contextmenu', this._contextMenuHandler);

                        zr.animation.off('frame', this._update);
                    }
                    this.stopAllAnimation();
                },

                /**
                 * Get distance
                 * @return {number}
                 */
                getDistance: function () {
                    return this._distance;
                },

                /**
                 * Set distance
                 * @param {number} distance
                 */
                setDistance: function (distance) {
                    this._distance = distance;
                    this._needsUpdate = true;
                },

                /**
                 * Get size of orthographic viewing volume
                 * @return {number}
                 */
                getOrthographicSize: function () {
                    return this._orthoSize;
                },

                /**
                 * Set size of orthographic viewing volume
                 * @param {number} size
                 */
                setOrthographicSize: function (size) {
                    this._orthoSize = size;
                    this._needsUpdate = true;
                },

                /**
                 * Get alpha rotation
                 * Alpha angle for top-down rotation. Positive to rotate to top.
                 *
                 * Which means camera rotation around x axis.
                 */
                getAlpha: function () {
                    return this._theta / Math.PI * 180;
                },

                /**
                 * Get beta rotation
                 * Beta angle for left-right rotation. Positive to rotate to right.
                 *
                 * Which means camera rotation around y axis.
                 */
                getBeta: function () {
                    return -this._phi / Math.PI * 180;
                },

                /**
                 * Get control center
                 * @return {Array.<number>}
                 */
                getCenter: function () {
                    return this._center.toArray();
                },

                /**
                 * Set alpha rotation angle
                 * @param {number} alpha
                 */
                setAlpha: function (alpha) {
                    alpha = Math.max(Math.min(this.maxAlpha, alpha), this.minAlpha);

                    this._theta = alpha / 180 * Math.PI;
                    this._needsUpdate = true;
                },

                /**
                 * Set beta rotation angle
                 * @param {number} beta
                 */
                setBeta: function (beta) {
                    beta = Math.max(Math.min(this.maxBeta, beta), this.minBeta);

                    this._phi = -beta / 180 * Math.PI;
                    this._needsUpdate = true;
                },

                /**
                 * Set control center
                 * @param {Array.<number>} center
                 */
                setCenter: function (centerArr) {
                    this._center.setArray(centerArr);
                },

                /**
                 * @param {module:echarts-gl/core/ViewGL} viewGL
                 */
                setViewGL: function (viewGL) {
                    this.viewGL = viewGL;
                },

                /**
                 * @return {clay.Camera}
                 */
                getCamera: function () {
                    return this.viewGL.camera;
                },

                setFromViewControlModel: function (viewControlModel, extraOpts) {
                    extraOpts = extraOpts || {};
                    var baseDistance = extraOpts.baseDistance || 0;
                    var baseOrthoSize = extraOpts.baseOrthoSize || 1;

                    var projection = viewControlModel.get('projection');
                    if (projection !== 'perspective' && projection !== 'orthographic' && projection !== 'isometric') {
                        if (true) {
                            console.error('Unkown projection type %s, use perspective projection instead.', projection);
                        }
                        projection = 'perspective';
                    }
                    this._projection = projection;
                    this.viewGL.setProjection(projection);

                    var targetDistance = viewControlModel.get('distance') + baseDistance;
                    var targetOrthographicSize = viewControlModel.get('orthographicSize') + baseOrthoSize;

                    [
                        ['damping', 0.8],
                        ['autoRotate', false],
                        ['autoRotateAfterStill', 3],
                        ['autoRotateDirection', 'cw'],
                        ['autoRotateSpeed', 10],
                        ['minDistance', 30],
                        ['maxDistance', 400],
                        ['minOrthographicSize', 30],
                        ['maxOrthographicSize', 300],
                        ['minAlpha', -90],
                        ['maxAlpha', 90],
                        ['minBeta', -Infinity],
                        ['maxBeta', Infinity],
                        ['rotateSensitivity', 1],
                        ['zoomSensitivity', 1],
                        ['panSensitivity', 1],
                        ['panMouseButton', 'left'],
                        ['rotateMouseButton', 'middle'],
                    ].forEach(function (prop) {
                        this[prop[0]] = firstNotNull(viewControlModel.get(prop[0]), prop[1]);
                    }, this);

                    this.minDistance += baseDistance;
                    this.maxDistance += baseDistance;
                    this.minOrthographicSize += baseOrthoSize,
                        this.maxOrthographicSize += baseOrthoSize;

                    var ecModel = viewControlModel.ecModel;

                    var animationOpts = {};
                    ['animation', 'animationDurationUpdate', 'animationEasingUpdate'].forEach(function (key) {
                        animationOpts[key] = firstNotNull(
                            viewControlModel.get(key), ecModel && ecModel.get(key)
                        );
                    });

                    var alpha = firstNotNull(extraOpts.alpha, viewControlModel.get('alpha')) || 0;
                    var beta = firstNotNull(extraOpts.beta, viewControlModel.get('beta')) || 0;
                    var center = firstNotNull(extraOpts.center, viewControlModel.get('center')) || [0, 0, 0];
                    if (animationOpts.animation && animationOpts.animationDurationUpdate > 0 && this._notFirst) {
                        this.animateTo({
                            alpha: alpha,
                            beta: beta,
                            center: center,
                            distance: targetDistance,
                            targetOrthographicSize: targetOrthographicSize,
                            easing: animationOpts.animationEasingUpdate,
                            duration: animationOpts.animationDurationUpdate
                        });
                    }
                    else {
                        this.setDistance(targetDistance);
                        this.setAlpha(alpha);
                        this.setBeta(beta);
                        this.setCenter(center);
                        this.setOrthographicSize(targetOrthographicSize);
                    }

                    this._notFirst = true;

                    this._validateProperties();
                },

                _validateProperties: function () {
                    if (true) {
                        if (MOUSE_BUTTON_KEY_MAP[this.panMouseButton] == null) {
                            console.error('Unkown panMouseButton %s. It should be left|middle|right', this.panMouseButton);
                        }
                        if (MOUSE_BUTTON_KEY_MAP[this.rotateMouseButton] == null) {
                            console.error('Unkown rotateMouseButton %s. It should be left|middle|right', this.rotateMouseButton);
                        }
                        if (this.autoRotateDirection !== 'cw' && this.autoRotateDirection !== 'ccw') {
                            console.error('Unkown autoRotateDirection %s. It should be cw|ccw', this.autoRotateDirection);
                        }
                    }
                },

                /**
                 * @param {Object} opts
                 * @param {number} opts.distance
                 * @param {number} opts.alpha
                 * @param {number} opts.beta
                 * @param {number} opts.orthographicSize
                 * @param {number} [opts.duration=1000]
                 * @param {number} [opts.easing='linear']
                 */
                animateTo: function (opts) {
                    var zr = this.zr;
                    var self = this;

                    var obj = {};
                    var target = {};

                    if (opts.distance != null) {
                        obj.distance = this.getDistance();
                        target.distance = opts.distance;
                    }
                    if (opts.orthographicSize != null) {
                        obj.orthographicSize = this.getOrthographicSize();
                        target.orthographicSize = opts.orthographicSize;
                    }
                    if (opts.alpha != null) {
                        obj.alpha = this.getAlpha();
                        target.alpha = opts.alpha;
                    }
                    if (opts.beta != null) {
                        obj.beta = this.getBeta();
                        target.beta = opts.beta;
                    }
                    if (opts.center != null) {
                        obj.center = this.getCenter();
                        target.center = opts.center;
                    }

                    return this._addAnimator(
                        zr.animation.animate(obj)
                            .when(opts.duration || 1000, target)
                            .during(function () {
                                if (obj.alpha != null) {
                                    self.setAlpha(obj.alpha);
                                }
                                if (obj.beta != null) {
                                    self.setBeta(obj.beta);
                                }
                                if (obj.distance != null) {
                                    self.setDistance(obj.distance);
                                }
                                if (obj.center != null) {
                                    self.setCenter(obj.center);
                                }
                                if (obj.orthographicSize != null) {
                                    self.setOrthographicSize(obj.orthographicSize);
                                }
                                self._needsUpdate = true;
                            })
                    ).start(opts.easing || 'linear');
                },

                /**
                 * Stop all animation
                 */
                stopAllAnimation: function () {
                    for (var i = 0; i < this._animators.length; i++) {
                        this._animators[i].stop();
                    }
                    this._animators.length = 0;
                },

                update: function () {
                    this._needsUpdate = true;
                    this._update(20);
                },

                _isAnimating: function () {
                    return this._animators.length > 0;
                },
                /**
                 * Call update each frame
                 * @param  {number} deltaTime Frame time
                 */
                _update: function (deltaTime) {

                    if (this._rotating) {
                        var radian = (this.autoRotateDirection === 'cw' ? 1 : -1)
                            * this.autoRotateSpeed / 180 * Math.PI;
                        this._phi -= radian * deltaTime / 1000;
                        this._needsUpdate = true;
                    }
                    else if (this._rotateVelocity.len() > 0) {
                        this._needsUpdate = true;
                    }

                    if (Math.abs(this._zoomSpeed) > 0.1 || this._panVelocity.len() > 0) {
                        this._needsUpdate = true;
                    }

                    if (!this._needsUpdate) {
                        return;
                    }

                    deltaTime = Math.min(deltaTime, 50);

                    this._updateDistanceOrSize(deltaTime);

                    this._updatePan(deltaTime);

                    this._updateRotate(deltaTime);

                    this._updateTransform();

                    this.getCamera().update();

                    this.zr && this.zr.refresh();

                    this.trigger('update');

                    this._needsUpdate = false;
                },

                _updateRotate: function (deltaTime) {
                    var velocity = this._rotateVelocity;
                    this._phi = velocity.y * deltaTime / 20 + this._phi;
                    this._theta = velocity.x * deltaTime / 20 + this._theta;

                    this.setAlpha(this.getAlpha());
                    this.setBeta(this.getBeta());

                    this._vectorDamping(velocity, Math.pow(this.damping, deltaTime / 16));
                },

                _updateDistanceOrSize: function (deltaTime) {
                    if (this._projection === 'perspective') {
                        this._setDistance(this._distance + this._zoomSpeed * deltaTime / 20);
                    }
                    else {
                        this._setOrthoSize(this._orthoSize + this._zoomSpeed * deltaTime / 20);
                    }

                    this._zoomSpeed *= Math.pow(this.damping, deltaTime / 16);
                },


                _setDistance: function (distance) {
                    this._distance = Math.max(Math.min(distance, this.maxDistance), this.minDistance);
                },

                _setOrthoSize: function (size) {
                    this._orthoSize = Math.max(Math.min(size, this.maxOrthographicSize), this.minOrthographicSize);
                    var camera = this.getCamera();
                    var cameraHeight = this._orthoSize;
                    var cameraWidth = cameraHeight / this.viewGL.viewport.height * this.viewGL.viewport.width;
                    camera.left = -cameraWidth / 2;
                    camera.right = cameraWidth / 2;
                    camera.top = cameraHeight / 2;
                    camera.bottom = -cameraHeight / 2;
                },

                _updatePan: function (deltaTime) {

                    var velocity = this._panVelocity;
                    var len = this._distance;

                    var target = this.getCamera();
                    var yAxis = target.worldTransform.y;
                    var xAxis = target.worldTransform.x;

                    // PENDING
                    this._center
                        .scaleAndAdd(xAxis, -velocity.x * len / 200)
                        .scaleAndAdd(yAxis, -velocity.y * len / 200);

                    this._vectorDamping(velocity, 0);
                },

                _updateTransform: function () {
                    var camera = this.getCamera();

                    var dir = new __WEBPACK_IMPORTED_MODULE_2_claygl_src_math_Vector3__["a" /* default */]();
                    var theta = this._theta + Math.PI / 2;
                    var phi = this._phi + Math.PI / 2;
                    var r = Math.sin(theta);

                    dir.x = r * Math.cos(phi);
                    dir.y = -Math.cos(theta);
                    dir.z = r * Math.sin(phi);

                    camera.position.copy(this._center).scaleAndAdd(dir, this._distance);
                    camera.rotation.identity()
                        // First around y, then around x
                        .rotateY(-this._phi)
                        .rotateX(-this._theta);
                },

                _startCountingStill: function () {
                    clearTimeout(this._stillTimeout);

                    var time = this.autoRotateAfterStill;
                    var self = this;
                    if (!isNaN(time) && time > 0) {
                        this._stillTimeout = setTimeout(function () {
                            self._rotating = true;
                        }, time * 1000);
                    }
                },

                _vectorDamping: function (v, damping) {
                    var speed = v.len();
                    speed = speed * damping;
                    if (speed < 1e-4) {
                        speed = 0;
                    }
                    v.normalize().scale(speed);
                },

                _decomposeTransform: function () {
                    if (!this.getCamera()) {
                        return;
                    }

                    this.getCamera().updateWorldTransform();

                    var forward = this.getCamera().worldTransform.z;
                    var alpha = Math.asin(forward.y);
                    var beta = Math.atan2(forward.x, forward.z);

                    this._theta = alpha;
                    this._phi = -beta;

                    this.setBeta(this.getBeta());
                    this.setAlpha(this.getAlpha());

                    // Is perspective
                    if (this.getCamera().aspect) {
                        this._setDistance(this.getCamera().position.dist(this._center));
                    }
                    else {
                        this._setOrthoSize(this.getCamera().top - this.getCamera().bottom);
                    }
                },

                _mouseDownHandler: function (e) {
                    if (e.target) {
                        // If mouseon some zrender element.
                        return;
                    }
                    if (this._isAnimating()) {
                        return;
                    }

                    var x = e.offsetX;
                    var y = e.offsetY;
                    if (this.viewGL && !this.viewGL.containPoint(x, y)) {
                        return;
                    }

                    this.zr.on('mousemove', this._mouseMoveHandler);
                    this.zr.on('mouseup', this._mouseUpHandler);

                    if (e.event.targetTouches) {
                        if (e.event.targetTouches.length === 1) {
                            this._mode = 'rotate';
                        }
                    }
                    else {
                        if (e.event.button === MOUSE_BUTTON_KEY_MAP[this.rotateMouseButton]) {
                            this._mode = 'rotate';
                        }
                        else if (e.event.button === MOUSE_BUTTON_KEY_MAP[this.panMouseButton]) {
                            this._mode = 'pan';
                        }
                        else {
                            this._mode = '';
                        }
                    }

                    // Reset rotate velocity
                    this._rotateVelocity.set(0, 0);
                    this._rotating = false;
                    if (this.autoRotate) {
                        this._startCountingStill();
                    }

                    this._mouseX = e.offsetX;
                    this._mouseY = e.offsetY;
                },

                _mouseMoveHandler: function (e) {
                    if (e.target && e.target.__isGLToZRProxy) {
                        return;
                    }

                    if (this._isAnimating()) {
                        return;
                    }

                    var panSensitivity = convertToArray(this.panSensitivity);
                    var rotateSensitivity = convertToArray(this.rotateSensitivity);

                    if (this._mode === 'rotate') {
                        this._rotateVelocity.y = (e.offsetX - this._mouseX) / this.zr.getHeight() * 2 * rotateSensitivity[0];
                        this._rotateVelocity.x = (e.offsetY - this._mouseY) / this.zr.getWidth() * 2 * rotateSensitivity[1];
                    }
                    else if (this._mode === 'pan') {
                        this._panVelocity.x = (e.offsetX - this._mouseX) / this.zr.getWidth() * panSensitivity[0] * 400;
                        this._panVelocity.y = (-e.offsetY + this._mouseY) / this.zr.getHeight() * panSensitivity[1] * 400;
                    }


                    this._mouseX = e.offsetX;
                    this._mouseY = e.offsetY;

                    e.event.preventDefault();
                },

                _mouseWheelHandler: function (e) {
                    if (this._isAnimating()) {
                        return;
                    }
                    var delta = e.event.wheelDelta // Webkit
                        || -e.event.detail; // Firefox
                    this._zoomHandler(e, delta);
                },

                _pinchHandler: function (e) {
                    if (this._isAnimating()) {
                        return;
                    }
                    this._zoomHandler(e, e.pinchScale > 1 ? 1 : -1);
                    // Not rotate when pinch
                    this._mode = '';
                },

                _zoomHandler: function (e, delta) {
                    if (delta === 0) {
                        return;
                    }

                    var x = e.offsetX;
                    var y = e.offsetY;
                    if (this.viewGL && !this.viewGL.containPoint(x, y)) {
                        return;
                    }

                    var speed;
                    if (this._projection === 'perspective') {
                        speed = Math.max(Math.max(Math.min(
                            this._distance - this.minDistance,
                            this.maxDistance - this._distance
                        )) / 20, 0.5);
                    }
                    else {
                        speed = Math.max(Math.max(Math.min(
                            this._orthoSize - this.minOrthographicSize,
                            this.maxOrthographicSize - this._orthoSize
                        )) / 20, 0.5);
                    }
                    this._zoomSpeed = (delta > 0 ? -1 : 1) * speed * this.zoomSensitivity;

                    this._rotating = false;

                    if (this.autoRotate && this._mode === 'rotate') {
                        this._startCountingStill();
                    }

                    e.event.preventDefault();
                },

                _mouseUpHandler: function () {
                    this.zr.off('mousemove', this._mouseMoveHandler);
                    this.zr.off('mouseup', this._mouseUpHandler);
                },

                _isRightMouseButtonUsed: function () {
                    return this.rotateMouseButton === 'right'
                        || this.panMouseButton === 'right';
                },

                _contextMenuHandler: function (e) {
                    if (this._isRightMouseButtonUsed()) {
                        e.preventDefault();
                    }
                },

                _addAnimator: function (animator) {
                    var animators = this._animators;
                    animators.push(animator);
                    animator.done(function () {
                        var idx = animators.indexOf(animator);
                        if (idx >= 0) {
                            animators.splice(idx, 1);
                        }
                    });
                    return animator;
                }
            });

            /**
             * If auto rotate the target
             * @type {boolean}
             * @default false
             */
            Object.defineProperty(OrbitControl.prototype, 'autoRotate', {
                get: function (val) {
                    return this._autoRotate;
                },
                set: function (val) {
                    this._autoRotate = val;
                    this._rotating = val;
                }
            });


/* harmony default export */ __webpack_exports__["a"] = (OrbitControl);

            /***/
}),
/* 46 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony default export */ __webpack_exports__["a"] = ("@export ecgl.lines3D.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec3 position: POSITION;\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n\nvoid main()\n{\n gl_Position = worldViewProjection * vec4(position, 1.0);\n v_Color = a_Color;\n}\n\n@end\n\n@export ecgl.lines3D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\n\n@import clay.util.srgb\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color * v_Color);\n#else\n gl_FragColor = color * v_Color;\n#endif\n}\n@end\n\n\n\n@export ecgl.lines3D.clipNear\n\nvec4 clipNear(vec4 p1, vec4 p2) {\n float n = (p1.w - near) / (p1.w - p2.w);\n return vec4(mix(p1.xy, p2.xy, n), -near, near);\n}\n\n@end\n\n@export ecgl.lines3D.expandLine\n#ifdef VERTEX_ANIMATION\n vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);\n vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);\n vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);\n#else\n vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);\n vec4 currProj = worldViewProjection * vec4(position, 1.0);\n vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);\n#endif\n\n if (currProj.w < 0.0) {\n if (nextProj.w > 0.0) {\n currProj = clipNear(currProj, nextProj);\n }\n else if (prevProj.w > 0.0) {\n currProj = clipNear(currProj, prevProj);\n }\n }\n\n vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;\n vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;\n vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;\n\n vec2 dir;\n float len = offset;\n if (position == positionPrev) {\n dir = normalize(nextScreen - currScreen);\n }\n else if (position == positionNext) {\n dir = normalize(currScreen - prevScreen);\n }\n else {\n vec2 dirA = normalize(currScreen - prevScreen);\n vec2 dirB = normalize(nextScreen - currScreen);\n\n vec2 tanget = normalize(dirA + dirB);\n\n float miter = 1.0 / max(dot(tanget, dirA), 0.5);\n len *= miter;\n dir = tanget;\n }\n\n dir = vec2(-dir.y, dir.x) * len;\n currScreen += dir;\n\n currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);\n@end\n\n\n@export ecgl.meshLines3D.vertex\n\nattribute vec3 position: POSITION;\nattribute vec3 positionPrev;\nattribute vec3 positionNext;\nattribute float offset;\nattribute vec4 a_Color : COLOR;\n\n#ifdef VERTEX_ANIMATION\nattribute vec3 prevPosition;\nattribute vec3 prevPositionPrev;\nattribute vec3 prevPositionNext;\nuniform float percent : 1.0;\n#endif\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec4 viewport : VIEWPORT;\nuniform float near : NEAR;\n\nvarying vec4 v_Color;\n\n@import ecgl.common.wireframe.vertexHeader\n\n@import ecgl.lines3D.clipNear\n\nvoid main()\n{\n @import ecgl.lines3D.expandLine\n\n gl_Position = currProj;\n\n v_Color = a_Color;\n\n @import ecgl.common.wireframe.vertexMain\n}\n@end\n\n\n@export ecgl.meshLines3D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\n\n@import ecgl.common.wireframe.fragmentHeader\n\n@import clay.util.srgb\n\nvoid main()\n{\n#ifdef SRGB_DECODE\n gl_FragColor = sRGBToLinear(color * v_Color);\n#else\n gl_FragColor = color * v_Color;\n#endif\n\n @import ecgl.common.wireframe.fragmentMain\n}\n\n@end");


            /***/
}),
/* 47 */
/***/ (function (module, exports, __webpack_require__) {

            var zrUtil = __webpack_require__(13);

            var BoundingRect = __webpack_require__(82);

            var _number = __webpack_require__(85);

            var parsePercent = _number.parsePercent;

            var formatUtil = __webpack_require__(171);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Layout helpers for each }