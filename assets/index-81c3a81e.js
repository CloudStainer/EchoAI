import { _ as de } from "./index-971a4fc3.js";
const Ie = Symbol(),
  Z = Object.getPrototypeOf,
  q = new WeakMap(),
  fe = (e) =>
    e &&
    (q.has(e)
      ? q.get(e)
      : Z(e) === Object.prototype || Z(e) === Array.prototype),
  ue = (e) => (fe(e) && e[Ie]) || null,
  ee = (e, t = !0) => {
    q.set(e, t);
  },
  $ = (e) => typeof e == "object" && e !== null,
  A = new WeakMap(),
  H = new WeakSet(),
  pe = (
    e = Object.is,
    t = (n, p) => new Proxy(n, p),
    s = (n) =>
      $(n) &&
      !H.has(n) &&
      (Array.isArray(n) || !(Symbol.iterator in n)) &&
      !(n instanceof WeakMap) &&
      !(n instanceof WeakSet) &&
      !(n instanceof Error) &&
      !(n instanceof Number) &&
      !(n instanceof Date) &&
      !(n instanceof String) &&
      !(n instanceof RegExp) &&
      !(n instanceof ArrayBuffer),
    r = (n) => {
      switch (n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw n.reason;
        default:
          throw n;
      }
    },
    c = new WeakMap(),
    l = (n, p, L = r) => {
      const T = c.get(n);
      if ((T == null ? void 0 : T[0]) === p) return T[1];
      const V = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n));
      return (
        ee(V, !0),
        c.set(n, [p, V]),
        Reflect.ownKeys(n).forEach((U) => {
          if (Object.getOwnPropertyDescriptor(V, U)) return;
          const m = Reflect.get(n, U),
            S = { value: m, enumerable: !0, configurable: !0 };
          if (H.has(m)) ee(m, !1);
          else if (m instanceof Promise) delete S.value, (S.get = () => L(m));
          else if (A.has(m)) {
            const [R, Y] = A.get(m);
            S.value = l(R, Y(), L);
          }
          Object.defineProperty(V, U, S);
        }),
        Object.preventExtensions(V)
      );
    },
    f = new WeakMap(),
    I = [1, 1],
    O = (n) => {
      if (!$(n)) throw new Error("object required");
      const p = f.get(n);
      if (p) return p;
      let L = I[0];
      const T = new Set(),
        V = (i, a = ++I[0]) => {
          L !== a && ((L = a), T.forEach((o) => o(i, a)));
        };
      let U = I[1];
      const m = (i = ++I[1]) => (
          U !== i &&
            !T.size &&
            ((U = i),
            R.forEach(([a]) => {
              const o = a[1](i);
              o > L && (L = o);
            })),
          L
        ),
        S = (i) => (a, o) => {
          const u = [...a];
          (u[1] = [i, ...u[1]]), V(u, o);
        },
        R = new Map(),
        Y = (i, a) => {
          if (T.size) {
            const o = a[3](S(i));
            R.set(i, [a, o]);
          } else R.set(i, [a]);
        },
        Q = (i) => {
          var a;
          const o = R.get(i);
          o && (R.delete(i), (a = o[1]) == null || a.call(o));
        },
        Ee = (i) => (
          T.add(i),
          T.size === 1 &&
            R.forEach(([o, u], P) => {
              const N = o[3](S(P));
              R.set(P, [o, N]);
            }),
          () => {
            T.delete(i),
              T.size === 0 &&
                R.forEach(([o, u], P) => {
                  u && (u(), R.set(P, [o]));
                });
          }
        ),
        K = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
        j = t(K, {
          deleteProperty(i, a) {
            const o = Reflect.get(i, a);
            Q(a);
            const u = Reflect.deleteProperty(i, a);
            return u && V(["delete", [a], o]), u;
          },
          set(i, a, o, u) {
            const P = Reflect.has(i, a),
              N = Reflect.get(i, a, u);
            if (P && (e(N, o) || (f.has(o) && e(N, f.get(o))))) return !0;
            Q(a), $(o) && (o = ue(o) || o);
            let k = o;
            if (o instanceof Promise)
              o.then((h) => {
                (o.status = "fulfilled"), (o.value = h), V(["resolve", [a], h]);
              }).catch((h) => {
                (o.status = "rejected"), (o.reason = h), V(["reject", [a], h]);
              });
            else {
              !A.has(o) && s(o) && (k = O(o));
              const h = !H.has(k) && A.get(k);
              h && Y(a, h);
            }
            return Reflect.set(i, a, k, u), V(["set", [a], o, N]), !0;
          },
        });
      f.set(n, j);
      const _e = [K, m, l, Ee];
      return (
        A.set(j, _e),
        Reflect.ownKeys(n).forEach((i) => {
          const a = Object.getOwnPropertyDescriptor(n, i);
          "value" in a && ((j[i] = n[i]), delete a.value, delete a.writable),
            Object.defineProperty(K, i, a);
        }),
        j
      );
    }
  ) => [O, A, H, e, t, s, r, c, l, f, I],
  [Te] = pe();
