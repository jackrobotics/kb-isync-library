Blockly.Blocks['isync_init_wifi_secure'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("iSYNC ESP32 WiFi Secure Init")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("iSYNC Begin and Connect WiFi");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['isync_http_get'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("iSYNC HTTP GET");
        this.appendValueInput("isync_key")
            .appendField("KEY: ");
        this.appendValueInput("isync_auth")
            .appendField("AUTH: ");
        this.setInputsInline(false);
        this.setOutput(true, ["String","msg"]);
        this.setColour(270);
        this.setTooltip("iSYNC HTTP GET");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['isync_http_payload'] = {
    init: function() {
        this.appendValueInput("isync_key")
            .setCheck(["String"])
            .appendField("iSYNC GET Payload ");
        this.setInputsInline(true);
        this.setOutput(true, ["String"]);
        this.setColour(270);
        this.setTooltip("iSYNC HTTP PAYLOAD");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['isync_http_post'] = {
    init: function() {
        this.appendValueInput("isync_payload")
            .appendField("iSYNC HTTP POST Payload ")
            .setCheck(["String"])
        this.appendValueInput("isync_key")
            .appendField("KEY: ");
        this.appendValueInput("isync_auth")
            .appendField("AUTH: ");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("iSYNC HTTP POST");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['honey_blynk_api_get'] = {
    init: function() {
        
        var DD = [];
        for(var i=0;i<256;i++)DD.push(["v"+i,"v"+i]);

        this.appendDummyInput()
            .appendField("HONEY BLYNK HTTP GET");
        this.appendValueInput("honey_blynk_token")
            .appendField("Token: ");
        this.appendDummyInput()
            .appendField("Data ")
            .appendField(new Blockly.FieldDropdown(DD), "DD");
        this.setInputsInline(true);
        this.setOutput(true, ["String","msg"]);
        this.setColour(270);
        this.setTooltip("HONEY BLYNK HTTP GET");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['honey_blynk_api_update'] = {
    init: function() {
        
        var DD = [];
        for(var i=0;i<256;i++)DD.push(["v"+i,"v"+i]);

        this.appendDummyInput()
            .appendField("HONEY BLYNK HTTP UPDATE");
        this.appendValueInput("honey_blynk_token")
            .appendField("Token: ");
        this.appendDummyInput()
            .appendField("Data ")
            .appendField(new Blockly.FieldDropdown(DD), "DD");
        this.appendValueInput("honey_blynk_value")
            .appendField("Value: ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("HONEY BLYNK HTTP UPDATE");
        this.setHelpUrl("");
    }
};

// Blockly.Blocks['honey_blynk_api_update'] = {
//     init: function() {
//         var DD = [];
//         for(var i=0;i<256;i++)DD.push(["v"+i,"v"+i]);

//         this.appendDummyInput()
//             .appendField("HONEY BLYNK HTTP UPDATE");
//         this.appendValueInput("honey_blynk_token")
//             .appendField("Token: ");
//         this.appendDummyInput()
//             .appendField("Update ")
//             .appendField(new Blockly.FieldDropdown(DD), "DD");
//         this.appendValueInput("honey_blynk_value")
//             .appendField("Value: ");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(270);
//         this.setTooltip("HONEY BLYNK HTTP UPDATE");
//         this.setHelpUrl("");
//     }
// };