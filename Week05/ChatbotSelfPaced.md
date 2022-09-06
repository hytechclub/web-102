# Self-Paced Work: Chatbot Updates
Update the chatbot to make it more robust.

## More Responses
There is always room for more responses to be added to the chatbot! Come up with some original ones, or use this list as a basis. Each new response should use a similar `if` statement structure:

```js
if (message === "MESSAGE") {
    alert("RESPONSE");
}
```

Add several responses to make the chatbot more lifelike.

| Message | Response |
|-|-|
| What's up? | Not much |
| How are you | I am fine |
| Sing a song | Mary had a little lamb |
| What is 1+1 | 1+1 is 2 |
| Tell me a joke | I'm against picketing, but I don't know how to show it. |
| Give me a quote | You miss 100% of the shots you take |

## An Else
Currently, the chatbot will not respond if the message is not in an `if` statement. There should be a catch-all response for any messages that are not properly handled. This is possible using an `else if` and `else` structure.

Read through [this page](https://www.w3schools.com/js/js_if_else.asp) for more information about how `else if` works. Here is an example:

```js
if (message === "Hello") {
    alert("hi");
} else if (message === "Goodbye") {
    alert("bye");
} else {
    alert("I do not understand your message.");
}
```

Update the existing `chat` function so that it can respond to other messages by saying "I do not understand your message."

## Challenges
After completing the self-paced work, take a look at the [challenges](Challenges.md).
