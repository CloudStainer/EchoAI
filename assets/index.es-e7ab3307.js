import {
  r as qm,
  k as Mn,
  l as ii,
  g as kd,
  m as af,
  _ as zm,
} from "./index-971a4fc3.js";
import { e as qr, U as Mu } from "./events-1a471a35.js";
var qu = {},
  ia = {},
  Le = {},
  Vd = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  function e(f, g) {
    var p = (f >>> 16) & 65535,
      v = f & 65535,
      D = (g >>> 16) & 65535,
      E = g & 65535;
    return (v * E + (((p * E + v * D) << 16) >>> 0)) | 0;
  }
  i.mul = Math.imul || e;
  function t(f, g) {
    return (f + g) | 0;
  }
  i.add = t;
  function s(f, g) {
    return (f - g) | 0;
  }
  i.sub = s;
  function o(f, g) {
    return (f << g) | (f >>> (32 - g));
  }
  i.rotl = o;
  function c(f, g) {
    return (f << (32 - g)) | (f >>> g);
  }
  i.rotr = c;
  function l(f) {
    return typeof f == "number" && isFinite(f) && Math.floor(f) === f;
  }
  (i.isInteger = Number.isInteger || l),
    (i.MAX_SAFE_INTEGER = 9007199254740991),
    (i.isSafeInteger = function (f) {
      return (
        i.isInteger(f) && f >= -i.MAX_SAFE_INTEGER && f <= i.MAX_SAFE_INTEGER
      );
    });
})(Vd);
Object.defineProperty(Le, "__esModule", { value: !0 });
var Gd = Vd;
function Bm(i, e) {
  return e === void 0 && (e = 0), (((i[e + 0] << 8) | i[e + 1]) << 16) >> 16;
}
Le.readInt16BE = Bm;
function Hm(i, e) {
  return e === void 0 && (e = 0), ((i[e + 0] << 8) | i[e + 1]) >>> 0;
}
Le.readUint16BE = Hm;
function Km(i, e) {
  return e === void 0 && (e = 0), (((i[e + 1] << 8) | i[e]) << 16) >> 16;
}
Le.readInt16LE = Km;
function km(i, e) {
  return e === void 0 && (e = 0), ((i[e + 1] << 8) | i[e]) >>> 0;
}
Le.readUint16LE = km;
function Wd(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 8),
    (e[t + 1] = i >>> 0),
    e
  );
}
Le.writeUint16BE = Wd;
Le.writeInt16BE = Wd;
function Yd(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    e
  );
}
Le.writeUint16LE = Yd;
Le.writeInt16LE = Yd;
function uu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]
  );
}
Le.readInt32BE = uu;
function hu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e] << 24) | (i[e + 1] << 16) | (i[e + 2] << 8) | i[e + 3]) >>> 0
  );
}
Le.readUint32BE = hu;
function lu(i, e) {
  return (
    e === void 0 && (e = 0),
    (i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]
  );
}
Le.readInt32LE = lu;
function fu(i, e) {
  return (
    e === void 0 && (e = 0),
    ((i[e + 3] << 24) | (i[e + 2] << 16) | (i[e + 1] << 8) | i[e]) >>> 0
  );
}
Le.readUint32LE = fu;
function Jo(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 24),
    (e[t + 1] = i >>> 16),
    (e[t + 2] = i >>> 8),
    (e[t + 3] = i >>> 0),
    e
  );
}
Le.writeUint32BE = Jo;
Le.writeInt32BE = Jo;
function Qo(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = i >>> 0),
    (e[t + 1] = i >>> 8),
    (e[t + 2] = i >>> 16),
    (e[t + 3] = i >>> 24),
    e
  );
}
Le.writeUint32LE = Qo;
Le.writeInt32LE = Qo;
function Vm(i, e) {
  e === void 0 && (e = 0);
  var t = uu(i, e),
    s = uu(i, e + 4);
  return t * 4294967296 + s - (s >> 31) * 4294967296;
}
Le.readInt64BE = Vm;
function Gm(i, e) {
  e === void 0 && (e = 0);
  var t = hu(i, e),
    s = hu(i, e + 4);
  return t * 4294967296 + s;
}
Le.readUint64BE = Gm;
function Wm(i, e) {
  e === void 0 && (e = 0);
  var t = lu(i, e),
    s = lu(i, e + 4);
  return s * 4294967296 + t - (t >> 31) * 4294967296;
}
Le.readInt64LE = Wm;
function Ym(i, e) {
  e === void 0 && (e = 0);
  var t = fu(i, e),
    s = fu(i, e + 4);
  return s * 4294967296 + t;
}
Le.readUint64LE = Ym;
function Jd(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Jo((i / 4294967296) >>> 0, e, t),
    Jo(i >>> 0, e, t + 4),
    e
  );
}
Le.writeUint64BE = Jd;
Le.writeInt64BE = Jd;
function Qd(i, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Qo(i >>> 0, e, t),
    Qo((i / 4294967296) >>> 0, e, t + 4),
    e
  );
}
Le.writeUint64LE = Qd;
Le.writeInt64LE = Qd;
function Jm(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--)
    (s += e[c] * o), (o *= 256);
  return s;
}
Le.readUintBE = Jm;
function Qm(i, e, t) {
  if ((t === void 0 && (t = 0), i % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (i / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var s = 0, o = 1, c = t; c < t + i / 8; c++) (s += e[c] * o), (o *= 256);
  return s;
}
Le.readUintLE = Qm;
function Xm(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Gd.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var o = 1, c = i / 8 + s - 1; c >= s; c--)
    (t[c] = (e / o) & 255), (o *= 256);
  return t;
}
Le.writeUintBE = Xm;
function Zm(i, e, t, s) {
  if (
    (t === void 0 && (t = new Uint8Array(i / 8)),
    s === void 0 && (s = 0),
    i % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Gd.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var o = 1, c = s; c < s + i / 8; c++) (t[c] = (e / o) & 255), (o *= 256);
  return t;
}
Le.writeUintLE = Zm;
function ew(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e);
}
Le.readFloat32BE = ew;
function tw(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat32(e, !0);
}
Le.readFloat32LE = tw;
function rw(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e);
}
Le.readFloat64BE = rw;
function iw(i, e) {
  e === void 0 && (e = 0);
  var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
  return t.getFloat64(e, !0);
}
Le.readFloat64LE = iw;
function nw(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i), e;
}
Le.writeFloat32BE = nw;
function sw(i, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat32(t, i, !0), e;
}
Le.writeFloat32LE = sw;
function ow(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i), e;
}
Le.writeFloat64BE = ow;
function aw(i, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return s.setFloat64(t, i, !0), e;
}
Le.writeFloat64LE = aw;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
function cw(i) {
  for (var e = 0; e < i.length; e++) i[e] = 0;
  return i;
}
Cr.wipe = cw;
Object.defineProperty(ia, "__esModule", { value: !0 });
var Zt = Le,
  du = Cr,
  uw = 20;
function hw(i, e, t) {
  for (
    var s = 1634760805,
      o = 857760878,
      c = 2036477234,
      l = 1797285236,
      f = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      g = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      p = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      v = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      D = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
      E = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
      I = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
      C = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
      q = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
      K = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
      ee = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
      R = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
      U = s,
      O = o,
      P = c,
      b = l,
      u = f,
      w = g,
      k = p,
      G = v,
      oe = D,
      ue = E,
      ge = I,
      $ = C,
      B = q,
      le = K,
      re = ee,
      W = R,
      te = 0;
    te < uw;
    te += 2
  )
    (U = (U + u) | 0),
      (B ^= U),
      (B = (B >>> (32 - 16)) | (B << 16)),
      (oe = (oe + B) | 0),
      (u ^= oe),
      (u = (u >>> (32 - 12)) | (u << 12)),
      (O = (O + w) | 0),
      (le ^= O),
      (le = (le >>> (32 - 16)) | (le << 16)),
      (ue = (ue + le) | 0),
      (w ^= ue),
      (w = (w >>> (32 - 12)) | (w << 12)),
      (P = (P + k) | 0),
      (re ^= P),
      (re = (re >>> (32 - 16)) | (re << 16)),
      (ge = (ge + re) | 0),
      (k ^= ge),
      (k = (k >>> (32 - 12)) | (k << 12)),
      (b = (b + G) | 0),
      (W ^= b),
      (W = (W >>> (32 - 16)) | (W << 16)),
      ($ = ($ + W) | 0),
      (G ^= $),
      (G = (G >>> (32 - 12)) | (G << 12)),
      (P = (P + k) | 0),
      (re ^= P),
      (re = (re >>> (32 - 8)) | (re << 8)),
      (ge = (ge + re) | 0),
      (k ^= ge),
      (k = (k >>> (32 - 7)) | (k << 7)),
      (b = (b + G) | 0),
      (W ^= b),
      (W = (W >>> (32 - 8)) | (W << 8)),
      ($ = ($ + W) | 0),
      (G ^= $),
      (G = (G >>> (32 - 7)) | (G << 7)),
      (O = (O + w) | 0),
      (le ^= O),
      (le = (le >>> (32 - 8)) | (le << 8)),
      (ue = (ue + le) | 0),
      (w ^= ue),
      (w = (w >>> (32 - 7)) | (w << 7)),
      (U = (U + u) | 0),
      (B ^= U),
      (B = (B >>> (32 - 8)) | (B << 8)),
      (oe = (oe + B) | 0),
      (u ^= oe),
      (u = (u >>> (32 - 7)) | (u << 7)),
      (U = (U + w) | 0),
      (W ^= U),
      (W = (W >>> (32 - 16)) | (W << 16)),
      (ge = (ge + W) | 0),
      (w ^= ge),
      (w = (w >>> (32 - 12)) | (w << 12)),
      (O = (O + k) | 0),
      (B ^= O),
      (B = (B >>> (32 - 16)) | (B << 16)),
      ($ = ($ + B) | 0),
      (k ^= $),
      (k = (k >>> (32 - 12)) | (k << 12)),
      (P = (P + G) | 0),
      (le ^= P),
      (le = (le >>> (32 - 16)) | (le << 16)),
      (oe = (oe + le) | 0),
      (G ^= oe),
      (G = (G >>> (32 - 12)) | (G << 12)),
      (b = (b + u) | 0),
      (re ^= b),
      (re = (re >>> (32 - 16)) | (re << 16)),
      (ue = (ue + re) | 0),
      (u ^= ue),
      (u = (u >>> (32 - 12)) | (u << 12)),
      (P = (P + G) | 0),
      (le ^= P),
      (le = (le >>> (32 - 8)) | (le << 8)),
      (oe = (oe + le) | 0),
      (G ^= oe),
      (G = (G >>> (32 - 7)) | (G << 7)),
      (b = (b + u) | 0),
      (re ^= b),
      (re = (re >>> (32 - 8)) | (re << 8)),
      (ue = (ue + re) | 0),
      (u ^= ue),
      (u = (u >>> (32 - 7)) | (u << 7)),
      (O = (O + k) | 0),
      (B ^= O),
      (B = (B >>> (32 - 8)) | (B << 8)),
      ($ = ($ + B) | 0),
      (k ^= $),
      (k = (k >>> (32 - 7)) | (k << 7)),
      (U = (U + w) | 0),
      (W ^= U),
      (W = (W >>> (32 - 8)) | (W << 8)),
      (ge = (ge + W) | 0),
      (w ^= ge),
      (w = (w >>> (32 - 7)) | (w << 7));
  Zt.writeUint32LE((U + s) | 0, i, 0),
    Zt.writeUint32LE((O + o) | 0, i, 4),
    Zt.writeUint32LE((P + c) | 0, i, 8),
    Zt.writeUint32LE((b + l) | 0, i, 12),
    Zt.writeUint32LE((u + f) | 0, i, 16),
    Zt.writeUint32LE((w + g) | 0, i, 20),
    Zt.writeUint32LE((k + p) | 0, i, 24),
    Zt.writeUint32LE((G + v) | 0, i, 28),
    Zt.writeUint32LE((oe + D) | 0, i, 32),
    Zt.writeUint32LE((ue + E) | 0, i, 36),
    Zt.writeUint32LE((ge + I) | 0, i, 40),
    Zt.writeUint32LE(($ + C) | 0, i, 44),
    Zt.writeUint32LE((B + q) | 0, i, 48),
    Zt.writeUint32LE((le + K) | 0, i, 52),
    Zt.writeUint32LE((re + ee) | 0, i, 56),
    Zt.writeUint32LE((W + R) | 0, i, 60);
}
function Xd(i, e, t, s, o) {
  if ((o === void 0 && (o = 0), i.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (s.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var c, l;
  if (o === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (c = new Uint8Array(16)), (l = c.length - e.length), c.set(e, l);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (c = e), (l = o);
  }
  for (var f = new Uint8Array(64), g = 0; g < t.length; g += 64) {
    hw(f, c, i);
    for (var p = g; p < g + 64 && p < t.length; p++) s[p] = t[p] ^ f[p - g];
    fw(c, 0, l);
  }
  return du.wipe(f), o === 0 && du.wipe(c), s;
}
ia.streamXOR = Xd;
function lw(i, e, t, s) {
  return s === void 0 && (s = 0), du.wipe(t), Xd(i, e, t, t, s);
}
ia.stream = lw;
function fw(i, e, t) {
  for (var s = 1; t--; )
    (s = (s + (i[e] & 255)) | 0), (i[e] = s & 255), (s >>>= 8), e++;
  if (s > 0) throw new Error("ChaCha: counter overflow");
}
var Zd = {},
  Mi = {};
Object.defineProperty(Mi, "__esModule", { value: !0 });
function dw(i, e, t) {
  return (~(i - 1) & e) | ((i - 1) & t);
}
Mi.select = dw;
function pw(i, e) {
  return (((i | 0) - (e | 0) - 1) >>> 31) & 1;
}
Mi.lessOrEqual = pw;
function ep(i, e) {
  if (i.length !== e.length) return 0;
  for (var t = 0, s = 0; s < i.length; s++) t |= i[s] ^ e[s];
  return 1 & ((t - 1) >>> 8);
}
Mi.compare = ep;
function gw(i, e) {
  return i.length === 0 || e.length === 0 ? !1 : ep(i, e) !== 0;
}
Mi.equal = gw;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Mi,
    t = Cr;
  i.DIGEST_LENGTH = 16;
  var s = (function () {
    function l(f) {
      (this.digestLength = i.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var g = f[0] | (f[1] << 8);
      this._r[0] = g & 8191;
      var p = f[2] | (f[3] << 8);
      this._r[1] = ((g >>> 13) | (p << 3)) & 8191;
      var v = f[4] | (f[5] << 8);
      this._r[2] = ((p >>> 10) | (v << 6)) & 7939;
      var D = f[6] | (f[7] << 8);
      this._r[3] = ((v >>> 7) | (D << 9)) & 8191;
      var E = f[8] | (f[9] << 8);
      (this._r[4] = ((D >>> 4) | (E << 12)) & 255),
        (this._r[5] = (E >>> 1) & 8190);
      var I = f[10] | (f[11] << 8);
      this._r[6] = ((E >>> 14) | (I << 2)) & 8191;
      var C = f[12] | (f[13] << 8);
      this._r[7] = ((I >>> 11) | (C << 5)) & 8065;
      var q = f[14] | (f[15] << 8);
      (this._r[8] = ((C >>> 8) | (q << 8)) & 8191),
        (this._r[9] = (q >>> 5) & 127),
        (this._pad[0] = f[16] | (f[17] << 8)),
        (this._pad[1] = f[18] | (f[19] << 8)),
        (this._pad[2] = f[20] | (f[21] << 8)),
        (this._pad[3] = f[22] | (f[23] << 8)),
        (this._pad[4] = f[24] | (f[25] << 8)),
        (this._pad[5] = f[26] | (f[27] << 8)),
        (this._pad[6] = f[28] | (f[29] << 8)),
        (this._pad[7] = f[30] | (f[31] << 8));
    }
    return (
      (l.prototype._blocks = function (f, g, p) {
        for (
          var v = this._fin ? 0 : 2048,
            D = this._h[0],
            E = this._h[1],
            I = this._h[2],
            C = this._h[3],
            q = this._h[4],
            K = this._h[5],
            ee = this._h[6],
            R = this._h[7],
            U = this._h[8],
            O = this._h[9],
            P = this._r[0],
            b = this._r[1],
            u = this._r[2],
            w = this._r[3],
            k = this._r[4],
            G = this._r[5],
            oe = this._r[6],
            ue = this._r[7],
            ge = this._r[8],
            $ = this._r[9];
          p >= 16;

        ) {
          var B = f[g + 0] | (f[g + 1] << 8);
          D += B & 8191;
          var le = f[g + 2] | (f[g + 3] << 8);
          E += ((B >>> 13) | (le << 3)) & 8191;
          var re = f[g + 4] | (f[g + 5] << 8);
          I += ((le >>> 10) | (re << 6)) & 8191;
          var W = f[g + 6] | (f[g + 7] << 8);
          C += ((re >>> 7) | (W << 9)) & 8191;
          var te = f[g + 8] | (f[g + 9] << 8);
          (q += ((W >>> 4) | (te << 12)) & 8191), (K += (te >>> 1) & 8191);
          var Y = f[g + 10] | (f[g + 11] << 8);
          ee += ((te >>> 14) | (Y << 2)) & 8191;
          var ie = f[g + 12] | (f[g + 13] << 8);
          R += ((Y >>> 11) | (ie << 5)) & 8191;
          var xe = f[g + 14] | (f[g + 15] << 8);
          (U += ((ie >>> 8) | (xe << 8)) & 8191), (O += (xe >>> 5) | v);
          var ne = 0,
            we = ne;
          (we += D * P),
            (we += E * (5 * $)),
            (we += I * (5 * ge)),
            (we += C * (5 * ue)),
            (we += q * (5 * oe)),
            (ne = we >>> 13),
            (we &= 8191),
            (we += K * (5 * G)),
            (we += ee * (5 * k)),
            (we += R * (5 * w)),
            (we += U * (5 * u)),
            (we += O * (5 * b)),
            (ne += we >>> 13),
            (we &= 8191);
          var he = ne;
          (he += D * b),
            (he += E * P),
            (he += I * (5 * $)),
            (he += C * (5 * ge)),
            (he += q * (5 * ue)),
            (ne = he >>> 13),
            (he &= 8191),
            (he += K * (5 * oe)),
            (he += ee * (5 * G)),
            (he += R * (5 * k)),
            (he += U * (5 * w)),
            (he += O * (5 * u)),
            (ne += he >>> 13),
            (he &= 8191);
          var _e = ne;
          (_e += D * u),
            (_e += E * b),
            (_e += I * P),
            (_e += C * (5 * $)),
            (_e += q * (5 * ge)),
            (ne = _e >>> 13),
            (_e &= 8191),
            (_e += K * (5 * ue)),
            (_e += ee * (5 * oe)),
            (_e += R * (5 * G)),
            (_e += U * (5 * k)),
            (_e += O * (5 * w)),
            (ne += _e >>> 13),
            (_e &= 8191);
          var z = ne;
          (z += D * w),
            (z += E * u),
            (z += I * b),
            (z += C * P),
            (z += q * (5 * $)),
            (ne = z >>> 13),
            (z &= 8191),
            (z += K * (5 * ge)),
            (z += ee * (5 * ue)),
            (z += R * (5 * oe)),
            (z += U * (5 * G)),
            (z += O * (5 * k)),
            (ne += z >>> 13),
            (z &= 8191);
          var M = ne;
          (M += D * k),
            (M += E * w),
            (M += I * u),
            (M += C * b),
            (M += q * P),
            (ne = M >>> 13),
            (M &= 8191),
            (M += K * (5 * $)),
            (M += ee * (5 * ge)),
            (M += R * (5 * ue)),
            (M += U * (5 * oe)),
            (M += O * (5 * G)),
            (ne += M >>> 13),
            (M &= 8191);
          var N = ne;
          (N += D * G),
            (N += E * k),
            (N += I * w),
            (N += C * u),
            (N += q * b),
            (ne = N >>> 13),
            (N &= 8191),
            (N += K * P),
            (N += ee * (5 * $)),
            (N += R * (5 * ge)),
            (N += U * (5 * ue)),
            (N += O * (5 * oe)),
            (ne += N >>> 13),
            (N &= 8191);
          var d = ne;
          (d += D * oe),
            (d += E * G),
            (d += I * k),
            (d += C * w),
            (d += q * u),
            (ne = d >>> 13),
            (d &= 8191),
            (d += K * b),
            (d += ee * P),
            (d += R * (5 * $)),
            (d += U * (5 * ge)),
            (d += O * (5 * ue)),
            (ne += d >>> 13),
            (d &= 8191);
          var A = ne;
          (A += D * ue),
            (A += E * oe),
            (A += I * G),
            (A += C * k),
            (A += q * w),
            (ne = A >>> 13),
            (A &= 8191),
            (A += K * u),
            (A += ee * b),
            (A += R * P),
            (A += U * (5 * $)),
            (A += O * (5 * ge)),
            (ne += A >>> 13),
            (A &= 8191);
          var se = ne;
          (se += D * ge),
            (se += E * ue),
            (se += I * oe),
            (se += C * G),
            (se += q * k),
            (ne = se >>> 13),
            (se &= 8191),
            (se += K * w),
            (se += ee * u),
            (se += R * b),
            (se += U * P),
            (se += O * (5 * $)),
            (ne += se >>> 13),
            (se &= 8191);
          var fe = ne;
          (fe += D * $),
            (fe += E * ge),
            (fe += I * ue),
            (fe += C * oe),
            (fe += q * G),
            (ne = fe >>> 13),
            (fe &= 8191),
            (fe += K * k),
            (fe += ee * w),
            (fe += R * u),
            (fe += U * b),
            (fe += O * P),
            (ne += fe >>> 13),
            (fe &= 8191),
            (ne = ((ne << 2) + ne) | 0),
            (ne = (ne + we) | 0),
            (we = ne & 8191),
            (ne = ne >>> 13),
            (he += ne),
            (D = we),
            (E = he),
            (I = _e),
            (C = z),
            (q = M),
            (K = N),
            (ee = d),
            (R = A),
            (U = se),
            (O = fe),
            (g += 16),
            (p -= 16);
        }
        (this._h[0] = D),
          (this._h[1] = E),
          (this._h[2] = I),
          (this._h[3] = C),
          (this._h[4] = q),
          (this._h[5] = K),
          (this._h[6] = ee),
          (this._h[7] = R),
          (this._h[8] = U),
          (this._h[9] = O);
      }),
      (l.prototype.finish = function (f, g) {
        g === void 0 && (g = 0);
        var p = new Uint16Array(10),
          v,
          D,
          E,
          I;
        if (this._leftover) {
          for (I = this._leftover, this._buffer[I++] = 1; I < 16; I++)
            this._buffer[I] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (v = this._h[1] >>> 13, this._h[1] &= 8191, I = 2; I < 10; I++)
          (this._h[I] += v), (v = this._h[I] >>> 13), (this._h[I] &= 8191);
        for (
          this._h[0] += v * 5,
            v = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += v,
            v = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += v,
            p[0] = this._h[0] + 5,
            v = p[0] >>> 13,
            p[0] &= 8191,
            I = 1;
          I < 10;
          I++
        )
          (p[I] = this._h[I] + v), (v = p[I] >>> 13), (p[I] &= 8191);
        for (p[9] -= 8192, D = (v ^ 1) - 1, I = 0; I < 10; I++) p[I] &= D;
        for (D = ~D, I = 0; I < 10; I++) this._h[I] = (this._h[I] & D) | p[I];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            E = this._h[0] + this._pad[0],
            this._h[0] = E & 65535,
            I = 1;
          I < 8;
          I++
        )
          (E = (((this._h[I] + this._pad[I]) | 0) + (E >>> 16)) | 0),
            (this._h[I] = E & 65535);
        return (
          (f[g + 0] = this._h[0] >>> 0),
          (f[g + 1] = this._h[0] >>> 8),
          (f[g + 2] = this._h[1] >>> 0),
          (f[g + 3] = this._h[1] >>> 8),
          (f[g + 4] = this._h[2] >>> 0),
          (f[g + 5] = this._h[2] >>> 8),
          (f[g + 6] = this._h[3] >>> 0),
          (f[g + 7] = this._h[3] >>> 8),
          (f[g + 8] = this._h[4] >>> 0),
          (f[g + 9] = this._h[4] >>> 8),
          (f[g + 10] = this._h[5] >>> 0),
          (f[g + 11] = this._h[5] >>> 8),
          (f[g + 12] = this._h[6] >>> 0),
          (f[g + 13] = this._h[6] >>> 8),
          (f[g + 14] = this._h[7] >>> 0),
          (f[g + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (l.prototype.update = function (f) {
        var g = 0,
          p = f.length,
          v;
        if (this._leftover) {
          (v = 16 - this._leftover), v > p && (v = p);
          for (var D = 0; D < v; D++)
            this._buffer[this._leftover + D] = f[g + D];
          if (((p -= v), (g += v), (this._leftover += v), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (p >= 16 &&
            ((v = p - (p % 16)), this._blocks(f, g, v), (g += v), (p -= v)),
          p)
        ) {
          for (var D = 0; D < p; D++)
            this._buffer[this._leftover + D] = f[g + D];
          this._leftover += p;
        }
        return this;
      }),
      (l.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var f = new Uint8Array(16);
        return this.finish(f), f;
      }),
      (l.prototype.clean = function () {
        return (
          t.wipe(this._buffer),
          t.wipe(this._r),
          t.wipe(this._h),
          t.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      l
    );
  })();
  i.Poly1305 = s;
  function o(l, f) {
    var g = new s(l);
    g.update(f);
    var p = g.digest();
    return g.clean(), p;
  }
  i.oneTimeAuth = o;
  function c(l, f) {
    return l.length !== i.DIGEST_LENGTH || f.length !== i.DIGEST_LENGTH
      ? !1
      : e.equal(l, f);
  }
  i.equal = c;
})(Zd);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = ia,
    t = Zd,
    s = Cr,
    o = Le,
    c = Mi;
  (i.KEY_LENGTH = 32), (i.NONCE_LENGTH = 12), (i.TAG_LENGTH = 16);
  var l = new Uint8Array(16),
    f = (function () {
      function g(p) {
        if (
          ((this.nonceLength = i.NONCE_LENGTH),
          (this.tagLength = i.TAG_LENGTH),
          p.length !== i.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(p);
      }
      return (
        (g.prototype.seal = function (p, v, D, E) {
          if (p.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var I = new Uint8Array(16);
          I.set(p, I.length - p.length);
          var C = new Uint8Array(32);
          e.stream(this._key, I, C, 4);
          var q = v.length + this.tagLength,
            K;
          if (E) {
            if (E.length !== q)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            K = E;
          } else K = new Uint8Array(q);
          return (
            e.streamXOR(this._key, I, v, K, 4),
            this._authenticate(
              K.subarray(K.length - this.tagLength, K.length),
              C,
              K.subarray(0, K.length - this.tagLength),
              D
            ),
            s.wipe(I),
            K
          );
        }),
        (g.prototype.open = function (p, v, D, E) {
          if (p.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (v.length < this.tagLength) return null;
          var I = new Uint8Array(16);
          I.set(p, I.length - p.length);
          var C = new Uint8Array(32);
          e.stream(this._key, I, C, 4);
          var q = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              q,
              C,
              v.subarray(0, v.length - this.tagLength),
              D
            ),
            !c.equal(q, v.subarray(v.length - this.tagLength, v.length)))
          )
            return null;
          var K = v.length - this.tagLength,
            ee;
          if (E) {
            if (E.length !== K)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            ee = E;
          } else ee = new Uint8Array(K);
          return (
            e.streamXOR(
              this._key,
              I,
              v.subarray(0, v.length - this.tagLength),
              ee,
              4
            ),
            s.wipe(I),
            ee
          );
        }),
        (g.prototype.clean = function () {
          return s.wipe(this._key), this;
        }),
        (g.prototype._authenticate = function (p, v, D, E) {
          var I = new t.Poly1305(v);
          E &&
            (I.update(E),
            E.length % 16 > 0 && I.update(l.subarray(E.length % 16))),
            I.update(D),
            D.length % 16 > 0 && I.update(l.subarray(D.length % 16));
          var C = new Uint8Array(8);
          E && o.writeUint64LE(E.length, C),
            I.update(C),
            o.writeUint64LE(D.length, C),
            I.update(C);
          for (var q = I.digest(), K = 0; K < q.length; K++) p[K] = q[K];
          I.clean(), s.wipe(q), s.wipe(C);
        }),
        g
      );
    })();
  i.ChaCha20Poly1305 = f;
})(qu);
var tp = {},
  Cs = {},
  zu = {};
Object.defineProperty(zu, "__esModule", { value: !0 });
function yw(i) {
  return (
    typeof i.saveState < "u" &&
    typeof i.restoreState < "u" &&
    typeof i.cleanSavedState < "u"
  );
}
zu.isSerializableHash = yw;
Object.defineProperty(Cs, "__esModule", { value: !0 });
var ti = zu,
  vw = Mi,
  _w = Cr,
  rp = (function () {
    function i(e, t) {
      (this._finished = !1),
        (this._inner = new e()),
        (this._outer = new e()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var s = new Uint8Array(this.blockSize);
      t.length > this.blockSize
        ? this._inner.update(t).finish(s).clean()
        : s.set(t);
      for (var o = 0; o < s.length; o++) s[o] ^= 54;
      this._inner.update(s);
      for (var o = 0; o < s.length; o++) s[o] ^= 106;
      this._outer.update(s),
        ti.isSerializableHash(this._inner) &&
          ti.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        _w.wipe(s);
    }
    return (
      (i.prototype.reset = function () {
        if (
          !ti.isSerializableHash(this._inner) ||
          !ti.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.clean = function () {
        ti.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          ti.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (i.prototype.update = function (e) {
        return this._inner.update(e), this;
      }),
      (i.prototype.finish = function (e) {
        return this._finished
          ? (this._outer.finish(e), this)
          : (this._inner.finish(e),
            this._outer.update(e.subarray(0, this.digestLength)).finish(e),
            (this._finished = !0),
            this);
      }),
      (i.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (i.prototype.saveState = function () {
        if (!ti.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (i.prototype.restoreState = function (e) {
        if (
          !ti.isSerializableHash(this._inner) ||
          !ti.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(e),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (i.prototype.cleanSavedState = function (e) {
        if (!ti.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(e);
      }),
      i
    );
  })();
Cs.HMAC = rp;
function mw(i, e, t) {
  var s = new rp(i, e);
  s.update(t);
  var o = s.digest();
  return s.clean(), o;
}
Cs.hmac = mw;
Cs.equal = vw.equal;
Object.defineProperty(tp, "__esModule", { value: !0 });
var cf = Cs,
  uf = Cr,
  ww = (function () {
    function i(e, t, s, o) {
      s === void 0 && (s = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = e),
        (this._info = o);
      var c = cf.hmac(this._hash, s, t);
      (this._hmac = new cf.HMAC(e, c)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (i.prototype._fillBuffer = function () {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          e > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (i.prototype.expand = function (e) {
        for (var t = new Uint8Array(e), s = 0; s < t.length; s++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (t[s] = this._buffer[this._bufpos++]);
        return t;
      }),
      (i.prototype.clean = function () {
        this._hmac.clean(),
          uf.wipe(this._buffer),
          uf.wipe(this._counter),
          (this._bufpos = 0);
      }),
      i
    );
  })(),
  bw = (tp.HKDF = ww),
  qn = {},
  na = {},
  sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.BrowserRandomSource = void 0;
const hf = 65536;
class Ew {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e &&
      e.getRandomValues !== void 0 &&
      ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let s = 0; s < t.length; s += hf)
      this._crypto.getRandomValues(
        t.subarray(s, s + Math.min(t.length - s, hf))
      );
    return t;
  }
}
sa.BrowserRandomSource = Ew;
function Dw(i) {
  throw new Error(
    'Could not dynamically require "' +
      i +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.NodeRandomSource = void 0;
const Sw = Cr;
class Iw {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof Dw < "u")
    ) {
      const e = qm;
      e &&
        e.randomBytes &&
        ((this._crypto = e),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const s = new Uint8Array(e);
    for (let o = 0; o < s.length; o++) s[o] = t[o];
    return (0, Sw.wipe)(t), s;
  }
}
oa.NodeRandomSource = Iw;
Object.defineProperty(na, "__esModule", { value: !0 });
na.SystemRandomSource = void 0;
const xw = sa,
  Ow = oa;
class Pw {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new xw.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new Ow.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
na.SystemRandomSource = Pw;
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.randomStringForEntropy =
      i.randomString =
      i.randomUint32 =
      i.randomBytes =
      i.defaultRandomSource =
        void 0);
  const e = na,
    t = Le,
    s = Cr;
  i.defaultRandomSource = new e.SystemRandomSource();
  function o(p, v = i.defaultRandomSource) {
    return v.randomBytes(p);
  }
  i.randomBytes = o;
  function c(p = i.defaultRandomSource) {
    const v = o(4, p),
      D = (0, t.readUint32LE)(v);
    return (0, s.wipe)(v), D;
  }
  i.randomUint32 = c;
  const l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function f(p, v = l, D = i.defaultRandomSource) {
    if (v.length < 2) throw new Error("randomString charset is too short");
    if (v.length > 256) throw new Error("randomString charset is too long");
    let E = "";
    const I = v.length,
      C = 256 - (256 % I);
    for (; p > 0; ) {
      const q = o(Math.ceil((p * 256) / C), D);
      for (let K = 0; K < q.length && p > 0; K++) {
        const ee = q[K];
        ee < C && ((E += v.charAt(ee % I)), p--);
      }
      (0, s.wipe)(q);
    }
    return E;
  }
  i.randomString = f;
  function g(p, v = l, D = i.defaultRandomSource) {
    const E = Math.ceil(p / (Math.log(v.length) / Math.LN2));
    return f(E, v, D);
  }
  i.randomStringForEntropy = g;
})(qn);
var aa = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Le,
    t = Cr;
  (i.DIGEST_LENGTH = 32), (i.BLOCK_SIZE = 64);
  var s = (function () {
    function f() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (f.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (f.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.clean = function () {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }),
      (f.prototype.update = function (g, p) {
        if ((p === void 0 && (p = g.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var v = 0;
        if (((this._bytesHashed += p), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && p > 0; )
            (this._buffer[this._bufferLength++] = g[v++]), p--;
          this._bufferLength === this.blockSize &&
            (c(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          p >= this.blockSize &&
          ((v = c(this._temp, this._state, g, v, p)), (p %= this.blockSize));
          p > 0;

        )
          (this._buffer[this._bufferLength++] = g[v++]), p--;
        return this;
      }),
      (f.prototype.finish = function (g) {
        if (!this._finished) {
          var p = this._bytesHashed,
            v = this._bufferLength,
            D = (p / 536870912) | 0,
            E = p << 3,
            I = p % 64 < 56 ? 64 : 128;
          this._buffer[v] = 128;
          for (var C = v + 1; C < I - 8; C++) this._buffer[C] = 0;
          e.writeUint32BE(D, this._buffer, I - 8),
            e.writeUint32BE(E, this._buffer, I - 4),
            c(this._temp, this._state, this._buffer, 0, I),
            (this._finished = !0);
        }
        for (var C = 0; C < this.digestLength / 4; C++)
          e.writeUint32BE(this._state[C], g, C * 4);
        return this;
      }),
      (f.prototype.digest = function () {
        var g = new Uint8Array(this.digestLength);
        return this.finish(g), g;
      }),
      (f.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (f.prototype.restoreState = function (g) {
        return (
          this._state.set(g.state),
          (this._bufferLength = g.bufferLength),
          g.buffer && this._buffer.set(g.buffer),
          (this._bytesHashed = g.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.cleanSavedState = function (g) {
        t.wipe(g.state),
          g.buffer && t.wipe(g.buffer),
          (g.bufferLength = 0),
          (g.bytesHashed = 0);
      }),
      f
    );
  })();
  i.SHA256 = s;
  var o = new Int32Array([
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
  ]);
  function c(f, g, p, v, D) {
    for (; D >= 64; ) {
      for (
        var E = g[0],
          I = g[1],
          C = g[2],
          q = g[3],
          K = g[4],
          ee = g[5],
          R = g[6],
          U = g[7],
          O = 0;
        O < 16;
        O++
      ) {
        var P = v + O * 4;
        f[O] = e.readUint32BE(p, P);
      }
      for (var O = 16; O < 64; O++) {
        var b = f[O - 2],
          u =
            ((b >>> 17) | (b << (32 - 17))) ^
            ((b >>> 19) | (b << (32 - 19))) ^
            (b >>> 10);
        b = f[O - 15];
        var w =
          ((b >>> 7) | (b << (32 - 7))) ^
          ((b >>> 18) | (b << (32 - 18))) ^
          (b >>> 3);
        f[O] = ((u + f[O - 7]) | 0) + ((w + f[O - 16]) | 0);
      }
      for (var O = 0; O < 64; O++) {
        var u =
            ((((((K >>> 6) | (K << 26)) ^
              ((K >>> 11) | (K << 21)) ^
              ((K >>> 25) | (K << 7))) +
              ((K & ee) ^ (~K & R))) |
              0) +
              ((U + ((o[O] + f[O]) | 0)) | 0)) |
            0,
          w =
            ((((E >>> 2) | (E << (32 - 2))) ^
              ((E >>> 13) | (E << (32 - 13))) ^
              ((E >>> 22) | (E << (32 - 22)))) +
              ((E & I) ^ (E & C) ^ (I & C))) |
            0;
        (U = R),
          (R = ee),
          (ee = K),
          (K = (q + u) | 0),
          (q = C),
          (C = I),
          (I = E),
          (E = (u + w) | 0);
      }
      (g[0] += E),
        (g[1] += I),
        (g[2] += C),
        (g[3] += q),
        (g[4] += K),
        (g[5] += ee),
        (g[6] += R),
        (g[7] += U),
        (v += 64),
        (D -= 64);
    }
    return v;
  }
  function l(f) {
    var g = new s();
    g.update(f);
    var p = g.digest();
    return g.clean(), p;
  }
  i.hash = l;
})(aa);
var Bu = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.sharedKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.scalarMultBase =
      i.scalarMult =
      i.SHARED_KEY_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
        void 0);
  const e = qn,
    t = Cr;
  (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 32),
    (i.SHARED_KEY_LENGTH = 32);
  function s(O) {
    const P = new Float64Array(16);
    if (O) for (let b = 0; b < O.length; b++) P[b] = O[b];
    return P;
  }
  const o = new Uint8Array(32);
  o[0] = 9;
  const c = s([56129, 1]);
  function l(O) {
    let P = 1;
    for (let b = 0; b < 16; b++) {
      let u = O[b] + P + 65535;
      (P = Math.floor(u / 65536)), (O[b] = u - P * 65536);
    }
    O[0] += P - 1 + 37 * (P - 1);
  }
  function f(O, P, b) {
    const u = ~(b - 1);
    for (let w = 0; w < 16; w++) {
      const k = u & (O[w] ^ P[w]);
      (O[w] ^= k), (P[w] ^= k);
    }
  }
  function g(O, P) {
    const b = s(),
      u = s();
    for (let w = 0; w < 16; w++) u[w] = P[w];
    l(u), l(u), l(u);
    for (let w = 0; w < 2; w++) {
      b[0] = u[0] - 65517;
      for (let G = 1; G < 15; G++)
        (b[G] = u[G] - 65535 - ((b[G - 1] >> 16) & 1)), (b[G - 1] &= 65535);
      b[15] = u[15] - 32767 - ((b[14] >> 16) & 1);
      const k = (b[15] >> 16) & 1;
      (b[14] &= 65535), f(u, b, 1 - k);
    }
    for (let w = 0; w < 16; w++)
      (O[2 * w] = u[w] & 255), (O[2 * w + 1] = u[w] >> 8);
  }
  function p(O, P) {
    for (let b = 0; b < 16; b++) O[b] = P[2 * b] + (P[2 * b + 1] << 8);
    O[15] &= 32767;
  }
  function v(O, P, b) {
    for (let u = 0; u < 16; u++) O[u] = P[u] + b[u];
  }
  function D(O, P, b) {
    for (let u = 0; u < 16; u++) O[u] = P[u] - b[u];
  }
  function E(O, P, b) {
    let u,
      w,
      k = 0,
      G = 0,
      oe = 0,
      ue = 0,
      ge = 0,
      $ = 0,
      B = 0,
      le = 0,
      re = 0,
      W = 0,
      te = 0,
      Y = 0,
      ie = 0,
      xe = 0,
      ne = 0,
      we = 0,
      he = 0,
      _e = 0,
      z = 0,
      M = 0,
      N = 0,
      d = 0,
      A = 0,
      se = 0,
      fe = 0,
      Se = 0,
      Be = 0,
      ke = 0,
      Ue = 0,
      pt = 0,
      gt = 0,
      Me = b[0],
      Ie = b[1],
      Ne = b[2],
      $e = b[3],
      qe = b[4],
      Pe = b[5],
      Fe = b[6],
      De = b[7],
      Ce = b[8],
      He = b[9],
      Oe = b[10],
      Ve = b[11],
      We = b[12],
      et = b[13],
      tt = b[14],
      Qe = b[15];
    (u = P[0]),
      (k += u * Me),
      (G += u * Ie),
      (oe += u * Ne),
      (ue += u * $e),
      (ge += u * qe),
      ($ += u * Pe),
      (B += u * Fe),
      (le += u * De),
      (re += u * Ce),
      (W += u * He),
      (te += u * Oe),
      (Y += u * Ve),
      (ie += u * We),
      (xe += u * et),
      (ne += u * tt),
      (we += u * Qe),
      (u = P[1]),
      (G += u * Me),
      (oe += u * Ie),
      (ue += u * Ne),
      (ge += u * $e),
      ($ += u * qe),
      (B += u * Pe),
      (le += u * Fe),
      (re += u * De),
      (W += u * Ce),
      (te += u * He),
      (Y += u * Oe),
      (ie += u * Ve),
      (xe += u * We),
      (ne += u * et),
      (we += u * tt),
      (he += u * Qe),
      (u = P[2]),
      (oe += u * Me),
      (ue += u * Ie),
      (ge += u * Ne),
      ($ += u * $e),
      (B += u * qe),
      (le += u * Pe),
      (re += u * Fe),
      (W += u * De),
      (te += u * Ce),
      (Y += u * He),
      (ie += u * Oe),
      (xe += u * Ve),
      (ne += u * We),
      (we += u * et),
      (he += u * tt),
      (_e += u * Qe),
      (u = P[3]),
      (ue += u * Me),
      (ge += u * Ie),
      ($ += u * Ne),
      (B += u * $e),
      (le += u * qe),
      (re += u * Pe),
      (W += u * Fe),
      (te += u * De),
      (Y += u * Ce),
      (ie += u * He),
      (xe += u * Oe),
      (ne += u * Ve),
      (we += u * We),
      (he += u * et),
      (_e += u * tt),
      (z += u * Qe),
      (u = P[4]),
      (ge += u * Me),
      ($ += u * Ie),
      (B += u * Ne),
      (le += u * $e),
      (re += u * qe),
      (W += u * Pe),
      (te += u * Fe),
      (Y += u * De),
      (ie += u * Ce),
      (xe += u * He),
      (ne += u * Oe),
      (we += u * Ve),
      (he += u * We),
      (_e += u * et),
      (z += u * tt),
      (M += u * Qe),
      (u = P[5]),
      ($ += u * Me),
      (B += u * Ie),
      (le += u * Ne),
      (re += u * $e),
      (W += u * qe),
      (te += u * Pe),
      (Y += u * Fe),
      (ie += u * De),
      (xe += u * Ce),
      (ne += u * He),
      (we += u * Oe),
      (he += u * Ve),
      (_e += u * We),
      (z += u * et),
      (M += u * tt),
      (N += u * Qe),
      (u = P[6]),
      (B += u * Me),
      (le += u * Ie),
      (re += u * Ne),
      (W += u * $e),
      (te += u * qe),
      (Y += u * Pe),
      (ie += u * Fe),
      (xe += u * De),
      (ne += u * Ce),
      (we += u * He),
      (he += u * Oe),
      (_e += u * Ve),
      (z += u * We),
      (M += u * et),
      (N += u * tt),
      (d += u * Qe),
      (u = P[7]),
      (le += u * Me),
      (re += u * Ie),
      (W += u * Ne),
      (te += u * $e),
      (Y += u * qe),
      (ie += u * Pe),
      (xe += u * Fe),
      (ne += u * De),
      (we += u * Ce),
      (he += u * He),
      (_e += u * Oe),
      (z += u * Ve),
      (M += u * We),
      (N += u * et),
      (d += u * tt),
      (A += u * Qe),
      (u = P[8]),
      (re += u * Me),
      (W += u * Ie),
      (te += u * Ne),
      (Y += u * $e),
      (ie += u * qe),
      (xe += u * Pe),
      (ne += u * Fe),
      (we += u * De),
      (he += u * Ce),
      (_e += u * He),
      (z += u * Oe),
      (M += u * Ve),
      (N += u * We),
      (d += u * et),
      (A += u * tt),
      (se += u * Qe),
      (u = P[9]),
      (W += u * Me),
      (te += u * Ie),
      (Y += u * Ne),
      (ie += u * $e),
      (xe += u * qe),
      (ne += u * Pe),
      (we += u * Fe),
      (he += u * De),
      (_e += u * Ce),
      (z += u * He),
      (M += u * Oe),
      (N += u * Ve),
      (d += u * We),
      (A += u * et),
      (se += u * tt),
      (fe += u * Qe),
      (u = P[10]),
      (te += u * Me),
      (Y += u * Ie),
      (ie += u * Ne),
      (xe += u * $e),
      (ne += u * qe),
      (we += u * Pe),
      (he += u * Fe),
      (_e += u * De),
      (z += u * Ce),
      (M += u * He),
      (N += u * Oe),
      (d += u * Ve),
      (A += u * We),
      (se += u * et),
      (fe += u * tt),
      (Se += u * Qe),
      (u = P[11]),
      (Y += u * Me),
      (ie += u * Ie),
      (xe += u * Ne),
      (ne += u * $e),
      (we += u * qe),
      (he += u * Pe),
      (_e += u * Fe),
      (z += u * De),
      (M += u * Ce),
      (N += u * He),
      (d += u * Oe),
      (A += u * Ve),
      (se += u * We),
      (fe += u * et),
      (Se += u * tt),
      (Be += u * Qe),
      (u = P[12]),
      (ie += u * Me),
      (xe += u * Ie),
      (ne += u * Ne),
      (we += u * $e),
      (he += u * qe),
      (_e += u * Pe),
      (z += u * Fe),
      (M += u * De),
      (N += u * Ce),
      (d += u * He),
      (A += u * Oe),
      (se += u * Ve),
      (fe += u * We),
      (Se += u * et),
      (Be += u * tt),
      (ke += u * Qe),
      (u = P[13]),
      (xe += u * Me),
      (ne += u * Ie),
      (we += u * Ne),
      (he += u * $e),
      (_e += u * qe),
      (z += u * Pe),
      (M += u * Fe),
      (N += u * De),
      (d += u * Ce),
      (A += u * He),
      (se += u * Oe),
      (fe += u * Ve),
      (Se += u * We),
      (Be += u * et),
      (ke += u * tt),
      (Ue += u * Qe),
      (u = P[14]),
      (ne += u * Me),
      (we += u * Ie),
      (he += u * Ne),
      (_e += u * $e),
      (z += u * qe),
      (M += u * Pe),
      (N += u * Fe),
      (d += u * De),
      (A += u * Ce),
      (se += u * He),
      (fe += u * Oe),
      (Se += u * Ve),
      (Be += u * We),
      (ke += u * et),
      (Ue += u * tt),
      (pt += u * Qe),
      (u = P[15]),
      (we += u * Me),
      (he += u * Ie),
      (_e += u * Ne),
      (z += u * $e),
      (M += u * qe),
      (N += u * Pe),
      (d += u * Fe),
      (A += u * De),
      (se += u * Ce),
      (fe += u * He),
      (Se += u * Oe),
      (Be += u * Ve),
      (ke += u * We),
      (Ue += u * et),
      (pt += u * tt),
      (gt += u * Qe),
      (k += 38 * he),
      (G += 38 * _e),
      (oe += 38 * z),
      (ue += 38 * M),
      (ge += 38 * N),
      ($ += 38 * d),
      (B += 38 * A),
      (le += 38 * se),
      (re += 38 * fe),
      (W += 38 * Se),
      (te += 38 * Be),
      (Y += 38 * ke),
      (ie += 38 * Ue),
      (xe += 38 * pt),
      (ne += 38 * gt),
      (w = 1),
      (u = k + w + 65535),
      (w = Math.floor(u / 65536)),
      (k = u - w * 65536),
      (u = G + w + 65535),
      (w = Math.floor(u / 65536)),
      (G = u - w * 65536),
      (u = oe + w + 65535),
      (w = Math.floor(u / 65536)),
      (oe = u - w * 65536),
      (u = ue + w + 65535),
      (w = Math.floor(u / 65536)),
      (ue = u - w * 65536),
      (u = ge + w + 65535),
      (w = Math.floor(u / 65536)),
      (ge = u - w * 65536),
      (u = $ + w + 65535),
      (w = Math.floor(u / 65536)),
      ($ = u - w * 65536),
      (u = B + w + 65535),
      (w = Math.floor(u / 65536)),
      (B = u - w * 65536),
      (u = le + w + 65535),
      (w = Math.floor(u / 65536)),
      (le = u - w * 65536),
      (u = re + w + 65535),
      (w = Math.floor(u / 65536)),
      (re = u - w * 65536),
      (u = W + w + 65535),
      (w = Math.floor(u / 65536)),
      (W = u - w * 65536),
      (u = te + w + 65535),
      (w = Math.floor(u / 65536)),
      (te = u - w * 65536),
      (u = Y + w + 65535),
      (w = Math.floor(u / 65536)),
      (Y = u - w * 65536),
      (u = ie + w + 65535),
      (w = Math.floor(u / 65536)),
      (ie = u - w * 65536),
      (u = xe + w + 65535),
      (w = Math.floor(u / 65536)),
      (xe = u - w * 65536),
      (u = ne + w + 65535),
      (w = Math.floor(u / 65536)),
      (ne = u - w * 65536),
      (u = we + w + 65535),
      (w = Math.floor(u / 65536)),
      (we = u - w * 65536),
      (k += w - 1 + 37 * (w - 1)),
      (w = 1),
      (u = k + w + 65535),
      (w = Math.floor(u / 65536)),
      (k = u - w * 65536),
      (u = G + w + 65535),
      (w = Math.floor(u / 65536)),
      (G = u - w * 65536),
      (u = oe + w + 65535),
      (w = Math.floor(u / 65536)),
      (oe = u - w * 65536),
      (u = ue + w + 65535),
      (w = Math.floor(u / 65536)),
      (ue = u - w * 65536),
      (u = ge + w + 65535),
      (w = Math.floor(u / 65536)),
      (ge = u - w * 65536),
      (u = $ + w + 65535),
      (w = Math.floor(u / 65536)),
      ($ = u - w * 65536),
      (u = B + w + 65535),
      (w = Math.floor(u / 65536)),
      (B = u - w * 65536),
      (u = le + w + 65535),
      (w = Math.floor(u / 65536)),
      (le = u - w * 65536),
      (u = re + w + 65535),
      (w = Math.floor(u / 65536)),
      (re = u - w * 65536),
      (u = W + w + 65535),
      (w = Math.floor(u / 65536)),
      (W = u - w * 65536),
      (u = te + w + 65535),
      (w = Math.floor(u / 65536)),
      (te = u - w * 65536),
      (u = Y + w + 65535),
      (w = Math.floor(u / 65536)),
      (Y = u - w * 65536),
      (u = ie + w + 65535),
      (w = Math.floor(u / 65536)),
      (ie = u - w * 65536),
      (u = xe + w + 65535),
      (w = Math.floor(u / 65536)),
      (xe = u - w * 65536),
      (u = ne + w + 65535),
      (w = Math.floor(u / 65536)),
      (ne = u - w * 65536),
      (u = we + w + 65535),
      (w = Math.floor(u / 65536)),
      (we = u - w * 65536),
      (k += w - 1 + 37 * (w - 1)),
      (O[0] = k),
      (O[1] = G),
      (O[2] = oe),
      (O[3] = ue),
      (O[4] = ge),
      (O[5] = $),
      (O[6] = B),
      (O[7] = le),
      (O[8] = re),
      (O[9] = W),
      (O[10] = te),
      (O[11] = Y),
      (O[12] = ie),
      (O[13] = xe),
      (O[14] = ne),
      (O[15] = we);
  }
  function I(O, P) {
    E(O, P, P);
  }
  function C(O, P) {
    const b = s();
    for (let u = 0; u < 16; u++) b[u] = P[u];
    for (let u = 253; u >= 0; u--) I(b, b), u !== 2 && u !== 4 && E(b, b, P);
    for (let u = 0; u < 16; u++) O[u] = b[u];
  }
  function q(O, P) {
    const b = new Uint8Array(32),
      u = new Float64Array(80),
      w = s(),
      k = s(),
      G = s(),
      oe = s(),
      ue = s(),
      ge = s();
    for (let re = 0; re < 31; re++) b[re] = O[re];
    (b[31] = (O[31] & 127) | 64), (b[0] &= 248), p(u, P);
    for (let re = 0; re < 16; re++) k[re] = u[re];
    w[0] = oe[0] = 1;
    for (let re = 254; re >= 0; --re) {
      const W = (b[re >>> 3] >>> (re & 7)) & 1;
      f(w, k, W),
        f(G, oe, W),
        v(ue, w, G),
        D(w, w, G),
        v(G, k, oe),
        D(k, k, oe),
        I(oe, ue),
        I(ge, w),
        E(w, G, w),
        E(G, k, ue),
        v(ue, w, G),
        D(w, w, G),
        I(k, w),
        D(G, oe, ge),
        E(w, G, c),
        v(w, w, oe),
        E(G, G, w),
        E(w, oe, ge),
        E(oe, k, u),
        I(k, ue),
        f(w, k, W),
        f(G, oe, W);
    }
    for (let re = 0; re < 16; re++)
      (u[re + 16] = w[re]),
        (u[re + 32] = G[re]),
        (u[re + 48] = k[re]),
        (u[re + 64] = oe[re]);
    const $ = u.subarray(32),
      B = u.subarray(16);
    C($, $), E(B, B, $);
    const le = new Uint8Array(32);
    return g(le, B), le;
  }
  i.scalarMult = q;
  function K(O) {
    return q(O, o);
  }
  i.scalarMultBase = K;
  function ee(O) {
    if (O.length !== i.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
    const P = new Uint8Array(O);
    return { publicKey: K(P), secretKey: P };
  }
  i.generateKeyPairFromSeed = ee;
  function R(O) {
    const P = (0, e.randomBytes)(32, O),
      b = ee(P);
    return (0, t.wipe)(P), b;
  }
  i.generateKeyPair = R;
  function U(O, P, b = !1) {
    if (O.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (P.length !== i.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const u = q(O, P);
    if (b) {
      let w = 0;
      for (let k = 0; k < u.length; k++) w |= u[k];
      if (w === 0) throw new Error("X25519: invalid shared key");
    }
    return u;
  }
  i.sharedKey = U;
})(Bu);
function Hu(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function ip(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Hu(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function pu(i, e) {
  e || (e = i.reduce((o, c) => o + c.length, 0));
  const t = ip(e);
  let s = 0;
  for (const o of i) t.set(o, s), (s += o.length);
  return Hu(t);
}
function Cw(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o),
      l = c.charCodeAt(0);
    if (t[l] !== 255) throw new TypeError(c + " is ambiguous");
    t[l] = o;
  }
  var f = i.length,
    g = i.charAt(0),
    p = Math.log(f) / Math.log(256),
    v = Math.log(256) / Math.log(f);
  function D(C) {
    if (
      (C instanceof Uint8Array ||
        (ArrayBuffer.isView(C)
          ? (C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength))
          : Array.isArray(C) && (C = Uint8Array.from(C))),
      !(C instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (C.length === 0) return "";
    for (var q = 0, K = 0, ee = 0, R = C.length; ee !== R && C[ee] === 0; )
      ee++, q++;
    for (var U = ((R - ee) * v + 1) >>> 0, O = new Uint8Array(U); ee !== R; ) {
      for (
        var P = C[ee], b = 0, u = U - 1;
        (P !== 0 || b < K) && u !== -1;
        u--, b++
      )
        (P += (256 * O[u]) >>> 0), (O[u] = P % f >>> 0), (P = (P / f) >>> 0);
      if (P !== 0) throw new Error("Non-zero carry");
      (K = b), ee++;
    }
    for (var w = U - K; w !== U && O[w] === 0; ) w++;
    for (var k = g.repeat(q); w < U; ++w) k += i.charAt(O[w]);
    return k;
  }
  function E(C) {
    if (typeof C != "string") throw new TypeError("Expected String");
    if (C.length === 0) return new Uint8Array();
    var q = 0;
    if (C[q] !== " ") {
      for (var K = 0, ee = 0; C[q] === g; ) K++, q++;
      for (
        var R = ((C.length - q) * p + 1) >>> 0, U = new Uint8Array(R);
        C[q];

      ) {
        var O = t[C.charCodeAt(q)];
        if (O === 255) return;
        for (var P = 0, b = R - 1; (O !== 0 || P < ee) && b !== -1; b--, P++)
          (O += (f * U[b]) >>> 0),
            (U[b] = O % 256 >>> 0),
            (O = (O / 256) >>> 0);
        if (O !== 0) throw new Error("Non-zero carry");
        (ee = P), q++;
      }
      if (C[q] !== " ") {
        for (var u = R - ee; u !== R && U[u] === 0; ) u++;
        for (var w = new Uint8Array(K + (R - u)), k = K; u !== R; )
          w[k++] = U[u++];
        return w;
      }
    }
  }
  function I(C) {
    var q = E(C);
    if (q) return q;
    throw new Error(`Non-${e} character`);
  }
  return { encode: D, decodeUnsafe: E, decode: I };
}
var Aw = Cw,
  Tw = Aw;
const Rw = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  Nw = (i) => new TextEncoder().encode(i),
  $w = (i) => new TextDecoder().decode(i);
class Fw {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Lw {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return np(this, e);
  }
}
class Uw {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return np(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const np = (i, e) =>
  new Uw({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class jw {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new Fw(e, t, s)),
      (this.decoder = new Lw(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ca = ({ name: i, prefix: e, encode: t, decode: s }) => new jw(i, e, t, s),
  As = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = Tw(t, e);
    return ca({ prefix: i, name: e, encode: s, decode: (c) => Rw(o(c)) });
  },
  Mw = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v) o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; ) --c;
    const l = new Uint8Array(((c * t) / 8) | 0);
    let f = 0,
      g = 0,
      p = 0;
    for (let v = 0; v < c; ++v) {
      const D = o[i[v]];
      if (D === void 0) throw new SyntaxError(`Non-${s} character`);
      (g = (g << t) | D),
        (f += t),
        f >= 8 && ((f -= 8), (l[p++] = 255 & (g >> f)));
    }
    if (f >= t || 255 & (g << (8 - f)))
      throw new SyntaxError("Unexpected end of data");
    return l;
  },
  qw = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let c = "",
      l = 0,
      f = 0;
    for (let g = 0; g < i.length; ++g)
      for (f = (f << 8) | i[g], l += 8; l > t; )
        (l -= t), (c += e[o & (f >> l)]);
    if ((l && (c += e[o & (f << (t - l))]), s))
      for (; (c.length * t) & 7; ) c += "=";
    return c;
  },
  Yt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    ca({
      prefix: e,
      name: i,
      encode(o) {
        return qw(o, s, t);
      },
      decode(o) {
        return Mw(o, s, t, i);
      },
    }),
  zw = ca({
    prefix: "\0",
    name: "identity",
    encode: (i) => $w(i),
    decode: (i) => Nw(i),
  }),
  Bw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: zw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hw = Yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  Kw = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: Hw }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  kw = Yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  Vw = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: kw }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Gw = As({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  Ww = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: Gw }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  Yw = Yt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  Jw = Yt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  Qw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: Yw, base16upper: Jw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xw = Yt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  Zw = Yt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  eb = Yt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  tb = Yt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  rb = Yt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  ib = Yt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  nb = Yt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  sb = Yt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  ob = Yt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  ab = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: Xw,
        base32hex: rb,
        base32hexpad: nb,
        base32hexpadupper: sb,
        base32hexupper: ib,
        base32pad: eb,
        base32padupper: tb,
        base32upper: Zw,
        base32z: ob,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  cb = As({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  ub = As({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  hb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: cb, base36upper: ub },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lb = As({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  fb = As({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  db = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: lb, base58flickr: fb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pb = Yt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  gb = Yt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  yb = Yt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  vb = Yt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  _b = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: pb,
        base64pad: gb,
        base64url: yb,
        base64urlpad: vb,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  mb = sp.reduce((i, e, t) => ((i[t] = e), i), []),
  wb = sp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function bb(i) {
  return i.reduce((e, t) => ((e += mb[t]), e), "");
}
function Eb(i) {
  const e = [];
  for (const t of i) {
    const s = wb[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const Db = ca({ prefix: "🚀", name: "base256emoji", encode: bb, decode: Eb }),
  Sb = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: Db },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const lf = {
  ...Bw,
  ...Kw,
  ...Vw,
  ...Ww,
  ...Qw,
  ...ab,
  ...hb,
  ...db,
  ..._b,
  ...Sb,
};
function op(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const ff = op(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  qc = op(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = ip(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  ap = {
    utf8: ff,
    "utf-8": ff,
    hex: lf.base16,
    latin1: qc,
    ascii: qc,
    binary: qc,
    ...lf,
  };
function wr(i, e = "utf8") {
  const t = ap[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Hu(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
function lr(i, e = "utf8") {
  const t = ap[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(i).substring(1);
}
var df =
    (globalThis && globalThis.__spreadArray) ||
    function (i, e, t) {
      if (t || arguments.length === 2)
        for (var s = 0, o = e.length, c; s < o; s++)
          (c || !(s in e)) &&
            (c || (c = Array.prototype.slice.call(e, 0, s)), (c[s] = e[s]));
      return i.concat(c || Array.prototype.slice.call(e));
    },
  Ib = (function () {
    function i(e, t, s) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.type = "browser");
    }
    return i;
  })(),
  xb = (function () {
    function i(e) {
      (this.version = e),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return i;
  })(),
  Ob = (function () {
    function i(e, t, s, o) {
      (this.name = e),
        (this.version = t),
        (this.os = s),
        (this.bot = o),
        (this.type = "bot-device");
    }
    return i;
  })(),
  Pb = (function () {
    function i() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  Cb = (function () {
    function i() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return i;
  })(),
  Ab =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Tb =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  pf = 3,
  Rb = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", Ab],
  ],
  gf = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function Nb(i) {
  return i
    ? yf(i)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new Cb()
    : typeof navigator < "u"
    ? yf(navigator.userAgent)
    : Lb();
}
function $b(i) {
  return (
    i !== "" &&
    Rb.reduce(function (e, t) {
      var s = t[0],
        o = t[1];
      if (e) return e;
      var c = o.exec(i);
      return !!c && [s, c];
    }, !1)
  );
}
function yf(i) {
  var e = $b(i);
  if (!e) return null;
  var t = e[0],
    s = e[1];
  if (t === "searchbot") return new Pb();
  var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
  o
    ? o.length < pf && (o = df(df([], o, !0), Ub(pf - o.length), !0))
    : (o = []);
  var c = o.join("."),
    l = Fb(i),
    f = Tb.exec(i);
  return f && f[1] ? new Ob(t, c, l, f[1]) : new Ib(t, c, l);
}
function Fb(i) {
  for (var e = 0, t = gf.length; e < t; e++) {
    var s = gf[e],
      o = s[0],
      c = s[1],
      l = c.exec(i);
    if (l) return o;
  }
  return null;
}
function Lb() {
  var i = typeof process < "u" && process.version;
  return i ? new xb(process.version.slice(1)) : null;
}
function Ub(i) {
  for (var e = [], t = 0; t < i; t++) e.push("0");
  return e;
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var gu =
  function (i, e) {
    return (
      (gu =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      gu(i, e)
    );
  };
function jb(i, e) {
  gu(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var yu = function () {
  return (
    (yu =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
        }
        return e;
      }),
    yu.apply(this, arguments)
  );
};
function Mb(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function qb(i, e, t, s) {
  var o = arguments.length,
    c =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var f = i.length - 1; f >= 0; f--)
      (l = i[f]) && (c = (o < 3 ? l(c) : o > 3 ? l(e, t, c) : l(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function zb(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function Bb(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function Hb(i, e, t, s) {
  function o(c) {
    return c instanceof t
      ? c
      : new t(function (l) {
          l(c);
        });
  }
  return new (t || (t = Promise))(function (c, l) {
    function f(v) {
      try {
        p(s.next(v));
      } catch (D) {
        l(D);
      }
    }
    function g(v) {
      try {
        p(s.throw(v));
      } catch (D) {
        l(D);
      }
    }
    function p(v) {
      v.done ? c(v.value) : o(v.value).then(f, g);
    }
    p((s = s.apply(i, e || [])).next());
  });
}
function Kb(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    c,
    l;
  return (
    (l = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function f(p) {
    return function (v) {
      return g([p, v]);
    };
  }
  function g(p) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (c =
              p[0] & 2
                ? o.return
                : p[0]
                ? o.throw || ((c = o.return) && c.call(o), 0)
                : o.next) &&
            !(c = c.call(o, p[1])).done)
        )
          return c;
        switch (((o = 0), c && (p = [p[0] & 2, c.value]), p[0])) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, (o = p[1]), (p = [0]);
            continue;
          case 7:
            (p = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((c = t.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (p[0] === 6 || p[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || (p[1] > c[0] && p[1] < c[3]))) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              (t.label = c[1]), (c = p);
              break;
            }
            if (c && t.label < c[2]) {
              (t.label = c[2]), t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(i, t);
      } catch (v) {
        (p = [6, v]), (o = 0);
      } finally {
        s = c = 0;
      }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function kb(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function Vb(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function vu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function cp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    c = [],
    l;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) c.push(o.value);
  } catch (f) {
    l = { error: f };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (l) throw l.error;
    }
  }
  return c;
}
function Gb() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(cp(arguments[e]));
  return i;
}
function Wb() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], l = 0, f = c.length; l < f; l++, o++)
      s[o] = c[l];
  return s;
}
function Es(i) {
  return this instanceof Es ? ((this.v = i), this) : new Es(i);
}
function Yb(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    c = [];
  return (
    (o = {}),
    l("next"),
    l("throw"),
    l("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function l(E) {
    s[E] &&
      (o[E] = function (I) {
        return new Promise(function (C, q) {
          c.push([E, I, C, q]) > 1 || f(E, I);
        });
      });
  }
  function f(E, I) {
    try {
      g(s[E](I));
    } catch (C) {
      D(c[0][3], C);
    }
  }
  function g(E) {
    E.value instanceof Es
      ? Promise.resolve(E.value.v).then(p, v)
      : D(c[0][2], E);
  }
  function p(E) {
    f("next", E);
  }
  function v(E) {
    f("throw", E);
  }
  function D(E, I) {
    E(I), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function Jb(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, c) {
    e[o] = i[o]
      ? function (l) {
          return (t = !t)
            ? { value: Es(i[o](l)), done: o === "return" }
            : c
            ? c(l)
            : l;
        }
      : c;
  }
}
function Qb(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof vu == "function" ? vu(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(c) {
    t[c] =
      i[c] &&
      function (l) {
        return new Promise(function (f, g) {
          (l = i[c](l)), o(f, g, l.done, l.value);
        });
      };
  }
  function o(c, l, f, g) {
    Promise.resolve(g).then(function (p) {
      c({ value: p, done: f });
    }, l);
  }
}
function Xb(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function Zb(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function eE(i) {
  return i && i.__esModule ? i : { default: i };
}
function tE(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function rE(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const iE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return yu;
        },
        __asyncDelegator: Jb,
        __asyncGenerator: Yb,
        __asyncValues: Qb,
        __await: Es,
        __awaiter: Hb,
        __classPrivateFieldGet: tE,
        __classPrivateFieldSet: rE,
        __createBinding: kb,
        __decorate: qb,
        __exportStar: Vb,
        __extends: jb,
        __generator: Kb,
        __importDefault: eE,
        __importStar: Zb,
        __makeTemplateObject: Xb,
        __metadata: Bb,
        __param: zb,
        __read: cp,
        __rest: Mb,
        __spread: Gb,
        __spreadArrays: Wb,
        __values: vu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ua = Mn(iE);
var zc = {},
  ls = {},
  vf;
function nE() {
  if (vf) return ls;
  (vf = 1),
    Object.defineProperty(ls, "__esModule", { value: !0 }),
    (ls.delay = void 0);
  function i(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return (ls.delay = i), ls;
}
var tn = {},
  Bc = {},
  rn = {},
  _f;
function sE() {
  return (
    _f ||
      ((_f = 1),
      Object.defineProperty(rn, "__esModule", { value: !0 }),
      (rn.ONE_THOUSAND = rn.ONE_HUNDRED = void 0),
      (rn.ONE_HUNDRED = 100),
      (rn.ONE_THOUSAND = 1e3)),
    rn
  );
}
var Hc = {},
  mf;
function oE() {
  return (
    mf ||
      ((mf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.ONE_YEAR =
            i.FOUR_WEEKS =
            i.THREE_WEEKS =
            i.TWO_WEEKS =
            i.ONE_WEEK =
            i.THIRTY_DAYS =
            i.SEVEN_DAYS =
            i.FIVE_DAYS =
            i.THREE_DAYS =
            i.ONE_DAY =
            i.TWENTY_FOUR_HOURS =
            i.TWELVE_HOURS =
            i.SIX_HOURS =
            i.THREE_HOURS =
            i.ONE_HOUR =
            i.SIXTY_MINUTES =
            i.THIRTY_MINUTES =
            i.TEN_MINUTES =
            i.FIVE_MINUTES =
            i.ONE_MINUTE =
            i.SIXTY_SECONDS =
            i.THIRTY_SECONDS =
            i.TEN_SECONDS =
            i.FIVE_SECONDS =
            i.ONE_SECOND =
              void 0),
          (i.ONE_SECOND = 1),
          (i.FIVE_SECONDS = 5),
          (i.TEN_SECONDS = 10),
          (i.THIRTY_SECONDS = 30),
          (i.SIXTY_SECONDS = 60),
          (i.ONE_MINUTE = i.SIXTY_SECONDS),
          (i.FIVE_MINUTES = i.ONE_MINUTE * 5),
          (i.TEN_MINUTES = i.ONE_MINUTE * 10),
          (i.THIRTY_MINUTES = i.ONE_MINUTE * 30),
          (i.SIXTY_MINUTES = i.ONE_MINUTE * 60),
          (i.ONE_HOUR = i.SIXTY_MINUTES),
          (i.THREE_HOURS = i.ONE_HOUR * 3),
          (i.SIX_HOURS = i.ONE_HOUR * 6),
          (i.TWELVE_HOURS = i.ONE_HOUR * 12),
          (i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24),
          (i.ONE_DAY = i.TWENTY_FOUR_HOURS),
          (i.THREE_DAYS = i.ONE_DAY * 3),
          (i.FIVE_DAYS = i.ONE_DAY * 5),
          (i.SEVEN_DAYS = i.ONE_DAY * 7),
          (i.THIRTY_DAYS = i.ONE_DAY * 30),
          (i.ONE_WEEK = i.SEVEN_DAYS),
          (i.TWO_WEEKS = i.ONE_WEEK * 2),
          (i.THREE_WEEKS = i.ONE_WEEK * 3),
          (i.FOUR_WEEKS = i.ONE_WEEK * 4),
          (i.ONE_YEAR = i.ONE_DAY * 365);
      })(Hc)),
    Hc
  );
}
var wf;
function up() {
  return (
    wf ||
      ((wf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = ua;
        e.__exportStar(sE(), i), e.__exportStar(oE(), i);
      })(Bc)),
    Bc
  );
}
var bf;
function aE() {
  if (bf) return tn;
  (bf = 1),
    Object.defineProperty(tn, "__esModule", { value: !0 }),
    (tn.fromMiliseconds = tn.toMiliseconds = void 0);
  const i = up();
  function e(s) {
    return s * i.ONE_THOUSAND;
  }
  tn.toMiliseconds = e;
  function t(s) {
    return Math.floor(s / i.ONE_THOUSAND);
  }
  return (tn.fromMiliseconds = t), tn;
}
var Ef;
function cE() {
  return (
    Ef ||
      ((Ef = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        const e = ua;
        e.__exportStar(nE(), i), e.__exportStar(aE(), i);
      })(zc)),
    zc
  );
}
var Nn = {},
  Df;
function uE() {
  if (Df) return Nn;
  (Df = 1),
    Object.defineProperty(Nn, "__esModule", { value: !0 }),
    (Nn.Watch = void 0);
  class i {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const s = this.get(t);
      if (typeof s.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const o = Date.now() - s.started;
      this.timestamps.set(t, { started: s.started, elapsed: o });
    }
    get(t) {
      const s = this.timestamps.get(t);
      if (typeof s > "u") throw new Error(`No timestamp found for label: ${t}`);
      return s;
    }
    elapsed(t) {
      const s = this.get(t);
      return s.elapsed || Date.now() - s.started;
    }
  }
  return (Nn.Watch = i), (Nn.default = i), Nn;
}
var Kc = {},
  fs = {},
  Sf;
function hE() {
  if (Sf) return fs;
  (Sf = 1),
    Object.defineProperty(fs, "__esModule", { value: !0 }),
    (fs.IWatch = void 0);
  class i {}
  return (fs.IWatch = i), fs;
}
var If;
function lE() {
  return (
    If ||
      ((If = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          ua.__exportStar(hE(), i);
      })(Kc)),
    Kc
  );
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = ua;
  e.__exportStar(cE(), i),
    e.__exportStar(uE(), i),
    e.__exportStar(lE(), i),
    e.__exportStar(up(), i);
})(ve);
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.getLocalStorage =
  lt.getLocalStorageOrThrow =
  lt.getCrypto =
  lt.getCryptoOrThrow =
  hp =
  lt.getLocation =
  lt.getLocationOrThrow =
  ku =
  lt.getNavigator =
  lt.getNavigatorOrThrow =
  Ku =
  lt.getDocument =
  lt.getDocumentOrThrow =
  lt.getFromWindowOrThrow =
  lt.getFromWindow =
    void 0;
function cn(i) {
  let e;
  return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e;
}
lt.getFromWindow = cn;
function zn(i) {
  const e = cn(i);
  if (!e) throw new Error(`${i} is not defined in Window`);
  return e;
}
lt.getFromWindowOrThrow = zn;
function fE() {
  return zn("document");
}
lt.getDocumentOrThrow = fE;
function dE() {
  return cn("document");
}
var Ku = (lt.getDocument = dE);
function pE() {
  return zn("navigator");
}
lt.getNavigatorOrThrow = pE;
function gE() {
  return cn("navigator");
}
var ku = (lt.getNavigator = gE);
function yE() {
  return zn("location");
}
lt.getLocationOrThrow = yE;
function vE() {
  return cn("location");
}
var hp = (lt.getLocation = vE);
function _E() {
  return zn("crypto");
}
lt.getCryptoOrThrow = _E;
function mE() {
  return cn("crypto");
}
lt.getCrypto = mE;
function wE() {
  return zn("localStorage");
}
lt.getLocalStorageOrThrow = wE;
function bE() {
  return cn("localStorage");
}
lt.getLocalStorage = bE;
var Vu = {};
Object.defineProperty(Vu, "__esModule", { value: !0 });
var lp = (Vu.getWindowMetadata = void 0);
const xf = lt;
function EE() {
  let i, e;
  try {
    (i = xf.getDocumentOrThrow()), (e = xf.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const D = i.getElementsByTagName("link"),
      E = [];
    for (let I = 0; I < D.length; I++) {
      const C = D[I],
        q = C.getAttribute("rel");
      if (q && q.toLowerCase().indexOf("icon") > -1) {
        const K = C.getAttribute("href");
        if (K)
          if (
            K.toLowerCase().indexOf("https:") === -1 &&
            K.toLowerCase().indexOf("http:") === -1 &&
            K.indexOf("//") !== 0
          ) {
            let ee = e.protocol + "//" + e.host;
            if (K.indexOf("/") === 0) ee += K;
            else {
              const R = e.pathname.split("/");
              R.pop();
              const U = R.join("/");
              ee += U + "/" + K;
            }
            E.push(ee);
          } else if (K.indexOf("//") === 0) {
            const ee = e.protocol + K;
            E.push(ee);
          } else E.push(K);
      }
    }
    return E;
  }
  function s(...D) {
    const E = i.getElementsByTagName("meta");
    for (let I = 0; I < E.length; I++) {
      const C = E[I],
        q = ["itemprop", "property", "name"]
          .map((K) => C.getAttribute(K))
          .filter((K) => (K ? D.includes(K) : !1));
      if (q.length && q) {
        const K = C.getAttribute("content");
        if (K) return K;
      }
    }
    return "";
  }
  function o() {
    let D = s("name", "og:site_name", "og:title", "twitter:title");
    return D || (D = i.title), D;
  }
  function c() {
    return s(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const l = o(),
    f = c(),
    g = e.origin,
    p = t();
  return { description: f, url: g, icons: p, name: l };
}
lp = Vu.getWindowMetadata = EE;
var Ds = {},
  DE = (i) =>
    encodeURIComponent(i).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  fp = "%[a-f0-9]{2}",
  Of = new RegExp("(" + fp + ")|([^%]+?)", "gi"),
  Pf = new RegExp("(" + fp + ")+", "gi");
function _u(i, e) {
  try {
    return [decodeURIComponent(i.join(""))];
  } catch {}
  if (i.length === 1) return i;
  e = e || 1;
  var t = i.slice(0, e),
    s = i.slice(e);
  return Array.prototype.concat.call([], _u(t), _u(s));
}
function SE(i) {
  try {
    return decodeURIComponent(i);
  } catch {
    for (var e = i.match(Of) || [], t = 1; t < e.length; t++)
      (i = _u(e, t).join("")), (e = i.match(Of) || []);
    return i;
  }
}
function IE(i) {
  for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = Pf.exec(i); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var s = SE(t[0]);
      s !== t[0] && (e[t[0]] = s);
    }
    t = Pf.exec(i);
  }
  e["%C2"] = "�";
  for (var o = Object.keys(e), c = 0; c < o.length; c++) {
    var l = o[c];
    i = i.replace(new RegExp(l, "g"), e[l]);
  }
  return i;
}
var xE = function (i) {
    if (typeof i != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof i + "`"
      );
    try {
      return (i = i.replace(/\+/g, " ")), decodeURIComponent(i);
    } catch {
      return IE(i);
    }
  },
  OE = (i, e) => {
    if (!(typeof i == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [i];
    const t = i.indexOf(e);
    return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)];
  },
  PE = function (i, e) {
    for (
      var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0;
      c < s.length;
      c++
    ) {
      var l = s[c],
        f = i[l];
      (o ? e.indexOf(l) !== -1 : e(l, f, i)) && (t[l] = f);
    }
    return t;
  };
(function (i) {
  const e = DE,
    t = xE,
    s = OE,
    o = PE,
    c = (R) => R == null,
    l = Symbol("encodeFragmentIdentifier");
  function f(R) {
    switch (R.arrayFormat) {
      case "index":
        return (U) => (O, P) => {
          const b = O.length;
          return P === void 0 ||
            (R.skipNull && P === null) ||
            (R.skipEmptyString && P === "")
            ? O
            : P === null
            ? [...O, [v(U, R), "[", b, "]"].join("")]
            : [...O, [v(U, R), "[", v(b, R), "]=", v(P, R)].join("")];
        };
      case "bracket":
        return (U) => (O, P) =>
          P === void 0 ||
          (R.skipNull && P === null) ||
          (R.skipEmptyString && P === "")
            ? O
            : P === null
            ? [...O, [v(U, R), "[]"].join("")]
            : [...O, [v(U, R), "[]=", v(P, R)].join("")];
      case "colon-list-separator":
        return (U) => (O, P) =>
          P === void 0 ||
          (R.skipNull && P === null) ||
          (R.skipEmptyString && P === "")
            ? O
            : P === null
            ? [...O, [v(U, R), ":list="].join("")]
            : [...O, [v(U, R), ":list=", v(P, R)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const U = R.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (O) => (P, b) =>
          b === void 0 ||
          (R.skipNull && b === null) ||
          (R.skipEmptyString && b === "")
            ? P
            : ((b = b === null ? "" : b),
              P.length === 0
                ? [[v(O, R), U, v(b, R)].join("")]
                : [[P, v(b, R)].join(R.arrayFormatSeparator)]);
      }
      default:
        return (U) => (O, P) =>
          P === void 0 ||
          (R.skipNull && P === null) ||
          (R.skipEmptyString && P === "")
            ? O
            : P === null
            ? [...O, v(U, R)]
            : [...O, [v(U, R), "=", v(P, R)].join("")];
    }
  }
  function g(R) {
    let U;
    switch (R.arrayFormat) {
      case "index":
        return (O, P, b) => {
          if (
            ((U = /\[(\d*)\]$/.exec(O)), (O = O.replace(/\[\d*\]$/, "")), !U)
          ) {
            b[O] = P;
            return;
          }
          b[O] === void 0 && (b[O] = {}), (b[O][U[1]] = P);
        };
      case "bracket":
        return (O, P, b) => {
          if (((U = /(\[\])$/.exec(O)), (O = O.replace(/\[\]$/, "")), !U)) {
            b[O] = P;
            return;
          }
          if (b[O] === void 0) {
            b[O] = [P];
            return;
          }
          b[O] = [].concat(b[O], P);
        };
      case "colon-list-separator":
        return (O, P, b) => {
          if (((U = /(:list)$/.exec(O)), (O = O.replace(/:list$/, "")), !U)) {
            b[O] = P;
            return;
          }
          if (b[O] === void 0) {
            b[O] = [P];
            return;
          }
          b[O] = [].concat(b[O], P);
        };
      case "comma":
      case "separator":
        return (O, P, b) => {
          const u = typeof P == "string" && P.includes(R.arrayFormatSeparator),
            w =
              typeof P == "string" &&
              !u &&
              D(P, R).includes(R.arrayFormatSeparator);
          P = w ? D(P, R) : P;
          const k =
            u || w
              ? P.split(R.arrayFormatSeparator).map((G) => D(G, R))
              : P === null
              ? P
              : D(P, R);
          b[O] = k;
        };
      case "bracket-separator":
        return (O, P, b) => {
          const u = /(\[\])$/.test(O);
          if (((O = O.replace(/\[\]$/, "")), !u)) {
            b[O] = P && D(P, R);
            return;
          }
          const w =
            P === null
              ? []
              : P.split(R.arrayFormatSeparator).map((k) => D(k, R));
          if (b[O] === void 0) {
            b[O] = w;
            return;
          }
          b[O] = [].concat(b[O], w);
        };
      default:
        return (O, P, b) => {
          if (b[O] === void 0) {
            b[O] = P;
            return;
          }
          b[O] = [].concat(b[O], P);
        };
    }
  }
  function p(R) {
    if (typeof R != "string" || R.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function v(R, U) {
    return U.encode ? (U.strict ? e(R) : encodeURIComponent(R)) : R;
  }
  function D(R, U) {
    return U.decode ? t(R) : R;
  }
  function E(R) {
    return Array.isArray(R)
      ? R.sort()
      : typeof R == "object"
      ? E(Object.keys(R))
          .sort((U, O) => Number(U) - Number(O))
          .map((U) => R[U])
      : R;
  }
  function I(R) {
    const U = R.indexOf("#");
    return U !== -1 && (R = R.slice(0, U)), R;
  }
  function C(R) {
    let U = "";
    const O = R.indexOf("#");
    return O !== -1 && (U = R.slice(O)), U;
  }
  function q(R) {
    R = I(R);
    const U = R.indexOf("?");
    return U === -1 ? "" : R.slice(U + 1);
  }
  function K(R, U) {
    return (
      U.parseNumbers &&
      !Number.isNaN(Number(R)) &&
      typeof R == "string" &&
      R.trim() !== ""
        ? (R = Number(R))
        : U.parseBooleans &&
          R !== null &&
          (R.toLowerCase() === "true" || R.toLowerCase() === "false") &&
          (R = R.toLowerCase() === "true"),
      R
    );
  }
  function ee(R, U) {
    (U = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      U
    )),
      p(U.arrayFormatSeparator);
    const O = g(U),
      P = Object.create(null);
    if (typeof R != "string" || ((R = R.trim().replace(/^[?#&]/, "")), !R))
      return P;
    for (const b of R.split("&")) {
      if (b === "") continue;
      let [u, w] = s(U.decode ? b.replace(/\+/g, " ") : b, "=");
      (w =
        w === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(U.arrayFormat)
          ? w
          : D(w, U)),
        O(D(u, U), w, P);
    }
    for (const b of Object.keys(P)) {
      const u = P[b];
      if (typeof u == "object" && u !== null)
        for (const w of Object.keys(u)) u[w] = K(u[w], U);
      else P[b] = K(u, U);
    }
    return U.sort === !1
      ? P
      : (U.sort === !0
          ? Object.keys(P).sort()
          : Object.keys(P).sort(U.sort)
        ).reduce((b, u) => {
          const w = P[u];
          return (
            w && typeof w == "object" && !Array.isArray(w)
              ? (b[u] = E(w))
              : (b[u] = w),
            b
          );
        }, Object.create(null));
  }
  (i.extract = q),
    (i.parse = ee),
    (i.stringify = (R, U) => {
      if (!R) return "";
      (U = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        U
      )),
        p(U.arrayFormatSeparator);
      const O = (w) =>
          (U.skipNull && c(R[w])) || (U.skipEmptyString && R[w] === ""),
        P = f(U),
        b = {};
      for (const w of Object.keys(R)) O(w) || (b[w] = R[w]);
      const u = Object.keys(b);
      return (
        U.sort !== !1 && u.sort(U.sort),
        u
          .map((w) => {
            const k = R[w];
            return k === void 0
              ? ""
              : k === null
              ? v(w, U)
              : Array.isArray(k)
              ? k.length === 0 && U.arrayFormat === "bracket-separator"
                ? v(w, U) + "[]"
                : k.reduce(P(w), []).join("&")
              : v(w, U) + "=" + v(k, U);
          })
          .filter((w) => w.length > 0)
          .join("&")
      );
    }),
    (i.parseUrl = (R, U) => {
      U = Object.assign({ decode: !0 }, U);
      const [O, P] = s(R, "#");
      return Object.assign(
        { url: O.split("?")[0] || "", query: ee(q(R), U) },
        U && U.parseFragmentIdentifier && P
          ? { fragmentIdentifier: D(P, U) }
          : {}
      );
    }),
    (i.stringifyUrl = (R, U) => {
      U = Object.assign({ encode: !0, strict: !0, [l]: !0 }, U);
      const O = I(R.url).split("?")[0] || "",
        P = i.extract(R.url),
        b = i.parse(P, { sort: !1 }),
        u = Object.assign(b, R.query);
      let w = i.stringify(u, U);
      w && (w = `?${w}`);
      let k = C(R.url);
      return (
        R.fragmentIdentifier &&
          (k = `#${U[l] ? v(R.fragmentIdentifier, U) : R.fragmentIdentifier}`),
        `${O}${w}${k}`
      );
    }),
    (i.pick = (R, U, O) => {
      O = Object.assign({ parseFragmentIdentifier: !0, [l]: !1 }, O);
      const { url: P, query: b, fragmentIdentifier: u } = i.parseUrl(R, O);
      return i.stringifyUrl(
        { url: P, query: o(b, U), fragmentIdentifier: u },
        O
      );
    }),
    (i.exclude = (R, U, O) => {
      const P = Array.isArray(U) ? (b) => !U.includes(b) : (b, u) => !U(b, u);
      return i.pick(R, P, O);
    });
})(Ds);
const CE = {
    waku: {
      publish: "waku_publish",
      batchPublish: "waku_batchPublish",
      subscribe: "waku_subscribe",
      batchSubscribe: "waku_batchSubscribe",
      subscription: "waku_subscription",
      unsubscribe: "waku_unsubscribe",
      batchUnsubscribe: "waku_batchUnsubscribe",
    },
    irn: {
      publish: "irn_publish",
      batchPublish: "irn_batchPublish",
      subscribe: "irn_subscribe",
      batchSubscribe: "irn_batchSubscribe",
      subscription: "irn_subscription",
      unsubscribe: "irn_unsubscribe",
      batchUnsubscribe: "irn_batchUnsubscribe",
    },
    iridium: {
      publish: "iridium_publish",
      batchPublish: "iridium_batchPublish",
      subscribe: "iridium_subscribe",
      batchSubscribe: "iridium_batchSubscribe",
      subscription: "iridium_subscription",
      unsubscribe: "iridium_unsubscribe",
      batchUnsubscribe: "iridium_batchUnsubscribe",
    },
  },
  AE = ":";
function TE(i) {
  const [e, t] = i.split(AE);
  return { namespace: e, reference: t };
}
function RE(i, e = []) {
  const t = [];
  return (
    Object.keys(i).forEach((s) => {
      if (e.length && !e.includes(s)) return;
      const o = i[s];
      t.push(...o.accounts);
    }),
    t
  );
}
function dp(i, e) {
  return i.includes(":") ? [i] : e.chains || [];
}
const pp = "base10",
  hr = "base16",
  mu = "base64pad",
  Gu = "utf8",
  gp = 0,
  un = 1,
  NE = 0,
  Cf = 1,
  wu = 12,
  Wu = 32;
function $E() {
  const i = Bu.generateKeyPair();
  return { privateKey: lr(i.secretKey, hr), publicKey: lr(i.publicKey, hr) };
}
function bu() {
  const i = qn.randomBytes(Wu);
  return lr(i, hr);
}
function FE(i, e) {
  const t = Bu.sharedKey(wr(i, hr), wr(e, hr), !0),
    s = new bw(aa.SHA256, t).expand(Wu);
  return lr(s, hr);
}
function LE(i) {
  const e = aa.hash(wr(i, hr));
  return lr(e, hr);
}
function Un(i) {
  const e = aa.hash(wr(i, Gu));
  return lr(e, hr);
}
function UE(i) {
  return wr(`${i}`, pp);
}
function Ts(i) {
  return Number(lr(i, pp));
}
function jE(i) {
  const e = UE(typeof i.type < "u" ? i.type : gp);
  if (Ts(e) === un && typeof i.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof i.senderPublicKey < "u" ? wr(i.senderPublicKey, hr) : void 0,
    s = typeof i.iv < "u" ? wr(i.iv, hr) : qn.randomBytes(wu),
    o = new qu.ChaCha20Poly1305(wr(i.symKey, hr)).seal(s, wr(i.message, Gu));
  return qE({ type: e, sealed: o, iv: s, senderPublicKey: t });
}
function ME(i) {
  const e = new qu.ChaCha20Poly1305(wr(i.symKey, hr)),
    { sealed: t, iv: s } = Xo(i.encoded),
    o = e.open(s, t);
  if (o === null) throw new Error("Failed to decrypt");
  return lr(o, Gu);
}
function qE(i) {
  if (Ts(i.type) === un) {
    if (typeof i.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return lr(pu([i.type, i.senderPublicKey, i.iv, i.sealed]), mu);
  }
  return lr(pu([i.type, i.iv, i.sealed]), mu);
}
function Xo(i) {
  const e = wr(i, mu),
    t = e.slice(NE, Cf),
    s = Cf;
  if (Ts(t) === un) {
    const f = s + Wu,
      g = f + wu,
      p = e.slice(s, f),
      v = e.slice(f, g),
      D = e.slice(g);
    return { type: t, sealed: D, iv: v, senderPublicKey: p };
  }
  const o = s + wu,
    c = e.slice(s, o),
    l = e.slice(o);
  return { type: t, sealed: l, iv: c };
}
function zE(i, e) {
  const t = Xo(i);
  return yp({
    type: Ts(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? lr(t.senderPublicKey, hr) : void 0,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  });
}
function yp(i) {
  const e = (i == null ? void 0 : i.type) || gp;
  if (e === un) {
    if (typeof (i == null ? void 0 : i.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (i == null ? void 0 : i.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: i == null ? void 0 : i.senderPublicKey,
    receiverPublicKey: i == null ? void 0 : i.receiverPublicKey,
  };
}
function Af(i) {
  return (
    i.type === un &&
    typeof i.senderPublicKey == "string" &&
    typeof i.receiverPublicKey == "string"
  );
}
var BE = Object.defineProperty,
  Tf = Object.getOwnPropertySymbols,
  HE = Object.prototype.hasOwnProperty,
  KE = Object.prototype.propertyIsEnumerable,
  Rf = (i, e, t) =>
    e in i
      ? BE(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Nf = (i, e) => {
    for (var t in e || (e = {})) HE.call(e, t) && Rf(i, t, e[t]);
    if (Tf) for (var t of Tf(e)) KE.call(e, t) && Rf(i, t, e[t]);
    return i;
  };
const kE = "ReactNative",
  Pr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  VE = "js";
function Yu() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Bn() {
  return !Ku() && !!ku() && navigator.product === kE;
}
function Hn() {
  return !Yu() && !!ku() && !!Ku();
}
function Rs() {
  return Bn()
    ? Pr.reactNative
    : Yu()
    ? Pr.node
    : Hn()
    ? Pr.browser
    : Pr.unknown;
}
function GE() {
  var i;
  try {
    return Bn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (i = global.Application) == null
        ? void 0
        : i.applicationId
      : void 0;
  } catch {
    return;
  }
}
function WE(i, e) {
  let t = Ds.parse(i);
  return (t = Nf(Nf({}, t), e)), (i = Ds.stringify(t)), i;
}
function YE() {
  return lp() || { name: "", description: "", url: "", icons: [""] };
}
function JE() {
  if (
    Rs() === Pr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: t, Version: s } = global.Platform;
    return [t, s].join("-");
  }
  const i = Nb();
  if (i === null) return "unknown";
  const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
  return i.type === "browser"
    ? [e, i.name, i.version].join("-")
    : [e, i.version].join("-");
}
function QE() {
  var i;
  const e = Rs();
  return e === Pr.browser
    ? [e, ((i = hp()) == null ? void 0 : i.host) || "unknown"].join(":")
    : e;
}
function XE(i, e, t) {
  const s = JE(),
    o = QE();
  return [[i, e].join("-"), [VE, t].join("-"), s, o].join("/");
}
function ZE({
  protocol: i,
  version: e,
  relayUrl: t,
  sdkVersion: s,
  auth: o,
  projectId: c,
  useOnCloseEvent: l,
  bundleId: f,
}) {
  const g = t.split("?"),
    p = XE(i, e, s),
    v = {
      auth: o,
      ua: p,
      projectId: c,
      useOnCloseEvent: l || void 0,
      origin: f || void 0,
    },
    D = WE(g[1] || "", v);
  return g[0] + "?" + D;
}
function on(i, e) {
  return i.filter((t) => e.includes(t)).length === i.length;
}
function vp(i) {
  return Object.fromEntries(i.entries());
}
function _p(i) {
  return new Map(Object.entries(i));
}
function Fn(i = ve.FIVE_MINUTES, e) {
  const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
  let s, o, c;
  return {
    resolve: (l) => {
      c && s && (clearTimeout(c), s(l));
    },
    reject: (l) => {
      c && o && (clearTimeout(c), o(l));
    },
    done: () =>
      new Promise((l, f) => {
        (c = setTimeout(() => {
          f(new Error(e));
        }, t)),
          (s = l),
          (o = f);
      }),
  };
}
function Ss(i, e, t) {
  return new Promise(async (s, o) => {
    const c = setTimeout(() => o(new Error(t)), e);
    try {
      const l = await i;
      s(l);
    } catch (l) {
      o(l);
    }
    clearTimeout(c);
  });
}
function mp(i, e) {
  if (typeof e == "string" && e.startsWith(`${i}:`)) return e;
  if (i.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (i.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${i}`);
}
function e3(i) {
  return mp("topic", i);
}
function t3(i) {
  return mp("id", i);
}
function wp(i) {
  const [e, t] = i.split(":"),
    s = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") s.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) s.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return s;
}
function Or(i, e) {
  return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i));
}
function Li(i) {
  return Date.now() >= ve.toMiliseconds(i);
}
function $t(i, e) {
  return `${i}${e ? `:${e}` : ""}`;
}
function kc(i = [], e = []) {
  return [...new Set([...i, ...e])];
}
async function r3({ id: i, topic: e, wcDeepLink: t }) {
  try {
    if (!t) return;
    const s = typeof t == "string" ? JSON.parse(t) : t;
    let o = s == null ? void 0 : s.href;
    if (typeof o != "string") return;
    o.endsWith("/") && (o = o.slice(0, -1));
    const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`,
      l = Rs();
    l === Pr.browser
      ? c.startsWith("https://")
        ? window.open(c, "_blank", "noreferrer noopener")
        : window.open(c, "_self", "noreferrer noopener")
      : l === Pr.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(c));
  } catch (s) {
    console.error(s);
  }
}
async function i3(i, e) {
  try {
    return (await i.getItem(e)) || (Hn() ? localStorage.getItem(e) : void 0);
  } catch (t) {
    console.error(t);
  }
}
const n3 = "irn";
function Eu(i) {
  return (i == null ? void 0 : i.relay) || { protocol: n3 };
}
function Go(i) {
  const e = CE[i];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${i}`);
  return e;
}
var s3 = Object.defineProperty,
  o3 = Object.defineProperties,
  a3 = Object.getOwnPropertyDescriptors,
  $f = Object.getOwnPropertySymbols,
  c3 = Object.prototype.hasOwnProperty,
  u3 = Object.prototype.propertyIsEnumerable,
  Ff = (i, e, t) =>
    e in i
      ? s3(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  h3 = (i, e) => {
    for (var t in e || (e = {})) c3.call(e, t) && Ff(i, t, e[t]);
    if ($f) for (var t of $f(e)) u3.call(e, t) && Ff(i, t, e[t]);
    return i;
  },
  l3 = (i, e) => o3(i, a3(e));
function f3(i, e = "-") {
  const t = {},
    s = "relay" + e;
  return (
    Object.keys(i).forEach((o) => {
      if (o.startsWith(s)) {
        const c = o.replace(s, ""),
          l = i[o];
        t[c] = l;
      }
    }),
    t
  );
}
function Lf(i) {
  (i = i.includes("wc://") ? i.replace("wc://", "") : i),
    (i = i.includes("wc:") ? i.replace("wc:", "") : i);
  const e = i.indexOf(":"),
    t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0,
    s = i.substring(0, e),
    o = i.substring(e + 1, t).split("@"),
    c = typeof t < "u" ? i.substring(t) : "",
    l = Ds.parse(c);
  return {
    protocol: s,
    topic: d3(o[0]),
    version: parseInt(o[1], 10),
    symKey: l.symKey,
    relay: f3(l),
    expiryTimestamp: l.expiryTimestamp
      ? parseInt(l.expiryTimestamp, 10)
      : void 0,
  };
}
function d3(i) {
  return i.startsWith("//") ? i.substring(2) : i;
}
function p3(i, e = "-") {
  const t = "relay",
    s = {};
  return (
    Object.keys(i).forEach((o) => {
      const c = t + e + o;
      i[o] && (s[c] = i[o]);
    }),
    s
  );
}
function g3(i) {
  return (
    `${i.protocol}:${i.topic}@${i.version}?` +
    Ds.stringify(
      l3(h3({ symKey: i.symKey }, p3(i.relay)), {
        expiryTimestamp: i.expiryTimestamp,
      })
    )
  );
}
function Kn(i) {
  const e = [];
  return (
    i.forEach((t) => {
      const [s, o] = t.split(":");
      e.push(`${s}:${o}`);
    }),
    e
  );
}
function y3(i) {
  const e = [];
  return (
    Object.values(i).forEach((t) => {
      e.push(...Kn(t.accounts));
    }),
    e
  );
}
function v3(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Kn(s.accounts).includes(e) && t.push(...s.methods);
    }),
    t
  );
}
function _3(i, e) {
  const t = [];
  return (
    Object.values(i).forEach((s) => {
      Kn(s.accounts).includes(e) && t.push(...s.events);
    }),
    t
  );
}
function Ju(i) {
  return i.includes(":");
}
function _s(i) {
  return Ju(i) ? i.split(":")[0] : i;
}
const m3 = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  w3 = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function ae(i, e) {
  const { message: t, code: s } = w3[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function mt(i, e) {
  const { message: t, code: s } = m3[i];
  return { message: e ? `${t} ${e}` : t, code: s };
}
function ni(i, e) {
  return Array.isArray(i) ? (typeof e < "u" && i.length ? i.every(e) : !0) : !1;
}
function Is(i) {
  return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length;
}
function ur(i) {
  return typeof i > "u";
}
function Gt(i, e) {
  return e && ur(i) ? !0 : typeof i == "string" && !!i.trim().length;
}
function Qu(i, e) {
  return e && ur(i) ? !0 : typeof i == "number" && !isNaN(i);
}
function b3(i, e) {
  const { requiredNamespaces: t } = e,
    s = Object.keys(i.namespaces),
    o = Object.keys(t);
  let c = !0;
  return on(o, s)
    ? (s.forEach((l) => {
        const { accounts: f, methods: g, events: p } = i.namespaces[l],
          v = Kn(f),
          D = t[l];
        (!on(dp(l, D), v) || !on(D.methods, g) || !on(D.events, p)) && (c = !1);
      }),
      c)
    : !1;
}
function Zo(i) {
  return Gt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1;
}
function E3(i) {
  if (Gt(i, !1) && i.includes(":")) {
    const e = i.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Zo(t);
    }
  }
  return !1;
}
function D3(i) {
  if (Gt(i, !1))
    try {
      return typeof new URL(i) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function S3(i) {
  var e;
  return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey;
}
function I3(i) {
  return i == null ? void 0 : i.topic;
}
function x3(i, e) {
  let t = null;
  return (
    Gt(i == null ? void 0 : i.publicKey, !1) ||
      (t = ae(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function Uf(i) {
  let e = !0;
  return ni(i) ? i.length && (e = i.every((t) => Gt(t, !1))) : (e = !1), e;
}
function O3(i, e, t) {
  let s = null;
  return (
    ni(e) && e.length
      ? e.forEach((o) => {
          s ||
            Zo(o) ||
            (s = mt(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Zo(i) ||
        (s = mt(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    s
  );
}
function P3(i, e, t) {
  let s = null;
  return (
    Object.entries(i).forEach(([o, c]) => {
      if (s) return;
      const l = O3(o, dp(o, c), `${e} ${t}`);
      l && (s = l);
    }),
    s
  );
}
function C3(i, e) {
  let t = null;
  return (
    ni(i)
      ? i.forEach((s) => {
          t ||
            E3(s) ||
            (t = mt(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = mt(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function A3(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = C3(s == null ? void 0 : s.accounts, `${e} namespace`);
      o && (t = o);
    }),
    t
  );
}
function T3(i, e) {
  let t = null;
  return (
    Uf(i == null ? void 0 : i.methods)
      ? Uf(i == null ? void 0 : i.events) ||
        (t = mt(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = mt(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function bp(i, e) {
  let t = null;
  return (
    Object.values(i).forEach((s) => {
      if (t) return;
      const o = T3(s, `${e}, namespace`);
      o && (t = o);
    }),
    t
  );
}
function R3(i, e, t) {
  let s = null;
  if (i && Is(i)) {
    const o = bp(i, e);
    o && (s = o);
    const c = P3(i, e, t);
    c && (s = c);
  } else
    s = ae("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return s;
}
function Vc(i, e) {
  let t = null;
  if (i && Is(i)) {
    const s = bp(i, e);
    s && (t = s);
    const o = A3(i, e);
    o && (t = o);
  } else
    t = ae(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function Ep(i) {
  return Gt(i.protocol, !0);
}
function N3(i, e) {
  let t = !1;
  return (
    e && !i
      ? (t = !0)
      : i &&
        ni(i) &&
        i.length &&
        i.forEach((s) => {
          t = Ep(s);
        }),
    t
  );
}
function $3(i) {
  return typeof i == "number";
}
function mr(i) {
  return typeof i < "u" && typeof i !== null;
}
function F3(i) {
  return !(
    !i ||
    typeof i != "object" ||
    !i.code ||
    !Qu(i.code, !1) ||
    !i.message ||
    !Gt(i.message, !1)
  );
}
function L3(i) {
  return !(ur(i) || !Gt(i.method, !1));
}
function U3(i) {
  return !(
    ur(i) ||
    (ur(i.result) && ur(i.error)) ||
    !Qu(i.id, !1) ||
    !Gt(i.jsonrpc, !1)
  );
}
function j3(i) {
  return !(ur(i) || !Gt(i.name, !1));
}
function jf(i, e) {
  return !(!Zo(e) || !y3(i).includes(e));
}
function M3(i, e, t) {
  return Gt(t, !1) ? v3(i, e).includes(t) : !1;
}
function q3(i, e, t) {
  return Gt(t, !1) ? _3(i, e).includes(t) : !1;
}
function Mf(i, e, t) {
  let s = null;
  const o = z3(i),
    c = B3(e),
    l = Object.keys(o),
    f = Object.keys(c),
    g = qf(Object.keys(i)),
    p = qf(Object.keys(e)),
    v = g.filter((D) => !p.includes(D));
  return (
    v.length &&
      (s = ae(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${v.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    on(l, f) ||
      (s = ae(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${l.toString()}
      Approved: ${f.toString()}`
      )),
    Object.keys(e).forEach((D) => {
      if (!D.includes(":") || s) return;
      const E = Kn(e[D].accounts);
      E.includes(D) ||
        (s = ae(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${D}
        Required: ${D}
        Approved: ${E.toString()}`
        ));
    }),
    l.forEach((D) => {
      s ||
        (on(o[D].methods, c[D].methods)
          ? on(o[D].events, c[D].events) ||
            (s = ae(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${D}`
            ))
          : (s = ae(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${D}`
            )));
    }),
    s
  );
}
function z3(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      var s;
      t.includes(":")
        ? (e[t] = i[t])
        : (s = i[t].chains) == null ||
          s.forEach((o) => {
            e[o] = { methods: i[t].methods, events: i[t].events };
          });
    }),
    e
  );
}
function qf(i) {
  return [...new Set(i.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function B3(i) {
  const e = {};
  return (
    Object.keys(i).forEach((t) => {
      if (t.includes(":")) e[t] = i[t];
      else {
        const s = Kn(i[t].accounts);
        s == null ||
          s.forEach((o) => {
            e[o] = {
              accounts: i[t].accounts.filter((c) => c.includes(`${o}:`)),
              methods: i[t].methods,
              events: i[t].events,
            };
          });
      }
    }),
    e
  );
}
function H3(i, e) {
  return Qu(i, !1) && i <= e.max && i >= e.min;
}
function zf() {
  const i = Rs();
  return new Promise((e) => {
    switch (i) {
      case Pr.browser:
        e(K3());
        break;
      case Pr.reactNative:
        e(k3());
        break;
      case Pr.node:
        e(V3());
        break;
      default:
        e(!0);
    }
  });
}
function K3() {
  return Hn() && (navigator == null ? void 0 : navigator.onLine);
}
async function k3() {
  if (Bn() && typeof global < "u" && global != null && global.NetInfo) {
    const i = await (global == null ? void 0 : global.NetInfo.fetch());
    return i == null ? void 0 : i.isConnected;
  }
  return !0;
}
function V3() {
  return !0;
}
function G3(i) {
  switch (Rs()) {
    case Pr.browser:
      W3(i);
      break;
    case Pr.reactNative:
      Y3(i);
      break;
  }
}
function W3(i) {
  !Bn() &&
    Hn() &&
    (window.addEventListener("online", () => i(!0)),
    window.addEventListener("offline", () => i(!1)));
}
function Y3(i) {
  Bn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((e) =>
        i(e == null ? void 0 : e.isConnected)
      ));
}
const Gc = {};
let zo = class {
  static get(e) {
    return Gc[e];
  }
  static set(e, t) {
    Gc[e] = t;
  }
  static delete(e) {
    delete Gc[e];
  }
};
const J3 =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Q3 =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  X3 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Z3(i, e) {
  if (
    i === "__proto__" ||
    (i === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    e6(i);
    return;
  }
  return e;
}
function e6(i) {
  console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`);
}
function Bo(i, e = {}) {
  if (typeof i != "string") return i;
  const t = i.trim();
  if (i[0] === '"' && i.at(-1) === '"' && !i.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    const s = t.toLowerCase();
    if (s === "true") return !0;
    if (s === "false") return !1;
    if (s === "undefined") return;
    if (s === "null") return null;
    if (s === "nan") return Number.NaN;
    if (s === "infinity") return Number.POSITIVE_INFINITY;
    if (s === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!X3.test(i)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return i;
  }
  try {
    if (J3.test(i) || Q3.test(i)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(i, Z3);
    }
    return JSON.parse(i);
  } catch (s) {
    if (e.strict) throw s;
    return i;
  }
}
function t6(i) {
  return !i || typeof i.then != "function" ? Promise.resolve(i) : i;
}
function Vt(i, ...e) {
  try {
    return t6(i(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function r6(i) {
  const e = typeof i;
  return i === null || (e !== "object" && e !== "function");
}
function i6(i) {
  const e = Object.getPrototypeOf(i);
  return !e || e.isPrototypeOf(Object);
}
function Wo(i) {
  if (r6(i)) return String(i);
  if (i6(i) || Array.isArray(i)) return JSON.stringify(i);
  if (typeof i.toJSON == "function") return Wo(i.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Dp() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Du = "base64:";
function n6(i) {
  if (typeof i == "string") return i;
  Dp();
  const e = Buffer.from(i).toString("base64");
  return Du + e;
}
function s6(i) {
  return typeof i != "string" || !i.startsWith(Du)
    ? i
    : (Dp(), Buffer.from(i.slice(Du.length), "base64"));
}
function _r(i) {
  return i
    ? i
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function o6(...i) {
  return _r(i.join(":"));
}
function Ho(i) {
  return (i = _r(i)), i ? i + ":" : "";
}
const a6 = "memory",
  c6 = () => {
    const i = new Map();
    return {
      name: a6,
      options: {},
      hasItem(e) {
        return i.has(e);
      },
      getItem(e) {
        return i.get(e) ?? null;
      },
      getItemRaw(e) {
        return i.get(e) ?? null;
      },
      setItem(e, t) {
        i.set(e, t);
      },
      setItemRaw(e, t) {
        i.set(e, t);
      },
      removeItem(e) {
        i.delete(e);
      },
      getKeys() {
        return Array.from(i.keys());
      },
      clear() {
        i.clear();
      },
      dispose() {
        i.clear();
      },
    };
  };
function u6(i = {}) {
  const e = {
      mounts: { "": i.driver || c6() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (p) => {
      for (const v of e.mountpoints)
        if (p.startsWith(v))
          return {
            base: v,
            relativeKey: p.slice(v.length),
            driver: e.mounts[v],
          };
      return { base: "", relativeKey: p, driver: e.mounts[""] };
    },
    s = (p, v) =>
      e.mountpoints
        .filter((D) => D.startsWith(p) || (v && p.startsWith(D)))
        .map((D) => ({
          relativeBase: p.length > D.length ? p.slice(D.length) : void 0,
          mountpoint: D,
          driver: e.mounts[D],
        })),
    o = (p, v) => {
      if (e.watching) {
        v = _r(v);
        for (const D of e.watchListeners) D(p, v);
      }
    },
    c = async () => {
      if (!e.watching) {
        e.watching = !0;
        for (const p in e.mounts) e.unwatch[p] = await Bf(e.mounts[p], o, p);
      }
    },
    l = async () => {
      if (e.watching) {
        for (const p in e.unwatch) await e.unwatch[p]();
        (e.unwatch = {}), (e.watching = !1);
      }
    },
    f = (p, v, D) => {
      const E = new Map(),
        I = (C) => {
          let q = E.get(C.base);
          return (
            q ||
              ((q = { driver: C.driver, base: C.base, items: [] }),
              E.set(C.base, q)),
            q
          );
        };
      for (const C of p) {
        const q = typeof C == "string",
          K = _r(q ? C : C.key),
          ee = q ? void 0 : C.value,
          R = q || !C.options ? v : { ...v, ...C.options },
          U = t(K);
        I(U).items.push({
          key: K,
          value: ee,
          relativeKey: U.relativeKey,
          options: R,
        });
      }
      return Promise.all([...E.values()].map((C) => D(C))).then((C) =>
        C.flat()
      );
    },
    g = {
      hasItem(p, v = {}) {
        p = _r(p);
        const { relativeKey: D, driver: E } = t(p);
        return Vt(E.hasItem, D, v);
      },
      getItem(p, v = {}) {
        p = _r(p);
        const { relativeKey: D, driver: E } = t(p);
        return Vt(E.getItem, D, v).then((I) => Bo(I));
      },
      getItems(p, v) {
        return f(p, v, (D) =>
          D.driver.getItems
            ? Vt(
                D.driver.getItems,
                D.items.map((E) => ({
                  key: E.relativeKey,
                  options: E.options,
                })),
                v
              ).then((E) =>
                E.map((I) => ({ key: o6(D.base, I.key), value: Bo(I.value) }))
              )
            : Promise.all(
                D.items.map((E) =>
                  Vt(D.driver.getItem, E.relativeKey, E.options).then((I) => ({
                    key: E.key,
                    value: Bo(I),
                  }))
                )
              )
        );
      },
      getItemRaw(p, v = {}) {
        p = _r(p);
        const { relativeKey: D, driver: E } = t(p);
        return E.getItemRaw
          ? Vt(E.getItemRaw, D, v)
          : Vt(E.getItem, D, v).then((I) => s6(I));
      },
      async setItem(p, v, D = {}) {
        if (v === void 0) return g.removeItem(p);
        p = _r(p);
        const { relativeKey: E, driver: I } = t(p);
        I.setItem &&
          (await Vt(I.setItem, E, Wo(v), D), I.watch || o("update", p));
      },
      async setItems(p, v) {
        await f(p, v, async (D) => {
          D.driver.setItems &&
            (await Vt(
              D.driver.setItems,
              D.items.map((E) => ({
                key: E.relativeKey,
                value: Wo(E.value),
                options: E.options,
              })),
              v
            )),
            D.driver.setItem &&
              (await Promise.all(
                D.items.map((E) =>
                  Vt(D.driver.setItem, E.relativeKey, Wo(E.value), E.options)
                )
              ));
        });
      },
      async setItemRaw(p, v, D = {}) {
        if (v === void 0) return g.removeItem(p, D);
        p = _r(p);
        const { relativeKey: E, driver: I } = t(p);
        if (I.setItemRaw) await Vt(I.setItemRaw, E, v, D);
        else if (I.setItem) await Vt(I.setItem, E, n6(v), D);
        else return;
        I.watch || o("update", p);
      },
      async removeItem(p, v = {}) {
        typeof v == "boolean" && (v = { removeMeta: v }), (p = _r(p));
        const { relativeKey: D, driver: E } = t(p);
        E.removeItem &&
          (await Vt(E.removeItem, D, v),
          (v.removeMeta || v.removeMata) &&
            (await Vt(E.removeItem, D + "$", v)),
          E.watch || o("remove", p));
      },
      async getMeta(p, v = {}) {
        typeof v == "boolean" && (v = { nativeOnly: v }), (p = _r(p));
        const { relativeKey: D, driver: E } = t(p),
          I = Object.create(null);
        if (
          (E.getMeta && Object.assign(I, await Vt(E.getMeta, D, v)),
          !v.nativeOnly)
        ) {
          const C = await Vt(E.getItem, D + "$", v).then((q) => Bo(q));
          C &&
            typeof C == "object" &&
            (typeof C.atime == "string" && (C.atime = new Date(C.atime)),
            typeof C.mtime == "string" && (C.mtime = new Date(C.mtime)),
            Object.assign(I, C));
        }
        return I;
      },
      setMeta(p, v, D = {}) {
        return this.setItem(p + "$", v, D);
      },
      removeMeta(p, v = {}) {
        return this.removeItem(p + "$", v);
      },
      async getKeys(p, v = {}) {
        p = Ho(p);
        const D = s(p, !0);
        let E = [];
        const I = [];
        for (const C of D) {
          const K = (await Vt(C.driver.getKeys, C.relativeBase, v))
            .map((ee) => C.mountpoint + _r(ee))
            .filter((ee) => !E.some((R) => ee.startsWith(R)));
          I.push(...K),
            (E = [
              C.mountpoint,
              ...E.filter((ee) => !ee.startsWith(C.mountpoint)),
            ]);
        }
        return p
          ? I.filter((C) => C.startsWith(p) && !C.endsWith("$"))
          : I.filter((C) => !C.endsWith("$"));
      },
      async clear(p, v = {}) {
        (p = Ho(p)),
          await Promise.all(
            s(p, !1).map(async (D) => {
              if (D.driver.clear) return Vt(D.driver.clear, D.relativeBase, v);
              if (D.driver.removeItem) {
                const E = await D.driver.getKeys(D.relativeBase || "", v);
                return Promise.all(E.map((I) => D.driver.removeItem(I, v)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(e.mounts).map((p) => Hf(p)));
      },
      async watch(p) {
        return (
          await c(),
          e.watchListeners.push(p),
          async () => {
            (e.watchListeners = e.watchListeners.filter((v) => v !== p)),
              e.watchListeners.length === 0 && (await l());
          }
        );
      },
      async unwatch() {
        (e.watchListeners = []), await l();
      },
      mount(p, v) {
        if (((p = Ho(p)), p && e.mounts[p]))
          throw new Error(`already mounted at ${p}`);
        return (
          p &&
            (e.mountpoints.push(p),
            e.mountpoints.sort((D, E) => E.length - D.length)),
          (e.mounts[p] = v),
          e.watching &&
            Promise.resolve(Bf(v, o, p))
              .then((D) => {
                e.unwatch[p] = D;
              })
              .catch(console.error),
          g
        );
      },
      async unmount(p, v = !0) {
        (p = Ho(p)),
          !(!p || !e.mounts[p]) &&
            (e.watching &&
              p in e.unwatch &&
              (e.unwatch[p](), delete e.unwatch[p]),
            v && (await Hf(e.mounts[p])),
            (e.mountpoints = e.mountpoints.filter((D) => D !== p)),
            delete e.mounts[p]);
      },
      getMount(p = "") {
        p = _r(p) + ":";
        const v = t(p);
        return { driver: v.driver, base: v.base };
      },
      getMounts(p = "", v = {}) {
        return (
          (p = _r(p)),
          s(p, v.parents).map((E) => ({ driver: E.driver, base: E.mountpoint }))
        );
      },
    };
  return g;
}
function Bf(i, e, t) {
  return i.watch ? i.watch((s, o) => e(s, t + o)) : () => {};
}
async function Hf(i) {
  typeof i.dispose == "function" && (await Vt(i.dispose));
}
function hn(i) {
  return new Promise((e, t) => {
    (i.oncomplete = i.onsuccess = () => e(i.result)),
      (i.onabort = i.onerror = () => t(i.error));
  });
}
function Sp(i, e) {
  const t = indexedDB.open(i);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const s = hn(t);
  return (o, c) => s.then((l) => c(l.transaction(e, o).objectStore(e)));
}
let Wc;
function Ns() {
  return Wc || (Wc = Sp("keyval-store", "keyval")), Wc;
}
function Kf(i, e = Ns()) {
  return e("readonly", (t) => hn(t.get(i)));
}
function h6(i, e, t = Ns()) {
  return t("readwrite", (s) => (s.put(e, i), hn(s.transaction)));
}
function l6(i, e = Ns()) {
  return e("readwrite", (t) => (t.delete(i), hn(t.transaction)));
}
function f6(i = Ns()) {
  return i("readwrite", (e) => (e.clear(), hn(e.transaction)));
}
function d6(i, e) {
  return (
    (i.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    hn(i.transaction)
  );
}
function p6(i = Ns()) {
  return i("readonly", (e) => {
    if (e.getAllKeys) return hn(e.getAllKeys());
    const t = [];
    return d6(e, (s) => t.push(s.key)).then(() => t);
  });
}
const g6 = (i) =>
    JSON.stringify(i, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  y6 = (i) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = i.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (s, o) =>
      typeof o == "string" && o.match(/^\d+n$/)
        ? BigInt(o.substring(0, o.length - 1))
        : o
    );
  };
function $s(i) {
  if (typeof i != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof i}`);
  try {
    return y6(i);
  } catch {
    return i;
  }
}
function an(i) {
  return typeof i == "string" ? i : g6(i) || "";
}
const v6 = "idb-keyval";
var _6 = (i = {}) => {
  const e = i.base && i.base.length > 0 ? `${i.base}:` : "",
    t = (o) => e + o;
  let s;
  return (
    i.dbName && i.storeName && (s = Sp(i.dbName, i.storeName)),
    {
      name: v6,
      options: i,
      async hasItem(o) {
        return !(typeof (await Kf(t(o), s)) > "u");
      },
      async getItem(o) {
        return (await Kf(t(o), s)) ?? null;
      },
      setItem(o, c) {
        return h6(t(o), c, s);
      },
      removeItem(o) {
        return l6(t(o), s);
      },
      getKeys() {
        return p6(s);
      },
      clear() {
        return f6(s);
      },
    }
  );
};
const m6 = "WALLET_CONNECT_V2_INDEXED_DB",
  w6 = "keyvaluestorage";
let b6 = class {
  constructor() {
    this.indexedDb = u6({ driver: _6({ dbName: m6, storeName: w6 }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (e) => [e.key, e.value]
    );
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, an(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Yc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Yo = { exports: {} };
(function () {
  let i;
  function e() {}
  (i = e),
    (i.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (i.prototype.setItem = function (t, s) {
      this[t] = String(s);
    }),
    (i.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (i.prototype.clear = function () {
      const t = this;
      Object.keys(t).forEach(function (s) {
        (t[s] = void 0), delete t[s];
      });
    }),
    (i.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    i.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof Yc < "u" && Yc.localStorage
      ? (Yo.exports = Yc.localStorage)
      : typeof window < "u" && window.localStorage
      ? (Yo.exports = window.localStorage)
      : (Yo.exports = new e());
})();
function E6(i) {
  var e;
  return [i[0], $s((e = i[1]) != null ? e : "")];
}
class D6 {
  constructor() {
    this.localStorage = Yo.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(E6);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return $s(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, an(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const S6 = "wc_storage_version",
  kf = 1,
  I6 = async (i, e, t) => {
    const s = S6,
      o = await e.getItem(s);
    if (o && o >= kf) {
      t(e);
      return;
    }
    const c = await i.getKeys();
    if (!c.length) {
      t(e);
      return;
    }
    const l = [];
    for (; c.length; ) {
      const f = c.shift();
      if (!f) continue;
      const g = f.toLowerCase();
      if (
        g.includes("wc@") ||
        g.includes("walletconnect") ||
        g.includes("wc_") ||
        g.includes("wallet_connect")
      ) {
        const p = await i.getItem(f);
        await e.setItem(f, p), l.push(f);
      }
    }
    await e.setItem(s, kf), t(e), x6(i, l);
  },
  x6 = async (i, e) => {
    e.length &&
      e.forEach(async (t) => {
        await i.removeItem(t);
      });
  };
let O6 = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (t) => {
        (this.storage = t), (this.initialized = !0);
      });
    const e = new D6();
    this.storage = e;
    try {
      const t = new b6();
      I6(e, t, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, t) {
    return await this.initialize(), this.storage.setItem(e, t);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.initialized && (clearInterval(t), e());
        }, 20);
      }));
  }
};
var kn = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Su =
  function (i, e) {
    return (
      (Su =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      Su(i, e)
    );
  };
function P6(i, e) {
  Su(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Iu = function () {
  return (
    (Iu =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
        }
        return e;
      }),
    Iu.apply(this, arguments)
  );
};
function C6(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function A6(i, e, t, s) {
  var o = arguments.length,
    c =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var f = i.length - 1; f >= 0; f--)
      (l = i[f]) && (c = (o < 3 ? l(c) : o > 3 ? l(e, t, c) : l(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function T6(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function R6(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function N6(i, e, t, s) {
  function o(c) {
    return c instanceof t
      ? c
      : new t(function (l) {
          l(c);
        });
  }
  return new (t || (t = Promise))(function (c, l) {
    function f(v) {
      try {
        p(s.next(v));
      } catch (D) {
        l(D);
      }
    }
    function g(v) {
      try {
        p(s.throw(v));
      } catch (D) {
        l(D);
      }
    }
    function p(v) {
      v.done ? c(v.value) : o(v.value).then(f, g);
    }
    p((s = s.apply(i, e || [])).next());
  });
}
function $6(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    c,
    l;
  return (
    (l = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function f(p) {
    return function (v) {
      return g([p, v]);
    };
  }
  function g(p) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (c =
              p[0] & 2
                ? o.return
                : p[0]
                ? o.throw || ((c = o.return) && c.call(o), 0)
                : o.next) &&
            !(c = c.call(o, p[1])).done)
        )
          return c;
        switch (((o = 0), c && (p = [p[0] & 2, c.value]), p[0])) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, (o = p[1]), (p = [0]);
            continue;
          case 7:
            (p = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((c = t.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (p[0] === 6 || p[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || (p[1] > c[0] && p[1] < c[3]))) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              (t.label = c[1]), (c = p);
              break;
            }
            if (c && t.label < c[2]) {
              (t.label = c[2]), t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(i, t);
      } catch (v) {
        (p = [6, v]), (o = 0);
      } finally {
        s = c = 0;
      }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function F6(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function L6(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function xu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Ip(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    c = [],
    l;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) c.push(o.value);
  } catch (f) {
    l = { error: f };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (l) throw l.error;
    }
  }
  return c;
}
function U6() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(Ip(arguments[e]));
  return i;
}
function j6() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], l = 0, f = c.length; l < f; l++, o++)
      s[o] = c[l];
  return s;
}
function xs(i) {
  return this instanceof xs ? ((this.v = i), this) : new xs(i);
}
function M6(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    c = [];
  return (
    (o = {}),
    l("next"),
    l("throw"),
    l("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function l(E) {
    s[E] &&
      (o[E] = function (I) {
        return new Promise(function (C, q) {
          c.push([E, I, C, q]) > 1 || f(E, I);
        });
      });
  }
  function f(E, I) {
    try {
      g(s[E](I));
    } catch (C) {
      D(c[0][3], C);
    }
  }
  function g(E) {
    E.value instanceof xs
      ? Promise.resolve(E.value.v).then(p, v)
      : D(c[0][2], E);
  }
  function p(E) {
    f("next", E);
  }
  function v(E) {
    f("throw", E);
  }
  function D(E, I) {
    E(I), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function q6(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, c) {
    e[o] = i[o]
      ? function (l) {
          return (t = !t)
            ? { value: xs(i[o](l)), done: o === "return" }
            : c
            ? c(l)
            : l;
        }
      : c;
  }
}
function z6(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof xu == "function" ? xu(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(c) {
    t[c] =
      i[c] &&
      function (l) {
        return new Promise(function (f, g) {
          (l = i[c](l)), o(f, g, l.done, l.value);
        });
      };
  }
  function o(c, l, f, g) {
    Promise.resolve(g).then(function (p) {
      c({ value: p, done: f });
    }, l);
  }
}
function B6(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function H6(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function K6(i) {
  return i && i.__esModule ? i : { default: i };
}
function k6(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function V6(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const G6 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Iu;
        },
        __asyncDelegator: q6,
        __asyncGenerator: M6,
        __asyncValues: z6,
        __await: xs,
        __awaiter: N6,
        __classPrivateFieldGet: k6,
        __classPrivateFieldSet: V6,
        __createBinding: F6,
        __decorate: A6,
        __exportStar: L6,
        __extends: P6,
        __generator: $6,
        __importDefault: K6,
        __importStar: H6,
        __makeTemplateObject: B6,
        __metadata: R6,
        __param: T6,
        __read: Ip,
        __rest: C6,
        __spread: U6,
        __spreadArrays: j6,
        __values: xu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ha = Mn(G6);
var ds = {},
  Jc = {},
  ps = {};
let ln = class {};
const W6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: ln },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Y6 = Mn(W6);
var Vf;
function J6() {
  if (Vf) return ps;
  (Vf = 1),
    Object.defineProperty(ps, "__esModule", { value: !0 }),
    (ps.IHeartBeat = void 0);
  const i = Y6;
  class e extends i.IEvents {
    constructor(s) {
      super();
    }
  }
  return (ps.IHeartBeat = e), ps;
}
var Gf;
function xp() {
  return (
    Gf ||
      ((Gf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          ha.__exportStar(J6(), i);
      })(Jc)),
    Jc
  );
}
var Qc = {},
  nn = {},
  Wf;
function Q6() {
  if (Wf) return nn;
  (Wf = 1),
    Object.defineProperty(nn, "__esModule", { value: !0 }),
    (nn.HEARTBEAT_EVENTS = nn.HEARTBEAT_INTERVAL = void 0);
  const i = ve;
  return (
    (nn.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
    (nn.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    nn
  );
}
var Yf;
function Op() {
  return (
    Yf ||
      ((Yf = 1),
      (function (i) {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          ha.__exportStar(Q6(), i);
      })(Qc)),
    Qc
  );
}
var Jf;
function X6() {
  if (Jf) return ds;
  (Jf = 1),
    Object.defineProperty(ds, "__esModule", { value: !0 }),
    (ds.HeartBeat = void 0);
  const i = ha,
    e = qr,
    t = ve,
    s = xp(),
    o = Op();
  class c extends s.IHeartBeat {
    constructor(f) {
      super(f),
        (this.events = new e.EventEmitter()),
        (this.interval = o.HEARTBEAT_INTERVAL),
        (this.interval =
          (f == null ? void 0 : f.interval) || o.HEARTBEAT_INTERVAL);
    }
    static init(f) {
      return i.__awaiter(this, void 0, void 0, function* () {
        const g = new c(f);
        return yield g.init(), g;
      });
    }
    init() {
      return i.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(f, g) {
      this.events.on(f, g);
    }
    once(f, g) {
      this.events.once(f, g);
    }
    off(f, g) {
      this.events.off(f, g);
    }
    removeListener(f, g) {
      this.events.removeListener(f, g);
    }
    initialize() {
      return i.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          t.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(o.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (ds.HeartBeat = c), ds;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = ha;
  e.__exportStar(X6(), i), e.__exportStar(xp(), i), e.__exportStar(Op(), i);
})(kn);
var Je = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Ou =
  function (i, e) {
    return (
      (Ou =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      Ou(i, e)
    );
  };
function Z6(i, e) {
  Ou(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Pu = function () {
  return (
    (Pu =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
        }
        return e;
      }),
    Pu.apply(this, arguments)
  );
};
function eD(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function tD(i, e, t, s) {
  var o = arguments.length,
    c =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var f = i.length - 1; f >= 0; f--)
      (l = i[f]) && (c = (o < 3 ? l(c) : o > 3 ? l(e, t, c) : l(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function rD(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function iD(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function nD(i, e, t, s) {
  function o(c) {
    return c instanceof t
      ? c
      : new t(function (l) {
          l(c);
        });
  }
  return new (t || (t = Promise))(function (c, l) {
    function f(v) {
      try {
        p(s.next(v));
      } catch (D) {
        l(D);
      }
    }
    function g(v) {
      try {
        p(s.throw(v));
      } catch (D) {
        l(D);
      }
    }
    function p(v) {
      v.done ? c(v.value) : o(v.value).then(f, g);
    }
    p((s = s.apply(i, e || [])).next());
  });
}
function sD(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    c,
    l;
  return (
    (l = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function f(p) {
    return function (v) {
      return g([p, v]);
    };
  }
  function g(p) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (c =
              p[0] & 2
                ? o.return
                : p[0]
                ? o.throw || ((c = o.return) && c.call(o), 0)
                : o.next) &&
            !(c = c.call(o, p[1])).done)
        )
          return c;
        switch (((o = 0), c && (p = [p[0] & 2, c.value]), p[0])) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, (o = p[1]), (p = [0]);
            continue;
          case 7:
            (p = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((c = t.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (p[0] === 6 || p[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || (p[1] > c[0] && p[1] < c[3]))) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              (t.label = c[1]), (c = p);
              break;
            }
            if (c && t.label < c[2]) {
              (t.label = c[2]), t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(i, t);
      } catch (v) {
        (p = [6, v]), (o = 0);
      } finally {
        s = c = 0;
      }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function oD(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function aD(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function Cu(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Pp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    c = [],
    l;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) c.push(o.value);
  } catch (f) {
    l = { error: f };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (l) throw l.error;
    }
  }
  return c;
}
function cD() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(Pp(arguments[e]));
  return i;
}
function uD() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], l = 0, f = c.length; l < f; l++, o++)
      s[o] = c[l];
  return s;
}
function Os(i) {
  return this instanceof Os ? ((this.v = i), this) : new Os(i);
}
function hD(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    c = [];
  return (
    (o = {}),
    l("next"),
    l("throw"),
    l("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function l(E) {
    s[E] &&
      (o[E] = function (I) {
        return new Promise(function (C, q) {
          c.push([E, I, C, q]) > 1 || f(E, I);
        });
      });
  }
  function f(E, I) {
    try {
      g(s[E](I));
    } catch (C) {
      D(c[0][3], C);
    }
  }
  function g(E) {
    E.value instanceof Os
      ? Promise.resolve(E.value.v).then(p, v)
      : D(c[0][2], E);
  }
  function p(E) {
    f("next", E);
  }
  function v(E) {
    f("throw", E);
  }
  function D(E, I) {
    E(I), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function lD(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, c) {
    e[o] = i[o]
      ? function (l) {
          return (t = !t)
            ? { value: Os(i[o](l)), done: o === "return" }
            : c
            ? c(l)
            : l;
        }
      : c;
  }
}
function fD(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof Cu == "function" ? Cu(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(c) {
    t[c] =
      i[c] &&
      function (l) {
        return new Promise(function (f, g) {
          (l = i[c](l)), o(f, g, l.done, l.value);
        });
      };
  }
  function o(c, l, f, g) {
    Promise.resolve(g).then(function (p) {
      c({ value: p, done: f });
    }, l);
  }
}
function dD(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function pD(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function gD(i) {
  return i && i.__esModule ? i : { default: i };
}
function yD(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function vD(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const _D = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Pu;
        },
        __asyncDelegator: lD,
        __asyncGenerator: hD,
        __asyncValues: fD,
        __await: Os,
        __awaiter: nD,
        __classPrivateFieldGet: yD,
        __classPrivateFieldSet: vD,
        __createBinding: oD,
        __decorate: tD,
        __exportStar: aD,
        __extends: Z6,
        __generator: sD,
        __importDefault: gD,
        __importStar: pD,
        __makeTemplateObject: dD,
        __metadata: iD,
        __param: rD,
        __read: Pp,
        __rest: eD,
        __spread: cD,
        __spreadArrays: uD,
        __values: Cu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  mD = Mn(_D);
var Xc, Qf;
function wD() {
  if (Qf) return Xc;
  Qf = 1;
  function i(t) {
    try {
      return JSON.stringify(t);
    } catch {
      return '"[Circular]"';
    }
  }
  Xc = e;
  function e(t, s, o) {
    var c = (o && o.stringify) || i,
      l = 1;
    if (typeof t == "object" && t !== null) {
      var f = s.length + l;
      if (f === 1) return t;
      var g = new Array(f);
      g[0] = c(t);
      for (var p = 1; p < f; p++) g[p] = c(s[p]);
      return g.join(" ");
    }
    if (typeof t != "string") return t;
    var v = s.length;
    if (v === 0) return t;
    for (
      var D = "", E = 1 - l, I = -1, C = (t && t.length) || 0, q = 0;
      q < C;

    ) {
      if (t.charCodeAt(q) === 37 && q + 1 < C) {
        switch (((I = I > -1 ? I : 0), t.charCodeAt(q + 1))) {
          case 100:
          case 102:
            if (E >= v || s[E] == null) break;
            I < q && (D += t.slice(I, q)),
              (D += Number(s[E])),
              (I = q + 2),
              q++;
            break;
          case 105:
            if (E >= v || s[E] == null) break;
            I < q && (D += t.slice(I, q)),
              (D += Math.floor(Number(s[E]))),
              (I = q + 2),
              q++;
            break;
          case 79:
          case 111:
          case 106:
            if (E >= v || s[E] === void 0) break;
            I < q && (D += t.slice(I, q));
            var K = typeof s[E];
            if (K === "string") {
              (D += "'" + s[E] + "'"), (I = q + 2), q++;
              break;
            }
            if (K === "function") {
              (D += s[E].name || "<anonymous>"), (I = q + 2), q++;
              break;
            }
            (D += c(s[E])), (I = q + 2), q++;
            break;
          case 115:
            if (E >= v) break;
            I < q && (D += t.slice(I, q)),
              (D += String(s[E])),
              (I = q + 2),
              q++;
            break;
          case 37:
            I < q && (D += t.slice(I, q)), (D += "%"), (I = q + 2), q++, E--;
            break;
        }
        ++E;
      }
      ++q;
    }
    return I === -1 ? t : (I < C && (D += t.slice(I)), D);
  }
  return Xc;
}
var Zc, Xf;
function bD() {
  if (Xf) return Zc;
  Xf = 1;
  const i = wD();
  Zc = o;
  const e = P().console || {},
    t = {
      mapHttpRequest: C,
      mapHttpResponse: C,
      wrapRequestSerializer: q,
      wrapResponseSerializer: q,
      wrapErrorSerializer: q,
      req: C,
      res: C,
      err: E,
    };
  function s(b, u) {
    return Array.isArray(b)
      ? b.filter(function (k) {
          return k !== "!stdSerializers.err";
        })
      : b === !0
      ? Object.keys(u)
      : !1;
  }
  function o(b) {
    (b = b || {}), (b.browser = b.browser || {});
    const u = b.browser.transmit;
    if (u && typeof u.send != "function")
      throw Error("pino: transmit option must have a send function");
    const w = b.browser.write || e;
    b.browser.write && (b.browser.asObject = !0);
    const k = b.serializers || {},
      G = s(b.browser.serialize, k);
    let oe = b.browser.serialize;
    Array.isArray(b.browser.serialize) &&
      b.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (oe = !1);
    const ue = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof w == "function" &&
      (w.error = w.fatal = w.warn = w.info = w.debug = w.trace = w),
      b.enabled === !1 && (b.level = "silent");
    const ge = b.level || "info",
      $ = Object.create(w);
    $.log || ($.log = K),
      Object.defineProperty($, "levelVal", { get: le }),
      Object.defineProperty($, "level", { get: re, set: W });
    const B = {
      transmit: u,
      serialize: G,
      asObject: b.browser.asObject,
      levels: ue,
      timestamp: I(b),
    };
    ($.levels = o.levels),
      ($.level = ge),
      ($.setMaxListeners =
        $.getMaxListeners =
        $.emit =
        $.addListener =
        $.on =
        $.prependListener =
        $.once =
        $.prependOnceListener =
        $.removeListener =
        $.removeAllListeners =
        $.listeners =
        $.listenerCount =
        $.eventNames =
        $.write =
        $.flush =
          K),
      ($.serializers = k),
      ($._serialize = G),
      ($._stdErrSerialize = oe),
      ($.child = te),
      u && ($._logEvent = D());
    function le() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function re() {
      return this._level;
    }
    function W(Y) {
      if (Y !== "silent" && !this.levels.values[Y])
        throw Error("unknown level " + Y);
      (this._level = Y),
        c(B, $, "error", "log"),
        c(B, $, "fatal", "error"),
        c(B, $, "warn", "error"),
        c(B, $, "info", "log"),
        c(B, $, "debug", "log"),
        c(B, $, "trace", "log");
    }
    function te(Y, ie) {
      if (!Y) throw new Error("missing bindings for child Pino");
      (ie = ie || {}), G && Y.serializers && (ie.serializers = Y.serializers);
      const xe = ie.serializers;
      if (G && xe) {
        var ne = Object.assign({}, k, xe),
          we = b.browser.serialize === !0 ? Object.keys(ne) : G;
        delete Y.serializers, g([Y], we, ne, this._stdErrSerialize);
      }
      function he(_e) {
        (this._childLevel = (_e._childLevel | 0) + 1),
          (this.error = p(_e, Y, "error")),
          (this.fatal = p(_e, Y, "fatal")),
          (this.warn = p(_e, Y, "warn")),
          (this.info = p(_e, Y, "info")),
          (this.debug = p(_e, Y, "debug")),
          (this.trace = p(_e, Y, "trace")),
          ne && ((this.serializers = ne), (this._serialize = we)),
          u && (this._logEvent = D([].concat(_e._logEvent.bindings, Y)));
      }
      return (he.prototype = this), new he(this);
    }
    return $;
  }
  (o.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  }),
    (o.stdSerializers = t),
    (o.stdTimeFunctions = Object.assign(
      {},
      { nullTime: ee, epochTime: R, unixTime: U, isoTime: O }
    ));
  function c(b, u, w, k) {
    const G = Object.getPrototypeOf(u);
    (u[w] =
      u.levelVal > u.levels.values[w] ? K : G[w] ? G[w] : e[w] || e[k] || K),
      l(b, u, w);
  }
  function l(b, u, w) {
    (!b.transmit && u[w] === K) ||
      (u[w] = (function (k) {
        return function () {
          const oe = b.timestamp(),
            ue = new Array(arguments.length),
            ge =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === e
                ? e
                : this;
          for (var $ = 0; $ < ue.length; $++) ue[$] = arguments[$];
          if (
            (b.serialize &&
              !b.asObject &&
              g(ue, this._serialize, this.serializers, this._stdErrSerialize),
            b.asObject ? k.call(ge, f(this, w, ue, oe)) : k.apply(ge, ue),
            b.transmit)
          ) {
            const B = b.transmit.level || u.level,
              le = o.levels.values[B],
              re = o.levels.values[w];
            if (re < le) return;
            v(
              this,
              {
                ts: oe,
                methodLevel: w,
                methodValue: re,
                transmitLevel: B,
                transmitValue: o.levels.values[b.transmit.level || u.level],
                send: b.transmit.send,
                val: u.levelVal,
              },
              ue
            );
          }
        };
      })(u[w]));
  }
  function f(b, u, w, k) {
    b._serialize && g(w, b._serialize, b.serializers, b._stdErrSerialize);
    const G = w.slice();
    let oe = G[0];
    const ue = {};
    k && (ue.time = k), (ue.level = o.levels.values[u]);
    let ge = (b._childLevel | 0) + 1;
    if ((ge < 1 && (ge = 1), oe !== null && typeof oe == "object")) {
      for (; ge-- && typeof G[0] == "object"; ) Object.assign(ue, G.shift());
      oe = G.length ? i(G.shift(), G) : void 0;
    } else typeof oe == "string" && (oe = i(G.shift(), G));
    return oe !== void 0 && (ue.msg = oe), ue;
  }
  function g(b, u, w, k) {
    for (const G in b)
      if (k && b[G] instanceof Error) b[G] = o.stdSerializers.err(b[G]);
      else if (typeof b[G] == "object" && !Array.isArray(b[G]))
        for (const oe in b[G])
          u && u.indexOf(oe) > -1 && oe in w && (b[G][oe] = w[oe](b[G][oe]));
  }
  function p(b, u, w) {
    return function () {
      const k = new Array(1 + arguments.length);
      k[0] = u;
      for (var G = 1; G < k.length; G++) k[G] = arguments[G - 1];
      return b[w].apply(this, k);
    };
  }
  function v(b, u, w) {
    const k = u.send,
      G = u.ts,
      oe = u.methodLevel,
      ue = u.methodValue,
      ge = u.val,
      $ = b._logEvent.bindings;
    g(
      w,
      b._serialize || Object.keys(b.serializers),
      b.serializers,
      b._stdErrSerialize === void 0 ? !0 : b._stdErrSerialize
    ),
      (b._logEvent.ts = G),
      (b._logEvent.messages = w.filter(function (B) {
        return $.indexOf(B) === -1;
      })),
      (b._logEvent.level.label = oe),
      (b._logEvent.level.value = ue),
      k(oe, b._logEvent, ge),
      (b._logEvent = D($));
  }
  function D(b) {
    return {
      ts: 0,
      messages: [],
      bindings: b || [],
      level: { label: "", value: 0 },
    };
  }
  function E(b) {
    const u = { type: b.constructor.name, msg: b.message, stack: b.stack };
    for (const w in b) u[w] === void 0 && (u[w] = b[w]);
    return u;
  }
  function I(b) {
    return typeof b.timestamp == "function"
      ? b.timestamp
      : b.timestamp === !1
      ? ee
      : R;
  }
  function C() {
    return {};
  }
  function q(b) {
    return b;
  }
  function K() {}
  function ee() {
    return !1;
  }
  function R() {
    return Date.now();
  }
  function U() {
    return Math.round(Date.now() / 1e3);
  }
  function O() {
    return new Date(Date.now()).toISOString();
  }
  function P() {
    function b(u) {
      return typeof u < "u" && u;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return b(self) || b(window) || b(this) || {};
    }
  }
  return Zc;
}
var sn = {},
  Zf;
function Cp() {
  return (
    Zf ||
      ((Zf = 1),
      Object.defineProperty(sn, "__esModule", { value: !0 }),
      (sn.PINO_CUSTOM_CONTEXT_KEY = sn.PINO_LOGGER_DEFAULTS = void 0),
      (sn.PINO_LOGGER_DEFAULTS = { level: "info" }),
      (sn.PINO_CUSTOM_CONTEXT_KEY = "custom_context")),
    sn
  );
}
var ar = {},
  ed;
function ED() {
  if (ed) return ar;
  (ed = 1),
    Object.defineProperty(ar, "__esModule", { value: !0 }),
    (ar.generateChildLogger =
      ar.formatChildLoggerContext =
      ar.getLoggerContext =
      ar.setBrowserLoggerContext =
      ar.getBrowserLoggerContext =
      ar.getDefaultLoggerOptions =
        void 0);
  const i = Cp();
  function e(f) {
    return Object.assign(Object.assign({}, f), {
      level: (f == null ? void 0 : f.level) || i.PINO_LOGGER_DEFAULTS.level,
    });
  }
  ar.getDefaultLoggerOptions = e;
  function t(f, g = i.PINO_CUSTOM_CONTEXT_KEY) {
    return f[g] || "";
  }
  ar.getBrowserLoggerContext = t;
  function s(f, g, p = i.PINO_CUSTOM_CONTEXT_KEY) {
    return (f[p] = g), f;
  }
  ar.setBrowserLoggerContext = s;
  function o(f, g = i.PINO_CUSTOM_CONTEXT_KEY) {
    let p = "";
    return (
      typeof f.bindings > "u"
        ? (p = t(f, g))
        : (p = f.bindings().context || ""),
      p
    );
  }
  ar.getLoggerContext = o;
  function c(f, g, p = i.PINO_CUSTOM_CONTEXT_KEY) {
    const v = o(f, p);
    return v.trim() ? `${v}/${g}` : g;
  }
  ar.formatChildLoggerContext = c;
  function l(f, g, p = i.PINO_CUSTOM_CONTEXT_KEY) {
    const v = c(f, g, p),
      D = f.child({ context: v });
    return s(D, v, p);
  }
  return (ar.generateChildLogger = l), ar;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), (i.pino = void 0);
  const e = mD,
    t = e.__importDefault(bD());
  Object.defineProperty(i, "pino", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  }),
    e.__exportStar(Cp(), i),
    e.__exportStar(ED(), i);
})(Je);
class DD extends ln {
  constructor(e) {
    super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
}
let SD = class extends ln {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  ID = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  xD = class extends ln {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  OD = class extends ln {
    constructor(e) {
      super();
    }
  },
  PD = class {
    constructor(e, t, s, o) {
      (this.core = e), (this.logger = t), (this.name = s);
    }
  };
class CD extends ln {
  constructor(e, t) {
    super(), (this.relayer = e), (this.logger = t);
  }
}
let AD = class extends ln {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  TD = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  RD = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  ND = class {
    constructor(e) {
      (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  $D = class {
    constructor(e) {
      this.client = e;
    }
  };
var Xu = {},
  Ap = {};
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = Le,
    t = Cr;
  (i.DIGEST_LENGTH = 64), (i.BLOCK_SIZE = 128);
  var s = (function () {
    function f() {
      (this.digestLength = i.DIGEST_LENGTH),
        (this.blockSize = i.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (f.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (f.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.clean = function () {
        t.wipe(this._buffer),
          t.wipe(this._tempHi),
          t.wipe(this._tempLo),
          this.reset();
      }),
      (f.prototype.update = function (g, p) {
        if ((p === void 0 && (p = g.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var v = 0;
        if (((this._bytesHashed += p), this._bufferLength > 0)) {
          for (; this._bufferLength < i.BLOCK_SIZE && p > 0; )
            (this._buffer[this._bufferLength++] = g[v++]), p--;
          this._bufferLength === this.blockSize &&
            (c(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          p >= this.blockSize &&
          ((v = c(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            g,
            v,
            p
          )),
          (p %= this.blockSize));
          p > 0;

        )
          (this._buffer[this._bufferLength++] = g[v++]), p--;
        return this;
      }),
      (f.prototype.finish = function (g) {
        if (!this._finished) {
          var p = this._bytesHashed,
            v = this._bufferLength,
            D = (p / 536870912) | 0,
            E = p << 3,
            I = p % 128 < 112 ? 128 : 256;
          this._buffer[v] = 128;
          for (var C = v + 1; C < I - 8; C++) this._buffer[C] = 0;
          e.writeUint32BE(D, this._buffer, I - 8),
            e.writeUint32BE(E, this._buffer, I - 4),
            c(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              I
            ),
            (this._finished = !0);
        }
        for (var C = 0; C < this.digestLength / 8; C++)
          e.writeUint32BE(this._stateHi[C], g, C * 8),
            e.writeUint32BE(this._stateLo[C], g, C * 8 + 4);
        return this;
      }),
      (f.prototype.digest = function () {
        var g = new Uint8Array(this.digestLength);
        return this.finish(g), g;
      }),
      (f.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (f.prototype.restoreState = function (g) {
        return (
          this._stateHi.set(g.stateHi),
          this._stateLo.set(g.stateLo),
          (this._bufferLength = g.bufferLength),
          g.buffer && this._buffer.set(g.buffer),
          (this._bytesHashed = g.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (f.prototype.cleanSavedState = function (g) {
        t.wipe(g.stateHi),
          t.wipe(g.stateLo),
          g.buffer && t.wipe(g.buffer),
          (g.bufferLength = 0),
          (g.bytesHashed = 0);
      }),
      f
    );
  })();
  i.SHA512 = s;
  var o = new Int32Array([
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
  ]);
  function c(f, g, p, v, D, E, I) {
    for (
      var C = p[0],
        q = p[1],
        K = p[2],
        ee = p[3],
        R = p[4],
        U = p[5],
        O = p[6],
        P = p[7],
        b = v[0],
        u = v[1],
        w = v[2],
        k = v[3],
        G = v[4],
        oe = v[5],
        ue = v[6],
        ge = v[7],
        $,
        B,
        le,
        re,
        W,
        te,
        Y,
        ie;
      I >= 128;

    ) {
      for (var xe = 0; xe < 16; xe++) {
        var ne = 8 * xe + E;
        (f[xe] = e.readUint32BE(D, ne)), (g[xe] = e.readUint32BE(D, ne + 4));
      }
      for (var xe = 0; xe < 80; xe++) {
        var we = C,
          he = q,
          _e = K,
          z = ee,
          M = R,
          N = U,
          d = O,
          A = P,
          se = b,
          fe = u,
          Se = w,
          Be = k,
          ke = G,
          Ue = oe,
          pt = ue,
          gt = ge;
        if (
          (($ = P),
          (B = ge),
          (W = B & 65535),
          (te = B >>> 16),
          (Y = $ & 65535),
          (ie = $ >>> 16),
          ($ =
            ((R >>> 14) | (G << (32 - 14))) ^
            ((R >>> 18) | (G << (32 - 18))) ^
            ((G >>> (41 - 32)) | (R << (32 - (41 - 32))))),
          (B =
            ((G >>> 14) | (R << (32 - 14))) ^
            ((G >>> 18) | (R << (32 - 18))) ^
            ((R >>> (41 - 32)) | (G << (32 - (41 - 32))))),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          ($ = (R & U) ^ (~R & O)),
          (B = (G & oe) ^ (~G & ue)),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          ($ = o[xe * 2]),
          (B = o[xe * 2 + 1]),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          ($ = f[xe % 16]),
          (B = g[xe % 16]),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          (te += W >>> 16),
          (Y += te >>> 16),
          (ie += Y >>> 16),
          (le = (Y & 65535) | (ie << 16)),
          (re = (W & 65535) | (te << 16)),
          ($ = le),
          (B = re),
          (W = B & 65535),
          (te = B >>> 16),
          (Y = $ & 65535),
          (ie = $ >>> 16),
          ($ =
            ((C >>> 28) | (b << (32 - 28))) ^
            ((b >>> (34 - 32)) | (C << (32 - (34 - 32)))) ^
            ((b >>> (39 - 32)) | (C << (32 - (39 - 32))))),
          (B =
            ((b >>> 28) | (C << (32 - 28))) ^
            ((C >>> (34 - 32)) | (b << (32 - (34 - 32)))) ^
            ((C >>> (39 - 32)) | (b << (32 - (39 - 32))))),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          ($ = (C & q) ^ (C & K) ^ (q & K)),
          (B = (b & u) ^ (b & w) ^ (u & w)),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          (te += W >>> 16),
          (Y += te >>> 16),
          (ie += Y >>> 16),
          (A = (Y & 65535) | (ie << 16)),
          (gt = (W & 65535) | (te << 16)),
          ($ = z),
          (B = Be),
          (W = B & 65535),
          (te = B >>> 16),
          (Y = $ & 65535),
          (ie = $ >>> 16),
          ($ = le),
          (B = re),
          (W += B & 65535),
          (te += B >>> 16),
          (Y += $ & 65535),
          (ie += $ >>> 16),
          (te += W >>> 16),
          (Y += te >>> 16),
          (ie += Y >>> 16),
          (z = (Y & 65535) | (ie << 16)),
          (Be = (W & 65535) | (te << 16)),
          (q = we),
          (K = he),
          (ee = _e),
          (R = z),
          (U = M),
          (O = N),
          (P = d),
          (C = A),
          (u = se),
          (w = fe),
          (k = Se),
          (G = Be),
          (oe = ke),
          (ue = Ue),
          (ge = pt),
          (b = gt),
          xe % 16 === 15)
        )
          for (var ne = 0; ne < 16; ne++)
            ($ = f[ne]),
              (B = g[ne]),
              (W = B & 65535),
              (te = B >>> 16),
              (Y = $ & 65535),
              (ie = $ >>> 16),
              ($ = f[(ne + 9) % 16]),
              (B = g[(ne + 9) % 16]),
              (W += B & 65535),
              (te += B >>> 16),
              (Y += $ & 65535),
              (ie += $ >>> 16),
              (le = f[(ne + 1) % 16]),
              (re = g[(ne + 1) % 16]),
              ($ =
                ((le >>> 1) | (re << (32 - 1))) ^
                ((le >>> 8) | (re << (32 - 8))) ^
                (le >>> 7)),
              (B =
                ((re >>> 1) | (le << (32 - 1))) ^
                ((re >>> 8) | (le << (32 - 8))) ^
                ((re >>> 7) | (le << (32 - 7)))),
              (W += B & 65535),
              (te += B >>> 16),
              (Y += $ & 65535),
              (ie += $ >>> 16),
              (le = f[(ne + 14) % 16]),
              (re = g[(ne + 14) % 16]),
              ($ =
                ((le >>> 19) | (re << (32 - 19))) ^
                ((re >>> (61 - 32)) | (le << (32 - (61 - 32)))) ^
                (le >>> 6)),
              (B =
                ((re >>> 19) | (le << (32 - 19))) ^
                ((le >>> (61 - 32)) | (re << (32 - (61 - 32)))) ^
                ((re >>> 6) | (le << (32 - 6)))),
              (W += B & 65535),
              (te += B >>> 16),
              (Y += $ & 65535),
              (ie += $ >>> 16),
              (te += W >>> 16),
              (Y += te >>> 16),
              (ie += Y >>> 16),
              (f[ne] = (Y & 65535) | (ie << 16)),
              (g[ne] = (W & 65535) | (te << 16));
      }
      ($ = C),
        (B = b),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[0]),
        (B = v[0]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[0] = C = (Y & 65535) | (ie << 16)),
        (v[0] = b = (W & 65535) | (te << 16)),
        ($ = q),
        (B = u),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[1]),
        (B = v[1]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[1] = q = (Y & 65535) | (ie << 16)),
        (v[1] = u = (W & 65535) | (te << 16)),
        ($ = K),
        (B = w),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[2]),
        (B = v[2]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[2] = K = (Y & 65535) | (ie << 16)),
        (v[2] = w = (W & 65535) | (te << 16)),
        ($ = ee),
        (B = k),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[3]),
        (B = v[3]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[3] = ee = (Y & 65535) | (ie << 16)),
        (v[3] = k = (W & 65535) | (te << 16)),
        ($ = R),
        (B = G),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[4]),
        (B = v[4]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[4] = R = (Y & 65535) | (ie << 16)),
        (v[4] = G = (W & 65535) | (te << 16)),
        ($ = U),
        (B = oe),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[5]),
        (B = v[5]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[5] = U = (Y & 65535) | (ie << 16)),
        (v[5] = oe = (W & 65535) | (te << 16)),
        ($ = O),
        (B = ue),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[6]),
        (B = v[6]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[6] = O = (Y & 65535) | (ie << 16)),
        (v[6] = ue = (W & 65535) | (te << 16)),
        ($ = P),
        (B = ge),
        (W = B & 65535),
        (te = B >>> 16),
        (Y = $ & 65535),
        (ie = $ >>> 16),
        ($ = p[7]),
        (B = v[7]),
        (W += B & 65535),
        (te += B >>> 16),
        (Y += $ & 65535),
        (ie += $ >>> 16),
        (te += W >>> 16),
        (Y += te >>> 16),
        (ie += Y >>> 16),
        (p[7] = P = (Y & 65535) | (ie << 16)),
        (v[7] = ge = (W & 65535) | (te << 16)),
        (E += 128),
        (I -= 128);
    }
    return E;
  }
  function l(f) {
    var g = new s();
    g.update(f);
    var p = g.digest();
    return g.clean(), p;
  }
  i.hash = l;
})(Ap);
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 }),
    (i.convertSecretKeyToX25519 =
      i.convertPublicKeyToX25519 =
      i.verify =
      i.sign =
      i.extractPublicKeyFromSecretKey =
      i.generateKeyPair =
      i.generateKeyPairFromSeed =
      i.SEED_LENGTH =
      i.SECRET_KEY_LENGTH =
      i.PUBLIC_KEY_LENGTH =
      i.SIGNATURE_LENGTH =
        void 0);
  const e = qn,
    t = Ap,
    s = Cr;
  (i.SIGNATURE_LENGTH = 64),
    (i.PUBLIC_KEY_LENGTH = 32),
    (i.SECRET_KEY_LENGTH = 64),
    (i.SEED_LENGTH = 32);
  function o(z) {
    const M = new Float64Array(16);
    if (z) for (let N = 0; N < z.length; N++) M[N] = z[N];
    return M;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const l = o(),
    f = o([1]),
    g = o([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    p = o([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    v = o([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    D = o([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    E = o([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function I(z, M) {
    for (let N = 0; N < 16; N++) z[N] = M[N] | 0;
  }
  function C(z) {
    let M = 1;
    for (let N = 0; N < 16; N++) {
      let d = z[N] + M + 65535;
      (M = Math.floor(d / 65536)), (z[N] = d - M * 65536);
    }
    z[0] += M - 1 + 37 * (M - 1);
  }
  function q(z, M, N) {
    const d = ~(N - 1);
    for (let A = 0; A < 16; A++) {
      const se = d & (z[A] ^ M[A]);
      (z[A] ^= se), (M[A] ^= se);
    }
  }
  function K(z, M) {
    const N = o(),
      d = o();
    for (let A = 0; A < 16; A++) d[A] = M[A];
    C(d), C(d), C(d);
    for (let A = 0; A < 2; A++) {
      N[0] = d[0] - 65517;
      for (let fe = 1; fe < 15; fe++)
        (N[fe] = d[fe] - 65535 - ((N[fe - 1] >> 16) & 1)), (N[fe - 1] &= 65535);
      N[15] = d[15] - 32767 - ((N[14] >> 16) & 1);
      const se = (N[15] >> 16) & 1;
      (N[14] &= 65535), q(d, N, 1 - se);
    }
    for (let A = 0; A < 16; A++)
      (z[2 * A] = d[A] & 255), (z[2 * A + 1] = d[A] >> 8);
  }
  function ee(z, M) {
    let N = 0;
    for (let d = 0; d < 32; d++) N |= z[d] ^ M[d];
    return (1 & ((N - 1) >>> 8)) - 1;
  }
  function R(z, M) {
    const N = new Uint8Array(32),
      d = new Uint8Array(32);
    return K(N, z), K(d, M), ee(N, d);
  }
  function U(z) {
    const M = new Uint8Array(32);
    return K(M, z), M[0] & 1;
  }
  function O(z, M) {
    for (let N = 0; N < 16; N++) z[N] = M[2 * N] + (M[2 * N + 1] << 8);
    z[15] &= 32767;
  }
  function P(z, M, N) {
    for (let d = 0; d < 16; d++) z[d] = M[d] + N[d];
  }
  function b(z, M, N) {
    for (let d = 0; d < 16; d++) z[d] = M[d] - N[d];
  }
  function u(z, M, N) {
    let d,
      A,
      se = 0,
      fe = 0,
      Se = 0,
      Be = 0,
      ke = 0,
      Ue = 0,
      pt = 0,
      gt = 0,
      Me = 0,
      Ie = 0,
      Ne = 0,
      $e = 0,
      qe = 0,
      Pe = 0,
      Fe = 0,
      De = 0,
      Ce = 0,
      He = 0,
      Oe = 0,
      Ve = 0,
      We = 0,
      et = 0,
      tt = 0,
      Qe = 0,
      tr = 0,
      fr = 0,
      Yr = 0,
      rr = 0,
      si = 0,
      Ii = 0,
      zi = 0,
      Dt = N[0],
      yt = N[1],
      St = N[2],
      It = N[3],
      bt = N[4],
      vt = N[5],
      Ft = N[6],
      Lt = N[7],
      xt = N[8],
      Ut = N[9],
      Ot = N[10],
      At = N[11],
      Pt = N[12],
      ht = N[13],
      jt = N[14],
      Mt = N[15];
    (d = M[0]),
      (se += d * Dt),
      (fe += d * yt),
      (Se += d * St),
      (Be += d * It),
      (ke += d * bt),
      (Ue += d * vt),
      (pt += d * Ft),
      (gt += d * Lt),
      (Me += d * xt),
      (Ie += d * Ut),
      (Ne += d * Ot),
      ($e += d * At),
      (qe += d * Pt),
      (Pe += d * ht),
      (Fe += d * jt),
      (De += d * Mt),
      (d = M[1]),
      (fe += d * Dt),
      (Se += d * yt),
      (Be += d * St),
      (ke += d * It),
      (Ue += d * bt),
      (pt += d * vt),
      (gt += d * Ft),
      (Me += d * Lt),
      (Ie += d * xt),
      (Ne += d * Ut),
      ($e += d * Ot),
      (qe += d * At),
      (Pe += d * Pt),
      (Fe += d * ht),
      (De += d * jt),
      (Ce += d * Mt),
      (d = M[2]),
      (Se += d * Dt),
      (Be += d * yt),
      (ke += d * St),
      (Ue += d * It),
      (pt += d * bt),
      (gt += d * vt),
      (Me += d * Ft),
      (Ie += d * Lt),
      (Ne += d * xt),
      ($e += d * Ut),
      (qe += d * Ot),
      (Pe += d * At),
      (Fe += d * Pt),
      (De += d * ht),
      (Ce += d * jt),
      (He += d * Mt),
      (d = M[3]),
      (Be += d * Dt),
      (ke += d * yt),
      (Ue += d * St),
      (pt += d * It),
      (gt += d * bt),
      (Me += d * vt),
      (Ie += d * Ft),
      (Ne += d * Lt),
      ($e += d * xt),
      (qe += d * Ut),
      (Pe += d * Ot),
      (Fe += d * At),
      (De += d * Pt),
      (Ce += d * ht),
      (He += d * jt),
      (Oe += d * Mt),
      (d = M[4]),
      (ke += d * Dt),
      (Ue += d * yt),
      (pt += d * St),
      (gt += d * It),
      (Me += d * bt),
      (Ie += d * vt),
      (Ne += d * Ft),
      ($e += d * Lt),
      (qe += d * xt),
      (Pe += d * Ut),
      (Fe += d * Ot),
      (De += d * At),
      (Ce += d * Pt),
      (He += d * ht),
      (Oe += d * jt),
      (Ve += d * Mt),
      (d = M[5]),
      (Ue += d * Dt),
      (pt += d * yt),
      (gt += d * St),
      (Me += d * It),
      (Ie += d * bt),
      (Ne += d * vt),
      ($e += d * Ft),
      (qe += d * Lt),
      (Pe += d * xt),
      (Fe += d * Ut),
      (De += d * Ot),
      (Ce += d * At),
      (He += d * Pt),
      (Oe += d * ht),
      (Ve += d * jt),
      (We += d * Mt),
      (d = M[6]),
      (pt += d * Dt),
      (gt += d * yt),
      (Me += d * St),
      (Ie += d * It),
      (Ne += d * bt),
      ($e += d * vt),
      (qe += d * Ft),
      (Pe += d * Lt),
      (Fe += d * xt),
      (De += d * Ut),
      (Ce += d * Ot),
      (He += d * At),
      (Oe += d * Pt),
      (Ve += d * ht),
      (We += d * jt),
      (et += d * Mt),
      (d = M[7]),
      (gt += d * Dt),
      (Me += d * yt),
      (Ie += d * St),
      (Ne += d * It),
      ($e += d * bt),
      (qe += d * vt),
      (Pe += d * Ft),
      (Fe += d * Lt),
      (De += d * xt),
      (Ce += d * Ut),
      (He += d * Ot),
      (Oe += d * At),
      (Ve += d * Pt),
      (We += d * ht),
      (et += d * jt),
      (tt += d * Mt),
      (d = M[8]),
      (Me += d * Dt),
      (Ie += d * yt),
      (Ne += d * St),
      ($e += d * It),
      (qe += d * bt),
      (Pe += d * vt),
      (Fe += d * Ft),
      (De += d * Lt),
      (Ce += d * xt),
      (He += d * Ut),
      (Oe += d * Ot),
      (Ve += d * At),
      (We += d * Pt),
      (et += d * ht),
      (tt += d * jt),
      (Qe += d * Mt),
      (d = M[9]),
      (Ie += d * Dt),
      (Ne += d * yt),
      ($e += d * St),
      (qe += d * It),
      (Pe += d * bt),
      (Fe += d * vt),
      (De += d * Ft),
      (Ce += d * Lt),
      (He += d * xt),
      (Oe += d * Ut),
      (Ve += d * Ot),
      (We += d * At),
      (et += d * Pt),
      (tt += d * ht),
      (Qe += d * jt),
      (tr += d * Mt),
      (d = M[10]),
      (Ne += d * Dt),
      ($e += d * yt),
      (qe += d * St),
      (Pe += d * It),
      (Fe += d * bt),
      (De += d * vt),
      (Ce += d * Ft),
      (He += d * Lt),
      (Oe += d * xt),
      (Ve += d * Ut),
      (We += d * Ot),
      (et += d * At),
      (tt += d * Pt),
      (Qe += d * ht),
      (tr += d * jt),
      (fr += d * Mt),
      (d = M[11]),
      ($e += d * Dt),
      (qe += d * yt),
      (Pe += d * St),
      (Fe += d * It),
      (De += d * bt),
      (Ce += d * vt),
      (He += d * Ft),
      (Oe += d * Lt),
      (Ve += d * xt),
      (We += d * Ut),
      (et += d * Ot),
      (tt += d * At),
      (Qe += d * Pt),
      (tr += d * ht),
      (fr += d * jt),
      (Yr += d * Mt),
      (d = M[12]),
      (qe += d * Dt),
      (Pe += d * yt),
      (Fe += d * St),
      (De += d * It),
      (Ce += d * bt),
      (He += d * vt),
      (Oe += d * Ft),
      (Ve += d * Lt),
      (We += d * xt),
      (et += d * Ut),
      (tt += d * Ot),
      (Qe += d * At),
      (tr += d * Pt),
      (fr += d * ht),
      (Yr += d * jt),
      (rr += d * Mt),
      (d = M[13]),
      (Pe += d * Dt),
      (Fe += d * yt),
      (De += d * St),
      (Ce += d * It),
      (He += d * bt),
      (Oe += d * vt),
      (Ve += d * Ft),
      (We += d * Lt),
      (et += d * xt),
      (tt += d * Ut),
      (Qe += d * Ot),
      (tr += d * At),
      (fr += d * Pt),
      (Yr += d * ht),
      (rr += d * jt),
      (si += d * Mt),
      (d = M[14]),
      (Fe += d * Dt),
      (De += d * yt),
      (Ce += d * St),
      (He += d * It),
      (Oe += d * bt),
      (Ve += d * vt),
      (We += d * Ft),
      (et += d * Lt),
      (tt += d * xt),
      (Qe += d * Ut),
      (tr += d * Ot),
      (fr += d * At),
      (Yr += d * Pt),
      (rr += d * ht),
      (si += d * jt),
      (Ii += d * Mt),
      (d = M[15]),
      (De += d * Dt),
      (Ce += d * yt),
      (He += d * St),
      (Oe += d * It),
      (Ve += d * bt),
      (We += d * vt),
      (et += d * Ft),
      (tt += d * Lt),
      (Qe += d * xt),
      (tr += d * Ut),
      (fr += d * Ot),
      (Yr += d * At),
      (rr += d * Pt),
      (si += d * ht),
      (Ii += d * jt),
      (zi += d * Mt),
      (se += 38 * Ce),
      (fe += 38 * He),
      (Se += 38 * Oe),
      (Be += 38 * Ve),
      (ke += 38 * We),
      (Ue += 38 * et),
      (pt += 38 * tt),
      (gt += 38 * Qe),
      (Me += 38 * tr),
      (Ie += 38 * fr),
      (Ne += 38 * Yr),
      ($e += 38 * rr),
      (qe += 38 * si),
      (Pe += 38 * Ii),
      (Fe += 38 * zi),
      (A = 1),
      (d = se + A + 65535),
      (A = Math.floor(d / 65536)),
      (se = d - A * 65536),
      (d = fe + A + 65535),
      (A = Math.floor(d / 65536)),
      (fe = d - A * 65536),
      (d = Se + A + 65535),
      (A = Math.floor(d / 65536)),
      (Se = d - A * 65536),
      (d = Be + A + 65535),
      (A = Math.floor(d / 65536)),
      (Be = d - A * 65536),
      (d = ke + A + 65535),
      (A = Math.floor(d / 65536)),
      (ke = d - A * 65536),
      (d = Ue + A + 65535),
      (A = Math.floor(d / 65536)),
      (Ue = d - A * 65536),
      (d = pt + A + 65535),
      (A = Math.floor(d / 65536)),
      (pt = d - A * 65536),
      (d = gt + A + 65535),
      (A = Math.floor(d / 65536)),
      (gt = d - A * 65536),
      (d = Me + A + 65535),
      (A = Math.floor(d / 65536)),
      (Me = d - A * 65536),
      (d = Ie + A + 65535),
      (A = Math.floor(d / 65536)),
      (Ie = d - A * 65536),
      (d = Ne + A + 65535),
      (A = Math.floor(d / 65536)),
      (Ne = d - A * 65536),
      (d = $e + A + 65535),
      (A = Math.floor(d / 65536)),
      ($e = d - A * 65536),
      (d = qe + A + 65535),
      (A = Math.floor(d / 65536)),
      (qe = d - A * 65536),
      (d = Pe + A + 65535),
      (A = Math.floor(d / 65536)),
      (Pe = d - A * 65536),
      (d = Fe + A + 65535),
      (A = Math.floor(d / 65536)),
      (Fe = d - A * 65536),
      (d = De + A + 65535),
      (A = Math.floor(d / 65536)),
      (De = d - A * 65536),
      (se += A - 1 + 37 * (A - 1)),
      (A = 1),
      (d = se + A + 65535),
      (A = Math.floor(d / 65536)),
      (se = d - A * 65536),
      (d = fe + A + 65535),
      (A = Math.floor(d / 65536)),
      (fe = d - A * 65536),
      (d = Se + A + 65535),
      (A = Math.floor(d / 65536)),
      (Se = d - A * 65536),
      (d = Be + A + 65535),
      (A = Math.floor(d / 65536)),
      (Be = d - A * 65536),
      (d = ke + A + 65535),
      (A = Math.floor(d / 65536)),
      (ke = d - A * 65536),
      (d = Ue + A + 65535),
      (A = Math.floor(d / 65536)),
      (Ue = d - A * 65536),
      (d = pt + A + 65535),
      (A = Math.floor(d / 65536)),
      (pt = d - A * 65536),
      (d = gt + A + 65535),
      (A = Math.floor(d / 65536)),
      (gt = d - A * 65536),
      (d = Me + A + 65535),
      (A = Math.floor(d / 65536)),
      (Me = d - A * 65536),
      (d = Ie + A + 65535),
      (A = Math.floor(d / 65536)),
      (Ie = d - A * 65536),
      (d = Ne + A + 65535),
      (A = Math.floor(d / 65536)),
      (Ne = d - A * 65536),
      (d = $e + A + 65535),
      (A = Math.floor(d / 65536)),
      ($e = d - A * 65536),
      (d = qe + A + 65535),
      (A = Math.floor(d / 65536)),
      (qe = d - A * 65536),
      (d = Pe + A + 65535),
      (A = Math.floor(d / 65536)),
      (Pe = d - A * 65536),
      (d = Fe + A + 65535),
      (A = Math.floor(d / 65536)),
      (Fe = d - A * 65536),
      (d = De + A + 65535),
      (A = Math.floor(d / 65536)),
      (De = d - A * 65536),
      (se += A - 1 + 37 * (A - 1)),
      (z[0] = se),
      (z[1] = fe),
      (z[2] = Se),
      (z[3] = Be),
      (z[4] = ke),
      (z[5] = Ue),
      (z[6] = pt),
      (z[7] = gt),
      (z[8] = Me),
      (z[9] = Ie),
      (z[10] = Ne),
      (z[11] = $e),
      (z[12] = qe),
      (z[13] = Pe),
      (z[14] = Fe),
      (z[15] = De);
  }
  function w(z, M) {
    u(z, M, M);
  }
  function k(z, M) {
    const N = o();
    let d;
    for (d = 0; d < 16; d++) N[d] = M[d];
    for (d = 253; d >= 0; d--) w(N, N), d !== 2 && d !== 4 && u(N, N, M);
    for (d = 0; d < 16; d++) z[d] = N[d];
  }
  function G(z, M) {
    const N = o();
    let d;
    for (d = 0; d < 16; d++) N[d] = M[d];
    for (d = 250; d >= 0; d--) w(N, N), d !== 1 && u(N, N, M);
    for (d = 0; d < 16; d++) z[d] = N[d];
  }
  function oe(z, M) {
    const N = o(),
      d = o(),
      A = o(),
      se = o(),
      fe = o(),
      Se = o(),
      Be = o(),
      ke = o(),
      Ue = o();
    b(N, z[1], z[0]),
      b(Ue, M[1], M[0]),
      u(N, N, Ue),
      P(d, z[0], z[1]),
      P(Ue, M[0], M[1]),
      u(d, d, Ue),
      u(A, z[3], M[3]),
      u(A, A, p),
      u(se, z[2], M[2]),
      P(se, se, se),
      b(fe, d, N),
      b(Se, se, A),
      P(Be, se, A),
      P(ke, d, N),
      u(z[0], fe, Se),
      u(z[1], ke, Be),
      u(z[2], Be, Se),
      u(z[3], fe, ke);
  }
  function ue(z, M, N) {
    for (let d = 0; d < 4; d++) q(z[d], M[d], N);
  }
  function ge(z, M) {
    const N = o(),
      d = o(),
      A = o();
    k(A, M[2]), u(N, M[0], A), u(d, M[1], A), K(z, d), (z[31] ^= U(N) << 7);
  }
  function $(z, M, N) {
    I(z[0], l), I(z[1], f), I(z[2], f), I(z[3], l);
    for (let d = 255; d >= 0; --d) {
      const A = (N[(d / 8) | 0] >> (d & 7)) & 1;
      ue(z, M, A), oe(M, z), oe(z, z), ue(z, M, A);
    }
  }
  function B(z, M) {
    const N = [o(), o(), o(), o()];
    I(N[0], v), I(N[1], D), I(N[2], f), u(N[3], v, D), $(z, N, M);
  }
  function le(z) {
    if (z.length !== i.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
    const M = (0, t.hash)(z);
    (M[0] &= 248), (M[31] &= 127), (M[31] |= 64);
    const N = new Uint8Array(32),
      d = [o(), o(), o(), o()];
    B(d, M), ge(N, d);
    const A = new Uint8Array(64);
    return A.set(z), A.set(N, 32), { publicKey: N, secretKey: A };
  }
  i.generateKeyPairFromSeed = le;
  function re(z) {
    const M = (0, e.randomBytes)(32, z),
      N = le(M);
    return (0, s.wipe)(M), N;
  }
  i.generateKeyPair = re;
  function W(z) {
    if (z.length !== i.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(z.subarray(32));
  }
  i.extractPublicKeyFromSecretKey = W;
  const te = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function Y(z, M) {
    let N, d, A, se;
    for (d = 63; d >= 32; --d) {
      for (N = 0, A = d - 32, se = d - 12; A < se; ++A)
        (M[A] += N - 16 * M[d] * te[A - (d - 32)]),
          (N = Math.floor((M[A] + 128) / 256)),
          (M[A] -= N * 256);
      (M[A] += N), (M[d] = 0);
    }
    for (N = 0, A = 0; A < 32; A++)
      (M[A] += N - (M[31] >> 4) * te[A]), (N = M[A] >> 8), (M[A] &= 255);
    for (A = 0; A < 32; A++) M[A] -= N * te[A];
    for (d = 0; d < 32; d++) (M[d + 1] += M[d] >> 8), (z[d] = M[d] & 255);
  }
  function ie(z) {
    const M = new Float64Array(64);
    for (let N = 0; N < 64; N++) M[N] = z[N];
    for (let N = 0; N < 64; N++) z[N] = 0;
    Y(z, M);
  }
  function xe(z, M) {
    const N = new Float64Array(64),
      d = [o(), o(), o(), o()],
      A = (0, t.hash)(z.subarray(0, 32));
    (A[0] &= 248), (A[31] &= 127), (A[31] |= 64);
    const se = new Uint8Array(64);
    se.set(A.subarray(32), 32);
    const fe = new t.SHA512();
    fe.update(se.subarray(32)), fe.update(M);
    const Se = fe.digest();
    fe.clean(),
      ie(Se),
      B(d, Se),
      ge(se, d),
      fe.reset(),
      fe.update(se.subarray(0, 32)),
      fe.update(z.subarray(32)),
      fe.update(M);
    const Be = fe.digest();
    ie(Be);
    for (let ke = 0; ke < 32; ke++) N[ke] = Se[ke];
    for (let ke = 0; ke < 32; ke++)
      for (let Ue = 0; Ue < 32; Ue++) N[ke + Ue] += Be[ke] * A[Ue];
    return Y(se.subarray(32), N), se;
  }
  i.sign = xe;
  function ne(z, M) {
    const N = o(),
      d = o(),
      A = o(),
      se = o(),
      fe = o(),
      Se = o(),
      Be = o();
    return (
      I(z[2], f),
      O(z[1], M),
      w(A, z[1]),
      u(se, A, g),
      b(A, A, z[2]),
      P(se, z[2], se),
      w(fe, se),
      w(Se, fe),
      u(Be, Se, fe),
      u(N, Be, A),
      u(N, N, se),
      G(N, N),
      u(N, N, A),
      u(N, N, se),
      u(N, N, se),
      u(z[0], N, se),
      w(d, z[0]),
      u(d, d, se),
      R(d, A) && u(z[0], z[0], E),
      w(d, z[0]),
      u(d, d, se),
      R(d, A)
        ? -1
        : (U(z[0]) === M[31] >> 7 && b(z[0], l, z[0]), u(z[3], z[0], z[1]), 0)
    );
  }
  function we(z, M, N) {
    const d = new Uint8Array(32),
      A = [o(), o(), o(), o()],
      se = [o(), o(), o(), o()];
    if (N.length !== i.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
    if (ne(se, z)) return !1;
    const fe = new t.SHA512();
    fe.update(N.subarray(0, 32)), fe.update(z), fe.update(M);
    const Se = fe.digest();
    return (
      ie(Se),
      $(A, se, Se),
      B(se, N.subarray(32)),
      oe(A, se),
      ge(d, A),
      !ee(N, d)
    );
  }
  i.verify = we;
  function he(z) {
    let M = [o(), o(), o(), o()];
    if (ne(M, z)) throw new Error("Ed25519: invalid public key");
    let N = o(),
      d = o(),
      A = M[1];
    P(N, f, A), b(d, f, A), k(d, d), u(N, N, d);
    let se = new Uint8Array(32);
    return K(se, N), se;
  }
  i.convertPublicKeyToX25519 = he;
  function _e(z) {
    const M = (0, t.hash)(z.subarray(0, 32));
    (M[0] &= 248), (M[31] &= 127), (M[31] |= 64);
    const N = new Uint8Array(M.subarray(0, 32));
    return (0, s.wipe)(M), N;
  }
  i.convertSecretKeyToX25519 = _e;
})(Xu);
const FD = "EdDSA",
  LD = "JWT",
  Tp = ".",
  Rp = "base64url",
  UD = "utf8",
  jD = "utf8",
  MD = ":",
  qD = "did",
  zD = "key",
  td = "base58btc",
  BD = "z",
  HD = "K36",
  KD = 32;
function ea(i) {
  return lr(wr(an(i), UD), Rp);
}
function Np(i) {
  const e = wr(HD, td),
    t = BD + lr(pu([e, i]), td);
  return [qD, zD, t].join(MD);
}
function kD(i) {
  return lr(i, Rp);
}
function VD(i) {
  return wr([ea(i.header), ea(i.payload)].join(Tp), jD);
}
function GD(i) {
  return [ea(i.header), ea(i.payload), kD(i.signature)].join(Tp);
}
function rd(i = qn.randomBytes(KD)) {
  return Xu.generateKeyPairFromSeed(i);
}
async function WD(i, e, t, s, o = ve.fromMiliseconds(Date.now())) {
  const c = { alg: FD, typ: LD },
    l = Np(s.publicKey),
    f = o + t,
    g = { iss: l, sub: i, aud: e, iat: o, exp: f },
    p = VD({ header: c, payload: g }),
    v = Xu.sign(s.secretKey, p);
  return GD({ header: c, payload: g, signature: v });
}
const YD = "PARSE_ERROR",
  JD = "INVALID_REQUEST",
  QD = "METHOD_NOT_FOUND",
  XD = "INVALID_PARAMS",
  $p = "INTERNAL_ERROR",
  Zu = "SERVER_ERROR",
  ZD = [-32700, -32600, -32601, -32602, -32603],
  bs = {
    [YD]: { code: -32700, message: "Parse error" },
    [JD]: { code: -32600, message: "Invalid Request" },
    [QD]: { code: -32601, message: "Method not found" },
    [XD]: { code: -32602, message: "Invalid params" },
    [$p]: { code: -32603, message: "Internal error" },
    [Zu]: { code: -32e3, message: "Server error" },
  },
  Fp = Zu;
function e2(i) {
  return ZD.includes(i);
}
function id(i) {
  return Object.keys(bs).includes(i) ? bs[i] : bs[Fp];
}
function t2(i) {
  const e = Object.values(bs).find((t) => t.code === i);
  return e || bs[Fp];
}
function Lp(i, e, t) {
  return i.message.includes("getaddrinfo ENOTFOUND") ||
    i.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : i;
}
var Up = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Au =
  function (i, e) {
    return (
      (Au =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, s) {
            t.__proto__ = s;
          }) ||
        function (t, s) {
          for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
        }),
      Au(i, e)
    );
  };
function r2(i, e) {
  Au(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Tu = function () {
  return (
    (Tu =
      Object.assign ||
      function (e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
          t = arguments[s];
          for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
        }
        return e;
      }),
    Tu.apply(this, arguments)
  );
};
function i2(i, e) {
  var t = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      e.indexOf(s) < 0 &&
      (t[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      e.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (t[s[o]] = i[s[o]]);
  return t;
}
function n2(i, e, t, s) {
  var o = arguments.length,
    c =
      o < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, t)) : s,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    c = Reflect.decorate(i, e, t, s);
  else
    for (var f = i.length - 1; f >= 0; f--)
      (l = i[f]) && (c = (o < 3 ? l(c) : o > 3 ? l(e, t, c) : l(e, t)) || c);
  return o > 3 && c && Object.defineProperty(e, t, c), c;
}
function s2(i, e) {
  return function (t, s) {
    e(t, s, i);
  };
}
function o2(i, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(i, e);
}
function a2(i, e, t, s) {
  function o(c) {
    return c instanceof t
      ? c
      : new t(function (l) {
          l(c);
        });
  }
  return new (t || (t = Promise))(function (c, l) {
    function f(v) {
      try {
        p(s.next(v));
      } catch (D) {
        l(D);
      }
    }
    function g(v) {
      try {
        p(s.throw(v));
      } catch (D) {
        l(D);
      }
    }
    function p(v) {
      v.done ? c(v.value) : o(v.value).then(f, g);
    }
    p((s = s.apply(i, e || [])).next());
  });
}
function c2(i, e) {
  var t = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    s,
    o,
    c,
    l;
  return (
    (l = { next: f(0), throw: f(1), return: f(2) }),
    typeof Symbol == "function" &&
      (l[Symbol.iterator] = function () {
        return this;
      }),
    l
  );
  function f(p) {
    return function (v) {
      return g([p, v]);
    };
  }
  function g(p) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((s = 1),
          o &&
            (c =
              p[0] & 2
                ? o.return
                : p[0]
                ? o.throw || ((c = o.return) && c.call(o), 0)
                : o.next) &&
            !(c = c.call(o, p[1])).done)
        )
          return c;
        switch (((o = 0), c && (p = [p[0] & 2, c.value]), p[0])) {
          case 0:
          case 1:
            c = p;
            break;
          case 4:
            return t.label++, { value: p[1], done: !1 };
          case 5:
            t.label++, (o = p[1]), (p = [0]);
            continue;
          case 7:
            (p = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((c = t.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (p[0] === 6 || p[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (p[0] === 3 && (!c || (p[1] > c[0] && p[1] < c[3]))) {
              t.label = p[1];
              break;
            }
            if (p[0] === 6 && t.label < c[1]) {
              (t.label = c[1]), (c = p);
              break;
            }
            if (c && t.label < c[2]) {
              (t.label = c[2]), t.ops.push(p);
              break;
            }
            c[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        p = e.call(i, t);
      } catch (v) {
        (p = [6, v]), (o = 0);
      } finally {
        s = c = 0;
      }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}
function u2(i, e, t, s) {
  s === void 0 && (s = t), (i[s] = e[t]);
}
function h2(i, e) {
  for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t]);
}
function Ru(i) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && i[e],
    s = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number")
    return {
      next: function () {
        return (
          i && s >= i.length && (i = void 0), { value: i && i[s++], done: !i }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function jp(i, e) {
  var t = typeof Symbol == "function" && i[Symbol.iterator];
  if (!t) return i;
  var s = t.call(i),
    o,
    c = [],
    l;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = s.next()).done; ) c.push(o.value);
  } catch (f) {
    l = { error: f };
  } finally {
    try {
      o && !o.done && (t = s.return) && t.call(s);
    } finally {
      if (l) throw l.error;
    }
  }
  return c;
}
function l2() {
  for (var i = [], e = 0; e < arguments.length; e++)
    i = i.concat(jp(arguments[e]));
  return i;
}
function f2() {
  for (var i = 0, e = 0, t = arguments.length; e < t; e++)
    i += arguments[e].length;
  for (var s = Array(i), o = 0, e = 0; e < t; e++)
    for (var c = arguments[e], l = 0, f = c.length; l < f; l++, o++)
      s[o] = c[l];
  return s;
}
function Ps(i) {
  return this instanceof Ps ? ((this.v = i), this) : new Ps(i);
}
function d2(i, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = t.apply(i, e || []),
    o,
    c = [];
  return (
    (o = {}),
    l("next"),
    l("throw"),
    l("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function l(E) {
    s[E] &&
      (o[E] = function (I) {
        return new Promise(function (C, q) {
          c.push([E, I, C, q]) > 1 || f(E, I);
        });
      });
  }
  function f(E, I) {
    try {
      g(s[E](I));
    } catch (C) {
      D(c[0][3], C);
    }
  }
  function g(E) {
    E.value instanceof Ps
      ? Promise.resolve(E.value.v).then(p, v)
      : D(c[0][2], E);
  }
  function p(E) {
    f("next", E);
  }
  function v(E) {
    f("throw", E);
  }
  function D(E, I) {
    E(I), c.shift(), c.length && f(c[0][0], c[0][1]);
  }
}
function p2(i) {
  var e, t;
  return (
    (e = {}),
    s("next"),
    s("throw", function (o) {
      throw o;
    }),
    s("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(o, c) {
    e[o] = i[o]
      ? function (l) {
          return (t = !t)
            ? { value: Ps(i[o](l)), done: o === "return" }
            : c
            ? c(l)
            : l;
        }
      : c;
  }
}
function g2(i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = i[Symbol.asyncIterator],
    t;
  return e
    ? e.call(i)
    : ((i = typeof Ru == "function" ? Ru(i) : i[Symbol.iterator]()),
      (t = {}),
      s("next"),
      s("throw"),
      s("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function s(c) {
    t[c] =
      i[c] &&
      function (l) {
        return new Promise(function (f, g) {
          (l = i[c](l)), o(f, g, l.done, l.value);
        });
      };
  }
  function o(c, l, f, g) {
    Promise.resolve(g).then(function (p) {
      c({ value: p, done: f });
    }, l);
  }
}
function y2(i, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(i, "raw", { value: e })
      : (i.raw = e),
    i
  );
}
function v2(i) {
  if (i && i.__esModule) return i;
  var e = {};
  if (i != null)
    for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
  return (e.default = i), e;
}
function _2(i) {
  return i && i.__esModule ? i : { default: i };
}
function m2(i, e) {
  if (!e.has(i))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(i);
}
function w2(i, e, t) {
  if (!e.has(i))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(i, t), t;
}
const b2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Tu;
        },
        __asyncDelegator: p2,
        __asyncGenerator: d2,
        __asyncValues: g2,
        __await: Ps,
        __awaiter: a2,
        __classPrivateFieldGet: m2,
        __classPrivateFieldSet: w2,
        __createBinding: u2,
        __decorate: n2,
        __exportStar: h2,
        __extends: r2,
        __generator: c2,
        __importDefault: _2,
        __importStar: v2,
        __makeTemplateObject: y2,
        __metadata: o2,
        __param: s2,
        __read: jp,
        __rest: i2,
        __spread: l2,
        __spreadArrays: f2,
        __values: Ru,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  E2 = Mn(b2);
var vi = {},
  nd;
function D2() {
  if (nd) return vi;
  (nd = 1),
    Object.defineProperty(vi, "__esModule", { value: !0 }),
    (vi.isBrowserCryptoAvailable =
      vi.getSubtleCrypto =
      vi.getBrowerCrypto =
        void 0);
  function i() {
    return (
      (ii === null || ii === void 0 ? void 0 : ii.crypto) ||
      (ii === null || ii === void 0 ? void 0 : ii.msCrypto) ||
      {}
    );
  }
  vi.getBrowerCrypto = i;
  function e() {
    const s = i();
    return s.subtle || s.webkitSubtle;
  }
  vi.getSubtleCrypto = e;
  function t() {
    return !!i() && !!e();
  }
  return (vi.isBrowserCryptoAvailable = t), vi;
}
var _i = {},
  sd;
function S2() {
  if (sd) return _i;
  (sd = 1),
    Object.defineProperty(_i, "__esModule", { value: !0 }),
    (_i.isBrowser = _i.isNode = _i.isReactNative = void 0);
  function i() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  _i.isReactNative = i;
  function e() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  _i.isNode = e;
  function t() {
    return !i() && !e();
  }
  return (_i.isBrowser = t), _i;
}
(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  const e = E2;
  e.__exportStar(D2(), i), e.__exportStar(S2(), i);
})(Up);
function eh(i = 3) {
  const e = Date.now() * Math.pow(10, i),
    t = Math.floor(Math.random() * Math.pow(10, i));
  return e + t;
}
function Mp(i = 6) {
  return BigInt(eh(i));
}
function jn(i, e, t) {
  return { id: t || eh(), jsonrpc: "2.0", method: i, params: e };
}
function la(i, e) {
  return { id: i, jsonrpc: "2.0", result: e };
}
function fa(i, e, t) {
  return { id: i, jsonrpc: "2.0", error: I2(e, t) };
}
function I2(i, e) {
  return typeof i > "u"
    ? id($p)
    : (typeof i == "string" &&
        (i = Object.assign(Object.assign({}, id(Zu)), { message: i })),
      typeof e < "u" && (i.data = e),
      e2(i.code) && (i = t2(i.code)),
      i);
}
class x2 {}
class O2 extends x2 {
  constructor() {
    super();
  }
}
class P2 extends O2 {
  constructor(e) {
    super();
  }
}
const C2 = "^https?:",
  A2 = "^wss?:";
function T2(i) {
  const e = i.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function qp(i, e) {
  const t = T2(i);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function od(i) {
  return qp(i, C2);
}
function ad(i) {
  return qp(i, A2);
}
function R2(i) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(i);
}
function zp(i) {
  return (
    typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0"
  );
}
function th(i) {
  return zp(i) && "method" in i;
}
function da(i) {
  return zp(i) && (Ei(i) || Wr(i));
}
function Ei(i) {
  return "result" in i;
}
function Wr(i) {
  return "error" in i;
}
class Di extends P2 {
  constructor(e) {
    super(e),
      (this.events = new qr.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(
      jn(e.method, e.params || [], e.id || Mp().toString()),
      t
    );
  }
  async requestStrict(e, t) {
    return new Promise(async (s, o) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (c) {
          o(c);
        }
      this.events.on(`${e.id}`, (c) => {
        Wr(c) ? o(c.error) : s(c.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (c) {
        o(c);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      da(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    (this.connection === e && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof e == "string" &&
        (await this.connection.open(e), (e = this.connection)),
      (this.connection = this.setConnection(e)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const N2 = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  $2 = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  cd = (i) => i.split("?")[0],
  ud = 10,
  F2 = N2();
let L2 = class {
  constructor(e) {
    if (
      ((this.url = e),
      (this.events = new qr.EventEmitter()),
      (this.registering = !1),
      !ad(e))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), e();
      }),
        this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(an(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!ad(e))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (c) => {
            this.resetMaxListeners(), o(c);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return o(
                  new Error("WebSocket connection is missing or invalid")
                );
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = e),
      (this.registering = !0),
      new Promise((t, s) => {
        const o = new URLSearchParams(e).get("origin"),
          c = Up.isReactNative()
            ? { headers: { origin: o } }
            : { rejectUnauthorized: !R2(e) },
          l = new F2(e, [], c);
        $2()
          ? (l.onerror = (f) => {
              const g = f;
              s(this.emitError(g.error));
            })
          : l.on("error", (f) => {
              s(this.emitError(f));
            }),
          (l.onopen = () => {
            this.onOpen(l), t(l);
          });
      })
    );
  }
  onOpen(e) {
    (e.onmessage = (t) => this.onPayload(t)),
      (e.onclose = (t) => this.onClose(t)),
      (this.socket = e),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(e) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? $s(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      c = fa(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return Lp(e, cd(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ud && this.events.setMaxListeners(ud);
  }
  emitError(e) {
    const t = this.parseError(
      new Error(
        (e == null ? void 0 : e.message) ||
          `WebSocket connection failed for host: ${cd(this.url)}`
      )
    );
    return this.events.emit("register_error", t), t;
  }
};
var ta = { exports: {} };
ta.exports;
(function (i, e) {
  var t = 200,
    s = "__lodash_hash_undefined__",
    o = 1,
    c = 2,
    l = 9007199254740991,
    f = "[object Arguments]",
    g = "[object Array]",
    p = "[object AsyncFunction]",
    v = "[object Boolean]",
    D = "[object Date]",
    E = "[object Error]",
    I = "[object Function]",
    C = "[object GeneratorFunction]",
    q = "[object Map]",
    K = "[object Number]",
    ee = "[object Null]",
    R = "[object Object]",
    U = "[object Promise]",
    O = "[object Proxy]",
    P = "[object RegExp]",
    b = "[object Set]",
    u = "[object String]",
    w = "[object Symbol]",
    k = "[object Undefined]",
    G = "[object WeakMap]",
    oe = "[object ArrayBuffer]",
    ue = "[object DataView]",
    ge = "[object Float32Array]",
    $ = "[object Float64Array]",
    B = "[object Int8Array]",
    le = "[object Int16Array]",
    re = "[object Int32Array]",
    W = "[object Uint8Array]",
    te = "[object Uint8ClampedArray]",
    Y = "[object Uint16Array]",
    ie = "[object Uint32Array]",
    xe = /[\\^$.*+?()[\]{}|]/g,
    ne = /^\[object .+?Constructor\]$/,
    we = /^(?:0|[1-9]\d*)$/,
    he = {};
  (he[ge] =
    he[$] =
    he[B] =
    he[le] =
    he[re] =
    he[W] =
    he[te] =
    he[Y] =
    he[ie] =
      !0),
    (he[f] =
      he[g] =
      he[oe] =
      he[v] =
      he[ue] =
      he[D] =
      he[E] =
      he[I] =
      he[q] =
      he[K] =
      he[R] =
      he[P] =
      he[b] =
      he[u] =
      he[G] =
        !1);
  var _e = typeof ii == "object" && ii && ii.Object === Object && ii,
    z = typeof self == "object" && self && self.Object === Object && self,
    M = _e || z || Function("return this")(),
    N = e && !e.nodeType && e,
    d = N && !0 && i && !i.nodeType && i,
    A = d && d.exports === N,
    se = A && _e.process,
    fe = (function () {
      try {
        return se && se.binding && se.binding("util");
      } catch {}
    })(),
    Se = fe && fe.isTypedArray;
  function Be(S, F) {
    for (
      var X = -1, de = S == null ? 0 : S.length, at = 0, Te = [];
      ++X < de;

    ) {
      var ft = S[X];
      F(ft, X, S) && (Te[at++] = ft);
    }
    return Te;
  }
  function ke(S, F) {
    for (var X = -1, de = F.length, at = S.length; ++X < de; ) S[at + X] = F[X];
    return S;
  }
  function Ue(S, F) {
    for (var X = -1, de = S == null ? 0 : S.length; ++X < de; )
      if (F(S[X], X, S)) return !0;
    return !1;
  }
  function pt(S, F) {
    for (var X = -1, de = Array(S); ++X < S; ) de[X] = F(X);
    return de;
  }
  function gt(S) {
    return function (F) {
      return S(F);
    };
  }
  function Me(S, F) {
    return S.has(F);
  }
  function Ie(S, F) {
    return S == null ? void 0 : S[F];
  }
  function Ne(S) {
    var F = -1,
      X = Array(S.size);
    return (
      S.forEach(function (de, at) {
        X[++F] = [at, de];
      }),
      X
    );
  }
  function $e(S, F) {
    return function (X) {
      return S(F(X));
    };
  }
  function qe(S) {
    var F = -1,
      X = Array(S.size);
    return (
      S.forEach(function (de) {
        X[++F] = de;
      }),
      X
    );
  }
  var Pe = Array.prototype,
    Fe = Function.prototype,
    De = Object.prototype,
    Ce = M["__core-js_shared__"],
    He = Fe.toString,
    Oe = De.hasOwnProperty,
    Ve = (function () {
      var S = /[^.]+$/.exec((Ce && Ce.keys && Ce.keys.IE_PROTO) || "");
      return S ? "Symbol(src)_1." + S : "";
    })(),
    We = De.toString,
    et = RegExp(
      "^" +
        He.call(Oe)
          .replace(xe, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    tt = A ? M.Buffer : void 0,
    Qe = M.Symbol,
    tr = M.Uint8Array,
    fr = De.propertyIsEnumerable,
    Yr = Pe.splice,
    rr = Qe ? Qe.toStringTag : void 0,
    si = Object.getOwnPropertySymbols,
    Ii = tt ? tt.isBuffer : void 0,
    zi = $e(Object.keys, Object),
    Dt = br(M, "DataView"),
    yt = br(M, "Map"),
    St = br(M, "Promise"),
    It = br(M, "Set"),
    bt = br(M, "WeakMap"),
    vt = br(Object, "create"),
    Ft = ai(Dt),
    Lt = ai(yt),
    xt = ai(St),
    Ut = ai(It),
    Ot = ai(bt),
    At = Qe ? Qe.prototype : void 0,
    Pt = At ? At.valueOf : void 0;
  function ht(S) {
    var F = -1,
      X = S == null ? 0 : S.length;
    for (this.clear(); ++F < X; ) {
      var de = S[F];
      this.set(de[0], de[1]);
    }
  }
  function jt() {
    (this.__data__ = vt ? vt(null) : {}), (this.size = 0);
  }
  function Mt(S) {
    var F = this.has(S) && delete this.__data__[S];
    return (this.size -= F ? 1 : 0), F;
  }
  function ya(S) {
    var F = this.__data__;
    if (vt) {
      var X = F[S];
      return X === s ? void 0 : X;
    }
    return Oe.call(F, S) ? F[S] : void 0;
  }
  function va(S) {
    var F = this.__data__;
    return vt ? F[S] !== void 0 : Oe.call(F, S);
  }
  function _a(S, F) {
    var X = this.__data__;
    return (
      (this.size += this.has(S) ? 0 : 1),
      (X[S] = vt && F === void 0 ? s : F),
      this
    );
  }
  (ht.prototype.clear = jt),
    (ht.prototype.delete = Mt),
    (ht.prototype.get = ya),
    (ht.prototype.has = va),
    (ht.prototype.set = _a);
  function Ar(S) {
    var F = -1,
      X = S == null ? 0 : S.length;
    for (this.clear(); ++F < X; ) {
      var de = S[F];
      this.set(de[0], de[1]);
    }
  }
  function ma() {
    (this.__data__ = []), (this.size = 0);
  }
  function wa(S) {
    var F = this.__data__,
      X = Bi(F, S);
    if (X < 0) return !1;
    var de = F.length - 1;
    return X == de ? F.pop() : Yr.call(F, X, 1), --this.size, !0;
  }
  function ba(S) {
    var F = this.__data__,
      X = Bi(F, S);
    return X < 0 ? void 0 : F[X][1];
  }
  function Ea(S) {
    return Bi(this.__data__, S) > -1;
  }
  function Da(S, F) {
    var X = this.__data__,
      de = Bi(X, S);
    return de < 0 ? (++this.size, X.push([S, F])) : (X[de][1] = F), this;
  }
  (Ar.prototype.clear = ma),
    (Ar.prototype.delete = wa),
    (Ar.prototype.get = ba),
    (Ar.prototype.has = Ea),
    (Ar.prototype.set = Da);
  function oi(S) {
    var F = -1,
      X = S == null ? 0 : S.length;
    for (this.clear(); ++F < X; ) {
      var de = S[F];
      this.set(de[0], de[1]);
    }
  }
  function dn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ht(),
        map: new (yt || Ar)(),
        string: new ht(),
      });
  }
  function Sa(S) {
    var F = xi(this, S).delete(S);
    return (this.size -= F ? 1 : 0), F;
  }
  function pn(S) {
    return xi(this, S).get(S);
  }
  function Ia(S) {
    return xi(this, S).has(S);
  }
  function xa(S, F) {
    var X = xi(this, S),
      de = X.size;
    return X.set(S, F), (this.size += X.size == de ? 0 : 1), this;
  }
  (oi.prototype.clear = dn),
    (oi.prototype.delete = Sa),
    (oi.prototype.get = pn),
    (oi.prototype.has = Ia),
    (oi.prototype.set = xa);
  function gn(S) {
    var F = -1,
      X = S == null ? 0 : S.length;
    for (this.__data__ = new oi(); ++F < X; ) this.add(S[F]);
  }
  function Ls(S) {
    return this.__data__.set(S, s), this;
  }
  function Us(S) {
    return this.__data__.has(S);
  }
  (gn.prototype.add = gn.prototype.push = Ls), (gn.prototype.has = Us);
  function zr(S) {
    var F = (this.__data__ = new Ar(S));
    this.size = F.size;
  }
  function Oa() {
    (this.__data__ = new Ar()), (this.size = 0);
  }
  function Pa(S) {
    var F = this.__data__,
      X = F.delete(S);
    return (this.size = F.size), X;
  }
  function Ca(S) {
    return this.__data__.get(S);
  }
  function Aa(S) {
    return this.__data__.has(S);
  }
  function js(S, F) {
    var X = this.__data__;
    if (X instanceof Ar) {
      var de = X.__data__;
      if (!yt || de.length < t - 1)
        return de.push([S, F]), (this.size = ++X.size), this;
      X = this.__data__ = new oi(de);
    }
    return X.set(S, F), (this.size = X.size), this;
  }
  (zr.prototype.clear = Oa),
    (zr.prototype.delete = Pa),
    (zr.prototype.get = Ca),
    (zr.prototype.has = Aa),
    (zr.prototype.set = js);
  function Ms(S, F) {
    var X = _n(S),
      de = !X && Qs(S),
      at = !X && !de && Wn(S),
      Te = !X && !de && !at && eo(S),
      ft = X || de || at || Te,
      qt = ft ? pt(S.length, String) : [],
      Xe = qt.length;
    for (var ct in S)
      (F || Oe.call(S, ct)) &&
        !(
          ft &&
          (ct == "length" ||
            (at && (ct == "offset" || ct == "parent")) ||
            (Te &&
              (ct == "buffer" || ct == "byteLength" || ct == "byteOffset")) ||
            Vs(ct, Xe))
        ) &&
        qt.push(ct);
    return qt;
  }
  function Bi(S, F) {
    for (var X = S.length; X--; ) if (Js(S[X][0], F)) return X;
    return -1;
  }
  function Vn(S, F, X) {
    var de = F(S);
    return _n(S) ? de : ke(de, X(S));
  }
  function Hi(S) {
    return S == null
      ? S === void 0
        ? k
        : ee
      : rr && rr in Object(S)
      ? Ks(S)
      : Na(S);
  }
  function Gn(S) {
    return ki(S) && Hi(S) == f;
  }
  function Ki(S, F, X, de, at) {
    return S === F
      ? !0
      : S == null || F == null || (!ki(S) && !ki(F))
      ? S !== S && F !== F
      : qs(S, F, X, de, Ki, at);
  }
  function qs(S, F, X, de, at, Te) {
    var ft = _n(S),
      qt = _n(F),
      Xe = ft ? g : Jr(S),
      ct = qt ? g : Jr(F);
    (Xe = Xe == f ? R : Xe), (ct = ct == f ? R : ct);
    var Tt = Xe == R,
      dr = ct == R,
      zt = Xe == ct;
    if (zt && Wn(S)) {
      if (!Wn(F)) return !1;
      (ft = !0), (Tt = !1);
    }
    if (zt && !Tt)
      return (
        Te || (Te = new zr()),
        ft || eo(S) ? yn(S, F, X, de, at, Te) : Ra(S, F, Xe, X, de, at, Te)
      );
    if (!(X & o)) {
      var dt = Tt && Oe.call(S, "__wrapped__"),
        ir = dr && Oe.call(F, "__wrapped__");
      if (dt || ir) {
        var Br = dt ? S.value() : S,
          Tr = ir ? F.value() : F;
        return Te || (Te = new zr()), at(Br, Tr, X, de, Te);
      }
    }
    return zt ? (Te || (Te = new zr()), Hs(S, F, X, de, at, Te)) : !1;
  }
  function Ta(S) {
    if (!Zs(S) || Ws(S)) return !1;
    var F = mn(S) ? et : ne;
    return F.test(ai(S));
  }
  function zs(S) {
    return ki(S) && Xs(S.length) && !!he[Hi(S)];
  }
  function Bs(S) {
    if (!Ys(S)) return zi(S);
    var F = [];
    for (var X in Object(S)) Oe.call(S, X) && X != "constructor" && F.push(X);
    return F;
  }
  function yn(S, F, X, de, at, Te) {
    var ft = X & o,
      qt = S.length,
      Xe = F.length;
    if (qt != Xe && !(ft && Xe > qt)) return !1;
    var ct = Te.get(S);
    if (ct && Te.get(F)) return ct == F;
    var Tt = -1,
      dr = !0,
      zt = X & c ? new gn() : void 0;
    for (Te.set(S, F), Te.set(F, S); ++Tt < qt; ) {
      var dt = S[Tt],
        ir = F[Tt];
      if (de) var Br = ft ? de(ir, dt, Tt, F, S, Te) : de(dt, ir, Tt, S, F, Te);
      if (Br !== void 0) {
        if (Br) continue;
        dr = !1;
        break;
      }
      if (zt) {
        if (
          !Ue(F, function (Tr, Qr) {
            if (!Me(zt, Qr) && (dt === Tr || at(dt, Tr, X, de, Te)))
              return zt.push(Qr);
          })
        ) {
          dr = !1;
          break;
        }
      } else if (!(dt === ir || at(dt, ir, X, de, Te))) {
        dr = !1;
        break;
      }
    }
    return Te.delete(S), Te.delete(F), dr;
  }
  function Ra(S, F, X, de, at, Te, ft) {
    switch (X) {
      case ue:
        if (S.byteLength != F.byteLength || S.byteOffset != F.byteOffset)
          return !1;
        (S = S.buffer), (F = F.buffer);
      case oe:
        return !(S.byteLength != F.byteLength || !Te(new tr(S), new tr(F)));
      case v:
      case D:
      case K:
        return Js(+S, +F);
      case E:
        return S.name == F.name && S.message == F.message;
      case P:
      case u:
        return S == F + "";
      case q:
        var qt = Ne;
      case b:
        var Xe = de & o;
        if ((qt || (qt = qe), S.size != F.size && !Xe)) return !1;
        var ct = ft.get(S);
        if (ct) return ct == F;
        (de |= c), ft.set(S, F);
        var Tt = yn(qt(S), qt(F), de, at, Te, ft);
        return ft.delete(S), Tt;
      case w:
        if (Pt) return Pt.call(S) == Pt.call(F);
    }
    return !1;
  }
  function Hs(S, F, X, de, at, Te) {
    var ft = X & o,
      qt = vn(S),
      Xe = qt.length,
      ct = vn(F),
      Tt = ct.length;
    if (Xe != Tt && !ft) return !1;
    for (var dr = Xe; dr--; ) {
      var zt = qt[dr];
      if (!(ft ? zt in F : Oe.call(F, zt))) return !1;
    }
    var dt = Te.get(S);
    if (dt && Te.get(F)) return dt == F;
    var ir = !0;
    Te.set(S, F), Te.set(F, S);
    for (var Br = ft; ++dr < Xe; ) {
      zt = qt[dr];
      var Tr = S[zt],
        Qr = F[zt];
      if (de) var Yn = ft ? de(Qr, Tr, zt, F, S, Te) : de(Tr, Qr, zt, S, F, Te);
      if (!(Yn === void 0 ? Tr === Qr || at(Tr, Qr, X, de, Te) : Yn)) {
        ir = !1;
        break;
      }
      Br || (Br = zt == "constructor");
    }
    if (ir && !Br) {
      var Vi = S.constructor,
        Kt = F.constructor;
      Vi != Kt &&
        "constructor" in S &&
        "constructor" in F &&
        !(
          typeof Vi == "function" &&
          Vi instanceof Vi &&
          typeof Kt == "function" &&
          Kt instanceof Kt
        ) &&
        (ir = !1);
    }
    return Te.delete(S), Te.delete(F), ir;
  }
  function vn(S) {
    return Vn(S, La, ks);
  }
  function xi(S, F) {
    var X = S.__data__;
    return Gs(F) ? X[typeof F == "string" ? "string" : "hash"] : X.map;
  }
  function br(S, F) {
    var X = Ie(S, F);
    return Ta(X) ? X : void 0;
  }
  function Ks(S) {
    var F = Oe.call(S, rr),
      X = S[rr];
    try {
      S[rr] = void 0;
      var de = !0;
    } catch {}
    var at = We.call(S);
    return de && (F ? (S[rr] = X) : delete S[rr]), at;
  }
  var ks = si
      ? function (S) {
          return S == null
            ? []
            : ((S = Object(S)),
              Be(si(S), function (F) {
                return fr.call(S, F);
              }));
        }
      : ot,
    Jr = Hi;
  ((Dt && Jr(new Dt(new ArrayBuffer(1))) != ue) ||
    (yt && Jr(new yt()) != q) ||
    (St && Jr(St.resolve()) != U) ||
    (It && Jr(new It()) != b) ||
    (bt && Jr(new bt()) != G)) &&
    (Jr = function (S) {
      var F = Hi(S),
        X = F == R ? S.constructor : void 0,
        de = X ? ai(X) : "";
      if (de)
        switch (de) {
          case Ft:
            return ue;
          case Lt:
            return q;
          case xt:
            return U;
          case Ut:
            return b;
          case Ot:
            return G;
        }
      return F;
    });
  function Vs(S, F) {
    return (
      (F = F ?? l),
      !!F &&
        (typeof S == "number" || we.test(S)) &&
        S > -1 &&
        S % 1 == 0 &&
        S < F
    );
  }
  function Gs(S) {
    var F = typeof S;
    return F == "string" || F == "number" || F == "symbol" || F == "boolean"
      ? S !== "__proto__"
      : S === null;
  }
  function Ws(S) {
    return !!Ve && Ve in S;
  }
  function Ys(S) {
    var F = S && S.constructor,
      X = (typeof F == "function" && F.prototype) || De;
    return S === X;
  }
  function Na(S) {
    return We.call(S);
  }
  function ai(S) {
    if (S != null) {
      try {
        return He.call(S);
      } catch {}
      try {
        return S + "";
      } catch {}
    }
    return "";
  }
  function Js(S, F) {
    return S === F || (S !== S && F !== F);
  }
  var Qs = Gn(
      (function () {
        return arguments;
      })()
    )
      ? Gn
      : function (S) {
          return ki(S) && Oe.call(S, "callee") && !fr.call(S, "callee");
        },
    _n = Array.isArray;
  function $a(S) {
    return S != null && Xs(S.length) && !mn(S);
  }
  var Wn = Ii || st;
  function Fa(S, F) {
    return Ki(S, F);
  }
  function mn(S) {
    if (!Zs(S)) return !1;
    var F = Hi(S);
    return F == I || F == C || F == p || F == O;
  }
  function Xs(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= l;
  }
  function Zs(S) {
    var F = typeof S;
    return S != null && (F == "object" || F == "function");
  }
  function ki(S) {
    return S != null && typeof S == "object";
  }
  var eo = Se ? gt(Se) : zs;
  function La(S) {
    return $a(S) ? Ms(S) : Bs(S);
  }
  function ot() {
    return [];
  }
  function st() {
    return !1;
  }
  i.exports = Fa;
})(ta, ta.exports);
var U2 = ta.exports;
const j2 = kd(U2);
function M2(i, e) {
  return (
    (e = e || {}),
    new Promise(function (t, s) {
      var o = new XMLHttpRequest(),
        c = [],
        l = [],
        f = {},
        g = function () {
          return {
            ok: ((o.status / 100) | 0) == 2,
            statusText: o.statusText,
            status: o.status,
            url: o.responseURL,
            text: function () {
              return Promise.resolve(o.responseText);
            },
            json: function () {
              return Promise.resolve(o.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([o.response]));
            },
            clone: g,
            headers: {
              keys: function () {
                return c;
              },
              entries: function () {
                return l;
              },
              get: function (v) {
                return f[v.toLowerCase()];
              },
              has: function (v) {
                return v.toLowerCase() in f;
              },
            },
          };
        };
      for (var p in (o.open(e.method || "get", i, !0),
      (o.onload = function () {
        o
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (v, D, E) {
            c.push((D = D.toLowerCase())),
              l.push([D, E]),
              (f[D] = f[D] ? f[D] + "," + E : E);
          }),
          t(g());
      }),
      (o.onerror = s),
      (o.withCredentials = e.credentials == "include"),
      e.headers))
        o.setRequestHeader(p, e.headers[p]);
      o.send(e.body || null);
    })
  );
}
const q2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hd = Mn(q2);
var z2 = self.fetch || (self.fetch = hd.default || hd);
const B2 = kd(z2);
function H2(i, e) {
  if (i.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
  for (var o = 0; o < i.length; o++) {
    var c = i.charAt(o),
      l = c.charCodeAt(0);
    if (t[l] !== 255) throw new TypeError(c + " is ambiguous");
    t[l] = o;
  }
  var f = i.length,
    g = i.charAt(0),
    p = Math.log(f) / Math.log(256),
    v = Math.log(256) / Math.log(f);
  function D(C) {
    if (
      (C instanceof Uint8Array ||
        (ArrayBuffer.isView(C)
          ? (C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength))
          : Array.isArray(C) && (C = Uint8Array.from(C))),
      !(C instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (C.length === 0) return "";
    for (var q = 0, K = 0, ee = 0, R = C.length; ee !== R && C[ee] === 0; )
      ee++, q++;
    for (var U = ((R - ee) * v + 1) >>> 0, O = new Uint8Array(U); ee !== R; ) {
      for (
        var P = C[ee], b = 0, u = U - 1;
        (P !== 0 || b < K) && u !== -1;
        u--, b++
      )
        (P += (256 * O[u]) >>> 0), (O[u] = P % f >>> 0), (P = (P / f) >>> 0);
      if (P !== 0) throw new Error("Non-zero carry");
      (K = b), ee++;
    }
    for (var w = U - K; w !== U && O[w] === 0; ) w++;
    for (var k = g.repeat(q); w < U; ++w) k += i.charAt(O[w]);
    return k;
  }
  function E(C) {
    if (typeof C != "string") throw new TypeError("Expected String");
    if (C.length === 0) return new Uint8Array();
    var q = 0;
    if (C[q] !== " ") {
      for (var K = 0, ee = 0; C[q] === g; ) K++, q++;
      for (
        var R = ((C.length - q) * p + 1) >>> 0, U = new Uint8Array(R);
        C[q];

      ) {
        var O = t[C.charCodeAt(q)];
        if (O === 255) return;
        for (var P = 0, b = R - 1; (O !== 0 || P < ee) && b !== -1; b--, P++)
          (O += (f * U[b]) >>> 0),
            (U[b] = O % 256 >>> 0),
            (O = (O / 256) >>> 0);
        if (O !== 0) throw new Error("Non-zero carry");
        (ee = P), q++;
      }
      if (C[q] !== " ") {
        for (var u = R - ee; u !== R && U[u] === 0; ) u++;
        for (var w = new Uint8Array(K + (R - u)), k = K; u !== R; )
          w[k++] = U[u++];
        return w;
      }
    }
  }
  function I(C) {
    var q = E(C);
    if (q) return q;
    throw new Error(`Non-${e} character`);
  }
  return { encode: D, decodeUnsafe: E, decode: I };
}
var K2 = H2,
  k2 = K2;
const Bp = (i) => {
    if (i instanceof Uint8Array && i.constructor.name === "Uint8Array")
      return i;
    if (i instanceof ArrayBuffer) return new Uint8Array(i);
    if (ArrayBuffer.isView(i))
      return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  V2 = (i) => new TextEncoder().encode(i),
  G2 = (i) => new TextDecoder().decode(i);
class W2 {
  constructor(e, t, s) {
    (this.name = e), (this.prefix = t), (this.baseEncode = s);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Y2 {
  constructor(e, t, s) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = s);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Hp(this, e);
  }
}
class J2 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Hp(this, e);
  }
  decode(e) {
    const t = e[0],
      s = this.decoders[t];
    if (s) return s.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Hp = (i, e) =>
  new J2({
    ...(i.decoders || { [i.prefix]: i }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class Q2 {
  constructor(e, t, s, o) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = s),
      (this.baseDecode = o),
      (this.encoder = new W2(e, t, s)),
      (this.decoder = new Y2(e, t, o));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const pa = ({ name: i, prefix: e, encode: t, decode: s }) => new Q2(i, e, t, s),
  Fs = ({ prefix: i, name: e, alphabet: t }) => {
    const { encode: s, decode: o } = k2(t, e);
    return pa({ prefix: i, name: e, encode: s, decode: (c) => Bp(o(c)) });
  },
  X2 = (i, e, t, s) => {
    const o = {};
    for (let v = 0; v < e.length; ++v) o[e[v]] = v;
    let c = i.length;
    for (; i[c - 1] === "="; ) --c;
    const l = new Uint8Array(((c * t) / 8) | 0);
    let f = 0,
      g = 0,
      p = 0;
    for (let v = 0; v < c; ++v) {
      const D = o[i[v]];
      if (D === void 0) throw new SyntaxError(`Non-${s} character`);
      (g = (g << t) | D),
        (f += t),
        f >= 8 && ((f -= 8), (l[p++] = 255 & (g >> f)));
    }
    if (f >= t || 255 & (g << (8 - f)))
      throw new SyntaxError("Unexpected end of data");
    return l;
  },
  Z2 = (i, e, t) => {
    const s = e[e.length - 1] === "=",
      o = (1 << t) - 1;
    let c = "",
      l = 0,
      f = 0;
    for (let g = 0; g < i.length; ++g)
      for (f = (f << 8) | i[g], l += 8; l > t; )
        (l -= t), (c += e[o & (f >> l)]);
    if ((l && (c += e[o & (f << (t - l))]), s))
      for (; (c.length * t) & 7; ) c += "=";
    return c;
  },
  Jt = ({ name: i, prefix: e, bitsPerChar: t, alphabet: s }) =>
    pa({
      prefix: e,
      name: i,
      encode(o) {
        return Z2(o, s, t);
      },
      decode(o) {
        return X2(o, s, t, i);
      },
    }),
  eS = pa({
    prefix: "\0",
    name: "identity",
    encode: (i) => G2(i),
    decode: (i) => V2(i),
  });
var tS = Object.freeze({ __proto__: null, identity: eS });
const rS = Jt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var iS = Object.freeze({ __proto__: null, base2: rS });
const nS = Jt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var sS = Object.freeze({ __proto__: null, base8: nS });
const oS = Fs({ prefix: "9", name: "base10", alphabet: "0123456789" });
var aS = Object.freeze({ __proto__: null, base10: oS });
const cS = Jt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  uS = Jt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var hS = Object.freeze({ __proto__: null, base16: cS, base16upper: uS });
const lS = Jt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  fS = Jt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  dS = Jt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  pS = Jt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  gS = Jt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  yS = Jt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  vS = Jt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  _S = Jt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  mS = Jt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var wS = Object.freeze({
  __proto__: null,
  base32: lS,
  base32upper: fS,
  base32pad: dS,
  base32padupper: pS,
  base32hex: gS,
  base32hexupper: yS,
  base32hexpad: vS,
  base32hexpadupper: _S,
  base32z: mS,
});
const bS = Fs({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  ES = Fs({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var DS = Object.freeze({ __proto__: null, base36: bS, base36upper: ES });
const SS = Fs({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  IS = Fs({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var xS = Object.freeze({ __proto__: null, base58btc: SS, base58flickr: IS });
const OS = Jt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  PS = Jt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  CS = Jt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  AS = Jt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var TS = Object.freeze({
  __proto__: null,
  base64: OS,
  base64pad: PS,
  base64url: CS,
  base64urlpad: AS,
});
const Kp = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  RS = Kp.reduce((i, e, t) => ((i[t] = e), i), []),
  NS = Kp.reduce((i, e, t) => ((i[e.codePointAt(0)] = t), i), []);
function $S(i) {
  return i.reduce((e, t) => ((e += RS[t]), e), "");
}
function FS(i) {
  const e = [];
  for (const t of i) {
    const s = NS[t.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(s);
  }
  return new Uint8Array(e);
}
const LS = pa({ prefix: "🚀", name: "base256emoji", encode: $S, decode: FS });
var US = Object.freeze({ __proto__: null, base256emoji: LS }),
  jS = kp,
  ld = 128,
  MS = 127,
  qS = ~MS,
  zS = Math.pow(2, 31);
function kp(i, e, t) {
  (e = e || []), (t = t || 0);
  for (var s = t; i >= zS; ) (e[t++] = (i & 255) | ld), (i /= 128);
  for (; i & qS; ) (e[t++] = (i & 255) | ld), (i >>>= 7);
  return (e[t] = i | 0), (kp.bytes = t - s + 1), e;
}
var BS = Nu,
  HS = 128,
  fd = 127;
function Nu(i, s) {
  var t = 0,
    s = s || 0,
    o = 0,
    c = s,
    l,
    f = i.length;
  do {
    if (c >= f)
      throw ((Nu.bytes = 0), new RangeError("Could not decode varint"));
    (l = i[c++]),
      (t += o < 28 ? (l & fd) << o : (l & fd) * Math.pow(2, o)),
      (o += 7);
  } while (l >= HS);
  return (Nu.bytes = c - s), t;
}
var KS = Math.pow(2, 7),
  kS = Math.pow(2, 14),
  VS = Math.pow(2, 21),
  GS = Math.pow(2, 28),
  WS = Math.pow(2, 35),
  YS = Math.pow(2, 42),
  JS = Math.pow(2, 49),
  QS = Math.pow(2, 56),
  XS = Math.pow(2, 63),
  ZS = function (i) {
    return i < KS
      ? 1
      : i < kS
      ? 2
      : i < VS
      ? 3
      : i < GS
      ? 4
      : i < WS
      ? 5
      : i < YS
      ? 6
      : i < JS
      ? 7
      : i < QS
      ? 8
      : i < XS
      ? 9
      : 10;
  },
  eI = { encode: jS, decode: BS, encodingLength: ZS },
  Vp = eI;
const dd = (i, e, t = 0) => (Vp.encode(i, e, t), e),
  pd = (i) => Vp.encodingLength(i),
  $u = (i, e) => {
    const t = e.byteLength,
      s = pd(i),
      o = s + pd(t),
      c = new Uint8Array(o + t);
    return dd(i, c, 0), dd(t, c, s), c.set(e, o), new tI(i, t, e, c);
  };
class tI {
  constructor(e, t, s, o) {
    (this.code = e), (this.size = t), (this.digest = s), (this.bytes = o);
  }
}
const Gp = ({ name: i, code: e, encode: t }) => new rI(i, e, t);
class rI {
  constructor(e, t, s) {
    (this.name = e), (this.code = t), (this.encode = s);
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array
        ? $u(this.code, t)
        : t.then((s) => $u(this.code, s));
    } else throw Error("Unknown type, must be binary type");
  }
}
const Wp = (i) => async (e) => new Uint8Array(await crypto.subtle.digest(i, e)),
  iI = Gp({ name: "sha2-256", code: 18, encode: Wp("SHA-256") }),
  nI = Gp({ name: "sha2-512", code: 19, encode: Wp("SHA-512") });
var sI = Object.freeze({ __proto__: null, sha256: iI, sha512: nI });
const Yp = 0,
  oI = "identity",
  Jp = Bp,
  aI = (i) => $u(Yp, Jp(i)),
  cI = { code: Yp, name: oI, encode: Jp, digest: aI };
var uI = Object.freeze({ __proto__: null, identity: cI });
new TextEncoder(), new TextDecoder();
const gd = {
  ...tS,
  ...iS,
  ...sS,
  ...aS,
  ...hS,
  ...wS,
  ...DS,
  ...xS,
  ...TS,
  ...US,
};
({ ...sI, ...uI });
function Qp(i) {
  return globalThis.Buffer != null
    ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
    : i;
}
function hI(i = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Qp(globalThis.Buffer.allocUnsafe(i))
    : new Uint8Array(i);
}
function Xp(i, e, t, s) {
  return {
    name: i,
    prefix: e,
    encoder: { name: i, prefix: e, encode: t },
    decoder: { decode: s },
  };
}
const yd = Xp(
    "utf8",
    "u",
    (i) => "u" + new TextDecoder("utf8").decode(i),
    (i) => new TextEncoder().encode(i.substring(1))
  ),
  eu = Xp(
    "ascii",
    "a",
    (i) => {
      let e = "a";
      for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
      return e;
    },
    (i) => {
      i = i.substring(1);
      const e = hI(i.length);
      for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
      return e;
    }
  ),
  lI = {
    utf8: yd,
    "utf-8": yd,
    hex: gd.base16,
    latin1: eu,
    ascii: eu,
    binary: eu,
    ...gd,
  };
function fI(i, e = "utf8") {
  const t = lI[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Qp(globalThis.Buffer.from(i, "utf-8"))
    : t.decoder.decode(`${t.prefix}${i}`);
}
const Zp = "wc",
  dI = 2,
  rh = "core",
  Ui = `${Zp}@2:${rh}:`,
  pI = { name: rh, logger: "error" },
  gI = { database: ":memory:" },
  yI = "crypto",
  vd = "client_ed25519_seed",
  vI = ve.ONE_DAY,
  _I = "keychain",
  mI = "0.3",
  wI = "messages",
  bI = "0.3",
  EI = ve.SIX_HOURS,
  DI = "publisher",
  eg = "irn",
  SI = "error",
  tg = "wss://relay.walletconnect.com",
  _d = "wss://relay.walletconnect.org",
  II = "relayer",
  er = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  xI = "_subscription",
  mi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  OI = ve.ONE_SECOND,
  PI = "2.11.1",
  CI = 1e4,
  AI = "0.3",
  TI = "WALLETCONNECT_CLIENT_ID",
  Gr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  RI = "subscription",
  NI = "0.3",
  $I = ve.FIVE_SECONDS * 1e3,
  FI = "pairing",
  LI = "0.3",
  gs = {
    wc_pairingDelete: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  ms = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  ri = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  UI = "history",
  jI = "0.3",
  MI = "expirer",
  Mr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  qI = "0.3",
  tu = "verify-api",
  Ln = "https://verify.walletconnect.com",
  Fu = "https://verify.walletconnect.org",
  zI = [Ln, Fu],
  BI = "echo",
  HI = "https://echo.walletconnect.com";
class KI {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.keychain = new Map()),
      (this.name = _I),
      (this.version = mI),
      (this.initialized = !1),
      (this.storagePrefix = Ui),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < "u" && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, o) => {
        this.isInitialized(), this.keychain.set(s, o), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.keychain.get(s);
        if (typeof o > "u") {
          const { message: c } = ae("NO_MATCHING_KEY", `${this.name}: ${s}`);
          throw new Error(c);
        }
        return o;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = e),
      (this.logger = Je.generateChildLogger(t, this.name));
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, vp(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? _p(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class kI {
  constructor(e, t, s) {
    (this.core = e),
      (this.logger = t),
      (this.name = yI),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (o) => (this.isInitialized(), this.keychain.has(o))),
      (this.getClientId = async () => {
        this.isInitialized();
        const o = await this.getClientSeed(),
          c = rd(o);
        return Np(c.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const o = $E();
        return this.setPrivateKey(o.publicKey, o.privateKey);
      }),
      (this.signJWT = async (o) => {
        this.isInitialized();
        const c = await this.getClientSeed(),
          l = rd(c),
          f = bu();
        return await WD(f, o, vI, l);
      }),
      (this.generateSharedKey = (o, c, l) => {
        this.isInitialized();
        const f = this.getPrivateKey(o),
          g = FE(f, c);
        return this.setSymKey(g, l);
      }),
      (this.setSymKey = async (o, c) => {
        this.isInitialized();
        const l = c || LE(o);
        return await this.keychain.set(l, o), l;
      }),
      (this.deleteKeyPair = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.deleteSymKey = async (o) => {
        this.isInitialized(), await this.keychain.del(o);
      }),
      (this.encode = async (o, c, l) => {
        this.isInitialized();
        const f = yp(l),
          g = an(c);
        if (Af(f)) {
          const E = f.senderPublicKey,
            I = f.receiverPublicKey;
          o = await this.generateSharedKey(E, I);
        }
        const p = this.getSymKey(o),
          { type: v, senderPublicKey: D } = f;
        return jE({ type: v, symKey: p, message: g, senderPublicKey: D });
      }),
      (this.decode = async (o, c, l) => {
        this.isInitialized();
        const f = zE(c, l);
        if (Af(f)) {
          const g = f.receiverPublicKey,
            p = f.senderPublicKey;
          o = await this.generateSharedKey(g, p);
        }
        try {
          const g = this.getSymKey(o),
            p = ME({ symKey: g, encoded: c });
          return $s(p);
        } catch (g) {
          this.logger.error(
            `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(g);
        }
      }),
      (this.getPayloadType = (o) => {
        const c = Xo(o);
        return Ts(c.type);
      }),
      (this.getPayloadSenderPublicKey = (o) => {
        const c = Xo(o);
        return c.senderPublicKey ? lr(c.senderPublicKey, hr) : void 0;
      }),
      (this.core = e),
      (this.logger = Je.generateChildLogger(t, this.name)),
      (this.keychain = s || new KI(this.core, this.logger));
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(vd);
    } catch {
      (e = bu()), await this.keychain.set(vd, e);
    }
    return fI(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class VI extends ID {
  constructor(e, t) {
    super(e, t),
      (this.logger = e),
      (this.core = t),
      (this.messages = new Map()),
      (this.name = wI),
      (this.version = bI),
      (this.initialized = !1),
      (this.storagePrefix = Ui),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const s = await this.getRelayerMessages();
            typeof s < "u" && (this.messages = s),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, o) => {
        this.isInitialized();
        const c = Un(o);
        let l = this.messages.get(s);
        return (
          typeof l > "u" && (l = {}),
          typeof l[c] < "u" ||
            ((l[c] = o), this.messages.set(s, l), await this.persist()),
          c
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let o = this.messages.get(s);
        return typeof o > "u" && (o = {}), o;
      }),
      (this.has = (s, o) => {
        this.isInitialized();
        const c = this.get(s),
          l = Un(o);
        return typeof c[l] < "u";
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = Je.generateChildLogger(e, this.name)),
      (this.core = t);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, vp(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? _p(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class GI extends xD {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.events = new qr.EventEmitter()),
      (this.name = DI),
      (this.queue = new Map()),
      (this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, o, c) => {
        var l;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: s, message: o, opts: c },
          });
        try {
          const f = (c == null ? void 0 : c.ttl) || EI,
            g = Eu(c),
            p = (c == null ? void 0 : c.prompt) || !1,
            v = (c == null ? void 0 : c.tag) || 0,
            D = (c == null ? void 0 : c.id) || Mp().toString(),
            E = {
              topic: s,
              message: o,
              opts: { ttl: f, relay: g, prompt: p, tag: v, id: D },
            },
            I = setTimeout(() => this.queue.set(D, E), this.publishTimeout);
          try {
            await await Ss(
              this.rpcPublish(s, o, f, g, p, v, D),
              this.publishTimeout,
              `Failed to publish payload, please try again. id:${D} tag:${v}`
            ),
              this.removeRequestFromQueue(D),
              this.relayer.events.emit(er.publish, E);
          } catch (C) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (l = c == null ? void 0 : c.internal) != null &&
                l.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(D), C);
            return;
          } finally {
            clearTimeout(I);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: s, message: o, opts: c },
            });
        } catch (f) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(f),
            f)
          );
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.relayer = e),
      (this.logger = Je.generateChildLogger(t, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, s, o, c, l, f) {
    var g, p, v, D;
    const E = {
      method: Go(o.protocol).publish,
      params: { topic: e, message: t, ttl: s, prompt: c, tag: l },
      id: f,
    };
    return (
      ur((g = E.params) == null ? void 0 : g.prompt) &&
        ((p = E.params) == null || delete p.prompt),
      ur((v = E.params) == null ? void 0 : v.tag) &&
        ((D = E.params) == null || delete D.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: E }),
      this.relayer.request(E)
    );
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: s, opts: o } = e;
      await this.publish(t, s, o);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(er.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(er.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
  }
}
class WI {
  constructor() {
    (this.map = new Map()),
      (this.set = (e, t) => {
        const s = this.get(e);
        this.exists(e, t) || this.map.set(e, [...s, t]);
      }),
      (this.get = (e) => this.map.get(e) || []),
      (this.exists = (e, t) => this.get(e).includes(t)),
      (this.delete = (e, t) => {
        if (typeof t > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const s = this.get(e);
        if (!this.exists(e, t)) return;
        const o = s.filter((c) => c !== t);
        if (!o.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, o);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var YI = Object.defineProperty,
  JI = Object.defineProperties,
  QI = Object.getOwnPropertyDescriptors,
  md = Object.getOwnPropertySymbols,
  XI = Object.prototype.hasOwnProperty,
  ZI = Object.prototype.propertyIsEnumerable,
  wd = (i, e, t) =>
    e in i
      ? YI(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  ys = (i, e) => {
    for (var t in e || (e = {})) XI.call(e, t) && wd(i, t, e[t]);
    if (md) for (var t of md(e)) ZI.call(e, t) && wd(i, t, e[t]);
    return i;
  },
  ru = (i, e) => JI(i, QI(e));
class e5 extends CD {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.subscriptions = new Map()),
      (this.topicMap = new WI()),
      (this.events = new qr.EventEmitter()),
      (this.name = RI),
      (this.version = NI),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Ui),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: s, opts: o },
          });
        try {
          const c = Eu(o),
            l = { topic: s, relay: c };
          this.pending.set(s, l);
          const f = await this.rpcSubscribe(s, c);
          return (
            this.onSubscribe(f, l),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: s, opts: o },
            }),
            f
          );
        } catch (c) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(c),
            c)
          );
        }
      }),
      (this.unsubscribe = async (s, o) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (o == null ? void 0 : o.id) < "u"
            ? await this.unsubscribeById(s, o.id, o)
            : await this.unsubscribeByTopic(s, o);
      }),
      (this.isSubscribed = async (s) => {
        if (this.topics.includes(s)) return !0;
        const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
        return await new Promise((c, l) => {
          const f = new ve.Watch();
          f.start(o);
          const g = setInterval(() => {
            !this.pending.has(s) &&
              this.topics.includes(s) &&
              (clearInterval(g), f.stop(o), c(!0)),
              f.elapsed(o) >= $I &&
                (clearInterval(g),
                f.stop(o),
                l(new Error("Subscription resolution timeout")));
          }, this.pollingInterval);
        }).catch(() => !1);
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = e),
      (this.logger = Je.generateChildLogger(t, this.name)),
      (this.clientId = "");
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let s = !1;
    try {
      s = this.getSubscription(e).topic === t;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const s = this.topicMap.get(e);
    await Promise.all(s.map(async (o) => await this.unsubscribeById(e, o, t)));
  }
  async unsubscribeById(e, t, s) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: e, id: t, opts: s },
      });
    try {
      const o = Eu(s);
      await this.rpcUnsubscribe(e, t, o);
      const c = mt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, c),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: e, id: t, opts: s },
        });
    } catch (o) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(o),
        o)
      );
    }
  }
  async rpcSubscribe(e, t) {
    const s = { method: Go(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      await await Ss(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(er.connection_stalled);
    }
    return Un(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay,
      s = {
        method: Go(t.protocol).batchSubscribe,
        params: { topics: e.map((o) => o.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s });
    try {
      return await await Ss(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(er.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, s) {
    const o = {
      method: Go(s.protocol).unsubscribe,
      params: { topic: e, id: t },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: o }),
      this.relayer.request(o)
    );
  }
  onSubscribe(e, t) {
    this.setSubscription(e, ru(ys({}, t), { id: e })),
      this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length &&
      e.forEach((t) => {
        this.setSubscription(t.id, ys({}, t)), this.pending.delete(t.topic);
      });
  }
  async onUnsubscribe(e, t, s) {
    this.events.removeAllListeners(t),
      this.hasSubscription(t, e) && this.deleteSubscription(t, s),
      await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: t,
      }),
      this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, ys({}, t)),
      this.topicMap.set(t.topic, e),
      this.events.emit(Gr.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: t,
      });
    const s = this.getSubscription(e);
    this.subscriptions.delete(e),
      this.topicMap.delete(s.topic, e),
      this.events.emit(Gr.deleted, ru(ys({}, s), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Gr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(Gr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(t),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(t))
        );
      }
      (this.cached = e),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    ni(t) &&
      this.onBatchSubscribe(t.map((s, o) => ru(ys({}, e[o]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }),
      await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(er.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(er.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(Gr.created, async (e) => {
        const t = Gr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      }),
      this.events.on(Gr.deleted, async (e) => {
        const t = Gr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.restartInProgress || (clearInterval(t), e());
        }, this.pollingInterval);
      }));
  }
}
var t5 = Object.defineProperty,
  bd = Object.getOwnPropertySymbols,
  r5 = Object.prototype.hasOwnProperty,
  i5 = Object.prototype.propertyIsEnumerable,
  Ed = (i, e, t) =>
    e in i
      ? t5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  n5 = (i, e) => {
    for (var t in e || (e = {})) r5.call(e, t) && Ed(i, t, e[t]);
    if (bd) for (var t of bd(e)) i5.call(e, t) && Ed(i, t, e[t]);
    return i;
  };
class s5 extends OD {
  constructor(e) {
    super(e),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new qr.EventEmitter()),
      (this.name = II),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.request = async (t) => {
        this.logger.debug("Publishing Request Payload");
        const s = t.id,
          o = this.provider.request(t);
        this.requestsInFlight.set(s, { promise: o, request: t });
        try {
          return await this.toEstablishConnection(), await o;
        } catch (c) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(c),
            c)
          );
        } finally {
          this.requestsInFlight.delete(s);
        }
      }),
      (this.onPayloadHandler = (t) => {
        this.onProviderPayload(t);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(er.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (t) => {
        this.logger.error(t),
          this.events.emit(er.error, t),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(mi.payload, this.onPayloadHandler),
          this.provider.on(mi.connect, this.onConnectHandler),
          this.provider.on(mi.disconnect, this.onDisconnectHandler),
          this.provider.on(mi.error, this.onProviderErrorHandler);
      }),
      (this.core = e.core),
      (this.logger =
        typeof e.logger < "u" && typeof e.logger != "string"
          ? Je.generateChildLogger(e.logger, this.name)
          : Je.pino(Je.getDefaultLoggerOptions({ level: e.logger || SI }))),
      (this.messages = new VI(this.logger, e.core)),
      (this.subscriber = new e5(this, this.logger)),
      (this.publisher = new GI(this, this.logger)),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || tg),
      (this.projectId = e.projectId),
      (this.bundleId = GE()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${_d}...`
      ),
        await this.restartTransport(_d);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, CI);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, s) {
    this.isInitialized(),
      await this.publisher.publish(e, t, s),
      await this.recordMessageEvent({
        topic: e,
        message: t,
        publishedAt: Date.now(),
      });
  }
  async subscribe(e, t) {
    var s;
    this.isInitialized();
    let o =
      ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
    if (o) return o;
    let c;
    const l = (f) => {
      f.topic === e && (this.subscriber.off(Gr.created, l), c());
    };
    return (
      await Promise.all([
        new Promise((f) => {
          (c = f), this.subscriber.on(Gr.created, l);
        }),
        new Promise(async (f) => {
          (o = await this.subscriber.subscribe(e, t)), f();
        }),
      ]),
      o
    );
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 &&
      (this.logger.debug(
        "Waiting for all in-flight requests to finish before closing transport..."
      ),
      this.requestsInFlight.forEach(async (e) => {
        await e.promise;
      })),
      (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await Ss(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(e) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      e &&
        e !== this.relayUrl &&
        ((this.relayUrl = e),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((t) => {
            if (!this.initialized) return t();
            this.subscriber.once(Gr.resubscribed, () => {
              t();
            });
          }),
          new Promise(async (t, s) => {
            try {
              await Ss(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (o) {
              s(o);
              return;
            }
            t();
          }),
        ]);
      } catch (t) {
        this.logger.error(t);
        const s = t;
        if (!this.isConnectionStalled(s.message)) throw t;
        this.provider.events.emit(mi.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = e || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await zf()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new Di(
      new L2(
        ZE({
          sdkVersion: PI,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: s } = e;
    await this.messages.set(t, s);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: s } = e;
    if (!s || s.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(t)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0
      );
    const o = this.messages.has(t, s);
    return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o;
  }
  async onProviderPayload(e) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: e }),
      th(e))
    ) {
      if (!e.method.endsWith(xI)) return;
      const t = e.params,
        { topic: s, message: o, publishedAt: c } = t.data,
        l = { topic: s, message: o, publishedAt: c };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(n5({ type: "event", event: t.id }, l)),
        this.events.emit(t.id, l),
        await this.acknowledgePayload(e),
        await this.onMessageEvent(l);
    } else da(e) && this.events.emit(er.message_ack, e);
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) ||
      (this.events.emit(er.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = la(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(mi.payload, this.onPayloadHandler),
      this.provider.off(mi.connect, this.onConnectHandler),
      this.provider.off(mi.disconnect, this.onDisconnectHandler),
      this.provider.off(mi.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(er.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await zf();
    G3(async (t) => {
      this.initialized &&
        e !== t &&
        ((e = t),
        t
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(er.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((e) => this.logger.error(e));
      }, ve.toMiliseconds(OI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var o5 = Object.defineProperty,
  Dd = Object.getOwnPropertySymbols,
  a5 = Object.prototype.hasOwnProperty,
  c5 = Object.prototype.propertyIsEnumerable,
  Sd = (i, e, t) =>
    e in i
      ? o5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Id = (i, e) => {
    for (var t in e || (e = {})) a5.call(e, t) && Sd(i, t, e[t]);
    if (Dd) for (var t of Dd(e)) c5.call(e, t) && Sd(i, t, e[t]);
    return i;
  };
class ga extends PD {
  constructor(e, t, s, o = Ui, c = void 0) {
    super(e, t, s, o),
      (this.core = e),
      (this.logger = t),
      (this.name = s),
      (this.map = new Map()),
      (this.version = AI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ui),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((l) => {
            this.getKey && l !== null && !ur(l)
              ? this.map.set(this.getKey(l), l)
              : S3(l)
              ? this.map.set(l.id, l)
              : I3(l) && this.map.set(l.topic, l);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (l, f) => {
        this.isInitialized(),
          this.map.has(l)
            ? await this.update(l, f)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: l,
                value: f,
              }),
              this.map.set(l, f),
              await this.persist());
      }),
      (this.get = (l) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: l }),
        this.getData(l)
      )),
      (this.getAll = (l) => (
        this.isInitialized(),
        l
          ? this.values.filter((f) =>
              Object.keys(l).every((g) => j2(f[g], l[g]))
            )
          : this.values
      )),
      (this.update = async (l, f) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: l,
            update: f,
          });
        const g = Id(Id({}, this.getData(l)), f);
        this.map.set(l, g), await this.persist();
      }),
      (this.delete = async (l, f) => {
        this.isInitialized(),
          this.map.has(l) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: l,
              reason: f,
            }),
            this.map.delete(l),
            await this.persist());
      }),
      (this.logger = Je.generateChildLogger(t, this.name)),
      (this.storagePrefix = o),
      (this.getKey = c);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class u5 {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.name = FI),
      (this.version = LI),
      (this.events = new Mu()),
      (this.initialized = !1),
      (this.storagePrefix = Ui),
      (this.ignoredPayloadTypes = [un]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...s]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = bu(),
          o = await this.core.crypto.setSymKey(s),
          c = Or(ve.FIVE_MINUTES),
          l = { protocol: eg },
          f = { topic: o, expiry: c, relay: l, active: !1 },
          g = g3({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: o,
            symKey: s,
            relay: l,
            expiryTimestamp: c,
          });
        return (
          await this.pairings.set(o, f),
          await this.core.relayer.subscribe(o),
          this.core.expirer.set(o, c),
          { topic: o, uri: g }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: o, symKey: c, relay: l, expiryTimestamp: f } = Lf(s.uri);
        let g;
        if (
          this.pairings.keys.includes(o) &&
          ((g = this.pairings.get(o)), g.active)
        )
          throw new Error(
            `Pairing already exists: ${o}. Please try again with a new connection URI.`
          );
        const p = f || Or(ve.FIVE_MINUTES),
          v = { topic: o, relay: l, expiry: p, active: !1 };
        return (
          await this.pairings.set(o, v),
          this.core.expirer.set(o, p),
          s.activatePairing && (await this.activate({ topic: o })),
          this.events.emit(ms.create, v),
          this.core.crypto.keychain.has(o) ||
            (await this.core.crypto.setSymKey(c, o),
            await this.core.relayer.subscribe(o, { relay: l })),
          v
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const o = Or(ve.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: o }),
          this.core.expirer.set(s, o);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: o } = s;
        if (this.pairings.keys.includes(o)) {
          const c = await this.sendRequest(o, "wc_pairingPing", {}),
            { done: l, resolve: f, reject: g } = Fn();
          this.events.once($t("pairing_ping", c), ({ error: p }) => {
            p ? g(p) : f();
          }),
            await l();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: o }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: o });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: o }) => {
        this.isInitialized(),
          await this.pairings.update(s, { peerMetadata: o });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: o } = s;
        this.pairings.keys.includes(o) &&
          (await this.sendRequest(
            o,
            "wc_pairingDelete",
            mt("USER_DISCONNECTED")
          ),
          await this.deletePairing(o));
      }),
      (this.sendRequest = async (s, o, c) => {
        const l = jn(o, c),
          f = await this.core.crypto.encode(s, l),
          g = gs[o].req;
        return (
          this.core.history.set(s, l), this.core.relayer.publish(s, f, g), l.id
        );
      }),
      (this.sendResult = async (s, o, c) => {
        const l = la(s, c),
          f = await this.core.crypto.encode(o, l),
          g = await this.core.history.get(o, s),
          p = gs[g.request.method].res;
        await this.core.relayer.publish(o, f, p),
          await this.core.history.resolve(l);
      }),
      (this.sendError = async (s, o, c) => {
        const l = fa(s, c),
          f = await this.core.crypto.encode(o, l),
          g = await this.core.history.get(o, s),
          p = gs[g.request.method]
            ? gs[g.request.method].res
            : gs.unregistered_method.res;
        await this.core.relayer.publish(o, f, p),
          await this.core.history.resolve(l);
      }),
      (this.deletePairing = async (s, o) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, mt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(s),
            o ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((o) => Li(o.expiry));
        await Promise.all(s.map((o) => this.deletePairing(o.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: o, payload: c } = s;
        switch (c.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(o, c);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(o, c);
          default:
            return this.onUnknownRpcMethodRequest(o, c);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: o, payload: c } = s,
          l = (await this.core.history.get(o, c.id)).request.method;
        switch (l) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(o, c);
          default:
            return this.onUnknownRpcMethodResponse(l);
        }
      }),
      (this.onPairingPingRequest = async (s, o) => {
        const { id: c } = o;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(c, s, !0),
            this.events.emit(ms.ping, { id: c, topic: s });
        } catch (l) {
          await this.sendError(c, s, l), this.logger.error(l);
        }
      }),
      (this.onPairingPingResponse = (s, o) => {
        const { id: c } = o;
        setTimeout(() => {
          Ei(o)
            ? this.events.emit($t("pairing_ping", c), {})
            : Wr(o) &&
              this.events.emit($t("pairing_ping", c), { error: o.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, o) => {
        const { id: c } = o;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(ms.delete, { id: c, topic: s });
        } catch (l) {
          await this.sendError(c, s, l), this.logger.error(l);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, o) => {
        const { id: c, method: l } = o;
        try {
          if (this.registeredMethods.includes(l)) return;
          const f = mt("WC_METHOD_UNSUPPORTED", l);
          await this.sendError(c, s, f), this.logger.error(f);
        } catch (f) {
          await this.sendError(c, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) ||
          this.logger.error(mt("WC_METHOD_UNSUPPORTED", s));
      }),
      (this.isValidPair = (s) => {
        var o;
        if (!mr(s)) {
          const { message: l } = ae(
            "MISSING_OR_INVALID",
            `pair() params: ${s}`
          );
          throw new Error(l);
        }
        if (!D3(s.uri)) {
          const { message: l } = ae(
            "MISSING_OR_INVALID",
            `pair() uri: ${s.uri}`
          );
          throw new Error(l);
        }
        const c = Lf(s.uri);
        if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
          const { message: l } = ae(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(l);
        }
        if (!(c != null && c.symKey)) {
          const { message: l } = ae("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(l);
        }
        if (
          c != null &&
          c.expiryTimestamp &&
          ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()
        ) {
          const { message: l } = ae(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(l);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!mr(s)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `ping() params: ${s}`
          );
          throw new Error(c);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!mr(s)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `disconnect() params: ${s}`
          );
          throw new Error(c);
        }
        const { topic: o } = s;
        await this.isValidPairingTopic(o);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!Gt(s, !1)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${s}`
          );
          throw new Error(o);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: o } = ae(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${s}`
          );
          throw new Error(o);
        }
        if (Li(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: o } = ae("EXPIRED", `pairing topic: ${s}`);
          throw new Error(o);
        }
      }),
      (this.core = e),
      (this.logger = Je.generateChildLogger(t, this.name)),
      (this.pairings = new ga(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        !this.pairings.keys.includes(t) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const o = await this.core.crypto.decode(t, s);
      try {
        th(o)
          ? (this.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : da(o) &&
            (await this.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.core.history.delete(t, o.id));
      } catch (c) {
        this.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Mr.expired, async (e) => {
      const { topic: t } = wp(e.target);
      t &&
        this.pairings.keys.includes(t) &&
        (await this.deletePairing(t, !0),
        this.events.emit(ms.expire, { topic: t }));
    });
  }
}
class h5 extends SD {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.records = new Map()),
      (this.events = new qr.EventEmitter()),
      (this.name = UI),
      (this.version = jI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ui),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, o, c) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: s,
            request: o,
            chainId: c,
          }),
          this.records.has(o.id))
        )
          return;
        const l = {
          id: o.id,
          topic: s,
          request: { method: o.method, params: o.params || null },
          chainId: c,
          expiry: Or(ve.THIRTY_DAYS),
        };
        this.records.set(l.id, l), this.events.emit(ri.created, l);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: s }),
          !this.records.has(s.id))
        )
          return;
        const o = await this.getRecord(s.id);
        typeof o.response > "u" &&
          ((o.response = Wr(s) ? { error: s.error } : { result: s.result }),
          this.records.set(o.id, o),
          this.events.emit(ri.updated, o));
      }),
      (this.get = async (s, o) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: s, id: o }),
        await this.getRecord(o)
      )),
      (this.delete = (s, o) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: o }),
          this.values.forEach((c) => {
            if (c.topic === s) {
              if (typeof o < "u" && c.id !== o) return;
              this.records.delete(c.id), this.events.emit(ri.deleted, c);
            }
          });
      }),
      (this.exists = async (s, o) => (
        this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === s : !1
      )),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = Je.generateChildLogger(t, this.name));
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return (
      this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const s = {
          topic: t.topic,
          request: jn(t.request.method, t.request.params, t.id),
          chainId: t.chainId,
        };
        return e.push(s);
      }),
      e
    );
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(s);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ri.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(ri.created, (e) => {
      const t = ri.created;
      this.logger.info(`Emitting ${t}`),
        this.logger.debug({ type: "event", event: t, record: e }),
        this.persist();
    }),
      this.events.on(ri.updated, (e) => {
        const t = ri.updated;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.events.on(ri.deleted, (e) => {
        const t = ri.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e }),
          this.persist();
      }),
      this.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${e.id}`),
          this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class l5 extends AD {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.expirations = new Map()),
      (this.events = new qr.EventEmitter()),
      (this.name = MI),
      (this.version = qI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ui),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const o = this.formatTarget(s);
          return typeof this.getExpiration(o) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (s, o) => {
        this.isInitialized();
        const c = this.formatTarget(s),
          l = { target: c, expiry: o };
        this.expirations.set(c, l),
          this.checkExpiry(c, l),
          this.events.emit(Mr.created, { target: c, expiration: l });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const o = this.formatTarget(s);
        return this.getExpiration(o);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const o = this.formatTarget(s),
            c = this.getExpiration(o);
          this.expirations.delete(o),
            this.events.emit(Mr.deleted, { target: o, expiration: c });
        }
      }),
      (this.on = (s, o) => {
        this.events.on(s, o);
      }),
      (this.once = (s, o) => {
        this.events.once(s, o);
      }),
      (this.off = (s, o) => {
        this.events.off(s, o);
      }),
      (this.removeListener = (s, o) => {
        this.events.removeListener(s, o);
      }),
      (this.logger = Je.generateChildLogger(t, this.name));
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return e3(e);
    if (typeof e == "number") return t3(e);
    const { message: t } = ae("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Mr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = ae("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: s } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(s), new Error(s));
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: s } = t;
    ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e),
      this.events.emit(Mr.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(kn.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(Mr.created, (e) => {
        const t = Mr.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Mr.expired, (e) => {
        const t = Mr.expired;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(Mr.deleted, (e) => {
        const t = Mr.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class f5 extends TD {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.name = tu),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || Bn() || !Hn()) return;
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        this.verifyUrl !== o && this.removeIframe(), (this.verifyUrl = o);
        try {
          await this.createIframe();
        } catch (c) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(c);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = Fu);
          try {
            await this.createIframe();
          } catch (c) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(c),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return "";
        const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        let c;
        try {
          c = await this.fetchAttestation(s.attestationId, o);
        } catch (l) {
          this.logger.info(
            `failed to resolve attestation: ${s.attestationId} from url: ${o}`
          ),
            this.logger.info(l),
            (c = await this.fetchAttestation(s.attestationId, Fu));
        }
        return c;
      }),
      (this.fetchAttestation = async (s, o) => {
        this.logger.info(`resolving attestation: ${s} from url: ${o}`);
        const c = this.startAbortTimer(ve.ONE_SECOND * 2),
          l = await fetch(`${o}/attestation/${s}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(c), l.status === 200 ? await l.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var o;
        try {
          if (!this.iframe) return;
          (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const o = (c) => {
          c.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", o),
            s());
        };
        await Promise.race([
          new Promise((c) => {
            if (document.getElementById(tu)) return c();
            window.addEventListener("message", o);
            const l = document.createElement("iframe");
            (l.id = tu),
              (l.src = `${this.verifyUrl}/${this.projectId}`),
              (l.style.display = "none"),
              document.body.append(l),
              (this.iframe = l),
              (s = c);
          }),
          new Promise((c, l) =>
            setTimeout(() => {
              window.removeEventListener("message", o),
                l("verify iframe load timeout");
            }, ve.toMiliseconds(ve.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let o = s || Ln;
        return (
          zI.includes(o) ||
            (this.logger.info(
              `verify url: ${o}, not included in trusted list, assigning default: ${Ln}`
            ),
            (o = Ln)),
          o
        );
      }),
      (this.logger = Je.generateChildLogger(t, this.name)),
      (this.verifyUrl = Ln),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Yu() && {}.IS_VITEST);
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ve.toMiliseconds(e))
    );
  }
}
class d5 extends RD {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.context = BI),
      (this.registerDeviceToken = async (s) => {
        const {
            clientId: o,
            token: c,
            notificationType: l,
            enableEncrypted: f = !1,
          } = s,
          g = `${HI}/${this.projectId}/clients`;
        await B2(g, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: o,
            type: l,
            token: c,
            always_raw: f,
          }),
        });
      }),
      (this.logger = Je.generateChildLogger(t, this.context));
  }
}
var p5 = Object.defineProperty,
  xd = Object.getOwnPropertySymbols,
  g5 = Object.prototype.hasOwnProperty,
  y5 = Object.prototype.propertyIsEnumerable,
  Od = (i, e, t) =>
    e in i
      ? p5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Pd = (i, e) => {
    for (var t in e || (e = {})) g5.call(e, t) && Od(i, t, e[t]);
    if (xd) for (var t of xd(e)) y5.call(e, t) && Od(i, t, e[t]);
    return i;
  };
class ih extends DD {
  constructor(e) {
    super(e),
      (this.protocol = Zp),
      (this.version = dI),
      (this.name = rh),
      (this.events = new qr.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.projectId = e == null ? void 0 : e.projectId),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || tg),
      (this.customStoragePrefix =
        e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "");
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : Je.pino(
            Je.getDefaultLoggerOptions({
              level: (e == null ? void 0 : e.logger) || pI.logger,
            })
          );
    (this.logger = Je.generateChildLogger(t, this.name)),
      (this.heartbeat = new kn.HeartBeat()),
      (this.crypto = new kI(
        this,
        this.logger,
        e == null ? void 0 : e.keychain
      )),
      (this.history = new h5(this, this.logger)),
      (this.expirer = new l5(this, this.logger)),
      (this.storage =
        e != null && e.storage
          ? e.storage
          : new O6(Pd(Pd({}, gI), e == null ? void 0 : e.storageOptions))),
      (this.relayer = new s5({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new u5(this, this.logger)),
      (this.verify = new f5(this.projectId || "", this.logger)),
      (this.echoClient = new d5(this.projectId || "", this.logger));
  }
  static async init(e) {
    const t = new ih(e);
    await t.initialize();
    const s = await t.crypto.getClientId();
    return await t.storage.setItem(TI, s), t;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (e) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          e
        ),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
const v5 = ih,
  rg = "wc",
  ig = 2,
  ng = "client",
  nh = `${rg}@${ig}:${ng}:`,
  iu = {
    name: ng,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  Cd = "WALLETCONNECT_DEEPLINK_CHOICE",
  _5 = "proposal",
  sg = "Proposal expired",
  m5 = "session",
  Ko = ve.SEVEN_DAYS,
  w5 = "engine",
  wi = {
    wc_sessionPropose: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ve.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ve.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ve.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ve.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: ve.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  nu = { min: ve.FIVE_MINUTES, max: ve.SEVEN_DAYS },
  bi = { idle: "IDLE", active: "ACTIVE" },
  b5 = "request",
  E5 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var D5 = Object.defineProperty,
  S5 = Object.defineProperties,
  I5 = Object.getOwnPropertyDescriptors,
  Ad = Object.getOwnPropertySymbols,
  x5 = Object.prototype.hasOwnProperty,
  O5 = Object.prototype.propertyIsEnumerable,
  Td = (i, e, t) =>
    e in i
      ? D5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  cr = (i, e) => {
    for (var t in e || (e = {})) x5.call(e, t) && Td(i, t, e[t]);
    if (Ad) for (var t of Ad(e)) O5.call(e, t) && Td(i, t, e[t]);
    return i;
  },
  $n = (i, e) => S5(i, I5(e));
class P5 extends $D {
  constructor(e) {
    super(e),
      (this.name = w5),
      (this.events = new Mu()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [un]),
      (this.requestQueue = { state: bi.idle, queue: [] }),
      (this.sessionRequestQueue = { state: bi.idle, queue: [] }),
      (this.requestQueueDelay = ve.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(wi) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ve.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (t) => {
        await this.isInitialized();
        const s = $n(cr({}, t), {
          requiredNamespaces: t.requiredNamespaces || {},
          optionalNamespaces: t.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: o,
          requiredNamespaces: c,
          optionalNamespaces: l,
          sessionProperties: f,
          relays: g,
        } = s;
        let p = o,
          v,
          D = !1;
        if (
          (p && (D = this.client.core.pairing.pairings.get(p).active), !p || !D)
        ) {
          const { topic: O, uri: P } = await this.client.core.pairing.create();
          (p = O), (v = P);
        }
        const E = await this.client.core.crypto.generateKeyPair(),
          I = wi.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES,
          C = Or(I),
          q = cr(
            {
              requiredNamespaces: c,
              optionalNamespaces: l,
              relays: g ?? [{ protocol: eg }],
              proposer: { publicKey: E, metadata: this.client.metadata },
              expiryTimestamp: C,
            },
            f && { sessionProperties: f }
          ),
          { reject: K, resolve: ee, done: R } = Fn(I, sg);
        if (
          (this.events.once(
            $t("session_connect"),
            async ({ error: O, session: P }) => {
              if (O) K(O);
              else if (P) {
                P.self.publicKey = E;
                const b = $n(cr({}, P), {
                  requiredNamespaces: q.requiredNamespaces,
                  optionalNamespaces: q.optionalNamespaces,
                });
                await this.client.session.set(P.topic, b),
                  await this.setExpiry(P.topic, P.expiry),
                  p &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: p,
                      metadata: P.peer.metadata,
                    })),
                  ee(b);
              }
            }
          ),
          !p)
        ) {
          const { message: O } = ae(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${p}`
          );
          throw new Error(O);
        }
        const U = await this.sendRequest({
          topic: p,
          method: "wc_sessionPropose",
          params: q,
          throwOnFailedPublish: !0,
        });
        return (
          await this.setProposal(U, cr({ id: U }, q)), { uri: v, approval: R }
        );
      }),
      (this.pair = async (t) => (
        await this.isInitialized(), await this.client.core.pairing.pair(t)
      )),
      (this.approve = async (t) => {
        await this.isInitialized(), await this.isValidApprove(t);
        const {
            id: s,
            relayProtocol: o,
            namespaces: c,
            sessionProperties: l,
          } = t,
          f = this.client.proposal.get(s);
        let {
          pairingTopic: g,
          proposer: p,
          requiredNamespaces: v,
          optionalNamespaces: D,
        } = f;
        g = g || "";
        const E = await this.client.core.crypto.generateKeyPair(),
          I = p.publicKey,
          C = await this.client.core.crypto.generateSharedKey(E, I);
        g &&
          s &&
          (await this.client.core.pairing.updateMetadata({
            topic: g,
            metadata: p.metadata,
          }),
          await this.sendResult({
            id: s,
            topic: g,
            result: { relay: { protocol: o ?? "irn" }, responderPublicKey: E },
          }),
          await this.client.proposal.delete(s, mt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: g }));
        const q = cr(
          {
            relay: { protocol: o ?? "irn" },
            namespaces: c,
            pairingTopic: g,
            controller: { publicKey: E, metadata: this.client.metadata },
            expiry: Or(Ko),
          },
          l && { sessionProperties: l }
        );
        await this.client.core.relayer.subscribe(C);
        const K = $n(cr({}, q), {
          topic: C,
          requiredNamespaces: v,
          optionalNamespaces: D,
          pairingTopic: g,
          acknowledged: !1,
          self: q.controller,
          peer: { publicKey: p.publicKey, metadata: p.metadata },
          controller: E,
        });
        await this.client.session.set(C, K);
        try {
          await this.sendRequest({
            topic: C,
            method: "wc_sessionSettle",
            params: q,
            throwOnFailedPublish: !0,
          });
        } catch (ee) {
          throw (
            (this.client.logger.error(ee),
            this.client.session.delete(C, mt("USER_DISCONNECTED")),
            await this.client.core.relayer.unsubscribe(C),
            ee)
          );
        }
        return (
          await this.setExpiry(C, Or(Ko)),
          {
            topic: C,
            acknowledged: () =>
              new Promise((ee) =>
                setTimeout(() => ee(this.client.session.get(C)), 500)
              ),
          }
        );
      }),
      (this.reject = async (t) => {
        await this.isInitialized(), await this.isValidReject(t);
        const { id: s, reason: o } = t,
          { pairingTopic: c } = this.client.proposal.get(s);
        c &&
          (await this.sendError(s, c, o),
          await this.client.proposal.delete(s, mt("USER_DISCONNECTED")));
      }),
      (this.update = async (t) => {
        await this.isInitialized(), await this.isValidUpdate(t);
        const { topic: s, namespaces: o } = t,
          c = await this.sendRequest({
            topic: s,
            method: "wc_sessionUpdate",
            params: { namespaces: o },
          }),
          { done: l, resolve: f, reject: g } = Fn();
        return (
          this.events.once($t("session_update", c), ({ error: p }) => {
            p ? g(p) : f();
          }),
          await this.client.session.update(s, { namespaces: o }),
          { acknowledged: l }
        );
      }),
      (this.extend = async (t) => {
        await this.isInitialized(), await this.isValidExtend(t);
        const { topic: s } = t,
          o = await this.sendRequest({
            topic: s,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: c, resolve: l, reject: f } = Fn();
        return (
          this.events.once($t("session_extend", o), ({ error: g }) => {
            g ? f(g) : l();
          }),
          await this.setExpiry(s, Or(Ko)),
          { acknowledged: c }
        );
      }),
      (this.request = async (t) => {
        await this.isInitialized(), await this.isValidRequest(t);
        const {
            chainId: s,
            request: o,
            topic: c,
            expiry: l = wi.wc_sessionRequest.req.ttl,
          } = t,
          f = eh(),
          {
            done: g,
            resolve: p,
            reject: v,
          } = Fn(l, "Request expired. Please try again.");
        return (
          this.events.once(
            $t("session_request", f),
            ({ error: D, result: E }) => {
              D ? v(D) : p(E);
            }
          ),
          await Promise.all([
            new Promise(async (D) => {
              await this.sendRequest({
                clientRpcId: f,
                topic: c,
                method: "wc_sessionRequest",
                params: {
                  request: $n(cr({}, o), { expiryTimestamp: Or(l) }),
                  chainId: s,
                },
                expiry: l,
                throwOnFailedPublish: !0,
              }).catch((E) => v(E)),
                this.client.events.emit("session_request_sent", {
                  topic: c,
                  request: o,
                  chainId: s,
                  id: f,
                }),
                D();
            }),
            new Promise(async (D) => {
              const E = await i3(this.client.core.storage, Cd);
              r3({ id: f, topic: c, wcDeepLink: E }), D();
            }),
            g(),
          ]).then((D) => D[2])
        );
      }),
      (this.respond = async (t) => {
        await this.isInitialized(), await this.isValidRespond(t);
        const { topic: s, response: o } = t,
          { id: c } = o;
        Ei(o)
          ? await this.sendResult({
              id: c,
              topic: s,
              result: o.result,
              throwOnFailedPublish: !0,
            })
          : Wr(o) && (await this.sendError(c, s, o.error)),
          this.cleanupAfterResponse(t);
      }),
      (this.ping = async (t) => {
        await this.isInitialized(), await this.isValidPing(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s)) {
          const o = await this.sendRequest({
              topic: s,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: c, resolve: l, reject: f } = Fn();
          this.events.once($t("session_ping", o), ({ error: g }) => {
            g ? f(g) : l();
          }),
            await c();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (t) => {
        await this.isInitialized(), await this.isValidEmit(t);
        const { topic: s, event: o, chainId: c } = t;
        await this.sendRequest({
          topic: s,
          method: "wc_sessionEvent",
          params: { event: o, chainId: c },
        });
      }),
      (this.disconnect = async (t) => {
        await this.isInitialized(), await this.isValidDisconnect(t);
        const { topic: s } = t;
        if (this.client.session.keys.includes(s))
          await this.sendRequest({
            topic: s,
            method: "wc_sessionDelete",
            params: mt("USER_DISCONNECTED"),
            throwOnFailedPublish: !0,
          }),
            await this.deleteSession({ topic: s, emitEvent: !1 });
        else if (this.client.core.pairing.pairings.keys.includes(s))
          await this.client.core.pairing.disconnect({ topic: s });
        else {
          const { message: o } = ae(
            "MISMATCHED_TOPIC",
            `Session or pairing topic not found: ${s}`
          );
          throw new Error(o);
        }
      }),
      (this.find = (t) => (
        this.isInitialized(),
        this.client.session.getAll().filter((s) => b3(s, t))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.cleanupDuplicatePairings = async (t) => {
        if (t.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(t.pairingTopic),
              o = this.client.core.pairing.pairings.getAll().filter((c) => {
                var l, f;
                return (
                  ((l = c.peerMetadata) == null ? void 0 : l.url) &&
                  ((f = c.peerMetadata) == null ? void 0 : f.url) ===
                    t.peer.metadata.url &&
                  c.topic &&
                  c.topic !== s.topic
                );
              });
            if (o.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${o.length} duplicate pairing(s)`
            ),
              await Promise.all(
                o.map((c) =>
                  this.client.core.pairing.disconnect({ topic: c.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (t) => {
        const {
            topic: s,
            expirerHasDeleted: o = !1,
            emitEvent: c = !0,
            id: l = 0,
          } = t,
          { self: f } = this.client.session.get(s);
        await this.client.core.relayer.unsubscribe(s),
          await this.client.session.delete(s, mt("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(f.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(f.publicKey)),
          this.client.core.crypto.keychain.has(s) &&
            (await this.client.core.crypto.deleteSymKey(s)),
          o || this.client.core.expirer.del(s),
          this.client.core.storage
            .removeItem(Cd)
            .catch((g) => this.client.logger.warn(g)),
          this.getPendingSessionRequests().forEach((g) => {
            g.topic === s &&
              this.deletePendingSessionRequest(g.id, mt("USER_DISCONNECTED"));
          }),
          c && this.client.events.emit("session_delete", { id: l, topic: s });
      }),
      (this.deleteProposal = async (t, s) => {
        await Promise.all([
          this.client.proposal.delete(t, mt("USER_DISCONNECTED")),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]);
      }),
      (this.deletePendingSessionRequest = async (t, s, o = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(t, s),
          o ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((c) => c.id !== t)),
          o &&
            ((this.sessionRequestQueue.state = bi.idle),
            this.client.events.emit("session_request_expire", { id: t }));
      }),
      (this.setExpiry = async (t, s) => {
        this.client.session.keys.includes(t) &&
          (await this.client.session.update(t, { expiry: s })),
          this.client.core.expirer.set(t, s);
      }),
      (this.setProposal = async (t, s) => {
        await this.client.proposal.set(t, s),
          this.client.core.expirer.set(t, Or(wi.wc_sessionPropose.req.ttl));
      }),
      (this.setPendingSessionRequest = async (t) => {
        const { id: s, topic: o, params: c, verifyContext: l } = t,
          f = c.request.expiryTimestamp || Or(wi.wc_sessionRequest.req.ttl);
        await this.client.pendingRequest.set(s, {
          id: s,
          topic: o,
          params: c,
          verifyContext: l,
        }),
          f && this.client.core.expirer.set(s, f);
      }),
      (this.sendRequest = async (t) => {
        const {
            topic: s,
            method: o,
            params: c,
            expiry: l,
            relayRpcId: f,
            clientRpcId: g,
            throwOnFailedPublish: p,
          } = t,
          v = jn(o, c, g);
        if (Hn() && E5.includes(o)) {
          const I = Un(JSON.stringify(v));
          this.client.core.verify.register({ attestationId: I });
        }
        const D = await this.client.core.crypto.encode(s, v),
          E = wi[o].req;
        return (
          l && (E.ttl = l),
          f && (E.id = f),
          this.client.core.history.set(s, v),
          p
            ? ((E.internal = $n(cr({}, E.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(s, D, E))
            : this.client.core.relayer
                .publish(s, D, E)
                .catch((I) => this.client.logger.error(I)),
          v.id
        );
      }),
      (this.sendResult = async (t) => {
        const { id: s, topic: o, result: c, throwOnFailedPublish: l } = t,
          f = la(s, c),
          g = await this.client.core.crypto.encode(o, f),
          p = await this.client.core.history.get(o, s),
          v = wi[p.request.method].res;
        l
          ? ((v.internal = $n(cr({}, v.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(o, g, v))
          : this.client.core.relayer
              .publish(o, g, v)
              .catch((D) => this.client.logger.error(D)),
          await this.client.core.history.resolve(f);
      }),
      (this.sendError = async (t, s, o) => {
        const c = fa(t, o),
          l = await this.client.core.crypto.encode(s, c),
          f = await this.client.core.history.get(s, t),
          g = wi[f.request.method].res;
        this.client.core.relayer.publish(s, l, g),
          await this.client.core.history.resolve(c);
      }),
      (this.cleanup = async () => {
        const t = [],
          s = [];
        this.client.session.getAll().forEach((o) => {
          let c = !1;
          Li(o.expiry) && (c = !0),
            this.client.core.crypto.keychain.has(o.topic) || (c = !0),
            c && t.push(o.topic);
        }),
          this.client.proposal.getAll().forEach((o) => {
            Li(o.expiryTimestamp) && s.push(o.id);
          }),
          await Promise.all([
            ...t.map((o) => this.deleteSession({ topic: o })),
            ...s.map((o) => this.deleteProposal(o)),
          ]);
      }),
      (this.onRelayEventRequest = async (t) => {
        this.requestQueue.queue.push(t), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === bi.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = bi.active;
          const t = this.requestQueue.queue.shift();
          if (t)
            try {
              this.processRequest(t),
                await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = bi.idle;
      }),
      (this.processRequest = (t) => {
        const { topic: s, payload: o } = t,
          c = o.method;
        switch (c) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(s, o);
          case "wc_sessionPing":
            return this.onSessionPingRequest(s, o);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequest(s, o);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(s, o);
          default:
            return this.client.logger.info(`Unsupported request method ${c}`);
        }
      }),
      (this.onRelayEventResponse = async (t) => {
        const { topic: s, payload: o } = t,
          c = (await this.client.core.history.get(s, o.id)).request.method;
        switch (c) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(s, o);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(s, o);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(s, o);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(s, o);
          case "wc_sessionPing":
            return this.onSessionPingResponse(s, o);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(s, o);
          default:
            return this.client.logger.info(`Unsupported response method ${c}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (t) => {
        const { topic: s } = t,
          { message: o } = ae(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(o);
      }),
      (this.onSessionProposeRequest = async (t, s) => {
        const { params: o, id: c } = s;
        try {
          this.isValidConnect(cr({}, s.params));
          const l = o.expiryTimestamp || Or(wi.wc_sessionPropose.req.ttl),
            f = cr({ id: c, pairingTopic: t, expiryTimestamp: l }, o);
          await this.setProposal(c, f);
          const g = Un(JSON.stringify(s)),
            p = await this.getVerifyContext(g, f.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: c,
            params: f,
            verifyContext: p,
          });
        } catch (l) {
          await this.sendError(c, t, l), this.client.logger.error(l);
        }
      }),
      (this.onSessionProposeResponse = async (t, s) => {
        const { id: o } = s;
        if (Ei(s)) {
          const { result: c } = s;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: c,
          });
          const l = this.client.proposal.get(o);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: l,
          });
          const f = l.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: f,
          });
          const g = c.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: g,
          });
          const p = await this.client.core.crypto.generateSharedKey(f, g);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: p,
          });
          const v = await this.client.core.relayer.subscribe(p);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: v,
          }),
            await this.client.core.pairing.activate({ topic: t });
        } else
          Wr(s) &&
            (await this.client.proposal.delete(o, mt("USER_DISCONNECTED")),
            this.events.emit($t("session_connect"), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          this.isValidSessionSettleRequest(c);
          const {
              relay: l,
              controller: f,
              expiry: g,
              namespaces: p,
              sessionProperties: v,
              pairingTopic: D,
            } = s.params,
            E = cr(
              {
                topic: t,
                relay: l,
                expiry: g,
                namespaces: p,
                acknowledged: !0,
                pairingTopic: D,
                requiredNamespaces: {},
                optionalNamespaces: {},
                controller: f.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: f.publicKey, metadata: f.metadata },
              },
              v && { sessionProperties: v }
            );
          await this.sendResult({ id: s.id, topic: t, result: !0 }),
            this.events.emit($t("session_connect"), { session: E }),
            this.cleanupDuplicatePairings(E);
        } catch (l) {
          await this.sendError(o, t, l), this.client.logger.error(l);
        }
      }),
      (this.onSessionSettleResponse = async (t, s) => {
        const { id: o } = s;
        Ei(s)
          ? (await this.client.session.update(t, { acknowledged: !0 }),
            this.events.emit($t("session_approve", o), {}))
          : Wr(s) &&
            (await this.client.session.delete(t, mt("USER_DISCONNECTED")),
            this.events.emit($t("session_approve", o), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (t, s) => {
        const { params: o, id: c } = s;
        try {
          const l = `${t}_session_update`,
            f = zo.get(l);
          if (f && this.isRequestOutOfSync(f, c)) {
            this.client.logger.info(`Discarding out of sync request - ${c}`);
            return;
          }
          this.isValidUpdate(cr({ topic: t }, o)),
            await this.client.session.update(t, { namespaces: o.namespaces }),
            await this.sendResult({ id: c, topic: t, result: !0 }),
            this.client.events.emit("session_update", {
              id: c,
              topic: t,
              params: o,
            }),
            zo.set(l, c);
        } catch (l) {
          await this.sendError(c, t, l), this.client.logger.error(l);
        }
      }),
      (this.isRequestOutOfSync = (t, s) =>
        parseInt(s.toString().slice(0, -3)) <=
        parseInt(t.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (t, s) => {
        const { id: o } = s;
        Ei(s)
          ? this.events.emit($t("session_update", o), {})
          : Wr(s) &&
            this.events.emit($t("session_update", o), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidExtend({ topic: t }),
            await this.setExpiry(t, Or(Ko)),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_extend", { id: o, topic: t });
        } catch (c) {
          await this.sendError(o, t, c), this.client.logger.error(c);
        }
      }),
      (this.onSessionExtendResponse = (t, s) => {
        const { id: o } = s;
        Ei(s)
          ? this.events.emit($t("session_extend", o), {})
          : Wr(s) &&
            this.events.emit($t("session_extend", o), { error: s.error });
      }),
      (this.onSessionPingRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidPing({ topic: t }),
            await this.sendResult({ id: o, topic: t, result: !0 }),
            this.client.events.emit("session_ping", { id: o, topic: t });
        } catch (c) {
          await this.sendError(o, t, c), this.client.logger.error(c);
        }
      }),
      (this.onSessionPingResponse = (t, s) => {
        const { id: o } = s;
        setTimeout(() => {
          Ei(s)
            ? this.events.emit($t("session_ping", o), {})
            : Wr(s) &&
              this.events.emit($t("session_ping", o), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (t, s) => {
        const { id: o } = s;
        try {
          this.isValidDisconnect({ topic: t, reason: s.params }),
            await Promise.all([
              new Promise((c) => {
                this.client.core.relayer.once(er.publish, async () => {
                  c(await this.deleteSession({ topic: t, id: o }));
                });
              }),
              this.sendResult({ id: o, topic: t, result: !0 }),
              this.cleanupPendingSentRequestsForTopic({
                topic: t,
                error: mt("USER_DISCONNECTED"),
              }),
            ]);
        } catch (c) {
          this.client.logger.error(c);
        }
      }),
      (this.onSessionRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          this.isValidRequest(cr({ topic: t }, c));
          const l = Un(JSON.stringify(jn("wc_sessionRequest", c, o))),
            f = this.client.session.get(t),
            g = await this.getVerifyContext(l, f.peer.metadata),
            p = { id: o, topic: t, params: c, verifyContext: g };
          await this.setPendingSessionRequest(p),
            this.addSessionRequestToSessionRequestQueue(p),
            this.processSessionRequestQueue();
        } catch (l) {
          await this.sendError(o, t, l), this.client.logger.error(l);
        }
      }),
      (this.onSessionRequestResponse = (t, s) => {
        const { id: o } = s;
        Ei(s)
          ? this.events.emit($t("session_request", o), { result: s.result })
          : Wr(s) &&
            this.events.emit($t("session_request", o), { error: s.error });
      }),
      (this.onSessionEventRequest = async (t, s) => {
        const { id: o, params: c } = s;
        try {
          const l = `${t}_session_event_${c.event.name}`,
            f = zo.get(l);
          if (f && this.isRequestOutOfSync(f, o)) {
            this.client.logger.info(`Discarding out of sync request - ${o}`);
            return;
          }
          this.isValidEmit(cr({ topic: t }, c)),
            this.client.events.emit("session_event", {
              id: o,
              topic: t,
              params: c,
            }),
            zo.set(l, o);
        } catch (l) {
          await this.sendError(o, t, l), this.client.logger.error(l);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (t) => {
        this.sessionRequestQueue.queue.push(t);
      }),
      (this.cleanupAfterResponse = (t) => {
        this.deletePendingSessionRequest(t.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = bi.idle),
              this.processSessionRequestQueue();
          }, ve.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: s }) => {
        const o = this.client.core.history.pending;
        o.length > 0 &&
          o
            .filter(
              (c) => c.topic === t && c.request.method === "wc_sessionRequest"
            )
            .forEach((c) => {
              this.events.emit($t("session_request", c.request.id), {
                error: s,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === bi.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const t = this.sessionRequestQueue.queue[0];
        if (!t) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = bi.active),
            this.client.events.emit("session_request", t);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (t) => {
        if (t.active) return;
        const s = this.client.proposal
          .getAll()
          .find((o) => o.pairingTopic === t.topic);
        s &&
          this.onSessionProposeRequest(
            t.topic,
            jn(
              "wc_sessionPropose",
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id
            )
          );
      }),
      (this.isValidConnect = async (t) => {
        if (!mr(t)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(t)}`
          );
          throw new Error(g);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: o,
          optionalNamespaces: c,
          sessionProperties: l,
          relays: f,
        } = t;
        if ((ur(s) || (await this.isValidPairingTopic(s)), !N3(f, !0))) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `connect() relays: ${f}`
          );
          throw new Error(g);
        }
        !ur(o) &&
          Is(o) !== 0 &&
          this.validateNamespaces(o, "requiredNamespaces"),
          !ur(c) &&
            Is(c) !== 0 &&
            this.validateNamespaces(c, "optionalNamespaces"),
          ur(l) || this.validateSessionProps(l, "sessionProperties");
      }),
      (this.validateNamespaces = (t, s) => {
        const o = R3(t, "connect()", s);
        if (o) throw new Error(o.message);
      }),
      (this.isValidApprove = async (t) => {
        if (!mr(t))
          throw new Error(
            ae("MISSING_OR_INVALID", `approve() params: ${t}`).message
          );
        const {
          id: s,
          namespaces: o,
          relayProtocol: c,
          sessionProperties: l,
        } = t;
        await this.isValidProposalId(s);
        const f = this.client.proposal.get(s),
          g = Vc(o, "approve()");
        if (g) throw new Error(g.message);
        const p = Mf(f.requiredNamespaces, o, "approve()");
        if (p) throw new Error(p.message);
        if (!Gt(c, !0)) {
          const { message: v } = ae(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${c}`
          );
          throw new Error(v);
        }
        ur(l) || this.validateSessionProps(l, "sessionProperties");
      }),
      (this.isValidReject = async (t) => {
        if (!mr(t)) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `reject() params: ${t}`
          );
          throw new Error(c);
        }
        const { id: s, reason: o } = t;
        if ((await this.isValidProposalId(s), !F3(o))) {
          const { message: c } = ae(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(o)}`
          );
          throw new Error(c);
        }
      }),
      (this.isValidSessionSettleRequest = (t) => {
        if (!mr(t)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${t}`
          );
          throw new Error(p);
        }
        const { relay: s, controller: o, namespaces: c, expiry: l } = t;
        if (!Ep(s)) {
          const { message: p } = ae(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(p);
        }
        const f = x3(o, "onSessionSettleRequest()");
        if (f) throw new Error(f.message);
        const g = Vc(c, "onSessionSettleRequest()");
        if (g) throw new Error(g.message);
        if (Li(l)) {
          const { message: p } = ae("EXPIRED", "onSessionSettleRequest()");
          throw new Error(p);
        }
      }),
      (this.isValidUpdate = async (t) => {
        if (!mr(t)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `update() params: ${t}`
          );
          throw new Error(g);
        }
        const { topic: s, namespaces: o } = t;
        await this.isValidSessionTopic(s);
        const c = this.client.session.get(s),
          l = Vc(o, "update()");
        if (l) throw new Error(l.message);
        const f = Mf(c.requiredNamespaces, o, "update()");
        if (f) throw new Error(f.message);
      }),
      (this.isValidExtend = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `extend() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (t) => {
        if (!mr(t)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `request() params: ${t}`
          );
          throw new Error(g);
        }
        const { topic: s, request: o, chainId: c, expiry: l } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!jf(f, c)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `request() chainId: ${c}`
          );
          throw new Error(g);
        }
        if (!L3(o)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(o)}`
          );
          throw new Error(g);
        }
        if (!M3(f, c, o.method)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `request() method: ${o.method}`
          );
          throw new Error(g);
        }
        if (l && !H3(l, nu)) {
          const { message: g } = ae(
            "MISSING_OR_INVALID",
            `request() expiry: ${l}. Expiry must be a number (in seconds) between ${nu.min} and ${nu.max}`
          );
          throw new Error(g);
        }
      }),
      (this.isValidRespond = async (t) => {
        var s;
        if (!mr(t)) {
          const { message: l } = ae(
            "MISSING_OR_INVALID",
            `respond() params: ${t}`
          );
          throw new Error(l);
        }
        const { topic: o, response: c } = t;
        try {
          await this.isValidSessionTopic(o);
        } catch (l) {
          throw (
            ((s = t == null ? void 0 : t.response) != null &&
              s.id &&
              this.cleanupAfterResponse(t),
            l)
          );
        }
        if (!U3(c)) {
          const { message: l } = ae(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(c)}`
          );
          throw new Error(l);
        }
      }),
      (this.isValidPing = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `ping() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (t) => {
        if (!mr(t)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `emit() params: ${t}`
          );
          throw new Error(f);
        }
        const { topic: s, event: o, chainId: c } = t;
        await this.isValidSessionTopic(s);
        const { namespaces: l } = this.client.session.get(s);
        if (!jf(l, c)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `emit() chainId: ${c}`
          );
          throw new Error(f);
        }
        if (!j3(o)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(f);
        }
        if (!q3(l, c, o.name)) {
          const { message: f } = ae(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(o)}`
          );
          throw new Error(f);
        }
      }),
      (this.isValidDisconnect = async (t) => {
        if (!mr(t)) {
          const { message: o } = ae(
            "MISSING_OR_INVALID",
            `disconnect() params: ${t}`
          );
          throw new Error(o);
        }
        const { topic: s } = t;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (t, s) => {
        const o = {
          verified: {
            verifyUrl: s.verifyUrl || Ln,
            validation: "UNKNOWN",
            origin: s.url || "",
          },
        };
        try {
          const c = await this.client.core.verify.resolve({
            attestationId: t,
            verifyUrl: s.verifyUrl,
          });
          c &&
            ((o.verified.origin = c.origin),
            (o.verified.isScam = c.isScam),
            (o.verified.validation =
              c.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
        } catch (c) {
          this.client.logger.info(c);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        );
      }),
      (this.validateSessionProps = (t, s) => {
        Object.values(t).forEach((o) => {
          if (!Gt(o, !1)) {
            const { message: c } = ae(
              "MISSING_OR_INVALID",
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(
                o
              )}`
            );
            throw new Error(c);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ae("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(er.message, async (e) => {
      const { topic: t, message: s } = e;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(s)
        )
      )
        return;
      const o = await this.client.core.crypto.decode(t, s);
      try {
        th(o)
          ? (this.client.core.history.set(t, o),
            this.onRelayEventRequest({ topic: t, payload: o }))
          : da(o)
          ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({ topic: t, payload: o }),
            this.client.core.history.delete(t, o.id))
          : this.onRelayEventUnknownPayload({ topic: t, payload: o });
      } catch (c) {
        this.client.logger.error(c);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Mr.expired, async (e) => {
      const { topic: t, id: s } = wp(e.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, ae("EXPIRED"), !0);
      t
        ? this.client.session.keys.includes(t) &&
          (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
          this.client.events.emit("session_expire", { topic: t }))
        : s &&
          (await this.deleteProposal(s, !0),
          this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ms.create, (e) =>
      this.onPairingCreated(e)
    );
  }
  isValidPairingTopic(e) {
    if (!Gt(e, !1)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (Li(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = ae("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Gt(e, !1)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (Li(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = ae("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session topic does not exist in keychain: ${e}`
      );
      throw (await this.deleteSession({ topic: e }), new Error(t));
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Gt(e, !1)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    } else {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!$3(e)) {
      const { message: t } = ae(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = ae(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (Li(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = ae("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class C5 extends ga {
  constructor(e, t) {
    super(e, t, _5, nh), (this.core = e), (this.logger = t);
  }
}
let A5 = class extends ga {
  constructor(e, t) {
    super(e, t, m5, nh), (this.core = e), (this.logger = t);
  }
};
class T5 extends ga {
  constructor(e, t) {
    super(e, t, b5, nh, (s) => s.id), (this.core = e), (this.logger = t);
  }
}
let R5 = class og extends ND {
  constructor(e) {
    super(e),
      (this.protocol = rg),
      (this.version = ig),
      (this.name = iu.name),
      (this.events = new qr.EventEmitter()),
      (this.on = (s, o) => this.events.on(s, o)),
      (this.once = (s, o) => this.events.once(s, o)),
      (this.off = (s, o) => this.events.off(s, o)),
      (this.removeListener = (s, o) => this.events.removeListener(s, o)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (o) {
          throw (this.logger.error(o.message), o);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (e == null ? void 0 : e.name) || iu.name),
      (this.metadata = (e == null ? void 0 : e.metadata) || YE());
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : Je.pino(
            Je.getDefaultLoggerOptions({
              level: (e == null ? void 0 : e.logger) || iu.logger,
            })
          );
    (this.core = (e == null ? void 0 : e.core) || new v5(e)),
      (this.logger = Je.generateChildLogger(t, this.name)),
      (this.session = new A5(this.core, this.logger)),
      (this.proposal = new C5(this.core, this.logger)),
      (this.pendingRequest = new T5(this.core, this.logger)),
      (this.engine = new P5(this));
  }
  static async init(e) {
    const t = new og(e);
    return await t.initialize(), t;
  }
  get context() {
    return Je.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(e.message),
        e)
      );
    }
  }
};
const N5 = { Accept: "application/json", "Content-Type": "application/json" },
  $5 = "POST",
  Rd = { headers: N5, method: $5 },
  Nd = 10;
class qi {
  constructor(e, t = !1) {
    if (
      ((this.url = e),
      (this.disableProviderPing = t),
      (this.events = new qr.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !od(e))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    (this.url = e), (this.disableProviderPing = t);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e, t) {
    this.isAvailable || (await this.register());
    try {
      const s = an(e),
        c = await (
          await af(this.url, Object.assign(Object.assign({}, Rd), { body: s }))
        ).json();
      this.onPayload({ data: c });
    } catch (s) {
      this.onError(e.id, s);
    }
  }
  async register(e = this.url) {
    if (!od(e))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((s, o) => {
          this.events.once("register_error", (c) => {
            this.resetMaxListeners(), o(c);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return o(new Error("HTTP connection is missing or invalid"));
              s();
            });
        })
      );
    }
    (this.url = e), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const t = an({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await af(e, Object.assign(Object.assign({}, Rd), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const s = this.parseError(t);
      throw (this.events.emit("register_error", s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? $s(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const s = this.parseError(t),
      o = s.message || s.toString(),
      c = fa(e, o);
    this.events.emit("payload", c);
  }
  parseError(e, t = this.url) {
    return Lp(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Nd && this.events.setMaxListeners(Nd);
  }
}
const $d = "error",
  F5 = "wss://relay.walletconnect.com",
  L5 = "wc",
  U5 = "universal_provider",
  Fd = `${L5}@2:${U5}:`,
  j5 = "https://rpc.walletconnect.com/v1/",
  Si = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var vs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Lu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (i, e) {
  (function () {
    var t,
      s = "4.17.21",
      o = 200,
      c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      l = "Expected a function",
      f = "Invalid `variable` option passed into `_.template`",
      g = "__lodash_hash_undefined__",
      p = 500,
      v = "__lodash_placeholder__",
      D = 1,
      E = 2,
      I = 4,
      C = 1,
      q = 2,
      K = 1,
      ee = 2,
      R = 4,
      U = 8,
      O = 16,
      P = 32,
      b = 64,
      u = 128,
      w = 256,
      k = 512,
      G = 30,
      oe = "...",
      ue = 800,
      ge = 16,
      $ = 1,
      B = 2,
      le = 3,
      re = 1 / 0,
      W = 9007199254740991,
      te = 17976931348623157e292,
      Y = 0 / 0,
      ie = 4294967295,
      xe = ie - 1,
      ne = ie >>> 1,
      we = [
        ["ary", u],
        ["bind", K],
        ["bindKey", ee],
        ["curry", U],
        ["curryRight", O],
        ["flip", k],
        ["partial", P],
        ["partialRight", b],
        ["rearg", w],
      ],
      he = "[object Arguments]",
      _e = "[object Array]",
      z = "[object AsyncFunction]",
      M = "[object Boolean]",
      N = "[object Date]",
      d = "[object DOMException]",
      A = "[object Error]",
      se = "[object Function]",
      fe = "[object GeneratorFunction]",
      Se = "[object Map]",
      Be = "[object Number]",
      ke = "[object Null]",
      Ue = "[object Object]",
      pt = "[object Promise]",
      gt = "[object Proxy]",
      Me = "[object RegExp]",
      Ie = "[object Set]",
      Ne = "[object String]",
      $e = "[object Symbol]",
      qe = "[object Undefined]",
      Pe = "[object WeakMap]",
      Fe = "[object WeakSet]",
      De = "[object ArrayBuffer]",
      Ce = "[object DataView]",
      He = "[object Float32Array]",
      Oe = "[object Float64Array]",
      Ve = "[object Int8Array]",
      We = "[object Int16Array]",
      et = "[object Int32Array]",
      tt = "[object Uint8Array]",
      Qe = "[object Uint8ClampedArray]",
      tr = "[object Uint16Array]",
      fr = "[object Uint32Array]",
      Yr = /\b__p \+= '';/g,
      rr = /\b(__p \+=) '' \+/g,
      si = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Ii = /&(?:amp|lt|gt|quot|#39);/g,
      zi = /[&<>"']/g,
      Dt = RegExp(Ii.source),
      yt = RegExp(zi.source),
      St = /<%-([\s\S]+?)%>/g,
      It = /<%([\s\S]+?)%>/g,
      bt = /<%=([\s\S]+?)%>/g,
      vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ft = /^\w*$/,
      Lt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xt = /[\\^$.*+?()[\]{}|]/g,
      Ut = RegExp(xt.source),
      Ot = /^\s+/,
      At = /\s/,
      Pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ht = /\{\n\/\* \[wrapped with (.+)\] \*/,
      jt = /,? & /,
      Mt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      ya = /[()=,{}\[\]\/\s]/,
      va = /\\(\\)?/g,
      _a = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Ar = /\w*$/,
      ma = /^[-+]0x[0-9a-f]+$/i,
      wa = /^0b[01]+$/i,
      ba = /^\[object .+?Constructor\]$/,
      Ea = /^0o[0-7]+$/i,
      Da = /^(?:0|[1-9]\d*)$/,
      oi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      dn = /($^)/,
      Sa = /['\n\r\u2028\u2029\\]/g,
      pn = "\\ud800-\\udfff",
      Ia = "\\u0300-\\u036f",
      xa = "\\ufe20-\\ufe2f",
      gn = "\\u20d0-\\u20ff",
      Ls = Ia + xa + gn,
      Us = "\\u2700-\\u27bf",
      zr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Oa = "\\xac\\xb1\\xd7\\xf7",
      Pa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Ca = "\\u2000-\\u206f",
      Aa =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      js = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Ms = "\\ufe0e\\ufe0f",
      Bi = Oa + Pa + Ca + Aa,
      Vn = "['’]",
      Hi = "[" + pn + "]",
      Gn = "[" + Bi + "]",
      Ki = "[" + Ls + "]",
      qs = "\\d+",
      Ta = "[" + Us + "]",
      zs = "[" + zr + "]",
      Bs = "[^" + pn + Bi + qs + Us + zr + js + "]",
      yn = "\\ud83c[\\udffb-\\udfff]",
      Ra = "(?:" + Ki + "|" + yn + ")",
      Hs = "[^" + pn + "]",
      vn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      xi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      br = "[" + js + "]",
      Ks = "\\u200d",
      ks = "(?:" + zs + "|" + Bs + ")",
      Jr = "(?:" + br + "|" + Bs + ")",
      Vs = "(?:" + Vn + "(?:d|ll|m|re|s|t|ve))?",
      Gs = "(?:" + Vn + "(?:D|LL|M|RE|S|T|VE))?",
      Ws = Ra + "?",
      Ys = "[" + Ms + "]?",
      Na = "(?:" + Ks + "(?:" + [Hs, vn, xi].join("|") + ")" + Ys + Ws + ")*",
      ai = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Js = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Qs = Ys + Ws + Na,
      _n = "(?:" + [Ta, vn, xi].join("|") + ")" + Qs,
      $a = "(?:" + [Hs + Ki + "?", Ki, vn, xi, Hi].join("|") + ")",
      Wn = RegExp(Vn, "g"),
      Fa = RegExp(Ki, "g"),
      mn = RegExp(yn + "(?=" + yn + ")|" + $a + Qs, "g"),
      Xs = RegExp(
        [
          br + "?" + zs + "+" + Vs + "(?=" + [Gn, br, "$"].join("|") + ")",
          Jr + "+" + Gs + "(?=" + [Gn, br + ks, "$"].join("|") + ")",
          br + "?" + ks + "+" + Vs,
          br + "+" + Gs,
          Js,
          ai,
          qs,
          _n,
        ].join("|"),
        "g"
      ),
      Zs = RegExp("[" + Ks + pn + Ls + Ms + "]"),
      ki = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      eo = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      La = -1,
      ot = {};
    (ot[He] =
      ot[Oe] =
      ot[Ve] =
      ot[We] =
      ot[et] =
      ot[tt] =
      ot[Qe] =
      ot[tr] =
      ot[fr] =
        !0),
      (ot[he] =
        ot[_e] =
        ot[De] =
        ot[M] =
        ot[Ce] =
        ot[N] =
        ot[A] =
        ot[se] =
        ot[Se] =
        ot[Be] =
        ot[Ue] =
        ot[Me] =
        ot[Ie] =
        ot[Ne] =
        ot[Pe] =
          !1);
    var st = {};
    (st[he] =
      st[_e] =
      st[De] =
      st[Ce] =
      st[M] =
      st[N] =
      st[He] =
      st[Oe] =
      st[Ve] =
      st[We] =
      st[et] =
      st[Se] =
      st[Be] =
      st[Ue] =
      st[Me] =
      st[Ie] =
      st[Ne] =
      st[$e] =
      st[tt] =
      st[Qe] =
      st[tr] =
      st[fr] =
        !0),
      (st[A] = st[se] = st[Pe] = !1);
    var S = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      F = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      X = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      de = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      at = parseFloat,
      Te = parseInt,
      ft = typeof vs == "object" && vs && vs.Object === Object && vs,
      qt = typeof self == "object" && self && self.Object === Object && self,
      Xe = ft || qt || Function("return this")(),
      ct = e && !e.nodeType && e,
      Tt = ct && !0 && i && !i.nodeType && i,
      dr = Tt && Tt.exports === ct,
      zt = dr && ft.process,
      dt = (function () {
        try {
          var L = Tt && Tt.require && Tt.require("util").types;
          return L || (zt && zt.binding && zt.binding("util"));
        } catch {}
      })(),
      ir = dt && dt.isArrayBuffer,
      Br = dt && dt.isDate,
      Tr = dt && dt.isMap,
      Qr = dt && dt.isRegExp,
      Yn = dt && dt.isSet,
      Vi = dt && dt.isTypedArray;
    function Kt(L, V, H) {
      switch (H.length) {
        case 0:
          return L.call(V);
        case 1:
          return L.call(V, H[0]);
        case 2:
          return L.call(V, H[0], H[1]);
        case 3:
          return L.call(V, H[0], H[1], H[2]);
      }
      return L.apply(V, H);
    }
    function ug(L, V, H, pe) {
      for (var Ae = -1, rt = L == null ? 0 : L.length; ++Ae < rt; ) {
        var Bt = L[Ae];
        V(pe, Bt, H(Bt), L);
      }
      return pe;
    }
    function Rr(L, V) {
      for (
        var H = -1, pe = L == null ? 0 : L.length;
        ++H < pe && V(L[H], H, L) !== !1;

      );
      return L;
    }
    function hg(L, V) {
      for (var H = L == null ? 0 : L.length; H-- && V(L[H], H, L) !== !1; );
      return L;
    }
    function ah(L, V) {
      for (var H = -1, pe = L == null ? 0 : L.length; ++H < pe; )
        if (!V(L[H], H, L)) return !1;
      return !0;
    }
    function Oi(L, V) {
      for (
        var H = -1, pe = L == null ? 0 : L.length, Ae = 0, rt = [];
        ++H < pe;

      ) {
        var Bt = L[H];
        V(Bt, H, L) && (rt[Ae++] = Bt);
      }
      return rt;
    }
    function to(L, V) {
      var H = L == null ? 0 : L.length;
      return !!H && wn(L, V, 0) > -1;
    }
    function Ua(L, V, H) {
      for (var pe = -1, Ae = L == null ? 0 : L.length; ++pe < Ae; )
        if (H(V, L[pe])) return !0;
      return !1;
    }
    function _t(L, V) {
      for (
        var H = -1, pe = L == null ? 0 : L.length, Ae = Array(pe);
        ++H < pe;

      )
        Ae[H] = V(L[H], H, L);
      return Ae;
    }
    function Pi(L, V) {
      for (var H = -1, pe = V.length, Ae = L.length; ++H < pe; )
        L[Ae + H] = V[H];
      return L;
    }
    function ja(L, V, H, pe) {
      var Ae = -1,
        rt = L == null ? 0 : L.length;
      for (pe && rt && (H = L[++Ae]); ++Ae < rt; ) H = V(H, L[Ae], Ae, L);
      return H;
    }
    function lg(L, V, H, pe) {
      var Ae = L == null ? 0 : L.length;
      for (pe && Ae && (H = L[--Ae]); Ae--; ) H = V(H, L[Ae], Ae, L);
      return H;
    }
    function Ma(L, V) {
      for (var H = -1, pe = L == null ? 0 : L.length; ++H < pe; )
        if (V(L[H], H, L)) return !0;
      return !1;
    }
    var fg = qa("length");
    function dg(L) {
      return L.split("");
    }
    function pg(L) {
      return L.match(Mt) || [];
    }
    function ch(L, V, H) {
      var pe;
      return (
        H(L, function (Ae, rt, Bt) {
          if (V(Ae, rt, Bt)) return (pe = rt), !1;
        }),
        pe
      );
    }
    function ro(L, V, H, pe) {
      for (var Ae = L.length, rt = H + (pe ? 1 : -1); pe ? rt-- : ++rt < Ae; )
        if (V(L[rt], rt, L)) return rt;
      return -1;
    }
    function wn(L, V, H) {
      return V === V ? xg(L, V, H) : ro(L, uh, H);
    }
    function gg(L, V, H, pe) {
      for (var Ae = H - 1, rt = L.length; ++Ae < rt; )
        if (pe(L[Ae], V)) return Ae;
      return -1;
    }
    function uh(L) {
      return L !== L;
    }
    function hh(L, V) {
      var H = L == null ? 0 : L.length;
      return H ? Ba(L, V) / H : Y;
    }
    function qa(L) {
      return function (V) {
        return V == null ? t : V[L];
      };
    }
    function za(L) {
      return function (V) {
        return L == null ? t : L[V];
      };
    }
    function lh(L, V, H, pe, Ae) {
      return (
        Ae(L, function (rt, Bt, ut) {
          H = pe ? ((pe = !1), rt) : V(H, rt, Bt, ut);
        }),
        H
      );
    }
    function yg(L, V) {
      var H = L.length;
      for (L.sort(V); H--; ) L[H] = L[H].value;
      return L;
    }
    function Ba(L, V) {
      for (var H, pe = -1, Ae = L.length; ++pe < Ae; ) {
        var rt = V(L[pe]);
        rt !== t && (H = H === t ? rt : H + rt);
      }
      return H;
    }
    function Ha(L, V) {
      for (var H = -1, pe = Array(L); ++H < L; ) pe[H] = V(H);
      return pe;
    }
    function vg(L, V) {
      return _t(V, function (H) {
        return [H, L[H]];
      });
    }
    function fh(L) {
      return L && L.slice(0, yh(L) + 1).replace(Ot, "");
    }
    function Er(L) {
      return function (V) {
        return L(V);
      };
    }
    function Ka(L, V) {
      return _t(V, function (H) {
        return L[H];
      });
    }
    function Jn(L, V) {
      return L.has(V);
    }
    function dh(L, V) {
      for (var H = -1, pe = L.length; ++H < pe && wn(V, L[H], 0) > -1; );
      return H;
    }
    function ph(L, V) {
      for (var H = L.length; H-- && wn(V, L[H], 0) > -1; );
      return H;
    }
    function _g(L, V) {
      for (var H = L.length, pe = 0; H--; ) L[H] === V && ++pe;
      return pe;
    }
    var mg = za(S),
      wg = za(F);
    function bg(L) {
      return "\\" + de[L];
    }
    function Eg(L, V) {
      return L == null ? t : L[V];
    }
    function bn(L) {
      return Zs.test(L);
    }
    function Dg(L) {
      return ki.test(L);
    }
    function Sg(L) {
      for (var V, H = []; !(V = L.next()).done; ) H.push(V.value);
      return H;
    }
    function ka(L) {
      var V = -1,
        H = Array(L.size);
      return (
        L.forEach(function (pe, Ae) {
          H[++V] = [Ae, pe];
        }),
        H
      );
    }
    function gh(L, V) {
      return function (H) {
        return L(V(H));
      };
    }
    function Ci(L, V) {
      for (var H = -1, pe = L.length, Ae = 0, rt = []; ++H < pe; ) {
        var Bt = L[H];
        (Bt === V || Bt === v) && ((L[H] = v), (rt[Ae++] = H));
      }
      return rt;
    }
    function io(L) {
      var V = -1,
        H = Array(L.size);
      return (
        L.forEach(function (pe) {
          H[++V] = pe;
        }),
        H
      );
    }
    function Ig(L) {
      var V = -1,
        H = Array(L.size);
      return (
        L.forEach(function (pe) {
          H[++V] = [pe, pe];
        }),
        H
      );
    }
    function xg(L, V, H) {
      for (var pe = H - 1, Ae = L.length; ++pe < Ae; )
        if (L[pe] === V) return pe;
      return -1;
    }
    function Og(L, V, H) {
      for (var pe = H + 1; pe--; ) if (L[pe] === V) return pe;
      return pe;
    }
    function En(L) {
      return bn(L) ? Cg(L) : fg(L);
    }
    function Hr(L) {
      return bn(L) ? Ag(L) : dg(L);
    }
    function yh(L) {
      for (var V = L.length; V-- && At.test(L.charAt(V)); );
      return V;
    }
    var Pg = za(X);
    function Cg(L) {
      for (var V = (mn.lastIndex = 0); mn.test(L); ) ++V;
      return V;
    }
    function Ag(L) {
      return L.match(mn) || [];
    }
    function Tg(L) {
      return L.match(Xs) || [];
    }
    var Rg = function L(V) {
        V = V == null ? Xe : Dn.defaults(Xe.Object(), V, Dn.pick(Xe, eo));
        var H = V.Array,
          pe = V.Date,
          Ae = V.Error,
          rt = V.Function,
          Bt = V.Math,
          ut = V.Object,
          Va = V.RegExp,
          Ng = V.String,
          Nr = V.TypeError,
          no = H.prototype,
          $g = rt.prototype,
          Sn = ut.prototype,
          so = V["__core-js_shared__"],
          oo = $g.toString,
          nt = Sn.hasOwnProperty,
          Fg = 0,
          vh = (function () {
            var r = /[^.]+$/.exec((so && so.keys && so.keys.IE_PROTO) || "");
            return r ? "Symbol(src)_1." + r : "";
          })(),
          ao = Sn.toString,
          Lg = oo.call(ut),
          Ug = Xe._,
          jg = Va(
            "^" +
              oo
                .call(nt)
                .replace(xt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          co = dr ? V.Buffer : t,
          Ai = V.Symbol,
          uo = V.Uint8Array,
          _h = co ? co.allocUnsafe : t,
          ho = gh(ut.getPrototypeOf, ut),
          mh = ut.create,
          wh = Sn.propertyIsEnumerable,
          lo = no.splice,
          bh = Ai ? Ai.isConcatSpreadable : t,
          Qn = Ai ? Ai.iterator : t,
          Gi = Ai ? Ai.toStringTag : t,
          fo = (function () {
            try {
              var r = Xi(ut, "defineProperty");
              return r({}, "", {}), r;
            } catch {}
          })(),
          Mg = V.clearTimeout !== Xe.clearTimeout && V.clearTimeout,
          qg = pe && pe.now !== Xe.Date.now && pe.now,
          zg = V.setTimeout !== Xe.setTimeout && V.setTimeout,
          po = Bt.ceil,
          go = Bt.floor,
          Ga = ut.getOwnPropertySymbols,
          Bg = co ? co.isBuffer : t,
          Eh = V.isFinite,
          Hg = no.join,
          Kg = gh(ut.keys, ut),
          Ht = Bt.max,
          Qt = Bt.min,
          kg = pe.now,
          Vg = V.parseInt,
          Dh = Bt.random,
          Gg = no.reverse,
          Wa = Xi(V, "DataView"),
          Xn = Xi(V, "Map"),
          Ya = Xi(V, "Promise"),
          In = Xi(V, "Set"),
          Zn = Xi(V, "WeakMap"),
          es = Xi(ut, "create"),
          yo = Zn && new Zn(),
          xn = {},
          Wg = Zi(Wa),
          Yg = Zi(Xn),
          Jg = Zi(Ya),
          Qg = Zi(In),
          Xg = Zi(Zn),
          vo = Ai ? Ai.prototype : t,
          ts = vo ? vo.valueOf : t,
          Sh = vo ? vo.toString : t;
        function _(r) {
          if (Ct(r) && !Re(r) && !(r instanceof Ye)) {
            if (r instanceof $r) return r;
            if (nt.call(r, "__wrapped__")) return Il(r);
          }
          return new $r(r);
        }
        var On = (function () {
          function r() {}
          return function (n) {
            if (!Et(n)) return {};
            if (mh) return mh(n);
            r.prototype = n;
            var a = new r();
            return (r.prototype = t), a;
          };
        })();
        function _o() {}
        function $r(r, n) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__chain__ = !!n),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (_.templateSettings = {
          escape: St,
          evaluate: It,
          interpolate: bt,
          variable: "",
          imports: { _ },
        }),
          (_.prototype = _o.prototype),
          (_.prototype.constructor = _),
          ($r.prototype = On(_o.prototype)),
          ($r.prototype.constructor = $r);
        function Ye(r) {
          (this.__wrapped__ = r),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = ie),
            (this.__views__ = []);
        }
        function Zg() {
          var r = new Ye(this.__wrapped__);
          return (
            (r.__actions__ = pr(this.__actions__)),
            (r.__dir__ = this.__dir__),
            (r.__filtered__ = this.__filtered__),
            (r.__iteratees__ = pr(this.__iteratees__)),
            (r.__takeCount__ = this.__takeCount__),
            (r.__views__ = pr(this.__views__)),
            r
          );
        }
        function e0() {
          if (this.__filtered__) {
            var r = new Ye(this);
            (r.__dir__ = -1), (r.__filtered__ = !0);
          } else (r = this.clone()), (r.__dir__ *= -1);
          return r;
        }
        function t0() {
          var r = this.__wrapped__.value(),
            n = this.__dir__,
            a = Re(r),
            h = n < 0,
            y = a ? r.length : 0,
            m = dy(0, y, this.__views__),
            x = m.start,
            T = m.end,
            j = T - x,
            J = h ? T : x - 1,
            Q = this.__iteratees__,
            Z = Q.length,
            ce = 0,
            ye = Qt(j, this.__takeCount__);
          if (!a || (!h && y == j && ye == j)) return Wh(r, this.__actions__);
          var be = [];
          e: for (; j-- && ce < ye; ) {
            J += n;
            for (var ze = -1, Ee = r[J]; ++ze < Z; ) {
              var Ge = Q[ze],
                Ze = Ge.iteratee,
                Ir = Ge.type,
                or = Ze(Ee);
              if (Ir == B) Ee = or;
              else if (!or) {
                if (Ir == $) continue e;
                break e;
              }
            }
            be[ce++] = Ee;
          }
          return be;
        }
        (Ye.prototype = On(_o.prototype)), (Ye.prototype.constructor = Ye);
        function Wi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var h = r[n];
            this.set(h[0], h[1]);
          }
        }
        function r0() {
          (this.__data__ = es ? es(null) : {}), (this.size = 0);
        }
        function i0(r) {
          var n = this.has(r) && delete this.__data__[r];
          return (this.size -= n ? 1 : 0), n;
        }
        function n0(r) {
          var n = this.__data__;
          if (es) {
            var a = n[r];
            return a === g ? t : a;
          }
          return nt.call(n, r) ? n[r] : t;
        }
        function s0(r) {
          var n = this.__data__;
          return es ? n[r] !== t : nt.call(n, r);
        }
        function o0(r, n) {
          var a = this.__data__;
          return (
            (this.size += this.has(r) ? 0 : 1),
            (a[r] = es && n === t ? g : n),
            this
          );
        }
        (Wi.prototype.clear = r0),
          (Wi.prototype.delete = i0),
          (Wi.prototype.get = n0),
          (Wi.prototype.has = s0),
          (Wi.prototype.set = o0);
        function ci(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var h = r[n];
            this.set(h[0], h[1]);
          }
        }
        function a0() {
          (this.__data__ = []), (this.size = 0);
        }
        function c0(r) {
          var n = this.__data__,
            a = mo(n, r);
          if (a < 0) return !1;
          var h = n.length - 1;
          return a == h ? n.pop() : lo.call(n, a, 1), --this.size, !0;
        }
        function u0(r) {
          var n = this.__data__,
            a = mo(n, r);
          return a < 0 ? t : n[a][1];
        }
        function h0(r) {
          return mo(this.__data__, r) > -1;
        }
        function l0(r, n) {
          var a = this.__data__,
            h = mo(a, r);
          return h < 0 ? (++this.size, a.push([r, n])) : (a[h][1] = n), this;
        }
        (ci.prototype.clear = a0),
          (ci.prototype.delete = c0),
          (ci.prototype.get = u0),
          (ci.prototype.has = h0),
          (ci.prototype.set = l0);
        function ui(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.clear(); ++n < a; ) {
            var h = r[n];
            this.set(h[0], h[1]);
          }
        }
        function f0() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Wi(),
              map: new (Xn || ci)(),
              string: new Wi(),
            });
        }
        function d0(r) {
          var n = To(this, r).delete(r);
          return (this.size -= n ? 1 : 0), n;
        }
        function p0(r) {
          return To(this, r).get(r);
        }
        function g0(r) {
          return To(this, r).has(r);
        }
        function y0(r, n) {
          var a = To(this, r),
            h = a.size;
          return a.set(r, n), (this.size += a.size == h ? 0 : 1), this;
        }
        (ui.prototype.clear = f0),
          (ui.prototype.delete = d0),
          (ui.prototype.get = p0),
          (ui.prototype.has = g0),
          (ui.prototype.set = y0);
        function Yi(r) {
          var n = -1,
            a = r == null ? 0 : r.length;
          for (this.__data__ = new ui(); ++n < a; ) this.add(r[n]);
        }
        function v0(r) {
          return this.__data__.set(r, g), this;
        }
        function _0(r) {
          return this.__data__.has(r);
        }
        (Yi.prototype.add = Yi.prototype.push = v0), (Yi.prototype.has = _0);
        function Kr(r) {
          var n = (this.__data__ = new ci(r));
          this.size = n.size;
        }
        function m0() {
          (this.__data__ = new ci()), (this.size = 0);
        }
        function w0(r) {
          var n = this.__data__,
            a = n.delete(r);
          return (this.size = n.size), a;
        }
        function b0(r) {
          return this.__data__.get(r);
        }
        function E0(r) {
          return this.__data__.has(r);
        }
        function D0(r, n) {
          var a = this.__data__;
          if (a instanceof ci) {
            var h = a.__data__;
            if (!Xn || h.length < o - 1)
              return h.push([r, n]), (this.size = ++a.size), this;
            a = this.__data__ = new ui(h);
          }
          return a.set(r, n), (this.size = a.size), this;
        }
        (Kr.prototype.clear = m0),
          (Kr.prototype.delete = w0),
          (Kr.prototype.get = b0),
          (Kr.prototype.has = E0),
          (Kr.prototype.set = D0);
        function Ih(r, n) {
          var a = Re(r),
            h = !a && en(r),
            y = !a && !h && Fi(r),
            m = !a && !h && !y && Tn(r),
            x = a || h || y || m,
            T = x ? Ha(r.length, Ng) : [],
            j = T.length;
          for (var J in r)
            (n || nt.call(r, J)) &&
              !(
                x &&
                (J == "length" ||
                  (y && (J == "offset" || J == "parent")) ||
                  (m &&
                    (J == "buffer" ||
                      J == "byteLength" ||
                      J == "byteOffset")) ||
                  di(J, j))
              ) &&
              T.push(J);
          return T;
        }
        function xh(r) {
          var n = r.length;
          return n ? r[oc(0, n - 1)] : t;
        }
        function S0(r, n) {
          return Ro(pr(r), Ji(n, 0, r.length));
        }
        function I0(r) {
          return Ro(pr(r));
        }
        function Ja(r, n, a) {
          ((a !== t && !kr(r[n], a)) || (a === t && !(n in r))) && hi(r, n, a);
        }
        function rs(r, n, a) {
          var h = r[n];
          (!(nt.call(r, n) && kr(h, a)) || (a === t && !(n in r))) &&
            hi(r, n, a);
        }
        function mo(r, n) {
          for (var a = r.length; a--; ) if (kr(r[a][0], n)) return a;
          return -1;
        }
        function x0(r, n, a, h) {
          return (
            Ti(r, function (y, m, x) {
              n(h, y, a(y), x);
            }),
            h
          );
        }
        function Oh(r, n) {
          return r && Zr(n, kt(n), r);
        }
        function O0(r, n) {
          return r && Zr(n, yr(n), r);
        }
        function hi(r, n, a) {
          n == "__proto__" && fo
            ? fo(r, n, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (r[n] = a);
        }
        function Qa(r, n) {
          for (var a = -1, h = n.length, y = H(h), m = r == null; ++a < h; )
            y[a] = m ? t : Tc(r, n[a]);
          return y;
        }
        function Ji(r, n, a) {
          return (
            r === r &&
              (a !== t && (r = r <= a ? r : a),
              n !== t && (r = r >= n ? r : n)),
            r
          );
        }
        function Fr(r, n, a, h, y, m) {
          var x,
            T = n & D,
            j = n & E,
            J = n & I;
          if ((a && (x = y ? a(r, h, y, m) : a(r)), x !== t)) return x;
          if (!Et(r)) return r;
          var Q = Re(r);
          if (Q) {
            if (((x = gy(r)), !T)) return pr(r, x);
          } else {
            var Z = Xt(r),
              ce = Z == se || Z == fe;
            if (Fi(r)) return Qh(r, T);
            if (Z == Ue || Z == he || (ce && !y)) {
              if (((x = j || ce ? {} : yl(r)), !T))
                return j ? ny(r, O0(x, r)) : iy(r, Oh(x, r));
            } else {
              if (!st[Z]) return y ? r : {};
              x = yy(r, Z, T);
            }
          }
          m || (m = new Kr());
          var ye = m.get(r);
          if (ye) return ye;
          m.set(r, x),
            kl(r)
              ? r.forEach(function (Ee) {
                  x.add(Fr(Ee, n, a, Ee, r, m));
                })
              : Hl(r) &&
                r.forEach(function (Ee, Ge) {
                  x.set(Ge, Fr(Ee, n, a, Ge, r, m));
                });
          var be = J ? (j ? vc : yc) : j ? yr : kt,
            ze = Q ? t : be(r);
          return (
            Rr(ze || r, function (Ee, Ge) {
              ze && ((Ge = Ee), (Ee = r[Ge])),
                rs(x, Ge, Fr(Ee, n, a, Ge, r, m));
            }),
            x
          );
        }
        function P0(r) {
          var n = kt(r);
          return function (a) {
            return Ph(a, r, n);
          };
        }
        function Ph(r, n, a) {
          var h = a.length;
          if (r == null) return !h;
          for (r = ut(r); h--; ) {
            var y = a[h],
              m = n[y],
              x = r[y];
            if ((x === t && !(y in r)) || !m(x)) return !1;
          }
          return !0;
        }
        function Ch(r, n, a) {
          if (typeof r != "function") throw new Nr(l);
          return us(function () {
            r.apply(t, a);
          }, n);
        }
        function is(r, n, a, h) {
          var y = -1,
            m = to,
            x = !0,
            T = r.length,
            j = [],
            J = n.length;
          if (!T) return j;
          a && (n = _t(n, Er(a))),
            h
              ? ((m = Ua), (x = !1))
              : n.length >= o && ((m = Jn), (x = !1), (n = new Yi(n)));
          e: for (; ++y < T; ) {
            var Q = r[y],
              Z = a == null ? Q : a(Q);
            if (((Q = h || Q !== 0 ? Q : 0), x && Z === Z)) {
              for (var ce = J; ce--; ) if (n[ce] === Z) continue e;
              j.push(Q);
            } else m(n, Z, h) || j.push(Q);
          }
          return j;
        }
        var Ti = rl(Xr),
          Ah = rl(Za, !0);
        function C0(r, n) {
          var a = !0;
          return (
            Ti(r, function (h, y, m) {
              return (a = !!n(h, y, m)), a;
            }),
            a
          );
        }
        function wo(r, n, a) {
          for (var h = -1, y = r.length; ++h < y; ) {
            var m = r[h],
              x = n(m);
            if (x != null && (T === t ? x === x && !Sr(x) : a(x, T)))
              var T = x,
                j = m;
          }
          return j;
        }
        function A0(r, n, a, h) {
          var y = r.length;
          for (
            a = je(a),
              a < 0 && (a = -a > y ? 0 : y + a),
              h = h === t || h > y ? y : je(h),
              h < 0 && (h += y),
              h = a > h ? 0 : Gl(h);
            a < h;

          )
            r[a++] = n;
          return r;
        }
        function Th(r, n) {
          var a = [];
          return (
            Ti(r, function (h, y, m) {
              n(h, y, m) && a.push(h);
            }),
            a
          );
        }
        function Wt(r, n, a, h, y) {
          var m = -1,
            x = r.length;
          for (a || (a = _y), y || (y = []); ++m < x; ) {
            var T = r[m];
            n > 0 && a(T)
              ? n > 1
                ? Wt(T, n - 1, a, h, y)
                : Pi(y, T)
              : h || (y[y.length] = T);
          }
          return y;
        }
        var Xa = il(),
          Rh = il(!0);
        function Xr(r, n) {
          return r && Xa(r, n, kt);
        }
        function Za(r, n) {
          return r && Rh(r, n, kt);
        }
        function bo(r, n) {
          return Oi(n, function (a) {
            return pi(r[a]);
          });
        }
        function Qi(r, n) {
          n = Ni(n, r);
          for (var a = 0, h = n.length; r != null && a < h; ) r = r[ei(n[a++])];
          return a && a == h ? r : t;
        }
        function Nh(r, n, a) {
          var h = n(r);
          return Re(r) ? h : Pi(h, a(r));
        }
        function nr(r) {
          return r == null
            ? r === t
              ? qe
              : ke
            : Gi && Gi in ut(r)
            ? fy(r)
            : Iy(r);
        }
        function ec(r, n) {
          return r > n;
        }
        function T0(r, n) {
          return r != null && nt.call(r, n);
        }
        function R0(r, n) {
          return r != null && n in ut(r);
        }
        function N0(r, n, a) {
          return r >= Qt(n, a) && r < Ht(n, a);
        }
        function tc(r, n, a) {
          for (
            var h = a ? Ua : to,
              y = r[0].length,
              m = r.length,
              x = m,
              T = H(m),
              j = 1 / 0,
              J = [];
            x--;

          ) {
            var Q = r[x];
            x && n && (Q = _t(Q, Er(n))),
              (j = Qt(Q.length, j)),
              (T[x] =
                !a && (n || (y >= 120 && Q.length >= 120))
                  ? new Yi(x && Q)
                  : t);
          }
          Q = r[0];
          var Z = -1,
            ce = T[0];
          e: for (; ++Z < y && J.length < j; ) {
            var ye = Q[Z],
              be = n ? n(ye) : ye;
            if (
              ((ye = a || ye !== 0 ? ye : 0), !(ce ? Jn(ce, be) : h(J, be, a)))
            ) {
              for (x = m; --x; ) {
                var ze = T[x];
                if (!(ze ? Jn(ze, be) : h(r[x], be, a))) continue e;
              }
              ce && ce.push(be), J.push(ye);
            }
          }
          return J;
        }
        function $0(r, n, a, h) {
          return (
            Xr(r, function (y, m, x) {
              n(h, a(y), m, x);
            }),
            h
          );
        }
        function ns(r, n, a) {
          (n = Ni(n, r)), (r = wl(r, n));
          var h = r == null ? r : r[ei(Ur(n))];
          return h == null ? t : Kt(h, r, a);
        }
        function $h(r) {
          return Ct(r) && nr(r) == he;
        }
        function F0(r) {
          return Ct(r) && nr(r) == De;
        }
        function L0(r) {
          return Ct(r) && nr(r) == N;
        }
        function ss(r, n, a, h, y) {
          return r === n
            ? !0
            : r == null || n == null || (!Ct(r) && !Ct(n))
            ? r !== r && n !== n
            : U0(r, n, a, h, ss, y);
        }
        function U0(r, n, a, h, y, m) {
          var x = Re(r),
            T = Re(n),
            j = x ? _e : Xt(r),
            J = T ? _e : Xt(n);
          (j = j == he ? Ue : j), (J = J == he ? Ue : J);
          var Q = j == Ue,
            Z = J == Ue,
            ce = j == J;
          if (ce && Fi(r)) {
            if (!Fi(n)) return !1;
            (x = !0), (Q = !1);
          }
          if (ce && !Q)
            return (
              m || (m = new Kr()),
              x || Tn(r) ? dl(r, n, a, h, y, m) : hy(r, n, j, a, h, y, m)
            );
          if (!(a & C)) {
            var ye = Q && nt.call(r, "__wrapped__"),
              be = Z && nt.call(n, "__wrapped__");
            if (ye || be) {
              var ze = ye ? r.value() : r,
                Ee = be ? n.value() : n;
              return m || (m = new Kr()), y(ze, Ee, a, h, m);
            }
          }
          return ce ? (m || (m = new Kr()), ly(r, n, a, h, y, m)) : !1;
        }
        function j0(r) {
          return Ct(r) && Xt(r) == Se;
        }
        function rc(r, n, a, h) {
          var y = a.length,
            m = y,
            x = !h;
          if (r == null) return !m;
          for (r = ut(r); y--; ) {
            var T = a[y];
            if (x && T[2] ? T[1] !== r[T[0]] : !(T[0] in r)) return !1;
          }
          for (; ++y < m; ) {
            T = a[y];
            var j = T[0],
              J = r[j],
              Q = T[1];
            if (x && T[2]) {
              if (J === t && !(j in r)) return !1;
            } else {
              var Z = new Kr();
              if (h) var ce = h(J, Q, j, r, n, Z);
              if (!(ce === t ? ss(Q, J, C | q, h, Z) : ce)) return !1;
            }
          }
          return !0;
        }
        function Fh(r) {
          if (!Et(r) || wy(r)) return !1;
          var n = pi(r) ? jg : ba;
          return n.test(Zi(r));
        }
        function M0(r) {
          return Ct(r) && nr(r) == Me;
        }
        function q0(r) {
          return Ct(r) && Xt(r) == Ie;
        }
        function z0(r) {
          return Ct(r) && jo(r.length) && !!ot[nr(r)];
        }
        function Lh(r) {
          return typeof r == "function"
            ? r
            : r == null
            ? vr
            : typeof r == "object"
            ? Re(r)
              ? Mh(r[0], r[1])
              : jh(r)
            : sf(r);
        }
        function ic(r) {
          if (!cs(r)) return Kg(r);
          var n = [];
          for (var a in ut(r)) nt.call(r, a) && a != "constructor" && n.push(a);
          return n;
        }
        function B0(r) {
          if (!Et(r)) return Sy(r);
          var n = cs(r),
            a = [];
          for (var h in r)
            (h == "constructor" && (n || !nt.call(r, h))) || a.push(h);
          return a;
        }
        function nc(r, n) {
          return r < n;
        }
        function Uh(r, n) {
          var a = -1,
            h = gr(r) ? H(r.length) : [];
          return (
            Ti(r, function (y, m, x) {
              h[++a] = n(y, m, x);
            }),
            h
          );
        }
        function jh(r) {
          var n = mc(r);
          return n.length == 1 && n[0][2]
            ? _l(n[0][0], n[0][1])
            : function (a) {
                return a === r || rc(a, r, n);
              };
        }
        function Mh(r, n) {
          return bc(r) && vl(n)
            ? _l(ei(r), n)
            : function (a) {
                var h = Tc(a, r);
                return h === t && h === n ? Rc(a, r) : ss(n, h, C | q);
              };
        }
        function Eo(r, n, a, h, y) {
          r !== n &&
            Xa(
              n,
              function (m, x) {
                if ((y || (y = new Kr()), Et(m))) H0(r, n, x, a, Eo, h, y);
                else {
                  var T = h ? h(Dc(r, x), m, x + "", r, n, y) : t;
                  T === t && (T = m), Ja(r, x, T);
                }
              },
              yr
            );
        }
        function H0(r, n, a, h, y, m, x) {
          var T = Dc(r, a),
            j = Dc(n, a),
            J = x.get(j);
          if (J) {
            Ja(r, a, J);
            return;
          }
          var Q = m ? m(T, j, a + "", r, n, x) : t,
            Z = Q === t;
          if (Z) {
            var ce = Re(j),
              ye = !ce && Fi(j),
              be = !ce && !ye && Tn(j);
            (Q = j),
              ce || ye || be
                ? Re(T)
                  ? (Q = T)
                  : Rt(T)
                  ? (Q = pr(T))
                  : ye
                  ? ((Z = !1), (Q = Qh(j, !0)))
                  : be
                  ? ((Z = !1), (Q = Xh(j, !0)))
                  : (Q = [])
                : hs(j) || en(j)
                ? ((Q = T),
                  en(T) ? (Q = Wl(T)) : (!Et(T) || pi(T)) && (Q = yl(j)))
                : (Z = !1);
          }
          Z && (x.set(j, Q), y(Q, j, h, m, x), x.delete(j)), Ja(r, a, Q);
        }
        function qh(r, n) {
          var a = r.length;
          if (a) return (n += n < 0 ? a : 0), di(n, a) ? r[n] : t;
        }
        function zh(r, n, a) {
          n.length
            ? (n = _t(n, function (m) {
                return Re(m)
                  ? function (x) {
                      return Qi(x, m.length === 1 ? m[0] : m);
                    }
                  : m;
              }))
            : (n = [vr]);
          var h = -1;
          n = _t(n, Er(me()));
          var y = Uh(r, function (m, x, T) {
            var j = _t(n, function (J) {
              return J(m);
            });
            return { criteria: j, index: ++h, value: m };
          });
          return yg(y, function (m, x) {
            return ry(m, x, a);
          });
        }
        function K0(r, n) {
          return Bh(r, n, function (a, h) {
            return Rc(r, h);
          });
        }
        function Bh(r, n, a) {
          for (var h = -1, y = n.length, m = {}; ++h < y; ) {
            var x = n[h],
              T = Qi(r, x);
            a(T, x) && os(m, Ni(x, r), T);
          }
          return m;
        }
        function k0(r) {
          return function (n) {
            return Qi(n, r);
          };
        }
        function sc(r, n, a, h) {
          var y = h ? gg : wn,
            m = -1,
            x = n.length,
            T = r;
          for (r === n && (n = pr(n)), a && (T = _t(r, Er(a))); ++m < x; )
            for (
              var j = 0, J = n[m], Q = a ? a(J) : J;
              (j = y(T, Q, j, h)) > -1;

            )
              T !== r && lo.call(T, j, 1), lo.call(r, j, 1);
          return r;
        }
        function Hh(r, n) {
          for (var a = r ? n.length : 0, h = a - 1; a--; ) {
            var y = n[a];
            if (a == h || y !== m) {
              var m = y;
              di(y) ? lo.call(r, y, 1) : uc(r, y);
            }
          }
          return r;
        }
        function oc(r, n) {
          return r + go(Dh() * (n - r + 1));
        }
        function V0(r, n, a, h) {
          for (var y = -1, m = Ht(po((n - r) / (a || 1)), 0), x = H(m); m--; )
            (x[h ? m : ++y] = r), (r += a);
          return x;
        }
        function ac(r, n) {
          var a = "";
          if (!r || n < 1 || n > W) return a;
          do n % 2 && (a += r), (n = go(n / 2)), n && (r += r);
          while (n);
          return a;
        }
        function Ke(r, n) {
          return Sc(ml(r, n, vr), r + "");
        }
        function G0(r) {
          return xh(Rn(r));
        }
        function W0(r, n) {
          var a = Rn(r);
          return Ro(a, Ji(n, 0, a.length));
        }
        function os(r, n, a, h) {
          if (!Et(r)) return r;
          n = Ni(n, r);
          for (
            var y = -1, m = n.length, x = m - 1, T = r;
            T != null && ++y < m;

          ) {
            var j = ei(n[y]),
              J = a;
            if (j === "__proto__" || j === "constructor" || j === "prototype")
              return r;
            if (y != x) {
              var Q = T[j];
              (J = h ? h(Q, j, T) : t),
                J === t && (J = Et(Q) ? Q : di(n[y + 1]) ? [] : {});
            }
            rs(T, j, J), (T = T[j]);
          }
          return r;
        }
        var Kh = yo
            ? function (r, n) {
                return yo.set(r, n), r;
              }
            : vr,
          Y0 = fo
            ? function (r, n) {
                return fo(r, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: $c(n),
                  writable: !0,
                });
              }
            : vr;
        function J0(r) {
          return Ro(Rn(r));
        }
        function Lr(r, n, a) {
          var h = -1,
            y = r.length;
          n < 0 && (n = -n > y ? 0 : y + n),
            (a = a > y ? y : a),
            a < 0 && (a += y),
            (y = n > a ? 0 : (a - n) >>> 0),
            (n >>>= 0);
          for (var m = H(y); ++h < y; ) m[h] = r[h + n];
          return m;
        }
        function Q0(r, n) {
          var a;
          return (
            Ti(r, function (h, y, m) {
              return (a = n(h, y, m)), !a;
            }),
            !!a
          );
        }
        function Do(r, n, a) {
          var h = 0,
            y = r == null ? h : r.length;
          if (typeof n == "number" && n === n && y <= ne) {
            for (; h < y; ) {
              var m = (h + y) >>> 1,
                x = r[m];
              x !== null && !Sr(x) && (a ? x <= n : x < n)
                ? (h = m + 1)
                : (y = m);
            }
            return y;
          }
          return cc(r, n, vr, a);
        }
        function cc(r, n, a, h) {
          var y = 0,
            m = r == null ? 0 : r.length;
          if (m === 0) return 0;
          n = a(n);
          for (
            var x = n !== n, T = n === null, j = Sr(n), J = n === t;
            y < m;

          ) {
            var Q = go((y + m) / 2),
              Z = a(r[Q]),
              ce = Z !== t,
              ye = Z === null,
              be = Z === Z,
              ze = Sr(Z);
            if (x) var Ee = h || be;
            else
              J
                ? (Ee = be && (h || ce))
                : T
                ? (Ee = be && ce && (h || !ye))
                : j
                ? (Ee = be && ce && !ye && (h || !ze))
                : ye || ze
                ? (Ee = !1)
                : (Ee = h ? Z <= n : Z < n);
            Ee ? (y = Q + 1) : (m = Q);
          }
          return Qt(m, xe);
        }
        function kh(r, n) {
          for (var a = -1, h = r.length, y = 0, m = []; ++a < h; ) {
            var x = r[a],
              T = n ? n(x) : x;
            if (!a || !kr(T, j)) {
              var j = T;
              m[y++] = x === 0 ? 0 : x;
            }
          }
          return m;
        }
        function Vh(r) {
          return typeof r == "number" ? r : Sr(r) ? Y : +r;
        }
        function Dr(r) {
          if (typeof r == "string") return r;
          if (Re(r)) return _t(r, Dr) + "";
          if (Sr(r)) return Sh ? Sh.call(r) : "";
          var n = r + "";
          return n == "0" && 1 / r == -re ? "-0" : n;
        }
        function Ri(r, n, a) {
          var h = -1,
            y = to,
            m = r.length,
            x = !0,
            T = [],
            j = T;
          if (a) (x = !1), (y = Ua);
          else if (m >= o) {
            var J = n ? null : cy(r);
            if (J) return io(J);
            (x = !1), (y = Jn), (j = new Yi());
          } else j = n ? [] : T;
          e: for (; ++h < m; ) {
            var Q = r[h],
              Z = n ? n(Q) : Q;
            if (((Q = a || Q !== 0 ? Q : 0), x && Z === Z)) {
              for (var ce = j.length; ce--; ) if (j[ce] === Z) continue e;
              n && j.push(Z), T.push(Q);
            } else y(j, Z, a) || (j !== T && j.push(Z), T.push(Q));
          }
          return T;
        }
        function uc(r, n) {
          return (
            (n = Ni(n, r)), (r = wl(r, n)), r == null || delete r[ei(Ur(n))]
          );
        }
        function Gh(r, n, a, h) {
          return os(r, n, a(Qi(r, n)), h);
        }
        function So(r, n, a, h) {
          for (
            var y = r.length, m = h ? y : -1;
            (h ? m-- : ++m < y) && n(r[m], m, r);

          );
          return a
            ? Lr(r, h ? 0 : m, h ? m + 1 : y)
            : Lr(r, h ? m + 1 : 0, h ? y : m);
        }
        function Wh(r, n) {
          var a = r;
          return (
            a instanceof Ye && (a = a.value()),
            ja(
              n,
              function (h, y) {
                return y.func.apply(y.thisArg, Pi([h], y.args));
              },
              a
            )
          );
        }
        function hc(r, n, a) {
          var h = r.length;
          if (h < 2) return h ? Ri(r[0]) : [];
          for (var y = -1, m = H(h); ++y < h; )
            for (var x = r[y], T = -1; ++T < h; )
              T != y && (m[y] = is(m[y] || x, r[T], n, a));
          return Ri(Wt(m, 1), n, a);
        }
        function Yh(r, n, a) {
          for (var h = -1, y = r.length, m = n.length, x = {}; ++h < y; ) {
            var T = h < m ? n[h] : t;
            a(x, r[h], T);
          }
          return x;
        }
        function lc(r) {
          return Rt(r) ? r : [];
        }
        function fc(r) {
          return typeof r == "function" ? r : vr;
        }
        function Ni(r, n) {
          return Re(r) ? r : bc(r, n) ? [r] : Sl(it(r));
        }
        var X0 = Ke;
        function $i(r, n, a) {
          var h = r.length;
          return (a = a === t ? h : a), !n && a >= h ? r : Lr(r, n, a);
        }
        var Jh =
          Mg ||
          function (r) {
            return Xe.clearTimeout(r);
          };
        function Qh(r, n) {
          if (n) return r.slice();
          var a = r.length,
            h = _h ? _h(a) : new r.constructor(a);
          return r.copy(h), h;
        }
        function dc(r) {
          var n = new r.constructor(r.byteLength);
          return new uo(n).set(new uo(r)), n;
        }
        function Z0(r, n) {
          var a = n ? dc(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.byteLength);
        }
        function ey(r) {
          var n = new r.constructor(r.source, Ar.exec(r));
          return (n.lastIndex = r.lastIndex), n;
        }
        function ty(r) {
          return ts ? ut(ts.call(r)) : {};
        }
        function Xh(r, n) {
          var a = n ? dc(r.buffer) : r.buffer;
          return new r.constructor(a, r.byteOffset, r.length);
        }
        function Zh(r, n) {
          if (r !== n) {
            var a = r !== t,
              h = r === null,
              y = r === r,
              m = Sr(r),
              x = n !== t,
              T = n === null,
              j = n === n,
              J = Sr(n);
            if (
              (!T && !J && !m && r > n) ||
              (m && x && j && !T && !J) ||
              (h && x && j) ||
              (!a && j) ||
              !y
            )
              return 1;
            if (
              (!h && !m && !J && r < n) ||
              (J && a && y && !h && !m) ||
              (T && a && y) ||
              (!x && y) ||
              !j
            )
              return -1;
          }
          return 0;
        }
        function ry(r, n, a) {
          for (
            var h = -1,
              y = r.criteria,
              m = n.criteria,
              x = y.length,
              T = a.length;
            ++h < x;

          ) {
            var j = Zh(y[h], m[h]);
            if (j) {
              if (h >= T) return j;
              var J = a[h];
              return j * (J == "desc" ? -1 : 1);
            }
          }
          return r.index - n.index;
        }
        function el(r, n, a, h) {
          for (
            var y = -1,
              m = r.length,
              x = a.length,
              T = -1,
              j = n.length,
              J = Ht(m - x, 0),
              Q = H(j + J),
              Z = !h;
            ++T < j;

          )
            Q[T] = n[T];
          for (; ++y < x; ) (Z || y < m) && (Q[a[y]] = r[y]);
          for (; J--; ) Q[T++] = r[y++];
          return Q;
        }
        function tl(r, n, a, h) {
          for (
            var y = -1,
              m = r.length,
              x = -1,
              T = a.length,
              j = -1,
              J = n.length,
              Q = Ht(m - T, 0),
              Z = H(Q + J),
              ce = !h;
            ++y < Q;

          )
            Z[y] = r[y];
          for (var ye = y; ++j < J; ) Z[ye + j] = n[j];
          for (; ++x < T; ) (ce || y < m) && (Z[ye + a[x]] = r[y++]);
          return Z;
        }
        function pr(r, n) {
          var a = -1,
            h = r.length;
          for (n || (n = H(h)); ++a < h; ) n[a] = r[a];
          return n;
        }
        function Zr(r, n, a, h) {
          var y = !a;
          a || (a = {});
          for (var m = -1, x = n.length; ++m < x; ) {
            var T = n[m],
              j = h ? h(a[T], r[T], T, a, r) : t;
            j === t && (j = r[T]), y ? hi(a, T, j) : rs(a, T, j);
          }
          return a;
        }
        function iy(r, n) {
          return Zr(r, wc(r), n);
        }
        function ny(r, n) {
          return Zr(r, pl(r), n);
        }
        function Io(r, n) {
          return function (a, h) {
            var y = Re(a) ? ug : x0,
              m = n ? n() : {};
            return y(a, r, me(h, 2), m);
          };
        }
        function Pn(r) {
          return Ke(function (n, a) {
            var h = -1,
              y = a.length,
              m = y > 1 ? a[y - 1] : t,
              x = y > 2 ? a[2] : t;
            for (
              m = r.length > 3 && typeof m == "function" ? (y--, m) : t,
                x && sr(a[0], a[1], x) && ((m = y < 3 ? t : m), (y = 1)),
                n = ut(n);
              ++h < y;

            ) {
              var T = a[h];
              T && r(n, T, h, m);
            }
            return n;
          });
        }
        function rl(r, n) {
          return function (a, h) {
            if (a == null) return a;
            if (!gr(a)) return r(a, h);
            for (
              var y = a.length, m = n ? y : -1, x = ut(a);
              (n ? m-- : ++m < y) && h(x[m], m, x) !== !1;

            );
            return a;
          };
        }
        function il(r) {
          return function (n, a, h) {
            for (var y = -1, m = ut(n), x = h(n), T = x.length; T--; ) {
              var j = x[r ? T : ++y];
              if (a(m[j], j, m) === !1) break;
            }
            return n;
          };
        }
        function sy(r, n, a) {
          var h = n & K,
            y = as(r);
          function m() {
            var x = this && this !== Xe && this instanceof m ? y : r;
            return x.apply(h ? a : this, arguments);
          }
          return m;
        }
        function nl(r) {
          return function (n) {
            n = it(n);
            var a = bn(n) ? Hr(n) : t,
              h = a ? a[0] : n.charAt(0),
              y = a ? $i(a, 1).join("") : n.slice(1);
            return h[r]() + y;
          };
        }
        function Cn(r) {
          return function (n) {
            return ja(rf(tf(n).replace(Wn, "")), r, "");
          };
        }
        function as(r) {
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new r();
              case 1:
                return new r(n[0]);
              case 2:
                return new r(n[0], n[1]);
              case 3:
                return new r(n[0], n[1], n[2]);
              case 4:
                return new r(n[0], n[1], n[2], n[3]);
              case 5:
                return new r(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var a = On(r.prototype),
              h = r.apply(a, n);
            return Et(h) ? h : a;
          };
        }
        function oy(r, n, a) {
          var h = as(r);
          function y() {
            for (var m = arguments.length, x = H(m), T = m, j = An(y); T--; )
              x[T] = arguments[T];
            var J = m < 3 && x[0] !== j && x[m - 1] !== j ? [] : Ci(x, j);
            if (((m -= J.length), m < a))
              return ul(r, n, xo, y.placeholder, t, x, J, t, t, a - m);
            var Q = this && this !== Xe && this instanceof y ? h : r;
            return Kt(Q, this, x);
          }
          return y;
        }
        function sl(r) {
          return function (n, a, h) {
            var y = ut(n);
            if (!gr(n)) {
              var m = me(a, 3);
              (n = kt(n)),
                (a = function (T) {
                  return m(y[T], T, y);
                });
            }
            var x = r(n, a, h);
            return x > -1 ? y[m ? n[x] : x] : t;
          };
        }
        function ol(r) {
          return fi(function (n) {
            var a = n.length,
              h = a,
              y = $r.prototype.thru;
            for (r && n.reverse(); h--; ) {
              var m = n[h];
              if (typeof m != "function") throw new Nr(l);
              if (y && !x && Ao(m) == "wrapper") var x = new $r([], !0);
            }
            for (h = x ? h : a; ++h < a; ) {
              m = n[h];
              var T = Ao(m),
                j = T == "wrapper" ? _c(m) : t;
              j &&
              Ec(j[0]) &&
              j[1] == (u | U | P | w) &&
              !j[4].length &&
              j[9] == 1
                ? (x = x[Ao(j[0])].apply(x, j[3]))
                : (x = m.length == 1 && Ec(m) ? x[T]() : x.thru(m));
            }
            return function () {
              var J = arguments,
                Q = J[0];
              if (x && J.length == 1 && Re(Q)) return x.plant(Q).value();
              for (var Z = 0, ce = a ? n[Z].apply(this, J) : Q; ++Z < a; )
                ce = n[Z].call(this, ce);
              return ce;
            };
          });
        }
        function xo(r, n, a, h, y, m, x, T, j, J) {
          var Q = n & u,
            Z = n & K,
            ce = n & ee,
            ye = n & (U | O),
            be = n & k,
            ze = ce ? t : as(r);
          function Ee() {
            for (var Ge = arguments.length, Ze = H(Ge), Ir = Ge; Ir--; )
              Ze[Ir] = arguments[Ir];
            if (ye)
              var or = An(Ee),
                xr = _g(Ze, or);
            if (
              (h && (Ze = el(Ze, h, y, ye)),
              m && (Ze = tl(Ze, m, x, ye)),
              (Ge -= xr),
              ye && Ge < J)
            ) {
              var Nt = Ci(Ze, or);
              return ul(r, n, xo, Ee.placeholder, a, Ze, Nt, T, j, J - Ge);
            }
            var Vr = Z ? a : this,
              yi = ce ? Vr[r] : r;
            return (
              (Ge = Ze.length),
              T ? (Ze = xy(Ze, T)) : be && Ge > 1 && Ze.reverse(),
              Q && j < Ge && (Ze.length = j),
              this && this !== Xe && this instanceof Ee && (yi = ze || as(yi)),
              yi.apply(Vr, Ze)
            );
          }
          return Ee;
        }
        function al(r, n) {
          return function (a, h) {
            return $0(a, r, n(h), {});
          };
        }
        function Oo(r, n) {
          return function (a, h) {
            var y;
            if (a === t && h === t) return n;
            if ((a !== t && (y = a), h !== t)) {
              if (y === t) return h;
              typeof a == "string" || typeof h == "string"
                ? ((a = Dr(a)), (h = Dr(h)))
                : ((a = Vh(a)), (h = Vh(h))),
                (y = r(a, h));
            }
            return y;
          };
        }
        function pc(r) {
          return fi(function (n) {
            return (
              (n = _t(n, Er(me()))),
              Ke(function (a) {
                var h = this;
                return r(n, function (y) {
                  return Kt(y, h, a);
                });
              })
            );
          });
        }
        function Po(r, n) {
          n = n === t ? " " : Dr(n);
          var a = n.length;
          if (a < 2) return a ? ac(n, r) : n;
          var h = ac(n, po(r / En(n)));
          return bn(n) ? $i(Hr(h), 0, r).join("") : h.slice(0, r);
        }
        function ay(r, n, a, h) {
          var y = n & K,
            m = as(r);
          function x() {
            for (
              var T = -1,
                j = arguments.length,
                J = -1,
                Q = h.length,
                Z = H(Q + j),
                ce = this && this !== Xe && this instanceof x ? m : r;
              ++J < Q;

            )
              Z[J] = h[J];
            for (; j--; ) Z[J++] = arguments[++T];
            return Kt(ce, y ? a : this, Z);
          }
          return x;
        }
        function cl(r) {
          return function (n, a, h) {
            return (
              h && typeof h != "number" && sr(n, a, h) && (a = h = t),
              (n = gi(n)),
              a === t ? ((a = n), (n = 0)) : (a = gi(a)),
              (h = h === t ? (n < a ? 1 : -1) : gi(h)),
              V0(n, a, h, r)
            );
          };
        }
        function Co(r) {
          return function (n, a) {
            return (
              (typeof n == "string" && typeof a == "string") ||
                ((n = jr(n)), (a = jr(a))),
              r(n, a)
            );
          };
        }
        function ul(r, n, a, h, y, m, x, T, j, J) {
          var Q = n & U,
            Z = Q ? x : t,
            ce = Q ? t : x,
            ye = Q ? m : t,
            be = Q ? t : m;
          (n |= Q ? P : b), (n &= ~(Q ? b : P)), n & R || (n &= ~(K | ee));
          var ze = [r, n, y, ye, Z, be, ce, T, j, J],
            Ee = a.apply(t, ze);
          return Ec(r) && bl(Ee, ze), (Ee.placeholder = h), El(Ee, r, n);
        }
        function gc(r) {
          var n = Bt[r];
          return function (a, h) {
            if (
              ((a = jr(a)), (h = h == null ? 0 : Qt(je(h), 292)), h && Eh(a))
            ) {
              var y = (it(a) + "e").split("e"),
                m = n(y[0] + "e" + (+y[1] + h));
              return (
                (y = (it(m) + "e").split("e")), +(y[0] + "e" + (+y[1] - h))
              );
            }
            return n(a);
          };
        }
        var cy =
          In && 1 / io(new In([, -0]))[1] == re
            ? function (r) {
                return new In(r);
              }
            : Uc;
        function hl(r) {
          return function (n) {
            var a = Xt(n);
            return a == Se ? ka(n) : a == Ie ? Ig(n) : vg(n, r(n));
          };
        }
        function li(r, n, a, h, y, m, x, T) {
          var j = n & ee;
          if (!j && typeof r != "function") throw new Nr(l);
          var J = h ? h.length : 0;
          if (
            (J || ((n &= ~(P | b)), (h = y = t)),
            (x = x === t ? x : Ht(je(x), 0)),
            (T = T === t ? T : je(T)),
            (J -= y ? y.length : 0),
            n & b)
          ) {
            var Q = h,
              Z = y;
            h = y = t;
          }
          var ce = j ? t : _c(r),
            ye = [r, n, a, h, y, Q, Z, m, x, T];
          if (
            (ce && Dy(ye, ce),
            (r = ye[0]),
            (n = ye[1]),
            (a = ye[2]),
            (h = ye[3]),
            (y = ye[4]),
            (T = ye[9] = ye[9] === t ? (j ? 0 : r.length) : Ht(ye[9] - J, 0)),
            !T && n & (U | O) && (n &= ~(U | O)),
            !n || n == K)
          )
            var be = sy(r, n, a);
          else
            n == U || n == O
              ? (be = oy(r, n, T))
              : (n == P || n == (K | P)) && !y.length
              ? (be = ay(r, n, a, h))
              : (be = xo.apply(t, ye));
          var ze = ce ? Kh : bl;
          return El(ze(be, ye), r, n);
        }
        function ll(r, n, a, h) {
          return r === t || (kr(r, Sn[a]) && !nt.call(h, a)) ? n : r;
        }
        function fl(r, n, a, h, y, m) {
          return (
            Et(r) && Et(n) && (m.set(n, r), Eo(r, n, t, fl, m), m.delete(n)), r
          );
        }
        function uy(r) {
          return hs(r) ? t : r;
        }
        function dl(r, n, a, h, y, m) {
          var x = a & C,
            T = r.length,
            j = n.length;
          if (T != j && !(x && j > T)) return !1;
          var J = m.get(r),
            Q = m.get(n);
          if (J && Q) return J == n && Q == r;
          var Z = -1,
            ce = !0,
            ye = a & q ? new Yi() : t;
          for (m.set(r, n), m.set(n, r); ++Z < T; ) {
            var be = r[Z],
              ze = n[Z];
            if (h) var Ee = x ? h(ze, be, Z, n, r, m) : h(be, ze, Z, r, n, m);
            if (Ee !== t) {
              if (Ee) continue;
              ce = !1;
              break;
            }
            if (ye) {
              if (
                !Ma(n, function (Ge, Ze) {
                  if (!Jn(ye, Ze) && (be === Ge || y(be, Ge, a, h, m)))
                    return ye.push(Ze);
                })
              ) {
                ce = !1;
                break;
              }
            } else if (!(be === ze || y(be, ze, a, h, m))) {
              ce = !1;
              break;
            }
          }
          return m.delete(r), m.delete(n), ce;
        }
        function hy(r, n, a, h, y, m, x) {
          switch (a) {
            case Ce:
              if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset)
                return !1;
              (r = r.buffer), (n = n.buffer);
            case De:
              return !(
                r.byteLength != n.byteLength || !m(new uo(r), new uo(n))
              );
            case M:
            case N:
            case Be:
              return kr(+r, +n);
            case A:
              return r.name == n.name && r.message == n.message;
            case Me:
            case Ne:
              return r == n + "";
            case Se:
              var T = ka;
            case Ie:
              var j = h & C;
              if ((T || (T = io), r.size != n.size && !j)) return !1;
              var J = x.get(r);
              if (J) return J == n;
              (h |= q), x.set(r, n);
              var Q = dl(T(r), T(n), h, y, m, x);
              return x.delete(r), Q;
            case $e:
              if (ts) return ts.call(r) == ts.call(n);
          }
          return !1;
        }
        function ly(r, n, a, h, y, m) {
          var x = a & C,
            T = yc(r),
            j = T.length,
            J = yc(n),
            Q = J.length;
          if (j != Q && !x) return !1;
          for (var Z = j; Z--; ) {
            var ce = T[Z];
            if (!(x ? ce in n : nt.call(n, ce))) return !1;
          }
          var ye = m.get(r),
            be = m.get(n);
          if (ye && be) return ye == n && be == r;
          var ze = !0;
          m.set(r, n), m.set(n, r);
          for (var Ee = x; ++Z < j; ) {
            ce = T[Z];
            var Ge = r[ce],
              Ze = n[ce];
            if (h) var Ir = x ? h(Ze, Ge, ce, n, r, m) : h(Ge, Ze, ce, r, n, m);
            if (!(Ir === t ? Ge === Ze || y(Ge, Ze, a, h, m) : Ir)) {
              ze = !1;
              break;
            }
            Ee || (Ee = ce == "constructor");
          }
          if (ze && !Ee) {
            var or = r.constructor,
              xr = n.constructor;
            or != xr &&
              "constructor" in r &&
              "constructor" in n &&
              !(
                typeof or == "function" &&
                or instanceof or &&
                typeof xr == "function" &&
                xr instanceof xr
              ) &&
              (ze = !1);
          }
          return m.delete(r), m.delete(n), ze;
        }
        function fi(r) {
          return Sc(ml(r, t, Pl), r + "");
        }
        function yc(r) {
          return Nh(r, kt, wc);
        }
        function vc(r) {
          return Nh(r, yr, pl);
        }
        var _c = yo
          ? function (r) {
              return yo.get(r);
            }
          : Uc;
        function Ao(r) {
          for (
            var n = r.name + "", a = xn[n], h = nt.call(xn, n) ? a.length : 0;
            h--;

          ) {
            var y = a[h],
              m = y.func;
            if (m == null || m == r) return y.name;
          }
          return n;
        }
        function An(r) {
          var n = nt.call(_, "placeholder") ? _ : r;
          return n.placeholder;
        }
        function me() {
          var r = _.iteratee || Fc;
          return (
            (r = r === Fc ? Lh : r),
            arguments.length ? r(arguments[0], arguments[1]) : r
          );
        }
        function To(r, n) {
          var a = r.__data__;
          return my(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
        }
        function mc(r) {
          for (var n = kt(r), a = n.length; a--; ) {
            var h = n[a],
              y = r[h];
            n[a] = [h, y, vl(y)];
          }
          return n;
        }
        function Xi(r, n) {
          var a = Eg(r, n);
          return Fh(a) ? a : t;
        }
        function fy(r) {
          var n = nt.call(r, Gi),
            a = r[Gi];
          try {
            r[Gi] = t;
            var h = !0;
          } catch {}
          var y = ao.call(r);
          return h && (n ? (r[Gi] = a) : delete r[Gi]), y;
        }
        var wc = Ga
            ? function (r) {
                return r == null
                  ? []
                  : ((r = ut(r)),
                    Oi(Ga(r), function (n) {
                      return wh.call(r, n);
                    }));
              }
            : jc,
          pl = Ga
            ? function (r) {
                for (var n = []; r; ) Pi(n, wc(r)), (r = ho(r));
                return n;
              }
            : jc,
          Xt = nr;
        ((Wa && Xt(new Wa(new ArrayBuffer(1))) != Ce) ||
          (Xn && Xt(new Xn()) != Se) ||
          (Ya && Xt(Ya.resolve()) != pt) ||
          (In && Xt(new In()) != Ie) ||
          (Zn && Xt(new Zn()) != Pe)) &&
          (Xt = function (r) {
            var n = nr(r),
              a = n == Ue ? r.constructor : t,
              h = a ? Zi(a) : "";
            if (h)
              switch (h) {
                case Wg:
                  return Ce;
                case Yg:
                  return Se;
                case Jg:
                  return pt;
                case Qg:
                  return Ie;
                case Xg:
                  return Pe;
              }
            return n;
          });
        function dy(r, n, a) {
          for (var h = -1, y = a.length; ++h < y; ) {
            var m = a[h],
              x = m.size;
            switch (m.type) {
              case "drop":
                r += x;
                break;
              case "dropRight":
                n -= x;
                break;
              case "take":
                n = Qt(n, r + x);
                break;
              case "takeRight":
                r = Ht(r, n - x);
                break;
            }
          }
          return { start: r, end: n };
        }
        function py(r) {
          var n = r.match(ht);
          return n ? n[1].split(jt) : [];
        }
        function gl(r, n, a) {
          n = Ni(n, r);
          for (var h = -1, y = n.length, m = !1; ++h < y; ) {
            var x = ei(n[h]);
            if (!(m = r != null && a(r, x))) break;
            r = r[x];
          }
          return m || ++h != y
            ? m
            : ((y = r == null ? 0 : r.length),
              !!y && jo(y) && di(x, y) && (Re(r) || en(r)));
        }
        function gy(r) {
          var n = r.length,
            a = new r.constructor(n);
          return (
            n &&
              typeof r[0] == "string" &&
              nt.call(r, "index") &&
              ((a.index = r.index), (a.input = r.input)),
            a
          );
        }
        function yl(r) {
          return typeof r.constructor == "function" && !cs(r) ? On(ho(r)) : {};
        }
        function yy(r, n, a) {
          var h = r.constructor;
          switch (n) {
            case De:
              return dc(r);
            case M:
            case N:
              return new h(+r);
            case Ce:
              return Z0(r, a);
            case He:
            case Oe:
            case Ve:
            case We:
            case et:
            case tt:
            case Qe:
            case tr:
            case fr:
              return Xh(r, a);
            case Se:
              return new h();
            case Be:
            case Ne:
              return new h(r);
            case Me:
              return ey(r);
            case Ie:
              return new h();
            case $e:
              return ty(r);
          }
        }
        function vy(r, n) {
          var a = n.length;
          if (!a) return r;
          var h = a - 1;
          return (
            (n[h] = (a > 1 ? "& " : "") + n[h]),
            (n = n.join(a > 2 ? ", " : " ")),
            r.replace(
              Pt,
              `{
/* [wrapped with ` +
                n +
                `] */
`
            )
          );
        }
        function _y(r) {
          return Re(r) || en(r) || !!(bh && r && r[bh]);
        }
        function di(r, n) {
          var a = typeof r;
          return (
            (n = n ?? W),
            !!n &&
              (a == "number" || (a != "symbol" && Da.test(r))) &&
              r > -1 &&
              r % 1 == 0 &&
              r < n
          );
        }
        function sr(r, n, a) {
          if (!Et(a)) return !1;
          var h = typeof n;
          return (
            h == "number" ? gr(a) && di(n, a.length) : h == "string" && n in a
          )
            ? kr(a[n], r)
            : !1;
        }
        function bc(r, n) {
          if (Re(r)) return !1;
          var a = typeof r;
          return a == "number" ||
            a == "symbol" ||
            a == "boolean" ||
            r == null ||
            Sr(r)
            ? !0
            : Ft.test(r) || !vt.test(r) || (n != null && r in ut(n));
        }
        function my(r) {
          var n = typeof r;
          return n == "string" ||
            n == "number" ||
            n == "symbol" ||
            n == "boolean"
            ? r !== "__proto__"
            : r === null;
        }
        function Ec(r) {
          var n = Ao(r),
            a = _[n];
          if (typeof a != "function" || !(n in Ye.prototype)) return !1;
          if (r === a) return !0;
          var h = _c(a);
          return !!h && r === h[0];
        }
        function wy(r) {
          return !!vh && vh in r;
        }
        var by = so ? pi : Mc;
        function cs(r) {
          var n = r && r.constructor,
            a = (typeof n == "function" && n.prototype) || Sn;
          return r === a;
        }
        function vl(r) {
          return r === r && !Et(r);
        }
        function _l(r, n) {
          return function (a) {
            return a == null ? !1 : a[r] === n && (n !== t || r in ut(a));
          };
        }
        function Ey(r) {
          var n = Lo(r, function (h) {
              return a.size === p && a.clear(), h;
            }),
            a = n.cache;
          return n;
        }
        function Dy(r, n) {
          var a = r[1],
            h = n[1],
            y = a | h,
            m = y < (K | ee | u),
            x =
              (h == u && a == U) ||
              (h == u && a == w && r[7].length <= n[8]) ||
              (h == (u | w) && n[7].length <= n[8] && a == U);
          if (!(m || x)) return r;
          h & K && ((r[2] = n[2]), (y |= a & K ? 0 : R));
          var T = n[3];
          if (T) {
            var j = r[3];
            (r[3] = j ? el(j, T, n[4]) : T), (r[4] = j ? Ci(r[3], v) : n[4]);
          }
          return (
            (T = n[5]),
            T &&
              ((j = r[5]),
              (r[5] = j ? tl(j, T, n[6]) : T),
              (r[6] = j ? Ci(r[5], v) : n[6])),
            (T = n[7]),
            T && (r[7] = T),
            h & u && (r[8] = r[8] == null ? n[8] : Qt(r[8], n[8])),
            r[9] == null && (r[9] = n[9]),
            (r[0] = n[0]),
            (r[1] = y),
            r
          );
        }
        function Sy(r) {
          var n = [];
          if (r != null) for (var a in ut(r)) n.push(a);
          return n;
        }
        function Iy(r) {
          return ao.call(r);
        }
        function ml(r, n, a) {
          return (
            (n = Ht(n === t ? r.length - 1 : n, 0)),
            function () {
              for (
                var h = arguments, y = -1, m = Ht(h.length - n, 0), x = H(m);
                ++y < m;

              )
                x[y] = h[n + y];
              y = -1;
              for (var T = H(n + 1); ++y < n; ) T[y] = h[y];
              return (T[n] = a(x)), Kt(r, this, T);
            }
          );
        }
        function wl(r, n) {
          return n.length < 2 ? r : Qi(r, Lr(n, 0, -1));
        }
        function xy(r, n) {
          for (var a = r.length, h = Qt(n.length, a), y = pr(r); h--; ) {
            var m = n[h];
            r[h] = di(m, a) ? y[m] : t;
          }
          return r;
        }
        function Dc(r, n) {
          if (
            !(n === "constructor" && typeof r[n] == "function") &&
            n != "__proto__"
          )
            return r[n];
        }
        var bl = Dl(Kh),
          us =
            zg ||
            function (r, n) {
              return Xe.setTimeout(r, n);
            },
          Sc = Dl(Y0);
        function El(r, n, a) {
          var h = n + "";
          return Sc(r, vy(h, Oy(py(h), a)));
        }
        function Dl(r) {
          var n = 0,
            a = 0;
          return function () {
            var h = kg(),
              y = ge - (h - a);
            if (((a = h), y > 0)) {
              if (++n >= ue) return arguments[0];
            } else n = 0;
            return r.apply(t, arguments);
          };
        }
        function Ro(r, n) {
          var a = -1,
            h = r.length,
            y = h - 1;
          for (n = n === t ? h : n; ++a < n; ) {
            var m = oc(a, y),
              x = r[m];
            (r[m] = r[a]), (r[a] = x);
          }
          return (r.length = n), r;
        }
        var Sl = Ey(function (r) {
          var n = [];
          return (
            r.charCodeAt(0) === 46 && n.push(""),
            r.replace(Lt, function (a, h, y, m) {
              n.push(y ? m.replace(va, "$1") : h || a);
            }),
            n
          );
        });
        function ei(r) {
          if (typeof r == "string" || Sr(r)) return r;
          var n = r + "";
          return n == "0" && 1 / r == -re ? "-0" : n;
        }
        function Zi(r) {
          if (r != null) {
            try {
              return oo.call(r);
            } catch {}
            try {
              return r + "";
            } catch {}
          }
          return "";
        }
        function Oy(r, n) {
          return (
            Rr(we, function (a) {
              var h = "_." + a[0];
              n & a[1] && !to(r, h) && r.push(h);
            }),
            r.sort()
          );
        }
        function Il(r) {
          if (r instanceof Ye) return r.clone();
          var n = new $r(r.__wrapped__, r.__chain__);
          return (
            (n.__actions__ = pr(r.__actions__)),
            (n.__index__ = r.__index__),
            (n.__values__ = r.__values__),
            n
          );
        }
        function Py(r, n, a) {
          (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = Ht(je(n), 0));
          var h = r == null ? 0 : r.length;
          if (!h || n < 1) return [];
          for (var y = 0, m = 0, x = H(po(h / n)); y < h; )
            x[m++] = Lr(r, y, (y += n));
          return x;
        }
        function Cy(r) {
          for (
            var n = -1, a = r == null ? 0 : r.length, h = 0, y = [];
            ++n < a;

          ) {
            var m = r[n];
            m && (y[h++] = m);
          }
          return y;
        }
        function Ay() {
          var r = arguments.length;
          if (!r) return [];
          for (var n = H(r - 1), a = arguments[0], h = r; h--; )
            n[h - 1] = arguments[h];
          return Pi(Re(a) ? pr(a) : [a], Wt(n, 1));
        }
        var Ty = Ke(function (r, n) {
            return Rt(r) ? is(r, Wt(n, 1, Rt, !0)) : [];
          }),
          Ry = Ke(function (r, n) {
            var a = Ur(n);
            return (
              Rt(a) && (a = t), Rt(r) ? is(r, Wt(n, 1, Rt, !0), me(a, 2)) : []
            );
          }),
          Ny = Ke(function (r, n) {
            var a = Ur(n);
            return Rt(a) && (a = t), Rt(r) ? is(r, Wt(n, 1, Rt, !0), t, a) : [];
          });
        function $y(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? ((n = a || n === t ? 1 : je(n)), Lr(r, n < 0 ? 0 : n, h))
            : [];
        }
        function Fy(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? ((n = a || n === t ? 1 : je(n)),
              (n = h - n),
              Lr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function Ly(r, n) {
          return r && r.length ? So(r, me(n, 3), !0, !0) : [];
        }
        function Uy(r, n) {
          return r && r.length ? So(r, me(n, 3), !0) : [];
        }
        function jy(r, n, a, h) {
          var y = r == null ? 0 : r.length;
          return y
            ? (a && typeof a != "number" && sr(r, n, a) && ((a = 0), (h = y)),
              A0(r, n, a, h))
            : [];
        }
        function xl(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var y = a == null ? 0 : je(a);
          return y < 0 && (y = Ht(h + y, 0)), ro(r, me(n, 3), y);
        }
        function Ol(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var y = h - 1;
          return (
            a !== t && ((y = je(a)), (y = a < 0 ? Ht(h + y, 0) : Qt(y, h - 1))),
            ro(r, me(n, 3), y, !0)
          );
        }
        function Pl(r) {
          var n = r == null ? 0 : r.length;
          return n ? Wt(r, 1) : [];
        }
        function My(r) {
          var n = r == null ? 0 : r.length;
          return n ? Wt(r, re) : [];
        }
        function qy(r, n) {
          var a = r == null ? 0 : r.length;
          return a ? ((n = n === t ? 1 : je(n)), Wt(r, n)) : [];
        }
        function zy(r) {
          for (var n = -1, a = r == null ? 0 : r.length, h = {}; ++n < a; ) {
            var y = r[n];
            h[y[0]] = y[1];
          }
          return h;
        }
        function Cl(r) {
          return r && r.length ? r[0] : t;
        }
        function By(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var y = a == null ? 0 : je(a);
          return y < 0 && (y = Ht(h + y, 0)), wn(r, n, y);
        }
        function Hy(r) {
          var n = r == null ? 0 : r.length;
          return n ? Lr(r, 0, -1) : [];
        }
        var Ky = Ke(function (r) {
            var n = _t(r, lc);
            return n.length && n[0] === r[0] ? tc(n) : [];
          }),
          ky = Ke(function (r) {
            var n = Ur(r),
              a = _t(r, lc);
            return (
              n === Ur(a) ? (n = t) : a.pop(),
              a.length && a[0] === r[0] ? tc(a, me(n, 2)) : []
            );
          }),
          Vy = Ke(function (r) {
            var n = Ur(r),
              a = _t(r, lc);
            return (
              (n = typeof n == "function" ? n : t),
              n && a.pop(),
              a.length && a[0] === r[0] ? tc(a, t, n) : []
            );
          });
        function Gy(r, n) {
          return r == null ? "" : Hg.call(r, n);
        }
        function Ur(r) {
          var n = r == null ? 0 : r.length;
          return n ? r[n - 1] : t;
        }
        function Wy(r, n, a) {
          var h = r == null ? 0 : r.length;
          if (!h) return -1;
          var y = h;
          return (
            a !== t && ((y = je(a)), (y = y < 0 ? Ht(h + y, 0) : Qt(y, h - 1))),
            n === n ? Og(r, n, y) : ro(r, uh, y, !0)
          );
        }
        function Yy(r, n) {
          return r && r.length ? qh(r, je(n)) : t;
        }
        var Jy = Ke(Al);
        function Al(r, n) {
          return r && r.length && n && n.length ? sc(r, n) : r;
        }
        function Qy(r, n, a) {
          return r && r.length && n && n.length ? sc(r, n, me(a, 2)) : r;
        }
        function Xy(r, n, a) {
          return r && r.length && n && n.length ? sc(r, n, t, a) : r;
        }
        var Zy = fi(function (r, n) {
          var a = r == null ? 0 : r.length,
            h = Qa(r, n);
          return (
            Hh(
              r,
              _t(n, function (y) {
                return di(y, a) ? +y : y;
              }).sort(Zh)
            ),
            h
          );
        });
        function e1(r, n) {
          var a = [];
          if (!(r && r.length)) return a;
          var h = -1,
            y = [],
            m = r.length;
          for (n = me(n, 3); ++h < m; ) {
            var x = r[h];
            n(x, h, r) && (a.push(x), y.push(h));
          }
          return Hh(r, y), a;
        }
        function Ic(r) {
          return r == null ? r : Gg.call(r);
        }
        function t1(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? (a && typeof a != "number" && sr(r, n, a)
                ? ((n = 0), (a = h))
                : ((n = n == null ? 0 : je(n)), (a = a === t ? h : je(a))),
              Lr(r, n, a))
            : [];
        }
        function r1(r, n) {
          return Do(r, n);
        }
        function i1(r, n, a) {
          return cc(r, n, me(a, 2));
        }
        function n1(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var h = Do(r, n);
            if (h < a && kr(r[h], n)) return h;
          }
          return -1;
        }
        function s1(r, n) {
          return Do(r, n, !0);
        }
        function o1(r, n, a) {
          return cc(r, n, me(a, 2), !0);
        }
        function a1(r, n) {
          var a = r == null ? 0 : r.length;
          if (a) {
            var h = Do(r, n, !0) - 1;
            if (kr(r[h], n)) return h;
          }
          return -1;
        }
        function c1(r) {
          return r && r.length ? kh(r) : [];
        }
        function u1(r, n) {
          return r && r.length ? kh(r, me(n, 2)) : [];
        }
        function h1(r) {
          var n = r == null ? 0 : r.length;
          return n ? Lr(r, 1, n) : [];
        }
        function l1(r, n, a) {
          return r && r.length
            ? ((n = a || n === t ? 1 : je(n)), Lr(r, 0, n < 0 ? 0 : n))
            : [];
        }
        function f1(r, n, a) {
          var h = r == null ? 0 : r.length;
          return h
            ? ((n = a || n === t ? 1 : je(n)),
              (n = h - n),
              Lr(r, n < 0 ? 0 : n, h))
            : [];
        }
        function d1(r, n) {
          return r && r.length ? So(r, me(n, 3), !1, !0) : [];
        }
        function p1(r, n) {
          return r && r.length ? So(r, me(n, 3)) : [];
        }
        var g1 = Ke(function (r) {
            return Ri(Wt(r, 1, Rt, !0));
          }),
          y1 = Ke(function (r) {
            var n = Ur(r);
            return Rt(n) && (n = t), Ri(Wt(r, 1, Rt, !0), me(n, 2));
          }),
          v1 = Ke(function (r) {
            var n = Ur(r);
            return (
              (n = typeof n == "function" ? n : t), Ri(Wt(r, 1, Rt, !0), t, n)
            );
          });
        function _1(r) {
          return r && r.length ? Ri(r) : [];
        }
        function m1(r, n) {
          return r && r.length ? Ri(r, me(n, 2)) : [];
        }
        function w1(r, n) {
          return (
            (n = typeof n == "function" ? n : t),
            r && r.length ? Ri(r, t, n) : []
          );
        }
        function xc(r) {
          if (!(r && r.length)) return [];
          var n = 0;
          return (
            (r = Oi(r, function (a) {
              if (Rt(a)) return (n = Ht(a.length, n)), !0;
            })),
            Ha(n, function (a) {
              return _t(r, qa(a));
            })
          );
        }
        function Tl(r, n) {
          if (!(r && r.length)) return [];
          var a = xc(r);
          return n == null
            ? a
            : _t(a, function (h) {
                return Kt(n, t, h);
              });
        }
        var b1 = Ke(function (r, n) {
            return Rt(r) ? is(r, n) : [];
          }),
          E1 = Ke(function (r) {
            return hc(Oi(r, Rt));
          }),
          D1 = Ke(function (r) {
            var n = Ur(r);
            return Rt(n) && (n = t), hc(Oi(r, Rt), me(n, 2));
          }),
          S1 = Ke(function (r) {
            var n = Ur(r);
            return (n = typeof n == "function" ? n : t), hc(Oi(r, Rt), t, n);
          }),
          I1 = Ke(xc);
        function x1(r, n) {
          return Yh(r || [], n || [], rs);
        }
        function O1(r, n) {
          return Yh(r || [], n || [], os);
        }
        var P1 = Ke(function (r) {
          var n = r.length,
            a = n > 1 ? r[n - 1] : t;
          return (a = typeof a == "function" ? (r.pop(), a) : t), Tl(r, a);
        });
        function Rl(r) {
          var n = _(r);
          return (n.__chain__ = !0), n;
        }
        function C1(r, n) {
          return n(r), r;
        }
        function No(r, n) {
          return n(r);
        }
        var A1 = fi(function (r) {
          var n = r.length,
            a = n ? r[0] : 0,
            h = this.__wrapped__,
            y = function (m) {
              return Qa(m, r);
            };
          return n > 1 ||
            this.__actions__.length ||
            !(h instanceof Ye) ||
            !di(a)
            ? this.thru(y)
            : ((h = h.slice(a, +a + (n ? 1 : 0))),
              h.__actions__.push({ func: No, args: [y], thisArg: t }),
              new $r(h, this.__chain__).thru(function (m) {
                return n && !m.length && m.push(t), m;
              }));
        });
        function T1() {
          return Rl(this);
        }
        function R1() {
          return new $r(this.value(), this.__chain__);
        }
        function N1() {
          this.__values__ === t && (this.__values__ = Vl(this.value()));
          var r = this.__index__ >= this.__values__.length,
            n = r ? t : this.__values__[this.__index__++];
          return { done: r, value: n };
        }
        function $1() {
          return this;
        }
        function F1(r) {
          for (var n, a = this; a instanceof _o; ) {
            var h = Il(a);
            (h.__index__ = 0),
              (h.__values__ = t),
              n ? (y.__wrapped__ = h) : (n = h);
            var y = h;
            a = a.__wrapped__;
          }
          return (y.__wrapped__ = r), n;
        }
        function L1() {
          var r = this.__wrapped__;
          if (r instanceof Ye) {
            var n = r;
            return (
              this.__actions__.length && (n = new Ye(this)),
              (n = n.reverse()),
              n.__actions__.push({ func: No, args: [Ic], thisArg: t }),
              new $r(n, this.__chain__)
            );
          }
          return this.thru(Ic);
        }
        function U1() {
          return Wh(this.__wrapped__, this.__actions__);
        }
        var j1 = Io(function (r, n, a) {
          nt.call(r, a) ? ++r[a] : hi(r, a, 1);
        });
        function M1(r, n, a) {
          var h = Re(r) ? ah : C0;
          return a && sr(r, n, a) && (n = t), h(r, me(n, 3));
        }
        function q1(r, n) {
          var a = Re(r) ? Oi : Th;
          return a(r, me(n, 3));
        }
        var z1 = sl(xl),
          B1 = sl(Ol);
        function H1(r, n) {
          return Wt($o(r, n), 1);
        }
        function K1(r, n) {
          return Wt($o(r, n), re);
        }
        function k1(r, n, a) {
          return (a = a === t ? 1 : je(a)), Wt($o(r, n), a);
        }
        function Nl(r, n) {
          var a = Re(r) ? Rr : Ti;
          return a(r, me(n, 3));
        }
        function $l(r, n) {
          var a = Re(r) ? hg : Ah;
          return a(r, me(n, 3));
        }
        var V1 = Io(function (r, n, a) {
          nt.call(r, a) ? r[a].push(n) : hi(r, a, [n]);
        });
        function G1(r, n, a, h) {
          (r = gr(r) ? r : Rn(r)), (a = a && !h ? je(a) : 0);
          var y = r.length;
          return (
            a < 0 && (a = Ht(y + a, 0)),
            Mo(r) ? a <= y && r.indexOf(n, a) > -1 : !!y && wn(r, n, a) > -1
          );
        }
        var W1 = Ke(function (r, n, a) {
            var h = -1,
              y = typeof n == "function",
              m = gr(r) ? H(r.length) : [];
            return (
              Ti(r, function (x) {
                m[++h] = y ? Kt(n, x, a) : ns(x, n, a);
              }),
              m
            );
          }),
          Y1 = Io(function (r, n, a) {
            hi(r, a, n);
          });
        function $o(r, n) {
          var a = Re(r) ? _t : Uh;
          return a(r, me(n, 3));
        }
        function J1(r, n, a, h) {
          return r == null
            ? []
            : (Re(n) || (n = n == null ? [] : [n]),
              (a = h ? t : a),
              Re(a) || (a = a == null ? [] : [a]),
              zh(r, n, a));
        }
        var Q1 = Io(
          function (r, n, a) {
            r[a ? 0 : 1].push(n);
          },
          function () {
            return [[], []];
          }
        );
        function X1(r, n, a) {
          var h = Re(r) ? ja : lh,
            y = arguments.length < 3;
          return h(r, me(n, 4), a, y, Ti);
        }
        function Z1(r, n, a) {
          var h = Re(r) ? lg : lh,
            y = arguments.length < 3;
          return h(r, me(n, 4), a, y, Ah);
        }
        function ev(r, n) {
          var a = Re(r) ? Oi : Th;
          return a(r, Uo(me(n, 3)));
        }
        function tv(r) {
          var n = Re(r) ? xh : G0;
          return n(r);
        }
        function rv(r, n, a) {
          (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = je(n));
          var h = Re(r) ? S0 : W0;
          return h(r, n);
        }
        function iv(r) {
          var n = Re(r) ? I0 : J0;
          return n(r);
        }
        function nv(r) {
          if (r == null) return 0;
          if (gr(r)) return Mo(r) ? En(r) : r.length;
          var n = Xt(r);
          return n == Se || n == Ie ? r.size : ic(r).length;
        }
        function sv(r, n, a) {
          var h = Re(r) ? Ma : Q0;
          return a && sr(r, n, a) && (n = t), h(r, me(n, 3));
        }
        var ov = Ke(function (r, n) {
            if (r == null) return [];
            var a = n.length;
            return (
              a > 1 && sr(r, n[0], n[1])
                ? (n = [])
                : a > 2 && sr(n[0], n[1], n[2]) && (n = [n[0]]),
              zh(r, Wt(n, 1), [])
            );
          }),
          Fo =
            qg ||
            function () {
              return Xe.Date.now();
            };
        function av(r, n) {
          if (typeof n != "function") throw new Nr(l);
          return (
            (r = je(r)),
            function () {
              if (--r < 1) return n.apply(this, arguments);
            }
          );
        }
        function Fl(r, n, a) {
          return (
            (n = a ? t : n),
            (n = r && n == null ? r.length : n),
            li(r, u, t, t, t, t, n)
          );
        }
        function Ll(r, n) {
          var a;
          if (typeof n != "function") throw new Nr(l);
          return (
            (r = je(r)),
            function () {
              return (
                --r > 0 && (a = n.apply(this, arguments)), r <= 1 && (n = t), a
              );
            }
          );
        }
        var Oc = Ke(function (r, n, a) {
            var h = K;
            if (a.length) {
              var y = Ci(a, An(Oc));
              h |= P;
            }
            return li(r, h, n, a, y);
          }),
          Ul = Ke(function (r, n, a) {
            var h = K | ee;
            if (a.length) {
              var y = Ci(a, An(Ul));
              h |= P;
            }
            return li(n, h, r, a, y);
          });
        function jl(r, n, a) {
          n = a ? t : n;
          var h = li(r, U, t, t, t, t, t, n);
          return (h.placeholder = jl.placeholder), h;
        }
        function Ml(r, n, a) {
          n = a ? t : n;
          var h = li(r, O, t, t, t, t, t, n);
          return (h.placeholder = Ml.placeholder), h;
        }
        function ql(r, n, a) {
          var h,
            y,
            m,
            x,
            T,
            j,
            J = 0,
            Q = !1,
            Z = !1,
            ce = !0;
          if (typeof r != "function") throw new Nr(l);
          (n = jr(n) || 0),
            Et(a) &&
              ((Q = !!a.leading),
              (Z = "maxWait" in a),
              (m = Z ? Ht(jr(a.maxWait) || 0, n) : m),
              (ce = "trailing" in a ? !!a.trailing : ce));
          function ye(Nt) {
            var Vr = h,
              yi = y;
            return (h = y = t), (J = Nt), (x = r.apply(yi, Vr)), x;
          }
          function be(Nt) {
            return (J = Nt), (T = us(Ge, n)), Q ? ye(Nt) : x;
          }
          function ze(Nt) {
            var Vr = Nt - j,
              yi = Nt - J,
              of = n - Vr;
            return Z ? Qt(of, m - yi) : of;
          }
          function Ee(Nt) {
            var Vr = Nt - j,
              yi = Nt - J;
            return j === t || Vr >= n || Vr < 0 || (Z && yi >= m);
          }
          function Ge() {
            var Nt = Fo();
            if (Ee(Nt)) return Ze(Nt);
            T = us(Ge, ze(Nt));
          }
          function Ze(Nt) {
            return (T = t), ce && h ? ye(Nt) : ((h = y = t), x);
          }
          function Ir() {
            T !== t && Jh(T), (J = 0), (h = j = y = T = t);
          }
          function or() {
            return T === t ? x : Ze(Fo());
          }
          function xr() {
            var Nt = Fo(),
              Vr = Ee(Nt);
            if (((h = arguments), (y = this), (j = Nt), Vr)) {
              if (T === t) return be(j);
              if (Z) return Jh(T), (T = us(Ge, n)), ye(j);
            }
            return T === t && (T = us(Ge, n)), x;
          }
          return (xr.cancel = Ir), (xr.flush = or), xr;
        }
        var cv = Ke(function (r, n) {
            return Ch(r, 1, n);
          }),
          uv = Ke(function (r, n, a) {
            return Ch(r, jr(n) || 0, a);
          });
        function hv(r) {
          return li(r, k);
        }
        function Lo(r, n) {
          if (typeof r != "function" || (n != null && typeof n != "function"))
            throw new Nr(l);
          var a = function () {
            var h = arguments,
              y = n ? n.apply(this, h) : h[0],
              m = a.cache;
            if (m.has(y)) return m.get(y);
            var x = r.apply(this, h);
            return (a.cache = m.set(y, x) || m), x;
          };
          return (a.cache = new (Lo.Cache || ui)()), a;
        }
        Lo.Cache = ui;
        function Uo(r) {
          if (typeof r != "function") throw new Nr(l);
          return function () {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !r.call(this);
              case 1:
                return !r.call(this, n[0]);
              case 2:
                return !r.call(this, n[0], n[1]);
              case 3:
                return !r.call(this, n[0], n[1], n[2]);
            }
            return !r.apply(this, n);
          };
        }
        function lv(r) {
          return Ll(2, r);
        }
        var fv = X0(function (r, n) {
            n =
              n.length == 1 && Re(n[0])
                ? _t(n[0], Er(me()))
                : _t(Wt(n, 1), Er(me()));
            var a = n.length;
            return Ke(function (h) {
              for (var y = -1, m = Qt(h.length, a); ++y < m; )
                h[y] = n[y].call(this, h[y]);
              return Kt(r, this, h);
            });
          }),
          Pc = Ke(function (r, n) {
            var a = Ci(n, An(Pc));
            return li(r, P, t, n, a);
          }),
          zl = Ke(function (r, n) {
            var a = Ci(n, An(zl));
            return li(r, b, t, n, a);
          }),
          dv = fi(function (r, n) {
            return li(r, w, t, t, t, n);
          });
        function pv(r, n) {
          if (typeof r != "function") throw new Nr(l);
          return (n = n === t ? n : je(n)), Ke(r, n);
        }
        function gv(r, n) {
          if (typeof r != "function") throw new Nr(l);
          return (
            (n = n == null ? 0 : Ht(je(n), 0)),
            Ke(function (a) {
              var h = a[n],
                y = $i(a, 0, n);
              return h && Pi(y, h), Kt(r, this, y);
            })
          );
        }
        function yv(r, n, a) {
          var h = !0,
            y = !0;
          if (typeof r != "function") throw new Nr(l);
          return (
            Et(a) &&
              ((h = "leading" in a ? !!a.leading : h),
              (y = "trailing" in a ? !!a.trailing : y)),
            ql(r, n, { leading: h, maxWait: n, trailing: y })
          );
        }
        function vv(r) {
          return Fl(r, 1);
        }
        function _v(r, n) {
          return Pc(fc(n), r);
        }
        function mv() {
          if (!arguments.length) return [];
          var r = arguments[0];
          return Re(r) ? r : [r];
        }
        function wv(r) {
          return Fr(r, I);
        }
        function bv(r, n) {
          return (n = typeof n == "function" ? n : t), Fr(r, I, n);
        }
        function Ev(r) {
          return Fr(r, D | I);
        }
        function Dv(r, n) {
          return (n = typeof n == "function" ? n : t), Fr(r, D | I, n);
        }
        function Sv(r, n) {
          return n == null || Ph(r, n, kt(n));
        }
        function kr(r, n) {
          return r === n || (r !== r && n !== n);
        }
        var Iv = Co(ec),
          xv = Co(function (r, n) {
            return r >= n;
          }),
          en = $h(
            (function () {
              return arguments;
            })()
          )
            ? $h
            : function (r) {
                return Ct(r) && nt.call(r, "callee") && !wh.call(r, "callee");
              },
          Re = H.isArray,
          Ov = ir ? Er(ir) : F0;
        function gr(r) {
          return r != null && jo(r.length) && !pi(r);
        }
        function Rt(r) {
          return Ct(r) && gr(r);
        }
        function Pv(r) {
          return r === !0 || r === !1 || (Ct(r) && nr(r) == M);
        }
        var Fi = Bg || Mc,
          Cv = Br ? Er(Br) : L0;
        function Av(r) {
          return Ct(r) && r.nodeType === 1 && !hs(r);
        }
        function Tv(r) {
          if (r == null) return !0;
          if (
            gr(r) &&
            (Re(r) ||
              typeof r == "string" ||
              typeof r.splice == "function" ||
              Fi(r) ||
              Tn(r) ||
              en(r))
          )
            return !r.length;
          var n = Xt(r);
          if (n == Se || n == Ie) return !r.size;
          if (cs(r)) return !ic(r).length;
          for (var a in r) if (nt.call(r, a)) return !1;
          return !0;
        }
        function Rv(r, n) {
          return ss(r, n);
        }
        function Nv(r, n, a) {
          a = typeof a == "function" ? a : t;
          var h = a ? a(r, n) : t;
          return h === t ? ss(r, n, t, a) : !!h;
        }
        function Cc(r) {
          if (!Ct(r)) return !1;
          var n = nr(r);
          return (
            n == A ||
            n == d ||
            (typeof r.message == "string" &&
              typeof r.name == "string" &&
              !hs(r))
          );
        }
        function $v(r) {
          return typeof r == "number" && Eh(r);
        }
        function pi(r) {
          if (!Et(r)) return !1;
          var n = nr(r);
          return n == se || n == fe || n == z || n == gt;
        }
        function Bl(r) {
          return typeof r == "number" && r == je(r);
        }
        function jo(r) {
          return typeof r == "number" && r > -1 && r % 1 == 0 && r <= W;
        }
        function Et(r) {
          var n = typeof r;
          return r != null && (n == "object" || n == "function");
        }
        function Ct(r) {
          return r != null && typeof r == "object";
        }
        var Hl = Tr ? Er(Tr) : j0;
        function Fv(r, n) {
          return r === n || rc(r, n, mc(n));
        }
        function Lv(r, n, a) {
          return (a = typeof a == "function" ? a : t), rc(r, n, mc(n), a);
        }
        function Uv(r) {
          return Kl(r) && r != +r;
        }
        function jv(r) {
          if (by(r)) throw new Ae(c);
          return Fh(r);
        }
        function Mv(r) {
          return r === null;
        }
        function qv(r) {
          return r == null;
        }
        function Kl(r) {
          return typeof r == "number" || (Ct(r) && nr(r) == Be);
        }
        function hs(r) {
          if (!Ct(r) || nr(r) != Ue) return !1;
          var n = ho(r);
          if (n === null) return !0;
          var a = nt.call(n, "constructor") && n.constructor;
          return typeof a == "function" && a instanceof a && oo.call(a) == Lg;
        }
        var Ac = Qr ? Er(Qr) : M0;
        function zv(r) {
          return Bl(r) && r >= -W && r <= W;
        }
        var kl = Yn ? Er(Yn) : q0;
        function Mo(r) {
          return typeof r == "string" || (!Re(r) && Ct(r) && nr(r) == Ne);
        }
        function Sr(r) {
          return typeof r == "symbol" || (Ct(r) && nr(r) == $e);
        }
        var Tn = Vi ? Er(Vi) : z0;
        function Bv(r) {
          return r === t;
        }
        function Hv(r) {
          return Ct(r) && Xt(r) == Pe;
        }
        function Kv(r) {
          return Ct(r) && nr(r) == Fe;
        }
        var kv = Co(nc),
          Vv = Co(function (r, n) {
            return r <= n;
          });
        function Vl(r) {
          if (!r) return [];
          if (gr(r)) return Mo(r) ? Hr(r) : pr(r);
          if (Qn && r[Qn]) return Sg(r[Qn]());
          var n = Xt(r),
            a = n == Se ? ka : n == Ie ? io : Rn;
          return a(r);
        }
        function gi(r) {
          if (!r) return r === 0 ? r : 0;
          if (((r = jr(r)), r === re || r === -re)) {
            var n = r < 0 ? -1 : 1;
            return n * te;
          }
          return r === r ? r : 0;
        }
        function je(r) {
          var n = gi(r),
            a = n % 1;
          return n === n ? (a ? n - a : n) : 0;
        }
        function Gl(r) {
          return r ? Ji(je(r), 0, ie) : 0;
        }
        function jr(r) {
          if (typeof r == "number") return r;
          if (Sr(r)) return Y;
          if (Et(r)) {
            var n = typeof r.valueOf == "function" ? r.valueOf() : r;
            r = Et(n) ? n + "" : n;
          }
          if (typeof r != "string") return r === 0 ? r : +r;
          r = fh(r);
          var a = wa.test(r);
          return a || Ea.test(r)
            ? Te(r.slice(2), a ? 2 : 8)
            : ma.test(r)
            ? Y
            : +r;
        }
        function Wl(r) {
          return Zr(r, yr(r));
        }
        function Gv(r) {
          return r ? Ji(je(r), -W, W) : r === 0 ? r : 0;
        }
        function it(r) {
          return r == null ? "" : Dr(r);
        }
        var Wv = Pn(function (r, n) {
            if (cs(n) || gr(n)) {
              Zr(n, kt(n), r);
              return;
            }
            for (var a in n) nt.call(n, a) && rs(r, a, n[a]);
          }),
          Yl = Pn(function (r, n) {
            Zr(n, yr(n), r);
          }),
          qo = Pn(function (r, n, a, h) {
            Zr(n, yr(n), r, h);
          }),
          Yv = Pn(function (r, n, a, h) {
            Zr(n, kt(n), r, h);
          }),
          Jv = fi(Qa);
        function Qv(r, n) {
          var a = On(r);
          return n == null ? a : Oh(a, n);
        }
        var Xv = Ke(function (r, n) {
            r = ut(r);
            var a = -1,
              h = n.length,
              y = h > 2 ? n[2] : t;
            for (y && sr(n[0], n[1], y) && (h = 1); ++a < h; )
              for (var m = n[a], x = yr(m), T = -1, j = x.length; ++T < j; ) {
                var J = x[T],
                  Q = r[J];
                (Q === t || (kr(Q, Sn[J]) && !nt.call(r, J))) && (r[J] = m[J]);
              }
            return r;
          }),
          Zv = Ke(function (r) {
            return r.push(t, fl), Kt(Jl, t, r);
          });
        function e_(r, n) {
          return ch(r, me(n, 3), Xr);
        }
        function t_(r, n) {
          return ch(r, me(n, 3), Za);
        }
        function r_(r, n) {
          return r == null ? r : Xa(r, me(n, 3), yr);
        }
        function i_(r, n) {
          return r == null ? r : Rh(r, me(n, 3), yr);
        }
        function n_(r, n) {
          return r && Xr(r, me(n, 3));
        }
        function s_(r, n) {
          return r && Za(r, me(n, 3));
        }
        function o_(r) {
          return r == null ? [] : bo(r, kt(r));
        }
        function a_(r) {
          return r == null ? [] : bo(r, yr(r));
        }
        function Tc(r, n, a) {
          var h = r == null ? t : Qi(r, n);
          return h === t ? a : h;
        }
        function c_(r, n) {
          return r != null && gl(r, n, T0);
        }
        function Rc(r, n) {
          return r != null && gl(r, n, R0);
        }
        var u_ = al(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = ao.call(n)),
              (r[n] = a);
          }, $c(vr)),
          h_ = al(function (r, n, a) {
            n != null && typeof n.toString != "function" && (n = ao.call(n)),
              nt.call(r, n) ? r[n].push(a) : (r[n] = [a]);
          }, me),
          l_ = Ke(ns);
        function kt(r) {
          return gr(r) ? Ih(r) : ic(r);
        }
        function yr(r) {
          return gr(r) ? Ih(r, !0) : B0(r);
        }
        function f_(r, n) {
          var a = {};
          return (
            (n = me(n, 3)),
            Xr(r, function (h, y, m) {
              hi(a, n(h, y, m), h);
            }),
            a
          );
        }
        function d_(r, n) {
          var a = {};
          return (
            (n = me(n, 3)),
            Xr(r, function (h, y, m) {
              hi(a, y, n(h, y, m));
            }),
            a
          );
        }
        var p_ = Pn(function (r, n, a) {
            Eo(r, n, a);
          }),
          Jl = Pn(function (r, n, a, h) {
            Eo(r, n, a, h);
          }),
          g_ = fi(function (r, n) {
            var a = {};
            if (r == null) return a;
            var h = !1;
            (n = _t(n, function (m) {
              return (m = Ni(m, r)), h || (h = m.length > 1), m;
            })),
              Zr(r, vc(r), a),
              h && (a = Fr(a, D | E | I, uy));
            for (var y = n.length; y--; ) uc(a, n[y]);
            return a;
          });
        function y_(r, n) {
          return Ql(r, Uo(me(n)));
        }
        var v_ = fi(function (r, n) {
          return r == null ? {} : K0(r, n);
        });
        function Ql(r, n) {
          if (r == null) return {};
          var a = _t(vc(r), function (h) {
            return [h];
          });
          return (
            (n = me(n)),
            Bh(r, a, function (h, y) {
              return n(h, y[0]);
            })
          );
        }
        function __(r, n, a) {
          n = Ni(n, r);
          var h = -1,
            y = n.length;
          for (y || ((y = 1), (r = t)); ++h < y; ) {
            var m = r == null ? t : r[ei(n[h])];
            m === t && ((h = y), (m = a)), (r = pi(m) ? m.call(r) : m);
          }
          return r;
        }
        function m_(r, n, a) {
          return r == null ? r : os(r, n, a);
        }
        function w_(r, n, a, h) {
          return (
            (h = typeof h == "function" ? h : t), r == null ? r : os(r, n, a, h)
          );
        }
        var Xl = hl(kt),
          Zl = hl(yr);
        function b_(r, n, a) {
          var h = Re(r),
            y = h || Fi(r) || Tn(r);
          if (((n = me(n, 4)), a == null)) {
            var m = r && r.constructor;
            y
              ? (a = h ? new m() : [])
              : Et(r)
              ? (a = pi(m) ? On(ho(r)) : {})
              : (a = {});
          }
          return (
            (y ? Rr : Xr)(r, function (x, T, j) {
              return n(a, x, T, j);
            }),
            a
          );
        }
        function E_(r, n) {
          return r == null ? !0 : uc(r, n);
        }
        function D_(r, n, a) {
          return r == null ? r : Gh(r, n, fc(a));
        }
        function S_(r, n, a, h) {
          return (
            (h = typeof h == "function" ? h : t),
            r == null ? r : Gh(r, n, fc(a), h)
          );
        }
        function Rn(r) {
          return r == null ? [] : Ka(r, kt(r));
        }
        function I_(r) {
          return r == null ? [] : Ka(r, yr(r));
        }
        function x_(r, n, a) {
          return (
            a === t && ((a = n), (n = t)),
            a !== t && ((a = jr(a)), (a = a === a ? a : 0)),
            n !== t && ((n = jr(n)), (n = n === n ? n : 0)),
            Ji(jr(r), n, a)
          );
        }
        function O_(r, n, a) {
          return (
            (n = gi(n)),
            a === t ? ((a = n), (n = 0)) : (a = gi(a)),
            (r = jr(r)),
            N0(r, n, a)
          );
        }
        function P_(r, n, a) {
          if (
            (a && typeof a != "boolean" && sr(r, n, a) && (n = a = t),
            a === t &&
              (typeof n == "boolean"
                ? ((a = n), (n = t))
                : typeof r == "boolean" && ((a = r), (r = t))),
            r === t && n === t
              ? ((r = 0), (n = 1))
              : ((r = gi(r)), n === t ? ((n = r), (r = 0)) : (n = gi(n))),
            r > n)
          ) {
            var h = r;
            (r = n), (n = h);
          }
          if (a || r % 1 || n % 1) {
            var y = Dh();
            return Qt(r + y * (n - r + at("1e-" + ((y + "").length - 1))), n);
          }
          return oc(r, n);
        }
        var C_ = Cn(function (r, n, a) {
          return (n = n.toLowerCase()), r + (a ? ef(n) : n);
        });
        function ef(r) {
          return Nc(it(r).toLowerCase());
        }
        function tf(r) {
          return (r = it(r)), r && r.replace(oi, mg).replace(Fa, "");
        }
        function A_(r, n, a) {
          (r = it(r)), (n = Dr(n));
          var h = r.length;
          a = a === t ? h : Ji(je(a), 0, h);
          var y = a;
          return (a -= n.length), a >= 0 && r.slice(a, y) == n;
        }
        function T_(r) {
          return (r = it(r)), r && yt.test(r) ? r.replace(zi, wg) : r;
        }
        function R_(r) {
          return (r = it(r)), r && Ut.test(r) ? r.replace(xt, "\\$&") : r;
        }
        var N_ = Cn(function (r, n, a) {
            return r + (a ? "-" : "") + n.toLowerCase();
          }),
          $_ = Cn(function (r, n, a) {
            return r + (a ? " " : "") + n.toLowerCase();
          }),
          F_ = nl("toLowerCase");
        function L_(r, n, a) {
          (r = it(r)), (n = je(n));
          var h = n ? En(r) : 0;
          if (!n || h >= n) return r;
          var y = (n - h) / 2;
          return Po(go(y), a) + r + Po(po(y), a);
        }
        function U_(r, n, a) {
          (r = it(r)), (n = je(n));
          var h = n ? En(r) : 0;
          return n && h < n ? r + Po(n - h, a) : r;
        }
        function j_(r, n, a) {
          (r = it(r)), (n = je(n));
          var h = n ? En(r) : 0;
          return n && h < n ? Po(n - h, a) + r : r;
        }
        function M_(r, n, a) {
          return (
            a || n == null ? (n = 0) : n && (n = +n),
            Vg(it(r).replace(Ot, ""), n || 0)
          );
        }
        function q_(r, n, a) {
          return (
            (a ? sr(r, n, a) : n === t) ? (n = 1) : (n = je(n)), ac(it(r), n)
          );
        }
        function z_() {
          var r = arguments,
            n = it(r[0]);
          return r.length < 3 ? n : n.replace(r[1], r[2]);
        }
        var B_ = Cn(function (r, n, a) {
          return r + (a ? "_" : "") + n.toLowerCase();
        });
        function H_(r, n, a) {
          return (
            a && typeof a != "number" && sr(r, n, a) && (n = a = t),
            (a = a === t ? ie : a >>> 0),
            a
              ? ((r = it(r)),
                r &&
                (typeof n == "string" || (n != null && !Ac(n))) &&
                ((n = Dr(n)), !n && bn(r))
                  ? $i(Hr(r), 0, a)
                  : r.split(n, a))
              : []
          );
        }
        var K_ = Cn(function (r, n, a) {
          return r + (a ? " " : "") + Nc(n);
        });
        function k_(r, n, a) {
          return (
            (r = it(r)),
            (a = a == null ? 0 : Ji(je(a), 0, r.length)),
            (n = Dr(n)),
            r.slice(a, a + n.length) == n
          );
        }
        function V_(r, n, a) {
          var h = _.templateSettings;
          a && sr(r, n, a) && (n = t), (r = it(r)), (n = qo({}, n, h, ll));
          var y = qo({}, n.imports, h.imports, ll),
            m = kt(y),
            x = Ka(y, m),
            T,
            j,
            J = 0,
            Q = n.interpolate || dn,
            Z = "__p += '",
            ce = Va(
              (n.escape || dn).source +
                "|" +
                Q.source +
                "|" +
                (Q === bt ? _a : dn).source +
                "|" +
                (n.evaluate || dn).source +
                "|$",
              "g"
            ),
            ye =
              "//# sourceURL=" +
              (nt.call(n, "sourceURL")
                ? (n.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++La + "]") +
              `
`;
          r.replace(ce, function (Ee, Ge, Ze, Ir, or, xr) {
            return (
              Ze || (Ze = Ir),
              (Z += r.slice(J, xr).replace(Sa, bg)),
              Ge &&
                ((T = !0),
                (Z +=
                  `' +
__e(` +
                  Ge +
                  `) +
'`)),
              or &&
                ((j = !0),
                (Z +=
                  `';
` +
                  or +
                  `;
__p += '`)),
              Ze &&
                (Z +=
                  `' +
((__t = (` +
                  Ze +
                  `)) == null ? '' : __t) +
'`),
              (J = xr + Ee.length),
              Ee
            );
          }),
            (Z += `';
`);
          var be = nt.call(n, "variable") && n.variable;
          if (!be)
            Z =
              `with (obj) {
` +
              Z +
              `
}
`;
          else if (ya.test(be)) throw new Ae(f);
          (Z = (j ? Z.replace(Yr, "") : Z)
            .replace(rr, "$1")
            .replace(si, "$1;")),
            (Z =
              "function(" +
              (be || "obj") +
              `) {
` +
              (be
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (T ? ", __e = _.escape" : "") +
              (j
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Z +
              `return __p
}`);
          var ze = nf(function () {
            return rt(m, ye + "return " + Z).apply(t, x);
          });
          if (((ze.source = Z), Cc(ze))) throw ze;
          return ze;
        }
        function G_(r) {
          return it(r).toLowerCase();
        }
        function W_(r) {
          return it(r).toUpperCase();
        }
        function Y_(r, n, a) {
          if (((r = it(r)), r && (a || n === t))) return fh(r);
          if (!r || !(n = Dr(n))) return r;
          var h = Hr(r),
            y = Hr(n),
            m = dh(h, y),
            x = ph(h, y) + 1;
          return $i(h, m, x).join("");
        }
        function J_(r, n, a) {
          if (((r = it(r)), r && (a || n === t))) return r.slice(0, yh(r) + 1);
          if (!r || !(n = Dr(n))) return r;
          var h = Hr(r),
            y = ph(h, Hr(n)) + 1;
          return $i(h, 0, y).join("");
        }
        function Q_(r, n, a) {
          if (((r = it(r)), r && (a || n === t))) return r.replace(Ot, "");
          if (!r || !(n = Dr(n))) return r;
          var h = Hr(r),
            y = dh(h, Hr(n));
          return $i(h, y).join("");
        }
        function X_(r, n) {
          var a = G,
            h = oe;
          if (Et(n)) {
            var y = "separator" in n ? n.separator : y;
            (a = "length" in n ? je(n.length) : a),
              (h = "omission" in n ? Dr(n.omission) : h);
          }
          r = it(r);
          var m = r.length;
          if (bn(r)) {
            var x = Hr(r);
            m = x.length;
          }
          if (a >= m) return r;
          var T = a - En(h);
          if (T < 1) return h;
          var j = x ? $i(x, 0, T).join("") : r.slice(0, T);
          if (y === t) return j + h;
          if ((x && (T += j.length - T), Ac(y))) {
            if (r.slice(T).search(y)) {
              var J,
                Q = j;
              for (
                y.global || (y = Va(y.source, it(Ar.exec(y)) + "g")),
                  y.lastIndex = 0;
                (J = y.exec(Q));

              )
                var Z = J.index;
              j = j.slice(0, Z === t ? T : Z);
            }
          } else if (r.indexOf(Dr(y), T) != T) {
            var ce = j.lastIndexOf(y);
            ce > -1 && (j = j.slice(0, ce));
          }
          return j + h;
        }
        function Z_(r) {
          return (r = it(r)), r && Dt.test(r) ? r.replace(Ii, Pg) : r;
        }
        var em = Cn(function (r, n, a) {
            return r + (a ? " " : "") + n.toUpperCase();
          }),
          Nc = nl("toUpperCase");
        function rf(r, n, a) {
          return (
            (r = it(r)),
            (n = a ? t : n),
            n === t ? (Dg(r) ? Tg(r) : pg(r)) : r.match(n) || []
          );
        }
        var nf = Ke(function (r, n) {
            try {
              return Kt(r, t, n);
            } catch (a) {
              return Cc(a) ? a : new Ae(a);
            }
          }),
          tm = fi(function (r, n) {
            return (
              Rr(n, function (a) {
                (a = ei(a)), hi(r, a, Oc(r[a], r));
              }),
              r
            );
          });
        function rm(r) {
          var n = r == null ? 0 : r.length,
            a = me();
          return (
            (r = n
              ? _t(r, function (h) {
                  if (typeof h[1] != "function") throw new Nr(l);
                  return [a(h[0]), h[1]];
                })
              : []),
            Ke(function (h) {
              for (var y = -1; ++y < n; ) {
                var m = r[y];
                if (Kt(m[0], this, h)) return Kt(m[1], this, h);
              }
            })
          );
        }
        function im(r) {
          return P0(Fr(r, D));
        }
        function $c(r) {
          return function () {
            return r;
          };
        }
        function nm(r, n) {
          return r == null || r !== r ? n : r;
        }
        var sm = ol(),
          om = ol(!0);
        function vr(r) {
          return r;
        }
        function Fc(r) {
          return Lh(typeof r == "function" ? r : Fr(r, D));
        }
        function am(r) {
          return jh(Fr(r, D));
        }
        function cm(r, n) {
          return Mh(r, Fr(n, D));
        }
        var um = Ke(function (r, n) {
            return function (a) {
              return ns(a, r, n);
            };
          }),
          hm = Ke(function (r, n) {
            return function (a) {
              return ns(r, a, n);
            };
          });
        function Lc(r, n, a) {
          var h = kt(n),
            y = bo(n, h);
          a == null &&
            !(Et(n) && (y.length || !h.length)) &&
            ((a = n), (n = r), (r = this), (y = bo(n, kt(n))));
          var m = !(Et(a) && "chain" in a) || !!a.chain,
            x = pi(r);
          return (
            Rr(y, function (T) {
              var j = n[T];
              (r[T] = j),
                x &&
                  (r.prototype[T] = function () {
                    var J = this.__chain__;
                    if (m || J) {
                      var Q = r(this.__wrapped__),
                        Z = (Q.__actions__ = pr(this.__actions__));
                      return (
                        Z.push({ func: j, args: arguments, thisArg: r }),
                        (Q.__chain__ = J),
                        Q
                      );
                    }
                    return j.apply(r, Pi([this.value()], arguments));
                  });
            }),
            r
          );
        }
        function lm() {
          return Xe._ === this && (Xe._ = Ug), this;
        }
        function Uc() {}
        function fm(r) {
          return (
            (r = je(r)),
            Ke(function (n) {
              return qh(n, r);
            })
          );
        }
        var dm = pc(_t),
          pm = pc(ah),
          gm = pc(Ma);
        function sf(r) {
          return bc(r) ? qa(ei(r)) : k0(r);
        }
        function ym(r) {
          return function (n) {
            return r == null ? t : Qi(r, n);
          };
        }
        var vm = cl(),
          _m = cl(!0);
        function jc() {
          return [];
        }
        function Mc() {
          return !1;
        }
        function mm() {
          return {};
        }
        function wm() {
          return "";
        }
        function bm() {
          return !0;
        }
        function Em(r, n) {
          if (((r = je(r)), r < 1 || r > W)) return [];
          var a = ie,
            h = Qt(r, ie);
          (n = me(n)), (r -= ie);
          for (var y = Ha(h, n); ++a < r; ) n(a);
          return y;
        }
        function Dm(r) {
          return Re(r) ? _t(r, ei) : Sr(r) ? [r] : pr(Sl(it(r)));
        }
        function Sm(r) {
          var n = ++Fg;
          return it(r) + n;
        }
        var Im = Oo(function (r, n) {
            return r + n;
          }, 0),
          xm = gc("ceil"),
          Om = Oo(function (r, n) {
            return r / n;
          }, 1),
          Pm = gc("floor");
        function Cm(r) {
          return r && r.length ? wo(r, vr, ec) : t;
        }
        function Am(r, n) {
          return r && r.length ? wo(r, me(n, 2), ec) : t;
        }
        function Tm(r) {
          return hh(r, vr);
        }
        function Rm(r, n) {
          return hh(r, me(n, 2));
        }
        function Nm(r) {
          return r && r.length ? wo(r, vr, nc) : t;
        }
        function $m(r, n) {
          return r && r.length ? wo(r, me(n, 2), nc) : t;
        }
        var Fm = Oo(function (r, n) {
            return r * n;
          }, 1),
          Lm = gc("round"),
          Um = Oo(function (r, n) {
            return r - n;
          }, 0);
        function jm(r) {
          return r && r.length ? Ba(r, vr) : 0;
        }
        function Mm(r, n) {
          return r && r.length ? Ba(r, me(n, 2)) : 0;
        }
        return (
          (_.after = av),
          (_.ary = Fl),
          (_.assign = Wv),
          (_.assignIn = Yl),
          (_.assignInWith = qo),
          (_.assignWith = Yv),
          (_.at = Jv),
          (_.before = Ll),
          (_.bind = Oc),
          (_.bindAll = tm),
          (_.bindKey = Ul),
          (_.castArray = mv),
          (_.chain = Rl),
          (_.chunk = Py),
          (_.compact = Cy),
          (_.concat = Ay),
          (_.cond = rm),
          (_.conforms = im),
          (_.constant = $c),
          (_.countBy = j1),
          (_.create = Qv),
          (_.curry = jl),
          (_.curryRight = Ml),
          (_.debounce = ql),
          (_.defaults = Xv),
          (_.defaultsDeep = Zv),
          (_.defer = cv),
          (_.delay = uv),
          (_.difference = Ty),
          (_.differenceBy = Ry),
          (_.differenceWith = Ny),
          (_.drop = $y),
          (_.dropRight = Fy),
          (_.dropRightWhile = Ly),
          (_.dropWhile = Uy),
          (_.fill = jy),
          (_.filter = q1),
          (_.flatMap = H1),
          (_.flatMapDeep = K1),
          (_.flatMapDepth = k1),
          (_.flatten = Pl),
          (_.flattenDeep = My),
          (_.flattenDepth = qy),
          (_.flip = hv),
          (_.flow = sm),
          (_.flowRight = om),
          (_.fromPairs = zy),
          (_.functions = o_),
          (_.functionsIn = a_),
          (_.groupBy = V1),
          (_.initial = Hy),
          (_.intersection = Ky),
          (_.intersectionBy = ky),
          (_.intersectionWith = Vy),
          (_.invert = u_),
          (_.invertBy = h_),
          (_.invokeMap = W1),
          (_.iteratee = Fc),
          (_.keyBy = Y1),
          (_.keys = kt),
          (_.keysIn = yr),
          (_.map = $o),
          (_.mapKeys = f_),
          (_.mapValues = d_),
          (_.matches = am),
          (_.matchesProperty = cm),
          (_.memoize = Lo),
          (_.merge = p_),
          (_.mergeWith = Jl),
          (_.method = um),
          (_.methodOf = hm),
          (_.mixin = Lc),
          (_.negate = Uo),
          (_.nthArg = fm),
          (_.omit = g_),
          (_.omitBy = y_),
          (_.once = lv),
          (_.orderBy = J1),
          (_.over = dm),
          (_.overArgs = fv),
          (_.overEvery = pm),
          (_.overSome = gm),
          (_.partial = Pc),
          (_.partialRight = zl),
          (_.partition = Q1),
          (_.pick = v_),
          (_.pickBy = Ql),
          (_.property = sf),
          (_.propertyOf = ym),
          (_.pull = Jy),
          (_.pullAll = Al),
          (_.pullAllBy = Qy),
          (_.pullAllWith = Xy),
          (_.pullAt = Zy),
          (_.range = vm),
          (_.rangeRight = _m),
          (_.rearg = dv),
          (_.reject = ev),
          (_.remove = e1),
          (_.rest = pv),
          (_.reverse = Ic),
          (_.sampleSize = rv),
          (_.set = m_),
          (_.setWith = w_),
          (_.shuffle = iv),
          (_.slice = t1),
          (_.sortBy = ov),
          (_.sortedUniq = c1),
          (_.sortedUniqBy = u1),
          (_.split = H_),
          (_.spread = gv),
          (_.tail = h1),
          (_.take = l1),
          (_.takeRight = f1),
          (_.takeRightWhile = d1),
          (_.takeWhile = p1),
          (_.tap = C1),
          (_.throttle = yv),
          (_.thru = No),
          (_.toArray = Vl),
          (_.toPairs = Xl),
          (_.toPairsIn = Zl),
          (_.toPath = Dm),
          (_.toPlainObject = Wl),
          (_.transform = b_),
          (_.unary = vv),
          (_.union = g1),
          (_.unionBy = y1),
          (_.unionWith = v1),
          (_.uniq = _1),
          (_.uniqBy = m1),
          (_.uniqWith = w1),
          (_.unset = E_),
          (_.unzip = xc),
          (_.unzipWith = Tl),
          (_.update = D_),
          (_.updateWith = S_),
          (_.values = Rn),
          (_.valuesIn = I_),
          (_.without = b1),
          (_.words = rf),
          (_.wrap = _v),
          (_.xor = E1),
          (_.xorBy = D1),
          (_.xorWith = S1),
          (_.zip = I1),
          (_.zipObject = x1),
          (_.zipObjectDeep = O1),
          (_.zipWith = P1),
          (_.entries = Xl),
          (_.entriesIn = Zl),
          (_.extend = Yl),
          (_.extendWith = qo),
          Lc(_, _),
          (_.add = Im),
          (_.attempt = nf),
          (_.camelCase = C_),
          (_.capitalize = ef),
          (_.ceil = xm),
          (_.clamp = x_),
          (_.clone = wv),
          (_.cloneDeep = Ev),
          (_.cloneDeepWith = Dv),
          (_.cloneWith = bv),
          (_.conformsTo = Sv),
          (_.deburr = tf),
          (_.defaultTo = nm),
          (_.divide = Om),
          (_.endsWith = A_),
          (_.eq = kr),
          (_.escape = T_),
          (_.escapeRegExp = R_),
          (_.every = M1),
          (_.find = z1),
          (_.findIndex = xl),
          (_.findKey = e_),
          (_.findLast = B1),
          (_.findLastIndex = Ol),
          (_.findLastKey = t_),
          (_.floor = Pm),
          (_.forEach = Nl),
          (_.forEachRight = $l),
          (_.forIn = r_),
          (_.forInRight = i_),
          (_.forOwn = n_),
          (_.forOwnRight = s_),
          (_.get = Tc),
          (_.gt = Iv),
          (_.gte = xv),
          (_.has = c_),
          (_.hasIn = Rc),
          (_.head = Cl),
          (_.identity = vr),
          (_.includes = G1),
          (_.indexOf = By),
          (_.inRange = O_),
          (_.invoke = l_),
          (_.isArguments = en),
          (_.isArray = Re),
          (_.isArrayBuffer = Ov),
          (_.isArrayLike = gr),
          (_.isArrayLikeObject = Rt),
          (_.isBoolean = Pv),
          (_.isBuffer = Fi),
          (_.isDate = Cv),
          (_.isElement = Av),
          (_.isEmpty = Tv),
          (_.isEqual = Rv),
          (_.isEqualWith = Nv),
          (_.isError = Cc),
          (_.isFinite = $v),
          (_.isFunction = pi),
          (_.isInteger = Bl),
          (_.isLength = jo),
          (_.isMap = Hl),
          (_.isMatch = Fv),
          (_.isMatchWith = Lv),
          (_.isNaN = Uv),
          (_.isNative = jv),
          (_.isNil = qv),
          (_.isNull = Mv),
          (_.isNumber = Kl),
          (_.isObject = Et),
          (_.isObjectLike = Ct),
          (_.isPlainObject = hs),
          (_.isRegExp = Ac),
          (_.isSafeInteger = zv),
          (_.isSet = kl),
          (_.isString = Mo),
          (_.isSymbol = Sr),
          (_.isTypedArray = Tn),
          (_.isUndefined = Bv),
          (_.isWeakMap = Hv),
          (_.isWeakSet = Kv),
          (_.join = Gy),
          (_.kebabCase = N_),
          (_.last = Ur),
          (_.lastIndexOf = Wy),
          (_.lowerCase = $_),
          (_.lowerFirst = F_),
          (_.lt = kv),
          (_.lte = Vv),
          (_.max = Cm),
          (_.maxBy = Am),
          (_.mean = Tm),
          (_.meanBy = Rm),
          (_.min = Nm),
          (_.minBy = $m),
          (_.stubArray = jc),
          (_.stubFalse = Mc),
          (_.stubObject = mm),
          (_.stubString = wm),
          (_.stubTrue = bm),
          (_.multiply = Fm),
          (_.nth = Yy),
          (_.noConflict = lm),
          (_.noop = Uc),
          (_.now = Fo),
          (_.pad = L_),
          (_.padEnd = U_),
          (_.padStart = j_),
          (_.parseInt = M_),
          (_.random = P_),
          (_.reduce = X1),
          (_.reduceRight = Z1),
          (_.repeat = q_),
          (_.replace = z_),
          (_.result = __),
          (_.round = Lm),
          (_.runInContext = L),
          (_.sample = tv),
          (_.size = nv),
          (_.snakeCase = B_),
          (_.some = sv),
          (_.sortedIndex = r1),
          (_.sortedIndexBy = i1),
          (_.sortedIndexOf = n1),
          (_.sortedLastIndex = s1),
          (_.sortedLastIndexBy = o1),
          (_.sortedLastIndexOf = a1),
          (_.startCase = K_),
          (_.startsWith = k_),
          (_.subtract = Um),
          (_.sum = jm),
          (_.sumBy = Mm),
          (_.template = V_),
          (_.times = Em),
          (_.toFinite = gi),
          (_.toInteger = je),
          (_.toLength = Gl),
          (_.toLower = G_),
          (_.toNumber = jr),
          (_.toSafeInteger = Gv),
          (_.toString = it),
          (_.toUpper = W_),
          (_.trim = Y_),
          (_.trimEnd = J_),
          (_.trimStart = Q_),
          (_.truncate = X_),
          (_.unescape = Z_),
          (_.uniqueId = Sm),
          (_.upperCase = em),
          (_.upperFirst = Nc),
          (_.each = Nl),
          (_.eachRight = $l),
          (_.first = Cl),
          Lc(
            _,
            (function () {
              var r = {};
              return (
                Xr(_, function (n, a) {
                  nt.call(_.prototype, a) || (r[a] = n);
                }),
                r
              );
            })(),
            { chain: !1 }
          ),
          (_.VERSION = s),
          Rr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (r) {
              _[r].placeholder = _;
            }
          ),
          Rr(["drop", "take"], function (r, n) {
            (Ye.prototype[r] = function (a) {
              a = a === t ? 1 : Ht(je(a), 0);
              var h = this.__filtered__ && !n ? new Ye(this) : this.clone();
              return (
                h.__filtered__
                  ? (h.__takeCount__ = Qt(a, h.__takeCount__))
                  : h.__views__.push({
                      size: Qt(a, ie),
                      type: r + (h.__dir__ < 0 ? "Right" : ""),
                    }),
                h
              );
            }),
              (Ye.prototype[r + "Right"] = function (a) {
                return this.reverse()[r](a).reverse();
              });
          }),
          Rr(["filter", "map", "takeWhile"], function (r, n) {
            var a = n + 1,
              h = a == $ || a == le;
            Ye.prototype[r] = function (y) {
              var m = this.clone();
              return (
                m.__iteratees__.push({ iteratee: me(y, 3), type: a }),
                (m.__filtered__ = m.__filtered__ || h),
                m
              );
            };
          }),
          Rr(["head", "last"], function (r, n) {
            var a = "take" + (n ? "Right" : "");
            Ye.prototype[r] = function () {
              return this[a](1).value()[0];
            };
          }),
          Rr(["initial", "tail"], function (r, n) {
            var a = "drop" + (n ? "" : "Right");
            Ye.prototype[r] = function () {
              return this.__filtered__ ? new Ye(this) : this[a](1);
            };
          }),
          (Ye.prototype.compact = function () {
            return this.filter(vr);
          }),
          (Ye.prototype.find = function (r) {
            return this.filter(r).head();
          }),
          (Ye.prototype.findLast = function (r) {
            return this.reverse().find(r);
          }),
          (Ye.prototype.invokeMap = Ke(function (r, n) {
            return typeof r == "function"
              ? new Ye(this)
              : this.map(function (a) {
                  return ns(a, r, n);
                });
          })),
          (Ye.prototype.reject = function (r) {
            return this.filter(Uo(me(r)));
          }),
          (Ye.prototype.slice = function (r, n) {
            r = je(r);
            var a = this;
            return a.__filtered__ && (r > 0 || n < 0)
              ? new Ye(a)
              : (r < 0 ? (a = a.takeRight(-r)) : r && (a = a.drop(r)),
                n !== t &&
                  ((n = je(n)), (a = n < 0 ? a.dropRight(-n) : a.take(n - r))),
                a);
          }),
          (Ye.prototype.takeRightWhile = function (r) {
            return this.reverse().takeWhile(r).reverse();
          }),
          (Ye.prototype.toArray = function () {
            return this.take(ie);
          }),
          Xr(Ye.prototype, function (r, n) {
            var a = /^(?:filter|find|map|reject)|While$/.test(n),
              h = /^(?:head|last)$/.test(n),
              y = _[h ? "take" + (n == "last" ? "Right" : "") : n],
              m = h || /^find/.test(n);
            y &&
              (_.prototype[n] = function () {
                var x = this.__wrapped__,
                  T = h ? [1] : arguments,
                  j = x instanceof Ye,
                  J = T[0],
                  Q = j || Re(x),
                  Z = function (Ge) {
                    var Ze = y.apply(_, Pi([Ge], T));
                    return h && ce ? Ze[0] : Ze;
                  };
                Q &&
                  a &&
                  typeof J == "function" &&
                  J.length != 1 &&
                  (j = Q = !1);
                var ce = this.__chain__,
                  ye = !!this.__actions__.length,
                  be = m && !ce,
                  ze = j && !ye;
                if (!m && Q) {
                  x = ze ? x : new Ye(this);
                  var Ee = r.apply(x, T);
                  return (
                    Ee.__actions__.push({ func: No, args: [Z], thisArg: t }),
                    new $r(Ee, ce)
                  );
                }
                return be && ze
                  ? r.apply(this, T)
                  : ((Ee = this.thru(Z)),
                    be ? (h ? Ee.value()[0] : Ee.value()) : Ee);
              });
          }),
          Rr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (r) {
              var n = no[r],
                a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru",
                h = /^(?:pop|shift)$/.test(r);
              _.prototype[r] = function () {
                var y = arguments;
                if (h && !this.__chain__) {
                  var m = this.value();
                  return n.apply(Re(m) ? m : [], y);
                }
                return this[a](function (x) {
                  return n.apply(Re(x) ? x : [], y);
                });
              };
            }
          ),
          Xr(Ye.prototype, function (r, n) {
            var a = _[n];
            if (a) {
              var h = a.name + "";
              nt.call(xn, h) || (xn[h] = []), xn[h].push({ name: n, func: a });
            }
          }),
          (xn[xo(t, ee).name] = [{ name: "wrapper", func: t }]),
          (Ye.prototype.clone = Zg),
          (Ye.prototype.reverse = e0),
          (Ye.prototype.value = t0),
          (_.prototype.at = A1),
          (_.prototype.chain = T1),
          (_.prototype.commit = R1),
          (_.prototype.next = N1),
          (_.prototype.plant = F1),
          (_.prototype.reverse = L1),
          (_.prototype.toJSON = _.prototype.valueOf = _.prototype.value = U1),
          (_.prototype.first = _.prototype.head),
          Qn && (_.prototype[Qn] = $1),
          _
        );
      },
      Dn = Rg();
    Tt ? (((Tt.exports = Dn)._ = Dn), (ct._ = Dn)) : (Xe._ = Dn);
  }.call(vs));
})(Lu, Lu.exports);
var M5 = Object.defineProperty,
  q5 = Object.defineProperties,
  z5 = Object.getOwnPropertyDescriptors,
  Ld = Object.getOwnPropertySymbols,
  B5 = Object.prototype.hasOwnProperty,
  H5 = Object.prototype.propertyIsEnumerable,
  Ud = (i, e, t) =>
    e in i
      ? M5(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  ko = (i, e) => {
    for (var t in e || (e = {})) B5.call(e, t) && Ud(i, t, e[t]);
    if (Ld) for (var t of Ld(e)) H5.call(e, t) && Ud(i, t, e[t]);
    return i;
  },
  K5 = (i, e) => q5(i, z5(e));
function ji(i, e, t) {
  var s;
  const o = TE(i);
  return (
    ((s = e.rpcMap) == null ? void 0 : s[o.reference]) ||
    `${j5}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
  );
}
function fn(i) {
  return i.includes(":") ? i.split(":")[1] : i;
}
function ag(i) {
  return i.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function k5(i, e) {
  const t = Object.keys(e.namespaces).filter((o) => o.includes(i));
  if (!t.length) return [];
  const s = [];
  return (
    t.forEach((o) => {
      const c = e.namespaces[o].accounts;
      s.push(...c);
    }),
    s
  );
}
function jd(i = {}, e = {}) {
  const t = Md(i),
    s = Md(e);
  return Lu.exports.merge(t, s);
}
function Md(i) {
  var e, t, s, o;
  const c = {};
  if (!Is(i)) return c;
  for (const [l, f] of Object.entries(i)) {
    const g = Ju(l) ? [l] : f.chains,
      p = f.methods || [],
      v = f.events || [],
      D = f.rpcMap || {},
      E = _s(l);
    c[E] = K5(ko(ko({}, c[E]), f), {
      chains: kc(g, (e = c[E]) == null ? void 0 : e.chains),
      methods: kc(p, (t = c[E]) == null ? void 0 : t.methods),
      events: kc(v, (s = c[E]) == null ? void 0 : s.events),
      rpcMap: ko(ko({}, D), (o = c[E]) == null ? void 0 : o.rpcMap),
    });
  }
  return c;
}
function V5(i) {
  return i.includes(":") ? i.split(":")[2] : i;
}
function G5(i) {
  const e = {};
  for (const [t, s] of Object.entries(i)) {
    const o = s.methods || [],
      c = s.events || [],
      l = s.accounts || [],
      f = Ju(t) ? [t] : s.chains ? s.chains : ag(s.accounts);
    e[t] = { chains: f, methods: o, events: c, accounts: l };
  }
  return e;
}
function su(i) {
  return typeof i == "number"
    ? i
    : i.includes("0x")
    ? parseInt(i, 16)
    : ((i = i.includes(":") ? i.split(":")[1] : i),
      isNaN(Number(i)) ? i : Number(i));
}
const cg = {},
  wt = (i) => cg[i],
  ou = (i, e) => {
    cg[i] = e;
  };
class W5 {
  constructor(e) {
    (this.name = "polkadot"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Si.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = fn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || ji(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
}
class Y5 {
  constructor(e) {
    (this.name = "eip155"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(e.request.method)
      ? await this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
      (this.chainId = parseInt(e)),
      this.events.emit(Si.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const s =
      t || ji(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = parseInt(fn(t));
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const e = this.chainId,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, s;
    let o = e.request.params
      ? (t = e.request.params[0]) == null
        ? void 0
        : t.chainId
      : "0x0";
    o = o.startsWith("0x") ? o : `0x${o}`;
    const c = parseInt(o, 16);
    if (this.isChainApproved(c)) this.setDefaultChain(`${c}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: e.topic,
        request: { method: e.request.method, params: [{ chainId: o }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${c}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
}
class J5 {
  constructor(e) {
    (this.name = "solana"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Si.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = fn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || ji(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
}
class Q5 {
  constructor(e) {
    (this.name = "cosmos"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Si.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = fn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || ji(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
}
class X5 {
  constructor(e) {
    (this.name = "cip34"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        Si.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        const s = this.getCardanoRPCUrl(t),
          o = fn(t);
        e[o] = this.createHttpProvider(o, s);
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || this.getCardanoRPCUrl(e);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
}
class Z5 {
  constructor(e) {
    (this.name = "elrond"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Si.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = fn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || ji(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
}
class ex {
  constructor(e) {
    (this.name = "multiversx"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(Si.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        const o = fn(t);
        e[o] = this.createHttpProvider(
          o,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || ji(e, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new Di(new qi(s, wt("disableProviderPing")));
  }
}
class tx {
  constructor(e) {
    (this.name = "near"),
      (this.namespace = e.namespace),
      (this.events = wt("events")),
      (this.client = wt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (((this.chainId = e), !this.httpProviders[e])) {
      const s = t || ji(`${this.name}:${e}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, s);
    }
    this.events.emit(Si.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var s;
        e[t] = this.createHttpProvider(
          t,
          (s = this.namespace.rpcMap) == null ? void 0 : s[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const s = this.createHttpProvider(e, t);
    s && (this.httpProviders[e] = s);
  }
  createHttpProvider(e, t) {
    const s = t || ji(e, this.namespace);
    return typeof s > "u"
      ? void 0
      : new Di(new qi(s, wt("disableProviderPing")));
  }
}
var rx = Object.defineProperty,
  ix = Object.defineProperties,
  nx = Object.getOwnPropertyDescriptors,
  qd = Object.getOwnPropertySymbols,
  sx = Object.prototype.hasOwnProperty,
  ox = Object.prototype.propertyIsEnumerable,
  zd = (i, e, t) =>
    e in i
      ? rx(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  Vo = (i, e) => {
    for (var t in e || (e = {})) sx.call(e, t) && zd(i, t, e[t]);
    if (qd) for (var t of qd(e)) ox.call(e, t) && zd(i, t, e[t]);
    return i;
  },
  au = (i, e) => ix(i, nx(e));
class sh {
  constructor(e) {
    (this.events = new Mu()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = e),
      (this.logger =
        typeof (e == null ? void 0 : e.logger) < "u" &&
        typeof (e == null ? void 0 : e.logger) != "string"
          ? e.logger
          : Je.pino(
              Je.getDefaultLoggerOptions({
                level: (e == null ? void 0 : e.logger) || $d,
              })
            )),
      (this.disableProviderPing =
        (e == null ? void 0 : e.disableProviderPing) || !1);
  }
  static async init(e) {
    const t = new sh(e);
    return await t.initialize(), t;
  }
  async request(e, t, s) {
    const [o, c] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(o).request({
      request: Vo({}, e),
      chainId: `${o}:${c}`,
      topic: this.session.topic,
      expiry: s,
    });
  }
  sendAsync(e, t, s, o) {
    const c = new Date().getTime();
    this.request(e, s, o)
      .then((l) => t(null, la(c, l)))
      .catch((l) => t(l, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (e = this.session) == null ? void 0 : e.topic,
      reason: mt("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(e),
      await this.cleanupPendingPairings(),
      !e.skipPairing)
    )
      return await this.pair(e.pairingTopic);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: s, approval: o } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit("display_uri", s)),
        await o()
          .then((c) => {
            this.session = c;
            const l = G5(c.namespaces);
            (this.namespaces = jd(this.namespaces, l)),
              this.persist("namespaces", this.namespaces);
          })
          .catch((c) => {
            if (c.message !== sg) throw c;
            t++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [s, o] = this.validateChain(e);
      this.getProvider(s).setDefaultChain(o, t);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (ni(t)) {
      for (const s of t)
        e.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const e = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[e])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await R5.init({
        logger: this.providerOpts.logger || $d,
        relayUrl: this.providerOpts.relayUrl || F5,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const e = [
      ...new Set(Object.keys(this.session.namespaces).map((t) => _s(t))),
    ];
    ou("client", this.client),
      ou("events", this.events),
      ou("disableProviderPing", this.disableProviderPing),
      e.forEach((t) => {
        if (!this.session) return;
        const s = k5(t, this.session),
          o = ag(s),
          c = jd(this.namespaces, this.optionalNamespaces),
          l = au(Vo({}, c[t]), { accounts: s, chains: o });
        switch (t) {
          case "eip155":
            this.rpcProviders[t] = new Y5({ namespace: l });
            break;
          case "solana":
            this.rpcProviders[t] = new J5({ namespace: l });
            break;
          case "cosmos":
            this.rpcProviders[t] = new Q5({ namespace: l });
            break;
          case "polkadot":
            this.rpcProviders[t] = new W5({ namespace: l });
            break;
          case "cip34":
            this.rpcProviders[t] = new X5({ namespace: l });
            break;
          case "elrond":
            this.rpcProviders[t] = new Z5({ namespace: l });
            break;
          case "multiversx":
            this.rpcProviders[t] = new ex({ namespace: l });
            break;
          case "near":
            this.rpcProviders[t] = new tx({ namespace: l });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }),
      this.client.on("session_event", (e) => {
        const { params: t } = e,
          { event: s } = t;
        if (s.name === "accountsChanged") {
          const o = s.data;
          o && ni(o) && this.events.emit("accountsChanged", o.map(V5));
        } else if (s.name === "chainChanged") {
          const o = t.chainId,
            c = t.event.data,
            l = _s(o),
            f = su(o) !== su(c) ? `${l}:${su(c)}` : o;
          this.onChainChanged(f);
        } else this.events.emit(s.name, s.data);
        this.events.emit("session_event", e);
      }),
      this.client.on("session_update", ({ topic: e, params: t }) => {
        var s;
        const { namespaces: o } = t,
          c = (s = this.client) == null ? void 0 : s.session.get(e);
        (this.session = au(Vo({}, c), { namespaces: o })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: e, params: t });
      }),
      this.client.on("session_delete", async (e) => {
        await this.cleanup(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            au(Vo({}, mt("USER_DISCONNECTED")), { data: e.topic })
          );
      }),
      this.on(Si.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(e, !0);
      });
  }
  getProvider(e) {
    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
    return this.rpcProviders[e];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace(
        (t = this.session) == null ? void 0 : t.namespaces[e]
      );
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: s, sessionProperties: o } = e;
    t && Object.keys(t).length && (this.namespaces = t),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = o),
      this.persist("namespaces", t),
      this.persist("optionalNamespaces", s);
  }
  validateChain(e) {
    const [t, s] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, s];
    if (
      t &&
      !Object.keys(this.namespaces || {})
        .map((l) => _s(l))
        .includes(t)
    )
      throw new Error(
        `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
      );
    if (t && s) return [t, s];
    const o = _s(Object.keys(this.namespaces)[0]),
      c = this.rpcProviders[o].getDefaultChain();
    return [o, c];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [s, o] = this.validateChain(e);
    o &&
      (t || this.getProvider(s).setDefaultChain(o),
      this.namespaces[s]
        ? (this.namespaces[s].defaultChain = o)
        : this.namespaces[`${s}:${o}`]
        ? (this.namespaces[`${s}:${o}`].defaultChain = o)
        : (this.namespaces[`${s}:${o}`] = { defaultChain: o }),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", o));
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${Fd}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${Fd}/${e}`);
  }
}
const ax = sh,
  cx = "wc",
  ux = "ethereum_provider",
  hx = `${cx}@2:${ux}:`,
  lx = "https://rpc.walletconnect.com/v1/",
  Uu = ["eth_sendTransaction", "personal_sign"],
  fx = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  ju = ["chainChanged", "accountsChanged"],
  dx = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var px = Object.defineProperty,
  gx = Object.defineProperties,
  yx = Object.getOwnPropertyDescriptors,
  Bd = Object.getOwnPropertySymbols,
  vx = Object.prototype.hasOwnProperty,
  _x = Object.prototype.propertyIsEnumerable,
  Hd = (i, e, t) =>
    e in i
      ? px(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  ws = (i, e) => {
    for (var t in e || (e = {})) vx.call(e, t) && Hd(i, t, e[t]);
    if (Bd) for (var t of Bd(e)) _x.call(e, t) && Hd(i, t, e[t]);
    return i;
  },
  Kd = (i, e) => gx(i, yx(e));
function ra(i) {
  return Number(i[0].split(":")[1]);
}
function cu(i) {
  return `0x${i.toString(16)}`;
}
function mx(i) {
  const {
    chains: e,
    optionalChains: t,
    methods: s,
    optionalMethods: o,
    events: c,
    optionalEvents: l,
    rpcMap: f,
  } = i;
  if (!ni(e)) throw new Error("Invalid chains");
  const g = {
      chains: e,
      methods: s || Uu,
      events: c || ju,
      rpcMap: ws({}, e.length ? { [ra(e)]: f[ra(e)] } : {}),
    },
    p = c == null ? void 0 : c.filter((I) => !ju.includes(I)),
    v = s == null ? void 0 : s.filter((I) => !Uu.includes(I));
  if (!t && !l && !o && !(p != null && p.length) && !(v != null && v.length))
    return { required: e.length ? g : void 0 };
  const D =
      ((p == null ? void 0 : p.length) && (v == null ? void 0 : v.length)) ||
      !t,
    E = {
      chains: [...new Set(D ? g.chains.concat(t || []) : t)],
      methods: [...new Set(g.methods.concat(o != null && o.length ? o : fx))],
      events: [...new Set(g.events.concat(l != null && l.length ? l : dx))],
      rpcMap: f,
    };
  return { required: e.length ? g : void 0, optional: t.length ? E : void 0 };
}
class oh {
  constructor() {
    (this.events = new qr.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = hx),
      (this.on = (e, t) => (this.events.on(e, t), this)),
      (this.once = (e, t) => (this.events.once(e, t), this)),
      (this.removeListener = (e, t) => (
        this.events.removeListener(e, t), this
      )),
      (this.off = (e, t) => (this.events.off(e, t), this)),
      (this.parseAccount = (e) =>
        this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(e) {
    const t = new oh();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, s) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: s } = mx(this.rpc);
    try {
      const o = await new Promise(async (l, f) => {
        var g;
        this.rpc.showQrModal &&
          ((g = this.modal) == null ||
            g.subscribeModal((p) => {
              !p.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                f(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Kd(
                ws(
                  { namespaces: ws({}, t && { [this.namespace]: t }) },
                  s && { optionalNamespaces: { [this.namespace]: s } }
                ),
                { pairingTopic: e == null ? void 0 : e.pairingTopic }
              )
            )
            .then((p) => {
              l(p);
            })
            .catch((p) => {
              f(new Error(p.message));
            });
      });
      if (!o) return;
      const c = RE(o.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c),
        this.setAccounts(c),
        this.events.emit("connect", { chainId: cu(this.chainId) });
    } catch (o) {
      throw (this.signer.logger.error(o), o);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e,
        { event: s } = t;
      s.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit("accountsChanged", this.accounts))
        : s.name === "chainChanged"
        ? this.setChainId(this.formatChainId(s.data))
        : this.events.emit(s.name, s.data),
        this.events.emit("session_event", e);
    }),
      this.signer.on("chainChanged", (e) => {
        const t = parseInt(e);
        (this.chainId = t),
          this.events.emit("chainChanged", cu(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (e) => {
        this.events.emit("session_update", e);
      }),
      this.signer.on("session_delete", (e) => {
        this.reset(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            Kd(ws({}, mt("USER_DISCONNECTED")), {
              data: e.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (e) => {
        var t, s;
        this.rpc.showQrModal &&
          ((t = this.modal) == null || t.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: e })),
          this.events.emit("display_uri", e);
      });
  }
  switchEthereumChain(e) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: e.toString(16) }],
    });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e
      .filter((s) => this.isCompatibleChainId(s))
      .map((s) => this.parseChainId(s));
    t.length &&
      ((this.chainId = t[0]),
      this.events.emit("chainChanged", cu(this.chainId)),
      this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      (this.chainId = t), this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, s, o] = e.split(":");
    return { chainId: `${t}:${s}`, address: o };
  }
  setAccounts(e) {
    (this.accounts = e
      .filter(
        (t) =>
          this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
      )
      .map((t) => this.parseAccountId(t).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, s;
    const o = (t = e == null ? void 0 : e.chains) != null ? t : [],
      c = (s = e == null ? void 0 : e.optionalChains) != null ? s : [],
      l = o.concat(c);
    if (!l.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const f = o.length ? (e == null ? void 0 : e.methods) || Uu : [],
      g = o.length ? (e == null ? void 0 : e.events) || ju : [],
      p = (e == null ? void 0 : e.optionalMethods) || [],
      v = (e == null ? void 0 : e.optionalEvents) || [],
      D = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(l, e.projectId),
      E = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return {
      chains: o == null ? void 0 : o.map((I) => this.formatChainId(I)),
      optionalChains: c.map((I) => this.formatChainId(I)),
      methods: f,
      events: g,
      optionalMethods: p,
      optionalEvents: v,
      rpcMap: D,
      showQrModal: !!(e != null && e.showQrModal),
      qrModalOptions: E,
      projectId: e.projectId,
      metadata: e.metadata,
    };
  }
  buildRpcMap(e, t) {
    const s = {};
    return (
      e.forEach((o) => {
        s[o] = this.getRpcUrl(o, t);
      }),
      s
    );
  }
  async initialize(e) {
    if (
      ((this.rpc = this.getRpcConfig(e)),
      (this.chainId = this.rpc.chains.length
        ? ra(this.rpc.chains)
        : ra(this.rpc.optionalChains)),
      (this.signer = await ax.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: e.disableProviderPing,
        relayUrl: e.relayUrl,
        storageOptions: e.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let t;
      try {
        const { WalletConnectModal: s } = await zm(
          () => import("./index-81c3a81e.js").then((o) => o.i),
          [
            "assets/index-81c3a81e.js",
            "assets/index-971a4fc3.js",
            "assets/index-ecd973c7.css",
          ]
        );
        t = s;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (t)
        try {
          this.modal = new t(
            ws({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: s, rpcMap: o } = e;
    t &&
      ni(t) &&
      ((this.rpc.chains = t.map((c) => this.formatChainId(c))),
      t.forEach((c) => {
        this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
      })),
      s &&
        ni(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          s == null ? void 0 : s.map((c) => this.formatChainId(c))),
        s.forEach((c) => {
          this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c);
        }));
  }
  getRpcUrl(e, t) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) ||
      `${lx}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const e = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      t = this.session.namespaces[`${this.namespace}:${e}`]
        ? this.session.namespaces[`${this.namespace}:${e}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(
      e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts
    ),
      this.setAccounts(t == null ? void 0 : t.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String
      ? [this.parseAccount(e)]
      : e.map((t) => this.parseAccount(t));
  }
}
const jx = oh;
export {
  jx as EthereumProvider,
  dx as OPTIONAL_EVENTS,
  fx as OPTIONAL_METHODS,
  ju as REQUIRED_EVENTS,
  Uu as REQUIRED_METHODS,
  oh as default,
};
