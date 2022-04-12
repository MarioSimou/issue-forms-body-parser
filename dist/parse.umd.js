!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(
        require('@actions/github'),
        require('@actions/core'),
        require('unified'),
        require('remark-parse'),
        require('remark-gfm'),
        require('@sindresorhus/slugify'),
        require('remark-stringify'),
        require('strip-final-newline'),
        require('date-fns'),
        require('date-fns-tz/esm')
      )
    : 'function' == typeof define && define.amd
    ? define(
        [
          '@actions/github',
          '@actions/core',
          'unified',
          'remark-parse',
          'remark-gfm',
          '@sindresorhus/slugify',
          'remark-stringify',
          'strip-final-newline',
          'date-fns',
          'date-fns-tz/esm'
        ],
        t
      )
    : t(
        (e || self).github,
        e.core,
        e.unified,
        e.remarkParse,
        e.remarkGfm,
        e.slugify,
        e.remarkStringify,
        e.stripFinalNewline,
        e.dateFns,
        e.esm
      )
})(this, function (e, t, n, r, i, o, u, a, f, s) {
  function d(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e }
  }
  var l = /*#__PURE__*/ d(e),
    c = /*#__PURE__*/ d(t),
    h = /*#__PURE__*/ d(r),
    y = /*#__PURE__*/ d(i),
    m = /*#__PURE__*/ d(o),
    v = /*#__PURE__*/ d(u),
    p = /*#__PURE__*/ d(a)
  function g(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  var b = [
      'yyyy-MM-dd',
      'dd/MM/yyyy',
      'dd/MM/yy',
      'dd-MM-yyyy',
      'dd-MM-yy',
      'dd.MM.yyyy',
      'dd.MM.yy'
    ],
    M = ['HH:mm', 'HH.mm', 'hh:mm a', 'hh:mm A'],
    k = function e(t) {
      return t.children
        .map(function (n) {
          var r = {}
          return 'list' === n.type
            ? e(t)
            : 'listItem' === n.type
            ? ((r.checked = n.checked),
              n.children
                .map(function (e) {
                  if ('paragraph' === e.type)
                    return (
                      (r.text = e.children
                        .map(function (e) {
                          return 'link' === e.type
                            ? e.children[0].value
                            : e.value
                        })
                        .filter(function (e) {
                          return !!e
                        })
                        .join('')),
                      r
                    )
                })
                .filter(function (e) {
                  return !!e
                }))
            : void 0
        })
        .filter(function (e) {
          return !!e
        })
    }
  function w(e, t, n) {
    if (!e.s) {
      if (n instanceof x) {
        if (!n.s) return void (n.o = w.bind(null, e, t))
        1 & t && (t = n.s), (n = n.v)
      }
      if (n && n.then)
        return void n.then(w.bind(null, e, t), w.bind(null, e, 2))
      ;(e.s = t), (e.v = n)
      var r = e.o
      r && r(e)
    }
  }
  const x = /*#__PURE__*/ (function () {
    function e() {}
    return (
      (e.prototype.then = function (t, n) {
        const r = new e(),
          i = this.s
        if (i) {
          const e = 1 & i ? t : n
          if (e) {
            try {
              w(r, 1, e(this.v))
            } catch (e) {
              w(r, 2, e)
            }
            return r
          }
          return this
        }
        return (
          (this.o = function (e) {
            try {
              const i = e.v
              1 & e.s ? w(r, 1, t ? t(i) : i) : n ? w(r, 1, n(i)) : w(r, 2, i)
            } catch (e) {
              w(r, 2, e)
            }
          }),
          r
        )
      }),
      e
    )
  })()
  function T(e) {
    return e instanceof x && 1 & e.s
  }
  !(function () {
    try {
      c.default.info('Parsing issue body ...')
      var e = (function (e, t) {
        try {
          var r = Promise.resolve(
            (function (e) {
              try {
                var t, r, i, o, u, a, d, l, c, q, j, I, O
                return Promise.resolve(
                  n.unified().use(h.default).use(y.default).parse(e)
                ).then(function (e) {
                  function h() {
                    for (j in P)
                      (O = (I = P[j]).content.filter(Boolean)) &&
                        O.length > 0 &&
                        (1 === O.length && (I.text = O[0]),
                        (I.text = O.join('\n\n'))),
                        (I.content = O)
                    return P
                  }
                  if (!e) return []
                  var P = {},
                    A = null
                  t = (function (e, t) {
                    var n =
                      ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                      e['@@iterator']
                    if (n) return (n = n.call(e)).next.bind(n)
                    if (
                      Array.isArray(e) ||
                      (n = (function (e, t) {
                        if (e) {
                          if ('string' == typeof e) return g(e, t)
                          var n = Object.prototype.toString.call(e).slice(8, -1)
                          return (
                            'Object' === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            'Map' === n || 'Set' === n
                              ? Array.from(e)
                              : 'Arguments' === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? g(e, t)
                              : void 0
                          )
                        }
                      })(e))
                    ) {
                      n && (e = n)
                      var r = 0
                      return function () {
                        return r >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[r++] }
                      }
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    )
                  })(e.children)
                  var S = (function (e, t, n) {
                    for (var r; ; ) {
                      var i = e()
                      if ((T(i) && (i = i.v), !i)) return o
                      if (i.then) {
                        r = 0
                        break
                      }
                      var o = n()
                      if (o && o.then) {
                        if (!T(o)) {
                          r = 1
                          break
                        }
                        o = o.s
                      }
                    }
                    var u = new x(),
                      a = w.bind(null, u, 2)
                    return (
                      (0 === r
                        ? i.then(s)
                        : 1 === r
                        ? o.then(f)
                        : (void 0).then(function () {
                            ;(i = e())
                              ? i.then
                                ? i.then(s).then(void 0, a)
                                : s(i)
                              : w(u, 1, o)
                          })
                      ).then(void 0, a),
                      u
                    )
                    function f(t) {
                      o = t
                      do {
                        if (!(i = e()) || (T(i) && !i.v)) return void w(u, 1, o)
                        if (i.then) return void i.then(s).then(void 0, a)
                        T((o = n())) && (o = o.v)
                      } while (!o || !o.then)
                      o.then(f).then(void 0, a)
                    }
                    function s(e) {
                      e
                        ? (o = n()) && o.then
                          ? o.then(f).then(void 0, a)
                          : f(o)
                        : w(u, 1, o)
                    }
                  })(
                    function () {
                      return !(r = t()).done
                    },
                    0,
                    function () {
                      return (
                        (i = r.value),
                        Promise.resolve(
                          n.unified().use(y.default).use(v.default).stringify(i)
                        ).then(function (e) {
                          var t, n
                          ;(o = p.default(e)),
                            'heading' === i.type && 3 === i.depth
                              ? ((A = m.default(i.children[0].value)),
                                (P[A] = {
                                  title: i.children[0].value,
                                  content: []
                                }))
                              : 'paragraph' === i.type && A
                              ? ((u = P[A]),
                                (t = o),
                                (n = b.map(function (e) {
                                  return f.isMatch(t, e)
                                })),
                                (a =
                                  n.indexOf(!0) > -1
                                    ? s
                                        .zonedTimeToUtc(
                                          f.parse(
                                            t,
                                            b[n.indexOf(!0)],
                                            new Date()
                                          ),
                                          'UTC'
                                        )
                                        .toJSON()
                                        .split('T')[0]
                                    : null),
                                (d = (function (e) {
                                  var t = M.map(function (t) {
                                    return f.isMatch(e, t)
                                  })
                                  if (t.indexOf(!0) > -1) {
                                    var n = s.zonedTimeToUtc(
                                      f.parse(e, M[t.indexOf(!0)], new Date()),
                                      'UTC'
                                    )
                                    return s.formatInTimeZone(n, 'UTC', 'HH:mm')
                                  }
                                  return null
                                })(o)),
                                (l = (function (e) {
                                  var t = !1,
                                    n = { hours: 0, minutes: 0 },
                                    r = new RegExp(/([0-9]+)h([0-9]+)m/),
                                    i = new RegExp(/([0-9]+)h/)
                                  if (e.match(r)) {
                                    t = !0
                                    var o = e.match(r),
                                      u = o[2]
                                    ;(n.hours = parseInt(o[1])),
                                      (n.minutes = parseInt(u))
                                  } else if (e.match(i)) {
                                    t = !0
                                    var a = e.match(i)
                                    ;(n.hours = parseInt(a[1])), (n.minutes = 0)
                                  }
                                  return t ? n : null
                                })(o)),
                                a && (u.date = a),
                                d && (u.time = d),
                                l && (u.duration = l),
                                u.content.push(o))
                              : 'list' === i.type
                              ? (((c = P[A]).text = o), (c.list = k(i).flat()))
                              : 'html' === i.type
                              ? P[A].content.push(i.html)
                              : 'code' === i.type
                              ? (((q = P[A]).lang = i.lang), (q.text = o))
                              : 'heading' === i.type && i.depth > 3
                              ? P[A].content.push(i.children[0].value)
                              : (console.log('unhandled token type'),
                                console.log(i))
                        })
                      )
                    }
                  )
                  return S && S.then ? S.then(h) : h()
                })
              } catch (e) {
                return Promise.reject(e)
              }
            })(l.default.context.payload.issue.body)
          ).then(function (e) {
            void 0 !== e
              ? c.default.setOutput('data', e)
              : c.default.setFailed(
                  'There was no valid payload found in the issue.'
                )
          })
        } catch (e) {
          return t(e)
        }
        return r && r.then ? r.then(void 0, t) : r
      })(0, function (e) {
        c.default.setFailed(e)
      })
      Promise.resolve(e && e.then ? e.then(function () {}) : void 0)
    } catch (e) {
      return Promise.reject(e)
    }
  })()
})
//# sourceMappingURL=parse.umd.js.map