/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str) {
    str = str.replace(/\s+/g, ' ');
    let arrStr = str.trim().split(' ')
    let ObjStr = {}
    for (let i = 0; i < arrStr.length; i++) {
      let item = arrStr[i].toLowerCase()
      if (ObjStr.hasOwnProperty(item)) {
        ObjStr[item] += 1
      }
      else {
        ObjStr[item] = 1
      }
    }
    return ObjStr;
  }
}

module.exports = Words;
