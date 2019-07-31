

$('#add-skill').on('click', function()
{   
    var input = $('input')[0].value;
    var temp = `<tr><td><button>X</button></td><td>${input}</td></tr>`; 
    $('table').append($(temp));
    $('input')[0].value="";
});

$('table').on('click', 'button', function()
{
    $(this).closest('tr').remove();
})