
"use strict";
$(function () {
    $("#inputmask-1").inputmask({
        mask: "99/99/9999",
        placeholder: "mm/dd/yyyy"
    }),
        $("#inputmask-2").inputmask({
            mask: "(999) 999-9999"
        }),
        $("#inputmask-3").inputmask({
            mask: "99-9999999", placeholder: ""
        }),
        $("#inputmask-4").inputmask({
            mask: "9", repeat: 10, greedy: !1
        }), $("#inputmask-5").inputmask({
            mask: "$ 999.999.999,99", numericInput: !0
        }),
        $("#inputmask-6").inputmask({
            mask: "999.999.999.999"
        }),
        $("#inputmask-7").inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: !1,
            onBeforePaste: function (a) { return a.toLowerCase().replace("mailto:", "") },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                }
            }
        })
});