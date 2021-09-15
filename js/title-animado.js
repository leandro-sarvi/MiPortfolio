let barcodeSpans = $("#barcode").children();
function barcodeAnimation()
{
  barcodeSpans.each(function(i)
  {
    let span = $(this);
    setTimeout(function()
    {
      // highlight each individual span with 200ms between each
      span.toggleClass('highlighted');
     //span.fadeToggle("slow");
    }, 200*i);});
}

$(document).ready(function()
{
  setInterval(barcodeAnimation, 3000);
});