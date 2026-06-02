from com.snaplogic.scripting.language import ScriptHook
from com.snaplogic.scripting.language.ScriptHook import *

class TransformScript(ScriptHook):
    def __init__(self, input, output, error, log):
        self.input = input
        self.output = output
        self.error = error
        self.log = log

    def execute(self):
        self.log.info("Executing Transform script")
        
        while self.input.hasNext():
            data = self.input.next()
            data["firstLast"] = "%s-%s" %(data["first"],data["last"])
            data["firstLast2"] = data["first"] + data["last"]
            
            data["numberMath"] = data["counter"].longValue() + 22
            data["numberMath2"] = data["counter"].intValue() + 23

            data["dateMonthPlusOne"] = data["birthday"].plusMonths(1)
            
            data["numberMathType"] = type(data["counter"])
            data["dateType"] = type(data["birthday"])
    
            

            try:
                data["mathTryCatch"] = data["counter2"].longValue() + 33
                self.output.write(data)
            except Exception as e:
                data["errorMessage"] = e.message
                self.error.write(data)
            
            
        self.log.info("Finished executing the Transform script") 
 
hook = TransformScript(input, output, error, log)