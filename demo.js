document.addEventListener('DOMContentLoaded', function () 
{
    document.getElementById('resume-download-button').addEventListener('click', function() 
    {
        const link = document.createElement('a');
        link.href = 'Deepthi kanithi.pd';
        link.download = 'Deepthi kanithi.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});