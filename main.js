
var timeline = [];
var timeline2 = [];

// var shuffle = function (a) {
//     var j, x, i;
//     for (i = a.length; i; i--) {
//         j = Math.floor(Math.random() * i);
//         x = a[i - 1];
//         a[i - 1] = a[j];
//         a[j] = x;
//     }
// }

var makeid = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

var participantID = makeid() + 'iTi' + makeid()
var condition = function () {
    var cnd = Math.random();
    if (cnd < 0.5) {
        return 'intuitive'
    } else {
        return 'explicit'
    }
};

var condition_string = 'explicit';//condition();
var group = 'shuffled';
var turkInfo = jsPsych.turk.turkInfo();

jsPsych.data.addProperties({
    subject: participantID,
    condition: condition_string,
    group: group,
    workerId: turkInfo.workerId,
    assginementId: turkInfo.assignmentId,
    hitId: turkInfo.assignmentId
});

var condition_instructions = function () {
    if (condition_string == 'explicit') {
        return "<p>You will then be asked to type in your descriptions, one for each side.</p>";
    } else {
        return "";
    }
};

var continue_space = "<div class='right small'>(press SPACE to continue, or BACKSPACE to head back)</div>";

var hght = document.documentElement.clientHeight;

var welcome_block = {
    type: "text",
    cont_key: ' ',
    text: "Welcome to the experiment. Please maximize this window, then press SPACE to begin." +
    "<p>The experiment will not procede if this window is less than 740 pixels high or if this window is less than 90% your available screen height.</p>" +
    "<p>If the experiment doesn't begin when you hit SPACE but you have maximized this window, then your screen may be too small, or you may have too large a tool- or menu-bar taking up space. " +
    "If you're having trouble at this point, please just return the HIT.</p>"
};

var loop_node = {
    timeline: [welcome_block],
    loop_function: function () {
        var wdth = document.documentElement.clientWidth;
        var hght = document.documentElement.clientHeight;
        var availWdth = window.screen.availWidth;
        var availHght = window.screen.availHeight;
        console.log("heightratio:", hght / availHght);
        if (hght / availHght > 0.9 & hght > 740) {
            return false;
        } else {
            //console.log("true");
            return true;
        }
    }
};

timeline.push(loop_node)





var instructions = {
    type: "instructions",
    key_forward: ' ',
    key_backward: 8,
    pages: ["<p>In this experiment, you will see a series of puzzles of varying difficulty. " +
        "Each puzzle consists of two sets of six figures, six on the left and six on the right, like the following:</p>" +
        "<p>Each figure on the LEFT has something in common, something not shared with any figure on the right. " +
        "Similarly, each figure on the RIGHT has something in common, something not shared with any figure on the left. " +
        "Your job is to figure out how each side is different.</p>" +
        "<div class='bongard-image'><img src='img/example1.png'></img></div>" +
        continue_space,
    "<p>You might think that the answer is that the left-side has a yellow figure and the right-side does not, " +
    "but this is WRONG since it should apply to EVERY figure on the left-side " +
    "in a way that distinguishes it from EVERY figure on the right-side, and only one left-side figure is yellow.</p>" +
    "<p>The correct description for the left-side is that they are all triangles since every left-side figure is a triangle, and no right-side figure is. " +
    "If you said '3 sides' that would also be acceptable.</p>" +
    "<div class='bongard-image'><img src='img/example1.png'></img></div>" +
    continue_space,
    "<p>You might think that an appropriate description for the right-side is that they're all dotted lines. " +
    "However, since one of the left-side figures also has dotted lines, this is WRONG. " +
    "The correct answer is that the right-side figures are all quadrilaterals. " +
    "If you said '4 sides' that would also be acceptable." +
    "<p>Take a moment to look over these descriptions, so you're sure how they apply to the puzzle.</p>" +
    "<div class='bongard-image'><img src='img/example1.png'></img></div>" +
    continue_space,
    "<p>We'll show you a couple of trials. Each time look carefully at the puzzle and try work out how to describe each side.</p>" +
    "<p>When you think you've got the answer (i.e. a description of both the left- and the right-sides), just press SPACE.</p>" +
    "<p> </p>" +
    "<div class='bongard-image'><img src='img/example2.png'></img></div>" +
    continue_space,
    "<p>The answer is that the left-side figures have at least one small shape; the right-side figures have no small shapes.</p>" +
    "<p>When you've understood why that's correct, continue to the next example.</p>" +
    "<p> </p>" +
    "<div class='bongard-image'><img src='img/example2.png'></img></div>" +
    continue_space,
    "<p>Look carefully at the puzzle and try work out how to describe each side.</p>" +
    "<p>When you think you've got the answer (i.e. a description of both the left- and the right-sides), just press SPACE.</p>" +
    "<p> </p>" +
    "<div class='bongard-image'><img src='img/example3.png'></img></div>" +
    continue_space,
    "<p>The answer is that the left-side lines cross themselves; the right-side lines do not.</p>" +
    "<p>When you've understood why that's correct, press SPACE to for some final instructions.</p>" +
    "<p> </p>" +
    "<div class='bongard-image'><img src='img/example3.png'></img></div>" +
    continue_space,
    "<p>Ok, let's begin the experiment. You'll be shown the puzzle and when you think you have the answer (a description for both the left- and right-sides), press SPACE.</p>" +
    condition_instructions() +
    "<p>Then we will give you 4 new figures (like the 6 figures that make up each side) and you will have to choose if they belong with the left- or the right-side. " +
    "Even if you haven't found the answer at this point, you can make a guess. Try answer these as quickly as possible</p>" +
    "<p>Rest assured there are no trick questions. There is always a difference, even if you think they look similar. The trick is to find it!</p>" +
    "<p>You'll have up to two minutes to answer each (though most puzzles take a lot shorter!). If you haven't hit SPACE by then, the experiment will advance to the next task  .</p>" +
    "<div class='right small'>(press SPACE to begin the experiment, or BACKSPACE to head back)</div>"
    ]
};



