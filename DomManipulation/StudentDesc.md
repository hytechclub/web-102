# DOM Manipulation (Read from Input)
Learn how to use JavaScript to capture input from a webpage.


<p id="myParagraph"><b>This is the original text.</b></p>
<button id="myButton"><b>Change Text</b></button>


<script>
    document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('myButton');
    const myParagraph = document.getElementById('myParagraph');

    myButton.addEventListener('click', () => {
        myParagraph.innerHTML = '<i>The text has been changed!</i>';
    });
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
