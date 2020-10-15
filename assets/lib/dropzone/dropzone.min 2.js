"use strict";
function _possibleConstructorReturn(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !b || ("object" != typeof b && "function" != typeof b) ? a : b;
}
function _inherits(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    (a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } })), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}
function __guard__(a, b) {
    return void 0 !== a && null !== a ? b(a) : void 0;
}
function __guardMethod__(a, b, c) {
    return void 0 !== a && null !== a && "function" == typeof a[b] ? c(a, b) : void 0;
}
var _createClass = (function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
            }
        }
        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    })(),
    Emitter = (function () {
        function a() {
            _classCallCheck(this, a);
        }
        return (
            _createClass(a, [
                {
                    key: "on",
                    value: function (a, b) {
                        return (this._callbacks = this._callbacks || {}), this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this;
                    },
                },
                {
                    key: "emit",
                    value: function (a) {
                        this._callbacks = this._callbacks || {};
                        var b = this._callbacks[a];
                        if (b) {
                            for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                            for (var f = b, g = 0, f = f; ; ) {
                                var h;
                                if (g >= f.length) break;
                                h = f[g++];
                                h.apply(this, d);
                            }
                        }
                        return this;
                    },
                },
                {
                    key: "off",
                    value: function (a, b) {
                        if (!this._callbacks || 0 === arguments.length) return (this._callbacks = {}), this;
                        var c = this._callbacks[a];
                        if (!c) return this;
                        if (1 === arguments.length) return delete this._callbacks[a], this;
                        for (var d = 0; d < c.length; d++) {
                            if (c[d] === b) {
                                c.splice(d, 1);
                                break;
                            }
                        }
                        return this;
                    },
                },
            ]),
            a
        );
    })(),
    Dropzone = (function (a) {
        function b(a, c) {
            _classCallCheck(this, b);
            var d = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this)),
                e = void 0,
                f = void 0;
            if (
                ((d.element = a),
                (d.version = b.version),
                (d.defaultOptions.previewTemplate = d.defaultOptions.previewTemplate.replace(/\n*/g, "")),
                (d.clickableElements = []),
                (d.listeners = []),
                (d.files = []),
                "string" == typeof d.element && (d.element = document.querySelector(d.element)),
                !d.element || null == d.element.nodeType)
            )
                throw new Error("Invalid dropzone element.");
            if (d.element.dropzone) throw new Error("Dropzone already attached.");
            b.instances.push(d), (d.element.dropzone = d);
            var g = null != (f = b.optionsForElement(d.element)) ? f : {};
            if (((d.options = b.extend({}, d.defaultOptions, g, null != c ? c : {})), d.options.forceFallback || !b.isBrowserSupported())) {
                var h;
                return (h = d.options.fallback.call(d)), _possibleConstructorReturn(d, h);
            }
            if ((null == d.options.url && (d.options.url = d.element.getAttribute("action")), !d.options.url)) throw new Error("No URL provided.");
            if (d.options.acceptedFiles && d.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            if (d.options.uploadMultiple && d.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
            return (
                d.options.acceptedMimeTypes && ((d.options.acceptedFiles = d.options.acceptedMimeTypes), delete d.options.acceptedMimeTypes),
                null != d.options.renameFilename &&
                    (d.options.renameFile = function (a) {
                        return d.options.renameFilename.call(d, a.name, a);
                    }),
                (d.options.method = d.options.method.toUpperCase()),
                (e = d.getExistingFallback()) && e.parentNode && e.parentNode.removeChild(e),
                !1 !== d.options.previewsContainer && (d.options.previewsContainer ? (d.previewsContainer = b.getElement(d.options.previewsContainer, "previewsContainer")) : (d.previewsContainer = d.element)),
                d.options.clickable && (!0 === d.options.clickable ? (d.clickableElements = [d.element]) : (d.clickableElements = b.getElements(d.options.clickable, "clickable"))),
                d.init(),
                d
            );
        }
        return (
            _inherits(b, a),
            _createClass(b, null, [
                {
                    key: "initClass",
                    value: function () {
                        (this.prototype.Emitter = Emitter),
                            (this.prototype.events = [
                                "drop",
                                "dragstart",
                                "dragend",
                                "dragenter",
                                "dragover",
                                "dragleave",
                                "addedfile",
                                "addedfiles",
                                "removedfile",
                                "thumbnail",
                                "error",
                                "errormultiple",
                                "processing",
                                "processingmultiple",
                                "uploadprogress",
                                "totaluploadprogress",
                                "sending",
                                "sendingmultiple",
                                "success",
                                "successmultiple",
                                "canceled",
                                "canceledmultiple",
                                "complete",
                                "completemultiple",
                                "reset",
                                "maxfilesexceeded",
                                "maxfilesreached",
                                "queuecomplete",
                            ]),
                            (this.prototype.defaultOptions = {
                                url: null,
                                method: "post",
                                withCredentials: !1,
                                timeout: 3e4,
                                parallelUploads: 2,
                                uploadMultiple: !1,
                                chunking: !1,
                                forceChunking: !1,
                                chunkSize: 2e6,
                                parallelChunkUploads: !1,
                                retryChunks: !1,
                                retryChunksLimit: 3,
                                maxFilesize: 256,
                                paramName: "file",
                                createImageThumbnails: !0,
                                maxThumbnailFilesize: 10,
                                thumbnailWidth: 120,
                                thumbnailHeight: 120,
                                thumbnailMethod: "crop",
                                resizeWidth: null,
                                resizeHeight: null,
                                resizeMimeType: null,
                                resizeQuality: 0.8,
                                resizeMethod: "contain",
                                filesizeBase: 1e3,
                                maxFiles: null,
                                headers: null,
                                clickable: !0,
                                ignoreHiddenFiles: !0,
                                acceptedFiles: null,
                                acceptedMimeTypes: null,
                                autoProcessQueue: !0,
                                autoQueue: !0,
                                addRemoveLinks: !1,
                                previewsContainer: null,
                                hiddenInputContainer: "body",
                                capture: null,
                                renameFilename: null,
                                renameFile: null,
                                forceFallback: !1,
                                dictDefaultMessage: "Drop files here to upload",
                                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                                dictInvalidFileType: "You can't upload files of this type.",
                                dictResponseError: "Server responded with {{statusCode}} code.",
                                dictCancelUpload: "Cancel upload",
                                dictUploadCanceled: "Upload canceled.",
                                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                                dictRemoveFile: "Remove file",
                                dictRemoveFileConfirmation: null,
                                dictMaxFilesExceeded: "You can not upload any more files.",
                                dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
                                init: function () {},
                                params: function (a, b, c) {
                                    if (c)
                                        return {
                                            dzuuid: c.file.upload.uuid,
                                            dzchunkindex: c.index,
                                            dztotalfilesize: c.file.size,
                                            dzchunksize: this.options.chunkSize,
                                            dztotalchunkcount: c.file.upload.totalChunkCount,
                                            dzchunkbyteoffset: c.index * this.options.chunkSize,
                                        };
                                },
                                accept: function (a, b) {
                                    return b();
                                },
                                chunksUploaded: function (a, b) {
                                    b();
                                },
                                fallback: function () {
                                    var a = void 0;
                                    this.element.className = this.element.className + " dz-browser-not-supported";
                                    for (var c = this.element.getElementsByTagName("div"), d = 0, c = c; ; ) {
                                        var e;
                                        if (d >= c.length) break;
                                        e = c[d++];
                                        var f = e;
                                        if (/(^| )dz-message($| )/.test(f.className)) {
                                            (a = f), (f.className = "dz-message");
                                            break;
                                        }
                                    }
                                    a || ((a = b.createElement('<div class="dz-message"><span></span></div>')), this.element.appendChild(a));
                                    var g = a.getElementsByTagName("span")[0];
                                    return (
                                        g && (null != g.textContent ? (g.textContent = this.options.dictFallbackMessage) : null != g.innerText && (g.innerText = this.options.dictFallbackMessage)),
                                        this.element.appendChild(this.getFallbackForm())
                                    );
                                },
                                resize: function (a, b, c, d) {
                                    var e = { srcX: 0, srcY: 0, srcWidth: a.width, srcHeight: a.height },
                                        f = a.width / a.height;
                                    null == b && null == c ? ((b = e.srcWidth), (c = e.srcHeight)) : null == b ? (b = c * f) : null == c && (c = b / f), (b = Math.min(b, e.srcWidth)), (c = Math.min(c, e.srcHeight));
                                    var g = b / c;
                                    if (e.srcWidth > b || e.srcHeight > c)
                                        if ("crop" === d) f > g ? ((e.srcHeight = a.height), (e.srcWidth = e.srcHeight * g)) : ((e.srcWidth = a.width), (e.srcHeight = e.srcWidth / g));
                                        else {
                                            if ("contain" !== d) throw new Error("Unknown resizeMethod '" + d + "'");
                                            f > g ? (c = b / f) : (b = c * f);
                                        }
                                    return (e.srcX = (a.width - e.srcWidth) / 2), (e.srcY = (a.height - e.srcHeight) / 2), (e.trgWidth = b), (e.trgHeight = c), e;
                                },
                                transformFile: function (a, b) {
                                    return (this.options.resizeWidth || this.options.resizeHeight) && a.type.match(/image.*/) ? this.resizeImage(a, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, b) : b(a);
                                },
                                previewTemplate:
                                    '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                                drop: function (a) {
                                    return this.element.classList.remove("dz-drag-hover");
                                },
                                dragstart: function (a) {},
                                dragend: function (a) {
                                    return this.element.classList.remove("dz-drag-hover");
                                },
                                dragenter: function (a) {
                                    return this.element.classList.add("dz-drag-hover");
                                },
                                dragover: function (a) {
                                    return this.element.classList.add("dz-drag-hover");
                                },
                                dragleave: function (a) {
                                    return this.element.classList.remove("dz-drag-hover");
                                },
                                paste: function (a) {},
                                reset: function () {
                                    return this.element.classList.remove("dz-started");
                                },
                                addedfile: function (a) {
                                    var c = this;
                                    if ((this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer)) {
                                        (a.previewElement = b.createElement(this.options.previewTemplate.trim())), (a.previewTemplate = a.previewElement), this.previewsContainer.appendChild(a.previewElement);
                                        for (var d = a.previewElement.querySelectorAll("[data-dz-name]"), e = 0, d = d; ; ) {
                                            var f;
                                            if (e >= d.length) break;
                                            f = d[e++];
                                            var g = f;
                                            g.textContent = a.name;
                                        }
                                        for (var h = a.previewElement.querySelectorAll("[data-dz-size]"), i = 0, h = h; !(i >= h.length); ) (g = h[i++]), (g.innerHTML = this.filesize(a.size));
                                        this.options.addRemoveLinks &&
                                            ((a._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>")), a.previewElement.appendChild(a._removeLink));
                                        for (
                                            var j = function (d) {
                                                    return (
                                                        d.preventDefault(),
                                                        d.stopPropagation(),
                                                        a.status === b.UPLOADING
                                                            ? b.confirm(c.options.dictCancelUploadConfirmation, function () {
                                                                  return c.removeFile(a);
                                                              })
                                                            : c.options.dictRemoveFileConfirmation
                                                            ? b.confirm(c.options.dictRemoveFileConfirmation, function () {
                                                                  return c.removeFile(a);
                                                              })
                                                            : c.removeFile(a)
                                                    );
                                                },
                                                k = a.previewElement.querySelectorAll("[data-dz-remove]"),
                                                l = 0,
                                                k = k;
                                            ;

                                        ) {
                                            var m;
                                            if (l >= k.length) break;
                                            m = k[l++];
                                            m.addEventListener("click", j);
                                        }
                                    }
                                },
                                removedfile: function (a) {
                                    return null != a.previewElement && null != a.previewElement.parentNode && a.previewElement.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass();
                                },
                                thumbnail: function (a, b) {
                                    if (a.previewElement) {
                                        a.previewElement.classList.remove("dz-file-preview");
                                        for (var c = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), d = 0, c = c; ; ) {
                                            var e;
                                            if (d >= c.length) break;
                                            e = c[d++];
                                            var f = e;
                                            (f.alt = a.name), (f.src = b);
                                        }
                                        return setTimeout(function () {
                                            return a.previewElement.classList.add("dz-image-preview");
                                        }, 1);
                                    }
                                },
                                error: function (a, b) {
                                    if (a.previewElement) {
                                        a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error);
                                        for (var c = a.previewElement.querySelectorAll("[data-dz-errormessage]"), d = 0, c = c; ; ) {
                                            var e;
                                            if (d >= c.length) break;
                                            e = c[d++];
                                            e.textContent = b;
                                        }
                                    }
                                },
                                errormultiple: function () {},
                                processing: function (a) {
                                    if (a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink)) return (a._removeLink.innerHTML = this.options.dictCancelUpload);
                                },
                                processingmultiple: function () {},
                                uploadprogress: function (a, b, c) {
                                    if (a.previewElement)
                                        for (var d = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), e = 0, d = d; ; ) {
                                            var f;
                                            if (e >= d.length) break;
                                            f = d[e++];
                                            var g = f;
                                            "PROGRESS" === g.nodeName ? (g.value = b) : (g.style.width = b + "%");
                                        }
                                },
                                totaluploadprogress: function () {},
                                sending: function () {},
                                sendingmultiple: function () {},
                                success: function (a) {
                                    if (a.previewElement) return a.previewElement.classList.add("dz-success");
                                },
                                successmultiple: function () {},
                                canceled: function (a) {
                                    return this.emit("error", a, this.options.dictUploadCanceled);
                                },
                                canceledmultiple: function () {},
                                complete: function (a) {
                                    if ((a._removeLink && (a._removeLink.innerHTML = this.options.dictRemoveFile), a.previewElement)) return a.previewElement.classList.add("dz-complete");
                                },
                                completemultiple: function () {},
                                maxfilesexceeded: function () {},
                                maxfilesreached: function () {},
                                queuecomplete: function () {},
                                addedfiles: function () {},
                            }),
                            (this.prototype._thumbnailQueue = []),
                            (this.prototype._processingThumbnail = !1);
                    },
                },
                {
                    key: "extend",
                    value: function (a) {
                        for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                        for (var e = c, f = 0, e = e; ; ) {
                            var g;
                            if (f >= e.length) break;
                            g = e[f++];
                            var h = g;
                            for (var i in h) {
                                var j = h[i];
                                a[i] = j;
                            }
                        }
                        return a;
                    },
                },
            ]),
            _createClass(
                b,
                [
                    {
                        key: "getAcceptedFiles",
                        value: function () {
                            return this.files
                                .filter(function (a) {
                                    return a.accepted;
                                })
                                .map(function (a) {
                                    return a;
                                });
                        },
                    },
                    {
                        key: "getRejectedFiles",
                        value: function () {
                            return this.files
                                .filter(function (a) {
                                    return !a.accepted;
                                })
                                .map(function (a) {
                                    return a;
                                });
                        },
                    },
                    {
                        key: "getFilesWithStatus",
                        value: function (a) {
                            return this.files
                                .filter(function (b) {
                                    return b.status === a;
                                })
                                .map(function (a) {
                                    return a;
                                });
                        },
                    },
                    {
                        key: "getQueuedFiles",
                        value: function () {
                            return this.getFilesWithStatus(b.QUEUED);
                        },
                    },
                    {
                        key: "getUploadingFiles",
                        value: function () {
                            return this.getFilesWithStatus(b.UPLOADING);
                        },
                    },
                    {
                        key: "getAddedFiles",
                        value: function () {
                            return this.getFilesWithStatus(b.ADDED);
                        },
                    },
                    {
                        key: "getActiveFiles",
                        value: function () {
                            return this.files
                                .filter(function (a) {
                                    return a.status === b.UPLOADING || a.status === b.QUEUED;
                                })
                                .map(function (a) {
                                    return a;
                                });
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            var a = this;
                            if (
                                ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"),
                                this.element.classList.contains("dropzone") &&
                                    !this.element.querySelector(".dz-message") &&
                                    this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")),
                                this.clickableElements.length)
                            ) {
                                !(function c() {
                                    return (
                                        a.hiddenFileInput && a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput),
                                        (a.hiddenFileInput = document.createElement("input")),
                                        a.hiddenFileInput.setAttribute("type", "file"),
                                        (null === a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"),
                                        (a.hiddenFileInput.className = "dz-hidden-input"),
                                        null !== a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles),
                                        null !== a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture),
                                        (a.hiddenFileInput.style.visibility = "hidden"),
                                        (a.hiddenFileInput.style.position = "absolute"),
                                        (a.hiddenFileInput.style.top = "0"),
                                        (a.hiddenFileInput.style.left = "0"),
                                        (a.hiddenFileInput.style.height = "0"),
                                        (a.hiddenFileInput.style.width = "0"),
                                        b.getElement(a.options.hiddenInputContainer, "hiddenInputContainer").appendChild(a.hiddenFileInput),
                                        a.hiddenFileInput.addEventListener("change", function () {
                                            var b = a.hiddenFileInput.files;
                                            if (b.length)
                                                for (var d = b, e = 0, d = d; ; ) {
                                                    var f;
                                                    if (e >= d.length) break;
                                                    f = d[e++];
                                                    var g = f;
                                                    a.addFile(g);
                                                }
                                            return a.emit("addedfiles", b), c();
                                        })
                                    );
                                })();
                            }
                            this.URL = null !== window.URL ? window.URL : window.webkitURL;
                            for (var c = this.events, d = 0, c = c; ; ) {
                                var e;
                                if (d >= c.length) break;
                                e = c[d++];
                                var f = e;
                                this.on(f, this.options[f]);
                            }
                            this.on("uploadprogress", function () {
                                return a.updateTotalUploadProgress();
                            }),
                                this.on("removedfile", function () {
                                    return a.updateTotalUploadProgress();
                                }),
                                this.on("canceled", function (b) {
                                    return a.emit("complete", b);
                                }),
                                this.on("complete", function (b) {
                                    if (0 === a.getAddedFiles().length && 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length)
                                        return setTimeout(function () {
                                            return a.emit("queuecomplete");
                                        }, 0);
                                });
                            var g = function (a) {
                                return a.stopPropagation(), a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
                            };
                            return (
                                (this.listeners = [
                                    {
                                        element: this.element,
                                        events: {
                                            dragstart: function (b) {
                                                return a.emit("dragstart", b);
                                            },
                                            dragenter: function (b) {
                                                return g(b), a.emit("dragenter", b);
                                            },
                                            dragover: function (b) {
                                                var c = void 0;
                                                try {
                                                    c = b.dataTransfer.effectAllowed;
                                                } catch (a) {}
                                                return (b.dataTransfer.dropEffect = "move" === c || "linkMove" === c ? "move" : "copy"), g(b), a.emit("dragover", b);
                                            },
                                            dragleave: function (b) {
                                                return a.emit("dragleave", b);
                                            },
                                            drop: function (b) {
                                                return g(b), a.drop(b);
                                            },
                                            dragend: function (b) {
                                                return a.emit("dragend", b);
                                            },
                                        },
                                    },
                                ]),
                                this.clickableElements.forEach(function (c) {
                                    return a.listeners.push({
                                        element: c,
                                        events: {
                                            click: function (d) {
                                                return (c !== a.element || d.target === a.element || b.elementInside(d.target, a.element.querySelector(".dz-message"))) && a.hiddenFileInput.click(), !0;
                                            },
                                        },
                                    });
                                }),
                                this.enable(),
                                this.options.init.call(this)
                            );
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return (
                                this.disable(),
                                this.removeAllFiles(!0),
                                (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), (this.hiddenFileInput = null)),
                                delete this.element.dropzone,
                                b.instances.splice(b.instances.indexOf(this), 1)
                            );
                        },
                    },
                    {
                        key: "updateTotalUploadProgress",
                        value: function () {
                            var a = void 0,
                                b = 0,
                                c = 0;
                            if (this.getActiveFiles().length) {
                                for (var d = this.getActiveFiles(), e = 0, d = d; ; ) {
                                    var f;
                                    if (e >= d.length) break;
                                    f = d[e++];
                                    var g = f;
                                    (b += g.upload.bytesSent), (c += g.upload.total);
                                }
                                a = (100 * b) / c;
                            } else a = 100;
                            return this.emit("totaluploadprogress", a, c, b);
                        },
                    },
                    {
                        key: "_getParamName",
                        value: function (a) {
                            return "function" == typeof this.options.paramName ? this.options.paramName(a) : this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "");
                        },
                    },
                    {
                        key: "_renameFile",
                        value: function (a) {
                            return "function" != typeof this.options.renameFile ? a.name : this.options.renameFile(a);
                        },
                    },
                    {
                        key: "getFallbackForm",
                        value: function () {
                            var a = void 0,
                                c = void 0;
                            if ((a = this.getExistingFallback())) return a;
                            var d = '<div class="dz-fallback">';
                            this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"),
                                (d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>');
                            var e = b.createElement(d);
                            return (
                                "FORM" !== this.element.tagName
                                    ? ((c = b.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')), c.appendChild(e))
                                    : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)),
                                null != c ? c : e
                            );
                        },
                    },
                    {
                        key: "getExistingFallback",
                        value: function () {
                            for (var a = ["div", "form"], b = 0; b < a.length; b++) {
                                var c,
                                    d = a[b];
                                if (
                                    (c = (function (a) {
                                        for (var b = a, c = 0, b = b; ; ) {
                                            var d;
                                            if (c >= b.length) break;
                                            d = b[c++];
                                            var e = d;
                                            if (/(^| )fallback($| )/.test(e.className)) return e;
                                        }
                                    })(this.element.getElementsByTagName(d)))
                                )
                                    return c;
                            }
                        },
                    },
                    {
                        key: "setupEventListeners",
                        value: function () {
                            return this.listeners.map(function (a) {
                                return (function () {
                                    var b = [];
                                    for (var c in a.events) {
                                        var d = a.events[c];
                                        b.push(a.element.addEventListener(c, d, !1));
                                    }
                                    return b;
                                })();
                            });
                        },
                    },
                    {
                        key: "removeEventListeners",
                        value: function () {
                            return this.listeners.map(function (a) {
                                return (function () {
                                    var b = [];
                                    for (var c in a.events) {
                                        var d = a.events[c];
                                        b.push(a.element.removeEventListener(c, d, !1));
                                    }
                                    return b;
                                })();
                            });
                        },
                    },
                    {
                        key: "disable",
                        value: function () {
                            var a = this;
                            return (
                                this.clickableElements.forEach(function (a) {
                                    return a.classList.remove("dz-clickable");
                                }),
                                this.removeEventListeners(),
                                (this.disabled = !0),
                                this.files.map(function (b) {
                                    return a.cancelUpload(b);
                                })
                            );
                        },
                    },
                    {
                        key: "enable",
                        value: function () {
                            return (
                                delete this.disabled,
                                this.clickableElements.forEach(function (a) {
                                    return a.classList.add("dz-clickable");
                                }),
                                this.setupEventListeners()
                            );
                        },
                    },
                    {
                        key: "filesize",
                        value: function (a) {
                            var b = 0,
                                c = "b";
                            if (a > 0) {
                                for (var d = ["tb", "gb", "mb", "kb", "b"], e = 0; e < d.length; e++) {
                                    var f = d[e];
                                    if (a >= Math.pow(this.options.filesizeBase, 4 - e) / 10) {
                                        (b = a / Math.pow(this.options.filesizeBase, 4 - e)), (c = f);
                                        break;
                                    }
                                }
                                b = Math.round(10 * b) / 10;
                            }
                            return "<strong>" + b + "</strong> " + this.options.dictFileSizeUnits[c];
                        },
                    },
                    {
                        key: "_updateMaxFilesReachedClass",
                        value: function () {
                            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles
                                ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached"))
                                : this.element.classList.remove("dz-max-files-reached");
                        },
                    },
                    {
                        key: "drop",
                        value: function (a) {
                            if (a.dataTransfer) {
                                this.emit("drop", a);
                                for (var b = [], c = 0; c < a.dataTransfer.files.length; c++) b[c] = a.dataTransfer.files[c];
                                if ((this.emit("addedfiles", b), b.length)) {
                                    var d = a.dataTransfer.items;
                                    d && d.length && null != d[0].webkitGetAsEntry ? this._addFilesFromItems(d) : this.handleFiles(b);
                                }
                            }
                        },
                    },
                    {
                        key: "paste",
                        value: function (a) {
                            if (
                                null !=
                                __guard__(null != a ? a.clipboardData : void 0, function (a) {
                                    return a.items;
                                })
                            ) {
                                this.emit("paste", a);
                                var b = a.clipboardData.items;
                                return b.length ? this._addFilesFromItems(b) : void 0;
                            }
                        },
                    },
                    {
                        key: "handleFiles",
                        value: function (a) {
                            for (var b = a, c = 0, b = b; ; ) {
                                var d;
                                if (c >= b.length) break;
                                d = b[c++];
                                var e = d;
                                this.addFile(e);
                            }
                        },
                    },
                    {
                        key: "_addFilesFromItems",
                        value: function (a) {
                            var b = this;
                            return (function () {
                                for (var c = [], d = a, e = 0, d = d; ; ) {
                                    var f;
                                    if (e >= d.length) break;
                                    f = d[e++];
                                    var g,
                                        h = f;
                                    null != h.webkitGetAsEntry && (g = h.webkitGetAsEntry())
                                        ? g.isFile
                                            ? c.push(b.addFile(h.getAsFile()))
                                            : g.isDirectory
                                            ? c.push(b._addFilesFromDirectory(g, g.name))
                                            : c.push(void 0)
                                        : null != h.getAsFile && (null == h.kind || "file" === h.kind)
                                        ? c.push(b.addFile(h.getAsFile()))
                                        : c.push(void 0);
                                }
                                return c;
                            })();
                        },
                    },
                    {
                        key: "_addFilesFromDirectory",
                        value: function (a, b) {
                            var c = this,
                                d = a.createReader(),
                                e = function (a) {
                                    return __guardMethod__(console, "log", function (b) {
                                        return b.log(a);
                                    });
                                };
                            return (function a() {
                                return d.readEntries(function (d) {
                                    if (d.length > 0) {
                                        for (var e = d, f = 0, e = e; ; ) {
                                            var g;
                                            if (f >= e.length) break;
                                            g = e[f++];
                                            var h = g;
                                            h.isFile
                                                ? h.file(function (a) {
                                                      if (!c.options.ignoreHiddenFiles || "." !== a.name.substring(0, 1)) return (a.fullPath = b + "/" + a.name), c.addFile(a);
                                                  })
                                                : h.isDirectory && c._addFilesFromDirectory(h, b + "/" + h.name);
                                        }
                                        a();
                                    }
                                    return null;
                                }, e);
                            })();
                        },
                    },
                    {
                        key: "accept",
                        value: function (a, c) {
                            return this.options.maxFilesize && a.size > 1024 * this.options.maxFilesize * 1024
                                ? c(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize))
                                : b.isValidFile(a, this.options.acceptedFiles)
                                ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles
                                    ? (c(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a))
                                    : this.options.accept.call(this, a, c)
                                : c(this.options.dictInvalidFileType);
                        },
                    },
                    {
                        key: "addFile",
                        value: function (a) {
                            var c = this;
                            return (
                                (a.upload = {
                                    uuid: b.uuidv4(),
                                    progress: 0,
                                    total: a.size,
                                    bytesSent: 0,
                                    filename: this._renameFile(a),
                                    chunked: this.options.chunking && (this.options.forceChunking || a.size > this.options.chunkSize),
                                    totalChunkCount: Math.ceil(a.size / this.options.chunkSize),
                                }),
                                this.files.push(a),
                                (a.status = b.ADDED),
                                this.emit("addedfile", a),
                                this._enqueueThumbnail(a),
                                this.accept(a, function (b) {
                                    return b ? ((a.accepted = !1), c._errorProcessing([a], b)) : ((a.accepted = !0), c.options.autoQueue && c.enqueueFile(a)), c._updateMaxFilesReachedClass();
                                })
                            );
                        },
                    },
                    {
                        key: "enqueueFiles",
                        value: function (a) {
                            for (var b = a, c = 0, b = b; ; ) {
                                var d;
                                if (c >= b.length) break;
                                d = b[c++];
                                var e = d;
                                this.enqueueFile(e);
                            }
                            return null;
                        },
                    },
                    {
                        key: "enqueueFile",
                        value: function (a) {
                            var c = this;
                            if (a.status !== b.ADDED || !0 !== a.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                            if (((a.status = b.QUEUED), this.options.autoProcessQueue))
                                return setTimeout(function () {
                                    return c.processQueue();
                                }, 0);
                        },
                    },
                    {
                        key: "_enqueueThumbnail",
                        value: function (a) {
                            var b = this;
                            if (this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024)
                                return (
                                    this._thumbnailQueue.push(a),
                                    setTimeout(function () {
                                        return b._processThumbnailQueue();
                                    }, 0)
                                );
                        },
                    },
                    {
                        key: "_processThumbnailQueue",
                        value: function () {
                            var a = this;
                            if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                                this._processingThumbnail = !0;
                                var b = this._thumbnailQueue.shift();
                                return this.createThumbnail(b, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function (c) {
                                    return a.emit("thumbnail", b, c), (a._processingThumbnail = !1), a._processThumbnailQueue();
                                });
                            }
                        },
                    },
                    {
                        key: "removeFile",
                        value: function (a) {
                            if ((a.status === b.UPLOADING && this.cancelUpload(a), (this.files = without(this.files, a)), this.emit("removedfile", a), 0 === this.files.length)) return this.emit("reset");
                        },
                    },
                    {
                        key: "removeAllFiles",
                        value: function (a) {
                            null == a && (a = !1);
                            for (var c = this.files.slice(), d = 0, c = c; ; ) {
                                var e;
                                if (d >= c.length) break;
                                e = c[d++];
                                var f = e;
                                (f.status !== b.UPLOADING || a) && this.removeFile(f);
                            }
                            return null;
                        },
                    },
                    {
                        key: "resizeImage",
                        value: function (a, c, d, e, f) {
                            var g = this;
                            return this.createThumbnail(a, c, d, e, !0, function (c, d) {
                                if (null == d) return f(a);
                                var e = g.options.resizeMimeType;
                                null == e && (e = a.type);
                                var h = d.toDataURL(e, g.options.resizeQuality);
                                return ("image/jpeg" !== e && "image/jpg" !== e) || (h = ExifRestore.restore(a.dataURL, h)), f(b.dataURItoBlob(h));
                            });
                        },
                    },
                    {
                        key: "createThumbnail",
                        value: function (a, b, c, d, e, f) {
                            var g = this,
                                h = new FileReader();
                            return (
                                (h.onload = function () {
                                    return (a.dataURL = h.result), "image/svg+xml" === a.type ? void (null != f && f(h.result)) : g.createThumbnailFromUrl(a, b, c, d, e, f);
                                }),
                                h.readAsDataURL(a)
                            );
                        },
                    },
                    {
                        key: "createThumbnailFromUrl",
                        value: function (a, b, c, d, e, f, g) {
                            var h = this,
                                i = document.createElement("img");
                            return (
                                g && (i.crossOrigin = g),
                                (i.onload = function () {
                                    var g = function (a) {
                                        return a(1);
                                    };
                                    return (
                                        "undefined" != typeof EXIF &&
                                            null !== EXIF &&
                                            e &&
                                            (g = function (a) {
                                                return EXIF.getData(i, function () {
                                                    return a(EXIF.getTag(this, "Orientation"));
                                                });
                                            }),
                                        g(function (e) {
                                            (a.width = i.width), (a.height = i.height);
                                            var g = h.options.resize.call(h, a, b, c, d),
                                                j = document.createElement("canvas"),
                                                k = j.getContext("2d");
                                            switch (((j.width = g.trgWidth), (j.height = g.trgHeight), e > 4 && ((j.width = g.trgHeight), (j.height = g.trgWidth)), e)) {
                                                case 2:
                                                    k.translate(j.width, 0), k.scale(-1, 1);
                                                    break;
                                                case 3:
                                                    k.translate(j.width, j.height), k.rotate(Math.PI);
                                                    break;
                                                case 4:
                                                    k.translate(0, j.height), k.scale(1, -1);
                                                    break;
                                                case 5:
                                                    k.rotate(0.5 * Math.PI), k.scale(1, -1);
                                                    break;
                                                case 6:
                                                    k.rotate(0.5 * Math.PI), k.translate(0, -j.width);
                                                    break;
                                                case 7:
                                                    k.rotate(0.5 * Math.PI), k.translate(j.height, -j.width), k.scale(-1, 1);
                                                    break;
                                                case 8:
                                                    k.rotate(-0.5 * Math.PI), k.translate(-j.height, 0);
                                            }
                                            drawImageIOSFix(k, i, null != g.srcX ? g.srcX : 0, null != g.srcY ? g.srcY : 0, g.srcWidth, g.srcHeight, null != g.trgX ? g.trgX : 0, null != g.trgY ? g.trgY : 0, g.trgWidth, g.trgHeight);
                                            var l = j.toDataURL("image/png");
                                            if (null != f) return f(l, j);
                                        })
                                    );
                                }),
                                null != f && (i.onerror = f),
                                (i.src = a.dataURL)
                            );
                        },
                    },
                    {
                        key: "processQueue",
                        value: function () {
                            var a = this.options.parallelUploads,
                                b = this.getUploadingFiles().length,
                                c = b;
                            if (!(b >= a)) {
                                var d = this.getQueuedFiles();
                                if (d.length > 0) {
                                    if (this.options.uploadMultiple) return this.processFiles(d.slice(0, a - b));
                                    for (; c < a; ) {
                                        if (!d.length) return;
                                        this.processFile(d.shift()), c++;
                                    }
                                }
                            }
                        },
                    },
                    {
                        key: "processFile",
                        value: function (a) {
                            return this.processFiles([a]);
                        },
                    },
                    {
                        key: "processFiles",
                        value: function (a) {
                            for (var c = a, d = 0, c = c; ; ) {
                                var e;
                                if (d >= c.length) break;
                                e = c[d++];
                                var f = e;
                                (f.processing = !0), (f.status = b.UPLOADING), this.emit("processing", f);
                            }
                            return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a);
                        },
                    },
                    {
                        key: "_getFilesWithXhr",
                        value: function (a) {
                            return this.files
                                .filter(function (b) {
                                    return b.xhr === a;
                                })
                                .map(function (a) {
                                    return a;
                                });
                        },
                    },
                    {
                        key: "cancelUpload",
                        value: function (a) {
                            if (a.status === b.UPLOADING) {
                                for (var c = this._getFilesWithXhr(a.xhr), d = c, e = 0, d = d; ; ) {
                                    var f;
                                    if (e >= d.length) break;
                                    f = d[e++];
                                    f.status = b.CANCELED;
                                }
                                void 0 !== a.xhr && a.xhr.abort();
                                for (var g = c, h = 0, g = g; ; ) {
                                    var i;
                                    if (h >= g.length) break;
                                    i = g[h++];
                                    var j = i;
                                    this.emit("canceled", j);
                                }
                                this.options.uploadMultiple && this.emit("canceledmultiple", c);
                            } else (a.status !== b.ADDED && a.status !== b.QUEUED) || ((a.status = b.CANCELED), this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
                            if (this.options.autoProcessQueue) return this.processQueue();
                        },
                    },
                    {
                        key: "resolveOption",
                        value: function (a) {
                            if ("function" == typeof a) {
                                for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                                return a.apply(this, c);
                            }
                            return a;
                        },
                    },
                    {
                        key: "uploadFile",
                        value: function (a) {
                            return this.uploadFiles([a]);
                        },
                    },
                    {
                        key: "uploadFiles",
                        value: function (a) {
                            var c = this;
                            this._transformFiles(a, function (d) {
                                if (a[0].upload.chunked) {
                                    var e = a[0],
                                        f = d[0],
                                        g = 0;
                                    e.upload.chunks = [];
                                    var h = function () {
                                        for (var d = 0; void 0 !== e.upload.chunks[d]; ) d++;
                                        if (!(d >= e.upload.totalChunkCount)) {
                                            g++;
                                            var h = d * c.options.chunkSize,
                                                i = Math.min(h + c.options.chunkSize, e.size),
                                                j = { name: c._getParamName(0), data: f.webkitSlice ? f.webkitSlice(h, i) : f.slice(h, i), filename: e.upload.filename, chunkIndex: d };
                                            (e.upload.chunks[d] = { file: e, index: d, dataBlock: j, status: b.UPLOADING, progress: 0, retries: 0 }), c._uploadData(a, [j]);
                                        }
                                    };
                                    if (
                                        ((e.upload.finishedChunkUpload = function (d) {
                                            var f = !0;
                                            (d.status = b.SUCCESS), (d.dataBlock = null), (d.xhr = null);
                                            for (var g = 0; g < e.upload.totalChunkCount; g++) {
                                                if (void 0 === e.upload.chunks[g]) return h();
                                                e.upload.chunks[g].status !== b.SUCCESS && (f = !1);
                                            }
                                            f &&
                                                c.options.chunksUploaded(e, function () {
                                                    c._finished(a, "", null);
                                                });
                                        }),
                                        c.options.parallelChunkUploads)
                                    )
                                        for (var i = 0; i < e.upload.totalChunkCount; i++) h();
                                    else h();
                                } else {
                                    for (var j = [], k = 0; k < a.length; k++) j[k] = { name: c._getParamName(k), data: d[k], filename: a[k].upload.filename };
                                    c._uploadData(a, j);
                                }
                            });
                        },
                    },
                    {
                        key: "_getChunk",
                        value: function (a, b) {
                            for (var c = 0; c < a.upload.totalChunkCount; c++) if (void 0 !== a.upload.chunks[c] && a.upload.chunks[c].xhr === b) return a.upload.chunks[c];
                        },
                    },
                    {
                        key: "_uploadData",
                        value: function (a, c) {
                            for (var d = this, e = new XMLHttpRequest(), f = a, g = 0, f = f; ; ) {
                                var h;
                                if (g >= f.length) break;
                                h = f[g++];
                                h.xhr = e;
                            }
                            a[0].upload.chunked && (a[0].upload.chunks[c[0].chunkIndex].xhr = e);
                            var i = this.resolveOption(this.options.method, a),
                                j = this.resolveOption(this.options.url, a);
                            e.open(i, j, !0),
                                (e.timeout = this.resolveOption(this.options.timeout, a)),
                                (e.withCredentials = !!this.options.withCredentials),
                                (e.onload = function (b) {
                                    d._finishedUploading(a, e, b);
                                }),
                                (e.onerror = function () {
                                    d._handleUploadError(a, e);
                                }),
                                ((null != e.upload ? e.upload : e).onprogress = function (b) {
                                    return d._updateFilesUploadProgress(a, e, b);
                                });
                            var k = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" };
                            this.options.headers && b.extend(k, this.options.headers);
                            for (var l in k) {
                                var m = k[l];
                                m && e.setRequestHeader(l, m);
                            }
                            var n = new FormData();
                            if (this.options.params) {
                                var o = this.options.params;
                                "function" == typeof o && (o = o.call(this, a, e, a[0].upload.chunked ? this._getChunk(a[0], e) : null));
                                for (var p in o) {
                                    var q = o[p];
                                    n.append(p, q);
                                }
                            }
                            for (var r = a, s = 0, r = r; ; ) {
                                var t;
                                if (s >= r.length) break;
                                t = r[s++];
                                var u = t;
                                this.emit("sending", u, e, n);
                            }
                            this.options.uploadMultiple && this.emit("sendingmultiple", a, e, n), this._addFormElementData(n);
                            for (var v = 0; v < c.length; v++) {
                                var w = c[v];
                                n.append(w.name, w.data, w.filename);
                            }
                            this.submitRequest(e, n, a);
                        },
                    },
                    {
                        key: "_transformFiles",
                        value: function (a, b) {
                            for (var c = this, d = [], e = 0, f = 0; f < a.length; f++)
                                !(function (f) {
                                    c.options.transformFile.call(c, a[f], function (c) {
                                        (d[f] = c), ++e === a.length && b(d);
                                    });
                                })(f);
                        },
                    },
                    {
                        key: "_addFormElementData",
                        value: function (a) {
                            if ("FORM" === this.element.tagName)
                                for (var b = this.element.querySelectorAll("input, textarea, select, button"), c = 0, b = b; ; ) {
                                    var d;
                                    if (c >= b.length) break;
                                    d = b[c++];
                                    var e = d,
                                        f = e.getAttribute("name"),
                                        g = e.getAttribute("type");
                                    if ((g && (g = g.toLowerCase()), void 0 !== f && null !== f))
                                        if ("SELECT" === e.tagName && e.hasAttribute("multiple"))
                                            for (var h = e.options, i = 0, h = h; ; ) {
                                                var j;
                                                if (i >= h.length) break;
                                                j = h[i++];
                                                var k = j;
                                                k.selected && a.append(f, k.value);
                                            }
                                        else (!g || ("checkbox" !== g && "radio" !== g) || e.checked) && a.append(f, e.value);
                                }
                        },
                    },
                    {
                        key: "_updateFilesUploadProgress",
                        value: function (a, b, c) {
                            var d = void 0;
                            if (void 0 !== c) {
                                if (((d = (100 * c.loaded) / c.total), a[0].upload.chunked)) {
                                    var e = a[0],
                                        f = this._getChunk(e, b);
                                    (f.progress = d), (f.total = c.total), (f.bytesSent = c.loaded);
                                    (e.upload.progress = 0), (e.upload.total = 0), (e.upload.bytesSent = 0);
                                    for (var g = 0; g < e.upload.totalChunkCount; g++)
                                        void 0 !== e.upload.chunks[g] &&
                                            void 0 !== e.upload.chunks[g].progress &&
                                            ((e.upload.progress += e.upload.chunks[g].progress), (e.upload.total += e.upload.chunks[g].total), (e.upload.bytesSent += e.upload.chunks[g].bytesSent));
                                    e.upload.progress = e.upload.progress / e.upload.totalChunkCount;
                                } else
                                    for (var h = a, i = 0, h = h; ; ) {
                                        var j;
                                        if (i >= h.length) break;
                                        j = h[i++];
                                        var k = j;
                                        (k.upload.progress = d), (k.upload.total = c.total), (k.upload.bytesSent = c.loaded);
                                    }
                                for (var l = a, m = 0, l = l; ; ) {
                                    var n;
                                    if (m >= l.length) break;
                                    n = l[m++];
                                    var o = n;
                                    this.emit("uploadprogress", o, o.upload.progress, o.upload.bytesSent);
                                }
                            } else {
                                var p = !0;
                                d = 100;
                                for (var q = a, r = 0, q = q; ; ) {
                                    var s;
                                    if (r >= q.length) break;
                                    s = q[r++];
                                    var t = s;
                                    (100 === t.upload.progress && t.upload.bytesSent === t.upload.total) || (p = !1), (t.upload.progress = d), (t.upload.bytesSent = t.upload.total);
                                }
                                if (p) return;
                                for (var u = a, v = 0, u = u; ; ) {
                                    var w;
                                    if (v >= u.length) break;
                                    w = u[v++];
                                    var x = w;
                                    this.emit("uploadprogress", x, d, x.upload.bytesSent);
                                }
                            }
                        },
                    },
                    {
                        key: "_finishedUploading",
                        value: function (a, c, d) {
                            var e = void 0;
                            if (a[0].status !== b.CANCELED && 4 === c.readyState) {
                                if ("arraybuffer" !== c.responseType && "blob" !== c.responseType && ((e = c.responseText), c.getResponseHeader("content-type") && ~c.getResponseHeader("content-type").indexOf("application/json")))
                                    try {
                                        e = JSON.parse(e);
                                    } catch (a) {
                                        (d = a), (e = "Invalid JSON response from server.");
                                    }
                                this._updateFilesUploadProgress(a),
                                    200 <= c.status && c.status < 300 ? (a[0].upload.chunked ? a[0].upload.finishedChunkUpload(this._getChunk(a[0], c)) : this._finished(a, e, d)) : this._handleUploadError(a, c, e);
                            }
                        },
                    },
                    {
                        key: "_handleUploadError",
                        value: function (a, c, d) {
                            if (a[0].status !== b.CANCELED) {
                                if (a[0].upload.chunked && this.options.retryChunks) {
                                    var e = this._getChunk(a[0], c);
                                    if (e.retries++ < this.options.retryChunksLimit) return void this._uploadData(a, [e.dataBlock]);
                                    console.warn("Retried this chunk too often. Giving up.");
                                }
                                for (var f = a, g = 0, f = f; ; ) {
                                    if (g >= f.length) break;
                                    f[g++];
                                    this._errorProcessing(a, d || this.options.dictResponseError.replace("{{statusCode}}", c.status), c);
                                }
                            }
                        },
                    },
                    {
                        key: "submitRequest",
                        value: function (a, b, c) {
                            a.send(b);
                        },
                    },
                    {
                        key: "_finished",
                        value: function (a, c, d) {
                            for (var e = a, f = 0, e = e; ; ) {
                                var g;
                                if (f >= e.length) break;
                                g = e[f++];
                                var h = g;
                                (h.status = b.SUCCESS), this.emit("success", h, c, d), this.emit("complete", h);
                            }
                            if ((this.options.uploadMultiple && (this.emit("successmultiple", a, c, d), this.emit("completemultiple", a)), this.options.autoProcessQueue)) return this.processQueue();
                        },
                    },
                    {
                        key: "_errorProcessing",
                        value: function (a, c, d) {
                            for (var e = a, f = 0, e = e; ; ) {
                                var g;
                                if (f >= e.length) break;
                                g = e[f++];
                                var h = g;
                                (h.status = b.ERROR), this.emit("error", h, c, d), this.emit("complete", h);
                            }
                            if ((this.options.uploadMultiple && (this.emit("errormultiple", a, c, d), this.emit("completemultiple", a)), this.options.autoProcessQueue)) return this.processQueue();
                        },
                    },
                ],
                [
                    {
                        key: "uuidv4",
                        value: function () {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                                var b = (16 * Math.random()) | 0;
                                return ("x" === a ? b : (3 & b) | 8).toString(16);
                            });
                        },
                    },
                ]
            ),
            b
        );
    })(Emitter);
