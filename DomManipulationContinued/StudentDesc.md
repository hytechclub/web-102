# DOM Manipulation (Update HTML)

Learn how to update the HTML elements on a webpage using JavaScript.

<h2>Ice Cream Flavors</h2>
<ul id="itemList">
        <li>Chocolate</li>
        <li>Cookie Dough</li>
    </ul>

<button onclick="addItem()">Add Item</button>

<button onclick="Clear()">Clear All</button>

 <script>
        function addItem() {
            let newItem = document.createElement('li');
            newItem.textContent = prompt('What item would you like to add?');
            document.getElementById('itemList').appendChild(newItem);
        }
        function Clear() {
           let itemlist = document.getElementById('itemList');
           itemlist.innerhtml = "";
        }

    </script>

## PowerPoint Presentation

<iframe src='https://view.officeapps.live.com/op/embed.aspx?src=https://hylandtechclub.com/web-102/DomManipulationContinued/DomManipulationContinued.pptx' width='100%' height='450px' frameborder='0'></iframe>

## DOM Manipulation Guide: Update HTML

[Click here to for a guide on using JavaScript to update HTML elements.](DomManipulationUpdateHtml.md)

## Code-Along: Lyrics Builder

[Click here for the code-along instructions.](LyricsCodeAlong.md)

## Self-Paced Work: Background Changer

[Click here for the self-paced work instructions.](SelfPacedWork.md)

## Challenges

There are a couple different challenges:

- [Click here for the Shopping List challenge](Challenges/ShoppingListChallenge.md)
- [Click here for the Table Data challenge](Challenges/TableDataChallenge.md)

## Past Session Recording

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/NJYJDe5dbrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
