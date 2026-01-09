function saktspeli()
{
    let ievaditsVards = Document.querySelector('#vards').value;
    if (ievaditsVards == '')
    {
        alert('ievadi savu vārdu!');
    }
    else
    {
    window.location = 'spele#' + ievaditsVards;
    }
}