Dropzone.initClass(),
    (Dropzone.version = "5.5.1"),
    (Dropzone.options = {}),
    (Dropzone.optionsForElement = function (a) {
        return a.getAttribute("id") ? Dropzone.options[camelize(a.getAttribute("id"))] : void 0;
    }),
    (Dropzone.instances = []),
    (Dropzone.forElement = function (a) {
        if (("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)))
            throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return a.dropzone;
    }),
    (Dropzone.autoDiscover = !0),
    (Dropzone.discover = function () {
        var a = void 0;
        if (document.querySelectorAll) a = document.querySelectorAll(".dropzone");
        else {
            a = [];
            var b = function (b) {
                return (function () {
                    for (var c = [], d = b, e = 0, d = d; ; ) {
                        var f;
                        if (e >= d.length) break;
                        f = d[e++];
                        var g = f;
                        /(^| )dropzone($| )/.test(g.className) ? c.push(a.push(g)) : c.push(void 0);
                    }
                    return c;
                })();
            };
            b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"));
        }
        return (function () {
            for (var b = [], c = a, d = 0, c = c; ; ) {
                var e;
                if (d >= c.length) break;
                e = c[d++];
                var f = e;
                !1 !== Dropzone.optionsForElement(f) ? b.push(new Dropzone(f)) : b.push(void 0);
            }
            return b;
        })();
    }),
    (Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i]),
    (Dropzone.isBrowserSupported = function () {
        var a = !0;
        if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList" in document.createElement("a"))
                for (var b = Dropzone.blacklistedBrowsers, c = 0, b = b; ; ) {
                    var d;
                    if (c >= b.length) break;
                    d = b[c++];
                    var e = d;
                    e.test(navigator.userAgent) && (a = !1);
                }
            else a = !1;
        else a = !1;
        return a;
    }),
    (Dropzone.dataURItoBlob = function (a) {
        for (var b = atob(a.split(",")[1]), c = a.split(",")[0].split(":")[1].split(";")[0], d = new ArrayBuffer(b.length), e = new Uint8Array(d), f = 0, g = b.length, h = 0 <= g; h ? f <= g : f >= g; h ? f++ : f--) e[f] = b.charCodeAt(f);
        return new Blob([d], { type: c });
    });
var without = function (a, b) {
        return a
            .filter(function (a) {
                return a !== b;
            })
            .map(function (a) {
                return a;
            });
    },
    camelize = function (a) {
        return a.replace(/[\-_](\w)/g, function (a) {
            return a.charAt(1).toUpperCase();
        });
    };
(Dropzone.createElement = function (a) {
    var b = document.createElement("div");
    return (b.innerHTML = a), b.childNodes[0];
}),
    (Dropzone.elementInside = function (a, b) {
        if (a === b) return !0;
        for (; (a = a.parentNode); ) if (a === b) return !0;
        return !1;
    }),
    (Dropzone.getElement = function (a, b) {
        var c = void 0;
        if (("string" == typeof a ? (c = document.querySelector(a)) : null != a.nodeType && (c = a), null == c)) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return c;
    }),
    (Dropzone.getElements = function (a, b) {
        var c = void 0,
            d = void 0;
        if (a instanceof Array) {
            d = [];
            try {
                for (var e = a, f = 0, e = e; !(f >= e.length); ) (c = e[f++]), d.push(this.getElement(c, b));
            } catch (a) {
                d = null;
            }
        } else if ("string" == typeof a) {
            d = [];
            for (var g = document.querySelectorAll(a), h = 0, g = g; !(h >= g.length); ) (c = g[h++]), d.push(c);
        } else null != a.nodeType && (d = [a]);
        if (null == d || !d.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return d;
    }),
    (Dropzone.confirm = function (a, b, c) {
        return window.confirm(a) ? b() : null != c ? c() : void 0;
    }),
    (Dropzone.isValidFile = function (a, b) {
        if (!b) return !0;
        b = b.split(",");
        for (var c = a.type, d = c.replace(/\/.*$/, ""), e = b, f = 0, e = e; ; ) {
            var g;
            if (f >= e.length) break;
            g = e[f++];
            var h = g;
            if (((h = h.trim()), "." === h.charAt(0))) {
                if (-1 !== a.name.toLowerCase().indexOf(h.toLowerCase(), a.name.length - h.length)) return !0;
            } else if (/\/\*$/.test(h)) {
                if (d === h.replace(/\/.*$/, "")) return !0;
            } else if (c === h) return !0;
        }
        return !1;
    }),
    "undefined" != typeof jQuery &&
        null !== jQuery &&
        (jQuery.fn.dropzone = function (a) {
            return this.each(function () {
                return new Dropzone(this, a);
            });
        }),
    "undefined" != typeof module && null !== module ? (module.exports = Dropzone) : (window.Dropzone = Dropzone),
    (Dropzone.ADDED = "added"),
    (Dropzone.QUEUED = "queued"),
    (Dropzone.ACCEPTED = Dropzone.QUEUED),
    (Dropzone.UPLOADING = "uploading"),
    (Dropzone.PROCESSING = Dropzone.UPLOADING),
    (Dropzone.CANCELED = "canceled"),
    (Dropzone.ERROR = "error"),
    (Dropzone.SUCCESS = "success");
var detectVerticalSquash = function (a) {
        var b = (a.naturalWidth, a.naturalHeight),
            c = document.createElement("canvas");
        (c.width = 1), (c.height = b);
        var d = c.getContext("2d");
        d.drawImage(a, 0, 0);
        for (var e = d.getImageData(1, 0, 1, b), f = e.data, g = 0, h = b, i = b; i > g; ) {
            0 === f[4 * (i - 1) + 3] ? (h = i) : (g = i), (i = (h + g) >> 1);
        }
        var j = i / b;
        return 0 === j ? 1 : j;
    },
    drawImageIOSFix = function (a, b, c, d, e, f, g, h, i, j) {
        var k = detectVerticalSquash(b);
        return a.drawImage(b, c, d, e, f, g, h, i, j / k);
    },
    ExifRestore = (function () {
        function a() {
            _classCallCheck(this, a);
        }
        return (
            _createClass(a, null, [
                {
                    key: "initClass",
                    value: function () {
                        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    },
                },
                {
                    key: "encode64",
                    value: function (a) {
                        for (var b = "", c = void 0, d = void 0, e = "", f = void 0, g = void 0, h = void 0, i = "", j = 0; ; )
                            if (
                                ((c = a[j++]),
                                (d = a[j++]),
                                (e = a[j++]),
                                (f = c >> 2),
                                (g = ((3 & c) << 4) | (d >> 4)),
                                (h = ((15 & d) << 2) | (e >> 6)),
                                (i = 63 & e),
                                isNaN(d) ? (h = i = 64) : isNaN(e) && (i = 64),
                                (b = b + this.KEY_STR.charAt(f) + this.KEY_STR.charAt(g) + this.KEY_STR.charAt(h) + this.KEY_STR.charAt(i)),
                                (c = d = e = ""),
                                (f = g = h = i = ""),
                                !(j < a.length))
                            )
                                break;
                        return b;
                    },
                },
                {
                    key: "restore",
                    value: function (a, b) {
                        if (!a.match("data:image/jpeg;base64,")) return b;
                        var c = this.decode64(a.replace("data:image/jpeg;base64,", "")),
                            d = this.slice2Segments(c),
                            e = this.exifManipulation(b, d);
                        return "data:image/jpeg;base64," + this.encode64(e);
                    },
                },
                {
                    key: "exifManipulation",
                    value: function (a, b) {
                        var c = this.getExifArray(b),
                            d = this.insertExif(a, c);
                        return new Uint8Array(d);
                    },
                },
                {
                    key: "getExifArray",
                    value: function (a) {
                        for (var b = void 0, c = 0; c < a.length; ) {
                            if (((b = a[c]), (255 === b[0]) & (225 === b[1]))) return b;
                            c++;
                        }
                        return [];
                    },
                },
                {
                    key: "insertExif",
                    value: function (a, b) {
                        var c = a.replace("data:image/jpeg;base64,", ""),
                            d = this.decode64(c),
                            e = d.indexOf(255, 3),
                            f = d.slice(0, e),
                            g = d.slice(e),
                            h = f;
                        return (h = h.concat(b)), (h = h.concat(g));
                    },
                },
                {
                    key: "slice2Segments",
                    value: function (a) {
                        for (var b = 0, c = []; ; ) {
                            var d;
                            if ((255 === a[b]) & (218 === a[b + 1])) break;
                            if ((255 === a[b]) & (216 === a[b + 1])) b += 2;
                            else {
                                d = 256 * a[b + 2] + a[b + 3];
                                var e = b + d + 2,
                                    f = a.slice(b, e);
                                c.push(f), (b = e);
                            }
                            if (b > a.length) break;
                        }
                        return c;
                    },
                },
                {
                    key: "decode64",
                    value: function (a) {
                        var b = void 0,
                            c = void 0,
                            d = "",
                            e = void 0,
                            f = void 0,
                            g = void 0,
                            h = "",
                            i = 0,
                            j = [],
                            k = /[^A-Za-z0-9\+\/\=]/g;
                        for (
                            k.exec(a) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),
                                a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                            ;

                        )
                            if (
                                ((e = this.KEY_STR.indexOf(a.charAt(i++))),
                                (f = this.KEY_STR.indexOf(a.charAt(i++))),
                                (g = this.KEY_STR.indexOf(a.charAt(i++))),
                                (h = this.KEY_STR.indexOf(a.charAt(i++))),
                                (b = (e << 2) | (f >> 4)),
                                (c = ((15 & f) << 4) | (g >> 2)),
                                (d = ((3 & g) << 6) | h),
                                j.push(b),
                                64 !== g && j.push(c),
                                64 !== h && j.push(d),
                                (b = c = d = ""),
                                (e = f = g = h = ""),
                                !(i < a.length))
                            )
                                break;
                        return j;
                    },
                },
            ]),
            a
        );
    })();
ExifRestore.initClass();
var contentLoaded = function (a, b) {
    var c = !1,
        d = !0,
        e = a.document,
        f = e.documentElement,
        g = e.addEventListener ? "addEventListener" : "attachEvent",
        h = e.addEventListener ? "removeEventListener" : "detachEvent",
        i = e.addEventListener ? "" : "on",
        j = function d(f) {
            if ("readystatechange" !== f.type || "complete" === e.readyState) return ("load" === f.type ? a : e)[h](i + f.type, d, !1), !c && (c = !0) ? b.call(a, f.type || f) : void 0;
        };
    if ("complete" !== e.readyState) {
        if (e.createEventObject && f.doScroll) {
            try {
                d = !a.frameElement;
            } catch (a) {}
            d &&
                (function a() {
                    try {
                        f.doScroll("left");
                    } catch (b) {
                        return void setTimeout(a, 50);
                    }
                    return j("poll");
                })();
        }
        return e[g](i + "DOMContentLoaded", j, !1), e[g](i + "readystatechange", j, !1), a[g](i + "load", j, !1);
    }
};
(Dropzone._autoDiscoverFunction = function () {
    if (Dropzone.autoDiscover) return Dropzone.discover();
}),
    contentLoaded(window, Dropzone._autoDiscoverFunction);