function y(e = {}) {
  return Te(e);
}
function w(e, t, s) {
  const r = A.get(e);
  let c;
  const l = [],
    f = r[3];
  let I = !1;
  const n = f((p) => {
    if ((l.push(p), s)) {
      t(l.splice(0));
      return;
    }
    c ||
      (c = Promise.resolve().then(() => {
        (c = void 0), I && t(l.splice(0));
      }));
  });
  return (
    (I = !0),
    () => {
      (I = !1), n();
    }
  );
}
function Ve(e, t) {
  const s = A.get(e),
    [r, c, l] = s;
  return l(r, c(), t);
}
const E = y({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0,
  }),
  le = {
    state: E,
    subscribe(e) {
      return w(E, () => e(E));
    },
    push(e, t) {
      e !== E.view && ((E.view = e), t && (E.data = t), E.history.push(e));
    },
    reset(e) {
      (E.view = e), (E.history = [e]);
    },
    replace(e) {
      E.history.length > 1 &&
        ((E.history[E.history.length - 1] = e), (E.view = e));
    },
    goBack() {
      if (E.history.length > 1) {
        E.history.pop();
        const [e] = E.history.slice(-1);
        E.view = e;
      }
    },
    setData(e) {
      E.data = e;
    },
  },
  d = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u"
        ? !!(
            window.matchMedia("(pointer:coarse)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    isAndroid() {
      return (
        d.isMobile() && navigator.userAgent.toLowerCase().includes("android")
      );
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return d.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    formatNativeUrl(e, t, s) {
      if (d.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      let r = e;
      r.includes("://") ||
        ((r = e.replaceAll("/", "").replaceAll(":", "")), (r = `${r}://`)),
        r.endsWith("/") || (r = `${r}/`),
        this.setWalletConnectDeepLink(r, s);
      const c = encodeURIComponent(t);
      return `${r}wc?uri=${c}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!d.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let r = e;
      r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
      const c = encodeURIComponent(t);
      return `${r}wc?uri=${c}`;
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    openHref(e, t) {
      window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(
          d.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e, name: t })
        );
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(
          d.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t, name: "Android" })
        );
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(d.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" &&
          localStorage.setItem(d.WCM_VERSION, "2.6.2");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = le.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
  },
  Re =
    typeof location < "u" &&
    (location.hostname.includes("localhost") ||
      location.protocol.includes("https")),
  _ = y({
    enabled: Re,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0,
  }),
  Ce = {
    state: _,
    subscribe(e) {
      return w(_.events, () => e(Ve(_.events[_.events.length - 1])));
    },
    initialize() {
      _.enabled &&
        typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" &&
        (_.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      _.connectedWalletId = e;
    },
    click(e) {
      if (_.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: _.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        _.events.push(t);
      }
    },
    track(e) {
      if (_.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: _.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        _.events.push(t);
      }
    },
    view(e) {
      if (_.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: _.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        _.events.push(t);
      }
    },
  },
  b = y({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
  }),
  C = {
    state: b,
    subscribe(e) {
      return w(b, () => e(b));
    },
    setChains(e) {
      b.chains = e;
    },
    setWalletConnectUri(e) {
      b.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      b.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      b.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      b.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      b.isUiLoaded = e;
    },
    setIsAuth(e) {
      b.isAuth = e;
    },
  },
  B = y({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0,
  }),
  W = {
    state: B,
    subscribe(e) {
      return w(B, () => e(B));
    },
    setConfig(e) {
      var t, s;
      Ce.initialize(),
        C.setChains(e.chains),
        C.setIsAuth(!!e.enableAuthMode),
        C.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)),
        C.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)),
        d.setModalVersionInStorage(),
        Object.assign(B, e);
    },
  };
var Le = Object.defineProperty,
  te = Object.getOwnPropertySymbols,
  be = Object.prototype.hasOwnProperty,
  ge = Object.prototype.propertyIsEnumerable,
  se = (e, t, s) =>
    t in e
      ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  me = (e, t) => {
    for (var s in t || (t = {})) be.call(t, s) && se(e, s, t[s]);
    if (te) for (var s of te(t)) ge.call(t, s) && se(e, s, t[s]);
    return e;
  };
const X = "https://explorer-api.walletconnect.com",
  z = "wcm",
  J = "js-2.6.2";
async function x(e, t) {
  const s = me({ sdkType: z, sdkVersion: J }, t),
    r = new URL(e, X);
  return (
    r.searchParams.append("projectId", W.state.projectId),
    Object.entries(s).forEach(([c, l]) => {
      l && r.searchParams.append(c, String(l));
    }),
    (await fetch(r)).json()
  );
}
const M = {
  async getDesktopListings(e) {
    return x("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return x("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return x("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return x("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${X}/w3m/v1/getWalletImage/${e}?projectId=${W.state.projectId}&sdkType=${z}&sdkVersion=${J}`;
  },
  getAssetImageUrl(e) {
    return `${X}/w3m/v1/getAssetImage/${e}?projectId=${W.state.projectId}&sdkType=${z}&sdkVersion=${J}`;
  },
};
var Oe = Object.defineProperty,
  ne = Object.getOwnPropertySymbols,
  he = Object.prototype.hasOwnProperty,
  Ae = Object.prototype.propertyIsEnumerable,
  oe = (e, t, s) =>
    t in e
      ? Oe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  ye = (e, t) => {
    for (var s in t || (t = {})) he.call(t, s) && oe(e, s, t[s]);
    if (ne) for (var s of ne(t)) Ae.call(t, s) && oe(e, s, t[s]);
    return e;
  };
const re = d.isMobile(),
  g = y({
    wallets: { listings: [], total: 0, page: 1 },
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: [],
  }),
  Ne = {
    state: g,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } =
        W.state;
      if (e === "NONE" || (t === "ALL" && !e)) return g.recomendedWallets;
      if (d.isArray(e)) {
        const s = { recommendedIds: e.join(",") },
          { listings: r } = await M.getAllListings(s),
          c = Object.values(r);
        c.sort((l, f) => {
          const I = e.indexOf(l.id),
            O = e.indexOf(f.id);
          return I - O;
        }),
          (g.recomendedWallets = c);
      } else {
        const { chains: s, isAuth: r } = C.state,
          c = s == null ? void 0 : s.join(","),
          l = d.isArray(t),
          f = {
            page: 1,
            sdks: r ? "auth_v1" : void 0,
            entries: d.RECOMMENDED_WALLET_AMOUNT,
            chains: c,
            version: 2,
            excludedIds: l ? t.join(",") : void 0,
          },
          { listings: I } = re
            ? await M.getMobileListings(f)
            : await M.getDesktopListings(f);
        g.recomendedWallets = Object.values(I);
      }
      return g.recomendedWallets;
    },
    async getWallets(e) {
      const t = ye({}, e),
        { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: r } =
          W.state,
        { recomendedWallets: c } = g;
      if (r === "ALL") return g.wallets;
      c.length
        ? (t.excludedIds = c.map((L) => L.id).join(","))
        : d.isArray(s) && (t.excludedIds = s.join(",")),
        d.isArray(r) &&
          (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")),
        C.state.isAuth && (t.sdks = "auth_v1");
      const { page: l, search: f } = e,
        { listings: I, total: O } = re
          ? await M.getMobileListings(t)
          : await M.getDesktopListings(t),
        n = Object.values(I),
        p = f ? "search" : "wallets";
      return (
        (g[p] = { listings: [...g[p].listings, ...n], total: O, page: l ?? 1 }),
        { listings: n, total: O }
      );
    },
    getWalletImageUrl(e) {
      return M.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return M.getAssetImageUrl(e);
    },
    resetSearch() {
      g.search = { listings: [], total: 0, page: 1 };
    },
  },
  D = y({ open: !1 }),
  F = {
    state: D,
    subscribe(e) {
      return w(D, () => e(D));
    },
    async open(e) {
      return new Promise((t) => {
        const { isUiLoaded: s, isDataLoaded: r } = C.state;
        if (
          (d.removeWalletConnectDeepLink(),
          C.setWalletConnectUri(e == null ? void 0 : e.uri),
          C.setChains(e == null ? void 0 : e.chains),
          le.reset("ConnectWallet"),
          s && r)
        )
          (D.open = !0), t();
        else {
          const c = setInterval(() => {
            const l = C.state;
            l.isUiLoaded &&
              l.isDataLoaded &&
              (clearInterval(c), (D.open = !0), t());
          }, 200);
        }
      });
    },
    close() {
      D.open = !1;
    },
  };
var Se = Object.defineProperty,
  ae = Object.getOwnPropertySymbols,
  Me = Object.prototype.hasOwnProperty,
  ve = Object.prototype.propertyIsEnumerable,
  ie = (e, t, s) =>
    t in e
      ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  we = (e, t) => {
    for (var s in t || (t = {})) Me.call(t, s) && ie(e, s, t[s]);
    if (ae) for (var s of ae(t)) ve.call(t, s) && ie(e, s, t[s]);
    return e;
  };
function Ue() {
  return (
    typeof matchMedia < "u" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}
const G = y({ themeMode: Ue() ? "dark" : "light" }),
  ce = {
    state: G,
    subscribe(e) {
      return w(G, () => e(G));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: s } = e;
      t && (G.themeMode = t), s && (G.themeVariables = we({}, s));
    },
  },
  v = y({ open: !1, message: "", variant: "success" }),
  Ge = {
    state: v,
    subscribe(e) {
      return w(v, () => e(v));
    },
    openToast(e, t) {
      (v.open = !0), (v.message = e), (v.variant = t);
    },
    closeToast() {
      v.open = !1;
    },
  };
class Pe {
  constructor(t) {
    (this.openModal = F.open),
      (this.closeModal = F.close),
      (this.subscribeModal = F.subscribe),
      (this.setTheme = ce.setThemeConfig),
      ce.setThemeConfig(t),
      W.setConfig(t),
      this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await de(
        () => import("./index-5189d0f2.js"),
        [
          "assets/index-5189d0f2.js",
          "assets/index-971a4fc3.js",
          "assets/index-ecd973c7.css",
        ]
      );
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), C.setIsUiLoaded(!0);
    }
  }
}
const je = Object.freeze(
  Object.defineProperty(
    { __proto__: null, WalletConnectModal: Pe },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  Ce as R,
  le as T,
  d as a,
  je as i,
  ce as n,
  Ge as o,
  C as p,
  F as s,
  Ne as t,
  W as y,
};
