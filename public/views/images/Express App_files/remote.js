(function (g) {
  var window = this; var aBa = function (a, b) { return g.Tb(a, b) }, P6 = function (a) {
      g.Dm(a, 'zx', g.xb())
      return a
    }, Q6 = function (a, b, c) {
      g.za(c) || (c = [String(c)])
      g.Gm(a.g, b, c)
    }, bBa = function (a, b) {
      var c = []
      g.sk(b, function (a) { try { var b = g.bD.prototype.l.call(this, a, !0) } catch (f) { if (f == 'Storage: Invalid value was encountered') return; throw f }g.t(b) ? g.aD(b) && c.push(a) : c.push(a) }, a)
      return c
    }, cBa = function (a, b) {
      var c = bBa(a, b);
      (0, g.B)(c, function (a) { g.bD.prototype.remove.call(this, a) }, a)
    }, dBa = function (a) {
      if (a.Ad) {
        if (a.Ad.locationOverrideToken) return {locationOverrideToken: a.Ad.locationOverrideToken}
        if (a.Ad.latitudeE7 != null && a.Ad.longitudeE7 != null) return {latitudeE7: a.Ad.latitudeE7, longitudeE7: a.Ad.longitudeE7}
      } return null
    }, eBa = function (a, b, c, d) {
      var e = new g.um(null, void 0)
      a && g.vm(e, a); b && g.wm(e, b); c && g.xm(e, c); d && g.ym(e, d); return e
    }, fBa = function (a) { g.QF[a] && (a = g.QF[a], (0, g.B)(a, function (a) { g.OF[a] && delete g.OF[a] }), a.length = 0) }, gBa = function (a) {
      var b = g.NF()
      if (b) if (b.clear(a), a)fBa(a); else for (var c in g.QF)fBa(c)
    }, R6 = function (a) {
      this.app = this.name = this.id = ''
      this.type = 'REMOTE_CONTROL'; this.obfuscatedGaiaId = this.avatar = this.username = ''; this.o = !1; this.capabilities = new window.Set(); this.experiments = new window.Set(); this.theme = 'u'; new g.om(); this.g = this.l = ''; a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || 'REMOTE_CONTROL', this.username = a.user || '', this.avatar = a.userAvatarUri || '', this.obfuscatedGaiaId = a.obfuscatedGaiaId || '', this.theme = a.theme || 'u', hBa(this, a.capabilities || ''), iBa(this, a.experiments || ''), this.l = a.remoteControllerUrl || '',
        this.g = a.localChannelEncryptionKey || '')
    }, hBa = function (a, b) {
      a.capabilities.clear();
      (0, g.Jd)(b.split(','), g.Fa(aBa, jBa)).forEach(function (b) { a.capabilities.add(b) })
    }, iBa = function (a, b) {
      a.experiments.clear()
      b.split(',').forEach(function (b) { a.experiments.add(b) })
    }, S6 = function (a) {
      a = a || {}
      this.name = a.name || ''; this.id = a.id || a.screenId || ''; this.token = a.token || a.loungeToken || ''; this.uuid = a.uuid || a.dialId || ''
    }, T6 = function (a, b) { return !!b && (a.id == b || a.uuid == b) }, kBa = function (a) {
      return {name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid}
    }, lBa = function (a) { return new S6(a) }, mBa = function (a) { return g.za(a) ? (0, g.G)(a, lBa) : [] }, U6 = function (a) { return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + '..,token:' + (a.token ? '..' + a.token.slice(-6) : '-') + ',uuid:' + (a.uuid ? '..' + a.uuid.slice(-6) : '-') + '}' : 'null' }, V6 = function (a) { return g.za(a) ? '[' + (0, g.G)(a, U6).join(',') + ']' : 'null' }, W6 = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
        var b = 16 * Math.random() | 0
        return (a == 'x' ? b : b & 3 | 8).toString(16)
      })
    }, nBa = function (a) {
      return (0, g.G)(a, function (a) {
        return {key: a.id,
          name: a.name}
      })
    }, X6 = function (a, b) { return g.La(a, function (a) { return a || b ? !a != !b ? !1 : a.id == b.id : !0 }) }, Y6 = function (a, b) { return g.La(a, function (a) { return T6(a, b) }) }, oBa = function () {
      var a = (0, g.JG)()
      a && cBa(a, a.g.Qd(!0))
    }, Z6 = function () {
      var a = g.MG('yt-remote-connected-devices') || []
      g.fb(a); return a
    }, pBa = function (a) {
      if (g.Qa(a)) return []
      var b = a[0].indexOf('#'), c = b == -1 ? a[0] : a[0].substring(0, b); return (0, g.G)(a, function (a, b) { return b == 0 ? a : a.substring(c.length) })
    }, qBa = function (a) { g.LG('yt-remote-connected-devices', a, 86400) }, a7 = function () {
      if ($6) return $6
      var a = g.MG('yt-remote-device-id'); a || (a = W6(), g.LG('yt-remote-device-id', a, 31536E3)); for (var b = Z6(), c = 1, d = a; g.Pa(b, d);)c++, d = a + '#' + c; return $6 = d
    }, b7 = function () {
      var a = Z6(), b = a7()
      g.Pa(a, b); g.OG() && g.ib(a, b); a = pBa(a); if (g.Qa(a)) try { g.wG('remote_sid') } catch (c) {} else try { g.vG('remote_sid', a.join(','), -1) } catch (c) {}
    }, rBa = function () { return g.MG('yt-remote-session-browser-channel') }, sBa = function () { return g.MG('yt-remote-local-screens') || [] }, tBa = function () { g.LG('yt-remote-lounge-token-expiration', !0, 86400) }, uBa = function (a) {
      a.length > 5 && (a = a.slice(a.length - 5))
      var b = (0, g.G)(sBa(), function (a) { return a.loungeToken }), c = (0, g.G)(a, function (a) { return a.loungeToken });
      (0, g.cm)(c, function (a) { return !g.Pa(b, a) }) && tBa()
      g.LG('yt-remote-local-screens', a, 31536E3)
    }, vBa = function (a, b) {
      g.LG('yt-remote-session-browser-channel', a)
      g.LG('yt-remote-session-screen-id', b); var c = Z6(), d = a7(); g.Pa(c, d) || c.push(d); qBa(c); b7()
    }, c7 = function (a) {
      a || (g.NG('yt-remote-session-screen-id'), g.NG('yt-remote-session-video-id'))
      b7(); a = Z6(); g.Ua(a, a7()); qBa(a)
    }, wBa = function () {
      if (!d7) {
        var a = g.mD()
        a && (d7 = new g.WC(a))
      } return d7 ? !!d7.get('yt-remote-use-staging-server') : !1
    }, xBa = function () {
      var a = window.document.createElement('a')
      g.Yc(a, 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js'); a = a.href.replace(/^[a-zA-Z]+:\/\//, '//'); return 'js-' + g.Bb(a)
    }, yBa = function (a, b) {
      var c = g.Cd('SCRIPT')
      c.id = a; c.onload = function () { b && (0, window.setTimeout)(b, 0) }
      c.onreadystatechange = function () { switch (c.readyState) { case 'loaded':case 'complete':c.onload() } }
      g.$c(c, g.ae('https://www.gstatic.com/cv/js/sender/v1/cast_sender.js')); var d = window.document.getElementsByTagName('head')[0] || window.document.body; d.insertBefore(c, d.firstChild); return c
    }, zBa = function () {
      var a = xBa(), b = window.document.getElementById(a), c = b && g.ZE(b, 'loaded')
      c || b && !c || (b = yBa(a, function () { g.ZE(b, 'loaded') || (g.YE(b, 'loaded', 'true'), g.UF(a), g.VD(g.Fa(gBa, a), 0)) }))
    }, e7 = function (a) { return !!window.document.currentScript && (window.document.currentScript.src.indexOf('?' + a) != -1 || window.document.currentScript.src.indexOf('&' + a) != -1) }, ABa = function () { return typeof window.__onGCastApiAvailable === 'function' ? window.__onGCastApiAvailable : null }, f7 = function (a) { a.length ? BBa(a.shift(), function () { f7(a) }) : g7() }, CBa = function (a) { return 'chrome-extension://' + a + h7 }, BBa = function (a,
      b, c) {
      var d = window.document.createElement('script')
      d.onerror = b; c && (d.onload = c); d.src = a; (window.document.head || window.document.documentElement).appendChild(d)
    }, i7 = function (a) { return window.navigator.userAgent.indexOf(a) >= 0 }, g7 = function () {
      var a = ABa()
      a && a(!1, 'No cast extension found')
    }, j7 = function () {
      if (DBa) {
        var a = 2, b = ABa(), c = function () {
          a--
          a == 0 && b && b(!0)
        }
        window.__onGCastApiAvailable = c; BBa('//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js', g7, c)
      }
    }, EBa = function () {
      var a = window.__gCrWeb && window.__gCrWeb.message && window.__gCrWeb.message.invokeOnHost
      a && (j7(), a({command: 'cast.sender.init'}))
    }, FBa = function () {
      j7()
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/); f7(['//www.gstatic.com/eureka/clank/' + (a ? (0, window.parseInt)(a[1], 10) : 0) + h7, '//www.gstatic.com/eureka/clank' + h7])
    }, k7 = function (a, b, c) {
      g.M.call(this)
      this.C = c != null ? (0, g.z)(a, c) : a; this.fd = b; this.B = (0, g.z)(this.KI, this); this.g = !1; this.l = 0; this.o = this.ya = null; this.A = []
    }, l7 = function () {}, m7 = function (a, b, c, d) {
      this.g = a
      this.o = b; this.D = c; this.C = d || 1; this.A = 45E3; this.W = new g.Km(this); this.l = new g.qg(); this.l.setInterval(250)
    }, HBa = function (a, b, c) {
      a.Bj = 1
      a.eh = P6(b.clone()); a.Fi = c; a.B = !0; GBa(a, null)
    }, n7 = function (a, b, c, d, e) {
      a.Bj = 1
      a.eh = P6(b.clone()); a.Fi = null; a.B = c; e && (a.bD = !1); GBa(a, d)
    }, GBa = function (a, b) {
      a.jk = (0, g.F)()
      o7(a); a.Ch = a.eh.clone(); Q6(a.Ch, 't', a.C); a.rm = 0; a.Rc = a.g.Vq(a.g.hm() ? b : null); a.Cr > 0 && (a.cp = new g.Sk((0, g.z)(a.oE, a, a.Rc), a.Cr)); a.W.T(a.Rc, 'readystatechange', a.gU); var c = a.gi ? g.ac(a.gi) : {}; a.Fi ? (a.Pp = 'POST', c['Content-Type'] = 'application/x-www-form-urlencoded', a.Rc.send(a.Ch, a.Pp, a.Fi, c)) : (a.Pp = 'GET', a.bD && !g.yd && (c.Connection = 'close'), a.Rc.send(a.Ch, a.Pp, null, c)); a.g.tf(1)
    }, KBa = function (a, b, c) {
      for (var d = !0; !a.Qh && a.rm < c.length;) {
        var e = IBa(a, c)
        if (e == p7) { b == 4 && (a.fh = 4, q7(15), d = !1); break } else if (e == JBa) { a.fh = 4; q7(16); d = !1; break } else r7(a, e)
      }b == 4 && c.length == 0 && (a.fh = 1, q7(17), d = !1); a.zf = a.zf && d; d || (s7(a), t7(a))
    }, IBa = function (a, b) {
      var c = a.rm, d = b.indexOf('\n', c)
      if (d == -1) return p7; c = Number(b.substring(c, d)); if ((0, window.isNaN)(c)) return JBa; d += 1; if (d + c > b.length) return p7; var e = b.substr(d, c); a.rm = d + c; return e
    }, MBa = function (a, b) {
      a.jk = (0, g.F)()
      o7(a); var c = b ? window.location.hostname : ''; a.Ch = a.eh.clone(); g.Dm(a.Ch, 'DOMAIN', c); g.Dm(a.Ch, 't', a.C); try { a.Af = new window.ActiveXObject('htmlfile') } catch (n) { s7(a); a.fh = 7; q7(22); t7(a); return } var d = '<html><body>'; if (b) {
        for (var e = '', f = 0; f < c.length; f++) {
          var k = c.charAt(f); if (k == '<')e += '\\x3c'; else if (k == '>')e += '\\x3e'; else {
            var l = k; if (l in u7)k = u7[l]; else if (l in LBa)k = u7[l] = LBa[l]; else {
              var m = l.charCodeAt(0); if (m > 31 && m < 127)k = l; else {
                if (m < 256) { if (k = '\\x', m < 16 || m > 256)k += '0' } else k = '\\u', m < 4096 && (k += '0'); k +=
m.toString(16).toUpperCase()
              }k = u7[l] = k
            }e += k
          }
        }d += '<script>document.domain="' + e + '"\x3c/script>'
      }d += '</body></html>'; c = g.ad(g.wc('b/12014412'), d); a.Af.open(); a.Af.write(g.Sc(c)); a.Af.close(); a.Af.parentWindow.m = (0, g.z)(a.mT, a); a.Af.parentWindow.d = (0, g.z)(a.oC, a, !0); a.Af.parentWindow.rpcClose = (0, g.z)(a.oC, a, !1); c = a.Af.createElement('DIV'); a.Af.parentWindow.document.body.appendChild(c); d = g.Jc(a.Ch.toString()); d = g.qb(g.Gc(d)); d = g.ad(g.wc('b/12014412'), '<iframe src="' + d + '"></iframe>'); c.innerHTML = g.Sc(d)
      a.g.tf(1)
    }, o7 = function (a) {
      a.hv = (0, g.F)() + a.A
      NBa(a, a.A)
    }, NBa = function (a, b) {
      if (a.Dk != null) throw Error('WatchDog timer not null')
      a.Dk = v7((0, g.z)(a.CT, a), b)
    }, w7 = function (a) { a.Dk && (g.w.clearTimeout(a.Dk), a.Dk = null) }, t7 = function (a) { a.g.zy() || a.Qh || a.g.No(a) }, s7 = function (a) {
      w7(a)
      g.Ze(a.cp); a.cp = null; a.l.stop(); g.Qm(a.W); if (a.Rc) { var b = a.Rc; a.Rc = null; b.abort(); b.dispose() }a.Af && (a.Af = null)
    }, r7 = function (a, b) { try { a.g.hC(a, b), a.g.tf(4) } catch (c) {} }, PBa = function (a, b, c, d, e) {
      if (d == 0)c(!1)
      else { var f = e || 0; d--; OBa(a, b, function (e) { e ? c(!0) : g.w.setTimeout(function () { PBa(a, b, c, d, f) }, f) }) }
    }, OBa = function (a, b, c) {
      var d = new window.Image()
      d.onload = function () { try { x7(d), c(!0) } catch (e) {} }
      d.onerror = function () { try { x7(d), c(!1) } catch (e) {} }
      d.onabort = function () { try { x7(d), c(!1) } catch (e) {} }
      d.ontimeout = function () { try { x7(d), c(!1) } catch (e) {} }
      g.w.setTimeout(function () { if (d.ontimeout)d.ontimeout() }, b)
      d.src = a
    }, x7 = function (a) {
      a.onload = null
      a.onerror = null; a.onabort = null; a.ontimeout = null
    }, QBa = function (a) {
      this.g = a
      this.l = new l7()
    }, RBa = function (a) {
      var b = y7(a.g, a.Jk, '/mail/images/cleardot.gif')
      P6(b); PBa(b.toString(), 5E3, (0, g.z)(a.WH, a), 3, 2E3); a.tf(1)
    }, A7 = function (a) {
      var b = a.g.H
      if (b != null)q7(5), b ? (q7(11), z7(a.g, a, !1)) : (q7(12), z7(a.g, a, !0)); else if (a.qe = new m7(a, void 0, void 0, void 0), a.qe.gi = a.Ar, b = a.g, b = y7(b, b.hm() ? a.kl : null, a.Br), q7(5), !g.wd || g.qc(10))Q6(b, 'TYPE', 'xmlhttp'), n7(a.qe, b, !1, a.kl, !1); else { Q6(b, 'TYPE', 'html'); var c = a.qe; a = !!a.kl; c.Bj = 3; c.eh = P6(b.clone()); MBa(c, a) }
    }, B7 = function (a, b, c) {
      this.g = 1
      this.l = []; this.A = []; this.B = new l7(); this.F = a || null; this.H = b != null ? b : null; this.C = c || !1
    }, SBa = function (a, b) {
      this.g = a
      this.map = b; this.context = null
    }, TBa = function (a) { g.af.call(this, 'statevent', a) }, UBa = function (a, b) {
      g.af.call(this, 'timingevent', a)
      this.size = b
    }, VBa = function (a) { g.af.call(this, 'serverreachability', a) }, YBa = function (a) {
      WBa(a)
      if (a.g == 3) { var b = a.Nl++, c = a.Gn.clone(); g.Dm(c, 'SID', a.o); g.Dm(c, 'RID', b); g.Dm(c, 'TYPE', 'terminate'); C7(a, c); b = new m7(a, a.o, b, void 0); b.Bj = 2; b.eh = P6(c.clone()); (new window.Image()).src = b.eh; b.jk = (0, g.F)(); o7(b) }XBa(a)
    }, ZBa = function (a) {
      a.sI(1, 0)
      a.Gn = y7(a, null, a.zr); D7(a)
    }, WBa = function (a) {
      a.Vg && (a.Vg.abort(), a.Vg = null)
      a.xc && (a.xc.cancel(), a.xc = null); a.og && (g.w.clearTimeout(a.og), a.og = null); E7(a); a.Wd && (a.Wd.cancel(), a.Wd = null); a.Xg && (g.w.clearTimeout(a.Xg), a.Xg = null)
    }, $Ba = function (a, b) {
      if (a.g == 0) throw Error('Invalid operation: sending map when state is closed')
      a.l.push(new SBa(a.bP++, b)); a.g != 2 && a.g != 3 || D7(a)
    }, D7 = function (a) { a.Wd || a.Xg || (a.Xg = v7((0, g.z)(a.mC, a), 0), a.nj = 0) }, bCa = function (a, b) {
      if (a.g == 1) {
        if (!b) {
          a.Nl = Math.floor(1E5 * Math.random())
          var c = a.Nl++, d = new m7(a, '', c, void 0); d.gi = null; var e = F7(a), f = a.Gn.clone(); g.Dm(f, 'RID', c); g.Dm(f, 'CVER', '1'); C7(a, f); HBa(d, f, e); a.Wd = d; a.g = 2
        }
      } else a.g == 3 && (b ? aCa(a, b) : a.l.length == 0 || a.Wd || aCa(a))
    }, aCa = function (a, b) {
      if (b) {
        if (a.Sh > 6) {
          a.l = a.A.concat(a.l)
          a.A.length = 0; var c = a.Nl - 1; var d = F7(a)
        } else c = b.D, d = b.Fi
      } else c = a.Nl++, d = F7(a); var e = a.Gn.clone(); g.Dm(e, 'SID', a.o); g.Dm(e, 'RID', c); g.Dm(e, 'AID', a.Pj); C7(a, e); c = new m7(a, a.o, c, a.nj + 1); c.gi = null; c.setTimeout(1E4 + Math.round(1E4 * Math.random())); a.Wd = c; HBa(c, e, d)
    }, C7 = function (a, b) {
      if (a.rd) {
        var c = a.rd.ey()
        c && g.Jb(c, function (a, c) { g.Dm(b, c, a) })
      }
    }, F7 = function (a) {
      var b = Math.min(a.l.length, 1E3), c = ['count=' + b]
      if (a.Sh > 6 && b > 0) { var d = a.l[0].g; c.push('ofs=' + d) } else d = 0; for (var e = 0; e < b; e++) { var f = a.l[e].g, k = a.l[e].map; f = a.Sh <= 6 ? e : f - d; try { g.Jb(k, function (a, b) { c.push('req' + f + '_' + b + '=' + (0, window.encodeURIComponent)(a)) }) } catch (l) { c.push('req' + f + '_type=' + (0, window.encodeURIComponent)('_badmap')) } }a.A = a.A.concat(a.l.splice(0, b))
      return c.join('&')
    }, cCa = function (a) { a.xc || a.og || (a.D = 1, a.og = v7((0, g.z)(a.lC, a), 0), a.Zi = 0) }, G7 = function (a) {
      if (a.xc || a.og || a.Zi >= 3) return !1
      a.D++; a.og = v7((0, g.z)(a.lC, a), dCa(a, a.Zi)); a.Zi++; return !0
    }, z7 = function (a, b, c) {
      a.Op = c
      a.Kf = b.zg; a.C || ZBa(a)
    }, E7 = function (a) { a.Uh != null && (g.w.clearTimeout(a.Uh), a.Uh = null) }, dCa = function (a, b) {
      var c = 5E3 + Math.floor(1E4 * Math.random())
      a.isActive() || (c *= 2); return c * b
    }, H7 = function (a, b) {
      if (b == 2 || b == 9) {
        var c = null
        a.rd && (c = null); var d = (0, g.z)(a.ZU, a); c || (c = new g.um('//www.google.com/images/cleardot.gif'), P6(c)); OBa(c.toString(), 1E4, d)
      } else q7(2); eCa(a, b)
    }, eCa = function (a, b) {
      a.g = 0
      a.rd && a.rd.Vw(b); XBa(a); WBa(a)
    }, XBa = function (a) {
      a.g = 0
      a.Kf = -1; if (a.rd) if (a.A.length == 0 && a.l.length == 0)a.rd.Jq(); else { g.Xa(a.A); var b = g.Xa(a.l); a.A.length = 0; a.l.length = 0; a.rd.Jq(b) }
    }, y7 = function (a, b, c) {
      var d = g.Em(c)
      if (d.l != '')b && g.wm(d, b + '.' + d.l), g.xm(d, d.B); else { var e = window.location; d = eBa(e.protocol, b ? b + '.' + e.hostname : e.hostname, e.port, c) }a.Uk && g.Jb(a.Uk, function (a, b) { g.Dm(d, b, a) })
      g.Dm(d, 'VER', a.Sh); C7(a, d); return d
    }, v7 = function (a, b) {
      if (!g.Ba(a)) throw Error('Fn must not be null and must be a function')
      return g.w.setTimeout(function () { a() }, b)
    }, q7 = function (a) { I7.dispatchEvent(new TBa(I7, a)) }, fCa = function () {}, gCa = function (a, b) {
      this.action = a
      this.params = b || {}
    }, J7 = function (a, b) {
      g.M.call(this)
      this.g = new g.Wt(this.dT, 0, this); g.N(this, this.g); this.fd = 5E3; this.l = 0; if (g.Ba(a))b && (a = (0, g.z)(a, b)); else if (a && g.Ba(a.handleEvent))a = (0, g.z)(a.handleEvent, a); else throw Error('Invalid listener argument'); this.o = a
    }, K7 = function (a, b, c) {
      this.K = a
      this.C = b; this.o = new g.VC(); this.l = new J7(this.GV, this); this.g = this.Xa = null; this.I = !1; this.B = null; this.H = ''; this.F = this.A = 0; this.D = []; this.L = c || !1
    }, hCa = function (a) {
      return {firstTestResults: [''],
        secondTestResults: !a.g.Op,
        sessionId: a.g.o,
        arrayId: a.g.Pj}
    }, iCa = function (a, b) {
      a.F = b || 0
      a.l.stop(); a.g && (a.g.g == 3 && bCa(a.g), YBa(a.g)); a.F = 0
    }, L7 = function (a) { return !!a.g && a.g.g == 3 }, jCa = function (a, b) { (a.C.loungeIdToken = b) || a.l.stop() }, M7 = function (a) {
      this.port = this.domain = ''
      this.g = '/api/lounge'; this.l = !0; a = a || window.document.location.href; var b = g.Gg(a) || ''; b && (this.port = ':' + b); this.domain = g.Fg(a) || ''; a = g.Hb; a.search('MSIE') >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.Ab(a, '10.0') < 0 && (this.l = !1))
    }, N7 = function (a, b) {
      var c = a.g
      if (g.t(void 0) ? 0 : a.l)c = 'https://' + a.domain + a.port + a.g; return g.Pg(c + b, {})
    }, O7 = function (a, b, c, d, e) {
      a = {format: 'JSON',
        method: 'POST',
        context: a,
        timeout: 5E3,
        withCredentials: !1,
        onSuccess: g.Fa(a.A, d, !0),
        onError: g.Fa(a.o, e),
        xd: g.Fa(a.B, e)}; c && (a.Mb = c, a.headers = {'Content-Type': 'application/x-www-form-urlencoded'}); return g.kE(b, a)
    }, nCa = function () {
      var a = kCa
      lCa(); P7.push(a); mCa(P7)
    }, Q7 = function (a, b) {
      lCa()
      var c = P7, d = oCa(a, String(b)); g.Qa(c) ? pCa(d) : (mCa(c), (0, g.B)(c, function (a) { a(d) }))
    }, lCa = function () { P7 || (P7 = g.x('yt.mdx.remote.debug.handlers_') || [], g.wa('yt.mdx.remote.debug.handlers_', P7, void 0)) }, pCa = function (a) {
      var b = (R7 + 1) % 50
      R7 = b; S7[b] = a; T7 || (T7 = b == 49)
    }, mCa = function (a) {
      var b = S7
      if (b[0]) {
        var c = R7, d = T7 ? c : -1; do { d = (d + 1) % 50; var e = b[d]; (0, g.B)(a, function (a) { a(e) }) } while (d != c)
        S7 = Array(50); R7 = -1; T7 = !1
      }
    }, oCa = function (a, b) {
      var c = ((0, g.F)() - qCa) / 1E3
      c.toFixed && (c = c.toFixed(3)); var d = []; d.push('[', c + 's', '] '); d.push('[', 'yt.mdx.remote', '] '); d.push(a + ': ' + b, '\n'); return d.join('')
    }, U7 = function (a) {
      g.FF.call(this)
      this.D = a; this.g = []
    }, rCa = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id)
      if (c) { var d = c.name; c.id = b.id || c.id; c.name = b.name; c.token = b.token; c.uuid = b.uuid || c.uuid; return c.name != d }a.g.push(b); return !0
    }, sCa = function (a, b) {
      var c = a.g.length != b.length
      a.g = (0, g.Jd)(a.g, function (a) { return !!X6(b, a) })
      for (var d = 0, e = b.length; d < e; d++)c = rCa(a, b[d]) || c; return c
    }, tCa = function (a, b) {
      var c = a.g.length
      a.g = (0, g.Jd)(a.g, function (a) { return !(a || b ? !a != !b ? 0 : a.id == b.id : 1) })
      return a.g.length < c
    }, V7 = function (a, b, c, d) {
      g.FF.call(this)
      this.C = a; this.B = b; this.o = c; this.A = d; this.l = 0; this.g = null; this.ya = window.NaN
    }, X7 = function (a) {
      U7.call(this, 'LocalScreenService')
      this.o = a; this.l = window.NaN; W7(this); this.info('Initializing with ' + V6(this.g))
    }, uCa = function (a) {
      if (a.g.length) {
        var b = (0, g.G)(a.g, function (a) { return a.id }), c = N7(a.o, '/pairing/get_lounge_token_batch')
        O7(a.o, c, {screen_ids: b.join(',')}, (0, g.z)(a.ZI, a), (0, g.z)(a.YI, a))
      }
    }, W7 = function (a) {
      var b = mBa(sBa())
      b = (0, g.Jd)(b, function (a) { return !a.uuid })
      return sCa(a, b)
    }, Y7 = function (a, b) {
      uBa((0, g.G)(a.g, kBa))
      b && tBa()
    }, $7 = function (a, b) {
      g.FF.call(this)
      this.C = b; var c = g.MG('yt-remote-online-screen-ids') || ''; c = c ? c.split(',') : []; for (var d = {}, e = this.C(), f = 0, k = e.length; f < k; ++f) { var l = e[f].id; d[l] = g.Pa(c, l) } this.g = d; this.B = a; this.o = this.A = window.NaN; this.l = null; Z7('Initialized with ' + g.xg(this.g))
    }, vCa = function (a, b, c) {
      var d = N7(a.B, '/pairing/get_screen_availability')
      O7(a.B, d, {lounge_token: b.token}, (0, g.z)(function (a) { a = a.screens || []; for (var d = 0, e = a.length; d < e; ++d) if (a[d].loungeToken == b.token) { c(a[d].status == 'online'); return }c(!1) }, a), (0, g.z)(function () { c(!1) }, a))
    }, a8 = function (a, b) {
      a:if (g.Nb(b) != g.Nb(a.g)) var c = !1
      else { c = g.Qb(b); for (var d = 0, e = c.length; d < e; ++d) if (!a.g[c[d]]) { c = !1; break a }c = !0 }c || (Z7('Updated online screens: ' + g.xg(a.g)), a.g = b, a.R('screenChange')); wCa(a)
    }, b8 = function (a) {
      (0, window.isNaN)(a.o) || g.XD(a.o)
      a.o = g.VD((0, g.z)(a.xu, a), a.A > 0 && a.A < (0, g.F)() ? 2E4 : 1E4)
    }, Z7 = function (a) { Q7('OnlineScreenService', a) }, xCa = function (a) {
      var b = {};
      (0, g.B)(a.C(), function (a) { a.token ? b[a.token] = a.id : this.gc('Requesting availability of screen w/o lounge token.') })
      return b
    }, wCa = function (a) {
      a = g.Qb(g.Kb(a.g, function (a) { return a }))
      g.fb(a); a.length ? g.LG('yt-remote-online-screen-ids', a.join(','), 60) : g.NG('yt-remote-online-screen-ids')
    }, c8 = function (a) {
      U7.call(this, 'ScreenService')
      this.C = a; this.l = this.o = null; this.A = []; this.B = {}; yCa(this)
    }, ACa = function (a, b, c, d, e, f) {
      a.info('getAutomaticScreenByIds ' + c + ' / ' + b)
      c || (c = a.B[b]); var k = a.je(); if (k = (c ? Y6(k, c) : null) || Y6(k, b)) { k.uuid = b; var l = d8(a, k); vCa(a.l, l, function (a) { e(a ? l : null) }) } else {
        c ? zCa(a, c, (0, g.z)(function (a) {
          var f = d8(this, new S6({name: d,
            screenId: c,
            loungeToken: a,
            dialId: b || ''})); vCa(this.l, f, function (a) { e(a ? f : null) })
        }, a), f) : e(null)
      }
    }, BCa = function (a, b) {
      for (var c = 0, d = a.g.length; c < d; ++c) if (a.g[c].name == b) return a.g[c]
      return null
    }, zCa = function (a, b, c, d) {
      a.info('requestLoungeToken_ for ' + b)
      var e = {Mb: {screen_ids: b},
        method: 'POST',
        context: a,
        onSuccess: function (a, e) { var f = e && e.screens || []; f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error('Missing lounge token in token response')) },
        onError: function () { d(Error('Request screen lounge token failed')) }}
      g.kE(N7(a.C, '/pairing/get_lounge_token_batch'), e)
    }, CCa = function (a) {
      a.g = a.o.je()
      var b = a.B, c = {}, d; for (d in b)c[b[d]] = d; b = 0; for (d = a.g.length; b < d; ++b) { var e = a.g[b]; e.uuid = c[e.id] || '' }a.info('Updated manual screens: ' + V6(a.g))
    }, yCa = function (a) {
      e8(a)
      a.o = new X7(a.C); a.o.subscribe('screenChange', (0, g.z)(a.oJ, a)); CCa(a); a.A = mBa(g.MG('yt-remote-automatic-screen-cache') || []); e8(a); a.info('Initializing automatic screens: ' + V6(a.A)); a.l = new $7(a.C, (0, g.z)(a.je, a, !0)); a.l.subscribe('screenChange', (0, g.z)(function () { this.R('onlineScreenChange') }, a))
    }, d8 = function (a, b) {
      var c = a.get(b.id)
      c ? (c.uuid = b.uuid, b = c) : ((c = Y6(a.A, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.A.push(b), g.LG('yt-remote-automatic-screen-cache', (0, g.G)(a.A, kBa))); e8(a); a.B[b.uuid] = b.id; g.LG('yt-remote-device-id-map', a.B, 31536E3); return b
    }, e8 = function (a) { a.B = g.MG('yt-remote-device-id-map') || {} }, f8 = function (a, b, c) {
      g.FF.call(this)
      this.L = c; this.H = a; this.l = b; this.o = null
    }, g8 = function (a, b) { Q7(a.L, b) }, h8 = function (a, b) {
      f8.call(this, a, b, 'CastSession')
      this.g = null; this.A = 0; this.C = (0, g.z)(this.MV, this); this.B = (0, g.z)(this.PT, this); this.A = g.VD((0, g.z)(function () { DCa(this, null) }, this), 12E4)
    }, ECa = function (a) {
      a.info('sendYoutubeMessage_: getMdxSessionStatus ' + g.xg(void 0))
      var b = {type: 'getMdxSessionStatus'}; a.g ? a.g.sendMessage('urn:x-cast:com.google.youtube.mdx', b, g.y, (0, g.z)(function () { g8(this, 'Failed to send message: getMdxSessionStatus.') }, a)) : g8(a, 'Sending yt message without session: ' + g.xg(b))
    }, DCa = function (a, b) {
      g.XD(a.A)
      if (b) { if (a.info('onConnectedScreenId_: Received screenId: ' + b), !a.o || a.o.id != b) { var c = (0, g.z)(a.Oo, a), d = (0, g.z)(a.pe, a); a.qy(b, c, d, 5) } } else a.pe(Error('Waiting for session status timed out.'))
    }, i8 = function (a, b, c) {
      f8.call(this, a, b, 'DialSession')
      this.A = this.F = null; this.I = ''; this.N = c; this.B = null; this.D = g.y; this.C = window.NaN; this.K = (0, g.z)(this.PV, this); this.g = g.y
    }, FCa = function (a) {
      a.g = a.H.vE(a.I, a.l.label, a.l.friendlyName, (0, g.z)(function (a) {
        this.g = g.y
        this.Oo(a)
      }, a), (0, g.z)(function (a) {
        this.g = g.y
        this.pe(a)
      }, a))
    }, GCa = function (a) {
      var b = {}
      b.pairingCode = a.I; b.theme = a.N; if (a.B) { var c = a.B.currentTime || 0; b.v = a.B.videoId; b.t = c }wBa() && (b.env_useStageMdx = 1); return g.Ng(b)
    }, j8 = function (a, b) {
      f8.call(this, a, b, 'ManualSession')
      this.g = g.VD((0, g.z)(this.Rj, this, null), 150)
    }, k8 = function (a, b, c, d) {
      g.FF.call(this)
      this.l = a; this.D = b || '233637DE'; this.C = c || 'cl'; this.F = d || !1; this.g = null; this.B = !1; this.o = []; this.A = (0, g.z)(this.pS, this)
    }, HCa = function (a, b) { return b ? g.La(a.o, function (a) { return T6(b, a.label) }, a) : null }, l8 = function (a) { Q7('Controller', a) }, kCa = function (a) { window.chrome && window.chrome.cast && window.chrome.cast.logMessage && window.chrome.cast.logMessage(a) }, m8 = function (a) { return a.B || !!a.o.length || !!a.g }, n8 = function (a, b, c) {
      b != a.g && (g.Ze(a.g), (a.g = b) ? (c ? a.R('yt-remote-cast2-receiver-resumed', b.l) : a.R('yt-remote-cast2-receiver-selected',
        b.l), b.subscribe('sessionScreen', (0, g.z)(a.jC, a, b)), b.o ? a.R('yt-remote-cast2-session-change', b.o) : c && a.g.Rj(null)) : a.R('yt-remote-cast2-session-change', null))
    }, ICa = function (a) {
      var b = a.l.uE(), c = a.g && a.g.l
      a = (0, g.G)(b, function (a) { c && T6(a, c.label) && (c = null); var b = a.uuid ? a.uuid : a.id, d = HCa(this, a); d ? (d.label = b, d.friendlyName = a.name) : (d = new window.chrome.cast.Receiver(b, a.name), d.receiverType = window.chrome.cast.ReceiverType.CUSTOM); return d }, a)
      c && (c.receiverType != window.chrome.cast.ReceiverType.CUSTOM && (c = new window.chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = window.chrome.cast.ReceiverType.CUSTOM), a.push(c)); return a
    }, OCa = function (a, b, c, d, e, f, k) {
      JCa() ? KCa(b, e, f, k) && (p8(!0), window.chrome && window.chrome.cast && window.chrome.cast.isAvailable ? LCa(a, c) : (window.__onGCastApiAvailable = function (b, d) {
        b ? LCa(a, c) : (q8('Failed to load cast API: ' + d), r8(!1), p8(!1), g.NG('yt-remote-cast-available'), g.NG('yt-remote-cast-receiver'), MCa(),
          c(!1))
      }, d ? window.spf ? window.spf.script.load('https://www.gstatic.com/cv/js/sender/v1/cast_sender.js', '', void 0) : zBa() : i7('CriOS') ? EBa() : i7('Android') && i7('Chrome/') && window.navigator.presentation ? FBa() : window.chrome && window.navigator.presentation && !i7('Edge') ? (j7(), f7(NCa.map(CBa))) : g7())) : o8('Cannot initialize because not running Chrome')
    }, MCa = function () {
      o8('dispose')
      var a = s8(); a && a.dispose(); g.wa('yt.mdx.remote.cloudview.instance_', null, void 0); PCa(!1); g.SF(t8); t8.length = 0
    }, u8 = function () { return !!g.MG('yt-remote-cast-installed') }, QCa = function () {
      var a = g.MG('yt-remote-cast-receiver')
      return a ? a.friendlyName : null
    }, RCa = function () {
      o8('clearCurrentReceiver')
      g.NG('yt-remote-cast-receiver')
    }, SCa = function () { return u8() ? s8() ? s8().getCastSession() : (q8('getCastSelector: Cast is not initialized.'), null) : (q8('getCastSelector: Cast API is not installed!'), null) }, w8 = function () { u8() ? s8() ? v8() ? (o8('Requesting cast selector.'), s8().requestSession()) : (o8('Wait for cast API to be ready to request the session.'), t8.push(g.RF('yt-remote-cast2-api-ready', w8))) : q8('requestCastSelector: Cast is not initialized.') : q8('requestCastSelector: Cast API is not installed!') }, x8 =
function (a, b) { v8() ? s8().setConnectedScreenStatus(a, b) : q8('setConnectedScreenStatus called before ready.') }, JCa = function () {
      var a = g.Hb.search(/ (CrMo|Chrome|CriOS)\//) >= 0
      return g.uI || a
    }, TCa = function (a, b) { s8().init(a, b) }, KCa = function (a, b, c, d) {
      var e = !1
      s8() || (a = new k8(a, b, c, d), a.subscribe('yt-remote-cast2-availability-change', function (a) { g.LG('yt-remote-cast-available', a); g.VF('yt-remote-cast2-availability-change', a) }), a.subscribe('yt-remote-cast2-receiver-selected', function (a) {
        o8('onReceiverSelected: ' + a.friendlyName)
        g.LG('yt-remote-cast-receiver', a); g.VF('yt-remote-cast2-receiver-selected', a)
      }), a.subscribe('yt-remote-cast2-receiver-resumed', function (a) {
          o8('onReceiverResumed: ' + a.friendlyName)
          g.LG('yt-remote-cast-receiver', a)
        }), a.subscribe('yt-remote-cast2-session-change', function (a) {
          o8('onSessionChange: ' + U6(a))
          a || g.NG('yt-remote-cast-receiver'); g.VF('yt-remote-cast2-session-change', a)
        }), g.wa('yt.mdx.remote.cloudview.instance_', a, void 0), e = !0)
      o8('cloudview.createSingleton_: ' + e); return e
    }, s8 = function () { return g.x('yt.mdx.remote.cloudview.instance_') }, LCa = function (a, b) {
      r8(!0)
      p8(!1); TCa(a, function (a) { a ? (PCa(!0), g.UF('yt-remote-cast2-api-ready')) : (q8('Failed to initialize cast API.'), r8(!1), g.NG('yt-remote-cast-available'), g.NG('yt-remote-cast-receiver'), MCa()); b(a) })
    }, o8 = function (a) { Q7('cloudview', a) }, q8 = function (a) { Q7('cloudview', a) }, r8 = function (a) {
      o8('setCastInstalled_ ' + a)
      g.LG('yt-remote-cast-installed', a)
    }, v8 = function () { return !!g.x('yt.mdx.remote.cloudview.apiReady_') }, PCa = function (a) {
      o8('setApiReady_ ' + a)
      g.wa('yt.mdx.remote.cloudview.apiReady_', a, void 0)
    }, p8 = function (a) { g.wa('yt.mdx.remote.cloudview.initializing_', a, void 0) }, y8 = function (a) {
      this.index = -1
      this.videoId = this.listId = ''; this.volume = this.g = -1; this.muted = !1; this.audioTrackId = null; this.D = this.F = 0; this.l = null; this.hasNext = this.Nf = !1; this.I = this.H = this.o = this.B = 0; this.A = window.NaN; this.C = !1; this.reset(a)
    }, z8 = function (a) {
      a.audioTrackId = null
      a.l = null; a.g = -1; a.Nf = !1; a.hasNext = !1; a.F = 0; a.D = (0, g.F)(); a.B = 0; a.o = 0; a.H = 0; a.I = 0; a.A = window.NaN; a.C = !1
    }, A8 = function (a) { return a.kb() ? ((0, g.F)() - a.D) / 1E3 : 0 }, B8 = function (a, b) {
      a.F = b
      a.D = (0, g.F)()
    }, C8 = function (a) {
      switch (a.g) {
        case 1:case 1081:return ((0, g.F)() - a.D) / 1E3 + a.F
        case -1E3:return 0
      } return a.F
    }, D8 = function (a, b, c) {
      var d = a.videoId
      a.videoId = b; a.index = c; b != d && z8(a)
    }, E8 = function (a) {
      var b = {}
      b.index = a.index; b.listId = a.listId; b.videoId = a.videoId; b.playerState = a.g; b.volume = a.volume; b.muted = a.muted; b.audioTrackId = a.audioTrackId; b.trackData = g.bc(a.l); b.hasPrevious = a.Nf; b.hasNext = a.hasNext; b.playerTime = a.F; b.playerTimeAt = a.D; b.seekableStart = a.B; b.seekableEnd = a.o; b.duration = a.H; b.loadedTime = a.I; b.liveIngestionTime = a.A; return b
    }, G8 = function (a, b) {
      g.FF.call(this)
      this.g = 0; this.A = a; this.C = []; this.B = new g.lC(); this.o = this.l = null; this.H = (0, g.z)(this.LP, this); this.D = (0, g.z)(this.Ql, this); this.F = (0, g.z)(this.KP, this); this.I = (0, g.z)(this.XP, this); var c = 0; a ? (c = a.getProxyState(), c != 3 && (a.subscribe('proxyStateChange', this.tv, this), UCa(this))) : c = 3; c != 0 && (b ? this.tv(c) : g.VD((0, g.z)(function () { this.tv(c) }, this), 0))
      var d = SCa(); d && F8(this, d); this.subscribe('yt-remote-cast2-session-change', this.I)
    }, H8 = function (a) { return new y8(a.A.getPlayerContextData()) }, UCa = function (a) { (0, g.B)('nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange'.split(' '), function (a) { this.C.push(this.A.subscribe(a, g.Fa(this.kS, a), this)) }, a) }, VCa = function (a) {
      (0, g.B)(a.C, function (a) { this.A.unsubscribeByKey(a) }, a)
      a.C.length = 0
    }, I8 = function (a, b) { a.B.Dc() < 50 && g.nC(a.B, b) }, K8 = function (a, b, c) {
      var d = H8(a)
      B8(d, c); d.g != -1E3 && (d.g = b); J8(a, d)
    }, L8 = function (a, b, c) { a.A.sendMessage(b, c) }, J8 = function (a, b) {
      VCa(a)
      a.A.setPlayerContextData(E8(b)); UCa(a)
    }, F8 = function (a, b) {
      a.o && (a.o.removeUpdateListener(a.H), a.o.removeMediaListener(a.D), a.Ql(null))
      a.o = b; a.o && (Q7('CP', 'Setting cast session: ' + a.o.sessionId), a.o.addUpdateListener(a.H), a.o.addMediaListener(a.D), a.o.media.length && a.Ql(a.o.media[0]))
    }, WCa = function (a) {
      var b = a.l.media, c = a.l.customData
      if (b && c) { var d = H8(a); b.contentId != d.videoId && Q7('CP', 'Cast changing video to: ' + b.contentId); d.videoId = b.contentId; d.g = c.playerState; B8(d, a.l.getEstimatedTime()); J8(a, d) } else Q7('CP', 'No cast media video. Ignoring state update.')
    }, M8 = function (a, b, c) {
      return (0, g.z)(function (a) {
        this.gc('Failed to ' + b + ' with cast v2 channel. Error code: ' + a.code)
        a.code != window.chrome.cast.ErrorCode.TIMEOUT && (this.gc('Retrying ' + b + ' using MDx browser channel.'), L8(this, b, c))
      }, a)
    }, N8 = function (a, b, c) {
      g.FF.call(this)
      this.B = window.NaN; this.N = !1; this.I = this.H = this.K = this.L = window.NaN; this.U = []; this.A = this.D = this.o = this.Za = this.g = null; this.pa = a; this.U.push(g.oF(window, 'beforeunload', (0, g.z)(this.OI, this))); this.l = []; this.Za = new y8(); this.Z = b.id; this.g = XCa(this, c); this.g.subscribe('handlerOpened', this.PP, this); this.g.subscribe('handlerClosed', this.MP, this); this.g.subscribe('handlerError', this.NP, this); this.g.subscribe('handlerMessage', this.OP, this); jCa(this.g, b.token); this.subscribe('remoteQueueChange', function () {
        var a =
this.Za.videoId; g.OG() && g.LG('yt-remote-session-video-id', a)
      }, this)
    }, O8 = function (a) { Q7('conn', a) }, XCa = function (a, b) { return new K7(N7(a.pa, '/bc'), b) }, P8 = function (a, b) { a.R('proxyStateChange', b) }, YCa = function (a) {
      a.B = g.VD((0, g.z)(function () {
        O8('Connecting timeout')
        this.C(1)
      }, a), 2E4)
    }, Q8 = function (a) {
      g.XD(a.B)
      a.B = window.NaN
    }, R8 = function (a) {
      g.XD(a.L)
      a.L = window.NaN
    }, ZCa = function (a) {
      S8(a)
      a.K = g.VD((0, g.z)(function () { T8(this, 'getNowPlaying') }, a), 2E4)
    }, S8 = function (a) {
      g.XD(a.K)
      a.K = window.NaN
    }, aDa = function (a, b) {
      b && (Q8(a), R8(a))
      b == (L7(a.g) && (0, window.isNaN)(a.B)) ? b && (P8(a, 1), T8(a, 'getSubtitlesTrack')) : b ? (a.X() && a.Za.reset(), P8(a, 1), T8(a, 'getNowPlaying'), $Ca(a)) : a.C(1)
    }, bDa = function (a, b) {
      var c = b.params.videoId
      delete b.params.videoId; c == a.Za.videoId && (g.Wb(b.params) ? a.Za.l = null : a.Za.l = b.params, a.R('remotePlayerChange'))
    }, cDa = function (a, b) {
      var c = b.params.videoId || b.params.video_id, d = (0, window.parseInt)(b.params.currentIndex, 10)
      a.Za.listId = b.params.listId || a.Za.listId; D8(a.Za, c, d); a.R('remoteQueueChange')
    }, eDa = function (a, b) {
      b.params = b.params || {}
      cDa(a, b); dDa(a, b); a.R('autoplayDismissed')
    }, dDa = function (a, b) {
      var c = (0, window.parseInt)(b.params.currentTime || b.params.current_time, 10)
      B8(a.Za, (0, window.isNaN)(c) ? 0 : c); c = (0, window.parseInt)(b.params.state, 10); c = (0, window.isNaN)(c) ? -1 : c; c == -1 && a.Za.g == -1E3 && (c = -1E3); a.Za.g = c; c = Number(b.params.loadedTime); a.Za.I = (0, window.isNaN)(c) ? 0 : c; c = Number(b.params.duration); a.Za.H = (0, window.isNaN)(c) ? 0 : c; c = a.Za; var d = Number(b.params.liveIngestionTime); c.A = d; c.C = (0, window.isNaN)(d) ? !1 : !0; c = a.Za; d = Number(b.params.seekableStartTime); var e = Number(b.params.seekableEndTime); c.B = (0, window.isNaN)(d) ? 0 : d; c.o = (0, window.isNaN)(e) ? 0 : e; a.Za.g == 1 ? ZCa(a) : S8(a)
      a.R('remotePlayerChange')
    }, fDa = function (a, b) {
      if (a.Za.g != -1E3) {
        var c = 1085
        switch ((0, window.parseInt)(b.params.adState, 10)) { case 1:c = 1081; break; case 2:c = 1084; break; case 0:c = 1083 }a.Za.g = c; c = (0, window.parseInt)(b.params.currentTime, 10); B8(a.Za, (0, window.isNaN)(c) ? 0 : c); a.R('remotePlayerChange')
      }
    }, gDa = function (a, b) {
      var c = b.params.muted == 'true'
      a.Za.volume = (0, window.parseInt)(b.params.volume, 10); a.Za.muted = c; a.R('remotePlayerChange')
    }, hDa = function (a, b) {
      a.D = b.params.videoId
      a.R('nowAutoplaying', (0, window.parseInt)(b.params.timeout, 10))
    }, iDa = function (a, b) {
      var c = b.params.hasNext == 'true'
      a.Za.Nf = b.params.hasPrevious == 'true'; a.Za.hasNext = c; a.R('previousNextChange')
    }, $Ca = function (a) {
      g.XD(a.I)
      a.I = g.VD((0, g.z)(a.C, a, 1), 864E5)
    }, T8 = function (a, b, c) {
      c ? O8('Sending: action=' + b + ', params=' + g.xg(c)) : O8('Sending: action=' + b)
      a.g.sendMessage(b, c)
    }, U8 = function (a) {
      U7.call(this, 'ScreenServiceProxy')
      this.ed = a; this.l = []; this.l.push(this.ed.$_s('screenChange', (0, g.z)(this.KV, this))); this.l.push(this.ed.$_s('onlineScreenChange', (0, g.z)(this.LR, this)))
    }, nDa = function (a) {
      var b = {device: 'Desktop',
        app: 'youtube-desktop'}; b = g.PD('MDX_CONFIG') || b; oBa(); b7(); V8 || (V8 = new M7(b ? b.loungeApiHost : void 0), wBa() && (V8.g = '/api/loungedev')); W8 || (W8 = g.x('yt.mdx.remote.deferredProxies_') || [], g.wa('yt.mdx.remote.deferredProxies_', W8, void 0)); jDa(); var c = X8(); if (!c) {
        var d = new c8(V8); g.wa('yt.mdx.remote.screenService_', d, void 0); c = X8(); var e = !1, f = void 0, k = void 0, l = !1; b && (e = !!b.loadCastApiSetupScript, f = b.appId, k = b.theme, l = !!b.disableDial); OCa(a, d, function (a) {
          a ? Y8() && x8(Y8(), 'YouTube TV') : d.subscribe('onlineScreenChange',
            function () { g.VF('yt-remote-receiver-availability-change') })
        }, e, f, k, l)
      }b && !g.x('yt.mdx.remote.initialized_') && (g.wa('yt.mdx.remote.initialized_', !0, void 0), Z8('Initializing: ' + g.xg(b)), $8.push(g.RF('yt-remote-cast2-availability-change', function () { g.VF('yt-remote-receiver-availability-change') })), $8.push(g.RF('yt-remote-cast2-receiver-selected', function () {
        a9(null)
        g.VF('yt-remote-auto-connect', 'cast-selector-receiver')
      })), $8.push(g.RF('yt-remote-cast2-receiver-resumed', function () { g.VF('yt-remote-receiver-resumed', 'cast-selector-receiver') })), $8.push(g.RF('yt-remote-cast2-session-change', kDa)), $8.push(g.RF('yt-remote-connection-change', function (a) { a ? x8(Y8(), 'YouTube TV') : b9() || (x8(null, null), RCa()) })), a = c9(), b.isAuto && (a.id += '#dial'), g.LF('desktop_enable_autoplay') && (a.capabilities = ['atp']), a.name = b.device, a.app = b.app, (k = b.theme) && (a.theme = k), Z8(' -- with channel params: ' +
g.xg(a)), lDa(a), c.start(), Y8() || mDa())
    }, pDa = function () {
      var a = oDa()
      u8() && g.MG('yt-remote-cast-available') && a.push({key: 'cast-selector-receiver', name: 'Cast...'}); return a
    }, oDa = function () {
      var a = X8().ed.$_gos()
      var b = d9(); b && e9() && (X6(a, b) || a.push(b)); return nBa(a)
    }, f9 = function () {
      var a = qDa()
      !a && u8() && QCa() && (a = {key: 'cast-selector-receiver', name: QCa()}); return a
    }, qDa = function () {
      var a = oDa(), b = d9()
      b || (b = b9()); return g.La(a, function (a) { return b && T6(b, a.key) ? !0 : !1 })
    }, d9 = function () {
      var a = Y8()
      if (!a) return null; var b = X8().je(); return Y6(b, a)
    }, kDa = function (a) {
      Z8('remote.onCastSessionChange_: ' + U6(a))
      if (a) { var b = d9(); b && b.id == a.id ? x8(b.id, 'YouTube TV') : (b && g9(), h9(a, 1)) } else e9() && g9()
    }, g9 = function () {
      v8() ? s8().stopSession() : q8('stopSession called before API ready.')
      var a = e9(); a && (a.disconnect(1), i9(null))
    }, j9 = function () {
      var a = e9()
      return !!a && a.getProxyState() != 3
    }, Z8 = function (a) { Q7('remote', a) }, X8 = function () {
      if (!k9) {
        var a = g.x('yt.mdx.remote.screenService_')
        k9 = a ? new U8(a) : null
      } return k9
    }, Y8 = function () { return g.x('yt.mdx.remote.currentScreenId_') }, rDa = function (a) { g.wa('yt.mdx.remote.currentScreenId_', a, void 0) }, sDa = function () { return g.x('yt.mdx.remote.connectData_') }, a9 = function (a) { g.wa('yt.mdx.remote.connectData_', a, void 0) }, e9 = function () { return g.x('yt.mdx.remote.connection_') }, i9 = function (a) {
      var b = e9()
      a9(null); a || rDa(''); g.wa('yt.mdx.remote.connection_', a, void 0); W8 && ((0, g.B)(W8, function (b) { b(a) }), W8.length = 0)
      b && !a ? g.VF('yt-remote-connection-change', !1) : !b && a && g.VF('yt-remote-connection-change', !0)
    }, b9 = function () {
      var a = g.OG()
      if (!a) return null; var b = X8().je(); return Y6(b, a)
    }, h9 = function (a, b) {
      d9() && d9()
      rDa(a.id); var c = new N8(V8, a, c9()); c.connect(b, sDa()); c.subscribe('beforeDisconnect', function (a) { g.VF('yt-remote-before-disconnect', a) })
      c.subscribe('beforeDispose', function () { e9() && i9(null) })
      i9(c)
    }, mDa = function () {
      var a = b9()
      a ? (Z8('Resume connection to: ' + U6(a)), h9(a, 0)) : (c7(), RCa(), Z8('Skipping connecting because no session screen found.'))
    }, jDa = function () {
      var a = c9()
      if (g.Wb(a)) { a = a7(); var b = g.MG('yt-remote-session-name') || '', c = g.MG('yt-remote-session-app') || ''; a = {device: 'REMOTE_CONTROL', id: a, name: b, app: c, mdxVersion: 3}; g.wa('yt.mdx.remote.channelParams_', a, void 0) }
    }, c9 = function () { return g.x('yt.mdx.remote.channelParams_') || {} }, lDa = function (a) {
      a ? (g.LG('yt-remote-session-app', a.app), g.LG('yt-remote-session-name', a.name)) : (g.NG('yt-remote-session-app'), g.NG('yt-remote-session-name'))
      g.wa('yt.mdx.remote.channelParams_', a, void 0)
    }, l9 = function (a, b, c) {
      g.M.call(this)
      this.F = a; this.l = b; this.o = new g.CF(this); g.N(this, this.o); this.o.O(b, 'onCaptionsTrackListChanged', this.eR); this.o.O(b, 'captionschanged', this.JP); this.o.O(b, 'captionssettingschanged', this.JD); this.o.O(b, 'videoplayerreset', this.Qo); this.o.O(b, 'mdxautoplaycancel', this.VH); this.U = this.o.O(b, 'onVolumeChange', this.TB); this.D = !1; this.g = c; c.subscribe('proxyStateChange', this.gC, this); c.subscribe('remotePlayerChange', this.Tl, this); c.subscribe('remoteQueueChange', this.Qo, this); c.subscribe('autoplayUpNext', this.DB,
        this); c.subscribe('previousNextChange', this.dC, this); c.subscribe('nowAutoplaying', this.VB, this); c.subscribe('autoplayDismissed', this.CB, this); this.suggestion = null; this.H = new g.zP(64); this.A = new g.Wt(this.FD, 500, this); g.N(this, this.A); this.B = new g.Wt(this.GD, 1E3, this); g.N(this, this.B); this.K = new k7(this.nV, 0, this); g.N(this, this.K); this.C = {}; this.L = new g.Wt(this.gE, 1E3, this); g.N(this, this.L); this.I = new g.Sk(this.JN, 1E3, this); g.N(this, this.I); this.N = g.y; this.JD(); this.Qo(); this.Tl()
    }, m9 = function (a, b) {
      var c =
a.F, d = a.l.getVideoData().lengthSeconds
      c.H = b || 0; c.g.R('progresssync', b, d)
    }, tDa = function (a) {
      m9(a, 0)
      a.A.stop(); n9(a, new g.zP(64))
    }, p9 = function (a, b) {
      if (o9(a) && !a.D) {
        var c = null
        b && (c = {style: a.l.yi()}, g.dc(c, b)); a.g.uD(a.l.getVideoData(1).videoId, c); a.C = H8(a.g).l
      }
    }, q9 = function (a, b) {
      var c = a.l.Xf()
      if (c) { var d = c.he(); var e = c.listId.toString() } var f = a.l.getVideoData(1); c = a.g; var k = f.videoId, l = d; d = f.playerParams; var m = f.Kj; f = dBa(f); var n = H8(c); l = l || 0; var q = {videoId: k, currentIndex: l}; D8(n, k, l); g.t(b) && (B8(n, b), q.currentTime = b); g.t(e) && (q.listId = e); d != null && (q.playerParams = d); m != null && (q.clickTrackingParams = m); f != null && (q.locationInfo = g.xg(f)); L8(c, 'setPlaylist', q); e || J8(c, n); n9(a, new g.zP(1))
    }, uDa = function (a, b) {
      if (b) {
        var c = a.l.yc('captions', 'tracklist', {jz: 1})
        c && c.length ? (a.l.Kd('captions', 'track', b), a.D = !1) : (a.l.Uj('captions'), a.D = !0)
      } else a.l.Kd('captions', 'track', {})
    }, o9 = function (a) { return H8(a.g).videoId == a.l.getVideoData(1).videoId }, n9 = function (a, b) {
      a.B.stop()
      var c = a.H; if (!g.EP(c, b)) { var d = g.W(b, 2); d != g.W(a.H, 2) && g.jV(a.l, d); a.H = b; vDa(a.F, c, b) }
    }, r9 = function (a) {
      g.V.call(this, {G: 'div',
        M: 'ytp-remote',
        J: [{G: 'div', M: 'ytp-remote-display-status', J: [{G: 'div', M: 'ytp-remote-display-status-icon', J: [g.Uoa()]}, {G: 'div', M: 'ytp-remote-display-status-text', J: ['{{statustext}}']}]}]}); this.o = new g.ZV(this, 250); g.N(this, this.o); this.A = a; this.O(a, 'presentingplayerstatechange', this.B); wDa(this, g.gV(a))
    }, wDa = function (a, b) {
      if (a.A.Sa() == 3) {
        var c = {RECEIVER_NAME: a.A.yc('remote', 'currentReceiver').name}
        c = g.W(b, 128) ? g.U('YTP_MDX_STATUS_ERROR_2', c) : b.kb() || g.W(b, 4) ? g.U('YTP_MDX_STATUS_PLAYING_2', c) : g.U('YTP_MDX_STATUS_CONNECTED_2', c); a.updateValue('statustext', c); a.o.show()
      } else a.o.hide()
    }, s9 = function (a, b) {
      g.i_.call(this, g.U('YTP_MDX_TITLE'), 0, a, b)
      this.o = a; this.H = {}; this.O(a, 'onMdxReceiversChange', this.K); this.O(a, 'presentingplayerstatechange', this.K); this.K()
    }, t9 = function (a) {
      g.EV.call(this, a)
      g.QG({YTP_MDX_CAST_SELECTOR: 'Cast...', YTP_MDX_MY_COMPUTER: 'This computer', YTP_MDX_PLAYER_ERROR: 'This video is not available for remote playback.', YTP_MDX_STATUS_CONNECTED_2: 'Connected to $RECEIVER_NAME', YTP_MDX_STATUS_ERROR_2: 'Error on $RECEIVER_NAME', YTP_MDX_STATUS_PLAYING_2: 'Playing on $RECEIVER_NAME', YTP_MDX_TITLE: 'Play on'}); this.o = {key: W6(), name: g.U('YTP_MDX_MY_COMPUTER')}; this.B = null; this.C = []; this.I = this.l = null; this.F = [this.o]; this.A = this.o; this.D = new g.zP(64); this.H = 0; if (!g.SM(g.X(this.g))) {
        a =
this.g; var b = g.CH(a); b && (b = b.wo()) && (b = new s9(a, b), g.N(this, b)); b = new r9(a); g.N(this, b); g.yV(a, b.element, 4)
      }
    }, vDa = function (a, b, c) {
      a.D = c
      a.g.R('presentingplayerstatechange', new g.JP(c, b))
    }, u9 = function (a, b) {
      if (b.key != a.A.key) {
        if (b.key == a.o.key)g9()
        else {
          a.A = b; var c = a.g.getPlaylistId(); var d = a.g.getVideoData(1); var e = d.videoId; if (c || e) { var f = a.g.Xf(); if (f) { var k = []; for (var l = 0; l < f.getLength(); l++)k[l] = f.Zb(l).videoId } else k = [e]; f = a.g.getCurrentTime(1); c = {videoIds: k, listId: c, videoId: e, playerParams: d.playerParams, clickTrackingParams: d.Kj, index: Math.max(a.g.kA(), 0), currentTime: f == 0 ? void 0 : f}; (d = dBa(d)) && (c.locationInfo = d); d = c } else d = null; Z8('Connecting to: ' + g.xg(b)); b.key == 'cast-selector-receiver' ? (a9(d || null), v8() ? s8().setLaunchParams(d || null)
            : q8('setLaunchParams called before ready.')) : !d && j9() && Y8() == b.key ? g.VF('yt-remote-connection-change', !0) : (g9(), a9(d || null), d = X8().je(), (d = Y6(d, b.key)) && h9(d, 1))
        }
      }
    }, LBa = {'\x00': '\\0',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\x0B': '\\x0B',
      '"': '\\"',
      '\\': '\\\\',
      '<': '<'}, u7 = {"'": "\\'"}, xDa = {}, jBa = {bX: 'atp', w1: 'ska', M0: 'que', Y_: 'mus', r1: 'sus', jZ: 'dsp'}
  R6.prototype.nn = function () { var a = new R6({id: this.id, name: this.name, app: this.app, type: this.type, user: this.username, userAvatarUri: this.avatar, obfuscatedGaiaId: this.obfuscatedGaiaId, theme: this.theme, capabilities: Array.from(this.capabilities.values()).join(','), experiments: Array.from(this.experiments.values()).join(',')}); a.o = this.o; a.l = this.l; a.g = this.g }
  var d7, $6 = '', h7 = e7('loadGamesSDK') ? '/cast_game_sender.js' : '/cast_sender.js', DBa = e7('loadCastFramework') || e7('loadCastApplicationFramework'), NCa = ['pkedcjkdefgpdelpbcmbmeomcjbeemfm', 'enhhojjnijigcajfphajepfemndkmdlo']; g.A(k7, g.M); g.h = k7.prototype; g.h.JI = function (a) { this.A = arguments; this.g = !1; this.ya ? this.o = (0, g.F)() + this.fd : this.ya = g.rg(this.B, this.fd) }
  g.h.stop = function () { this.ya && (g.sg(this.ya), this.ya = null); this.o = null; this.g = !1; this.A = [] }
  g.h.pause = function () { ++this.l }
  g.h.resume = function () { this.l && (--this.l, !this.l && this.g && (this.g = !1, this.C.apply(null, this.A))) }
  g.h.V = function () { this.stop(); k7.ba.V.call(this) }
  g.h.KI = function () { this.o ? (this.ya = g.rg(this.B, this.o - (0, g.F)()), this.o = null) : (this.ya = null, this.l ? this.g = !0 : (this.g = !1, this.C.apply(null, this.A))) }; l7.prototype.stringify = function (a) { return g.w.JSON.stringify(a, void 0) }
  l7.prototype.parse = function (a) { return g.w.JSON.parse(a, void 0) }; g.h = m7.prototype; g.h.gi = null; g.h.zf = !1; g.h.Dk = null; g.h.hv = null; g.h.jk = null; g.h.Bj = null; g.h.eh = null; g.h.Ch = null; g.h.Fi = null; g.h.Rc = null; g.h.rm = 0; g.h.Af = null; g.h.Pp = null; g.h.fh = null; g.h.ll = -1; g.h.bD = !0; g.h.Qh = !1; g.h.Cr = 0; g.h.cp = null; var JBa = {}, p7 = {}; g.h = m7.prototype; g.h.setTimeout = function (a) { this.A = a }
  g.h.gU = function (a) { a = a.target; var b = this.cp; b && g.gx(a) == 3 ? b.zj() : this.oE(a) }
  g.h.oE = function (a) {
    try {
      if (a == this.Rc) {
        a: {
          var b = g.gx(this.Rc), c = this.Rc.l, d = this.Rc.getStatus(); if (g.wd && !g.qc(10) || g.yd && !g.pc('420+')) { if (b < 4) break a } else if (b < 3 || b == 3 && !g.cf && !g.kx(this.Rc)) break a; this.Qh || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.g.tf(3) : this.g.tf(2)); w7(this); var e = this.Rc.getStatus(); this.ll = e; var f = g.kx(this.Rc); (this.zf = e == 200) ? (b == 4 && s7(this), this.B ? (KBa(this, b, f), g.cf && this.zf && b == 3 && (this.W.T(this.l, 'tick', this.cU), this.l.start())) : r7(this, f), this.zf && !this.Qh && (b == 4 ? this.g.No(this)
            : (this.zf = !1, o7(this)))) : (e == 400 && f.indexOf('Unknown SID') > 0 ? (this.fh = 3, q7(13)) : (this.fh = 0, q7(14)), s7(this), t7(this))
        }
      }
    } catch (k) { this.Rc && g.kx(this.Rc) } finally {}
  }
  g.h.cU = function () { var a = g.gx(this.Rc), b = g.kx(this.Rc); this.rm < b.length && (w7(this), KBa(this, a, b), this.zf && a != 4 && o7(this)) }
  g.h.mT = function (a) { v7((0, g.z)(this.lT, this, a), 0) }
  g.h.lT = function (a) { this.Qh || (w7(this), r7(this, a), o7(this)) }
  g.h.oC = function (a) { v7((0, g.z)(this.kT, this, a), 0) }
  g.h.kT = function (a) { this.Qh || (s7(this), this.zf = a, this.g.No(this), this.g.tf(4)) }
  g.h.cancel = function () { this.Qh = !0; s7(this) }
  g.h.CT = function () { this.Dk = null; var a = (0, g.F)(); a - this.hv >= 0 ? (this.Bj != 2 && this.g.tf(3), s7(this), this.fh = 2, q7(18), t7(this)) : NBa(this, this.hv - a) }; g.h = QBa.prototype; g.h.Ar = null; g.h.qe = null; g.h.ep = !1; g.h.Ay = null; g.h.Cn = null; g.h.Fs = null; g.h.Br = null; g.h.Le = null; g.h.zg = -1; g.h.kl = null; g.h.Jk = null; g.h.connect = function (a) { this.Br = a; a = y7(this.g, null, this.Br); q7(3); this.Ay = (0, g.F)(); var b = this.g.F; b != null ? (this.kl = b[0], (this.Jk = b[1]) ? (this.Le = 1, RBa(this)) : (this.Le = 2, A7(this))) : (Q6(a, 'MODE', 'init'), this.qe = new m7(this, void 0, void 0, void 0), this.qe.gi = this.Ar, n7(this.qe, a, !1, null, !0), this.Le = 0) }
  g.h.WH = function (a) { if (a) this.Le = 2, A7(this); else { q7(4); var b = this.g; b.Kf = b.Vg.zg; H7(b, 9) }a && this.tf(2) }
  g.h.Vq = function (a) { return this.g.Vq(a) }
  g.h.abort = function () { this.qe && (this.qe.cancel(), this.qe = null); this.zg = -1 }
  g.h.zy = function () { return !1 }
  g.h.hC = function (a, b) { this.zg = a.ll; if (this.Le == 0) if (b) { try { var c = this.l.parse(b) } catch (d) { c = this.g; c.Kf = this.zg; H7(c, 2); return } this.kl = c[0]; this.Jk = c[1] } else c = this.g, c.Kf = this.zg, H7(c, 2); else if (this.Le == 2) if (this.ep)q7(7), this.Fs = (0, g.F)(); else if (b == '11111') { if (q7(6), this.ep = !0, this.Cn = (0, g.F)(), c = this.Cn - this.Ay, !g.wd || g.qc(10) || c < 500) this.zg = 200, this.qe.cancel(), q7(12), z7(this.g, this, !0) } else q7(8), this.Cn = this.Fs = (0, g.F)(), this.ep = !1 }
  g.h.No = function () { this.zg = this.qe.ll; if (this.qe.zf) this.Le == 0 ? this.Jk ? (this.Le = 1, RBa(this)) : (this.Le = 2, A7(this)) : this.Le == 2 && ((!g.wd || g.qc(10) ? !this.ep : this.Fs - this.Cn < 200) ? (q7(11), z7(this.g, this, !1)) : (q7(12), z7(this.g, this, !0))); else { this.Le == 0 ? q7(9) : this.Le == 2 && q7(10); var a = this.g; a.Kf = this.zg; H7(a, 2) } }
  g.h.hm = function () { return this.g.hm() }
  g.h.isActive = function () { return this.g.isActive() }
  g.h.tf = function (a) { this.g.tf(a) }; g.h = B7.prototype; g.h.Uk = null; g.h.Wd = null; g.h.xc = null; g.h.zr = null; g.h.Gn = null; g.h.Nw = null; g.h.Sn = null; g.h.Nl = 0; g.h.bP = 0; g.h.rd = null; g.h.Xg = null; g.h.og = null; g.h.Uh = null; g.h.Vg = null; g.h.Op = null; g.h.Pj = -1; g.h.zz = -1; g.h.Kf = -1; g.h.nj = 0; g.h.Zi = 0; g.h.Sh = 8; var I7 = new g.Cf(); g.A(TBa, g.af); g.A(UBa, g.af); g.A(VBa, g.af); g.h = B7.prototype; g.h.connect = function (a, b, c, d, e) { q7(0); this.zr = b; this.Uk = c || {}; d && g.t(e) && (this.Uk.OSID = d, this.Uk.OAID = e); this.C ? (v7((0, g.z)(this.lx, this, a), 100), ZBa(this)) : this.lx(a) }
  g.h.lx = function (a) { this.Vg = new QBa(this); this.Vg.Ar = null; this.Vg.l = this.B; this.Vg.connect(a) }
  g.h.zy = function () { return this.g == 0 }
  g.h.mC = function (a) { this.Xg = null; bCa(this, a) }
  g.h.lC = function () { this.og = null; this.xc = new m7(this, this.o, 'rpc', this.D); this.xc.gi = null; this.xc.Cr = 0; var a = this.Nw.clone(); g.Dm(a, 'RID', 'rpc'); g.Dm(a, 'SID', this.o); g.Dm(a, 'CI', this.Op ? '0' : '1'); g.Dm(a, 'AID', this.Pj); C7(this, a); if (!g.wd || g.qc(10))g.Dm(a, 'TYPE', 'xmlhttp'), n7(this.xc, a, !0, this.Sn, !1); else { g.Dm(a, 'TYPE', 'html'); var b = this.xc, c = !!this.Sn; b.Bj = 3; b.eh = P6(a.clone()); MBa(b, c) } }
  g.h.hC = function (a, b) {
    if (this.g != 0 && (this.xc == a || this.Wd == a)) {
      if (this.Kf = a.ll, this.Wd == a && this.g == 3) if (this.Sh > 7) { try { var c = this.B.parse(b) } catch (f) { c = null } if (g.za(c) && c.length == 3) if (c[0] == 0)a: { if (!this.og) { if (this.xc) if (this.xc.jk + 3E3 < this.Wd.jk)E7(this), this.xc.cancel(), this.xc = null; else break a; G7(this); q7(19) } } else this.zz = c[1], this.zz - this.Pj > 0 && c[2] < 37500 && this.Op && this.Zi == 0 && !this.Uh && (this.Uh = v7((0, g.z)(this.EP, this), 6E3)); else H7(this, 11) } else b != xDa.eY.g && H7(this, 11); else if (this.xc == a &&
E7(this), !g.D(b)) { c = this.B.parse(b); g.za(c); for (var d = 0; d < c.length; d++) { var e = c[d]; this.Pj = e[0]; e = e[1]; this.g == 2 ? e[0] == 'c' ? (this.o = e[1], this.Sn = e[2], e = e[3], e != null ? this.Sh = e : this.Sh = 6, this.g = 3, this.rd && this.rd.Xw(), this.Nw = y7(this, this.hm() ? this.Sn : null, this.zr), cCa(this)) : e[0] == 'stop' && H7(this, 7) : this.g == 3 && (e[0] == 'stop' ? H7(this, 7) : e[0] != 'noop' && this.rd && this.rd.Ww(e), this.Zi = 0) } }
    }
  }
  g.h.EP = function () { this.Uh != null && (this.Uh = null, this.xc.cancel(), this.xc = null, G7(this), q7(20)) }
  g.h.No = function (a) {
    if (this.xc == a) { E7(this); this.xc = null; var b = 2 } else if (this.Wd == a) this.Wd = null, b = 1; else return; this.Kf = a.ll; if (this.g != 0) {
      if (a.zf)b == 1 ? (b = (0, g.F)() - a.jk, I7.dispatchEvent(new UBa(I7, a.Fi ? a.Fi.length : 0, b, this.nj)), D7(this), this.A.length = 0) : cCa(this); else {
        var c = a.fh, d; if (!(d = c == 3 || c == 7 || c == 0 && this.Kf > 0)) { if (d = b == 1) this.Wd || this.Xg || this.g == 1 || this.nj >= 2 ? d = !1 : (this.Xg = v7((0, g.z)(this.mC, this, a), dCa(this, this.nj)), this.nj++, d = !0); d = !(d || b == 2 && G7(this)) } if (d) {
          switch (c) {
            case 1:H7(this, 5)
              break; case 4:H7(this, 10); break; case 3:H7(this, 6); break; case 7:H7(this, 12); break; default:H7(this, 2)
          }
        }
      }
    }
  }
  g.h.sI = function (a) { if (!g.Pa(arguments, this.g)) throw Error('Unexpected channel state: ' + this.g) }
  g.h.ZU = function (a) { a ? q7(2) : (q7(1), eCa(this, 8)) }
  g.h.Vq = function (a) { if (a) throw Error("Can't create secondary domain capable XhrIo object."); a = new g.ax(); a.F = !1; return a }
  g.h.isActive = function () { return !!this.rd && this.rd.isActive(this) }
  g.h.tf = function (a) { I7.dispatchEvent(new VBa(I7, a)) }
  g.h.hm = function () { return !(!g.wd || g.qc(10)) }
  g.h = fCa.prototype; g.h.Xw = function () {}
  g.h.Ww = function () {}
  g.h.Vw = function () {}
  g.h.Jq = function () {}
  g.h.ey = function () { return {} }
  g.h.isActive = function () { return !0 }; g.A(J7, g.M); g.h = J7.prototype; g.h.dT = function () { this.fd = Math.min(3E5, 2 * this.fd); this.o(); this.l && this.start() }
  g.h.start = function () { var a = this.fd + 15E3 * Math.random(); g.Xt(this.g, a); this.l = (0, g.F)() + a }
  g.h.stop = function () { this.g.stop(); this.l = 0 }
  g.h.isActive = function () { return this.g.isActive() }
  g.h.reset = function () { this.g.stop(); this.fd = 5E3 }; g.A(K7, fCa); g.h = K7.prototype; g.h.subscribe = function (a, b, c) { return this.o.subscribe(a, b, c) }
  g.h.unsubscribe = function (a, b, c) { return this.o.unsubscribe(a, b, c) }
  g.h.Od = function (a) { return this.o.Od(a) }
  g.h.R = function (a, b) { return this.o.R.apply(this.o, arguments) }
  g.h.dispose = function () { this.I || (this.I = !0, g.Ze(this.o), iCa(this), g.Ze(this.l), this.l = null) }
  g.h.ia = function () { return this.I }
  g.h.connect = function (a, b, c) { if (!this.g || this.g.g != 2) { this.H = ''; this.l.stop(); this.B = a || null; this.A = b || 0; a = this.K + '/test'; b = this.K + '/bind'; var d = new B7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.L), e = this.g; e && (e.rd = null); d.rd = this; this.g = d; e ? this.g.connect(a, b, this.C, e.o, e.Pj) : c ? this.g.connect(a, b, this.C, c.sessionId, c.arrayId) : this.g.connect(a, b, this.C) } }
  g.h.sendMessage = function (a, b) { var c = {_sc: a}; b && g.dc(c, b); this.l.isActive() || (this.g ? this.g.g : 0) == 2 ? this.D.push(c) : L7(this) && $Ba(this.g, c) }
  g.h.Xw = function () { this.l.reset(); this.B = null; this.A = 0; if (this.D.length) { var a = this.D; this.D = []; for (var b = 0, c = a.length; b < c; ++b)$Ba(this.g, a[b]) } this.R('handlerOpened') }
  g.h.Vw = function (a) { var b = a == 2 && this.g.Kf == 401; a == 4 || b || this.l.start(); this.R('handlerError', a) }
  g.h.Jq = function (a) { if (!this.l.isActive()) this.R('handlerClosed'); else if (a) for (var b = 0, c = a.length; b < c; ++b) { var d = a[b].map; d && this.D.push(d) } }
  g.h.ey = function () { var a = {v: 2}; this.H && (a.gsessionid = this.H); this.A != 0 && (a.ui = '' + this.A); this.F != 0 && (a.ui = '' + this.F); this.B && g.dc(a, this.B); return a }
  g.h.Ww = function (a) { a[0] == 'S' ? this.H = a[1] : a[0] == 'gracefulReconnect' ? (this.l.start(), YBa(this.g)) : this.R('handlerMessage', new gCa(a[0], a[1])) }
  g.h.GV = function () { this.l.isActive(); var a = this.g, b = 0; a.xc && b++; a.Wd && b++; b != 0 || this.connect(this.B, this.A) }; M7.prototype.A = function (a, b, c, d) { b ? a(d) : a({text: c.responseText}) }
  M7.prototype.o = function (a, b) { a(Error('Request error: ' + b.status)) }
  M7.prototype.B = function (a) { a(Error('request timed out')) }; var qCa = (0, g.F)(), P7 = null, S7 = Array(50), R7 = -1, T7 = !1; g.A(U7, g.FF); U7.prototype.je = function () { return this.g }
  U7.prototype.contains = function (a) { return !!X6(this.g, a) }
  U7.prototype.get = function (a) { return a ? Y6(this.g, a) : null }
  U7.prototype.info = function (a) { Q7(this.D, a) }; g.A(V7, g.FF); var yDa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4]; g.h = V7.prototype; g.h.start = function () { !this.g && (0, window.isNaN)(this.ya) && this.tE() }
  g.h.stop = function () { this.g && (this.g.abort(), this.g = null); (0, window.isNaN)(this.ya) || (g.XD(this.ya), this.ya = window.NaN) }
  g.h.V = function () { this.stop(); V7.ba.V.call(this) }
  g.h.tE = function () { this.ya = window.NaN; this.g = g.kE(N7(this.C, '/pairing/get_screen'), {method: 'POST', Mb: {pairing_code: this.B}, timeout: 5E3, onSuccess: (0, g.z)(this.IV, this), onError: (0, g.z)(this.HV, this), xd: (0, g.z)(this.JV, this)}) }
  g.h.IV = function (a, b) { this.g = null; var c = b.screen || {}; c.dialId = this.o; c.name = this.A; this.R('pairingComplete', new S6(c)) }
  g.h.HV = function (a) { this.g = null; a.status && a.status == 404 ? this.l >= yDa.length ? this.R('pairingFailed', Error('DIAL polling timed out')) : (a = yDa[this.l], this.ya = g.VD((0, g.z)(this.tE, this), a), this.l++) : this.R('pairingFailed', Error('Server error ' + a.status)) }
  g.h.JV = function () { this.g = null; this.R('pairingFailed', Error('Server not responding')) }; g.A(X7, U7); g.h = X7.prototype; g.h.start = function () { W7(this) && this.R('screenChange'); !g.MG('yt-remote-lounge-token-expiration') && uCa(this); g.XD(this.l); this.l = g.VD((0, g.z)(this.start, this), 1E4) }
  g.h.add = function (a, b) { W7(this); rCa(this, a); Y7(this, !1); this.R('screenChange'); b(a); a.token || uCa(this) }
  g.h.remove = function (a, b) { var c = W7(this); tCa(this, a) && (Y7(this, !1), c = !0); b(a); c && this.R('screenChange') }
  g.h.Jp = function (a, b, c, d) { var e = W7(this), f = this.get(a.id); f ? (f.name != b && (f.name = b, Y7(this, !1), e = !0), c(a)) : d(Error('no such local screen.')); e && this.R('screenChange') }
  g.h.V = function () { g.XD(this.l); X7.ba.V.call(this) }
  g.h.ZI = function (a) { W7(this); var b = this.g.length; a = a && a.screens || []; for (var c = 0, d = a.length; c < d; ++c) { var e = a[c], f = this.get(e.screenId); f && (f.token = e.loungeToken, --b) }Y7(this, !b); b && Q7(this.D, 'Missed ' + b + ' lounge tokens.') }
  g.h.YI = function (a) { Q7(this.D, 'Requesting lounge tokens failed: ' + a) }; g.A($7, g.FF); g.h = $7.prototype; g.h.start = function () { var a = (0, window.parseInt)(g.MG('yt-remote-fast-check-period') || '0', 10); (this.A = (0, g.F)() - 144E5 < a ? 0 : a) ? b8(this) : (this.A = (0, g.F)() + 3E5, g.LG('yt-remote-fast-check-period', this.A), this.xu()) }
  g.h.isEmpty = function () { return g.Wb(this.g) }
  g.h.update = function () {
    Z7('Updating availability on schedule.'); var a = this.C(), b = g.Kb(this.g, function (b, d) { return b && !!Y6(a, d) }, this)
    a8(this, b)
  }
  g.h.V = function () { g.XD(this.o); this.o = window.NaN; this.l && (this.l.abort(), this.l = null); $7.ba.V.call(this) }
  g.h.xu = function () { g.XD(this.o); this.o = window.NaN; this.l && this.l.abort(); var a = xCa(this); if (g.Nb(a)) { var b = N7(this.B, '/pairing/get_screen_availability'); this.l = O7(this.B, b, {lounge_token: g.Qb(a).join(',')}, (0, g.z)(this.JS, this, a), (0, g.z)(this.IS, this)) } else a8(this, {}), b8(this) }
  g.h.JS = function (a, b) { this.l = null; var c = g.Qb(xCa(this)); if (g.gb(c, g.Qb(a))) { c = b.screens || []; for (var d = {}, e = 0, f = c.length; e < f; ++e)d[a[c[e].loungeToken]] = c[e].status == 'online'; a8(this, d); b8(this) } else this.gc('Changing Screen set during request.'), this.xu() }
  g.h.IS = function (a) { this.gc('Screen availability failed: ' + a); this.l = null; b8(this) }
  g.h.gc = function (a) { Q7('OnlineScreenService', a) }; g.A(c8, U7); g.h = c8.prototype; g.h.start = function () { this.o.start(); this.l.start(); this.g.length && (this.R('screenChange'), this.l.isEmpty() || this.R('onlineScreenChange')) }
  g.h.add = function (a, b, c) { this.o.add(a, b, c) }
  g.h.remove = function (a, b, c) { this.o.remove(a, b, c); this.l.update() }
  g.h.Jp = function (a, b, c, d) { this.o.contains(a) ? this.o.Jp(a, b, c, d) : (a = 'Updating name of unknown screen: ' + a.name, Q7(this.D, a), d(Error(a))) }
  g.h.je = function (a) { return a ? this.g : g.Wa(this.g, (0, g.Jd)(this.A, function (a) { return !this.contains(a) }, this)) }
  g.h.uE = function () { return (0, g.Jd)(this.je(!0), function (a) { return !!this.l.g[a.id] }, this) }
  g.h.vE = function (a, b, c, d, e) {
    this.info('getDialScreenByPairingCode ' + a + ' / ' + b); var f = new V7(this.C, a, b, c); f.subscribe('pairingComplete', (0, g.z)(function (a) { g.Ze(f); d(d8(this, a)) }, this))
    f.subscribe('pairingFailed', function (a) { g.Ze(f); e(a) })
    f.start(); return (0, g.z)(f.stop, f)
  }
  g.h.LV = function (a, b, c, d) {
    g.kE(N7(this.C, '/pairing/get_screen'), {method: 'POST',
      Mb: {pairing_code: a},
      timeout: 5E3,
      onSuccess: (0, g.z)(function (a, d) { var e = new S6(d.screen || {}); if (!e.name || BCa(this, e.name)) { a: { var f = e.name; for (var m = 2, n = b(f, m); BCa(this, n);) { m++; if (m > 20) break a; n = b(f, m) }f = n }e.name = f }c(d8(this, e)) }, this),
      onError: (0, g.z)(function (a) { d(Error('pairing request failed: ' + a.status)) }, this),
      xd: (0, g.z)(function () { d(Error('pairing request timed out.')) }, this)})
  }
  g.h.V = function () { g.Ze(this.o); g.Ze(this.l); c8.ba.V.call(this) }
  g.h.oJ = function () { CCa(this); this.R('screenChange'); this.l.update() }
  c8.prototype.dispose = c8.prototype.dispose; g.A(f8, g.FF); g.h = f8.prototype; g.h.Oo = function (a) { this.o = a; this.R('sessionScreen', this.o) }
  g.h.pe = function (a) { this.ia() || (a && g8(this, '' + a), this.o = null, this.R('sessionScreen', null)) }
  g.h.info = function (a) { Q7(this.L, a) }
  g.h.xE = function () { return null }
  g.h.Eu = function (a) { var b = this.l; a ? (b.displayStatus = new window.chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null; window.chrome.cast.setReceiverDisplayStatus(b, (0, g.z)(function () { this.info('Updated receiver status for ' + b.friendlyName + ': ' + a) }, this), (0, g.z)(function () { g8(this, 'Failed to update receiver status for: ' + b.friendlyName) }, this)) }
  g.h.V = function () { this.Eu(''); f8.ba.V.call(this) }; g.A(h8, f8); g.h = h8.prototype; g.h.Du = function (a) { if (this.g) { if (this.g == a) return; g8(this, 'Overriding cast sesison with new session object'); this.g.removeUpdateListener(this.C); this.g.removeMessageListener('urn:x-cast:com.google.youtube.mdx', this.B) } this.g = a; this.g.addUpdateListener(this.C); this.g.addMessageListener('urn:x-cast:com.google.youtube.mdx', this.B); ECa(this) }
  g.h.Rj = function (a) { this.info('launchWithParams no-op for Cast: ' + g.xg(a)) }
  g.h.stop = function () { this.g ? this.g.stop((0, g.z)(function () { this.pe() }, this), (0, g.z)(function () { this.pe(Error('Failed to stop receiver app.')) }, this)) : this.pe(Error('Stopping cast device witout session.')) }
  g.h.Eu = g.y; g.h.V = function () { this.info('disposeInternal'); g.XD(this.A); this.A = 0; this.g && (this.g.removeUpdateListener(this.C), this.g.removeMessageListener('urn:x-cast:com.google.youtube.mdx', this.B)); this.g = null; h8.ba.V.call(this) }
  g.h.PT = function (a, b) { if (!this.ia()) if (b) { var c = g.Vw(b); if (g.Ca(c)) { var d = '' + c.type; c = c.data || {}; this.info('onYoutubeMessage_: ' + d + ' ' + g.xg(c)); switch (d) { case 'mdxSessionStatus':DCa(this, c.screenId); break; default:g8(this, 'Unknown youtube message: ' + d) } } else g8(this, 'Unable to parse message.') } else g8(this, 'No data in message.') }
  g.h.qy = function (a, b, c, d) { ACa(this.H, this.l.label, a, this.l.friendlyName, (0, g.z)(function (e) { e ? b(e) : d >= 0 ? (g8(this, 'Screen ' + a + ' appears to be offline. ' + d + ' retries left.'), g.VD((0, g.z)(this.qy, this, a, b, c, d - 1), 300)) : c(Error('Unable to fetch screen.')) }, this), c) }
  g.h.xE = function () { return this.g }
  g.h.MV = function (a) { this.ia() || a || (g8(this, 'Cast session died.'), this.pe()) }; g.A(i8, f8); g.h = i8.prototype; g.h.Du = function (a) { this.A = a; this.A.addUpdateListener(this.K) }
  g.h.Rj = function (a) { this.B = a; this.D() }
  g.h.stop = function () { this.g(); this.g = g.y; g.XD(this.C); this.A ? this.A.stop((0, g.z)(this.pe, this, null), (0, g.z)(this.pe, this, 'Failed to stop DIAL device.')) : this.pe() }
  g.h.V = function () { this.g(); this.g = g.y; g.XD(this.C); this.A && this.A.removeUpdateListener(this.K); this.A = null; i8.ba.V.call(this) }
  g.h.PV = function (a) { this.ia() || a || (g8(this, 'DIAL session died.'), this.g(), this.g = g.y, this.pe()) }
  g.h.os = function (a) { this.I = W6(); if (this.B) { var b = new window.chrome.cast.DialLaunchResponse(!0, GCa(this)); a(b); FCa(this) } else this.D = (0, g.z)(function () { g.XD(this.C); this.D = g.y; this.C = window.NaN; var b = new window.chrome.cast.DialLaunchResponse(!0, GCa(this)); a(b); FCa(this) }, this), this.C = g.VD((0, g.z)(function () { this.D() }, this), 100) }
  g.h.CK = function (a, b, c) {
    ACa(this.H, this.F.receiver.label, a, this.l.friendlyName, (0, g.z)(function (a) { a && a.token ? (this.Oo(a), b(new window.chrome.cast.DialLaunchResponse(!1))) : this.os(b, c) }, this), (0, g.z)(function (a) {
      g8(this, 'Failed to get DIAL screen: ' + a)
      this.os(b, c)
    }, this))
  }; g.A(j8, f8); j8.prototype.stop = function () { this.pe() }
  j8.prototype.Du = g.y; j8.prototype.Rj = function () { g.XD(this.g); this.g = window.NaN; var a = Y6(this.H.je(), this.l.label); a ? this.Oo(a) : this.pe(Error('No such screen')) }
  j8.prototype.V = function () { g.XD(this.g); this.g = window.NaN; j8.ba.V.call(this) }; g.A(k8, g.FF); g.h = k8.prototype
  g.h.init = function (a, b) {
    window.chrome.cast.timeout.requestSession = 3E4; var c = new window.chrome.cast.SessionRequest(this.D); this.F || (c.dialRequest = new window.chrome.cast.DialRequest('YouTube')); var d = window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED, e = a ? window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : window.chrome.cast.DefaultActionPolicy.CREATE_SESSION; c = new window.chrome.cast.ApiConfig(c, (0, g.z)(this.iC, this), (0, g.z)(this.tS, this), d, e); c.customDialLaunchCallback = (0, g.z)(this.oQ, this); window.chrome.cast.initialize(c,
      (0, g.z)(function () { this.ia() || (window.chrome.cast.addReceiverActionListener(this.A), nCa(), this.l.subscribe('onlineScreenChange', (0, g.z)(this.wE, this)), this.o = ICa(this), window.chrome.cast.setCustomReceivers(this.o, g.y, (0, g.z)(function (a) { this.gc('Failed to set initial custom receivers: ' + g.xg(a)) }, this)), this.R('yt-remote-cast2-availability-change', m8(this)), b(!0)) }, this), (0, g.z)(function (a) {
        this.gc('Failed to initialize API: ' + g.xg(a))
        b(!1)
      }, this))
  }
  g.h.JU = function (a, b) {
    l8('Setting connected screen ID: ' + a + ' -> ' + b); if (this.g) { var c = this.g.o; if (!a || c && c.id != a)l8('Unsetting old screen status: ' + this.g.l.friendlyName), n8(this, null) } if (a && b) {
      if (!this.g) {
        c = Y6(this.l.je(), a); if (!c) { l8('setConnectedScreenStatus: Unknown screen.'); return } var d = HCa(this, c); d || (l8('setConnectedScreenStatus: Connected receiver not custom...'), d = new window.chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), d.receiverType = window.chrome.cast.ReceiverType.CUSTOM, this.o.push(d),
          window.chrome.cast.setCustomReceivers(this.o, g.y, (0, g.z)(function (a) { this.gc('Failed to set initial custom receivers: ' + g.xg(a)) }, this)))
        l8('setConnectedScreenStatus: new active receiver: ' + d.friendlyName); n8(this, new j8(this.l, d), !0)
      } this.g.Eu(b)
    } else l8('setConnectedScreenStatus: no screen.')
  }
  g.h.KU = function (a) { this.ia() ? this.gc('Setting connection data on disposed cast v2') : this.g ? this.g.Rj(a) : this.gc('Setting connection data without a session') }
  g.h.OV = function () { this.ia() ? this.gc('Stopping session on disposed cast v2') : this.g ? (this.g.stop(), n8(this, null)) : l8('Stopping non-existing session') }
  g.h.requestSession = function () { window.chrome.cast.requestSession((0, g.z)(this.iC, this), (0, g.z)(this.OS, this)) }
  g.h.V = function () { this.l.unsubscribe('onlineScreenChange', (0, g.z)(this.wE, this)); window.chrome && window.chrome.cast && window.chrome.cast.removeReceiverActionListener(this.A); g.Ua(g.x('yt.mdx.remote.debug.handlers_') || [], kCa); g.Ze(this.g); k8.ba.V.call(this) }
  g.h.gc = function (a) { Q7('Controller', a) }
  g.h.jC = function (a, b) { this.g == a && (b || n8(this, null), this.R('yt-remote-cast2-session-change', b)) }
  g.h.pS = function (a, b) {
    if (!this.ia()) {
      if (a) {
        switch (a.friendlyName = window.chrome.cast.unescape(a.friendlyName), l8('onReceiverAction_ ' + a.label + ' / ' + a.friendlyName + '-- ' + b), b) {
          case window.chrome.cast.ReceiverAction.CAST:if (this.g) if (this.g.l.label != a.label)l8('onReceiverAction_: Stopping active receiver: ' + this.g.l.friendlyName), this.g.stop(); else { l8('onReceiverAction_: Casting to active receiver.'); this.g.o && this.R('yt-remote-cast2-session-change', this.g.o); break } switch (a.receiverType) {
            case window.chrome.cast.ReceiverType.CUSTOM:n8(this,
              new j8(this.l, a)); break; case window.chrome.cast.ReceiverType.DIAL:n8(this, new i8(this.l, a, this.C)); break; case window.chrome.cast.ReceiverType.CAST:n8(this, new h8(this.l, a)); break; default:this.gc('Unknown receiver type: ' + a.receiverType)
            } break; case window.chrome.cast.ReceiverAction.STOP:this.g && this.g.l.label == a.label ? this.g.stop() : this.gc('Stopping receiver w/o session: ' + a.friendlyName)
        }
      } else this.gc('onReceiverAction_ called without receiver.')
    }
  }
  g.h.oQ = function (a) {
    if (this.ia()) return window.Promise.reject(Error('disposed')); var b = a.receiver; b.receiverType != window.chrome.cast.ReceiverType.DIAL && (this.gc('Not DIAL receiver: ' + b.friendlyName), b.receiverType = window.chrome.cast.ReceiverType.DIAL); var c = this.g ? this.g.l : null; if (!c || c.label != b.label) return this.gc('Receiving DIAL launch request for non-clicked DIAL receiver: ' + b.friendlyName), window.Promise.reject(Error('illegal DIAL launch')); if (c && c.label == b.label && c.receiverType != window.chrome.cast.ReceiverType.DIAL) {
      if (this.g.o) {
        return l8('Reselecting dial screen.'),
        this.R('yt-remote-cast2-session-change', this.g.o), window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1))
      } this.gc('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName); n8(this, new i8(this.l, b, this.C))
    }b = this.g; b.F = a; return b.F.appState == window.chrome.cast.DialAppState.RUNNING ? new window.Promise((0, g.z)(b.CK, b, (b.F.extraData || {}).screenId || null)) : new window.Promise((0, g.z)(b.os, b))
  }
  g.h.iC = function (a) {
    if (!this.ia()) {
      l8('New cast session ID: ' + a.sessionId); var b = a.receiver; if (b.receiverType != window.chrome.cast.ReceiverType.CUSTOM) {
        if (!this.g) if (b.receiverType == window.chrome.cast.ReceiverType.CAST)l8('Got resumed cast session before resumed mdx connection.'), b.friendlyName = window.chrome.cast.unescape(b.friendlyName), n8(this, new h8(this.l, b), !0); else { this.gc('Got non-cast session without previous mdx receiver event, or mdx resume.'); return } var c = this.g.l, d = Y6(this.l.je(), c.label)
        d && T6(d, b.label) && c.receiverType != window.chrome.cast.ReceiverType.CAST && b.receiverType == window.chrome.cast.ReceiverType.CAST && (l8('onSessionEstablished_: manual to cast session change ' + b.friendlyName), g.Ze(this.g), this.g = new h8(this.l, b), this.g.subscribe('sessionScreen', (0, g.z)(this.jC, this, this.g)), this.g.Rj(null)); this.g.Du(a)
      }
    }
  }
  g.h.NV = function () { return this.g ? this.g.xE() : null }
  g.h.OS = function (a) { this.ia() || (this.gc('Failed to estabilish a session: ' + g.xg(a)), a.code != window.chrome.cast.ErrorCode.CANCEL && n8(this, null)) }
  g.h.tS = function (a) { l8('Receiver availability updated: ' + a); if (!this.ia()) { var b = m8(this); this.B = a == window.chrome.cast.ReceiverAvailability.AVAILABLE; m8(this) != b && this.R('yt-remote-cast2-availability-change', m8(this)) } }
  g.h.wE = function () { this.ia() || (this.o = ICa(this), l8('Updating custom receivers: ' + g.xg(this.o)), window.chrome.cast.setCustomReceivers(this.o, g.y, (0, g.z)(function () { this.gc('Failed to set custom receivers.') }, this)), this.R('yt-remote-cast2-availability-change', m8(this))) }
  k8.prototype.setLaunchParams = k8.prototype.KU; k8.prototype.setConnectedScreenStatus = k8.prototype.JU; k8.prototype.stopSession = k8.prototype.OV; k8.prototype.getCastSession = k8.prototype.NV; k8.prototype.requestSession = k8.prototype.requestSession; k8.prototype.init = k8.prototype.init; k8.prototype.dispose = k8.prototype.dispose; var t8 = []; g.h = y8.prototype
  g.h.reset = function (a) { this.listId = ''; this.index = -1; this.videoId = ''; z8(this); this.volume = -1; this.muted = !1; a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.g = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.l = a.trackData, this.Nf = a.hasPrevious, this.hasNext = a.hasNext, this.F = a.playerTime, this.D = a.playerTimeAt, this.B = a.seekableStart, this.o = a.seekableEnd, this.H = a.duration, this.I = a.loadedTime, this.A = a.liveIngestionTime, this.C = !(0, window.isNaN)(this.A)) }
  g.h.kb = function () { return this.g == 1 }
  g.h.isAdPlaying = function () { return this.g == 1081 }
  g.h.getDuration = function () { return this.C ? this.H + A8(this) : this.H }
  g.h.clone = function () { return new y8(E8(this)) }; g.A(G8, g.FF); g.h = G8.prototype; g.h.play = function () { this.g == 1 ? (this.l ? this.l.play(null, g.y, M8(this, 'play')) : L8(this, 'play'), K8(this, 1, C8(H8(this))), this.R('remotePlayerChange')) : I8(this, this.play) }
  g.h.pause = function () { this.g == 1 ? (this.l ? this.l.pause(null, g.y, M8(this, 'pause')) : L8(this, 'pause'), K8(this, 2, C8(H8(this))), this.R('remotePlayerChange')) : I8(this, this.pause) }
  g.h.sE = function (a) { if (this.g == 1) { if (this.l) { var b = H8(this), c = new window.chrome.cast.media.SeekRequest(); c.currentTime = a; c.resumeState = b.kb() || b.g == 3 ? window.chrome.cast.media.ResumeState.PLAYBACK_START : window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE; this.l.seek(c, g.y, M8(this, 'seekTo', {newTime: a})) } else L8(this, 'seekTo', {newTime: a}); K8(this, 3, a); this.R('remotePlayerChange') } else I8(this, g.Fa(this.sE, a)) }
  g.h.stop = function () { if (this.g == 1) { this.l ? this.l.stop(null, g.y, M8(this, 'stopVideo')) : L8(this, 'stopVideo'); var a = H8(this); a.index = -1; a.videoId = ''; z8(a); J8(this, a); this.R('remotePlayerChange') } else I8(this, this.stop) }
  g.h.setVolume = function (a, b) {
    if (this.g == 1) {
      var c = H8(this); if (this.o) { if (c.volume != a) { var d = Math.round(a) / 100; this.o.setReceiverVolumeLevel(d, (0, g.z)(function () { Q7('CP', 'set receiver volume: ' + d) }, this), (0, g.z)(function () { this.gc('failed to set receiver volume.') }, this)) }c.muted != b && this.o.setReceiverMuted(b, (0, g.z)(function () { Q7('CP', 'set receiver muted: ' + b) }, this), (0, g.z)(function () { this.gc('failed to set receiver muted.') }, this)) } else {
        var e = {volume: a,
          muted: b}; c.volume != -1 && (e.delta = a - c.volume); L8(this, 'setVolume', e)
      }c.muted = b; c.volume = a; J8(this, c)
    } else I8(this, g.Fa(this.setVolume, a, b))
  }
  g.h.uD = function (a, b) { if (this.g == 1) { var c = H8(this), d = {videoId: a}; b && (c.l = {trackName: b.name, languageCode: b.languageCode, sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : '', languageName: b.languageName, format: b.format, kind: b.kind}, d.style = g.xg(b.style), g.dc(d, c.l)); L8(this, 'setSubtitlesTrack', d); J8(this, c) } else I8(this, g.Fa(this.uD, a, b)) }
  g.h.rv = function (a, b) { if (this.g == 1) { L8(this, 'setAudioTrack', {videoId: a, audioTrackId: b.Pb.id}); var c = H8(this); c.audioTrackId = b.Pb.id; J8(this, c) } else I8(this, g.Fa(this.rv, a, b)) }
  g.h.rE = function (a, b) { if (this.g == 1) { if (a && b) { var c = H8(this); D8(c, a, b); J8(this, c) }L8(this, 'previous') } else I8(this, g.Fa(this.rE, a, b)) }
  g.h.qE = function (a, b) { if (this.g == 1) { if (a && b) { var c = H8(this); D8(c, a, b); J8(this, c) }L8(this, 'next') } else I8(this, g.Fa(this.qE, a, b)) }
  g.h.Gx = function () { this.g == 1 ? L8(this, 'dismissAutoplay') : I8(this, this.Gx) }
  g.h.dispose = function () { if (this.g != 3) { var a = this.g; this.g = 3; this.R('proxyStateChange', a, this.g) }G8.ba.dispose.call(this) }
  g.h.V = function () { VCa(this); this.A = null; this.B.clear(); F8(this, null); G8.ba.V.call(this) }
  g.h.tv = function (a) { if ((a != this.g || a == 2) && this.g != 3 && a != 0) { var b = this.g; this.g = a; this.R('proxyStateChange', b, a); if (a == 1) for (;!this.B.isEmpty();)g.oC(this.B).apply(this); else a == 3 && this.dispose() } }
  g.h.kS = function (a, b) { this.R(a, b) }
  g.h.LP = function (a) { if (!a) this.Ql(null), F8(this, null); else if (this.o.receiver.volume) { a = this.o.receiver.volume; var b = H8(this), c = Math.round(100 * a.level || 0); if (b.volume != c || b.muted != a.muted)Q7('CP', 'Cast volume update: ' + a.level + (a.muted ? ' muted' : '')), b.volume = c, b.muted = !!a.muted, J8(this, b) } }
  g.h.Ql = function (a) { Q7('CP', 'Cast media: ' + !!a); this.l && this.l.removeUpdateListener(this.F); if (this.l = a) this.l.addUpdateListener(this.F), WCa(this), this.R('remotePlayerChange') }
  g.h.KP = function (a) { a ? (WCa(this), this.R('remotePlayerChange')) : this.Ql(null) }
  g.h.XP = function () { var a = SCa(); a && F8(this, a) }
  g.h.gc = function (a) { Q7('CP', a) }; g.A(N8, g.FF); g.h = N8.prototype
  g.h.connect = function (a, b) {
    if (b) {
      var c = b.listId, d = b.videoId, e = b.playerParams, f = b.clickTrackingParams, k = b.index, l = {videoId: d}, m = b.currentTime, n = b.locationInfo; g.t(m) && (l.currentTime = m <= 5 ? 0 : m); e && (l.playerParams = e); n && (l.locationInfo = n); f && (l.clickTrackingParams = f); c && (l.listId = c); g.t(k) && (l.currentIndex = k); c && (this.Za.listId = c); this.Za.videoId = d; this.Za.index = k || 0; this.Za.state = 3; B8(this.Za, m); this.A = 'UNSUPPORTED'; O8('Connecting with setPlaylist and params: ' + g.xg(l)); this.g.connect({method: 'setPlaylist',
        params: g.xg(l)}, a, rBa())
    } else O8('Connecting without params'), this.g.connect({}, a, rBa()); YCa(this)
  }
  g.h.dispose = function () { this.ia() || (this.R('beforeDispose'), P8(this, 3)); N8.ba.dispose.call(this) }
  g.h.V = function () { Q8(this); S8(this); R8(this); g.XD(this.H); this.H = window.NaN; g.XD(this.I); this.I = window.NaN; this.o = null; g.pF(this.U); this.U.length = 0; this.g.dispose(); N8.ba.V.call(this); this.A = this.D = this.l = this.Za = this.g = null }
  g.h.OI = function () { this.C(2) }
  g.h.PP = function () {
    O8('Channel opened'); this.N && (this.N = !1, R8(this), this.L = g.VD((0, g.z)(function () { O8('Timing out waiting for a screen.'); this.C(1) }, this), 15E3))
    vBa(hCa(this.g), this.Z)
  }
  g.h.MP = function () { O8('Channel closed'); (0, window.isNaN)(this.B) ? c7(!0) : c7(); this.dispose() }
  g.h.NP = function (a) { c7(); (0, window.isNaN)(this.F()) ? (O8('Channel error: ' + a + ' without reconnection'), this.dispose()) : (this.N = !0, O8('Channel error: ' + a + ' with reconnection in ' + this.F() + ' ms'), P8(this, 2)) }
  g.h.OP = function (a) {
    a.params ? O8('Received: action=' + a.action + ', params=' + g.xg(a.params)) : O8('Received: action=' + a.action + ' {}'); switch (a.action) {
      case 'loungeStatus':a = g.Vw(a.params.devices); this.l = (0, g.G)(a, function (a) { return new R6(a) })
        a = !!g.La(this.l, function (a) { return a.type == 'LOUNGE_SCREEN' })
        aDa(this, a); break; case 'loungeScreenDisconnected':g.Va(this.l, function (a) { return a.type == 'LOUNGE_SCREEN' })
        aDa(this, !1); break; case 'remoteConnected':var b = new R6(g.Vw(a.params.device)); g.La(this.l, function (a) { return b ? a.id == b.id : !1 }) || g.Sa(this.l, b)
        break; case 'remoteDisconnected':b = new R6(g.Vw(a.params.device)); g.Va(this.l, function (a) { return b ? a.id == b.id : !1 })
        break; case 'gracefulDisconnect':break; case 'playlistModified':cDa(this, a); break; case 'nowPlaying':eDa(this, a); break; case 'onStateChange':dDa(this, a); break; case 'onAdStateChange':fDa(this, a); break; case 'onVolumeChanged':gDa(this, a); break; case 'onSubtitlesTrackChanged':bDa(this, a); break; case 'nowAutoplaying':hDa(this, a); break; case 'autoplayDismissed':this.R('autoplayDismissed'); break; case 'autoplayUpNext':this.D = a.params.videoId || null; this.R('autoplayUpNext', this.D); break; case 'onAutoplayModeChanged':this.A =
a.params.autoplayMode; this.R('autoplayModeChange', this.A); this.A == 'DISABLED' && this.R('autoplayDismissed'); break; case 'onHasPreviousNextChanged':iDa(this, a); break; case 'requestAssistedSignIn':this.R('assistedSignInRequested', a.params.authCode); break; default:O8('Unrecognized action: ' + a.action)
    }
  }
  g.h.tU = function () { if (this.o) { var a = this.o; this.o = null; this.Za.videoId != a && T8(this, 'getNowPlaying') } }
  N8.prototype.subscribe = N8.prototype.subscribe; N8.prototype.unsubscribeByKey = N8.prototype.Od; N8.prototype.fa = function () { var a = 3; this.ia() || (a = 0, (0, window.isNaN)(this.F()) ? L7(this.g) && (0, window.isNaN)(this.B) && (a = 1) : a = 2); return a }
  N8.prototype.getProxyState = N8.prototype.fa; N8.prototype.C = function (a) { O8('Disconnecting with ' + a); Q8(this); this.R('beforeDisconnect', a); a == 1 && c7(); iCa(this.g, a); this.dispose() }
  N8.prototype.disconnect = N8.prototype.C; N8.prototype.ea = function () { var a = this.Za; this.o && (a = this.Za.clone(), D8(a, this.o, a.index)); return E8(a) }
  N8.prototype.getPlayerContextData = N8.prototype.ea
  N8.prototype.ma = function (a) { var b = new y8(a); b.videoId && b.videoId != this.Za.videoId && (this.o = b.videoId, g.XD(this.H), this.H = g.VD((0, g.z)(this.tU, this), 5E3)); var c = []; this.Za.listId == b.listId && this.Za.videoId == b.videoId && this.Za.index == b.index || c.push('remoteQueueChange'); this.Za.g == b.g && this.Za.volume == b.volume && this.Za.muted == b.muted && C8(this.Za) == C8(b) && g.xg(this.Za.l) == g.xg(b.l) || c.push('remotePlayerChange'); this.Za.reset(a); (0, g.B)(c, function (a) { this.R(a) }, this) }
  N8.prototype.setPlayerContextData = N8.prototype.ma; N8.prototype.X = function () {
    var a = this.g.C.id, b = g.La(this.l, function (b) { return b.type == 'REMOTE_CONTROL' && b.id != a })
    return b ? b.id : ''
  }
  N8.prototype.getOtherConnectedRemoteId = N8.prototype.X; N8.prototype.F = function () { var a = this.g; return a.l.isActive() ? a.l.l - (0, g.F)() : window.NaN }
  N8.prototype.getReconnectTimeout = N8.prototype.F; N8.prototype.Y = function () { return this.A || 'UNSUPPORTED' }
  N8.prototype.getAutoplayMode = N8.prototype.Y; N8.prototype.aa = function () { return this.D || '' }
  N8.prototype.getAutoplayVideoId = N8.prototype.aa; N8.prototype.ra = function () { if (!(0, window.isNaN)(this.F())) { var a = this.g.l; g.Yt(a.g); a.start() } }
  N8.prototype.reconnect = N8.prototype.ra; N8.prototype.ga = function (a, b) { T8(this, a, b); $Ca(this) }
  N8.prototype.sendMessage = N8.prototype.ga; g.A(U8, U7); g.h = U8.prototype; g.h.je = function (a) { return this.ed.$_gs(a) }
  g.h.contains = function (a) { return !!this.ed.$_c(a) }
  g.h.get = function (a) { return this.ed.$_g(a) }
  g.h.start = function () { this.ed.$_st() }
  g.h.add = function (a, b, c) { this.ed.$_a(a, b, c) }
  g.h.remove = function (a, b, c) { this.ed.$_r(a, b, c) }
  g.h.Jp = function (a, b, c, d) { this.ed.$_un(a, b, c, d) }
  g.h.V = function () { for (var a = 0, b = this.l.length; a < b; ++a) this.ed.$_ubk(this.l[a]); this.l.length = 0; this.ed = null; U8.ba.V.call(this) }
  g.h.KV = function () { this.R('screenChange') }
  g.h.LR = function () { this.R('onlineScreenChange') }
  c8.prototype.$_st = c8.prototype.start; c8.prototype.$_gspc = c8.prototype.LV; c8.prototype.$_gsppc = c8.prototype.vE; c8.prototype.$_c = c8.prototype.contains; c8.prototype.$_g = c8.prototype.get; c8.prototype.$_a = c8.prototype.add; c8.prototype.$_un = c8.prototype.Jp; c8.prototype.$_r = c8.prototype.remove; c8.prototype.$_gs = c8.prototype.je; c8.prototype.$_gos = c8.prototype.uE; c8.prototype.$_s = c8.prototype.subscribe; c8.prototype.$_ubk = c8.prototype.Od; var V8 = null, W8 = null, k9 = null, $8 = []; g.p(l9, g.M); g.h = l9.prototype
  g.h.V = function () { g.M.prototype.V.call(this); this.A.stop(); this.B.stop(); this.K.stop(); this.N(); this.g.unsubscribe('proxyStateChange', this.gC, this); this.g.unsubscribe('remotePlayerChange', this.Tl, this); this.g.unsubscribe('remoteQueueChange', this.Qo, this); this.g.unsubscribe('autoplayUpNext', this.DB, this); this.g.unsubscribe('previousNextChange', this.dC, this); this.g.unsubscribe('nowAutoplaying', this.VB, this); this.g.unsubscribe('autoplayDismissed', this.CB, this); this.g = this.F = null }
  g.h.EA = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; if (this.g.g != 2) {
      if (o9(this)) {
        if (!H8(this.g).isAdPlaying() || a != 'control_seek') {
          switch (a) {
            case 'control_toggle_play_pause':H8(this.g).kb() ? this.g.pause() : this.g.play(); break; case 'control_play':this.g.play(); break; case 'control_pause':this.g.pause(); break; case 'control_seek':this.I.zj(c[0], c[1]); break; case 'control_subtitles_set_track':p9(this, c[0]); break; case 'control_set_audio_track':c = c[0], o9(this) && this.g.rv(this.l.getVideoData(1).videoId,
              c)
          }
        }
      } else switch (a) { case 'control_toggle_play_pause':case 'control_play':case 'control_pause':c = this.l.getCurrentTime(); q9(this, c == 0 ? void 0 : c); break; case 'control_seek':q9(this, c[0]); break; case 'control_subtitles_set_track':p9(this, c[0]); break; case 'control_set_audio_track':c = c[0], o9(this) && this.g.rv(this.l.getVideoData(1).videoId, c) }
    }
  }
  g.h.JP = function (a) { this.K.JI(a) }
  g.h.nV = function (a) { this.EA('control_subtitles_set_track', g.Wb(a) ? null : a) }
  g.h.JD = function () { var a = this.l.yc('captions', 'track'); g.Wb(a) || p9(this, a) }
  g.h.TB = function (a) { if (o9(this)) { this.g.unsubscribe('remotePlayerChange', this.Tl, this); var b = Math.round(a.volume); a = !!a.muted; var c = H8(this.g); if (b != c.volume || a != c.muted) this.g.setVolume(b, a), this.L.start(); this.g.subscribe('remotePlayerChange', this.Tl, this) } }
  g.h.eR = function () { g.Wb(this.C) || uDa(this, this.C); this.D = !1 }
  g.h.gC = function (a, b) { this.B.stop(); b == 2 && this.GD() }
  g.h.Tl = function () {
    if (o9(this)) {
      this.A.stop(); var a = H8(this.g); switch (a.g) { case 1081:case 1:n9(this, new g.zP(8)); this.FD(); break; case 1085:case 3:n9(this, new g.zP(9)); break; case 1083:case 0:n9(this, new g.zP(2)); this.I.stop(); m9(this, this.l.getVideoData().lengthSeconds); break; case 1084:n9(this, new g.zP(4)); break; case 2:n9(this, new g.zP(4)); m9(this, C8(a)); break; case -1:n9(this, new g.zP(64)); break; case -1E3:a = {errorCode: 'mdx.remoteerror', message: g.U('YTP_MDX_PLAYER_ERROR')}, n9(this, new g.zP(128, a)) }a =
H8(this.g).l; var b = this.C; (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.format == b.format && a.kind == b.kind : 1) || (this.C = a, uDa(this, a)); a = H8(this.g); a.volume == -1 || Math.round(this.l.getVolume()) == a.volume && this.l.isMuted() == a.muted || this.L.isActive() || this.gE()
    } else tDa(this)
  }
  g.h.dC = function () { this.l.R('mdxpreviousnextchange') }
  g.h.Qo = function () { o9(this) || tDa(this) }
  g.h.VH = function () { this.g.Gx() }
  g.h.DB = function (a) { a && (a = g.kE('/watch_queue_ajax', {method: 'GET', Yc: {action_get_watch_queue_item: 1, video_id: a}, onSuccess: (0, g.z)(this.pT, this)})) && (this.N = (0, g.z)(a.abort, a)) }
  g.h.pT = function (a, b) { var c = new g.pO({videoId: b.videoId, title: b.title, author: b.author, murlmq_webp: b.url}); this.suggestion = c; this.l.R('mdxautoplayupnext', c) }
  g.h.VB = function (a) { (0, window.isNaN)(a) || this.l.R('mdxnowautoplaying', a) }
  g.h.CB = function () { this.l.R('mdxautoplaycanceled') }
  g.h.JN = function (a, b) { H8(this.g).g == -1 ? q9(this, a) : b && this.g.sE(a) }
  g.h.gE = function () { if (o9(this)) { var a = H8(this.g); this.o.Ca(this.U); a.muted ? this.l.mute() : this.l.Yf(); this.l.setVolume(a.volume); this.U = this.o.O(this.l, 'onVolumeChange', this.TB) } }
  g.h.FD = function () { this.A.stop(); if (!this.g.ia()) { var a = H8(this.g); a.kb() && n9(this, new g.zP(8)); m9(this, C8(a)); this.A.start() } }
  g.h.GD = function () { this.B.stop(); this.A.stop(); var a = this.g.A.getReconnectTimeout(); this.g.g == 2 && !(0, window.isNaN)(a) && this.B.start() }; g.p(r9, g.V); r9.prototype.B = function (a) { wDa(this, a.state) }; g.p(s9, g.i_); s9.prototype.K = function () { var a = this.o.yc('remote', 'receivers'); a && a.length > 1 && !this.o.yc('remote', 'quickCast') ? (this.H = g.jb(a, this.C, this), g.j_(this, (0, g.G)(a, this.C)), a = this.o.yc('remote', 'currentReceiver'), this.sf(this.C(a)), this.enable(!0)) : this.enable(!1) }
  s9.prototype.C = function (a) { return a.key }
  s9.prototype.rf = function (a) { return a == 'cast-selector-receiver' ? g.U('YTP_MDX_CAST_SELECTOR') : this.H[a].name }
  s9.prototype.ud = function (a) { g.i_.prototype.ud.call(this, a); this.o.Kd('remote', 'currentReceiver', this.H[a]); this.B.Qb() }; g.p(t9, g.EV); g.h = t9.prototype; g.h.create = function () { nDa(g.FM(g.X(this.g))); this.C.push(g.RF('yt-remote-before-disconnect', this.FP, this)); this.C.push(g.RF('yt-remote-connection-change', this.uS, this)); this.C.push(g.RF('yt-remote-receiver-availability-change', this.eC, this)); this.C.push(g.RF('yt-remote-auto-connect', this.sS, this)); this.C.push(g.RF('yt-remote-receiver-resumed', this.rS, this)); this.eC() }
  g.h.load = function () { this.g.qt(); g.EV.prototype.load.call(this); this.B = new l9(this, this.g, this.l); var a = (a = sDa()) ? a.currentTime : 0; var b = j9() ? new G8(e9(), void 0) : null; a == 0 && b && (a = C8(H8(b))); a != 0 && (this.H = a || 0, this.g.R('progresssync', a, void 0)); vDa(this, this.D, this.D); g.z0(this.g.app, 6) }
  g.h.unload = function () { this.g.R('mdxautoplaycanceled'); this.A = this.o; g.$e(this.B, this.l); this.l = this.B = null; g.EV.prototype.unload.call(this); g.z0(this.g.app, 5) }
  g.h.V = function () { g.SF(this.C); g.EV.prototype.V.call(this) }
  g.h.Jl = function (a, b) { for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; this.loaded && this.B.EA.apply(this.B, [a].concat(g.pa(c))) }
  g.h.FI = function () { return this.loaded ? this.B.suggestion : null }
  g.h.Nf = function () { return this.l ? H8(this.l).Nf : !1 }
  g.h.hasNext = function () { return this.l ? H8(this.l).hasNext : !1 }
  g.h.getCurrentTime = function () { return this.H }
  g.h.xN = function () { var a = H8(this.l), b = this.g.getVideoData(); return {allowSeeking: this.g.gd(), clipEnd: b.clipEnd, clipStart: b.clipStart, current: this.getCurrentTime(), displayedStart: -1, duration: a.getDuration(), ingestionTime: a.C ? a.A + A8(a) : a.A, isPeggedToLive: (a.C ? a.o + A8(a) : a.o) - this.getCurrentTime() <= 1, loaded: a.I, seekableEnd: a.C ? a.o + A8(a) : a.o, seekableStart: a.B > 0 ? a.B + A8(a) : a.B} }
  g.h.yN = function () { this.l && this.l.qE() }
  g.h.zN = function () { this.l && this.l.rE() }
  g.h.FP = function (a) { a == 1 && (this.I = this.l ? H8(this.l) : null) }
  g.h.uS = function () { var a = j9() ? new G8(e9(), void 0) : null; if (a) { var b = this.A; this.loaded && this.unload(); this.l = a; this.I = null; b.key != this.o.key && (this.A = b, this.load()) } else g.Ze(this.l), this.l = null, this.loaded && (this.unload(), (a = this.I) && a.videoId == this.g.getVideoData().videoId && this.g.iA(a.videoId, C8(a))); this.g.R('videodatachange', 'newdata', this.g.getVideoData(), 3) }
  g.h.eC = function () { this.F = [this.o].concat(pDa()); var a = f9() || this.o; u9(this, a); this.g.ua('onMdxReceiversChange') }
  g.h.sS = function () { var a = f9(); u9(this, a) }
  g.h.rS = function () { this.A = f9() }
  g.h.wN = function (a, b) { switch (a) { case 'casting':return this.loaded; case 'receivers':return this.F; case 'currentReceiver':return b && (b.key == 'cast-selector-receiver' ? w8() : u9(this, b)), this.loaded ? this.A : this.o; case 'quickCast':return this.F.length == 2 && this.F[1].key == 'cast-selector-receiver' ? (b && w8(), !0) : !1 } }
  g.h.AN = function () { L8(this.l, 'sendDebugCommand', {debugCommand: 'stats4nerds '}) }
  g.h.Oc = function () { return !1 }; g.xY.remote = t9
})(_yt_player)
