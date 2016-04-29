// Implemented based on this SO answer:
// http://stackoverflow.com/questions/2344496/how-can-i-print-out-all-possible-letter-combinations-a-given-phone-number-can-re

function phoneNumberCombinations(phoneNum){
	var map = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'},
  		res = [''];

  phoneNum.split('').forEach(function(digit){
    var pre = [];
    res.forEach(function(act){
      map[digit].split('').forEach(function(letter){
      	pre.push(act + letter);
      });
    });
    res = pre;
  });
  
  return res;
}

alert(phoneNumberCombinations('234'));
