script = {
            execute : function()
            {
                while (input.hasNext())
                {
                    var data2 = input.next();
                    var new_data = {};

                    var keyArray = data2.keySet().toArray();
                    for( var index in keyArray) 
                        {
                            var key = keyArray[index];
                            new_data[key] = data2.get(key);
                        }
                    
                    new_data.firstLast = new_data.first + "-" + new_data.last;
                    new_data.firstLast2 = new_data.first + data2.get("last");
                    new_data.numberMath = new_data.counter.longValue() + 22;
                    new_data.numberMath2 = parseInt(new_data.counter) + 23;
                    new_data.dateMath = new_data.birthday.plusMonths(1).toString();
                    
                    new_data.mathType = typeof(new_data.counter);                        
                    new_data.dateType = typeof(new_data.birthday);
                    

                  function badFunction() 
                      {
                            
                       }

                   try
                      {
                            new_data.tryval = badFunction(new_data.birthday);
                        
                            new_data.tryBlock = "success";
                            output.write(new_data);
                      }
                    catch(err)
                      {
                            new_data.errMsg = err.message;
                            new_data.tryBlock = "failed";
                            error.write(new_data);
                      }
                     
                     



                      
                }
            }   
        };

var hook = new com.snaplogic.scripting.language.ScriptHook(script)