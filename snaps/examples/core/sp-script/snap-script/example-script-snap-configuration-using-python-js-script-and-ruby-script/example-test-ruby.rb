class MyScript
    include com.snaplogic.scripting.language.ScriptHook
    attr_reader :log, :input, :output, :error
    def initialize(log, input, output, error)
        @log = log
        @input = input
        @output = output
        @error = error
        @array = [java.lang.Integer.valueOf(1), java.lang.Integer.valueOf(2)]
        
        
    end

    def execute()
  
  
  
        while input.hasNext()  do
          data = input.next()
        end
        
      
            data["firstLast2"] = data["first"] + data["last"]
            
            data["numberMath"] = data["counter"] + 22
            data["numberMath2"] = data["counter"] + 23
   data["dateMonthPlusOne"] = data["birthday"].plusMonths(1)
   


            begin
                data["mathTryCatch"] = data["counter"] + 33
                output.write(data)
            rescue Exception=>e
                data["errorMessage"] = e.message
                error.write(data)
            end
        


    end 
end


$hook = MyScript.new($log, $input, $output, $error)