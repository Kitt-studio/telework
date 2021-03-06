(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    169: function (n, t, e) {
      "use strict";
      e.r(t);
      var r = e(1),
        a = e(0),
        o = e.n(a),
        c = e(22),
        i = e.n(c),
        s = (e(69), e(3)),
        l = e(4),
        u = e(63),
        f = e(37),
        h = e(35),
        d = e.n(h),
        m = e(56),
        j = "ANSWERS/FETCH_ANSWERS",
        b = function () {
          return {
            answers: new Array(),
            states: new Set(),
            schools: new Set(),
          };
        },
        v = e(2),
        p = e(10),
        g = e(9);
      function O() {
        var n = Object(s.a)([
          "\n  text-align: center;\n  font-size: 1.4rem;\n  width: 20vw;\n  margin: 2rem;\n  font-weight: 800;\n  color: #fff;\n  background-color: #000127;\n  @media (max-width:1100px){\n    font-size:.8rem;\n    width:50vw;\n  }\n",
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = Object(s.a)([
          "\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  margin: 1rem 2rem;\n  @media(max-width:1100px){\n    margin:0.5rem 1rem;\n    font-size:0.8rem;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = Object(s.a)([
          "\n  width: 60vw;\n  max-height: 90vh;\n  display: flex;\n  margin:5rem auto;\n  flex-direction: column;\n  align-items: center;\n  @media(max-width:1100px){\n    width:90vw;\n    min-height:60vh;\n    max-height:90vh;\n    margin:10vh auto;\n  }\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = Object(s.a)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      var M = l.a.div(y()),
        A = l.a.div(w()),
        S = l.a.h2(x()),
        k = l.a.select(O()),
        C = function () {
          var n = Object(a.useState)("all"),
            t = Object(p.a)(n, 2),
            e = t[0],
            o = t[1],
            c = Object(v.c)(function (n) {
              return n.answers;
            }),
            i = Array.from(
              Object(v.c)(function (n) {
                return n.states;
              }).values()
            ),
            s = c.length;
          return Object(r.jsxs)(A, {
            children: [
              Object(r.jsxs)(M, {
                children: [
                  Object(r.jsxs)(k, {
                    value: e,
                    onChange: function (n) {
                      console.log(n.target.value), o(n.target.value);
                    },
                    children: [
                      Object(r.jsx)("option", {
                        value: "all",
                        children:
                          "\u0412\u0441\u0435 \u0440\u0430\u0439\u043e\u043d\u044b",
                      }),
                      i.map(function (n, t) {
                        return Object(r.jsx)(
                          "option",
                          { value: n, children: n },
                          t
                        );
                      }),
                    ],
                  }),
                  Object(r.jsxs)(S, {
                    children: [
                      "\u0412\u0441\u0435\u0433\u043e \u043e\u0442\u0432\u0442\u0435\u0442\u043e\u0432:",
                      s,
                    ],
                  }),
                ],
              }),
              Object(r.jsx)(g.Pie, {
                data: (function () {
                  var n = new Map(),
                    t = 0;
                  "all" === e
                    ? c.map(function (e) {
                        if ((t++, n.has(e.platform))) {
                          var r = n.get(e.platform);
                          r && (r++, n.set(e.platform, r));
                        } else n.set(e.platform, 1);
                      })
                    : c.map(function (r) {
                        if (r.state.trim() === e.trim())
                          if ((t++, n.has(r.platform))) {
                            var a = n.get(r.platform);
                            a && (a++, n.set(r.platform, a));
                          } else n.set(r.platform, 1);
                      });
                  var r = Array.from(n.values());
                  (r = r.map(function (n) {
                    return Math.round((n / t) * 100);
                  })),
                    console.log(r);
                  var a = Array.from(n.keys());
                  a = a.map(function (n, t) {
                    return "".concat(n, " ").concat(r[t], "%");
                  });
                  for (var o = Array(), i = 0; i < r.length; i++)
                    o.push(
                      "rgb(\n                "
                        .concat(
                          Math.floor(Math.random() * Math.floor(255)),
                          "\n                ,"
                        )
                        .concat(
                          Math.floor(Math.random() * Math.floor(255)),
                          "\n                ,"
                        )
                        .concat(
                          Math.floor(Math.random() * Math.floor(255)),
                          ")"
                        )
                    );
                  return (
                    (s = t),
                    {
                      labels: a,
                      datasets: [
                        {
                          data: r,
                          backgroundColor: o,
                          borderColor: "#fff",
                          borderWidth: 2,
                        },
                      ],
                    }
                  );
                })(),
                options: { responsive: !0, maintainAspectRatio: !1 },
              }),
              Object(r.jsx)(S, {
                children:
                  "all" === e
                    ? "\u0412\u0441\u0435 \u0440\u0430\u0439\u043e\u043d\u044b"
                    : e,
              }),
            ],
          });
        },
        z = function () {
          var n = Array.from(
              Object(v.c)(function (n) {
                return n.schools;
              }).values()
            ),
            t = Object(a.useState)(""),
            e = Object(p.a)(t, 2),
            o = e[0],
            c = e[1],
            i = Object(v.c)(function (n) {
              return n.answers;
            });
          Object(a.useEffect)(
            function () {
              c(n[0]);
            },
            [i]
          );
          return Object(r.jsxs)(A, {
            children: [
              Object(r.jsx)(M, {
                children: Object(r.jsx)(k, {
                  value: o,
                  onChange: function (n) {
                    console.log(n.target.value), c(n.target.value);
                  },
                  children: n.map(function (n, t) {
                    return Object(r.jsx)(
                      "option",
                      { value: n, children: n },
                      t
                    );
                  }),
                }),
              }),
              Object(r.jsx)(g.Bar, {
                data: (function () {
                  var n = new Map(),
                    t = 0;
                  console.log(o),
                    i.map(function (e) {
                      if (e.school === o)
                        if ((t++, n.has(e.platform))) {
                          var r = n.get(e.platform);
                          r && (r++, n.set(e.platform, r));
                        } else n.set(e.platform, 1);
                    });
                  var e = Array.from(n.values());
                  (e = e.map(function (n) {
                    return Math.round((n / t) * 100);
                  })),
                    console.log(e);
                  var r = Array.from(n.keys());
                  return (
                    (r = r.map(function (n, t) {
                      return "".concat(n, " ").concat(e[t], "%");
                    })),
                    {
                      datasets: e.map(function (n, t) {
                        return {
                          data: [e[t]],
                          backgroundColor: "rgb(\n          "
                            .concat(
                              Math.floor(Math.random() * Math.floor(255)),
                              "\n          ,"
                            )
                            .concat(
                              Math.floor(Math.random() * Math.floor(255)),
                              "\n          ,"
                            )
                            .concat(
                              Math.floor(Math.random() * Math.floor(255)),
                              ")"
                            ),
                          label: r[t],
                        };
                      }),
                    }
                  );
                })(),
                options: { responsive: !0, maintainAspectRatio: !1 },
              }),
              Object(r.jsx)(S, { children: o }),
            ],
          });
        },
        E = function () {
          var n = Object(a.useState)("all"),
            t = Object(p.a)(n, 2),
            e = t[0],
            o = t[1],
            c = Object(v.c)(function (n) {
              return n.answers;
            }),
            i = Array.from(
              Object(v.c)(function (n) {
                return n.schools;
              }).values()
            );
          c.length;
          return Object(r.jsxs)(A, {
            children: [
              Object(r.jsx)(S, {
                children:
                  "\u0421\u0442\u0435\u043f\u0435\u043d\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u043d\u0430 \u043d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b \u0441 06.04 ",
              }),
              Object(r.jsx)(M, {
                children: Object(r.jsxs)(k, {
                  value: e,
                  onChange: function (n) {
                    console.log(n.target.value), o(n.target.value);
                  },
                  children: [
                    Object(r.jsx)("option", {
                      value: "all",
                      children:
                        "\u0412\u0441\u0435 \u0448\u043a\u043e\u043b\u044b",
                    }),
                    i.map(function (n, t) {
                      return Object(r.jsx)(
                        "option",
                        { value: n, children: n },
                        t
                      );
                    }),
                  ],
                }),
              }),
              Object(r.jsx)(g.Pie, {
                data: (function () {
                  var n = new Map(),
                    t = 0;
                  "all" === e
                    ? c.map(function (e) {
                        if ((t++, n.has(e.ready))) {
                          var r = n.get(e.ready);
                          r && (r++, n.set(e.ready, r));
                        } else n.set(e.ready, 1);
                      })
                    : c.map(function (r) {
                        if (r.school.trim() === e.trim())
                          if ((t++, n.has(r.ready))) {
                            var a = n.get(r.ready);
                            a && (a++, n.set(r.ready, a));
                          } else n.set(r.ready, 1);
                      });
                  var r = Array.from(n.values());
                  (r = r.map(function (n) {
                    return Math.round((n / t) * 100);
                  })),
                    console.log(r);
                  var a = Array.from(n.keys());
                  a = a.map(function (n, t) {
                    return "".concat(n, " ").concat(r[t], "%");
                  });
                  for (var o = Array(), i = 0; i < r.length; i++)
                    o.push(
                      "rgb(\n                "
                        .concat(
                          Math.floor(Math.random() * Math.floor(255)),
                          "\n                ,"
                        )
                        .concat(
                          Math.floor(Math.random() * Math.floor(255)),
                          "\n                ,"
                        )
                        .concat(
                          Math.floor(Math.random() * Math.floor(255)),
                          ")"
                        )
                    );
                  return (
                    t,
                    {
                      labels: a,
                      datasets: [
                        {
                          data: r,
                          backgroundColor: o,
                          borderColor: "#fff",
                          borderWidth: 2,
                        },
                      ],
                    }
                  );
                })(),
                options: { responsive: !0, maintainAspectRatio: !1 },
              }),
              Object(r.jsx)(S, {
                children:
                  "all" === e
                    ? "\u0412\u0441\u0435 \u0448\u043a\u043e\u043b\u044b"
                    : e,
              }),
            ],
          });
        };
      function F() {
        var n = Object(s.a)(["\n  font-size: 2rem;\n"]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        var n = Object(s.a)([
          "\n  max-width: 100vw;\n  background: ",
          ";\n  max-height: 100vh;\n  height: 100vh;\n  overflow-y: scroll;\n  position: relative;\n  margin: 0;\n  padding: 0;\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        var n = Object(s.a)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  margin: 5rem auto;\n  text-align: center;\n  @media (max-width: 1100px) {\n    font-size: 0.8rem;\n  }\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        var n = Object(s.a)([
          "\n  margin: 0 5vw;\n  @media (max-width: 1100px) {\n    margin: 1rem;\n  }\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      var B = l.a.div(W()),
        T = l.a.div(P()),
        I = l.a.div(R(), "#000127"),
        J = l.a.h2(F());
      var L = function () {
          var n = Object(v.b)();
          return (
            Object(a.useEffect)(function () {
              n(
                (function () {
                  var n = Object(m.a)(
                    d.a.mark(function n(t) {
                      var e, r, a, o;
                      return d.a.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (e = new Set()),
                                (r = new Set()),
                                (n.next = 5),
                                fetch("/api")
                                  .then(function (n) {
                                    if (n.ok) return console.log(n), n.json();
                                    console.log(n);
                                  })
                                  .catch(function (n) {
                                    console.error(n);
                                  })
                              );
                            case 5:
                              (a = n.sent),
                                (o = a).map(function (n) {
                                  e.add(n.state.trim()), r.add(n.school.trim());
                                }),
                                t({
                                  type: j,
                                  payload: {
                                    answers: o,
                                    states: e,
                                    schools: r,
                                  },
                                });
                            case 9:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function (t) {
                    return n.apply(this, arguments);
                  };
                })()
              );
            }, []),
            Object(r.jsx)(I, {
              children: Object(r.jsxs)(B, {
                children: [
                  Object(r.jsxs)(T, {
                    children: [
                      Object(r.jsx)(J, {
                        children:
                          " \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",
                      }),
                      " \u0417\u0434\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u043c\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f(\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c) \u0443\u0447\u0438\u0442\u0435\u043b\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0436\u0438\u043c\u0430 \u0441\u0430\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",
                    ],
                  }),
                  Object(r.jsx)(C, {}),
                  Object(r.jsx)("hr", {}),
                  Object(r.jsx)(z, {}),
                  Object(r.jsx)("hr", {}),
                  Object(r.jsx)(E, {}),
                ],
              }),
            })
          );
        },
        N = function (n) {
          n &&
            n instanceof Function &&
            e
              .e(3)
              .then(e.bind(null, 170))
              .then(function (t) {
                var e = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  c = t.getTTFB;
                e(n), r(n), a(n), o(n), c(n);
              });
        },
        D = e(12),
        H = e(61),
        _ = e.n(H),
        q = e(62),
        G = Object(D.d)(function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b(),
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case j:
              return Object(f.a)(
                Object(f.a)({}, n),
                {},
                {
                  answers: Object(u.a)(t.payload.answers),
                  states: t.payload.states,
                  schools: t.payload.schools,
                }
              );
            default:
              return n;
          }
        }, Object(D.c)(Object(D.a)(q.a, _.a)));
      i.a.render(
        Object(r.jsx)(o.a.StrictMode, {
          children: Object(r.jsx)(v.a, {
            store: G,
            children: Object(r.jsx)(L, {}),
          }),
        }),
        document.getElementById("root")
      ),
        N();
    },
    69: function (n, t, e) {},
  },
  [[169, 1, 2]],
]);
//# sourceMappingURL=main.8781dad2.chunk.js.map
