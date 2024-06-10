function rasidnosystem(){
        const captcha = document.querySelector(".captcha"),
        reloadBtn = document.querySelector(".reload-btn"),
        inputField = document.querySelector(".input-area input"),
        checkBtn = document.querySelector(".check-btn"),
        statusTxt = document.querySelector(".status-text");

        let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                           'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                           'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                           't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        function getCaptcha(){
        for (let i = 0; i < 6; i++) {
          let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
          captcha.innerText += ` ${randomCharacter}`;
        }
        }
        getCaptcha();
        reloadBtn.addEventListener("click", ()=>{
        removeContent();
        getCaptcha();
        });

        checkBtn.addEventListener("click", e =>{
        e.preventDefault();
        statusTxt.style.display = "block";
        let inputVal = inputField.value.split('').join(' ');
        if(inputVal == captcha.innerText){
        // trying status for recipt
            fetch('https://script.google.com/macros/s/AKfycbzOCHLWMIXYb9ulMICPQZFVc9YlRj7M1LCcMcr9Czv7-u8rNQadvFApyHWzEZTCaI8v/exec')
                        .then(res => res.json())
                        .then(data => {
                          var s = data.content;
                          // var d = s.slice(-5);
                          var recId = document.querySelector('#receiptno').value;
                          var recStatus = document.querySelector('#receiptstatus');

                          for(var i = 0; i < s.length; i++) {

                              if(s[i][1] == recId) {
                                  recStatus.innerHTML = '<h4>Your Receipt No.'+s[i][1]+' Amount is: <span style="color:green;">Rs.' +s[i][8]+'/-</span><h6 style="color:green;">आपके द्वारा कटवाई गई रसीद की राशि '+s[i][8]+'/- रूपये हैा</h6><h7 style="color:#5a76fd;">यदि राशि रूपये सही नही हो, तो इस नम्‍बर पर शिकायत दर्ज करावे हेल्‍प लाईन मोबाईल नं <span style="font-size:20px;">'+s[i][9]+'</span></h7></h4>';
                                  return true;
                              }
                          }
                          recStatus.innerHTML = '<h4>Your Receipt No: <span style="color:red;">'+recId+' is invalid.<h6 style="color:blue;">मेहरबानी करके आप अपना सही रसीद नं. इंद्राज करे</h6></span></h4>';
                        return false;

                });

          //end for trying recipt no status
          statusTxt.style.color = "#4db2ec";
          statusTxt.innerText = "Nice! Please Wait Your Reciept amount is retrive...";
          setTimeout(()=>{
            removeContent();
            getCaptcha();
          }, 2000);

        }else{
          statusTxt.style.color = "#ff0000";
          statusTxt.innerText = "Captcha not matched. Please try again!";
        }
        });
        function removeContent(){
        inputField.value = "";
        captcha.innerText = "";
        statusTxt.style.display = "none";
        }
}


