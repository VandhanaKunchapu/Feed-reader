/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', ()=> {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url', ()=> {
           var i=0;
           while(i<allFeeds.length){


        expect(allFeeds[i]).toBeDefined();
        expect(allFeeds[i].url).not.toBe(0);
      i=i+1;}
      });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name', ()=> {

           for (var v of allFeeds) {
             expect(v.name).toBeTruthy()
           }
      //      var i=0;
      //      while(i<allFeeds.length){
      //   expect(i).toBeTruthy();
      // i=i+1;}
      });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', ()=> {
              /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('hidden menu', ()=> {
           expect($('body').hasClass('menu-hidden')).toBe(true);
            //expect($('.menu-hidden').is(':visible')).toBe(true);
          });
                  /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu open/close', ()=> {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        // it('menu close',()=>{
        //
        // });
});
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('Initial Entries',()=>{
       beforeEach(function (done) {
          loadFeed(0,()=> {
            done();
          });
       });

       it('present when LoadFeed is called',()=> {
           var checkForEntry = $('.feed .entry').length;
           expect($('.feed .entry').length).not.toBe(0);
       });
     });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         describe('New Feed Selection',()=>{
           let firstfeedselection;
           let secondfeedselection;

           beforeEach((done)=>{
             loadFeed(0, ()=>{
               firstfeedselection=$('.feed').html();
               loadFeed(1,()=>{
                 secondfeedselection=$('.feed').html();
                 done();
               });
      });
      });
         //
           it('change content done ',()=>{
             expect(firstfeedselection).not.toBe(secondfeedselection);
           })
         });
}());
