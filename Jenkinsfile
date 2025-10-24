pipeline {
    agent any

    tools {
        nodejs 'nodejs'  // Must match exactly what you configured in Jenkins
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Build environment')
        string(name: 'STUDENT_NAME', defaultValue: 'Hamad Khan', description: 'Student name') // ⚠️ REPLACE WITH YOUR NAME
    }

    environment {
        APP_VERSION = "1.0.0"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo "Installing Node.js dependencies..."
                bat "npm install"
            }
        }

        stage('Build') {
            steps {
                echo "Building Calculator App v${APP_VERSION} on branch ${params.BRANCH_NAME}"
                echo "Built by: ${params.STUDENT_NAME}"
            }
        }

        stage('Unit Test') {
            when {
                expression { return params.BUILD_ENV == 'dev' }
            }
            steps {
                echo 'Running unit tests with Jest...'
                bat "npm test"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment of Node.js Calculator App...'
                echo "Deploying to ${params.BUILD_ENV} environment"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            // deleteDir()  // Uncomment if you want to clean workspace
        }
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