function suchnaboard(){
        // Get the Comettee of Madarsa Details
        fetch('https://script.google.com/macros/s/AKfycbzyq6k07X1_sTy9sQ6VPhIzhYX6fZkV6Q0Fx6ZxD8AyHj7OCRghgGzDMxGUhvC4IaumTQ/exec')
            .then(res => res.json())
            .then(data => {
              var s = data.content;
              // var d = s.slice(-5);
              //console.log(s)
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
              // consoleText(['हिन्‍दी में','तमाम तलबाओं को इंतेजामिया कमेटी की जानिब से अस्‍सलामु अलैयकुम बाद सलाम कि आप सभी तलबाओं को सूचित किया जाता है कि हम समय समय पर आप सभी की परीक्षा आयोजित करवायेंगे जिसकी सूचना इस वेब साईट पर आपको दी जायेगी अत: आपको सूचित किया जाता है कि आप अपनी पढाई का रिविजन कर लेवे क्‍योकि परीक्षा की तिथि व रोल नम्‍बर आपको जल्‍द इस सूचना बोर्ड पर जारी कर दी जावेगीा'],'text',['white','white','pink','green']);
              consoleText(notice,'text',['white','white','pink','white']);
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
                        var repeation = s[7][1];
                         wainting = true;
                         window.setTimeout(function(){
                           x = repeation;
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

              //console.log(s);
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
      
      function studentsfulldetails(){
          // Get the Student full details of Madarsa fezane Chishtiya
          fetch('https://script.google.com/macros/s/AKfycbzgDXP3jPv4umoZ0qqx29D4akaCq9ADv1DEpYFdd4vTFCV3MwTMOC0O6sR0PdEy0eFK/exec')
              .then(res => res.json())
              .then(data => {
                var s = data.content;
                // var d = s.slice(-5);
                //console.log(s[1][1]);

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

 function googlechartofusers(){
          // Get the Student full details of Madarsa fezane Chishtiya
          fetch('https://script.google.com/macros/s/AKfycbwNFdOFHVsI_f3cRwb4Ha3AI--5bdILPCZvwsVZzEnxor2RMvQ1NsqfsM_HQSnpEW8pcg/exec')
              .then(res => res.json())
              .then(data => {
                var s = data.content;
                // var d = s.slice(-5);
                // console.log(s[1][5]);
                var totaltargetbudget = s[1][5];
                var totalavltbudget = s[1][4];
                var totalexpbudget = s[1][3];
                var totalfundrectbudget = s[1][2];

                  //google chart
                  const xValues = ["Require Budget of the Year, 2024", "Available Budget of the Year, 2024","Expenses of the Year, 2024", "Total Budget Recieve of the Year 2024"];
                  const yValues = [totaltargetbudget,totalavltbudget,totalexpbudget,totalfundrectbudget];
                  const barColors = ["gray", "green","red","orange"];
                  
                  new Chart("myChart", {
                    type: "bar",
                    data: {
                      labels: xValues,
                      datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                      }]
                    },
                    options: {
                      legend: {display: false},
                      title: {
                        display: true,
                        text: "Our Target Aim Budget of the Year 2024."
                      }
                    }
                  });
              
              });
      }


function jamaterazasagwarafounder(){
          // Get the Student full details of Madarsa fezane Chishtiya
          fetch('https://script.google.com/macros/s/AKfycbwfTangplqxQ9J35Up8uj-ovtCMz3rlvGFVEIEkL2_6g4Xh2YMYJywcLC2iUCRSl66jCg/exec')
              .then(res => res.json())
              .then(data => {
                var s = data.content;
                // var d = s.slice(-5);
                //console.log(s);

                for(var i=1;i<s.length;i++){
                      const e = new Date(s[i][3]).toDateString();
                      var target = document.querySelector('#stFullDetails');
                      var team =          "<div class='contentfulldetails'>"+
                                          "<table>"+
                                          "<tr>"+
                                          "<td>"+e+"</td>"+
                                          "<td>"+s[i][4]+"</td>"+
                                          "<td>"+s[i][0]+"</td>"+
                                          "<td>"+s[i][1]+"</td>"+
                                          "<td>"+s[i][2]+"</td>"+
                                          
                                          "</tr>"+
                                          "</table>"+
                                          "<div class='studentphoto'>"+
                                          "<h3>FOUNDER OF RAZA GROUP</h3>"+
                                          "</div>"+
                                          "</div>";
                    target.insertAdjacentHTML("beforeend", team);
                }
              });
      }
// this is user guest details of unding
function userfundingmonthwisedetails(){
          // Get the Student full details of Madarsa fezane Chishtiya
          fetch('https://script.google.com/macros/s/AKfycbwfTangplqxQ9J35Up8uj-ovtCMz3rlvGFVEIEkL2_6g4Xh2YMYJywcLC2iUCRSl66jCg/exec')
              .then(res => res.json())
              .then(data => {
                var s = data.content;
                // var d = s.slice(-5);
                //console.log(s);
                 var userid = '78692002';
                for(var i=1;i<s.length;i++){
                           var dbuserid = s[i][0];
                        if(userid==dbuserid){
                      const e = new Date(s[i][3]).toDateString();
                      var target = document.querySelector('#userdetrails');
                              var team =          '<table id="usersdatafunding">'+
                                                   '<tr>'+
                                                   '<td id="daterec">'+e+'</td>'+
                                                   '<td id="receiptno">'+s[i][4]+'</td>'+
                                                    '<td id="jmtamount">'+s[i][1]+'</td>'+
                                                    '<td id="recbypartycode">'+s[i][2]+'</td>'+
                                                   '</tr>'+
                                                      '</table>';
                                                  target.insertAdjacentHTML("beforeend", team);
                        }
                          return true;
                }
                      alert('Not authorise.');
                              // document.getElementById('preloader').style.display = 'none';
                              return false;
              });
      }



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

