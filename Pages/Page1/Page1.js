
var tableAscii = expandTable([0x0041, 0x0061, 0x0030, 0x0031]);
var tableCircle = [0x24B6, 0x24D0, 0x24EA, 0x2460];
var tableCircleNegative = [0x1F150, 0x1F150, 0x1F10C, 0x2776]; //No lowercase
var tableFullwidth = [0xFF21, 0xFF41, 0xFF10, 0xFF11];
var tableBold = [0x1D400, 0x1D41A, 0x1D7CE, 0x1D7CF];
var tableBoldItalic = [0x1D468, 0x1D482, 0x0030, 0x0031]; //Default numbers
var tableScriptBold = [0x1D4D0, 0x1D4EA, 0x0030, 0x0031]; //Default numbers
var tableFrakturBold = [0x1D56C, 0x1D586, 0x0030, 0x0031]; //Default numbers
var tableDoubleStruck = [0x1D538, 0x1D539, 0x2102, 0x1D53B, 0x1D53C, 0x1D53D, 0x1D53E, 0x210D, 0x1D540, 0x1D541, 0x1D542, 0x1D543, 0x1D544, 0x2115, 0x1D546, 0x2119, 0x211A, 0x211D, 0x1D54A, 0x1D54B, 0x1D54C, 0x1D54D, 0x1D54E, 0x1D54F, 0x1D550, 0x2124, 0x1D552, 0x1D553, 0x1D554, 0x1D555, 0x1D556, 0x1D557, 0x1D558, 0x1D559, 0x1D55A, 0x1D55B, 0x1D55C, 0x1D55D, 0x1D55E, 0x1D55F, 0x1D560, 0x1D561, 0x1D562, 0x1D563, 0x1D564, 0x1D565, 0x1D566, 0x1D567, 0x1D568, 0x1D569, 0x1D56A, 0x1D56B, 0x1D7D8, 0x1D7D9, 0x1D7DA, 0x1D7DB, 0x1D7DC, 0x1D7DD, 0x1D7DE, 0x1D7DF, 0x1D7E0, 0x1D7E1];
var tableSquared = [0x1F130, 0x1F130, 0x0030, 0x0031]; //No lowercase, default numbers
var tableSquaredNegative = [0x1F170, 0x1F170, 0x0030, 0x0031]; //No lowercase, default numbers
var tableSansSerif = [0x1D5A0, 0x1D5BA, 0x1D7E2, 0x1D7E3];
var tableSansSerifBold = [0x1D5D4, 0x1D5EE, 0x1D7EC, 0x1D7ED];
var tableSansSerifBoldItalic = [0x1D63C, 0x1D656, 0x0030, 0x0031]; //Default numbers
var tableSansSerifItalic = [0x1D608, 0x1D622, 0x0030, 0x0031]; //Default numbers
var tableMonospace = [0x1D670, 0x1D68A, 0x1D7F6, 0x1D7F7];
var tableUpsideDown = [0x2200, 0xA4ED, 0x03FD, 0x15E1, 0x018E, 0x15B5, 0x2141, 0x0048, 0x0049, 0x148B, 0xA4D8, 0x2142, 0xA7FD, 0x004E, 0x004F, 0x0500, 0xA779, 0xA4E4, 0x0053, 0xA4D5, 0x0548, 0x0245, 0x03FA, 0x0058, 0x2144, 0x005A, 0x0250, 0x0071, 0x0254, 0x0070, 0x01DD, 0x214E, 0x0183, 0x0265, 0x1D09, 0x027E, 0x029E, 0x0285, 0x026F, 0x0075, 0x006F, 0x0064, 0x0062, 0x0279, 0x0073, 0x0287, 0x006E, 0x028C, 0x028D, 0x0078, 0x028E, 0x007A, 0x0030, 0x21C2, 0x218A, 0x218B, 0x07E4, 0x0035, 0x0039, 0x1D613, 0x0038, 0x0036];
var tableParenthesized = [0x1F110, 0x249C, 0x0030, 0x2474]; //No uppercase, default 0
var tableSmallCaps = [0x1D00, 0x0299, 0x1D04, 0x1D05, 0x1D07, 0xA730, 0x0262, 0x029C, 0x026A, 0x1D0A, 0x1D0B, 0x029F, 0x1D0D, 0x0274, 0x1D0F, 0x1D18, 0x01EB, 0x0280, 0xA731, 0x1D1B, 0x1D1C, 0x1D20, 0x1D21, 0x1F1FD, 0x028F, 0x1D22, 0x1D00, 0x0299, 0x1D04, 0x1D05, 0x1D07, 0xA730, 0x0262, 0x029C, 0x026A, 0x1D0A, 0x1D0B, 0x029F, 0x1D0D, 0x0274, 0x1D0F, 0x1D18, 0x01EB, 0x0280, 0xA731, 0x1D1B, 0x1D1C, 0x1D20, 0x1D21, 0x1F1FD, 0x028F, 0x1D22, 0x0030, 0x0031, 0x0032, 0x0033, 0x0034, 0x0035, 0x0036, 0x0037, 0x0038, 0x0039]; //No lowercase, default numbers

