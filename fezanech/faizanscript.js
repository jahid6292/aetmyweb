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
                                        "<img class='responsive' src='' alt=''>"+
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

                console.log(s[1][2]);
                for(var i=1;i<s.length;i++){
                      var target = document.querySelector('#stPanel');
                      var team =          "<div class='students'>"+
                                          "<h2>तलबा</h2>"+
                                          "<h2>"+s[i][2]+"</h2>"+
                                          "<p>"+s[i][4]+"</p>"+
                                          "<div class='content'>"+
                                          "<img class='responsive' src='images/comonavatar1.png' alt=''>"+
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

