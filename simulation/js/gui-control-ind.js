var clearOutputBoxes = function(){
    $('#output_cout_comp').css("background", "url('../../images/ckt_el/light_off.png') no-repeat");
    $('#output_sum_comp').css("background", "url('../../images/ckt_el/light_off.png') no-repeat");
};

var checkGroundVccConnections = function(){
    var vccOk = false;
    var gndOk = false;


    var vccGroundEndpoints = circuitController.getChipVccGroundConnections();
    console.log(vccGroundEndpoints.length);

    for (var i = 0; i < vccGroundEndpoints.length; i++){
        var sourceEndPoint = vccGroundEndpoints[i].endpoints[0].getParameter('channelName');
        var targetEndPoint = vccGroundEndpoints[i].endpoints[1].getParameter('channelName');
        if(((sourceEndPoint === 'VCC') && (targetEndPoint === 'r6')) || ((sourceEndPoint === 'r6') && (targetEndPoint === 'VCC')))// || ((sourceEndPoint === 'r1') && (targetEndPoint === 'c1'))){
        {    vccOk = true;
            console.log("VCC OK");
        }

        if(((sourceEndPoint === 'GND') && (targetEndPoint === 'r7')) || ((sourceEndPoint === 'r7') && (targetEndPoint === 'GND'))){
            gndOk = true;
            console.log("GND OK");
        }
        else if(((sourceEndPoint === 'c4') && (targetEndPoint === 'c5')) || ((sourceEndPoint === 'c5') && (targetEndPoint === 'c4'))){
            gndOk = true;
            console.log("GND OK");
        }
      
       
    }

    if(vccOk && gndOk)
        return true;
    return false;
};

