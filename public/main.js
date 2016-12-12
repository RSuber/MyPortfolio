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
    var wheel = Draggable.create("#wheel", {
      type: "rotation",
      throwProps: true,
      snap: function snap(endValue) {
        return Math.round(endValue / 90) * 90;
      },
      onDrag: function onDrag() {},
      onThrowComplete: function onThrowComplete() {
        dragActive();
      }
    });

    // Calculate which product is active
    function dragActive() {
      var rot = wheel[0].rotation / 360;
      var decimal = rot % 1;
      var sliderLength = $('#wheel li').length;
      var tempIndex = Math.round(sliderLength * decimal);
      var index;

      if (rot < 0) {
        index = Math.abs(tempIndex);
      } else {
        index = sliderLength - tempIndex;
      }

      if (decimal === 0) {
        index = 0;
      }

      $('#wheel li.active').removeClass('active');
      $($('#wheel li')[index]).addClass('active');
    }

    // Tween rotation
    function rotateDraggable(deg, callback) {
      var rot = draggable[0].rotation;
      var tl = new TimelineMax();

      tl.to('#wheel', .5, {
        rotation: rot + deg,
        onComplete: function onComplete() {
          callback();
        }
      });

      draggable[0].rotation = rot + deg;
    }

    // Tween rotation
    function rotateDraggable(deg, callback) {
      var rot = wheel[0].rotation;
      var tl = new TimelineMax();

      tl.to('#wheel', .5, {
        rotation: rot + deg,
        onComplete: function onComplete() {
          callback();
        }
      });

      wheel[0].rotation = rot + deg;
    }

    // Handlers
    function nextHandler() {
      var current = $('#wheel li.active');
      var item = current + 1;
      if (item > $('#wheel li').length) {
        item = 1;
      }
      rotateDraggable(360 / $('#wheel li').length, dragActive);
    }

    function prevHandler() {
      var current = $('#wheel li.active');
      var item = current - 1;
      if (item > 1) {
        item = $('#wheel li').length;
      }
      rotateDraggable(-360 / $('#wheel li').length, dragActive);
    }

    $('.next').on('click', nextHandler);
    $('.prev').on('click', prevHandler);

    var square = '<svg x="0px" y="0px" width="1200px" height="600px" viewBox="0 0 1200 600"><rect x="0.002" y="0.499" width="1200" height="600"/></svg>';
  }, {}] }, {}, [1]);