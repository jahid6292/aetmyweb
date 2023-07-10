function suchnaboard(){
        // Get the Comettee of Madarsa Details
        fetch('https://script.google.com/macros/s/AKfycbzCAGcyhKG46wZIPmVy4B-RzHy8k5Nb4uzF87Qe_F25117ImRcLaZPLlDCqvMhS-kw/exec')
            .then(res => res.json())
            .then(data => {
              var s = data.content;
              // var d = s.slice(-5);
              console.log(s)
              // const e = new Date(s[3][0]).toDateString();
              // new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}), // 'Wednesday, 14/06/2023, 13:43:57'
              // new Date().toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}), // 08/19/2020 (month and day with two digits)
              // new Date().toLocaleDateString('en-ZA'), // 2020/08/19 (year/month/day) notice the different locale
              // new Date().toLocaleDateString('en-CA'), // 2020-08-19 (year-month-day) notice the different locale
              // new Date().toLocaleString("en-US", {timeZone: "America/New_York"}), // 8/19/2020, 9:29:51 AM. (date and time in a specific timezone)
              // new Date().toLocaleString("en-US", {hour: '2-digit', hour12: false, timeZone: "America/New_York"}),  // 09 (just the hour)

              const e = new Date(s[3][0]).toLocaleDateString()

              var notice = s[1];
              var headmaster = document.getElementById('headmaster');
              var todaynoticedate = document.getElementById('noticedate');
              headmaster.innerText = s[2][1]+' ,'+s[3][1]+',';
              todaynoticedate.innerText = 'Date: '+e;
              // consoleText(['हिन्‍दी में','तमाम तलबाओं को इंतेजामिया कमेटी की जानिब से अस्‍सलामु अलैयकुम बाद सलाम कि आप सभी तलबाओं को सूचित किया जाता है कि हम समय समय पर आप सभी की परीक्षा आयोजित करवायेंगे जिसकी सूचना इस वेब साईट पर आपको दी जायेगी अत: आपको सूचित किया जाता है कि आप अपनी पढाई का रिविजन कर लेवे क्‍योकि परीक्षा की तिथि व रोल नम्‍बर आपको जल्‍द इस सूचना बोर्ड पर जारी कर दी जावेगीा'],'text',['yellow','white','pink','green']);
              consoleText(notice,'text',['green','yellow','pink','white']);
                  function consoleText(words, id, colors) {
                     if(colors === undefined) colors =['black'];
                     var visible = true;
                     var con = document.getElementById('console');
                     var letterCount = 1;
                     var x = 1;
                     var wainting = false;
                     var target = document.getElementById(id)
                     target.setAttribute('style','color:'+colors[0])
                     window.setInterval(function() {
                       if(letterCount === 0 && wainting=== false){
                         wainting = true;
                         target.innerHTML = words[0].substring(0, letterCount)
                         window.setTimeout(function(){
                           var usedcolor = colors.shift();
                           colors.push(usedcolor);
                           var usedword = words.shift();
                           words.push(usedword);
                           x = 1;
                           target.setAttribute('style','color:'+colors[0])
                           letterCount += x;
                           wainting = false;
                         },3000)
                       }
                       else if(letterCount === words[0].length + 1 && wainting === false )
                       {
                         wainting = true;
                         window.setTimeout(function(){
                           x = -1;
                           letterCount += x;
                           wainting = false;
                         }, 10)
                       }else if(wainting === false){
                         target.innerHTML = words[0].substring(0, letterCount)
                         letterCount += x;
                       }
                     }, 120)
                     window.setInterval(function(){
                        if(visible === true){
                          con.className = 'console-underscore hidden'
                          visible = true;
                        }else
                        {
                          con.className = 'console-underscore'
                          visible = true;
                        }
                     }, 400)
                  }
            });
            }

