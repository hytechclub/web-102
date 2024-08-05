# DOM Manipulation (Read from Input)
Learn how to use JavaScript to capture input from a webpage.

<style>
        .text {
            font-size: 12px;
        }
    </style>

<div class="text" id="text">
        This is some sample text. Press 1-9 to change its size. Press I or B to toggle italics or boldness respectively. 
    </div>
<script>
    let bold = false;
    let italics = false;
document.addEventListener('keydown', function(event) {
    if (event.key >= '1' && event.key <= '9') {
        const textSize = (event.key * 2)+10; 
        const textElement = document.getElementById('text');
        textElement.style.fontSize = textSize + 'px';
    }
if (event.key == 'b') {
    console.log('b');
        let fontweight;
        if (bold) {
            bold = false;
            fontweight = normal;
        }
        else {
             bold = true;
             fontweight = bold;
        }
        const textElement = document.getElementById('text');
        textElement.style.fontWeight = fontweight;
    }
    if (event.key == 'i') {
            console.log('i');
        let fontstyle;
        if (italics) {
            italics = false;
            fontstyle = normal;
        }
        else {
             italics = true;
             fontstyle = italic;
        }
        const textElement = document.getElementById('text');
        textElement.style.fontStyle = fontstyle;
    }
});

</script>

## Warm-Up Activity: Cotton Candy Inputs
[Click here for the CSS Refresher activity instructions.](WarmUp.md)

## PowerPoint Presentation
<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://hylandtechclub.com/web-102/DomManipulation/DomManipulationIntro.pptx' width='100%' height='450px' frameborder='0'></iframe>

## DOM Manipulation Guide: Read from Input
[Click here to for a guide on using JavaScript to read from HTML inputs.](DomManipulationReadFromInput.md)

## Code-Along: Mad Libs Redux
[Click here for the code-along instructions.](MadLibsCodeAlong.md)

## Self-Paced Work: Mad Libs Updates
[Click here for the self-paced work instructions.](SelfPacedWork.md)

## Challenges
[Click here for some additional challenges.](Challenges.md)

## Past Session Recording
[ShareBase Link](https://app.sharebase.com/#/document/10192850/share/3-eH--eEKVFvNS1Cj4LyCuzqJ1d3LM)
