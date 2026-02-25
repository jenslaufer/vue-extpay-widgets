import { ref as U, onMounted as q, renderSlot as I } from "vue";
var L = { exports: {} }, G = L.exports, F;
function z() {
  return F || (F = 1, (function(A, x) {
    (function(m, b) {
      b(A);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : G, function(m) {
      if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const b = "The message port closed before a response was received.", k = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", y = (h) => {
          const E = {
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
          if (Object.keys(E).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class $ extends WeakMap {
            constructor(r, n = void 0) {
              super(n), this.createItem = r;
            }
            get(r) {
              return this.has(r) || this.set(r, this.createItem(r)), super.get(r);
            }
          }
          const v = (s) => s && typeof s == "object" && typeof s.then == "function", N = (s, r) => (...n) => {
            h.runtime.lastError ? s.reject(h.runtime.lastError) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? s.resolve(n[0]) : s.resolve(n);
          }, _ = (s) => s == 1 ? "argument" : "arguments", B = (s, r) => function(i, ...u) {
            if (u.length < r.minArgs)
              throw new Error(`Expected at least ${r.minArgs} ${_(r.minArgs)} for ${s}(), got ${u.length}`);
            if (u.length > r.maxArgs)
              throw new Error(`Expected at most ${r.maxArgs} ${_(r.maxArgs)} for ${s}(), got ${u.length}`);
            return new Promise((p, d) => {
              if (r.fallbackToNoCallback)
                try {
                  i[s](...u, N({
                    resolve: p,
                    reject: d
                  }, r));
                } catch (a) {
                  console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, a), i[s](...u), r.fallbackToNoCallback = !1, r.noCallback = !0, p();
                }
              else r.noCallback ? (i[s](...u), p()) : i[s](...u, N({
                resolve: p,
                reject: d
              }, r));
            });
          }, C = (s, r, n) => new Proxy(r, {
            apply(i, u, p) {
              return n.call(u, s, ...p);
            }
          });
          let T = Function.call.bind(Object.prototype.hasOwnProperty);
          const j = (s, r = {}, n = {}) => {
            let i = /* @__PURE__ */ Object.create(null), u = {
              has(d, a) {
                return a in s || a in i;
              },
              get(d, a, f) {
                if (a in i)
                  return i[a];
                if (!(a in s))
                  return;
                let c = s[a];
                if (typeof c == "function")
                  if (typeof r[a] == "function")
                    c = C(s, s[a], r[a]);
                  else if (T(n, a)) {
                    let S = B(a, n[a]);
                    c = C(s, s[a], S);
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
                    set(S) {
                      s[a] = S;
                    }
                  }), c;
                return i[a] = c, c;
              },
              set(d, a, f, c) {
                return a in i ? i[a] = f : s[a] = f, !0;
              },
              defineProperty(d, a, f) {
                return Reflect.defineProperty(i, a, f);
              },
              deleteProperty(d, a) {
                return Reflect.deleteProperty(i, a);
              }
            }, p = Object.create(s);
            return new Proxy(p, u);
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
          let P = !1;
          const O = new $((s) => typeof s != "function" ? s : function(n, i, u) {
            let p = !1, d, a = new Promise((M) => {
              d = function(w) {
                P || (console.warn(k, new Error().stack), P = !0), p = !0, M(w);
              };
            }), f;
            try {
              f = s(n, i, d);
            } catch (M) {
              f = Promise.reject(M);
            }
            const c = f !== !0 && v(f);
            if (f !== !0 && !c && !p)
              return !1;
            const S = (M) => {
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
            return S(c ? f : a), !0;
          }), e = ({
            reject: s,
            resolve: r
          }, n) => {
            h.runtime.lastError ? h.runtime.lastError.message === b ? r() : s(h.runtime.lastError) : n && n.__mozWebExtensionPolyfillReject__ ? s(new Error(n.message)) : r(n);
          }, t = (s, r, n, ...i) => {
            if (i.length < r.minArgs)
              throw new Error(`Expected at least ${r.minArgs} ${_(r.minArgs)} for ${s}(), got ${i.length}`);
            if (i.length > r.maxArgs)
              throw new Error(`Expected at most ${r.maxArgs} ${_(r.maxArgs)} for ${s}(), got ${i.length}`);
            return new Promise((u, p) => {
              const d = e.bind(null, {
                resolve: u,
                reject: p
              });
              i.push(d), n.sendMessage(...i);
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
          return E.privacy = {
            network: {
              "*": l
            },
            services: {
              "*": l
            },
            websites: {
              "*": l
            }
          }, j(h, o, E);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
          throw new Error("This script should only be loaded in a browser extension.");
        m.exports = y(chrome);
      } else
        m.exports = browser;
    });
  })(L)), L.exports;
}
var g = z();
typeof window < "u" && window.addEventListener("message", (A) => {
  A.origin === "https://extensionpay.com" && A.source == window && (A.data === "extpay-fetch-user" || A.data === "extpay-trial-start") && (window.postMessage(`${A.data}-received`), g.runtime.sendMessage(A.data));
}, !1);
function W(A) {
  const x = "https://extensionpay.com", m = `${x}/extension/${A}`;
  function b(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  async function k(e) {
    try {
      return await g.storage.sync.get(e);
    } catch {
      return await g.storage.local.get(e);
    }
  }
  async function y(e) {
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
  }), k(["extensionpay_installed_at", "extensionpay_user"]).then(async (e) => {
    if (e.extensionpay_installed_at) return;
    const t = e.extensionpay_user, o = t ? t.installedAt : (/* @__PURE__ */ new Date()).toISOString();
    await y({ extensionpay_installed_at: o });
  });
  const h = [], E = [];
  async function $() {
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
      throw o.status, `${x}/home`;
    const l = await o.json();
    return await y({ extensionpay_api_key: l }), l;
  }
  async function v() {
    const e = await k(["extensionpay_api_key"]);
    return e.extensionpay_api_key ? e.extensionpay_api_key : null;
  }
  const N = /^\d\d\d\d-\d\d-\d\dT/;
  async function _() {
    var e = await k(["extensionpay_user", "extensionpay_installed_at"]);
    const t = await v();
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
    return s.installedAt = new Date(e.extensionpay_installed_at), s.paidAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.paidAt) && h.forEach((i) => i(s)), s.trialStartedAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.trialStartedAt) && E.forEach((i) => i(s)), await y({ extensionpay_user: l }), s;
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
    var t = await v();
    t || (t = await $());
    let o = `${m}/choose-plan?api_key=${t}`;
    e && (o = `${m}/choose-plan/${e}?api_key=${t}`), g.tabs && g.tabs.create ? await g.tabs.create({ url: o, active: !0 }) : window.open(o, "_blank");
  }
  async function j(e) {
    var t = await v();
    t || (t = await $());
    var o = `${m}/trial?api_key=${t}`;
    e && (o += `&period=${e}`), C(o, 500, 700);
  }
  async function R() {
    var e = await v();
    e || (e = await $());
    const t = `${m}/reactivate?api_key=${e}&back=choose-plan&v2`;
    C(t, 500, 800);
  }
  var P = !1;
  async function O() {
    if (!P) {
      P = !0;
      for (var e = await _(), t = 0; t < 120; ++t) {
        if (e.paidAt)
          return P = !1, e;
        await b(1e3), e = await _();
      }
      P = !1;
    }
  }
  return {
    getUser: function() {
      return _();
    },
    onPaid: {
      addListener: function(e) {
        const t = `"content_scripts": [
                {
            "matches": ["${x}/*"],
            "js": ["ExtPay.js"],
            "run_at": "document_start"
        }]`, o = g.runtime.getManifest();
        if (!o.content_scripts)
          throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
        const l = o.content_scripts.find((s) => s.matches.includes(x.replace(":3000", "") + "/*"));
        if (l) {
          if (!l.run_at || l.run_at !== "document_start")
            throw `ExtPay setup error: To use the onPaid callback handler, please make sure the ExtPay content script in your manifest.json runs at document start. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
        } else
          throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json matching "${x}/*". You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

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
        E.push(e);
      }
    },
    startBackground: function() {
      g.runtime.onMessage.addListener(function(e, t, o) {
        if (e == "extpay-fetch-user")
          O();
        else if (e == "extpay-trial-start")
          _();
        else if (e == "extpay-extinfo" && g.management)
          return g.management.getSelf();
      });
    }
  };
}
const Y = ({ extensionId: A } = {}) => {
  let x = !1;
  const m = W(A);
  return {
    start: () => {
      x || (console.log(">>>>>>> Payment service started"), m.startBackground());
    },
    stop: () => {
      x = !1, console.log(">>>>>>> Payment service stopped"), m.stopBackground();
    },
    get started() {
      return x;
    }
  };
}, H = /* @__PURE__ */ Symbol("payment-service"), V = {
  install: (A, x = {}) => {
    const m = Y(x);
    A.provide(H, m), A.config.globalProperties.$paymentService = m, x.autoStart !== !1 && m.start();
  }
}, K = {
  __name: "ExtPay",
  props: {
    extensionId: {
      type: Number,
      required: !0
    }
  },
  setup(A) {
    const m = W(A.extensionId), b = U(!1), k = () => m.openPaymentPage();
    return q(async () => {
      const y = await m.getUser().catch(() => null);
      y && y.paidAt && (b.value = !0);
    }), (y, h) => b.value ? I(y.$slots, "paid", { key: 0 }) : I(y.$slots, "unpaid", {
      key: 1,
      openPayment: k
    });
  }
};
export {
  K as ExtPay,
  V as ExtPayPlugin,
  H as SERVICE_KEY,
  Y as createPaymentService
};
