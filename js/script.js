function openNav()
{
    document.getElementById("myNav").style.display = "block";
    document.body.classList.add('fixedPosition'); 
}

function closeNav() 
{
    document.getElementById("myNav").style.display = "none";
    document.body.classList.remove('fixedPosition');
}

window.addEventListener("resize", function()
{
    if (document.documentElement.clientWidth > 600)
    {
        closeNav();
        console.log('Closing Nav!');
    }
    else 
    {
        console.log('Doing nothing!');
    }
}, true);