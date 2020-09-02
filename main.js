function copy(that)
{
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent.replace("Másolva", "")
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
}

function showPopup(that) 
{
    span = that.childNodes[1];
    span.classList.toggle("show");
    setTimeout(() =>
    {
		span.classList.toggle("show");
    }, 1000);
}