function comettemember(){
        // Get the Comettee of Madarsa Details
        fetch('https://script.google.com/macros/s/AKfycbz1IpoOqWdvhgvanI8_koPPtfRWmQ8GgrXS6OBbyTPSmHDyFW1NWXwkZtElj29feVUN/exec')
            .then(res => res.json())
            .then(data => {
              var s = data.content;
              // var d = s.slice(-5);

              console.log(s);
              for(var i=1;i<s.length;i++){
                    var target = document.querySelector('#ComPanel');
                    var team =          "<div class='students'>"+
                                        "<h3 id='memtitle'>"+s[i][4]+"</h3>"+
                                        "<img class='responsive' src='"+s[i][6]+"' alt=''>"+
                                        "<div class='content'>"+
                                        "<h2>"+s[i][2]+"</h2>"+
                                        "<p>"+s[i][5]+"</p>"+
                                        "</div>"+
                                        "</div>";
                  target.insertAdjacentHTML("beforeend", team);

              }

            });
      }
      function studentsdetails(){
          // Get the Student of Madarsa Details
          fetch('https://script.google.com/macros/s/AKfycbzgDXP3jPv4umoZ0qqx29D4akaCq9ADv1DEpYFdd4vTFCV3MwTMOC0O6sR0PdEy0eFK/exec')
              .then(res => res.json())
              .then(data => {
                var s = data.content;
                // var d = s.slice(-5);

                for(var i=1;i<s.length;i++){
                      var target = document.querySelector('#stPanel');
                      var team =          "<div class='students'>"+
                                          "<h2>तलबा</h2>"+
                                          "<h2>"+s[i][2]+"</h2>"+
                                          "<p>"+s[i][4]+"</p>"+
                                          "<div class='content'>"+
                                          "<img class='responsive' src='"+s[i][5]+"' alt=''>"+
                                          "</div>"+
                                          "</div>";
                    target.insertAdjacentHTML("beforeend", team);
                }
              });
      }
      studentsfulldetails();
      function studentsfulldetails(){
          // Get the Student full details of Madarsa fezane Chishtiya
          fetch('https://script.google.com/macros/s/AKfycbzgDXP3jPv4umoZ0qqx29D4akaCq9ADv1DEpYFdd4vTFCV3MwTMOC0O6sR0PdEy0eFK/exec')
              .then(res => res.json())
              .then(data => {
                var s = data.content;
                // var d = s.slice(-5);
                console.log(s[1][1]);

                for(var i=1;i<s.length;i++){
                      const e = new Date(s[i][1]).toDateString();
                      var target = document.querySelector('#stFullDetails');
                      var team =          "<div class='contentfulldetails'>"+
                                          "<table>"+
                                          "<tr>"+
                                          "<td>"+e+"</td>"+
                                          "<td>"+s[i][0]+"</td>"+
                                          "<td>"+s[i][2]+"</td>"+
                                          "<td>"+s[i][3]+"</td>"+
                                          "</tr>"+
                                          "</table>"+
                                          "<div class='studentphoto'>"+
                                          "<h3>तालिब-ए-ईल्म, फैजाने चिश्चितिया मदरसा, चमनपुरा, डूंगरपुर</h3>"+
                                          "</div>"+
                                          "</div>";
                    target.insertAdjacentHTML("beforeend", team);
                }
              });
      }


        // Get the modal
        document.getElementById("loginadmin").addEventListener('click',function(e){
           e.preventDefault(); // Cancel the native event
           e.stopPropagation();// Don't bubble/capture the event any further
           loginfunction();
      });

        function loginfunction(){
            // Get the Student full details of Madarsa fezane Chishtiya
            fetch('https://script.google.com/macros/s/AKfycbyVRDHplOuA5Qpsc56erx5zcHsv193LjhWmNcstC-bxmD5kf3PrAJDcNKgVzA6_OOmM/exec')
                .then(res => res.json())
                .then(data => {
                  var s = data.content;
                  // var d = s.slice(-5);
                  var username = document.getElementById("uname").value;
                  var password = document.getElementById("passw").value;

                  var targetadminpanel = document.getElementById('admin');
                  var panSt = document.getElementById('panSt');

                  var dbuser = s[1][0];
                  var dbpasw = s[1][1];

                  if(username == dbuser && password == dbpasw){
                    console.log(s);
                    targetadminpanel.style.display = "block";
                    panSt.style.display = "none";
                    document.getElementById('id01').style.display = 'none';
                    document.getElementById('logout').style.display = 'block';
                    document.getElementById('login').style.display = 'none';

                  }else {
                    alert("Wrong Password Username"+username+password);
                  }


                });
        }
        var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        //media screen by javascript method
         var marques =  document.querySelector('#ComPanel');
         var stmarques = document.querySelector('#stPanel');
         var stfpanel = document.querySelector('.students-panel');


        function myFunction(x) {
          if (x.matches) { // If media query matches
            marques.setAttribute("direction", "up");
            marques.removeAttribute("behavior");
            stmarques.setAttribute("direction", "up");
            stfpanel.style.height ="400px";
            stfpanel.style.overflow = "scroll";
            stmarques.style.height ="800px";
          } else {
           return false;
          }
        }

        var x = window.matchMedia("(max-width: 720px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes

        document.getElementById('logout').style.display = 'none';

