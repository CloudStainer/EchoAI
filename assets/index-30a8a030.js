import {
  E as Sa,
  r as To,
  l as G,
  k as pn,
  n as Dn,
  o as Nh,
  t as Lh,
  g as Ph,
} from "./index-971a4fc3.js";
import { e as Oi } from "./events-1a471a35.js";
function Oh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
const $h = Object.freeze(
  Object.defineProperty(
    { __proto__: null, EventEmitter: Sa, default: Sa },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var No = {},
  Ln = {},
  $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
$i.walletLogo = void 0;
const Bh = (e, t) => {
  let r;
  switch (e) {
    case "standard":
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
    case "circle":
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
      );
    case "text":
      return (
        (r = (0.1 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogo":
      return (
        (r = (0.25 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    case "textLight":
      return (
        (r = (0.1 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogoLight":
      return (
        (r = (0.25 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    default:
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
  }
};
$i.walletLogo = Bh;
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.LINK_API_URL = void 0;
Bi.LINK_API_URL = "https://www.walletlink.org";
var q = {},
  Lo = { exports: {} };
Lo.exports;
(function (e) {
  (function (t, r) {
    function n(m, o) {
      if (!m) throw new Error(o || "Assertion failed");
    }
    function i(m, o) {
      m.super_ = o;
      var h = function () {};
      (h.prototype = o.prototype),
        (m.prototype = new h()),
        (m.prototype.constructor = m);
    }
    function s(m, o, h) {
      if (s.isBN(m)) return m;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        m !== null &&
          ((o === "le" || o === "be") && ((h = o), (o = 10)),
          this._init(m || 0, o || 10, h || "be"));
    }
    typeof t == "object" ? (t.exports = s) : (r.BN = s),
      (s.BN = s),
      (s.wordSize = 26);
    var a;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (a = window.Buffer)
        : (a = To.Buffer);
    } catch {}
    (s.isBN = function (o) {
      return o instanceof s
        ? !0
        : o !== null &&
            typeof o == "object" &&
            o.constructor.wordSize === s.wordSize &&
            Array.isArray(o.words);
    }),
      (s.max = function (o, h) {
        return o.cmp(h) > 0 ? o : h;
      }),
      (s.min = function (o, h) {
        return o.cmp(h) < 0 ? o : h;
      }),
      (s.prototype._init = function (o, h, f) {
        if (typeof o == "number") return this._initNumber(o, h, f);
        if (typeof o == "object") return this._initArray(o, h, f);
        h === "hex" && (h = 16),
          n(h === (h | 0) && h >= 2 && h <= 36),
          (o = o.toString().replace(/\s+/g, ""));
        var _ = 0;
        o[0] === "-" && (_++, (this.negative = 1)),
          _ < o.length &&
            (h === 16
              ? this._parseHex(o, _, f)
              : (this._parseBase(o, h, _),
                f === "le" && this._initArray(this.toArray(), h, f)));
      }),
      (s.prototype._initNumber = function (o, h, f) {
        o < 0 && ((this.negative = 1), (o = -o)),
          o < 67108864
            ? ((this.words = [o & 67108863]), (this.length = 1))
            : o < 4503599627370496
            ? ((this.words = [o & 67108863, (o / 67108864) & 67108863]),
              (this.length = 2))
            : (n(o < 9007199254740992),
              (this.words = [o & 67108863, (o / 67108864) & 67108863, 1]),
              (this.length = 3)),
          f === "le" && this._initArray(this.toArray(), h, f);
      }),
      (s.prototype._initArray = function (o, h, f) {
        if ((n(typeof o.length == "number"), o.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(o.length / 3)),
          (this.words = new Array(this.length));
        for (var _ = 0; _ < this.length; _++) this.words[_] = 0;
        var b,
          R,
          x = 0;
        if (f === "be")
          for (_ = o.length - 1, b = 0; _ >= 0; _ -= 3)
            (R = o[_] | (o[_ - 1] << 8) | (o[_ - 2] << 16)),
              (this.words[b] |= (R << x) & 67108863),
              (this.words[b + 1] = (R >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), b++);
        else if (f === "le")
          for (_ = 0, b = 0; _ < o.length; _ += 3)
            (R = o[_] | (o[_ + 1] << 8) | (o[_ + 2] << 16)),
              (this.words[b] |= (R << x) & 67108863),
              (this.words[b + 1] = (R >>> (26 - x)) & 67108863),
              (x += 24),
              x >= 26 && ((x -= 26), b++);
        return this._strip();
      });
    function c(m, o) {
      var h = m.charCodeAt(o);
      if (h >= 48 && h <= 57) return h - 48;
      if (h >= 65 && h <= 70) return h - 55;
      if (h >= 97 && h <= 102) return h - 87;
      n(!1, "Invalid character in " + m);
    }
    function u(m, o, h) {
      var f = c(m, h);
      return h - 1 >= o && (f |= c(m, h - 1) << 4), f;
    }
    s.prototype._parseHex = function (o, h, f) {
      (this.length = Math.ceil((o.length - h) / 6)),
        (this.words = new Array(this.length));
      for (var _ = 0; _ < this.length; _++) this.words[_] = 0;
      var b = 0,
        R = 0,
        x;
      if (f === "be")
        for (_ = o.length - 1; _ >= h; _ -= 2)
          (x = u(o, h, _) << b),
            (this.words[R] |= x & 67108863),
            b >= 18
              ? ((b -= 18), (R += 1), (this.words[R] |= x >>> 26))
              : (b += 8);
      else {
        var v = o.length - h;
        for (_ = v % 2 === 0 ? h + 1 : h; _ < o.length; _ += 2)
          (x = u(o, h, _) << b),
            (this.words[R] |= x & 67108863),
            b >= 18
              ? ((b -= 18), (R += 1), (this.words[R] |= x >>> 26))
              : (b += 8);
      }
      this._strip();
    };
    function d(m, o, h, f) {
      for (var _ = 0, b = 0, R = Math.min(m.length, h), x = o; x < R; x++) {
        var v = m.charCodeAt(x) - 48;
        (_ *= f),
          v >= 49 ? (b = v - 49 + 10) : v >= 17 ? (b = v - 17 + 10) : (b = v),
          n(v >= 0 && b < f, "Invalid character"),
          (_ += b);
      }
      return _;
    }
    (s.prototype._parseBase = function (o, h, f) {
      (this.words = [0]), (this.length = 1);
      for (var _ = 0, b = 1; b <= 67108863; b *= h) _++;
      _--, (b = (b / h) | 0);
      for (
        var R = o.length - f,
          x = R % _,
          v = Math.min(R, R - x) + f,
          l = 0,
          S = f;
        S < v;
        S += _
      )
        (l = d(o, S, S + _, h)),
          this.imuln(b),
          this.words[0] + l < 67108864 ? (this.words[0] += l) : this._iaddn(l);
      if (x !== 0) {
        var W = 1;
        for (l = d(o, S, o.length, h), S = 0; S < x; S++) W *= h;
        this.imuln(W),
          this.words[0] + l < 67108864 ? (this.words[0] += l) : this._iaddn(l);
      }
      this._strip();
    }),
      (s.prototype.copy = function (o) {
        o.words = new Array(this.length);
        for (var h = 0; h < this.length; h++) o.words[h] = this.words[h];
        (o.length = this.length),
          (o.negative = this.negative),
          (o.red = this.red);
      });
    function g(m, o) {
      (m.words = o.words),
        (m.length = o.length),
        (m.negative = o.negative),
        (m.red = o.red);
    }
    if (
      ((s.prototype._move = function (o) {
        g(o, this);
      }),
      (s.prototype.clone = function () {
        var o = new s(null);
        return this.copy(o), o;
      }),
      (s.prototype._expand = function (o) {
        for (; this.length < o; ) this.words[this.length++] = 0;
        return this;
      }),
      (s.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (s.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = p;
      } catch {
        s.prototype.inspect = p;
      }
    else s.prototype.inspect = p;
    function p() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var E = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      k = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      A = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (s.prototype.toString = function (o, h) {
      (o = o || 10), (h = h | 0 || 1);
      var f;
      if (o === 16 || o === "hex") {
        f = "";
        for (var _ = 0, b = 0, R = 0; R < this.length; R++) {
          var x = this.words[R],
            v = (((x << _) | b) & 16777215).toString(16);
          (b = (x >>> (24 - _)) & 16777215),
            (_ += 2),
            _ >= 26 && ((_ -= 26), R--),
            b !== 0 || R !== this.length - 1
              ? (f = E[6 - v.length] + v + f)
              : (f = v + f);
        }
        for (b !== 0 && (f = b.toString(16) + f); f.length % h !== 0; )
          f = "0" + f;
        return this.negative !== 0 && (f = "-" + f), f;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var l = k[o],
          S = A[o];
        f = "";
        var W = this.clone();
        for (W.negative = 0; !W.isZero(); ) {
          var V = W.modrn(S).toString(o);
          (W = W.idivn(S)),
            W.isZero() ? (f = V + f) : (f = E[l - V.length] + V + f);
        }
        for (this.isZero() && (f = "0" + f); f.length % h !== 0; ) f = "0" + f;
        return this.negative !== 0 && (f = "-" + f), f;
      }
      n(!1, "Base should be between 2 and 36");
    }),
      (s.prototype.toNumber = function () {
        var o = this.words[0];
        return (
          this.length === 2
            ? (o += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (o += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              n(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -o : o
        );
      }),
      (s.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      a &&
        (s.prototype.toBuffer = function (o, h) {
          return this.toArrayLike(a, o, h);
        }),
      (s.prototype.toArray = function (o, h) {
        return this.toArrayLike(Array, o, h);
      });
    var O = function (o, h) {
      return o.allocUnsafe ? o.allocUnsafe(h) : new o(h);
    };
    (s.prototype.toArrayLike = function (o, h, f) {
      this._strip();
      var _ = this.byteLength(),
        b = f || Math.max(1, _);
      n(_ <= b, "byte array longer than desired length"),
        n(b > 0, "Requested array length <= 0");
      var R = O(o, b),
        x = h === "le" ? "LE" : "BE";
      return this["_toArrayLike" + x](R, _), R;
    }),
      (s.prototype._toArrayLikeLE = function (o, h) {
        for (var f = 0, _ = 0, b = 0, R = 0; b < this.length; b++) {
          var x = (this.words[b] << R) | _;
          (o[f++] = x & 255),
            f < o.length && (o[f++] = (x >> 8) & 255),
            f < o.length && (o[f++] = (x >> 16) & 255),
            R === 6
              ? (f < o.length && (o[f++] = (x >> 24) & 255), (_ = 0), (R = 0))
              : ((_ = x >>> 24), (R += 2));
        }
        if (f < o.length) for (o[f++] = _; f < o.length; ) o[f++] = 0;
      }),
      (s.prototype._toArrayLikeBE = function (o, h) {
        for (var f = o.length - 1, _ = 0, b = 0, R = 0; b < this.length; b++) {
          var x = (this.words[b] << R) | _;
          (o[f--] = x & 255),
            f >= 0 && (o[f--] = (x >> 8) & 255),
            f >= 0 && (o[f--] = (x >> 16) & 255),
            R === 6
              ? (f >= 0 && (o[f--] = (x >> 24) & 255), (_ = 0), (R = 0))
              : ((_ = x >>> 24), (R += 2));
        }
        if (f >= 0) for (o[f--] = _; f >= 0; ) o[f--] = 0;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (o) {
            return 32 - Math.clz32(o);
          })
        : (s.prototype._countBits = function (o) {
            var h = o,
              f = 0;
            return (
              h >= 4096 && ((f += 13), (h >>>= 13)),
              h >= 64 && ((f += 7), (h >>>= 7)),
              h >= 8 && ((f += 4), (h >>>= 4)),
              h >= 2 && ((f += 2), (h >>>= 2)),
              f + h
            );
          }),
      (s.prototype._zeroBits = function (o) {
        if (o === 0) return 26;
        var h = o,
          f = 0;
        return (
          h & 8191 || ((f += 13), (h >>>= 13)),
          h & 127 || ((f += 7), (h >>>= 7)),
          h & 15 || ((f += 4), (h >>>= 4)),
          h & 3 || ((f += 2), (h >>>= 2)),
          h & 1 || f++,
          f
        );
      }),
      (s.prototype.bitLength = function () {
        var o = this.words[this.length - 1],
          h = this._countBits(o);
        return (this.length - 1) * 26 + h;
      });
    function L(m) {
      for (var o = new Array(m.bitLength()), h = 0; h < o.length; h++) {
        var f = (h / 26) | 0,
          _ = h % 26;
        o[h] = (m.words[f] >>> _) & 1;
      }
      return o;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var o = 0, h = 0; h < this.length; h++) {
        var f = this._zeroBits(this.words[h]);
        if (((o += f), f !== 26)) break;
      }
      return o;
    }),
      (s.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (s.prototype.toTwos = function (o) {
        return this.negative !== 0
          ? this.abs().inotn(o).iaddn(1)
          : this.clone();
      }),
      (s.prototype.fromTwos = function (o) {
        return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone();
      }),
      (s.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (s.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (s.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (s.prototype.iuor = function (o) {
        for (; this.length < o.length; ) this.words[this.length++] = 0;
        for (var h = 0; h < o.length; h++)
          this.words[h] = this.words[h] | o.words[h];
        return this._strip();
      }),
      (s.prototype.ior = function (o) {
        return n((this.negative | o.negative) === 0), this.iuor(o);
      }),
      (s.prototype.or = function (o) {
        return this.length > o.length
          ? this.clone().ior(o)
          : o.clone().ior(this);
      }),
      (s.prototype.uor = function (o) {
        return this.length > o.length
          ? this.clone().iuor(o)
          : o.clone().iuor(this);
      }),
      (s.prototype.iuand = function (o) {
        var h;
        this.length > o.length ? (h = o) : (h = this);
        for (var f = 0; f < h.length; f++)
          this.words[f] = this.words[f] & o.words[f];
        return (this.length = h.length), this._strip();
      }),
      (s.prototype.iand = function (o) {
        return n((this.negative | o.negative) === 0), this.iuand(o);
      }),
      (s.prototype.and = function (o) {
        return this.length > o.length
          ? this.clone().iand(o)
          : o.clone().iand(this);
      }),
      (s.prototype.uand = function (o) {
        return this.length > o.length
          ? this.clone().iuand(o)
          : o.clone().iuand(this);
      }),
      (s.prototype.iuxor = function (o) {
        var h, f;
        this.length > o.length ? ((h = this), (f = o)) : ((h = o), (f = this));
        for (var _ = 0; _ < f.length; _++)
          this.words[_] = h.words[_] ^ f.words[_];
        if (this !== h) for (; _ < h.length; _++) this.words[_] = h.words[_];
        return (this.length = h.length), this._strip();
      }),
      (s.prototype.ixor = function (o) {
        return n((this.negative | o.negative) === 0), this.iuxor(o);
      }),
      (s.prototype.xor = function (o) {
        return this.length > o.length
          ? this.clone().ixor(o)
          : o.clone().ixor(this);
      }),
      (s.prototype.uxor = function (o) {
        return this.length > o.length
          ? this.clone().iuxor(o)
          : o.clone().iuxor(this);
      }),
      (s.prototype.inotn = function (o) {
        n(typeof o == "number" && o >= 0);
        var h = Math.ceil(o / 26) | 0,
          f = o % 26;
        this._expand(h), f > 0 && h--;
        for (var _ = 0; _ < h; _++) this.words[_] = ~this.words[_] & 67108863;
        return (
          f > 0 && (this.words[_] = ~this.words[_] & (67108863 >> (26 - f))),
          this._strip()
        );
      }),
      (s.prototype.notn = function (o) {
        return this.clone().inotn(o);
      }),
      (s.prototype.setn = function (o, h) {
        n(typeof o == "number" && o >= 0);
        var f = (o / 26) | 0,
          _ = o % 26;
        return (
          this._expand(f + 1),
          h
            ? (this.words[f] = this.words[f] | (1 << _))
            : (this.words[f] = this.words[f] & ~(1 << _)),
          this._strip()
        );
      }),
      (s.prototype.iadd = function (o) {
        var h;
        if (this.negative !== 0 && o.negative === 0)
          return (
            (this.negative = 0),
            (h = this.isub(o)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && o.negative !== 0)
          return (
            (o.negative = 0),
            (h = this.isub(o)),
            (o.negative = 1),
            h._normSign()
          );
        var f, _;
        this.length > o.length ? ((f = this), (_ = o)) : ((f = o), (_ = this));
        for (var b = 0, R = 0; R < _.length; R++)
          (h = (f.words[R] | 0) + (_.words[R] | 0) + b),
            (this.words[R] = h & 67108863),
            (b = h >>> 26);
        for (; b !== 0 && R < f.length; R++)
          (h = (f.words[R] | 0) + b),
            (this.words[R] = h & 67108863),
            (b = h >>> 26);
        if (((this.length = f.length), b !== 0))
          (this.words[this.length] = b), this.length++;
        else if (f !== this)
          for (; R < f.length; R++) this.words[R] = f.words[R];
        return this;
      }),
      (s.prototype.add = function (o) {
        var h;
        return o.negative !== 0 && this.negative === 0
          ? ((o.negative = 0), (h = this.sub(o)), (o.negative ^= 1), h)
          : o.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (h = o.sub(this)), (this.negative = 1), h)
          : this.length > o.length
          ? this.clone().iadd(o)
          : o.clone().iadd(this);
      }),
      (s.prototype.isub = function (o) {
        if (o.negative !== 0) {
          o.negative = 0;
          var h = this.iadd(o);
          return (o.negative = 1), h._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(o),
            (this.negative = 1),
            this._normSign()
          );
        var f = this.cmp(o);
        if (f === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var _, b;
        f > 0 ? ((_ = this), (b = o)) : ((_ = o), (b = this));
        for (var R = 0, x = 0; x < b.length; x++)
          (h = (_.words[x] | 0) - (b.words[x] | 0) + R),
            (R = h >> 26),
            (this.words[x] = h & 67108863);
        for (; R !== 0 && x < _.length; x++)
          (h = (_.words[x] | 0) + R),
            (R = h >> 26),
            (this.words[x] = h & 67108863);
        if (R === 0 && x < _.length && _ !== this)
          for (; x < _.length; x++) this.words[x] = _.words[x];
        return (
          (this.length = Math.max(this.length, x)),
          _ !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (s.prototype.sub = function (o) {
        return this.clone().isub(o);
      });
    function M(m, o, h) {
      h.negative = o.negative ^ m.negative;
      var f = (m.length + o.length) | 0;
      (h.length = f), (f = (f - 1) | 0);
      var _ = m.words[0] | 0,
        b = o.words[0] | 0,
        R = _ * b,
        x = R & 67108863,
        v = (R / 67108864) | 0;
      h.words[0] = x;
      for (var l = 1; l < f; l++) {
        for (
          var S = v >>> 26,
            W = v & 67108863,
            V = Math.min(l, o.length - 1),
            C = Math.max(0, l - m.length + 1);
          C <= V;
          C++
        ) {
          var T = (l - C) | 0;
          (_ = m.words[T] | 0),
            (b = o.words[C] | 0),
            (R = _ * b + W),
            (S += (R / 67108864) | 0),
            (W = R & 67108863);
        }
        (h.words[l] = W | 0), (v = S | 0);
      }
      return v !== 0 ? (h.words[l] = v | 0) : h.length--, h._strip();
    }
    var I = function (o, h, f) {
      var _ = o.words,
        b = h.words,
        R = f.words,
        x = 0,
        v,
        l,
        S,
        W = _[0] | 0,
        V = W & 8191,
        C = W >>> 13,
        T = _[1] | 0,
        $ = T & 8191,
        H = T >>> 13,
        te = _[2] | 0,
        y = te & 8191,
        w = te >>> 13,
        D = _[3] | 0,
        j = D & 8191,
        K = D >>> 13,
        ee = _[4] | 0,
        Z = ee & 8191,
        le = ee >>> 13,
        Mt = _[5] | 0,
        _e = Mt & 8191,
        me = Mt >>> 13,
        Vt = _[6] | 0,
        fe = Vt & 8191,
        pe = Vt >>> 13,
        Ot = _[7] | 0,
        he = Ot & 8191,
        ue = Ot >>> 13,
        ct = _[8] | 0,
        ve = ct & 8191,
        be = ct >>> 13,
        Lr = _[9] | 0,
        ye = Lr & 8191,
        we = Lr >>> 13,
        Pr = b[0] | 0,
        Ee = Pr & 8191,
        Se = Pr >>> 13,
        Or = b[1] | 0,
        Re = Or & 8191,
        Me = Or >>> 13,
        $r = b[2] | 0,
        ke = $r & 8191,
        Ce = $r >>> 13,
        Br = b[3] | 0,
        Ie = Br & 8191,
        xe = Br >>> 13,
        Dr = b[4] | 0,
        Ae = Dr & 8191,
        Te = Dr >>> 13,
        Fr = b[5] | 0,
        Ne = Fr & 8191,
        Le = Fr >>> 13,
        jr = b[6] | 0,
        Pe = jr & 8191,
        Oe = jr >>> 13,
        Hr = b[7] | 0,
        $e = Hr & 8191,
        Be = Hr >>> 13,
        Ur = b[8] | 0,
        De = Ur & 8191,
        Fe = Ur >>> 13,
        Wr = b[9] | 0,
        je = Wr & 8191,
        He = Wr >>> 13;
      (f.negative = o.negative ^ h.negative),
        (f.length = 19),
        (v = Math.imul(V, Ee)),
        (l = Math.imul(V, Se)),
        (l = (l + Math.imul(C, Ee)) | 0),
        (S = Math.imul(C, Se));
      var Qt = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (Qt >>> 26)) | 0),
        (Qt &= 67108863),
        (v = Math.imul($, Ee)),
        (l = Math.imul($, Se)),
        (l = (l + Math.imul(H, Ee)) | 0),
        (S = Math.imul(H, Se)),
        (v = (v + Math.imul(V, Re)) | 0),
        (l = (l + Math.imul(V, Me)) | 0),
        (l = (l + Math.imul(C, Re)) | 0),
        (S = (S + Math.imul(C, Me)) | 0);
      var Yt = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (Yt >>> 26)) | 0),
        (Yt &= 67108863),
        (v = Math.imul(y, Ee)),
        (l = Math.imul(y, Se)),
        (l = (l + Math.imul(w, Ee)) | 0),
        (S = Math.imul(w, Se)),
        (v = (v + Math.imul($, Re)) | 0),
        (l = (l + Math.imul($, Me)) | 0),
        (l = (l + Math.imul(H, Re)) | 0),
        (S = (S + Math.imul(H, Me)) | 0),
        (v = (v + Math.imul(V, ke)) | 0),
        (l = (l + Math.imul(V, Ce)) | 0),
        (l = (l + Math.imul(C, ke)) | 0),
        (S = (S + Math.imul(C, Ce)) | 0);
      var Xt = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (Xt >>> 26)) | 0),
        (Xt &= 67108863),
        (v = Math.imul(j, Ee)),
        (l = Math.imul(j, Se)),
        (l = (l + Math.imul(K, Ee)) | 0),
        (S = Math.imul(K, Se)),
        (v = (v + Math.imul(y, Re)) | 0),
        (l = (l + Math.imul(y, Me)) | 0),
        (l = (l + Math.imul(w, Re)) | 0),
        (S = (S + Math.imul(w, Me)) | 0),
        (v = (v + Math.imul($, ke)) | 0),
        (l = (l + Math.imul($, Ce)) | 0),
        (l = (l + Math.imul(H, ke)) | 0),
        (S = (S + Math.imul(H, Ce)) | 0),
        (v = (v + Math.imul(V, Ie)) | 0),
        (l = (l + Math.imul(V, xe)) | 0),
        (l = (l + Math.imul(C, Ie)) | 0),
        (S = (S + Math.imul(C, xe)) | 0);
      var er = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (er >>> 26)) | 0),
        (er &= 67108863),
        (v = Math.imul(Z, Ee)),
        (l = Math.imul(Z, Se)),
        (l = (l + Math.imul(le, Ee)) | 0),
        (S = Math.imul(le, Se)),
        (v = (v + Math.imul(j, Re)) | 0),
        (l = (l + Math.imul(j, Me)) | 0),
        (l = (l + Math.imul(K, Re)) | 0),
        (S = (S + Math.imul(K, Me)) | 0),
        (v = (v + Math.imul(y, ke)) | 0),
        (l = (l + Math.imul(y, Ce)) | 0),
        (l = (l + Math.imul(w, ke)) | 0),
        (S = (S + Math.imul(w, Ce)) | 0),
        (v = (v + Math.imul($, Ie)) | 0),
        (l = (l + Math.imul($, xe)) | 0),
        (l = (l + Math.imul(H, Ie)) | 0),
        (S = (S + Math.imul(H, xe)) | 0),
        (v = (v + Math.imul(V, Ae)) | 0),
        (l = (l + Math.imul(V, Te)) | 0),
        (l = (l + Math.imul(C, Ae)) | 0),
        (S = (S + Math.imul(C, Te)) | 0);
      var tr = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (tr >>> 26)) | 0),
        (tr &= 67108863),
        (v = Math.imul(_e, Ee)),
        (l = Math.imul(_e, Se)),
        (l = (l + Math.imul(me, Ee)) | 0),
        (S = Math.imul(me, Se)),
        (v = (v + Math.imul(Z, Re)) | 0),
        (l = (l + Math.imul(Z, Me)) | 0),
        (l = (l + Math.imul(le, Re)) | 0),
        (S = (S + Math.imul(le, Me)) | 0),
        (v = (v + Math.imul(j, ke)) | 0),
        (l = (l + Math.imul(j, Ce)) | 0),
        (l = (l + Math.imul(K, ke)) | 0),
        (S = (S + Math.imul(K, Ce)) | 0),
        (v = (v + Math.imul(y, Ie)) | 0),
        (l = (l + Math.imul(y, xe)) | 0),
        (l = (l + Math.imul(w, Ie)) | 0),
        (S = (S + Math.imul(w, xe)) | 0),
        (v = (v + Math.imul($, Ae)) | 0),
        (l = (l + Math.imul($, Te)) | 0),
        (l = (l + Math.imul(H, Ae)) | 0),
        (S = (S + Math.imul(H, Te)) | 0),
        (v = (v + Math.imul(V, Ne)) | 0),
        (l = (l + Math.imul(V, Le)) | 0),
        (l = (l + Math.imul(C, Ne)) | 0),
        (S = (S + Math.imul(C, Le)) | 0);
      var rr = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (rr >>> 26)) | 0),
        (rr &= 67108863),
        (v = Math.imul(fe, Ee)),
        (l = Math.imul(fe, Se)),
        (l = (l + Math.imul(pe, Ee)) | 0),
        (S = Math.imul(pe, Se)),
        (v = (v + Math.imul(_e, Re)) | 0),
        (l = (l + Math.imul(_e, Me)) | 0),
        (l = (l + Math.imul(me, Re)) | 0),
        (S = (S + Math.imul(me, Me)) | 0),
        (v = (v + Math.imul(Z, ke)) | 0),
        (l = (l + Math.imul(Z, Ce)) | 0),
        (l = (l + Math.imul(le, ke)) | 0),
        (S = (S + Math.imul(le, Ce)) | 0),
        (v = (v + Math.imul(j, Ie)) | 0),
        (l = (l + Math.imul(j, xe)) | 0),
        (l = (l + Math.imul(K, Ie)) | 0),
        (S = (S + Math.imul(K, xe)) | 0),
        (v = (v + Math.imul(y, Ae)) | 0),
        (l = (l + Math.imul(y, Te)) | 0),
        (l = (l + Math.imul(w, Ae)) | 0),
        (S = (S + Math.imul(w, Te)) | 0),
        (v = (v + Math.imul($, Ne)) | 0),
        (l = (l + Math.imul($, Le)) | 0),
        (l = (l + Math.imul(H, Ne)) | 0),
        (S = (S + Math.imul(H, Le)) | 0),
        (v = (v + Math.imul(V, Pe)) | 0),
        (l = (l + Math.imul(V, Oe)) | 0),
        (l = (l + Math.imul(C, Pe)) | 0),
        (S = (S + Math.imul(C, Oe)) | 0);
      var nr = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (nr >>> 26)) | 0),
        (nr &= 67108863),
        (v = Math.imul(he, Ee)),
        (l = Math.imul(he, Se)),
        (l = (l + Math.imul(ue, Ee)) | 0),
        (S = Math.imul(ue, Se)),
        (v = (v + Math.imul(fe, Re)) | 0),
        (l = (l + Math.imul(fe, Me)) | 0),
        (l = (l + Math.imul(pe, Re)) | 0),
        (S = (S + Math.imul(pe, Me)) | 0),
        (v = (v + Math.imul(_e, ke)) | 0),
        (l = (l + Math.imul(_e, Ce)) | 0),
        (l = (l + Math.imul(me, ke)) | 0),
        (S = (S + Math.imul(me, Ce)) | 0),
        (v = (v + Math.imul(Z, Ie)) | 0),
        (l = (l + Math.imul(Z, xe)) | 0),
        (l = (l + Math.imul(le, Ie)) | 0),
        (S = (S + Math.imul(le, xe)) | 0),
        (v = (v + Math.imul(j, Ae)) | 0),
        (l = (l + Math.imul(j, Te)) | 0),
        (l = (l + Math.imul(K, Ae)) | 0),
        (S = (S + Math.imul(K, Te)) | 0),
        (v = (v + Math.imul(y, Ne)) | 0),
        (l = (l + Math.imul(y, Le)) | 0),
        (l = (l + Math.imul(w, Ne)) | 0),
        (S = (S + Math.imul(w, Le)) | 0),
        (v = (v + Math.imul($, Pe)) | 0),
        (l = (l + Math.imul($, Oe)) | 0),
        (l = (l + Math.imul(H, Pe)) | 0),
        (S = (S + Math.imul(H, Oe)) | 0),
        (v = (v + Math.imul(V, $e)) | 0),
        (l = (l + Math.imul(V, Be)) | 0),
        (l = (l + Math.imul(C, $e)) | 0),
        (S = (S + Math.imul(C, Be)) | 0);
      var ir = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (ir >>> 26)) | 0),
        (ir &= 67108863),
        (v = Math.imul(ve, Ee)),
        (l = Math.imul(ve, Se)),
        (l = (l + Math.imul(be, Ee)) | 0),
        (S = Math.imul(be, Se)),
        (v = (v + Math.imul(he, Re)) | 0),
        (l = (l + Math.imul(he, Me)) | 0),
        (l = (l + Math.imul(ue, Re)) | 0),
        (S = (S + Math.imul(ue, Me)) | 0),
        (v = (v + Math.imul(fe, ke)) | 0),
        (l = (l + Math.imul(fe, Ce)) | 0),
        (l = (l + Math.imul(pe, ke)) | 0),
        (S = (S + Math.imul(pe, Ce)) | 0),
        (v = (v + Math.imul(_e, Ie)) | 0),
        (l = (l + Math.imul(_e, xe)) | 0),
        (l = (l + Math.imul(me, Ie)) | 0),
        (S = (S + Math.imul(me, xe)) | 0),
        (v = (v + Math.imul(Z, Ae)) | 0),
        (l = (l + Math.imul(Z, Te)) | 0),
        (l = (l + Math.imul(le, Ae)) | 0),
        (S = (S + Math.imul(le, Te)) | 0),
        (v = (v + Math.imul(j, Ne)) | 0),
        (l = (l + Math.imul(j, Le)) | 0),
        (l = (l + Math.imul(K, Ne)) | 0),
        (S = (S + Math.imul(K, Le)) | 0),
        (v = (v + Math.imul(y, Pe)) | 0),
        (l = (l + Math.imul(y, Oe)) | 0),
        (l = (l + Math.imul(w, Pe)) | 0),
        (S = (S + Math.imul(w, Oe)) | 0),
        (v = (v + Math.imul($, $e)) | 0),
        (l = (l + Math.imul($, Be)) | 0),
        (l = (l + Math.imul(H, $e)) | 0),
        (S = (S + Math.imul(H, Be)) | 0),
        (v = (v + Math.imul(V, De)) | 0),
        (l = (l + Math.imul(V, Fe)) | 0),
        (l = (l + Math.imul(C, De)) | 0),
        (S = (S + Math.imul(C, Fe)) | 0);
      var sr = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (sr >>> 26)) | 0),
        (sr &= 67108863),
        (v = Math.imul(ye, Ee)),
        (l = Math.imul(ye, Se)),
        (l = (l + Math.imul(we, Ee)) | 0),
        (S = Math.imul(we, Se)),
        (v = (v + Math.imul(ve, Re)) | 0),
        (l = (l + Math.imul(ve, Me)) | 0),
        (l = (l + Math.imul(be, Re)) | 0),
        (S = (S + Math.imul(be, Me)) | 0),
        (v = (v + Math.imul(he, ke)) | 0),
        (l = (l + Math.imul(he, Ce)) | 0),
        (l = (l + Math.imul(ue, ke)) | 0),
        (S = (S + Math.imul(ue, Ce)) | 0),
        (v = (v + Math.imul(fe, Ie)) | 0),
        (l = (l + Math.imul(fe, xe)) | 0),
        (l = (l + Math.imul(pe, Ie)) | 0),
        (S = (S + Math.imul(pe, xe)) | 0),
        (v = (v + Math.imul(_e, Ae)) | 0),
        (l = (l + Math.imul(_e, Te)) | 0),
        (l = (l + Math.imul(me, Ae)) | 0),
        (S = (S + Math.imul(me, Te)) | 0),
        (v = (v + Math.imul(Z, Ne)) | 0),
        (l = (l + Math.imul(Z, Le)) | 0),
        (l = (l + Math.imul(le, Ne)) | 0),
        (S = (S + Math.imul(le, Le)) | 0),
        (v = (v + Math.imul(j, Pe)) | 0),
        (l = (l + Math.imul(j, Oe)) | 0),
        (l = (l + Math.imul(K, Pe)) | 0),
        (S = (S + Math.imul(K, Oe)) | 0),
        (v = (v + Math.imul(y, $e)) | 0),
        (l = (l + Math.imul(y, Be)) | 0),
        (l = (l + Math.imul(w, $e)) | 0),
        (S = (S + Math.imul(w, Be)) | 0),
        (v = (v + Math.imul($, De)) | 0),
        (l = (l + Math.imul($, Fe)) | 0),
        (l = (l + Math.imul(H, De)) | 0),
        (S = (S + Math.imul(H, Fe)) | 0),
        (v = (v + Math.imul(V, je)) | 0),
        (l = (l + Math.imul(V, He)) | 0),
        (l = (l + Math.imul(C, je)) | 0),
        (S = (S + Math.imul(C, He)) | 0);
      var or = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (or >>> 26)) | 0),
        (or &= 67108863),
        (v = Math.imul(ye, Re)),
        (l = Math.imul(ye, Me)),
        (l = (l + Math.imul(we, Re)) | 0),
        (S = Math.imul(we, Me)),
        (v = (v + Math.imul(ve, ke)) | 0),
        (l = (l + Math.imul(ve, Ce)) | 0),
        (l = (l + Math.imul(be, ke)) | 0),
        (S = (S + Math.imul(be, Ce)) | 0),
        (v = (v + Math.imul(he, Ie)) | 0),
        (l = (l + Math.imul(he, xe)) | 0),
        (l = (l + Math.imul(ue, Ie)) | 0),
        (S = (S + Math.imul(ue, xe)) | 0),
        (v = (v + Math.imul(fe, Ae)) | 0),
        (l = (l + Math.imul(fe, Te)) | 0),
        (l = (l + Math.imul(pe, Ae)) | 0),
        (S = (S + Math.imul(pe, Te)) | 0),
        (v = (v + Math.imul(_e, Ne)) | 0),
        (l = (l + Math.imul(_e, Le)) | 0),
        (l = (l + Math.imul(me, Ne)) | 0),
        (S = (S + Math.imul(me, Le)) | 0),
        (v = (v + Math.imul(Z, Pe)) | 0),
        (l = (l + Math.imul(Z, Oe)) | 0),
        (l = (l + Math.imul(le, Pe)) | 0),
        (S = (S + Math.imul(le, Oe)) | 0),
        (v = (v + Math.imul(j, $e)) | 0),
        (l = (l + Math.imul(j, Be)) | 0),
        (l = (l + Math.imul(K, $e)) | 0),
        (S = (S + Math.imul(K, Be)) | 0),
        (v = (v + Math.imul(y, De)) | 0),
        (l = (l + Math.imul(y, Fe)) | 0),
        (l = (l + Math.imul(w, De)) | 0),
        (S = (S + Math.imul(w, Fe)) | 0),
        (v = (v + Math.imul($, je)) | 0),
        (l = (l + Math.imul($, He)) | 0),
        (l = (l + Math.imul(H, je)) | 0),
        (S = (S + Math.imul(H, He)) | 0);
      var ar = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (ar >>> 26)) | 0),
        (ar &= 67108863),
        (v = Math.imul(ye, ke)),
        (l = Math.imul(ye, Ce)),
        (l = (l + Math.imul(we, ke)) | 0),
        (S = Math.imul(we, Ce)),
        (v = (v + Math.imul(ve, Ie)) | 0),
        (l = (l + Math.imul(ve, xe)) | 0),
        (l = (l + Math.imul(be, Ie)) | 0),
        (S = (S + Math.imul(be, xe)) | 0),
        (v = (v + Math.imul(he, Ae)) | 0),
        (l = (l + Math.imul(he, Te)) | 0),
        (l = (l + Math.imul(ue, Ae)) | 0),
        (S = (S + Math.imul(ue, Te)) | 0),
        (v = (v + Math.imul(fe, Ne)) | 0),
        (l = (l + Math.imul(fe, Le)) | 0),
        (l = (l + Math.imul(pe, Ne)) | 0),
        (S = (S + Math.imul(pe, Le)) | 0),
        (v = (v + Math.imul(_e, Pe)) | 0),
        (l = (l + Math.imul(_e, Oe)) | 0),
        (l = (l + Math.imul(me, Pe)) | 0),
        (S = (S + Math.imul(me, Oe)) | 0),
        (v = (v + Math.imul(Z, $e)) | 0),
        (l = (l + Math.imul(Z, Be)) | 0),
        (l = (l + Math.imul(le, $e)) | 0),
        (S = (S + Math.imul(le, Be)) | 0),
        (v = (v + Math.imul(j, De)) | 0),
        (l = (l + Math.imul(j, Fe)) | 0),
        (l = (l + Math.imul(K, De)) | 0),
        (S = (S + Math.imul(K, Fe)) | 0),
        (v = (v + Math.imul(y, je)) | 0),
        (l = (l + Math.imul(y, He)) | 0),
        (l = (l + Math.imul(w, je)) | 0),
        (S = (S + Math.imul(w, He)) | 0);
      var cr = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (cr >>> 26)) | 0),
        (cr &= 67108863),
        (v = Math.imul(ye, Ie)),
        (l = Math.imul(ye, xe)),
        (l = (l + Math.imul(we, Ie)) | 0),
        (S = Math.imul(we, xe)),
        (v = (v + Math.imul(ve, Ae)) | 0),
        (l = (l + Math.imul(ve, Te)) | 0),
        (l = (l + Math.imul(be, Ae)) | 0),
        (S = (S + Math.imul(be, Te)) | 0),
        (v = (v + Math.imul(he, Ne)) | 0),
        (l = (l + Math.imul(he, Le)) | 0),
        (l = (l + Math.imul(ue, Ne)) | 0),
        (S = (S + Math.imul(ue, Le)) | 0),
        (v = (v + Math.imul(fe, Pe)) | 0),
        (l = (l + Math.imul(fe, Oe)) | 0),
        (l = (l + Math.imul(pe, Pe)) | 0),
        (S = (S + Math.imul(pe, Oe)) | 0),
        (v = (v + Math.imul(_e, $e)) | 0),
        (l = (l + Math.imul(_e, Be)) | 0),
        (l = (l + Math.imul(me, $e)) | 0),
        (S = (S + Math.imul(me, Be)) | 0),
        (v = (v + Math.imul(Z, De)) | 0),
        (l = (l + Math.imul(Z, Fe)) | 0),
        (l = (l + Math.imul(le, De)) | 0),
        (S = (S + Math.imul(le, Fe)) | 0),
        (v = (v + Math.imul(j, je)) | 0),
        (l = (l + Math.imul(j, He)) | 0),
        (l = (l + Math.imul(K, je)) | 0),
        (S = (S + Math.imul(K, He)) | 0);
      var lr = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (lr >>> 26)) | 0),
        (lr &= 67108863),
        (v = Math.imul(ye, Ae)),
        (l = Math.imul(ye, Te)),
        (l = (l + Math.imul(we, Ae)) | 0),
        (S = Math.imul(we, Te)),
        (v = (v + Math.imul(ve, Ne)) | 0),
        (l = (l + Math.imul(ve, Le)) | 0),
        (l = (l + Math.imul(be, Ne)) | 0),
        (S = (S + Math.imul(be, Le)) | 0),
        (v = (v + Math.imul(he, Pe)) | 0),
        (l = (l + Math.imul(he, Oe)) | 0),
        (l = (l + Math.imul(ue, Pe)) | 0),
        (S = (S + Math.imul(ue, Oe)) | 0),
        (v = (v + Math.imul(fe, $e)) | 0),
        (l = (l + Math.imul(fe, Be)) | 0),
        (l = (l + Math.imul(pe, $e)) | 0),
        (S = (S + Math.imul(pe, Be)) | 0),
        (v = (v + Math.imul(_e, De)) | 0),
        (l = (l + Math.imul(_e, Fe)) | 0),
        (l = (l + Math.imul(me, De)) | 0),
        (S = (S + Math.imul(me, Fe)) | 0),
        (v = (v + Math.imul(Z, je)) | 0),
        (l = (l + Math.imul(Z, He)) | 0),
        (l = (l + Math.imul(le, je)) | 0),
        (S = (S + Math.imul(le, He)) | 0);
      var ur = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (ur >>> 26)) | 0),
        (ur &= 67108863),
        (v = Math.imul(ye, Ne)),
        (l = Math.imul(ye, Le)),
        (l = (l + Math.imul(we, Ne)) | 0),
        (S = Math.imul(we, Le)),
        (v = (v + Math.imul(ve, Pe)) | 0),
        (l = (l + Math.imul(ve, Oe)) | 0),
        (l = (l + Math.imul(be, Pe)) | 0),
        (S = (S + Math.imul(be, Oe)) | 0),
        (v = (v + Math.imul(he, $e)) | 0),
        (l = (l + Math.imul(he, Be)) | 0),
        (l = (l + Math.imul(ue, $e)) | 0),
        (S = (S + Math.imul(ue, Be)) | 0),
        (v = (v + Math.imul(fe, De)) | 0),
        (l = (l + Math.imul(fe, Fe)) | 0),
        (l = (l + Math.imul(pe, De)) | 0),
        (S = (S + Math.imul(pe, Fe)) | 0),
        (v = (v + Math.imul(_e, je)) | 0),
        (l = (l + Math.imul(_e, He)) | 0),
        (l = (l + Math.imul(me, je)) | 0),
        (S = (S + Math.imul(me, He)) | 0);
      var Ls = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (Ls >>> 26)) | 0),
        (Ls &= 67108863),
        (v = Math.imul(ye, Pe)),
        (l = Math.imul(ye, Oe)),
        (l = (l + Math.imul(we, Pe)) | 0),
        (S = Math.imul(we, Oe)),
        (v = (v + Math.imul(ve, $e)) | 0),
        (l = (l + Math.imul(ve, Be)) | 0),
        (l = (l + Math.imul(be, $e)) | 0),
        (S = (S + Math.imul(be, Be)) | 0),
        (v = (v + Math.imul(he, De)) | 0),
        (l = (l + Math.imul(he, Fe)) | 0),
        (l = (l + Math.imul(ue, De)) | 0),
        (S = (S + Math.imul(ue, Fe)) | 0),
        (v = (v + Math.imul(fe, je)) | 0),
        (l = (l + Math.imul(fe, He)) | 0),
        (l = (l + Math.imul(pe, je)) | 0),
        (S = (S + Math.imul(pe, He)) | 0);
      var Ps = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (Ps >>> 26)) | 0),
        (Ps &= 67108863),
        (v = Math.imul(ye, $e)),
        (l = Math.imul(ye, Be)),
        (l = (l + Math.imul(we, $e)) | 0),
        (S = Math.imul(we, Be)),
        (v = (v + Math.imul(ve, De)) | 0),
        (l = (l + Math.imul(ve, Fe)) | 0),
        (l = (l + Math.imul(be, De)) | 0),
        (S = (S + Math.imul(be, Fe)) | 0),
        (v = (v + Math.imul(he, je)) | 0),
        (l = (l + Math.imul(he, He)) | 0),
        (l = (l + Math.imul(ue, je)) | 0),
        (S = (S + Math.imul(ue, He)) | 0);
      var Os = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + (Os >>> 26)) | 0),
        (Os &= 67108863),
        (v = Math.imul(ye, De)),
        (l = Math.imul(ye, Fe)),
        (l = (l + Math.imul(we, De)) | 0),
        (S = Math.imul(we, Fe)),
        (v = (v + Math.imul(ve, je)) | 0),
        (l = (l + Math.imul(ve, He)) | 0),
        (l = (l + Math.imul(be, je)) | 0),
        (S = (S + Math.imul(be, He)) | 0);
      var $s = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      (x = (((S + (l >>> 13)) | 0) + ($s >>> 26)) | 0),
        ($s &= 67108863),
        (v = Math.imul(ye, je)),
        (l = Math.imul(ye, He)),
        (l = (l + Math.imul(we, je)) | 0),
        (S = Math.imul(we, He));
      var Bs = (((x + v) | 0) + ((l & 8191) << 13)) | 0;
      return (
        (x = (((S + (l >>> 13)) | 0) + (Bs >>> 26)) | 0),
        (Bs &= 67108863),
        (R[0] = Qt),
        (R[1] = Yt),
        (R[2] = Xt),
        (R[3] = er),
        (R[4] = tr),
        (R[5] = rr),
        (R[6] = nr),
        (R[7] = ir),
        (R[8] = sr),
        (R[9] = or),
        (R[10] = ar),
        (R[11] = cr),
        (R[12] = lr),
        (R[13] = ur),
        (R[14] = Ls),
        (R[15] = Ps),
        (R[16] = Os),
        (R[17] = $s),
        (R[18] = Bs),
        x !== 0 && ((R[19] = x), f.length++),
        f
      );
    };
    Math.imul || (I = M);
    function N(m, o, h) {
      (h.negative = o.negative ^ m.negative), (h.length = m.length + o.length);
      for (var f = 0, _ = 0, b = 0; b < h.length - 1; b++) {
        var R = _;
        _ = 0;
        for (
          var x = f & 67108863,
            v = Math.min(b, o.length - 1),
            l = Math.max(0, b - m.length + 1);
          l <= v;
          l++
        ) {
          var S = b - l,
            W = m.words[S] | 0,
            V = o.words[l] | 0,
            C = W * V,
            T = C & 67108863;
          (R = (R + ((C / 67108864) | 0)) | 0),
            (T = (T + x) | 0),
            (x = T & 67108863),
            (R = (R + (T >>> 26)) | 0),
            (_ += R >>> 26),
            (R &= 67108863);
        }
        (h.words[b] = x), (f = R), (R = _);
      }
      return f !== 0 ? (h.words[b] = f) : h.length--, h._strip();
    }
    function B(m, o, h) {
      return N(m, o, h);
    }
    (s.prototype.mulTo = function (o, h) {
      var f,
        _ = this.length + o.length;
      return (
        this.length === 10 && o.length === 10
          ? (f = I(this, o, h))
          : _ < 63
          ? (f = M(this, o, h))
          : _ < 1024
          ? (f = N(this, o, h))
          : (f = B(this, o, h)),
        f
      );
    }),
      (s.prototype.mul = function (o) {
        var h = new s(null);
        return (h.words = new Array(this.length + o.length)), this.mulTo(o, h);
      }),
      (s.prototype.mulf = function (o) {
        var h = new s(null);
        return (h.words = new Array(this.length + o.length)), B(this, o, h);
      }),
      (s.prototype.imul = function (o) {
        return this.clone().mulTo(o, this);
      }),
      (s.prototype.imuln = function (o) {
        var h = o < 0;
        h && (o = -o), n(typeof o == "number"), n(o < 67108864);
        for (var f = 0, _ = 0; _ < this.length; _++) {
          var b = (this.words[_] | 0) * o,
            R = (b & 67108863) + (f & 67108863);
          (f >>= 26),
            (f += (b / 67108864) | 0),
            (f += R >>> 26),
            (this.words[_] = R & 67108863);
        }
        return (
          f !== 0 && ((this.words[_] = f), this.length++),
          h ? this.ineg() : this
        );
      }),
      (s.prototype.muln = function (o) {
        return this.clone().imuln(o);
      }),
      (s.prototype.sqr = function () {
        return this.mul(this);
      }),
      (s.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (s.prototype.pow = function (o) {
        var h = L(o);
        if (h.length === 0) return new s(1);
        for (var f = this, _ = 0; _ < h.length && h[_] === 0; _++, f = f.sqr());
        if (++_ < h.length)
          for (var b = f.sqr(); _ < h.length; _++, b = b.sqr())
            h[_] !== 0 && (f = f.mul(b));
        return f;
      }),
      (s.prototype.iushln = function (o) {
        n(typeof o == "number" && o >= 0);
        var h = o % 26,
          f = (o - h) / 26,
          _ = (67108863 >>> (26 - h)) << (26 - h),
          b;
        if (h !== 0) {
          var R = 0;
          for (b = 0; b < this.length; b++) {
            var x = this.words[b] & _,
              v = ((this.words[b] | 0) - x) << h;
            (this.words[b] = v | R), (R = x >>> (26 - h));
          }
          R && ((this.words[b] = R), this.length++);
        }
        if (f !== 0) {
          for (b = this.length - 1; b >= 0; b--)
            this.words[b + f] = this.words[b];
          for (b = 0; b < f; b++) this.words[b] = 0;
          this.length += f;
        }
        return this._strip();
      }),
      (s.prototype.ishln = function (o) {
        return n(this.negative === 0), this.iushln(o);
      }),
      (s.prototype.iushrn = function (o, h, f) {
        n(typeof o == "number" && o >= 0);
        var _;
        h ? (_ = (h - (h % 26)) / 26) : (_ = 0);
        var b = o % 26,
          R = Math.min((o - b) / 26, this.length),
          x = 67108863 ^ ((67108863 >>> b) << b),
          v = f;
        if (((_ -= R), (_ = Math.max(0, _)), v)) {
          for (var l = 0; l < R; l++) v.words[l] = this.words[l];
          v.length = R;
        }
        if (R !== 0)
          if (this.length > R)
            for (this.length -= R, l = 0; l < this.length; l++)
              this.words[l] = this.words[l + R];
          else (this.words[0] = 0), (this.length = 1);
        var S = 0;
        for (l = this.length - 1; l >= 0 && (S !== 0 || l >= _); l--) {
          var W = this.words[l] | 0;
          (this.words[l] = (S << (26 - b)) | (W >>> b)), (S = W & x);
        }
        return (
          v && S !== 0 && (v.words[v.length++] = S),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (s.prototype.ishrn = function (o, h, f) {
        return n(this.negative === 0), this.iushrn(o, h, f);
      }),
      (s.prototype.shln = function (o) {
        return this.clone().ishln(o);
      }),
      (s.prototype.ushln = function (o) {
        return this.clone().iushln(o);
      }),
      (s.prototype.shrn = function (o) {
        return this.clone().ishrn(o);
      }),
      (s.prototype.ushrn = function (o) {
        return this.clone().iushrn(o);
      }),
      (s.prototype.testn = function (o) {
        n(typeof o == "number" && o >= 0);
        var h = o % 26,
          f = (o - h) / 26,
          _ = 1 << h;
        if (this.length <= f) return !1;
        var b = this.words[f];
        return !!(b & _);
      }),
      (s.prototype.imaskn = function (o) {
        n(typeof o == "number" && o >= 0);
        var h = o % 26,
          f = (o - h) / 26;
        if (
          (n(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= f)
        )
          return this;
        if (
          (h !== 0 && f++, (this.length = Math.min(f, this.length)), h !== 0)
        ) {
          var _ = 67108863 ^ ((67108863 >>> h) << h);
          this.words[this.length - 1] &= _;
        }
        return this._strip();
      }),
      (s.prototype.maskn = function (o) {
        return this.clone().imaskn(o);
      }),
      (s.prototype.iaddn = function (o) {
        return (
          n(typeof o == "number"),
          n(o < 67108864),
          o < 0
            ? this.isubn(-o)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= o
              ? ((this.words[0] = o - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(o), (this.negative = 1), this)
            : this._iaddn(o)
        );
      }),
      (s.prototype._iaddn = function (o) {
        this.words[0] += o;
        for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
          (this.words[h] -= 67108864),
            h === this.length - 1
              ? (this.words[h + 1] = 1)
              : this.words[h + 1]++;
        return (this.length = Math.max(this.length, h + 1)), this;
      }),
      (s.prototype.isubn = function (o) {
        if ((n(typeof o == "number"), n(o < 67108864), o < 0))
          return this.iaddn(-o);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(o), (this.negative = 1), this;
        if (((this.words[0] -= o), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var h = 0; h < this.length && this.words[h] < 0; h++)
            (this.words[h] += 67108864), (this.words[h + 1] -= 1);
        return this._strip();
      }),
      (s.prototype.addn = function (o) {
        return this.clone().iaddn(o);
      }),
      (s.prototype.subn = function (o) {
        return this.clone().isubn(o);
      }),
      (s.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (s.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype._ishlnsubmul = function (o, h, f) {
        var _ = o.length + f,
          b;
        this._expand(_);
        var R,
          x = 0;
        for (b = 0; b < o.length; b++) {
          R = (this.words[b + f] | 0) + x;
          var v = (o.words[b] | 0) * h;
          (R -= v & 67108863),
            (x = (R >> 26) - ((v / 67108864) | 0)),
            (this.words[b + f] = R & 67108863);
        }
        for (; b < this.length - f; b++)
          (R = (this.words[b + f] | 0) + x),
            (x = R >> 26),
            (this.words[b + f] = R & 67108863);
        if (x === 0) return this._strip();
        for (n(x === -1), x = 0, b = 0; b < this.length; b++)
          (R = -(this.words[b] | 0) + x),
            (x = R >> 26),
            (this.words[b] = R & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (s.prototype._wordDiv = function (o, h) {
        var f = this.length - o.length,
          _ = this.clone(),
          b = o,
          R = b.words[b.length - 1] | 0,
          x = this._countBits(R);
        (f = 26 - x),
          f !== 0 &&
            ((b = b.ushln(f)), _.iushln(f), (R = b.words[b.length - 1] | 0));
        var v = _.length - b.length,
          l;
        if (h !== "mod") {
          (l = new s(null)),
            (l.length = v + 1),
            (l.words = new Array(l.length));
          for (var S = 0; S < l.length; S++) l.words[S] = 0;
        }
        var W = _.clone()._ishlnsubmul(b, 1, v);
        W.negative === 0 && ((_ = W), l && (l.words[v] = 1));
        for (var V = v - 1; V >= 0; V--) {
          var C =
            (_.words[b.length + V] | 0) * 67108864 +
            (_.words[b.length + V - 1] | 0);
          for (
            C = Math.min((C / R) | 0, 67108863), _._ishlnsubmul(b, C, V);
            _.negative !== 0;

          )
            C--,
              (_.negative = 0),
              _._ishlnsubmul(b, 1, V),
              _.isZero() || (_.negative ^= 1);
          l && (l.words[V] = C);
        }
        return (
          l && l._strip(),
          _._strip(),
          h !== "div" && f !== 0 && _.iushrn(f),
          { div: l || null, mod: _ }
        );
      }),
      (s.prototype.divmod = function (o, h, f) {
        if ((n(!o.isZero()), this.isZero()))
          return { div: new s(0), mod: new s(0) };
        var _, b, R;
        return this.negative !== 0 && o.negative === 0
          ? ((R = this.neg().divmod(o, h)),
            h !== "mod" && (_ = R.div.neg()),
            h !== "div" &&
              ((b = R.mod.neg()), f && b.negative !== 0 && b.iadd(o)),
            { div: _, mod: b })
          : this.negative === 0 && o.negative !== 0
          ? ((R = this.divmod(o.neg(), h)),
            h !== "mod" && (_ = R.div.neg()),
            { div: _, mod: R.mod })
          : this.negative & o.negative
          ? ((R = this.neg().divmod(o.neg(), h)),
            h !== "div" &&
              ((b = R.mod.neg()), f && b.negative !== 0 && b.isub(o)),
            { div: R.div, mod: b })
          : o.length > this.length || this.cmp(o) < 0
          ? { div: new s(0), mod: this }
          : o.length === 1
          ? h === "div"
            ? { div: this.divn(o.words[0]), mod: null }
            : h === "mod"
            ? { div: null, mod: new s(this.modrn(o.words[0])) }
            : { div: this.divn(o.words[0]), mod: new s(this.modrn(o.words[0])) }
          : this._wordDiv(o, h);
      }),
      (s.prototype.div = function (o) {
        return this.divmod(o, "div", !1).div;
      }),
      (s.prototype.mod = function (o) {
        return this.divmod(o, "mod", !1).mod;
      }),
      (s.prototype.umod = function (o) {
        return this.divmod(o, "mod", !0).mod;
      }),
      (s.prototype.divRound = function (o) {
        var h = this.divmod(o);
        if (h.mod.isZero()) return h.div;
        var f = h.div.negative !== 0 ? h.mod.isub(o) : h.mod,
          _ = o.ushrn(1),
          b = o.andln(1),
          R = f.cmp(_);
        return R < 0 || (b === 1 && R === 0)
          ? h.div
          : h.div.negative !== 0
          ? h.div.isubn(1)
          : h.div.iaddn(1);
      }),
      (s.prototype.modrn = function (o) {
        var h = o < 0;
        h && (o = -o), n(o <= 67108863);
        for (var f = (1 << 26) % o, _ = 0, b = this.length - 1; b >= 0; b--)
          _ = (f * _ + (this.words[b] | 0)) % o;
        return h ? -_ : _;
      }),
      (s.prototype.modn = function (o) {
        return this.modrn(o);
      }),
      (s.prototype.idivn = function (o) {
        var h = o < 0;
        h && (o = -o), n(o <= 67108863);
        for (var f = 0, _ = this.length - 1; _ >= 0; _--) {
          var b = (this.words[_] | 0) + f * 67108864;
          (this.words[_] = (b / o) | 0), (f = b % o);
        }
        return this._strip(), h ? this.ineg() : this;
      }),
      (s.prototype.divn = function (o) {
        return this.clone().idivn(o);
      }),
      (s.prototype.egcd = function (o) {
        n(o.negative === 0), n(!o.isZero());
        var h = this,
          f = o.clone();
        h.negative !== 0 ? (h = h.umod(o)) : (h = h.clone());
        for (
          var _ = new s(1), b = new s(0), R = new s(0), x = new s(1), v = 0;
          h.isEven() && f.isEven();

        )
          h.iushrn(1), f.iushrn(1), ++v;
        for (var l = f.clone(), S = h.clone(); !h.isZero(); ) {
          for (var W = 0, V = 1; !(h.words[0] & V) && W < 26; ++W, V <<= 1);
          if (W > 0)
            for (h.iushrn(W); W-- > 0; )
              (_.isOdd() || b.isOdd()) && (_.iadd(l), b.isub(S)),
                _.iushrn(1),
                b.iushrn(1);
          for (var C = 0, T = 1; !(f.words[0] & T) && C < 26; ++C, T <<= 1);
          if (C > 0)
            for (f.iushrn(C); C-- > 0; )
              (R.isOdd() || x.isOdd()) && (R.iadd(l), x.isub(S)),
                R.iushrn(1),
                x.iushrn(1);
          h.cmp(f) >= 0
            ? (h.isub(f), _.isub(R), b.isub(x))
            : (f.isub(h), R.isub(_), x.isub(b));
        }
        return { a: R, b: x, gcd: f.iushln(v) };
      }),
      (s.prototype._invmp = function (o) {
        n(o.negative === 0), n(!o.isZero());
        var h = this,
          f = o.clone();
        h.negative !== 0 ? (h = h.umod(o)) : (h = h.clone());
        for (
          var _ = new s(1), b = new s(0), R = f.clone();
          h.cmpn(1) > 0 && f.cmpn(1) > 0;

        ) {
          for (var x = 0, v = 1; !(h.words[0] & v) && x < 26; ++x, v <<= 1);
          if (x > 0)
            for (h.iushrn(x); x-- > 0; ) _.isOdd() && _.iadd(R), _.iushrn(1);
          for (var l = 0, S = 1; !(f.words[0] & S) && l < 26; ++l, S <<= 1);
          if (l > 0)
            for (f.iushrn(l); l-- > 0; ) b.isOdd() && b.iadd(R), b.iushrn(1);
          h.cmp(f) >= 0 ? (h.isub(f), _.isub(b)) : (f.isub(h), b.isub(_));
        }
        var W;
        return (
          h.cmpn(1) === 0 ? (W = _) : (W = b), W.cmpn(0) < 0 && W.iadd(o), W
        );
      }),
      (s.prototype.gcd = function (o) {
        if (this.isZero()) return o.abs();
        if (o.isZero()) return this.abs();
        var h = this.clone(),
          f = o.clone();
        (h.negative = 0), (f.negative = 0);
        for (var _ = 0; h.isEven() && f.isEven(); _++) h.iushrn(1), f.iushrn(1);
        do {
          for (; h.isEven(); ) h.iushrn(1);
          for (; f.isEven(); ) f.iushrn(1);
          var b = h.cmp(f);
          if (b < 0) {
            var R = h;
            (h = f), (f = R);
          } else if (b === 0 || f.cmpn(1) === 0) break;
          h.isub(f);
        } while (!0);
        return f.iushln(_);
      }),
      (s.prototype.invm = function (o) {
        return this.egcd(o).a.umod(o);
      }),
      (s.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (s.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s.prototype.andln = function (o) {
        return this.words[0] & o;
      }),
      (s.prototype.bincn = function (o) {
        n(typeof o == "number");
        var h = o % 26,
          f = (o - h) / 26,
          _ = 1 << h;
        if (this.length <= f)
          return this._expand(f + 1), (this.words[f] |= _), this;
        for (var b = _, R = f; b !== 0 && R < this.length; R++) {
          var x = this.words[R] | 0;
          (x += b), (b = x >>> 26), (x &= 67108863), (this.words[R] = x);
        }
        return b !== 0 && ((this.words[R] = b), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (o) {
        var h = o < 0;
        if (this.negative !== 0 && !h) return -1;
        if (this.negative === 0 && h) return 1;
        this._strip();
        var f;
        if (this.length > 1) f = 1;
        else {
          h && (o = -o), n(o <= 67108863, "Number is too big");
          var _ = this.words[0] | 0;
          f = _ === o ? 0 : _ < o ? -1 : 1;
        }
        return this.negative !== 0 ? -f | 0 : f;
      }),
      (s.prototype.cmp = function (o) {
        if (this.negative !== 0 && o.negative === 0) return -1;
        if (this.negative === 0 && o.negative !== 0) return 1;
        var h = this.ucmp(o);
        return this.negative !== 0 ? -h | 0 : h;
      }),
      (s.prototype.ucmp = function (o) {
        if (this.length > o.length) return 1;
        if (this.length < o.length) return -1;
        for (var h = 0, f = this.length - 1; f >= 0; f--) {
          var _ = this.words[f] | 0,
            b = o.words[f] | 0;
          if (_ !== b) {
            _ < b ? (h = -1) : _ > b && (h = 1);
            break;
          }
        }
        return h;
      }),
      (s.prototype.gtn = function (o) {
        return this.cmpn(o) === 1;
      }),
      (s.prototype.gt = function (o) {
        return this.cmp(o) === 1;
      }),
      (s.prototype.gten = function (o) {
        return this.cmpn(o) >= 0;
      }),
      (s.prototype.gte = function (o) {
        return this.cmp(o) >= 0;
      }),
      (s.prototype.ltn = function (o) {
        return this.cmpn(o) === -1;
      }),
      (s.prototype.lt = function (o) {
        return this.cmp(o) === -1;
      }),
      (s.prototype.lten = function (o) {
        return this.cmpn(o) <= 0;
      }),
      (s.prototype.lte = function (o) {
        return this.cmp(o) <= 0;
      }),
      (s.prototype.eqn = function (o) {
        return this.cmpn(o) === 0;
      }),
      (s.prototype.eq = function (o) {
        return this.cmp(o) === 0;
      }),
      (s.red = function (o) {
        return new Q(o);
      }),
      (s.prototype.toRed = function (o) {
        return (
          n(!this.red, "Already a number in reduction context"),
          n(this.negative === 0, "red works only with positives"),
          o.convertTo(this)._forceRed(o)
        );
      }),
      (s.prototype.fromRed = function () {
        return (
          n(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (s.prototype._forceRed = function (o) {
        return (this.red = o), this;
      }),
      (s.prototype.forceRed = function (o) {
        return (
          n(!this.red, "Already a number in reduction context"),
          this._forceRed(o)
        );
      }),
      (s.prototype.redAdd = function (o) {
        return (
          n(this.red, "redAdd works only with red numbers"),
          this.red.add(this, o)
        );
      }),
      (s.prototype.redIAdd = function (o) {
        return (
          n(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, o)
        );
      }),
      (s.prototype.redSub = function (o) {
        return (
          n(this.red, "redSub works only with red numbers"),
          this.red.sub(this, o)
        );
      }),
      (s.prototype.redISub = function (o) {
        return (
          n(this.red, "redISub works only with red numbers"),
          this.red.isub(this, o)
        );
      }),
      (s.prototype.redShl = function (o) {
        return (
          n(this.red, "redShl works only with red numbers"),
          this.red.shl(this, o)
        );
      }),
      (s.prototype.redMul = function (o) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, o),
          this.red.mul(this, o)
        );
      }),
      (s.prototype.redIMul = function (o) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, o),
          this.red.imul(this, o)
        );
      }),
      (s.prototype.redSqr = function () {
        return (
          n(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (s.prototype.redISqr = function () {
        return (
          n(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (s.prototype.redSqrt = function () {
        return (
          n(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (s.prototype.redInvm = function () {
        return (
          n(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (s.prototype.redNeg = function () {
        return (
          n(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (s.prototype.redPow = function (o) {
        return (
          n(this.red && !o.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, o)
        );
      });
    var P = { k256: null, p224: null, p192: null, p25519: null };
    function F(m, o) {
      (this.name = m),
        (this.p = new s(o, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (F.prototype._tmp = function () {
      var o = new s(null);
      return (o.words = new Array(Math.ceil(this.n / 13))), o;
    }),
      (F.prototype.ireduce = function (o) {
        var h = o,
          f;
        do
          this.split(h, this.tmp),
            (h = this.imulK(h)),
            (h = h.iadd(this.tmp)),
            (f = h.bitLength());
        while (f > this.n);
        var _ = f < this.n ? -1 : h.ucmp(this.p);
        return (
          _ === 0
            ? ((h.words[0] = 0), (h.length = 1))
            : _ > 0
            ? h.isub(this.p)
            : h.strip !== void 0
            ? h.strip()
            : h._strip(),
          h
        );
      }),
      (F.prototype.split = function (o, h) {
        o.iushrn(this.n, 0, h);
      }),
      (F.prototype.imulK = function (o) {
        return o.imul(this.k);
      });
    function J() {
      F.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(J, F),
      (J.prototype.split = function (o, h) {
        for (var f = 4194303, _ = Math.min(o.length, 9), b = 0; b < _; b++)
          h.words[b] = o.words[b];
        if (((h.length = _), o.length <= 9)) {
          (o.words[0] = 0), (o.length = 1);
          return;
        }
        var R = o.words[9];
        for (h.words[h.length++] = R & f, b = 10; b < o.length; b++) {
          var x = o.words[b] | 0;
          (o.words[b - 10] = ((x & f) << 4) | (R >>> 22)), (R = x);
        }
        (R >>>= 22),
          (o.words[b - 10] = R),
          R === 0 && o.length > 10 ? (o.length -= 10) : (o.length -= 9);
      }),
      (J.prototype.imulK = function (o) {
        (o.words[o.length] = 0), (o.words[o.length + 1] = 0), (o.length += 2);
        for (var h = 0, f = 0; f < o.length; f++) {
          var _ = o.words[f] | 0;
          (h += _ * 977),
            (o.words[f] = h & 67108863),
            (h = _ * 64 + ((h / 67108864) | 0));
        }
        return (
          o.words[o.length - 1] === 0 &&
            (o.length--, o.words[o.length - 1] === 0 && o.length--),
          o
        );
      });
    function z() {
      F.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(z, F);
    function U() {
      F.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(U, F);
    function X() {
      F.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(X, F),
      (X.prototype.imulK = function (o) {
        for (var h = 0, f = 0; f < o.length; f++) {
          var _ = (o.words[f] | 0) * 19 + h,
            b = _ & 67108863;
          (_ >>>= 26), (o.words[f] = b), (h = _);
        }
        return h !== 0 && (o.words[o.length++] = h), o;
      }),
      (s._prime = function (o) {
        if (P[o]) return P[o];
        var h;
        if (o === "k256") h = new J();
        else if (o === "p224") h = new z();
        else if (o === "p192") h = new U();
        else if (o === "p25519") h = new X();
        else throw new Error("Unknown prime " + o);
        return (P[o] = h), h;
      });
    function Q(m) {
      if (typeof m == "string") {
        var o = s._prime(m);
        (this.m = o.p), (this.prime = o);
      } else
        n(m.gtn(1), "modulus must be greater than 1"),
          (this.m = m),
          (this.prime = null);
    }
    (Q.prototype._verify1 = function (o) {
      n(o.negative === 0, "red works only with positives"),
        n(o.red, "red works only with red numbers");
    }),
      (Q.prototype._verify2 = function (o, h) {
        n((o.negative | h.negative) === 0, "red works only with positives"),
          n(o.red && o.red === h.red, "red works only with red numbers");
      }),
      (Q.prototype.imod = function (o) {
        return this.prime
          ? this.prime.ireduce(o)._forceRed(this)
          : (g(o, o.umod(this.m)._forceRed(this)), o);
      }),
      (Q.prototype.neg = function (o) {
        return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
      }),
      (Q.prototype.add = function (o, h) {
        this._verify2(o, h);
        var f = o.add(h);
        return f.cmp(this.m) >= 0 && f.isub(this.m), f._forceRed(this);
      }),
      (Q.prototype.iadd = function (o, h) {
        this._verify2(o, h);
        var f = o.iadd(h);
        return f.cmp(this.m) >= 0 && f.isub(this.m), f;
      }),
      (Q.prototype.sub = function (o, h) {
        this._verify2(o, h);
        var f = o.sub(h);
        return f.cmpn(0) < 0 && f.iadd(this.m), f._forceRed(this);
      }),
      (Q.prototype.isub = function (o, h) {
        this._verify2(o, h);
        var f = o.isub(h);
        return f.cmpn(0) < 0 && f.iadd(this.m), f;
      }),
      (Q.prototype.shl = function (o, h) {
        return this._verify1(o), this.imod(o.ushln(h));
      }),
      (Q.prototype.imul = function (o, h) {
        return this._verify2(o, h), this.imod(o.imul(h));
      }),
      (Q.prototype.mul = function (o, h) {
        return this._verify2(o, h), this.imod(o.mul(h));
      }),
      (Q.prototype.isqr = function (o) {
        return this.imul(o, o.clone());
      }),
      (Q.prototype.sqr = function (o) {
        return this.mul(o, o);
      }),
      (Q.prototype.sqrt = function (o) {
        if (o.isZero()) return o.clone();
        var h = this.m.andln(3);
        if ((n(h % 2 === 1), h === 3)) {
          var f = this.m.add(new s(1)).iushrn(2);
          return this.pow(o, f);
        }
        for (var _ = this.m.subn(1), b = 0; !_.isZero() && _.andln(1) === 0; )
          b++, _.iushrn(1);
        n(!_.isZero());
        var R = new s(1).toRed(this),
          x = R.redNeg(),
          v = this.m.subn(1).iushrn(1),
          l = this.m.bitLength();
        for (l = new s(2 * l * l).toRed(this); this.pow(l, v).cmp(x) !== 0; )
          l.redIAdd(x);
        for (
          var S = this.pow(l, _),
            W = this.pow(o, _.addn(1).iushrn(1)),
            V = this.pow(o, _),
            C = b;
          V.cmp(R) !== 0;

        ) {
          for (var T = V, $ = 0; T.cmp(R) !== 0; $++) T = T.redSqr();
          n($ < C);
          var H = this.pow(S, new s(1).iushln(C - $ - 1));
          (W = W.redMul(H)), (S = H.redSqr()), (V = V.redMul(S)), (C = $);
        }
        return W;
      }),
      (Q.prototype.invm = function (o) {
        var h = o._invmp(this.m);
        return h.negative !== 0
          ? ((h.negative = 0), this.imod(h).redNeg())
          : this.imod(h);
      }),
      (Q.prototype.pow = function (o, h) {
        if (h.isZero()) return new s(1).toRed(this);
        if (h.cmpn(1) === 0) return o.clone();
        var f = 4,
          _ = new Array(1 << f);
        (_[0] = new s(1).toRed(this)), (_[1] = o);
        for (var b = 2; b < _.length; b++) _[b] = this.mul(_[b - 1], o);
        var R = _[0],
          x = 0,
          v = 0,
          l = h.bitLength() % 26;
        for (l === 0 && (l = 26), b = h.length - 1; b >= 0; b--) {
          for (var S = h.words[b], W = l - 1; W >= 0; W--) {
            var V = (S >> W) & 1;
            if ((R !== _[0] && (R = this.sqr(R)), V === 0 && x === 0)) {
              v = 0;
              continue;
            }
            (x <<= 1),
              (x |= V),
              v++,
              !(v !== f && (b !== 0 || W !== 0)) &&
                ((R = this.mul(R, _[x])), (v = 0), (x = 0));
          }
          l = 26;
        }
        return R;
      }),
      (Q.prototype.convertTo = function (o) {
        var h = o.umod(this.m);
        return h === o ? h.clone() : h;
      }),
      (Q.prototype.convertFrom = function (o) {
        var h = o.clone();
        return (h.red = null), h;
      }),
      (s.mont = function (o) {
        return new ie(o);
      });
    function ie(m) {
      Q.call(this, m),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    i(ie, Q),
      (ie.prototype.convertTo = function (o) {
        return this.imod(o.ushln(this.shift));
      }),
      (ie.prototype.convertFrom = function (o) {
        var h = this.imod(o.mul(this.rinv));
        return (h.red = null), h;
      }),
      (ie.prototype.imul = function (o, h) {
        if (o.isZero() || h.isZero())
          return (o.words[0] = 0), (o.length = 1), o;
        var f = o.imul(h),
          _ = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          b = f.isub(_).iushrn(this.shift),
          R = b;
        return (
          b.cmp(this.m) >= 0
            ? (R = b.isub(this.m))
            : b.cmpn(0) < 0 && (R = b.iadd(this.m)),
          R._forceRed(this)
        );
      }),
      (ie.prototype.mul = function (o, h) {
        if (o.isZero() || h.isZero()) return new s(0)._forceRed(this);
        var f = o.mul(h),
          _ = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          b = f.isub(_).iushrn(this.shift),
          R = b;
        return (
          b.cmp(this.m) >= 0
            ? (R = b.isub(this.m))
            : b.cmpn(0) < 0 && (R = b.iadd(this.m)),
          R._forceRed(this)
        );
      }),
      (ie.prototype.invm = function (o) {
        var h = this.imod(o._invmp(this.m).mul(this.r2));
        return h._forceRed(this);
      });
  })(e, G);
})(Lo);
var Di = Lo.exports,
  Fn = {},
  Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.errorValues = Ht.standardErrorCodes = void 0;
Ht.standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902,
  },
};
Ht.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
  4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
};
var Fi = {},
  ji = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.serialize =
      e.getErrorCode =
      e.isValidCode =
      e.getMessageFromCode =
      e.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const t = Ht,
    r = "Unspecified error message.";
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function n(E, k = r) {
    if (E && Number.isInteger(E)) {
      const A = E.toString();
      if (g(t.errorValues, A)) return t.errorValues[A].message;
      if (u(E)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return k;
  }
  e.getMessageFromCode = n;
  function i(E) {
    if (!Number.isInteger(E)) return !1;
    const k = E.toString();
    return !!(t.errorValues[k] || u(E));
  }
  e.isValidCode = i;
  function s(E) {
    var k;
    if (typeof E == "number") return E;
    if (a(E)) return (k = E.code) !== null && k !== void 0 ? k : E.errorCode;
  }
  e.getErrorCode = s;
  function a(E) {
    return (
      typeof E == "object" &&
      E !== null &&
      (typeof E.code == "number" || typeof E.errorCode == "number")
    );
  }
  function c(E, { shouldIncludeStack: k = !1 } = {}) {
    const A = {};
    if (
      E &&
      typeof E == "object" &&
      !Array.isArray(E) &&
      g(E, "code") &&
      i(E.code)
    ) {
      const O = E;
      (A.code = O.code),
        O.message && typeof O.message == "string"
          ? ((A.message = O.message), g(O, "data") && (A.data = O.data))
          : ((A.message = n(A.code)), (A.data = { originalError: d(E) }));
    } else
      (A.code = t.standardErrorCodes.rpc.internal),
        (A.message = p(E, "message") ? E.message : r),
        (A.data = { originalError: d(E) });
    return k && (A.stack = p(E, "stack") ? E.stack : void 0), A;
  }
  e.serialize = c;
  function u(E) {
    return E >= -32099 && E <= -32e3;
  }
  function d(E) {
    return E && typeof E == "object" && !Array.isArray(E)
      ? Object.assign({}, E)
      : E;
  }
  function g(E, k) {
    return Object.prototype.hasOwnProperty.call(E, k);
  }
  function p(E, k) {
    return (
      typeof E == "object" && E !== null && k in E && typeof E[k] == "string"
    );
  }
})(ji);
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.standardErrors = void 0;
const Xe = Ht,
  vl = ji;
Fi.standardErrors = {
  rpc: {
    parse: (e) => dt(Xe.standardErrorCodes.rpc.parse, e),
    invalidRequest: (e) => dt(Xe.standardErrorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => dt(Xe.standardErrorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => dt(Xe.standardErrorCodes.rpc.methodNotFound, e),
    internal: (e) => dt(Xe.standardErrorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return dt(t, e);
    },
    invalidInput: (e) => dt(Xe.standardErrorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => dt(Xe.standardErrorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) =>
      dt(Xe.standardErrorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) =>
      dt(Xe.standardErrorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) =>
      dt(Xe.standardErrorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => dt(Xe.standardErrorCodes.rpc.limitExceeded, e),
  },
  provider: {
    userRejectedRequest: (e) =>
      Vr(Xe.standardErrorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => Vr(Xe.standardErrorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) =>
      Vr(Xe.standardErrorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => Vr(Xe.standardErrorCodes.provider.disconnected, e),
    chainDisconnected: (e) =>
      Vr(Xe.standardErrorCodes.provider.chainDisconnected, e),
    unsupportedChain: (e) =>
      Vr(Xe.standardErrorCodes.provider.unsupportedChain, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new wl(t, r, n);
    },
  },
};
function dt(e, t) {
  const [r, n] = bl(t);
  return new yl(e, r || (0, vl.getMessageFromCode)(e), n);
}
function Vr(e, t) {
  const [r, n] = bl(t);
  return new wl(e, r || (0, vl.getMessageFromCode)(e), n);
}
function bl(e) {
  if (e) {
    if (typeof e == "string") return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
let yl = class extends Error {
    constructor(t, r, n) {
      if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string.');
      super(r), (this.code = t), n !== void 0 && (this.data = n);
    }
  },
  wl = class extends yl {
    constructor(t, r, n) {
      if (!Dh(t))
        throw new Error(
          '"code" must be an integer such that: 1000 <= code <= 4999'
        );
      super(t, r, n);
    }
  };
function Dh(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
var Hi = {},
  gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.isErrorResponse = void 0;
function Fh(e) {
  return e.errorMessage !== void 0;
}
gn.isErrorResponse = Fh;
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.LIB_VERSION = void 0;
_n.LIB_VERSION = "3.9.1";
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.serializeError = void 0;
const jh = gn,
  Hh = _n,
  Uh = Ht,
  Wh = ji;
function Vh(e, t) {
  const r = (0, Wh.serialize)(qh(e), { shouldIncludeStack: !0 }),
    n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  n.searchParams.set("version", Hh.LIB_VERSION),
    n.searchParams.set("code", r.code.toString());
  const i = zh(r.data, t);
  return (
    i && n.searchParams.set("method", i),
    n.searchParams.set("message", r.message),
    Object.assign(Object.assign({}, r), { docUrl: n.href })
  );
}
Hi.serializeError = Vh;
function qh(e) {
  return typeof e == "string"
    ? { message: e, code: Uh.standardErrorCodes.rpc.internal }
    : (0, jh.isErrorResponse)(e)
    ? Object.assign(Object.assign({}, e), {
        message: e.errorMessage,
        code: e.errorCode,
        data: { method: e.method },
      })
    : e;
}
function zh(e, t) {
  const r = e == null ? void 0 : e.method;
  if (r) return r;
  if (t !== void 0) {
    if (typeof t == "string") return t;
    if (Array.isArray(t)) {
      if (t.length > 0) return t[0].method;
    } else return t.method;
  }
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.standardErrors =
      e.standardErrorCodes =
      e.serializeError =
      e.getMessageFromCode =
      e.getErrorCode =
        void 0);
  const t = Ht;
  Object.defineProperty(e, "standardErrorCodes", {
    enumerable: !0,
    get: function () {
      return t.standardErrorCodes;
    },
  });
  const r = Fi;
  Object.defineProperty(e, "standardErrors", {
    enumerable: !0,
    get: function () {
      return r.standardErrors;
    },
  });
  const n = Hi;
  Object.defineProperty(e, "serializeError", {
    enumerable: !0,
    get: function () {
      return n.serializeError;
    },
  });
  const i = ji;
  Object.defineProperty(e, "getErrorCode", {
    enumerable: !0,
    get: function () {
      return i.getErrorCode;
    },
  }),
    Object.defineProperty(e, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return i.getMessageFromCode;
      },
    });
})(Fn);
var Je = {};
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.ProviderType =
  Je.RegExpString =
  Je.IntNumber =
  Je.BigIntString =
  Je.AddressString =
  Je.HexString =
  Je.OpaqueType =
    void 0;
function jn() {
  return (e) => e;
}
Je.OpaqueType = jn;
Je.HexString = jn();
Je.AddressString = jn();
Je.BigIntString = jn();
function Gh(e) {
  return Math.floor(e);
}
Je.IntNumber = Gh;
Je.RegExpString = jn();
var Ra;
(function (e) {
  (e.CoinbaseWallet = "CoinbaseWallet"),
    (e.MetaMask = "MetaMask"),
    (e.Unselected = "");
})(Ra || (Je.ProviderType = Ra = {}));
var Jh =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(q, "__esModule", { value: !0 });
q.isMobileWeb =
  q.getLocation =
  q.isInIFrame =
  q.createQrUrl =
  q.getFavicon =
  q.range =
  q.isBigNumber =
  q.ensureParsedJSONObject =
  q.ensureBN =
  q.ensureRegExpString =
  q.ensureIntNumber =
  q.ensureBuffer =
  q.ensureAddressString =
  q.ensureEvenLengthHexString =
  q.ensureHexString =
  q.isHexString =
  q.prepend0x =
  q.strip0x =
  q.has0xPrefix =
  q.hexStringFromIntNumber =
  q.intNumberFromHexString =
  q.bigIntStringFromBN =
  q.hexStringFromBuffer =
  q.hexStringToUint8Array =
  q.uint8ArrayToHex =
  q.randomBytesHex =
    void 0;
const Gt = Jh(Di),
  kr = Fn,
  _t = Je,
  El = /^[0-9]*$/,
  Sl = /^[a-f0-9]*$/;
function Zh(e) {
  return Rl(crypto.getRandomValues(new Uint8Array(e)));
}
q.randomBytesHex = Zh;
function Rl(e) {
  return [...e].map((t) => t.toString(16).padStart(2, "0")).join("");
}
q.uint8ArrayToHex = Rl;
function Kh(e) {
  return new Uint8Array(e.match(/.{1,2}/g).map((t) => parseInt(t, 16)));
}
q.hexStringToUint8Array = Kh;
function Qh(e, t = !1) {
  const r = e.toString("hex");
  return (0, _t.HexString)(t ? `0x${r}` : r);
}
q.hexStringFromBuffer = Qh;
function Yh(e) {
  return (0, _t.BigIntString)(e.toString(10));
}
q.bigIntStringFromBN = Yh;
function Xh(e) {
  return (0, _t.IntNumber)(new Gt.default(Un(e, !1), 16).toNumber());
}
q.intNumberFromHexString = Xh;
function ed(e) {
  return (0, _t.HexString)(`0x${new Gt.default(e).toString(16)}`);
}
q.hexStringFromIntNumber = ed;
function Po(e) {
  return e.startsWith("0x") || e.startsWith("0X");
}
q.has0xPrefix = Po;
function Ui(e) {
  return Po(e) ? e.slice(2) : e;
}
q.strip0x = Ui;
function Ml(e) {
  return Po(e) ? `0x${e.slice(2)}` : `0x${e}`;
}
q.prepend0x = Ml;
function Hn(e) {
  if (typeof e != "string") return !1;
  const t = Ui(e).toLowerCase();
  return Sl.test(t);
}
q.isHexString = Hn;
function kl(e, t = !1) {
  if (typeof e == "string") {
    const r = Ui(e).toLowerCase();
    if (Sl.test(r)) return (0, _t.HexString)(t ? `0x${r}` : r);
  }
  throw kr.standardErrors.rpc.invalidParams(
    `"${String(e)}" is not a hexadecimal string`
  );
}
q.ensureHexString = kl;
function Un(e, t = !1) {
  let r = kl(e, !1);
  return (
    r.length % 2 === 1 && (r = (0, _t.HexString)(`0${r}`)),
    t ? (0, _t.HexString)(`0x${r}`) : r
  );
}
q.ensureEvenLengthHexString = Un;
function td(e) {
  if (typeof e == "string") {
    const t = Ui(e).toLowerCase();
    if (Hn(t) && t.length === 40) return (0, _t.AddressString)(Ml(t));
  }
  throw kr.standardErrors.rpc.invalidParams(
    `Invalid Ethereum address: ${String(e)}`
  );
}
q.ensureAddressString = td;
function rd(e) {
  if (Buffer.isBuffer(e)) return e;
  if (typeof e == "string") {
    if (Hn(e)) {
      const t = Un(e, !1);
      return Buffer.from(t, "hex");
    }
    return Buffer.from(e, "utf8");
  }
  throw kr.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`);
}
q.ensureBuffer = rd;
function Cl(e) {
  if (typeof e == "number" && Number.isInteger(e)) return (0, _t.IntNumber)(e);
  if (typeof e == "string") {
    if (El.test(e)) return (0, _t.IntNumber)(Number(e));
    if (Hn(e))
      return (0, _t.IntNumber)(new Gt.default(Un(e, !1), 16).toNumber());
  }
  throw kr.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
q.ensureIntNumber = Cl;
function nd(e) {
  if (e instanceof RegExp) return (0, _t.RegExpString)(e.toString());
  throw kr.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`);
}
q.ensureRegExpString = nd;
function id(e) {
  if (e !== null && (Gt.default.isBN(e) || Il(e)))
    return new Gt.default(e.toString(10), 10);
  if (typeof e == "number") return new Gt.default(Cl(e));
  if (typeof e == "string") {
    if (El.test(e)) return new Gt.default(e, 10);
    if (Hn(e)) return new Gt.default(Un(e, !1), 16);
  }
  throw kr.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
q.ensureBN = id;
function sd(e) {
  if (typeof e == "string") return JSON.parse(e);
  if (typeof e == "object") return e;
  throw kr.standardErrors.rpc.invalidParams(
    `Not a JSON string or an object: ${String(e)}`
  );
}
q.ensureParsedJSONObject = sd;
function Il(e) {
  if (e == null || typeof e.constructor != "function") return !1;
  const { constructor: t } = e;
  return typeof t.config == "function" && typeof t.EUCLID == "number";
}
q.isBigNumber = Il;
function od(e, t) {
  return Array.from({ length: t - e }, (r, n) => e + n);
}
q.range = od;
function ad() {
  const e =
      document.querySelector('link[sizes="192x192"]') ||
      document.querySelector('link[sizes="180x180"]') ||
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]'),
    { protocol: t, host: r } = document.location,
    n = e ? e.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") || n.startsWith("vbscript:")
    ? null
    : n.startsWith("http://") ||
      n.startsWith("https://") ||
      n.startsWith("data:")
    ? n
    : n.startsWith("//")
    ? t + n
    : `${t}//${r}${n}`;
}
q.getFavicon = ad;
function cd(e, t, r, n, i, s) {
  const a = n ? "parent-id" : "id",
    c = new URLSearchParams({
      [a]: e,
      secret: t,
      server: r,
      v: i,
      chainId: s.toString(),
    }).toString();
  return `${r}/#/link?${c}`;
}
q.createQrUrl = cd;
function xl() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
q.isInIFrame = xl;
function ld() {
  try {
    return xl() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
q.getLocation = ld;
function ud() {
  var e;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    (e = window == null ? void 0 : window.navigator) === null || e === void 0
      ? void 0
      : e.userAgent
  );
}
q.isMobileWeb = ud;
var Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.ScopedLocalStorage = void 0;
class hd {
  constructor(t) {
    this.scope = t;
  }
  setItem(t, r) {
    localStorage.setItem(this.scopedKey(t), r);
  }
  getItem(t) {
    return localStorage.getItem(this.scopedKey(t));
  }
  removeItem(t) {
    localStorage.removeItem(this.scopedKey(t));
  }
  clear() {
    const t = this.scopedKey(""),
      r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const i = localStorage.key(n);
      typeof i == "string" && i.startsWith(t) && r.push(i);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(t) {
    return `${this.scope}:${t}`;
  }
}
Wi.ScopedLocalStorage = hd;
var sn = {};
const dd = pn($h);
var Wn = {},
  Vn = {},
  mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.EVENTS = void 0;
mn.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered",
};
var gt = {};
Object.defineProperty(gt, "__esModule", { value: !0 });
gt.RelayAbstract =
  gt.APP_VERSION_KEY =
  gt.LOCAL_STORAGE_ADDRESSES_KEY =
  gt.WALLET_USER_NAME_KEY =
    void 0;
const Ma = Fn;
gt.WALLET_USER_NAME_KEY = "walletUsername";
gt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
gt.APP_VERSION_KEY = "AppVersion";
class fd {
  async makeEthereumJSONRPCRequest(t, r) {
    if (!r) throw new Error("Error: No jsonRpcUrl provided");
    return window
      .fetch(r, {
        method: "POST",
        body: JSON.stringify(t),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      })
      .then((n) => n.json())
      .then((n) => {
        if (!n) throw Ma.standardErrors.rpc.parse({});
        const i = n,
          { error: s } = i;
        if (s) throw (0, Ma.serializeError)(s, t.method);
        return i;
      });
  }
}
gt.RelayAbstract = fd;
var vn = {},
  Al = { exports: {} },
  _o = { exports: {} };
typeof Object.create == "function"
  ? (_o.exports = function (t, r) {
      r &&
        ((t.super_ = r),
        (t.prototype = Object.create(r.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (_o.exports = function (t, r) {
      if (r) {
        t.super_ = r;
        var n = function () {};
        (n.prototype = r.prototype),
          (t.prototype = new n()),
          (t.prototype.constructor = t);
      }
    });
var Et = _o.exports,
  mo = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ (function (
  e,
  t
) {
  var r = Dn,
    n = r.Buffer;
  function i(a, c) {
    for (var u in a) c[u] = a[u];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
    ? (e.exports = r)
    : (i(r, t), (t.Buffer = s));
  function s(a, c, u) {
    return n(a, c, u);
  }
  (s.prototype = Object.create(n.prototype)),
    i(n, s),
    (s.from = function (a, c, u) {
      if (typeof a == "number")
        throw new TypeError("Argument must not be a number");
      return n(a, c, u);
    }),
    (s.alloc = function (a, c, u) {
      if (typeof a != "number")
        throw new TypeError("Argument must be a number");
      var d = n(a);
      return (
        c !== void 0
          ? typeof u == "string"
            ? d.fill(c, u)
            : d.fill(c)
          : d.fill(0),
        d
      );
    }),
    (s.allocUnsafe = function (a) {
      if (typeof a != "number")
        throw new TypeError("Argument must be a number");
      return n(a);
    }),
    (s.allocUnsafeSlow = function (a) {
      if (typeof a != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(a);
    });
})(mo, mo.exports);
var Cr = mo.exports,
  Tl = Cr.Buffer;
function Vi(e, t) {
  (this._block = Tl.alloc(e)),
    (this._finalSize = t),
    (this._blockSize = e),
    (this._len = 0);
}
Vi.prototype.update = function (e, t) {
  typeof e == "string" && ((t = t || "utf8"), (e = Tl.from(e, t)));
  for (
    var r = this._block,
      n = this._blockSize,
      i = e.length,
      s = this._len,
      a = 0;
    a < i;

  ) {
    for (var c = s % n, u = Math.min(i - a, n - c), d = 0; d < u; d++)
      r[c + d] = e[a + d];
    (s += u), (a += u), s % n === 0 && this._update(r);
  }
  return (this._len += i), this;
};
Vi.prototype.digest = function (e) {
  var t = this._len % this._blockSize;
  (this._block[t] = 128),
    this._block.fill(0, t + 1),
    t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0,
      i = (r - n) / 4294967296;
    this._block.writeUInt32BE(i, this._blockSize - 8),
      this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var s = this._hash();
  return e ? s.toString(e) : s;
};
Vi.prototype._update = function () {
  throw new Error("_update must be implemented by subclass");
};
var bn = Vi,
  pd = Et,
  Nl = bn,
  gd = Cr.Buffer,
  _d = [1518500249, 1859775393, -1894007588, -899497514],
  md = new Array(80);
function qn() {
  this.init(), (this._w = md), Nl.call(this, 64, 56);
}
pd(qn, Nl);
qn.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function vd(e) {
  return (e << 5) | (e >>> 27);
}
function bd(e) {
  return (e << 30) | (e >>> 2);
}
function yd(e, t, r, n) {
  return e === 0
    ? (t & r) | (~t & n)
    : e === 2
    ? (t & r) | (t & n) | (r & n)
    : t ^ r ^ n;
}
qn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      a = this._e | 0,
      c = 0;
    c < 16;
    ++c
  )
    t[c] = e.readInt32BE(c * 4);
  for (; c < 80; ++c) t[c] = t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16];
  for (var u = 0; u < 80; ++u) {
    var d = ~~(u / 20),
      g = (vd(r) + yd(d, n, i, s) + a + t[u] + _d[d]) | 0;
    (a = s), (s = i), (i = bd(n)), (n = r), (r = g);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (a + this._e) | 0);
};
qn.prototype._hash = function () {
  var e = gd.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var wd = qn,
  Ed = Et,
  Ll = bn,
  Sd = Cr.Buffer,
  Rd = [1518500249, 1859775393, -1894007588, -899497514],
  Md = new Array(80);
function zn() {
  this.init(), (this._w = Md), Ll.call(this, 64, 56);
}
Ed(zn, Ll);
zn.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function kd(e) {
  return (e << 1) | (e >>> 31);
}
function Cd(e) {
  return (e << 5) | (e >>> 27);
}
function Id(e) {
  return (e << 30) | (e >>> 2);
}
function xd(e, t, r, n) {
  return e === 0
    ? (t & r) | (~t & n)
    : e === 2
    ? (t & r) | (t & n) | (r & n)
    : t ^ r ^ n;
}
zn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      a = this._e | 0,
      c = 0;
    c < 16;
    ++c
  )
    t[c] = e.readInt32BE(c * 4);
  for (; c < 80; ++c) t[c] = kd(t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16]);
  for (var u = 0; u < 80; ++u) {
    var d = ~~(u / 20),
      g = (Cd(r) + xd(d, n, i, s) + a + t[u] + Rd[d]) | 0;
    (a = s), (s = i), (i = Id(n)), (n = r), (r = g);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (a + this._e) | 0);
};
zn.prototype._hash = function () {
  var e = Sd.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var Ad = zn,
  Td = Et,
  Pl = bn,
  Nd = Cr.Buffer,
  Ld = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ],
  Pd = new Array(64);
function Gn() {
  this.init(), (this._w = Pd), Pl.call(this, 64, 56);
}
Td(Gn, Pl);
Gn.prototype.init = function () {
  return (
    (this._a = 1779033703),
    (this._b = 3144134277),
    (this._c = 1013904242),
    (this._d = 2773480762),
    (this._e = 1359893119),
    (this._f = 2600822924),
    (this._g = 528734635),
    (this._h = 1541459225),
    this
  );
};
function Od(e, t, r) {
  return r ^ (e & (t ^ r));
}
function $d(e, t, r) {
  return (e & t) | (r & (e | t));
}
function Bd(e) {
  return (
    ((e >>> 2) | (e << 30)) ^
    ((e >>> 13) | (e << 19)) ^
    ((e >>> 22) | (e << 10))
  );
}
function Dd(e) {
  return (
    ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7))
  );
}
function Fd(e) {
  return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
}
function jd(e) {
  return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10);
}
Gn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      a = this._e | 0,
      c = this._f | 0,
      u = this._g | 0,
      d = this._h | 0,
      g = 0;
    g < 16;
    ++g
  )
    t[g] = e.readInt32BE(g * 4);
  for (; g < 64; ++g)
    t[g] = (jd(t[g - 2]) + t[g - 7] + Fd(t[g - 15]) + t[g - 16]) | 0;
  for (var p = 0; p < 64; ++p) {
    var E = (d + Dd(a) + Od(a, c, u) + Ld[p] + t[p]) | 0,
      k = (Bd(r) + $d(r, n, i)) | 0;
    (d = u),
      (u = c),
      (c = a),
      (a = (s + E) | 0),
      (s = i),
      (i = n),
      (n = r),
      (r = (E + k) | 0);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (a + this._e) | 0),
    (this._f = (c + this._f) | 0),
    (this._g = (u + this._g) | 0),
    (this._h = (d + this._h) | 0);
};
Gn.prototype._hash = function () {
  var e = Nd.allocUnsafe(32);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e.writeInt32BE(this._h, 28),
    e
  );
};
var Ol = Gn,
  Hd = Et,
  Ud = Ol,
  Wd = bn,
  Vd = Cr.Buffer,
  qd = new Array(64);
function qi() {
  this.init(), (this._w = qd), Wd.call(this, 64, 56);
}
Hd(qi, Ud);
qi.prototype.init = function () {
  return (
    (this._a = 3238371032),
    (this._b = 914150663),
    (this._c = 812702999),
    (this._d = 4144912697),
    (this._e = 4290775857),
    (this._f = 1750603025),
    (this._g = 1694076839),
    (this._h = 3204075428),
    this
  );
};
qi.prototype._hash = function () {
  var e = Vd.allocUnsafe(28);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e
  );
};
var zd = qi,
  Gd = Et,
  $l = bn,
  Jd = Cr.Buffer,
  ka = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ],
  Zd = new Array(160);
function Jn() {
  this.init(), (this._w = Zd), $l.call(this, 128, 112);
}
Gd(Jn, $l);
Jn.prototype.init = function () {
  return (
    (this._ah = 1779033703),
    (this._bh = 3144134277),
    (this._ch = 1013904242),
    (this._dh = 2773480762),
    (this._eh = 1359893119),
    (this._fh = 2600822924),
    (this._gh = 528734635),
    (this._hh = 1541459225),
    (this._al = 4089235720),
    (this._bl = 2227873595),
    (this._cl = 4271175723),
    (this._dl = 1595750129),
    (this._el = 2917565137),
    (this._fl = 725511199),
    (this._gl = 4215389547),
    (this._hl = 327033209),
    this
  );
};
function Ca(e, t, r) {
  return r ^ (e & (t ^ r));
}
function Ia(e, t, r) {
  return (e & t) | (r & (e | t));
}
function xa(e, t) {
  return (
    ((e >>> 28) | (t << 4)) ^ ((t >>> 2) | (e << 30)) ^ ((t >>> 7) | (e << 25))
  );
}
function Aa(e, t) {
  return (
    ((e >>> 14) | (t << 18)) ^
    ((e >>> 18) | (t << 14)) ^
    ((t >>> 9) | (e << 23))
  );
}
function Kd(e, t) {
  return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
}
function Qd(e, t) {
  return (
    ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ ((e >>> 7) | (t << 25))
  );
}
function Yd(e, t) {
  return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
}
function Xd(e, t) {
  return (
    ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ ((e >>> 6) | (t << 26))
  );
}
function Ke(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
Jn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._ah | 0,
      n = this._bh | 0,
      i = this._ch | 0,
      s = this._dh | 0,
      a = this._eh | 0,
      c = this._fh | 0,
      u = this._gh | 0,
      d = this._hh | 0,
      g = this._al | 0,
      p = this._bl | 0,
      E = this._cl | 0,
      k = this._dl | 0,
      A = this._el | 0,
      O = this._fl | 0,
      L = this._gl | 0,
      M = this._hl | 0,
      I = 0;
    I < 32;
    I += 2
  )
    (t[I] = e.readInt32BE(I * 4)), (t[I + 1] = e.readInt32BE(I * 4 + 4));
  for (; I < 160; I += 2) {
    var N = t[I - 30],
      B = t[I - 15 * 2 + 1],
      P = Kd(N, B),
      F = Qd(B, N);
    (N = t[I - 2 * 2]), (B = t[I - 2 * 2 + 1]);
    var J = Yd(N, B),
      z = Xd(B, N),
      U = t[I - 7 * 2],
      X = t[I - 7 * 2 + 1],
      Q = t[I - 16 * 2],
      ie = t[I - 16 * 2 + 1],
      m = (F + X) | 0,
      o = (P + U + Ke(m, F)) | 0;
    (m = (m + z) | 0),
      (o = (o + J + Ke(m, z)) | 0),
      (m = (m + ie) | 0),
      (o = (o + Q + Ke(m, ie)) | 0),
      (t[I] = o),
      (t[I + 1] = m);
  }
  for (var h = 0; h < 160; h += 2) {
    (o = t[h]), (m = t[h + 1]);
    var f = Ia(r, n, i),
      _ = Ia(g, p, E),
      b = xa(r, g),
      R = xa(g, r),
      x = Aa(a, A),
      v = Aa(A, a),
      l = ka[h],
      S = ka[h + 1],
      W = Ca(a, c, u),
      V = Ca(A, O, L),
      C = (M + v) | 0,
      T = (d + x + Ke(C, M)) | 0;
    (C = (C + V) | 0),
      (T = (T + W + Ke(C, V)) | 0),
      (C = (C + S) | 0),
      (T = (T + l + Ke(C, S)) | 0),
      (C = (C + m) | 0),
      (T = (T + o + Ke(C, m)) | 0);
    var $ = (R + _) | 0,
      H = (b + f + Ke($, R)) | 0;
    (d = u),
      (M = L),
      (u = c),
      (L = O),
      (c = a),
      (O = A),
      (A = (k + C) | 0),
      (a = (s + T + Ke(A, k)) | 0),
      (s = i),
      (k = E),
      (i = n),
      (E = p),
      (n = r),
      (p = g),
      (g = (C + $) | 0),
      (r = (T + H + Ke(g, C)) | 0);
  }
  (this._al = (this._al + g) | 0),
    (this._bl = (this._bl + p) | 0),
    (this._cl = (this._cl + E) | 0),
    (this._dl = (this._dl + k) | 0),
    (this._el = (this._el + A) | 0),
    (this._fl = (this._fl + O) | 0),
    (this._gl = (this._gl + L) | 0),
    (this._hl = (this._hl + M) | 0),
    (this._ah = (this._ah + r + Ke(this._al, g)) | 0),
    (this._bh = (this._bh + n + Ke(this._bl, p)) | 0),
    (this._ch = (this._ch + i + Ke(this._cl, E)) | 0),
    (this._dh = (this._dh + s + Ke(this._dl, k)) | 0),
    (this._eh = (this._eh + a + Ke(this._el, A)) | 0),
    (this._fh = (this._fh + c + Ke(this._fl, O)) | 0),
    (this._gh = (this._gh + u + Ke(this._gl, L)) | 0),
    (this._hh = (this._hh + d + Ke(this._hl, M)) | 0);
};
Jn.prototype._hash = function () {
  var e = Jd.allocUnsafe(64);
  function t(r, n, i) {
    e.writeInt32BE(r, i), e.writeInt32BE(n, i + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    t(this._gh, this._gl, 48),
    t(this._hh, this._hl, 56),
    e
  );
};
var Bl = Jn,
  ef = Et,
  tf = Bl,
  rf = bn,
  nf = Cr.Buffer,
  sf = new Array(160);
function zi() {
  this.init(), (this._w = sf), rf.call(this, 128, 112);
}
ef(zi, tf);
zi.prototype.init = function () {
  return (
    (this._ah = 3418070365),
    (this._bh = 1654270250),
    (this._ch = 2438529370),
    (this._dh = 355462360),
    (this._eh = 1731405415),
    (this._fh = 2394180231),
    (this._gh = 3675008525),
    (this._hh = 1203062813),
    (this._al = 3238371032),
    (this._bl = 914150663),
    (this._cl = 812702999),
    (this._dl = 4144912697),
    (this._el = 4290775857),
    (this._fl = 1750603025),
    (this._gl = 1694076839),
    (this._hl = 3204075428),
    this
  );
};
zi.prototype._hash = function () {
  var e = nf.allocUnsafe(48);
  function t(r, n, i) {
    e.writeInt32BE(r, i), e.writeInt32BE(n, i + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    e
  );
};
var of = zi,
  Ir = (Al.exports = function (t) {
    t = t.toLowerCase();
    var r = Ir[t];
    if (!r) throw new Error(t + " is not supported (we accept pull requests)");
    return new r();
  });
Ir.sha = wd;
Ir.sha1 = Ad;
Ir.sha224 = zd;
Ir.sha256 = Ol;
Ir.sha384 = of;
Ir.sha512 = Bl;
var af = Al.exports;
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.Session = void 0;
const Ta = af,
  Na = q,
  La = "session:id",
  Pa = "session:secret",
  Oa = "session:linked";
class Oo {
  constructor(t, r, n, i) {
    (this._storage = t),
      (this._id = r || (0, Na.randomBytesHex)(16)),
      (this._secret = n || (0, Na.randomBytesHex)(32)),
      (this._key = new Ta.sha256()
        .update(`${this._id}, ${this._secret} WalletLink`)
        .digest("hex")),
      (this._linked = !!i);
  }
  static load(t) {
    const r = t.getItem(La),
      n = t.getItem(Oa),
      i = t.getItem(Pa);
    return r && i ? new Oo(t, r, i, n === "1") : null;
  }
  static hash(t) {
    return new Ta.sha256().update(t).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    (this._linked = t), this.persistLinked();
  }
  save() {
    return (
      this._storage.setItem(La, this._id),
      this._storage.setItem(Pa, this._secret),
      this.persistLinked(),
      this
    );
  }
  persistLinked() {
    this._storage.setItem(Oa, this._linked ? "1" : "0");
  }
}
vn.Session = Oo;
var Gi = {},
  Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.Cipher = void 0;
const hi = q;
class cf {
  constructor(t) {
    this.secret = t;
  }
  async encrypt(t) {
    const r = this.secret;
    if (r.length !== 64) throw Error("secret must be 256 bits");
    const n = crypto.getRandomValues(new Uint8Array(12)),
      i = await crypto.subtle.importKey(
        "raw",
        (0, hi.hexStringToUint8Array)(r),
        { name: "aes-gcm" },
        !1,
        ["encrypt", "decrypt"]
      ),
      s = new TextEncoder(),
      a = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: n },
        i,
        s.encode(t)
      ),
      c = 16,
      u = a.slice(a.byteLength - c),
      d = a.slice(0, a.byteLength - c),
      g = new Uint8Array(u),
      p = new Uint8Array(d),
      E = new Uint8Array([...n, ...g, ...p]);
    return (0, hi.uint8ArrayToHex)(E);
  }
  async decrypt(t) {
    const r = this.secret;
    if (r.length !== 64) throw Error("secret must be 256 bits");
    return new Promise((n, i) => {
      (async function () {
        const s = await crypto.subtle.importKey(
            "raw",
            (0, hi.hexStringToUint8Array)(r),
            { name: "aes-gcm" },
            !1,
            ["encrypt", "decrypt"]
          ),
          a = (0, hi.hexStringToUint8Array)(t),
          c = a.slice(0, 12),
          u = a.slice(12, 28),
          d = a.slice(28),
          g = new Uint8Array([...d, ...u]),
          p = { name: "AES-GCM", iv: new Uint8Array(c) };
        try {
          const E = await window.crypto.subtle.decrypt(p, s, g),
            k = new TextDecoder();
          n(k.decode(E));
        } catch (E) {
          i(E);
        }
      })();
    });
  }
}
Ji.Cipher = cf;
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.WalletLinkHTTP = void 0;
class lf {
  constructor(t, r, n) {
    (this.linkAPIUrl = t), (this.sessionId = r);
    const i = `${r}:${n}`;
    this.auth = `Basic ${btoa(i)}`;
  }
  async markUnseenEventsAsSeen(t) {
    return Promise.all(
      t.map((r) =>
        fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
          method: "POST",
          headers: { Authorization: this.auth },
        })
      )
    ).catch((r) => console.error("Unabled to mark event as failed:", r));
  }
  async fetchUnseenEvents() {
    var t;
    const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: { Authorization: this.auth },
    });
    if (r.ok) {
      const { events: n, error: i } = await r.json();
      if (i) throw new Error(`Check unseen events failed: ${i}`);
      const s =
        (t =
          n == null
            ? void 0
            : n
                .filter((a) => a.event === "Web3Response")
                .map((a) => ({
                  type: "Event",
                  sessionId: this.sessionId,
                  eventId: a.id,
                  event: a.event,
                  data: a.data,
                }))) !== null && t !== void 0
          ? t
          : [];
      return this.markUnseenEventsAsSeen(s), s;
    }
    throw new Error(`Check unseen events failed: ${r.status}`);
  }
}
Zi.WalletLinkHTTP = lf;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.WalletLinkWebSocket = on.ConnectionState = void 0;
var Yr;
(function (e) {
  (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
    (e[(e.CONNECTING = 1)] = "CONNECTING"),
    (e[(e.CONNECTED = 2)] = "CONNECTED");
})(Yr || (on.ConnectionState = Yr = {}));
class uf {
  setConnectionStateListener(t) {
    this.connectionStateListener = t;
  }
  setIncomingDataListener(t) {
    this.incomingDataListener = t;
  }
  constructor(t, r = WebSocket) {
    (this.WebSocketClass = r),
      (this.webSocket = null),
      (this.pendingData = []),
      (this.url = t.replace(/^http/, "ws"));
  }
  async connect() {
    if (this.webSocket) throw new Error("webSocket object is not null");
    return new Promise((t, r) => {
      var n;
      let i;
      try {
        this.webSocket = i = new this.WebSocketClass(this.url);
      } catch (s) {
        r(s);
        return;
      }
      (n = this.connectionStateListener) === null ||
        n === void 0 ||
        n.call(this, Yr.CONNECTING),
        (i.onclose = (s) => {
          var a;
          this.clearWebSocket(),
            r(new Error(`websocket error ${s.code}: ${s.reason}`)),
            (a = this.connectionStateListener) === null ||
              a === void 0 ||
              a.call(this, Yr.DISCONNECTED);
        }),
        (i.onopen = (s) => {
          var a;
          t(),
            (a = this.connectionStateListener) === null ||
              a === void 0 ||
              a.call(this, Yr.CONNECTED),
            this.pendingData.length > 0 &&
              ([...this.pendingData].forEach((u) => this.sendData(u)),
              (this.pendingData = []));
        }),
        (i.onmessage = (s) => {
          var a, c;
          if (s.data === "h")
            (a = this.incomingDataListener) === null ||
              a === void 0 ||
              a.call(this, { type: "Heartbeat" });
          else
            try {
              const u = JSON.parse(s.data);
              (c = this.incomingDataListener) === null ||
                c === void 0 ||
                c.call(this, u);
            } catch {}
        });
    });
  }
  disconnect() {
    var t;
    const { webSocket: r } = this;
    if (r) {
      this.clearWebSocket(),
        (t = this.connectionStateListener) === null ||
          t === void 0 ||
          t.call(this, Yr.DISCONNECTED),
        (this.connectionStateListener = void 0),
        (this.incomingDataListener = void 0);
      try {
        r.close();
      } catch {}
    }
  }
  sendData(t) {
    const { webSocket: r } = this;
    if (!r) {
      this.pendingData.push(t), this.connect();
      return;
    }
    r.send(t);
  }
  clearWebSocket() {
    const { webSocket: t } = this;
    t &&
      ((this.webSocket = null),
      (t.onclose = null),
      (t.onerror = null),
      (t.onmessage = null),
      (t.onopen = null));
  }
}
on.WalletLinkWebSocket = uf;
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.WalletLinkConnection = void 0;
const qr = Je,
  hf = Ji,
  kt = mn,
  $a = gt,
  zr = vn,
  df = Zi,
  di = on,
  Ba = 1e4,
  ff = 6e4;
class pf {
  constructor({
    session: t,
    linkAPIUrl: r,
    listener: n,
    diagnostic: i,
    WebSocketClass: s = WebSocket,
  }) {
    (this.destroyed = !1),
      (this.lastHeartbeatResponse = 0),
      (this.nextReqId = (0, qr.IntNumber)(1)),
      (this._connected = !1),
      (this._linked = !1),
      (this.shouldFetchUnseenEventsOnConnect = !1),
      (this.requestResolutions = new Map()),
      (this.handleSessionMetadataUpdated = (c) => {
        if (!c) return;
        new Map([
          ["__destroyed", this.handleDestroyed],
          ["EthereumAddress", this.handleAccountUpdated],
          ["WalletUsername", this.handleWalletUsernameUpdated],
          ["AppVersion", this.handleAppVersionUpdated],
          [
            "ChainId",
            (d) => c.JsonRpcUrl && this.handleChainUpdated(d, c.JsonRpcUrl),
          ],
        ]).forEach((d, g) => {
          const p = c[g];
          p !== void 0 && d(p);
        });
      }),
      (this.handleDestroyed = (c) => {
        var u, d;
        c === "1" &&
          ((u = this.listener) === null || u === void 0 || u.resetAndReload(),
          (d = this.diagnostic) === null ||
            d === void 0 ||
            d.log(kt.EVENTS.METADATA_DESTROYED, {
              alreadyDestroyed: this.isDestroyed,
              sessionIdHash: zr.Session.hash(this.session.id),
            }));
      }),
      (this.handleAccountUpdated = async (c) => {
        var u, d;
        try {
          const g = await this.cipher.decrypt(c);
          (u = this.listener) === null || u === void 0 || u.accountUpdated(g);
        } catch {
          (d = this.diagnostic) === null ||
            d === void 0 ||
            d.log(kt.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "selectedAddress",
            });
        }
      }),
      (this.handleMetadataUpdated = async (c, u) => {
        var d, g;
        try {
          const p = await this.cipher.decrypt(u);
          (d = this.listener) === null ||
            d === void 0 ||
            d.metadataUpdated(c, p);
        } catch {
          (g = this.diagnostic) === null ||
            g === void 0 ||
            g.log(kt.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: c,
            });
        }
      }),
      (this.handleWalletUsernameUpdated = async (c) => {
        this.handleMetadataUpdated($a.WALLET_USER_NAME_KEY, c);
      }),
      (this.handleAppVersionUpdated = async (c) => {
        this.handleMetadataUpdated($a.APP_VERSION_KEY, c);
      }),
      (this.handleChainUpdated = async (c, u) => {
        var d, g;
        try {
          const p = await this.cipher.decrypt(c),
            E = await this.cipher.decrypt(u);
          (d = this.listener) === null || d === void 0 || d.chainUpdated(p, E);
        } catch {
          (g = this.diagnostic) === null ||
            g === void 0 ||
            g.log(kt.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "chainId|jsonRpcUrl",
            });
        }
      }),
      (this.session = t),
      (this.cipher = new hf.Cipher(t.secret)),
      (this.diagnostic = i),
      (this.listener = n);
    const a = new di.WalletLinkWebSocket(`${r}/rpc`, s);
    a.setConnectionStateListener(async (c) => {
      var u;
      (u = this.diagnostic) === null ||
        u === void 0 ||
        u.log(kt.EVENTS.CONNECTED_STATE_CHANGE, {
          state: c,
          sessionIdHash: zr.Session.hash(t.id),
        });
      let d = !1;
      switch (c) {
        case di.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const g = async () => {
              await new Promise((p) => setTimeout(p, 5e3)),
                this.destroyed ||
                  a.connect().catch(() => {
                    g();
                  });
            };
            g();
          }
          break;
        case di.ConnectionState.CONNECTED:
          try {
            await this.authenticate(),
              this.sendIsLinked(),
              this.sendGetSessionConfig(),
              (d = !0);
          } catch {}
          this.updateLastHeartbeat(),
            setInterval(() => {
              this.heartbeat();
            }, Ba),
            this.shouldFetchUnseenEventsOnConnect &&
              this.fetchUnseenEventsAPI();
          break;
        case di.ConnectionState.CONNECTING:
          break;
      }
      this.connected !== d && (this.connected = d);
    }),
      a.setIncomingDataListener((c) => {
        var u, d, g;
        switch (c.type) {
          case "Heartbeat":
            this.updateLastHeartbeat();
            return;
          case "IsLinkedOK":
          case "Linked": {
            const p = c.type === "IsLinkedOK" ? c.linked : void 0;
            (u = this.diagnostic) === null ||
              u === void 0 ||
              u.log(kt.EVENTS.LINKED, {
                sessionIdHash: zr.Session.hash(t.id),
                linked: p,
                type: c.type,
                onlineGuests: c.onlineGuests,
              }),
              (this.linked = p || c.onlineGuests > 0);
            break;
          }
          case "GetSessionConfigOK":
          case "SessionConfigUpdated": {
            (d = this.diagnostic) === null ||
              d === void 0 ||
              d.log(kt.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: zr.Session.hash(t.id),
                metadata_keys:
                  c && c.metadata ? Object.keys(c.metadata) : void 0,
              }),
              this.handleSessionMetadataUpdated(c.metadata);
            break;
          }
          case "Event": {
            this.handleIncomingEvent(c);
            break;
          }
        }
        c.id !== void 0 &&
          ((g = this.requestResolutions.get(c.id)) === null ||
            g === void 0 ||
            g(c));
      }),
      (this.ws = a),
      (this.http = new df.WalletLinkHTTP(r, t.id, t.key));
  }
  connect() {
    var t;
    if (this.destroyed) throw new Error("instance is destroyed");
    (t = this.diagnostic) === null ||
      t === void 0 ||
      t.log(kt.EVENTS.STARTED_CONNECTING, {
        sessionIdHash: zr.Session.hash(this.session.id),
      }),
      this.ws.connect();
  }
  destroy() {
    var t;
    (this.destroyed = !0),
      this.ws.disconnect(),
      (t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(kt.EVENTS.DISCONNECTED, {
          sessionIdHash: zr.Session.hash(this.session.id),
        }),
      (this.listener = void 0);
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(t) {
    var r, n;
    (this._connected = t),
      t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)),
      (n = this.listener) === null || n === void 0 || n.connectedUpdated(t);
  }
  setOnceConnected(t) {
    return new Promise((r) => {
      this.connected
        ? t().then(r)
        : (this.onceConnected = () => {
            t().then(r), (this.onceConnected = void 0);
          });
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    var r, n;
    (this._linked = t),
      t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)),
      (n = this.listener) === null || n === void 0 || n.linkedUpdated(t);
  }
  setOnceLinked(t) {
    return new Promise((r) => {
      this.linked
        ? t().then(r)
        : (this.onceLinked = () => {
            t().then(r), (this.onceLinked = void 0);
          });
    });
  }
  async handleIncomingEvent(t) {
    var r, n;
    if (!(t.type !== "Event" || t.event !== "Web3Response"))
      try {
        const i = await this.cipher.decrypt(t.data),
          s = JSON.parse(i);
        if (s.type !== "WEB3_RESPONSE") return;
        (r = this.listener) === null ||
          r === void 0 ||
          r.handleWeb3ResponseMessage(s);
      } catch {
        (n = this.diagnostic) === null ||
          n === void 0 ||
          n.log(kt.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent",
          });
      }
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0;
      return;
    }
    await new Promise((t) => setTimeout(t, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (t) {
      console.error("Unable to check for unseen events", t);
    }
  }
  async fetchUnseenEventsAPI() {
    (this.shouldFetchUnseenEventsOnConnect = !1),
      (await this.http.fetchUnseenEvents()).forEach((r) =>
        this.handleIncomingEvent(r)
      );
  }
  async setSessionMetadata(t, r) {
    const n = {
      type: "SetSessionConfig",
      id: (0, qr.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [t]: r },
    };
    return this.setOnceConnected(async () => {
      const i = await this.makeRequest(n);
      if (i.type === "Fail")
        throw new Error(i.error || "failed to set session metadata");
    });
  }
  async publishEvent(t, r, n = !1) {
    const i = await this.cipher.encrypt(
        JSON.stringify(
          Object.assign(Object.assign({}, r), {
            origin: location.origin,
            relaySource: window.coinbaseWalletExtension
              ? "injected_sdk"
              : "sdk",
          })
        )
      ),
      s = {
        type: "PublishEvent",
        id: (0, qr.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        event: t,
        data: i,
        callWebhook: n,
      };
    return this.setOnceLinked(async () => {
      const a = await this.makeRequest(s);
      if (a.type === "Fail")
        throw new Error(a.error || "failed to publish event");
      return a.eventId;
    });
  }
  sendData(t) {
    this.ws.sendData(JSON.stringify(t));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Ba * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {}
  }
  async makeRequest(t, r = ff) {
    const n = t.id;
    this.sendData(t);
    let i;
    return Promise.race([
      new Promise((s, a) => {
        i = window.setTimeout(() => {
          a(new Error(`request ${n} timed out`));
        }, r);
      }),
      new Promise((s) => {
        this.requestResolutions.set(n, (a) => {
          clearTimeout(i), s(a), this.requestResolutions.delete(n);
        });
      }),
    ]);
  }
  async authenticate() {
    const t = {
        type: "HostSession",
        id: (0, qr.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        sessionKey: this.session.key,
      },
      r = await this.makeRequest(t);
    if (r.type === "Fail") throw new Error(r.error || "failed to authentcate");
  }
  sendIsLinked() {
    const t = {
      type: "IsLinked",
      id: (0, qr.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
    };
    this.sendData(t);
  }
  sendGetSessionConfig() {
    const t = {
      type: "GetSessionConfig",
      id: (0, qr.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
    };
    this.sendData(t);
  }
}
Gi.WalletLinkConnection = pf;
var Zn = {},
  Kn = {},
  $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.default = (() =>
  '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}')();
var gf =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.injectCssReset = void 0;
const _f = gf($o);
function mf() {
  const e = document.createElement("style");
  (e.type = "text/css"),
    e.appendChild(document.createTextNode(_f.default)),
    document.documentElement.appendChild(e);
}
Kn.injectCssReset = mf;
var Ki = {},
  Qn,
  de,
  Dl,
  Fl,
  gr,
  Da,
  jl,
  vo,
  Hl,
  Pn = {},
  Bo = [],
  vf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  Qi = Array.isArray;
function jt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Ul(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function bo(e, t, r) {
  var n,
    i,
    s,
    a = {};
  for (s in t)
    s == "key" ? (n = t[s]) : s == "ref" ? (i = t[s]) : (a[s] = t[s]);
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? Qn.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (s in e.defaultProps) a[s] === void 0 && (a[s] = e.defaultProps[s]);
  return xn(e, a, n, i, null);
}
function xn(e, t, r, n, i) {
  var s = {
    type: e,
    props: t,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: i ?? ++Dl,
    __i: -1,
    __u: 0,
  };
  return i == null && de.vnode != null && de.vnode(s), s;
}
function bf() {
  return { current: null };
}
function Yn(e) {
  return e.children;
}
function An(e, t) {
  (this.props = e), (this.context = t);
}
function an(e, t) {
  if (t == null) return e.__ ? an(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? an(e) : null;
}
function yf(e, t, r) {
  var n,
    i = e.__v,
    s = i.__e,
    a = e.__P;
  if (a)
    return (
      ((n = jt({}, i)).__v = i.__v + 1),
      de.vnode && de.vnode(n),
      Do(
        a,
        n,
        i,
        e.__n,
        a.ownerSVGElement !== void 0,
        32 & i.__u ? [s] : null,
        t,
        s ?? an(i),
        !!(32 & i.__u),
        r
      ),
      (n.__v = i.__v),
      (n.__.__k[n.__i] = n),
      (n.__d = void 0),
      n.__e != s && Wl(n),
      n
    );
}
function Wl(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Wl(e);
  }
}
function yo(e) {
  ((!e.__d && (e.__d = !0) && gr.push(e) && !Ai.__r++) ||
    Da !== de.debounceRendering) &&
    ((Da = de.debounceRendering) || jl)(Ai);
}
function Ai() {
  var e,
    t,
    r,
    n = [],
    i = [];
  for (gr.sort(vo); (e = gr.shift()); )
    e.__d &&
      ((r = gr.length),
      (t = yf(e, n, i) || t),
      r === 0 || gr.length > r
        ? (wo(n, t, i), (i.length = n.length = 0), (t = void 0), gr.sort(vo))
        : t && de.__c && de.__c(t, Bo));
  t && wo(n, t, i), (Ai.__r = 0);
}
function Vl(e, t, r, n, i, s, a, c, u, d, g) {
  var p,
    E,
    k,
    A,
    O,
    L = (n && n.__k) || Bo,
    M = t.length;
  for (r.__d = u, wf(r, t, L), u = r.__d, p = 0; p < M; p++)
    (k = r.__k[p]) != null &&
      typeof k != "boolean" &&
      typeof k != "function" &&
      ((E = k.__i === -1 ? Pn : L[k.__i] || Pn),
      (k.__i = p),
      Do(e, k, E, i, s, a, c, u, d, g),
      (A = k.__e),
      k.ref &&
        E.ref != k.ref &&
        (E.ref && Fo(E.ref, null, k), g.push(k.ref, k.__c || A, k)),
      O == null && A != null && (O = A),
      65536 & k.__u || E.__k === k.__k
        ? (u = ql(k, u, e))
        : typeof k.type == "function" && k.__d !== void 0
        ? (u = k.__d)
        : A && (u = A.nextSibling),
      (k.__d = void 0),
      (k.__u &= -196609));
  (r.__d = u), (r.__e = O);
}
function wf(e, t, r) {
  var n,
    i,
    s,
    a,
    c,
    u = t.length,
    d = r.length,
    g = d,
    p = 0;
  for (e.__k = [], n = 0; n < u; n++)
    (a = n + p),
      (i = e.__k[n] =
        (i = t[n]) == null || typeof i == "boolean" || typeof i == "function"
          ? null
          : typeof i == "string" ||
            typeof i == "number" ||
            typeof i == "bigint" ||
            i.constructor == String
          ? xn(null, i, null, null, null)
          : Qi(i)
          ? xn(Yn, { children: i }, null, null, null)
          : i.constructor === void 0 && i.__b > 0
          ? xn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
          : i) != null
        ? ((i.__ = e),
          (i.__b = e.__b + 1),
          (c = Ef(i, r, a, g)),
          (i.__i = c),
          (s = null),
          c !== -1 && (g--, (s = r[c]) && (s.__u |= 131072)),
          s == null || s.__v === null
            ? (c == -1 && p--, typeof i.type != "function" && (i.__u |= 65536))
            : c !== a &&
              (c === a + 1
                ? p++
                : c > a
                ? g > u - a
                  ? (p += c - a)
                  : p--
                : c < a
                ? c == a - 1 && (p = c - a)
                : (p = 0),
              c !== n + p && (i.__u |= 65536)))
        : (s = r[a]) &&
          s.key == null &&
          s.__e &&
          !(131072 & s.__u) &&
          (s.__e == e.__d && (e.__d = an(s)), Eo(s, s, !1), (r[a] = null), g--);
  if (g)
    for (n = 0; n < d; n++)
      (s = r[n]) != null &&
        !(131072 & s.__u) &&
        (s.__e == e.__d && (e.__d = an(s)), Eo(s, s));
}
function ql(e, t, r) {
  var n, i;
  if (typeof e.type == "function") {
    for (n = e.__k, i = 0; n && i < n.length; i++)
      n[i] && ((n[i].__ = e), (t = ql(n[i], t, r)));
    return t;
  }
  e.__e != t && (r.insertBefore(e.__e, t || null), (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function zl(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Qi(e)
        ? e.some(function (r) {
            zl(r, t);
          })
        : t.push(e)),
    t
  );
}
function Ef(e, t, r, n) {
  var i = e.key,
    s = e.type,
    a = r - 1,
    c = r + 1,
    u = t[r];
  if (u === null || (u && i == u.key && s === u.type && !(131072 & u.__u)))
    return r;
  if (n > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; a >= 0 || c < t.length; ) {
      if (a >= 0) {
        if ((u = t[a]) && !(131072 & u.__u) && i == u.key && s === u.type)
          return a;
        a--;
      }
      if (c < t.length) {
        if ((u = t[c]) && !(131072 & u.__u) && i == u.key && s === u.type)
          return c;
        c++;
      }
    }
  return -1;
}
function Fa(e, t, r) {
  t[0] === "-"
    ? e.setProperty(t, r ?? "")
    : (e[t] =
        r == null ? "" : typeof r != "number" || vf.test(t) ? r : r + "px");
}
function fi(e, t, r, n, i) {
  var s;
  e: if (t === "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n))
        for (t in n) (r && t in r) || Fa(e.style, t, "");
      if (r) for (t in r) (n && r[t] === n[t]) || Fa(e.style, t, r[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + s] = r),
      r
        ? n
          ? (r.u = n.u)
          : ((r.u = Date.now()), e.addEventListener(t, s ? Ha : ja, s))
        : e.removeEventListener(t, s ? Ha : ja, s);
  else {
    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "width" &&
      t !== "height" &&
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t !== "rowSpan" &&
      t !== "colSpan" &&
      t !== "role" &&
      t in e
    )
      try {
        e[t] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, r));
  }
}
function ja(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u) return;
    } else e.t = Date.now();
    return t(de.event ? de.event(e) : e);
  }
}
function Ha(e) {
  if (this.l) return this.l[e.type + !0](de.event ? de.event(e) : e);
}
function Do(e, t, r, n, i, s, a, c, u, d) {
  var g,
    p,
    E,
    k,
    A,
    O,
    L,
    M,
    I,
    N,
    B,
    P,
    F,
    J,
    z,
    U = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && ((u = !!(32 & r.__u)), (s = [(c = t.__e = r.__e)])),
    (g = de.__b) && g(t);
  e: if (typeof U == "function")
    try {
      if (
        ((M = t.props),
        (I = (g = U.contextType) && n[g.__c]),
        (N = g ? (I ? I.props.value : g.__) : n),
        r.__c
          ? (L = (p = t.__c = r.__c).__ = p.__E)
          : ("prototype" in U && U.prototype.render
              ? (t.__c = p = new U(M, N))
              : ((t.__c = p = new An(M, N)),
                (p.constructor = U),
                (p.render = Rf)),
            I && I.sub(p),
            (p.props = M),
            p.state || (p.state = {}),
            (p.context = N),
            (p.__n = n),
            (E = p.__d = !0),
            (p.__h = []),
            (p._sb = [])),
        p.__s == null && (p.__s = p.state),
        U.getDerivedStateFromProps != null &&
          (p.__s == p.state && (p.__s = jt({}, p.__s)),
          jt(p.__s, U.getDerivedStateFromProps(M, p.__s))),
        (k = p.props),
        (A = p.state),
        (p.__v = t),
        E)
      )
        U.getDerivedStateFromProps == null &&
          p.componentWillMount != null &&
          p.componentWillMount(),
          p.componentDidMount != null && p.__h.push(p.componentDidMount);
      else {
        if (
          (U.getDerivedStateFromProps == null &&
            M !== k &&
            p.componentWillReceiveProps != null &&
            p.componentWillReceiveProps(M, N),
          !p.__e &&
            ((p.shouldComponentUpdate != null &&
              p.shouldComponentUpdate(M, p.__s, N) === !1) ||
              t.__v === r.__v))
        ) {
          for (
            t.__v !== r.__v && ((p.props = M), (p.state = p.__s), (p.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.forEach(function (X) {
                X && (X.__ = t);
              }),
              B = 0;
            B < p._sb.length;
            B++
          )
            p.__h.push(p._sb[B]);
          (p._sb = []), p.__h.length && a.push(p);
          break e;
        }
        p.componentWillUpdate != null && p.componentWillUpdate(M, p.__s, N),
          p.componentDidUpdate != null &&
            p.__h.push(function () {
              p.componentDidUpdate(k, A, O);
            });
      }
      if (
        ((p.context = N),
        (p.props = M),
        (p.__P = e),
        (p.__e = !1),
        (P = de.__r),
        (F = 0),
        "prototype" in U && U.prototype.render)
      ) {
        for (
          p.state = p.__s,
            p.__d = !1,
            P && P(t),
            g = p.render(p.props, p.state, p.context),
            J = 0;
          J < p._sb.length;
          J++
        )
          p.__h.push(p._sb[J]);
        p._sb = [];
      } else
        do
          (p.__d = !1),
            P && P(t),
            (g = p.render(p.props, p.state, p.context)),
            (p.state = p.__s);
        while (p.__d && ++F < 25);
      (p.state = p.__s),
        p.getChildContext != null && (n = jt(jt({}, n), p.getChildContext())),
        E ||
          p.getSnapshotBeforeUpdate == null ||
          (O = p.getSnapshotBeforeUpdate(k, A)),
        Vl(
          e,
          Qi(
            (z =
              g != null && g.type === Yn && g.key == null
                ? g.props.children
                : g)
          )
            ? z
            : [z],
          t,
          r,
          n,
          i,
          s,
          a,
          c,
          u,
          d
        ),
        (p.base = t.__e),
        (t.__u &= -161),
        p.__h.length && a.push(p),
        L && (p.__E = p.__ = null);
    } catch (X) {
      (t.__v = null),
        u || s != null
          ? ((t.__e = c), (t.__u |= u ? 160 : 32), (s[s.indexOf(c)] = null))
          : ((t.__e = r.__e), (t.__k = r.__k)),
        de.__e(X, t, r);
    }
  else
    s == null && t.__v === r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (t.__e = Sf(r.__e, t, r, n, i, s, a, u, d));
  (g = de.diffed) && g(t);
}
function wo(e, t, r) {
  for (var n = 0; n < r.length; n++) Fo(r[n], r[++n], r[++n]);
  de.__c && de.__c(t, e),
    e.some(function (i) {
      try {
        (e = i.__h),
          (i.__h = []),
          e.some(function (s) {
            s.call(i);
          });
      } catch (s) {
        de.__e(s, i.__v);
      }
    });
}
function Sf(e, t, r, n, i, s, a, c, u) {
  var d,
    g,
    p,
    E,
    k,
    A,
    O,
    L = r.props,
    M = t.props,
    I = t.type;
  if ((I === "svg" && (i = !0), s != null)) {
    for (d = 0; d < s.length; d++)
      if (
        (k = s[d]) &&
        "setAttribute" in k == !!I &&
        (I ? k.localName === I : k.nodeType === 3)
      ) {
        (e = k), (s[d] = null);
        break;
      }
  }
  if (e == null) {
    if (I === null) return document.createTextNode(M);
    (e = i
      ? document.createElementNS("http://www.w3.org/2000/svg", I)
      : document.createElement(I, M.is && M)),
      (s = null),
      (c = !1);
  }
  if (I === null) L === M || (c && e.data === M) || (e.data = M);
  else {
    if (
      ((s = s && Qn.call(e.childNodes)), (L = r.props || Pn), !c && s != null)
    )
      for (L = {}, d = 0; d < e.attributes.length; d++)
        L[(k = e.attributes[d]).name] = k.value;
    for (d in L)
      (k = L[d]),
        d == "children" ||
          (d == "dangerouslySetInnerHTML"
            ? (p = k)
            : d === "key" || d in M || fi(e, d, null, k, i));
    for (d in M)
      (k = M[d]),
        d == "children"
          ? (E = k)
          : d == "dangerouslySetInnerHTML"
          ? (g = k)
          : d == "value"
          ? (A = k)
          : d == "checked"
          ? (O = k)
          : d === "key" ||
            (c && typeof k != "function") ||
            L[d] === k ||
            fi(e, d, k, L[d], i);
    if (g)
      c ||
        (p && (g.__html === p.__html || g.__html === e.innerHTML)) ||
        (e.innerHTML = g.__html),
        (t.__k = []);
    else if (
      (p && (e.innerHTML = ""),
      Vl(
        e,
        Qi(E) ? E : [E],
        t,
        r,
        n,
        i && I !== "foreignObject",
        s,
        a,
        s ? s[0] : r.__k && an(r, 0),
        c,
        u
      ),
      s != null)
    )
      for (d = s.length; d--; ) s[d] != null && Ul(s[d]);
    c ||
      ((d = "value"),
      A !== void 0 &&
        (A !== e[d] ||
          (I === "progress" && !A) ||
          (I === "option" && A !== L[d])) &&
        fi(e, d, A, L[d], !1),
      (d = "checked"),
      O !== void 0 && O !== e[d] && fi(e, d, O, L[d], !1));
  }
  return e;
}
function Fo(e, t, r) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (n) {
    de.__e(n, r);
  }
}
function Eo(e, t, r) {
  var n, i;
  if (
    (de.unmount && de.unmount(e),
    (n = e.ref) && ((n.current && n.current !== e.__e) || Fo(n, null, t)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        de.__e(s, t);
      }
    (n.base = n.__P = null), (e.__c = void 0);
  }
  if ((n = e.__k))
    for (i = 0; i < n.length; i++)
      n[i] && Eo(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Ul(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function Rf(e, t, r) {
  return this.constructor(e, r);
}
function Gl(e, t, r) {
  var n, i, s, a;
  de.__ && de.__(e, t),
    (i = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (s = []),
    (a = []),
    Do(
      t,
      (e = ((!n && r) || t).__k = bo(Yn, null, [e])),
      i || Pn,
      Pn,
      t.ownerSVGElement !== void 0,
      !n && r ? [r] : i ? null : t.firstChild ? Qn.call(t.childNodes) : null,
      s,
      !n && r ? r : i ? i.__e : t.firstChild,
      n,
      a
    ),
    (e.__d = void 0),
    wo(s, e, a);
}
function Jl(e, t) {
  Gl(e, t, Jl);
}
function Mf(e, t, r) {
  var n,
    i,
    s,
    a,
    c = jt({}, e.props);
  for (s in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
    s == "key"
      ? (n = t[s])
      : s == "ref"
      ? (i = t[s])
      : (c[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  return (
    arguments.length > 2 &&
      (c.children = arguments.length > 3 ? Qn.call(arguments, 2) : r),
    xn(e.type, c, n || e.key, i || e.ref, null)
  );
}
function kf(e, t) {
  var r = {
    __c: (t = "__cC" + Hl++),
    __: e,
    Consumer: function (n, i) {
      return n.children(i);
    },
    Provider: function (n) {
      var i, s;
      return (
        this.getChildContext ||
          ((i = []),
          ((s = {})[t] = this),
          (this.getChildContext = function () {
            return s;
          }),
          (this.shouldComponentUpdate = function (a) {
            this.props.value !== a.value &&
              i.some(function (c) {
                (c.__e = !0), yo(c);
              });
          }),
          (this.sub = function (a) {
            i.push(a);
            var c = a.componentWillUnmount;
            a.componentWillUnmount = function () {
              i.splice(i.indexOf(a), 1), c && c.call(a);
            };
          })),
        n.children
      );
    },
  };
  return (r.Provider.__ = r.Consumer.contextType = r);
}
(Qn = Bo.slice),
  (de = {
    __e: function (e, t, r, n) {
      for (var i, s, a; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((s = i.constructor) &&
                s.getDerivedStateFromError != null &&
                (i.setState(s.getDerivedStateFromError(e)), (a = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, n || {}), (a = i.__d)),
              a)
            )
              return (i.__E = i);
          } catch (c) {
            e = c;
          }
      throw e;
    },
  }),
  (Dl = 0),
  (Fl = function (e) {
    return e != null && e.constructor == null;
  }),
  (An.prototype.setState = function (e, t) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = jt({}, this.state))),
      typeof e == "function" && (e = e(jt({}, r), this.props)),
      e && jt(r, e),
      e != null && this.__v && (t && this._sb.push(t), yo(this));
  }),
  (An.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), yo(this));
  }),
  (An.prototype.render = Yn),
  (gr = []),
  (jl =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (vo = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (Ai.__r = 0),
  (Hl = 0);
const Cf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Component: An,
        Fragment: Yn,
        cloneElement: Mf,
        createContext: kf,
        createElement: bo,
        createRef: bf,
        h: bo,
        hydrate: Jl,
        get isValidElement() {
          return Fl;
        },
        get options() {
          return de;
        },
        render: Gl,
        toChildArray: zl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ot = pn(Cf);
var Yi = {};
function Zl(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Zl(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function Ua() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Zl(e)) && (n && (n += " "), (n += t));
  return n;
}
const If = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: Ua, default: Ua },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xn = pn(If);
var Ut,
  ge,
  Ds,
  Wa,
  cn = 0,
  Kl = [],
  ki = [],
  Ve = de,
  Va = Ve.__b,
  qa = Ve.__r,
  za = Ve.diffed,
  Ga = Ve.__c,
  Ja = Ve.unmount,
  Za = Ve.__;
function xr(e, t) {
  Ve.__h && Ve.__h(ge, e, cn || t), (cn = 0);
  var r = ge.__H || (ge.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: ki }), r.__[e];
}
function Ql(e) {
  return (cn = 1), Yl(eu, e);
}
function Yl(e, t, r) {
  var n = xr(Ut++, 2);
  if (
    ((n.t = e),
    !n.__c &&
      ((n.__ = [
        r ? r(t) : eu(void 0, t),
        function (c) {
          var u = n.__N ? n.__N[0] : n.__[0],
            d = n.t(u, c);
          u !== d && ((n.__N = [d, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = ge),
      !ge.u))
  ) {
    var i = function (c, u, d) {
      if (!n.__c.__H) return !0;
      var g = n.__c.__H.__.filter(function (E) {
        return !!E.__c;
      });
      if (
        g.every(function (E) {
          return !E.__N;
        })
      )
        return !s || s.call(this, c, u, d);
      var p = !1;
      return (
        g.forEach(function (E) {
          if (E.__N) {
            var k = E.__[0];
            (E.__ = E.__N), (E.__N = void 0), k !== E.__[0] && (p = !0);
          }
        }),
        !(!p && n.__c.props === c) && (!s || s.call(this, c, u, d))
      );
    };
    ge.u = !0;
    var s = ge.shouldComponentUpdate,
      a = ge.componentWillUpdate;
    (ge.componentWillUpdate = function (c, u, d) {
      if (this.__e) {
        var g = s;
        (s = void 0), i(c, u, d), (s = g);
      }
      a && a.call(this, c, u, d);
    }),
      (ge.shouldComponentUpdate = i);
  }
  return n.__N || n.__;
}
function xf(e, t) {
  var r = xr(Ut++, 3);
  !Ve.__s && Ho(r.__H, t) && ((r.__ = e), (r.i = t), ge.__H.__h.push(r));
}
function Xl(e, t) {
  var r = xr(Ut++, 4);
  !Ve.__s && Ho(r.__H, t) && ((r.__ = e), (r.i = t), ge.__h.push(r));
}
function Af(e) {
  return (
    (cn = 5),
    jo(function () {
      return { current: e };
    }, [])
  );
}
function Tf(e, t, r) {
  (cn = 6),
    Xl(
      function () {
        return typeof e == "function"
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
          ? ((e.current = t()),
            function () {
              return (e.current = null);
            })
          : void 0;
      },
      r == null ? r : r.concat(e)
    );
}
function jo(e, t) {
  var r = xr(Ut++, 7);
  return Ho(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function Nf(e, t) {
  return (
    (cn = 8),
    jo(function () {
      return e;
    }, t)
  );
}
function Lf(e) {
  var t = ge.context[e.__c],
    r = xr(Ut++, 9);
  return (
    (r.c = e),
    t ? (r.__ == null && ((r.__ = !0), t.sub(ge)), t.props.value) : e.__
  );
}
function Pf(e, t) {
  Ve.useDebugValue && Ve.useDebugValue(t ? t(e) : e);
}
function Of(e) {
  var t = xr(Ut++, 10),
    r = Ql();
  return (
    (t.__ = e),
    ge.componentDidCatch ||
      (ge.componentDidCatch = function (n, i) {
        t.__ && t.__(n, i), r[1](n);
      }),
    [
      r[0],
      function () {
        r[1](void 0);
      },
    ]
  );
}
function $f() {
  var e = xr(Ut++, 11);
  if (!e.__) {
    for (var t = ge.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function Bf() {
  for (var e; (e = Kl.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ci), e.__H.__h.forEach(So), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), Ve.__e(t, e.__v);
      }
}
(Ve.__b = function (e) {
  (ge = null), Va && Va(e);
}),
  (Ve.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Za && Za(e, t);
  }),
  (Ve.__r = function (e) {
    qa && qa(e), (Ut = 0);
    var t = (ge = e.__c).__H;
    t &&
      (Ds === ge
        ? ((t.__h = []),
          (ge.__h = []),
          t.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.__V = ki), (r.__N = r.i = void 0);
          }))
        : (t.__h.forEach(Ci), t.__h.forEach(So), (t.__h = []), (Ut = 0))),
      (Ds = ge);
  }),
  (Ve.diffed = function (e) {
    za && za(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Kl.push(t) !== 1 && Wa === Ve.requestAnimationFrame) ||
          ((Wa = Ve.requestAnimationFrame) || Df)(Bf)),
      t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i),
          r.__V !== ki && (r.__ = r.__V),
          (r.i = void 0),
          (r.__V = ki);
      })),
      (Ds = ge = null);
  }),
  (Ve.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(Ci),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || So(n);
          }));
      } catch (n) {
        t.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (t = []),
          Ve.__e(n, r.__v);
      }
    }),
      Ga && Ga(e, t);
  }),
  (Ve.unmount = function (e) {
    Ja && Ja(e);
    var t,
      r = e.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (n) {
        try {
          Ci(n);
        } catch (i) {
          t = i;
        }
      }),
      (r.__H = void 0),
      t && Ve.__e(t, r.__v));
  });
var Ka = typeof requestAnimationFrame == "function";
function Df(e) {
  var t,
    r = function () {
      clearTimeout(n), Ka && cancelAnimationFrame(t), setTimeout(e);
    },
    n = setTimeout(r, 100);
  Ka && (t = requestAnimationFrame(r));
}
function Ci(e) {
  var t = ge,
    r = e.__c;
  typeof r == "function" && ((e.__c = void 0), r()), (ge = t);
}
function So(e) {
  var t = ge;
  (e.__c = e.__()), (ge = t);
}
function Ho(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, n) {
      return r !== e[n];
    })
  );
}
function eu(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Ff = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        useCallback: Nf,
        useContext: Lf,
        useDebugValue: Pf,
        useEffect: xf,
        useErrorBoundary: Of,
        useId: $f,
        useImperativeHandle: Tf,
        useLayoutEffect: Xl,
        useMemo: jo,
        useReducer: Yl,
        useRef: Af,
        useState: Ql,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xi = pn(Ff);
var ln = {},
  es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.CloseIcon = void 0;
const Qa = ot;
function jf(e) {
  return (0, Qa.h)(
    "svg",
    Object.assign(
      {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Qa.h)("path", {
      d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z",
    })
  );
}
es.CloseIcon = jf;
var ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.CoinbaseWalletRound = void 0;
const pi = ot;
function Hf(e) {
  return (0, pi.h)(
    "svg",
    Object.assign(
      {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, pi.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
    (0, pi.h)("path", {
      d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
      fill: "white",
    }),
    (0, pi.h)("path", {
      d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
      fill: "#0052FF",
    })
  );
}
ts.CoinbaseWalletRound = Hf;
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.QRCodeIcon = void 0;
const Rn = ot;
function Uf(e) {
  return (0, Rn.h)(
    "svg",
    Object.assign(
      {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Rn.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
    (0, Rn.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
    (0, Rn.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
    (0, Rn.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
  );
}
rs.QRCodeIcon = Uf;
var ns = {};
function tu(e) {
  (this.mode = ut.MODE_8BIT_BYTE), (this.data = e), (this.parsedData = []);
  for (var t = 0, r = this.data.length; t < r; t++) {
    var n = [],
      i = this.data.charCodeAt(t);
    i > 65536
      ? ((n[0] = 240 | ((i & 1835008) >>> 18)),
        (n[1] = 128 | ((i & 258048) >>> 12)),
        (n[2] = 128 | ((i & 4032) >>> 6)),
        (n[3] = 128 | (i & 63)))
      : i > 2048
      ? ((n[0] = 224 | ((i & 61440) >>> 12)),
        (n[1] = 128 | ((i & 4032) >>> 6)),
        (n[2] = 128 | (i & 63)))
      : i > 128
      ? ((n[0] = 192 | ((i & 1984) >>> 6)), (n[1] = 128 | (i & 63)))
      : (n[0] = i),
      this.parsedData.push(n);
  }
  (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
    this.parsedData.length != this.data.length &&
      (this.parsedData.unshift(191),
      this.parsedData.unshift(187),
      this.parsedData.unshift(239));
}
tu.prototype = {
  getLength: function (e) {
    return this.parsedData.length;
  },
  write: function (e) {
    for (var t = 0, r = this.parsedData.length; t < r; t++)
      e.put(this.parsedData[t], 8);
  },
};
function Nt(e, t) {
  (this.typeNumber = e),
    (this.errorCorrectLevel = t),
    (this.modules = null),
    (this.moduleCount = 0),
    (this.dataCache = null),
    (this.dataList = []);
}
Nt.prototype = {
  addData: function (e) {
    var t = new tu(e);
    this.dataList.push(t), (this.dataCache = null);
  },
  isDark: function (e, t) {
    if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
      throw new Error(e + "," + t);
    return this.modules[e][t];
  },
  getModuleCount: function () {
    return this.moduleCount;
  },
  make: function () {
    this.makeImpl(!1, this.getBestMaskPattern());
  },
  makeImpl: function (e, t) {
    (this.moduleCount = this.typeNumber * 4 + 17),
      (this.modules = new Array(this.moduleCount));
    for (var r = 0; r < this.moduleCount; r++) {
      this.modules[r] = new Array(this.moduleCount);
      for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null;
    }
    this.setupPositionProbePattern(0, 0),
      this.setupPositionProbePattern(this.moduleCount - 7, 0),
      this.setupPositionProbePattern(0, this.moduleCount - 7),
      this.setupPositionAdjustPattern(),
      this.setupTimingPattern(),
      this.setupTypeInfo(e, t),
      this.typeNumber >= 7 && this.setupTypeNumber(e),
      this.dataCache == null &&
        (this.dataCache = Nt.createData(
          this.typeNumber,
          this.errorCorrectLevel,
          this.dataList
        )),
      this.mapData(this.dataCache, t);
  },
  setupPositionProbePattern: function (e, t) {
    for (var r = -1; r <= 7; r++)
      if (!(e + r <= -1 || this.moduleCount <= e + r))
        for (var n = -1; n <= 7; n++)
          t + n <= -1 ||
            this.moduleCount <= t + n ||
            ((0 <= r && r <= 6 && (n == 0 || n == 6)) ||
            (0 <= n && n <= 6 && (r == 0 || r == 6)) ||
            (2 <= r && r <= 4 && 2 <= n && n <= 4)
              ? (this.modules[e + r][t + n] = !0)
              : (this.modules[e + r][t + n] = !1));
  },
  getBestMaskPattern: function () {
    for (var e = 0, t = 0, r = 0; r < 8; r++) {
      this.makeImpl(!0, r);
      var n = We.getLostPoint(this);
      (r == 0 || e > n) && ((e = n), (t = r));
    }
    return t;
  },
  createMovieClip: function (e, t, r) {
    var n = e.createEmptyMovieClip(t, r),
      i = 1;
    this.make();
    for (var s = 0; s < this.modules.length; s++)
      for (var a = s * i, c = 0; c < this.modules[s].length; c++) {
        var u = c * i,
          d = this.modules[s][c];
        d &&
          (n.beginFill(0, 100),
          n.moveTo(u, a),
          n.lineTo(u + i, a),
          n.lineTo(u + i, a + i),
          n.lineTo(u, a + i),
          n.endFill());
      }
    return n;
  },
  setupTimingPattern: function () {
    for (var e = 8; e < this.moduleCount - 8; e++)
      this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
    for (var t = 8; t < this.moduleCount - 8; t++)
      this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0);
  },
  setupPositionAdjustPattern: function () {
    for (
      var e = We.getPatternPosition(this.typeNumber), t = 0;
      t < e.length;
      t++
    )
      for (var r = 0; r < e.length; r++) {
        var n = e[t],
          i = e[r];
        if (this.modules[n][i] == null)
          for (var s = -2; s <= 2; s++)
            for (var a = -2; a <= 2; a++)
              s == -2 || s == 2 || a == -2 || a == 2 || (s == 0 && a == 0)
                ? (this.modules[n + s][i + a] = !0)
                : (this.modules[n + s][i + a] = !1);
      }
  },
  setupTypeNumber: function (e) {
    for (var t = We.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
      var n = !e && ((t >> r) & 1) == 1;
      this.modules[Math.floor(r / 3)][(r % 3) + this.moduleCount - 8 - 3] = n;
    }
    for (var r = 0; r < 18; r++) {
      var n = !e && ((t >> r) & 1) == 1;
      this.modules[(r % 3) + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
    }
  },
  setupTypeInfo: function (e, t) {
    for (
      var r = (this.errorCorrectLevel << 3) | t,
        n = We.getBCHTypeInfo(r),
        i = 0;
      i < 15;
      i++
    ) {
      var s = !e && ((n >> i) & 1) == 1;
      i < 6
        ? (this.modules[i][8] = s)
        : i < 8
        ? (this.modules[i + 1][8] = s)
        : (this.modules[this.moduleCount - 15 + i][8] = s);
    }
    for (var i = 0; i < 15; i++) {
      var s = !e && ((n >> i) & 1) == 1;
      i < 8
        ? (this.modules[8][this.moduleCount - i - 1] = s)
        : i < 9
        ? (this.modules[8][15 - i - 1 + 1] = s)
        : (this.modules[8][15 - i - 1] = s);
    }
    this.modules[this.moduleCount - 8][8] = !e;
  },
  mapData: function (e, t) {
    for (
      var r = -1,
        n = this.moduleCount - 1,
        i = 7,
        s = 0,
        a = this.moduleCount - 1;
      a > 0;
      a -= 2
    )
      for (a == 6 && a--; ; ) {
        for (var c = 0; c < 2; c++)
          if (this.modules[n][a - c] == null) {
            var u = !1;
            s < e.length && (u = ((e[s] >>> i) & 1) == 1);
            var d = We.getMask(t, n, a - c);
            d && (u = !u),
              (this.modules[n][a - c] = u),
              i--,
              i == -1 && (s++, (i = 7));
          }
        if (((n += r), n < 0 || this.moduleCount <= n)) {
          (n -= r), (r = -r);
          break;
        }
      }
  },
};
Nt.PAD0 = 236;
Nt.PAD1 = 17;
Nt.createData = function (e, t, r) {
  for (var n = Tt.getRSBlocks(e, t), i = new ru(), s = 0; s < r.length; s++) {
    var a = r[s];
    i.put(a.mode, 4),
      i.put(a.getLength(), We.getLengthInBits(a.mode, e)),
      a.write(i);
  }
  for (var c = 0, s = 0; s < n.length; s++) c += n[s].dataCount;
  if (i.getLengthInBits() > c * 8)
    throw new Error(
      "code length overflow. (" + i.getLengthInBits() + ">" + c * 8 + ")"
    );
  for (
    i.getLengthInBits() + 4 <= c * 8 && i.put(0, 4);
    i.getLengthInBits() % 8 != 0;

  )
    i.putBit(!1);
  for (
    ;
    !(
      i.getLengthInBits() >= c * 8 ||
      (i.put(Nt.PAD0, 8), i.getLengthInBits() >= c * 8)
    );

  )
    i.put(Nt.PAD1, 8);
  return Nt.createBytes(i, n);
};
Nt.createBytes = function (e, t) {
  for (
    var r = 0,
      n = 0,
      i = 0,
      s = new Array(t.length),
      a = new Array(t.length),
      c = 0;
    c < t.length;
    c++
  ) {
    var u = t[c].dataCount,
      d = t[c].totalCount - u;
    (n = Math.max(n, u)), (i = Math.max(i, d)), (s[c] = new Array(u));
    for (var g = 0; g < s[c].length; g++) s[c][g] = 255 & e.buffer[g + r];
    r += u;
    var p = We.getErrorCorrectPolynomial(d),
      E = new Xr(s[c], p.getLength() - 1),
      k = E.mod(p);
    a[c] = new Array(p.getLength() - 1);
    for (var g = 0; g < a[c].length; g++) {
      var A = g + k.getLength() - a[c].length;
      a[c][g] = A >= 0 ? k.get(A) : 0;
    }
  }
  for (var O = 0, g = 0; g < t.length; g++) O += t[g].totalCount;
  for (var L = new Array(O), M = 0, g = 0; g < n; g++)
    for (var c = 0; c < t.length; c++) g < s[c].length && (L[M++] = s[c][g]);
  for (var g = 0; g < i; g++)
    for (var c = 0; c < t.length; c++) g < a[c].length && (L[M++] = a[c][g]);
  return L;
};
var ut = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8,
  },
  Jt = { L: 1, M: 0, Q: 3, H: 2 },
  qt = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  },
  We = {
    PATTERN_POSITION_TABLE: [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170],
    ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function (e) {
      for (var t = e << 10; We.getBCHDigit(t) - We.getBCHDigit(We.G15) >= 0; )
        t ^= We.G15 << (We.getBCHDigit(t) - We.getBCHDigit(We.G15));
      return ((e << 10) | t) ^ We.G15_MASK;
    },
    getBCHTypeNumber: function (e) {
      for (var t = e << 12; We.getBCHDigit(t) - We.getBCHDigit(We.G18) >= 0; )
        t ^= We.G18 << (We.getBCHDigit(t) - We.getBCHDigit(We.G18));
      return (e << 12) | t;
    },
    getBCHDigit: function (e) {
      for (var t = 0; e != 0; ) t++, (e >>>= 1);
      return t;
    },
    getPatternPosition: function (e) {
      return We.PATTERN_POSITION_TABLE[e - 1];
    },
    getMask: function (e, t, r) {
      switch (e) {
        case qt.PATTERN000:
          return (t + r) % 2 == 0;
        case qt.PATTERN001:
          return t % 2 == 0;
        case qt.PATTERN010:
          return r % 3 == 0;
        case qt.PATTERN011:
          return (t + r) % 3 == 0;
        case qt.PATTERN100:
          return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
        case qt.PATTERN101:
          return ((t * r) % 2) + ((t * r) % 3) == 0;
        case qt.PATTERN110:
          return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
        case qt.PATTERN111:
          return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + e);
      }
    },
    getErrorCorrectPolynomial: function (e) {
      for (var t = new Xr([1], 0), r = 0; r < e; r++)
        t = t.multiply(new Xr([1, Ye.gexp(r)], 0));
      return t;
    },
    getLengthInBits: function (e, t) {
      if (1 <= t && t < 10)
        switch (e) {
          case ut.MODE_NUMBER:
            return 10;
          case ut.MODE_ALPHA_NUM:
            return 9;
          case ut.MODE_8BIT_BYTE:
            return 8;
          case ut.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 27)
        switch (e) {
          case ut.MODE_NUMBER:
            return 12;
          case ut.MODE_ALPHA_NUM:
            return 11;
          case ut.MODE_8BIT_BYTE:
            return 16;
          case ut.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 41)
        switch (e) {
          case ut.MODE_NUMBER:
            return 14;
          case ut.MODE_ALPHA_NUM:
            return 13;
          case ut.MODE_8BIT_BYTE:
            return 16;
          case ut.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + e);
        }
      else throw new Error("type:" + t);
    },
    getLostPoint: function (e) {
      for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
        for (var i = 0; i < t; i++) {
          for (var s = 0, a = e.isDark(n, i), c = -1; c <= 1; c++)
            if (!(n + c < 0 || t <= n + c))
              for (var u = -1; u <= 1; u++)
                i + u < 0 ||
                  t <= i + u ||
                  (c == 0 && u == 0) ||
                  (a == e.isDark(n + c, i + u) && s++);
          s > 5 && (r += 3 + s - 5);
        }
      for (var n = 0; n < t - 1; n++)
        for (var i = 0; i < t - 1; i++) {
          var d = 0;
          e.isDark(n, i) && d++,
            e.isDark(n + 1, i) && d++,
            e.isDark(n, i + 1) && d++,
            e.isDark(n + 1, i + 1) && d++,
            (d == 0 || d == 4) && (r += 3);
        }
      for (var n = 0; n < t; n++)
        for (var i = 0; i < t - 6; i++)
          e.isDark(n, i) &&
            !e.isDark(n, i + 1) &&
            e.isDark(n, i + 2) &&
            e.isDark(n, i + 3) &&
            e.isDark(n, i + 4) &&
            !e.isDark(n, i + 5) &&
            e.isDark(n, i + 6) &&
            (r += 40);
      for (var i = 0; i < t; i++)
        for (var n = 0; n < t - 6; n++)
          e.isDark(n, i) &&
            !e.isDark(n + 1, i) &&
            e.isDark(n + 2, i) &&
            e.isDark(n + 3, i) &&
            e.isDark(n + 4, i) &&
            !e.isDark(n + 5, i) &&
            e.isDark(n + 6, i) &&
            (r += 40);
      for (var g = 0, i = 0; i < t; i++)
        for (var n = 0; n < t; n++) e.isDark(n, i) && g++;
      var p = Math.abs((100 * g) / t / t - 50) / 5;
      return (r += p * 10), r;
    },
  },
  Ye = {
    glog: function (e) {
      if (e < 1) throw new Error("glog(" + e + ")");
      return Ye.LOG_TABLE[e];
    },
    gexp: function (e) {
      for (; e < 0; ) e += 255;
      for (; e >= 256; ) e -= 255;
      return Ye.EXP_TABLE[e];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256),
  };
for (var et = 0; et < 8; et++) Ye.EXP_TABLE[et] = 1 << et;
for (var et = 8; et < 256; et++)
  Ye.EXP_TABLE[et] =
    Ye.EXP_TABLE[et - 4] ^
    Ye.EXP_TABLE[et - 5] ^
    Ye.EXP_TABLE[et - 6] ^
    Ye.EXP_TABLE[et - 8];
for (var et = 0; et < 255; et++) Ye.LOG_TABLE[Ye.EXP_TABLE[et]] = et;
function Xr(e, t) {
  if (e.length == null) throw new Error(e.length + "/" + t);
  for (var r = 0; r < e.length && e[r] == 0; ) r++;
  this.num = new Array(e.length - r + t);
  for (var n = 0; n < e.length - r; n++) this.num[n] = e[n + r];
}
Xr.prototype = {
  get: function (e) {
    return this.num[e];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (e) {
    for (
      var t = new Array(this.getLength() + e.getLength() - 1), r = 0;
      r < this.getLength();
      r++
    )
      for (var n = 0; n < e.getLength(); n++)
        t[r + n] ^= Ye.gexp(Ye.glog(this.get(r)) + Ye.glog(e.get(n)));
    return new Xr(t, 0);
  },
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) return this;
    for (
      var t = Ye.glog(this.get(0)) - Ye.glog(e.get(0)),
        r = new Array(this.getLength()),
        n = 0;
      n < this.getLength();
      n++
    )
      r[n] = this.get(n);
    for (var n = 0; n < e.getLength(); n++)
      r[n] ^= Ye.gexp(Ye.glog(e.get(n)) + t);
    return new Xr(r, 0).mod(e);
  },
};
function Tt(e, t) {
  (this.totalCount = e), (this.dataCount = t);
}
Tt.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];
Tt.getRSBlocks = function (e, t) {
  var r = Tt.getRsBlockTable(e, t);
  if (r == null)
    throw new Error(
      "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
    );
  for (var n = r.length / 3, i = [], s = 0; s < n; s++)
    for (
      var a = r[s * 3 + 0], c = r[s * 3 + 1], u = r[s * 3 + 2], d = 0;
      d < a;
      d++
    )
      i.push(new Tt(c, u));
  return i;
};
Tt.getRsBlockTable = function (e, t) {
  switch (t) {
    case Jt.L:
      return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case Jt.M:
      return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case Jt.Q:
      return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case Jt.H:
      return Tt.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
      return;
  }
};
function ru() {
  (this.buffer = []), (this.length = 0);
}
ru.prototype = {
  get: function (e) {
    var t = Math.floor(e / 8);
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
  },
  put: function (e, t) {
    for (var r = 0; r < t; r++) this.putBit(((e >>> (t - r - 1)) & 1) == 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var Fs = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273],
];
function nu(e) {
  if (
    ((this.options = {
      padding: 4,
      width: 256,
      height: 256,
      typeNumber: 4,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      image: { svg: "", width: 0, height: 0 },
    }),
    typeof e == "string" && (e = { content: e }),
    e)
  )
    for (var t in e) this.options[t] = e[t];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error(
      "Expected 'width' or 'height' value to be higher than zero!"
    );
  function r(u) {
    switch (u) {
      case "L":
        return Jt.L;
      case "M":
        return Jt.M;
      case "Q":
        return Jt.Q;
      case "H":
        return Jt.H;
      default:
        throw new Error("Unknwon error correction level: " + u);
    }
  }
  function n(u, d) {
    for (var g = i(u), p = 1, E = 0, k = 0, A = Fs.length; k <= A; k++) {
      var O = Fs[k];
      if (!O)
        throw new Error("Content too long: expected " + E + " but got " + g);
      switch (d) {
        case "L":
          E = O[0];
          break;
        case "M":
          E = O[1];
          break;
        case "Q":
          E = O[2];
          break;
        case "H":
          E = O[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + d);
      }
      if (g <= E) break;
      p++;
    }
    if (p > Fs.length) throw new Error("Content too long");
    return p;
  }
  function i(u) {
    var d = encodeURI(u)
      .toString()
      .replace(/\%[0-9a-fA-F]{2}/g, "a");
    return d.length + (d.length != u ? 3 : 0);
  }
  var s = this.options.content,
    a = n(s, this.options.ecl),
    c = r(this.options.ecl);
  (this.qrcode = new Nt(a, c)), this.qrcode.addData(s), this.qrcode.make();
}
nu.prototype.svg = function (e) {
  var t = this.options || {},
    r = this.qrcode.modules;
  typeof e > "u" && (e = { container: t.container || "svg" });
  for (
    var n = typeof t.pretty < "u" ? !!t.pretty : !0,
      i = n ? "  " : "",
      s = n
        ? `\r
`
        : "",
      a = t.width,
      c = t.height,
      u = r.length,
      d = a / (u + 2 * t.padding),
      g = c / (u + 2 * t.padding),
      p = typeof t.join < "u" ? !!t.join : !1,
      E = typeof t.swap < "u" ? !!t.swap : !1,
      k = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0,
      A = typeof t.predefined < "u" ? !!t.predefined : !1,
      O = A
        ? i +
          '<defs><path id="qrmodule" d="M0 0 h' +
          g +
          " v" +
          d +
          ' H0 z" style="fill:' +
          t.color +
          ';shape-rendering:crispEdges;" /></defs>' +
          s
        : "",
      L =
        i +
        '<rect x="0" y="0" width="' +
        a +
        '" height="' +
        c +
        '" style="fill:' +
        t.background +
        ';shape-rendering:crispEdges;"/>' +
        s,
      M = "",
      I = "",
      N = 0;
    N < u;
    N++
  )
    for (var B = 0; B < u; B++) {
      var P = r[B][N];
      if (P) {
        var F = B * d + t.padding * d,
          J = N * g + t.padding * g;
        if (E) {
          var z = F;
          (F = J), (J = z);
        }
        if (p) {
          var U = d + F,
            X = g + J;
          (F = Number.isInteger(F) ? Number(F) : F.toFixed(2)),
            (J = Number.isInteger(J) ? Number(J) : J.toFixed(2)),
            (U = Number.isInteger(U) ? Number(U) : U.toFixed(2)),
            (X = Number.isInteger(X) ? Number(X) : X.toFixed(2)),
            (I +=
              "M" +
              F +
              "," +
              J +
              " V" +
              X +
              " H" +
              U +
              " V" +
              J +
              " H" +
              F +
              " Z ");
        } else
          A
            ? (M +=
                i +
                '<use x="' +
                F.toString() +
                '" y="' +
                J.toString() +
                '" href="#qrmodule" />' +
                s)
            : (M +=
                i +
                '<rect x="' +
                F.toString() +
                '" y="' +
                J.toString() +
                '" width="' +
                d +
                '" height="' +
                g +
                '" style="fill:' +
                t.color +
                ';shape-rendering:crispEdges;"/>' +
                s);
      }
    }
  p &&
    (M =
      i +
      '<path x="0" y="0" style="fill:' +
      t.color +
      ';shape-rendering:crispEdges;" d="' +
      I +
      '" />');
  let Q = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const m = (a * this.options.image.width) / 100,
      o = (c * this.options.image.height) / 100,
      h = a / 2 - m / 2,
      f = c / 2 - o / 2;
    (Q += `<svg x="${h}" y="${f}" width="${m}" height="${o}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
      (Q += this.options.image.svg + s),
      (Q += "</svg>");
  }
  var ie = "";
  switch (e.container) {
    case "svg":
      k && (ie += '<?xml version="1.0" standalone="yes"?>' + s),
        (ie +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
          a +
          '" height="' +
          c +
          '">' +
          s),
        (ie += O + L + M),
        (ie += Q),
        (ie += "</svg>");
      break;
    case "svg-viewbox":
      k && (ie += '<?xml version="1.0" standalone="yes"?>' + s),
        (ie +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
          a +
          " " +
          c +
          '">' +
          s),
        (ie += O + L + M),
        (ie += Q),
        (ie += "</svg>");
      break;
    case "g":
      (ie += '<g width="' + a + '" height="' + c + '">' + s),
        (ie += O + L + M),
        (ie += Q),
        (ie += "</g>");
      break;
    default:
      ie += (O + L + M + Q).replace(/^\s+/, "");
      break;
  }
  return ie;
};
var Wf = nu,
  Vf =
    (G && G.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.QRCode = void 0;
const qf = ot,
  Ya = Xi,
  zf = Vf(Wf),
  Gf = (e) => {
    const [t, r] = (0, Ya.useState)("");
    return (
      (0, Ya.useEffect)(() => {
        var n, i;
        const s = new zf.default({
            content: e.content,
            background: e.bgColor || "#ffffff",
            color: e.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (n = e.width) !== null && n !== void 0 ? n : 256,
            height: (i = e.height) !== null && i !== void 0 ? i : 256,
            padding: 0,
            image: e.image,
          }),
          a = Buffer.from(s.svg(), "utf8").toString("base64");
        r(`data:image/svg+xml;base64,${a}`);
      }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]),
      t ? (0, qf.h)("img", { src: t, alt: "QR Code" }) : null
    );
  };
ns.QRCode = Gf;
var is = {},
  Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}")();
var Jf =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(is, "__esModule", { value: !0 });
is.Spinner = void 0;
const gi = ot,
  Zf = Jf(Uo),
  Kf = (e) => {
    var t;
    const r = (t = e.size) !== null && t !== void 0 ? t : 64,
      n = e.color || "#000";
    return (0, gi.h)(
      "div",
      { class: "-cbwsdk-spinner" },
      (0, gi.h)("style", null, Zf.default),
      (0, gi.h)(
        "svg",
        {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          style: { width: r, height: r },
        },
        (0, gi.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
      )
    );
  };
is.Spinner = Kf;
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}")();
var iu =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.CoinbaseWalletSteps = ln.ConnectContent = void 0;
const Er = iu(Xn),
  oe = ot,
  Qf = q,
  Yf = _n,
  Xf = es,
  e0 = ts,
  t0 = rs,
  r0 = ns,
  n0 = is,
  i0 = iu(Wo),
  js = {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    steps: su,
  },
  s0 = (e) => (e === "light" ? "#FFFFFF" : "#0A0B0D");
function o0(e) {
  const { theme: t } = e,
    r = (0, Qf.createQrUrl)(
      e.sessionId,
      e.sessionSecret,
      e.linkAPIUrl,
      e.isParentConnection,
      e.version,
      e.chainId
    ),
    n = js.steps;
  return (0, oe.h)(
    "div",
    {
      "data-testid": "connect-content",
      className: (0, Er.default)("-cbwsdk-connect-content", t),
    },
    (0, oe.h)("style", null, i0.default),
    (0, oe.h)(
      "div",
      { className: "-cbwsdk-connect-content-header" },
      (0, oe.h)(
        "h2",
        { className: (0, Er.default)("-cbwsdk-connect-content-heading", t) },
        "Scan to connect with our mobile app"
      ),
      e.onCancel &&
        (0, oe.h)(
          "button",
          {
            type: "button",
            className: "-cbwsdk-cancel-button",
            onClick: e.onCancel,
          },
          (0, oe.h)(Xf.CloseIcon, {
            fill: t === "light" ? "#0A0B0D" : "#FFFFFF",
          })
        )
    ),
    (0, oe.h)(
      "div",
      { className: "-cbwsdk-connect-content-layout" },
      (0, oe.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-left" },
        (0, oe.h)(a0, {
          title: js.title,
          description: js.description,
          theme: t,
        })
      ),
      (0, oe.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-right" },
        (0, oe.h)(
          "div",
          { className: "-cbwsdk-connect-content-qr-wrapper" },
          (0, oe.h)(r0.QRCode, {
            content: r,
            width: 200,
            height: 200,
            fgColor: "#000",
            bgColor: "transparent",
          }),
          (0, oe.h)("input", {
            type: "hidden",
            name: "cbw-cbwsdk-version",
            value: Yf.LIB_VERSION,
          }),
          (0, oe.h)("input", { type: "hidden", value: r })
        ),
        (0, oe.h)(n, { theme: t }),
        !e.isConnected &&
          (0, oe.h)(
            "div",
            {
              "data-testid": "connecting-spinner",
              className: (0, Er.default)(
                "-cbwsdk-connect-content-qr-connecting",
                t
              ),
            },
            (0, oe.h)(n0.Spinner, {
              size: 36,
              color: t === "dark" ? "#FFF" : "#000",
            }),
            (0, oe.h)("p", null, "Connecting...")
          )
      )
    )
  );
}
ln.ConnectContent = o0;
function a0({ title: e, description: t, theme: r }) {
  return (0, oe.h)(
    "div",
    { className: (0, Er.default)("-cbwsdk-connect-item", r) },
    (0, oe.h)("div", null, (0, oe.h)(e0.CoinbaseWalletRound, null)),
    (0, oe.h)(
      "div",
      { className: "-cbwsdk-connect-item-copy-wrapper" },
      (0, oe.h)("h3", { className: "-cbwsdk-connect-item-title" }, e),
      (0, oe.h)("p", { className: "-cbwsdk-connect-item-description" }, t)
    )
  );
}
function su({ theme: e }) {
  return (0, oe.h)(
    "ol",
    { className: "-cbwsdk-wallet-steps" },
    (0, oe.h)(
      "li",
      { className: (0, Er.default)("-cbwsdk-wallet-steps-item", e) },
      (0, oe.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        "Open Coinbase Wallet app"
      )
    ),
    (0, oe.h)(
      "li",
      { className: (0, Er.default)("-cbwsdk-wallet-steps-item", e) },
      (0, oe.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, oe.h)("span", null, "Tap ", (0, oe.h)("strong", null, "Scan"), " "),
        (0, oe.h)(
          "span",
          {
            className: (0, Er.default)(
              "-cbwsdk-wallet-steps-pad-left",
              "-cbwsdk-wallet-steps-icon",
              e
            ),
          },
          (0, oe.h)(t0.QRCodeIcon, { fill: s0(e) })
        )
      )
    )
  );
}
ln.CoinbaseWalletSteps = su;
var ss = {},
  os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.ArrowLeftIcon = void 0;
const Xa = ot;
function c0(e) {
  return (0, Xa.h)(
    "svg",
    Object.assign(
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Xa.h)("path", {
      d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z",
    })
  );
}
os.ArrowLeftIcon = c0;
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.LaptopIcon = void 0;
const Hs = ot;
function l0(e) {
  return (0, Hs.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Hs.h)("path", {
      d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z",
    }),
    (0, Hs.h)("path", {
      d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z",
    })
  );
}
as.LaptopIcon = l0;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.SafeIcon = void 0;
const ec = ot;
function u0(e) {
  return (0, ec.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, ec.h)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z",
    })
  );
}
cs.SafeIcon = u0;
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}")();
var ou =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.TryExtensionContent = void 0;
const hr = ou(Xn),
  Ge = ot,
  Us = Xi,
  h0 = os,
  d0 = as,
  f0 = cs,
  p0 = ou(Vo);
function g0({ theme: e }) {
  const [t, r] = (0, Us.useState)(!1),
    n = (0, Us.useCallback)(() => {
      window.open(
        "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
        "_blank"
      );
    }, []),
    i = (0, Us.useCallback)(() => {
      t ? window.location.reload() : (n(), r(!0));
    }, [n, t]);
  return (0, Ge.h)(
    "div",
    { class: (0, hr.default)("-cbwsdk-try-extension", e) },
    (0, Ge.h)("style", null, p0.default),
    (0, Ge.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, Ge.h)(
        "h3",
        { class: (0, hr.default)("-cbwsdk-try-extension-heading", e) },
        "Or try the Coinbase Wallet browser extension"
      ),
      (0, Ge.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, Ge.h)(
          "button",
          {
            class: (0, hr.default)("-cbwsdk-try-extension-cta", e),
            onClick: i,
          },
          t ? "Refresh" : "Install"
        ),
        (0, Ge.h)(
          "div",
          null,
          !t &&
            (0, Ge.h)(h0.ArrowLeftIcon, {
              class: "-cbwsdk-try-extension-cta-icon",
              fill: e === "light" ? "#0052FF" : "#588AF5",
            })
        )
      )
    ),
    (0, Ge.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, Ge.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, Ge.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, Ge.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, Ge.h)(
              "span",
              {
                class: (0, hr.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  e
                ),
              },
              (0, Ge.h)(d0.LaptopIcon, {
                fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, Ge.h)(
            "div",
            {
              class: (0, hr.default)("-cbwsdk-try-extension-list-item-copy", e),
            },
            "Connect with dapps with just one click on your desktop browser"
          )
        ),
        (0, Ge.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, Ge.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, Ge.h)(
              "span",
              {
                class: (0, hr.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  e
                ),
              },
              (0, Ge.h)(f0.SafeIcon, {
                fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, Ge.h)(
            "div",
            {
              class: (0, hr.default)("-cbwsdk-try-extension-list-item-copy", e),
            },
            "Add an additional layer of security by using a supported Ledger hardware wallet"
          )
        )
      )
    )
  );
}
ss.TryExtensionContent = g0;
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}")();
var au =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.ConnectDialog = void 0;
const Ws = au(Xn),
  dr = ot,
  Vs = Xi,
  _0 = ln,
  m0 = ss,
  v0 = au(qo),
  b0 = (e) => {
    const { isOpen: t, darkMode: r } = e,
      [n, i] = (0, Vs.useState)(!t),
      [s, a] = (0, Vs.useState)(!t);
    (0, Vs.useEffect)(() => {
      const u = [
        window.setTimeout(() => {
          a(!t);
        }, 10),
      ];
      return (
        t
          ? i(!1)
          : u.push(
              window.setTimeout(() => {
                i(!0);
              }, 360)
            ),
        () => {
          u.forEach(window.clearTimeout);
        }
      );
    }, [t]);
    const c = r ? "dark" : "light";
    return (0, dr.h)(
      "div",
      {
        class: (0, Ws.default)(
          "-cbwsdk-connect-dialog-container",
          n && "-cbwsdk-connect-dialog-container-hidden"
        ),
      },
      (0, dr.h)("style", null, v0.default),
      (0, dr.h)("div", {
        class: (0, Ws.default)(
          "-cbwsdk-connect-dialog-backdrop",
          c,
          s && "-cbwsdk-connect-dialog-backdrop-hidden"
        ),
      }),
      (0, dr.h)(
        "div",
        { class: "-cbwsdk-connect-dialog" },
        (0, dr.h)(
          "div",
          {
            class: (0, Ws.default)(
              "-cbwsdk-connect-dialog-box",
              s && "-cbwsdk-connect-dialog-box-hidden"
            ),
          },
          e.connectDisabled
            ? null
            : (0, dr.h)(_0.ConnectContent, {
                theme: c,
                version: e.version,
                sessionId: e.sessionId,
                sessionSecret: e.sessionSecret,
                linkAPIUrl: e.linkAPIUrl,
                isConnected: e.isConnected,
                isParentConnection: e.isParentConnection,
                chainId: e.chainId,
                onCancel: e.onCancel,
              }),
          (0, dr.h)(m0.TryExtensionContent, { theme: c })
        )
      )
    );
  };
Yi.ConnectDialog = b0;
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.LinkFlow = void 0;
const qs = ot,
  y0 = Yi;
class w0 {
  constructor(t) {
    (this.connected = !1),
      (this.chainId = 1),
      (this.isOpen = !1),
      (this.onCancel = null),
      (this.root = null),
      (this.connectDisabled = !1),
      (this.darkMode = t.darkMode),
      (this.version = t.version),
      (this.sessionId = t.sessionId),
      (this.sessionSecret = t.sessionSecret),
      (this.linkAPIUrl = t.linkAPIUrl),
      (this.isParentConnection = t.isParentConnection);
  }
  attach(t) {
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-link-flow-root"),
      t.appendChild(this.root),
      this.render();
  }
  setConnected(t) {
    this.connected !== t && ((this.connected = t), this.render());
  }
  setChainId(t) {
    this.chainId !== t && ((this.chainId = t), this.render());
  }
  detach() {
    var t;
    this.root &&
      ((0, qs.render)(null, this.root),
      (t = this.root.parentElement) === null ||
        t === void 0 ||
        t.removeChild(this.root));
  }
  setConnectDisabled(t) {
    this.connectDisabled = t;
  }
  open(t) {
    (this.isOpen = !0), (this.onCancel = t.onCancel), this.render();
  }
  close() {
    (this.isOpen = !1), (this.onCancel = null), this.render();
  }
  render() {
    this.root &&
      (0, qs.render)(
        (0, qs.h)(y0.ConnectDialog, {
          darkMode: this.darkMode,
          version: this.version,
          sessionId: this.sessionId,
          sessionSecret: this.sessionSecret,
          linkAPIUrl: this.linkAPIUrl,
          isOpen: this.isOpen,
          isConnected: this.connected,
          isParentConnection: this.isParentConnection,
          chainId: this.chainId,
          onCancel: this.onCancel,
          connectDisabled: this.connectDisabled,
        }),
        this.root
      );
  }
}
Ki.LinkFlow = w0;
var zo = {},
  Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.default = (() =>
  ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}")();
(function (e) {
  var t =
    (G && G.__importDefault) ||
    function (p) {
      return p && p.__esModule ? p : { default: p };
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0);
  const r = t(Xn),
    n = ot,
    i = Xi,
    s = t(Go),
    a =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
    c =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  class u {
    constructor(E) {
      (this.items = new Map()),
        (this.nextItemKey = 0),
        (this.root = null),
        (this.darkMode = E.darkMode);
    }
    attach(E) {
      (this.root = document.createElement("div")),
        (this.root.className = "-cbwsdk-snackbar-root"),
        E.appendChild(this.root),
        this.render();
    }
    presentItem(E) {
      const k = this.nextItemKey++;
      return (
        this.items.set(k, E),
        this.render(),
        () => {
          this.items.delete(k), this.render();
        }
      );
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root &&
        (0, n.render)(
          (0, n.h)(
            "div",
            null,
            (0, n.h)(
              e.SnackbarContainer,
              { darkMode: this.darkMode },
              Array.from(this.items.entries()).map(([E, k]) =>
                (0, n.h)(e.SnackbarInstance, Object.assign({}, k, { key: E }))
              )
            )
          ),
          this.root
        );
    }
  }
  e.Snackbar = u;
  const d = (p) =>
    (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-container") },
      (0, n.h)("style", null, s.default),
      (0, n.h)("div", { class: "-cbwsdk-snackbar" }, p.children)
    );
  e.SnackbarContainer = d;
  const g = ({ autoExpand: p, message: E, menuItems: k }) => {
    const [A, O] = (0, i.useState)(!0),
      [L, M] = (0, i.useState)(p ?? !1);
    (0, i.useEffect)(() => {
      const N = [
        window.setTimeout(() => {
          O(!1);
        }, 1),
        window.setTimeout(() => {
          M(!0);
        }, 1e4),
      ];
      return () => {
        N.forEach(window.clearTimeout);
      };
    });
    const I = () => {
      M(!L);
    };
    return (0, n.h)(
      "div",
      {
        class: (0, r.default)(
          "-cbwsdk-snackbar-instance",
          A && "-cbwsdk-snackbar-instance-hidden",
          L && "-cbwsdk-snackbar-instance-expanded"
        ),
      },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: I },
        (0, n.h)("img", {
          src: a,
          class: "-cbwsdk-snackbar-instance-header-cblogo",
        }),
        " ",
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header-message" },
          E
        ),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !L &&
            (0, n.h)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              (0, n.h)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "#F5F7F8",
              })
            ),
          (0, n.h)("img", { src: c, class: "-gear-icon", title: "Expand" })
        )
      ),
      k &&
        k.length > 0 &&
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-menu" },
          k.map((N, B) =>
            (0, n.h)(
              "div",
              {
                class: (0, r.default)(
                  "-cbwsdk-snackbar-instance-menu-item",
                  N.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                ),
                onClick: N.onClick,
                key: B,
              },
              (0, n.h)(
                "svg",
                {
                  width: N.svgWidth,
                  height: N.svgHeight,
                  viewBox: "0 0 10 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                (0, n.h)("path", {
                  "fill-rule": N.defaultFillRule,
                  "clip-rule": N.defaultClipRule,
                  d: N.path,
                  fill: "#AAAAAA",
                })
              ),
              (0, n.h)(
                "span",
                {
                  class: (0, r.default)(
                    "-cbwsdk-snackbar-instance-menu-item-info",
                    N.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                  ),
                },
                N.info
              )
            )
          )
        )
    );
  };
  e.SnackbarInstance = g;
})(zo);
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.WalletLinkRelayUI = void 0;
const E0 = Kn,
  S0 = Ki,
  R0 = zo;
class M0 {
  constructor(t) {
    (this.standalone = null),
      (this.attached = !1),
      (this.snackbar = new R0.Snackbar({ darkMode: t.darkMode })),
      (this.linkFlow = new S0.LinkFlow({
        darkMode: t.darkMode,
        version: t.version,
        sessionId: t.session.id,
        sessionSecret: t.session.secret,
        linkAPIUrl: t.linkAPIUrl,
        isParentConnection: !1,
      }));
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const t = document.documentElement,
      r = document.createElement("div");
    (r.className = "-cbwsdk-css-reset"),
      t.appendChild(r),
      this.linkFlow.attach(r),
      this.snackbar.attach(r),
      (this.attached = !0),
      (0, E0.injectCssReset)();
  }
  setConnected(t) {
    this.linkFlow.setConnected(t);
  }
  setChainId(t) {
    this.linkFlow.setChainId(t);
  }
  setConnectDisabled(t) {
    this.linkFlow.setConnectDisabled(t);
  }
  addEthereumChain() {}
  watchAsset() {}
  switchEthereumChain() {}
  requestEthereumAccounts(t) {
    this.linkFlow.open({ onCancel: t.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  signEthereumMessage() {}
  signEthereumTransaction() {}
  submitEthereumTransaction() {}
  ethereumAddressFromSignedMessage() {}
  showConnecting(t) {
    let r;
    return (
      t.isUnlinkedErrorState
        ? (r = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection,
              },
            ],
          })
        : (r = {
            message: "Confirm on phone",
            menuItems: [
              {
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: t.onCancel,
              },
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection,
              },
            ],
          }),
      this.snackbar.presentItem(r)
    );
  }
  reloadUI() {
    document.location.reload();
  }
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  setStandalone(t) {
    this.standalone = t;
  }
  isStandalone() {
    var t;
    return (t = this.standalone) !== null && t !== void 0 ? t : !1;
  }
}
Zn.WalletLinkRelayUI = M0;
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.WalletLinkRelay = void 0;
const Gr = Fn,
  k0 = Je,
  Ue = q,
  fr = mn,
  tc = gt,
  zt = vn,
  C0 = Gi,
  pr = gn,
  I0 = Zn;
class Dt extends tc.RelayAbstract {
  constructor(t) {
    var r;
    super(),
      (this.accountsCallback = null),
      (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
      (this.chainCallback = null),
      (this.dappDefaultChain = 1),
      (this.appName = ""),
      (this.appLogoUrl = null),
      (this.linkedUpdated = (a) => {
        var c;
        this.isLinked = a;
        const u = this.storage.getItem(tc.LOCAL_STORAGE_ADDRESSES_KEY);
        if (
          (a && (this.session.linked = a), (this.isUnlinkedErrorState = !1), u)
        ) {
          const d = u.split(" "),
            g = this.storage.getItem("IsStandaloneSigning") === "true";
          if (d[0] !== "" && !a && this.session.linked && !g) {
            this.isUnlinkedErrorState = !0;
            const p = this.getSessionIdHash();
            (c = this.diagnostic) === null ||
              c === void 0 ||
              c.log(fr.EVENTS.UNLINKED_ERROR_STATE, { sessionIdHash: p });
          }
        }
      }),
      (this.metadataUpdated = (a, c) => {
        this.storage.setItem(a, c);
      }),
      (this.chainUpdated = (a, c) => {
        (this.chainCallbackParams.chainId === a &&
          this.chainCallbackParams.jsonRpcUrl === c) ||
          ((this.chainCallbackParams = { chainId: a, jsonRpcUrl: c }),
          this.chainCallback && this.chainCallback(a, c));
      }),
      (this.accountUpdated = (a) => {
        this.accountsCallback && this.accountsCallback([a]),
          Dt.accountRequestCallbackIds.size > 0 &&
            (Array.from(Dt.accountRequestCallbackIds.values()).forEach((c) => {
              const u = {
                type: "WEB3_RESPONSE",
                id: c,
                response: { method: "requestEthereumAccounts", result: [a] },
              };
              this.invokeCallback(
                Object.assign(Object.assign({}, u), { id: c })
              );
            }),
            Dt.accountRequestCallbackIds.clear());
      }),
      (this.connectedUpdated = (a) => {
        this.ui.setConnected(a);
      }),
      (this.resetAndReload = this.resetAndReload.bind(this)),
      (this.linkAPIUrl = t.linkAPIUrl),
      (this.storage = t.storage),
      (this.options = t);
    const { session: n, ui: i, connection: s } = this.subscribe();
    (this._session = n),
      (this.connection = s),
      (this.relayEventManager = t.relayEventManager),
      (this.diagnostic = t.diagnosticLogger),
      (this._reloadOnDisconnect =
        (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0),
      (this.ui = i);
  }
  subscribe() {
    const t =
        zt.Session.load(this.storage) || new zt.Session(this.storage).save(),
      { linkAPIUrl: r, diagnostic: n } = this,
      i = new C0.WalletLinkConnection({
        session: t,
        linkAPIUrl: r,
        diagnostic: n,
        listener: this,
      }),
      { version: s, darkMode: a } = this.options,
      c = this.options.uiConstructor({
        linkAPIUrl: r,
        version: s,
        darkMode: a,
        session: t,
      });
    return i.connect(), { session: t, ui: c, connection: i };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((t) => setTimeout(() => t(null), 1e3)),
    ])
      .then(() => {
        var t, r;
        const n = this.ui.isStandalone();
        (t = this.diagnostic) === null ||
          t === void 0 ||
          t.log(fr.EVENTS.SESSION_STATE_CHANGE, {
            method: "relay::resetAndReload",
            sessionMetadataChange: "__destroyed, 1",
            sessionIdHash: this.getSessionIdHash(),
          }),
          this.connection.destroy();
        const i = zt.Session.load(this.storage);
        if (
          ((i == null ? void 0 : i.id) === this._session.id
            ? this.storage.clear()
            : i &&
              ((r = this.diagnostic) === null ||
                r === void 0 ||
                r.log(fr.EVENTS.SKIPPED_CLEARING_SESSION, {
                  sessionIdHash: this.getSessionIdHash(),
                  storedSessionIdHash: zt.Session.hash(i.id),
                })),
          this._reloadOnDisconnect)
        ) {
          this.ui.reloadUI();
          return;
        }
        this.accountsCallback && this.accountsCallback([], !0);
        const { session: s, ui: a, connection: c } = this.subscribe();
        (this._session = s),
          (this.connection = c),
          (this.ui = a),
          n && this.ui.setStandalone && this.ui.setStandalone(!0),
          this.attachUI();
      })
      .catch((t) => {
        var r;
        (r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(fr.EVENTS.FAILURE, {
            method: "relay::resetAndReload",
            message: `failed to reset and reload with ${t}`,
            sessionIdHash: this.getSessionIdHash(),
          });
      });
  }
  setAppInfo(t, r) {
    (this.appName = t), (this.appLogoUrl = r);
  }
  getStorageItem(t) {
    return this.storage.getItem(t);
  }
  get session() {
    return this._session;
  }
  setStorageItem(t, r) {
    this.storage.setItem(t, r);
  }
  signEthereumMessage(t, r, n, i) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, Ue.hexStringFromBuffer)(t, !0),
        address: r,
        addPrefix: n,
        typedDataJson: i || null,
      },
    });
  }
  ethereumAddressFromSignedMessage(t, r, n) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, Ue.hexStringFromBuffer)(t, !0),
        signature: (0, Ue.hexStringFromBuffer)(r, !0),
        addPrefix: n,
      },
    });
  }
  signEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, Ue.bigIntStringFromBN)(t.weiValue),
        data: (0, Ue.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei
          ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxFeePerGas: t.gasPriceInWei
          ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxPriorityFeePerGas: t.gasPriceInWei
          ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        gasLimit: t.gasLimit ? (0, Ue.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !1,
      },
    });
  }
  signAndSubmitEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, Ue.bigIntStringFromBN)(t.weiValue),
        data: (0, Ue.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei
          ? (0, Ue.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxFeePerGas: t.maxFeePerGas
          ? (0, Ue.bigIntStringFromBN)(t.maxFeePerGas)
          : null,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas
          ? (0, Ue.bigIntStringFromBN)(t.maxPriorityFeePerGas)
          : null,
        gasLimit: t.gasLimit ? (0, Ue.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !0,
      },
    });
  }
  submitEthereumTransaction(t, r) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, Ue.hexStringFromBuffer)(t, !0),
        chainId: r,
      },
    });
  }
  scanQRCode(t) {
    return this.sendRequest({ method: "scanQRCode", params: { regExp: t } });
  }
  getQRCodeUrl() {
    return (0, Ue.createQrUrl)(
      this._session.id,
      this._session.secret,
      this.linkAPIUrl,
      !1,
      this.options.version,
      this.dappDefaultChain
    );
  }
  genericRequest(t, r) {
    return this.sendRequest({
      method: "generic",
      params: { action: r, data: t },
    });
  }
  sendGenericMessage(t) {
    return this.sendRequest(t);
  }
  sendRequest(t) {
    let r = null;
    const n = (0, Ue.randomBytesHex)(8),
      i = (a) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, t.method, a),
          r == null || r();
      };
    return {
      promise: new Promise((a, c) => {
        this.ui.isStandalone() ||
          (r = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: i,
            onResetConnection: this.resetAndReload,
          })),
          this.relayEventManager.callbacks.set(n, (u) => {
            if ((r == null || r(), (0, pr.isErrorResponse)(u)))
              return c(new Error(u.errorMessage));
            a(u);
          }),
          this.ui.isStandalone()
            ? this.sendRequestStandalone(n, t)
            : this.publishWeb3RequestEvent(n, t);
      }),
      cancel: i,
    };
  }
  setConnectDisabled(t) {
    this.ui.setConnectDisabled(t);
  }
  setAccountsCallback(t) {
    this.accountsCallback = t;
  }
  setChainCallback(t) {
    this.chainCallback = t;
  }
  setDappDefaultChainCallback(t) {
    (this.dappDefaultChain = t),
      this.ui instanceof I0.WalletLinkRelayUI && this.ui.setChainId(t);
  }
  publishWeb3RequestEvent(t, r) {
    var n;
    const i = { type: "WEB3_REQUEST", id: t, request: r },
      s = zt.Session.load(this.storage);
    (n = this.diagnostic) === null ||
      n === void 0 ||
      n.log(fr.EVENTS.WEB3_REQUEST, {
        eventId: i.id,
        method: `relay::${r.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: s ? zt.Session.hash(s.id) : "",
        isSessionMismatched: (
          (s == null ? void 0 : s.id) !== this._session.id
        ).toString(),
      }),
      this.publishEvent("Web3Request", i, !0)
        .then((a) => {
          var c;
          (c = this.diagnostic) === null ||
            c === void 0 ||
            c.log(fr.EVENTS.WEB3_REQUEST_PUBLISHED, {
              eventId: i.id,
              method: `relay::${r.method}`,
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: s ? zt.Session.hash(s.id) : "",
              isSessionMismatched: (
                (s == null ? void 0 : s.id) !== this._session.id
              ).toString(),
            });
        })
        .catch((a) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: i.id,
            response: { method: r.method, errorMessage: a.message },
          });
        });
  }
  publishWeb3RequestCanceledEvent(t) {
    const r = { type: "WEB3_REQUEST_CANCELED", id: t };
    this.publishEvent("Web3RequestCanceled", r, !1).then();
  }
  publishEvent(t, r, n) {
    return this.connection.publishEvent(t, r, n);
  }
  handleWeb3ResponseMessage(t) {
    var r;
    const { response: n } = t;
    if (
      ((r = this.diagnostic) === null ||
        r === void 0 ||
        r.log(fr.EVENTS.WEB3_RESPONSE, {
          eventId: t.id,
          method: `relay::${n.method}`,
          sessionIdHash: this.getSessionIdHash(),
        }),
      n.method === "requestEthereumAccounts")
    ) {
      Dt.accountRequestCallbackIds.forEach((i) =>
        this.invokeCallback(Object.assign(Object.assign({}, t), { id: i }))
      ),
        Dt.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(t);
  }
  handleErrorResponse(t, r, n, i) {
    var s;
    const a =
      (s = n == null ? void 0 : n.message) !== null && s !== void 0
        ? s
        : (0, Gr.getMessageFromCode)(i);
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id: t,
      response: { method: r, errorMessage: a, errorCode: i },
    });
  }
  invokeCallback(t) {
    const r = this.relayEventManager.callbacks.get(t.id);
    r && (r(t.response), this.relayEventManager.callbacks.delete(t.id));
  }
  requestEthereumAccounts() {
    const t = {
        method: "requestEthereumAccounts",
        params: { appName: this.appName, appLogoUrl: this.appLogoUrl || null },
      },
      r = (0, Ue.randomBytesHex)(8),
      n = (s) => {
        this.publishWeb3RequestCanceledEvent(r),
          this.handleErrorResponse(r, t.method, s);
      };
    return {
      promise: new Promise((s, a) => {
        if (
          (this.relayEventManager.callbacks.set(r, (c) => {
            if (
              (this.ui.hideRequestEthereumAccounts(),
              (0, pr.isErrorResponse)(c))
            )
              return a(new Error(c.errorMessage));
            s(c);
          }),
          this.ui.inlineAccountsResponse())
        ) {
          const c = (u) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: r,
              response: { method: "requestEthereumAccounts", result: u },
            });
          };
          this.ui.requestEthereumAccounts({ onCancel: n, onAccounts: c });
        } else {
          const c = Gr.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          );
          this.ui.requestEthereumAccounts({ onCancel: () => n(c) });
        }
        Dt.accountRequestCallbackIds.add(r),
          !this.ui.inlineAccountsResponse() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(r, t);
      }),
      cancel: n,
    };
  }
  selectProvider(t) {
    const r = { method: "selectProvider", params: { providerOptions: t } },
      n = (0, Ue.randomBytesHex)(8),
      i = (a) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, r.method, a);
      },
      s = new Promise((a, c) => {
        this.relayEventManager.callbacks.set(n, (g) => {
          if ((0, pr.isErrorResponse)(g)) return c(new Error(g.errorMessage));
          a(g);
        });
        const u = (g) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: n,
              response: {
                method: "selectProvider",
                result: k0.ProviderType.Unselected,
              },
            });
          },
          d = (g) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: n,
              response: { method: "selectProvider", result: g },
            });
          };
        this.ui.selectProvider &&
          this.ui.selectProvider({
            onApprove: d,
            onCancel: u,
            providerOptions: t,
          });
      });
    return { cancel: i, promise: s };
  }
  watchAsset(t, r, n, i, s, a) {
    const c = {
      method: "watchAsset",
      params: {
        type: t,
        options: { address: r, symbol: n, decimals: i, image: s },
        chainId: a,
      },
    };
    let u = null;
    const d = (0, Ue.randomBytesHex)(8),
      g = (E) => {
        this.publishWeb3RequestCanceledEvent(d),
          this.handleErrorResponse(d, c.method, E),
          u == null || u();
      };
    this.ui.inlineWatchAsset() ||
      (u = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: g,
        onResetConnection: this.resetAndReload,
      }));
    const p = new Promise((E, k) => {
      this.relayEventManager.callbacks.set(d, (L) => {
        if ((u == null || u(), (0, pr.isErrorResponse)(L)))
          return k(new Error(L.errorMessage));
        E(L);
      });
      const A = (L) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: d,
            response: { method: "watchAsset", result: !1 },
          });
        },
        O = () => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: d,
            response: { method: "watchAsset", result: !0 },
          });
        };
      this.ui.inlineWatchAsset() &&
        this.ui.watchAsset({
          onApprove: O,
          onCancel: A,
          type: t,
          address: r,
          symbol: n,
          decimals: i,
          image: s,
          chainId: a,
        }),
        !this.ui.inlineWatchAsset() &&
          !this.ui.isStandalone() &&
          this.publishWeb3RequestEvent(d, c);
    });
    return { cancel: g, promise: p };
  }
  addEthereumChain(t, r, n, i, s, a) {
    const c = {
      method: "addEthereumChain",
      params: {
        chainId: t,
        rpcUrls: r,
        blockExplorerUrls: i,
        chainName: s,
        iconUrls: n,
        nativeCurrency: a,
      },
    };
    let u = null;
    const d = (0, Ue.randomBytesHex)(8),
      g = (E) => {
        this.publishWeb3RequestCanceledEvent(d),
          this.handleErrorResponse(d, c.method, E),
          u == null || u();
      };
    return (
      this.ui.inlineAddEthereumChain(t) ||
        (u = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: g,
          onResetConnection: this.resetAndReload,
        })),
      {
        promise: new Promise((E, k) => {
          this.relayEventManager.callbacks.set(d, (L) => {
            if ((u == null || u(), (0, pr.isErrorResponse)(L)))
              return k(new Error(L.errorMessage));
            E(L);
          });
          const A = (L) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: d,
                response: {
                  method: "addEthereumChain",
                  result: { isApproved: !1, rpcUrl: "" },
                },
              });
            },
            O = (L) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: d,
                response: {
                  method: "addEthereumChain",
                  result: { isApproved: !0, rpcUrl: L },
                },
              });
            };
          this.ui.inlineAddEthereumChain(t) &&
            this.ui.addEthereumChain({
              onCancel: A,
              onApprove: O,
              chainId: c.params.chainId,
              rpcUrls: c.params.rpcUrls,
              blockExplorerUrls: c.params.blockExplorerUrls,
              chainName: c.params.chainName,
              iconUrls: c.params.iconUrls,
              nativeCurrency: c.params.nativeCurrency,
            }),
            !this.ui.inlineAddEthereumChain(t) &&
              !this.ui.isStandalone() &&
              this.publishWeb3RequestEvent(d, c);
        }),
        cancel: g,
      }
    );
  }
  switchEthereumChain(t, r) {
    const n = {
        method: "switchEthereumChain",
        params: Object.assign({ chainId: t }, { address: r }),
      },
      i = (0, Ue.randomBytesHex)(8),
      s = (c) => {
        this.publishWeb3RequestCanceledEvent(i),
          this.handleErrorResponse(i, n.method, c);
      };
    return {
      promise: new Promise((c, u) => {
        this.relayEventManager.callbacks.set(i, (p) => {
          if ((0, pr.isErrorResponse)(p) && p.errorCode)
            return u(
              Gr.standardErrors.provider.custom({
                code: p.errorCode,
                message:
                  "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
              })
            );
          if ((0, pr.isErrorResponse)(p)) return u(new Error(p.errorMessage));
          c(p);
        });
        const d = (p) => {
            var E;
            if (p) {
              const k =
                (E = (0, Gr.getErrorCode)(p)) !== null && E !== void 0
                  ? E
                  : Gr.standardErrorCodes.provider.unsupportedChain;
              this.handleErrorResponse(
                i,
                "switchEthereumChain",
                p instanceof Error
                  ? p
                  : Gr.standardErrors.provider.unsupportedChain(t),
                k
              );
            } else
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: i,
                response: {
                  method: "switchEthereumChain",
                  result: { isApproved: !1, rpcUrl: "" },
                },
              });
          },
          g = (p) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: i,
              response: {
                method: "switchEthereumChain",
                result: { isApproved: !0, rpcUrl: p },
              },
            });
          };
        this.ui.switchEthereumChain({
          onCancel: d,
          onApprove: g,
          chainId: n.params.chainId,
          address: n.params.address,
        }),
          !this.ui.inlineSwitchEthereumChain() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(i, n);
      }),
      cancel: s,
    };
  }
  inlineAddEthereumChain(t) {
    return this.ui.inlineAddEthereumChain(t);
  }
  getSessionIdHash() {
    return zt.Session.hash(this._session.id);
  }
  sendRequestStandalone(t, r) {
    const n = (s) => {
        this.handleErrorResponse(t, r.method, s);
      },
      i = (s) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: t,
          response: s,
        });
      };
    switch (r.method) {
      case "signEthereumMessage":
        this.ui.signEthereumMessage({ request: r, onSuccess: i, onCancel: n });
        break;
      case "signEthereumTransaction":
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n,
        });
        break;
      case "submitEthereumTransaction":
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n,
        });
        break;
      case "ethereumAddressFromSignedMessage":
        this.ui.ethereumAddressFromSignedMessage({ request: r, onSuccess: i });
        break;
      default:
        n();
        break;
    }
  }
}
Vn.WalletLinkRelay = Dt;
Dt.accountRequestCallbackIds = new Set();
var ei = {},
  ls = {},
  cu = {};
(function (e) {
  var t =
      (G && G.__createBinding) ||
      (Object.create
        ? function (n, i, s, a) {
            a === void 0 && (a = s);
            var c = Object.getOwnPropertyDescriptor(i, s);
            (!c ||
              ("get" in c ? !i.__esModule : c.writable || c.configurable)) &&
              (c = {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }),
              Object.defineProperty(n, a, c);
          }
        : function (n, i, s, a) {
            a === void 0 && (a = s), (n[a] = i[s]);
          }),
    r =
      (G && G.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(zo, e);
})(cu);
var Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.default = (() =>
  ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}")();
var lu =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.RedirectDialog = void 0;
const x0 = lu(Xn),
  At = ot,
  A0 = Kn,
  T0 = cu,
  N0 = lu(Jo);
class L0 {
  constructor() {
    this.root = null;
  }
  attach() {
    const t = document.documentElement;
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-css-reset"),
      t.appendChild(this.root),
      (0, A0.injectCssReset)();
  }
  present(t) {
    this.render(t);
  }
  clear() {
    this.render(null);
  }
  render(t) {
    this.root &&
      ((0, At.render)(null, this.root),
      t &&
        (0, At.render)(
          (0, At.h)(
            P0,
            Object.assign({}, t, {
              onDismiss: () => {
                this.clear();
              },
            })
          ),
          this.root
        ));
  }
}
ls.RedirectDialog = L0;
const P0 = ({
  title: e,
  buttonText: t,
  darkMode: r,
  onButtonClick: n,
  onDismiss: i,
}) => {
  const s = r ? "dark" : "light";
  return (0, At.h)(
    T0.SnackbarContainer,
    { darkMode: r },
    (0, At.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, At.h)("style", null, N0.default),
      (0, At.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: i,
      }),
      (0, At.h)(
        "div",
        { class: (0, x0.default)("-cbwsdk-redirect-dialog-box", s) },
        (0, At.h)("p", null, e),
        (0, At.h)("button", { onClick: n }, t)
      )
    )
  );
};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.MobileRelayUI = void 0;
const O0 = ls;
class $0 {
  constructor(t) {
    (this.attached = !1),
      (this.darkMode = !1),
      (this.openedWindow = null),
      (this.redirectDialog = new O0.RedirectDialog()),
      (this.darkMode = t.darkMode);
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), (this.attached = !0);
  }
  setConnected(t) {}
  closeOpenedWindow() {
    var t;
    (t = this.openedWindow) === null || t === void 0 || t.close(),
      (this.openedWindow = null);
  }
  redirectToCoinbaseWallet(t) {
    const r = new URL("https://go.cb-w.com/walletlink");
    r.searchParams.append("redirect_url", window.location.href),
      t && r.searchParams.append("wl_url", t),
      (this.openedWindow = window.open(r.href, "cbw-opener")),
      this.openedWindow && setTimeout(() => this.closeOpenedWindow(), 5e3);
  }
  openCoinbaseWalletDeeplink(t) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      darkMode: this.darkMode,
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(t);
      },
    }),
      setTimeout(() => {
        this.redirectToCoinbaseWallet(t);
      }, 99);
  }
  showConnecting(t) {
    return () => {
      this.closeOpenedWindow(), this.redirectDialog.clear();
    };
  }
  hideRequestEthereumAccounts() {
    this.closeOpenedWindow(), this.redirectDialog.clear();
  }
  requestEthereumAccounts() {}
  addEthereumChain() {}
  watchAsset() {}
  selectProvider() {}
  switchEthereumChain() {}
  signEthereumMessage() {}
  signEthereumTransaction() {}
  submitEthereumTransaction() {}
  ethereumAddressFromSignedMessage() {}
  reloadUI() {}
  setStandalone() {}
  setConnectDisabled() {}
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  isStandalone() {
    return !1;
  }
}
ei.MobileRelayUI = $0;
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.MobileRelay = void 0;
const B0 = q,
  D0 = Vn,
  rc = ei;
class F0 extends D0.WalletLinkRelay {
  constructor(t) {
    var r;
    super(t),
      (this._enableMobileWalletLink =
        (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1);
  }
  requestEthereumAccounts() {
    return this._enableMobileWalletLink
      ? super.requestEthereumAccounts()
      : {
          promise: new Promise(() => {
            const t = (0, B0.getLocation)();
            t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(
              t.href
            )}`;
          }),
          cancel: () => {},
        };
  }
  publishWeb3RequestEvent(t, r) {
    if (
      (super.publishWeb3RequestEvent(t, r),
      !(this._enableMobileWalletLink && this.ui instanceof rc.MobileRelayUI))
    )
      return;
    let n = !1;
    switch (r.method) {
      case "requestEthereumAccounts":
      case "connectAndSignIn":
        (n = !0), this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
        break;
      case "switchEthereumChain":
        return;
      default:
        (n = !0), this.ui.openCoinbaseWalletDeeplink();
        break;
    }
    n &&
      window.addEventListener(
        "blur",
        () => {
          window.addEventListener(
            "focus",
            () => {
              this.connection.checkUnseenEvents();
            },
            { once: !0 }
          );
        },
        { once: !0 }
      );
  }
  handleWeb3ResponseMessage(t) {
    super.handleWeb3ResponseMessage(t),
      this._enableMobileWalletLink &&
        this.ui instanceof rc.MobileRelayUI &&
        this.ui.closeOpenedWindow();
  }
  connectAndSignIn(t) {
    if (!this._enableMobileWalletLink)
      throw new Error(
        "connectAndSignIn is supported only when enableMobileWalletLink is on"
      );
    return this.sendRequest({
      method: "connectAndSignIn",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl,
        domain: window.location.hostname,
        aud: window.location.href,
        version: "1",
        type: "eip4361",
        nonce: t.nonce,
        iat: new Date().toISOString(),
        chainId: `eip155:${this.dappDefaultChain}`,
        statement: t.statement,
        resources: t.resources,
      },
    });
  }
}
Wn.MobileRelay = F0;
var Ro = { exports: {} },
  uu = Oi.EventEmitter,
  zs,
  nc;
function j0() {
  if (nc) return zs;
  nc = 1;
  function e(A, O) {
    var L = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(A);
      O &&
        (M = M.filter(function (I) {
          return Object.getOwnPropertyDescriptor(A, I).enumerable;
        })),
        L.push.apply(L, M);
    }
    return L;
  }
  function t(A) {
    for (var O = 1; O < arguments.length; O++) {
      var L = arguments[O] != null ? arguments[O] : {};
      O % 2
        ? e(Object(L), !0).forEach(function (M) {
            r(A, M, L[M]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(L))
        : e(Object(L)).forEach(function (M) {
            Object.defineProperty(A, M, Object.getOwnPropertyDescriptor(L, M));
          });
    }
    return A;
  }
  function r(A, O, L) {
    return (
      (O = a(O)),
      O in A
        ? Object.defineProperty(A, O, {
            value: L,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (A[O] = L),
      A
    );
  }
  function n(A, O) {
    if (!(A instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(A, O) {
    for (var L = 0; L < O.length; L++) {
      var M = O[L];
      (M.enumerable = M.enumerable || !1),
        (M.configurable = !0),
        "value" in M && (M.writable = !0),
        Object.defineProperty(A, a(M.key), M);
    }
  }
  function s(A, O, L) {
    return (
      O && i(A.prototype, O),
      L && i(A, L),
      Object.defineProperty(A, "prototype", { writable: !1 }),
      A
    );
  }
  function a(A) {
    var O = c(A, "string");
    return typeof O == "symbol" ? O : String(O);
  }
  function c(A, O) {
    if (typeof A != "object" || A === null) return A;
    var L = A[Symbol.toPrimitive];
    if (L !== void 0) {
      var M = L.call(A, O || "default");
      if (typeof M != "object") return M;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (O === "string" ? String : Number)(A);
  }
  var u = Dn,
    d = u.Buffer,
    g = To,
    p = g.inspect,
    E = (p && p.custom) || "inspect";
  function k(A, O, L) {
    d.prototype.copy.call(A, O, L);
  }
  return (
    (zs = (function () {
      function A() {
        n(this, A), (this.head = null), (this.tail = null), (this.length = 0);
      }
      return (
        s(A, [
          {
            key: "push",
            value: function (L) {
              var M = { data: L, next: null };
              this.length > 0 ? (this.tail.next = M) : (this.head = M),
                (this.tail = M),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (L) {
              var M = { data: L, next: this.head };
              this.length === 0 && (this.tail = M),
                (this.head = M),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (this.length !== 0) {
                var L = this.head.data;
                return (
                  this.length === 1
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  L
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (L) {
              if (this.length === 0) return "";
              for (var M = this.head, I = "" + M.data; (M = M.next); )
                I += L + M.data;
              return I;
            },
          },
          {
            key: "concat",
            value: function (L) {
              if (this.length === 0) return d.alloc(0);
              for (var M = d.allocUnsafe(L >>> 0), I = this.head, N = 0; I; )
                k(I.data, M, N), (N += I.data.length), (I = I.next);
              return M;
            },
          },
          {
            key: "consume",
            value: function (L, M) {
              var I;
              return (
                L < this.head.data.length
                  ? ((I = this.head.data.slice(0, L)),
                    (this.head.data = this.head.data.slice(L)))
                  : L === this.head.data.length
                  ? (I = this.shift())
                  : (I = M ? this._getString(L) : this._getBuffer(L)),
                I
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (L) {
              var M = this.head,
                I = 1,
                N = M.data;
              for (L -= N.length; (M = M.next); ) {
                var B = M.data,
                  P = L > B.length ? B.length : L;
                if (
                  (P === B.length ? (N += B) : (N += B.slice(0, L)),
                  (L -= P),
                  L === 0)
                ) {
                  P === B.length
                    ? (++I,
                      M.next
                        ? (this.head = M.next)
                        : (this.head = this.tail = null))
                    : ((this.head = M), (M.data = B.slice(P)));
                  break;
                }
                ++I;
              }
              return (this.length -= I), N;
            },
          },
          {
            key: "_getBuffer",
            value: function (L) {
              var M = d.allocUnsafe(L),
                I = this.head,
                N = 1;
              for (I.data.copy(M), L -= I.data.length; (I = I.next); ) {
                var B = I.data,
                  P = L > B.length ? B.length : L;
                if ((B.copy(M, M.length - L, 0, P), (L -= P), L === 0)) {
                  P === B.length
                    ? (++N,
                      I.next
                        ? (this.head = I.next)
                        : (this.head = this.tail = null))
                    : ((this.head = I), (I.data = B.slice(P)));
                  break;
                }
                ++N;
              }
              return (this.length -= N), M;
            },
          },
          {
            key: E,
            value: function (L, M) {
              return p(this, t(t({}, M), {}, { depth: 0, customInspect: !1 }));
            },
          },
        ]),
        A
      );
    })()),
    zs
  );
}
function H0(e, t) {
  var r = this,
    n = this._readableState && this._readableState.destroyed,
    i = this._writableState && this._writableState.destroyed;
  return n || i
    ? (t
        ? t(e)
        : e &&
          (this._writableState
            ? this._writableState.errorEmitted ||
              ((this._writableState.errorEmitted = !0),
              process.nextTick(Mo, this, e))
            : process.nextTick(Mo, this, e)),
      this)
    : (this._readableState && (this._readableState.destroyed = !0),
      this._writableState && (this._writableState.destroyed = !0),
      this._destroy(e || null, function (s) {
        !t && s
          ? r._writableState
            ? r._writableState.errorEmitted
              ? process.nextTick(Ii, r)
              : ((r._writableState.errorEmitted = !0),
                process.nextTick(ic, r, s))
            : process.nextTick(ic, r, s)
          : t
          ? (process.nextTick(Ii, r), t(s))
          : process.nextTick(Ii, r);
      }),
      this);
}
function ic(e, t) {
  Mo(e, t), Ii(e);
}
function Ii(e) {
  (e._writableState && !e._writableState.emitClose) ||
    (e._readableState && !e._readableState.emitClose) ||
    e.emit("close");
}
function U0() {
  this._readableState &&
    ((this._readableState.destroyed = !1),
    (this._readableState.reading = !1),
    (this._readableState.ended = !1),
    (this._readableState.endEmitted = !1)),
    this._writableState &&
      ((this._writableState.destroyed = !1),
      (this._writableState.ended = !1),
      (this._writableState.ending = !1),
      (this._writableState.finalCalled = !1),
      (this._writableState.prefinished = !1),
      (this._writableState.finished = !1),
      (this._writableState.errorEmitted = !1));
}
function Mo(e, t) {
  e.emit("error", t);
}
function W0(e, t) {
  var r = e._readableState,
    n = e._writableState;
  (r && r.autoDestroy) || (n && n.autoDestroy)
    ? e.destroy(t)
    : e.emit("error", t);
}
var hu = { destroy: H0, undestroy: U0, errorOrDestroy: W0 },
  Ar = {};
function V0(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var du = {};
function vt(e, t, r) {
  r || (r = Error);
  function n(s, a, c) {
    return typeof t == "string" ? t : t(s, a, c);
  }
  var i = (function (s) {
    V0(a, s);
    function a(c, u, d) {
      return s.call(this, n(c, u, d)) || this;
    }
    return a;
  })(r);
  (i.prototype.name = r.name), (i.prototype.code = e), (du[e] = i);
}
function sc(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return (
      (e = e.map(function (n) {
        return String(n);
      })),
      r > 2
        ? "one of "
            .concat(t, " ")
            .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
        : r === 2
        ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
        : "of ".concat(t, " ").concat(e[0])
    );
  } else return "of ".concat(t, " ").concat(String(e));
}
function q0(e, t, r) {
  return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
}
function z0(e, t, r) {
  return (
    (r === void 0 || r > e.length) && (r = e.length),
    e.substring(r - t.length, r) === t
  );
}
function G0(e, t, r) {
  return (
    typeof r != "number" && (r = 0),
    r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1
  );
}
vt(
  "ERR_INVALID_OPT_VALUE",
  function (e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  },
  TypeError
);
vt(
  "ERR_INVALID_ARG_TYPE",
  function (e, t, r) {
    var n;
    typeof t == "string" && q0(t, "not ")
      ? ((n = "must not be"), (t = t.replace(/^not /, "")))
      : (n = "must be");
    var i;
    if (z0(e, " argument"))
      i = "The ".concat(e, " ").concat(n, " ").concat(sc(t, "type"));
    else {
      var s = G0(e, ".") ? "property" : "argument";
      i = 'The "'
        .concat(e, '" ')
        .concat(s, " ")
        .concat(n, " ")
        .concat(sc(t, "type"));
    }
    return (i += ". Received type ".concat(typeof r)), i;
  },
  TypeError
);
vt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
vt("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
  return "The " + e + " method is not implemented";
});
vt("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
vt("ERR_STREAM_DESTROYED", function (e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
vt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
vt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
vt("ERR_STREAM_WRITE_AFTER_END", "write after end");
vt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
vt(
  "ERR_UNKNOWN_ENCODING",
  function (e) {
    return "Unknown encoding: " + e;
  },
  TypeError
);
vt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Ar.codes = du;
var J0 = Ar.codes.ERR_INVALID_OPT_VALUE;
function Z0(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function K0(e, t, r, n) {
  var i = Z0(t, n, r);
  if (i != null) {
    if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
      var s = n ? r : "highWaterMark";
      throw new J0(s, i);
    }
    return Math.floor(i);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var fu = { getHighWaterMark: K0 },
  Q0 = Y0;
function Y0(e, t) {
  if (Gs("noDeprecation")) return e;
  var r = !1;
  function n() {
    if (!r) {
      if (Gs("throwDeprecation")) throw new Error(t);
      Gs("traceDeprecation") ? console.trace(t) : console.warn(t), (r = !0);
    }
    return e.apply(this, arguments);
  }
  return n;
}
function Gs(e) {
  try {
    if (!G.localStorage) return !1;
  } catch {
    return !1;
  }
  var t = G.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var Js, oc;
function pu() {
  if (oc) return Js;
  (oc = 1), (Js = z);
  function e(C) {
    var T = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function () {
        V(T, C);
      });
  }
  var t;
  z.WritableState = F;
  var r = { deprecate: Q0 },
    n = uu,
    i = Dn.Buffer,
    s =
      (typeof G < "u"
        ? G
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function a(C) {
    return i.from(C);
  }
  function c(C) {
    return i.isBuffer(C) || C instanceof s;
  }
  var u = hu,
    d = fu,
    g = d.getHighWaterMark,
    p = Ar.codes,
    E = p.ERR_INVALID_ARG_TYPE,
    k = p.ERR_METHOD_NOT_IMPLEMENTED,
    A = p.ERR_MULTIPLE_CALLBACK,
    O = p.ERR_STREAM_CANNOT_PIPE,
    L = p.ERR_STREAM_DESTROYED,
    M = p.ERR_STREAM_NULL_VALUES,
    I = p.ERR_STREAM_WRITE_AFTER_END,
    N = p.ERR_UNKNOWN_ENCODING,
    B = u.errorOrDestroy;
  Et(z, n);
  function P() {}
  function F(C, T, $) {
    (t = t || un()),
      (C = C || {}),
      typeof $ != "boolean" && ($ = T instanceof t),
      (this.objectMode = !!C.objectMode),
      $ && (this.objectMode = this.objectMode || !!C.writableObjectMode),
      (this.highWaterMark = g(this, C, "writableHighWaterMark", $)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1);
    var H = C.decodeStrings === !1;
    (this.decodeStrings = !H),
      (this.defaultEncoding = C.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (te) {
        f(T, te);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = C.emitClose !== !1),
      (this.autoDestroy = !!C.autoDestroy),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new e(this));
  }
  (F.prototype.getBuffer = function () {
    for (var T = this.bufferedRequest, $ = []; T; ) $.push(T), (T = T.next);
    return $;
  }),
    (function () {
      try {
        Object.defineProperty(F.prototype, "buffer", {
          get: r.deprecate(
            function () {
              return this.getBuffer();
            },
            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
            "DEP0003"
          ),
        });
      } catch {}
    })();
  var J;
  typeof Symbol == "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((J = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(z, Symbol.hasInstance, {
        value: function (T) {
          return J.call(this, T)
            ? !0
            : this !== z
            ? !1
            : T && T._writableState instanceof F;
        },
      }))
    : (J = function (T) {
        return T instanceof this;
      });
  function z(C) {
    t = t || un();
    var T = this instanceof t;
    if (!T && !J.call(z, this)) return new z(C);
    (this._writableState = new F(C, this, T)),
      (this.writable = !0),
      C &&
        (typeof C.write == "function" && (this._write = C.write),
        typeof C.writev == "function" && (this._writev = C.writev),
        typeof C.destroy == "function" && (this._destroy = C.destroy),
        typeof C.final == "function" && (this._final = C.final)),
      n.call(this);
  }
  z.prototype.pipe = function () {
    B(this, new O());
  };
  function U(C, T) {
    var $ = new I();
    B(C, $), process.nextTick(T, $);
  }
  function X(C, T, $, H) {
    var te;
    return (
      $ === null
        ? (te = new M())
        : typeof $ != "string" &&
          !T.objectMode &&
          (te = new E("chunk", ["string", "Buffer"], $)),
      te ? (B(C, te), process.nextTick(H, te), !1) : !0
    );
  }
  (z.prototype.write = function (C, T, $) {
    var H = this._writableState,
      te = !1,
      y = !H.objectMode && c(C);
    return (
      y && !i.isBuffer(C) && (C = a(C)),
      typeof T == "function" && (($ = T), (T = null)),
      y ? (T = "buffer") : T || (T = H.defaultEncoding),
      typeof $ != "function" && ($ = P),
      H.ending
        ? U(this, $)
        : (y || X(this, H, C, $)) &&
          (H.pendingcb++, (te = ie(this, H, y, C, T, $))),
      te
    );
  }),
    (z.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (z.prototype.uncork = function () {
      var C = this._writableState;
      C.corked &&
        (C.corked--,
        !C.writing &&
          !C.corked &&
          !C.bufferProcessing &&
          C.bufferedRequest &&
          R(this, C));
    }),
    (z.prototype.setDefaultEncoding = function (T) {
      if (
        (typeof T == "string" && (T = T.toLowerCase()),
        !(
          [
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw",
          ].indexOf((T + "").toLowerCase()) > -1
        ))
      )
        throw new N(T);
      return (this._writableState.defaultEncoding = T), this;
    }),
    Object.defineProperty(z.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    });
  function Q(C, T, $) {
    return (
      !C.objectMode &&
        C.decodeStrings !== !1 &&
        typeof T == "string" &&
        (T = i.from(T, $)),
      T
    );
  }
  Object.defineProperty(z.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function ie(C, T, $, H, te, y) {
    if (!$) {
      var w = Q(T, H, te);
      H !== w && (($ = !0), (te = "buffer"), (H = w));
    }
    var D = T.objectMode ? 1 : H.length;
    T.length += D;
    var j = T.length < T.highWaterMark;
    if ((j || (T.needDrain = !0), T.writing || T.corked)) {
      var K = T.lastBufferedRequest;
      (T.lastBufferedRequest = {
        chunk: H,
        encoding: te,
        isBuf: $,
        callback: y,
        next: null,
      }),
        K
          ? (K.next = T.lastBufferedRequest)
          : (T.bufferedRequest = T.lastBufferedRequest),
        (T.bufferedRequestCount += 1);
    } else m(C, T, !1, D, H, te, y);
    return j;
  }
  function m(C, T, $, H, te, y, w) {
    (T.writelen = H),
      (T.writecb = w),
      (T.writing = !0),
      (T.sync = !0),
      T.destroyed
        ? T.onwrite(new L("write"))
        : $
        ? C._writev(te, T.onwrite)
        : C._write(te, y, T.onwrite),
      (T.sync = !1);
  }
  function o(C, T, $, H, te) {
    --T.pendingcb,
      $
        ? (process.nextTick(te, H),
          process.nextTick(S, C, T),
          (C._writableState.errorEmitted = !0),
          B(C, H))
        : (te(H), (C._writableState.errorEmitted = !0), B(C, H), S(C, T));
  }
  function h(C) {
    (C.writing = !1),
      (C.writecb = null),
      (C.length -= C.writelen),
      (C.writelen = 0);
  }
  function f(C, T) {
    var $ = C._writableState,
      H = $.sync,
      te = $.writecb;
    if (typeof te != "function") throw new A();
    if ((h($), T)) o(C, $, H, T, te);
    else {
      var y = x($) || C.destroyed;
      !y && !$.corked && !$.bufferProcessing && $.bufferedRequest && R(C, $),
        H ? process.nextTick(_, C, $, y, te) : _(C, $, y, te);
    }
  }
  function _(C, T, $, H) {
    $ || b(C, T), T.pendingcb--, H(), S(C, T);
  }
  function b(C, T) {
    T.length === 0 && T.needDrain && ((T.needDrain = !1), C.emit("drain"));
  }
  function R(C, T) {
    T.bufferProcessing = !0;
    var $ = T.bufferedRequest;
    if (C._writev && $ && $.next) {
      var H = T.bufferedRequestCount,
        te = new Array(H),
        y = T.corkedRequestsFree;
      y.entry = $;
      for (var w = 0, D = !0; $; )
        (te[w] = $), $.isBuf || (D = !1), ($ = $.next), (w += 1);
      (te.allBuffers = D),
        m(C, T, !0, T.length, te, "", y.finish),
        T.pendingcb++,
        (T.lastBufferedRequest = null),
        y.next
          ? ((T.corkedRequestsFree = y.next), (y.next = null))
          : (T.corkedRequestsFree = new e(T)),
        (T.bufferedRequestCount = 0);
    } else {
      for (; $; ) {
        var j = $.chunk,
          K = $.encoding,
          ee = $.callback,
          Z = T.objectMode ? 1 : j.length;
        if (
          (m(C, T, !1, Z, j, K, ee),
          ($ = $.next),
          T.bufferedRequestCount--,
          T.writing)
        )
          break;
      }
      $ === null && (T.lastBufferedRequest = null);
    }
    (T.bufferedRequest = $), (T.bufferProcessing = !1);
  }
  (z.prototype._write = function (C, T, $) {
    $(new k("_write()"));
  }),
    (z.prototype._writev = null),
    (z.prototype.end = function (C, T, $) {
      var H = this._writableState;
      return (
        typeof C == "function"
          ? (($ = C), (C = null), (T = null))
          : typeof T == "function" && (($ = T), (T = null)),
        C != null && this.write(C, T),
        H.corked && ((H.corked = 1), this.uncork()),
        H.ending || W(this, H, $),
        this
      );
    }),
    Object.defineProperty(z.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function x(C) {
    return (
      C.ending &&
      C.length === 0 &&
      C.bufferedRequest === null &&
      !C.finished &&
      !C.writing
    );
  }
  function v(C, T) {
    C._final(function ($) {
      T.pendingcb--,
        $ && B(C, $),
        (T.prefinished = !0),
        C.emit("prefinish"),
        S(C, T);
    });
  }
  function l(C, T) {
    !T.prefinished &&
      !T.finalCalled &&
      (typeof C._final == "function" && !T.destroyed
        ? (T.pendingcb++, (T.finalCalled = !0), process.nextTick(v, C, T))
        : ((T.prefinished = !0), C.emit("prefinish")));
  }
  function S(C, T) {
    var $ = x(T);
    if (
      $ &&
      (l(C, T),
      T.pendingcb === 0 && ((T.finished = !0), C.emit("finish"), T.autoDestroy))
    ) {
      var H = C._readableState;
      (!H || (H.autoDestroy && H.endEmitted)) && C.destroy();
    }
    return $;
  }
  function W(C, T, $) {
    (T.ending = !0),
      S(C, T),
      $ && (T.finished ? process.nextTick($) : C.once("finish", $)),
      (T.ended = !0),
      (C.writable = !1);
  }
  function V(C, T, $) {
    var H = C.entry;
    for (C.entry = null; H; ) {
      var te = H.callback;
      T.pendingcb--, te($), (H = H.next);
    }
    T.corkedRequestsFree.next = C;
  }
  return (
    Object.defineProperty(z.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._writableState === void 0
          ? !1
          : this._writableState.destroyed;
      },
      set: function (T) {
        this._writableState && (this._writableState.destroyed = T);
      },
    }),
    (z.prototype.destroy = u.destroy),
    (z.prototype._undestroy = u.undestroy),
    (z.prototype._destroy = function (C, T) {
      T(C);
    }),
    Js
  );
}
var Zs, ac;
function un() {
  if (ac) return Zs;
  ac = 1;
  var e =
    Object.keys ||
    function (d) {
      var g = [];
      for (var p in d) g.push(p);
      return g;
    };
  Zs = a;
  var t = _u(),
    r = pu();
  Et(a, t);
  for (var n = e(r.prototype), i = 0; i < n.length; i++) {
    var s = n[i];
    a.prototype[s] || (a.prototype[s] = r.prototype[s]);
  }
  function a(d) {
    if (!(this instanceof a)) return new a(d);
    t.call(this, d),
      r.call(this, d),
      (this.allowHalfOpen = !0),
      d &&
        (d.readable === !1 && (this.readable = !1),
        d.writable === !1 && (this.writable = !1),
        d.allowHalfOpen === !1 &&
          ((this.allowHalfOpen = !1), this.once("end", c)));
  }
  Object.defineProperty(a.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  }),
    Object.defineProperty(a.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    }),
    Object.defineProperty(a.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function c() {
    this._writableState.ended || process.nextTick(u, this);
  }
  function u(d) {
    d.end();
  }
  return (
    Object.defineProperty(a.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._readableState === void 0 || this._writableState === void 0
          ? !1
          : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (g) {
        this._readableState === void 0 ||
          this._writableState === void 0 ||
          ((this._readableState.destroyed = g),
          (this._writableState.destroyed = g));
      },
    }),
    Zs
  );
}
var Ks = {},
  _i = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var cc;
function X0() {
  return (
    cc ||
      ((cc = 1),
      (function (e, t) {
        var r = Dn,
          n = r.Buffer;
        function i(a, c) {
          for (var u in a) c[u] = a[u];
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
          ? (e.exports = r)
          : (i(r, t), (t.Buffer = s));
        function s(a, c, u) {
          return n(a, c, u);
        }
        (s.prototype = Object.create(n.prototype)),
          i(n, s),
          (s.from = function (a, c, u) {
            if (typeof a == "number")
              throw new TypeError("Argument must not be a number");
            return n(a, c, u);
          }),
          (s.alloc = function (a, c, u) {
            if (typeof a != "number")
              throw new TypeError("Argument must be a number");
            var d = n(a);
            return (
              c !== void 0
                ? typeof u == "string"
                  ? d.fill(c, u)
                  : d.fill(c)
                : d.fill(0),
              d
            );
          }),
          (s.allocUnsafe = function (a) {
            if (typeof a != "number")
              throw new TypeError("Argument must be a number");
            return n(a);
          }),
          (s.allocUnsafeSlow = function (a) {
            if (typeof a != "number")
              throw new TypeError("Argument must be a number");
            return r.SlowBuffer(a);
          });
      })(_i, _i.exports)),
    _i.exports
  );
}
var lc;
function uc() {
  if (lc) return Ks;
  lc = 1;
  var e = X0().Buffer,
    t =
      e.isEncoding ||
      function (M) {
        switch (((M = "" + M), M && M.toLowerCase())) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1;
        }
      };
  function r(M) {
    if (!M) return "utf8";
    for (var I; ; )
      switch (M) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return M;
        default:
          if (I) return;
          (M = ("" + M).toLowerCase()), (I = !0);
      }
  }
  function n(M) {
    var I = r(M);
    if (typeof I != "string" && (e.isEncoding === t || !t(M)))
      throw new Error("Unknown encoding: " + M);
    return I || M;
  }
  Ks.StringDecoder = i;
  function i(M) {
    this.encoding = n(M);
    var I;
    switch (this.encoding) {
      case "utf16le":
        (this.text = p), (this.end = E), (I = 4);
        break;
      case "utf8":
        (this.fillLast = u), (I = 4);
        break;
      case "base64":
        (this.text = k), (this.end = A), (I = 3);
        break;
      default:
        (this.write = O), (this.end = L);
        return;
    }
    (this.lastNeed = 0),
      (this.lastTotal = 0),
      (this.lastChar = e.allocUnsafe(I));
  }
  (i.prototype.write = function (M) {
    if (M.length === 0) return "";
    var I, N;
    if (this.lastNeed) {
      if (((I = this.fillLast(M)), I === void 0)) return "";
      (N = this.lastNeed), (this.lastNeed = 0);
    } else N = 0;
    return N < M.length ? (I ? I + this.text(M, N) : this.text(M, N)) : I || "";
  }),
    (i.prototype.end = g),
    (i.prototype.text = d),
    (i.prototype.fillLast = function (M) {
      if (this.lastNeed <= M.length)
        return (
          M.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          ),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)
        );
      M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, M.length),
        (this.lastNeed -= M.length);
    });
  function s(M) {
    return M <= 127
      ? 0
      : M >> 5 === 6
      ? 2
      : M >> 4 === 14
      ? 3
      : M >> 3 === 30
      ? 4
      : M >> 6 === 2
      ? -1
      : -2;
  }
  function a(M, I, N) {
    var B = I.length - 1;
    if (B < N) return 0;
    var P = s(I[B]);
    return P >= 0
      ? (P > 0 && (M.lastNeed = P - 1), P)
      : --B < N || P === -2
      ? 0
      : ((P = s(I[B])),
        P >= 0
          ? (P > 0 && (M.lastNeed = P - 2), P)
          : --B < N || P === -2
          ? 0
          : ((P = s(I[B])),
            P >= 0
              ? (P > 0 && (P === 2 ? (P = 0) : (M.lastNeed = P - 3)), P)
              : 0));
  }
  function c(M, I, N) {
    if ((I[0] & 192) !== 128) return (M.lastNeed = 0), "�";
    if (M.lastNeed > 1 && I.length > 1) {
      if ((I[1] & 192) !== 128) return (M.lastNeed = 1), "�";
      if (M.lastNeed > 2 && I.length > 2 && (I[2] & 192) !== 128)
        return (M.lastNeed = 2), "�";
    }
  }
  function u(M) {
    var I = this.lastTotal - this.lastNeed,
      N = c(this, M);
    if (N !== void 0) return N;
    if (this.lastNeed <= M.length)
      return (
        M.copy(this.lastChar, I, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    M.copy(this.lastChar, I, 0, M.length), (this.lastNeed -= M.length);
  }
  function d(M, I) {
    var N = a(this, M, I);
    if (!this.lastNeed) return M.toString("utf8", I);
    this.lastTotal = N;
    var B = M.length - (N - this.lastNeed);
    return M.copy(this.lastChar, 0, B), M.toString("utf8", I, B);
  }
  function g(M) {
    var I = M && M.length ? this.write(M) : "";
    return this.lastNeed ? I + "�" : I;
  }
  function p(M, I) {
    if ((M.length - I) % 2 === 0) {
      var N = M.toString("utf16le", I);
      if (N) {
        var B = N.charCodeAt(N.length - 1);
        if (B >= 55296 && B <= 56319)
          return (
            (this.lastNeed = 2),
            (this.lastTotal = 4),
            (this.lastChar[0] = M[M.length - 2]),
            (this.lastChar[1] = M[M.length - 1]),
            N.slice(0, -1)
          );
      }
      return N;
    }
    return (
      (this.lastNeed = 1),
      (this.lastTotal = 2),
      (this.lastChar[0] = M[M.length - 1]),
      M.toString("utf16le", I, M.length - 1)
    );
  }
  function E(M) {
    var I = M && M.length ? this.write(M) : "";
    if (this.lastNeed) {
      var N = this.lastTotal - this.lastNeed;
      return I + this.lastChar.toString("utf16le", 0, N);
    }
    return I;
  }
  function k(M, I) {
    var N = (M.length - I) % 3;
    return N === 0
      ? M.toString("base64", I)
      : ((this.lastNeed = 3 - N),
        (this.lastTotal = 3),
        N === 1
          ? (this.lastChar[0] = M[M.length - 1])
          : ((this.lastChar[0] = M[M.length - 2]),
            (this.lastChar[1] = M[M.length - 1])),
        M.toString("base64", I, M.length - N));
  }
  function A(M) {
    var I = M && M.length ? this.write(M) : "";
    return this.lastNeed
      ? I + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
      : I;
  }
  function O(M) {
    return M.toString(this.encoding);
  }
  function L(M) {
    return M && M.length ? this.write(M) : "";
  }
  return Ks;
}
var hc = Ar.codes.ERR_STREAM_PREMATURE_CLOSE;
function e1(e) {
  var t = !1;
  return function () {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      e.apply(this, n);
    }
  };
}
function t1() {}
function r1(e) {
  return e.setHeader && typeof e.abort == "function";
}
function gu(e, t, r) {
  if (typeof t == "function") return gu(e, null, t);
  t || (t = {}), (r = e1(r || t1));
  var n = t.readable || (t.readable !== !1 && e.readable),
    i = t.writable || (t.writable !== !1 && e.writable),
    s = function () {
      e.writable || c();
    },
    a = e._writableState && e._writableState.finished,
    c = function () {
      (i = !1), (a = !0), n || r.call(e);
    },
    u = e._readableState && e._readableState.endEmitted,
    d = function () {
      (n = !1), (u = !0), i || r.call(e);
    },
    g = function (A) {
      r.call(e, A);
    },
    p = function () {
      var A;
      if (n && !u)
        return (
          (!e._readableState || !e._readableState.ended) && (A = new hc()),
          r.call(e, A)
        );
      if (i && !a)
        return (
          (!e._writableState || !e._writableState.ended) && (A = new hc()),
          r.call(e, A)
        );
    },
    E = function () {
      e.req.on("finish", c);
    };
  return (
    r1(e)
      ? (e.on("complete", c),
        e.on("abort", p),
        e.req ? E() : e.on("request", E))
      : i && !e._writableState && (e.on("end", s), e.on("close", s)),
    e.on("end", d),
    e.on("finish", c),
    t.error !== !1 && e.on("error", g),
    e.on("close", p),
    function () {
      e.removeListener("complete", c),
        e.removeListener("abort", p),
        e.removeListener("request", E),
        e.req && e.req.removeListener("finish", c),
        e.removeListener("end", s),
        e.removeListener("close", s),
        e.removeListener("finish", c),
        e.removeListener("end", d),
        e.removeListener("error", g),
        e.removeListener("close", p);
    }
  );
}
var Zo = gu,
  Qs,
  dc;
function n1() {
  if (dc) return Qs;
  dc = 1;
  var e;
  function t(N, B, P) {
    return (
      (B = r(B)),
      B in N
        ? Object.defineProperty(N, B, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (N[B] = P),
      N
    );
  }
  function r(N) {
    var B = n(N, "string");
    return typeof B == "symbol" ? B : String(B);
  }
  function n(N, B) {
    if (typeof N != "object" || N === null) return N;
    var P = N[Symbol.toPrimitive];
    if (P !== void 0) {
      var F = P.call(N, B || "default");
      if (typeof F != "object") return F;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (B === "string" ? String : Number)(N);
  }
  var i = Zo,
    s = Symbol("lastResolve"),
    a = Symbol("lastReject"),
    c = Symbol("error"),
    u = Symbol("ended"),
    d = Symbol("lastPromise"),
    g = Symbol("handlePromise"),
    p = Symbol("stream");
  function E(N, B) {
    return { value: N, done: B };
  }
  function k(N) {
    var B = N[s];
    if (B !== null) {
      var P = N[p].read();
      P !== null && ((N[d] = null), (N[s] = null), (N[a] = null), B(E(P, !1)));
    }
  }
  function A(N) {
    process.nextTick(k, N);
  }
  function O(N, B) {
    return function (P, F) {
      N.then(function () {
        if (B[u]) {
          P(E(void 0, !0));
          return;
        }
        B[g](P, F);
      }, F);
    };
  }
  var L = Object.getPrototypeOf(function () {}),
    M = Object.setPrototypeOf(
      ((e = {
        get stream() {
          return this[p];
        },
        next: function () {
          var B = this,
            P = this[c];
          if (P !== null) return Promise.reject(P);
          if (this[u]) return Promise.resolve(E(void 0, !0));
          if (this[p].destroyed)
            return new Promise(function (U, X) {
              process.nextTick(function () {
                B[c] ? X(B[c]) : U(E(void 0, !0));
              });
            });
          var F = this[d],
            J;
          if (F) J = new Promise(O(F, this));
          else {
            var z = this[p].read();
            if (z !== null) return Promise.resolve(E(z, !1));
            J = new Promise(this[g]);
          }
          return (this[d] = J), J;
        },
      }),
      t(e, Symbol.asyncIterator, function () {
        return this;
      }),
      t(e, "return", function () {
        var B = this;
        return new Promise(function (P, F) {
          B[p].destroy(null, function (J) {
            if (J) {
              F(J);
              return;
            }
            P(E(void 0, !0));
          });
        });
      }),
      e),
      L
    ),
    I = function (B) {
      var P,
        F = Object.create(
          M,
          ((P = {}),
          t(P, p, { value: B, writable: !0 }),
          t(P, s, { value: null, writable: !0 }),
          t(P, a, { value: null, writable: !0 }),
          t(P, c, { value: null, writable: !0 }),
          t(P, u, { value: B._readableState.endEmitted, writable: !0 }),
          t(P, g, {
            value: function (z, U) {
              var X = F[p].read();
              X
                ? ((F[d] = null), (F[s] = null), (F[a] = null), z(E(X, !1)))
                : ((F[s] = z), (F[a] = U));
            },
            writable: !0,
          }),
          P)
        );
      return (
        (F[d] = null),
        i(B, function (J) {
          if (J && J.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var z = F[a];
            z !== null && ((F[d] = null), (F[s] = null), (F[a] = null), z(J)),
              (F[c] = J);
            return;
          }
          var U = F[s];
          U !== null &&
            ((F[d] = null), (F[s] = null), (F[a] = null), U(E(void 0, !0))),
            (F[u] = !0);
        }),
        B.on("readable", A.bind(null, F)),
        F
      );
    };
  return (Qs = I), Qs;
}
var Ys, fc;
function i1() {
  return (
    fc ||
      ((fc = 1),
      (Ys = function () {
        throw new Error("Readable.from is not available in the browser");
      })),
    Ys
  );
}
var Xs, pc;
function _u() {
  if (pc) return Xs;
  (pc = 1), (Xs = U);
  var e;
  (U.ReadableState = z), Oi.EventEmitter;
  var t = function (w, D) {
      return w.listeners(D).length;
    },
    r = uu,
    n = Dn.Buffer,
    i =
      (typeof G < "u"
        ? G
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function s(y) {
    return n.from(y);
  }
  function a(y) {
    return n.isBuffer(y) || y instanceof i;
  }
  var c = To,
    u;
  c && c.debuglog ? (u = c.debuglog("stream")) : (u = function () {});
  var d = j0(),
    g = hu,
    p = fu,
    E = p.getHighWaterMark,
    k = Ar.codes,
    A = k.ERR_INVALID_ARG_TYPE,
    O = k.ERR_STREAM_PUSH_AFTER_EOF,
    L = k.ERR_METHOD_NOT_IMPLEMENTED,
    M = k.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
    I,
    N,
    B;
  Et(U, r);
  var P = g.errorOrDestroy,
    F = ["error", "close", "destroy", "pause", "resume"];
  function J(y, w, D) {
    if (typeof y.prependListener == "function") return y.prependListener(w, D);
    !y._events || !y._events[w]
      ? y.on(w, D)
      : Array.isArray(y._events[w])
      ? y._events[w].unshift(D)
      : (y._events[w] = [D, y._events[w]]);
  }
  function z(y, w, D) {
    (e = e || un()),
      (y = y || {}),
      typeof D != "boolean" && (D = w instanceof e),
      (this.objectMode = !!y.objectMode),
      D && (this.objectMode = this.objectMode || !!y.readableObjectMode),
      (this.highWaterMark = E(this, y, "readableHighWaterMark", D)),
      (this.buffer = new d()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.paused = !0),
      (this.emitClose = y.emitClose !== !1),
      (this.autoDestroy = !!y.autoDestroy),
      (this.destroyed = !1),
      (this.defaultEncoding = y.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      y.encoding &&
        (I || (I = uc().StringDecoder),
        (this.decoder = new I(y.encoding)),
        (this.encoding = y.encoding));
  }
  function U(y) {
    if (((e = e || un()), !(this instanceof U))) return new U(y);
    var w = this instanceof e;
    (this._readableState = new z(y, this, w)),
      (this.readable = !0),
      y &&
        (typeof y.read == "function" && (this._read = y.read),
        typeof y.destroy == "function" && (this._destroy = y.destroy)),
      r.call(this);
  }
  Object.defineProperty(U.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0
        ? !1
        : this._readableState.destroyed;
    },
    set: function (w) {
      this._readableState && (this._readableState.destroyed = w);
    },
  }),
    (U.prototype.destroy = g.destroy),
    (U.prototype._undestroy = g.undestroy),
    (U.prototype._destroy = function (y, w) {
      w(y);
    }),
    (U.prototype.push = function (y, w) {
      var D = this._readableState,
        j;
      return (
        D.objectMode
          ? (j = !0)
          : typeof y == "string" &&
            ((w = w || D.defaultEncoding),
            w !== D.encoding && ((y = n.from(y, w)), (w = "")),
            (j = !0)),
        X(this, y, w, !1, j)
      );
    }),
    (U.prototype.unshift = function (y) {
      return X(this, y, null, !0, !1);
    });
  function X(y, w, D, j, K) {
    u("readableAddChunk", w);
    var ee = y._readableState;
    if (w === null) (ee.reading = !1), f(y, ee);
    else {
      var Z;
      if ((K || (Z = ie(ee, w)), Z)) P(y, Z);
      else if (ee.objectMode || (w && w.length > 0))
        if (
          (typeof w != "string" &&
            !ee.objectMode &&
            Object.getPrototypeOf(w) !== n.prototype &&
            (w = s(w)),
          j)
        )
          ee.endEmitted ? P(y, new M()) : Q(y, ee, w, !0);
        else if (ee.ended) P(y, new O());
        else {
          if (ee.destroyed) return !1;
          (ee.reading = !1),
            ee.decoder && !D
              ? ((w = ee.decoder.write(w)),
                ee.objectMode || w.length !== 0 ? Q(y, ee, w, !1) : R(y, ee))
              : Q(y, ee, w, !1);
        }
      else j || ((ee.reading = !1), R(y, ee));
    }
    return !ee.ended && (ee.length < ee.highWaterMark || ee.length === 0);
  }
  function Q(y, w, D, j) {
    w.flowing && w.length === 0 && !w.sync
      ? ((w.awaitDrain = 0), y.emit("data", D))
      : ((w.length += w.objectMode ? 1 : D.length),
        j ? w.buffer.unshift(D) : w.buffer.push(D),
        w.needReadable && _(y)),
      R(y, w);
  }
  function ie(y, w) {
    var D;
    return (
      !a(w) &&
        typeof w != "string" &&
        w !== void 0 &&
        !y.objectMode &&
        (D = new A("chunk", ["string", "Buffer", "Uint8Array"], w)),
      D
    );
  }
  (U.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  }),
    (U.prototype.setEncoding = function (y) {
      I || (I = uc().StringDecoder);
      var w = new I(y);
      (this._readableState.decoder = w),
        (this._readableState.encoding = this._readableState.decoder.encoding);
      for (var D = this._readableState.buffer.head, j = ""; D !== null; )
        (j += w.write(D.data)), (D = D.next);
      return (
        this._readableState.buffer.clear(),
        j !== "" && this._readableState.buffer.push(j),
        (this._readableState.length = j.length),
        this
      );
    });
  var m = 1073741824;
  function o(y) {
    return (
      y >= m
        ? (y = m)
        : (y--,
          (y |= y >>> 1),
          (y |= y >>> 2),
          (y |= y >>> 4),
          (y |= y >>> 8),
          (y |= y >>> 16),
          y++),
      y
    );
  }
  function h(y, w) {
    return y <= 0 || (w.length === 0 && w.ended)
      ? 0
      : w.objectMode
      ? 1
      : y !== y
      ? w.flowing && w.length
        ? w.buffer.head.data.length
        : w.length
      : (y > w.highWaterMark && (w.highWaterMark = o(y)),
        y <= w.length ? y : w.ended ? w.length : ((w.needReadable = !0), 0));
  }
  U.prototype.read = function (y) {
    u("read", y), (y = parseInt(y, 10));
    var w = this._readableState,
      D = y;
    if (
      (y !== 0 && (w.emittedReadable = !1),
      y === 0 &&
        w.needReadable &&
        ((w.highWaterMark !== 0 ? w.length >= w.highWaterMark : w.length > 0) ||
          w.ended))
    )
      return (
        u("read: emitReadable", w.length, w.ended),
        w.length === 0 && w.ended ? $(this) : _(this),
        null
      );
    if (((y = h(y, w)), y === 0 && w.ended))
      return w.length === 0 && $(this), null;
    var j = w.needReadable;
    u("need readable", j),
      (w.length === 0 || w.length - y < w.highWaterMark) &&
        ((j = !0), u("length less than watermark", j)),
      w.ended || w.reading
        ? ((j = !1), u("reading or ended", j))
        : j &&
          (u("do read"),
          (w.reading = !0),
          (w.sync = !0),
          w.length === 0 && (w.needReadable = !0),
          this._read(w.highWaterMark),
          (w.sync = !1),
          w.reading || (y = h(D, w)));
    var K;
    return (
      y > 0 ? (K = T(y, w)) : (K = null),
      K === null
        ? ((w.needReadable = w.length <= w.highWaterMark), (y = 0))
        : ((w.length -= y), (w.awaitDrain = 0)),
      w.length === 0 &&
        (w.ended || (w.needReadable = !0), D !== y && w.ended && $(this)),
      K !== null && this.emit("data", K),
      K
    );
  };
  function f(y, w) {
    if ((u("onEofChunk"), !w.ended)) {
      if (w.decoder) {
        var D = w.decoder.end();
        D &&
          D.length &&
          (w.buffer.push(D), (w.length += w.objectMode ? 1 : D.length));
      }
      (w.ended = !0),
        w.sync
          ? _(y)
          : ((w.needReadable = !1),
            w.emittedReadable || ((w.emittedReadable = !0), b(y)));
    }
  }
  function _(y) {
    var w = y._readableState;
    u("emitReadable", w.needReadable, w.emittedReadable),
      (w.needReadable = !1),
      w.emittedReadable ||
        (u("emitReadable", w.flowing),
        (w.emittedReadable = !0),
        process.nextTick(b, y));
  }
  function b(y) {
    var w = y._readableState;
    u("emitReadable_", w.destroyed, w.length, w.ended),
      !w.destroyed &&
        (w.length || w.ended) &&
        (y.emit("readable"), (w.emittedReadable = !1)),
      (w.needReadable = !w.flowing && !w.ended && w.length <= w.highWaterMark),
      C(y);
  }
  function R(y, w) {
    w.readingMore || ((w.readingMore = !0), process.nextTick(x, y, w));
  }
  function x(y, w) {
    for (
      ;
      !w.reading &&
      !w.ended &&
      (w.length < w.highWaterMark || (w.flowing && w.length === 0));

    ) {
      var D = w.length;
      if ((u("maybeReadMore read 0"), y.read(0), D === w.length)) break;
    }
    w.readingMore = !1;
  }
  (U.prototype._read = function (y) {
    P(this, new L("_read()"));
  }),
    (U.prototype.pipe = function (y, w) {
      var D = this,
        j = this._readableState;
      switch (j.pipesCount) {
        case 0:
          j.pipes = y;
          break;
        case 1:
          j.pipes = [j.pipes, y];
          break;
        default:
          j.pipes.push(y);
          break;
      }
      (j.pipesCount += 1), u("pipe count=%d opts=%j", j.pipesCount, w);
      var K =
          (!w || w.end !== !1) && y !== process.stdout && y !== process.stderr,
        ee = K ? le : he;
      j.endEmitted ? process.nextTick(ee) : D.once("end", ee),
        y.on("unpipe", Z);
      function Z(ue, ct) {
        u("onunpipe"),
          ue === D &&
            ct &&
            ct.hasUnpiped === !1 &&
            ((ct.hasUnpiped = !0), me());
      }
      function le() {
        u("onend"), y.end();
      }
      var Mt = v(D);
      y.on("drain", Mt);
      var _e = !1;
      function me() {
        u("cleanup"),
          y.removeListener("close", pe),
          y.removeListener("finish", Ot),
          y.removeListener("drain", Mt),
          y.removeListener("error", fe),
          y.removeListener("unpipe", Z),
          D.removeListener("end", le),
          D.removeListener("end", he),
          D.removeListener("data", Vt),
          (_e = !0),
          j.awaitDrain &&
            (!y._writableState || y._writableState.needDrain) &&
            Mt();
      }
      D.on("data", Vt);
      function Vt(ue) {
        u("ondata");
        var ct = y.write(ue);
        u("dest.write", ct),
          ct === !1 &&
            (((j.pipesCount === 1 && j.pipes === y) ||
              (j.pipesCount > 1 && te(j.pipes, y) !== -1)) &&
              !_e &&
              (u("false write response, pause", j.awaitDrain), j.awaitDrain++),
            D.pause());
      }
      function fe(ue) {
        u("onerror", ue),
          he(),
          y.removeListener("error", fe),
          t(y, "error") === 0 && P(y, ue);
      }
      J(y, "error", fe);
      function pe() {
        y.removeListener("finish", Ot), he();
      }
      y.once("close", pe);
      function Ot() {
        u("onfinish"), y.removeListener("close", pe), he();
      }
      y.once("finish", Ot);
      function he() {
        u("unpipe"), D.unpipe(y);
      }
      return y.emit("pipe", D), j.flowing || (u("pipe resume"), D.resume()), y;
    });
  function v(y) {
    return function () {
      var D = y._readableState;
      u("pipeOnDrain", D.awaitDrain),
        D.awaitDrain && D.awaitDrain--,
        D.awaitDrain === 0 && t(y, "data") && ((D.flowing = !0), C(y));
    };
  }
  (U.prototype.unpipe = function (y) {
    var w = this._readableState,
      D = { hasUnpiped: !1 };
    if (w.pipesCount === 0) return this;
    if (w.pipesCount === 1)
      return y && y !== w.pipes
        ? this
        : (y || (y = w.pipes),
          (w.pipes = null),
          (w.pipesCount = 0),
          (w.flowing = !1),
          y && y.emit("unpipe", this, D),
          this);
    if (!y) {
      var j = w.pipes,
        K = w.pipesCount;
      (w.pipes = null), (w.pipesCount = 0), (w.flowing = !1);
      for (var ee = 0; ee < K; ee++)
        j[ee].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var Z = te(w.pipes, y);
    return Z === -1
      ? this
      : (w.pipes.splice(Z, 1),
        (w.pipesCount -= 1),
        w.pipesCount === 1 && (w.pipes = w.pipes[0]),
        y.emit("unpipe", this, D),
        this);
  }),
    (U.prototype.on = function (y, w) {
      var D = r.prototype.on.call(this, y, w),
        j = this._readableState;
      return (
        y === "data"
          ? ((j.readableListening = this.listenerCount("readable") > 0),
            j.flowing !== !1 && this.resume())
          : y === "readable" &&
            !j.endEmitted &&
            !j.readableListening &&
            ((j.readableListening = j.needReadable = !0),
            (j.flowing = !1),
            (j.emittedReadable = !1),
            u("on readable", j.length, j.reading),
            j.length ? _(this) : j.reading || process.nextTick(S, this)),
        D
      );
    }),
    (U.prototype.addListener = U.prototype.on),
    (U.prototype.removeListener = function (y, w) {
      var D = r.prototype.removeListener.call(this, y, w);
      return y === "readable" && process.nextTick(l, this), D;
    }),
    (U.prototype.removeAllListeners = function (y) {
      var w = r.prototype.removeAllListeners.apply(this, arguments);
      return (y === "readable" || y === void 0) && process.nextTick(l, this), w;
    });
  function l(y) {
    var w = y._readableState;
    (w.readableListening = y.listenerCount("readable") > 0),
      w.resumeScheduled && !w.paused
        ? (w.flowing = !0)
        : y.listenerCount("data") > 0 && y.resume();
  }
  function S(y) {
    u("readable nexttick read 0"), y.read(0);
  }
  U.prototype.resume = function () {
    var y = this._readableState;
    return (
      y.flowing ||
        (u("resume"), (y.flowing = !y.readableListening), W(this, y)),
      (y.paused = !1),
      this
    );
  };
  function W(y, w) {
    w.resumeScheduled || ((w.resumeScheduled = !0), process.nextTick(V, y, w));
  }
  function V(y, w) {
    u("resume", w.reading),
      w.reading || y.read(0),
      (w.resumeScheduled = !1),
      y.emit("resume"),
      C(y),
      w.flowing && !w.reading && y.read(0);
  }
  U.prototype.pause = function () {
    return (
      u("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 &&
        (u("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState.paused = !0),
      this
    );
  };
  function C(y) {
    var w = y._readableState;
    for (u("flow", w.flowing); w.flowing && y.read() !== null; );
  }
  (U.prototype.wrap = function (y) {
    var w = this,
      D = this._readableState,
      j = !1;
    y.on("end", function () {
      if ((u("wrapped end"), D.decoder && !D.ended)) {
        var Z = D.decoder.end();
        Z && Z.length && w.push(Z);
      }
      w.push(null);
    }),
      y.on("data", function (Z) {
        if (
          (u("wrapped data"),
          D.decoder && (Z = D.decoder.write(Z)),
          !(D.objectMode && Z == null) && !(!D.objectMode && (!Z || !Z.length)))
        ) {
          var le = w.push(Z);
          le || ((j = !0), y.pause());
        }
      });
    for (var K in y)
      this[K] === void 0 &&
        typeof y[K] == "function" &&
        (this[K] = (function (le) {
          return function () {
            return y[le].apply(y, arguments);
          };
        })(K));
    for (var ee = 0; ee < F.length; ee++)
      y.on(F[ee], this.emit.bind(this, F[ee]));
    return (
      (this._read = function (Z) {
        u("wrapped _read", Z), j && ((j = !1), y.resume());
      }),
      this
    );
  }),
    typeof Symbol == "function" &&
      (U.prototype[Symbol.asyncIterator] = function () {
        return N === void 0 && (N = n1()), N(this);
      }),
    Object.defineProperty(U.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      },
    }),
    Object.defineProperty(U.prototype, "readableBuffer", {
      enumerable: !1,
      get: function () {
        return this._readableState && this._readableState.buffer;
      },
    }),
    Object.defineProperty(U.prototype, "readableFlowing", {
      enumerable: !1,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (w) {
        this._readableState && (this._readableState.flowing = w);
      },
    }),
    (U._fromList = T),
    Object.defineProperty(U.prototype, "readableLength", {
      enumerable: !1,
      get: function () {
        return this._readableState.length;
      },
    });
  function T(y, w) {
    if (w.length === 0) return null;
    var D;
    return (
      w.objectMode
        ? (D = w.buffer.shift())
        : !y || y >= w.length
        ? (w.decoder
            ? (D = w.buffer.join(""))
            : w.buffer.length === 1
            ? (D = w.buffer.first())
            : (D = w.buffer.concat(w.length)),
          w.buffer.clear())
        : (D = w.buffer.consume(y, w.decoder)),
      D
    );
  }
  function $(y) {
    var w = y._readableState;
    u("endReadable", w.endEmitted),
      w.endEmitted || ((w.ended = !0), process.nextTick(H, w, y));
  }
  function H(y, w) {
    if (
      (u("endReadableNT", y.endEmitted, y.length),
      !y.endEmitted &&
        y.length === 0 &&
        ((y.endEmitted = !0), (w.readable = !1), w.emit("end"), y.autoDestroy))
    ) {
      var D = w._writableState;
      (!D || (D.autoDestroy && D.finished)) && w.destroy();
    }
  }
  typeof Symbol == "function" &&
    (U.from = function (y, w) {
      return B === void 0 && (B = i1()), B(U, y, w);
    });
  function te(y, w) {
    for (var D = 0, j = y.length; D < j; D++) if (y[D] === w) return D;
    return -1;
  }
  return Xs;
}
var mu = Wt,
  us = Ar.codes,
  s1 = us.ERR_METHOD_NOT_IMPLEMENTED,
  o1 = us.ERR_MULTIPLE_CALLBACK,
  a1 = us.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  c1 = us.ERR_TRANSFORM_WITH_LENGTH_0,
  hs = un();
Et(Wt, hs);
function l1(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null) return this.emit("error", new o1());
  (r.writechunk = null), (r.writecb = null), t != null && this.push(t), n(e);
  var i = this._readableState;
  (i.reading = !1),
    (i.needReadable || i.length < i.highWaterMark) &&
      this._read(i.highWaterMark);
}
function Wt(e) {
  if (!(this instanceof Wt)) return new Wt(e);
  hs.call(this, e),
    (this._transformState = {
      afterTransform: l1.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null,
    }),
    (this._readableState.needReadable = !0),
    (this._readableState.sync = !1),
    e &&
      (typeof e.transform == "function" && (this._transform = e.transform),
      typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", u1);
}
function u1() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed
    ? this._flush(function (t, r) {
        gc(e, t, r);
      })
    : gc(this, null, null);
}
Wt.prototype.push = function (e, t) {
  return (
    (this._transformState.needTransform = !1),
    hs.prototype.push.call(this, e, t)
  );
};
Wt.prototype._transform = function (e, t, r) {
  r(new s1("_transform()"));
};
Wt.prototype._write = function (e, t, r) {
  var n = this._transformState;
  if (
    ((n.writecb = r),
    (n.writechunk = e),
    (n.writeencoding = t),
    !n.transforming)
  ) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
      this._read(i.highWaterMark);
  }
};
Wt.prototype._read = function (e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming
    ? ((t.transforming = !0),
      this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    : (t.needTransform = !0);
};
Wt.prototype._destroy = function (e, t) {
  hs.prototype._destroy.call(this, e, function (r) {
    t(r);
  });
};
function gc(e, t, r) {
  if (t) return e.emit("error", t);
  if ((r != null && e.push(r), e._writableState.length)) throw new c1();
  if (e._transformState.transforming) throw new a1();
  return e.push(null);
}
var h1 = On,
  vu = mu;
Et(On, vu);
function On(e) {
  if (!(this instanceof On)) return new On(e);
  vu.call(this, e);
}
On.prototype._transform = function (e, t, r) {
  r(null, e);
};
var eo;
function d1(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e.apply(void 0, arguments));
  };
}
var bu = Ar.codes,
  f1 = bu.ERR_MISSING_ARGS,
  p1 = bu.ERR_STREAM_DESTROYED;
function _c(e) {
  if (e) throw e;
}
function g1(e) {
  return e.setHeader && typeof e.abort == "function";
}
function _1(e, t, r, n) {
  n = d1(n);
  var i = !1;
  e.on("close", function () {
    i = !0;
  }),
    eo === void 0 && (eo = Zo),
    eo(e, { readable: t, writable: r }, function (a) {
      if (a) return n(a);
      (i = !0), n();
    });
  var s = !1;
  return function (a) {
    if (!i && !s) {
      if (((s = !0), g1(e))) return e.abort();
      if (typeof e.destroy == "function") return e.destroy();
      n(a || new p1("pipe"));
    }
  };
}
function mc(e) {
  e();
}
function m1(e, t) {
  return e.pipe(t);
}
function v1(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? _c : e.pop();
}
function b1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = v1(t);
  if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
    throw new f1("streams");
  var i,
    s = t.map(function (a, c) {
      var u = c < t.length - 1,
        d = c > 0;
      return _1(a, u, d, function (g) {
        i || (i = g), g && s.forEach(mc), !u && (s.forEach(mc), n(i));
      });
    });
  return t.reduce(m1);
}
var y1 = b1;
(function (e, t) {
  (t = e.exports = _u()),
    (t.Stream = t),
    (t.Readable = t),
    (t.Writable = pu()),
    (t.Duplex = un()),
    (t.Transform = mu),
    (t.PassThrough = h1),
    (t.finished = Zo),
    (t.pipeline = y1);
})(Ro, Ro.exports);
var yu = Ro.exports;
const { Transform: w1 } = yu;
var E1 = (e) =>
  class wu extends w1 {
    constructor(r, n, i, s, a) {
      super(a),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = i),
        (this._hashBitLength = s),
        (this._options = a),
        (this._state = new e()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, i) {
      let s = null;
      try {
        this.update(r, n);
      } catch (a) {
        s = a;
      }
      i(s);
    }
    _flush(r) {
      let n = null;
      try {
        this.push(this.digest());
      } catch (i) {
        n = i;
      }
      r(n);
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Digest already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    digest(r) {
      if (this._finalized) throw new Error("Digest already called");
      (this._finalized = !0),
        this._delimitedSuffix &&
          this._state.absorbLastFewBits(this._delimitedSuffix);
      let n = this._state.squeeze(this._hashBitLength / 8);
      return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new wu(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const { Transform: S1 } = yu;
var R1 = (e) =>
  class Eu extends S1 {
    constructor(r, n, i, s) {
      super(s),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = i),
        (this._options = s),
        (this._state = new e()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, i) {
      let s = null;
      try {
        this.update(r, n);
      } catch (a) {
        s = a;
      }
      i(s);
    }
    _flush() {}
    _read(r) {
      this.push(this.squeeze(r));
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Squeeze already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    squeeze(r, n) {
      this._finalized ||
        ((this._finalized = !0),
        this._state.absorbLastFewBits(this._delimitedSuffix));
      let i = this._state.squeeze(r);
      return n !== void 0 && (i = i.toString(n)), i;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new Eu(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const M1 = E1,
  k1 = R1;
var C1 = function (e) {
    const t = M1(e),
      r = k1(e);
    return function (n, i) {
      switch (typeof n == "string" ? n.toLowerCase() : n) {
        case "keccak224":
          return new t(1152, 448, null, 224, i);
        case "keccak256":
          return new t(1088, 512, null, 256, i);
        case "keccak384":
          return new t(832, 768, null, 384, i);
        case "keccak512":
          return new t(576, 1024, null, 512, i);
        case "sha3-224":
          return new t(1152, 448, 6, 224, i);
        case "sha3-256":
          return new t(1088, 512, 6, 256, i);
        case "sha3-384":
          return new t(832, 768, 6, 384, i);
        case "sha3-512":
          return new t(576, 1024, 6, 512, i);
        case "shake128":
          return new r(1344, 256, 31, i);
        case "shake256":
          return new r(1088, 512, 31, i);
        default:
          throw new Error("Invald algorithm: " + n);
      }
    };
  },
  Su = {};
const vc = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
  2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0,
  2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
  2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649,
  0, 2147516424, 2147483648,
];
Su.p1600 = function (e) {
  for (let t = 0; t < 24; ++t) {
    const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
      n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
      i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
      s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
      a = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
      c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
      u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
      d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
      g = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
      p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let E = g ^ ((i << 1) | (s >>> 31)),
      k = p ^ ((s << 1) | (i >>> 31));
    const A = e[0] ^ E,
      O = e[1] ^ k,
      L = e[10] ^ E,
      M = e[11] ^ k,
      I = e[20] ^ E,
      N = e[21] ^ k,
      B = e[30] ^ E,
      P = e[31] ^ k,
      F = e[40] ^ E,
      J = e[41] ^ k;
    (E = r ^ ((a << 1) | (c >>> 31))), (k = n ^ ((c << 1) | (a >>> 31)));
    const z = e[2] ^ E,
      U = e[3] ^ k,
      X = e[12] ^ E,
      Q = e[13] ^ k,
      ie = e[22] ^ E,
      m = e[23] ^ k,
      o = e[32] ^ E,
      h = e[33] ^ k,
      f = e[42] ^ E,
      _ = e[43] ^ k;
    (E = i ^ ((u << 1) | (d >>> 31))), (k = s ^ ((d << 1) | (u >>> 31)));
    const b = e[4] ^ E,
      R = e[5] ^ k,
      x = e[14] ^ E,
      v = e[15] ^ k,
      l = e[24] ^ E,
      S = e[25] ^ k,
      W = e[34] ^ E,
      V = e[35] ^ k,
      C = e[44] ^ E,
      T = e[45] ^ k;
    (E = a ^ ((g << 1) | (p >>> 31))), (k = c ^ ((p << 1) | (g >>> 31)));
    const $ = e[6] ^ E,
      H = e[7] ^ k,
      te = e[16] ^ E,
      y = e[17] ^ k,
      w = e[26] ^ E,
      D = e[27] ^ k,
      j = e[36] ^ E,
      K = e[37] ^ k,
      ee = e[46] ^ E,
      Z = e[47] ^ k;
    (E = u ^ ((r << 1) | (n >>> 31))), (k = d ^ ((n << 1) | (r >>> 31)));
    const le = e[8] ^ E,
      Mt = e[9] ^ k,
      _e = e[18] ^ E,
      me = e[19] ^ k,
      Vt = e[28] ^ E,
      fe = e[29] ^ k,
      pe = e[38] ^ E,
      Ot = e[39] ^ k,
      he = e[48] ^ E,
      ue = e[49] ^ k,
      ct = A,
      ve = O,
      be = (M << 4) | (L >>> 28),
      Lr = (L << 4) | (M >>> 28),
      ye = (I << 3) | (N >>> 29),
      we = (N << 3) | (I >>> 29),
      Pr = (P << 9) | (B >>> 23),
      Ee = (B << 9) | (P >>> 23),
      Se = (F << 18) | (J >>> 14),
      Or = (J << 18) | (F >>> 14),
      Re = (z << 1) | (U >>> 31),
      Me = (U << 1) | (z >>> 31),
      $r = (Q << 12) | (X >>> 20),
      ke = (X << 12) | (Q >>> 20),
      Ce = (ie << 10) | (m >>> 22),
      Br = (m << 10) | (ie >>> 22),
      Ie = (h << 13) | (o >>> 19),
      xe = (o << 13) | (h >>> 19),
      Dr = (f << 2) | (_ >>> 30),
      Ae = (_ << 2) | (f >>> 30),
      Te = (R << 30) | (b >>> 2),
      Fr = (b << 30) | (R >>> 2),
      Ne = (x << 6) | (v >>> 26),
      Le = (v << 6) | (x >>> 26),
      jr = (S << 11) | (l >>> 21),
      Pe = (l << 11) | (S >>> 21),
      Oe = (W << 15) | (V >>> 17),
      Hr = (V << 15) | (W >>> 17),
      $e = (T << 29) | (C >>> 3),
      Be = (C << 29) | (T >>> 3),
      Ur = ($ << 28) | (H >>> 4),
      De = (H << 28) | ($ >>> 4),
      Fe = (y << 23) | (te >>> 9),
      Wr = (te << 23) | (y >>> 9),
      je = (w << 25) | (D >>> 7),
      He = (D << 25) | (w >>> 7),
      Qt = (j << 21) | (K >>> 11),
      Yt = (K << 21) | (j >>> 11),
      Xt = (Z << 24) | (ee >>> 8),
      er = (ee << 24) | (Z >>> 8),
      tr = (le << 27) | (Mt >>> 5),
      rr = (Mt << 27) | (le >>> 5),
      nr = (_e << 20) | (me >>> 12),
      ir = (me << 20) | (_e >>> 12),
      sr = (fe << 7) | (Vt >>> 25),
      or = (Vt << 7) | (fe >>> 25),
      ar = (pe << 8) | (Ot >>> 24),
      cr = (Ot << 8) | (pe >>> 24),
      lr = (he << 14) | (ue >>> 18),
      ur = (ue << 14) | (he >>> 18);
    (e[0] = ct ^ (~$r & jr)),
      (e[1] = ve ^ (~ke & Pe)),
      (e[10] = Ur ^ (~nr & ye)),
      (e[11] = De ^ (~ir & we)),
      (e[20] = Re ^ (~Ne & je)),
      (e[21] = Me ^ (~Le & He)),
      (e[30] = tr ^ (~be & Ce)),
      (e[31] = rr ^ (~Lr & Br)),
      (e[40] = Te ^ (~Fe & sr)),
      (e[41] = Fr ^ (~Wr & or)),
      (e[2] = $r ^ (~jr & Qt)),
      (e[3] = ke ^ (~Pe & Yt)),
      (e[12] = nr ^ (~ye & Ie)),
      (e[13] = ir ^ (~we & xe)),
      (e[22] = Ne ^ (~je & ar)),
      (e[23] = Le ^ (~He & cr)),
      (e[32] = be ^ (~Ce & Oe)),
      (e[33] = Lr ^ (~Br & Hr)),
      (e[42] = Fe ^ (~sr & Pr)),
      (e[43] = Wr ^ (~or & Ee)),
      (e[4] = jr ^ (~Qt & lr)),
      (e[5] = Pe ^ (~Yt & ur)),
      (e[14] = ye ^ (~Ie & $e)),
      (e[15] = we ^ (~xe & Be)),
      (e[24] = je ^ (~ar & Se)),
      (e[25] = He ^ (~cr & Or)),
      (e[34] = Ce ^ (~Oe & Xt)),
      (e[35] = Br ^ (~Hr & er)),
      (e[44] = sr ^ (~Pr & Dr)),
      (e[45] = or ^ (~Ee & Ae)),
      (e[6] = Qt ^ (~lr & ct)),
      (e[7] = Yt ^ (~ur & ve)),
      (e[16] = Ie ^ (~$e & Ur)),
      (e[17] = xe ^ (~Be & De)),
      (e[26] = ar ^ (~Se & Re)),
      (e[27] = cr ^ (~Or & Me)),
      (e[36] = Oe ^ (~Xt & tr)),
      (e[37] = Hr ^ (~er & rr)),
      (e[46] = Pr ^ (~Dr & Te)),
      (e[47] = Ee ^ (~Ae & Fr)),
      (e[8] = lr ^ (~ct & $r)),
      (e[9] = ur ^ (~ve & ke)),
      (e[18] = $e ^ (~Ur & nr)),
      (e[19] = Be ^ (~De & ir)),
      (e[28] = Se ^ (~Re & Ne)),
      (e[29] = Or ^ (~Me & Le)),
      (e[38] = Xt ^ (~tr & be)),
      (e[39] = er ^ (~rr & Lr)),
      (e[48] = Dr ^ (~Te & Fe)),
      (e[49] = Ae ^ (~Fr & Wr)),
      (e[0] ^= vc[t * 2]),
      (e[1] ^= vc[t * 2 + 1]);
  }
};
const Ti = Su;
function yn() {
  (this.state = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
yn.prototype.initialize = function (e, t) {
  for (let r = 0; r < 50; ++r) this.state[r] = 0;
  (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
};
yn.prototype.absorb = function (e) {
  for (let t = 0; t < e.length; ++t)
    (this.state[~~(this.count / 4)] ^= e[t] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (Ti.p1600(this.state), (this.count = 0));
};
yn.prototype.absorbLastFewBits = function (e) {
  (this.state[~~(this.count / 4)] ^= e << (8 * (this.count % 4))),
    e & 128 && this.count === this.blockSize - 1 && Ti.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^=
      128 << (8 * ((this.blockSize - 1) % 4))),
    Ti.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
yn.prototype.squeeze = function (e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let r = 0; r < e; ++r)
    (t[r] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (Ti.p1600(this.state), (this.count = 0));
  return t;
};
yn.prototype.copy = function (e) {
  for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
  (e.blockSize = this.blockSize),
    (e.count = this.count),
    (e.squeezing = this.squeezing);
};
var I1 = yn,
  x1 = C1(I1);
const A1 = x1,
  T1 = Di;
function Ru(e) {
  return Buffer.allocUnsafe(e).fill(0);
}
function Mu(e, t, r) {
  const n = Ru(t);
  return (
    (e = ds(e)),
    r
      ? e.length < t
        ? (e.copy(n), n)
        : e.slice(0, t)
      : e.length < t
      ? (e.copy(n, t - e.length), n)
      : e.slice(-t)
  );
}
function N1(e, t) {
  return Mu(e, t, !0);
}
function ds(e) {
  if (!Buffer.isBuffer(e))
    if (Array.isArray(e)) e = Buffer.from(e);
    else if (typeof e == "string")
      ku(e) ? (e = Buffer.from(O1(Cu(e)), "hex")) : (e = Buffer.from(e));
    else if (typeof e == "number") e = intToBuffer(e);
    else if (e == null) e = Buffer.allocUnsafe(0);
    else if (T1.isBN(e)) e = e.toArrayLike(Buffer);
    else if (e.toArray) e = Buffer.from(e.toArray());
    else throw new Error("invalid type");
  return e;
}
function L1(e) {
  return (e = ds(e)), "0x" + e.toString("hex");
}
function P1(e, t) {
  return (
    (e = ds(e)),
    t || (t = 256),
    A1("keccak" + t)
      .update(e)
      .digest()
  );
}
function O1(e) {
  return e.length % 2 ? "0" + e : e;
}
function ku(e) {
  return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/);
}
function Cu(e) {
  return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e;
}
var Iu = {
  zeros: Ru,
  setLength: Mu,
  setLengthRight: N1,
  isHexString: ku,
  stripHexPrefix: Cu,
  toBuffer: ds,
  bufferToHex: L1,
  keccak: P1,
};
const Sr = Iu,
  br = Di;
function xu(e) {
  return e.startsWith("int[")
    ? "int256" + e.slice(3)
    : e === "int"
    ? "int256"
    : e.startsWith("uint[")
    ? "uint256" + e.slice(4)
    : e === "uint"
    ? "uint256"
    : e.startsWith("fixed[")
    ? "fixed128x128" + e.slice(5)
    : e === "fixed"
    ? "fixed128x128"
    : e.startsWith("ufixed[")
    ? "ufixed128x128" + e.slice(6)
    : e === "ufixed"
    ? "ufixed128x128"
    : e;
}
function en(e) {
  return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
}
function bc(e) {
  var t = /^\D+(\d+)x(\d+)$/.exec(e);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function Au(e) {
  var t = e.match(/(.*)\[(.*?)\]$/);
  return t ? (t[2] === "" ? "dynamic" : parseInt(t[2], 10)) : null;
}
function _r(e) {
  var t = typeof e;
  if (t === "string")
    return Sr.isHexString(e) ? new br(Sr.stripHexPrefix(e), 16) : new br(e, 10);
  if (t === "number") return new br(e);
  if (e.toArray) return e;
  throw new Error("Argument is not a number");
}
function xt(e, t) {
  var r, n, i, s;
  if (e === "address") return xt("uint160", _r(t));
  if (e === "bool") return xt("uint8", t ? 1 : 0);
  if (e === "string") return xt("bytes", new Buffer(t, "utf8"));
  if (B1(e)) {
    if (typeof t.length > "u") throw new Error("Not an array?");
    if (((r = Au(e)), r !== "dynamic" && r !== 0 && t.length > r))
      throw new Error("Elements exceed array size: " + r);
    (i = []),
      (e = e.slice(0, e.lastIndexOf("["))),
      typeof t == "string" && (t = JSON.parse(t));
    for (s in t) i.push(xt(e, t[s]));
    if (r === "dynamic") {
      var a = xt("uint256", t.length);
      i.unshift(a);
    }
    return Buffer.concat(i);
  } else {
    if (e === "bytes")
      return (
        (t = new Buffer(t)),
        (i = Buffer.concat([xt("uint256", t.length), t])),
        t.length % 32 !== 0 &&
          (i = Buffer.concat([i, Sr.zeros(32 - (t.length % 32))])),
        i
      );
    if (e.startsWith("bytes")) {
      if (((r = en(e)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      return Sr.setLengthRight(t, 32);
    } else if (e.startsWith("uint")) {
      if (((r = en(e)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = _r(t)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      if (n < 0) throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("int")) {
      if (((r = en(e)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = _r(t)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("ufixed")) {
      if (((r = bc(e)), (n = _r(t)), n < 0))
        throw new Error("Supplied ufixed is negative");
      return xt("uint256", n.mul(new br(2).pow(new br(r[1]))));
    } else if (e.startsWith("fixed"))
      return (r = bc(e)), xt("int256", _r(t).mul(new br(2).pow(new br(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + e);
}
function $1(e) {
  return e === "string" || e === "bytes" || Au(e) === "dynamic";
}
function B1(e) {
  return e.lastIndexOf("]") === e.length - 1;
}
function D1(e, t) {
  var r = [],
    n = [],
    i = 32 * e.length;
  for (var s in e) {
    var a = xu(e[s]),
      c = t[s],
      u = xt(a, c);
    $1(a) ? (r.push(xt("uint256", i)), n.push(u), (i += u.length)) : r.push(u);
  }
  return Buffer.concat(r.concat(n));
}
function Tu(e, t) {
  if (e.length !== t.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, i = [], s = 0; s < e.length; s++) {
    var a = xu(e[s]),
      c = t[s];
    if (a === "bytes") i.push(c);
    else if (a === "string") i.push(new Buffer(c, "utf8"));
    else if (a === "bool") i.push(new Buffer(c ? "01" : "00", "hex"));
    else if (a === "address") i.push(Sr.setLength(c, 20));
    else if (a.startsWith("bytes")) {
      if (((r = en(a)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      i.push(Sr.setLengthRight(c, r));
    } else if (a.startsWith("uint")) {
      if (((r = en(a)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = _r(c)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      i.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (a.startsWith("int")) {
      if (((r = en(a)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = _r(c)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else throw new Error("Unsupported or invalid type: " + a);
  }
  return Buffer.concat(i);
}
function F1(e, t) {
  return Sr.keccak(Tu(e, t));
}
var j1 = { rawEncode: D1, solidityPack: Tu, soliditySHA3: F1 };
const yt = Iu,
  Tn = j1,
  Nu = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: { name: { type: "string" }, type: { type: "string" } },
            required: ["name", "type"],
          },
        },
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" },
    },
    required: ["types", "primaryType", "domain", "message"],
  },
  to = {
    encodeData(e, t, r, n = !0) {
      const i = ["bytes32"],
        s = [this.hashType(e, r)];
      if (n) {
        const a = (c, u, d) => {
          if (r[u] !== void 0)
            return [
              "bytes32",
              d == null
                ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                : yt.keccak(this.encodeData(u, d, r, n)),
            ];
          if (d === void 0)
            throw new Error(`missing value for field ${c} of type ${u}`);
          if (u === "bytes") return ["bytes32", yt.keccak(d)];
          if (u === "string")
            return (
              typeof d == "string" && (d = Buffer.from(d, "utf8")),
              ["bytes32", yt.keccak(d)]
            );
          if (u.lastIndexOf("]") === u.length - 1) {
            const g = u.slice(0, u.lastIndexOf("[")),
              p = d.map((E) => a(c, g, E));
            return [
              "bytes32",
              yt.keccak(
                Tn.rawEncode(
                  p.map(([E]) => E),
                  p.map(([, E]) => E)
                )
              ),
            ];
          }
          return [u, d];
        };
        for (const c of r[e]) {
          const [u, d] = a(c.name, c.type, t[c.name]);
          i.push(u), s.push(d);
        }
      } else
        for (const a of r[e]) {
          let c = t[a.name];
          if (c !== void 0)
            if (a.type === "bytes")
              i.push("bytes32"), (c = yt.keccak(c)), s.push(c);
            else if (a.type === "string")
              i.push("bytes32"),
                typeof c == "string" && (c = Buffer.from(c, "utf8")),
                (c = yt.keccak(c)),
                s.push(c);
            else if (r[a.type] !== void 0)
              i.push("bytes32"),
                (c = yt.keccak(this.encodeData(a.type, c, r, n))),
                s.push(c);
            else {
              if (a.type.lastIndexOf("]") === a.type.length - 1)
                throw new Error("Arrays currently unimplemented in encodeData");
              i.push(a.type), s.push(c);
            }
        }
      return Tn.rawEncode(i, s);
    },
    encodeType(e, t) {
      let r = "",
        n = this.findTypeDependencies(e, t).filter((i) => i !== e);
      n = [e].concat(n.sort());
      for (const i of n) {
        if (!t[i]) throw new Error("No type definition specified: " + i);
        r +=
          i +
          "(" +
          t[i].map(({ name: a, type: c }) => c + " " + a).join(",") +
          ")";
      }
      return r;
    },
    findTypeDependencies(e, t, r = []) {
      if (((e = e.match(/^\w*/)[0]), r.includes(e) || t[e] === void 0))
        return r;
      r.push(e);
      for (const n of t[e])
        for (const i of this.findTypeDependencies(n.type, t, r))
          !r.includes(i) && r.push(i);
      return r;
    },
    hashStruct(e, t, r, n = !0) {
      return yt.keccak(this.encodeData(e, t, r, n));
    },
    hashType(e, t) {
      return yt.keccak(this.encodeType(e, t));
    },
    sanitizeData(e) {
      const t = {};
      for (const r in Nu.properties) e[r] && (t[r] = e[r]);
      return (
        t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t
      );
    },
    hash(e, t = !0) {
      const r = this.sanitizeData(e),
        n = [Buffer.from("1901", "hex")];
      return (
        n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
        r.primaryType !== "EIP712Domain" &&
          n.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
        yt.keccak(Buffer.concat(n))
      );
    },
  };
var H1 = {
  TYPED_MESSAGE_SCHEMA: Nu,
  TypedDataUtils: to,
  hashForSignTypedDataLegacy: function (e) {
    return U1(e.data);
  },
  hashForSignTypedData_v3: function (e) {
    return to.hash(e.data, !1);
  },
  hashForSignTypedData_v4: function (e) {
    return to.hash(e.data);
  },
};
function U1(e) {
  const t = new Error("Expect argument to be non-empty array");
  if (typeof e != "object" || !e.length) throw t;
  const r = e.map(function (s) {
      return s.type === "bytes" ? yt.toBuffer(s.value) : s.value;
    }),
    n = e.map(function (s) {
      return s.type;
    }),
    i = e.map(function (s) {
      if (!s.name) throw t;
      return s.type + " " + s.name;
    });
  return Tn.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Tn.soliditySHA3(new Array(e.length).fill("string"), i),
      Tn.soliditySHA3(n, r),
    ]
  );
}
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.filterFromParam = hn.FilterPolyfill = void 0;
const Qr = Je,
  nt = q,
  W1 = 5 * 60 * 1e3,
  mr = { jsonrpc: "2.0", id: 0 };
class V1 {
  constructor(t) {
    (this.logFilters = new Map()),
      (this.blockFilters = new Set()),
      (this.pendingTransactionFilters = new Set()),
      (this.cursors = new Map()),
      (this.timeouts = new Map()),
      (this.nextFilterId = (0, Qr.IntNumber)(1)),
      (this.REQUEST_THROTTLE_INTERVAL = 1e3),
      (this.lastFetchTimestamp = new Date(0)),
      (this.resolvers = []),
      (this.provider = t);
  }
  async newFilter(t) {
    const r = Lu(t),
      n = this.makeFilterId(),
      i = await this.setInitialCursorPosition(n, r.fromBlock);
    return (
      console.info(
        `Installing new log filter(${n}):`,
        r,
        "initial cursor position:",
        i
      ),
      this.logFilters.set(n, r),
      this.setFilterTimeout(n),
      (0, nt.hexStringFromIntNumber)(n)
    );
  }
  async newBlockFilter() {
    const t = this.makeFilterId(),
      r = await this.setInitialCursorPosition(t, "latest");
    return (
      console.info(
        `Installing new block filter (${t}) with initial cursor position:`,
        r
      ),
      this.blockFilters.add(t),
      this.setFilterTimeout(t),
      (0, nt.hexStringFromIntNumber)(t)
    );
  }
  async newPendingTransactionFilter() {
    const t = this.makeFilterId(),
      r = await this.setInitialCursorPosition(t, "latest");
    return (
      console.info(
        `Installing new block filter (${t}) with initial cursor position:`,
        r
      ),
      this.pendingTransactionFilters.add(t),
      this.setFilterTimeout(t),
      (0, nt.hexStringFromIntNumber)(t)
    );
  }
  uninstallFilter(t) {
    const r = (0, nt.intNumberFromHexString)(t);
    return console.info(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(t) {
    const r = (0, nt.intNumberFromHexString)(t);
    return (
      this.timeouts.has(r) && this.setFilterTimeout(r),
      this.logFilters.has(r)
        ? this.getLogFilterChanges(r)
        : this.blockFilters.has(r)
        ? this.getBlockFilterChanges(r)
        : this.pendingTransactionFilters.has(r)
        ? this.getPendingTransactionFilterChanges(r)
        : Promise.resolve(mi())
    );
  }
  async getFilterLogs(t) {
    const r = (0, nt.intNumberFromHexString)(t),
      n = this.logFilters.get(r);
    return n
      ? this.sendAsyncPromise(
          Object.assign(Object.assign({}, mr), {
            method: "eth_getLogs",
            params: [yc(n)],
          })
        )
      : mi();
  }
  makeFilterId() {
    return (0, Qr.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(t) {
    return new Promise((r, n) => {
      this.provider.sendAsync(t, (i, s) => {
        if (i) return n(i);
        if (Array.isArray(s) || s == null)
          return n(
            new Error(`unexpected response received: ${JSON.stringify(s)}`)
          );
        r(s);
      });
    });
  }
  deleteFilter(t) {
    console.info(`Deleting filter (${t})`),
      this.logFilters.delete(t),
      this.blockFilters.delete(t),
      this.pendingTransactionFilters.delete(t),
      this.cursors.delete(t),
      this.timeouts.delete(t);
  }
  async getLogFilterChanges(t) {
    const r = this.logFilters.get(t),
      n = this.cursors.get(t);
    if (!n || !r) return mi();
    const i = await this.getCurrentBlockHeight(),
      s = r.toBlock === "latest" ? i : r.toBlock;
    if (n > i || n > Number(r.toBlock)) return vi();
    console.info(`Fetching logs from ${n} to ${s} for filter ${t}`);
    const a = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, mr), {
        method: "eth_getLogs",
        params: [
          yc(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: s })),
        ],
      })
    );
    if (Array.isArray(a.result)) {
      const c = a.result.map((d) =>
          (0, nt.intNumberFromHexString)(d.blockNumber || "0x0")
        ),
        u = Math.max(...c);
      if (u && u > n) {
        const d = (0, Qr.IntNumber)(u + 1);
        console.info(
          `Moving cursor position for filter (${t}) from ${n} to ${d}`
        ),
          this.cursors.set(t, d);
      }
    }
    return a;
  }
  async getBlockFilterChanges(t) {
    const r = this.cursors.get(t);
    if (!r) return mi();
    const n = await this.getCurrentBlockHeight();
    if (r > n) return vi();
    console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
    const i = (
        await Promise.all(
          (0, nt.range)(r, n + 1).map((a) =>
            this.getBlockHashByNumber((0, Qr.IntNumber)(a))
          )
        )
      ).filter((a) => !!a),
      s = (0, Qr.IntNumber)(r + i.length);
    return (
      console.info(
        `Moving cursor position for filter (${t}) from ${r} to ${s}`
      ),
      this.cursors.set(t, s),
      Object.assign(Object.assign({}, mr), { result: i })
    );
  }
  async getPendingTransactionFilterChanges(t) {
    return Promise.resolve(vi());
  }
  async setInitialCursorPosition(t, r) {
    const n = await this.getCurrentBlockHeight(),
      i = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(t, i), i;
  }
  setFilterTimeout(t) {
    const r = this.timeouts.get(t);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.info(`Filter (${t}) timed out`), this.deleteFilter(t);
    }, W1);
    this.timeouts.set(t, n);
  }
  async getCurrentBlockHeight() {
    const t = new Date();
    if (
      t.getTime() - this.lastFetchTimestamp.getTime() >
      this.REQUEST_THROTTLE_INTERVAL
    ) {
      this.lastFetchTimestamp = t;
      const r = await this._getCurrentBlockHeight();
      (this.currentBlockHeight = r),
        this.resolvers.forEach((n) => n(r)),
        (this.resolvers = []);
    }
    return this.currentBlockHeight
      ? this.currentBlockHeight
      : new Promise((r) => this.resolvers.push(r));
  }
  async _getCurrentBlockHeight() {
    const { result: t } = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, mr), {
        method: "eth_blockNumber",
        params: [],
      })
    );
    return (0, nt.intNumberFromHexString)((0, nt.ensureHexString)(t));
  }
  async getBlockHashByNumber(t) {
    const r = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, mr), {
        method: "eth_getBlockByNumber",
        params: [(0, nt.hexStringFromIntNumber)(t), !1],
      })
    );
    return r.result && typeof r.result.hash == "string"
      ? (0, nt.ensureHexString)(r.result.hash)
      : null;
  }
}
hn.FilterPolyfill = V1;
function Lu(e) {
  return {
    fromBlock: wc(e.fromBlock),
    toBlock: wc(e.toBlock),
    addresses:
      e.address === void 0
        ? null
        : Array.isArray(e.address)
        ? e.address
        : [e.address],
    topics: e.topics || [],
  };
}
hn.filterFromParam = Lu;
function yc(e) {
  const t = {
    fromBlock: Ec(e.fromBlock),
    toBlock: Ec(e.toBlock),
    topics: e.topics,
  };
  return e.addresses !== null && (t.address = e.addresses), t;
}
function wc(e) {
  if (e === void 0 || e === "latest" || e === "pending") return "latest";
  if (e === "earliest") return (0, Qr.IntNumber)(0);
  if ((0, nt.isHexString)(e)) return (0, nt.intNumberFromHexString)(e);
  throw new Error(`Invalid block option: ${String(e)}`);
}
function Ec(e) {
  return e === "latest" ? e : (0, nt.hexStringFromIntNumber)(e);
}
function mi() {
  return Object.assign(Object.assign({}, mr), {
    error: { code: -32e3, message: "filter not found" },
  });
}
function vi() {
  return Object.assign(Object.assign({}, mr), { result: [] });
}
var fs = {},
  Pu = {},
  ps = {},
  Ko = q1;
function q1(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER,
    r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function () {
    return (r = r % t), r++;
  };
}
const Sc = (e, t) =>
  function () {
    const r = t.promiseModule,
      n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++) n[i] = arguments[i];
    return new r((i, s) => {
      t.errorFirst
        ? n.push(function (a, c) {
            if (t.multiArgs) {
              const u = new Array(arguments.length - 1);
              for (let d = 1; d < arguments.length; d++)
                u[d - 1] = arguments[d];
              a ? (u.unshift(a), s(u)) : i(u);
            } else a ? s(a) : i(c);
          })
        : n.push(function (a) {
            if (t.multiArgs) {
              const c = new Array(arguments.length - 1);
              for (let u = 0; u < arguments.length; u++) c[u] = arguments[u];
              i(c);
            } else i(a);
          }),
        e.apply(this, n);
    });
  };
var z1 = (e, t) => {
    t = Object.assign(
      { exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise },
      t
    );
    const r = (i) => {
      const s = (a) => (typeof a == "string" ? i === a : a.test(i));
      return t.include ? t.include.some(s) : !t.exclude.some(s);
    };
    let n;
    typeof e == "function"
      ? (n = function () {
          return t.excludeMain
            ? e.apply(this, arguments)
            : Sc(e, t).apply(this, arguments);
        })
      : (n = Object.create(Object.getPrototypeOf(e)));
    for (const i in e) {
      const s = e[i];
      n[i] = typeof s == "function" && r(i) ? Sc(s, t) : s;
    }
    return n;
  },
  ti = {},
  ri = {};
Object.defineProperty(ri, "__esModule", { value: !0 });
const G1 = Oi;
function Rc(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function J1(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let Z1 = class extends G1.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const i = this._events;
    if (i !== void 0) n = n && i.error === void 0;
    else if (!n) return !1;
    if (n) {
      let a;
      if ((r.length > 0 && ([a] = r), a instanceof Error)) throw a;
      const c = new Error(`Unhandled error.${a ? ` (${a.message})` : ""}`);
      throw ((c.context = a), c);
    }
    const s = i[t];
    if (s === void 0) return !1;
    if (typeof s == "function") Rc(s, this, r);
    else {
      const a = s.length,
        c = J1(s);
      for (let u = 0; u < a; u += 1) Rc(c[u], this, r);
    }
    return !0;
  }
};
ri.default = Z1;
var K1 =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.BaseBlockTracker = void 0;
const Q1 = K1(ri),
  Y1 = 1e3,
  X1 = (e, t) => e + t,
  Mc = ["sync", "latest"];
class ep extends Q1.default {
  constructor(t) {
    super(),
      (this._blockResetDuration = t.blockResetDuration || 20 * Y1),
      (this._usePastBlocks = t.usePastBlocks || !1),
      (this._currentBlock = null),
      (this._isRunning = !1),
      (this._onNewListener = this._onNewListener.bind(this)),
      (this._onRemoveListener = this._onRemoveListener.bind(this)),
      (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
      this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(),
      await this._maybeEnd(),
      super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock
      ? this._currentBlock
      : await new Promise((r) => this.once("latest", r));
  }
  removeAllListeners(t) {
    return (
      t ? super.removeAllListeners(t) : super.removeAllListeners(),
      this._setupInternalEvents(),
      this._onRemoveListener(),
      this
    );
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener),
      this.removeListener("removeListener", this._onRemoveListener),
      this.on("newListener", this._onNewListener),
      this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(t) {
    Mc.includes(t) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning ||
      ((this._isRunning = !0),
      this._cancelBlockResetTimeout(),
      await this._start(),
      this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning &&
      ((this._isRunning = !1),
      this._setupBlockResetTimeout(),
      await this._end(),
      this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return Mc.map((t) => this.listenerCount(t)).reduce(X1);
  }
  _shouldUseNewBlock(t) {
    const r = this._currentBlock;
    if (!r) return !0;
    const n = kc(t),
      i = kc(r);
    return (this._usePastBlocks && n < i) || n > i;
  }
  _newPotentialLatest(t) {
    this._shouldUseNewBlock(t) && this._setCurrentBlock(t);
  }
  _setCurrentBlock(t) {
    const r = this._currentBlock;
    (this._currentBlock = t),
      this.emit("latest", t),
      this.emit("sync", { oldBlock: r, newBlock: t });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(),
      (this._blockResetTimeout = setTimeout(
        this._resetCurrentBlock,
        this._blockResetDuration
      )),
      this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
ti.BaseBlockTracker = ep;
function kc(e) {
  return Number.parseInt(e, 16);
}
var Ou = {},
  $u = {},
  tt = {};
class Bu extends TypeError {
  constructor(t, r) {
    let n;
    const { message: i, explanation: s, ...a } = t,
      { path: c } = t,
      u = c.length === 0 ? i : `At path: ${c.join(".")} -- ${i}`;
    super(s ?? u),
      s != null && (this.cause = u),
      Object.assign(this, a),
      (this.name = this.constructor.name),
      (this.failures = () => n ?? (n = [t, ...r()]));
  }
}
function tp(e) {
  return mt(e) && typeof e[Symbol.iterator] == "function";
}
function mt(e) {
  return typeof e == "object" && e != null;
}
function Cc(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function Ze(e) {
  return typeof e == "symbol"
    ? e.toString()
    : typeof e == "string"
    ? JSON.stringify(e)
    : `${e}`;
}
function rp(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function np(e, t, r, n) {
  if (e === !0) return;
  e === !1 ? (e = {}) : typeof e == "string" && (e = { message: e });
  const { path: i, branch: s } = t,
    { type: a } = r,
    {
      refinement: c,
      message: u = `Expected a value of type \`${a}\`${
        c ? ` with refinement \`${c}\`` : ""
      }, but received: \`${Ze(n)}\``,
    } = e;
  return {
    value: n,
    type: a,
    refinement: c,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...e,
    message: u,
  };
}
function* ko(e, t, r, n) {
  tp(e) || (e = [e]);
  for (const i of e) {
    const s = np(i, t, r, n);
    s && (yield s);
  }
}
function* Qo(e, t, r = {}) {
  const { path: n = [], branch: i = [e], coerce: s = !1, mask: a = !1 } = r,
    c = { path: n, branch: i };
  if (
    s &&
    ((e = t.coercer(e, c)),
    a && t.type !== "type" && mt(t.schema) && mt(e) && !Array.isArray(e))
  )
    for (const d in e) t.schema[d] === void 0 && delete e[d];
  let u = "valid";
  for (const d of t.validator(e, c))
    (d.explanation = r.message), (u = "not_valid"), yield [d, void 0];
  for (let [d, g, p] of t.entries(e, c)) {
    const E = Qo(g, p, {
      path: d === void 0 ? n : [...n, d],
      branch: d === void 0 ? i : [...i, g],
      coerce: s,
      mask: a,
      message: r.message,
    });
    for (const k of E)
      k[0]
        ? ((u = k[0].refinement != null ? "not_refined" : "not_valid"),
          yield [k[0], void 0])
        : s &&
          ((g = k[1]),
          d === void 0
            ? (e = g)
            : e instanceof Map
            ? e.set(d, g)
            : e instanceof Set
            ? e.add(g)
            : mt(e) && (g !== void 0 || d in e) && (e[d] = g));
  }
  if (u !== "not_valid")
    for (const d of t.refiner(e, c))
      (d.explanation = r.message), (u = "not_refined"), yield [d, void 0];
  u === "valid" && (yield [void 0, e]);
}
class ze {
  constructor(t) {
    const {
      type: r,
      schema: n,
      validator: i,
      refiner: s,
      coercer: a = (u) => u,
      entries: c = function* () {},
    } = t;
    (this.type = r),
      (this.schema = n),
      (this.entries = c),
      (this.coercer = a),
      i
        ? (this.validator = (u, d) => {
            const g = i(u, d);
            return ko(g, d, this, u);
          })
        : (this.validator = () => []),
      s
        ? (this.refiner = (u, d) => {
            const g = s(u, d);
            return ko(g, d, this, u);
          })
        : (this.refiner = () => []);
  }
  assert(t, r) {
    return Du(t, this, r);
  }
  create(t, r) {
    return Fu(t, this, r);
  }
  is(t) {
    return Yo(t, this);
  }
  mask(t, r) {
    return ju(t, this, r);
  }
  validate(t, r = {}) {
    return wn(t, this, r);
  }
}
function Du(e, t, r) {
  const n = wn(e, t, { message: r });
  if (n[0]) throw n[0];
}
function Fu(e, t, r) {
  const n = wn(e, t, { coerce: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function ju(e, t, r) {
  const n = wn(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Yo(e, t) {
  return !wn(e, t)[0];
}
function wn(e, t, r = {}) {
  const n = Qo(e, t, r),
    i = rp(n);
  return i[0]
    ? [
        new Bu(i[0], function* () {
          for (const a of n) a[0] && (yield a[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function ip(...e) {
  const t = e[0].type === "type",
    r = e.map((i) => i.schema),
    n = Object.assign({}, ...r);
  return t ? ea(n) : ni(n);
}
function at(e, t) {
  return new ze({ type: e, schema: null, validator: t });
}
function sp(e, t) {
  return new ze({
    ...e,
    refiner: (r, n) => r === void 0 || e.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (t(r, n), e.validator(r, n));
    },
  });
}
function op(e) {
  return new ze({
    type: "dynamic",
    schema: null,
    *entries(t, r) {
      yield* e(t, r).entries(t, r);
    },
    validator(t, r) {
      return e(t, r).validator(t, r);
    },
    coercer(t, r) {
      return e(t, r).coercer(t, r);
    },
    refiner(t, r) {
      return e(t, r).refiner(t, r);
    },
  });
}
function ap(e) {
  let t;
  return new ze({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      t ?? (t = e()), yield* t.entries(r, n);
    },
    validator(r, n) {
      return t ?? (t = e()), t.validator(r, n);
    },
    coercer(r, n) {
      return t ?? (t = e()), t.coercer(r, n);
    },
    refiner(r, n) {
      return t ?? (t = e()), t.refiner(r, n);
    },
  });
}
function cp(e, t) {
  const { schema: r } = e,
    n = { ...r };
  for (const i of t) delete n[i];
  switch (e.type) {
    case "type":
      return ea(n);
    default:
      return ni(n);
  }
}
function lp(e) {
  const t = e instanceof ze ? { ...e.schema } : { ...e };
  for (const r in t) t[r] = Hu(t[r]);
  return ni(t);
}
function up(e, t) {
  const { schema: r } = e,
    n = {};
  for (const i of t) n[i] = r[i];
  return ni(n);
}
function hp(e, t) {
  return (
    console.warn(
      "superstruct@0.11 - The `struct` helper has been renamed to `define`."
    ),
    at(e, t)
  );
}
function dp() {
  return at("any", () => !0);
}
function fp(e) {
  return new ze({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [r, n] of t.entries()) yield [r, n, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return (
        Array.isArray(t) || `Expected an array value, but received: ${Ze(t)}`
      );
    },
  });
}
function pp() {
  return at("bigint", (e) => typeof e == "bigint");
}
function gp() {
  return at("boolean", (e) => typeof e == "boolean");
}
function _p() {
  return at(
    "date",
    (e) =>
      (e instanceof Date && !isNaN(e.getTime())) ||
      `Expected a valid \`Date\` object, but received: ${Ze(e)}`
  );
}
function mp(e) {
  const t = {},
    r = e.map((n) => Ze(n)).join();
  for (const n of e) t[n] = n;
  return new ze({
    type: "enums",
    schema: t,
    validator(n) {
      return (
        e.includes(n) || `Expected one of \`${r}\`, but received: ${Ze(n)}`
      );
    },
  });
}
function vp() {
  return at(
    "func",
    (e) =>
      typeof e == "function" || `Expected a function, but received: ${Ze(e)}`
  );
}
function bp(e) {
  return at(
    "instance",
    (t) =>
      t instanceof e ||
      `Expected a \`${e.name}\` instance, but received: ${Ze(t)}`
  );
}
function yp() {
  return at(
    "integer",
    (e) =>
      (typeof e == "number" && !isNaN(e) && Number.isInteger(e)) ||
      `Expected an integer, but received: ${Ze(e)}`
  );
}
function wp(e) {
  return new ze({
    type: "intersection",
    schema: null,
    *entries(t, r) {
      for (const n of e) yield* n.entries(t, r);
    },
    *validator(t, r) {
      for (const n of e) yield* n.validator(t, r);
    },
    *refiner(t, r) {
      for (const n of e) yield* n.refiner(t, r);
    },
  });
}
function Ep(e) {
  const t = Ze(e),
    r = typeof e;
  return new ze({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${Ze(n)}`;
    },
  });
}
function Sp(e, t) {
  return new ze({
    type: "map",
    schema: null,
    *entries(r) {
      if (e && t && r instanceof Map)
        for (const [n, i] of r.entries()) yield [n, n, e], yield [n, i, t];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return (
        r instanceof Map || `Expected a \`Map\` object, but received: ${Ze(r)}`
      );
    },
  });
}
function Xo() {
  return at("never", () => !1);
}
function Rp(e) {
  return new ze({
    ...e,
    validator: (t, r) => t === null || e.validator(t, r),
    refiner: (t, r) => t === null || e.refiner(t, r),
  });
}
function Mp() {
  return at(
    "number",
    (e) =>
      (typeof e == "number" && !isNaN(e)) ||
      `Expected a number, but received: ${Ze(e)}`
  );
}
function ni(e) {
  const t = e ? Object.keys(e) : [],
    r = Xo();
  return new ze({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && mt(n)) {
        const i = new Set(Object.keys(n));
        for (const s of t) i.delete(s), yield [s, n[s], e[s]];
        for (const s of i) yield [s, n[s], r];
      }
    },
    validator(n) {
      return mt(n) || `Expected an object, but received: ${Ze(n)}`;
    },
    coercer(n) {
      return mt(n) ? { ...n } : n;
    },
  });
}
function Hu(e) {
  return new ze({
    ...e,
    validator: (t, r) => t === void 0 || e.validator(t, r),
    refiner: (t, r) => t === void 0 || e.refiner(t, r),
  });
}
function kp(e, t) {
  return new ze({
    type: "record",
    schema: null,
    *entries(r) {
      if (mt(r))
        for (const n in r) {
          const i = r[n];
          yield [n, n, e], yield [n, i, t];
        }
    },
    validator(r) {
      return mt(r) || `Expected an object, but received: ${Ze(r)}`;
    },
  });
}
function Cp() {
  return at("regexp", (e) => e instanceof RegExp);
}
function Ip(e) {
  return new ze({
    type: "set",
    schema: null,
    *entries(t) {
      if (e && t instanceof Set) for (const r of t) yield [r, r, e];
    },
    coercer(t) {
      return t instanceof Set ? new Set(t) : t;
    },
    validator(t) {
      return (
        t instanceof Set || `Expected a \`Set\` object, but received: ${Ze(t)}`
      );
    },
  });
}
function Uu() {
  return at(
    "string",
    (e) => typeof e == "string" || `Expected a string, but received: ${Ze(e)}`
  );
}
function xp(e) {
  const t = Xo();
  return new ze({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(e.length, r.length);
        for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${Ze(r)}`;
    },
  });
}
function ea(e) {
  const t = Object.keys(e);
  return new ze({
    type: "type",
    schema: e,
    *entries(r) {
      if (mt(r)) for (const n of t) yield [n, r[n], e[n]];
    },
    validator(r) {
      return mt(r) || `Expected an object, but received: ${Ze(r)}`;
    },
    coercer(r) {
      return mt(r) ? { ...r } : r;
    },
  });
}
function Ap(e) {
  const t = e.map((r) => r.type).join(" | ");
  return new ze({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of e) {
        const [i, s] = n.validate(r, { coerce: !0 });
        if (!i) return s;
      }
      return r;
    },
    validator(r, n) {
      const i = [];
      for (const s of e) {
        const [...a] = Qo(r, s, n),
          [c] = a;
        if (c[0]) for (const [u] of a) u && i.push(u);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${Ze(
          r
        )}`,
        ...i,
      ];
    },
  });
}
function Wu() {
  return at("unknown", () => !0);
}
function ta(e, t, r) {
  return new ze({
    ...e,
    coercer: (n, i) => (Yo(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)),
  });
}
function Tp(e, t, r = {}) {
  return ta(e, Wu(), (n) => {
    const i = typeof t == "function" ? t() : t;
    if (n === void 0) return i;
    if (!r.strict && Cc(n) && Cc(i)) {
      const s = { ...n };
      let a = !1;
      for (const c in i) s[c] === void 0 && ((s[c] = i[c]), (a = !0));
      if (a) return s;
    }
    return n;
  });
}
function Np(e) {
  return ta(e, Uu(), (t) => t.trim());
}
function Lp(e) {
  return Tr(e, "empty", (t) => {
    const r = Vu(t);
    return (
      r === 0 ||
      `Expected an empty ${e.type} but received one with a size of \`${r}\``
    );
  });
}
function Vu(e) {
  return e instanceof Map || e instanceof Set ? e.size : e.length;
}
function Pp(e, t, r = {}) {
  const { exclusive: n } = r;
  return Tr(e, "max", (i) =>
    n
      ? i < t
      : i <= t ||
        `Expected a ${e.type} less than ${
          n ? "" : "or equal to "
        }${t} but received \`${i}\``
  );
}
function Op(e, t, r = {}) {
  const { exclusive: n } = r;
  return Tr(e, "min", (i) =>
    n
      ? i > t
      : i >= t ||
        `Expected a ${e.type} greater than ${
          n ? "" : "or equal to "
        }${t} but received \`${i}\``
  );
}
function $p(e) {
  return Tr(
    e,
    "nonempty",
    (t) =>
      Vu(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`
  );
}
function Bp(e, t) {
  return Tr(
    e,
    "pattern",
    (r) =>
      t.test(r) ||
      `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`
  );
}
function Dp(e, t, r = t) {
  const n = `Expected a ${e.type}`,
    i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
  return Tr(e, "size", (s) => {
    if (typeof s == "number" || s instanceof Date)
      return (t <= s && s <= r) || `${n} ${i} but received \`${s}\``;
    if (s instanceof Map || s instanceof Set) {
      const { size: a } = s;
      return (
        (t <= a && a <= r) ||
        `${n} with a size ${i} but received one with a size of \`${a}\``
      );
    } else {
      const { length: a } = s;
      return (
        (t <= a && a <= r) ||
        `${n} with a length ${i} but received one with a length of \`${a}\``
      );
    }
  });
}
function Tr(e, t, r) {
  return new ze({
    ...e,
    *refiner(n, i) {
      yield* e.refiner(n, i);
      const s = r(n, i),
        a = ko(s, i, e, n);
      for (const c of a) yield { ...c, refinement: t };
    },
  });
}
const Fp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Struct: ze,
        StructError: Bu,
        any: dp,
        array: fp,
        assert: Du,
        assign: ip,
        bigint: pp,
        boolean: gp,
        coerce: ta,
        create: Fu,
        date: _p,
        defaulted: Tp,
        define: at,
        deprecated: sp,
        dynamic: op,
        empty: Lp,
        enums: mp,
        func: vp,
        instance: bp,
        integer: yp,
        intersection: wp,
        is: Yo,
        lazy: ap,
        literal: Ep,
        map: Sp,
        mask: ju,
        max: Pp,
        min: Op,
        never: Xo,
        nonempty: $p,
        nullable: Rp,
        number: Mp,
        object: ni,
        omit: cp,
        optional: Hu,
        partial: lp,
        pattern: Bp,
        pick: up,
        record: kp,
        refine: Tr,
        regexp: Cp,
        set: Ip,
        size: Dp,
        string: Uu,
        struct: hp,
        trimmed: Np,
        tuple: xp,
        type: ea,
        union: Ap,
        unknown: Wu,
        validate: wn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Nr = pn(Fp);
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.assertExhaustive = tt.assertStruct = tt.assert = tt.AssertionError = void 0;
const jp = Nr;
function Hp(e) {
  return typeof e == "object" && e !== null && "message" in e;
}
function Up(e) {
  var t, r;
  return (
    typeof ((r =
      (t = e == null ? void 0 : e.prototype) === null || t === void 0
        ? void 0
        : t.constructor) === null || r === void 0
      ? void 0
      : r.name) == "string"
  );
}
function Wp(e) {
  const t = Hp(e) ? e.message : String(e);
  return t.endsWith(".") ? t.slice(0, -1) : t;
}
function qu(e, t) {
  return Up(e) ? new e({ message: t }) : e({ message: t });
}
class ra extends Error {
  constructor(t) {
    super(t.message), (this.code = "ERR_ASSERTION");
  }
}
tt.AssertionError = ra;
function Vp(e, t = "Assertion failed.", r = ra) {
  if (!e) throw t instanceof Error ? t : qu(r, t);
}
tt.assert = Vp;
function qp(e, t, r = "Assertion failed", n = ra) {
  try {
    (0, jp.assert)(e, t);
  } catch (i) {
    throw qu(n, `${r}: ${Wp(i)}.`);
  }
}
tt.assertStruct = qp;
function zp(e) {
  throw new Error(
    "Invalid branch reached. Should be detected during compilation."
  );
}
tt.assertExhaustive = zp;
var ii = {};
Object.defineProperty(ii, "__esModule", { value: !0 });
ii.base64 = void 0;
const Gp = Nr,
  Jp = tt,
  Zp = (e, t = {}) => {
    var r, n;
    const i = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1,
      s = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
    let a;
    s === "base64"
      ? (a = String.raw`[A-Za-z0-9+\/]`)
      : ((0, Jp.assert)(s === "base64url"), (a = String.raw`[-_A-Za-z0-9]`));
    let c;
    return (
      i
        ? (c = new RegExp(`^(?:${a}{4})*(?:${a}{3}=|${a}{2}==)?$`, "u"))
        : (c = new RegExp(
            `^(?:${a}{4})*(?:${a}{2,3}|${a}{3}=|${a}{2}==)?$`,
            "u"
          )),
      (0, Gp.pattern)(e, c)
    );
  };
ii.base64 = Zp;
var ae = {},
  si = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.remove0x =
      e.add0x =
      e.assertIsStrictHexString =
      e.assertIsHexString =
      e.isStrictHexString =
      e.isHexString =
      e.StrictHexStruct =
      e.HexStruct =
        void 0);
  const t = Nr,
    r = tt;
  (e.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu)),
    (e.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu));
  function n(d) {
    return (0, t.is)(d, e.HexStruct);
  }
  e.isHexString = n;
  function i(d) {
    return (0, t.is)(d, e.StrictHexStruct);
  }
  e.isStrictHexString = i;
  function s(d) {
    (0, r.assert)(n(d), "Value must be a hexadecimal string.");
  }
  e.assertIsHexString = s;
  function a(d) {
    (0, r.assert)(
      i(d),
      'Value must be a hexadecimal string, starting with "0x".'
    );
  }
  e.assertIsStrictHexString = a;
  function c(d) {
    return d.startsWith("0x")
      ? d
      : d.startsWith("0X")
      ? `0x${d.substring(2)}`
      : `0x${d}`;
  }
  e.add0x = c;
  function u(d) {
    return d.startsWith("0x") || d.startsWith("0X") ? d.substring(2) : d;
  }
  e.remove0x = u;
})(si);
Object.defineProperty(ae, "__esModule", { value: !0 });
ae.createDataView =
  ae.concatBytes =
  ae.valueToBytes =
  ae.stringToBytes =
  ae.numberToBytes =
  ae.signedBigIntToBytes =
  ae.bigIntToBytes =
  ae.hexToBytes =
  ae.bytesToString =
  ae.bytesToNumber =
  ae.bytesToSignedBigInt =
  ae.bytesToBigInt =
  ae.bytesToHex =
  ae.assertIsBytes =
  ae.isBytes =
    void 0;
const ht = tt,
  Co = si,
  Ic = 48,
  xc = 58,
  Ac = 87;
function Kp() {
  const e = [];
  return () => {
    if (e.length === 0)
      for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
    return e;
  };
}
const Qp = Kp();
function na(e) {
  return e instanceof Uint8Array;
}
ae.isBytes = na;
function En(e) {
  (0, ht.assert)(na(e), "Value must be a Uint8Array.");
}
ae.assertIsBytes = En;
function zu(e) {
  if ((En(e), e.length === 0)) return "0x";
  const t = Qp(),
    r = new Array(e.length);
  for (let n = 0; n < e.length; n++) r[n] = t[e[n]];
  return (0, Co.add0x)(r.join(""));
}
ae.bytesToHex = zu;
function Gu(e) {
  En(e);
  const t = zu(e);
  return BigInt(t);
}
ae.bytesToBigInt = Gu;
function Yp(e) {
  En(e);
  let t = BigInt(0);
  for (const r of e) t = (t << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(e.length * 8, t);
}
ae.bytesToSignedBigInt = Yp;
function Xp(e) {
  En(e);
  const t = Gu(e);
  return (
    (0, ht.assert)(
      t <= BigInt(Number.MAX_SAFE_INTEGER),
      "Number is not a safe integer. Use `bytesToBigInt` instead."
    ),
    Number(t)
  );
}
ae.bytesToNumber = Xp;
function eg(e) {
  return En(e), new TextDecoder().decode(e);
}
ae.bytesToString = eg;
function gs(e) {
  var t;
  if (
    ((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0
      ? void 0
      : t.call(e)) === "0x"
  )
    return new Uint8Array();
  (0, Co.assertIsHexString)(e);
  const r = (0, Co.remove0x)(e).toLowerCase(),
    n = r.length % 2 === 0 ? r : `0${r}`,
    i = new Uint8Array(n.length / 2);
  for (let s = 0; s < i.length; s++) {
    const a = n.charCodeAt(s * 2),
      c = n.charCodeAt(s * 2 + 1),
      u = a - (a < xc ? Ic : Ac),
      d = c - (c < xc ? Ic : Ac);
    i[s] = u * 16 + d;
  }
  return i;
}
ae.hexToBytes = gs;
function Ju(e) {
  (0, ht.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0, ht.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
  const t = e.toString(16);
  return gs(t);
}
ae.bigIntToBytes = Ju;
function tg(e, t) {
  (0, ht.assert)(t > 0);
  const r = e >> BigInt(31);
  return !(((~e & r) + (e & ~r)) >> BigInt(t * 8 + -1));
}
function rg(e, t) {
  (0, ht.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0, ht.assert)(typeof t == "number", "Byte length must be a number."),
    (0, ht.assert)(t > 0, "Byte length must be greater than 0."),
    (0, ht.assert)(
      tg(e, t),
      "Byte length is too small to represent the given value."
    );
  let r = e;
  const n = new Uint8Array(t);
  for (let i = 0; i < n.length; i++)
    (n[i] = Number(BigInt.asUintN(8, r))), (r >>= BigInt(8));
  return n.reverse();
}
ae.signedBigIntToBytes = rg;
function Zu(e) {
  (0, ht.assert)(typeof e == "number", "Value must be a number."),
    (0, ht.assert)(e >= 0, "Value must be a non-negative number."),
    (0, ht.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `bigIntToBytes` instead."
    );
  const t = e.toString(16);
  return gs(t);
}
ae.numberToBytes = Zu;
function Ku(e) {
  return (
    (0, ht.assert)(typeof e == "string", "Value must be a string."),
    new TextEncoder().encode(e)
  );
}
ae.stringToBytes = Ku;
function Qu(e) {
  if (typeof e == "bigint") return Ju(e);
  if (typeof e == "number") return Zu(e);
  if (typeof e == "string") return e.startsWith("0x") ? gs(e) : Ku(e);
  if (na(e)) return e;
  throw new TypeError(`Unsupported value type: "${typeof e}".`);
}
ae.valueToBytes = Qu;
function ng(e) {
  const t = new Array(e.length);
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = Qu(e[i]);
    (t[i] = s), (r += s.length);
  }
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < t.length; i++) n.set(t[i], s), (s += t[i].length);
  return n;
}
ae.concatBytes = ng;
function ig(e) {
  if (typeof Buffer < "u" && e instanceof Buffer) {
    const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    return new DataView(t);
  }
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
ae.createDataView = ig;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.ChecksumStruct = void 0;
const Tc = Nr,
  sg = ii;
_s.ChecksumStruct = (0, Tc.size)(
  (0, sg.base64)((0, Tc.string)(), { paddingRequired: !0 }),
  44,
  44
);
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.createHex = Lt.createBytes = Lt.createBigInt = Lt.createNumber = void 0;
const qe = Nr,
  og = tt,
  Yu = ae,
  ms = si,
  Xu = (0, qe.union)([
    (0, qe.number)(),
    (0, qe.bigint)(),
    (0, qe.string)(),
    ms.StrictHexStruct,
  ]),
  ag = (0, qe.coerce)((0, qe.number)(), Xu, Number),
  cg = (0, qe.coerce)((0, qe.bigint)(), Xu, BigInt);
(0, qe.union)([ms.StrictHexStruct, (0, qe.instance)(Uint8Array)]);
const lg = (0, qe.coerce)(
    (0, qe.instance)(Uint8Array),
    (0, qe.union)([ms.StrictHexStruct]),
    Yu.hexToBytes
  ),
  ug = (0, qe.coerce)(
    ms.StrictHexStruct,
    (0, qe.instance)(Uint8Array),
    Yu.bytesToHex
  );
function hg(e) {
  try {
    const t = (0, qe.create)(e, ag);
    return (
      (0, og.assert)(
        Number.isFinite(t),
        `Expected a number-like value, got "${e}".`
      ),
      t
    );
  } catch (t) {
    throw t instanceof qe.StructError
      ? new Error(`Expected a number-like value, got "${e}".`)
      : t;
  }
}
Lt.createNumber = hg;
function dg(e) {
  try {
    return (0, qe.create)(e, cg);
  } catch (t) {
    throw t instanceof qe.StructError
      ? new Error(`Expected a number-like value, got "${String(t.value)}".`)
      : t;
  }
}
Lt.createBigInt = dg;
function fg(e) {
  if (typeof e == "string" && e.toLowerCase() === "0x") return new Uint8Array();
  try {
    return (0, qe.create)(e, lg);
  } catch (t) {
    throw t instanceof qe.StructError
      ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`)
      : t;
  }
}
Lt.createBytes = fg;
function pg(e) {
  if (
    (e instanceof Uint8Array && e.length === 0) ||
    (typeof e == "string" && e.toLowerCase() === "0x")
  )
    return "0x";
  try {
    return (0, qe.create)(e, ug);
  } catch (t) {
    throw t instanceof qe.StructError
      ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`)
      : t;
  }
}
Lt.createHex = pg;
var dn = {},
  eh =
    (G && G.__classPrivateFieldSet) ||
    function (e, t, r, n, i) {
      if (n === "m") throw new TypeError("Private method is not writable");
      if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof t == "function" ? e !== t || !i : !t.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
    },
  it =
    (G && G.__classPrivateFieldGet) ||
    function (e, t, r, n) {
      if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
    },
  bt,
  Ct;
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.FrozenSet = dn.FrozenMap = void 0;
class ia {
  constructor(t) {
    bt.set(this, void 0), eh(this, bt, new Map(t), "f"), Object.freeze(this);
  }
  get size() {
    return it(this, bt, "f").size;
  }
  [((bt = new WeakMap()), Symbol.iterator)]() {
    return it(this, bt, "f")[Symbol.iterator]();
  }
  entries() {
    return it(this, bt, "f").entries();
  }
  forEach(t, r) {
    return it(this, bt, "f").forEach((n, i, s) => t.call(r, n, i, this));
  }
  get(t) {
    return it(this, bt, "f").get(t);
  }
  has(t) {
    return it(this, bt, "f").has(t);
  }
  keys() {
    return it(this, bt, "f").keys();
  }
  values() {
    return it(this, bt, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${
      this.size > 0
        ? ` ${[...this.entries()]
            .map(([t, r]) => `${String(t)} => ${String(r)}`)
            .join(", ")} `
        : ""
    }}`;
  }
}
dn.FrozenMap = ia;
class sa {
  constructor(t) {
    Ct.set(this, void 0), eh(this, Ct, new Set(t), "f"), Object.freeze(this);
  }
  get size() {
    return it(this, Ct, "f").size;
  }
  [((Ct = new WeakMap()), Symbol.iterator)]() {
    return it(this, Ct, "f")[Symbol.iterator]();
  }
  entries() {
    return it(this, Ct, "f").entries();
  }
  forEach(t, r) {
    return it(this, Ct, "f").forEach((n, i, s) => t.call(r, n, i, this));
  }
  has(t) {
    return it(this, Ct, "f").has(t);
  }
  keys() {
    return it(this, Ct, "f").keys();
  }
  values() {
    return it(this, Ct, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${
      this.size > 0
        ? ` ${[...this.values()].map((t) => String(t)).join(", ")} `
        : ""
    }}`;
  }
}
dn.FrozenSet = sa;
Object.freeze(ia);
Object.freeze(ia.prototype);
Object.freeze(sa);
Object.freeze(sa.prototype);
var th = {};
Object.defineProperty(th, "__esModule", { value: !0 });
var rh = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getJsonRpcIdValidator =
      e.assertIsJsonRpcError =
      e.isJsonRpcError =
      e.assertIsJsonRpcFailure =
      e.isJsonRpcFailure =
      e.assertIsJsonRpcSuccess =
      e.isJsonRpcSuccess =
      e.assertIsJsonRpcResponse =
      e.isJsonRpcResponse =
      e.assertIsPendingJsonRpcResponse =
      e.isPendingJsonRpcResponse =
      e.JsonRpcResponseStruct =
      e.JsonRpcFailureStruct =
      e.JsonRpcSuccessStruct =
      e.PendingJsonRpcResponseStruct =
      e.assertIsJsonRpcRequest =
      e.isJsonRpcRequest =
      e.assertIsJsonRpcNotification =
      e.isJsonRpcNotification =
      e.JsonRpcNotificationStruct =
      e.JsonRpcRequestStruct =
      e.JsonRpcParamsStruct =
      e.JsonRpcErrorStruct =
      e.JsonRpcIdStruct =
      e.JsonRpcVersionStruct =
      e.jsonrpc2 =
      e.getJsonSize =
      e.isValidJson =
      e.JsonStruct =
      e.UnsafeJsonStruct =
        void 0);
  const t = Nr,
    r = tt,
    n = () =>
      (0, t.define)(
        "finite number",
        (P) => (0, t.is)(P, (0, t.number)()) && Number.isFinite(P)
      );
  (e.UnsafeJsonStruct = (0, t.union)([
    (0, t.literal)(null),
    (0, t.boolean)(),
    n(),
    (0, t.string)(),
    (0, t.array)((0, t.lazy)(() => e.UnsafeJsonStruct)),
    (0, t.record)(
      (0, t.string)(),
      (0, t.lazy)(() => e.UnsafeJsonStruct)
    ),
  ])),
    (e.JsonStruct = (0, t.define)("Json", (P, F) => {
      function J(z, U) {
        const Q = [...U.validator(z, F)];
        return Q.length > 0 ? Q : !0;
      }
      try {
        const z = J(P, e.UnsafeJsonStruct);
        return z !== !0
          ? z
          : J(JSON.parse(JSON.stringify(P)), e.UnsafeJsonStruct);
      } catch (z) {
        return z instanceof RangeError ? "Circular reference detected" : !1;
      }
    }));
  function i(P) {
    return (0, t.is)(P, e.JsonStruct);
  }
  e.isValidJson = i;
  function s(P) {
    (0, r.assertStruct)(P, e.JsonStruct, "Invalid JSON value");
    const F = JSON.stringify(P);
    return new TextEncoder().encode(F).byteLength;
  }
  (e.getJsonSize = s),
    (e.jsonrpc2 = "2.0"),
    (e.JsonRpcVersionStruct = (0, t.literal)(e.jsonrpc2)),
    (e.JsonRpcIdStruct = (0, t.nullable)(
      (0, t.union)([(0, t.number)(), (0, t.string)()])
    )),
    (e.JsonRpcErrorStruct = (0, t.object)({
      code: (0, t.integer)(),
      message: (0, t.string)(),
      data: (0, t.optional)(e.JsonStruct),
      stack: (0, t.optional)((0, t.string)()),
    })),
    (e.JsonRpcParamsStruct = (0, t.optional)(
      (0, t.union)([
        (0, t.record)((0, t.string)(), e.JsonStruct),
        (0, t.array)(e.JsonStruct),
      ])
    )),
    (e.JsonRpcRequestStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      method: (0, t.string)(),
      params: e.JsonRpcParamsStruct,
    })),
    (e.JsonRpcNotificationStruct = (0, t.omit)(e.JsonRpcRequestStruct, ["id"]));
  function a(P) {
    return (0, t.is)(P, e.JsonRpcNotificationStruct);
  }
  e.isJsonRpcNotification = a;
  function c(P, F) {
    (0, r.assertStruct)(
      P,
      e.JsonRpcNotificationStruct,
      "Invalid JSON-RPC notification",
      F
    );
  }
  e.assertIsJsonRpcNotification = c;
  function u(P) {
    return (0, t.is)(P, e.JsonRpcRequestStruct);
  }
  e.isJsonRpcRequest = u;
  function d(P, F) {
    (0, r.assertStruct)(
      P,
      e.JsonRpcRequestStruct,
      "Invalid JSON-RPC request",
      F
    );
  }
  (e.assertIsJsonRpcRequest = d),
    (e.PendingJsonRpcResponseStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      result: (0, t.optional)((0, t.unknown)()),
      error: (0, t.optional)(e.JsonRpcErrorStruct),
    })),
    (e.JsonRpcSuccessStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      result: e.JsonStruct,
    })),
    (e.JsonRpcFailureStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      error: e.JsonRpcErrorStruct,
    })),
    (e.JsonRpcResponseStruct = (0, t.union)([
      e.JsonRpcSuccessStruct,
      e.JsonRpcFailureStruct,
    ]));
  function g(P) {
    return (0, t.is)(P, e.PendingJsonRpcResponseStruct);
  }
  e.isPendingJsonRpcResponse = g;
  function p(P, F) {
    (0, r.assertStruct)(
      P,
      e.PendingJsonRpcResponseStruct,
      "Invalid pending JSON-RPC response",
      F
    );
  }
  e.assertIsPendingJsonRpcResponse = p;
  function E(P) {
    return (0, t.is)(P, e.JsonRpcResponseStruct);
  }
  e.isJsonRpcResponse = E;
  function k(P, F) {
    (0, r.assertStruct)(
      P,
      e.JsonRpcResponseStruct,
      "Invalid JSON-RPC response",
      F
    );
  }
  e.assertIsJsonRpcResponse = k;
  function A(P) {
    return (0, t.is)(P, e.JsonRpcSuccessStruct);
  }
  e.isJsonRpcSuccess = A;
  function O(P, F) {
    (0, r.assertStruct)(
      P,
      e.JsonRpcSuccessStruct,
      "Invalid JSON-RPC success response",
      F
    );
  }
  e.assertIsJsonRpcSuccess = O;
  function L(P) {
    return (0, t.is)(P, e.JsonRpcFailureStruct);
  }
  e.isJsonRpcFailure = L;
  function M(P, F) {
    (0, r.assertStruct)(
      P,
      e.JsonRpcFailureStruct,
      "Invalid JSON-RPC failure response",
      F
    );
  }
  e.assertIsJsonRpcFailure = M;
  function I(P) {
    return (0, t.is)(P, e.JsonRpcErrorStruct);
  }
  e.isJsonRpcError = I;
  function N(P, F) {
    (0, r.assertStruct)(P, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", F);
  }
  e.assertIsJsonRpcError = N;
  function B(P) {
    const {
      permitEmptyString: F,
      permitFractions: J,
      permitNull: z,
    } = Object.assign(
      { permitEmptyString: !0, permitFractions: !1, permitNull: !0 },
      P
    );
    return (X) =>
      !!(
        (typeof X == "number" && (J || Number.isInteger(X))) ||
        (typeof X == "string" && (F || X.length > 0)) ||
        (z && X === null)
      );
  }
  e.getJsonRpcIdValidator = B;
})(rh);
var nh = {};
Object.defineProperty(nh, "__esModule", { value: !0 });
var fn = {},
  gg =
    (G && G.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.createModuleLogger = fn.createProjectLogger = void 0;
const _g = gg(Nh),
  mg = (0, _g.default)("metamask");
function vg(e) {
  return mg.extend(e);
}
fn.createProjectLogger = vg;
function bg(e, t) {
  return e.extend(t);
}
fn.createModuleLogger = bg;
var ih = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.calculateNumberSize =
      e.calculateStringSize =
      e.isASCII =
      e.isPlainObject =
      e.ESCAPE_CHARACTERS_REGEXP =
      e.JsonSize =
      e.hasProperty =
      e.isObject =
      e.isNullOrUndefined =
      e.isNonEmptyArray =
        void 0);
  function t(d) {
    return Array.isArray(d) && d.length > 0;
  }
  e.isNonEmptyArray = t;
  function r(d) {
    return d == null;
  }
  e.isNullOrUndefined = r;
  function n(d) {
    return !!d && typeof d == "object" && !Array.isArray(d);
  }
  e.isObject = n;
  const i = (d, g) => Object.hasOwnProperty.call(d, g);
  (e.hasProperty = i),
    (function (d) {
      (d[(d.Null = 4)] = "Null"),
        (d[(d.Comma = 1)] = "Comma"),
        (d[(d.Wrapper = 1)] = "Wrapper"),
        (d[(d.True = 4)] = "True"),
        (d[(d.False = 5)] = "False"),
        (d[(d.Quote = 1)] = "Quote"),
        (d[(d.Colon = 1)] = "Colon"),
        (d[(d.Date = 24)] = "Date");
    })(e.JsonSize || (e.JsonSize = {})),
    (e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu);
  function s(d) {
    if (typeof d != "object" || d === null) return !1;
    try {
      let g = d;
      for (; Object.getPrototypeOf(g) !== null; ) g = Object.getPrototypeOf(g);
      return Object.getPrototypeOf(d) === g;
    } catch {
      return !1;
    }
  }
  e.isPlainObject = s;
  function a(d) {
    return d.charCodeAt(0) <= 127;
  }
  e.isASCII = a;
  function c(d) {
    var g;
    return (
      d.split("").reduce((E, k) => (a(k) ? E + 1 : E + 2), 0) +
      ((g = d.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && g !== void 0
        ? g
        : []
      ).length
    );
  }
  e.calculateStringSize = c;
  function u(d) {
    return d.toString().length;
  }
  e.calculateNumberSize = u;
})(ih);
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.hexToBigInt = Pt.hexToNumber = Pt.bigIntToHex = Pt.numberToHex = void 0;
const tn = tt,
  $n = si,
  yg = (e) => (
    (0, tn.assert)(typeof e == "number", "Value must be a number."),
    (0, tn.assert)(e >= 0, "Value must be a non-negative number."),
    (0, tn.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `bigIntToHex` instead."
    ),
    (0, $n.add0x)(e.toString(16))
  );
Pt.numberToHex = yg;
const wg = (e) => (
  (0, tn.assert)(typeof e == "bigint", "Value must be a bigint."),
  (0, tn.assert)(e >= 0, "Value must be a non-negative bigint."),
  (0, $n.add0x)(e.toString(16))
);
Pt.bigIntToHex = wg;
const Eg = (e) => {
  (0, $n.assertIsHexString)(e);
  const t = parseInt(e, 16);
  return (
    (0, tn.assert)(
      Number.isSafeInteger(t),
      "Value is not a safe integer. Use `hexToBigInt` instead."
    ),
    t
  );
};
Pt.hexToNumber = Eg;
const Sg = (e) => ((0, $n.assertIsHexString)(e), BigInt((0, $n.add0x)(e)));
Pt.hexToBigInt = Sg;
var sh = {};
Object.defineProperty(sh, "__esModule", { value: !0 });
var oh = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.timeSince = e.inMilliseconds = e.Duration = void 0),
    (function (s) {
      (s[(s.Millisecond = 1)] = "Millisecond"),
        (s[(s.Second = 1e3)] = "Second"),
        (s[(s.Minute = 6e4)] = "Minute"),
        (s[(s.Hour = 36e5)] = "Hour"),
        (s[(s.Day = 864e5)] = "Day"),
        (s[(s.Week = 6048e5)] = "Week"),
        (s[(s.Year = 31536e6)] = "Year");
    })(e.Duration || (e.Duration = {}));
  const t = (s) => Number.isInteger(s) && s >= 0,
    r = (s, a) => {
      if (!t(s))
        throw new Error(
          `"${a}" must be a non-negative integer. Received: "${s}".`
        );
    };
  function n(s, a) {
    return r(s, "count"), s * a;
  }
  e.inMilliseconds = n;
  function i(s) {
    return r(s, "timestamp"), Date.now() - s;
  }
  e.timeSince = i;
})(oh);
var ah = {};
Object.defineProperty(ah, "__esModule", { value: !0 });
var ch = {},
  Io = { exports: {} };
const Rg = "2.0.0",
  lh = 256,
  Mg = Number.MAX_SAFE_INTEGER || 9007199254740991,
  kg = 16,
  Cg = lh - 6,
  Ig = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease",
  ];
var vs = {
  MAX_LENGTH: lh,
  MAX_SAFE_COMPONENT_LENGTH: kg,
  MAX_SAFE_BUILD_LENGTH: Cg,
  MAX_SAFE_INTEGER: Mg,
  RELEASE_TYPES: Ig,
  SEMVER_SPEC_VERSION: Rg,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2,
};
const xg =
  typeof process == "object" &&
  process.env &&
  {}.NODE_DEBUG &&
  /\bsemver\b/i.test({}.NODE_DEBUG)
    ? (...e) => console.error("SEMVER", ...e)
    : () => {};
var bs = xg;
(function (e, t) {
  const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: i,
    } = vs,
    s = bs;
  t = e.exports = {};
  const a = (t.re = []),
    c = (t.safeRe = []),
    u = (t.src = []),
    d = (t.t = {});
  let g = 0;
  const p = "[a-zA-Z0-9-]",
    E = [
      ["\\s", 1],
      ["\\d", i],
      [p, n],
    ],
    k = (O) => {
      for (const [L, M] of E)
        O = O.split(`${L}*`)
          .join(`${L}{0,${M}}`)
          .split(`${L}+`)
          .join(`${L}{1,${M}}`);
      return O;
    },
    A = (O, L, M) => {
      const I = k(L),
        N = g++;
      s(O, N, L),
        (d[O] = N),
        (u[N] = L),
        (a[N] = new RegExp(L, M ? "g" : void 0)),
        (c[N] = new RegExp(I, M ? "g" : void 0));
    };
  A("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    A("NUMERICIDENTIFIERLOOSE", "\\d+"),
    A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`),
    A(
      "MAINVERSION",
      `(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})\\.(${
        u[d.NUMERICIDENTIFIER]
      })`
    ),
    A(
      "MAINVERSIONLOOSE",
      `(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${
        u[d.NUMERICIDENTIFIERLOOSE]
      })`
    ),
    A(
      "PRERELEASEIDENTIFIER",
      `(?:${u[d.NUMERICIDENTIFIER]}|${u[d.NONNUMERICIDENTIFIER]})`
    ),
    A(
      "PRERELEASEIDENTIFIERLOOSE",
      `(?:${u[d.NUMERICIDENTIFIERLOOSE]}|${u[d.NONNUMERICIDENTIFIER]})`
    ),
    A(
      "PRERELEASE",
      `(?:-(${u[d.PRERELEASEIDENTIFIER]}(?:\\.${u[d.PRERELEASEIDENTIFIER]})*))`
    ),
    A(
      "PRERELEASELOOSE",
      `(?:-?(${u[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
        u[d.PRERELEASEIDENTIFIERLOOSE]
      })*))`
    ),
    A("BUILDIDENTIFIER", `${p}+`),
    A(
      "BUILD",
      `(?:\\+(${u[d.BUILDIDENTIFIER]}(?:\\.${u[d.BUILDIDENTIFIER]})*))`
    ),
    A("FULLPLAIN", `v?${u[d.MAINVERSION]}${u[d.PRERELEASE]}?${u[d.BUILD]}?`),
    A("FULL", `^${u[d.FULLPLAIN]}$`),
    A(
      "LOOSEPLAIN",
      `[v=\\s]*${u[d.MAINVERSIONLOOSE]}${u[d.PRERELEASELOOSE]}?${u[d.BUILD]}?`
    ),
    A("LOOSE", `^${u[d.LOOSEPLAIN]}$`),
    A("GTLT", "((?:<|>)?=?)"),
    A("XRANGEIDENTIFIERLOOSE", `${u[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    A("XRANGEIDENTIFIER", `${u[d.NUMERICIDENTIFIER]}|x|X|\\*`),
    A(
      "XRANGEPLAIN",
      `[v=\\s]*(${u[d.XRANGEIDENTIFIER]})(?:\\.(${
        u[d.XRANGEIDENTIFIER]
      })(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:${u[d.PRERELEASE]})?${
        u[d.BUILD]
      }?)?)?`
    ),
    A(
      "XRANGEPLAINLOOSE",
      `[v=\\s]*(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
        u[d.XRANGEIDENTIFIERLOOSE]
      })(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:${u[d.PRERELEASELOOSE]})?${
        u[d.BUILD]
      }?)?)?`
    ),
    A("XRANGE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAIN]}$`),
    A("XRANGELOOSE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAINLOOSE]}$`),
    A(
      "COERCE",
      `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`
    ),
    A("COERCERTL", u[d.COERCE], !0),
    A("LONETILDE", "(?:~>?)"),
    A("TILDETRIM", `(\\s*)${u[d.LONETILDE]}\\s+`, !0),
    (t.tildeTrimReplace = "$1~"),
    A("TILDE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAIN]}$`),
    A("TILDELOOSE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAINLOOSE]}$`),
    A("LONECARET", "(?:\\^)"),
    A("CARETTRIM", `(\\s*)${u[d.LONECARET]}\\s+`, !0),
    (t.caretTrimReplace = "$1^"),
    A("CARET", `^${u[d.LONECARET]}${u[d.XRANGEPLAIN]}$`),
    A("CARETLOOSE", `^${u[d.LONECARET]}${u[d.XRANGEPLAINLOOSE]}$`),
    A("COMPARATORLOOSE", `^${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]})$|^$`),
    A("COMPARATOR", `^${u[d.GTLT]}\\s*(${u[d.FULLPLAIN]})$|^$`),
    A(
      "COMPARATORTRIM",
      `(\\s*)${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]}|${u[d.XRANGEPLAIN]})`,
      !0
    ),
    (t.comparatorTrimReplace = "$1$2$3"),
    A(
      "HYPHENRANGE",
      `^\\s*(${u[d.XRANGEPLAIN]})\\s+-\\s+(${u[d.XRANGEPLAIN]})\\s*$`
    ),
    A(
      "HYPHENRANGELOOSE",
      `^\\s*(${u[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[d.XRANGEPLAINLOOSE]})\\s*$`
    ),
    A("STAR", "(<|>)?=?\\s*\\*"),
    A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
    A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Io, Io.exports);
var oi = Io.exports;
const Ag = Object.freeze({ loose: !0 }),
  Tg = Object.freeze({}),
  Ng = (e) => (e ? (typeof e != "object" ? Ag : e) : Tg);
var oa = Ng;
const Nc = /^[0-9]+$/,
  uh = (e, t) => {
    const r = Nc.test(e),
      n = Nc.test(t);
    return (
      r && n && ((e = +e), (t = +t)),
      e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    );
  },
  Lg = (e, t) => uh(t, e);
var hh = { compareIdentifiers: uh, rcompareIdentifiers: Lg };
const bi = bs,
  { MAX_LENGTH: Lc, MAX_SAFE_INTEGER: yi } = vs,
  { safeRe: Pc, t: Oc } = oi,
  Pg = oa,
  { compareIdentifiers: Jr } = hh;
let Og = class It {
  constructor(t, r) {
    if (((r = Pg(r)), t instanceof It)) {
      if (
        t.loose === !!r.loose &&
        t.includePrerelease === !!r.includePrerelease
      )
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(
        `Invalid version. Must be a string. Got type "${typeof t}".`
      );
    if (t.length > Lc)
      throw new TypeError(`version is longer than ${Lc} characters`);
    bi("SemVer", t, r),
      (this.options = r),
      (this.loose = !!r.loose),
      (this.includePrerelease = !!r.includePrerelease);
    const n = t.trim().match(r.loose ? Pc[Oc.LOOSE] : Pc[Oc.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${t}`);
    if (
      ((this.raw = t),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > yi || this.major < 0)
    )
      throw new TypeError("Invalid major version");
    if (this.minor > yi || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > yi || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4]
      ? (this.prerelease = n[4].split(".").map((i) => {
          if (/^[0-9]+$/.test(i)) {
            const s = +i;
            if (s >= 0 && s < yi) return s;
          }
          return i;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split(".") : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join(".")}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (
      (bi("SemVer.compare", this.version, this.options, t), !(t instanceof It))
    ) {
      if (typeof t == "string" && t === this.version) return 0;
      t = new It(t, this.options);
    }
    return t.version === this.version
      ? 0
      : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return (
      t instanceof It || (t = new It(t, this.options)),
      Jr(this.major, t.major) ||
        Jr(this.minor, t.minor) ||
        Jr(this.patch, t.patch)
    );
  }
  comparePre(t) {
    if (
      (t instanceof It || (t = new It(t, this.options)),
      this.prerelease.length && !t.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let r = 0;
    do {
      const n = this.prerelease[r],
        i = t.prerelease[r];
      if ((bi("prerelease compare", r, n, i), n === void 0 && i === void 0))
        return 0;
      if (i === void 0) return 1;
      if (n === void 0) return -1;
      if (n === i) continue;
      return Jr(n, i);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof It || (t = new It(t, this.options));
    let r = 0;
    do {
      const n = this.build[r],
        i = t.build[r];
      if ((bi("prerelease compare", r, n, i), n === void 0 && i === void 0))
        return 0;
      if (i === void 0) return 1;
      if (n === void 0) return -1;
      if (n === i) continue;
      return Jr(n, i);
    } while (++r);
  }
  inc(t, r, n) {
    switch (t) {
      case "premajor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc("pre", r, n);
        break;
      case "preminor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          this.minor++,
          this.inc("pre", r, n);
        break;
      case "prepatch":
        (this.prerelease.length = 0),
          this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) &&
          this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
        break;
      case "pre": {
        const i = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0) this.prerelease = [i];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" &&
              (this.prerelease[s]++, (s = -2));
          if (s === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error(
                "invalid increment argument: identifier already exists"
              );
            this.prerelease.push(i);
          }
        }
        if (r) {
          let s = [r, i];
          n === !1 && (s = [r]),
            Jr(this.prerelease[0], r) === 0
              ? isNaN(this.prerelease[1]) && (this.prerelease = s)
              : (this.prerelease = s);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join(".")}`),
      this
    );
  }
};
var st = Og;
const $c = st,
  $g = (e, t, r = !1) => {
    if (e instanceof $c) return e;
    try {
      return new $c(e, t);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
var Sn = $g;
const Bg = Sn,
  Dg = (e, t) => {
    const r = Bg(e, t);
    return r ? r.version : null;
  };
var Fg = Dg;
const jg = Sn,
  Hg = (e, t) => {
    const r = jg(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null;
  };
var Ug = Hg;
const Bc = st,
  Wg = (e, t, r, n, i) => {
    typeof r == "string" && ((i = n), (n = r), (r = void 0));
    try {
      return new Bc(e instanceof Bc ? e.version : e, r).inc(t, n, i).version;
    } catch {
      return null;
    }
  };
var Vg = Wg;
const Dc = Sn,
  qg = (e, t) => {
    const r = Dc(e, null, !0),
      n = Dc(t, null, !0),
      i = r.compare(n);
    if (i === 0) return null;
    const s = i > 0,
      a = s ? r : n,
      c = s ? n : r,
      u = !!a.prerelease.length;
    if (!!c.prerelease.length && !u)
      return !c.patch && !c.minor
        ? "major"
        : a.patch
        ? "patch"
        : a.minor
        ? "minor"
        : "major";
    const g = u ? "pre" : "";
    return r.major !== n.major
      ? g + "major"
      : r.minor !== n.minor
      ? g + "minor"
      : r.patch !== n.patch
      ? g + "patch"
      : "prerelease";
  };
var zg = qg;
const Gg = st,
  Jg = (e, t) => new Gg(e, t).major;
var Zg = Jg;
const Kg = st,
  Qg = (e, t) => new Kg(e, t).minor;
var Yg = Qg;
const Xg = st,
  e_ = (e, t) => new Xg(e, t).patch;
var t_ = e_;
const r_ = Sn,
  n_ = (e, t) => {
    const r = r_(e, t);
    return r && r.prerelease.length ? r.prerelease : null;
  };
var i_ = n_;
const Fc = st,
  s_ = (e, t, r) => new Fc(e, r).compare(new Fc(t, r));
var St = s_;
const o_ = St,
  a_ = (e, t, r) => o_(t, e, r);
var c_ = a_;
const l_ = St,
  u_ = (e, t) => l_(e, t, !0);
var h_ = u_;
const jc = st,
  d_ = (e, t, r) => {
    const n = new jc(e, r),
      i = new jc(t, r);
    return n.compare(i) || n.compareBuild(i);
  };
var aa = d_;
const f_ = aa,
  p_ = (e, t) => e.sort((r, n) => f_(r, n, t));
var g_ = p_;
const __ = aa,
  m_ = (e, t) => e.sort((r, n) => __(n, r, t));
var v_ = m_;
const b_ = St,
  y_ = (e, t, r) => b_(e, t, r) > 0;
var ys = y_;
const w_ = St,
  E_ = (e, t, r) => w_(e, t, r) < 0;
var ca = E_;
const S_ = St,
  R_ = (e, t, r) => S_(e, t, r) === 0;
var dh = R_;
const M_ = St,
  k_ = (e, t, r) => M_(e, t, r) !== 0;
var fh = k_;
const C_ = St,
  I_ = (e, t, r) => C_(e, t, r) >= 0;
var la = I_;
const x_ = St,
  A_ = (e, t, r) => x_(e, t, r) <= 0;
var ua = A_;
const T_ = dh,
  N_ = fh,
  L_ = ys,
  P_ = la,
  O_ = ca,
  $_ = ua,
  B_ = (e, t, r, n) => {
    switch (t) {
      case "===":
        return (
          typeof e == "object" && (e = e.version),
          typeof r == "object" && (r = r.version),
          e === r
        );
      case "!==":
        return (
          typeof e == "object" && (e = e.version),
          typeof r == "object" && (r = r.version),
          e !== r
        );
      case "":
      case "=":
      case "==":
        return T_(e, r, n);
      case "!=":
        return N_(e, r, n);
      case ">":
        return L_(e, r, n);
      case ">=":
        return P_(e, r, n);
      case "<":
        return O_(e, r, n);
      case "<=":
        return $_(e, r, n);
      default:
        throw new TypeError(`Invalid operator: ${t}`);
    }
  };
var ph = B_;
const D_ = st,
  F_ = Sn,
  { safeRe: wi, t: Ei } = oi,
  j_ = (e, t) => {
    if (e instanceof D_) return e;
    if ((typeof e == "number" && (e = String(e)), typeof e != "string"))
      return null;
    t = t || {};
    let r = null;
    if (!t.rtl) r = e.match(wi[Ei.COERCE]);
    else {
      let n;
      for (
        ;
        (n = wi[Ei.COERCERTL].exec(e)) &&
        (!r || r.index + r[0].length !== e.length);

      )
        (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n),
          (wi[Ei.COERCERTL].lastIndex = n.index + n[1].length + n[2].length);
      wi[Ei.COERCERTL].lastIndex = -1;
    }
    return r === null ? null : F_(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t);
  };
var H_ = j_,
  ro,
  Hc;
function U_() {
  return (
    Hc ||
      ((Hc = 1),
      (ro = function (e) {
        e.prototype[Symbol.iterator] = function* () {
          for (let t = this.head; t; t = t.next) yield t.value;
        };
      })),
    ro
  );
}
var W_ = ce;
ce.Node = Rr;
ce.create = ce;
function ce(e) {
  var t = this;
  if (
    (t instanceof ce || (t = new ce()),
    (t.tail = null),
    (t.head = null),
    (t.length = 0),
    e && typeof e.forEach == "function")
  )
    e.forEach(function (i) {
      t.push(i);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
  return t;
}
ce.prototype.removeNode = function (e) {
  if (e.list !== this)
    throw new Error("removing node which does not belong to this list");
  var t = e.next,
    r = e.prev;
  return (
    t && (t.prev = r),
    r && (r.next = t),
    e === this.head && (this.head = t),
    e === this.tail && (this.tail = r),
    e.list.length--,
    (e.next = null),
    (e.prev = null),
    (e.list = null),
    t
  );
};
ce.prototype.unshiftNode = function (e) {
  if (e !== this.head) {
    e.list && e.list.removeNode(e);
    var t = this.head;
    (e.list = this),
      (e.next = t),
      t && (t.prev = e),
      (this.head = e),
      this.tail || (this.tail = e),
      this.length++;
  }
};
ce.prototype.pushNode = function (e) {
  if (e !== this.tail) {
    e.list && e.list.removeNode(e);
    var t = this.tail;
    (e.list = this),
      (e.prev = t),
      t && (t.next = e),
      (this.tail = e),
      this.head || (this.head = e),
      this.length++;
  }
};
ce.prototype.push = function () {
  for (var e = 0, t = arguments.length; e < t; e++) q_(this, arguments[e]);
  return this.length;
};
ce.prototype.unshift = function () {
  for (var e = 0, t = arguments.length; e < t; e++) z_(this, arguments[e]);
  return this.length;
};
ce.prototype.pop = function () {
  if (this.tail) {
    var e = this.tail.value;
    return (
      (this.tail = this.tail.prev),
      this.tail ? (this.tail.next = null) : (this.head = null),
      this.length--,
      e
    );
  }
};
ce.prototype.shift = function () {
  if (this.head) {
    var e = this.head.value;
    return (
      (this.head = this.head.next),
      this.head ? (this.head.prev = null) : (this.tail = null),
      this.length--,
      e
    );
  }
};
ce.prototype.forEach = function (e, t) {
  t = t || this;
  for (var r = this.head, n = 0; r !== null; n++)
    e.call(t, r.value, n, this), (r = r.next);
};
ce.prototype.forEachReverse = function (e, t) {
  t = t || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    e.call(t, r.value, n, this), (r = r.prev);
};
ce.prototype.get = function (e) {
  for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
  if (t === e && r !== null) return r.value;
};
ce.prototype.getReverse = function (e) {
  for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
  if (t === e && r !== null) return r.value;
};
ce.prototype.map = function (e, t) {
  t = t || this;
  for (var r = new ce(), n = this.head; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.next);
  return r;
};
ce.prototype.mapReverse = function (e, t) {
  t = t || this;
  for (var r = new ce(), n = this.tail; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.prev);
  return r;
};
ce.prototype.reduce = function (e, t) {
  var r,
    n = this.head;
  if (arguments.length > 1) r = t;
  else if (this.head) (n = this.head.next), (r = this.head.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var i = 0; n !== null; i++) (r = e(r, n.value, i)), (n = n.next);
  return r;
};
ce.prototype.reduceReverse = function (e, t) {
  var r,
    n = this.tail;
  if (arguments.length > 1) r = t;
  else if (this.tail) (n = this.tail.prev), (r = this.tail.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var i = this.length - 1; n !== null; i--)
    (r = e(r, n.value, i)), (n = n.prev);
  return r;
};
ce.prototype.toArray = function () {
  for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++)
    (e[t] = r.value), (r = r.next);
  return e;
};
ce.prototype.toArrayReverse = function () {
  for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++)
    (e[t] = r.value), (r = r.prev);
  return e;
};
ce.prototype.slice = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new ce();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = 0, i = this.head; i !== null && n < e; n++) i = i.next;
  for (; i !== null && n < t; n++, i = i.next) r.push(i.value);
  return r;
};
ce.prototype.sliceReverse = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new ce();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = this.length, i = this.tail; i !== null && n > t; n--) i = i.prev;
  for (; i !== null && n > e; n--, i = i.prev) r.push(i.value);
  return r;
};
ce.prototype.splice = function (e, t, ...r) {
  e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
  for (var n = 0, i = this.head; i !== null && n < e; n++) i = i.next;
  for (var s = [], n = 0; i && n < t; n++)
    s.push(i.value), (i = this.removeNode(i));
  i === null && (i = this.tail),
    i !== this.head && i !== this.tail && (i = i.prev);
  for (var n = 0; n < r.length; n++) i = V_(this, i, r[n]);
  return s;
};
ce.prototype.reverse = function () {
  for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
    var n = r.prev;
    (r.prev = r.next), (r.next = n);
  }
  return (this.head = t), (this.tail = e), this;
};
function V_(e, t, r) {
  var n = t === e.head ? new Rr(r, null, t, e) : new Rr(r, t, t.next, e);
  return (
    n.next === null && (e.tail = n),
    n.prev === null && (e.head = n),
    e.length++,
    n
  );
}
function q_(e, t) {
  (e.tail = new Rr(t, e.tail, null, e)),
    e.head || (e.head = e.tail),
    e.length++;
}
function z_(e, t) {
  (e.head = new Rr(t, null, e.head, e)),
    e.tail || (e.tail = e.head),
    e.length++;
}
function Rr(e, t, r, n) {
  if (!(this instanceof Rr)) return new Rr(e, t, r, n);
  (this.list = n),
    (this.value = e),
    t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
    r ? ((r.prev = this), (this.next = r)) : (this.next = null);
}
try {
  U_()(ce);
} catch {}
const G_ = W_,
  vr = Symbol("max"),
  Ft = Symbol("length"),
  Zr = Symbol("lengthCalculator"),
  Nn = Symbol("allowStale"),
  yr = Symbol("maxAge"),
  $t = Symbol("dispose"),
  Uc = Symbol("noDisposeOnSet"),
  Qe = Symbol("lruList"),
  wt = Symbol("cache"),
  gh = Symbol("updateAgeOnGet"),
  no = () => 1;
class J_ {
  constructor(t) {
    if (
      (typeof t == "number" && (t = { max: t }),
      t || (t = {}),
      t.max && (typeof t.max != "number" || t.max < 0))
    )
      throw new TypeError("max must be a non-negative number");
    this[vr] = t.max || 1 / 0;
    const r = t.length || no;
    if (
      ((this[Zr] = typeof r != "function" ? no : r),
      (this[Nn] = t.stale || !1),
      t.maxAge && typeof t.maxAge != "number")
    )
      throw new TypeError("maxAge must be a number");
    (this[yr] = t.maxAge || 0),
      (this[$t] = t.dispose),
      (this[Uc] = t.noDisposeOnSet || !1),
      (this[gh] = t.updateAgeOnGet || !1),
      this.reset();
  }
  set max(t) {
    if (typeof t != "number" || t < 0)
      throw new TypeError("max must be a non-negative number");
    (this[vr] = t || 1 / 0), Mn(this);
  }
  get max() {
    return this[vr];
  }
  set allowStale(t) {
    this[Nn] = !!t;
  }
  get allowStale() {
    return this[Nn];
  }
  set maxAge(t) {
    if (typeof t != "number")
      throw new TypeError("maxAge must be a non-negative number");
    (this[yr] = t), Mn(this);
  }
  get maxAge() {
    return this[yr];
  }
  set lengthCalculator(t) {
    typeof t != "function" && (t = no),
      t !== this[Zr] &&
        ((this[Zr] = t),
        (this[Ft] = 0),
        this[Qe].forEach((r) => {
          (r.length = this[Zr](r.value, r.key)), (this[Ft] += r.length);
        })),
      Mn(this);
  }
  get lengthCalculator() {
    return this[Zr];
  }
  get length() {
    return this[Ft];
  }
  get itemCount() {
    return this[Qe].length;
  }
  rforEach(t, r) {
    r = r || this;
    for (let n = this[Qe].tail; n !== null; ) {
      const i = n.prev;
      Wc(this, t, n, r), (n = i);
    }
  }
  forEach(t, r) {
    r = r || this;
    for (let n = this[Qe].head; n !== null; ) {
      const i = n.next;
      Wc(this, t, n, r), (n = i);
    }
  }
  keys() {
    return this[Qe].toArray().map((t) => t.key);
  }
  values() {
    return this[Qe].toArray().map((t) => t.value);
  }
  reset() {
    this[$t] &&
      this[Qe] &&
      this[Qe].length &&
      this[Qe].forEach((t) => this[$t](t.key, t.value)),
      (this[wt] = new Map()),
      (this[Qe] = new G_()),
      (this[Ft] = 0);
  }
  dump() {
    return this[Qe].map((t) =>
      Ni(this, t) ? !1 : { k: t.key, v: t.value, e: t.now + (t.maxAge || 0) }
    )
      .toArray()
      .filter((t) => t);
  }
  dumpLru() {
    return this[Qe];
  }
  set(t, r, n) {
    if (((n = n || this[yr]), n && typeof n != "number"))
      throw new TypeError("maxAge must be a number");
    const i = n ? Date.now() : 0,
      s = this[Zr](r, t);
    if (this[wt].has(t)) {
      if (s > this[vr]) return rn(this, this[wt].get(t)), !1;
      const u = this[wt].get(t).value;
      return (
        this[$t] && (this[Uc] || this[$t](t, u.value)),
        (u.now = i),
        (u.maxAge = n),
        (u.value = r),
        (this[Ft] += s - u.length),
        (u.length = s),
        this.get(t),
        Mn(this),
        !0
      );
    }
    const a = new Z_(t, r, s, i, n);
    return a.length > this[vr]
      ? (this[$t] && this[$t](t, r), !1)
      : ((this[Ft] += a.length),
        this[Qe].unshift(a),
        this[wt].set(t, this[Qe].head),
        Mn(this),
        !0);
  }
  has(t) {
    if (!this[wt].has(t)) return !1;
    const r = this[wt].get(t).value;
    return !Ni(this, r);
  }
  get(t) {
    return io(this, t, !0);
  }
  peek(t) {
    return io(this, t, !1);
  }
  pop() {
    const t = this[Qe].tail;
    return t ? (rn(this, t), t.value) : null;
  }
  del(t) {
    rn(this, this[wt].get(t));
  }
  load(t) {
    this.reset();
    const r = Date.now();
    for (let n = t.length - 1; n >= 0; n--) {
      const i = t[n],
        s = i.e || 0;
      if (s === 0) this.set(i.k, i.v);
      else {
        const a = s - r;
        a > 0 && this.set(i.k, i.v, a);
      }
    }
  }
  prune() {
    this[wt].forEach((t, r) => io(this, r, !1));
  }
}
const io = (e, t, r) => {
    const n = e[wt].get(t);
    if (n) {
      const i = n.value;
      if (Ni(e, i)) {
        if ((rn(e, n), !e[Nn])) return;
      } else r && (e[gh] && (n.value.now = Date.now()), e[Qe].unshiftNode(n));
      return i.value;
    }
  },
  Ni = (e, t) => {
    if (!t || (!t.maxAge && !e[yr])) return !1;
    const r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e[yr] && r > e[yr];
  },
  Mn = (e) => {
    if (e[Ft] > e[vr])
      for (let t = e[Qe].tail; e[Ft] > e[vr] && t !== null; ) {
        const r = t.prev;
        rn(e, t), (t = r);
      }
  },
  rn = (e, t) => {
    if (t) {
      const r = t.value;
      e[$t] && e[$t](r.key, r.value),
        (e[Ft] -= r.length),
        e[wt].delete(r.key),
        e[Qe].removeNode(t);
    }
  };
class Z_ {
  constructor(t, r, n, i, s) {
    (this.key = t),
      (this.value = r),
      (this.length = n),
      (this.now = i),
      (this.maxAge = s || 0);
  }
}
const Wc = (e, t, r, n) => {
  let i = r.value;
  Ni(e, i) && (rn(e, r), e[Nn] || (i = void 0)),
    i && t.call(n, i.value, i.key, e);
};
var K_ = J_,
  so,
  Vc;
function Rt() {
  if (Vc) return so;
  Vc = 1;
  class e {
    constructor(o, h) {
      if (((h = n(h)), o instanceof e))
        return o.loose === !!h.loose &&
          o.includePrerelease === !!h.includePrerelease
          ? o
          : new e(o.raw, h);
      if (o instanceof i)
        return (this.raw = o.value), (this.set = [[o]]), this.format(), this;
      if (
        ((this.options = h),
        (this.loose = !!h.loose),
        (this.includePrerelease = !!h.includePrerelease),
        (this.raw = o.trim().split(/\s+/).join(" ")),
        (this.set = this.raw
          .split("||")
          .map((f) => this.parseRange(f.trim()))
          .filter((f) => f.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const f = this.set[0];
        if (
          ((this.set = this.set.filter((_) => !A(_[0]))), this.set.length === 0)
        )
          this.set = [f];
        else if (this.set.length > 1) {
          for (const _ of this.set)
            if (_.length === 1 && O(_[0])) {
              this.set = [_];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((o) => o.join(" ").trim())
          .join("||")
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(o) {
      const f =
          ((this.options.includePrerelease && E) | (this.options.loose && k)) +
          ":" +
          o,
        _ = r.get(f);
      if (_) return _;
      const b = this.options.loose,
        R = b ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
      (o = o.replace(R, Q(this.options.includePrerelease))),
        s("hyphen replace", o),
        (o = o.replace(c[u.COMPARATORTRIM], d)),
        s("comparator trim", o),
        (o = o.replace(c[u.TILDETRIM], g)),
        s("tilde trim", o),
        (o = o.replace(c[u.CARETTRIM], p)),
        s("caret trim", o);
      let x = o
        .split(" ")
        .map((W) => M(W, this.options))
        .join(" ")
        .split(/\s+/)
        .map((W) => X(W, this.options));
      b &&
        (x = x.filter(
          (W) => (
            s("loose invalid filter", W, this.options),
            !!W.match(c[u.COMPARATORLOOSE])
          )
        )),
        s("range list", x);
      const v = new Map(),
        l = x.map((W) => new i(W, this.options));
      for (const W of l) {
        if (A(W)) return [W];
        v.set(W.value, W);
      }
      v.size > 1 && v.has("") && v.delete("");
      const S = [...v.values()];
      return r.set(f, S), S;
    }
    intersects(o, h) {
      if (!(o instanceof e)) throw new TypeError("a Range is required");
      return this.set.some(
        (f) =>
          L(f, h) &&
          o.set.some(
            (_) => L(_, h) && f.every((b) => _.every((R) => b.intersects(R, h)))
          )
      );
    }
    test(o) {
      if (!o) return !1;
      if (typeof o == "string")
        try {
          o = new a(o, this.options);
        } catch {
          return !1;
        }
      for (let h = 0; h < this.set.length; h++)
        if (ie(this.set[h], o, this.options)) return !0;
      return !1;
    }
  }
  so = e;
  const t = K_,
    r = new t({ max: 1e3 }),
    n = oa,
    i = ws(),
    s = bs,
    a = st,
    {
      safeRe: c,
      t: u,
      comparatorTrimReplace: d,
      tildeTrimReplace: g,
      caretTrimReplace: p,
    } = oi,
    { FLAG_INCLUDE_PRERELEASE: E, FLAG_LOOSE: k } = vs,
    A = (m) => m.value === "<0.0.0-0",
    O = (m) => m.value === "",
    L = (m, o) => {
      let h = !0;
      const f = m.slice();
      let _ = f.pop();
      for (; h && f.length; )
        (h = f.every((b) => _.intersects(b, o))), (_ = f.pop());
      return h;
    },
    M = (m, o) => (
      s("comp", m, o),
      (m = P(m, o)),
      s("caret", m),
      (m = N(m, o)),
      s("tildes", m),
      (m = J(m, o)),
      s("xrange", m),
      (m = U(m, o)),
      s("stars", m),
      m
    ),
    I = (m) => !m || m.toLowerCase() === "x" || m === "*",
    N = (m, o) =>
      m
        .trim()
        .split(/\s+/)
        .map((h) => B(h, o))
        .join(" "),
    B = (m, o) => {
      const h = o.loose ? c[u.TILDELOOSE] : c[u.TILDE];
      return m.replace(h, (f, _, b, R, x) => {
        s("tilde", m, f, _, b, R, x);
        let v;
        return (
          I(_)
            ? (v = "")
            : I(b)
            ? (v = `>=${_}.0.0 <${+_ + 1}.0.0-0`)
            : I(R)
            ? (v = `>=${_}.${b}.0 <${_}.${+b + 1}.0-0`)
            : x
            ? (s("replaceTilde pr", x),
              (v = `>=${_}.${b}.${R}-${x} <${_}.${+b + 1}.0-0`))
            : (v = `>=${_}.${b}.${R} <${_}.${+b + 1}.0-0`),
          s("tilde return", v),
          v
        );
      });
    },
    P = (m, o) =>
      m
        .trim()
        .split(/\s+/)
        .map((h) => F(h, o))
        .join(" "),
    F = (m, o) => {
      s("caret", m, o);
      const h = o.loose ? c[u.CARETLOOSE] : c[u.CARET],
        f = o.includePrerelease ? "-0" : "";
      return m.replace(h, (_, b, R, x, v) => {
        s("caret", m, _, b, R, x, v);
        let l;
        return (
          I(b)
            ? (l = "")
            : I(R)
            ? (l = `>=${b}.0.0${f} <${+b + 1}.0.0-0`)
            : I(x)
            ? b === "0"
              ? (l = `>=${b}.${R}.0${f} <${b}.${+R + 1}.0-0`)
              : (l = `>=${b}.${R}.0${f} <${+b + 1}.0.0-0`)
            : v
            ? (s("replaceCaret pr", v),
              b === "0"
                ? R === "0"
                  ? (l = `>=${b}.${R}.${x}-${v} <${b}.${R}.${+x + 1}-0`)
                  : (l = `>=${b}.${R}.${x}-${v} <${b}.${+R + 1}.0-0`)
                : (l = `>=${b}.${R}.${x}-${v} <${+b + 1}.0.0-0`))
            : (s("no pr"),
              b === "0"
                ? R === "0"
                  ? (l = `>=${b}.${R}.${x}${f} <${b}.${R}.${+x + 1}-0`)
                  : (l = `>=${b}.${R}.${x}${f} <${b}.${+R + 1}.0-0`)
                : (l = `>=${b}.${R}.${x} <${+b + 1}.0.0-0`)),
          s("caret return", l),
          l
        );
      });
    },
    J = (m, o) => (
      s("replaceXRanges", m, o),
      m
        .split(/\s+/)
        .map((h) => z(h, o))
        .join(" ")
    ),
    z = (m, o) => {
      m = m.trim();
      const h = o.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
      return m.replace(h, (f, _, b, R, x, v) => {
        s("xRange", m, f, _, b, R, x, v);
        const l = I(b),
          S = l || I(R),
          W = S || I(x),
          V = W;
        return (
          _ === "=" && V && (_ = ""),
          (v = o.includePrerelease ? "-0" : ""),
          l
            ? _ === ">" || _ === "<"
              ? (f = "<0.0.0-0")
              : (f = "*")
            : _ && V
            ? (S && (R = 0),
              (x = 0),
              _ === ">"
                ? ((_ = ">="),
                  S
                    ? ((b = +b + 1), (R = 0), (x = 0))
                    : ((R = +R + 1), (x = 0)))
                : _ === "<=" && ((_ = "<"), S ? (b = +b + 1) : (R = +R + 1)),
              _ === "<" && (v = "-0"),
              (f = `${_ + b}.${R}.${x}${v}`))
            : S
            ? (f = `>=${b}.0.0${v} <${+b + 1}.0.0-0`)
            : W && (f = `>=${b}.${R}.0${v} <${b}.${+R + 1}.0-0`),
          s("xRange return", f),
          f
        );
      });
    },
    U = (m, o) => (s("replaceStars", m, o), m.trim().replace(c[u.STAR], "")),
    X = (m, o) => (
      s("replaceGTE0", m, o),
      m.trim().replace(c[o.includePrerelease ? u.GTE0PRE : u.GTE0], "")
    ),
    Q = (m) => (o, h, f, _, b, R, x, v, l, S, W, V, C) => (
      I(f)
        ? (h = "")
        : I(_)
        ? (h = `>=${f}.0.0${m ? "-0" : ""}`)
        : I(b)
        ? (h = `>=${f}.${_}.0${m ? "-0" : ""}`)
        : R
        ? (h = `>=${h}`)
        : (h = `>=${h}${m ? "-0" : ""}`),
      I(l)
        ? (v = "")
        : I(S)
        ? (v = `<${+l + 1}.0.0-0`)
        : I(W)
        ? (v = `<${l}.${+S + 1}.0-0`)
        : V
        ? (v = `<=${l}.${S}.${W}-${V}`)
        : m
        ? (v = `<${l}.${S}.${+W + 1}-0`)
        : (v = `<=${v}`),
      `${h} ${v}`.trim()
    ),
    ie = (m, o, h) => {
      for (let f = 0; f < m.length; f++) if (!m[f].test(o)) return !1;
      if (o.prerelease.length && !h.includePrerelease) {
        for (let f = 0; f < m.length; f++)
          if (
            (s(m[f].semver),
            m[f].semver !== i.ANY && m[f].semver.prerelease.length > 0)
          ) {
            const _ = m[f].semver;
            if (
              _.major === o.major &&
              _.minor === o.minor &&
              _.patch === o.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return so;
}
var oo, qc;
function ws() {
  if (qc) return oo;
  qc = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(g, p) {
      if (((p = r(p)), g instanceof t)) {
        if (g.loose === !!p.loose) return g;
        g = g.value;
      }
      (g = g.trim().split(/\s+/).join(" ")),
        a("comparator", g, p),
        (this.options = p),
        (this.loose = !!p.loose),
        this.parse(g),
        this.semver === e
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        a("comp", this);
    }
    parse(g) {
      const p = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR],
        E = g.match(p);
      if (!E) throw new TypeError(`Invalid comparator: ${g}`);
      (this.operator = E[1] !== void 0 ? E[1] : ""),
        this.operator === "=" && (this.operator = ""),
        E[2]
          ? (this.semver = new c(E[2], this.options.loose))
          : (this.semver = e);
    }
    toString() {
      return this.value;
    }
    test(g) {
      if (
        (a("Comparator.test", g, this.options.loose),
        this.semver === e || g === e)
      )
        return !0;
      if (typeof g == "string")
        try {
          g = new c(g, this.options);
        } catch {
          return !1;
        }
      return s(g, this.operator, this.semver, this.options);
    }
    intersects(g, p) {
      if (!(g instanceof t)) throw new TypeError("a Comparator is required");
      return this.operator === ""
        ? this.value === ""
          ? !0
          : new u(g.value, p).test(this.value)
        : g.operator === ""
        ? g.value === ""
          ? !0
          : new u(this.value, p).test(g.semver)
        : ((p = r(p)),
          (p.includePrerelease &&
            (this.value === "<0.0.0-0" || g.value === "<0.0.0-0")) ||
          (!p.includePrerelease &&
            (this.value.startsWith("<0.0.0") || g.value.startsWith("<0.0.0")))
            ? !1
            : !!(
                (this.operator.startsWith(">") && g.operator.startsWith(">")) ||
                (this.operator.startsWith("<") && g.operator.startsWith("<")) ||
                (this.semver.version === g.semver.version &&
                  this.operator.includes("=") &&
                  g.operator.includes("=")) ||
                (s(this.semver, "<", g.semver, p) &&
                  this.operator.startsWith(">") &&
                  g.operator.startsWith("<")) ||
                (s(this.semver, ">", g.semver, p) &&
                  this.operator.startsWith("<") &&
                  g.operator.startsWith(">"))
              ));
    }
  }
  oo = t;
  const r = oa,
    { safeRe: n, t: i } = oi,
    s = ph,
    a = bs,
    c = st,
    u = Rt();
  return oo;
}
const Q_ = Rt(),
  Y_ = (e, t, r) => {
    try {
      t = new Q_(t, r);
    } catch {
      return !1;
    }
    return t.test(e);
  };
var Es = Y_;
const X_ = Rt(),
  em = (e, t) =>
    new X_(e, t).set.map((r) =>
      r
        .map((n) => n.value)
        .join(" ")
        .trim()
        .split(" ")
    );
var tm = em;
const rm = st,
  nm = Rt(),
  im = (e, t, r) => {
    let n = null,
      i = null,
      s = null;
    try {
      s = new nm(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((a) => {
        s.test(a) &&
          (!n || i.compare(a) === -1) &&
          ((n = a), (i = new rm(n, r)));
      }),
      n
    );
  };
var sm = im;
const om = st,
  am = Rt(),
  cm = (e, t, r) => {
    let n = null,
      i = null,
      s = null;
    try {
      s = new am(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((a) => {
        s.test(a) &&
          (!n || i.compare(a) === 1) &&
          ((n = a), (i = new om(n, r)));
      }),
      n
    );
  };
var lm = cm;
const ao = st,
  um = Rt(),
  zc = ys,
  hm = (e, t) => {
    e = new um(e, t);
    let r = new ao("0.0.0");
    if (e.test(r) || ((r = new ao("0.0.0-0")), e.test(r))) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      const i = e.set[n];
      let s = null;
      i.forEach((a) => {
        const c = new ao(a.semver.version);
        switch (a.operator) {
          case ">":
            c.prerelease.length === 0 ? c.patch++ : c.prerelease.push(0),
              (c.raw = c.format());
          case "":
          case ">=":
            (!s || zc(c, s)) && (s = c);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${a.operator}`);
        }
      }),
        s && (!r || zc(r, s)) && (r = s);
    }
    return r && e.test(r) ? r : null;
  };
var dm = hm;
const fm = Rt(),
  pm = (e, t) => {
    try {
      return new fm(e, t).range || "*";
    } catch {
      return null;
    }
  };
var gm = pm;
const _m = st,
  _h = ws(),
  { ANY: mm } = _h,
  vm = Rt(),
  bm = Es,
  Gc = ys,
  Jc = ca,
  ym = ua,
  wm = la,
  Em = (e, t, r, n) => {
    (e = new _m(e, n)), (t = new vm(t, n));
    let i, s, a, c, u;
    switch (r) {
      case ">":
        (i = Gc), (s = ym), (a = Jc), (c = ">"), (u = ">=");
        break;
      case "<":
        (i = Jc), (s = wm), (a = Gc), (c = "<"), (u = "<=");
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (bm(e, t, n)) return !1;
    for (let d = 0; d < t.set.length; ++d) {
      const g = t.set[d];
      let p = null,
        E = null;
      if (
        (g.forEach((k) => {
          k.semver === mm && (k = new _h(">=0.0.0")),
            (p = p || k),
            (E = E || k),
            i(k.semver, p.semver, n)
              ? (p = k)
              : a(k.semver, E.semver, n) && (E = k);
        }),
        p.operator === c ||
          p.operator === u ||
          ((!E.operator || E.operator === c) && s(e, E.semver)))
      )
        return !1;
      if (E.operator === u && a(e, E.semver)) return !1;
    }
    return !0;
  };
var ha = Em;
const Sm = ha,
  Rm = (e, t, r) => Sm(e, t, ">", r);
var Mm = Rm;
const km = ha,
  Cm = (e, t, r) => km(e, t, "<", r);
var Im = Cm;
const Zc = Rt(),
  xm = (e, t, r) => (
    (e = new Zc(e, r)), (t = new Zc(t, r)), e.intersects(t, r)
  );
var Am = xm;
const Tm = Es,
  Nm = St;
var Lm = (e, t, r) => {
  const n = [];
  let i = null,
    s = null;
  const a = e.sort((g, p) => Nm(g, p, r));
  for (const g of a)
    Tm(g, t, r)
      ? ((s = g), i || (i = g))
      : (s && n.push([i, s]), (s = null), (i = null));
  i && n.push([i, null]);
  const c = [];
  for (const [g, p] of n)
    g === p
      ? c.push(g)
      : !p && g === a[0]
      ? c.push("*")
      : p
      ? g === a[0]
        ? c.push(`<=${p}`)
        : c.push(`${g} - ${p}`)
      : c.push(`>=${g}`);
  const u = c.join(" || "),
    d = typeof t.raw == "string" ? t.raw : String(t);
  return u.length < d.length ? u : t;
};
const Kc = Rt(),
  da = ws(),
  { ANY: co } = da,
  kn = Es,
  fa = St,
  Pm = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new Kc(e, r)), (t = new Kc(t, r));
    let n = !1;
    e: for (const i of e.set) {
      for (const s of t.set) {
        const a = $m(i, s, r);
        if (((n = n || a !== null), a)) continue e;
      }
      if (n) return !1;
    }
    return !0;
  },
  Om = [new da(">=0.0.0-0")],
  Qc = [new da(">=0.0.0")],
  $m = (e, t, r) => {
    if (e === t) return !0;
    if (e.length === 1 && e[0].semver === co) {
      if (t.length === 1 && t[0].semver === co) return !0;
      r.includePrerelease ? (e = Om) : (e = Qc);
    }
    if (t.length === 1 && t[0].semver === co) {
      if (r.includePrerelease) return !0;
      t = Qc;
    }
    const n = new Set();
    let i, s;
    for (const k of e)
      k.operator === ">" || k.operator === ">="
        ? (i = Yc(i, k, r))
        : k.operator === "<" || k.operator === "<="
        ? (s = Xc(s, k, r))
        : n.add(k.semver);
    if (n.size > 1) return null;
    let a;
    if (i && s) {
      if (((a = fa(i.semver, s.semver, r)), a > 0)) return null;
      if (a === 0 && (i.operator !== ">=" || s.operator !== "<=")) return null;
    }
    for (const k of n) {
      if ((i && !kn(k, String(i), r)) || (s && !kn(k, String(s), r)))
        return null;
      for (const A of t) if (!kn(k, String(A), r)) return !1;
      return !0;
    }
    let c,
      u,
      d,
      g,
      p =
        s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1,
      E =
        i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
    p &&
      p.prerelease.length === 1 &&
      s.operator === "<" &&
      p.prerelease[0] === 0 &&
      (p = !1);
    for (const k of t) {
      if (
        ((g = g || k.operator === ">" || k.operator === ">="),
        (d = d || k.operator === "<" || k.operator === "<="),
        i)
      ) {
        if (
          (E &&
            k.semver.prerelease &&
            k.semver.prerelease.length &&
            k.semver.major === E.major &&
            k.semver.minor === E.minor &&
            k.semver.patch === E.patch &&
            (E = !1),
          k.operator === ">" || k.operator === ">=")
        ) {
          if (((c = Yc(i, k, r)), c === k && c !== i)) return !1;
        } else if (i.operator === ">=" && !kn(i.semver, String(k), r))
          return !1;
      }
      if (s) {
        if (
          (p &&
            k.semver.prerelease &&
            k.semver.prerelease.length &&
            k.semver.major === p.major &&
            k.semver.minor === p.minor &&
            k.semver.patch === p.patch &&
            (p = !1),
          k.operator === "<" || k.operator === "<=")
        ) {
          if (((u = Xc(s, k, r)), u === k && u !== s)) return !1;
        } else if (s.operator === "<=" && !kn(s.semver, String(k), r))
          return !1;
      }
      if (!k.operator && (s || i) && a !== 0) return !1;
    }
    return !((i && d && !s && a !== 0) || (s && g && !i && a !== 0) || E || p);
  },
  Yc = (e, t, r) => {
    if (!e) return t;
    const n = fa(e.semver, t.semver, r);
    return n > 0
      ? e
      : n < 0 || (t.operator === ">" && e.operator === ">=")
      ? t
      : e;
  },
  Xc = (e, t, r) => {
    if (!e) return t;
    const n = fa(e.semver, t.semver, r);
    return n < 0
      ? e
      : n > 0 || (t.operator === "<" && e.operator === "<=")
      ? t
      : e;
  };
var Bm = Pm;
const lo = oi,
  el = vs,
  Dm = st,
  tl = hh,
  Fm = Sn,
  jm = Fg,
  Hm = Ug,
  Um = Vg,
  Wm = zg,
  Vm = Zg,
  qm = Yg,
  zm = t_,
  Gm = i_,
  Jm = St,
  Zm = c_,
  Km = h_,
  Qm = aa,
  Ym = g_,
  Xm = v_,
  ev = ys,
  tv = ca,
  rv = dh,
  nv = fh,
  iv = la,
  sv = ua,
  ov = ph,
  av = H_,
  cv = ws(),
  lv = Rt(),
  uv = Es,
  hv = tm,
  dv = sm,
  fv = lm,
  pv = dm,
  gv = gm,
  _v = ha,
  mv = Mm,
  vv = Im,
  bv = Am,
  yv = Lm,
  wv = Bm;
var Ev = {
  parse: Fm,
  valid: jm,
  clean: Hm,
  inc: Um,
  diff: Wm,
  major: Vm,
  minor: qm,
  patch: zm,
  prerelease: Gm,
  compare: Jm,
  rcompare: Zm,
  compareLoose: Km,
  compareBuild: Qm,
  sort: Ym,
  rsort: Xm,
  gt: ev,
  lt: tv,
  eq: rv,
  neq: nv,
  gte: iv,
  lte: sv,
  cmp: ov,
  coerce: av,
  Comparator: cv,
  Range: lv,
  satisfies: uv,
  toComparators: hv,
  maxSatisfying: dv,
  minSatisfying: fv,
  minVersion: pv,
  validRange: gv,
  outside: _v,
  gtr: mv,
  ltr: vv,
  intersects: bv,
  simplifyRange: yv,
  subset: wv,
  SemVer: Dm,
  re: lo.re,
  src: lo.src,
  tokens: lo.t,
  SEMVER_SPEC_VERSION: el.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: el.RELEASE_TYPES,
  compareIdentifiers: tl.compareIdentifiers,
  rcompareIdentifiers: tl.rcompareIdentifiers,
};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.satisfiesVersionRange =
      e.gtRange =
      e.gtVersion =
      e.assertIsSemVerRange =
      e.assertIsSemVerVersion =
      e.isValidSemVerRange =
      e.isValidSemVerVersion =
      e.VersionRangeStruct =
      e.VersionStruct =
        void 0);
  const t = Ev,
    r = Nr,
    n = tt;
  (e.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (p) =>
    (0, t.valid)(p) === null ? `Expected SemVer version, got "${p}"` : !0
  )),
    (e.VersionRangeStruct = (0, r.refine)(
      (0, r.string)(),
      "Version range",
      (p) =>
        (0, t.validRange)(p) === null ? `Expected SemVer range, got "${p}"` : !0
    ));
  function i(p) {
    return (0, r.is)(p, e.VersionStruct);
  }
  e.isValidSemVerVersion = i;
  function s(p) {
    return (0, r.is)(p, e.VersionRangeStruct);
  }
  e.isValidSemVerRange = s;
  function a(p) {
    (0, n.assertStruct)(p, e.VersionStruct);
  }
  e.assertIsSemVerVersion = a;
  function c(p) {
    (0, n.assertStruct)(p, e.VersionRangeStruct);
  }
  e.assertIsSemVerRange = c;
  function u(p, E) {
    return (0, t.gt)(p, E);
  }
  e.gtVersion = u;
  function d(p, E) {
    return (0, t.gtr)(p, E);
  }
  e.gtRange = d;
  function g(p, E) {
    return (0, t.satisfies)(p, E, { includePrerelease: !0 });
  }
  e.satisfiesVersionRange = g;
})(ch);
(function (e) {
  var t =
      (G && G.__createBinding) ||
      (Object.create
        ? function (n, i, s, a) {
            a === void 0 && (a = s);
            var c = Object.getOwnPropertyDescriptor(i, s);
            (!c ||
              ("get" in c ? !i.__esModule : c.writable || c.configurable)) &&
              (c = {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }),
              Object.defineProperty(n, a, c);
          }
        : function (n, i, s, a) {
            a === void 0 && (a = s), (n[a] = i[s]);
          }),
    r =
      (G && G.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    r(tt, e),
    r(ii, e),
    r(ae, e),
    r(_s, e),
    r(Lt, e),
    r(dn, e),
    r(th, e),
    r(si, e),
    r(rh, e),
    r(nh, e),
    r(fn, e),
    r(ih, e),
    r(Pt, e),
    r(sh, e),
    r(oh, e),
    r(ah, e),
    r(ch, e);
})($u);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.createModuleLogger = e.projectLogger = void 0);
  const t = $u;
  Object.defineProperty(e, "createModuleLogger", {
    enumerable: !0,
    get: function () {
      return t.createModuleLogger;
    },
  }),
    (e.projectLogger = (0, t.createProjectLogger)("eth-block-tracker"));
})(Ou);
var mh =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.PollingBlockTracker = void 0;
const Sv = mh(Ko),
  Rv = mh(z1),
  Mv = ti,
  rl = Ou,
  nl = (0, rl.createModuleLogger)(rl.projectLogger, "polling-block-tracker"),
  kv = (0, Sv.default)(),
  Cv = 1e3;
class Iv extends Mv.BaseBlockTracker {
  constructor(t = {}) {
    var r;
    if (!t.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super(
      Object.assign(Object.assign({}, t), {
        blockResetDuration:
          (r = t.blockResetDuration) !== null && r !== void 0
            ? r
            : t.pollingInterval,
      })
    ),
      (this._provider = t.provider),
      (this._pollingInterval = t.pollingInterval || 20 * Cv),
      (this._retryTimeout = t.retryTimeout || this._pollingInterval / 10),
      (this._keepEventLoopActive =
        t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive),
      (this._setSkipCacheFlag = t.setSkipCacheFlag || !1);
  }
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {}
  async _synchronize() {
    for (var t; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = il(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n =
          new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t = r.stack) !== null && t !== void 0 ? t : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const i = il(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await i;
      }
  }
  async _updateLatestBlock() {
    const t = await this._fetchLatestBlock();
    this._newPotentialLatest(t);
  }
  async _fetchLatestBlock() {
    const t = {
      jsonrpc: "2.0",
      id: kv(),
      method: "eth_blockNumber",
      params: [],
    };
    this._setSkipCacheFlag && (t.skipCache = !0), nl("Making request", t);
    const r = await (0, Rv.default)((n) => this._provider.sendAsync(t, n))();
    if ((nl("Got response", r), r.error))
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
ps.PollingBlockTracker = Iv;
function il(e, t) {
  return new Promise((r) => {
    const n = setTimeout(r, e);
    n.unref && t && n.unref();
  });
}
var Ss = {},
  xv =
    (G && G.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.SubscribeBlockTracker = void 0;
const Av = xv(Ko),
  Tv = ti,
  Nv = (0, Av.default)();
class Lv extends Tv.BaseBlockTracker {
  constructor(t = {}) {
    if (!t.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(t), (this._provider = t.provider), (this._subscriptionId = null);
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const t = await this._call("eth_blockNumber");
        (this._subscriptionId = await this._call("eth_subscribe", "newHeads")),
          this._provider.on("data", this._handleSubData.bind(this)),
          this._newPotentialLatest(t);
      } catch (t) {
        this.emit("error", t);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId),
          (this._subscriptionId = null);
      } catch (t) {
        this.emit("error", t);
      }
  }
  _call(t, ...r) {
    return new Promise((n, i) => {
      this._provider.sendAsync(
        { id: Nv(), method: t, params: r, jsonrpc: "2.0" },
        (s, a) => {
          s ? i(s) : n(a.result);
        }
      );
    });
  }
  _handleSubData(t, r) {
    var n;
    r.method === "eth_subscription" &&
      ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) ===
        this._subscriptionId &&
      this._newPotentialLatest(r.params.result.number);
  }
}
Ss.SubscribeBlockTracker = Lv;
(function (e) {
  var t =
      (G && G.__createBinding) ||
      (Object.create
        ? function (n, i, s, a) {
            a === void 0 && (a = s),
              Object.defineProperty(n, a, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (n, i, s, a) {
            a === void 0 && (a = s), (n[a] = i[s]);
          }),
    r =
      (G && G.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(ps, e), r(Ss, e);
})(Pu);
var pa = {},
  Rs = {},
  ai = {};
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.getUniqueId = void 0;
const vh = 4294967295;
let uo = Math.floor(Math.random() * vh);
function Pv() {
  return (uo = (uo + 1) % vh), uo;
}
ai.getUniqueId = Pv;
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.createIdRemapMiddleware = void 0;
const Ov = ai;
function $v() {
  return (e, t, r, n) => {
    const i = e.id,
      s = Ov.getUniqueId();
    (e.id = s),
      (t.id = s),
      r((a) => {
        (e.id = i), (t.id = i), a();
      });
  };
}
Rs.createIdRemapMiddleware = $v;
var Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.createAsyncMiddleware = void 0;
function Bv(e) {
  return async (t, r, n, i) => {
    let s;
    const a = new Promise((g) => {
      s = g;
    });
    let c = null,
      u = !1;
    const d = async () => {
      (u = !0),
        n((g) => {
          (c = g), s();
        }),
        await a;
    };
    try {
      await e(t, r, d), u ? (await a, c(null)) : i(null);
    } catch (g) {
      c ? c(g) : i(g);
    }
  };
}
Ms.createAsyncMiddleware = Bv;
var ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.createScaffoldMiddleware = void 0;
function Dv(e) {
  return (t, r, n, i) => {
    const s = e[t.method];
    return s === void 0
      ? n()
      : typeof s == "function"
      ? s(t, r, n, i)
      : ((r.result = s), i());
  };
}
ks.createScaffoldMiddleware = Dv;
var ci = {},
  ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
const Fv = Oi;
function sl(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function jv(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let Hv = class extends Fv.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const i = this._events;
    if (i !== void 0) n = n && i.error === void 0;
    else if (!n) return !1;
    if (n) {
      let a;
      if ((r.length > 0 && ([a] = r), a instanceof Error)) throw a;
      const c = new Error(`Unhandled error.${a ? ` (${a.message})` : ""}`);
      throw ((c.context = a), c);
    }
    const s = i[t];
    if (s === void 0) return !1;
    if (typeof s == "function") sl(s, this, r);
    else {
      const a = s.length,
        c = jv(s);
      for (let u = 0; u < a; u += 1) sl(c[u], this, r);
    }
    return !0;
  }
};
ga.default = Hv;
var bh = {},
  Zt = {},
  Uv = Bn;
Bn.default = Bn;
Bn.stable = Eh;
Bn.stableStringify = Eh;
var Li = "[...]",
  yh = "[Circular]",
  Mr = [],
  wr = [];
function wh() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER,
  };
}
function Bn(e, t, r, n) {
  typeof n > "u" && (n = wh()), xo(e, "", 0, [], void 0, 0, n);
  var i;
  try {
    wr.length === 0
      ? (i = JSON.stringify(e, t, r))
      : (i = JSON.stringify(e, Sh(t), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; Mr.length !== 0; ) {
      var s = Mr.pop();
      s.length === 4
        ? Object.defineProperty(s[0], s[1], s[3])
        : (s[0][s[1]] = s[2]);
    }
  }
  return i;
}
function nn(e, t, r, n) {
  var i = Object.getOwnPropertyDescriptor(n, r);
  i.get !== void 0
    ? i.configurable
      ? (Object.defineProperty(n, r, { value: e }), Mr.push([n, r, t, i]))
      : wr.push([t, r, e])
    : ((n[r] = e), Mr.push([n, r, t]));
}
function xo(e, t, r, n, i, s, a) {
  s += 1;
  var c;
  if (typeof e == "object" && e !== null) {
    for (c = 0; c < n.length; c++)
      if (n[c] === e) {
        nn(yh, e, t, i);
        return;
      }
    if (typeof a.depthLimit < "u" && s > a.depthLimit) {
      nn(Li, e, t, i);
      return;
    }
    if (typeof a.edgesLimit < "u" && r + 1 > a.edgesLimit) {
      nn(Li, e, t, i);
      return;
    }
    if ((n.push(e), Array.isArray(e)))
      for (c = 0; c < e.length; c++) xo(e[c], c, c, n, e, s, a);
    else {
      var u = Object.keys(e);
      for (c = 0; c < u.length; c++) {
        var d = u[c];
        xo(e[d], d, c, n, e, s, a);
      }
    }
    n.pop();
  }
}
function Wv(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Eh(e, t, r, n) {
  typeof n > "u" && (n = wh());
  var i = Ao(e, "", 0, [], void 0, 0, n) || e,
    s;
  try {
    wr.length === 0
      ? (s = JSON.stringify(i, t, r))
      : (s = JSON.stringify(i, Sh(t), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; Mr.length !== 0; ) {
      var a = Mr.pop();
      a.length === 4
        ? Object.defineProperty(a[0], a[1], a[3])
        : (a[0][a[1]] = a[2]);
    }
  }
  return s;
}
function Ao(e, t, r, n, i, s, a) {
  s += 1;
  var c;
  if (typeof e == "object" && e !== null) {
    for (c = 0; c < n.length; c++)
      if (n[c] === e) {
        nn(yh, e, t, i);
        return;
      }
    try {
      if (typeof e.toJSON == "function") return;
    } catch {
      return;
    }
    if (typeof a.depthLimit < "u" && s > a.depthLimit) {
      nn(Li, e, t, i);
      return;
    }
    if (typeof a.edgesLimit < "u" && r + 1 > a.edgesLimit) {
      nn(Li, e, t, i);
      return;
    }
    if ((n.push(e), Array.isArray(e)))
      for (c = 0; c < e.length; c++) Ao(e[c], c, c, n, e, s, a);
    else {
      var u = {},
        d = Object.keys(e).sort(Wv);
      for (c = 0; c < d.length; c++) {
        var g = d[c];
        Ao(e[g], g, c, n, e, s, a), (u[g] = e[g]);
      }
      if (typeof i < "u") Mr.push([i, t, e]), (i[t] = u);
      else return u;
    }
    n.pop();
  }
}
function Sh(e) {
  return (
    (e =
      typeof e < "u"
        ? e
        : function (t, r) {
            return r;
          }),
    function (t, r) {
      if (wr.length > 0)
        for (var n = 0; n < wr.length; n++) {
          var i = wr[n];
          if (i[1] === t && i[0] === r) {
            (r = i[2]), wr.splice(n, 1);
            break;
          }
        }
      return e.call(this, t, r);
    }
  );
}
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.EthereumProviderError = Zt.EthereumRpcError = void 0;
const Vv = Uv;
class Rh extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), (this.code = t), n !== void 0 && (this.data = n);
  }
  serialize() {
    const t = { code: this.code, message: this.message };
    return (
      this.data !== void 0 && (t.data = this.data),
      this.stack && (t.stack = this.stack),
      t
    );
  }
  toString() {
    return Vv.default(this.serialize(), Gv, 2);
  }
}
Zt.EthereumRpcError = Rh;
class qv extends Rh {
  constructor(t, r, n) {
    if (!zv(t))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(t, r, n);
  }
}
Zt.EthereumProviderError = qv;
function zv(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function Gv(e, t) {
  if (t !== "[Circular]") return t;
}
var _a = {},
  Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.errorValues = Kt.errorCodes = void 0;
Kt.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
  },
};
Kt.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.serializeError =
      e.isValidCode =
      e.getMessageFromCode =
      e.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const t = Kt,
    r = Zt,
    n = t.errorCodes.rpc.internal,
    i = "Unspecified error message. This is a bug, please report it.",
    s = { code: n, message: a(n) };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function a(E, k = i) {
    if (Number.isInteger(E)) {
      const A = E.toString();
      if (p(t.errorValues, A)) return t.errorValues[A].message;
      if (d(E)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return k;
  }
  e.getMessageFromCode = a;
  function c(E) {
    if (!Number.isInteger(E)) return !1;
    const k = E.toString();
    return !!(t.errorValues[k] || d(E));
  }
  e.isValidCode = c;
  function u(E, { fallbackError: k = s, shouldIncludeStack: A = !1 } = {}) {
    var O, L;
    if (!k || !Number.isInteger(k.code) || typeof k.message != "string")
      throw new Error(
        "Must provide fallback error with integer number code and string message."
      );
    if (E instanceof r.EthereumRpcError) return E.serialize();
    const M = {};
    if (
      E &&
      typeof E == "object" &&
      !Array.isArray(E) &&
      p(E, "code") &&
      c(E.code)
    ) {
      const N = E;
      (M.code = N.code),
        N.message && typeof N.message == "string"
          ? ((M.message = N.message), p(N, "data") && (M.data = N.data))
          : ((M.message = a(M.code)), (M.data = { originalError: g(E) }));
    } else {
      M.code = k.code;
      const N = (O = E) === null || O === void 0 ? void 0 : O.message;
      (M.message = N && typeof N == "string" ? N : k.message),
        (M.data = { originalError: g(E) });
    }
    const I = (L = E) === null || L === void 0 ? void 0 : L.stack;
    return A && E && I && typeof I == "string" && (M.stack = I), M;
  }
  e.serializeError = u;
  function d(E) {
    return E >= -32099 && E <= -32e3;
  }
  function g(E) {
    return E && typeof E == "object" && !Array.isArray(E)
      ? Object.assign({}, E)
      : E;
  }
  function p(E, k) {
    return Object.prototype.hasOwnProperty.call(E, k);
  }
})(_a);
var Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.ethErrors = void 0;
const ma = Zt,
  Mh = _a,
  rt = Kt;
Cs.ethErrors = {
  rpc: {
    parse: (e) => ft(rt.errorCodes.rpc.parse, e),
    invalidRequest: (e) => ft(rt.errorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => ft(rt.errorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => ft(rt.errorCodes.rpc.methodNotFound, e),
    internal: (e) => ft(rt.errorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return ft(t, e);
    },
    invalidInput: (e) => ft(rt.errorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => ft(rt.errorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => ft(rt.errorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => ft(rt.errorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => ft(rt.errorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => ft(rt.errorCodes.rpc.limitExceeded, e),
  },
  provider: {
    userRejectedRequest: (e) =>
      Cn(rt.errorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => Cn(rt.errorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => Cn(rt.errorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => Cn(rt.errorCodes.provider.disconnected, e),
    chainDisconnected: (e) => Cn(rt.errorCodes.provider.chainDisconnected, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new ma.EthereumProviderError(t, r, n);
    },
  },
};
function ft(e, t) {
  const [r, n] = kh(t);
  return new ma.EthereumRpcError(e, r || Mh.getMessageFromCode(e), n);
}
function Cn(e, t) {
  const [r, n] = kh(t);
  return new ma.EthereumProviderError(e, r || Mh.getMessageFromCode(e), n);
}
function kh(e) {
  if (e) {
    if (typeof e == "string") return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getMessageFromCode =
      e.serializeError =
      e.EthereumProviderError =
      e.EthereumRpcError =
      e.ethErrors =
      e.errorCodes =
        void 0);
  const t = Zt;
  Object.defineProperty(e, "EthereumRpcError", {
    enumerable: !0,
    get: function () {
      return t.EthereumRpcError;
    },
  }),
    Object.defineProperty(e, "EthereumProviderError", {
      enumerable: !0,
      get: function () {
        return t.EthereumProviderError;
      },
    });
  const r = _a;
  Object.defineProperty(e, "serializeError", {
    enumerable: !0,
    get: function () {
      return r.serializeError;
    },
  }),
    Object.defineProperty(e, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return r.getMessageFromCode;
      },
    });
  const n = Cs;
  Object.defineProperty(e, "ethErrors", {
    enumerable: !0,
    get: function () {
      return n.ethErrors;
    },
  });
  const i = Kt;
  Object.defineProperty(e, "errorCodes", {
    enumerable: !0,
    get: function () {
      return i.errorCodes;
    },
  });
})(bh);
var Jv =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ci, "__esModule", { value: !0 });
ci.JsonRpcEngine = void 0;
const Zv = Jv(ga),
  pt = bh;
class Bt extends Zv.default {
  constructor() {
    super(), (this._middleware = []);
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t)
      ? r
        ? this._handleBatch(t, r)
        : this._handleBatch(t)
      : r
      ? this._handle(t, r)
      : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, r, n, i) => {
      try {
        const [s, a, c] = await Bt._runAllMiddleware(t, r, this._middleware);
        return a
          ? (await Bt._runReturnHandlers(c), i(s))
          : n(async (u) => {
              try {
                await Bt._runReturnHandlers(c);
              } catch (d) {
                return u(d);
              }
              return u();
            });
      } catch (s) {
        return i(s);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
      return r ? r(null, n) : n;
    } catch (n) {
      if (r) return r(n);
      throw n;
    }
  }
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (n, i) => {
        r(i);
      });
    });
  }
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const a = new pt.EthereumRpcError(
        pt.errorCodes.rpc.invalidRequest,
        `Requests must be plain objects. Received: ${typeof t}`,
        { request: t }
      );
      return r(a, { id: void 0, jsonrpc: "2.0", error: a });
    }
    if (typeof t.method != "string") {
      const a = new pt.EthereumRpcError(
        pt.errorCodes.rpc.invalidRequest,
        `Must specify a string method. Received: ${typeof t.method}`,
        { request: t }
      );
      return r(a, { id: t.id, jsonrpc: "2.0", error: a });
    }
    const n = Object.assign({}, t),
      i = { id: n.id, jsonrpc: n.jsonrpc };
    let s = null;
    try {
      await this._processRequest(n, i);
    } catch (a) {
      s = a;
    }
    return (
      s && (delete i.result, i.error || (i.error = pt.serializeError(s))),
      r(s, i)
    );
  }
  async _processRequest(t, r) {
    const [n, i, s] = await Bt._runAllMiddleware(t, r, this._middleware);
    if ((Bt._checkForCompletion(t, r, i), await Bt._runReturnHandlers(s), n))
      throw n;
  }
  static async _runAllMiddleware(t, r, n) {
    const i = [];
    let s = null,
      a = !1;
    for (const c of n)
      if ((([s, a] = await Bt._runMiddleware(t, r, c, i)), a)) break;
    return [s, a, i.reverse()];
  }
  static _runMiddleware(t, r, n, i) {
    return new Promise((s) => {
      const a = (u) => {
          const d = u || r.error;
          d && (r.error = pt.serializeError(d)), s([d, !0]);
        },
        c = (u) => {
          r.error
            ? a(r.error)
            : (u &&
                (typeof u != "function" &&
                  a(
                    new pt.EthereumRpcError(
                      pt.errorCodes.rpc.internal,
                      `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof u}" for request:
${ho(t)}`,
                      { request: t }
                    )
                  ),
                i.push(u)),
              s([null, !1]));
        };
      try {
        n(t, r, c, a);
      } catch (u) {
        a(u);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((n, i) => {
        r((s) => (s ? i(s) : n()));
      });
  }
  static _checkForCompletion(t, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new pt.EthereumRpcError(
        pt.errorCodes.rpc.internal,
        `JsonRpcEngine: Response has no error or result for request:
${ho(t)}`,
        { request: t }
      );
    if (!n)
      throw new pt.EthereumRpcError(
        pt.errorCodes.rpc.internal,
        `JsonRpcEngine: Nothing ended request:
${ho(t)}`,
        { request: t }
      );
  }
}
ci.JsonRpcEngine = Bt;
function ho(e) {
  return JSON.stringify(e, null, 2);
}
var Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.mergeMiddleware = void 0;
const Kv = ci;
function Qv(e) {
  const t = new Kv.JsonRpcEngine();
  return e.forEach((r) => t.push(r)), t.asMiddleware();
}
Is.mergeMiddleware = Qv;
(function (e) {
  var t =
      (G && G.__createBinding) ||
      (Object.create
        ? function (n, i, s, a) {
            a === void 0 && (a = s),
              Object.defineProperty(n, a, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (n, i, s, a) {
            a === void 0 && (a = s), (n[a] = i[s]);
          }),
    r =
      (G && G.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    r(Rs, e),
    r(Ms, e),
    r(ks, e),
    r(ai, e),
    r(ci, e),
    r(Is, e);
})(pa);
var Ch = {},
  va = {};
const ba = pn(Lh);
var xs = {};
Object.defineProperty(xs, "__esModule", { value: !0 });
var ol = ba,
  Yv = (function () {
    function e(t) {
      if (((this._maxConcurrency = t), (this._queue = []), t <= 0))
        throw new Error("semaphore must be initialized to a positive value");
      this._value = t;
    }
    return (
      (e.prototype.acquire = function () {
        var t = this,
          r = this.isLocked(),
          n = new Promise(function (i) {
            return t._queue.push(i);
          });
        return r || this._dispatch(), n;
      }),
      (e.prototype.runExclusive = function (t) {
        return ol.__awaiter(this, void 0, void 0, function () {
          var r, n, i;
          return ol.__generator(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.acquire()];
              case 1:
                (r = s.sent()), (n = r[0]), (i = r[1]), (s.label = 2);
              case 2:
                return s.trys.push([2, , 4, 5]), [4, t(n)];
              case 3:
                return [2, s.sent()];
              case 4:
                return i(), [7];
              case 5:
                return [2];
            }
          });
        });
      }),
      (e.prototype.isLocked = function () {
        return this._value <= 0;
      }),
      (e.prototype.release = function () {
        if (this._maxConcurrency > 1)
          throw new Error(
            "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
          );
        if (this._currentReleaser) {
          var t = this._currentReleaser;
          (this._currentReleaser = void 0), t();
        }
      }),
      (e.prototype._dispatch = function () {
        var t = this,
          r = this._queue.shift();
        if (r) {
          var n = !1;
          (this._currentReleaser = function () {
            n || ((n = !0), t._value++, t._dispatch());
          }),
            r([this._value--, this._currentReleaser]);
        }
      }),
      e
    );
  })();
xs.default = Yv;
Object.defineProperty(va, "__esModule", { value: !0 });
var al = ba,
  Xv = xs,
  eb = (function () {
    function e() {
      this._semaphore = new Xv.default(1);
    }
    return (
      (e.prototype.acquire = function () {
        return al.__awaiter(this, void 0, void 0, function () {
          var t, r;
          return al.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this._semaphore.acquire()];
              case 1:
                return (t = n.sent()), (r = t[1]), [2, r];
            }
          });
        });
      }),
      (e.prototype.runExclusive = function (t) {
        return this._semaphore.runExclusive(function () {
          return t();
        });
      }),
      (e.prototype.isLocked = function () {
        return this._semaphore.isLocked();
      }),
      (e.prototype.release = function () {
        this._semaphore.release();
      }),
      e
    );
  })();
va.default = eb;
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
As.withTimeout = void 0;
var Si = ba;
function tb(e, t, r) {
  var n = this;
  return (
    r === void 0 && (r = new Error("timeout")),
    {
      acquire: function () {
        return new Promise(function (i, s) {
          return Si.__awaiter(n, void 0, void 0, function () {
            var a, c, u;
            return Si.__generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (a = !1),
                    setTimeout(function () {
                      (a = !0), s(r);
                    }, t),
                    [4, e.acquire()]
                  );
                case 1:
                  return (
                    (c = d.sent()),
                    a ? ((u = Array.isArray(c) ? c[1] : c), u()) : i(c),
                    [2]
                  );
              }
            });
          });
        });
      },
      runExclusive: function (i) {
        return Si.__awaiter(this, void 0, void 0, function () {
          var s, a;
          return Si.__generator(this, function (c) {
            switch (c.label) {
              case 0:
                (s = function () {}), (c.label = 1);
              case 1:
                return c.trys.push([1, , 7, 8]), [4, this.acquire()];
              case 2:
                return (
                  (a = c.sent()),
                  Array.isArray(a) ? ((s = a[1]), [4, i(a[0])]) : [3, 4]
                );
              case 3:
                return [2, c.sent()];
              case 4:
                return (s = a), [4, i()];
              case 5:
                return [2, c.sent()];
              case 6:
                return [3, 8];
              case 7:
                return s(), [7];
              case 8:
                return [2];
            }
          });
        });
      },
      release: function () {
        e.release();
      },
      isLocked: function () {
        return e.isLocked();
      },
    }
  );
}
As.withTimeout = tb;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.withTimeout = e.Semaphore = e.Mutex = void 0);
  var t = va;
  Object.defineProperty(e, "Mutex", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  });
  var r = xs;
  Object.defineProperty(e, "Semaphore", {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  });
  var n = As;
  Object.defineProperty(e, "withTimeout", {
    enumerable: !0,
    get: function () {
      return n.withTimeout;
    },
  });
})(Ch);
var rb = ib,
  nb = Object.prototype.hasOwnProperty;
function ib() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r) nb.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
const sb = rb,
  ob = Ko();
var ab = Y;
function Y(e) {
  const t = this;
  t.currentProvider = e;
}
Y.prototype.getBalance = li(2, "eth_getBalance");
Y.prototype.getCode = li(2, "eth_getCode");
Y.prototype.getTransactionCount = li(2, "eth_getTransactionCount");
Y.prototype.getStorageAt = li(3, "eth_getStorageAt");
Y.prototype.call = li(2, "eth_call");
Y.prototype.protocolVersion = ne("eth_protocolVersion");
Y.prototype.syncing = ne("eth_syncing");
Y.prototype.coinbase = ne("eth_coinbase");
Y.prototype.mining = ne("eth_mining");
Y.prototype.hashrate = ne("eth_hashrate");
Y.prototype.gasPrice = ne("eth_gasPrice");
Y.prototype.accounts = ne("eth_accounts");
Y.prototype.blockNumber = ne("eth_blockNumber");
Y.prototype.getBlockTransactionCountByHash = ne(
  "eth_getBlockTransactionCountByHash"
);
Y.prototype.getBlockTransactionCountByNumber = ne(
  "eth_getBlockTransactionCountByNumber"
);
Y.prototype.getUncleCountByBlockHash = ne("eth_getUncleCountByBlockHash");
Y.prototype.getUncleCountByBlockNumber = ne("eth_getUncleCountByBlockNumber");
Y.prototype.sign = ne("eth_sign");
Y.prototype.sendTransaction = ne("eth_sendTransaction");
Y.prototype.sendRawTransaction = ne("eth_sendRawTransaction");
Y.prototype.estimateGas = ne("eth_estimateGas");
Y.prototype.getBlockByHash = ne("eth_getBlockByHash");
Y.prototype.getBlockByNumber = ne("eth_getBlockByNumber");
Y.prototype.getTransactionByHash = ne("eth_getTransactionByHash");
Y.prototype.getTransactionByBlockHashAndIndex = ne(
  "eth_getTransactionByBlockHashAndIndex"
);
Y.prototype.getTransactionByBlockNumberAndIndex = ne(
  "eth_getTransactionByBlockNumberAndIndex"
);
Y.prototype.getTransactionReceipt = ne("eth_getTransactionReceipt");
Y.prototype.getUncleByBlockHashAndIndex = ne("eth_getUncleByBlockHashAndIndex");
Y.prototype.getUncleByBlockNumberAndIndex = ne(
  "eth_getUncleByBlockNumberAndIndex"
);
Y.prototype.getCompilers = ne("eth_getCompilers");
Y.prototype.compileLLL = ne("eth_compileLLL");
Y.prototype.compileSolidity = ne("eth_compileSolidity");
Y.prototype.compileSerpent = ne("eth_compileSerpent");
Y.prototype.newFilter = ne("eth_newFilter");
Y.prototype.newBlockFilter = ne("eth_newBlockFilter");
Y.prototype.newPendingTransactionFilter = ne("eth_newPendingTransactionFilter");
Y.prototype.uninstallFilter = ne("eth_uninstallFilter");
Y.prototype.getFilterChanges = ne("eth_getFilterChanges");
Y.prototype.getFilterLogs = ne("eth_getFilterLogs");
Y.prototype.getLogs = ne("eth_getLogs");
Y.prototype.getWork = ne("eth_getWork");
Y.prototype.submitWork = ne("eth_submitWork");
Y.prototype.submitHashrate = ne("eth_submitHashrate");
Y.prototype.sendAsync = function (e, t) {
  this.currentProvider.sendAsync(cb(e), function (n, i) {
    if (
      (!n &&
        i.error &&
        (n = new Error("EthQuery - RPC Error - " + i.error.message)),
      n)
    )
      return t(n);
    t(null, i.result);
  });
};
function ne(e) {
  return function () {
    const t = this;
    var r = [].slice.call(arguments),
      n = r.pop();
    t.sendAsync({ method: e, params: r }, n);
  };
}
function li(e, t) {
  return function () {
    const r = this;
    var n = [].slice.call(arguments),
      i = n.pop();
    n.length < e && n.push("latest"), r.sendAsync({ method: t, params: n }, i);
  };
}
function cb(e) {
  return sb({ id: ob(), jsonrpc: "2.0", params: [] }, e);
}
const cl = (e, t, r, n) =>
    function (...i) {
      const s = t.promiseModule;
      return new s((a, c) => {
        t.multiArgs
          ? i.push((...d) => {
              t.errorFirst ? (d[0] ? c(d) : (d.shift(), a(d))) : a(d);
            })
          : t.errorFirst
          ? i.push((d, g) => {
              d ? c(d) : a(g);
            })
          : i.push(a),
          Reflect.apply(e, this === r ? n : this, i);
      });
    },
  ll = new WeakMap();
var lb = (e, t) => {
  t = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...t,
  };
  const r = typeof e;
  if (!(e !== null && (r === "object" || r === "function")))
    throw new TypeError(
      `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
        e === null ? "null" : r
      }\``
    );
  const n = (a, c) => {
      let u = ll.get(a);
      if ((u || ((u = {}), ll.set(a, u)), c in u)) return u[c];
      const d = (A) =>
          typeof A == "string" || typeof c == "symbol" ? c === A : A.test(c),
        g = Reflect.getOwnPropertyDescriptor(a, c),
        p = g === void 0 || g.writable || g.configurable,
        k = (t.include ? t.include.some(d) : !t.exclude.some(d)) && p;
      return (u[c] = k), k;
    },
    i = new WeakMap(),
    s = new Proxy(e, {
      apply(a, c, u) {
        const d = i.get(a);
        if (d) return Reflect.apply(d, c, u);
        const g = t.excludeMain ? a : cl(a, t, s, a);
        return i.set(a, g), Reflect.apply(g, c, u);
      },
      get(a, c) {
        const u = a[c];
        if (!n(a, c) || u === Function.prototype[c]) return u;
        const d = i.get(u);
        if (d) return d;
        if (typeof u == "function") {
          const g = cl(u, t, s, a);
          return i.set(u, g), g;
        }
        return u;
      },
    });
  return s;
};
const ub = ri.default;
let hb = class extends ub {
  constructor() {
    super(), (this.updates = []);
  }
  async initialize() {}
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(t) {
    (this.updates = this.updates.concat(t)),
      t.forEach((r) => this.emit("update", r));
  }
  addInitialResults(t) {}
  getChangesAndClear() {
    const t = this.updates;
    return (this.updates = []), t;
  }
};
var ya = hb;
const db = ya;
let fb = class extends db {
  constructor() {
    super(), (this.allResults = []);
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(t) {
    (this.allResults = this.allResults.concat(t)), super.addResults(t);
  }
  addInitialResults(t) {
    (this.allResults = this.allResults.concat(t)), super.addInitialResults(t);
  }
  getAllResults() {
    return this.allResults;
  }
};
var pb = fb,
  ui = {
    minBlockRef: gb,
    maxBlockRef: _b,
    sortBlockRefs: wa,
    bnToHex: mb,
    blockRefIsNumber: vb,
    hexToInt: Pi,
    incrementHexInt: bb,
    intToHex: Ih,
    unsafeRandomBytes: yb,
  };
function gb(...e) {
  return wa(e)[0];
}
function _b(...e) {
  const t = wa(e);
  return t[t.length - 1];
}
function wa(e) {
  return e.sort((t, r) =>
    t === "latest" || r === "earliest"
      ? 1
      : r === "latest" || t === "earliest"
      ? -1
      : Pi(t) - Pi(r)
  );
}
function mb(e) {
  return "0x" + e.toString(16);
}
function vb(e) {
  return e && !["earliest", "latest", "pending"].includes(e);
}
function Pi(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function bb(e) {
  if (e == null) return e;
  const t = Pi(e);
  return Ih(t + 1);
}
function Ih(e) {
  if (e == null) return e;
  let t = e.toString(16);
  return t.length % 2 && (t = "0" + t), "0x" + t;
}
function yb(e) {
  let t = "0x";
  for (let r = 0; r < e; r++) (t += ul()), (t += ul());
  return t;
}
function ul() {
  return Math.floor(Math.random() * 16).toString(16);
}
const wb = ab,
  Eb = lb,
  Sb = pb,
  {
    bnToHex: $y,
    hexToInt: Ri,
    incrementHexInt: Rb,
    minBlockRef: Mb,
    blockRefIsNumber: kb,
  } = ui;
let Cb = class extends Sb {
  constructor({ provider: t, params: r }) {
    super(),
      (this.type = "log"),
      (this.ethQuery = new wb(t)),
      (this.params = Object.assign(
        { fromBlock: "latest", toBlock: "latest", address: void 0, topics: [] },
        r
      )),
      this.params.address &&
        (Array.isArray(this.params.address) ||
          (this.params.address = [this.params.address]),
        (this.params.address = this.params.address.map((n) =>
          n.toLowerCase()
        )));
  }
  async initialize({ currentBlock: t }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = t),
      r === "earliest" && (r = "0x0"),
      (this.params.fromBlock = r);
    const n = Mb(this.params.toBlock, t),
      i = Object.assign({}, this.params, { toBlock: n }),
      s = await this._fetchLogs(i);
    this.addInitialResults(s);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r;
    let i;
    t ? (i = Rb(t)) : (i = r);
    const s = Object.assign({}, this.params, { fromBlock: i, toBlock: n }),
      c = (await this._fetchLogs(s)).filter((u) => this.matchLog(u));
    this.addResults(c);
  }
  async _fetchLogs(t) {
    return await Eb((n) => this.ethQuery.getLogs(t, n))();
  }
  matchLog(t) {
    if (
      Ri(this.params.fromBlock) >= Ri(t.blockNumber) ||
      (kb(this.params.toBlock) && Ri(this.params.toBlock) <= Ri(t.blockNumber))
    )
      return !1;
    const r = t.address && t.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r)
      ? !1
      : this.params.topics.every((i, s) => {
          let a = t.topics[s];
          if (!a) return !1;
          a = a.toLowerCase();
          let c = Array.isArray(i) ? i : [i];
          return c.includes(null)
            ? !0
            : ((c = c.map((g) => g.toLowerCase())), c.includes(a));
        });
  }
};
var Ib = Cb,
  Ea = xb;
async function xb({ provider: e, fromBlock: t, toBlock: r }) {
  t || (t = r);
  const n = hl(t),
    s = hl(r) - n + 1,
    a = Array(s)
      .fill()
      .map((u, d) => n + d)
      .map(Ab);
  let c = await Promise.all(
    a.map((u) => Nb(e, "eth_getBlockByNumber", [u, !1]))
  );
  return (c = c.filter((u) => u !== null)), c;
}
function hl(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function Ab(e) {
  return e == null ? e : "0x" + e.toString(16);
}
function Tb(e, t) {
  return new Promise((r, n) => {
    e.sendAsync(t, (i, s) => {
      i
        ? n(i)
        : s.error
        ? n(s.error)
        : s.result
        ? r(s.result)
        : n(new Error("Result was empty"));
    });
  });
}
async function Nb(e, t, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await Tb(e, { id: 1, jsonrpc: "2.0", method: t, params: r });
    } catch (i) {
      console.error(`provider.sendAsync failed: ${i.stack || i.message || i}`);
    }
  return null;
}
const Lb = ya,
  Pb = Ea,
  { incrementHexInt: Ob } = ui;
let $b = class extends Lb {
  constructor({ provider: t, params: r }) {
    super(), (this.type = "block"), (this.provider = t);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r,
      i = Ob(t),
      a = (await Pb({ provider: this.provider, fromBlock: i, toBlock: n })).map(
        (c) => c.hash
      );
    this.addResults(a);
  }
};
var Bb = $b;
const Db = ya,
  Fb = Ea,
  { incrementHexInt: jb } = ui;
let Hb = class extends Db {
  constructor({ provider: t }) {
    super(), (this.type = "tx"), (this.provider = t);
  }
  async update({ oldBlock: t }) {
    const r = t,
      n = jb(t),
      i = await Fb({ provider: this.provider, fromBlock: n, toBlock: r }),
      s = [];
    for (const a of i) s.push(...a.transactions);
    this.addResults(s);
  }
};
var Ub = Hb;
const Wb = Ch.Mutex,
  { createAsyncMiddleware: Vb, createScaffoldMiddleware: qb } = pa,
  zb = Ib,
  Gb = Bb,
  Jb = Ub,
  { intToHex: xh, hexToInt: fo } = ui;
var Zb = Kb;
function Kb({ blockTracker: e, provider: t }) {
  let r = 0,
    n = {};
  const i = new Wb(),
    s = Qb({ mutex: i }),
    a = qb({
      eth_newFilter: s(po(u)),
      eth_newBlockFilter: s(po(d)),
      eth_newPendingTransactionFilter: s(po(g)),
      eth_uninstallFilter: s(xi(k)),
      eth_getFilterChanges: s(xi(p)),
      eth_getFilterLogs: s(xi(E)),
    }),
    c = async ({ oldBlock: I, newBlock: N }) => {
      if (n.length === 0) return;
      const B = await i.acquire();
      try {
        await Promise.all(
          Kr(n).map(async (P) => {
            try {
              await P.update({ oldBlock: I, newBlock: N });
            } catch (F) {
              console.error(F);
            }
          })
        );
      } catch (P) {
        console.error(P);
      }
      B();
    };
  return (
    (a.newLogFilter = u),
    (a.newBlockFilter = d),
    (a.newPendingTransactionFilter = g),
    (a.uninstallFilter = k),
    (a.getFilterChanges = p),
    (a.getFilterLogs = E),
    (a.destroy = () => {
      L();
    }),
    a
  );
  async function u(I) {
    const N = new zb({ provider: t, params: I });
    return await A(N), N;
  }
  async function d() {
    const I = new Gb({ provider: t });
    return await A(I), I;
  }
  async function g() {
    const I = new Jb({ provider: t });
    return await A(I), I;
  }
  async function p(I) {
    const N = fo(I),
      B = n[N];
    if (!B) throw new Error(`No filter for index "${N}"`);
    return B.getChangesAndClear();
  }
  async function E(I) {
    const N = fo(I),
      B = n[N];
    if (!B) throw new Error(`No filter for index "${N}"`);
    let P = [];
    return B.type === "log" && (P = B.getAllResults()), P;
  }
  async function k(I) {
    const N = fo(I),
      P = !!n[N];
    return P && (await O(N)), P;
  }
  async function A(I) {
    const N = Kr(n).length,
      B = await e.getLatestBlock();
    await I.initialize({ currentBlock: B }),
      r++,
      (n[r] = I),
      (I.id = r),
      (I.idHex = xh(r));
    const P = Kr(n).length;
    return M({ prevFilterCount: N, newFilterCount: P }), r;
  }
  async function O(I) {
    const N = Kr(n).length;
    delete n[I];
    const B = Kr(n).length;
    M({ prevFilterCount: N, newFilterCount: B });
  }
  async function L() {
    const I = Kr(n).length;
    (n = {}), M({ prevFilterCount: I, newFilterCount: 0 });
  }
  function M({ prevFilterCount: I, newFilterCount: N }) {
    if (I === 0 && N > 0) {
      e.on("sync", c);
      return;
    }
    if (I > 0 && N === 0) {
      e.removeListener("sync", c);
      return;
    }
  }
}
function po(e) {
  return xi(async (...t) => {
    const r = await e(...t);
    return xh(r.id);
  });
}
function xi(e) {
  return Vb(async (t, r) => {
    const n = await e.apply(null, t.params);
    r.result = n;
  });
}
function Qb({ mutex: e }) {
  return (t) => async (r, n, i, s) => {
    (await e.acquire())(), t(r, n, i, s);
  };
}
function Kr(e, t) {
  const r = [];
  for (let n in e) r.push(e[n]);
  return r;
}
const Yb = ri.default,
  { createAsyncMiddleware: dl, createScaffoldMiddleware: Xb } = pa,
  ey = Zb,
  { unsafeRandomBytes: ty, incrementHexInt: ry } = ui,
  ny = Ea;
var iy = sy;
function sy({ blockTracker: e, provider: t }) {
  const r = {},
    n = ey({ blockTracker: e, provider: t });
  let i = !1;
  const s = new Yb(),
    a = Xb({ eth_subscribe: dl(c), eth_unsubscribe: dl(u) });
  return (a.destroy = g), { events: s, middleware: a };
  async function c(p, E) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const k = p.params[0],
      A = ty(16);
    let O;
    switch (k) {
      case "newHeads":
        O = L({ subId: A });
        break;
      case "logs":
        const I = p.params[1],
          N = await n.newLogFilter(I);
        O = M({ subId: A, filter: N });
        break;
      default:
        throw new Error(
          `SubscriptionManager - unsupported subscription type "${k}"`
        );
    }
    (r[A] = O), (E.result = A);
    return;
    function L({ subId: I }) {
      const N = {
        type: k,
        destroy: async () => {
          e.removeListener("sync", N.update);
        },
        update: async ({ oldBlock: B, newBlock: P }) => {
          const F = P,
            J = ry(B);
          (await ny({ provider: t, fromBlock: J, toBlock: F }))
            .map(oy)
            .filter((X) => X !== null)
            .forEach((X) => {
              d(I, X);
            });
        },
      };
      return e.on("sync", N.update), N;
    }
    function M({ subId: I, filter: N }) {
      return (
        N.on("update", (P) => d(I, P)),
        { type: k, destroy: async () => await n.uninstallFilter(N.idHex) }
      );
    }
  }
  async function u(p, E) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const k = p.params[0],
      A = r[k];
    if (!A) {
      E.result = !1;
      return;
    }
    delete r[k], await A.destroy(), (E.result = !0);
  }
  function d(p, E) {
    s.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: { subscription: p, result: E },
    });
  }
  function g() {
    s.removeAllListeners();
    for (const p in r) r[p].destroy(), delete r[p];
    i = !0;
  }
}
function oy(e) {
  return e == null
    ? null
    : {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData,
      };
}
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.SubscriptionManager = void 0;
const ay = Pu,
  cy = iy,
  fl = () => {};
class ly {
  constructor(t) {
    const r = new ay.PollingBlockTracker({
        provider: t,
        pollingInterval: 15e3,
        setSkipCacheFlag: !0,
      }),
      { events: n, middleware: i } = cy({ blockTracker: r, provider: t });
    (this.events = n), (this.subscriptionMiddleware = i);
  }
  async handleRequest(t) {
    const r = {};
    return await this.subscriptionMiddleware(t, r, fl, fl), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
fs.SubscriptionManager = ly;
var Ah =
  (G && G.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.CoinbaseWalletProvider = void 0;
const uy = Ah(Di),
  hy = dd,
  se = Fn,
  re = q,
  dy = Wn,
  pl = gt,
  Mi = vn,
  lt = gn,
  go = Ah(H1),
  In = mn,
  fy = hn,
  py = fs,
  gl = "DefaultChainId",
  _l = "DefaultJsonRpcUrl";
class gy extends hy.EventEmitter {
  constructor(t) {
    var r, n;
    super(),
      (this._filterPolyfill = new fy.FilterPolyfill(this)),
      (this._subscriptionManager = new py.SubscriptionManager(this)),
      (this._relay = null),
      (this._addresses = []),
      (this.hasMadeFirstChainChangedEmission = !1),
      (this.setProviderInfo = this.setProviderInfo.bind(this)),
      (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
      (this.getChainId = this.getChainId.bind(this)),
      (this.setAppInfo = this.setAppInfo.bind(this)),
      (this.enable = this.enable.bind(this)),
      (this.close = this.close.bind(this)),
      (this.send = this.send.bind(this)),
      (this.sendAsync = this.sendAsync.bind(this)),
      (this.request = this.request.bind(this)),
      (this._setAddresses = this._setAddresses.bind(this)),
      (this.scanQRCode = this.scanQRCode.bind(this)),
      (this.genericRequest = this.genericRequest.bind(this)),
      (this._chainIdFromOpts = t.chainId),
      (this._jsonRpcUrlFromOpts = t.jsonRpcUrl),
      (this._overrideIsMetaMask = t.overrideIsMetaMask),
      (this._relayProvider = t.relayProvider),
      (this._storage = t.storage),
      (this._relayEventManager = t.relayEventManager),
      (this.diagnostic = t.diagnosticLogger),
      (this.reloadOnDisconnect = !0),
      (this.isCoinbaseWallet =
        (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this.isCoinbaseBrowser =
        (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this.qrUrl = t.qrUrl);
    const i = this.getChainId(),
      s = (0, re.prepend0x)(i.toString(16));
    this.emit("connect", { chainIdStr: s });
    const a = this._storage.getItem(pl.LOCAL_STORAGE_ADDRESSES_KEY);
    if (a) {
      const c = a.split(" ");
      c[0] !== "" &&
        ((this._addresses = c.map((u) => (0, re.ensureAddressString)(u))),
        this.emit("accountsChanged", c));
    }
    this._subscriptionManager.events.on("notification", (c) => {
      this.emit("message", { type: c.method, data: c.params });
    }),
      this._isAuthorized() && this.initializeRelay(),
      window.addEventListener("message", (c) => {
        var u;
        if (
          !(c.origin !== location.origin || c.source !== window) &&
          c.data.type === "walletLinkMessage" &&
          c.data.data.action === "dappChainSwitched"
        ) {
          const d = c.data.data.chainId,
            g =
              (u = c.data.data.jsonRpcUrl) !== null && u !== void 0
                ? u
                : this.jsonRpcUrl;
          this.updateProviderInfo(g, Number(d));
        }
      });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  get chainId() {
    return (0, re.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var t;
    return (t = this._storage.getItem(_l)) !== null && t !== void 0
      ? t
      : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(t) {
    this._storage.setItem(_l, t);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(t, r) {
    this.isCoinbaseBrowser ||
      ((this._chainIdFromOpts = r), (this._jsonRpcUrlFromOpts = t)),
      this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(t, r) {
    this.jsonRpcUrl = t;
    const n = this.getChainId();
    this._storage.setItem(gl, r.toString(10)),
      ((0, re.ensureIntNumber)(r) !== n ||
        !this.hasMadeFirstChainChangedEmission) &&
        (this.emit("chainChanged", this.getChainId()),
        (this.hasMadeFirstChainChangedEmission = !0));
  }
  async watchAsset(t, r, n, i, s, a) {
    const u = await (
      await this.initializeRelay()
    ).watchAsset(t, r, n, i, s, a == null ? void 0 : a.toString()).promise;
    return (0, lt.isErrorResponse)(u) ? !1 : !!u.result;
  }
  async addEthereumChain(t, r, n, i, s, a) {
    var c, u;
    if ((0, re.ensureIntNumber)(t) === this.getChainId()) return !1;
    const d = await this.initializeRelay(),
      g = d.inlineAddEthereumChain(t.toString());
    !this._isAuthorized() && !g && (await d.requestEthereumAccounts().promise);
    const p = await d.addEthereumChain(t.toString(), r, s, n, i, a).promise;
    return (0, lt.isErrorResponse)(p)
      ? !1
      : (((c = p.result) === null || c === void 0 ? void 0 : c.isApproved) ===
          !0 && this.updateProviderInfo(r[0], t),
        ((u = p.result) === null || u === void 0 ? void 0 : u.isApproved) ===
          !0);
  }
  async switchEthereumChain(t) {
    const n = await (
      await this.initializeRelay()
    ).switchEthereumChain(t.toString(10), this.selectedAddress || void 0)
      .promise;
    if ((0, lt.isErrorResponse)(n)) {
      if (!n.errorCode) return;
      throw n.errorCode === se.standardErrorCodes.provider.unsupportedChain
        ? se.standardErrors.provider.unsupportedChain()
        : se.standardErrors.provider.custom({
            message: n.errorMessage,
            code: n.errorCode,
          });
    }
    const i = n.result;
    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t);
  }
  setAppInfo(t, r) {
    this.initializeRelay().then((n) => n.setAppInfo(t, r));
  }
  async enable() {
    var t;
    return (
      (t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(In.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::enable",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? Mi.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized()
        ? [...this._addresses]
        : await this.send("eth_requestAccounts")
    );
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(t, r) {
    try {
      const n = this._send(t, r);
      if (n instanceof Promise)
        return n.catch((i) => {
          throw (0, se.serializeError)(i, t);
        });
    } catch (n) {
      throw (0, se.serializeError)(n, t);
    }
  }
  _send(t, r) {
    if (typeof t == "string") {
      const i = t,
        s = Array.isArray(r) ? r : r !== void 0 ? [r] : [],
        a = { jsonrpc: "2.0", id: 0, method: i, params: s };
      return this._sendRequestAsync(a).then((c) => c.result);
    }
    if (typeof r == "function") {
      const i = t,
        s = r;
      return this._sendAsync(i, s);
    }
    if (Array.isArray(t)) return t.map((s) => this._sendRequest(s));
    const n = t;
    return this._sendRequest(n);
  }
  async sendAsync(t, r) {
    try {
      return this._sendAsync(t, r).catch((n) => {
        throw (0, se.serializeError)(n, t);
      });
    } catch (n) {
      return Promise.reject((0, se.serializeError)(n, t));
    }
  }
  async _sendAsync(t, r) {
    if (typeof r != "function") throw new Error("callback is required");
    if (Array.isArray(t)) {
      const i = r;
      this._sendMultipleRequestsAsync(t)
        .then((s) => i(null, s))
        .catch((s) => i(s, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(t)
      .then((i) => n(null, i))
      .catch((i) => n(i, null));
  }
  async request(t) {
    try {
      return this._request(t).catch((r) => {
        throw (0, se.serializeError)(r, t.method);
      });
    } catch (r) {
      return Promise.reject((0, se.serializeError)(r, t.method));
    }
  }
  async _request(t) {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw se.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: t,
      });
    const { method: r, params: n } = t;
    if (typeof r != "string" || r.length === 0)
      throw se.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: t,
      });
    if (
      n !== void 0 &&
      !Array.isArray(n) &&
      (typeof n != "object" || n === null)
    )
      throw se.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: t,
      });
    const i = n === void 0 ? [] : n,
      s = this._relayEventManager.makeRequestId();
    return (
      await this._sendRequestAsync({
        method: r,
        params: i,
        jsonrpc: "2.0",
        id: s,
      })
    ).result;
  }
  async scanQRCode(t) {
    const n = await (
      await this.initializeRelay()
    ).scanQRCode((0, re.ensureRegExpString)(t)).promise;
    if ((0, lt.isErrorResponse)(n))
      throw (0, se.serializeError)(n.errorMessage, "scanQRCode");
    if (typeof n.result != "string")
      throw (0, se.serializeError)("result was not a string", "scanQRCode");
    return n.result;
  }
  async genericRequest(t, r) {
    const i = await (await this.initializeRelay()).genericRequest(t, r).promise;
    if ((0, lt.isErrorResponse)(i))
      throw (0, se.serializeError)(i.errorMessage, "generic");
    if (typeof i.result != "string")
      throw (0, se.serializeError)("result was not a string", "generic");
    return i.result;
  }
  async connectAndSignIn(t) {
    var r;
    (r = this.diagnostic) === null ||
      r === void 0 ||
      r.log(In.EVENTS.ETH_ACCOUNTS_STATE, {
        method: "provider::connectAndSignIn",
        sessionIdHash: this._relay
          ? Mi.Session.hash(this._relay.session.id)
          : void 0,
      });
    let n;
    try {
      const s = await this.initializeRelay();
      if (!(s instanceof dy.MobileRelay))
        throw new Error("connectAndSignIn is only supported on mobile");
      if (
        ((n = await s.connectAndSignIn(t).promise), (0, lt.isErrorResponse)(n))
      )
        throw new Error(n.errorMessage);
    } catch (s) {
      throw typeof s.message == "string" &&
        s.message.match(/(denied|rejected)/i)
        ? se.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : s;
    }
    if (!n.result) throw new Error("accounts received is empty");
    const { accounts: i } = n.result;
    return (
      this._setAddresses(i),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      n.result
    );
  }
  async selectProvider(t) {
    const n = await (await this.initializeRelay()).selectProvider(t).promise;
    if ((0, lt.isErrorResponse)(n))
      throw (0, se.serializeError)(n.errorMessage, "selectProvider");
    if (typeof n.result != "string")
      throw (0, se.serializeError)("result was not a string", "selectProvider");
    return n.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(t) {
    const r = { jsonrpc: "2.0", id: t.id },
      { method: n } = t;
    if (((r.result = this._handleSynchronousMethods(t)), r.result === void 0))
      throw new Error(
        `Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`
      );
    return r;
  }
  _setAddresses(t, r) {
    if (!Array.isArray(t)) throw new Error("addresses is not an array");
    const n = t.map((i) => (0, re.ensureAddressString)(i));
    JSON.stringify(n) !== JSON.stringify(this._addresses) &&
      ((this._addresses = n),
      this.emit("accountsChanged", this._addresses),
      this._storage.setItem(pl.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(t) {
    return new Promise((r, n) => {
      try {
        const i = this._handleSynchronousMethods(t);
        if (i !== void 0) return r({ jsonrpc: "2.0", id: t.id, result: i });
        const s = this._handleAsynchronousFilterMethods(t);
        if (s !== void 0) {
          s.then((c) =>
            r(Object.assign(Object.assign({}, c), { id: t.id }))
          ).catch((c) => n(c));
          return;
        }
        const a = this._handleSubscriptionMethods(t);
        if (a !== void 0) {
          a.then((c) =>
            r({ jsonrpc: "2.0", id: t.id, result: c.result })
          ).catch((c) => n(c));
          return;
        }
      } catch (i) {
        return n(i);
      }
      this._handleAsynchronousMethods(t)
        .then((i) => i && r(Object.assign(Object.assign({}, i), { id: t.id })))
        .catch((i) => n(i));
    });
  }
  _sendMultipleRequestsAsync(t) {
    return Promise.all(t.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "eth_uninstallFilter":
        return this._eth_uninstallFilter(n);
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_sign":
        return this._eth_sign(n);
      case "eth_ecRecover":
        return this._eth_ecRecover(n);
      case "personal_sign":
        return this._personal_sign(n);
      case "personal_ecRecover":
        return this._personal_ecRecover(n);
      case "eth_signTransaction":
        return this._eth_signTransaction(n);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(n);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(n);
      case "eth_signTypedData_v1":
        return this._eth_signTypedData_v1(n);
      case "eth_signTypedData_v2":
        return this._throwUnsupportedMethodError();
      case "eth_signTypedData_v3":
        return this._eth_signTypedData_v3(n);
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this._eth_signTypedData_v4(n);
      case "cbWallet_arbitrary":
        return this._cbwallet_arbitrary(n);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(n);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay())
      .makeEthereumJSONRPCRequest(t, this.jsonRpcUrl)
      .catch((s) => {
        var a;
        throw (
          ((s.code === se.standardErrorCodes.rpc.methodNotFound ||
            s.code === se.standardErrorCodes.rpc.methodNotSupported) &&
            ((a = this.diagnostic) === null ||
              a === void 0 ||
              a.log(In.EVENTS.METHOD_NOT_IMPLEMENTED, {
                method: t.method,
                sessionIdHash: this._relay
                  ? Mi.Session.hash(this._relay.session.id)
                  : void 0,
              })),
          s)
        );
      });
  }
  _handleAsynchronousFilterMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_newFilter":
        return this._eth_newFilter(n);
      case "eth_newBlockFilter":
        return this._eth_newBlockFilter();
      case "eth_newPendingTransactionFilter":
        return this._eth_newPendingTransactionFilter();
      case "eth_getFilterChanges":
        return this._eth_getFilterChanges(n);
      case "eth_getFilterLogs":
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(t) {
    switch (t.method) {
      case "eth_subscribe":
      case "eth_unsubscribe":
        return this._subscriptionManager.handleRequest(t);
    }
  }
  _isKnownAddress(t) {
    try {
      const r = (0, re.ensureAddressString)(t);
      return this._addresses
        .map((i) => (0, re.ensureAddressString)(i))
        .includes(r);
    } catch {}
    return !1;
  }
  _ensureKnownAddress(t) {
    var r;
    if (!this._isKnownAddress(t))
      throw (
        ((r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(In.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
        new Error("Unknown Ethereum address"))
      );
  }
  _prepareTransactionParams(t) {
    const r = t.from
      ? (0, re.ensureAddressString)(t.from)
      : this.selectedAddress;
    if (!r) throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = t.to ? (0, re.ensureAddressString)(t.to) : null,
      i = t.value != null ? (0, re.ensureBN)(t.value) : new uy.default(0),
      s = t.data ? (0, re.ensureBuffer)(t.data) : Buffer.alloc(0),
      a = t.nonce != null ? (0, re.ensureIntNumber)(t.nonce) : null,
      c = t.gasPrice != null ? (0, re.ensureBN)(t.gasPrice) : null,
      u = t.maxFeePerGas != null ? (0, re.ensureBN)(t.maxFeePerGas) : null,
      d =
        t.maxPriorityFeePerGas != null
          ? (0, re.ensureBN)(t.maxPriorityFeePerGas)
          : null,
      g = t.gas != null ? (0, re.ensureBN)(t.gas) : null,
      p = t.chainId ? (0, re.ensureIntNumber)(t.chainId) : this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: i,
      data: s,
      nonce: a,
      gasPriceInWei: c,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      gasLimit: g,
      chainId: p,
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw se.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw se.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(t, r, n, i) {
    this._ensureKnownAddress(r);
    try {
      const a = await (
        await this.initializeRelay()
      ).signEthereumMessage(t, r, n, i).promise;
      if ((0, lt.isErrorResponse)(a)) throw new Error(a.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: a.result };
    } catch (s) {
      throw typeof s.message == "string" &&
        s.message.match(/(denied|rejected)/i)
        ? se.standardErrors.provider.userRejectedRequest(
            "User denied message signature"
          )
        : s;
    }
  }
  async _ethereumAddressFromSignedMessage(t, r, n) {
    const s = await (
      await this.initializeRelay()
    ).ethereumAddressFromSignedMessage(t, r, n).promise;
    if ((0, lt.isErrorResponse)(s)) throw new Error(s.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, re.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const t = this._storage.getItem(gl);
    if (!t) return (0, re.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(t, 10);
    return (0, re.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var t;
    if (
      ((t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(In.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::_eth_requestAccounts",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? Mi.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized())
    )
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses,
      });
    let r;
    try {
      if (
        ((r = await (await this.initializeRelay()).requestEthereumAccounts()
          .promise),
        (0, lt.isErrorResponse)(r))
      )
        throw new Error(r.errorMessage);
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? se.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : n;
    }
    if (!r.result) throw new Error("accounts received is empty");
    return (
      this._setAddresses(r.result),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      { jsonrpc: "2.0", id: 0, result: this._addresses }
    );
  }
  _eth_sign(t) {
    this._requireAuthorization();
    const r = (0, re.ensureAddressString)(t[0]),
      n = (0, re.ensureBuffer)(t[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(t) {
    const r = (0, re.ensureBuffer)(t[0]),
      n = (0, re.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(t) {
    this._requireAuthorization();
    const r = (0, re.ensureBuffer)(t[0]),
      n = (0, re.ensureAddressString)(t[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(t) {
    const r = (0, re.ensureBuffer)(t[0]),
      n = (0, re.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const i = await (await this.initializeRelay()).signEthereumTransaction(r)
        .promise;
      if ((0, lt.isErrorResponse)(i)) throw new Error(i.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: i.result };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? se.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_sendRawTransaction(t) {
    const r = (0, re.ensureBuffer)(t[0]),
      i = await (
        await this.initializeRelay()
      ).submitEthereumTransaction(r, this.getChainId()).promise;
    if ((0, lt.isErrorResponse)(i)) throw new Error(i.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: i.result };
  }
  async _eth_sendTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const i = await (
        await this.initializeRelay()
      ).signAndSubmitEthereumTransaction(r).promise;
      if ((0, lt.isErrorResponse)(i)) throw new Error(i.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: i.result };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? se.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_signTypedData_v1(t) {
    this._requireAuthorization();
    const r = (0, re.ensureParsedJSONObject)(t[0]),
      n = (0, re.ensureAddressString)(t[1]);
    this._ensureKnownAddress(n);
    const i = go.default.hashForSignTypedDataLegacy({ data: r }),
      s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, n, !1, s);
  }
  async _eth_signTypedData_v3(t) {
    this._requireAuthorization();
    const r = (0, re.ensureAddressString)(t[0]),
      n = (0, re.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const i = go.default.hashForSignTypedData_v3({ data: n }),
      s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _eth_signTypedData_v4(t) {
    this._requireAuthorization();
    const r = (0, re.ensureAddressString)(t[0]),
      n = (0, re.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const i = go.default.hashForSignTypedData_v4({ data: n }),
      s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _cbwallet_arbitrary(t) {
    const r = t[0],
      n = t[1];
    if (typeof n != "string") throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(t) {
    var r, n, i, s;
    const a = t[0];
    if (((r = a.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" },
      };
    if (!a.chainName || a.chainName.trim() === "")
      throw se.standardErrors.rpc.invalidParams(
        "chainName is a required field"
      );
    if (!a.nativeCurrency)
      throw se.standardErrors.rpc.invalidParams(
        "nativeCurrency is a required field"
      );
    const c = parseInt(a.chainId, 16);
    return (await this.addEthereumChain(
      c,
      (n = a.rpcUrls) !== null && n !== void 0 ? n : [],
      (i = a.blockExplorerUrls) !== null && i !== void 0 ? i : [],
      a.chainName,
      (s = a.iconUrls) !== null && s !== void 0 ? s : [],
      a.nativeCurrency
    ))
      ? { jsonrpc: "2.0", id: 0, result: null }
      : {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: "unable to add ethereum chain" },
        };
  }
  async _wallet_switchEthereumChain(t) {
    const r = t[0];
    return (
      await this.switchEthereumChain(parseInt(r.chainId, 16)),
      { jsonrpc: "2.0", id: 0, result: null }
    );
  }
  async _wallet_watchAsset(t) {
    const r = Array.isArray(t) ? t[0] : t;
    if (!r.type) throw se.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw se.standardErrors.rpc.invalidParams(
        `Asset of type '${r.type}' is not supported`
      );
    if (!(r != null && r.options))
      throw se.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw se.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(),
      { address: i, symbol: s, image: a, decimals: c } = r.options;
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this.watchAsset(r.type, i, s, c, a, n),
    };
  }
  _eth_uninstallFilter(t) {
    const r = (0, re.ensureHexString)(t[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(t) {
    const r = t[0];
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newFilter(r),
    };
  }
  async _eth_newBlockFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newBlockFilter(),
    };
  }
  async _eth_newPendingTransactionFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newPendingTransactionFilter(),
    };
  }
  _eth_getFilterChanges(t) {
    const r = (0, re.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(t) {
    const r = (0, re.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay
      ? Promise.resolve(this._relay)
      : this._relayProvider().then(
          (t) => (
            t.setAccountsCallback((r, n) => this._setAddresses(r, n)),
            t.setChainCallback((r, n) => {
              this.updateProviderInfo(n, parseInt(r, 10));
            }),
            t.setDappDefaultChainCallback(this._chainIdFromOpts),
            (this._relay = t),
            t
          )
        );
  }
}
sn.CoinbaseWalletProvider = gy;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.RelayEventManager = void 0;
const _y = q;
class my {
  constructor() {
    (this._nextRequestId = 0), (this.callbacks = new Map());
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const t = this._nextRequestId,
      r = (0, _y.prepend0x)(t.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), t;
  }
}
Ts.RelayEventManager = my;
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.CoinbaseWalletSDK = void 0;
const vy = $i,
  by = Bi,
  ml = q,
  yy = Wi,
  wy = sn,
  Ey = Wn,
  Sy = ei,
  Ry = Ts,
  My = Zn,
  ky = Vn,
  Th = _n;
class Ns {
  constructor(t) {
    var r, n, i;
    (this._appName = ""),
      (this._appLogoUrl = null),
      (this._relay = null),
      (this._relayEventManager = null);
    const s = t.linkAPIUrl || by.LINK_API_URL;
    typeof t.overrideIsMetaMask > "u"
      ? (this._overrideIsMetaMask = !1)
      : (this._overrideIsMetaMask = t.overrideIsMetaMask),
      (this._overrideIsCoinbaseWallet =
        (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this._overrideIsCoinbaseBrowser =
        (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this._diagnosticLogger = t.diagnosticLogger),
      (this._reloadOnDisconnect =
        (i = t.reloadOnDisconnect) !== null && i !== void 0 ? i : !0);
    const a = new URL(s),
      c = `${a.protocol}//${a.host}`;
    if (
      ((this._storage = new yy.ScopedLocalStorage(`-walletlink:${c}`)),
      this._storage.setItem("version", Ns.VERSION),
      this.walletExtension || this.coinbaseBrowser)
    )
      return;
    this._relayEventManager = new Ry.RelayEventManager();
    const u = (0, ml.isMobileWeb)(),
      d =
        t.uiConstructor ||
        ((p) => (u ? new Sy.MobileRelayUI(p) : new My.WalletLinkRelayUI(p))),
      g = {
        linkAPIUrl: s,
        version: Th.LIB_VERSION,
        darkMode: !!t.darkMode,
        uiConstructor: d,
        storage: this._storage,
        relayEventManager: this._relayEventManager,
        diagnosticLogger: this._diagnosticLogger,
        reloadOnDisconnect: this._reloadOnDisconnect,
        enableMobileWalletLink: t.enableMobileWalletLink,
      };
    (this._relay = u ? new Ey.MobileRelay(g) : new ky.WalletLinkRelay(g)),
      this.setAppInfo(t.appName, t.appLogoUrl),
      !t.headlessMode && this._relay.attachUI();
  }
  makeWeb3Provider(t = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return (
        this.isCipherProvider(n) || n.setProviderInfo(t, r),
        this._reloadOnDisconnect === !1 &&
          typeof n.disableReloadOnDisconnect == "function" &&
          n.disableReloadOnDisconnect(),
        n
      );
    const i = this.coinbaseBrowser;
    if (i) return i;
    const s = this._relay;
    if (!s || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return (
      t || s.setConnectDisabled(!0),
      new wy.CoinbaseWalletProvider({
        relayProvider: () => Promise.resolve(s),
        relayEventManager: this._relayEventManager,
        storage: this._storage,
        jsonRpcUrl: t,
        chainId: r,
        qrUrl: this.getQrUrl(),
        diagnosticLogger: this._diagnosticLogger,
        overrideIsMetaMask: this._overrideIsMetaMask,
        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
      })
    );
  }
  setAppInfo(t, r) {
    var n;
    (this._appName = t || "DApp"),
      (this._appLogoUrl = r || (0, ml.getFavicon)());
    const i = this.walletExtension;
    i
      ? this.isCipherProvider(i) ||
        i.setAppInfo(this._appName, this._appLogoUrl)
      : (n = this._relay) === null ||
        n === void 0 ||
        n.setAppInfo(this._appName, this._appLogoUrl);
  }
  disconnect() {
    var t;
    const r = this === null || this === void 0 ? void 0 : this.walletExtension;
    r
      ? r.close()
      : (t = this._relay) === null || t === void 0 || t.resetAndReload();
  }
  getQrUrl() {
    var t, r;
    return (r =
      (t = this._relay) === null || t === void 0
        ? void 0
        : t.getQRCodeUrl()) !== null && r !== void 0
      ? r
      : null;
  }
  getCoinbaseWalletLogo(t, r = 240) {
    return (0, vy.walletLogo)(t, r);
  }
  get walletExtension() {
    var t;
    return (t = window.coinbaseWalletExtension) !== null && t !== void 0
      ? t
      : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var t, r;
    try {
      const n =
        (t = window.ethereum) !== null && t !== void 0
          ? t
          : (r = window.top) === null || r === void 0
          ? void 0
          : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(t) {
    return typeof t.isCipher == "boolean" && t.isCipher;
  }
}
Ln.CoinbaseWalletSDK = Ns;
Ns.VERSION = Th.LIB_VERSION;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0);
  const t = Ln,
    r = sn;
  var n = Ln;
  Object.defineProperty(e, "CoinbaseWalletSDK", {
    enumerable: !0,
    get: function () {
      return n.CoinbaseWalletSDK;
    },
  });
  var i = sn;
  Object.defineProperty(e, "CoinbaseWalletProvider", {
    enumerable: !0,
    get: function () {
      return i.CoinbaseWalletProvider;
    },
  }),
    (e.default = t.CoinbaseWalletSDK),
    typeof window < "u" &&
      ((window.CoinbaseWalletSDK = t.CoinbaseWalletSDK),
      (window.CoinbaseWalletProvider = r.CoinbaseWalletProvider),
      (window.WalletLink = t.CoinbaseWalletSDK),
      (window.WalletLinkProvider = r.CoinbaseWalletProvider));
})(No);
const Cy = Ph(No),
  jy = Oh({ __proto__: null, default: Cy }, [No]);
export { jy as i };