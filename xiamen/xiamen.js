const CryptoJS = require("crypto-js");
const key_bn = 'FtCDEALJi7g'
const reptile = "{\"configProperties\":[{\"key\":\"external.booking.refund.calc.cancel.failed.support\",\"value\":\"true\"},{\"key\":\"external.booking.refund.supported.banks\",\"value\":\"01-102584000002-102-\\\\u4e2d\\\\u56fd\\\\u5de5\\\\u5546\\\\u94f6\\\\u884c,02-103584099993-103-\\\\u4e2d\\\\u56fd\\\\u519c\\\\u4e1a\\\\u94f6\\\\u884c,03-104584000003-104-\\\\u4e2d\\\\u56fd\\\\u94f6\\\\u884c,04-105584000005-105-\\\\u4e2d\\\\u56fd\\\\u5efa\\\\u8bbe\\\\u94f6\\\\u884c,05-301584000016-301-\\\\u4ea4\\\\u901a\\\\u94f6\\\\u884c,06-302584043105-302-\\\\u4e2d\\\\u4fe1\\\\u94f6\\\\u884c,07-303584000004-303-\\\\u5149\\\\u5927\\\\u94f6\\\\u884c,08-304584040898-304-\\\\u534e\\\\u590f\\\\u94f6\\\\u884c,09-305584000002-305-\\\\u6c11\\\\u751f\\\\u94f6\\\\u884c,010-306584001261-306-\\\\u5e7f\\\\u53d1\\\\u94f6\\\\u884c,011-307584007998-307-\\\\u5e73\\\\u5b89\\\\u94f6\\\\u884c,012-308584001016-308-\\\\u62db\\\\u5546\\\\u94f6\\\\u884c,013-309584000000-309-\\\\u5174\\\\u4e1a\\\\u94f6\\\\u884c,014-310584000006-310-\\\\u4e0a\\\\u6d77\\\\u6d66\\\\u4e1c\\\\u53d1\\\\u5c55\\\\u94f6\\\\u884c,015-403584099005-403-\\\\u90ae\\\\u653f\\\\u50a8\\\\u84c4\\\\u94f6\\\\u884c,016-313100000013-313100000013-\\\\u5317\\\\u4eac\\\\u94f6\\\\u884c,017-325290000012-325290000012-\\\\u4e0a\\\\u6d77\\\\u94f6\\\\u884c,018-313110000017-313110000017-\\\\u5929\\\\u6d25\\\\u94f6\\\\u884c\"},{\"key\":\"password.encode.channel\",\"value\":\"IBE,CTRIP\"},{\"key\":\"external.booking.refund.child.support\",\"value\":\"false\"},{\"key\":\"mfa.sms.disable.verification\",\"value\":\"false\"},{\"key\":\"antispider.sharedPublicCipherKey\",\"value\":\"ojtp\"},{\"key\":\"external.booking.bank.account.binding.enabled\",\"value\":\"true\"},{\"key\":\"antispider.enable\",\"value\":\"true\"},{\"key\":\"display.checkin.phase\",\"value\":\"all\"},{\"key\":\"prepareCancelTimeLimit\",\"value\":\"25\"},{\"key\":\"externalFlightBooking.ticketsRetrieval.enabled\",\"value\":\"true\"},{\"key\":\"loginRememberMe.enabled\",\"value\":\"true\"},{\"key\":\"antispider.cipherAndPattern\",\"value\":\"{\\\"0\\\":{\\\"cipher\\\":\\\"CipherKey1\\\",\\\"pattern\\\":\\\"^[0-9]{32}$\\\"},\\\"1\\\":{\\\"cipher\\\":\\\"CipherKey2\\\",\\\"pattern\\\":\\\"^[a-z]{32}$\\\"},\\\"2\\\":{\\\"cipher\\\":\\\"CipherKey3\\\",\\\"pattern\\\":\\\"^[A-Z]{32}$\\\"},\\\"3\\\":{\\\"cipher\\\":\\\"CipherKey4\\\",\\\"pattern\\\":\\\"^[0-9]{32}$\\\"},\\\"4\\\":{\\\"cipher\\\":\\\"CipherKey5\\\",\\\"pattern\\\":\\\"^[a-z]{32}$\\\"},\\\"5\\\":{\\\"cipher\\\":\\\"CipherKey6\\\",\\\"pattern\\\":\\\"^[A-Z]{32}$\\\"}}\"},{\"key\":\"threshold.historyOrderDays\",\"value\":\"395\"},{\"key\":\"antispider.endpointlist\",\"value\":\"{\\\"endpoints\\\":[{ \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/bookings/*/flight/ancillaries/resultSets\\\" },{ \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/bookings/*/flight/ancillaries/resultSets/*\\\" },{ \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/bookings/*/flight/baggage/resultSets\\\" }, { \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/bookings/*/flight/baggage/resultSets/*\\\" },{ \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/bookings/*/products/*/crossSell\\\" }, { \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/bookings/*/products/*/flight/crossSell/availability\\\" },{ \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/bookings/*/products/*/switchSell/package\\\" },{ \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/flight/calendar\\\" }, { \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/flight/resultSets\\\" },{ \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/flight/resultSets/*\\\" },{ \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/flightCache/calendarSearch\\\" },{ \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/flightCache/lowPriceSearch\\\" }, { \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/flightCache/lowPriceSearch/hotRoute\\\" },{ \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/bookings/*/flight/seatMaps\\\" },{ \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/order/extract/orderResult\\\" }, { \\\"methods\\\": [\\\"POST\\\"], \\\"url\\\": \\\"/flightFareShopping/all/resultSets\\\" },{ \\\"methods\\\": [\\\"GET\\\"], \\\"url\\\": \\\"/flightFareShopping/all/resultSets/*\\\" }]}\"},{\"key\":\"change.voluntary.limit.days\",\"value\":\"365\"},{\"key\":\"ancillary.address.invalid.pattern\",\"value\":\"[！!*_%&$-]\"},{\"key\":\"ancillary.others.invalid.pattern\",\"value\":\"[！@!*_%&$-]\"},{\"key\":\"bundle.comboProduct.enabled\",\"value\":\"true\"},{\"key\":\"bundle.insuranceContinueToBuy.enabled\",\"value\":\"true\"},{\"key\":\"invite.upgrade.prepare.authorization.bankId\",\"value\":\"YEEPAYAUTH\"},{\"key\":\"invite.upgrade.enabled\",\"value\":\"true\"},{\"key\":\"error.refund.enabled\",\"value\":\"true\"},{\"key\":\"limit.locale\",\"value\":\"US\"},{\"key\":\"change.involuntary.limit.days\",\"value\":\"5\"},{\"key\":\"errorRefundTimeLimit\",\"value\":\"20\"},{\"key\":\"mfa.captcha.disable.verification\",\"value\":\"false\"},{\"key\":\"external.booking.refund.open.support\",\"value\":\"false\"},{\"key\":\"serverTimestamp\",\"value\":\"1752198113831\"}]}"
function header_c() {

    var e = {}
        , a = -629 || 0
        , t = (new Date).getTime() + a
        , n = "".concat('Mozilla', "_").concat(function() {
        for (var e = [], a = 0; a < 32; a++)
            e[a] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        return e.join("")
    }());
    e["Device-Id"] = n;
    var r = function(e) {
        for (var a = JSON.parse(reptile), t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        var i = n[0]
            , l = n[1]
            , o = JSON.parse(a.configProperties.filter((function(e) {
                return "antispider.cipherAndPattern" === e.key
            }
        ))[0].value)[e].cipher
            , s = a.configProperties.filter((function(e) {
                return "antispider.sharedPublicCipherKey" === e.key
            }
        ))[0].value
            , u = {}
            , c = ["12345678901234567890123456789012", "qwefqwefqwefqwefqwefqwefqwefqwef", "QWDSQWDSQWDSQWDSQWDSQWDSQWDSQWDS", "12345678901234567890123456789012", "qwefqwefqwefqwefqwefqwefqwefqwef", "QWDSQWDSQWDSQWDSQWDSQWDSQWDSQWDS"]
            , d = "".concat(i, "_").concat(c[e])
            , p = CryptoJS.MD5("".concat(s).concat(o)).toString().substring(8, 24)

            , m = CryptoJS.enc.Utf8.parse(CryptoJS.MD5("".concat(s).concat(o)).toString().substring(8, 24));
        u["Crypto-Chars"] = e <= 2 ? CryptoJS.AES.encrypt("".concat(d, "_").concat(l), m, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString() : CryptoJS.MD5("".concat(d, "_").concat(l, "_").concat(p)).toString();
        var g = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(s).toString().substring(8, 24));
        return u["Crypto-Random"] = CryptoJS.AES.encrypt("".concat(d), g, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).ciphertext.toString(CryptoJS.enc.Base64),
            u
    }(Math.abs(t % 6), t, n);
    return e["Crypto-Chars"] = r["Crypto-Chars"],
        e["Crypto-Random"] = r["Crypto-Random"],
        e
};
U = function() {
        function e(e) {
            return e < 0 ? NaN : e <= 30 ? 0 | Math.random() * (1 << e) : e <= 53 ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << e - 30)) * (1 << 30) : NaN
        }
        function t(e, t) {
            for (var n = e.toString(16), r = t - n.length, a = "0"; r > 0; r >>>= 1,
            a += a)
                1 & r && (n = a + n);
            return n
        }
        return function(n) {
            var r = "-";
            return n && (r = ""),
            t(e(32), 8) + r + t(e(16), 4) + r + t(16384 | e(12), 4) + r + t(32768 | e(14), 4) + r + t(e(48), 12)
        }
    }()
function Fc() {
        return key_bn ? "c=B|" + key_bn : ""
    }
function tingyun() {
        var n = !1;
            if (key_bn) {
                var r = function() {
                    try {
                        return U(!0).substring(0, 16)
                    } catch (Of) {}
                }()
                  , a = Fc();
                r && (a += ";x=" + r);
        return a
    }
}

function c(){
    const headers = header_c();
    headers['X-Tingyun'] = tingyun();
    return headers

}
