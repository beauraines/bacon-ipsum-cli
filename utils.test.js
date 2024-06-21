/* eslint-disable jest/no-disabled-tests */
import { buildQueryString, getBacon, processOutput } from "./utils.js";
import copyPaste  from "copy-paste";
import debugClient from 'debug'
const debug = debugClient('utils-tests');



describe('utilities', () => {

  const apiUrl = 'https://baconipsum.com/api/';

  test('should return multiple paragraphs', () => {
    const paragraphs = 2;
    const output = `Turkey flank meatball, ham t-bone pancetta ham hock drumstick beef boudin ground round short loin pig buffalo.  Flank pork pork loin chislic spare ribs.  Pork loin tenderloin kevin, bresaola picanha ham hock shoulder shank venison rump.  Shankle short loin fatback venison salami.  Capicola short ribs landjaeger, beef ribs shankle bacon meatloaf sirloin frankfurter venison chicken ham hock burgdoggen chuck.  Burgdoggen tri-tip salami beef shoulder boudin flank andouille pancetta tongue fatback short ribs t-bone.
Tongue venison ham tri-tip.  Pig porchetta bacon, kielbasa pork chop spare ribs turducken landjaeger brisket.  Capicola chicken pancetta short ribs kevin tenderloin, alcatra fatback beef ribs.  Beef spare ribs sirloin fatback, rump burgdoggen doner ham beef ribs leberkas jowl shankle shank.`;
    let newLineCount = output.split(/\n/).length
    expect(newLineCount).toBe(paragraphs)
  });

  test('build a query string', () => {
    let argv = {}
    argv.type = "all-meat"
    expect(buildQueryString(argv)).toBe('type=all-meat')
    argv.paras=5
    expect(buildQueryString(argv)).toBe('paras=5&type=all-meat')
    argv['start-with-lorem'] = undefined
    expect(buildQueryString(argv)).toBe('paras=5&type=all-meat')
    argv['start-with-lorem'] = true
    expect(buildQueryString(argv)).toBe('paras=5&start-with-lorem=1&type=all-meat')
  });

});

describe("skip copy to clipboard", () => {
  test('skip copying to the clipboard',async () => {
    let bacon = ["bacon ipsum","turkey"]
    const noClip = true;
    await copyPaste.copy("foo")
    processOutput(bacon, {noClip: true});
    const newClipboardContents = await copyPaste.paste()
    expect(newClipboardContents).not.toBe("foo")
  });
});


describe("copy to clipboard", () => {
  test('processes output to clipboard',async () => {
    let bacon = ["bacon ipsum","turkey"]
    const noClip = undefined;
    await copyPaste.copy("")
    processOutput(bacon, {noClip});
    const newClipboardContents = await copyPaste.paste()
    expect(newClipboardContents).toBe("bacon ipsum\nturkey")
  });

});
