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
                    
                    // Process the authResponse as needed
                    echo "Auth response: ${authResponse}"
                }
            }
        }
    }
}
