# keep-clicking

Allows you to run a JS script which will continuously click on an interval.

To use:

- update `config` in `index.js`, in particular `getButton()`
- open JS console on page
- paste script and run

## usages

- clicker games
- dating apps (tinder, bumble)

## troubleshooting

- click isn't working
  > sometimes you'll need to select the parent element that has the click listener on it.
  > Start on the element you inspected and keep going up a level until it works
  > Might save some time to paste the `Copy JS path` snippet directly into `console` and appending it with `.click()` to see if that selector will work
