Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = 'img id="captured_image" src="'+data_uri+'"/>';
        });
    
    
    
    console.log('ml5 version:',ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Smxe2Sldt/model.json',modelloded)
    
    function modelloded() {
    console.log('model loded!');
    }
    
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is " + prediction_1;
        speak_data_1 = "And the second prediction is " + prediction_2;
        var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
        synth.speak(utterthis);
    }
    
    function check()
    {
        img=document.getElementById('captured image');
        classifier.classify(img, gotResult);
    }
    
    function gotresult(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_gesture_name").innerHTML = results[0].label;
            document.getElementById("result_gesture_name2").innerHTML = results[1].label; 
            speak();
            if(results[0].label == "super")
            {
                document.getElementById("update_gesture").innerHTML="&#128079;";
            }
            if(results[0].label == "hi")
    
            {
                document.getElementById("update_gesture").innerHTML="&#128400; ";
            } 
    
            if(results[0].label == "super")
    
            {
                document.getElementById("update_gesture2").innerHTML="&#128076; ";
            } 
    
    
            if(results[1].label == "super")
            {
                document.getElementById("update_gesture2").innerHTML="&#128079;";
            }
            if(results[1].label == "hi")
    
            {
                document.getElementById("update_gesture2").innerHTML="&#128400; ";
            } 
    
            if(results[1].label == "super")
    
            {
                document.getElementById("update_gesture2").innerHTML="&#128076; ";
            } 
        }
    }