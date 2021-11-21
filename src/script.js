 /* Customize for javascript app */
function setQRCode(base64QRCode){	
    window.ic_base64QRCode = base64QRCode;
}

function getQRCode(){
    img=window.ic_base64QRCode;
    parameter= {'action':'result', 'parameter':img};
    callFileMaker(window.ic_settings.script, parameter, 5 );
}