# BEST DAY OF THE WEEK!

The main idea for this mini web app is to have fun mini-trolling your friends on Fridays. I'll eventually come up with a version that will work within the same app for Saturdays, but for now, we can play with the original.

Development goals:
- Mobile first web app
- Image upload via url
    - uploaded image becomes new background image?
    - "clear image" via button. JavaScript to reset app state like rudimentary tic-tac-toe app
- if mousedown, simple fireworks or confetti animation will play from the mouse and follow it by x/y coordinates.
    - If fireworks, spread in an even radius.
    - If confetti, follow arc slightly up, then disappear at bottom of page.
    - If both, consider using lightweight gif files.
- if mousedown, audio file plays "Rebecca Black - Friday"
    - not necessary to loop song. Song can end whenever the file is played through on click.
    - when mouse button is up, audio state resets to beginning.

Languages and Tools:
1. raw HTML
2. raw CSS
    - consider using Materialize or Bootstrap framework
3. raw JavaScript
    - relying on "mousedown" for audio and animation
    - Include JQuery CDN
    - AngularJS to allow image upload reloaded state