$(document).ready(function() {
    circuitController.setJsPlumbInstance(jsPlumb);
    circuitController.initDefault();
    circuitController.setCircuitContainer('cktBody', 'cktBodyContainer');
    circuitController.makeDraggable($( "div.circuitElement" ));

    circuitController.addEndPointGV('cktBody','vcc_line_pt_1','r6','vcc_line','output','input',1,[0,0,0,1,57,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_2','r6','vcc_line','output','input',1,[0,0,0,1,72,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_3','r6','vcc_line','output','input',1,[0,0,0,1,85,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_4','r6','vcc_line','output','input',1,[0,0,0,1,98,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_5','r6','vcc_line','output','input',1,[0,0,0,1,111,25], 'red', true);


    circuitController.addEndPointGV('cktBody','vcc_line_pt_6','r6','vcc_line','output','input',1,[0,0,0,1,139,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_7','r6','vcc_line','output','input',1,[0,0,0,1,152,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_8','r6','vcc_line','output','input',1,[0,0,0,1,165,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_9','r6','vcc_line','output','input',1,[0,0,0,1,179,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_10','r6','vcc_line','output','input',1,[0,0,0,1,192,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_11','r6','vcc_line','output','input',1,[0,0,0,1,220,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_12','r6','vcc_line','output','input',1,[0,0,0,1,233,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_13','r6','vcc_line','output','input',1,[0,0,0,1,246,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_14','r6','vcc_line','output','input',1,[0,0,0,1,260,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_15','r6','vcc_line','output','input',1,[0,0,0,1,274,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_16','r6','vcc_line','output','input',1,[0,0,0,1,300,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_17','r6','vcc_line','output','input',1,[0,0,0,1,313,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_18','r6','vcc_line','output','input',1,[0,0,0,1,327,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_19','r6','vcc_line','output','input',1,[0,0,0,1,340,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_20','r6','vcc_line','output','input',1,[0,0,0,1,354,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_21','r6','vcc_line','output','input',1,[0,0,0,1,381,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_22','r6','vcc_line','output','input',1,[0,0,0,1,395,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_23','r6','vcc_line','output','input',1,[0,0,0,1,409,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_24','r6','vcc_line','output','input',1,[0,0,0,1,422,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_25','r6','vcc_line','output','input',1,[0,0,0,1,435,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_26','r6','vcc_line','output','input',1,[0,0,0,1,476,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_27','r6','vcc_line','output','input',1,[0,0,0,1,490,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_28','r6','vcc_line','output','input',1,[0,0,0,1,503,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_29','r6','vcc_line','output','input',1,[0,0,0,1,517,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_30','r6','vcc_line','output','input',1,[0,0,0,1,530,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_31','r6','vcc_line','output','input',1,[0,0,0,1,557,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_32','r6','vcc_line','output','input',1,[0,0,0,1,571,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_33','r6','vcc_line','output','input',1,[0,0,0,1,584,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_34','r6','vcc_line','output','input',1,[0,0,0,1,597,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_35','r6','vcc_line','output','input',1,[0,0,0,1,611,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_36','r6','vcc_line','output','input',1,[0,0,0,1,638,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_37','r6','vcc_line','output','input',1,[0,0,0,1,652,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_38','r6','vcc_line','output','input',1,[0,0,0,1,665,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_39','r6','vcc_line','output','input',1,[0,0,0,1,678,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_40','r6','vcc_line','output','input',1,[0,0,0,1,692,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_41','r6','vcc_line','output','input',1,[0,0,0,1,719,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_42','r6','vcc_line','output','input',1,[0,0,0,1,732,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_43','r6','vcc_line','output','input',1,[0,0,0,1,746,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_44','r6','vcc_line','output','input',1,[0,0,0,1,759,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_45','r6','vcc_line','output','input',1,[0,0,0,1,773,25], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_46','r6','vcc_line','output','input',1,[0,0,0,1,800,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_47','r6','vcc_line','output','input',1,[0,0,0,1,814,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_48','r6','vcc_line','output','input',1,[0,0,0,1,827,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_49','r6','vcc_line','output','input',1,[0,0,0,1,841,25], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_50','r6','vcc_line','output','input',1,[0,0,0,1,855,25], 'red', true);

    //----------------------------------------------------------------

    circuitController.addEndPointGV('cktBody','vcc_line_pt_51','r6','vcc_line','output','input',1,[0,0,0,1,57,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_52','r6','vcc_line','output','input',1,[0,0,0,1,72,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_53','r6','vcc_line','output','input',1,[0,0,0,1,85,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_54','r6','vcc_line','output','input',1,[0,0,0,1,98,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_55','r6','vcc_line','output','input',1,[0,0,0,1,111,38], 'red', true);


    circuitController.addEndPointGV('cktBody','vcc_line_pt_56','r6','vcc_line','output','input',1,[0,0,0,1,139,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_57','r6','vcc_line','output','input',1,[0,0,0,1,152,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_58','r6','vcc_line','output','input',1,[0,0,0,1,165,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_59','r6','vcc_line','output','input',1,[0,0,0,1,179,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_60','r6','vcc_line','output','input',1,[0,0,0,1,192,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_61','r6','vcc_line','output','input',1,[0,0,0,1,220,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_62','r6','vcc_line','output','input',1,[0,0,0,1,233,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_63','r6','vcc_line','output','input',1,[0,0,0,1,246,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_64','r6','vcc_line','output','input',1,[0,0,0,1,260,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_65','r6','vcc_line','output','input',1,[0,0,0,1,274,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_66','r6','vcc_line','output','input',1,[0,0,0,1,300,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_67','r6','vcc_line','output','input',1,[0,0,0,1,313,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_68','r6','vcc_line','output','input',1,[0,0,0,1,327,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_69','r6','vcc_line','output','input',1,[0,0,0,1,340,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_70','r6','vcc_line','output','input',1,[0,0,0,1,354,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_71','r6','vcc_line','output','input',1,[0,0,0,1,381,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_72','r6','vcc_line','output','input',1,[0,0,0,1,395,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_73','r6','vcc_line','output','input',1,[0,0,0,1,409,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_74','r6','vcc_line','output','input',1,[0,0,0,1,422,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_75','r6','vcc_line','output','input',1,[0,0,0,1,435,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_76','r6','vcc_line','output','input',1,[0,0,0,1,476,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_77','r6','vcc_line','output','input',1,[0,0,0,1,490,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_78','r6','vcc_line','output','input',1,[0,0,0,1,503,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_79','r6','vcc_line','output','input',1,[0,0,0,1,517,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_80','r6','vcc_line','output','input',1,[0,0,0,1,530,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_81','r6','vcc_line','output','input',1,[0,0,0,1,557,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_82','r6','vcc_line','output','input',1,[0,0,0,1,571,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_83','r6','vcc_line','output','input',1,[0,0,0,1,584,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_84','r6','vcc_line','output','input',1,[0,0,0,1,597,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_85','r6','vcc_line','output','input',1,[0,0,0,1,611,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_86','r6','vcc_line','output','input',1,[0,0,0,1,638,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_87','r6','vcc_line','output','input',1,[0,0,0,1,652,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_88','r6','vcc_line','output','input',1,[0,0,0,1,665,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_89','r6','vcc_line','output','input',1,[0,0,0,1,678,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_90','r6','vcc_line','output','input',1,[0,0,0,1,692,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_91','r6','vcc_line','output','input',1,[0,0,0,1,719,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_92','r6','vcc_line','output','input',1,[0,0,0,1,732,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_93','r6','vcc_line','output','input',1,[0,0,0,1,746,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_94','r6','vcc_line','output','input',1,[0,0,0,1,759,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_95','r6','vcc_line','output','input',1,[0,0,0,1,773,38], 'red', true);

    circuitController.addEndPointGV('cktBody','vcc_line_pt_96','r6','vcc_line','output','input',1,[0,0,0,1,800,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_97','r6','vcc_line','output','input',1,[0,0,0,1,814,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_98','r6','vcc_line','output','input',1,[0,0,0,1,827,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_99','r6','vcc_line','output','input',1,[0,0,0,1,841,38], 'red', true);
    circuitController.addEndPointGV('cktBody','vcc_line_pt_100','r6','vcc_line','output','input',1,[0,0,0,1,855,38], 'red', true);

    //----------------------------------------------------------------

    circuitController.addEndPointGV('cktBody','gnd_line_pt_1','r7','gnd_line','output','input',1,[0,0,0,-1,57,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_2','r7','gnd_line','output','input',1,[0,0,0,-1,72,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_3','r7','gnd_line','output','input',1,[0,0,0,-1,85,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_4','r7','gnd_line','output','input',1,[0,0,0,-1,98,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_5','r7','gnd_line','output','input',1,[0,0,0,-1,111,282], 'blue', true);


    circuitController.addEndPointGV('cktBody','gnd_line_pt_6','r7','gnd_line','output','input',1,[0,0,0,-1,139,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_7','r7','gnd_line','output','input',1,[0,0,0,-1,152,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_8','r7','gnd_line','output','input',1,[0,0,0,-1,165,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_9','r7','gnd_line','output','input',1,[0,0,0,-1,179,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_10','r7','gnd_line','output','input',1,[0,0,0,-1,192,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_11','r7','gnd_line','output','input',1,[0,0,0,-1,220,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_12','r7','gnd_line','output','input',1,[0,0,0,-1,233,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_13','r7','gnd_line','output','input',1,[0,0,0,-1,246,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_14','r7','gnd_line','output','input',1,[0,0,0,-1,260,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_15','r7','gnd_line','output','input',1,[0,0,0,-1,274,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_16','r7','gnd_line','output','input',1,[0,0,0,-1,300,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_17','r7','gnd_line','output','input',1,[0,0,0,-1,313,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_18','r7','gnd_line','output','input',1,[0,0,0,-1,327,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_19','r7','gnd_line','output','input',1,[0,0,0,-1,340,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_20','r7','gnd_line','output','input',1,[0,0,0,-1,354,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_21','r7','gnd_line','output','input',1,[0,0,0,-1,381,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_22','r7','gnd_line','output','input',1,[0,0,0,-1,395,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_23','r7','gnd_line','output','input',1,[0,0,0,-1,409,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_24','r7','gnd_line','output','input',1,[0,0,0,-1,422,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_25','r7','gnd_line','output','input',1,[0,0,0,-1,435,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_26','r7','gnd_line','output','input',1,[0,0,0,-1,476,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_27','r7','gnd_line','output','input',1,[0,0,0,-1,490,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_28','r7','gnd_line','output','input',1,[0,0,0,-1,503,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_29','r7','gnd_line','output','input',1,[0,0,0,-1,517,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_30','r7','gnd_line','output','input',1,[0,0,0,-1,530,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_31','r7','gnd_line','output','input',1,[0,0,0,-1,557,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_32','r7','gnd_line','output','input',1,[0,0,0,-1,571,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_33','r7','gnd_line','output','input',1,[0,0,0,-1,584,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_34','r7','gnd_line','output','input',1,[0,0,0,-1,597,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_35','r7','gnd_line','output','input',1,[0,0,0,-1,611,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_36','r7','gnd_line','output','input',1,[0,0,0,-1,638,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_37','r7','gnd_line','output','input',1,[0,0,0,-1,652,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_38','r7','gnd_line','output','input',1,[0,0,0,-1,665,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_39','r7','gnd_line','output','input',1,[0,0,0,-1,678,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_40','r7','gnd_line','output','input',1,[0,0,0,-1,692,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_41','r7','gnd_line','output','input',1,[0,0,0,-1,719,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_42','r7','gnd_line','output','input',1,[0,0,0,-1,732,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_43','r7','gnd_line','output','input',1,[0,0,0,-1,746,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_44','r7','gnd_line','output','input',1,[0,0,0,-1,759,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_45','r7','gnd_line','output','input',1,[0,0,0,-1,773,282], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_46','r7','gnd_line','output','input',1,[0,0,0,-1,800,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_47','r7','gnd_line','output','input',1,[0,0,0,-1,814,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_48','r7','gnd_line','output','input',1,[0,0,0,-1,827,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_49','r7','gnd_line','output','input',1,[0,0,0,-1,841,282], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_50','r7','gnd_line','output','input',1,[0,0,0,-1,855,282], 'blue', true);

    //----------------------------------------------------------------

    circuitController.addEndPointGV('cktBody','gnd_line_pt_51','r7','gnd_line','output','input',1,[0,0,0,-1,57,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_52','r7','gnd_line','output','input',1,[0,0,0,-1,72,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_53','r7','gnd_line','output','input',1,[0,0,0,-1,85,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_54','r7','gnd_line','output','input',1,[0,0,0,-1,98,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_55','r7','gnd_line','output','input',1,[0,0,0,-1,111,268], 'blue', true);


    circuitController.addEndPointGV('cktBody','gnd_line_pt_56','r7','gnd_line','output','input',1,[0,0,0,-1,139,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_57','r7','gnd_line','output','input',1,[0,0,0,-1,152,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_58','r7','gnd_line','output','input',1,[0,0,0,-1,165,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_59','r7','gnd_line','output','input',1,[0,0,0,-1,179,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_60','r7','gnd_line','output','input',1,[0,0,0,-1,192,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_61','r7','gnd_line','output','input',1,[0,0,0,-1,220,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_62','r7','gnd_line','output','input',1,[0,0,0,-1,233,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_63','r7','gnd_line','output','input',1,[0,0,0,-1,246,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_64','r7','gnd_line','output','input',1,[0,0,0,-1,260,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_65','r7','gnd_line','output','input',1,[0,0,0,-1,274,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_66','r7','gnd_line','output','input',1,[0,0,0,-1,300,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_67','r7','gnd_line','output','input',1,[0,0,0,-1,313,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_68','r7','gnd_line','output','input',1,[0,0,0,-1,327,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_69','r7','gnd_line','output','input',1,[0,0,0,-1,340,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_70','r7','gnd_line','output','input',1,[0,0,0,-1,354,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_71','r7','gnd_line','output','input',1,[0,0,0,-1,381,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_72','r7','gnd_line','output','input',1,[0,0,0,-1,395,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_73','r7','gnd_line','output','input',1,[0,0,0,-1,409,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_74','r7','gnd_line','output','input',1,[0,0,0,-1,422,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_75','r7','gnd_line','output','input',1,[0,0,0,-1,435,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_76','r7','gnd_line','output','input',1,[0,0,0,-1,476,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_77','r7','gnd_line','output','input',1,[0,0,0,-1,490,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_78','r7','gnd_line','output','input',1,[0,0,0,-1,503,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_79','r7','gnd_line','output','input',1,[0,0,0,-1,517,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_80','r7','gnd_line','output','input',1,[0,0,0,-1,530,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_81','r7','gnd_line','output','input',1,[0,0,0,-1,557,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_82','r7','gnd_line','output','input',1,[0,0,0,-1,571,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_83','r7','gnd_line','output','input',1,[0,0,0,-1,584,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_84','r7','gnd_line','output','input',1,[0,0,0,-1,597,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_85','r7','gnd_line','output','input',1,[0,0,0,-1,611,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_86','r7','gnd_line','output','input',1,[0,0,0,-1,638,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_87','r7','gnd_line','output','input',1,[0,0,0,-1,652,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_88','r7','gnd_line','output','input',1,[0,0,0,-1,665,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_89','r7','gnd_line','output','input',1,[0,0,0,-1,678,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_90','r7','gnd_line','output','input',1,[0,0,0,-1,692,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_91','r7','gnd_line','output','input',1,[0,0,0,-1,719,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_92','r7','gnd_line','output','input',1,[0,0,0,-1,732,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_93','r7','gnd_line','output','input',1,[0,0,0,-1,746,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_94','r7','gnd_line','output','input',1,[0,0,0,-1,759,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_95','r7','gnd_line','output','input',1,[0,0,0,-1,773,268], 'blue', true);

    circuitController.addEndPointGV('cktBody','gnd_line_pt_96','r7','gnd_line','output','input',1,[0,0,0,-1,800,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_97','r7','gnd_line','output','input',1,[0,0,0,-1,814,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_98','r7','gnd_line','output','input',1,[0,0,0,-1,827,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_99','r7','gnd_line','output','input',1,[0,0,0,-1,841,268], 'blue', true);
    circuitController.addEndPointGV('cktBody','gnd_line_pt_100','r7','gnd_line','output','input',1,[0,0,0,-1,855,268], 'blue', true);

    
    //-------------------------------------------------------------------------------------------------------------------------------
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_1','c18','ic_7404_comp_gr1','input','output',1,[0,1,0,1,8,11]);   //1
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_2','c18','ic_7404_comp_gr1','input','output',1,[0,1,0,1,8,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_3','c18','ic_7404_comp_gr1','input','output',1,[0,1,0,1,8,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_4','c18','ic_7404_comp_gr1','input','output',1,[0,1,0,1,8,51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_1','c19','ic_7404_comp_gr1','input','output',1,[0,1,0,1,20,11]); //2
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_2','c19','ic_7404_comp_gr1','input','output',1,[0,1,0,1,20,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_3','c19','ic_7404_comp_gr1','input','output',1,[0,1,0,1,20,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN1_4','c19','ic_7404_comp_gr1','input','output',1,[0,1,0,1,20,51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN2_1','c20','ic_7404_comp_gr1','output','input',-1,[0,1,0,1,34,11]);  //3
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN2_2','c20','ic_7404_comp_gr1','output','input',-1,[0,1,0,1,34,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN2_3','c20','ic_7404_comp_gr1','output','input',-1,[0,1,0,1,34,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN2_4','c20','ic_7404_comp_gr1','output','input',-1,[0,1,0,1,34,51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN3_1','c21','ic_7404_comp_gr2','input','output',1,[0,1,0,1,47,11]);  //4
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN3_2','c21','ic_7404_comp_gr2','input','output',1,[0,1,0,1,47,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN3_3','c21','ic_7404_comp_gr2','input','output',1,[0,1,0,1,47,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN3_4','c21','ic_7404_comp_gr2','input','output',1,[0,1,0,1,47,51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_1','c22','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,61,11]);  //5
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_2','c22','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,61,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_3','c22','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,61,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_4','c22','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,61,51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_1','c23','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,75,11]);  //6
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_2','c23','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,75,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_3','c23','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,75,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_4','c23','ic_7404_comp_gr2','input','output',-1,[0,1,0,1,75,51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN7_1','GND','ic_7404_comp_gr2','output','input',1,[0,1,0,1,88,11]);  //7
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN7_2','GND','ic_7404_comp_gr2','output','input',1,[0,1,0,1,88,25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN7_3','GND','ic_7404_comp_gr2','output','input',1,[0,1,0,1,88,38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN7_4','GND','ic_7404_comp_gr2','output','input',1,[0,1,0,1,88,51]);

    //circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_1','GND','ic_7404_comp_gr2','output','input',-1,[0,1,0,1,100,11]);
    //circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_2','GND','ic_7404_comp_gr2','output','input',-1,[0,1,0,1,100,25]);
    //circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_3','GND','ic_7404_comp_gr2','output','input',-1,[0,1,0,1,100,38]);
    //circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN4_4','GND','ic_7404_comp_gr2','output','input',-1,[0,1,0,1,100,51]);

    //up dotted portion for ic------//
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN14_1','VCC','vcc_grp','input','output',1,[0,0,0,-1,8,-11]);   //14
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN14_2','VCC','vcc_grp','input','output',1,[0,0,0,-1,8,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN14_3','VCC','vcc_grp','input','output',1,[0,0,0,-1,8,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN14_4','VCC','vcc_grp','input','output',1,[0,0,0,-1,8,-51]);


    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN13_1','r22','ic_7404_comp_gr3','input','output',1,[0,0,0,-1,20,-11]);  //13
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN13_2','r22','ic_7404_comp_gr3','input','output',1,[0,0,0,-1,20,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN13_3','r22','ic_7404_comp_gr3','input','output',1,[0,0,0,-1,20,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN13_4','r22','ic_7404_comp_gr3','input','output',1,[0,0,0,-1,20,-51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN12_1','r23','ic_7404_comp_gr3','input','output',-1,[0,0,0,-1,33,-11]);  //12
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN12_2','r23','ic_7404_comp_gr3','input','output',-1,[0,0,0,-1,33,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN12_3','r23','ic_7404_comp_gr3','input','output',-1,[0,0,0,-1,33,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN12_4','r23','ic_7404_comp_gr3','input','output',-1,[0,0,0,-1,33,-51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN11_1','r24','ic_7404_comp_gr4','input','output',1,[0,0,0,-1,47,-11]);   //11
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN11_2','r24','ic_7404_comp_gr4','input','output',1,[0,0,0,-1,47,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN11_3','r24','ic_7404_comp_gr4','input','output',1,[0,0,0,-1,47,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN11_4','r24','ic_7404_comp_gr4','input','output',1,[0,0,0,-1,47,-51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_1','r25','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,61,-11]);  //10
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_2','r25','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,61,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_3','r25','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,61,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_4','r25','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,61,-51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_1','r26','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,75,-11]); //9
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_2','r26','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,75,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_3','r26','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,75,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_4','r26','ic_7404_comp_gr4','output','input',-1,[0,0,0,-1,75,-51]);

    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_1','r27','ic_7404_comp_gr4','input','output',-1,[0,0,0,-1,88,-11]);  //8
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_2','r27','ic_7404_comp_gr4','input','output',-1,[0,0,0,-1,88,-25]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_3','r27','ic_7404_comp_gr4','input','output',-1,[0,0,0,-1,88,-38]);
    circuitController.addEndPoint('ic_7404_comp','ic_7404_comp_PIN10_4','r27','ic_7404_comp_gr4','input','output',-1,[0,0,0,-1,88,-51]); 

    
    //-------------------------------------------------------------------------------------------------------------------------------
    
    //----------------------------------------------------------------
    circuitController.addEndPoint('supply_comp','vcc_pin','r6','supply_comp_gr','output','input',-1,[0,0,0,1,40,58], true);
    circuitController.addEndPoint('supply_comp','gnd_pin','r7','supply_comp_gr','output','input',-1,[0,0,0,1,80,58], true);

    //---------------------------------------------------------------


    circuitController.addEndPoint('input1Container','IP_1','r3','input_a_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //b3 button 
    circuitController.addEndPoint('input2Container','IP_2','r2','input_b_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //b2 button
    circuitController.addEndPoint('input3Container','IP_3','r1','input_c_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //b1 button
    circuitController.addEndPoint('input4Container','IP_4','r0','input_d_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //b0 button
    
    circuitController.addEndPoint('input5Container','IP_5','r7','input_e_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //G3 button
    circuitController.addEndPoint('input6Container','IP_6','r6','input_e_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //G2 button
    circuitController.addEndPoint('input7Container','IP_7','r5','input_e_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //G1 button
    circuitController.addEndPoint('input8Container','IP_8','r4','input_e_comp_gr','output','input',-1,[0.5,1,0,1,0,-3], true);  //G0 button

    //circuitController.addEndPoint('output_sum_comp','output_cout_comp_PIN_Cout1','c16','output_cout_comp_gr','input','output',1,[0.5,1,0,1,0,-3], true);
	//----------------------------------------------Latest modified------------------------------------------------------------------->
	//circuitController.addEndPoint('output_sum_comp','output_cout_comp_PIN_Cout2','c17','output_cout_comp_gr','input','output',1,[0.5,1,0,1,40,-3], true);
	//circuitController.addEndPoint('output_sum_comp','output_cout_comp_PIN_Cout3','c18','output_cout_comp_gr','input','output',1,[0.5,1,0,1,80,-3], true);
    //-----------------------------------------------Latest modified ------------------------------------------------------------------>
    
    $('#startButton').click(function(e) {   
        clearOutputBoxes();
        e.preventDefault();
        var circuitInput = '';

        

        var input1 = $('#input1').is(":checked")? '1': '0';
        var input2 = $('#input2').is(":checked")? '1': '0';
        var input3 = $('#input3').is(":checked")? '1': '0';
        var input4 = $('#input4').is(":checked")? '1': '0';
        //var input5 = $('#input5').is(":checked")? '1': '0';
        //circuitInput = input1 + ',' + input2 +',0,1';

        //circuitInput = '0,0,'+ input2 + ',' + input1 +',0,0,0,0';

        //circuitInput = 'Dev1/port0/line18:20;3;1,0,0|Dev1/port0/line16:17;2;' + input1 + ',' + input2;

        

        circuitInput = encodeURIComponent(circuitInput);
        var allWires = circuitController.retrieveAllConnectionsForRunning();

        if(allWires.length == 0){
            alert('Please make some connections first.');
            return false;
        }

        if(!checkGroundVccConnections()){
            alert('Please make all Ground and Vcc connections.');
            return false;
        }
        

        /*$('#modDialog').html('<img src="../../images/ajax-loader.gif" width="128" height="15"><br/>Processing Input...');
        $("#modDialog").dialog( "open" );*/

        //var channelWiring = allWires.join(";");

        //channelWiring = encodeURIComponent(channelWiring);

        //document.write(channelWiring);

        //Sending AJAX request to the server
        /*var req = $.ajax({
            url : 'scripts/half_adder_lg.php',
            type: 'POST',
            data: ({ input: circuitInput, wiring: channelWiring}),
            dataType : "json",
            timeout : 55000,
            cache: false
        });*/

        

        //if something goes wrong
        /*req.fail(function(jqXHR, textStatus, errorThrown) {
            $('#modDialog').html('<p class="error">' + textStatus.toUpperCase() + ": " + errorThrown + '<br />Sorry, request could not be completed.' + '</p>');
            $("#modDialog").dialog( "open" );
        });*/

        if(input1==0 && input2==0 && input3==0 && input4==0){

            
            
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led0.png');

            return false;
        }
        else if(input1==0 && input2==0 && input3==0 && input4==1)
        {
            
               
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led1.png');
            
            return false;
        }
        //fixed statement no need to
        else if(input1==0 && input2==0 && input3==1 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led1.png');
            return false;
        }
        else if(input1 == 0 && input2==0 && input3==1 && input4==1)
        {
            
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led0.png');
            return false;
        }
        else if(input1==0 && input2==1 && input3==0 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led0.png');
           
            return false;
        }

        else if(input1==0 && input2==1 && input3==0 && input4==1)
        {
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led1.png'); 
           
            return false;
        }

        else if(input1==0 && input2==1 && input3==1 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led1.png');
           
            return false;
        }

        else if(input1==0 && input2==1 && input3==1 && input4==1)
        {
            $('img.indicator4').attr('src', 'images/led0.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led0.png');
           
            return false;
        }

        else if(input1==1 && input2==0 && input3==0 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led0.png'); 
           
            return false;
        }
  
        else if(input1==1 && input2==0 && input3==0 && input4==1)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led1.png');   
           
            return false;
        }

        else if(input1==1 && input2==0 && input3==1 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led1.png');   
           
            return false;
        }

        else if(input1==1 && input2==0 && input3==1 && input4==1)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led1.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led0.png');   
           
           
            return false;
        }

        else if(input1==1 && input2==1 && input3==0 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led0.png');  
           
            return false;
        }

        else if(input1==1 && input2==1 && input3==0 && input4==1)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led1.png');
            $('img.indicator3').attr('src', 'images/led1.png');   
           
            return false;
        }

        else if(input1==1 && input2==1 && input3==1 && input4==0)
        {
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led1.png');  
           
            return false;
        }

        else if(input1==1 && input2==1 && input3==1 && input4==1)
        {
            //alert(input1); alert(input2); alert(input3); alert(input4);
            $('img.indicator4').attr('src', 'images/led1.png');
            $('img.indicator1').attr('src', 'images/led0.png');
            $('img.indicator2').attr('src', 'images/led0.png');
            $('img.indicator3').attr('src', 'images/led0.png'); 
           
            return false;
        }

        else if(input1==0 && input2==0 && input3==0 && input4==0)
        {
            
           $('img.indicator4').attr('src', 'images/led0.png');
            return false;
        }

        else
        {
            $("#modDialog").dialog( "close" );
            //alert("Please connect currectly");
        }    


        return false;
    });

    

    $("#input1").button({
        icons: {
            primary: "custom-switch-icon"
        },
        text:false
    }).click(function(){
        if($('#input1').is(":checked")){
            $("#input1").button("option", {icons: {
                primary: "custom-switch-icon-on"
            }} );

            $(this).prev('img.indicator').attr('src', 'images/led1.png');
        } else{
            $("#input1").button("option", {icons: {
                primary: "custom-switch-icon"
            }} );

            $(this).prev('img.indicator').attr('src', 'images/led0.png');
        }
    });

    $("#input2").button({
        icons: {
            primary: "custom-switch-icon"
        },
        text:false
    }).click(function(){
            if($('#input2').is(":checked")){
                $("#input2").button("option", "icons", {
                    primary: "custom-switch-icon-on"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input2").button("option", "icons", {
                    primary: "custom-switch-icon"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });

    $("#input3").button({
        icons: {
            primary: "custom-switch-icon"
        },
        text:false
    }).click(function(){
            if($('#input3').is(":checked")){
                $("#input3").button("option", "icons", {
                    primary: "custom-switch-icon-on"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input3").button("option", "icons", {
                    primary: "custom-switch-icon"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });
    $("#input4").button({
        icons: {
            primary: "custom-switch-icon"
        },
        text:false
    }).click(function(){
            if($('#input4').is(":checked")){
                $("#input4").button("option", "icons", {
                    primary: "custom-switch-icon-on"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input4").button("option", "icons", {
                    primary: "custom-switch-icon"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });

    $("#input5").button({
        icons: {
            primary: "custom-switch-icon1"
        },
        text:false
    }).click(function(){
            if($('#input5').is(":checked")){
                $("#input5").button("option", "icons", {
                    primary: "custom-switch-icon-on1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input5").button("option", "icons", {
                    primary: "custom-switch-icon1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });

    $("#input6").button({
        icons: {
            primary: "custom-switch-icon1"
        },
        text:false
    }).click(function(){
            if($('#input6').is(":checked")){
                $("#input6").button("option", "icons", {
                    primary: "custom-switch-icon-on1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input6").button("option", "icons", {
                    primary: "custom-switch-icon1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });

    $("#input7").button({
        icons: {
            primary: "custom-switch-icon1"
        },
        text:false
    }).click(function(){
            if($('#input7').is(":checked")){
                $("#input7").button("option", "icons", {
                    primary: "custom-switch-icon-on1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input7").button("option", "icons", {
                    primary: "custom-switch-icon1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });

    $("#input8").button({
        icons: {
            primary: "custom-switch-icon1"
        },
        text:false
    }).click(function(){
            if($('#input8').is(":checked")){
                $("#input8").button("option", "icons", {
                    primary: "custom-switch-icon-on1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led1.png');
            } else{
                $("#input8").button("option", "icons", {
                    primary: "custom-switch-icon1"
                } );

                $(this).prev('img.indicator').attr('src', 'images/led0.png');
            }
        });


});

