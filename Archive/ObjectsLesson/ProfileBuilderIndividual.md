# Profile Builder: Individual Exercises
Make some updates to the Profile Builder.

## Starting Info Changes
Update all of the starting information in the initial `profileInfo` object so that when the "Generate Profile" button is clicked the first time, all of the new information appears. The new information can be anything appropriate.

## Additional Property
Add a new "Phone" property that will store the phone number for the profile.

1. Add an `h3` label and a `p` paragraph to the HTML file for the new property
    - The `p` must have an `id` so it can be referenced in the JS
1. In the JS file, update the initial `profileInfo` object definition so it has the new property with a value of  "KL5-3226"
1. Update the `generateProfile` function so that it includes the new property

## More Object Property Updates
Add the ability for all object properties to update in the same way "Name" updates.

1. In the JS file, define a new function
    - The function should ask the user for the new value
    - It should then set the property value in the `profileInfo` object with the input
1. Add a `button` within the label header, and set its `onclick` to call the new function

## Check for enrollment
Often, profiles will have flags that determine the information available to a given user.

1. Update the `profileInfo` object so that it has a new boolean property: `IsEnrolled`
1. In the body of the `generateProfile` function, check the value of the `IsEnrolled` property
    - If it is `true`, update the information in the HTML
    - If it is `false`, display a message saying "User is not enrolled"

## Update refresh
When a user updates one of the properties using an "Update" button, it should automatically re-generate the profile on the page. Accomplish this by calling the `generateProfile` function whenever an update occurs (e.g., within the `update` functions).