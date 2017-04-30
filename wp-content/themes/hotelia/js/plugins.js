(function (e) {
    function u() {
        r = false;
        for (var n = 0; n < t.length; n++) {
            var i = e(t[n]).filter(function () {
                return e(this).is(":appeared")
            });
            i.trigger("appear", [i]);
            if (o) {
                var s = o.not(i);
                s.trigger("disappear", [s])
            }
            o = i
        }
    }
    var t = [];
    var n = false;
    var r = false;
    var i = {
        interval: 250,
        force_process: false
    };
    var s = e(window);
    var o;
    e.expr[":"]["appeared"] = function (t) {
        var n = e(t);
        if (!n.is(":visible")) {
            return false
        }
        var r = s.scrollLeft();
        var i = s.scrollTop();
        var o = n.offset();
        var u = o.left;
        var a = o.top;
        if (a + n.height() >= i && a - (n.data("appear-top-offset") || 0) <= i + s.height() && u + n.width() >= r && u - (n.data("appear-left-offset") || 0) <= r + s.width()) {
            return true
        } else {
            return false
        }
    };
    e.fn.extend({
        appear: function (s) {
            var o = e.extend({}, i, s || {});
            var a = this.selector || this;
            if (!n) {
                var f = function () {
                        if (r) {
                            return
                        }
                        r = true;
                        setTimeout(u, o.interval)
                    };
                e(window).scroll(f).resize(f);
                n = true
            }
            if (o.force_process) {
                setTimeout(u, o.interval)
            }
            t.push(a);
            return e(a)
        }
    });
    e.extend({
        force_appear: function () {
            if (n) {
                u();
                return true
            }
            return false
        }
    })
})(jQuery);
(function (e) {
    "use strict";
    e.fn.bigSlide = function (t) {
        var n = e.extend({
            menu: "#menu",
            push: ".push",
            side: "left",
            menuWidth: "15.625em",
            speed: "300"
        }, t);
        var r = this,
            i = e(n.menu),
            s = e(n.push),
            o = n.menuWidth;
        var u = {
            position: "fixed",
            top: "0",
            bottom: "0",
            "settings.side": "-" + n.menuWidth,
            width: n.menuWidth,
            height: "100%"
        };
        var a = {
            "-webkit-transition": n.side + " " + n.speed + "ms ease",
            "-moz-transition": n.side + " " + n.speed + "ms ease",
            "-ms-transition": n.side + " " + n.speed + "ms ease",
            "-o-transition": n.side + " " + n.speed + "ms ease",
            transition: n.side + " " + n.speed + "ms ease"
        };
        i.css(u);
        i.css(a);
        s.css(a);
        i._state = "closed";
        i.open = function () {
            i._state = "open";
            i.css(n.side, "0");
            s.css(n.side, o)
        };
        i.close = function () {
            i._state = "closed";
            i.css(n.side, "-" + o);
            s.css(n.side, "0")
        };
        r.on("click.bigSlide", function (e) {
            e.preventDefault();
            if (i._state === "closed") {
                i.open()
            } else {
                i.close()
            }
        });
        return i
    }
})(jQuery);
(function (e) {
    "use strict";
    var t = {
        i18n: {
            bg: {
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                dayOfWeek: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
            },
            fa: {
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                dayOfWeek: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
            },
            ru: {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayOfWeek: ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
            },
            en: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            el: {
                months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                dayOfWeek: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"]
            },
            de: {
                months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                dayOfWeek: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
            },
            nl: {
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeek: ["zo", "ma", "di", "wo", "do", "vr", "za"]
            },
            tr: {
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                dayOfWeek: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"]
            },
            fr: {
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                dayOfWeek: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
            },
            es: {
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeek: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
            },
            th: {
                months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
                dayOfWeek: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."]
            },
            pl: {
                months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                dayOfWeek: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"]
            },
            pt: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeek: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
            },
            ch: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeek: ["日", "一", "二", "三", "四", "五", "六"]
            },
            se: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeek: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            },
            kr: {
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"]
            },
            it: {
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeek: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
            },
            da: {
                months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                dayOfWeek: ["Søn", "Man", "Tir", "ons", "Tor", "Fre", "lør"]
            },
            no: {
                months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                dayOfWeek: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"]
            },
            ja: {
                months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayOfWeek: ["日", "月", "火", "水", "木", "金", "土"]
            },
            vi: {
                months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
            },
            sl: {
                months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                dayOfWeek: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"]
            },
            cs: {
                months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                dayOfWeek: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            },
            hu: {
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                dayOfWeek: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"]
            }
        },
        value: "",
        lang: "en",
        format: "Y/m/d H:i",
        formatTime: "H:i",
        formatDate: "Y/m/d",
        startDate: false,
        step: 60,
        monthChangeSpinner: true,
        closeOnDateSelect: false,
        closeOnWithoutClick: true,
        closeOnInputClick: true,
        timepicker: true,
        datepicker: true,
        defaultTime: false,
        defaultDate: false,
        minDate: false,
        maxDate: false,
        minTime: false,
        maxTime: false,
        allowTimes: [],
        opened: false,
        initTime: true,
        inline: false,
        onSelectDate: function () {},
        onSelectTime: function () {},
        onChangeMonth: function () {},
        onChangeDateTime: function () {},
        onShow: function () {},
        onClose: function () {},
        onGenerate: function () {},
        withoutCopyright: true,
        inverseButton: false,
        hours12: false,
        next: "xdsoft_next",
        prev: "xdsoft_prev",
        dayOfWeekStart: 0,
        timeHeightInTimePicker: 25,
        timepickerScrollbar: true,
        todayButton: true,
        defaultSelect: true,
        scrollMonth: true,
        scrollTime: true,
        scrollInput: true,
        lazyInit: false,
        mask: false,
        validateOnBlur: true,
        allowBlank: true,
        yearStart: 1950,
        yearEnd: 2050,
        style: "",
        id: "",
        fixed: false,
        roundTime: "round",
        className: "",
        weekends: [],
        yearOffset: 0,
        beforeShowDay: null
    };
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (e, t) {
            for (var n = t || 0, r = this.length; n < r; n++) {
                if (this[n] === e) {
                    return n
                }
            }
            return -1
        }
    }
    Date.prototype.countDaysInMonth = function () {
        return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getDate()
    };
    e.fn.xdsoftScroller = function (t) {
        return this.each(function () {
            var n = e(this);
            if (!e(this).hasClass("xdsoft_scroller_box")) {
                var r = function (e) {
                        var t = {
                            x: 0,
                            y: 0
                        };
                        if (e.type == "touchstart" || e.type == "touchmove" || e.type == "touchend" || e.type == "touchcancel") {
                            var n = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            t.x = n.pageX;
                            t.y = n.pageY
                        } else if (e.type == "mousedown" || e.type == "mouseup" || e.type == "mousemove" || e.type == "mouseover" || e.type == "mouseout" || e.type == "mouseenter" || e.type == "mouseleave") {
                            t.x = e.pageX;
                            t.y = e.pageY
                        }
                        return t
                    },
                    i = 0,
                    s = n.children().eq(0),
                    o = n[0].clientHeight,
                    u = s[0].offsetHeight,
                    a = e('<div class="xdsoft_scrollbar"></div>'),
                    f = e('<div class="xdsoft_scroller"></div>'),
                    l = 100,
                    c = false;
                a.append(f);
                n.addClass("xdsoft_scroller_box").append(a);
                f.on("mousedown.xdsoft_scroller", function (r) {
                    if (!o) n.trigger("resize_scroll.xdsoft_scroller", [t]);
                    var s = r.pageY,
                        u = parseInt(f.css("margin-top")),
                        c = a[0].offsetHeight;
                    e(document.body).addClass("xdsoft_noselect");
                    e([document.body, window]).on("mouseup.xdsoft_scroller", function h() {
                        e([document.body, window]).off("mouseup.xdsoft_scroller", h).off("mousemove.xdsoft_scroller", i).removeClass("xdsoft_noselect")
                    });
                    e(document.body).on("mousemove.xdsoft_scroller", i = function (e) {
                        var t = e.pageY - s + u;
                        if (t < 0) t = 0;
                        if (t + f[0].offsetHeight > c) t = c - f[0].offsetHeight;
                        n.trigger("scroll_element.xdsoft_scroller", [l ? t / l : 0])
                    })
                });
                n.on("scroll_element.xdsoft_scroller", function (e, t) {
                    if (!o) n.trigger("resize_scroll.xdsoft_scroller", [t, true]);
                    t = t > 1 ? 1 : t < 0 || isNaN(t) ? 0 : t;
                    f.css("margin-top", l * t);
                    s.css("marginTop", -parseInt((u - o) * t))
                }).on("resize_scroll.xdsoft_scroller", function (e, t, r) {
                    o = n[0].clientHeight;
                    u = s[0].offsetHeight;
                    var i = o / u,
                        c = i * a[0].offsetHeight;
                    if (i > 1) f.hide();
                    else {
                        f.show();
                        f.css("height", parseInt(c > 10 ? c : 10));
                        l = a[0].offsetHeight - f[0].offsetHeight;
                        if (r !== true) n.trigger("scroll_element.xdsoft_scroller", [t ? t : Math.abs(parseInt(s.css("marginTop"))) / (u - o)])
                    }
                });
                n.mousewheel && n.mousewheel(function (e, t, r, i) {
                    var a = Math.abs(parseInt(s.css("marginTop")));
                    n.trigger("scroll_element.xdsoft_scroller", [(a - t * 20) / (u - o)]);
                    e.stopPropagation();
                    return false
                });
                n.on("touchstart", function (e) {
                    c = r(e)
                });
                n.on("touchmove", function (e) {
                    if (c) {
                        var t = r(e),
                            i = Math.abs(parseInt(s.css("marginTop")));
                        n.trigger("scroll_element.xdsoft_scroller", [(i - (t.y - c.y)) / (u - o)]);
                        e.stopPropagation();
                        e.preventDefault();
                        c = r(e)
                    }
                });
                n.on("touchend touchcancel", function (e) {
                    c = false
                })
            }
            n.trigger("resize_scroll.xdsoft_scroller", [t])
        })
    };
    e.fn.datetimepicker = function (n) {
        var r = 48,
            i = 57,
            s = 96,
            o = 105,
            u = 17,
            a = 46,
            f = 13,
            l = 27,
            c = 8,
            h = 37,
            p = 38,
            d = 39,
            v = 40,
            m = 9,
            g = 116,
            y = 65,
            b = 67,
            w = 86,
            E = 90,
            S = 89,
            x = false,
            T = e.isPlainObject(n) || !n ? e.extend(true, {}, t, n) : e.extend({}, t),
            N = 0,
            C = function (e) {
                e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function t(n) {
                    if (e.is(":disabled") || e.is(":hidden") || !e.is(":visible") || e.data("xdsoft_datetimepicker")) return;
                    clearTimeout(N);
                    N = setTimeout(function () {
                        if (!e.data("xdsoft_datetimepicker")) k(e);
                        e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft", t).trigger("open.xdsoft")
                    }, 100)
                })
            },
            k = function (t) {
                function X() {
                    var e = false;
                    if (T.startDate) {
                        e = j.strToDateTime(T.startDate)
                    } else {
                        e = T.value ? T.value : t && t.val && t.val() ? t.val() : "";
                        e = Date.parseDate(e, T.format)
                    }
                    if (e && j.isValidDate(e)) {
                        n.data("changed", true)
                    } else {
                        e = ""
                    }
                    return e ? e : 0
                }
                var n = e("<div " + (T.id ? 'id="' + T.id + '"' : "") + " " + (T.style ? 'style="' + T.style + '"' : "") + ' class="xdsoft_datetimepicker xdsoft_noselect ' + T.className + '"></div>'),
                    N = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                    C = e('<div class="xdsoft_datepicker active"></div>'),
                    k = e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"><i class="icon-203"></i></button><button type="button" class="xdsoft_today_button"><i class="icon-316"></i></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"><i class="icon-204"></i></button></div>'),
                    L = e('<div class="xdsoft_calendar"></div>'),
                    A = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                    O = A.find(".xdsoft_time_box").eq(0),
                    M = e('<div class="xdsoft_time_variant"></div>'),
                    _ = e('<div class="xdsoft_scrollbar"></div>'),
                    D = e('<div class="xdsoft_scroller"></div>'),
                    P = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                    H = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');
                k.find(".xdsoft_month span").after(P);
                k.find(".xdsoft_year span").after(H);
                k.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft", function (t) {
                    k.find(".xdsoft_select").hide();
                    var n = e(this).find(".xdsoft_select").eq(0),
                        r = 0,
                        i = 0;
                    if (j.currentTime) r = j.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]();
                    n.show();
                    for (var s = n.find("div.xdsoft_option"), o = 0; o < s.length; o++) {
                        if (s.eq(o).data("value") == r) {
                            break
                        } else i += s[0].offsetHeight
                    }
                    n.xdsoftScroller(i / (n.children()[0].offsetHeight - n[0].clientHeight));
                    t.stopPropagation();
                    return false
                });
                k.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft", function (e) {
                    e.stopPropagation();
                    e.preventDefault()
                }).on("mousedown.xdsoft", ".xdsoft_option", function (t) {
                    if (j && j.currentTime) j.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value"));
                    e(this).parent().parent().hide();
                    n.trigger("xchange.xdsoft");
                    T.onChangeMonth && T.onChangeMonth.call && T.onChangeMonth.call(n, j.currentTime, n.data("input"))
                });
                n.setOptions = function (N) {
                    T = e.extend(true, {}, T, N);
                    if (N.allowTimes && e.isArray(N.allowTimes) && N.allowTimes.length) {
                        T["allowTimes"] = e.extend(true, [], N.allowTimes)
                    }
                    if (N.weekends && e.isArray(N.weekends) && N.weekends.length) {
                        T["weekends"] = e.extend(true, [], N.weekends)
                    }
                    if ((T.open || T.opened) && !T.inline) {
                        t.trigger("open.xdsoft")
                    }
                    if (T.inline) {
                        q = true;
                        n.addClass("xdsoft_inline");
                        t.after(n).hide()
                    }
                    if (T.inverseButton) {
                        T.next = "xdsoft_prev";
                        T.prev = "xdsoft_next"
                    }
                    if (T.datepicker) C.addClass("active");
                    else C.removeClass("active");
                    if (T.timepicker) A.addClass("active");
                    else A.removeClass("active");
                    if (T.value) {
                        t && t.val && t.val(T.value);
                        j.setCurrentTime(T.value)
                    }
                    if (isNaN(T.dayOfWeekStart) || parseInt(T.dayOfWeekStart) < 0 || parseInt(T.dayOfWeekStart) > 6) T.dayOfWeekStart = 0;
                    else T.dayOfWeekStart = parseInt(T.dayOfWeekStart);
                    if (!T.timepickerScrollbar) _.hide();
                    if (T.minDate && /^-(.*)$/.test(T.minDate)) {
                        T.minDate = j.strToDateTime(T.minDate).dateFormat(T.formatDate)
                    }
                    if (T.maxDate && /^\+(.*)$/.test(T.maxDate)) {
                        T.maxDate = j.strToDateTime(T.maxDate).dateFormat(T.formatDate)
                    }
                    k.find(".xdsoft_today_button").css("visibility", !T.todayButton ? "hidden" : "visible");
                    if (T.mask) {
                        var L, O = function (e) {
                                try {
                                    if (document.selection && document.selection.createRange) {
                                        var t = document.selection.createRange();
                                        return t.getBookmark().charCodeAt(2) - 2
                                    } else if (e.setSelectionRange) return e.selectionStart
                                } catch (n) {
                                    return 0
                                }
                            },
                            M = function (e, t) {
                                e = typeof e == "string" || e instanceof String ? document.getElementById(e) : e;
                                if (!e) {
                                    return false
                                } else if (e.createTextRange) {
                                    var n = e.createTextRange();
                                    n.collapse(true);
                                    n.moveEnd(t);
                                    n.moveStart(t);
                                    n.select();
                                    return true
                                } else if (e.setSelectionRange) {
                                    e.setSelectionRange(t, t);
                                    return true
                                }
                                return false
                            },
                            D = function (e, t) {
                                var n = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                                return RegExp(n).test(t)
                            };
                        t.off("keydown.xdsoft");
                        switch (true) {
                        case T.mask === true:
                            T.mask = T.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59");
                        case e.type(T.mask) == "string":
                            if (!D(T.mask, t.val())) t.val(T.mask.replace(/[0-9]/g, "_"));
                            t.on("keydown.xdsoft", function (n) {
                                var N = this.value,
                                    C = n.which;
                                switch (true) {
                                case C >= r && C <= i || C >= s && C <= o || C == c || C == a:
                                    var k = O(this),
                                        L = C != c && C != a ? String.fromCharCode(s <= C && C <= o ? C - r : C) : "_";
                                    if ((C == c || C == a) && k) {
                                        k--;
                                        L = "_"
                                    }
                                    while (/[^0-9_]/.test(T.mask.substr(k, 1)) && k < T.mask.length && k > 0) k += C == c || C == a ? -1 : 1;
                                    N = N.substr(0, k) + L + N.substr(k + 1);
                                    if (e.trim(N) == "") {
                                        N = T.mask.replace(/[0-9]/g, "_")
                                    } else {
                                        if (k == T.mask.length) break
                                    }
                                    k += C == c || C == a ? 0 : 1;
                                    while (/[^0-9_]/.test(T.mask.substr(k, 1)) && k < T.mask.length && k > 0) k += C == c || C == a ? -1 : 1;
                                    if (D(T.mask, N)) {
                                        this.value = N;
                                        M(this, k)
                                    } else if (e.trim(N) == "") this.value = T.mask.replace(/[0-9]/g, "_");
                                    else {
                                        t.trigger("error_input.xdsoft")
                                    }
                                    break;
                                case !! ~ [y, b, w, E, S].indexOf(C) && x:
                                case !! ~ [l, p, v, h, d, g, u, m, f].indexOf(C):
                                    return true
                                }
                                n.preventDefault();
                                return false
                            });
                            break
                        }
                    }
                    if (T.validateOnBlur) {
                        t.off("blur.xdsoft").on("blur.xdsoft", function () {
                            if (T.allowBlank && !e.trim(e(this).val()).length) {
                                e(this).val(null);
                                n.data("xdsoft_datetime").empty()
                            } else if (!Date.parseDate(e(this).val(), T.format)) {
                                e(this).val(j.now().dateFormat(T.format));
                                n.data("xdsoft_datetime").setCurrentTime(e(this).val())
                            } else {
                                n.data("xdsoft_datetime").setCurrentTime(e(this).val())
                            }
                            n.trigger("changedatetime.xdsoft")
                        })
                    }
                    T.dayOfWeekStartPrev = T.dayOfWeekStart == 0 ? 6 : T.dayOfWeekStart - 1;
                    n.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
                };
                n.data("options", T).on("mousedown.xdsoft", function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    H.hide();
                    P.hide();
                    return false
                });
                var B = A.find(".xdsoft_time_box");
                B.append(M);
                B.xdsoftScroller();
                n.on("afterOpen.xdsoft", function () {
                    B.xdsoftScroller()
                });
                n.append(C).append(A);
                if (T.withoutCopyright !== true) n.append(N);
                C.append(k).append(L);
                e("body").append(n);
                var j = new function () {
                        var e = this;
                        e.now = function (t) {
                            var n = new Date;
                            if (!t && T.defaultDate) {
                                var r = e.strtodate(T.defaultDate);
                                n.setFullYear(r.getFullYear());
                                n.setMonth(r.getMonth());
                                n.setDate(r.getDate())
                            }
                            if (T.yearOffset) {
                                n.setFullYear(n.getFullYear() + T.yearOffset)
                            }
                            if (!t && T.defaultTime) {
                                var i = e.strtotime(T.defaultTime);
                                n.setHours(i.getHours());
                                n.setMinutes(i.getMinutes())
                            }
                            return n
                        };
                        e.isValidDate = function (e) {
                            if (Object.prototype.toString.call(e) !== "[object Date]") return false;
                            return !isNaN(e.getTime())
                        };
                        e.setCurrentTime = function (t) {
                            e.currentTime = typeof t == "string" ? e.strToDateTime(t) : e.isValidDate(t) ? t : e.now();
                            n.trigger("xchange.xdsoft")
                        };
                        e.empty = function () {
                            e.currentTime = null
                        };
                        e.getCurrentTime = function (t) {
                            return e.currentTime
                        };
                        e.nextMonth = function () {
                            var t = e.currentTime.getMonth() + 1;
                            if (t == 12) {
                                e.currentTime.setFullYear(e.currentTime.getFullYear() + 1);
                                t = 0
                            }
                            e.currentTime.setDate(Math.min(Date.daysInMonth[t], e.currentTime.getDate()));
                            e.currentTime.setMonth(t);
                            T.onChangeMonth && T.onChangeMonth.call && T.onChangeMonth.call(n, j.currentTime, n.data("input"));
                            n.trigger("xchange.xdsoft");
                            return t
                        };
                        e.prevMonth = function () {
                            var t = e.currentTime.getMonth() - 1;
                            if (t == -1) {
                                e.currentTime.setFullYear(e.currentTime.getFullYear() - 1);
                                t = 11
                            }
                            e.currentTime.setDate(Math.min(Date.daysInMonth[t], e.currentTime.getDate()));
                            e.currentTime.setMonth(t);
                            T.onChangeMonth && T.onChangeMonth.call && T.onChangeMonth.call(n, j.currentTime, n.data("input"));
                            n.trigger("xchange.xdsoft");
                            return t
                        };
                        e.strToDateTime = function (t) {
                            if (t && t instanceof Date && e.isValidDate(t)) return t;
                            var n = [],
                                r, i;
                            if ((n = /^(\+|\-)(.*)$/.exec(t)) && (n[2] = Date.parseDate(n[2], T.formatDate))) {
                                r = n[2].getTime() - n[2].getTimezoneOffset() * 6e4;
                                i = new Date(j.now().getTime() + parseInt(n[1] + "1") * r)
                            } else i = t ? Date.parseDate(t, T.format) : e.now();
                            if (!e.isValidDate(i)) i = e.now();
                            return i
                        };
                        e.strtodate = function (t) {
                            if (t && t instanceof Date && e.isValidDate(t)) return t;
                            var n = t ? Date.parseDate(t, T.formatDate) : e.now(true);
                            if (!e.isValidDate(n)) n = e.now(true);
                            return n
                        };
                        e.strtotime = function (t) {
                            if (t && t instanceof Date && e.isValidDate(t)) return t;
                            var n = t ? Date.parseDate(t, T.formatTime) : e.now();
                            if (!e.isValidDate(n)) n = e.now(true);
                            return n
                        };
                        e.str = function () {
                            return e.currentTime.dateFormat(T.format)
                        };
                        e.currentTime = this.now()
                    };
                k.find(".xdsoft_today_button").on("mousedown.xdsoft", function () {
                    n.data("changed", true);
                    j.setCurrentTime(0);
                    n.trigger("afterOpen.xdsoft")
                }).on("dblclick.xdsoft", function () {
                    t.val(j.str());
                    n.trigger("close.xdsoft")
                });
                k.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                    var t = e(this),
                        n = 0,
                        r = false;
                    (function i(e) {
                        var s = j.currentTime.getMonth();
                        if (t.hasClass(T.next)) {
                            j.nextMonth()
                        } else if (t.hasClass(T.prev)) {
                            j.prevMonth()
                        }
                        if (T.monthChangeSpinner) {
                            !r && (n = setTimeout(i, e ? e : 100))
                        }
                    })(500);
                    e([document.body, window]).on("mouseup.xdsoft", function s() {
                        clearTimeout(n);
                        r = true;
                        e([document.body, window]).off("mouseup.xdsoft", s)
                    })
                });
                A.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft", function () {
                    var t = e(this),
                        n = 0,
                        r = false,
                        i = 110;
                    (function s(e) {
                        var o = O[0].clientHeight,
                            u = M[0].offsetHeight,
                            a = Math.abs(parseInt(M.css("marginTop")));
                        if (t.hasClass(T.next) && u - o - T.timeHeightInTimePicker >= a) {
                            M.css("marginTop", "-" + (a + T.timeHeightInTimePicker) + "px")
                        } else if (t.hasClass(T.prev) && a - T.timeHeightInTimePicker >= 0) {
                            M.css("marginTop", "-" + (a - T.timeHeightInTimePicker) + "px")
                        }
                        O.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(M.css("marginTop")) / (u - o))]);
                        i = i > 10 ? 10 : i - 10;
                        !r && (n = setTimeout(s, e ? e : i))
                    })(500);
                    e([document.body, window]).on("mouseup.xdsoft", function o() {
                        clearTimeout(n);
                        r = true;
                        e([document.body, window]).off("mouseup.xdsoft", o)
                    })
                });
                var F = 0;
                n.on("xchange.xdsoft", function (t) {
                    clearTimeout(F);
                    F = setTimeout(function () {
                        var t = "",
                            r = new Date(j.currentTime.getFullYear(), j.currentTime.getMonth(), 1, 12, 0, 0),
                            i = 0,
                            s = j.now();
                        while (r.getDay() != T.dayOfWeekStart) r.setDate(r.getDate() - 1);
                        t += "<table><thead><tr>";
                        for (var o = 0; o < 7; o++) {
                            t += "<th>" + T.i18n[T.lang].dayOfWeek[o + T.dayOfWeekStart > 6 ? 0 : o + T.dayOfWeekStart] + "</th>"
                        }
                        t += "</tr></thead>";
                        t += "<tbody><tr>";
                        var u = false,
                            a = false;
                        if (T.maxDate !== false) {
                            u = j.strtodate(T.maxDate);
                            u = new Date(u.getFullYear(), u.getMonth(), u.getDate(), 23, 59, 59, 999)
                        }
                        if (T.minDate !== false) {
                            a = j.strtodate(T.minDate);
                            a = new Date(a.getFullYear(), a.getMonth(), a.getDate())
                        }
                        var f, l, c, h = [],
                            p;
                        while (i < j.currentTime.countDaysInMonth() || r.getDay() != T.dayOfWeekStart || j.currentTime.getMonth() == r.getMonth()) {
                            h = [];
                            i++;
                            f = r.getDate();
                            l = r.getFullYear();
                            c = r.getMonth();
                            h.push("xdsoft_date");
                            if (T.beforeShowDay && T.beforeShowDay.call) {
                                p = T.beforeShowDay.call(n, r)
                            } else {
                                p = null
                            }
                            if (u !== false && r > u || a !== false && r < a || p && p[0] === false) {
                                h.push("xdsoft_disabled")
                            }
                            if (p && p[1] != "") {
                                h.push(p[1])
                            }
                            if (j.currentTime.getMonth() != c) h.push("xdsoft_other_month");
                            if ((T.defaultSelect || n.data("changed")) && j.currentTime.dateFormat(T.formatDate) == r.dateFormat(T.formatDate)) {
                                h.push("xdsoft_current")
                            }
                            if (s.dateFormat(T.formatDate) == r.dateFormat(T.formatDate)) {
                                h.push("xdsoft_today")
                            }
                            if (r.getDay() == 0 || r.getDay() == 6 || ~T.weekends.indexOf(r.dateFormat(T.formatDate))) {
                                h.push("xdsoft_weekend")
                            }
                            if (T.beforeShowDay && typeof T.beforeShowDay == "function") {
                                h.push(T.beforeShowDay(r))
                            }
                            t += '<td data-date="' + f + '" data-month="' + c + '" data-year="' + l + '"' + ' class="xdsoft_date xdsoft_day_of_week' + r.getDay() + " " + h.join(" ") + '">' + "<div>" + f + "</div>" + "</td>";
                            if (r.getDay() == T.dayOfWeekStartPrev) {
                                t += "</tr>"
                            }
                            r.setDate(f + 1)
                        }
                        t += "</tbody></table>";
                        L.html(t);
                        k.find(".xdsoft_label span").eq(0).text(T.i18n[T.lang].months[j.currentTime.getMonth()]);
                        k.find(".xdsoft_label span").eq(1).text(j.currentTime.getFullYear());
                        var d = "",
                            v = "",
                            c = "",
                            m = function (t, r) {
                                var i = j.now();
                                i.setHours(t);
                                t = parseInt(i.getHours());
                                i.setMinutes(r);
                                r = parseInt(i.getMinutes());
                                h = [];
                                if (T.maxTime !== false && j.strtotime(T.maxTime).getTime() < i.getTime() || T.minTime !== false && j.strtotime(T.minTime).getTime() > i.getTime()) h.push("xdsoft_disabled");
                                if ((T.initTime || T.defaultSelect || n.data("changed")) && parseInt(j.currentTime.getHours()) == parseInt(t) && (T.step > 59 || Math[T.roundTime](j.currentTime.getMinutes() / T.step) * T.step == parseInt(r))) {
                                    if (T.defaultSelect || n.data("changed")) {
                                        h.push("xdsoft_current")
                                    } else if (T.initTime) {
                                        h.push("xdsoft_init_time")
                                    }
                                }
                                if (parseInt(s.getHours()) == parseInt(t) && parseInt(s.getMinutes()) == parseInt(r)) h.push("xdsoft_today");
                                d += '<div class="xdsoft_time ' + h.join(" ") + '" data-hour="' + t + '" data-minute="' + r + '">' + i.dateFormat(T.formatTime) + "</div>"
                            };
                        if (!T.allowTimes || !e.isArray(T.allowTimes) || !T.allowTimes.length) {
                            for (var i = 0, o = 0; i < (T.hours12 ? 12 : 24); i++) {
                                for (o = 0; o < 60; o += T.step) {
                                    v = (i < 10 ? "0" : "") + i;
                                    c = (o < 10 ? "0" : "") + o;
                                    m(v, c)
                                }
                            }
                        } else {
                            for (var i = 0; i < T.allowTimes.length; i++) {
                                v = j.strtotime(T.allowTimes[i]).getHours();
                                c = j.strtotime(T.allowTimes[i]).getMinutes();
                                m(v, c)
                            }
                        }
                        M.html(d);
                        var g = "",
                            i = 0;
                        for (i = parseInt(T.yearStart, 10) + T.yearOffset; i <= parseInt(T.yearEnd, 10) + T.yearOffset; i++) {
                            g += '<div class="xdsoft_option ' + (j.currentTime.getFullYear() == i ? "xdsoft_current" : "") + '" data-value="' + i + '">' + i + "</div>"
                        }
                        H.children().eq(0).html(g);
                        for (i = 0, g = ""; i <= 11; i++) {
                            g += '<div class="xdsoft_option ' + (j.currentTime.getMonth() == i ? "xdsoft_current" : "") + '" data-value="' + i + '">' + T.i18n[T.lang].months[i] + "</div>"
                        }
                        P.children().eq(0).html(g);
                        e(n).trigger("generate.xdsoft")
                    }, 10);
                    t.stopPropagation()
                }).on("afterOpen.xdsoft", function () {
                    if (T.timepicker) {
                        var e;
                        if (M.find(".xdsoft_current").length) {
                            e = ".xdsoft_current"
                        } else if (M.find(".xdsoft_init_time").length) {
                            e = ".xdsoft_init_time"
                        }
                        if (e) {
                            var t = O[0].clientHeight,
                                n = M[0].offsetHeight,
                                r = M.find(e).index() * T.timeHeightInTimePicker + 1;
                            if (n - t < r) r = n - t;
                            O.trigger("scroll_element.xdsoft_scroller", [parseInt(r) / (n - t)])
                        } else {
                            O.trigger("scroll_element.xdsoft_scroller", [0])
                        }
                    }
                });
                var I = 0;
                L.on("click.xdsoft", "td", function (r) {
                    r.stopPropagation();
                    I++;
                    var i = e(this),
                        s = j.currentTime;
                    if (s === undefined || s === null) {
                        j.currentTime = j.now();
                        s = j.currentTime
                    }
                    if (i.hasClass("xdsoft_disabled")) return false;
                    s.setDate(1);
                    s.setFullYear(i.data("year"));
                    s.setMonth(i.data("month"));
                    s.setDate(i.data("date"));
                    n.trigger("select.xdsoft", [s]);
                    t.val(j.str());
                    if ((I > 1 || T.closeOnDateSelect === true || T.closeOnDateSelect === 0 && !T.timepicker) && !T.inline) {
                        n.trigger("close.xdsoft")
                    }
                    if (T.onSelectDate && T.onSelectDate.call) {
                        T.onSelectDate.call(n, j.currentTime, n.data("input"))
                    }
                    n.data("changed", true);
                    n.trigger("xchange.xdsoft");
                    n.trigger("changedatetime.xdsoft");
                    setTimeout(function () {
                        I = 0
                    }, 200)
                });
                M.on("click.xdsoft", "div", function (t) {
                    t.stopPropagation();
                    var r = e(this),
                        i = j.currentTime;
                    if (i === undefined || i === null) {
                        j.currentTime = j.now();
                        i = j.currentTime
                    }
                    if (r.hasClass("xdsoft_disabled")) return false;
                    i.setHours(r.data("hour"));
                    i.setMinutes(r.data("minute"));
                    n.trigger("select.xdsoft", [i]);
                    n.data("input").val(j.str());
                    !T.inline && n.trigger("close.xdsoft");
                    if (T.onSelectTime && T.onSelectTime.call) {
                        T.onSelectTime.call(n, j.currentTime, n.data("input"))
                    }
                    n.data("changed", true);
                    n.trigger("xchange.xdsoft");
                    n.trigger("changedatetime.xdsoft")
                });
                n.mousewheel && C.mousewheel(function (e, t, n, r) {
                    if (!T.scrollMonth) return true;
                    if (t < 0) j.nextMonth();
                    else j.prevMonth();
                    return false
                });
                n.mousewheel && O.unmousewheel().mousewheel(function (e, t, n, r) {
                    if (!T.scrollTime) return true;
                    var i = O[0].clientHeight,
                        s = M[0].offsetHeight,
                        o = Math.abs(parseInt(M.css("marginTop"))),
                        u = true;
                    if (t < 0 && s - i - T.timeHeightInTimePicker >= o) {
                        M.css("marginTop", "-" + (o + T.timeHeightInTimePicker) + "px");
                        u = false
                    } else if (t > 0 && o - T.timeHeightInTimePicker >= 0) {
                        M.css("marginTop", "-" + (o - T.timeHeightInTimePicker) + "px");
                        u = false
                    }
                    O.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(M.css("marginTop")) / (s - i))]);
                    e.stopPropagation();
                    return u
                });
                var q = false;
                n.on("changedatetime.xdsoft", function () {
                    if (T.onChangeDateTime && T.onChangeDateTime.call) {
                        var e = n.data("input");
                        T.onChangeDateTime.call(n, j.currentTime, e);
                        e.trigger("change")
                    }
                }).on("generate.xdsoft", function () {
                    if (T.onGenerate && T.onGenerate.call) T.onGenerate.call(n, j.currentTime, n.data("input"));
                    if (q) {
                        n.trigger("afterOpen.xdsoft");
                        q = false
                    }
                }).on("click.xdsoft", function (e) {
                    e.stopPropagation()
                });
                var R = 0;
                t.mousewheel && t.mousewheel(function (e, r, i, s) {
                    if (!T.scrollInput) return true;
                    if (!T.datepicker && T.timepicker) {
                        R = M.find(".xdsoft_current").length ? M.find(".xdsoft_current").eq(0).index() : 0;
                        if (R + r >= 0 && R + r < M.children().length) R += r;
                        M.children().eq(R).length && M.children().eq(R).trigger("mousedown");
                        return false
                    } else if (T.datepicker && !T.timepicker) {
                        C.trigger(e, [r, i, s]);
                        t.val && t.val(j.str());
                        n.trigger("changedatetime.xdsoft");
                        return false
                    }
                });
                var U = function () {
                        var t = n.data("input").offset(),
                            r = t.top + n.data("input")[0].offsetHeight - 1,
                            i = t.left,
                            s = "absolute";
                        if (T.fixed) {
                            r -= e(window).scrollTop();
                            i -= e(window).scrollLeft();
                            s = "fixed"
                        } else {
                            if (r + n[0].offsetHeight > e(window).height() + e(window).scrollTop()) r = t.top - n[0].offsetHeight + 1;
                            if (r < 0) r = 0;
                            if (i + n[0].offsetWidth > e(window).width()) i = t.left - n[0].offsetWidth + n.data("input")[0].offsetWidth
                        }
                        n.css({
                            left: i,
                            top: r,
                            position: s
                        })
                    };
                n.on("open.xdsoft", function () {
                    var t = true;
                    if (T.onShow && T.onShow.call) {
                        t = T.onShow.call(n, j.currentTime, n.data("input"))
                    }
                    if (t !== false) {
                        n.show();
                        U();
                        e(window).off("resize.xdsoft", U).on("resize.xdsoft", U);
                        if (T.closeOnWithoutClick) {
                            e([document.body, window]).on("mousedown.xdsoft", function r() {
                                n.trigger("close.xdsoft");
                                e([document.body, window]).off("mousedown.xdsoft", r)
                            })
                        }
                    }
                }).on("close.xdsoft", function (e) {
                    var t = true;
                    if (T.onClose && T.onClose.call) {
                        t = T.onClose.call(n, j.currentTime, n.data("input"))
                    }
                    if (t !== false && !T.opened && !T.inline) {
                        n.hide()
                    }
                    e.stopPropagation()
                }).data("input", t);
                var z = 0,
                    W = 0;
                n.data("xdsoft_datetime", j);
                n.setOptions(T);
                j.setCurrentTime(X());
                t.data("xdsoft_datetimepicker", n).on("open.xdsoft focusin.xdsoft mousedown.xdsoft", function (e) {
                    if (t.is(":disabled") || t.is(":hidden") || !t.is(":visible") || t.data("xdsoft_datetimepicker").is(":visible") && T.closeOnInputClick) return;
                    clearTimeout(z);
                    z = setTimeout(function () {
                        if (t.is(":disabled") || t.is(":hidden") || !t.is(":visible")) return;
                        q = true;
                        j.setCurrentTime(X());
                        n.trigger("open.xdsoft")
                    }, 100)
                }).on("keydown.xdsoft", function (t) {
                    var r = this.value,
                        i = t.which;
                    switch (true) {
                    case !! ~ [f].indexOf(i):
                        var s = e("input:visible,textarea:visible");
                        n.trigger("close.xdsoft");
                        s.eq(s.index(this) + 1).focus();
                        return false;
                    case !! ~ [m].indexOf(i):
                        n.trigger("close.xdsoft");
                        return true
                    }
                })
            },
            L = function (t) {
                var n = t.data("xdsoft_datetimepicker");
                if (n) {
                    n.data("xdsoft_datetime", null);
                    n.remove();
                    t.data("xdsoft_datetimepicker", null).off("open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft");
                    e(window).off("resize.xdsoft");
                    e([window, document.body]).off("mousedown.xdsoft");
                    t.unmousewheel && t.unmousewheel()
                }
            };
        e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (e) {
            if (e.keyCode == u) x = true
        }).on("keyup.xdsoftctrl", function (e) {
            if (e.keyCode == u) x = false
        });
        return this.each(function () {
            var t;
            if (t = e(this).data("xdsoft_datetimepicker")) {
                if (e.type(n) === "string") {
                    switch (n) {
                    case "show":
                        e(this).select().focus();
                        t.trigger("open.xdsoft");
                        break;
                    case "hide":
                        t.trigger("close.xdsoft");
                        break;
                    case "destroy":
                        L(e(this));
                        break;
                    case "reset":
                        this.value = this.defaultValue;
                        if (!this.value || !t.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value, T.format))) t.data("changed", false);
                        t.data("xdsoft_datetime").setCurrentTime(this.value);
                        break
                    }
                } else {
                    t.setOptions(n)
                }
                return 0
            } else if (e.type(n) !== "string") {
                if (!T.lazyInit || T.open || T.inline) {
                    k(e(this))
                } else C(e(this))
            }
        })
    };
    e.fn.datetimepicker.defaults = t
})(jQuery);
(function (e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        module.exports = e
    } else {
        e(jQuery)
    }
})(function (e) {
    function o(t) {
        var n = t || window.event,
            s = [].slice.call(arguments, 1),
            o = 0,
            u = 0,
            a = 0,
            f = 0,
            l = 0,
            c;
        t = e.event.fix(n);
        t.type = "mousewheel";
        if (n.wheelDelta) {
            o = n.wheelDelta
        }
        if (n.detail) {
            o = n.detail * -1
        }
        if (n.deltaY) {
            a = n.deltaY * -1;
            o = a
        }
        if (n.deltaX) {
            u = n.deltaX;
            o = u * -1
        }
        if (n.wheelDeltaY !== undefined) {
            a = n.wheelDeltaY
        }
        if (n.wheelDeltaX !== undefined) {
            u = n.wheelDeltaX * -1
        }
        f = Math.abs(o);
        if (!r || f < r) {
            r = f
        }
        l = Math.max(Math.abs(a), Math.abs(u));
        if (!i || l < i) {
            i = l
        }
        c = o > 0 ? "floor" : "ceil";
        o = Math[c](o / r);
        u = Math[c](u / i);
        a = Math[c](a / i);
        s.unshift(t, o, u, a);
        return (e.event.dispatch || e.event.handle).apply(this, s)
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"];
    var n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    var r, i;
    if (e.event.fixHooks) {
        for (var s = t.length; s;) {
            e.event.fixHooks[t[--s]] = e.event.mouseHooks
        }
    }
    e.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var e = n.length; e;) {
                    this.addEventListener(n[--e], o, false)
                }
            } else {
                this.onmousewheel = o
            }
        },
        teardown: function () {
            if (this.removeEventListener) {
                for (var e = n.length; e;) {
                    this.removeEventListener(n[--e], o, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
});
Date.parseFunctions = {
    count: 0
};
Date.parseRegexes = [];
Date.formatFunctions = {
    count: 0
};
Date.prototype.dateFormat = function (e) {
    if (e == "unixtime") {
        return parseInt(this.getTime() / 1e3)
    }
    if (Date.formatFunctions[e] == null) {
        Date.createNewFormat(e)
    }
    var t = Date.formatFunctions[e];
    return this[t]()
};
Date.createNewFormat = function (format) {
    var funcName = "format" + Date.formatFunctions.count++;
    Date.formatFunctions[format] = funcName;
    var code = "Date.prototype." + funcName + " = function() {return ";
    var special = false;
    var ch = "";
    for (var i = 0; i < format.length; ++i) {
        ch = format.charAt(i);
        if (!special && ch == "\\") {
            special = true
        } else {
            if (special) {
                special = false;
                code += "'" + String.escape(ch) + "' + "
            } else {
                code += Date.getFormatCode(ch)
            }
        }
    }
    eval(code.substring(0, code.length - 3) + ";}")
};
Date.getFormatCode = function (e) {
    switch (e) {
    case "d":
        return "String.leftPad(this.getDate(), 2, '0') + ";
    case "D":
        return "Date.dayNames[this.getDay()].substring(0, 3) + ";
    case "j":
        return "this.getDate() + ";
    case "l":
        return "Date.dayNames[this.getDay()] + ";
    case "S":
        return "this.getSuffix() + ";
    case "w":
        return "this.getDay() + ";
    case "z":
        return "this.getDayOfYear() + ";
    case "W":
        return "this.getWeekOfYear() + ";
    case "F":
        return "Date.monthNames[this.getMonth()] + ";
    case "m":
        return "String.leftPad(this.getMonth() + 1, 2, '0') + ";
    case "M":
        return "Date.monthNames[this.getMonth()].substring(0, 3) + ";
    case "n":
        return "(this.getMonth() + 1) + ";
    case "t":
        return "this.getDaysInMonth() + ";
    case "L":
        return "(this.isLeapYear() ? 1 : 0) + ";
    case "Y":
        return "this.getFullYear() + ";
    case "y":
        return "('' + this.getFullYear()).substring(2, 4) + ";
    case "a":
        return "(this.getHours() < 12 ? 'am' : 'pm') + ";
    case "A":
        return "(this.getHours() < 12 ? 'AM' : 'PM') + ";
    case "g":
        return "((this.getHours() %12) ? this.getHours() % 12 : 12) + ";
    case "G":
        return "this.getHours() + ";
    case "h":
        return "String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";
    case "H":
        return "String.leftPad(this.getHours(), 2, '0') + ";
    case "i":
        return "String.leftPad(this.getMinutes(), 2, '0') + ";
    case "s":
        return "String.leftPad(this.getSeconds(), 2, '0') + ";
    case "O":
        return "this.getGMTOffset() + ";
    case "T":
        return "this.getTimezone() + ";
    case "Z":
        return "(this.getTimezoneOffset() * -60) + ";
    default:
        return "'" + String.escape(e) + "' + "
    }
};
Date.parseDate = function (e, t) {
    if (t == "unixtime") {
        return new Date(!isNaN(parseInt(e)) ? parseInt(e) * 1e3 : 0)
    }
    if (Date.parseFunctions[t] == null) {
        Date.createParser(t)
    }
    var n = Date.parseFunctions[t];
    return Date[n](e)
};
Date.createParser = function (format) {
    var funcName = "parse" + Date.parseFunctions.count++;
    var regexNum = Date.parseRegexes.length;
    var currentGroup = 1;
    Date.parseFunctions[format] = funcName;
    var code = "Date." + funcName + " = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes[" + regexNum + "]);\nif (results && results.length > 0) {";
    var regex = "";
    var special = false;
    var ch = "";
    for (var i = 0; i < format.length; ++i) {
        ch = format.charAt(i);
        if (!special && ch == "\\") {
            special = true
        } else {
            if (special) {
                special = false;
                regex += String.escape(ch)
            } else {
                obj = Date.formatCodeToRegex(ch, currentGroup);
                currentGroup += obj.g;
                regex += obj.s;
                if (obj.g && obj.c) {
                    code += obj.c
                }
            }
        }
    }
    code += "if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";
    code += "if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";
    Date.parseRegexes[regexNum] = new RegExp("^" + regex + "$");
    eval(code)
};
Date.formatCodeToRegex = function (e, t) {
    switch (e) {
    case "D":
        return {
            g: 0,
            c: null,
            s: "(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"
        };
    case "j":
    case "d":
        return {
            g: 1,
            c: "d = parseInt(results[" + t + "], 10);\n",
            s: "(\\d{1,2})"
        };
    case "l":
        return {
            g: 0,
            c: null,
            s: "(?:" + Date.dayNames.join("|") + ")"
        };
    case "S":
        return {
            g: 0,
            c: null,
            s: "(?:st|nd|rd|th)"
        };
    case "w":
        return {
            g: 0,
            c: null,
            s: "\\d"
        };
    case "z":
        return {
            g: 1,
            c: "z = parseInt(results[" + t + "], 10);\n",
            s: "(\\d{1,3})"
        };
    case "W":
        return {
            g: 0,
            c: null,
            s: "(?:\\d{2})"
        };
    case "F":
        return {
            g: 1,
            c: "m = parseInt(Date.monthNumbers[results[" + t + "].substring(0, 3)], 10);\n",
            s: "(" + Date.monthNames.join("|") + ")"
        };
    case "M":
        return {
            g: 1,
            c: "m = parseInt(Date.monthNumbers[results[" + t + "]], 10);\n",
            s: "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"
        };
    case "n":
    case "m":
        return {
            g: 1,
            c: "m = parseInt(results[" + t + "], 10) - 1;\n",
            s: "(\\d{1,2})"
        };
    case "t":
        return {
            g: 0,
            c: null,
            s: "\\d{1,2}"
        };
    case "L":
        return {
            g: 0,
            c: null,
            s: "(?:1|0)"
        };
    case "Y":
        return {
            g: 1,
            c: "y = parseInt(results[" + t + "], 10);\n",
            s: "(\\d{4})"
        };
    case "y":
        return {
            g: 1,
            c: "var ty = parseInt(results[" + t + "], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
            s: "(\\d{1,2})"
        };
    case "a":
        return {
            g: 1,
            c: "if (results[" + t + "] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
            s: "(am|pm)"
        };
    case "A":
        return {
            g: 1,
            c: "if (results[" + t + "] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",
            s: "(AM|PM)"
        };
    case "g":
    case "G":
    case "h":
    case "H":
        return {
            g: 1,
            c: "h = parseInt(results[" + t + "], 10);\n",
            s: "(\\d{1,2})"
        };
    case "i":
        return {
            g: 1,
            c: "i = parseInt(results[" + t + "], 10);\n",
            s: "(\\d{2})"
        };
    case "s":
        return {
            g: 1,
            c: "s = parseInt(results[" + t + "], 10);\n",
            s: "(\\d{2})"
        };
    case "O":
        return {
            g: 0,
            c: null,
            s: "[+-]\\d{4}"
        };
    case "T":
        return {
            g: 0,
            c: null,
            s: "[A-Z]{3}"
        };
    case "Z":
        return {
            g: 0,
            c: null,
            s: "[+-]\\d{1,5}"
        };
    default:
        return {
            g: 0,
            c: null,
            s: String.escape(e)
        }
    }
};
Date.prototype.getTimezone = function () {
    return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3")
};
Date.prototype.getGMTOffset = function () {
    return (this.getTimezoneOffset() > 0 ? "-" : "+") + String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset()) / 60), 2, "0") + String.leftPad(Math.abs(this.getTimezoneOffset()) % 60, 2, "0")
};
Date.prototype.getDayOfYear = function () {
    var e = 0;
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    for (var t = 0; t < this.getMonth(); ++t) {
        e += Date.daysInMonth[t]
    }
    return e + this.getDate()
};
Date.prototype.getWeekOfYear = function () {
    var e = this.getDayOfYear() + (4 - this.getDay());
    var t = new Date(this.getFullYear(), 0, 1);
    var n = 7 - t.getDay() + 4;
    return String.leftPad(Math.ceil((e - n) / 7) + 1, 2, "0")
};
Date.prototype.isLeapYear = function () {
    var e = this.getFullYear();
    return (e & 3) == 0 && (e % 100 || e % 400 == 0 && e)
};
Date.prototype.getFirstDayOfMonth = function () {
    var e = (this.getDay() - (this.getDate() - 1)) % 7;
    return e < 0 ? e + 7 : e
};
Date.prototype.getLastDayOfMonth = function () {
    var e = (this.getDay() + (Date.daysInMonth[this.getMonth()] - this.getDate())) % 7;
    return e < 0 ? e + 7 : e
};
Date.prototype.getDaysInMonth = function () {
    Date.daysInMonth[1] = this.isLeapYear() ? 29 : 28;
    return Date.daysInMonth[this.getMonth()]
};
Date.prototype.getSuffix = function () {
    switch (this.getDate()) {
    case 1:
    case 21:
    case 31:
        return "st";
    case 2:
    case 22:
        return "nd";
    case 3:
    case 23:
        return "rd";
    default:
        return "th"
    }
};
String.escape = function (e) {
    return e.replace(/('|\\)/g, "\\$1")
};
String.leftPad = function (e, t, n) {
    var r = new String(e);
    if (n == null) {
        n = " "
    }
    while (r.length < t) {
        r = n + r
    }
    return r
};
Date.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Date.y2kYear = 50;
Date.monthNumbers = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
};
Date.patterns = {
    ISO8601LongPattern: "Y-m-d H:i:s",
    ISO8601ShortPattern: "Y-m-d",
    ShortDatePattern: "n/j/Y",
    LongDatePattern: "l, F d, Y",
    FullDateTimePattern: "l, F d, Y g:i:s A",
    MonthDayPattern: "F d",
    ShortTimePattern: "g:i A",
    LongTimePattern: "g:i:s A",
    SortableDateTimePattern: "Y-m-d\\TH:i:s",
    UniversalSortableDateTimePattern: "Y-m-d H:i:sO",
    YearMonthPattern: "F, Y"
};
(function (e, t) {
    function b(e, t) {
        return (i ? t.originalEvent.touches[0] : t)["page" + e.toUpperCase()]
    }
    function w(t, n, r) {
        var i = e.Event(n, c);
        e.event.trigger(i, {
            originalEvent: t
        }, t.target);
        if (i.isDefaultPrevented()) t.preventDefault();
        if (r) {
            e.event.remove(f, u + "." + a, S);
            e.event.remove(f, o + "." + a, x)
        }
    }
    function E(t) {
        var n = t.timeStamp || +(new Date);
        if (d == n) return;
        d = n;
        l.x = c.x = b("x", t);
        l.y = c.y = b("y", t);
        l.time = n;
        l.target = t.target;
        c.orientation = null;
        c.end = false;
        h = false;
        p = false;
        v = setTimeout(function () {
            p = true;
            w(t, "press")
        }, e.Finger.pressDuration);
        e.event.add(f, u + "." + a, S);
        e.event.add(f, o + "." + a, x);
        if (y.preventDefault) t.preventDefault()
    }
    function S(t) {
        c.x = b("x", t);
        c.y = b("y", t);
        c.dx = c.x - l.x;
        c.dy = c.y - l.y;
        c.adx = Math.abs(c.dx);
        c.ady = Math.abs(c.dy);
        h = c.adx > y.motionThreshold || c.ady > y.motionThreshold;
        if (!h) return;
        clearTimeout(v);
        if (!c.orientation) {
            if (c.adx > c.ady) {
                c.orientation = "horizontal";
                c.direction = c.dx > 0 ? +1 : -1
            } else {
                c.orientation = "vertical";
                c.direction = c.dy > 0 ? +1 : -1
            }
        }
        if (t.target !== l.target) {
            t.target = l.target;
            x.call(this, e.Event(o + "." + a, t));
            return
        }
        w(t, "drag")
    }
    function x(e) {
        var t = e.timeStamp || +(new Date),
            n = t - l.time,
            r;
        clearTimeout(v);
        if (e.target !== l.target) return;
        if (!h && !p) {
            var i = m === e.target && t - g < y.doubleTapInterval;
            r = i ? "doubletap" : "tap";
            m = i ? null : l.target;
            g = t
        } else {
            if (n < y.flickDuration) w(e, "flick");
            c.end = true;
            r = "drag"
        }
        w(e, r, true)
    }
    var n = /chrome/i.exec(t),
        r = /android/i.exec(t),
        i = "ontouchstart" in window && !(n && !r),
        s = i ? "touchstart" : "mousedown",
        o = i ? "touchend touchcancel" : "mouseup mouseleave",
        u = i ? "touchmove" : "mousemove",
        a = "finger",
        f = e("html")[0],
        l = {},
        c = {},
        h, p, d, v, m, g, y = e.Finger = {
            pressDuration: 300,
            doubleTapInterval: 300,
            flickDuration: 150,
            motionThreshold: 5
        };
    e.event.add(f, s + "." + a, E)
})(jQuery, navigator.userAgent);
(function (e) {
    "use strict";
    e.fn.fitVids = function (t) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.createElement("div"),
                i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                s = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            r.className = "fit-vids-style";
            r.id = "fit-vids-style";
            r.style.display = "none";
            r.innerHTML = s;
            i.parentNode.insertBefore(r, i)
        }
        if (t) {
            e.extend(n, t)
        }
        return this.each(function () {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (n.customSelector) {
                t.push(n.customSelector)
            }
            var r = e(this).find(t.join(","));
            r = r.not("object object");
            r.each(function () {
                var t = e(this);
                if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                    r = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(),
                    i = n / r;
                if (!t.attr("id")) {
                    var s = "fitvid" + Math.floor(Math.random() * 999999);
                    t.attr("id", s)
                }
                t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", i * 100 + "%");
                t.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function (e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});
(function (e, t, n) {
    var r = t.matchMedia;
    if (typeof module !== "undefined" && module.exports) {
        module.exports = n(r)
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return t[e] = n(r)
        })
    } else {
        t[e] = n(r)
    }
})("enquire", this, function (e) {
    "use strict";

    function t(e, t) {
        var n = 0,
            r = e.length,
            i;
        for (n; n < r; n++) {
            i = t(e[n], n);
            if (i === false) {
                break
            }
        }
    }
    function n(e) {
        return Object.prototype.toString.apply(e) === "[object Array]"
    }
    function r(e) {
        return typeof e === "function"
    }
    function i(e) {
        this.options = e;
        !e.deferSetup && this.setup()
    }
    function s(t, n) {
        this.query = t;
        this.isUnconditional = n;
        this.handlers = [];
        this.mql = e(t);
        var r = this;
        this.listener = function (e) {
            r.mql = e;
            r.assess()
        };
        this.mql.addListener(this.listener)
    }
    function o() {
        if (!e) {
            throw new Error("matchMedia not present, legacy browsers require a polyfill")
        }
        this.queries = {};
        this.browserIsIncapable = !e("only all").matches
    }
    i.prototype = {
        setup: function () {
            if (this.options.setup) {
                this.options.setup()
            }
            this.initialised = true
        },
        on: function () {
            !this.initialised && this.setup();
            this.options.match && this.options.match()
        },
        off: function () {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function () {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function (e) {
            return this.options === e || this.options.match === e
        }
    };
    s.prototype = {
        addHandler: function (e) {
            var t = new i(e);
            this.handlers.push(t);
            this.matches() && t.on()
        },
        removeHandler: function (e) {
            var n = this.handlers;
            t(n, function (t, r) {
                if (t.equals(e)) {
                    t.destroy();
                    return !n.splice(r, 1)
                }
            })
        },
        matches: function () {
            return this.mql.matches || this.isUnconditional
        },
        clear: function () {
            t(this.handlers, function (e) {
                e.destroy()
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0
        },
        assess: function () {
            var e = this.matches() ? "on" : "off";
            t(this.handlers, function (t) {
                t[e]()
            })
        }
    };
    o.prototype = {
        register: function (e, i, o) {
            var u = this.queries,
                a = o && this.browserIsIncapable;
            if (!u[e]) {
                u[e] = new s(e, a)
            }
            if (r(i)) {
                i = {
                    match: i
                }
            }
            if (!n(i)) {
                i = [i]
            }
            t(i, function (t) {
                u[e].addHandler(t)
            });
            return this
        },
        unregister: function (e, t) {
            var n = this.queries[e];
            if (n) {
                if (t) {
                    n.removeHandler(t)
                } else {
                    n.clear();
                    delete this.queries[e]
                }
            }
            return this
        }
    };
    return new o
});
(function (e) {
    "use strict";
    var t = {},
        n = Math.max,
        r = Math.min;
    t.c = {};
    t.c.d = e(document);
    t.c.t = function (e) {
        return e.originalEvent.touches.length - 1
    };
    t.o = function () {
        var n = this;
        this.o = null;
        this.$ = null;
        this.i = null;
        this.g = null;
        this.v = null;
        this.cv = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.$c = null;
        this.c = null;
        this.t = 0;
        this.isInit = false;
        this.fgColor = null;
        this.pColor = null;
        this.dH = null;
        this.cH = null;
        this.eH = null;
        this.rH = null;
        this.scale = 1;
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null;
        this.run = function () {
            var t = function (e, t) {
                    var r;
                    for (r in t) {
                        n.o[r] = t[r]
                    }
                    n._carve().init();
                    n._configure()._draw()
                };
            if (this.$.data("kontroled")) return;
            this.$.data("kontroled", true);
            this.extend();
            this.o = e.extend({
                min: this.$.data("min") !== undefined ? this.$.data("min") : 0,
                max: this.$.data("max") !== undefined ? this.$.data("max") : 100,
                stopper: true,
                readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly",
                cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
                thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                lineCap: this.$.data("linecap") || "butt",
                width: this.$.data("width") || 200,
                height: this.$.data("height") || 200,
                displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
                displayPrevious: this.$.data("displayprevious"),
                fgColor: this.$.data("fgcolor") || "#87CEEB",
                inputColor: this.$.data("inputcolor"),
                font: this.$.data("font") || "Arial",
                fontWeight: this.$.data("font-weight") || "bold",
                inline: false,
                step: this.$.data("step") || 1,
                draw: null,
                change: null,
                cancel: null,
                release: null
            }, this.o);
            if (!this.o.inputColor) {
                this.o.inputColor = this.o.fgColor
            }
            if (this.$.is("fieldset")) {
                this.v = {};
                this.i = this.$.find("input");
                this.i.each(function (t) {
                    var r = e(this);
                    n.i[t] = r;
                    n.v[t] = r.val();
                    r.bind("change blur", function () {
                        var e = {};
                        e[t] = r.val();
                        n.val(e)
                    })
                });
                this.$.find("legend").remove()
            } else {
                this.i = this.$;
                this.v = this.$.val();
                this.v === "" && (this.v = this.o.min);
                this.$.bind("change blur", function () {
                    n.val(n._validate(n.$.val()))
                })
            }!this.o.displayInput && this.$.hide();
            this.$c = e(document.createElement("canvas")).attr({
                width: this.o.width,
                height: this.o.height
            });
            this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + "px;" + '"></div>');
            this.$.wrap(this.$div).before(this.$c);
            this.$div = this.$.parent();
            if (typeof G_vmlCanvasManager !== "undefined") {
                G_vmlCanvasManager.initElement(this.$c[0])
            }
            this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;
            if (!this.c) {
                throw {
                    name: "CanvasNotSupportedException",
                    message: "Canvas not supported. Please use excanvas on IE8.0.",
                    toString: function () {
                        return this.name + ": " + this.message
                    }
                }
            }
            this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
            this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
            this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
            this.relative = this.relativeWidth || this.relativeHeight;
            this._carve();
            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv)
            } else {
                this.cv = this.v
            }
            this.$.bind("configure", t).parent().bind("configure", t);
            this._listen()._configure()._xy().init();
            this.isInit = true;
            this._draw();
            return this
        };
        this._carve = function () {
            if (this.relative) {
                var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                    t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                this.w = this.h = Math.min(e, t)
            } else {
                this.w = this.o.width;
                this.h = this.o.height
            }
            this.$div.css({
                width: this.w + "px",
                height: this.h + "px"
            });
            this.$c.attr({
                width: this.w,
                height: this.h
            });
            if (this.scale !== 1) {
                this.$c[0].width = this.$c[0].width * this.scale;
                this.$c[0].height = this.$c[0].height * this.scale;
                this.$c.width(this.w);
                this.$c.height(this.h)
            }
            return this
        };
        this._draw = function () {
            var e = true;
            n.g = n.c;
            n.clear();
            n.dH && (e = n.dH());
            e !== false && n.draw()
        };
        this._touch = function (e) {
            var r = function (e) {
                    var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
                    if (t == n.cv) return;
                    if (n.cH && n.cH(t) === false) return;
                    n.change(n._validate(t));
                    n._draw()
                };
            this.t = t.c.t(e);
            r(e);
            t.c.d.bind("touchmove.k", r).bind("touchend.k", function () {
                t.c.d.unbind("touchmove.k touchend.k");
                n.val(n.cv)
            });
            return this
        };
        this._mouse = function (e) {
            var r = function (e) {
                    var t = n.xy2val(e.pageX, e.pageY);
                    if (t == n.cv) return;
                    if (n.cH && n.cH(t) === false) return;
                    n.change(n._validate(t));
                    n._draw()
                };
            r(e);
            t.c.d.bind("mousemove.k", r).bind("keyup.k", function (e) {
                if (e.keyCode === 27) {
                    t.c.d.unbind("mouseup.k mousemove.k keyup.k");
                    if (n.eH && n.eH() === false) return;
                    n.cancel()
                }
            }).bind("mouseup.k", function (e) {
                t.c.d.unbind("mousemove.k mouseup.k keyup.k");
                n.val(n.cv)
            });
            return this
        };
        this._xy = function () {
            var e = this.$c.offset();
            this.x = e.left;
            this.y = e.top;
            return this
        };
        this._listen = function () {
            if (!this.o.readOnly) {
                this.$c.bind("mousedown", function (e) {
                    e.preventDefault();
                    n._xy()._mouse(e)
                }).bind("touchstart", function (e) {
                    e.preventDefault();
                    n._xy()._touch(e)
                });
                this.listen()
            } else {
                this.$.attr("readonly", "readonly")
            }
            if (this.relative) {
                e(window).resize(function () {
                    n._carve().init();
                    n._draw()
                })
            }
            return this
        };
        this._configure = function () {
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;
            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6")
            } else {
                this.fgColor = this.o.fgColor
            }
            return this
        };
        this._clear = function () {
            this.$c[0].width = this.$c[0].width
        };
        this._validate = function (e) {
            return ~~ ((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step
        };
        this.listen = function () {};
        this.extend = function () {};
        this.init = function () {};
        this.change = function (e) {};
        this.val = function (e) {};
        this.xy2val = function (e, t) {};
        this.draw = function () {};
        this.clear = function () {
            this._clear()
        };
        this.h2rgba = function (e, t) {
            var n;
            e = e.substring(1, 7);
            n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];
            return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")"
        };
        this.copy = function (e, t) {
            for (var n in e) {
                t[n] = e[n]
            }
        }
    };
    t.Dial = function () {
        t.o.call(this);
        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2 * Math.PI;
        this.extend = function () {
            this.o = e.extend({
                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                angleOffset: this.$.data("angleoffset") || 0,
                angleArc: this.$.data("anglearc") || 360,
                inline: true
            }, this.o)
        };
        this.val = function (e, t) {
            if (null != e) {
                if (t !== false && e != this.v && this.rH && this.rH(e) === false) return;
                this.cv = this.o.stopper ? n(r(e, this.o.max), this.o.min) : e;
                this.v = this.cv;
                this.$.val(this.v);
                this._draw()
            } else {
                return this.v
            }
        };
        this.xy2val = function (e, t) {
            var i, s;
            i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset;
            if (this.angleArc != this.PI2 && i < 0 && i > -.5) {
                i = 0
            } else if (i < 0) {
                i += this.PI2
            }
            s = ~~ (.5 + i * (this.o.max - this.o.min) / this.angleArc) + this.o.min;
            this.o.stopper && (s = n(r(s, this.o.max), this.o.min));
            return s
        };
        this.listen = function () {
            var t = this,
                i, s, o = function (e) {
                    e.preventDefault();
                    var o = e.originalEvent,
                        u = o.detail || o.wheelDeltaX,
                        a = o.detail || o.wheelDeltaY,
                        f = t._validate(t.$.val()) + (u > 0 || a > 0 ? t.o.step : u < 0 || a < 0 ? -t.o.step : 0);
                    f = n(r(f, t.o.max), t.o.min);
                    t.val(f, false);
                    if (t.rH) {
                        clearTimeout(i);
                        i = setTimeout(function () {
                            t.rH(f);
                            i = null
                        }, 100);
                        if (!s) {
                            s = setTimeout(function () {
                                if (i) t.rH(f);
                                s = null
                            }, 200)
                        }
                    }
                },
                u, a, f = 1,
                l = {
                    37: -t.o.step,
                    38: t.o.step,
                    39: t.o.step,
                    40: -t.o.step
                };
            this.$.bind("keydown", function (i) {
                var s = i.keyCode;
                if (s >= 96 && s <= 105) {
                    s = i.keyCode = s - 48
                }
                u = parseInt(String.fromCharCode(s));
                if (isNaN(u)) {
                    s !== 13 && s !== 8 && s !== 9 && s !== 189 && (s !== 190 || t.$.val().match(/\./)) && i.preventDefault();
                    if (e.inArray(s, [37, 38, 39, 40]) > -1) {
                        i.preventDefault();
                        var o = parseFloat(t.$.val()) + l[s] * f;
                        t.o.stopper && (o = n(r(o, t.o.max), t.o.min));
                        t.change(o);
                        t._draw();
                        a = window.setTimeout(function () {
                            f *= 2
                        }, 30)
                    }
                }
            }).bind("keyup", function (e) {
                if (isNaN(u)) {
                    if (a) {
                        window.clearTimeout(a);
                        a = null;
                        f = 1;
                        t.val(t.$.val())
                    }
                } else {
                    t.$.val() > t.o.max && t.$.val(t.o.max) || t.$.val() < t.o.min && t.$.val(t.o.min)
                }
            });
            this.$c.bind("mousewheel DOMMouseScroll", o);
            this.$.bind("mousewheel DOMMouseScroll", o)
        };
        this.init = function () {
            if (this.v < this.o.min || this.v > this.o.max) this.v = this.o.min;
            this.$.val(this.v);
            this.w2 = this.w / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2 * this.scale;
            this.lineWidth = this.xy * this.o.thickness;
            this.lineCap = this.o.lineCap;
            this.radius = this.xy - this.lineWidth / 2;
            this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
            this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
            var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
            this.o.displayInput && this.i.css({
                width: (this.w / 2 + 4 >> 0) + "px",
                height: (this.w / 3 >> 0) + "px",
                position: "absolute",
                "vertical-align": "middle",
                "margin-top": (this.w / 3 >> 0) + "px",
                "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
                border: 0,
                background: "none",
                font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
                "text-align": "center",
                color: this.o.inputColor || this.o.fgColor,
                padding: "0px",
                "-webkit-appearance": "none"
            }) || this.i.css({
                width: "0px",
                visibility: "hidden"
            })
        };
        this.change = function (e) {
            this.cv = e;
            this.$.val(e)
        };
        this.angle = function (e) {
            return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min)
        };
        this.draw = function () {
            var e = this.g,
                t = this.angle(this.cv),
                n = this.startAngle,
                r = n + t,
                i, s, o = 1;
            e.lineWidth = this.lineWidth;
            e.lineCap = this.lineCap;
            this.o.cursor && (n = r - this.cursorExt) && (r = r + this.cursorExt);
            e.beginPath();
            e.strokeStyle = this.o.bgColor;
            e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
            e.stroke();
            if (this.o.displayPrevious) {
                s = this.startAngle + this.angle(this.v);
                i = this.startAngle;
                this.o.cursor && (i = s - this.cursorExt) && (s = s + this.cursorExt);
                e.beginPath();
                e.strokeStyle = this.pColor;
                e.arc(this.xy, this.xy, this.radius, i - 1e-5, s + 1e-5, false);
                e.stroke();
                o = this.cv == this.v
            }
            e.beginPath();
            e.strokeStyle = o ? this.o.fgColor : this.fgColor;
            e.arc(this.xy, this.xy, this.radius, n - 1e-5, r + 1e-5, false);
            e.stroke()
        };
        this.cancel = function () {
            this.val(this.v)
        }
    };
    e.fn.dial = e.fn.knob = function (n) {
        return this.each(function () {
            var r = new t.Dial;
            r.o = n;
            r.$ = e(this);
            r.run()
        }).parent()
    }
})(jQuery);
(function (e, t, n) {
    "use strict";
    var r = function () {
            t(".rrssb-buttons").each(function (e) {
                var n = t(this);
                var r = t("li", n).length;
                var i = 100 / r;
                t("li", n).css("width", i + "%").attr("data-initwidth", i)
            })
        };
    var i = function () {
            t(".rrssb-buttons").each(function (e) {
                var n = t(this);
                var r = parseFloat(t(n).width());
                var i = t("li", n).not(".small").first().width();
                var s = t("li.small", n).length;
                if (i > 170 && s < 1) {
                    t(n).addClass("large-format")
                } else {
                    t(n).removeClass("large-format")
                }
                if (r < 200) {
                    t(n).removeClass("small-format").addClass("tiny-format")
                } else {
                    t(n).removeClass("tiny-format")
                }
            })
        };
    var s = function () {
            t(".rrssb-buttons").each(function (e) {
                var n = t(this);
                var r = 0,
                    i = 0,
                    s, o;
                var a = t("li.small", n).length;
                if (a === t("li", n).length) {
                    var f = a * 42;
                    var l = parseFloat(t(n).width());
                    s = t("li.small", n).first();
                    o = parseFloat(t(s).attr("data-size")) + 55;
                    if (f + o < l) {
                        t(n).removeClass("small-format");
                        t("li.small", n).first().removeClass("small");
                        u()
                    }
                } else {
                    t("li", n).not(".small").each(function (e) {
                        var n = parseFloat(t(this).attr("data-size")) + 55;
                        var s = parseFloat(t(this).width());
                        r = r + s;
                        i = i + n
                    });
                    var c = r - i;
                    s = t("li.small", n).first();
                    o = parseFloat(t(s).attr("data-size")) + 55;
                    if (o < c) {
                        t(s).removeClass("small");
                        u()
                    }
                }
            })
        };
    var o = function (e) {
            t(".rrssb-buttons").each(function (e) {
                var n = t(this);
                var r = t("li", n).nextAll(),
                    i = r.length;
                t(t("li", n).get().reverse()).each(function (e, r) {
                    if (t(this).hasClass("small") === false) {
                        var i = parseFloat(t(this).attr("data-size")) + 55;
                        var o = parseFloat(t(this).width());
                        if (i > o) {
                            var a = t("li", n).not(".small").last();
                            t(a).addClass("small");
                            u()
                        }
                    }
                    if (!--r) s()
                })
            });
            if (e === true) {
                f(u)
            }
        };
    var u = function () {
            t(".rrssb-buttons").each(function (e) {
                var n = t(this);
                var i, s, o, u, a;
                var f = t("li.small", n).length;
                if (f > 0 && f !== t("li", n).length) {
                    t(n).removeClass("small-format");
                    t("li.small", n).css("width", "42px");
                    o = f * 42;
                    i = t("li", n).not(".small").length;
                    s = 100 / i;
                    a = o / i;
                    if (navigator.userAgent.indexOf("Chrome") >= 0 || navigator.userAgent.indexOf("Safari") >= 0) {
                        u = "-webkit-calc(" + s + "% - " + a + "px)"
                    } else if (navigator.userAgent.indexOf("Firefox") >= 0) {
                        u = "-moz-calc(" + s + "% - " + a + "px)"
                    } else {
                        u = "calc(" + s + "% - " + a + "px)"
                    }
                    t("li", n).not(".small").css("width", u)
                } else if (f === t("li", n).length) {
                    t(n).addClass("small-format");
                    r()
                } else {
                    t(n).removeClass("small-format");
                    r()
                }
            });
            i()
        };
    var a = function () {
            t(".rrssb-buttons").each(function (e) {
                t(this).addClass("rrssb-" + (e + 1))
            });
            r();
            t(".rrssb-buttons li .text").each(function (e) {
                var n = parseFloat(t(this).width());
                t(this).closest("li").attr("data-size", n)
            });
            o(true)
        };
    var f = function (e) {
            t(".rrssb-buttons li.small").removeClass("small");
            o();
            e()
        };
    var l = function (t, r, i, s) {
            var o = e.screenLeft !== n ? e.screenLeft : screen.left;
            var u = e.screenTop !== n ? e.screenTop : screen.top;
            var a = e.innerWidth ? e.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            var f = e.innerHeight ? e.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            var l = a / 2 - i / 2 + o;
            var c = f / 3 - s / 3 + u;
            var h = e.open(t, r, "scrollbars=yes, width=" + i + ", height=" + s + ", top=" + c + ", left=" + l);
            if (e.focus) {
                h.focus()
            }
        };
    var c = function () {
            var e = {};
            return function (t, n, r) {
                if (!r) {
                    r = "Don't call this twice without a uniqueId"
                }
                if (e[r]) {
                    clearTimeout(e[r])
                }
                e[r] = setTimeout(t, n)
            }
        }();
    t(".rrssb-buttons a.popup").on("click", function (e) {
        var n = t(this);
        l(n.attr("href"), n.find(".text").html(), 580, 470);
        e.preventDefault()
    });
    t(e).resize(function () {
        f(u);
        c(function () {
            f(u)
        }, 200, "finished resizing")
    });
    t(document).ready(function () {
        a()
    })
})(window, jQuery);
(function (e, t) {
    function A(t, n, r, i, s) {
        if (yt(n)) {
            if (i) {
                A(t, ["", "Up", "Right", "Down", "Left", n], r, 0, s)
            } else {
                t[r] = function (e) {
                    var t = [e].concat(s);
                    var r = t.length - 1;
                    if (i === 0 && t[r] == 0) {
                        t[r] = Y(e)
                    }
                    n.apply(this, t)
                }
            }
        } else if (bt(n)) {
            var o = n.length - 1;
            var u = n[o];
            for (var a = 0; a < o; a++) {
                var f = pt(s);
                f.push(a);
                var l = n[a];
                A(t, u, r + l, i, f)
            }
        } else {
            e.each(n, function (e, n) {
                A(t, n, r + e, i, s)
            })
        }
    }
    function M(e, t, n) {
        var i = n == 1 || n == 3;
        var s = n == 0 || n == 3;
        var o = t >= 1 && t <= 4;
        var u = t == 5 || t == 6;
        var a = t == 6 || t == 3 || t == 4;
        var f = t == 2 || t == 4;
        H(e, s, i, o, r, 1, u, a, f)
    }
    function _(e, t) {
        H(e, t, r, r, r, 2, r, r, r)
    }
    function D(e, t, n, s) {
        H(e, t, r, i, r, 2, r, n, s)
    }
    function P(e, t) {
        var n = t == 3 || t == 4;
        var s = t == 2 || t == 4;
        H(e, r, r, t != 0, i, 0, r, n, s)
    }
    function H(t, n, i, s, o, u, a, f, l) {
        var c = t.options;
        var h = c.ease;
        var p = c.boxrows;
        var d = c.boxcols;
        var v = p * d;
        var m = c.speed / (v == 1 ? 1 : 2.5);
        var g = Z(t, d, p, !f);
        var y = 0;
        var b = 0;
        var w = 0;
        var E = [];
        E[b] = [];
        if (n) {
            dt(g)
        }
        if (o) {
            gt(g)
        }
        g.each(function () {
            E[b][w] = this;
            w++;
            if (w == d) {
                if (i) {
                    dt(E[b])
                }
                b++;
                w = 0;
                E[b] = []
            }
        });
        var S = [];
        if (u == 1) {
            for (var x = 0; x < d * 2 + 1; x++) {
                var T = x;
                var N = [];
                for (var C = 0; C < p; C++) {
                    if (T >= 0 && T < d) {
                        var k = E[C][T];
                        if (!k) {
                            return
                        }
                        N.push(k)
                    }
                    T--
                }
                if (N.length != 0) {
                    S.push(N)
                }
            }
        } else if (u == 2) {
            var L = p / 2,
                A, O, M, _ = n ? v : -1;
            var D = n ? -1 : 1;
            for (M = 0; M < L; M++) {
                O = M;
                for (A = M; A < d - M - 1; A++) {
                    S[_ += D] = g.eq(O * d + A)
                }
                A = d - M - 1;
                for (O = M; O < p - M - 1; O++) {
                    S[_ += D] = g.eq(O * d + A)
                }
                O = p - M - 1;
                for (A = d - M - 1; A > M; A--) {
                    S[_ += D] = g.eq(O * d + A)
                }
                A = M;
                for (O = p - M - 1; O > M; O--) {
                    S[_ += D] = g.eq(O * d + A)
                }
            }
        } else {
            for (var P = 0; P < p; P++) {
                for (var H = 0; H < d; H++) {
                    S.push([E[P][H]])
                }
            }
        }
        if (f) {
            t.goToNext()
        }
        var B = 0;
        for (var j = 0; j < S.length; j++) {
            var F = S[j];
            for (var I = 0; I < F.length; I++) {
                var q = e(F[I]);
                (function (e, o) {
                    var u = e.children();
                    var c = e.width();
                    var p = e.height();
                    var d = c;
                    var v = p;
                    var g = Et(e.css("left"));
                    var y = Et(e.css("top"));
                    var b = g;
                    var w = y;
                    var E = Et(u.css("left"));
                    var S = Et(u.css("top"));
                    var x = E;
                    var T = S;
                    if (a) {
                        var N = n != i ? -d : d;
                        var C = n ? -v : v;
                        var k = 1.5;
                        if (f) {
                            b -= N * k;
                            w -= C * k
                        } else {
                            e.css({
                                left: g + N * k,
                                top: y + C * k
                            })
                        }
                    }
                    if (s) {
                        if (f) {
                            x -= d / 2;
                            b += d / 2;
                            T -= v / 2;
                            w += v / 2;
                            v = d = 0
                        } else {
                            e.css({
                                left: g + d / 2,
                                top: y + v / 2
                            });
                            u.css({
                                left: E - d / 2,
                                top: S - v / 2
                            });
                            e.width(0).height(0);
                            if (l) {
                                e.css({
                                    borderRadius: Nt(p, c)
                                })
                            }
                        }
                    }
                    if (f) {
                        e.css({
                            opacity: 1
                        })
                    }
                    B++;
                    setTimeout(function () {
                        J(u, {
                            left: x,
                            top: T
                        }, m, h, r, t);
                        J(e, {
                            opacity: f ? 0 : 1,
                            width: d,
                            height: v,
                            left: b,
                            top: w,
                            borderRadius: s && f && l ? Nt(p, c) : 0
                        }, m, h, function () {
                            B--;
                            if (B == 0) {
                                t.callback()
                            }
                        }, t)
                    }, o)
                })(q, y)
            }
            y += m / S.length * 1.5
        }
    }
    function B(e, t) {
        var n = t == 2 || t == 4;
        var s = t == 1 || t == 4;
        z(e, n, s, r, i)
    }
    function j(e, t) {
        var n = t == 2 || t == 4;
        var r = t == 1 || t == 4;
        z(e, n, r)
    }
    function F(e, t) {
        z(e, t, r, i)
    }
    function I(e, t, n) {
        t++;
        var i = n == 2 || n == 4;
        var s = n == 1 || n == 4;
        z(e, i, s, r, r, t)
    }
    function q(e, t, n, i) {
        var s = n == 2;
        var o = i == 1 || i == 3;
        var u = i == 1 || i == 4;
        z(e, o, n, s, r, 0, u ? 1 : 2, t)
    }
    function R(e, t) {
        var n = t == 2 || t == 4;
        var i = t == 1 || t == 4;
        z(e, n, i, r, r, 0, 3)
    }
    function U(e, t) {
        var n = t == 2 || t == 4;
        var s = t == 1 || t == 4;
        z(e, n, s, r, r, 0, 3, i)
    }
    function z(t, n, s, o, u, a, f, l) {
        var c = t.options;
        var h = c.slices;
        var p = c.speed / 2;
        var d = c.ease;
        var v = t.slider;
        var m = Z(t, n ? h : 1, n ? 1 : h, !l);
        var g = 0;
        var y = r;
        if (s) {
            dt(m)
        } else {
            e(dt(m.get())).appendTo(v)
        }
        if (o) {
            gt(m)
        }
        m.each(function (o) {
            var c = p / h * o;
            var v = e(this);
            var m = v.width();
            var b = v.height();
            var w = v.css("left");
            var E = v.css("top");
            var S = n ? w : E;
            var x = v.children();
            var T = x[n ? "width" : "height"]();
            if (a == 1) {
                S = 0
            } else if (a == 2) {
                S = T / 2
            }
            if (s) {
                S = T - S
            }
            if (n) {
                v.css({
                    width: u || f ? m : 0,
                    left: S
                })
            } else {
                v.css({
                    height: u || f ? b : 0,
                    top: S
                })
            }
            if (l) {
                var N = f == 1 ? -1 : 1;
                v.css({
                    top: E,
                    left: w,
                    width: m,
                    height: b,
                    opacity: 1
                });
                if (n) {
                    E = N * b
                } else {
                    w = N * m
                }
            }
            if (f) {
                var C = i;
                if (f == 3) {
                    if (y) {
                        C = r;
                        y = r
                    } else {
                        y = i
                    }
                } else if (f == 2) {
                    C = r
                }
                if (n) {
                    if (l) {
                        E = (C ? -1 : 1) * b
                    } else {
                        v.css({
                            bottom: C ? 0 : b,
                            top: C ? b : 0,
                            height: l ? b : 0
                        })
                    }
                } else {
                    if (l) {
                        w = (C ? -1 : 1) * m
                    } else {
                        v.css({
                            right: C ? 0 : m,
                            left: C ? m : 0,
                            width: l ? m : 0
                        })
                    }
                }
            }
            g++;
            setTimeout(rt(J, [v,
            {
                width: m,
                height: b,
                opacity: l ? 0 : 1,
                left: w,
                top: E
            },
            p, d, function () {
                g--;
                if (g == 0) {
                    t.callback()
                }
            },
            t]), c)
        });
        if (l) {
            t.goToNext()
        }
    }
    function W(e, t, n) {
        var r = e.diff > 0;
        if (n) {
            r = !r
        }
        X(e, r, ++t)
    }
    function X(e, t, n) {
        var s = n == 2 || n == 4;
        var o = n == 2 || n == 3 ? 1 : -1;
        var u = e.options;
        var a = u.ease;
        var f = u.speed;
        if (t) {
            var l = e.fromSlides;
            var c = tt(e, i).hide();
            c.prependTo(e.slider);
            var h = Nt(c.height(), l.height());
            var p = Nt(c.width(), l.width());
            c.css(s ? {
                left: o * p
            } : {
                top: o * h
            }).show();
            J(c, {
                left: 0,
                top: 0
            }, f, a, e.callback, e)
        } else {
            var l = tt(e, r);
            l.prependTo(e.slider);
            e.goToNext();
            var c = e.toSlides;
            var d = o == -1 ? l : c;
            var h = d.height();
            var p = d.width();
            J(l, s ? {
                left: o * p
            } : {
                top: o * h
            }, f, a, e.callback, e)
        }
    }
    function V(e, t) {
        var n = t == 1 || t == 3;
        var s = e.options;
        var o = s.ease;
        var u = s.speed;
        var a = tt(e, i);
        var f = a.width();
        var l = a.height();
        var c = et(a, 0, 0, 0, 0, e).css({
            opacity: 1
        }).appendTo(e.slider);
        var h = c.add(a);
        h.hide();
        if (n) {
            c.css({
                width: f
            });
            if (t == 1) {
                a.css({
                    top: -l
                });
                c.css({
                    bottom: 0,
                    top: "auto"
                })
            }
        } else {
            c.css({
                height: l
            });
            if (t == 4) {
                a.css({
                    left: -f
                });
                c.css({
                    right: 0,
                    left: "auto"
                })
            }
        }
        h.show();
        if (n) {
            h.width(f)
        } else {
            h.height(l)
        }
        J(a, {
            left: 0,
            top: 0
        }, u, o, r, e);
        J(c, {
            width: f,
            height: l
        }, u, o, e.callback, e)
    }
    function $(e) {
        var t = vt(e.slider);
        var n = e.options;
        var r = n.ease;
        var s = n.speed;
        var o = e.target;
        var u = o.left;
        var a = o.top;
        if (e.options.usecss) {
            J(t, {
                transform: "translate(" + u + "px, " + a + "px)"
            }, s, r, e.callback, e, i)
        } else {
            J(t, {
                marginTop: a,
                marginLeft: u
            }, s, r, e.callback, e)
        }
    }
    function J(e, t, n, s, o, u, a) {
        function m() {
            if (!a) {
                var t = {};
                t[p] = "0s";
                t[d] = "";
                t[c] = "";
                e.css(t)
            }
        }
        var f = !u || u.options.usecss;
        if (v === r || !f) {
            e.animate(t, n, s, o);
            return
        }
        var l = {};
        var c = v + "transition";
        var h = lt(t);
        l[c] = h.join(" ") + (v == "" ? "" : " " + v + h.join(" " + v));
        var p = c + "-duration";
        l[p] = n + "ms";
        var d = c + "-timing-function";
        if (s == "swing") {
            s = "ease-in-out"
        }
        l[d] = s;
        if (u) {
            u.stopCallbacks.push(m)
        }
        var g = v.replace(/\-/g, "");
        var y = (g ? "T" : "t") + "ransitionend";
        var b = g + y + " t" + "ransitionend";
        var w = r;
        var E = function () {
                if (!w) {
                    w = i;
                    e.unbind(b);
                    m();
                    if (o) {
                        o()
                    }
                }
            };
        ct(function () {
            if (n < 20) {
                e.css(t);
                E();
                return
            }
            e.css(l);
            ct(function () {
                e.css(t);
                e.on(b, function (t) {
                    if (e.is(t.target)) {
                        E()
                    }
                });
                setTimeout(E, n + 100)
            })
        });
        return E
    }
    function K(e) {
        var t = e.options;
        var n = t.speed;
        var r = t.ease;
        var i = wt(n * (3 / 5));
        var s = n - i;
        e.stopCallbacks.push(function () {
            e.fromSlides.stop().css({
                opacity: 1
            })
        });
        J(e.fromSlides, {
            opacity: 1e-4
        }, s, r, rt(G, [e, n]), e)
    }
    function Q(e) {
        G(e, e.options.speed)
    }
    function G(e, t) {
        var n = e.options;
        n.boxcols = 1;
        n.boxrows = 1;
        n.speed = t;
        H(e, r)
    }
    function Y(e) {
        var t = e.options.vertical;
        var n = e.diff;
        var r;
        if (t) {
            if (n < 0) {
                r = 1
            } else {
                r = 3
            }
        } else {
            if (n < 0) {
                r = 2
            } else {
                r = 4
            }
        }
        return r
    }
    function Z(t, n, s, o) {
        var u = t.slider;
        var a = e();
        var f, l;
        var c = i;
        for (var h = 0; h < s; h++) {
            for (var p = 0; p < n; p++) {
                var d = tt(t, o);
                if (c) {
                    c = r;
                    f = Math.ceil(d.width() / n);
                    l = Math.ceil(d.height() / s)
                }
                var v = et(d, l * h, f * p, l, f, t);
                u.append(v);
                a = a.add(v)
            }
        }
        return a
    }
    function et(t, n, r, i, s, o) {
        t.css({
            width: t.width(),
            height: t.height(),
            display: "block",
            top: -n,
            left: -r
        });
        var u = e("<div>").css({
            left: r,
            top: n,
            width: s,
            height: i,
            opacity: 0,
            overflow: h,
            position: l,
            zIndex: nt(o)
        });
        u.append(t).addClass(d);
        return u
    }
    function tt(t, n) {
        var r = n ? t.toSlides : t.fromSlides;
        var s = r.eq(0).position();
        var o = s.left;
        var u = s.top;
        var a = 0;
        var f = 0;
        var c = e("<div>").css({
            zIndex: nt(t),
            position: l,
            top: 0,
            left: 0
        }).addClass(d);
        r.each(function (t, n) {
            var r = e(n);
            var s = r.outerWidth(i);
            var h = r.outerHeight(i);
            var p = r.clone();
            var d = r.position();
            var v = d.left - o;
            var m = d.top - u;
            p.css({
                position: l,
                left: v,
                top: m,
                opacity: 1
            });
            a = Nt(a, m + h);
            f = Nt(f, v + s);
            c.append(p)
        });
        c.width(f).height(a);
        return c
    }
    function nt(e) {
        return (wt(e.container.css("zIndex")) || 0) + 1
    }
    function rt(e, t) {
        return function () {
            e.apply(n, t)
        }
    }
    function it(t, r, i) {
        if (!t) {
            i();
            return
        }
        var s = t.add(t.find("img")).filter("img");
        var o = s.length;
        if (!o) {
            i();
            return
        }
        s.each(function () {
            var t = this;
            var s = e(t);
            var u = "load error";
            var a = function () {
                    s.off(u, a);
                    if (r) {
                        o--;
                        if (o == 0) {
                            i()
                        }
                    } else {
                        i()
                    }
                };
            s.on(u, a);
            if (t.readyState == "complete") {
                s.trigger("load")
            } else if (t.readyState) {
                t.src = t.src
            } else if (t.complete) {
                s.trigger("load")
            } else if (t.complete === n) {
                var f = t.src;
                t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                t.src = f
            }
        })
    }
    function st(t) {
        var n = e.fn.jquery.split(".");
        var s = n.length;
        for (var o = 0; o < s; o++) {
            if (t[o] && +n[o] < +t[o]) {
                return r
            }
        }
        return i
    }
    function ot(e, t) {
        for (var n in t) {
            if (ft(n.toLowerCase(), e.toLowerCase())) {
                return n
            }
        }
        return r
    }
    function ut() {
        var t = "transition";
        var n = ot(t, e("<div>")[0].style);
        if (n === r) {
            return r
        }
        var i = n.slice(0, n.length - t.length);
        if (i.length != 0) {
            return "-" + i + "-"
        }
        return ""
    }
    function at(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    function ft(e, t) {
        return e.indexOf(t, e.length - t.length) !== -1
    }
    function lt(e) {
        var t = [];
        for (var n in e) {
            t.push(n)
        }
        return t
    }
    function ct(e) {
        setTimeout(e, 0)
    }
    function ht(e, t) {
        return e.indexOf(t) == 0
    }
    function pt(e) {
        return e.slice()
    }
    function dt(e) {
        return [].reverse.call(e)
    }
    function vt(e) {
        return e.children().not("." + d)
    }
    function mt(e) {
        var t = {};
        for (var n in e) t[n.toLowerCase()] = e[n];
        return t
    }
    function gt(e) {
        for (var t, n, r = e.length; r; t = parseInt(Math.random() * r), n = e[--r], e[r] = e[t], e[t] = n) {}
        return e
    }
    function yt(t) {
        return e.isFunction(t)
    }
    function bt(t) {
        return e.isArray(t)
    }
    function wt(e) {
        return parseInt(e, 10)
    }
    function Et(e) {
        return parseFloat(e)
    }
    function St() {
        return +(new Date)
    }
    function xt(e, t) {
        return (e % t + t) % t || 0
    }
    function Tt(e) {
        return e < 0 ? -e : e
    }
    function Nt(e, t) {
        return e > t ? e : t
    }
    function Ct(e, t) {
        return e < t ? e : t
    }
    function kt(t) {
        if (bt(t)) {
            return Lt(t)
        } else if (yt(t)) {
            return t
        } else {
            t = at(t);
            if (t.indexOf(",") != -1) {
                var n = t.split(",");
                return Lt(n)
            } else {
                var r = mt(e.fn.sudoSlider.effects);
                var i = t.toLowerCase();
                var s = r[i];
                if (s) {
                    return s
                } else {
                    var n = [];
                    for (var o in r) {
                        if (ht(o, i)) {
                            n.push(r[o])
                        }
                    }
                    if (!n.length) {
                        return $
                    }
                    return Lt(n)
                }
            }
        }
    }
    function Lt(e) {
        return function (t) {
            var n = At(e);
            return kt(n)(t)
        }
    }
    function At(e) {
        return e[gt(lt(e))[0]]
    }
    function Ot(t) {
        var n = "bez_" + t.join("_").replace(/\./g, "p");
        var r = e.easing;
        if (!yt(r[n])) {
            var i = function (e, t) {
                    function s(s, o) {
                        i[o] = 3 * e[o], r[o] = 3 * (t[o] - e[o]) - i[o], n[o] = 1 - i[o] - r[o];
                        return s * (i[o] + s * (r[o] + s * n[o]))
                    }
                    function o(e) {
                        return i[0] + e * (2 * r[0] + 3 * n[0] * e)
                    }
                    function u(e) {
                        var t = e,
                            n = 0,
                            r;
                        while (++n < 14) {
                            r = s(t, 0) - e;
                            if (Tt(r) < .001) break;
                            t -= r / o(t)
                        }
                        return t
                    }
                    var n = [0, 0];
                    var r = [0, 0];
                    var i = [0, 0];
                    return function (e) {
                        return s(u(e), 1)
                    }
                };
            r[n] = function (e, n, r, s, o) {
                return s * i([t[0], t[1]], [t[2], t[3]])(n / o) + r
            }
        }
        return n
    }
    var n;
    var r = false;
    var i = true;
    var s = "pages";
    var o = "next";
    var u = "prev";
    var a = "last";
    var f = "first";
    var l = "absolute";
    var c = "relative";
    var h = "hidden";
    var p = function () {};
    var d = "sudo-box";
    var v = ut();
    var m = e(t);
    var g = "touchstart";
    var y = "touchmove";
    var b = "touchcancel";
    var w = "touchend";
    var E = "mousedown";
    var S = "mousemove";
    var x = "mouseup";
    e.fn.sudoSlider = function (l) {
        var T = {
            effect: "slide",
            speed: 1500,
            customLink: r,
            controlsShow: i,
            controlsFadeSpeed: 400,
            controlsFade: i,
            insertAfter: i,
            vertical: r,
            slideCount: 1,
            moveCount: 1,
            startSlide: 1,
            responsive: r,
            ease: "swing",
            auto: r,
            pause: 2e3,
            resumePause: r,
            continuous: r,
            prevNext: i,
            numeric: r,
            numericText: [],
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            initCallback: p,
            ajaxLoad: p,
            beforeAnimation: p,
            afterAnimation: p,
            history: r,
            autoHeight: i,
            autoWidth: i,
            updateBefore: r,
            ajax: r,
            preloadAjax: 100,
            loadingText: "",
            prevHtml: '<a href="#" class="prevBtn"> previous </a>',
            nextHtml: '<a href="#" class="nextBtn"> next </a>',
            controlsAttr: 'class="controls"',
            numericAttr: 'class="numericControls"',
            interruptible: r,
            useCSS: i,
            loadStart: p,
            loadFinish: p,
            touch: r,
            touchHandle: r,
            destroyCallback: p,
            mouseTouch: r
        };
        var N = this;
        l = e.extend(mt(T), mt(l));
        if (v === r || !st([1, 8, 0])) {
            l.usecss = r
        }
        return this.each(function () {
            function bt() {
                var t = 0;
                for (var n in ht) {
                    lt[t] = ht[n];
                    t++
                }
                p = i;
                L = [];
                et = [];
                tt = [];
                nt = [];
                st = [];
                C = vt(W);
                var a = C.length;
                var f = e("<div></div>");
                if (!a) {
                    W.append(C = f);
                    T = r
                } else if (!(T = C.is("ul")) && !ft) {
                    f.append(C);
                    W.append(C = f)
                }
                ft = i;
                var l = vt(C);
                k = [];
                A = l.length;
                l.each(function (t, n) {
                    var r = e(n);
                    k[t] = r;
                    r.css({
                        position: c
                    });
                    if (r.css("display") == "none") {
                        r.css("display", "inline")
                    }
                });
                C.addClass("slidesContainer");
                l.addClass("slide");
                if (lt[31]) {
                    var d = lt[31].length;
                    if (d > A) {
                        for (var v = 1; v <= d - A; v++) {
                            var g;
                            if (T) {
                                g = "li"
                            } else {
                                g = "div"
                            }
                            var y = e("<" + g + ">" + lt[33] + "</" + g + ">");
                            C.append(y);
                            k[A + (v - 1)] = y
                        }
                        l = vt(C);
                        A = d
                    }
                }
                l.each(function (t, n) {
                    L[t] = r;
                    it(e(n), i, function () {
                        L[t] = i
                    })
                });
                if (B === r) {
                    O = 0
                } else {
                    O = B
                }
                O = O || 0;
                M = O;
                _ = i;
                D = [];
                H = r;
                W.css({
                    overflow: h
                });
                if (W.css("position") == "static") W.css({
                    position: c
                });
                l.css({
                    "float": "left",
                    listStyle: "none",
                    overflow: h
                });
                C.add(l).css({
                    display: "block",
                    position: c,
                    margin: "0"
                });
                lt[8] = wt(lt[8]);
                U = lt[8];
                lt[8] += lt[9] - 1;
                lt[10] = wt(lt[10]) - 1 || 0;
                lt[0] = kt(lt[0]);
                for (var v = 0; v < A; v++) {
                    if (!lt[19][v] && lt[19][v] != "") {
                        lt[19][v] = v + 1
                    }
                    lt[31][v] = lt[31][v] || r
                }
                lt[5] = lt[5] && !lt[16];
                if (lt[11]) {
                    At(i)
                }
                C[lt[7] ? "height" : "width"](9e6)[lt[7] ? "width" : "height"]("100%");
                lt[29] = lt[29] && !lt[11];
                if (lt[11]) {
                    Sn(m, "resize focus", At, "")
                }
                if (lt[3]) {
                    j = e("<span " + lt[36] + "></span>");
                    W[lt[6] ? "after" : "before"](j);
                    if (lt[18]) {
                        P = e("<ol " + lt[37] + "></ol>");
                        j.prepend(P);
                        var b = lt[18] == s;
                        var w = b ? U : 1;
                        for (var v = 0; v < A - (lt[16] || b ? 1 : U) + 1; v += w) {
                            D[v] = e('<li data-target="' + (v + 1) + '"><a href="#"><span>' + lt[19][v] + "</span></a></li>").appendTo(P).click(function () {
                                It(_t(this) - 1, i);
                                return r
                            })
                        }
                    }
                    if (lt[17]) {
                        F = Ft(lt[35], o);
                        I = Ft(lt[34], u)
                    }
                }
                var E = [4, 1, 14];
                for (var S = 0; S < E.length; S++) {
                    lt[E[S]] = jt(lt[E[S]])
                }
                if (lt[2]) {
                    Sn(e(document), "click", Et, lt[2])
                }
                it(kn(lt[10], lt[8]), i, function () {
                    if (B !== r) {
                        Cn(B, r)
                    } else if (lt[27]) {
                        var t;
                        if (t = m.hashchange) {
                            t(Dt)
                        } else if (t = e.address) {
                            t.change(Dt)
                        } else {
                            m.on("hashchange", Dt)
                        }
                        Dt()
                    } else {
                        Cn(lt[10], r)
                    }
                    Ut(O)
                });
                if (lt[31][lt[10]]) {
                    on(lt[10])
                }
                if (lt[32] === i) {
                    for (var S = 0; S < A; S++) {
                        if (lt[31][S] && lt[10] != S) {
                            on(S)
                        }
                    }
                } else {
                    Pt()
                }
            }
            function Et() {
                var e;
                if (e = _t(this)) {
                    if (e == "stop") {
                        lt[13] = r;
                        Bt()
                    } else if (e == "start") {
                        Ht();
                        lt[13] = i
                    } else if (e == "block") {
                        _ = r
                    } else if (e == "unblock") {
                        _ = i
                    } else {
                        It(e == wt(e) ? e - 1 : e, i)
                    }
                }
                return r
            }
            function At(e) {
                function t() {
                    if (Tn() && !e || A == 0) {
                        return
                    }
                    var t = Mt();
                    if (Lt != t) {
                        Lt = t;
                        for (var n = 0; n < A; n++) {
                            k[n].width(t)
                        }
                        if (gt !== r) {
                            Ht(gt)
                        }
                        En();
                        dn();
                        Kt(O);
                        Xt(O, 0)
                    }
                }
                t();
                ct(t);
                setTimeout(t, 20)
            }
            function Mt() {
                return W.width() / U
            }
            function _t(t) {
                t = e(t);
                return t.attr("data-target") || t.attr("rel")
            }
            function Dt() {
                var e = Wt();
                if (p) {
                    Cn(e, r)
                } else {
                    It(e, r)
                }
            }
            function Pt() {
                if (lt[32] !== r) {
                    var e = wt(lt[32]);
                    if (lt[31]) {
                        for (var t = 0; t < lt[31].length; t++) {
                            if (lt[31][t]) {
                                clearTimeout(z);
                                z = setTimeout(function () {
                                    if (lt[31][t]) {
                                        on(wt(t))
                                    } else {
                                        Pt()
                                    }
                                }, e);
                                break
                            }
                        }
                    }
                }
            }
            function Ht(e) {
                if (e === n) {
                    var t = k[O].attr("data-pause");
                    if (t !== n) {
                        e = wt(t)
                    } else {
                        e = lt[14]
                    }
                }
                if (yt) {
                    e = Nt(e, 100)
                }
                Bt();
                R = i;
                gt = e;
                q = setTimeout(function () {
                    if (R) {
                        It(o, r);
                        gt = r
                    }
                }, e)
            }
            function Bt(e) {
                if (q) {
                    clearTimeout(q)
                }
                if (!e) R = r
            }
            function jt(e) {
                if (wt(e) || e == 0) {
                    return wt(e)
                }
                if (e == "fast") {
                    return 200
                }
                if (e == "normal" || e == "medium") {
                    return 400
                }
                if (e == "slow") {
                    return 600
                }
                return 600
            }
            function Ft(t, n) {
                return e(t).prependTo(j).click(function () {
                    It(n, i);
                    return r
                })
            }
            function It(e, t, n) {
                if (_ && !p) {
                    Bt(i);
                    if (!H) {
                        pn(e, t, n)
                    }
                } else {
                    if (lt[38] && Q) {
                        En();
                        It(e, t, n)
                    } else {
                        ot = e;
                        ut = t;
                        at = n;
                        if (lt[31]) {
                            var r = rn(e);
                            for (var s = r; s < r + U; s++) {
                                if (lt[31][s]) {
                                    on(Ln(s))
                                }
                            }
                        }
                    }
                }
            }
            function qt(t, n, i) {
                function p() {
                    if (!t && s.css("opacity") == 0) {
                        s.css({
                            visibility: h
                        })
                    }
                }
                t = t ? 1 : 0;
                var s = e();
                if (lt[3] && lt[17]) {
                    s = i ? F : I
                }
                if (lt[2]) {
                    var a = e(lt[2]);
                    var f = '="' + (i ? o : u) + '"]';
                    var l = a.filter("[rel" + f + ", [data-target" + f + "");
                    s = s.add(l)
                }
                var c = {
                    opacity: t
                };
                if (t) {
                    s.css({
                        visibility: "visible"
                    })
                }
                if (lt[39]) {
                    J(s, c, n, lt[12], p)
                } else {
                    s.animate(c, {
                        queue: r,
                        duration: n,
                        easing: lt[12],
                        callback: p
                    })
                }
            }
            function Rt(e, t) {
                qt(e, t, r);
                qt(e < A - U, t, i)
            }
            function Ut(t) {
                t = Ln(t) + 1;
                if (lt[18] == s && t == A - U + 1 && !lt[16]) {
                    t = A
                }
                if (lt[18]) {
                    for (var n = 0; n < D.length; ++n) {
                        var r = D[n];
                        zt(r, t)
                    }
                }
                if (lt[2]) zt(e(lt[2]), t)
            }
            function zt(e, t) {
                if (e && e.filter) {
                    e.filter(".current").removeClass("current");
                    e.filter(function () {
                        var e = _t(this);
                        if (lt[18] == s) {
                            for (var n = U - 1; n >= 0; n--) {
                                if (e == t - n) {
                                    return i
                                }
                            }
                        } else {
                            return e == t
                        }
                        return r
                    }).addClass("current")
                }
            }
            function Wt() {
                var e = location.hash.substr(1);
                for (var t = 0; t < lt[19].length; t++) {
                    if (lt[19][t] == e) {
                        return t
                    }
                }
                if (e && !p) {
                    return O
                } else {
                    return lt[10]
                }
            }
            function Xt(e, t) {
                e = Ln(e);
                V = e;
                K = St() + t;
                if (t == 0) {
                    X = e
                } else {
                    X = r
                }
                if (lt[28] || lt[29]) {
                    Vt(e)
                }
            }
            function Vt(e) {
                W.ready(function () {
                    Jt(e);
                    it(k[e], r, rt(Jt, [e]))
                })
            }
            function $t(e, t) {
                var n = 0;
                for (var r = e; r < e + U; r++) {
                    var s = k[Ln(r)];
                    if (s) {
                        var o = s["outer" + (t ? "Height" : "Width")](i);
                        if (t == lt[7]) {
                            n += o
                        } else {
                            n = Nt(o, n)
                        }
                    }
                }
                return n
            }
            function Jt(e) {
                if (e != V || Tn()) {
                    return
                }
                var t = K - St();
                t = Nt(t, 0);
                var n = {};
                if (lt[28]) {
                    n.height = $t(e, i) || 1
                }
                if (lt[29]) {
                    n.width = $t(e, r) || 1
                }
                if (lt[39]) {
                    J(W, n, t, lt[12])
                } else {
                    if (t == 0) {
                        W.stop().css(n)
                    } else {
                        W.animate(n, {
                            queue: r,
                            duration: t,
                            easing: lt[12]
                        })
                    }
                }
            }
            function Kt(e) {
                var t = Gt(e, r);
                var n = Gt(e, i);
                Qt(t, n)
            }
            function Qt(e, t) {
                dt = e;
                pt = t;
                if (lt[39]) {
                    C.css({
                        transform: "translate(" + e + "px, " + t + "px)"
                    })
                } else {
                    function n(e, t) {
                        C.css({
                            marginLeft: e,
                            marginTop: t
                        })
                    }
                    n(0, 0);
                    n(e, t)
                }
            }
            function Gt(e, t) {
                var n = k[Ln(e)];
                return n && n.length ? -n.position()[t ? "top" : "left"] : 0
            }
            function Yt() {
                if (ot !== r) {
                    var e = ot;
                    ot = r;
                    ct(rt(It, [e, ut, at]))
                }
            }
            function Zt(e) {
                dn();
                Xt(O, 0);
                O = Ln(O);
                if (!lt[30]) Ut(O);
                Kt(O);
                _ = i;
                if (lt[13]) {
                    if (e) {
                        Bt();
                        if (lt[15]) Ht(lt[15])
                    } else if (!p) {
                        Ht()
                    }
                }
                Yt()
            }
            function en(e, t, n) {
                e = Ln(e);
                var r = rt(t ? tn : nn, [k[e], e + 1]);
                if (n) {
                    r()
                } else {
                    ct(r)
                }
            }
            function tn(e, t) {
                lt[26].call(e, t)
            }
            function nn(e, t) {
                lt[25].call(e, t)
            }
            function rn(e) {
                if (e == o) {
                    return sn(O + lt[9], e)
                } else if (e == u) {
                    return sn(O - lt[9], e)
                } else if (e == f) {
                    return 0
                } else if (e == a) {
                    return A - 1
                } else {
                    return sn(wt(e), e)
                }
            }
            function sn(e, t) {
                if (lt[16]) {
                    if (t == o || t == u) {
                        return e
                    } else {
                        return Ln(e)
                    }
                } else {
                    var n = A - U;
                    if (e > n) {
                        if (O == n && t == o) {
                            return 0
                        } else {
                            return n
                        }
                    } else if (e < 0) {
                        if (O == 0 && t == u) {
                            return n
                        } else {
                            return 0
                        }
                    } else {
                        return e
                    }
                }
            }
            function on(t, n) {
                function a() {
                    var n = new Image;
                    n.src = o;
                    var r = e(n);
                    it(r, i, rt(un, [function () {
                        u.empty().append(n);
                        an(t, i)
                    }]))
                }
                if (n) {
                    var s = tt[t];
                    if (!s) {
                        s = tt[t] = []
                    }
                    s.push(n)
                }
                if (st[t]) {
                    if (n) {
                        it(k[t], i, rt(ct, [n]))
                    }
                    return
                }
                if (nt[t]) {
                    return
                }
                nt[t] = i;
                var o = lt[31][t];
                if (!o) {
                    ct(n);
                    return
                }
                if (z) clearTimeout(z);
                var u = k[t];
                var f = r;
                e.ajax({
                    url: o,
                    success: function (e, n, s) {
                        f = i;
                        un(function () {
                            var n = s.getResponseHeader("Content-Type");
                            if (n && n.substr(0, 1) != "i") {
                                u.html(e);
                                an(t, r)
                            } else {
                                a()
                            }
                        })
                    },
                    complete: function () {
                        if (!f) {
                            a()
                        }
                    }
                });
                lt[31][t] = r;
                ht.ajax[t] = r
            }
            function un(e) {
                if (Q) {
                    et.push(e)
                } else {
                    ct(e)
                }
            }
            function an(e, t) {
                var n = k[e];
                Kt(O);
                Xt(O, 0);
                it(n, i, rt(un, [function () {
                    Kt(O);
                    Xt(O, 0);
                    st[e] = i;
                    cn(tt[e]);
                    Pt();
                    ct(function () {
                        lt[24].call(k[e], e + 1, t)
                    });
                    if (p) {
                        p = r;
                        ct(fn)
                    }
                }]))
            }
            function fn() {
                if (lt[16]) {
                    yn(O)
                }
                Xt(O, 0);
                Kt(O);
                Yt();
                if (lt[11]) {
                    At()
                }
                if (lt[13]) {
                    Ht()
                }
                lt[23].call(N);
                if (lt[42]) {
                    ln()
                }
                it(kn(O, A), r, rt(un, [function () {
                    Xt(O, 0);
                    Kt(O)
                }]))
            }
            function ln() {
                function T(e, t) {
                    Q = i;
                    dn();
                    f = pt;
                    a = dt;
                    var n;
                    if (lt[7]) {
                        n = Tt(t)
                    } else {
                        n = Tt(e)
                    }
                    h = n;
                    l = St();
                    c = l
                }
                function N(e, t) {
                    var n;
                    if (lt[7]) {
                        n = Tt(t)
                    } else {
                        n = Tt(e)
                    }
                    d[m] = n - h;
                    var r = St();
                    v[m] = r - c;
                    m = (m + 1) % p;
                    c = r;
                    h = n;
                    if (lt[7]) {
                        e = 0
                    } else {
                        t = 0
                    }
                    Qt(a + e, f + t)
                }
                function C(e, s) {
                    var a;
                    if (lt[7]) {
                        a = s
                    } else {
                        a = e
                    }
                    var f = Tt(a);
                    var l = St();
                    var c = 0;
                    var h = 0;
                    for (var m = 0; m < p; m++) {
                        var g = v[m];
                        if (g + 100 < l) {
                            c += g;
                            h += d[m]
                        }
                    }
                    var y;
                    if (lt[7]) {
                        y = W.height()
                    } else {
                        y = W.width()
                    }
                    var b = Tt(h) / c;
                    var w = b >= .2 || f >= y / 2;
                    if (h > 0 && f < 0 || h < 0 && f > 0 || f <= 10) {
                        w = r
                    }
                    var E = a < 0 ? o : u;
                    if (!lt[16]) {
                        if (O + 1 == A) {
                            if (E == o) {
                                w = r
                            }
                        } else if (O == 0) {
                            if (E == u) {
                                w = r
                            }
                        }
                    }
                    var S;
                    if (w) {
                        S = y - f
                    } else {
                        S = f
                    }
                    var x = S / b * 1.3;
                    var T = Nt(lt[1] * (y / S), lt[1] / 4);
                    var N;
                    if (x < T) {
                        N = Ct(x, lt[1])
                    } else {
                        N = Ct(T, lt[1])
                    }
                    var C = b * N / (S + b * N);
                    var k = 1 - C;
                    if (lt[39]) {
                        t = "cubic-bezier(" + k + "," + C + ",0.3,1)"
                    } else {
                        t = Ot([k || 0, C || 0, .3, 1])
                    }
                    _ = r;
                    n = i;
                    if (w) {
                        wn(rn(E), N, i, i, i)
                    } else {
                        wn(O, N, i, i, i)
                    }
                }
                function j(e, t, n, i, s, o) {
                    t = r;
                    if (t || F(n, i, s, o) == lt[7]) {
                        e.preventDefault()
                    }
                }
                function F(e, t, n, r) {
                    var i = e - n;
                    var s = t - r;
                    return Tt(s / i) >= 1
                }
                var t;
                var n = r;
                var s = lt[0];
                lt[0] = function (e) {
                    if (n) {
                        n = r;
                        e.options.ease = t;
                        return $(e)
                    } else {
                        return s(e)
                    }
                };
                var a;
                var f;
                var l;
                var c;
                var h;
                var p = 3;
                var d = [];
                var v = [];
                var m = 0; {
                    var k = r;
                    var L = 0;
                    var M = 0;
                    var D = 0;
                    var P = 0;
                    var H = function (t) {
                            if (!_) {
                                return
                            }
                            var n = t.type;
                            var s;
                            var o;
                            var u;
                            var a = n.substr(0, 1) == "m";
                            if (a) {
                                s = E;
                                o = x;
                                u = ""
                            } else {
                                s = g;
                                o = w;
                                u = b;
                                t = t.originalEvent
                            }
                            if (!k) {
                                if (n != s) {
                                    return
                                }
                                var f = t.target;
                                var l = e(f);
                                if (!lt[43]) {
                                    l = l.parents().add(f)
                                }
                                var c = lt[43] || W;
                                var h = l.filter(c).length;
                                if (!h) {
                                    return
                                } else {
                                    k = i
                                }
                            }
                            if (n != o && n != u) {
                                var p;
                                var d;
                                if (a) {
                                    p = t.pageX;
                                    d = t.pageY
                                } else {
                                    var v = t.touches[0];
                                    p = v.pageX;
                                    d = v.pageY
                                }
                                if (n == s) {
                                    L = p;
                                    M = d;
                                    T(p - L, d - M)
                                } else {
                                    N(p - L, d - M)
                                }
                                j(t, a, D, P, p - L, d - M);
                                D = p - L;
                                P = d - M
                            } else {
                                C(D, P);
                                k = r;
                                t.preventDefault()
                            }
                        };
                    var B = [g, y, w, b];
                    if (lt[45]) B = B.concat([E, S, x]);
                    xn(document, H, B)
                }
            }
            function cn(e) {
                while (e && e.length) {
                    e.splice(0, 1)[0]()
                }
            }
            function hn(e) {
                if (!L[e]) {
                    return r
                }
                if (!lt[31]) {
                    return i
                } else {
                    if (lt[31][e]) {
                        return r
                    }
                    return !(nt[e] && !st[e])
                }
            }
            function pn(e, t, n) {
                var i = rn(e);
                var s = e == o || e == u;
                var a = Ln(i);
                if (a == O) {
                    return
                }
                _ = r;
                if (lt[31]) {
                    var f = 0;
                    for (var l = a; l < a + U; l++) {
                        var c = Ln(l);
                        if (!hn(c)) {
                            f++;
                            on(c, function () {
                                f--;
                                if (f == 0) {
                                    lt[41].call(N, i + 1);
                                    wn(i, n, t, s)
                                }
                            })
                        }
                    }
                    if (f == 0) {
                        wn(i, n, t, s)
                    } else {
                        lt[40].call(N, i + 1)
                    }
                } else {
                    wn(i, n, t, s)
                }
            }
            function dn() {
                if (lt[39]) {
                    C.css(v + "transition-duration", "")
                }
            }
            function mn(e) {
                if (Ln(e) == vn) {
                    return
                }
                vn = e;
                dn();
                for (var t = 0; t < A; t++) {
                    var n = k[Ln(e + t)];
                    C.append(n)
                }
                Kt(O)
            }
            function gn(e, t) {
                var n = Nt(wt((A - t - U) / 2), 0);
                e = xt(e - n, A);
                mn(e)
            }
            function yn(e) {
                gn(e, 0)
            }
            function bn(e) {
                var t = Ct(e, O);
                var n = Tt(e - O);
                gn(t, n)
            }
            function wn(s, o, u, a, f) {
                if (lt[30]) Ut(s);
                if (lt[27] && u) t.location.hash = lt[19][s];
                if (lt[5]) Rt(s, lt[4]);
                var l = e();
                var c = e();
                for (var h = 0; h < U; h++) {
                    l = l.add(k[Ln(O + h)]);
                    c = c.add(k[Ln(s + h)])
                }
                var p = -O + s;
                var v;
                if (lt[16] && !a) {
                    var m = Tt(p);
                    v = s;
                    var g = -O + s + A;
                    if (Tt(g) < m) {
                        v = s + A;
                        p = g;
                        m = Tt(p)
                    }
                    g = -O + s - A;
                    if (Tt(g) < m) {
                        v = s - A;
                        p = g
                    }
                } else {
                    v = s
                }
                if (lt[16] && !f) {
                    bn(v)
                }
                var y = Gt(v, r);
                var b = Gt(v, i);
                var w = k[Ln(s)];
                var E = e.extend(i, {}, ht);
                var S = lt[1];
                var x = w.attr("data-speed");
                if (x != n) {
                    S = wt(x)
                }
                if (o != n) {
                    S = wt(o)
                }
                E.speed = S;
                var T = lt[0];
                var L = "data-effect";
                var M = w.attr(L);
                if (M) {
                    T = kt(M)
                }
                var _ = k[O];
                if (_) {
                    var D = k[O].attr(L + "out");
                    if (D) {
                        T = kt(D)
                    }
                }
                Q = i;
                G = T;
                var P = i;
                Y = function () {
                    Q = r;
                    P = r;
                    Cn(s, u);
                    An(c);
                    if (lt[16]) {
                        yn(v)
                    }
                    en(s, i);
                    if (lt[11]) {
                        At()
                    }
                    cn(et)
                };
                Z = {
                    fromSlides: l,
                    toSlides: c,
                    slider: W,
                    container: C,
                    options: E,
                    to: s + 1,
                    from: O + 1,
                    diff: p,
                    target: {
                        left: y,
                        top: b
                    },
                    stopCallbacks: [],
                    callback: function () {
                        if (P) {
                            P = r;
                            En()
                        }
                    },
                    goToNext: function () {
                        if (P) {
                            it(e("." + d, W), i, rt(Kt, [s]))
                        }
                    }
                };
                Xt(s, S);
                ct(function () {
                    en(s, r, i);
                    T.call(N, Z)
                })
            }
            function En() {
                if (Q) {
                    yt = i;
                    Y();
                    cn(Z.stopCallbacks);
                    var e = G.stop;
                    if (e) {
                        e()
                    } else {
                        Nn()
                    }
                    Xt(O, 0);
                    Kt(O);
                    yt = r
                }
            }
            function Sn(e, t, n, r) {
                e.on(t, r, n);
                mt.push(function () {
                    e.off(t, r, n)
                })
            }
            function xn(t, n, r) {
                for (var i = 0; i < r.length; i++) {
                    Sn(e(t), r[i], n)
                }
            }
            function Tn() {
                return !W.is(":visible") || p
            }
            function Nn() {
                e("." + d, W).remove();
                C.stop()
            }
            function Cn(e, t) {
                _ = !t && !lt[13];
                M = O;
                O = e;
                Zt(t);
                if (lt[5] && p) {
                    Rt(O, 0)
                }
                if (p && !lt[31][O] && !nt[O]) {
                    p = r;
                    ct(fn)
                }
            }
            function kn(t, n) {
                var r = e();
                for (var i = 0; i < n; i++) {
                    r = r.add(k[Ln(t + i)])
                }
                return r
            }
            function Ln(e) {
                return xt(e, A)
            }
            function An(e) {
                if (screen.fontSmoothingEnabled && e.style) e.style.removeAttribute("filter")
            }
            function On() {
                En();
                H = i;
                B = O;
                cn(mt);
                dn();
                if (j) {
                    j.remove()
                }
                mn(0);
                Kt(O);
                Xt(O, 0);
                lt[44].call(N)
            }
            function Mn() {
                if (H) {
                    bt()
                }
            }
            var p, T, C, k, L, A, O, M, _, D, P, H, B = r,
                j, F, I, q, R, U, z, W = e(this),
                X = r,
                V, K = 0,
                Q = r,
                G, Y, Z, et, tt, nt, st, ot = r,
                ut, at, ft = r,
                lt = [],
                ht = e.extend(i, {}, l),
                pt, dt, mt = [],
                gt = r,
                yt = r;
            var Lt = -1;
            var vn = 0;
            N.destroy = On;
            N.init = Mn;
            N.getOption = function (e) {
                return ht[e.toLowerCase()]
            };
            N.setOption = function (t, n) {
                On();
                if (e.isPlainObject(t)) {
                    for (var r in t) {
                        ht[r] = t[r]
                    }
                } else {
                    ht[t.toLowerCase()] = n
                }
                Mn()
            };
            N.runWhenNotAnimating = un;
            N.insertSlide = function (t, n, r, i) {
                On();
                if (n < 0) {
                    n = A - xt(-n - 1, A + 1)
                } else {
                    n = xt(n, A + 1)
                }
                t = e(t || "<div>");
                if (T) {
                    t = e("<li>").prepend(t)
                } else {
                    if (t.length != 1) {
                        t = e("<div>").prepend(t)
                    } else {}
                } if (!n || n == 0) {
                    C.prepend(t)
                } else {
                    k[n - 1].after(t)
                }
                if (i) {
                    B = i - 1
                } else if (n <= B || !n || n == 0) {
                    B++
                }
                if (lt[19].length < n) {
                    lt[19].length = n
                }
                lt[19].splice(n, 0, r || wt(n) + 1);
                Mn()
            };
            N.removeSlide = function (e) {
                e--;
                On();
                k[Ct(e, A - 1)].remove();
                lt[19].splice(e, 1);
                if (e < B) {
                    B--
                }
                Mn()
            };
            N.goToSlide = function (e, t) {
                var n = e == wt(e) ? e - 1 : e;
                ct(rt(It, [n, i, t]))
            };
            N.block = function () {
                _ = r
            };
            N.unblock = function () {
                _ = i
            };
            N.startAuto = function () {
                lt[13] = i;
                Ht()
            };
            N.stopAuto = function () {
                lt[13] = r;
                Bt()
            };
            N.adjust = function () {
                var e = Nt(K - St(), 0);
                Xt(O, e);
                if (!Q) {
                    Kt(O)
                }
            };
            N.getValue = function (e) {
                return {
                    currentslide: O + 1,
                    totalslides: A,
                    clickable: _,
                    destroyed: H,
                    autoanimation: R
                }[e.toLowerCase()]
            };
            N.getSlide = function (e) {
                return k[Ln(wt(e) - 1)]
            };
            N.stopAnimation = En;
            bt()
        })
    };
    var T = "GrowIn";
    var N = "GrowOut";
    var C = "Rounded";
    var k = {
        box: {
            Random: ["", T, T + C, N, N + C, P],
            Rain: ["", T, T + C, N, N + C, "FlyIn", "FlyOut", ["UpLeft", "DownLeft", "DownRight", "UpRight", M]],
            Spiral: ["InWards", "OutWards",
            {
                "": _,
                Grow: ["In", "Out", ["", "Rounded", D]]
            }]
        },
        fade: {
            "": Q,
            OutIn: K
        },
        foldRandom: ["Horizontal", "Vertical", F],
        slide: $,
        stack: ["Up", "Right", "Down", "Left", ["", "Reverse", W]]
    };
    var L = {
        blinds: ["1", "2", I],
        fold: j,
        push: ["Out", "In", X],
        reveal: V,
        slice: {
            "": ["", "Reveal", ["", "Reverse", "Random", q]],
            Fade: B
        },
        zip: R,
        unzip: U
    };
    var O = {};
    A(O, L, "", i, []);
    A(O, k, "", r, []);
    O.random = Lt(O);
    e.fn.sudoSlider.effects = O
})(jQuery, window);
(function (e) {
    var t = {
        topSpacing: 0,
        bottomSpacing: 0,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper",
        center: false,
        getWidthFrom: ""
    },
        n = e(window),
        r = e(document),
        i = [],
        s = n.height(),
        o = function () {
            var t = n.scrollTop(),
                o = r.height(),
                u = o - s,
                a = t > u ? u - t : 0;
            for (var f = 0; f < i.length; f++) {
                var l = i[f],
                    c = l.stickyWrapper.offset().top,
                    h = c - l.topSpacing - a;
                if (t <= h) {
                    if (l.currentTop !== null) {
                        l.stickyElement.css("position", "").css("top", "");
                        l.stickyElement.parent().removeClass(l.className);
                        l.currentTop = null
                    }
                } else {
                    var p = o - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - t - a;
                    if (p < 0) {
                        p = p + l.topSpacing
                    } else {
                        p = l.topSpacing
                    }
                    if (l.currentTop != p) {
                        l.stickyElement.css("position", "fixed").css("top", p);
                        if (typeof l.getWidthFrom !== "undefined") {
                            l.stickyElement.css("width", e(l.getWidthFrom).width())
                        }
                        l.stickyElement.parent().addClass(l.className);
                        l.currentTop = p
                    }
                }
            }
        },
        u = function () {
            s = n.height()
        },
        a = {
            init: function (n) {
                var r = e.extend(t, n);
                return this.each(function () {
                    var t = e(this);
                    var n = t.attr("id");
                    var s = e("<div></div>").attr("id", n + "-sticky-wrapper").addClass(r.wrapperClassName);
                    t.wrapAll(s);
                    if (r.center) {
                        t.parent().css({
                            width: t.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        })
                    }
                    if (t.css("float") == "right") {
                        t.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        })
                    }
                    var o = t.parent();
                    o.css("height", t.outerHeight());
                    i.push({
                        topSpacing: r.topSpacing,
                        bottomSpacing: r.bottomSpacing,
                        stickyElement: t,
                        currentTop: null,
                        stickyWrapper: o,
                        className: r.className,
                        getWidthFrom: r.getWidthFrom
                    })
                })
            },
            update: o
        };
    if (window.addEventListener) {
        window.addEventListener("scroll", o, false);
        window.addEventListener("resize", u, false)
    } else if (window.attachEvent) {
        window.attachEvent("onscroll", o);
        window.attachEvent("onresize", u)
    }
    e.fn.sticky = function (t) {
        if (a[t]) {
            return a[t].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof t === "object" || !t) {
            return a.init.apply(this, arguments)
        } else {
            e.error("Method " + t + " does not exist on jQuery.sticky")
        }
    };
    e(function () {
        setTimeout(o, 0)
    })
})(jQuery);
(function (e, t, n, r) {
    function d(t, n) {
        this.element = t;
        this.options = e.extend({}, s, n);
        this._defaults = s;
        this._name = i;
        this.init()
    }
    var i = "stellar",
        s = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: true,
            verticalScrolling: true,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: false,
            parallaxBackgrounds: true,
            parallaxElements: true,
            hideDistantElements: true,
            hideElement: function (e) {
                e.hide()
            },
            showElement: function (e) {
                e.show()
            }
        },
        o = {
            scroll: {
                getLeft: function (e) {
                    return e.scrollLeft()
                },
                setLeft: function (e, t) {
                    e.scrollLeft(t)
                },
                getTop: function (e) {
                    return e.scrollTop()
                },
                setTop: function (e, t) {
                    e.scrollTop(t)
                }
            },
            position: {
                getLeft: function (e) {
                    return parseInt(e.css("left"), 10) * -1
                },
                getTop: function (e) {
                    return parseInt(e.css("top"), 10) * -1
                }
            },
            margin: {
                getLeft: function (e) {
                    return parseInt(e.css("margin-left"), 10) * -1
                },
                getTop: function (e) {
                    return parseInt(e.css("margin-top"), 10) * -1
                }
            },
            transform: {
                getLeft: function (e) {
                    var t = getComputedStyle(e[0])[f];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                },
                getTop: function (e) {
                    var t = getComputedStyle(e[0])[f];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                }
            }
        },
        u = {
            position: {
                setLeft: function (e, t) {
                    e.css("left", t)
                },
                setTop: function (e, t) {
                    e.css("top", t)
                }
            },
            transform: {
                setPosition: function (e, t, n, r, i) {
                    e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                }
            }
        },
        a = function () {
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = e("script")[0].style,
                r = "",
                i;
            for (i in n) {
                if (t.test(i)) {
                    r = i.match(t)[0];
                    break
                }
            }
            if ("WebkitOpacity" in n) {
                r = "Webkit"
            }
            if ("KhtmlOpacity" in n) {
                r = "Khtml"
            }
            return function (e) {
                return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }
        }(),
        f = a("transform"),
        l = e("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== r,
        c = l ?
    function (e, t, n) {
        e.css({
            "background-position-x": t,
            "background-position-y": n
        })
    } : function (e, t, n) {
        e.css("background-position", t + " " + n)
    }, h = l ?
    function (e) {
        return [e.css("background-position-x"), e.css("background-position-y")]
    } : function (e) {
        return e.css("background-position").split(" ")
    }, p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
    function (e) {
        setTimeout(e, 1e3 / 60)
    };
    d.prototype = {
        init: function () {
            this.options.name = i + "_" + Math.floor(Math.random() * 1e9);
            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();
            this.refresh({
                firstLoad: true
            });
            if (this.options.scrollProperty === "scroll") {
                this._handleScrollEvent()
            } else {
                this._startAnimationLoop()
            }
        },
        _defineElements: function () {
            if (this.element === n.body) this.element = t;
            this.$scrollElement = e(this.element);
            this.$element = this.element === t ? e("body") : this.$scrollElement;
            this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function () {
            var e = this,
                t = o[e.options.scrollProperty];
            this._getScrollLeft = function () {
                return t.getLeft(e.$scrollElement)
            };
            this._getScrollTop = function () {
                return t.getTop(e.$scrollElement)
            }
        },
        _defineSetters: function () {
            var t = this,
                n = o[t.options.scrollProperty],
                r = u[t.options.positionProperty],
                i = n.setLeft,
                s = n.setTop;
            this._setScrollLeft = typeof i === "function" ?
            function (e) {
                i(t.$scrollElement, e)
            } : e.noop;
            this._setScrollTop = typeof s === "function" ?
            function (e) {
                s(t.$scrollElement, e)
            } : e.noop;
            this._setPosition = r.setPosition ||
            function (e, n, i, s, o) {
                if (t.options.horizontalScrolling) {
                    r.setLeft(e, n, i)
                }
                if (t.options.verticalScrolling) {
                    r.setTop(e, s, o)
                }
            }
        },
        _handleWindowLoadAndResize: function () {
            var n = this,
                r = e(t);
            if (n.options.responsive) {
                r.bind("load." + this.name, function () {
                    n.refresh()
                })
            }
            r.bind("resize." + this.name, function () {
                n._detectViewport();
                if (n.options.responsive) {
                    n.refresh()
                }
            })
        },
        refresh: function (n) {
            var r = this,
                i = r._getScrollLeft(),
                s = r._getScrollTop();
            if (!n || !n.firstLoad) {
                this._reset()
            }
            this._setScrollLeft(0);
            this._setScrollTop(0);
            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();
            if (n && n.firstLoad && /WebKit/.test(navigator.userAgent)) {
                e(t).load(function () {
                    var e = r._getScrollLeft(),
                        t = r._getScrollTop();
                    r._setScrollLeft(e + 1);
                    r._setScrollTop(t + 1);
                    r._setScrollLeft(e);
                    r._setScrollTop(t)
                })
            }
            this._setScrollLeft(i);
            this._setScrollTop(s)
        },
        _detectViewport: function () {
            var e = this.$viewportElement.offset(),
                t = e !== null && e !== r;
            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();
            this.viewportOffsetTop = t ? e.top : 0;
            this.viewportOffsetLeft = t ? e.left : 0
        },
        _findParticles: function () {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop();
            if (this.particles !== r) {
                for (var s = this.particles.length - 1; s >= 0; s--) {
                    this.particles[s].$element.data("stellar-elementIsActive", r)
                }
            }
            this.particles = [];
            if (!this.options.parallaxElements) return;
            this.$element.find("[data-stellar-ratio]").each(function (n) {
                var i = e(this),
                    s, o, u, a, f, l, c, h, p, d = 0,
                    v = 0,
                    m = 0,
                    g = 0;
                if (!i.data("stellar-elementIsActive")) {
                    i.data("stellar-elementIsActive", this)
                } else if (i.data("stellar-elementIsActive") !== this) {
                    return
                }
                t.options.showElement(i);
                if (!i.data("stellar-startingLeft")) {
                    i.data("stellar-startingLeft", i.css("left"));
                    i.data("stellar-startingTop", i.css("top"))
                } else {
                    i.css("left", i.data("stellar-startingLeft"));
                    i.css("top", i.data("stellar-startingTop"))
                }
                u = i.position().left;
                a = i.position().top;
                f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10);
                l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10);
                h = i.offset().left - f;
                p = i.offset().top - l;
                i.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === true) {
                        d = m;
                        v = g;
                        c = t;
                        return false
                    } else {
                        m += t.position().left;
                        g += t.position().top
                    }
                });
                s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset;
                o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset;
                t.particles.push({
                    $element: i,
                    $offsetParent: c,
                    isFixed: i.css("position") === "fixed",
                    horizontalOffset: s,
                    verticalOffset: o,
                    startingPositionLeft: u,
                    startingPositionTop: a,
                    startingOffsetLeft: h,
                    startingOffsetTop: p,
                    parentOffsetLeft: d,
                    parentOffsetTop: v,
                    stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(true),
                    height: i.outerHeight(true),
                    isHidden: false
                })
            })
        },
        _findBackgrounds: function () {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop(),
                s;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds) return;
            s = this.$element.find("[data-stellar-background-ratio]");
            if (this.$element.data("stellar-background-ratio")) {
                s = s.add(this.$element)
            }
            s.each(function () {
                var s = e(this),
                    o = h(s),
                    u, a, f, l, p, d, v, m, g, y = 0,
                    b = 0,
                    w = 0,
                    E = 0;
                if (!s.data("stellar-backgroundIsActive")) {
                    s.data("stellar-backgroundIsActive", this)
                } else if (s.data("stellar-backgroundIsActive") !== this) {
                    return
                }
                if (!s.data("stellar-backgroundStartingLeft")) {
                    s.data("stellar-backgroundStartingLeft", o[0]);
                    s.data("stellar-backgroundStartingTop", o[1])
                } else {
                    c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop"))
                }
                p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10);
                d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10);
                v = s.offset().left - p - n;
                m = s.offset().top - d - i;
                s.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === true) {
                        y = w;
                        b = E;
                        g = t;
                        return false
                    } else {
                        w += t.position().left;
                        E += t.position().top
                    }
                });
                u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset;
                a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset;
                t.backgrounds.push({
                    $element: s,
                    $offsetParent: g,
                    isFixed: s.css("background-attachment") === "fixed",
                    horizontalOffset: u,
                    verticalOffset: a,
                    startingValueLeft: o[0],
                    startingValueTop: o[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10),
                    startingPositionLeft: s.position().left,
                    startingPositionTop: s.position().top,
                    startingOffsetLeft: v,
                    startingOffsetTop: m,
                    parentOffsetLeft: y,
                    parentOffsetTop: b,
                    stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")
                })
            })
        },
        _reset: function () {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--) {
                e = this.particles[i];
                t = e.$element.data("stellar-startingLeft");
                n = e.$element.data("stellar-startingTop");
                this._setPosition(e.$element, t, t, n, n);
                this.options.showElement(e.$element);
                e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null)
            }
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                r = this.backgrounds[i];
                r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null);
                c(r.$element, r.startingValueLeft, r.startingValueTop)
            }
        },
        destroy: function () {
            this._reset();
            this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name);
            this._animationLoop = e.noop;
            e(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function () {
            var n = this,
                r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name);
            if (typeof this.options.horizontalOffset === "function") {
                this.horizontalOffset = this.options.horizontalOffset();
                r.bind("resize.horizontal-" + this.name, function () {
                    n.horizontalOffset = n.options.horizontalOffset()
                })
            } else {
                this.horizontalOffset = this.options.horizontalOffset
            }
            if (typeof this.options.verticalOffset === "function") {
                this.verticalOffset = this.options.verticalOffset();
                r.bind("resize.vertical-" + this.name, function () {
                    n.verticalOffset = n.options.verticalOffset()
                })
            } else {
                this.verticalOffset = this.options.verticalOffset
            }
        },
        _repositionElements: function () {
            var e = this._getScrollLeft(),
                t = this._getScrollTop(),
                n, r, i, s, o, u, a, f = true,
                l = true,
                h, p, d, v, m;
            if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
                return
            } else {
                this.currentScrollLeft = e;
                this.currentScrollTop = t;
                this.currentWidth = this.viewportWidth;
                this.currentHeight = this.viewportHeight
            }
            for (m = this.particles.length - 1; m >= 0; m--) {
                i = this.particles[m];
                s = i.isFixed ? 1 : 0;
                if (this.options.horizontalScrolling) {
                    h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft;
                    d = h - i.startingPositionLeft + i.startingOffsetLeft
                } else {
                    h = i.startingPositionLeft;
                    d = i.startingOffsetLeft
                }
                if (this.options.verticalScrolling) {
                    p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop;
                    v = p - i.startingPositionTop + i.startingOffsetTop
                } else {
                    p = i.startingPositionTop;
                    v = i.startingOffsetTop
                }
                if (this.options.hideDistantElements) {
                    l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft;
                    f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop
                }
                if (l && f) {
                    if (i.isHidden) {
                        this.options.showElement(i.$element);
                        i.isHidden = false
                    }
                    this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)
                } else {
                    if (!i.isHidden) {
                        this.options.hideElement(i.$element);
                        i.isHidden = true
                    }
                }
            }
            for (m = this.backgrounds.length - 1; m >= 0; m--) {
                o = this.backgrounds[m];
                s = o.isFixed ? 0 : 1;
                u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft;
                a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop;
                c(o.$element, u, a)
            }
        },
        _handleScrollEvent: function () {
            var e = this,
                t = false;
            var n = function () {
                    e._repositionElements();
                    t = false
                };
            var r = function () {
                    if (!t) {
                        p(n);
                        t = true
                    }
                };
            this.$scrollElement.bind("scroll." + this.name, r);
            r()
        },
        _startAnimationLoop: function () {
            var e = this;
            this._animationLoop = function () {
                p(e._animationLoop);
                e._repositionElements()
            };
            this._animationLoop()
        }
    };
    e.fn[i] = function (t) {
        var n = arguments;
        if (t === r || typeof t === "object") {
            return this.each(function () {
                if (!e.data(this, "plugin_" + i)) {
                    e.data(this, "plugin_" + i, new d(this, t))
                }
            })
        } else if (typeof t === "string" && t[0] !== "_" && t !== "init") {
            return this.each(function () {
                var r = e.data(this, "plugin_" + i);
                if (r instanceof d && typeof r[t] === "function") {
                    r[t].apply(r, Array.prototype.slice.call(n, 1))
                }
                if (t === "destroy") {
                    e.data(this, "plugin_" + i, null)
                }
            })
        }
    };
    e[i] = function (n) {
        var r = e(t);
        return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
    };
    e[i].scrollProperty = o;
    e[i].positionProperty = u;
    t.Stellar = d
})(jQuery, this, document);
(function (e, t) {
    var n = {
        ratio: 16 / 9,
        videoId: "ZCAnLxRvNNc",
        mute: true,
        repeat: true,
        width: e(t).width(),
        wrapperZIndex: 99,
        playButtonClass: "tubular-play",
        pauseButtonClass: "tubular-pause",
        muteButtonClass: "tubular-mute",
        volumeUpClass: "tubular-volume-up",
        volumeDownClass: "tubular-volume-down",
        increaseVolumeBy: 10,
        start: 0
    };
    var r = function (r, i) {
            var i = e.extend({}, n, i),
                s = e("body");
            $node = e(r);
            var o = '<div id="tubular-container" style="overflow: hidden; position: fixed; z-index: 1; width: 100%; height: 100%"><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>';
            e("html,body").css({
                width: "100%",
                height: "100%"
            });
            s.prepend(o);
            $node.css({
                position: "relative",
                "z-index": i.wrapperZIndex
            });
            t.player;
            t.onYouTubeIframeAPIReady = function () {
                player = new YT.Player("tubular-player", {
                    width: i.width,
                    height: Math.ceil(i.width / i.ratio),
                    videoId: i.videoId,
                    playerVars: {
                        controls: 0,
                        showinfo: 0,
                        modestbranding: 1,
                        wmode: "transparent"
                    },
                    events: {
                        onReady: onPlayerReady,
                        onStateChange: onPlayerStateChange
                    }
                })
            };
            t.onPlayerReady = function (e) {
                u();
                if (i.mute) e.target.mute();
                e.target.seekTo(i.start);
                e.target.playVideo()
            };
            t.onPlayerStateChange = function (e) {
                if (e.data === 0 && i.repeat) {
                    player.seekTo(i.start)
                }
            };
            var u = function () {
                    var n = e(t).width(),
                        r, s = e(t).height(),
                        o, u = e("#tubular-player");
                    if (n / i.ratio < s) {
                        r = Math.ceil(s * i.ratio);
                        u.width(r).height(s).css({
                            left: (n - r) / 2,
                            top: 0
                        })
                    } else {
                        o = Math.ceil(n / i.ratio);
                        u.width(n).height(o).css({
                            left: 0,
                            top: (s - o) / 2
                        })
                    }
                };
            e(t).on("resize.tubular", function () {
                u()
            });
            e("body").on("click", "." + i.playButtonClass, function (e) {
                e.preventDefault();
                player.playVideo()
            }).on("click", "." + i.pauseButtonClass, function (e) {
                e.preventDefault();
                player.pauseVideo()
            }).on("click", "." + i.muteButtonClass, function (e) {
                e.preventDefault();
                player.isMuted() ? player.unMute() : player.mute()
            }).on("click", "." + i.volumeDownClass, function (e) {
                e.preventDefault();
                var t = player.getVolume();
                if (t < i.increaseVolumeBy) t = i.increaseVolumeBy;
                player.setVolume(t - i.increaseVolumeBy)
            }).on("click", "." + i.volumeUpClass, function (e) {
                e.preventDefault();
                if (player.isMuted()) player.unMute();
                var t = player.getVolume();
                if (t > 100 - i.increaseVolumeBy) t = 100 - i.increaseVolumeBy;
                player.setVolume(t + i.increaseVolumeBy)
            })
        };
    var i = document.createElement("script");
    i.src = "//www.youtube.com/iframe_api";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(i, s);
    e.fn.tubular = function (t) {
        return this.each(function () {
            if (!e.data(this, "tubular_instantiated")) {
                e.data(this, "tubular_instantiated", r(this, t))
            }
        })
    }
})(jQuery, window);
(function (e) {
    e.belowthefold = function (t, n) {
        var r = e(window).height() + e(window).scrollTop();
        return r <= e(t).offset().top - n.threshold
    };
    e.abovethetop = function (t, n) {
        var r = e(window).scrollTop();
        return r >= e(t).offset().top + e(t).height() - n.threshold
    };
    e.rightofscreen = function (t, n) {
        var r = e(window).width() + e(window).scrollLeft();
        return r <= e(t).offset().left - n.threshold
    };
    e.leftofscreen = function (t, n) {
        var r = e(window).scrollLeft();
        return r >= e(t).offset().left + e(t).width() - n.threshold
    };
    e.inviewport = function (t, n) {
        return !e.rightofscreen(t, n) && !e.leftofscreen(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
    };
    e.extend(e.expr[":"], {
        "below-the-fold": function (t, n, r) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function (t, n, r) {
            return e.abovethetop(t, {
                threshold: 0
            })
        },
        "left-of-screen": function (t, n, r) {
            return e.leftofscreen(t, {
                threshold: 0
            })
        },
        "right-of-screen": function (t, n, r) {
            return e.rightofscreen(t, {
                threshold: 0
            })
        },
        "in-viewport": function (t, n, r) {
            return e.inviewport(t, {
                threshold: 0
            })
        }
    })
})(jQuery);
(function (e, t, n, r) {
    n.swipebox = function (i, s) {
        var o, u = {
            useCSS: true,
            useSVG: true,
            initialIndexOnArray: 0,
            closeBySwipe: true,
            hideBarsOnMobile: true,
            hideBarsDelay: 3e3,
            videoMaxWidth: 1140,
            vimeoColor: "CCCCCC",
            beforeOpen: null,
            afterOpen: null,
            afterClose: null,
            loopAtEnd: false
        },
            a = this,
            f = [],
            l, c = i.selector,
            h = n(c),
            p = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            d = p !== null || t.createTouch !== r || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
            v = !! t.createElementNS && !! t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            m = e.innerWidth ? e.innerWidth : n(e).width(),
            g = e.innerHeight ? e.innerHeight : n(e).height(),
            y = '<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>';
        a.settings = {};
        n.swipebox.close = function () {
            o.closeSlide()
        };
        n.swipebox.extend = function () {
            return o
        };
        a.init = function () {
            a.settings = n.extend({}, u, s);
            if (n.isArray(i)) {
                f = i;
                o.target = n(e);
                o.init(a.settings.initialIndexOnArray)
            } else {
                n(t).on("click", c, function (e) {
                    if (e.target.parentNode.className === "slide current") {
                        return false
                    }
                    if (!n.isArray(i)) {
                        o.destroy();
                        l = n(c);
                        o.actions()
                    }
                    f = [];
                    var t, r, s;
                    if (!s) {
                        r = "data-rel";
                        s = n(this).attr(r)
                    }
                    if (!s) {
                        r = "rel";
                        s = n(this).attr(r)
                    }
                    if (s && s !== "" && s !== "nofollow") {
                        l = h.filter("[" + r + '="' + s + '"]')
                    } else {
                        l = n(c)
                    }
                    l.each(function () {
                        var e = null,
                            t = null;
                        if (n(this).attr("title")) {
                            e = n(this).attr("title")
                        }
                        if (n(this).attr("href")) {
                            t = n(this).attr("href")
                        }
                        f.push({
                            href: t,
                            title: e
                        })
                    });
                    t = l.index(n(this));
                    e.preventDefault();
                    e.stopPropagation();
                    o.target = n(e.target);
                    o.init(t)
                })
            }
        };
        o = {
            init: function (e) {
                if (a.settings.beforeOpen) {
                    a.settings.beforeOpen()
                }
                this.target.trigger("swipebox-start");
                n.swipebox.isOpen = true;
                this.build();
                this.openSlide(e);
                this.openMedia(e);
                this.preloadMedia(e + 1);
                this.preloadMedia(e - 1);
                if (a.settings.afterOpen) {
                    a.settings.afterOpen()
                }
            },
            build: function () {
                var e = this,
                    t;
                n("body").append(y);
                if (e.doCssTrans()) {
                    n("#swipebox-slider").css({
                        "-webkit-transition": "left 0.4s ease",
                        "-moz-transition": "left 0.4s ease",
                        "-o-transition": "left 0.4s ease",
                        "-khtml-transition": "left 0.4s ease",
                        transition: "left 0.4s ease"
                    });
                    n("#swipebox-overlay").css({
                        "-webkit-transition": "opacity 1s ease",
                        "-moz-transition": "opacity 1s ease",
                        "-o-transition": "opacity 1s ease",
                        "-khtml-transition": "opacity 1s ease",
                        transition: "opacity 1s ease"
                    });
                    n("#swipebox-action, #swipebox-caption").css({
                        "-webkit-transition": "0.5s",
                        "-moz-transition": "0.5s",
                        "-o-transition": "0.5s",
                        "-khtml-transition": "0.5s",
                        transition: "0.5s"
                    })
                }
                if (v && a.settings.useSVG === true) {
                    t = n("#swipebox-action #swipebox-close").css("background-image");
                    t = t.replace("png", "svg");
                    n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({
                        "background-image": t
                    })
                }
                if (p && a.settings.hideBarsOnMobile === true) {
                    n("#swipebox-action, #swipebox-caption").hide()
                }
                n.each(f, function () {
                    n("#swipebox-slider").append('<div class="slide"></div>')
                });
                e.setDim();
                e.actions();
                if (d) {
                    e.gesture()
                }
                e.keyboard();
                e.animBars();
                e.resize()
            },
            setDim: function () {
                var t, r, i = {};
                if ("onorientationchange" in e) {
                    e.addEventListener("orientationchange", function () {
                        if (e.orientation === 0) {
                            t = m;
                            r = g
                        } else if (e.orientation === 90 || e.orientation === -90) {
                            t = g;
                            r = m
                        }
                    }, false)
                } else {
                    t = e.innerWidth ? e.innerWidth : n(e).width();
                    r = e.innerHeight ? e.innerHeight : n(e).height()
                }
                i = {
                    width: t,
                    height: r
                };
                n("#swipebox-overlay").css(i)
            },
            resize: function () {
                var t = this;
                n(e).resize(function () {
                    t.setDim()
                }).resize()
            },
            supportTransition: function () {
                var e = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" "),
                    n;
                for (n = 0; n < e.length; n++) {
                    if (t.createElement("div").style[e[n]] !== r) {
                        return e[n]
                    }
                }
                return false
            },
            doCssTrans: function () {
                if (a.settings.useCSS && this.supportTransition()) {
                    return true
                }
            },
            gesture: function () {
                var e = this,
                    t = null,
                    r = null,
                    i = false,
                    s = 10,
                    o = 50,
                    u = {},
                    f = {},
                    l = n("#swipebox-caption, #swipebox-action"),
                    c = n("#swipebox-slider");
                l.addClass("visible-bars");
                e.setTimeout();
                n("body").bind("touchstart", function (e) {
                    n(this).addClass("touching");
                    f = e.originalEvent.targetTouches[0];
                    u.pageX = e.originalEvent.targetTouches[0].pageX;
                    u.pageY = e.originalEvent.targetTouches[0].pageY;
                    n(".touching").bind("touchmove", function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        f = e.originalEvent.targetTouches[0];
                        if (a.settings.closeBySwipe) {
                            r = f.pageY - u.pageY;
                            if (Math.abs(r) >= o || i) {
                                var t = .75 - Math.abs(r) / c.height();
                                c.css({
                                    top: r + "px"
                                });
                                c.css({
                                    opacity: t
                                });
                                i = true
                            }
                        }
                    });
                    return false
                }).bind("touchend", function (o) {
                    o.preventDefault();
                    o.stopPropagation();
                    if (a.settings.closeBySwipe) {
                        if (c.css("opacity") <= .5) {
                            var h = r > 0 ? c.height() : -c.height();
                            c.animate({
                                top: h + "px",
                                opacity: 0
                            }, 300, function () {
                                e.closeSlide()
                            })
                        } else {
                            c.animate({
                                top: 0,
                                opacity: 1
                            }, 300)
                        }
                        if (i) {
                            i = false;
                            return
                        }
                    }
                    t = f.pageX - u.pageX;
                    if (t >= s) {
                        e.getPrev()
                    } else if (t <= -s) {
                        e.getNext()
                    } else {
                        if (!l.hasClass("visible-bars")) {
                            e.showBars();
                            e.setTimeout()
                        } else {
                            e.clearTimeout();
                            e.hideBars()
                        }
                    }
                    n(".touching").off("touchmove").removeClass("touching")
                })
            },
            setTimeout: function () {
                if (a.settings.hideBarsDelay > 0) {
                    var t = this;
                    t.clearTimeout();
                    t.timeout = e.setTimeout(function () {
                        t.hideBars()
                    }, a.settings.hideBarsDelay)
                }
            },
            clearTimeout: function () {
                e.clearTimeout(this.timeout);
                this.timeout = null
            },
            showBars: function () {
                var e = n("#swipebox-caption, #swipebox-action");
                if (this.doCssTrans()) {
                    e.addClass("visible-bars")
                } else {
                    n("#swipebox-caption").animate({
                        top: 0
                    }, 500);
                    n("#swipebox-action").animate({
                        bottom: 0
                    }, 500);
                    setTimeout(function () {
                        e.addClass("visible-bars")
                    }, 1e3)
                }
            },
            hideBars: function () {
                var e = n("#swipebox-caption, #swipebox-action");
                if (this.doCssTrans()) {
                    e.removeClass("visible-bars")
                } else {
                    n("#swipebox-caption").animate({
                        top: "-50px"
                    }, 500);
                    n("#swipebox-action").animate({
                        bottom: "-50px"
                    }, 500);
                    setTimeout(function () {
                        e.removeClass("visible-bars")
                    }, 1e3)
                }
            },
            animBars: function () {
                var e = this,
                    t = n("#swipebox-caption, #swipebox-action");
                t.addClass("visible-bars");
                e.setTimeout();
                n("#swipebox-slider").click(function () {
                    if (!t.hasClass("visible-bars")) {
                        e.showBars();
                        e.setTimeout()
                    }
                });
                n("#swipebox-action").hover(function () {
                    e.showBars();
                    t.addClass("visible-bars");
                    e.clearTimeout()
                }, function () {
                    if (a.settings.hideBarsDelay > 0) {
                        t.removeClass("visible-bars");
                        e.setTimeout()
                    }
                })
            },
            keyboard: function () {
                var t = this;
                n(e).bind("keyup", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.keyCode === 37) {
                        t.getPrev()
                    } else if (e.keyCode === 39) {
                        t.getNext()
                    } else if (e.keyCode === 27) {
                        t.closeSlide()
                    }
                })
            },
            actions: function () {
                var e = this,
                    t = "touchend click";
                if (f.length < 2) {
                    n("#swipebox-prev, #swipebox-next").hide()
                } else {
                    n("#swipebox-prev").bind(t, function (t) {
                        t.preventDefault();
                        t.stopPropagation();
                        e.getPrev();
                        e.setTimeout()
                    });
                    n("#swipebox-next").bind(t, function (t) {
                        t.preventDefault();
                        t.stopPropagation();
                        e.getNext();
                        e.setTimeout()
                    })
                }
                n("#swipebox-close").bind(t, function () {
                    e.closeSlide()
                })
            },
            setSlide: function (e, t) {
                t = t || false;
                var r = n("#swipebox-slider");
                if (this.doCssTrans()) {
                    r.css({
                        left: -e * 100 + "%"
                    })
                } else {
                    r.animate({
                        left: -e * 100 + "%"
                    })
                }
                n("#swipebox-slider .slide").removeClass("current");
                n("#swipebox-slider .slide").eq(e).addClass("current");
                this.setTitle(e);
                if (t) {
                    r.fadeIn()
                }
                n("#swipebox-prev, #swipebox-next").removeClass("disabled");
                if (e === 0) {
                    n("#swipebox-prev").addClass("disabled")
                } else if (e === f.length - 1 && a.settings.loopAtEnd != true) {
                    n("#swipebox-next").addClass("disabled")
                }
            },
            openSlide: function (t) {
                n("html").addClass("swipebox-html");
                if (d) {
                    n("html").addClass("swipebox-touch")
                }
                n(e).trigger("resize");
                this.setSlide(t, true)
            },
            preloadMedia: function (e) {
                var t = this,
                    n = null;
                if (f[e] !== r) {
                    n = f[e].href
                }
                if (!t.isVideo(n)) {
                    setTimeout(function () {
                        t.openMedia(e)
                    }, 1e3)
                } else {
                    t.openMedia(e)
                }
            },
            openMedia: function (e) {
                var t = this,
                    i = null;
                if (f[e] !== r) {
                    i = f[e].href
                }
                if (e < 0 || e >= f.length) {
                    return false
                }
                if (!t.isVideo(i)) {
                    t.loadMedia(i, function () {
                        n("#swipebox-slider .slide").eq(e).html(this)
                    })
                } else {
                    n("#swipebox-slider .slide").eq(e).html(t.getVideo(i))
                }
            },
            setTitle: function (e) {
                var t = null;
                n("#swipebox-caption").empty();
                if (f[e] !== r) {
                    t = f[e].title
                }
                if (t) {
                    n("#swipebox-caption").append(t)
                }
            },
            isVideo: function (e) {
                if (e) {
                    if (e.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) {
                        return true
                    }
                    if (e.toLowerCase().indexOf("swipeboxvideo=1") >= 0) {
                        return true
                    }
                }
            },
            getVideo: function (e) {
                var t = "",
                    n = e.match(/watch\?v=([a-zA-Z0-9\-_]+)/),
                    r = e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    i = e.match(/vimeo\.com\/([0-9]*)/);
                if (n || r) {
                    if (r) {
                        n = r
                    }
                    t = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + n[1] + '" frameborder="0" allowfullscreen></iframe>'
                } else if (i) {
                    t = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + i[1] + "?byline=0&portrait=0&color=" + a.settings.vimeoColor + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                }
                if (r || r || i) {} else {
                    t = '<iframe width="560" height="315" src="' + e + '" frameborder="0" allowfullscreen></iframe>'
                }
                return '<div class="swipebox-video-container" style="max-width:' + a.settings.videomaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            },
            loadMedia: function (e, t) {
                if (!this.isVideo(e)) {
                    var r = n("<img>").on("load", function () {
                        t.call(r)
                    });
                    r.attr("src", e)
                }
            },
            getNext: function () {
                var e = this,
                    t = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                if (t + 1 < f.length) {
                    var r = n("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src");
                    n("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src", r);
                    t++;
                    e.setSlide(t);
                    e.preloadMedia(t + 1)
                } else {
                    if (a.settings.loopAtEnd === true) {
                        var r = n("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src");
                        n("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src", r);
                        t = 0;
                        e.preloadMedia(t);
                        e.setSlide(t);
                        e.preloadMedia(t + 1)
                    } else {
                        n("#swipebox-slider").addClass("rightSpring");
                        setTimeout(function () {
                            n("#swipebox-slider").removeClass("rightSpring")
                        }, 500)
                    }
                }
            },
            getPrev: function () {
                var e = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                if (e > 0) {
                    var t = n("#swipebox-slider .slide").eq(e).contents().find("iframe").attr("src");
                    n("#swipebox-slider .slide").eq(e).contents().find("iframe").attr("src", t);
                    e--;
                    this.setSlide(e);
                    this.preloadMedia(e - 1)
                } else {
                    n("#swipebox-slider").addClass("leftSpring");
                    setTimeout(function () {
                        n("#swipebox-slider").removeClass("leftSpring")
                    }, 500)
                }
            },
            closeSlide: function () {
                n("html").removeClass("swipebox-html");
                n("html").removeClass("swipebox-touch");
                n(e).trigger("resize");
                this.destroy()
            },
            destroy: function () {
                n(e).unbind("keyup");
                n("body").unbind("touchstart");
                n("body").unbind("touchmove");
                n("body").unbind("touchend");
                n("#swipebox-slider").unbind();
                n("#swipebox-overlay").remove();
                if (!n.isArray(i)) {
                    i.removeData("_swipebox")
                }
                if (this.target) {
                    this.target.trigger("swipebox-destroy")
                }
                n.swipebox.isOpen = false;
                if (a.settings.afterClose) {
                    a.settings.afterClose()
                }
            }
        };
        a.init()
    };
    n.fn.swipebox = function (e) {
        if (!n.data(this, "_swipebox")) {
            var t = new n.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
})(window, document, jQuery)