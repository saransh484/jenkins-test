pipeline {
    agent any
    
    environment {
        PORTAINER = credentials('Portainer')
    }
    
    stages {
        stage('Portainer Auth') {
            steps {
                script {
                    def authResponse = sh(
                        returnStdout: true,
                        script: """
                            curl -X POST \
                                 https://13.232.34.46/api/auth \
                                 -H 'Content-Type: application/json' \
                                 -d '{"Username":"$PORTAINER_USR", "Password":"$PORTAINER_PSW"}'
                        """
                    )
		    echo "Auth response: ${authResponse}"
                    def jsonResponse = readJSON text: authResponse
                    env.JWT_TOKEN = jsonResponse.jwt
		}
            }
        }
	stage("Getting Stack ID"){
		steps{
			script{
				def stackInfo = sh(
				returnStdout: true,
				script: """
					curl -X GET \
                         		https://13.232.34.46/api/stacks \
                         		-H 'Authorization: Bearer ${JWT_TOKEN}'
				"""
				)
				echo "${stackInfo}"
				def stacks = new groovy.json.JsonSlurper().parseText(stackInfo.getContent())
            
            			stacks.each { stack ->
              				if(stack.Name == "mystack") {
                			env.STK_ID = stack.Id
              				}
            			}
			}
		}
	}
	stage("Getting Stack Files"){
		steps{
			script{
				def stackInfo = sh(
				returnStdout: true,
				script: """
					curl -X GET \
                         		https://13.232.34.46/api/stacks/${STK_ID}/file \
                         		-H 'Authorization: Bearer ${JWT_TOKEN}'
				"""
	
			}
		}
	}
    }
}
