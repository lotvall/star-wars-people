"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 367: function _(e, t, a) {
    e.exports = a(585);
  }, 441: function _(e, t, a) {}, 585: function _(e, t, a) {
    "use strict";
    a.r(t);var n = a(221),
        r = a(222),
        l = a(253),
        c = a(223),
        o = a(254),
        i = a(0),
        s = a.n(i),
        m = a(56),
        p = a.n(m),
        u = (a(372), a(119)),
        f = new (a(250).a)({ uri: "/graphql" }),
        d = a(108),
        h = a(58),
        g = a(227),
        y = a(104),
        v = a.n(y),
        b = a(154),
        E = a.n(b),
        x = a(161),
        w = a(228),
        j = a(229),
        S = a(230),
        O = a(27),
        C = a(19),
        k = a(105),
        N = a.n(k),
        I = a(149),
        F = a.n(I),
        L = Object(C.withStyles)(function (e) {
      return { root: Object(O.a)({ paddingLeft: "40px" }, e.breakpoints.down("md"), { paddingLeft: "10px" }), avatar: { margin: 0, color: "#fff", backgroundColor: F.a[400], width: "40px", height: "40px", fontSize: "1rem" } };
    })(function (e) {
      var t,
          a = e.classes,
          n = e.children;return n && (t = (((t = n.match(/\b\w/g) || []).shift() || "") + (t.pop() || "")).toUpperCase()), s.a.createElement("div", { className: a.root }, s.a.createElement(N.a, { className: a.avatar }, !!n && t));
    }),
        B = a(72),
        D = Object(C.withStyles)(function (e) {
      return { listrow: { display: "flex", alignItems: "center", borderBottom: "1px solid #eeeef0", height: 60, margin: 0, padding: 0, textDecoration: "none", "&:hover": { backgroundColor: "#fafafb", borderColor: "#eeeef0", textDecoration: "none" } }, typography: { flex: "1 1 0%", fontSize: "1rem", marginLeft: "10px", marginRight: "10px", maxWidth: "654px" } };
    })(function (e) {
      var t = e.classes,
          a = e.person;return s.a.createElement("li", { className: t.listrow }, s.a.createElement(L, null, a.name), s.a.createElement(B.a, { className: t.typography, variant: "body1" }, a.name), s.a.createElement(B.a, { className: t.typography, variant: "body1" }, a.species[0] ? a.species[0].name : "Unknown species", " from ", a.homeworld.name));
    }),
        R = (a(441), function () {
      return s.a.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center" } }, s.a.createElement("div", { className: "lds-spinner" }, s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null), s.a.createElement("div", null)));
    }),
        T = a(69),
        W = a.n(T),
        z = Object(C.withStyles)(function (e) {
      return { root: { flexGrow: 1, display: "flex", justifyContent: "flex-start", alignItems: "center", height: "60px", "&:hover": { backgroundColor: "#fafafb", borderColor: "#eeeef0", textDecoration: "none" } }, typography: { fontSize: "1rem", paddingLeft: "40px", maxWidth: "654px" } };
    })(function (e) {
      var t,
          a = e.classes,
          n = e.searchString,
          r = e.category;return "people" === r ? t = "There are no people with ".concat(n, " as their name") : "planets" === r ? t = "There are no people with ".concat(n, " as their homeworld") : "species" === r && (t = "There are no people with ".concat(n, " as their species")), s.a.createElement("div", { className: a.root, elevation: 0 }, s.a.createElement(W.a, { className: a.typography, variant: "body1" }, t));
    }),
        M = function M(e) {
      var t = e.people,
          a = e.next,
          n = e.loading,
          r = e.category,
          l = e.searchString,
          c = function () {
        var t = Object(j.a)(E.a.mark(function t() {
          var a, n;return E.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return a = e.fetchMore, n = e.next, t.next = 3, a({ variables: { url: n }, updateQuery: function updateQuery(e, t) {
                      var a = t.fetchMoreResult;return a ? Object(w.a)({}, e, { people: { next: a.people.next, results: [].concat(Object(x.a)(e.people.results), Object(x.a)(a.people.results)), __typename: "PeopleResponse" } }) : e;
                    } });case 3:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function () {
          return t.apply(this, arguments);
        };
      }();return s.a.createElement("div", null, n && s.a.createElement("div", { style: { marginTop: "15px", marginBottom: "15px" } }, s.a.createElement(R, null)), t.map(function (e, r) {
        return s.a.createElement(s.a.Fragment, { key: e.url }, s.a.createElement(D, { person: e }), r === t.length - 8 && !n && !!a && s.a.createElement(S.a, { onEnter: function onEnter() {
            return c();
          } }));
      }), 0 === t.length && !!l && s.a.createElement(z, { searchString: l, category: r }));
    },
        q = Object(C.withStyles)(function (e) {
      return { listrow: { display: "flex", alignItems: "center", borderBottom: "1px solid #eeeef0", height: 60, margin: 0, padding: 0, textDecoration: "none", "&:hover": { backgroundColor: "#fafafb", borderColor: "#eeeef0", textDecoration: "none" } }, typography: { flex: "1 1 0%", fontSize: "1rem", marginLeft: "10px", marginRight: "10px", maxWidth: "654px" } };
    })(function (e) {
      var t = e.classes,
          a = function a(e) {
        return s.a.createElement("li", { className: t.listrow, key: "loading-item-".concat(e) }, s.a.createElement(L, null), s.a.createElement(B.a, { className: t.typography, variant: "body1" }), s.a.createElement(B.a, { className: t.typography, variant: "body1" }));
      };return s.a.createElement(s.a.Fragment, null, a(1), a(2), a(3), a(4), a(5), a(6), a(7), a(8), a(9), a(10), s.a.createElement("div", { style: { marginTop: "15px", marginBottom: "15px" } }, s.a.createElement(R, null)));
    });function G() {
      var e = Object(g.a)(["\nquery ($url: String!) {\n  people(url: $url){\n    next\n    results {\n      name\n      url\n      homeworld {\n        name\n      }\n      species {\n        name\n      }\n      films {\n        title\n      }\n    }\n  }\n}\n"]);return G = function G() {
        return e;
      }, e;
    }var J = v()(G()),
        P = function P(e) {
      var t = e.category,
          a = e.searchString,
          n = a ? "https://swapi.co/api/".concat(t, "/?search=").concat(a) : "https://swapi.co/api/people/";return s.a.createElement(u.b, { query: J, variables: { url: n }, notifyOnNetworkStatusChange: !0 }, function (e) {
        var n = e.fetchMore,
            r = e.loading,
            l = e.error,
            c = e.data;return e.refetch, l && console.log("there was an error", l), r && !c.people ? s.a.createElement(q, null) : c ? s.a.createElement(s.a.Fragment, null, s.a.createElement(M, { people: c.people.results, fetchMore: n, next: c.people.next, loading: r, searchString: a, category: t }), r && c.people.next && s.a.createElement(s.a.Fragment, null, s.a.createElement(q, null))) : void 0;
      });
    },
        U = a(252),
        V = a(599),
        $ = a(597),
        _ = Object(C.withStyles)(function (e) {
      return { menuStyle: Object(O.a)({ margin: "0 0", marginRight: "0px", marginLeft: "0px", "&:first-child": { marginBottom: 0, marginLeft: 5 } }, e.breakpoints.down("sm"), { justifyContent: "space-evenly", alignItems: "center", width: "100%", margin: "0px 0px", marginLeft: 0, "&:first-child": { marginBottom: 5, marginLeft: 0 } }) };
    })(function (e) {
      var t = e.classes,
          a = e.activeItem,
          n = e.onClick;return s.a.createElement($.a, { secondary: !0, className: t.menuStyle }, s.a.createElement($.a.Item, { name: "people", active: "people" === a, onClick: n }), s.a.createElement($.a.Item, { name: "planets", active: "planets" === a, onClick: n }), s.a.createElement($.a.Item, { name: "species", active: "species" === a, onClick: n }));
    }),
        K = a(596),
        Q = a(595),
        A = a(249),
        H = Object(C.withStyles)(function (e) {
      return { form: Object(O.a)({ display: "flex", width: "100%", margin: "0.35714286em" }, e.breakpoints.down("sm"), { justifyContent: "center", alignItems: "center", width: "100%", margin: 0 }), formField: Object(O.a)({ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, e.breakpoints.down("sm"), { width: "95%" }), input: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" } };
    })(function (e) {
      var t = e.classes,
          a = e.history,
          n = e.category,
          r = e.placeholder;return s.a.createElement(A.a, { initialValues: { searchString: "" }, onSubmit: function onSubmit(e, t) {
          a.push("/".concat(n, "/").concat(e.searchString)), t.resetForm();
        }, render: function render(e) {
          var a = e.values,
              n = e.setFieldValue,
              l = e.isSubmitting,
              c = e.handleSubmit;return s.a.createElement(K.a, { className: t.form }, s.a.createElement(K.a.Field, { className: t.formField }, s.a.createElement(Q.a, { className: t.input, onKeyDown: function onKeyDown(e) {
              13 !== e.keyCode || l || c(e);
            }, onChange: function onChange(e, t) {
              var a = t.value;return n("searchString", a);
            }, name: "message", value: a.searchString, fluid: !0, placeholder: r, icon: "search" })));
        } });
    }),
        X = Object(C.withStyles)(function (e) {
      var t;return { segment: (t = { display: "flex" }, Object(O.a)(t, e.breakpoints.down("sm"), { display: "inline" }), Object(O.a)(t, "padding", "14px"), Object(O.a)(t, "border", "0"), Object(O.a)(t, "borderBottom", "1px solid #eeeef0"), t) };
    })(Object(h.f)(function (e) {
      var t = e.category,
          a = e.classes,
          n = Object(i.useState)(t),
          r = Object(U.a)(n, 2),
          l = r[0],
          c = r[1],
          o = "people" !== t ? "planets" === t ? "Search by homeworld" : "Search by species" : "Search by name";return s.a.createElement(V.a, { vertical: !0, className: a.segment }, s.a.createElement(_, { activeItem: l, onClick: function onClick(t, a) {
          t.preventDefault(), c(a.name), e.history.push("/".concat(a.name));
        } }), s.a.createElement(H, { placeholder: o, category: t, history: e.history }));
    })),
        Y = Object(C.withStyles)(function (e) {
      return { root: Object(O.a)({ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", height: "40px" }, e.breakpoints.down("md"), { alignItems: "center", height: "60px" }) };
    })(function (e) {
      var t = e.classes;return s.a.createElement("div", { className: t.root, elevation: 0 }, s.a.createElement(W.a, { variant: "h6" }, "Star Wars People"));
    }),
        Z = a(107),
        ee = a.n(Z),
        te = Object(C.withStyles)(function (e) {
      return { root: { display: "flex", justifyContent: "center", flexWrap: "wrap" }, chip: { margin: e.spacing.unit } };
    })(Object(h.f)(function (e) {
      var t = e.classes,
          a = e.searchString,
          n = e.category,
          r = e.history;return s.a.createElement("div", { className: t.root }, s.a.createElement(ee.a, { label: a, onDelete: function onDelete(e) {
          e.preventDefault(), r.push("/".concat(n));
        }, className: t.chip }));
    })),
        ae = Object(C.withStyles)(function (e) {
      return { root: { display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "40px", paddingRight: "40px", height: "60px", borderBottom: "1px solid #eeeef0" } };
    })(function (e) {
      var t = e.classes,
          a = e.searchString,
          n = e.category;return s.a.createElement("div", { className: t.root }, s.a.createElement(te, { searchString: a, category: n }));
    }),
        ne = function ne(e) {
      var t = e.match.params,
          a = t.category,
          n = t.searchString;return s.a.createElement(s.a.Fragment, null, s.a.createElement(Y, null), s.a.createElement(X, { category: a }), n && s.a.createElement(ae, { searchString: n, category: a }), s.a.createElement(P, { category: a, searchString: n }));
    },
        re = function re() {
      return s.a.createElement(d.a, null, s.a.createElement(h.d, null, s.a.createElement(h.a, { from: "/", to: "/people", exact: !0 }), s.a.createElement(h.b, { path: "/:category?/:searchString?", exact: !0, component: ne }), s.a.createElement(h.b, { path: "/:category", exact: !0, component: ne })));
    },
        le = function (e) {
      function t() {
        return Object(n.a)(this, t), Object(l.a)(this, Object(c.a)(t).apply(this, arguments));
      }return Object(o.a)(t, e), Object(r.a)(t, [{ key: "render", value: function value() {
          return s.a.createElement(u.a, { client: f }, s.a.createElement(re, null));
        } }]), t;
    }(i.Component);p.a.render(s.a.createElement(le, null), document.getElementById("root"));
  } }, [[367, 1, 2]]]);
//# sourceMappingURL=main.afac2128.chunk.js.map
//# sourceMappingURL=main.afac2128.chunk.js.map