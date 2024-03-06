pipeline {
    agent any
    
    environment {
        PORTAINER_USERNAME = credentials('portainer-username')
        PORTAINER_PASSWORD = credentials('portainer-password')
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
                                 -d '{"Username":"${PORTAINER_USERNAME}", "Password":"${PORTAINER_PASSWORD}"}'
                        """
                    )
                    
                    // Process the authResponse as needed
                    echo "Auth response: ${authResponse}"
                }
            }
        }
    }
}
