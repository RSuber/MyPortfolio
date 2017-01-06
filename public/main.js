"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        $(document).on("click", ".about", function () {
            console.log('pressed');
            $('html, body').animate({
                scrollTop: $("#name").offset().top
            }, 1500);
        });
        $(document).on("click", ".projects", function () {
            console.log('pressed');
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 1500);
        });
        $(document).on("click", ".contact", function () {
            console.log('pressed');
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 1500);
        });
    }, {}] }, {}, [1]);