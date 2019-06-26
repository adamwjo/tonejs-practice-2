//create a synth and connect it to the master output (your speakers)


//play a middle 'C' for the duration of an 8th note


document.addEventListener('DOMContentLoaded', () => {
    buttonHandler()
});

function buttonHandler() {
    document.getElementById('button').addEventListener('click', () => {
        var synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease('C4', 0.5, 0)
        synth.triggerAttackRelease('E4', 0.5, 1)
        synth.triggerAttackRelease('G4', 0.5, 2)
        synth.triggerAttackRelease('B4', 0.5, 3)
        Tone.stop()
    })
};
  
  