timeline.push(instructions);
var blocks = ['source', 'switch', 'transfer'];
var questionNos = Array.apply(null, Array(5)).map(function (_, i) { return i; });

blocks.forEach(function (blockName) {
    questionNos = _.shuffle(questionNos);
    questionNos.forEach(function (questionNo, questionOrder) {

        var explanation = {
            type: 'survey-text',
            questions: ["<div class='block-center center-content'><img src='img/" + questionNo + "_" + blockName + ".png'></img></div>Give a rule describing the LEFT-side figures.", "Give a rule describing the RIGHT-side figures."],
            columns: [60, 60],
            data: {
                questionNo: questionNo,
                questionOrder: questionOrder,
                version: blockName,
                task: 'explain'
            },
            on_finish: function (trial_data) {
                jsPsych.data.addDataToLastTrial({
                    questionNo: questionNo,
                    questionOrder: questionOrder,
                    version: blockName,
                    task: 'explain'
                })
            }
        };

        var gotit = {
            type: 'single-stim',
            stimulus: 'img/' + questionNo + '_' + blockName + '.png',
            choices: [' '],
            prompt: 'Hit SPACE when you have the answer.',
            timing_response: 120000,
            data: {
                questionNo: questionNo,
                questionOrder: questionOrder,
                version: blockName,
                task: 'gotit'
            },
            on_finish: function (trial_data) {
                jsPsych.data.addDataToLastTrial({
                    questionNo: questionNo,
                    questionOrder: questionOrder,
                    version: blockName,
                    task: 'gotit'
                })
            }

        };

        var if_node = {
            timeline: [explanation],
            conditional_function: function () {
                var data = jsPsych.data.getLastTrialData();
                if (data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(' ') && condition_string == 'explicit') {
                    //console.log(condition_string);
                    return true;
                } else {
                    return false;
                }
            }
        };


        var testTimeLine = function () {

            var testprompt1 = "Does the following figure belong on the left or the right? Press 'f' for left; 'j' for right.<br><div class='small'>Answer as quick as you can!</div><br><div class='test-image center-content'><img src='img/test_";
            var testprompt2 = ".png'></img></div>";
            var testArray = [];
            var testNos = Array.apply(null, Array(4)).map(function (_, i) { return i; });
            testNos = _.shuffle(testNos);
            testNos.forEach(function (testNo, testOrder) {
                testArray.push({
                    prompt: testprompt1 + questionNo + "_" + blockName + "_" + testNo + testprompt2,
                    stimulus: 'img/' + questionNo + '_' + blockName + '.png',
                    data: {
                        questionNo: questionNo,
                        questionOrder: questionOrder,
                        version: blockName,
                        testNo: testNo,
                        testOrder: testOrder,
                        task: 'test'
                    },
                    on_finish: function (trial_data) {
                        // var body = document.body,
                        // html = document.documentElement;
                        // var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
                        // console.log(height);
                        var correct = 0;
                        if (trial_data.key_press == 70 && testNo <= 1) { //f = 70, j = 74
                            correct = 1;
                        } else if (trial_data.key_press == 74 && testNo >= 2) {
                            correct = 1;
                        };
                        jsPsych.data.addDataToLastTrial({
                            correct: correct
                        });
                    }
                    //add data
                })
            });
            return testArray;
        }

        var test = {
            type: 'single-stim',
            choices: ['f', 'j'],
            timeline: testTimeLine()
        };

        var trial = {
            timeline: [gotit, if_node, test]//,if_node]
        };

        timeline2.push(trial);
        //console.log("setup done")

    })
})


var timelineShuffled = jsPsych.randomization.repeat(timeline2, 1);
timelineShuffled.forEach(function (trial) {
    timeline.push(trial)
})

var endmessage = "Thank you for participating! Your completion code is " +
    participantID +
    ". Copy and paste this in MTurk to get paid. If you have any questions or comments, please email jsulik@wisc.edu."

function saveData(filename, filedata) {
    $.ajax({
        type: 'post',
        cache: false,
        url: 'bongarddata.php', // this is the path to the above PHP script
        data: {
            filename: filename,
            filedata: filedata
        }
    });
}

//setupBlocks();

jsPsych.init({
    default_iti: 0,
    timeline: timeline,
    on_finish: function (data) {
        jsPsych.endExperiment(endmessage);
        saveData(participantID + ".csv", jsPsych.data.dataAsCSV())
    }
});