# Encoder -Addon
Purpose: Generate QR codes in your FileMaker application with this Add-On.

Inputs:
  Update the webViewer with a fieldName or calculation to generate the QR Code

Outputs:
  .gif QR Code

Dependencies:
  none

Notes:

Package Contents:

- Scripts: getQRCode
- Custom Functions: none
- Layouts: none
- Tables: none
  

# Installation Instructions:
**Place the downloaded Encoder folder in your FileMaker Add-Ons directory:**

   Mac: ~/Library/Application Support/FileMaker/Extensions/AddonModules
   
   Win: ~\\AppData\\Local\\FileMaker\\Extensions\\AddonModules

You can then install Encoder from the Add-Ons tab in FileMaker from Layout Mode.

Open the webviewer settings and update the qrText calculation

# Usage Instructions
  Once installed, Encoder generates the QR Code from the variable qrText calculation in the webViewer settings, based on the current context of the layout.
  
  Encoder automatically adjusts the size of the QR Code to the size of the webViewer.  To adjust the size of the QR Code, change the size of the webViewer.
  
  **Options:** margin
  If allow interation is enabled, the QR Code gif can be dragged directly from the webViewer.
  
  getQRCode: To get the QR Code as a variable that can be used in FileMaker programming and containers, call this script and use Get ( ScriptResult ). The script result is the data file and can be used to set a container field to the file.
  
- Parameter (optional), send the Addon UUID if there is more than one Encoder on the layout.
