var $j = jQuery.noConflict();
$('#example .input-group.date').datepicker({
    weekStart: 1,
    startDate: "today",
    clearBtn: true,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true
});