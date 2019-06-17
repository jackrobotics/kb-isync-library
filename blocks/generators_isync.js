Blockly.JavaScript['isync_init_wifi_secure'] = function (block) {
    var code = `
        #EXTINC#include <WiFiClientSecure.h>#END
        #EXTINC#include <iSYNC.h>#END
        #EXTINC#include <PubSubClient.h>#END
        #VARIABLEWiFiClientSecure clientSecure;#END
        #VARIABLEiSYNC iSYNC(clientSecure);#END
    `;
    return code;
};
Blockly.JavaScript['isync_http_get'] = function (block) {
    var isync_key = Blockly.JavaScript.valueToCode(block, 'isync_key', Blockly.JavaScript.ORDER_ATOMIC);
    var isync_auth = Blockly.JavaScript.valueToCode(block, 'isync_auth', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        iSYNC.HTTP_GET(${isync_key},${isync_auth})
    `;
    return [code,Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['isync_http_payload'] = function (block) {
    var isync_json = Blockly.JavaScript.valueToCode(block, 'isync_key', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        iSYNC.getPayload(${isync_json})
    `;
    return [code,Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['isync_http_post'] = function (block) {
    var isync_json = Blockly.JavaScript.valueToCode(block, 'isync_payload', Blockly.JavaScript.ORDER_ATOMIC);
    var isync_key = Blockly.JavaScript.valueToCode(block, 'isync_key', Blockly.JavaScript.ORDER_ATOMIC);
    var isync_auth = Blockly.JavaScript.valueToCode(block, 'isync_auth', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        iSYNC.HTTP_POST(${isync_key},${isync_auth},${isync_json});
    `;
    return code;
};

Blockly.JavaScript['honey_blynk_api_get'] = function (block) {
    var honey_blynk_token = Blockly.JavaScript.valueToCode(block, 'honey_blynk_token', Blockly.JavaScript.ORDER_ATOMIC);
    var DD = block.getFieldValue('DD');
    var code = `
        iSYNC.HONEY_BLYNK_GET(${honey_blynk_token},"${DD}")
    `;
    return [code,Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['honey_blynk_api_update'] = function (block) {
    var honey_blynk_token = Blockly.JavaScript.valueToCode(block, 'honey_blynk_token', Blockly.JavaScript.ORDER_ATOMIC);
    var DD = block.getFieldValue('DD');
    var honey_blynk_value = Blockly.JavaScript.valueToCode(block, 'honey_blynk_value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `iSYNC.HONEY_BLYNK_UPDATE(${honey_blynk_token},"${DD}",String(${honey_blynk_value}));`;
    return code;
};