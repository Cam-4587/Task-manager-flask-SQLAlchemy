document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
      M.Datepicker.init(datepicker, { 
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
      });

      let selects = document.querySelectorAll('select');
      M.FormSelect.init(selects);

      let collapsibles = document.querySelectorAll('.collapsible');
      M.Collapsible = M.Collapsible.init(collapsibles);
  });