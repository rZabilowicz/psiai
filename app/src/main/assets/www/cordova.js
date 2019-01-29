   function httpGet() {
           cordova.plugin.http.get('https://google.com/', function(response) {
                    console.log(response.status);
                    document.getElementById("json").innerHTML = response.responseText;
                                        var respObjects = JSON.parse(response.responseText);
                                        console.log(respObjects);
                                        var txt = "<table class=\"table table-bordered table-responsive\">";
                                        for(var x in respObjects) {
                                            txt += "<tr><th scope=\"row\">" + x + "</th>";
                                            txt += "<th>" + respObjects[x].filename + "</th>";
                                            txt += "<th>" + respObjects[x].name + "</th>";
                                            txt += "<th>" + respObjects[x].description + "</th>";
                                            txt += "<th>" + respObjects[x].title + "</th>";
                                            txt += "<th>" + respObjects[x].type + "</th>";
                                            txt += "</tr>";
                                        }
                                        txt += "</table>"
                                        document.getElementById("list").innerHTML = txt;
                  }, function(response) {
                    console.error(response.error);
                  });
        }

