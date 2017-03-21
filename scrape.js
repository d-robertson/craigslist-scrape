casper.test.begin('grab location content from craigslist', 2, function suite(test){
  //set up console messages
  casper.on('remote.message', function(msg){
    this.echo('remote.msg: ', + msg, 'INFO');
  });

  casper.on('page.error', function(pageErr){
    this.echo('page.err: ' + JSON.stringify(pageErr), 'ERROR');
  });
  var cities = [];
  var states = [];
  casper.start('https://www.craigslist.org/about/sites#US', function(){
    test.assertExists('div[class="box box_1"]', 'On craigslist main US site');
    test.assertExists('a[href="https://auburn.craigslist.org/"]', 'found first (A) tag');
    // console.log(this);
    // this.evaluate(function(){
    //   cities = document.querySelectorAll("li");
    //   states = document.querySelectorAll("h4").innerHTML;
    // });
  });

  // console.log(typeof(cities));

  casper.thenEvaluate(function(){
    lis = document.querySelectorAll('div[class="box"]');
    cities = document.querySelectorAll("li");
    states = document.querySelectorAll("h4").innerHTML;
    console.log('cities: ', cities, 'states: ', states);
    console.log('lis: ', lis);
  });
  // casper.then(function(){
  //   this.evaluate(function(){
  //     document.querySelector('a[href="https://auburn.craigslist.org/"]').click();
  //   });
  // });

  // casper.then(function(){
  //   this.wait(3000, function(){
  //     console.log("screen shot");
  //     this.capture('test.png');
  //   });
  // });

  casper.run(function(){
    test.done();
  });
});
