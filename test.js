var assert = require('assert');
console.log('Hello World');

$browser.get('http://example.com').then(function(){
  // Check the H1 title matches "Example Domain"
  return $browser.findElement($driver.By.css('h1')).then(function(element){
    return element.getText().then(function(text){
      assert.equal('Example Domain', text, 'Page H1 title did not match');
    });
  });
}).then(function(){
  // Check that the external link matches "https://www.iana.org/domains/example"
  return $browser.findElement($driver.By.css('div > p > a')).then(function(element){
    return element.getAttribute('href').then(function(link){
      assert.equal('https://www.iana.org/domains/example', link, 'More information link did not match');
    });
  });
});
