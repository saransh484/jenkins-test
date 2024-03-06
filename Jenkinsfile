pipeline {
    agent any

    stages {
        stage('portainer test') {
            steps {
                script {
                  withCredentials(
                    [usernamePassword(
                      credentialsId: 'Portainer',
                      usernameVariable: 'PORTAINER_USERNAME',
                      passwordVariable: 'PORTAINER_PASSWORD')
                    ]){
		    sh "curl -X POST https://13.232.34.46/api/auth -H 'Content-Type: application/json' --data-urlencode 'Username=$PORTAINER_USERNAME' --data-urlencode 'Password=$PORTAINER_PASSWORD'"
		    }
		    
                }
            }
        }

        stage('connection test') {
            steps {
                // Test steps
		echo 'connected'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy steps
                echo 'Deploying the application...'
            }
        }
    }
}