var operations =
[
 [map, tableCircle],
 [map, tableCircleNegative],
 [map, tableSquared],
 [map, tableSquaredNegative],
 [mapEmoji, tableSquaredNegative],
 [map, tableFullwidth],
 [map, tableSmallCaps],
 [map, tableBold],
 [map, tableBoldItalic],
 [insertAfter, String.fromCharCode(0x0336)], //strikethrough
 [insertAfter, String.fromCharCode(0x0334)], //strikethrough waving
 [insertAfter, String.fromCharCode(0x0332)], //underline
 [mapReversed, tableUpsideDown],
 [map, tableSansSerif],
 [map, tableSansSerifBold],
 [map, tableSansSerifBoldItalic],
 [map, tableSansSerifItalic],
 [map, tableMonospace],
 [insertAfter, String.fromCharCode(0x0333)], //double underline
 [insertAfter, String.fromCharCode(0x0305)], //overline
 [insertAfter, String.fromCharCode(0x033F)], //double overline
 [insertAfter, String.fromCharCode(0x0337)], //slashed
 [insertAfter, String.fromCharCode(0x0338)], //slashed big
 [map, tableScriptBold],
 [map, tableFrakturBold],
 [map, tableDoubleStruck],
 [map, tableParenthesized],
 [insertBefore, String.fromCharCode(0x20DD)], //bubbles
 [insertBetween, String.fromCharCode(0x20E0)], //bubbles crossed
 [insertBetween, String.fromCharCode(0x20DE)], //boxed
 [insertBetween, String.fromCharCode(0x20DF)] //diamonds
];

function load()
{
 var style = document.getElementById("style");
 style.addEventListener("wheel", wheelEvent);
}

function wheelEvent(e)
{
 var style = document.getElementById("style");
 
 if(e.deltaY > 0)
 {
  style.selectedIndex = Math.min(style.length - 1, style.selectedIndex + 1);
 }
 else
 {
  style.selectedIndex = Math.max(0, style.selectedIndex - 1);
 }
 
 output();
}

function output()
{
 var style = document.getElementById("style");
 var operation = operations[style.selectedIndex];
 
 if(operation[1] instanceof Array && operation[1].length == 4)
 {
  convert(operation[0], expandTable(operation[1]));
 }
 else
 {
  convert(operation[0], operation[1]);
 }
}

function convert(func, param)
{
 var input = document.getElementById("input");
 var output = document.getElementById("output");
 output.value = func(input.value, param);
}

function expandTable(smallTable)
{
 var tableSizes = [26, 26, 1, 9];
 var table = new Array(62);
 var index = 0;
 
 for(x = 0; x < tableSizes.length; x++)
 {
  for(y = 0; y < tableSizes[x]; y++)
  {
   table[index + y] = smallTable[x] + y;
  }
  
  index += tableSizes[x];
 }
 
 return table;
}

function insertAfter(input, codePoint)
{
 var result = "";
 
 for(x = 0; x < input.length; x++)
 {
  result += input.charAt(x) + codePoint;
 }
 
 return result;
}

function insertBefore(input, codePoint)
{
 var result = "";
 
 for(x = 0; x < input.length; x++)
 {
  result += codePoint + input.charAt(x);
 }
 
 return result;
}

function insertBetween(input, codePoint)
{
 if(input.length < 2)
 {
  return input;
 }
 
 var result = input.charAt(0);
 
 for(x = 1; x < input.length; x++)
 {
  result += codePoint + input.charAt(x);
 }
 
 return result;
}

function mapReversed(input, table)
{
 var result = "";
 
 for(x = input.length - 1; x >= 0; x--)
 {
  result += mapCodePoint(input.codePointAt(x), table);
 }
 
 return result;
}

function map(input, table)
{
 var result = "";
 
 for(x = 0; x < input.length; x++)
 {
  result += mapCodePoint(input.codePointAt(x), table);
 }
 
 return result;
}
function copyText () {
    var text = document.getElementById('output');
    text.select();
    document.execCommand("copy");
    alert("Copied the text: " + text.value);
    event.preventDefault();
}

function mapEmoji(input, table)
{
 var result = "";
 var variationSelector16 = String.fromCodePoint(0xFE0F);
 
 for(x = 0; x < input.length; x++)
 {
  result += mapCodePoint(input.codePointAt(x), table) + variationSelector16;
 }
 
 return result;
}

function mapCodePoint(codePoint, table)
{
 var index = tableAscii.indexOf(codePoint);
 
 if(index >= 0)
 {
  return String.fromCodePoint(table[index]);
 }
 
 return String.fromCodePoint(codePoint);
}