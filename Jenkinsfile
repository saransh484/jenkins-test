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
                    ])
		    
                }
            }
        }

        stage('connection test') {
            steps {
                // Test steps
		sh 'http POST https://13.232.34.46/api/auth Username="$PORTAINER_USERNAME" Password="$PORTAINER_PASSWORD"'
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
