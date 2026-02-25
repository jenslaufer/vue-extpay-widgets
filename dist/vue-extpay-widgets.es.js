import { ref as I, onMounted as q, renderSlot as F } from "vue";
var L = { exports: {} }, G = L.exports, W;
function z() {
  return W || (W = 1, (function(A, p) {
    (function(m, b) {
      b(A);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : G, function(m) {
      if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const b = "The message port closed before a response was received.", _ = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", k = (h) => {
          const x = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(x).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class v extends WeakMap {
            constructor(r, n = void 0) {
              super(n), this.createItem = r;
            }
            get(r) {
              return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
            }
          }
          const S = (s) => s && typeof s == "object" && typeof s.then == "function", N = (s, r) => (...n) => {
            h.runtime.lastError ? s.reject(h.runtime.lastError) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? s.resolve(n[0]) : s.resolve(n);
          }, P = (s) => s == 1 ? "argument" : "arguments", B = (s, r) => function(i, ...u) {
            if (u.length < r.minArgs)
              throw new Error(`Expected at least ${r.minArgs} ${P(r.minArgs)} for ${s}(), got ${u.length}`);
            if (u.length > r.maxArgs)
              throw new Error(`Expected at most ${r.maxArgs} ${P(r.maxArgs)} for ${s}(), got ${u.length}`);
            return new Promise((d, f) => {
              if (r.fallbackToNoCallback)
                try {
                  i[s](...u, N({
                    resolve: d,
                    reject: f
                  }, r));
                } catch (a) {
                  console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, a), i[s](...u), r.fallbackToNoCallback = !1, r.noCallback = !0, d();
                }
              else r.noCallback ? (i[s](...u), d()) : i[s](...u, N({
                resolve: d,
                reject: f
              }, r));
            });
          }, C = (s, r, n) => new Proxy(r, {
            apply(i, u, d) {
              return n.call(u, s, ...d);
            }
          });
          let T = Function.call.bind(Object.prototype.hasOwnProperty);
          const j = (s, r = {}, n = {}) => {
            let i = /* @__PURE__ */ Object.create(null), u = {
              has(f, a) {
                return a in s || a in i;
              },
              get(f, a, y) {
                if (a in i)
                  return i[a];
                if (!(a in s))
                  return;
                let c = s[a];
                if (typeof c == "function")
                  if (typeof r[a] == "function")
                    c = C(s, s[a], r[a]);
                  else if (T(n, a)) {
                    let $ = B(a, n[a]);
                    c = C(s, s[a], $);
                  } else
                    c = c.bind(s);
                else if (typeof c == "object" && c !== null && (T(r, a) || T(n, a)))
                  c = j(c, r[a], n[a]);
                else if (T(n, "*"))
                  c = j(c, r[a], n["*"]);
                else
                  return Object.defineProperty(i, a, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return s[a];
                    },
                    set($) {
                      s[a] = $;
                    }
                  }), c;
                return i[a] = c, c;
              },
              set(f, a, y, c) {
                return a in i ? i[a] = y : s[a] = y, !0;
              },
              defineProperty(f, a, y) {
                return Reflect.defineProperty(i, a, y);
              },
              deleteProperty(f, a) {
                return Reflect.deleteProperty(i, a);
              }
            }, d = Object.create(s);
            return new Proxy(d, u);
          }, R = (s) => ({
            addListener(r, n, ...i) {
              r.addListener(s.get(n), ...i);
            },
            hasListener(r, n) {
              return r.hasListener(s.get(n));
            },
            removeListener(r, n) {
              r.removeListener(s.get(n));
            }
          });
          let E = !1;
          const O = new v((s) => typeof s != "function" ? s : function(n, i, u) {
            let d = !1, f, a = new Promise((M) => {
              f = function(w) {
                E || (console.warn(_, new Error().stack), E = !0), d = !0, M(w);
              };
            }), y;
            try {
              y = s(n, i, f);
            } catch (M) {
              y = Promise.reject(M);
            }
            const c = y !== !0 && S(y);
            if (y !== !0 && !c && !d)
              return !1;
            const $ = (M) => {
              M.then((w) => {
                u(w);
              }, (w) => {
                let D;
                w && (w instanceof Error || typeof w.message == "string") ? D = w.message : D = "An unexpected error occurred", u({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: D
                });
              }).catch((w) => {
                console.error("Failed to send onMessage rejected reply", w);
              });
            };
            return $(c ? y : a), !0;
          }), e = ({
            reject: s,
            resolve: r
          }, n) => {
            h.runtime.lastError ? h.runtime.lastError.message === b ? r() : s(h.runtime.lastError) : n && n.__mozWebExtensionPolyfillReject__ ? s(new Error(n.message)) : r(n);
          }, t = (s, r, n, ...i) => {
            if (i.length < r.minArgs)
              throw new Error(`Expected at least ${r.minArgs} ${P(r.minArgs)} for ${s}(), got ${i.length}`);
            if (i.length > r.maxArgs)
              throw new Error(`Expected at most ${r.maxArgs} ${P(r.maxArgs)} for ${s}(), got ${i.length}`);
            return new Promise((u, d) => {
              const f = e.bind(null, {
                resolve: u,
                reject: d
              });
              i.push(f), n.sendMessage(...i);
            });
          }, o = {
            runtime: {
              onMessage: R(O),
              onMessageExternal: R(O),
              sendMessage: t.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: t.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, l = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return x.privacy = {
            network: {
              "*": l
            },
            services: {
              "*": l
            },
            websites: {
              "*": l
            }
          }, j(h, o, x);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
          throw new Error("This script should only be loaded in a browser extension.");
        m.exports = k(chrome);
      } else
        m.exports = browser;
    });
  })(L)), L.exports;
}
var g = z();
typeof window < "u" && window.addEventListener("message", (A) => {
  A.origin === "https://extensionpay.com" && A.source == window && (A.data === "extpay-fetch-user" || A.data === "extpay-trial-start") && (window.postMessage(`${A.data}-received`), g.runtime.sendMessage(A.data));
}, !1);
function U(A) {
  const p = "https://extensionpay.com", m = `${p}/extension/${A}`;
  function b(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  async function _(e) {
    try {
      return await g.storage.sync.get(e);
    } catch {
      return await g.storage.local.get(e);
    }
  }
  async function k(e) {
    try {
      return await g.storage.sync.set(e);
    } catch {
      return await g.storage.local.set(e);
    }
  }
  g.management && g.management.getSelf().then(async (e) => {
    if (!e.permissions.includes("storage")) {
      var t = e.hostPermissions.concat(e.permissions);
      throw `ExtPay Setup Error: please include the "storage" permission in manifest.json["permissions"] or else ExtensionPay won't work correctly.

You can copy and paste this to your manifest.json file to fix this error:

"permissions": [
    ${t.map((o) => `"    ${o}"`).join(`,
`)}${t.length > 0 ? "," : ""}
    "storage"
]
`;
    }
  }), _(["extensionpay_installed_at", "extensionpay_user"]).then(async (e) => {
    if (e.extensionpay_installed_at) return;
    const t = e.extensionpay_user, o = t ? t.installedAt : (/* @__PURE__ */ new Date()).toISOString();
    await k({ extensionpay_installed_at: o });
  });
  const h = [], x = [];
  async function v() {
    var e = {}, t;
    if (g.management)
      t = await g.management.getSelf();
    else if (g.runtime)
      t = await g.runtime.sendMessage("extpay-extinfo"), t || (t = { installType: !("update_url" in g.runtime.getManifest()) ? "development" : "normal" });
    else
      throw "ExtPay needs to be run in a browser extension context";
    t.installType == "development" && (e.development = !0);
    const o = await fetch(`${m}/api/new-key`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(e)
    });
    if (!o.ok)
      throw o.status, `${p}/home`;
    const l = await o.json();
    return await k({ extensionpay_api_key: l }), l;
  }
  async function S() {
    const e = await _(["extensionpay_api_key"]);
    return e.extensionpay_api_key ? e.extensionpay_api_key : null;
  }
  const N = /^\d\d\d\d-\d\d-\d\dT/;
  async function P() {
    var e = await _(["extensionpay_user", "extensionpay_installed_at"]);
    const t = await S();
    if (!t)
      return {
        paid: !1,
        paidAt: null,
        installedAt: e.extensionpay_installed_at ? new Date(e.extensionpay_installed_at) : /* @__PURE__ */ new Date(),
        // sometimes this function gets called before the initial install time can be flushed to storage
        trialStartedAt: null
      };
    const o = await fetch(`${m}/api/v2/user?api_key=${t}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!o.ok) throw "ExtPay error while fetching user: " + await o.text();
    const l = await o.json(), s = {};
    for (var [r, n] of Object.entries(l))
      n && n.match && n.match(N) && (n = new Date(n)), s[r] = n;
    return s.installedAt = new Date(e.extensionpay_installed_at), s.paidAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.paidAt) && h.forEach((i) => i(s)), s.trialStartedAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.trialStartedAt) && x.forEach((i) => i(s)), await k({ extensionpay_user: l }), s;
  }
  async function B() {
    const e = await fetch(`${m}/api/v2/current-plans`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
    if (!e.ok)
      throw `ExtPay: HTTP error while getting plans. Received http code: ${e.status}`;
    return await e.json();
  }
  async function C(e, t, o) {
    if (g.windows && g.windows.create) {
      const l = await g.windows.getCurrent(), s = Math.round((l.width - t) * 0.5 + l.left), r = Math.round((l.height - o) * 0.5 + l.top);
      try {
        g.windows.create({
          url: e,
          type: "popup",
          focused: !0,
          width: t,
          height: o,
          left: s,
          top: r
        });
      } catch {
        g.windows.create({
          url: e,
          type: "popup",
          width: t,
          height: o,
          left: s,
          top: r
        });
      }
    } else
      window.open(e, null, `toolbar=no,location=no,directories=no,status=no,menubar=no,width=${t},height=${o},left=450`);
  }
  async function T(e) {
    var t = await S();
    t || (t = await v());
    let o = `${m}/choose-plan?api_key=${t}`;
    e && (o = `${m}/choose-plan/${e}?api_key=${t}`), g.tabs && g.tabs.create ? await g.tabs.create({ url: o, active: !0 }) : window.open(o, "_blank");
  }
  async function j(e) {
    var t = await S();
    t || (t = await v());
    var o = `${m}/trial?api_key=${t}`;
    e && (o += `&period=${e}`), C(o, 500, 700);
  }
  async function R() {
    var e = await S();
    e || (e = await v());
    const t = `${m}/reactivate?api_key=${e}&back=choose-plan&v2`;
    C(t, 500, 800);
  }
  var E = !1;
  async function O() {
    if (!E) {
      E = !0;
      for (var e = await P(), t = 0; t < 120; ++t) {
        if (e.paidAt)
          return E = !1, e;
        await b(1e3), e = await P();
      }
      E = !1;
    }
  }
  return {
    getUser: function() {
      return P();
    },
    onPaid: {
      addListener: function(e) {
        const t = `"content_scripts": [
                {
            "matches": ["${p}/*"],
            "js": ["ExtPay.js"],
            "run_at": "document_start"
        }]`, o = g.runtime.getManifest();
        if (!o.content_scripts)
          throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
        const l = o.content_scripts.find((s) => s.matches.includes(p.replace(":3000", "") + "/*"));
        if (l) {
          if (!l.run_at || l.run_at !== "document_start")
            throw `ExtPay setup error: To use the onPaid callback handler, please make sure the ExtPay content script in your manifest.json runs at document start. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
        } else
          throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json matching "${p}/*". You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
        h.push(e);
      }
      // removeListener: function(callback) {
      //     // TODO
      // }
    },
    getPlans: B,
    openPaymentPage: T,
    openTrialPage: j,
    openLoginPage: R,
    onTrialStarted: {
      addListener: function(e) {
        x.push(e);
      }
    },
    startBackground: function() {
      g.runtime.onMessage.addListener(function(e, t, o) {
        if (e == "extpay-fetch-user")
          O();
        else if (e == "extpay-trial-start")
          P();
        else if (e == "extpay-extinfo" && g.management)
          return g.management.getSelf();
      });
    }
  };
}
const Y = ({ extensionId: A } = {}) => {
  let p = !1;
  const m = U(A);
  return {
    start: () => {
      p || (p = !0, console.log("Payment service started"), m.startBackground());
    },
    stop: () => {
      p = !1, console.log("Payment service stopped"), m.stopBackground();
    },
    get started() {
      return p;
    }
  };
}, H = /* @__PURE__ */ Symbol("payment-service"), V = {
  install: (A, p = {}) => {
    const m = Y(p);
    A.provide(H, m), A.config.globalProperties.$paymentService = m, p.autoStart !== !1 && m.start();
  }
}, K = {
  __name: "ExtPay",
  props: {
    extensionId: {
      type: String,
      required: !0
    }
  },
  setup(A) {
    const m = U(A.extensionId), b = I(!1), _ = I(!0), k = I(""), h = async () => {
      k.value = "";
      try {
        await m.openPaymentPage();
      } catch (x) {
        k.value = x?.message || String(x);
      }
    };
    return q(async () => {
      const x = await m.getUser().catch(() => null);
      x && x.paidAt && (b.value = !0), _.value = !1;
    }), (x, v) => _.value ? F(x.$slots, "loading", { key: 0 }) : b.value ? F(x.$slots, "paid", { key: 1 }) : F(x.$slots, "unpaid", {
      key: 2,
      openPayment: h,
      paymentError: k.value
    });
  }
};
export {
  K as ExtPay,
  V as ExtPayPlugin,
  H as SERVICE_KEY,
  Y as createPaymentService
};
