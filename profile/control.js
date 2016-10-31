function openMessageModal( )
{
    var messageModal = document.getElementById( "message-modal" );
    
    messageModal.style.display = "block";
}

window.onresize = function( )
{
    var canvas = document.getElementById( "grade-canvas" );
    
    canvas.width = window.innerWidth;
    
    reloadGradeChart( );
}

var grades = { "August":95, "September":100, "October":53, "December": 43, "January": 20, "Febuary": 98, "March": 84, "April": 10, "May": 52 };

window.onload = function( )
{
    reloadGradeChart( );
}

function getSize( array )
{
    var len = 0;

    for( var key_ in array )
    {
        len++;
    }
    
    return len;
}

function reloadGradeChart( )
{
    var canvas = document.getElementById( "grade-canvas" );
    
    canvas.width = window.innerWidth;
    
    canvas.height = 370;
    
    var labelPositions = { };
    
    //Draw canvas lines and labels
    
    var rowDistance =  Math.floor( ( (canvas.height - 50 ) / 4 ) );
    
    var x = rowDistance;
    var i;
    var ctx;
    var lineNumber = 100;
    for( i = 0; i <= 4; i++ )
    {
        ctx = canvas.getContext( "2d" );
        ctx.moveTo( rowDistance, x );
        ctx.lineTo( canvas.width, x );
        ctx.strokeStyle = "#373740";
        ctx.stroke( );
        
        var ctx2 = canvas.getContext( "2d" );
        ctx2.font = "100 15px Roboto";
        ctx2.fillStyle = "#C9D2DC";
        ctx2.fillText( lineNumber.toString( ) + "%",110, x - 5 );
        
        x = x + rowDistance;
        lineNumber = lineNumber - 25;
    }
    
    var labelDistance = Math.floor( canvas.width / getSize( grades ) );
    var labelX = 160;
    for( var date in grades )
    {
        ctx2 = canvas.getContext( "2d" );
        ctx2.font = "100 15px Roboto";
        ctx2.fillStyle = "#C9D2DC";
        ctx2.fillText( date, Math.floor( labelX - ( ctx2.measureText( date ).width / 2 ) ), canvas.height - 5 );
        
        labelX = labelDistance + labelX;
    }
    
    var linePosition = rowDistance * 4; //---Left off here---
    var lastPosition = linePosition;
    var index = 1;
    for( var pos in labelPositions )
    {
        var ctx3 = canvas.getContext( "2d" );
        ctx3.moveTo( lastPosition, labelPositions[ pos ] );
        ctx3.lineTo( 0, x );
        ctx3.strokeStyle = "#36B8B7";
        ctx3.stroke( );
    }
}